import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";
import { useState } from "react";

/**
 * A deliberately lightweight 3D scene. Instead of a heavy glitch-prone
 * "building tour" model, we render an abstract isometric cluster of
 * workspace blocks (think desks, floor-plates, towers) that drift gently
 * and parallax with scroll. This keeps it smooth on mobile and respects
 * prefers-reduced-motion.
 */

const BRASS = new THREE.Color("#C9A14A");
const NAVY = new THREE.Color("#14304F");
const NAVY_DEEP = new THREE.Color("#0B1726");
const PAPER = new THREE.Color("#E8ECF1");

interface BlockDef {
  position: [number, number, number];
  scale: [number, number, number];
  color: THREE.Color;
  floatSpeed: number;
  floatIntensity: number;
}

function generateBlocks(): BlockDef[] {
  // Deterministic PRNG (mulberry32) so the layout is stable.
  let seed = 0x6d2b79f5;
  const rand = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const palette = [NAVY, NAVY_DEEP, PAPER, BRASS];
  const defs: BlockDef[] = [];
  const grid = 5;
  for (let x = 0; x < grid; x++) {
    for (let z = 0; z < grid; z++) {
      if (rand() < 0.22) continue;
      const height = 0.4 + rand() * 2.6;
      const px = (x - (grid - 1) / 2) * 1.5;
      const pz = (z - (grid - 1) / 2) * 1.5;
      const isAccent = rand() < 0.14;
      defs.push({
        position: [px, height / 2 - 1.4, pz],
        scale: [0.85, height, 0.85],
        color: isAccent ? BRASS : palette[(x + z) % palette.length],
        floatSpeed: 0.6 + rand() * 0.8,
        floatIntensity: 0.25 + rand() * 0.4,
      });
    }
  }
  return defs;
}

// computed once at module load — pure & stable
const BLOCKS = generateBlocks();

function Block({ def, reduced }: { def: BlockDef; reduced: boolean }) {
  const mat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: def.color,
        roughness: def.color === BRASS ? 0.25 : 0.55,
        metalness: def.color === BRASS ? 0.85 : 0.15,
      }),
    [def.color],
  );

  const mesh = (
    <mesh castShadow receiveShadow material={mat} position={def.position} scale={def.scale}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );

  if (reduced) return mesh;

  return (
    <Float speed={def.floatSpeed} rotationIntensity={0.12} floatIntensity={def.floatIntensity}>
      {mesh}
    </Float>
  );
}

function SceneContent({ reduced, scrollRef }: { reduced: boolean; scrollRef: React.MutableRefObject<number> }) {
  const blocks = BLOCKS;
  const group = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    const scroll = scrollRef.current; // 0..1 ish
    const targetRotY = (reduced ? 0 : pointer.x * 0.18) + scroll * 0.9 - 0.45;
    const targetRotX = (reduced ? 0.32 : 0.32 + pointer.y * 0.06) + scroll * 0.12;
    // smooth toward target
    group.current.rotation.y += (targetRotY - group.current.rotation.y) * Math.min(1, delta * 2.4);
    group.current.rotation.x += (targetRotX - group.current.rotation.x) * Math.min(1, delta * 2.4);
    group.current.position.y = -scroll * 1.4;
  });

  return (
    <group ref={group} rotation={[0.32, -0.45, 0]}>
      {/* ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.45, 0]} receiveShadow>
        <planeGeometry args={[18, 18]} />
        <meshStandardMaterial color={NAVY_DEEP} roughness={0.9} metalness={0.1} />
      </mesh>
      {blocks.map((def, i) => (
        <Block key={i} def={def} reduced={reduced} />
      ))}
    </group>
  );
}

export function WorkspaceScene({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const reduced = useReducedMotion() ?? false;
  const [dpr, setDpr] = useState<[number, number]>([1, 1.6]);

  return (
    <Canvas
      shadows
      dpr={dpr}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [4.2, 2.6, 5.4], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
    >
      <PerformanceMonitor
        onDecline={() => setDpr([1, 1])}
        onIncline={() => setDpr([1, 1.6])}
      />
      <AdaptiveDpr pixelated={false} />
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={1.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 3, -4]} intensity={0.5} color={"#D4A847"} />
      <Suspense fallback={null}>
        <SceneContent reduced={reduced} scrollRef={scrollRef} />
        <Environment preset="city" />
      </Suspense>
      <fog attach="fog" args={["#0B1726", 9, 18]} />
    </Canvas>
  );
}

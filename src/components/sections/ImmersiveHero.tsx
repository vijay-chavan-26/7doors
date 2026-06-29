import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/lib/images";

const WorkspaceScene = lazy(() =>
  import("@/components/three/WorkspaceScene").then((m) => ({ default: m.WorkspaceScene })),
);

function supportsWebGL() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

export function ImmersiveHero() {
  const reduced = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef(0);
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // Only spin up WebGL on capable, non-reduced-motion, larger viewports.
    if (!reduced && !isMobile && supportsWebGL()) {
      // small delay so first paint isn't blocked by the canvas
      const t = setTimeout(() => setEnable3D(true), 350);
      return () => clearTimeout(t);
    }
  }, [reduced]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / total));
      scrollRef.current = progress;
    };
    const loop = () => {
      onScroll();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] overflow-hidden bg-navy-deep text-paper"
    >
      {/* 3D / fallback background */}
      <div className="absolute inset-0">
        {enable3D ? (
          <Suspense fallback={<HeroFallback />}>
            <WorkspaceScene scrollRef={scrollRef} />
          </Suspense>
        ) : (
          <HeroFallback />
        )}
        {/* readability gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
      </div>

      <Container className="relative flex min-h-[92vh] flex-col justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-4 py-1.5 text-xs font-medium tracking-wide text-paper/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brass-light" />
            Office space, coworking & commercial real estate
          </span>

          <h1 className="mt-7 font-display text-[2.5rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Walk into the
            <br />
            right space before
            <br />
            <span className="italic text-brass-light">you sign for it.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-paper/75 sm:text-lg">
            7 Doors helps businesses find, tour, and lease the right workspace across India
            — from a single coworking desk to a full managed campus. Browse live spaces, or
            tell us the brief and we'll open the doors worth walking through.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/spaces" size="lg" variant="secondary">
              Browse spaces
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" size="lg" variant="outline-light">
              <Play className="h-3.5 w-3.5" />
              Book a call
            </ButtonLink>
          </div>
        </motion.div>
      </Container>

      {/* scroll cue */}
      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-paper/30 p-1.5">
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: 8 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-brass-light"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}

function HeroFallback() {
  return (
    <div className="absolute inset-0">
      <img
        src={images.coworkOpenPlan(1800)}
        alt="A bright modern coworking floor with rows of desks"
        className="h-full w-full object-cover opacity-40"
        loading="eager"
      />
    </div>
  );
}

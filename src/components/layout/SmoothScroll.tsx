import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";

export function SmoothScroll() {
  const reduced = useReducedMotion() ?? false;

  useEffect(() => {
    if (reduced) return;
    // Only enable on devices that aren't touch-primary, to avoid fighting
    // native momentum scrolling on mobile.
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return null;
}

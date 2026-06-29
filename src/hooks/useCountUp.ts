import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Parses a stat string like "250+" or "18M+" into a numeric target and
 * a prefix/suffix so we can animate just the numeric portion.
 */
function parseStat(value: string) {
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value, isNumeric: false };
  const [, prefix, num, suffix] = match;
  return { prefix, target: parseFloat(num), suffix, isNumeric: true };
}

export function useCountUp(value: string, durationMs = 1400) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState<string>(value);
  const { prefix, target, suffix, isNumeric } = parseStat(value);

  useEffect(() => {
    if (!inView || !isNumeric) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync to the final value when motion is disabled
      setDisplay(value);
      return;
    }

    let start: number | null = null;
    const isInt = Number.isInteger(target);

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(`${prefix}${isInt ? Math.round(current) : current.toFixed(1)}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };

    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isNumeric]);

  return { ref, display: isNumeric ? display : value };
}

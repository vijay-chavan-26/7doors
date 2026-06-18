import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3 select-none", className)}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true">
        <rect
          x="3"
          y="2"
          width="26"
          height="28"
          rx="1.5"
          fill="none"
          stroke={light ? "#D4A847" : "#14304F"}
          strokeWidth="1.6"
        />
        <line
          x1="9.5"
          y1="2"
          x2="9.5"
          y2="30"
          stroke={light ? "#D4A847" : "#14304F"}
          strokeWidth="1.2"
          opacity="0.55"
        />
        <circle cx="13" cy="16" r="1.15" fill={light ? "#D4A847" : "#B6862C"} />
        <text
          x="20"
          y="21"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontSize="14"
          fontWeight="500"
          fill={light ? "#F7F8FA" : "#101826"}
        >
          7
        </text>
      </svg>
      <span
        className={cn(
          "font-display text-lg leading-none tracking-tight",
          light ? "text-paper" : "text-ink",
        )}
      >
        7&nbsp;Doors
      </span>
    </span>
  );
}

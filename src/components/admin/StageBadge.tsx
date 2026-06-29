import type { CandidateStage } from "@/types";
import { cn } from "@/lib/utils";

const styles: Record<CandidateStage, string> = {
  Applied: "bg-slate-100 text-slate-600",
  Screening: "bg-blue-50 text-blue-700",
  Interview: "bg-amber-50 text-amber-700",
  Offer: "bg-violet-50 text-violet-700",
  Hired: "bg-green-50 text-green-700",
  Rejected: "bg-red-50 text-red-600",
};

export function StageBadge({ stage }: { stage: CandidateStage }) {
  return (
    <span className={cn("shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium", styles[stage])}>
      {stage}
    </span>
  );
}

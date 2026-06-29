import { Link } from "react-router-dom";
import { TrendingUp, TrendingDown, ArrowRight, Plus } from "lucide-react";
import { Seo } from "@/lib/seo";
import { amenityIcon } from "@/lib/iconMap";
import { kpis, candidates, pipelineStages } from "@/data/hr";
import { coworkingSpaces } from "@/data/coworking";
import { StageBadge } from "@/components/admin/StageBadge";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
  const recent = [...candidates]
    .sort((a, b) => b.appliedOn.localeCompare(a.appliedOn))
    .slice(0, 5);

  const stageCounts = pipelineStages.map((s) => ({
    ...s,
    count: candidates.filter((c) => c.stage === s.stage).length,
  }));
  const maxCount = Math.max(...stageCounts.map((s) => s.count), 1);

  return (
    <>
      <Seo title="Admin Dashboard | 7 Doors" description="7 Doors internal admin dashboard." path="/admin" noindex />

      <div className="mb-8">
        <h1 className="font-display text-2xl text-ink">Good morning, team</h1>
        <p className="mt-1 text-sm text-slate">Here's what's happening across hiring and spaces today.</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((kpi) => {
          const Icon = amenityIcon(kpi.icon);
          const TrendIcon = kpi.trend === "down" ? TrendingDown : TrendingUp;
          const goodTrend = kpi.trend === "up" || (kpi.label.includes("time") && kpi.trend === "down");
          return (
            <div key={kpi.label} className="rounded-lg border border-line bg-paper p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-paper-deep text-navy">
                  <Icon className="h-4 w-4" />
                </span>
                <span
                  className={cn(
                    "flex items-center gap-1 text-xs font-medium",
                    goodTrend ? "text-green-600" : "text-red-500",
                  )}
                >
                  <TrendIcon className="h-3 w-3" />
                  {kpi.delta}
                </span>
              </div>
              <p className="mt-4 font-mono text-2xl font-medium text-ink">{kpi.value}</p>
              <p className="mt-1 text-xs text-slate">{kpi.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* recent candidates */}
        <div className="rounded-lg border border-line bg-paper">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <h2 className="font-display text-lg text-ink">Recent applicants</h2>
            <Link to="/admin/candidates" className="flex items-center gap-1 text-sm font-medium text-navy hover:text-brass-dim">
              View all
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-line">
            {recent.map((c) => (
              <Link
                key={c.id}
                to={`/admin/candidates/${c.id}`}
                className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-paper-deep/40"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-medium text-paper"
                  style={{ backgroundColor: c.avatarColor }}
                >
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">{c.name}</p>
                  <p className="truncate text-xs text-slate">{c.role}</p>
                </div>
                <StageBadge stage={c.stage} />
              </Link>
            ))}
          </div>
        </div>

        {/* pipeline */}
        <div className="rounded-lg border border-line bg-paper p-5">
          <h2 className="font-display text-lg text-ink">Hiring pipeline</h2>
          <div className="mt-5 space-y-4">
            {stageCounts.map((s) => (
              <div key={s.stage}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate">{s.label}</span>
                  <span className="font-mono font-medium text-ink">{s.count}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-paper-deep">
                  <div
                    className="h-full rounded-full bg-navy"
                    style={{ width: `${(s.count / maxCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* spaces summary */}
      <div className="mt-6 rounded-lg border border-line bg-paper">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-display text-lg text-ink">Listed spaces</h2>
          <Link
            to="/admin/spaces/new"
            className="flex items-center gap-1.5 rounded-md bg-navy px-3 py-1.5 text-xs font-medium text-paper hover:bg-navy-deep"
          >
            <Plus className="h-3.5 w-3.5" />
            Add space
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {coworkingSpaces.slice(0, 6).map((s) => (
            <div key={s.id} className="flex items-center gap-3 bg-paper p-4">
              <img src={s.images[0]} alt="" className="h-12 w-16 shrink-0 rounded-md object-cover" />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{s.name}</p>
                <p className="text-xs text-slate">
                  {s.locality} · ₹{s.pricePerSeat.toLocaleString("en-IN")}/seat
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

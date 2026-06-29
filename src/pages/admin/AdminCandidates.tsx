import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, LayoutGrid, List, Star, Plus } from "lucide-react";
import { Seo } from "@/lib/seo";
import { candidates as seedCandidates, pipelineStages } from "@/data/hr";
import type { Candidate, CandidateStage } from "@/types";
import { StageBadge } from "@/components/admin/StageBadge";
import { cn } from "@/lib/utils";

const allStages: (CandidateStage | "All")[] = [
  "All",
  "Applied",
  "Screening",
  "Interview",
  "Offer",
  "Hired",
  "Rejected",
];

export default function AdminCandidates() {
  const [list, setList] = useState<Candidate[]>(seedCandidates);
  const [query, setQuery] = useState("");
  const [stage, setStage] = useState<CandidateStage | "All">("All");
  const [view, setView] = useState<"table" | "board">("table");

  const filtered = useMemo(
    () =>
      list.filter((c) => {
        const matchQuery =
          !query ||
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.role.toLowerCase().includes(query.toLowerCase()) ||
          c.department.toLowerCase().includes(query.toLowerCase());
        const matchStage = stage === "All" || c.stage === stage;
        return matchQuery && matchStage;
      }),
    [list, query, stage],
  );

  const moveCandidate = (id: string, newStage: CandidateStage) => {
    setList((prev) => prev.map((c) => (c.id === id ? { ...c, stage: newStage } : c)));
  };

  return (
    <>
      <Seo title="Candidates | 7 Doors Admin" description="Candidate pipeline management." path="/admin/candidates" noindex />

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl text-ink">Candidates</h1>
          <p className="mt-1 text-sm text-slate">{filtered.length} of {list.length} candidates</p>
        </div>
        <button className="flex items-center justify-center gap-1.5 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-paper hover:bg-navy-deep">
          <Plus className="h-4 w-4" />
          Add candidate
        </button>
      </div>

      {/* toolbar */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-light" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, role, or team..."
            className="w-full rounded-md border border-line bg-paper py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-slate-light focus:border-brass focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
          {allStages.map((s) => (
            <button
              key={s}
              onClick={() => setStage(s)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                stage === s
                  ? "border-navy bg-navy text-paper"
                  : "border-line bg-paper text-slate hover:border-brass",
              )}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex shrink-0 rounded-md border border-line p-0.5">
          <button
            onClick={() => setView("table")}
            className={cn("rounded p-1.5", view === "table" ? "bg-navy text-paper" : "text-slate")}
            aria-label="Table view"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            onClick={() => setView("board")}
            className={cn("rounded p-1.5", view === "board" ? "bg-navy text-paper" : "text-slate")}
            aria-label="Board view"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </div>

      {view === "table" ? (
        <TableView candidates={filtered} />
      ) : (
        <BoardView candidates={filtered} onMove={moveCandidate} />
      )}
    </>
  );
}

function TableView({ candidates }: { candidates: Candidate[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-paper">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-line bg-paper-deep/40 text-xs uppercase tracking-wide text-slate">
            <tr>
              <th className="px-5 py-3 font-medium">Candidate</th>
              <th className="px-5 py-3 font-medium">Department</th>
              <th className="px-5 py-3 font-medium">Exp.</th>
              <th className="px-5 py-3 font-medium">Rating</th>
              <th className="px-5 py-3 font-medium">Stage</th>
              <th className="px-5 py-3 font-medium">Applied</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {candidates.map((c) => (
              <tr key={c.id} className="transition-colors hover:bg-paper-deep/30">
                <td className="px-5 py-3">
                  <Link to={`/admin/candidates/${c.id}`} className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-medium text-paper"
                      style={{ backgroundColor: c.avatarColor }}
                    >
                      {c.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="font-medium text-ink hover:text-brass-dim">{c.name}</p>
                      <p className="text-xs text-slate">{c.role}</p>
                    </div>
                  </Link>
                </td>
                <td className="px-5 py-3 text-slate">{c.department}</td>
                <td className="px-5 py-3 text-slate">{c.experience} yrs</td>
                <td className="px-5 py-3">
                  <span className="flex items-center gap-1 text-ink">
                    <Star className="h-3.5 w-3.5 fill-brass text-brass" />
                    {c.rating}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <StageBadge stage={c.stage} />
                </td>
                <td className="px-5 py-3 text-xs text-slate">
                  {new Date(c.appliedOn).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {candidates.length === 0 && (
        <p className="py-16 text-center text-sm text-slate">No candidates match your filters.</p>
      )}
    </div>
  );
}

function BoardView({
  candidates,
  onMove,
}: {
  candidates: Candidate[];
  onMove: (id: string, stage: CandidateStage) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {pipelineStages.map((col) => {
        const inStage = candidates.filter((c) => c.stage === col.stage);
        return (
          <div key={col.stage} className="rounded-lg border border-line bg-paper-deep/30 p-3">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate">{col.label}</span>
              <span className="rounded-full bg-paper px-2 py-0.5 text-[11px] font-medium text-slate">
                {inStage.length}
              </span>
            </div>
            <div className="space-y-2.5">
              {inStage.map((c) => (
                <div key={c.id} className="rounded-md border border-line bg-paper p-3">
                  <Link to={`/admin/candidates/${c.id}`} className="flex items-center gap-2.5">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-paper"
                      style={{ backgroundColor: c.avatarColor }}
                    >
                      {c.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-ink">{c.name}</p>
                      <p className="truncate text-[11px] text-slate">{c.department}</p>
                    </div>
                  </Link>
                  <select
                    value={c.stage}
                    onChange={(e) => onMove(c.id, e.target.value as CandidateStage)}
                    className="mt-2.5 w-full rounded border border-line bg-paper-deep/40 px-2 py-1 text-[11px] text-slate focus:border-brass focus:outline-none"
                    aria-label={`Move ${c.name}`}
                  >
                    {pipelineStages.map((s) => (
                      <option key={s.stage} value={s.stage}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              {inStage.length === 0 && (
                <p className="px-1 py-4 text-center text-xs text-slate-light">Empty</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

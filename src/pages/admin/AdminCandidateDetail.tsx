import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Star, Briefcase, Calendar, Tag } from "lucide-react";
import { Seo } from "@/lib/seo";
import { candidates, pipelineStages } from "@/data/hr";
import { StageBadge } from "@/components/admin/StageBadge";

export default function AdminCandidateDetail() {
  const { id } = useParams<{ id: string }>();
  const candidate = candidates.find((c) => c.id === id);

  if (!candidate) return <Navigate to="/admin/candidates" replace />;

  const stageIndex = pipelineStages.findIndex((s) => s.stage === candidate.stage);

  return (
    <>
      <Seo title={`${candidate.name} | 7 Doors Admin`} description="Candidate profile." path={`/admin/candidates/${candidate.id}`} noindex />

      <Link to="/admin/candidates" className="mb-6 inline-flex items-center gap-2 text-sm text-slate hover:text-brass-dim">
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to candidates
      </Link>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-6">
          {/* header card */}
          <div className="rounded-lg border border-line bg-paper p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-medium text-paper"
                style={{ backgroundColor: candidate.avatarColor }}
              >
                {candidate.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="font-display text-2xl text-ink">{candidate.name}</h1>
                  <StageBadge stage={candidate.stage} />
                </div>
                <p className="mt-1 text-sm text-slate">{candidate.role}</p>
              </div>
              <span className="flex items-center gap-1 rounded-md bg-paper-deep px-3 py-1.5 text-sm font-medium text-ink">
                <Star className="h-4 w-4 fill-brass text-brass" />
                {candidate.rating}
              </span>
            </div>
          </div>

          {/* pipeline progress */}
          <div className="rounded-lg border border-line bg-paper p-6">
            <h2 className="font-display text-lg text-ink">Pipeline</h2>
            <div className="mt-5 flex items-center">
              {pipelineStages.map((s, i) => (
                <div key={s.stage} className="flex flex-1 items-center last:flex-none">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${
                        i <= stageIndex ? "bg-navy text-paper" : "bg-paper-deep text-slate-light"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="mt-2 hidden text-[11px] text-slate sm:block">{s.label}</span>
                  </div>
                  {i < pipelineStages.length - 1 && (
                    <div className={`h-0.5 flex-1 ${i < stageIndex ? "bg-navy" : "bg-line"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* notes */}
          <div className="rounded-lg border border-line bg-paper p-6">
            <h2 className="font-display text-lg text-ink">Notes</h2>
            <textarea
              rows={4}
              placeholder="Add an interview note..."
              className="mt-4 w-full resize-none rounded-md border border-line bg-paper-deep/40 p-3 text-sm text-ink placeholder:text-slate-light focus:border-brass focus:outline-none"
            />
            <button className="mt-3 rounded-md bg-navy px-4 py-2 text-sm font-medium text-paper hover:bg-navy-deep">
              Save note
            </button>
          </div>
        </div>

        {/* sidebar */}
        <aside className="space-y-4">
          <div className="rounded-lg border border-line bg-paper p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate">Details</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <Detail icon={Mail} value={candidate.email} />
              <Detail icon={Phone} value={candidate.phone} />
              <Detail icon={MapPin} value={candidate.location} />
              <Detail icon={Briefcase} value={`${candidate.experience} years experience`} />
              <Detail icon={Tag} value={`Source: ${candidate.source}`} />
              <Detail
                icon={Calendar}
                value={`Applied ${new Date(candidate.appliedOn).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}`}
              />
            </ul>
          </div>
          <button className="w-full rounded-md bg-brass px-4 py-2.5 text-sm font-medium text-navy-deep hover:bg-brass-light">
            Schedule interview
          </button>
        </aside>
      </div>
    </>
  );
}

function Detail({ icon: Icon, value }: { icon: typeof Mail; value: string }) {
  return (
    <li className="flex items-start gap-2.5 text-slate">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brass-dim" />
      <span className="break-words text-ink/85">{value}</span>
    </li>
  );
}

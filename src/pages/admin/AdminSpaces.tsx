import { Link } from "react-router-dom";
import { Plus, Star, Pencil } from "lucide-react";
import { Seo } from "@/lib/seo";
import { coworkingSpaces } from "@/data/coworking";

export default function AdminSpaces() {
  return (
    <>
      <Seo title="Spaces | 7 Doors Admin" description="Manage listed spaces." path="/admin/spaces" noindex />

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl text-ink">Spaces</h1>
          <p className="mt-1 text-sm text-slate">{coworkingSpaces.length} listed spaces</p>
        </div>
        <Link
          to="/admin/spaces/new"
          className="flex items-center justify-center gap-1.5 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-paper hover:bg-navy-deep"
        >
          <Plus className="h-4 w-4" />
          Add space
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-line bg-paper">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="border-b border-line bg-paper-deep/40 text-xs uppercase tracking-wide text-slate">
              <tr>
                <th className="px-5 py-3 font-medium">Space</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Price</th>
                <th className="px-5 py-3 font-medium">Capacity</th>
                <th className="px-5 py-3 font-medium">Rating</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {coworkingSpaces.map((s) => (
                <tr key={s.id} className="transition-colors hover:bg-paper-deep/30">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img src={s.images[0]} alt="" className="h-10 w-14 shrink-0 rounded-md object-cover" />
                      <div>
                        <p className="font-medium text-ink">{s.name}</p>
                        <p className="text-xs text-slate">{s.locality}, {s.city}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-slate">{s.type}</td>
                  <td className="px-5 py-3 font-mono text-ink">₹{s.pricePerSeat.toLocaleString("en-IN")}</td>
                  <td className="px-5 py-3 text-slate">{s.capacity}</td>
                  <td className="px-5 py-3">
                    <span className="flex items-center gap-1 text-ink">
                      <Star className="h-3.5 w-3.5 fill-brass text-brass" />
                      {s.rating}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className="rounded-full bg-paper-deep px-2.5 py-1 text-[11px] font-medium text-slate">
                      {s.availability}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-slate hover:text-brass-dim" aria-label="Edit">
                      <Pencil className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

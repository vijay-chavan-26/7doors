import { Link } from "react-router-dom";
import { Star, MapPin, ArrowUpRight } from "lucide-react";
import type { CoworkingSpace } from "@/types";
import { amenityIcon } from "@/lib/iconMap";
import { cn } from "@/lib/utils";

const availabilityStyles: Record<CoworkingSpace["availability"], string> = {
  Available: "bg-green-50 text-green-700 border-green-200",
  "Filling Fast": "bg-amber-50 text-amber-700 border-amber-200",
  Waitlist: "bg-slate-100 text-slate-600 border-slate-200",
};

export function SpaceCard({ space }: { space: CoworkingSpace }) {
  return (
    <Link
      to={`/spaces/${space.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-paper transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(16,24,38,0.28)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={space.images[0]}
          alt={space.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <span
            className={cn(
              "rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm",
              availabilityStyles[space.availability],
            )}
          >
            {space.availability}
          </span>
          <span className="rounded-full bg-navy-deep/70 px-2.5 py-1 text-[11px] font-medium text-paper backdrop-blur-sm">
            {space.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg leading-tight text-ink">{space.name}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate">
              <MapPin className="h-3 w-3" />
              {space.locality}, {space.city}
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-md bg-paper-deep px-2 py-1 text-xs font-medium text-ink">
            <Star className="h-3 w-3 fill-brass text-brass" />
            {space.rating}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate line-clamp-2">{space.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {space.amenities.slice(0, 4).map((a) => {
            const Icon = amenityIcon(a);
            return (
              <span
                key={a}
                title={a}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-line text-slate"
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
            );
          })}
          {space.amenities.length > 4 && (
            <span className="flex h-7 items-center rounded-md border border-line px-2 text-[11px] text-slate">
              +{space.amenities.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
          <div>
            <p className="font-mono text-lg font-medium text-ink">
              ₹{space.pricePerSeat.toLocaleString("en-IN")}
            </p>
            <p className="text-[11px] text-slate">per seat / month</p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-navy transition-colors group-hover:text-brass-dim">
            View
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

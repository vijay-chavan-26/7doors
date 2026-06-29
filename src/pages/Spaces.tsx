import { useMemo, useState } from "react";
import { SlidersHorizontal, Plus } from "lucide-react";
import { Seo } from "@/lib/seo";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SpaceCard } from "@/components/sections/SpaceCard";
import { BookCall } from "@/components/sections/BookCall";
import { coworkingSpaces, allCities, allTypes } from "@/data/coworking";
import { cn } from "@/lib/utils";

export default function Spaces() {
  const [city, setCity] = useState<string>("All");
  const [type, setType] = useState<string>("All");

  const filtered = useMemo(
    () =>
      coworkingSpaces.filter(
        (s) => (city === "All" || s.city === city) && (type === "All" || s.type === type),
      ),
    [city, type],
  );

  return (
    <>
      <Seo
        title="Coworking & Office Spaces | Browse Live Listings | 7 Doors"
        description="Browse live coworking desks, private cabins, and managed offices across Bengaluru, Pune, and Hyderabad. Filter by city, type, and price, then book a tour with 7 Doors."
        path="/spaces"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Spaces", path: "/spaces" }]),
        ]}
      />

      <section className="bg-paper pt-14 pb-10 sm:pt-20">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Spaces"
              title="Find a workspace that fits"
              description="Live coworking and managed-office listings we currently represent. Shortlist what you like and book a tour in a tap."
            />
            <ButtonLink href="/admin/spaces/new" variant="ghost" className="self-start sm:self-auto">
              <Plus className="h-4 w-4" />
              List your space
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-lg border border-line bg-paper-deep/40 p-4 sm:flex-row sm:items-center">
            <span className="flex items-center gap-2 text-xs font-medium text-slate">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filter
            </span>
            <FilterRow label="City" value={city} options={["All", ...allCities]} onChange={setCity} />
            <FilterRow label="Type" value={type} options={["All", ...allTypes]} onChange={setType} />
            <span className="text-xs text-slate sm:ml-auto">
              {filtered.length} space{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-paper pb-20 sm:pb-28">
        <Container>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((space, i) => (
                <Reveal key={space.id} delay={(i % 3) * 0.06}>
                  <SpaceCard space={space} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-line py-20 text-center">
              <p className="text-slate">No spaces match those filters yet.</p>
              <button
                onClick={() => {
                  setCity("All");
                  setType("All");
                }}
                className="mt-3 text-sm font-medium text-navy hover:text-brass-dim"
              >
                Clear filters
              </button>
            </div>
          )}
        </Container>
      </section>

      <BookCall />
    </>
  );
}

function FilterRow({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
      <span className="shrink-0 text-xs text-slate-light">{label}:</span>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              value === opt
                ? "border-navy bg-navy text-paper"
                : "border-line bg-paper text-slate hover:border-brass hover:text-brass-dim",
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

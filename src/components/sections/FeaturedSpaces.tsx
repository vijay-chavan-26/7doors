import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SpaceCard } from "@/components/sections/SpaceCard";
import { coworkingSpaces } from "@/data/coworking";

export function FeaturedSpaces() {
  const featured = coworkingSpaces.filter((s) => s.featured).slice(0, 3);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Live spaces"
            title="Workspaces you can tour this week"
            description="A live selection of coworking floors and managed offices we currently represent. Browse, shortlist, and book a visit in a couple of taps."
          />
          <ButtonLink href="/spaces" variant="ghost" className="self-start sm:self-auto">
            View all spaces
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((space, i) => (
            <Reveal key={space.id} delay={(i % 3) * 0.08}>
              <SpaceCard space={space} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { CalendarCheck, Clock, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/lib/images";

const points = [
  { icon: Clock, title: "15-minute discovery call", body: "Tell us headcount, budget, and city. We'll know fast whether we can help." },
  { icon: MapPin, title: "A curated shortlist", body: "Not 40 listings — the three or four spaces actually worth your time." },
  { icon: CalendarCheck, title: "Tours on your schedule", body: "We line up back-to-back visits so you decide in days, not weeks." },
];

export function BookCall() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <img
        src={images.coworkBreakout(1600)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-deep" />

      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow text-brass-light">Talk to us</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-paper sm:text-4xl lg:text-[2.75rem]">
            Book a call. Walk through your shortlist. Sign once it's right.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-paper/75">
            Whether you need one desk or an entire floor, the fastest way to the right
            space is a short conversation. No pressure, no spam — just a clear sense of
            what's available and what it'll cost.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact" size="lg" variant="secondary">
              Book a call
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/spaces" size="lg" variant="outline-light">
              Browse spaces first
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="space-y-4">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  className="flex items-start gap-4 rounded-lg border border-paper/12 bg-paper/[0.04] p-5 backdrop-blur-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brass/15 text-brass-light">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-medium text-paper">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-paper/65">{p.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

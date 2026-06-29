import { ArrowRight, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function CtaBand() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="max-w-lg">
          <h2 className="font-display text-2xl leading-snug text-paper sm:text-3xl">
            Tell us the brief. We'll tell you which doors are worth opening.
          </h2>
          <p className="mt-3 text-sm text-paper/65 sm:text-base">
            One call is usually enough to know whether we're the right fit.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 sm:w-auto">
          <ButtonLink href="/contact" size="lg" variant="secondary" className="w-full sm:w-auto">
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <div className="flex flex-col gap-2 text-sm text-paper/70 sm:flex-row sm:gap-5">
            <a
              href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-paper"
            >
              <Phone className="h-3.5 w-3.5" />
              {siteConfig.phones[0]}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-paper">
              <Mail className="h-3.5 w-3.5" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Seo } from "@/lib/seo";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { jobOpenings } from "@/data/content";
import { siteConfig } from "@/data/siteConfig";

const culture = [
  {
    title: "Research before relationships",
    description: "Every advisor here is trained to read a market before they're trusted to read a client.",
  },
  {
    title: "Ownership across the deal",
    description: "You stay on a mandate from brief to handover, not just the parts that close fastest.",
  },
  {
    title: "Multi-city exposure, early",
    description: "Associates work on mandates across more than one city well before their second year.",
  },
];

export default function Careers() {
  return (
    <>
      <Seo
        title="Careers at 7 Doors | Join Our Real Estate Team"
        description="7 Doors is hiring across corporate, industrial, research, and land advisory roles in Bengaluru, Pune, and Hyderabad. See open roles and what it's like to work here."
        path="/careers"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }]),
        ]}
      />

      <section className="relative overflow-hidden bg-navy-deep py-20 sm:py-28">
        <img
          src={images.teamCollaboration(1600)}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/90 to-navy-deep/60" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Careers"
            title="Build a market read that takes years to fake."
            description="We hire people who'd rather understand a micro-market deeply than cover every listing shallowly."
            light
          />
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Why 7 Doors" title="What the work actually looks like" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {culture.map((item) => (
              <div key={item.title} className="rounded-sm border border-line p-7">
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-deep/50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Open roles" title="Current openings" />
          <div className="mt-10 divide-y divide-line border-t border-line">
            {jobOpenings.map((job) => (
              <div
                key={job.title}
                className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-display text-lg text-ink">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-slate">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <ButtonLink
                  href={`mailto:${siteConfig.email}?subject=Application: ${encodeURIComponent(job.title)}`}
                  variant="ghost"
                  size="sm"
                  className="self-start sm:self-auto"
                >
                  Apply
                  <ArrowRight className="h-3.5 w-3.5" />
                </ButtonLink>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate">
            Don't see the right fit?{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-navy hover:text-brass-dim">
              Write to us
            </a>{" "}
            with your profile anyway — we keep good resumes on file.
          </p>
        </Container>
      </section>
    </>
  );
}

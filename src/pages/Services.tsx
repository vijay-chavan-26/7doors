import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Seo } from "@/lib/seo";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBand } from "@/components/sections/CtaBand";
import { services } from "@/data/services";

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Office, Industrial, Residential, Retail & Land Advisory"
        description="From corporate office leasing to warehousing, residential, hospitality, retail, and land — explore the six asset classes 7 Doors advises on across India."
        path="/services"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
        ]}
      />

      <section className="bg-paper pt-14 pb-16 sm:pt-20 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="One consultancy, six specialist desks"
            description="Each asset class is handled by people who work in it daily — not generalists spread thin across every listing in the city."
          />
        </Container>
      </section>

      <section className="bg-paper pb-20 sm:pb-28">
        <Container className="space-y-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="door-panel group block overflow-hidden rounded-sm border border-line bg-paper"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[14rem_1fr] lg:grid-cols-[18rem_1fr]">
                  <div className="aspect-[16/10] overflow-hidden sm:aspect-auto sm:h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-xs text-brass-dim">Door {service.doorNumber}</span>
                        <Icon className="h-5 w-5 text-navy/70" />
                      </div>
                      <h2 className="mt-4 font-display text-xl text-ink sm:text-2xl">{service.title}</h2>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate sm:text-base">
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <p className="flex items-center gap-1.5 text-xs text-slate">
                        <MapPin className="h-3.5 w-3.5" />
                        {service.cities.slice(0, 4).join(", ")}
                        {service.cities.length > 4 && " +" + (service.cities.length - 4)}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors group-hover:text-brass-dim">
                        Learn more
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

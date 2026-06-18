import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";
import { Seo } from "@/lib/seo";
import { organizationJsonLd, serviceJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections/CtaBand";
import { getServiceBySlug, services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? "");

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        image={service.image}
        jsonLd={[
          organizationJsonLd(),
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <section className="relative overflow-hidden bg-navy-deep pt-14 pb-24 sm:pt-20 sm:pb-32">
        <img
          src={service.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <Container className="relative">
          <nav className="mb-6 flex items-center gap-2 text-xs text-paper/55" aria-label="Breadcrumb">
            <Link to="/services" className="hover:text-paper">
              Services
            </Link>
            <span>/</span>
            <span className="text-paper/80">{service.title}</span>
          </nav>
          <span className="font-mono text-xs text-brass-light">Door {service.doorNumber}</span>
          <h1 className="mt-4 max-w-2xl font-display text-3xl leading-[1.1] text-paper sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75">
            {service.shortDescription}
          </p>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div>
            {service.description.map((paragraph, i) => (
              <p key={i} className="mb-5 leading-relaxed text-slate">
                {paragraph}
              </p>
            ))}

            <h2 className="mt-10 font-display text-xl text-ink sm:text-2xl">What's included</h2>
            <ul className="mt-5 space-y-3">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-ink/85 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brass-dim" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-xl text-ink sm:text-2xl">Where we're active</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {service.cities.map((city) => (
                <span
                  key={city}
                  className="flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-xs text-slate"
                >
                  <MapPin className="h-3 w-3" />
                  {city}
                </span>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-sm border border-line bg-paper-deep/40 p-7">
              <Icon className="h-7 w-7 text-brass-dim" />
              <h3 className="mt-4 font-display text-lg text-ink">
                Have a {service.title.toLowerCase()} requirement?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Tell us your brief and we'll come back with a shortlist worth your time.
              </p>
              <ButtonLink href="/contact" className="mt-6 w-full">
                Enquire now
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <div className="mt-6 space-y-3 border-t border-line pt-5 text-sm text-slate">
                <a href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-ink">
                  <Phone className="h-4 w-4 text-brass-dim" />
                  {siteConfig.phones[0]}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-ink">
                  <Mail className="h-4 w-4 text-brass-dim" />
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-paper-deep/50 py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-xl text-ink sm:text-2xl">Other doors worth a look</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="door-panel block rounded-sm border border-line bg-paper p-6"
              >
                <span className="font-mono text-xs text-brass-dim">Door {s.doorNumber}</span>
                <h3 className="mt-3 font-display text-base text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate line-clamp-2">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

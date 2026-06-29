import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Star, MapPin, Users, ArrowRight, X, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { Seo } from "@/lib/seo";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { amenityIcon } from "@/lib/iconMap";
import { getSpaceById, coworkingSpaces } from "@/data/coworking";
import { siteConfig } from "@/data/siteConfig";

export default function SpaceDetail() {
  const { id } = useParams<{ id: string }>();
  const space = getSpaceById(id ?? "");
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!space) return <Navigate to="/spaces" replace />;

  const gallery = space.images;
  const others = coworkingSpaces.filter((s) => s.id !== space.id && s.city === space.city).slice(0, 3);

  const spaceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: space.name,
    description: space.description,
    image: space.images[0],
    brand: { "@type": "Organization", name: siteConfig.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: space.rating,
      reviewCount: space.reviews,
    },
    offers: {
      "@type": "Offer",
      price: space.pricePerSeat,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <Seo
        title={`${space.name} — ${space.locality}, ${space.city} | 7 Doors`}
        description={space.description}
        path={`/spaces/${space.id}`}
        image={space.images[0]}
        jsonLd={[
          organizationJsonLd(),
          spaceJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Spaces", path: "/spaces" },
            { name: space.name, path: `/spaces/${space.id}` },
          ]),
        ]}
      />

      {/* gallery */}
      <section className="bg-paper pt-6 sm:pt-10">
        <Container>
          <nav className="mb-5 flex items-center gap-2 text-xs text-slate" aria-label="Breadcrumb">
            <Link to="/spaces" className="hover:text-brass-dim">
              Spaces
            </Link>
            <span>/</span>
            <span className="text-ink/80">{space.name}</span>
          </nav>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:grid-rows-2">
            <button
              onClick={() => setLightbox(0)}
              className="group relative overflow-hidden rounded-lg sm:col-span-2 sm:row-span-2"
            >
              <img
                src={gallery[0]}
                alt={space.name}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-auto"
              />
            </button>
            {gallery.slice(1, 3).map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i + 1)}
                className="group relative overflow-hidden rounded-lg sm:col-span-2"
              >
                <img
                  src={img}
                  alt={`${space.name} view ${i + 2}`}
                  className="aspect-[16/10] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {i === 1 && gallery.length > 3 && (
                  <span className="absolute bottom-3 right-3 rounded-full bg-navy-deep/80 px-3 py-1 text-xs font-medium text-paper backdrop-blur-sm">
                    +{gallery.length} photos
                  </span>
                )}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* body */}
      <section className="bg-paper py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-paper-deep px-3 py-1 text-xs font-medium text-ink">{space.type}</span>
              <span className="flex items-center gap-1 text-sm text-slate">
                <Star className="h-3.5 w-3.5 fill-brass text-brass" />
                {space.rating} · {space.reviews} reviews
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">{space.name}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-slate">
              <MapPin className="h-4 w-4" />
              {space.locality}, {space.city}
            </p>

            <p className="mt-6 leading-relaxed text-slate">{space.description}</p>

            <div className="mt-8 flex flex-wrap gap-6 border-y border-line py-5">
              <Stat icon={Users} label="Capacity" value={`${space.capacity} seats`} />
              <Stat icon={MapPin} label="Location" value={space.locality} />
              <Stat icon={Star} label="Rating" value={`${space.rating} / 5`} />
            </div>

            <h2 className="mt-10 font-display text-xl text-ink sm:text-2xl">Amenities</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {space.amenities.map((a) => {
                const Icon = amenityIcon(a);
                return (
                  <div key={a} className="flex items-center gap-2.5 rounded-md border border-line px-3.5 py-2.5 text-sm text-ink/85">
                    <Icon className="h-4 w-4 shrink-0 text-brass-dim" />
                    {a}
                  </div>
                );
              })}
            </div>
          </div>

          {/* sticky booking card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-line bg-paper-deep/40 p-7">
              <p className="font-mono text-3xl font-medium text-ink">
                ₹{space.pricePerSeat.toLocaleString("en-IN")}
              </p>
              <p className="text-sm text-slate">per seat / month</p>

              <ButtonLink href="/contact" className="mt-6 w-full">
                Book a tour
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <a
                href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-sm border border-line py-3 text-sm font-medium text-ink transition-colors hover:border-brass hover:text-brass-dim"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phones[0]}
              </a>
              <p className="mt-4 text-center text-xs text-slate">
                No booking fee. We respond within one business day.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      {/* related */}
      {others.length > 0 && (
        <section className="bg-paper-deep/50 py-16 sm:py-20">
          <Container>
            <h2 className="font-display text-xl text-ink sm:text-2xl">More spaces in {space.city}</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {others.map((s) => (
                <Link
                  key={s.id}
                  to={`/spaces/${s.id}`}
                  className="group overflow-hidden rounded-lg border border-line bg-paper"
                >
                  <img
                    src={s.images[0]}
                    alt={s.name}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-base text-ink">{s.name}</h3>
                    <p className="mt-1 text-xs text-slate">{s.locality}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* lightbox */}
      {lightbox !== null && (
        <Lightbox
          images={gallery}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon className="h-5 w-5 text-brass-dim" />
      <div>
        <p className="text-[11px] uppercase tracking-wide text-slate-light">{label}</p>
        <p className="text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const prev = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/95 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 rounded-full border border-paper/30 p-2 text-paper hover:bg-paper/10"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous"
        className="absolute left-4 rounded-full border border-paper/30 p-2.5 text-paper hover:bg-paper/10 sm:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <img
        src={images[index]}
        alt={`View ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next"
        className="absolute right-4 rounded-full border border-paper/30 p-2.5 text-paper hover:bg-paper/10 sm:right-8"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-xs text-paper/70">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}

import { siteConfig } from "@/data/siteConfig";

// ---- Reusable JSON-LD builders (AEO: structured data answer engines parse directly) ----

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.domain,
  email: siteConfig.email,
  telephone: siteConfig.phones[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "HSR Layout",
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: "IN",
  },
  areaServed: siteConfig.cities.map((city) => ({ "@type": "City", name: city })),
  sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.domain}${item.path}`,
  })),
});

export const faqJsonLd = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const serviceJsonLd = (service: {
  title: string;
  metaDescription: string;
  slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: service.title,
  name: `${service.title} | ${siteConfig.name}`,
  description: service.metaDescription,
  provider: {
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    url: siteConfig.domain,
  },
  url: `${siteConfig.domain}/services/${service.slug}`,
  areaServed: siteConfig.cities.map((city) => ({ "@type": "City", name: city })),
});

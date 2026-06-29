import { Seo } from "@/lib/seo";
import { organizationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { ImmersiveHero } from "@/components/sections/ImmersiveHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FeaturedSpaces } from "@/components/sections/FeaturedSpaces";
import { VirtualTour } from "@/components/sections/VirtualTour";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookCall } from "@/components/sections/BookCall";
import { FaqSection } from "@/components/sections/FaqSection";
import { faqs } from "@/data/content";

export default function Home() {
  return (
    <>
      <Seo
        title="7 Doors | Office Space, Coworking & Commercial Real Estate in India"
        description="Find, tour, and lease the right workspace across India — from a single coworking desk to a full managed campus. Browse live spaces or book a call with 7 Doors."
        path="/"
        jsonLd={[organizationJsonLd(), faqJsonLd(faqs.slice(0, 4))]}
      />
      <ImmersiveHero />
      <TrustBar />
      <FeaturedSpaces />
      <VirtualTour />
      <ServicesGrid />
      <ProcessSteps />
      <StatsBand />
      <Testimonials />
      <BookCall />
      <FaqSection items={faqs.slice(0, 4)} />
    </>
  );
}

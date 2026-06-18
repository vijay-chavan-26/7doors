import { Seo } from "@/lib/seo";
import { organizationJsonLd, faqJsonLd } from "@/lib/jsonld";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { siteConfig } from "@/data/siteConfig";
import { faqs } from "@/data/content";

export default function Home() {
  return (
    <>
      <Seo
        title="7 Doors | Office Space & Commercial Real Estate Consultancy, India"
        description={siteConfig.description}
        path="/"
        jsonLd={[organizationJsonLd(), faqJsonLd(faqs.slice(0, 4))]}
      />
      <Hero />
      <TrustBar />
      <WhoWeAre />
      <ServicesGrid />
      <ProcessSteps />
      <StatsBand />
      <Testimonials />
      <InsightsPreview />
      <FaqSection items={faqs.slice(0, 4)} />
      <CtaBand />
    </>
  );
}

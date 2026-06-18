import { motion } from "framer-motion";
import { Target, ShieldCheck, Handshake, TrendingUp } from "lucide-react";
import { Seo } from "@/lib/seo";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatsBand } from "@/components/sections/StatsBand";
import { CtaBand } from "@/components/sections/CtaBand";
import { images } from "@/lib/images";

const principles = [
  {
    icon: Target,
    title: "Brief before buildings",
    description:
      "We don't show inventory until we understand headcount, budget, and the things that actually decide a move. That order rarely changes.",
  },
  {
    icon: Handshake,
    title: "Both sides of the table",
    description:
      "We represent tenants and landlords alike, which keeps our read on the market honest — we see where deals actually close, not just where they're listed.",
  },
  {
    icon: ShieldCheck,
    title: "Diligence, not just discovery",
    description:
      "Title checks, zoning, and lease structuring happen before signature, not after. It's slower up front and considerably cheaper in the long run.",
  },
  {
    icon: TrendingUp,
    title: "Aftercare, not just a deal",
    description:
      "We stay engaged through fit-out and the first months of occupancy, and again at renewal or exit. The relationship outlasts the transaction.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About 7 Doors | Real Estate Consultancy, India"
        description="7 Doors is a full-stack real estate consultancy built on a simple premise: understand the business first, then go looking for the building. Here's how we work and what we stand for."
        path="/about"
        jsonLd={[organizationJsonLd(), breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]}
      />

      <section className="bg-paper pt-14 pb-16 sm:pt-20 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="About 7 Doors"
            title="We measure a deal by what happens after it closes."
            description="Founded by a team with decades of on-ground brokerage experience, 7 Doors was built to do real estate advisory properly — research-led, accountable, and present long after the lease is signed."
          />
        </Container>
      </section>

      <section className="bg-paper pb-20 sm:pb-28">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="aspect-[6/5] overflow-hidden rounded-sm border border-line order-1"
          >
            <img
              src={images.teamCollaboration(1100)}
              alt="A diverse team collaborating around a table"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2"
          >
            <h2 className="font-display text-2xl text-ink sm:text-3xl">Our story, briefly</h2>
            <p className="mt-4 leading-relaxed text-slate">
              7 Doors started the way most good brokerages do — with a small team that
              got tired of watching clients sign for spaces that were never quite
              right, because nobody upstream had asked the right questions first.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              We built our practice around research and diligence instead of inventory
              volume, and grew it city by city rather than all at once. Today we run
              live mandates across corporate, industrial, residential, hospitality,
              retail, and land — for both occupiers and owners.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              Our leadership team brings over a century of combined experience in
              Indian real estate, and that institutional memory is what keeps our
              advice grounded when a market gets noisy.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-paper-deep/50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="Four habits that shape every mandate" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="rounded-sm border border-line bg-paper p-7">
                  <Icon className="h-6 w-6 text-brass-dim" />
                  <h3 className="mt-5 font-display text-lg text-ink">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <StatsBand />
      <CtaBand />
    </>
  );
}

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { images } from "@/lib/images";
import { trustStats } from "@/data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-14 pb-20 sm:pt-20 sm:pb-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-6">Real estate consultancy · India</p>
          <h1 className="font-display text-[2.15rem] leading-[1.12] tracking-tight text-ink sm:text-[3.4rem] sm:leading-[1.07] lg:text-[3.75rem]">
            Every address
            <br />
            opens onto a
            <br />
            <span className="italic text-brass-dim">different future.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-slate sm:text-lg">
            7 Doors helps businesses and property owners find, fill, and fit out the
            right commercial space — backed by market intelligence across nine
            Indian cities and a team built for the long term.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost" size="lg">
              Explore services
            </ButtonLink>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-line pt-7 sm:max-w-md sm:gap-6">
            {trustStats.slice(0, 3).map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-xl font-medium text-ink sm:text-2xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-slate">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line/60 shadow-[0_24px_60px_-20px_rgba(16,24,38,0.25)]">
            <img
              src={images.heroOffice(1200)}
              alt="A modern glass-fronted office building, the kind of address 7 Doors helps clients secure"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/35 via-transparent to-transparent" />
            {/* brass door-frame accent */}
            <div className="pointer-events-none absolute inset-3 border border-brass-light/40" />
          </div>

          <div className="absolute -bottom-8 -left-6 hidden w-56 rounded-sm border border-line bg-paper p-5 shadow-[0_18px_40px_-12px_rgba(16,24,38,0.2)] sm:block">
            <p className="font-mono text-2xl font-medium text-navy">{trustStats[0].value}</p>
            <p className="mt-1 text-xs leading-snug text-slate">
              Spaces closed across corporate, industrial, and retail
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

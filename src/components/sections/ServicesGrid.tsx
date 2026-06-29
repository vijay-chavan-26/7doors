import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="bg-paper-deep/50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="The doors we open"
            description="Six asset classes, one team — each handled with the depth of a specialist desk."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="door-panel group block h-full rounded-sm border border-line bg-paper p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-brass-dim">Door {service.doorNumber}</span>
                    <Icon className="h-5 w-5 text-navy/70 transition-colors group-hover:text-brass-dim" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink sm:text-[1.35rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {service.shortDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition-colors group-hover:text-brass-dim">
                    Open this door
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

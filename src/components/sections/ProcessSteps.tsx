import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/content";

export function ProcessSteps() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A search that ends in a signature, not a shortlist"
          align="left"
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-t-2 border-line pt-6"
            >
              <span className="absolute -top-px left-0 h-0.5 w-10 bg-brass" />
              <span className="font-mono text-sm text-brass-dim">{step.step}</span>
              <h3 className="mt-3 font-display text-lg text-ink sm:text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

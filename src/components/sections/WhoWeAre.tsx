import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

export function WhoWeAre() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="aspect-[5/4] overflow-hidden rounded-sm border border-line">
            <img
              src={images.officeInterior(1100)}
              alt="A calm, well-lit modern office interior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 border-l-2 border-brass pl-7 lg:order-2 lg:pl-10"
        >
          <p className="eyebrow mb-4">Who we are</p>
          <h2 className="font-display text-3xl leading-[1.15] text-ink sm:text-4xl">
            An address used to mean a place. Now it has to do more work.
          </h2>
          <p className="mt-5 leading-relaxed text-slate">
            7 Doors started as a boutique brokerage and grew into a full-stack property
            consultancy by treating every brief the same way: understand the business
            first, then go looking for the building. Today our team carries more than a
            century of combined leadership experience across corporate, industrial,
            residential, hospitality, retail, and land.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            We work both sides of the table — representing tenants and buyers searching
            for the right space, and owners trying to fill the one they already hold.
            That dual view is what keeps our advice grounded in how the market is
            actually moving, not just what's listed.
          </p>
          <div className="mt-8">
            <ButtonLink href="/about" variant="ghost">
              More on our story
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

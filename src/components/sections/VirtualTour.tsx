import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";

const steps = [
  {
    image: images.coworkReception(1600),
    eyebrow: "01 — Arrive",
    title: "It starts at the front desk",
    body: "A staffed reception, your company name on the wall, and visitors who feel like they've walked into somewhere serious. First impressions are leased too.",
  },
  {
    image: images.coworkOpenPlan(1600),
    eyebrow: "02 — Settle in",
    title: "Floors built around how teams actually work",
    body: "Open desks for the team, quiet zones for deep work, and enough breathing room that nobody's negotiating elbow space. We match the floor plate to your headcount, not the other way around.",
  },
  {
    image: images.coworkGlassCabin(1600),
    eyebrow: "03 — Meet",
    title: "Glass cabins and rooms that hold a deal",
    body: "Bookable meeting rooms, private cabins for senior teams, and phone booths for the calls that can't wait. Every space we list is checked for the things that matter on a busy Tuesday.",
  },
  {
    image: images.coworkRooftop(1600),
    eyebrow: "04 — Stay",
    title: "The reasons people don't want to leave",
    body: "Cafeterias, rooftops, wellness rooms, and the small comforts that keep a team showing up. We surface them all up front, so what you tour is what you sign.",
  },
];

function Step({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof steps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  // each step fades in around its slice of the scroll
  const opacity = useTransform(
    progress,
    [start - 0.04, mid - 0.06, mid + 0.06, end + 0.02],
    [0, 1, 1, 0],
  );
  const scale = useTransform(progress, [start, end], [1.08, 1]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.img
        src={step.image}
        alt={step.title}
        style={{ scale }}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-navy-deep/20" />
    </motion.div>
  );
}

export function VirtualTour() {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Reduced-motion / fallback: a simple stacked gallery with captions.
  if (reduced) {
    return (
      <section className="bg-navy-deep py-20">
        <Container>
          <p className="eyebrow mb-3 text-brass-light">The walkthrough</p>
          <h2 className="max-w-2xl font-display text-3xl text-paper sm:text-4xl">
            What it's like to walk through a 7 Doors space
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title} className="overflow-hidden rounded-lg border border-paper/10">
                <img src={step.image} alt={step.title} className="aspect-[16/10] w-full object-cover" loading="lazy" />
                <div className="bg-navy p-6">
                  <p className="eyebrow text-brass-light">{step.eyebrow}</p>
                  <h3 className="mt-2 font-display text-xl text-paper">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-navy-deep" style={{ height: `${steps.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* image layers */}
        {steps.map((step, i) => (
          <Step key={i} step={step} index={i} total={steps.length} progress={scrollYProgress} />
        ))}

        {/* caption layer */}
        <div className="relative flex h-full items-end pb-20 sm:pb-28">
          <Container>
            {steps.map((step, i) => {
              const start = i / steps.length;
              const end = (i + 1) / steps.length;
              const mid = (start + end) / 2;
              return (
                <StepCaption key={i} step={step} progress={scrollYProgress} start={start} mid={mid} end={end} />
              );
            })}
          </Container>
        </div>

        {/* progress rail */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
          {steps.map((_, i) => (
            <Tick key={i} index={i} total={steps.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCaption({
  step,
  progress,
  start,
  mid,
  end,
}: {
  step: (typeof steps)[number];
  progress: MotionValue<number>;
  start: number;
  mid: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, mid - 0.05, mid + 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, mid, end], [30, 0, -30]);

  return (
    <motion.div style={{ opacity, y }} className="absolute bottom-20 max-w-xl sm:bottom-28">
      <p className="eyebrow text-brass-light">{step.eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight text-paper sm:text-5xl">{step.title}</h2>
      <p className="mt-4 text-base leading-relaxed text-paper/80 sm:text-lg">{step.body}</p>
    </motion.div>
  );
}

function Tick({ index, total, progress }: { index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0.3, 1, 0.3]);
  const scaleY = useTransform(progress, [start, (start + end) / 2, end], [1, 2.4, 1]);
  return (
    <motion.span
      style={{ opacity, scaleY }}
      className="block h-6 w-0.5 origin-center rounded-full bg-brass-light"
    />
  );
}

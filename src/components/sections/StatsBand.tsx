import { trustStats } from "@/data/content";
import { Container } from "@/components/ui/Container";
import { images } from "@/lib/images";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ value, label, caption }: { value: string; label: string; caption?: string }) {
  const { ref, display } = useCountUp(value);
  return (
    <div className="border-paper/15 pl-0 sm:border-l sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
      <span ref={ref} className="block font-mono text-3xl font-medium text-brass-light sm:text-4xl">
        {display}
      </span>
      <p className="mt-2 text-sm font-medium text-paper">{label}</p>
      {caption && <p className="mt-1 text-xs text-paper/50">{caption}</p>}
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-16 sm:py-20">
      <img
        src={images.skylineDusk(1800)}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.16]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/95 to-navy-deep" />
      <Container className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
        {trustStats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </Container>
    </section>
  );
}

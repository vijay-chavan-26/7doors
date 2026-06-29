import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/content";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing initial slide index from the embla instance once it mounts
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Client notes" title="What it's like on the other side of the table" />
          <div className="flex gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous testimonial"
              className="rounded-full border border-line p-2.5 text-ink transition-colors hover:border-brass hover:text-brass-dim"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next testimonial"
              className="rounded-full border border-line p-2.5 text-ink transition-colors hover:border-brass hover:text-brass-dim"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="-ml-5 flex">
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-0 shrink-0 grow-0 basis-full pl-5 sm:basis-1/2 lg:basis-[42%]">
                <figure className="flex h-full flex-col rounded-sm border border-line bg-paper-deep/40 p-7 sm:p-9">
                  <Quote className="h-7 w-7 text-brass/60" />
                  <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-ink">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brass/50 font-mono text-xs font-medium text-brass-dim">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{t.name}</p>
                      <p className="text-xs text-slate">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === selectedIndex ? "w-6 bg-brass" : "w-1.5 bg-line",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

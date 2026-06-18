import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

export function FaqSection({ items, eyebrow = "FAQ", title = "Common questions" }: { items: FaqItem[]; eyebrow?: string; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container size="narrow">
        <SectionHeading eyebrow={eyebrow} title={title} align="left" />
        <div className="mt-10 divide-y divide-line border-t border-line">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-ink">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-brass-dim transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="text-sm leading-relaxed text-slate">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

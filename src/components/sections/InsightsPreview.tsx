import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";

export function InsightsPreview() {
  return (
    <section className="bg-paper-deep/50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Notes from the market"
            description="Short, specific reads on where leasing demand and rents are actually moving."
          />
          <ButtonLink href="/insights" variant="ghost" className="self-start sm:self-auto">
            All insights
          </ButtonLink>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/insights/${post.slug}`}
              className="group block overflow-hidden rounded-sm border border-line bg-paper"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow">{post.category}</p>
                <h3 className="mt-3 font-display text-lg leading-snug text-ink">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate line-clamp-2">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-slate/80">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1 font-medium text-navy transition-colors group-hover:text-brass-dim">
                    Read
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

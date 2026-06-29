import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "@/lib/seo";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";

export default function Insights() {
  return (
    <>
      <Seo
        title="Insights | Real Estate Market Notes from 7 Doors"
        description="Short, specific reads on where office, warehousing, and retail leasing demand is moving across India, from the 7 Doors research desk."
        path="/insights"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }]),
        ]}
      />

      <section className="bg-paper pt-14 pb-16 sm:pt-20 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Insights"
            title="Notes from the market"
            description="Observations from live mandates, not recycled press releases."
          />
        </Container>
      </section>

      <section className="bg-paper pb-20 sm:pb-28">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="mt-3 font-display text-lg leading-snug text-ink">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate line-clamp-2">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-slate/80">
                  <span>
                    {post.date} · {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-navy transition-colors group-hover:text-brass-dim">
                    Read
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}

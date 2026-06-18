import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Seo } from "@/lib/seo";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { blogPosts } from "@/data/blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/insights" replace />;

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/insights/${post.slug}`}
        image={post.image}
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: post.title, path: `/insights/${post.slug}` },
          ]),
        ]}
      />

      <article className="bg-paper py-14 sm:py-20">
        <Container size="narrow">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-slate hover:text-brass-dim">
            <ArrowLeft className="h-3.5 w-3.5" />
            All insights
          </Link>

          <p className="eyebrow mt-8">{post.category}</p>
          <h1 className="mt-4 font-display text-3xl leading-[1.15] text-ink sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-sm text-slate">
            {post.date} · {post.readTime}
          </p>

          <div className="mt-9 aspect-[16/9] overflow-hidden rounded-sm border border-line">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>

          <div className="mt-10 max-w-none">
            {post.body.map((paragraph, i) => (
              <p key={i} className="mb-5 leading-relaxed text-ink/85">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <CtaBand />
    </>
  );
}

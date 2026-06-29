import { ArrowLeft } from "lucide-react";
import { Seo } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you're looking for doesn't exist." path="/404" noindex />
      <section className="flex min-h-[70vh] items-center bg-paper py-20">
        <Container size="narrow" className="text-center">
          <p className="font-mono text-sm text-brass-dim">404</p>
          <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">This door doesn't open.</h1>
          <p className="mt-4 text-slate">
            The page you're looking for may have moved, or never existed. Let's get you back on track.
          </p>
          <ButtonLink href="/" className="mt-8">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}

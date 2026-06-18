import { Seo } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How 7 Doors collects, uses, and protects information shared through this website."
        path="/privacy-policy"
      />
      <section className="bg-paper py-16 sm:py-24">
        <Container size="narrow">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate">Last updated: June 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/85 sm:text-base">
            <p>
              This is placeholder policy text. Please replace it with a policy reviewed by your
              legal counsel before this site goes live — particularly around data retention,
              cookie use, and compliance with India's Digital Personal Data Protection Act.
            </p>

            <div>
              <h2 className="font-display text-xl text-ink">Information we collect</h2>
              <p className="mt-3">
                When you submit an enquiry through this website, we collect the name, email
                address, phone number, and message details you provide. We do not knowingly
                collect information from anyone under the age of 18.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">How we use it</h2>
              <p className="mt-3">
                We use the information you share to respond to your enquiry, match you with
                relevant property options, and, where you've agreed to it, follow up about
                related services. We do not sell your information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">Contact us</h2>
              <p className="mt-3">
                For questions about this policy or to request that we delete your information,
                write to us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-navy hover:text-brass-dim">
                  {siteConfig.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

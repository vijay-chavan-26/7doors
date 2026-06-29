import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Seo } from "@/lib/seo";
import { organizationJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export default function Contact() {
  const mapQuery = encodeURIComponent(`${siteConfig.address.line1}, ${siteConfig.address.line2}`);

  return (
    <>
      <Seo
        title="Contact 7 Doors | Talk to Our Real Estate Team"
        description="Get in touch with 7 Doors for office leasing, warehousing, residential, hospitality, retail, or land requirements anywhere across our nine active Indian cities."
        path="/contact"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
        ]}
      />

      <section className="bg-paper pt-14 pb-16 sm:pt-20 sm:pb-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Let's find the right door"
            description="Share a few details about what you're looking for, and someone from our team will respond within one business day."
          />
        </Container>
      </section>

      <section className="bg-paper pb-20 sm:pb-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="rounded-sm border border-line p-6 sm:p-9">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-sm border border-line bg-paper-deep/40 p-7">
              <h3 className="font-display text-lg text-ink">Reach us directly</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-dim" />
                  <span>
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-brass-dim" />
                  <div className="flex flex-col">
                    {siteConfig.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-ink">
                        {phone}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-brass-dim" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-brass-dim" />
                  <span>Mon–Sat, 10:00 AM – 7:00 PM IST</span>
                </li>
              </ul>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-line">
              <iframe
                title="7 Doors office location"
                src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}

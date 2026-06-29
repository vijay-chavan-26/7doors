import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig, footerServiceLinks, footerCompanyLinks } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-paper/80">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:gap-8">
        <div>
          <Link to="/" aria-label="7 Doors home">
            <Logo light />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="7 Doors on Instagram"
              className="text-paper/60 transition-colors hover:text-brass-light"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="7 Doors on LinkedIn"
              className="text-paper/60 transition-colors hover:text-brass-light"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5 text-brass-light/80">Services</p>
          <ul className="space-y-3 text-sm">
            {footerServiceLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-paper/65 transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5 text-brass-light/80">Company</p>
          <ul className="space-y-3 text-sm">
            {footerCompanyLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-paper/65 transition-colors hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5 text-brass-light/80">Talk to us</p>
          <ul className="space-y-3 text-sm text-paper/65">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-light/70" />
              <span>{siteConfig.address.line2}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brass-light/70" />
              <a href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`} className="hover:text-paper">
                {siteConfig.phones[0]}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brass-light/70" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-paper">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper/45 sm:flex-row">
          <p>© {new Date().getFullYear()} 7 Doors Real Estate Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-paper/70">
              Privacy Policy
            </Link>
            <span className="font-mono">{siteConfig.cities.length} cities, one team</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

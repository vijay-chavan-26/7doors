import { useEffect, useState } from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(16,24,38,0.08)]" : "bg-paper",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} aria-label="7 Doors home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {primaryNav.map((link) => (
            <RouterNavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-brass-dim",
                  isActive ? "text-brass-dim" : "text-ink/80",
                )
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-brass-dim"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phones[0]}
          </a>
          <ButtonLink href="/contact" size="sm">
            Get in touch
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-line bg-paper lg:hidden max-h-[calc(100vh-5rem)]"
          >
            <Container className="flex flex-col gap-1 py-6">
              {primaryNav.map((link) => (
                <RouterNavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "border-b border-line/70 py-3.5 text-base font-medium",
                      isActive ? "text-brass-dim" : "text-ink",
                    )
                  }
                >
                  {link.label}
                </RouterNavLink>
              ))}
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phones[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm font-medium text-ink/80"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phones[0]}
                </a>
                <ButtonLink href="/contact" onClick={() => setOpen(false)}>
                  Get in touch
                </ButtonLink>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

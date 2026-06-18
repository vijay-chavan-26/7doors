# 7 Doors — Website Redesign

A full rebuild of the 7 Doors real estate consultancy website: React 19 + TypeScript + Vite 8 + Tailwind CSS v4, with React Router, Framer Motion, React Hook Form + Zod, Embla Carousel, Lucide icons, and React Helmet Async for SEO.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # type-check + production build to /dist
npm run preview     # serve the production build locally
npm run lint         # ESLint
```

## Structure

```
src/
  components/
    layout/      Header, Footer, MainLayout, ScrollToTop
    ui/          Button, Container, SectionHeading, Logo, SocialIcons
    sections/    Hero, ServicesGrid, ProcessSteps, StatsBand, Testimonials, etc.
  data/          siteConfig, services, content (stats/testimonials/FAQs/jobs), blog
  hooks/         useCountUp (animated stat counters)
  lib/           seo.tsx (Helmet wrapper), jsonld.ts (structured data), images.ts, utils.ts
  pages/         One file per route
  types/         Shared TypeScript interfaces
public/
  robots.txt, sitemap.xml, favicon.svg
```

Path alias `@/*` maps to `src/*` (configured in `vite.config.ts` and `tsconfig.app.json`).

## Design system

- **Colors**: navy (`--color-navy`, `--color-navy-deep`) + brass (`--color-brass`, `--color-brass-light`) — a deliberate nod to door hardware, tying the palette back to the brand name. Defined as CSS variables in `src/index.css` via Tailwind v4's `@theme`.
- **Type**: Fraunces (display/headings), Inter (body/UI), IBM Plex Mono (stats, labels, "Door 01" tags).
- **Signature motif**: services are framed as "doors" (`Door 01`–`Door 06`), with a `.door-panel` hover treatment (a subtle hinge-swing 3D tilt) defined in `src/index.css`.
- Reduced-motion preferences are respected throughout (animations, count-up stats, hover transforms).

## SEO / AEO

- Per-page `<title>`, meta description, canonical, Open Graph and Twitter tags via the `Seo` component (`src/lib/seo.tsx`).
- JSON-LD structured data (`RealEstateAgent`, `Service`, `BreadcrumbList`, `FAQPage`) via `src/lib/jsonld.ts` — the FAQ schema in particular is aimed at answer-engine / voice-search surfacing.
- `public/robots.txt` and `public/sitemap.xml` included; update the sitemap as routes change.
- This is a client-rendered SPA, so search engines that don't execute JavaScript will only see the default `index.html` meta tags. If indexability of per-page content is a priority, consider adding prerendering or migrating to a meta-framework (e.g. Next.js/Remix/Astro) before launch.

## Before this goes live — please review

- **Stats** (`src/data/content.ts` → `trustStats`): currently placeholder figures (spaces closed, sq.ft. transacted, etc.). Swap in verified, current numbers.
- **Testimonials**: one is the real quote from 7 Doors' existing site (Harshith Ramchandra), paraphrased; the other two are illustrative placeholders and should be replaced with real client quotes (with permission).
- **Images**: all photography is temporary, free-to-use Unsplash stock (see `src/lib/images.ts`) standing in for 7 Doors' own photography — swap in real office/brand photography before launch.
- **Contact details** (`src/data/siteConfig.ts`): phone numbers, email, and address were pulled from the current live site — please confirm they're still current.
- **Privacy Policy** (`src/pages/PrivacyPolicy.tsx`): placeholder copy. Have this reviewed by counsel, particularly for DPDP Act compliance.
- **Contact form** (`src/components/sections/ContactForm.tsx`): currently simulates a submission client-side. Wire the `onSubmit` handler to a real email/CRM endpoint before launch.
- **Social links**: Instagram is set to the real account; the LinkedIn URL is a placeholder guess and should be corrected.

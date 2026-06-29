# 7 Doors — Workspace Platform

A full rebuild of the 7 Doors real estate consultancy site, expanded into a
**platform**: an immersive public marketing site with a live coworking-space
gallery, plus a frontend admin panel for hiring and space management.

Stack: React 19 + TypeScript + Vite 8 + Tailwind CSS v4, React Router 7,
Framer Motion, React Hook Form + Zod, Embla Carousel, Lucide icons,
React Helmet Async (SEO), and **Three.js / React Three Fiber + Lenis** for the
immersive landing page.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # type-check + production build to /dist
npm run preview     # serve the production build locally
npm run lint         # ESLint
```

## What's in the platform

### 1. Immersive 3D landing page
- A lazy-loaded WebGL hero scene (`src/components/three/WorkspaceScene.tsx`):
  an abstract, GPU-friendly cluster of navy/brass "workspace blocks" that drift
  and parallax with scroll — deliberately *not* a heavy glitch-prone building
  tour, so it stays smooth.
- A scroll-driven **virtual tour** (`VirtualTour.tsx`): full-bleed images that
  cross-fade through a four-step narrative (Arrive → Settle → Meet → Stay) as
  you scroll, simulating walking through a space.
- Smooth scrolling via Lenis (`SmoothScroll.tsx`).
- **Performance & accessibility safeguards** (per the UI/UX Pro Max guidance):
  - The 3D scene only initialises on non-touch, larger viewports, with WebGL2
    support, and after first paint. Mobile / unsupported devices get a static
    image hero instead.
  - `prefers-reduced-motion` is respected everywhere — the 3D float, the
    scroll-jacked tour, and reveal animations all fall back to static layouts.
  - The Three.js bundle is a separate lazy chunk, so it never blocks initial
    load and never ships to mobile users.

### 2. Coworking space gallery
- Browse listings (`/spaces`) with city + type filters.
- Space detail pages (`/spaces/:id`) with a bento image gallery, lightbox,
  amenities, a sticky booking card, and Product + AggregateRating JSON-LD.
- Data in `src/data/coworking.ts`.

### 3. Admin panel (frontend only)
At `/admin`, in its own layout (`AdminLayout.tsx`) with a clear "demo data"
banner and a link back to the public site:
- **Dashboard** — KPI cards, a hiring-pipeline funnel, recent applicants, and a
  spaces summary.
- **Candidates** — search + stage filters, a table view and a kanban board, and
  candidate profiles with a pipeline stepper and notes. Stage changes update
  local React state (no backend).
- **Spaces** — a management table, plus an **"Add space"** form with
  drag-and-drop image upload (client-side object-URL previews), amenity
  pickers, and a live card preview that updates as you type.
- **Settings** — demo organisation + notification preferences.
- HR data in `src/data/hr.ts`.

## Structure

```
src/
  components/
    layout/     Header, Footer, MainLayout, ScrollToTop, SmoothScroll
    ui/         Button, Container, SectionHeading, Logo, Reveal, SocialIcons
    sections/   ImmersiveHero, VirtualTour, FeaturedSpaces, SpaceCard,
                BookCall, ServicesGrid, ProcessSteps, StatsBand, Testimonials…
    three/      WorkspaceScene (lazy WebGL)
    admin/      AdminLayout, StageBadge
  data/         siteConfig, services, content, blog, coworking, hr
  hooks/        useCountUp
  lib/          seo.tsx, jsonld.ts, images.ts, iconMap.ts, utils.ts
  pages/        public pages + pages/admin/*
  types/        shared interfaces
public/         robots.txt, sitemap.xml, favicon.svg
```

Path alias `@/*` → `src/*` (in `vite.config.ts` + `tsconfig.app.json`).

## Design system

Navy + brass palette (a nod to door hardware, tying back to the brand name),
defined as CSS variables in `src/index.css` via Tailwind v4's `@theme`. Type:
Fraunces (display), Inter (body/UI), IBM Plex Mono (stats, labels, "Door 01"
tags). Services are framed as numbered "doors" with a subtle hinge-swing hover.

## Before this goes live — please review

- **All imagery is temporary stock.** Photos are free-to-use Unsplash images
  (see `src/lib/images.ts`) standing in for 7 Doors' own photography and real
  listing photos. I did **not** scrape or rehost copyrighted photos from
  property portals — those are protected, so genuine stock was used instead.
  Swap in 7 Doors' own / licensed photography before launch.
- **Coworking listings are illustrative** (`src/data/coworking.ts`) — real
  locality names, but invented spaces, prices, and ratings. Replace with real
  inventory.
- **The admin panel is frontend-only.** Candidate data, stage moves, space
  uploads, notes, and settings live in React state and reset on refresh. Wire
  these to a real backend + auth before any real use. Image uploads currently
  create local object URLs only — they aren't persisted or uploaded anywhere.
- **Stats** (`trustStats`) and two of three **testimonials** are placeholders;
  one testimonial is the real quote from the existing site (paraphrased).
- **Contact details** in `src/data/siteConfig.ts` came from the live site —
  confirm they're current. The **contact form** and **space-upload form**
  simulate submission and need real endpoints.
- **Privacy Policy** is placeholder copy — have counsel review for DPDP.
- The **LinkedIn URL** is a guess; Instagram is the real account.

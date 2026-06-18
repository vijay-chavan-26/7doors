import type { BlogPost } from "@/types";
import { images } from "@/lib/images";

export const blogPosts: BlogPost[] = [
  {
    slug: "warehousing-hotspots-2026",
    category: "Warehousing",
    title: "Where India's warehousing demand is actually concentrating in 2026",
    excerpt:
      "Highway upgrades and quick-commerce dark stores are redrawing the warehousing map. Here's where Grade-A supply is catching up with demand, and where it still isn't.",
    date: "May 12, 2026",
    readTime: "6 min read",
    image: images.warehouseInterior(900),
    body: [
      "For years, warehousing demand in India followed a predictable script: clusters formed around the big four logistics corridors, and everything else was an afterthought. That script is being rewritten by two forces at once — national highway upgrades that have shortened transit times between tier-1 and tier-2 cities, and quick-commerce operators who need a dark store within a 15-minute delivery radius of almost every dense neighbourhood.",
      "The result is demand that's both consolidating and fragmenting at the same time. Large 3PL and manufacturing tenants are consolidating into fewer, bigger Grade-A parks near improved highway access, chasing efficiency at scale. Quick-commerce and last-mile players are doing the opposite, fragmenting into dozens of smaller urban-edge facilities that didn't really exist as an asset category five years ago.",
      "Supply hasn't caught up evenly. Grade-A parks near established logistics hubs are seeing healthy absorption and modest rent growth, while urban-edge micro-warehousing remains short on purpose-built stock, with many operators making do with converted retail or light-industrial space that wasn't designed for the throughput they're now putting through it.",
      "For occupiers planning a footprint over the next 18 months, the practical takeaway is to separate the two decisions rather than solve them with the same kind of site. A consolidation play and a last-mile play have almost nothing in common except that they both get called 'warehousing.'",
    ],
  },
  {
    slug: "gcc-office-demand",
    category: "Corporate",
    title: "Why global capability centres are still betting big on Indian office space",
    excerpt:
      "GCC expansion has been one of the steadiest demand drivers in commercial leasing. We look at what occupiers in this segment are actually asking for in a floor plate.",
    date: "April 28, 2026",
    readTime: "5 min read",
    image: images.officeInterior(900),
    body: [
      "Global capability centres have absorbed a disproportionate share of new Grade-A office supply over the past several leasing cycles, and that hasn't slowed even as broader corporate leasing has gone through quieter patches. The reasons have shifted from pure cost arbitrage toward something closer to genuine capability-building, and that shift shows up directly in what these occupiers ask for in a building.",
      "Floor-plate efficiency now matters more than floor-plate size. GCC occupiers increasingly want large, uninterrupted plates that can flex between dense engineering pods and more open collaboration zones without structural rework, rather than simply the biggest space available in a given micro-market.",
      "Building certifications and uptime guarantees have moved from a nice-to-have to a baseline requirement, particularly for centres running global operations or regulated workloads that can't tolerate power or connectivity gaps.",
      "What this means for landlords with vacant large-format floors is that presentation now has to address operational specifics — backup power, fibre redundancy, floor-loading capacity — well before a GCC occupier will seriously shortlist a building, not after.",
    ],
  },
  {
    slug: "landlord-vacancy-playbook",
    category: "Corporate",
    title: "A landlord's playbook for filling a vacant floor faster",
    excerpt:
      "Vacant floors cost owners more than missed rent. Here's the sequence of fixes — pricing, presentation, and positioning — that consistently shortens time-to-lease.",
    date: "April 9, 2026",
    readTime: "4 min read",
    image: images.handshake(900),
    body: [
      "A vacant floor rarely stays empty because of one big problem. It's usually three smaller ones stacked on top of each other — pricing that hasn't moved with the micro-market, presentation that doesn't show the space at its best, and positioning that's aimed at the wrong tenant profile entirely.",
      "Pricing is the easiest to get wrong because it's the easiest to leave unchanged. A rent that was competitive eighteen months ago can be meaningfully out of step with a micro-market today, especially in submarkets that have seen a wave of new Grade-A supply land in the interim.",
      "Presentation matters more for larger floors than owners often expect. A bare shell reads very differently to a prospective tenant than a floor with even basic test-fit drawings showing how 150 or 200 seats could actually sit within it.",
      "Positioning is the part most often skipped — actively identifying which tenant profiles are expanding in the city right now, rather than waiting for generic enquiries to arrive. That single change, more than any rent adjustment, is usually what shortens time-to-lease the most.",
    ],
  },
];

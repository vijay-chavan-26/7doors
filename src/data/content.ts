import type { Stat, Testimonial, ProcessStep, FaqItem, JobOpening } from "@/types";

// NOTE: placeholder figures — swap in 7 Doors' verified, current numbers
// before this site goes live.
export const trustStats: Stat[] = [
  { value: "250+", label: "Spaces closed", caption: "Across all six asset classes" },
  { value: "18M+", label: "Sq.ft. transacted", caption: "Since inception" },
  { value: "100+", label: "Years, combined leadership", caption: "Across the founding team" },
  { value: "9", label: "Cities active", caption: "And growing" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "7 Doors understood our brief inside a single call and came back with a shortlist that actually matched our headcount plan, not just our budget. The handover into our Mumbai office was seamless from negotiation through fit-out.",
    name: "Harshith Ramchandra",
    role: "Director & Sales Head",
    initials: "HR",
  },
  {
    quote:
      "We had three warehouses to find inside a single quarter, in three different cities. Their team ran all three searches in parallel and never let logistics cost get lost in the rent conversation.",
    name: "Operations Head",
    role: "Logistics & 3PL Firm, Bengaluru",
    initials: "OH",
  },
  {
    quote:
      "As a landlord with a half-vacant floor, what we needed was someone who'd bring us tenants who'd actually stay. 7 Doors filled it in six weeks with a five-year lease, not a six-month placeholder.",
    name: "Workplace Strategy Lead",
    role: "Commercial Property Owner, Pune",
    initials: "WL",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Brief & discover",
    description:
      "We start with your headcount, budget, timeline, and the non-negotiables — commute radius, building grade, lease tenure — before we look at a single listing.",
  },
  {
    step: "02",
    title: "Curate & shortlist",
    description:
      "Our research desk filters live inventory against the brief and market data, so the shortlist you see is the one worth visiting in person.",
  },
  {
    step: "03",
    title: "Negotiate & structure",
    description:
      "We negotiate rent, escalation, lock-in, and fit-out terms on your behalf, and structure the lease or sale to hold up under legal and compliance review.",
  },
  {
    step: "04",
    title: "Handover & aftercare",
    description:
      "We stay engaged through fit-out, possession, and the first few months of occupancy — and through renewal, exit, or expansion whenever that's next.",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "What does 7 Doors do?",
    answer:
      "7 Doors is a real estate consultancy that helps businesses and property owners find, lease, fill, and exit commercial and residential addresses across India. We work across corporate office space, warehousing and industrial, residential, hospitality, retail, and land.",
  },
  {
    question: "Which cities does 7 Doors operate in?",
    answer:
      "We're active in Bengaluru, Pune, Hyderabad, Mumbai, Chennai, Visakhapatnam, Vijayawada, Kochi, and Coimbatore, with Bengaluru as our headquarters.",
  },
  {
    question: "Does 7 Doors work with property owners as well as tenants?",
    answer:
      "Yes. We represent landlords and developers looking to fill vacant office, retail, or industrial space, as well as businesses and individuals searching for the right one to lease or buy.",
  },
  {
    question: "How long does it take to lease commercial office space?",
    answer:
      "A straightforward office lease in a major Indian city typically takes four to eight weeks from brief to signed agreement, depending on building availability, fit-out condition, and how quickly internal approvals move on your side.",
  },
  {
    question: "Is there a cost to using 7 Doors as a tenant or buyer?",
    answer:
      "For most leasing and acquisition mandates, our fee is paid by the landlord or seller, not the tenant or buyer. We'll confirm the fee structure for your specific mandate during the first conversation.",
  },
  {
    question: "Can 7 Doors handle a search across multiple cities at once?",
    answer:
      "Yes. Many of our corporate and warehousing mandates run in parallel across two or more cities, coordinated by a single point of contact on our side so you're not managing separate broker relationships in each market.",
  },
];

export const jobOpenings: JobOpening[] = [
  {
    title: "Senior Associate — Corporate Real Estate",
    department: "Corporate Advisory",
    location: "Bengaluru",
    type: "Full-time",
  },
  {
    title: "Associate — Warehousing & Industrial",
    department: "Industrial Advisory",
    location: "Pune",
    type: "Full-time",
  },
  {
    title: "Research Analyst — Market Intelligence",
    department: "Research",
    location: "Bengaluru",
    type: "Full-time",
  },
  {
    title: "Manager — Land & Title Diligence",
    department: "Land Advisory",
    location: "Hyderabad",
    type: "Full-time",
  },
];

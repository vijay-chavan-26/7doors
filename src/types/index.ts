import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceAsset {
  slug: string;
  doorNumber: string; // e.g. "01" — literal door numbering used as the section signature
  title: string;
  shortDescription: string;
  description: string[];
  highlights: string[];
  cities: string[];
  icon: LucideIcon;
  image: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Stat {
  value: string;
  label: string;
  caption?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

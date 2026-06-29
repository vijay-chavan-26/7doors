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

// ---- Coworking space platform ----
export interface Amenity {
  label: string;
  icon: string; // lucide icon name resolved via an icon map
}

export interface CoworkingSpace {
  id: string;
  name: string;
  tagline: string;
  city: string;
  locality: string;
  type: "Hot Desk" | "Dedicated Desk" | "Private Cabin" | "Managed Office" | "Meeting Room";
  pricePerSeat: number; // INR / seat / month
  capacity: number;
  rating: number;
  reviews: number;
  amenities: string[];
  images: string[];
  featured: boolean;
  availability: "Available" | "Filling Fast" | "Waitlist";
  description: string;
}

// ---- Admin: HR / candidates ----
export type CandidateStage =
  | "Applied"
  | "Screening"
  | "Interview"
  | "Offer"
  | "Hired"
  | "Rejected";

export interface Candidate {
  id: string;
  name: string;
  role: string;
  department: string;
  location: string;
  stage: CandidateStage;
  experience: number; // years
  appliedOn: string;
  email: string;
  phone: string;
  avatarColor: string;
  rating: number; // 0-5
  source: string;
}

export interface KpiCard {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "flat";
  icon: string;
}

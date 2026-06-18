import type { NavLink } from "@/types";

export const siteConfig = {
  name: "7 Doors",
  legalName: "7 Doors Real Estate Consultancy",
  tagline: "The address advisors behind India's most decisive moves.",
  domain: "https://www.7doors.in",
  description:
    "7 Doors is India's office space and commercial real estate consultancy — helping businesses find, fit out, and fill the right address across Bengaluru, Pune, Hyderabad, Mumbai, Chennai and beyond.",
  founded: 2022,
  email: "official@7doors.in",
  phones: ["+91 97407 40366", "+91 97409 34780"],
  address: {
    line1: "7 Doors Real Estate Consultancy",
    line2: "HSR Layout, Bengaluru, Karnataka 560068",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560068",
    country: "India",
  },
  social: {
    instagram: "https://www.instagram.com/7doors.realestate/",
    linkedin: "https://www.linkedin.com/company/7doors",
  },
  cities: [
    "Bengaluru",
    "Pune",
    "Hyderabad",
    "Mumbai",
    "Chennai",
    "Visakhapatnam",
    "Vijayawada",
    "Kochi",
    "Coimbatore",
  ],
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Corporate Real Estate", href: "/services/corporate-real-estate" },
  { label: "Warehousing & Industrial", href: "/services/warehousing-industrial" },
  { label: "Residential Real Estate", href: "/services/residential-real-estate" },
  { label: "Hospitality", href: "/services/hospitality" },
  { label: "Retail Real Estate", href: "/services/retail-real-estate" },
  { label: "Land & Industrial", href: "/services/land-industrial" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Insights & Blog", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

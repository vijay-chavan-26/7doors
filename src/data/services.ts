import { Building2, Warehouse, Home, Hotel, Store, LandPlot } from "lucide-react";
import type { ServiceAsset } from "@/types";
import { images } from "@/lib/images";

export const services: ServiceAsset[] = [
  {
    slug: "corporate-real-estate",
    doorNumber: "01",
    title: "Corporate Real Estate",
    shortDescription:
      "Office space leasing and workplace strategy for growing teams, GCCs, and enterprise occupiers.",
    description: [
      "An office is the first proof a client, a recruit, or an investor gets that a company means what it says. We help businesses find premises that carry that weight — from a 40-seat floor for a fast-scaling startup to a 4-lakh sq.ft. campus for a global capability centre.",
      "Our brokers sit on live inventory across every major business district in the country, and our research desk tracks rental trends, vacancy, and upcoming supply down to the micro-market. That combination means you see the right shortlist on day one, not after three rounds of site visits to spaces that were never going to work.",
      "We stay on the deal through fit-out coordination and handover, so the address you signed for is the one your team actually walks into.",
    ],
    highlights: [
      "Grade-A and Grade-B office inventory across IT parks, SEZs, and CBDs",
      "Lease structuring, rent benchmarking, and renewal negotiation",
      "Workplace and seat-planning advisory for hybrid teams",
      "Landlord representation for owners filling vacant floors",
    ],
    cities: ["Bengaluru", "Pune", "Hyderabad", "Mumbai", "Chennai"],
    icon: Building2,
    image: images.officeInterior(1200),
    metaTitle: "Corporate Real Estate & Office Space Leasing | 7 Doors",
    metaDescription:
      "Office space leasing, workplace strategy, and landlord representation across Bengaluru, Pune, Hyderabad, Mumbai and Chennai. Talk to 7 Doors' corporate real estate team.",
  },
  {
    slug: "warehousing-industrial",
    doorNumber: "02",
    title: "Warehousing & Industrial",
    shortDescription:
      "Grade-A warehousing, logistics parks, and industrial sheds matched to your supply chain footprint.",
    description: [
      "Warehousing decisions are supply-chain decisions first and real estate decisions second — proximity to highways, ports, and labour pools often matters more than the building itself. Our team reads both sides of that equation.",
      "We help 3PLs, manufacturers, and D2C brands evaluate Grade-A logistics parks and built-to-suit sheds against throughput, compliance, and total occupancy cost, not just headline rent.",
      "Where land is the better fit — for a captive facility or a long manufacturing lease — we run the same diligence on title, zoning, and approvals before you commit.",
    ],
    highlights: [
      "Grade-A logistics parks and multi-client warehousing",
      "Built-to-suit industrial sheds and manufacturing facilities",
      "Site selection benchmarked against logistics cost, not just rent",
      "Lease and license structuring for 3PL and captive occupiers",
    ],
    cities: [
      "Bengaluru",
      "Chennai",
      "Hyderabad",
      "Mumbai",
      "Pune",
      "Visakhapatnam",
      "Vijayawada",
      "Kochi",
      "Coimbatore",
    ],
    icon: Warehouse,
    image: images.warehouseInterior(1200),
    metaTitle: "Warehousing & Industrial Real Estate | 7 Doors",
    metaDescription:
      "Grade-A warehousing, logistics parks, and built-to-suit industrial sheds across nine Indian cities. 7 Doors matches supply chain needs to the right facility.",
  },
  {
    slug: "residential-real-estate",
    doorNumber: "03",
    title: "Residential Real Estate",
    shortDescription:
      "Smart, premium, and ultra-luxury homes for individuals, families, and relocating employees.",
    description: [
      "We work with individual buyers and tenants the same way we work with corporate clients: by understanding the brief fully before showing a single property.",
      "Whether the search is for a smart starter home, a premium apartment in an established neighbourhood, or an ultra-luxury residence, our advisors filter inventory against the things that actually decide a move — commute, school zones, builder track record, and resale liquidity.",
      "For companies relocating senior employees, we run the search as a managed service, with shortlists, negotiation, and move-in coordination handled end to end.",
    ],
    highlights: [
      "Smart homes, premium apartments, and ultra-luxury residences",
      "Builder due diligence and resale value assessment",
      "Managed relocation search for transferring employees",
      "Rental and lease support for landlords and tenants",
    ],
    cities: ["Bengaluru", "Hyderabad", "Pune", "Mumbai"],
    icon: Home,
    image: images.residentialExterior(1200),
    metaTitle: "Residential Real Estate Advisory | 7 Doors",
    metaDescription:
      "Smart homes, premium apartments, and ultra-luxury residences sourced and negotiated by 7 Doors' residential advisory team.",
  },
  {
    slug: "hospitality",
    doorNumber: "04",
    title: "Hospitality",
    shortDescription:
      "Site selection and asset advisory for hotels, resorts, and serviced-living operators.",
    description: [
      "Hospitality real estate carries a longer time horizon and a narrower margin for site error than almost any other asset class — a property either works for the brand and the catchment, or it never quite does.",
      "We support operators and owners through site identification, feasibility, and lease or management-contract structuring, drawing on footfall, tourism, and micro-market data specific to hospitality rather than generic commercial benchmarks.",
      "For owners holding hospitality assets, we also advise on repositioning and operator transitions when performance calls for a change.",
    ],
    highlights: [
      "Site selection and feasibility for hotels and resorts",
      "Lease and management-contract structuring",
      "Asset repositioning and operator transition advisory",
      "Serviced-apartment and extended-stay site sourcing",
    ],
    cities: ["Bengaluru", "Mumbai", "Pune"],
    icon: Hotel,
    image: images.hospitalityLobby(1200),
    metaTitle: "Hospitality Real Estate Advisory | 7 Doors",
    metaDescription:
      "Site selection, feasibility, and asset advisory for hotels, resorts, and serviced-living operators across India, from 7 Doors.",
  },
  {
    slug: "retail-real-estate",
    doorNumber: "05",
    title: "Retail Real Estate",
    shortDescription:
      "High street, mall, and dark-store sourcing for brands building a physical footprint.",
    description: [
      "Retail success is decided street by street and floor by floor. We help brands evaluate high street locations, mall units, and quick-commerce dark stores against footfall quality, co-tenancy, and the catchment's actual spending pattern, not just visibility.",
      "For mall owners and developers, we represent vacant units to the brands most likely to perform in that specific catchment, which shortens the time a unit sits empty.",
      "Lease terms in retail are unusually varied — revenue share, minimum guarantee, fit-out periods — and we negotiate each on the merits of the specific deal.",
    ],
    highlights: [
      "High street, mall, and quick-commerce site sourcing",
      "Footfall, co-tenancy, and catchment analysis",
      "Revenue-share and minimum-guarantee lease negotiation",
      "Vacant-unit representation for mall owners and developers",
    ],
    cities: ["Bengaluru", "Hyderabad", "Pune", "Mumbai", "Chennai"],
    icon: Store,
    image: images.retailMall(1200),
    metaTitle: "Retail Real Estate Leasing | 7 Doors",
    metaDescription:
      "High street, mall, and dark-store leasing advisory for retail brands and landlords, backed by footfall and catchment analysis from 7 Doors.",
  },
  {
    slug: "land-industrial",
    doorNumber: "06",
    title: "Land & Industrial",
    shortDescription:
      "Land acquisition and industrial parcel advisory, from title diligence to zoning clearance.",
    description: [
      "Land deals carry the most risk and the longest tail of any real estate transaction, which is why they reward patience and paperwork over speed. We run full diligence on title chain, encumbrances, zoning, and approvals before a parcel ever reaches a client's shortlist.",
      "For manufacturers, developers, and institutional buyers, we source parcels against the specific use case — captive industrial, township development, or land banking — and structure the transaction to match.",
      "Where a parcel needs conversion, environmental clearance, or local approvals before it's usable, we coordinate that process rather than leaving it for after the sale closes.",
    ],
    highlights: [
      "Title, encumbrance, and zoning diligence on every parcel",
      "Industrial land sourcing for captive manufacturing",
      "Township and large-format development land advisory",
      "Conversion and approval coordination post-acquisition",
    ],
    cities: ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    icon: LandPlot,
    image: images.landIndustrialAerial(1200),
    metaTitle: "Land & Industrial Acquisition Advisory | 7 Doors",
    metaDescription:
      "Land acquisition, title diligence, and industrial parcel sourcing across India, from 7 Doors' land advisory team.",
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

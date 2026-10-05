import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import GuttersContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Gutter Installation CO | Seamless ★ Free Estimates",
  description: "Seamless gutter installation and leaf guards in Colorado. Prevent water damage and protect your foundation. 10+ years local experience. Free estimate today.",
  alternates: { canonical: "https://www.gatesroof.com/services/gutters-guards" },
  openGraph: {
    title: "Gutter Installation CO | Seamless ★ Free Estimates",
    description: "Seamless gutter installation and leaf guards in Colorado. Prevent water damage and protect your foundation. 10+ years local experience. Free estimate today.",
    url: "https://www.gatesroof.com/services/gutters-guards",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Gutter Installation & Guards",
  "name": "Gutter & Gutter Guard Installation in Colorado",
  "description": "Seamless gutter installation, gutter guard systems, and gutter repair. Protect your home from water damage with properly functioning gutters.",
  "url": "https://www.gatesroof.com/services/gutters-guards",
  "provider": {"@id": "https://www.gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"}
};

const faqSchema = buildFaqSchema(FAQS);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Gutters & Guards", "item": "https://www.gatesroof.com/services/gutters-guards"}
  ]
};

export default function Page() {
  return (
    <>
      <PageSchema route="/services/gutters-guards" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GuttersContent />
    </>
  );
}

import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import StormContent from "./content";
import { SITE_STATS } from "@/lib/site-stats";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hail Damage Inspection CO | 4x Certified ★ Free Inspection",
  description: `Free hail and storm damage roof inspections across Colorado. Full replacements, insurance claims assistance, ${SITE_STATS.reviewCount}+ Google reviews. Call Gates Enterprises today.`,
  alternates: { canonical: "https://www.gatesroof.com/services/storm-hail-damage" },
  openGraph: {
    title: "Hail Damage Inspection CO | 4x Certified ★ Free Inspection",
    description: `Free hail and storm damage roof inspections across Colorado. Full replacements, insurance claims assistance, ${SITE_STATS.reviewCount}+ Google reviews. Call Gates Enterprises today.`,
    url: "https://www.gatesroof.com/services/storm-hail-damage",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Storm & Hail Damage Inspection and Replacement",
  "name": "Storm & Hail Damage Roof Inspection and Replacement in Colorado",
  "description": "Expert hail and storm damage assessment and full roof replacement. We assist you through the insurance claims process and document all damage thoroughly.",
  "url": "https://www.gatesroof.com/services/storm-hail-damage",
  "provider": { "@id": "https://www.gatesroof.com/#organization" },
  "areaServed": { "@type": "State", "name": "Colorado" },
};

const faqSchema = buildFaqSchema(FAQS);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gatesroof.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gatesroof.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Storm & Hail Damage", "item": "https://www.gatesroof.com/services/storm-hail-damage" },
  ],
};

export default function Page() {
  return (
    <>
      <PageSchema route="/services/storm-hail-damage" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <StormContent />
    </>
  );
}

import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import SidingContent from "./content";
import { SITE_STATS } from "@/lib/site-stats";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Siding Installation CO | Certified ★ Free Estimates",
  description: `James Hardie, vinyl, and engineered wood siding in Colorado. Boost curb appeal and energy efficiency. 4.9 stars from ${SITE_STATS.reviewCount} reviews. Get a free estimate.`,
  alternates: { canonical: "https://www.gatesroof.com/services/siding-exterior" },
  openGraph: {
    title: "Siding Installation CO | Certified ★ Free Estimates",
    description: `James Hardie, vinyl, and engineered wood siding in Colorado. Boost curb appeal and energy efficiency. 4.9 stars from ${SITE_STATS.reviewCount} reviews. Get a free estimate.`,
    url: "https://www.gatesroof.com/services/siding-exterior",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Siding Installation & Repair",
  "name": "Siding & Exterior Services in Colorado",
  "description": "Professional siding installation and repair including James Hardie fiber cement, vinyl, and wood siding. Storm damage siding replacement available.",
  "url": "https://www.gatesroof.com/services/siding-exterior",
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
    {"@type": "ListItem", "position": 3, "name": "Siding & Exterior", "item": "https://www.gatesroof.com/services/siding-exterior"}
  ]
};

export default function Page() {
  return (
    <>
      <PageSchema route="/services/siding-exterior" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SidingContent />
    </>
  );
}

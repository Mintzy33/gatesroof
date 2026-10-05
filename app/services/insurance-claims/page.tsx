import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import InsuranceContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roof Insurance Claims CO | Adjuster Meetings & Supplements",
  description: "We document storm damage, meet your adjuster on the roof, and prepare supplements for your insurance claim. Certified repairs after. Call (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/services/insurance-claims" },
  openGraph: {
    title: "Roof Insurance Claims CO | Adjuster Meetings & Supplements",
    description: "We document storm damage, meet your adjuster on the roof, and prepare supplements for your insurance claim. Certified repairs after. Call (720) 766-3377.",
    url: "https://www.gatesroof.com/services/insurance-claims",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Insurance Restoration",
  "name": "Roofing Insurance Restoration in Colorado",
  "description": "Insurance restoration support from free inspection through adjuster meetings and project completion. We document the damage and supply the evidence your insurer needs to evaluate the claim.",
  "url": "https://www.gatesroof.com/services/insurance-claims",
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
    {"@type": "ListItem", "position": 3, "name": "Insurance Restoration", "item": "https://www.gatesroof.com/services/insurance-claims"}
  ]
};

export default function Page() {
  return (
    <>
      <PageSchema route="/services/insurance-claims" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InsuranceContent />
    </>
  );
}

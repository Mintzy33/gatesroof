import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import RoofReplacementContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roof Replacement CO | 4x Certified ★ Free Estimates",
  description: "Colorado roof replacement backed by up to 50-year manufacturer warranties. 4x certified with 7,200+ installs. Get a free estimate. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/services/roof-replacement" },
  openGraph: {
    title: "Roof Replacement CO | 4x Certified ★ Free Estimates",
    description: "Colorado roof replacement backed by up to 50-year manufacturer warranties. 4x certified with 7,200+ installs. Get a free estimate. (720) 766-3377",
    url: "https://www.gatesroof.com/services/roof-replacement",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Roof Replacement",
  "name": "Roof Replacement in Colorado",
  "description": "Complete roof replacement services using GAF, CertainTeed, and Malarkey shingle systems. Backed by manufacturer warranties up to 50 years.",
  "url": "https://www.gatesroof.com/services/roof-replacement",
  "provider": {"@id": "https://www.gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"},
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roof Replacement Options",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "GAF Timberline HDZ Roof Replacement"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Class 4 Impact-Resistant Roof Replacement"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "CertainTeed Landmark Roof Replacement"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Malarkey Vista AR Roof Replacement"}}
    ]
  }
};

const faqSchema = buildFaqSchema(FAQS);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Roof Replacement", "item": "https://www.gatesroof.com/services/roof-replacement"}
  ]
};

export default function Page() {
  return (
    <>
      <PageSchema route="/services/roof-replacement" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RoofReplacementContent />
    </>
  );
}

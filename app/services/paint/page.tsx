import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import PaintContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Exterior Painting CO | Certified ★ Free Estimates",
  description: "Professional exterior painting across Colorado. Protect your home from the elements and refresh your curb appeal. 4x manufacturer certified. Free estimate.",
  alternates: { canonical: "https://www.gatesroof.com/services/paint" },
  openGraph: {
    title: "Exterior Painting CO | Certified ★ Free Estimates",
    description: "Professional exterior painting across Colorado. Protect your home from the elements and refresh your curb appeal. 4x manufacturer certified. Free estimate.",
    url: "https://www.gatesroof.com/services/paint",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Interior and Exterior Painting",
  "name": "Interior and Exterior Painting in Colorado",
  "description": "Professional interior and exterior painting across Colorado's Front Range. Surface preparation, premium paints, and lasting results.",
  "url": "https://www.gatesroof.com/services/paint",
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
    { "@type": "ListItem", "position": 3, "name": "Painting", "item": "https://www.gatesroof.com/services/paint" },
  ],
};

export default function Page() {
  return (
    <>
      <PageSchema route="/services/paint" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PaintContent />
    </>
  );
}

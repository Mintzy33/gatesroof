import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import RepairContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roof Repair CO | Fast, Certified ★ Free Inspection",
  description: "Same-week roof repair in Colorado. Leaks, missing shingles, wind and storm fixes. Locally operated, 10+ years experience. Free inspection. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/services/roof-repair" },
  openGraph: {
    title: "Roof Repair CO | Fast, Certified ★ Free Inspection",
    description: "Same-week roof repair in Colorado. Leaks, missing shingles, wind and storm fixes. Locally operated, 10+ years experience. Free inspection. (720) 766-3377",
    url: "https://www.gatesroof.com/services/roof-repair",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Roof Repair",
  "name": "Roof Repair Services in Colorado",
  "description": "Fast, reliable roof repairs for leaks, missing shingles, flashing damage, and wind damage. Same-week scheduling available.",
  "url": "https://www.gatesroof.com/services/roof-repair",
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
    {"@type": "ListItem", "position": 3, "name": "Roof Repair", "item": "https://www.gatesroof.com/services/roof-repair"}
  ]
};

export default function Page() {
  return (
    <>
      <PageSchema route="/services/roof-repair" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RepairContent />
    </>
  );
}

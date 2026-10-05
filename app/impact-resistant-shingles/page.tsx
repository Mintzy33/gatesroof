import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import ImpactResistantContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Class 4 Impact Resistant Shingles CO | Save 28%",
  description: "Class 4 impact resistant shingles may save you up to 28% on insurance premiums. Installed by a 4x certified Colorado roofer. Free estimate today.",
  alternates: { canonical: "https://www.gatesroof.com/impact-resistant-shingles" },
  openGraph: {
    title: "Class 4 Impact Resistant Shingles CO | Save 28%",
    description: "Class 4 impact resistant shingles may save you up to 28% on insurance premiums. Installed by a 4x certified Colorado roofer. Free estimate today.",
    url: "https://www.gatesroof.com/impact-resistant-shingles",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Impact Resistant Shingles Colorado" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Impact Resistant Shingle Installation",
  "name": "Class 4 Impact Resistant Shingles in Colorado",
  "description": "Professional installation of Class 4 impact resistant shingles. UL 2218 rated products from GAF, Owens Corning, Malarkey, and CertainTeed. Many Colorado homeowners save up to 28% on insurance premiums. Savings vary by carrier and policy.",
  "url": "https://www.gatesroof.com/impact-resistant-shingles",
  "provider": {"@id": "https://www.gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"},
  "offers": {
    "@type": "Offer",
    "description": "Free roof inspection and impact resistant shingle consultation",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = buildFaqSchema(FAQS);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Impact Resistant Shingles", "item": "https://www.gatesroof.com/impact-resistant-shingles"}
  ]
};

export default function Page() {
  return (
    <>
      <PageSchema route="/impact-resistant-shingles" />
      <script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ImpactResistantContent />
    </>
  );
}

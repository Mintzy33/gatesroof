import type { Metadata } from "next";
import Script from "next/script";
import GuttersContent from "./content";

export const metadata: Metadata = {
  title: "Gutter Installation Colorado | Gates Enterprises LLC",
  description: "Seamless gutter installation and gutter guards in Colorado. Protect your home from water damage. Free estimates.",
  alternates: { canonical: "https://gatesroof.com/services/gutters-guards" },
  openGraph: {
    title: "Gutter Installation Colorado | Gates Enterprises LLC",
    description: "Seamless gutter installation and gutter guards in Colorado. Protect your home from water damage. Free estimates.",
    url: "https://gatesroof.com/services/gutters-guards",
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
  "url": "https://gatesroof.com/services/gutters-guards",
  "provider": {"@id": "https://gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"}
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How much do seamless gutters cost in Denver?", "acceptedAnswer": {"@type": "Answer", "text": "Seamless aluminum gutters typically cost $6 to $12 per linear foot installed, depending on gauge, size, and accessibility. An average home with 150 to 200 linear feet runs $1,200 to $2,400 for gutters alone. Guards add $3 to $8 per foot."}},
    {"@type": "Question", "name": "How often should gutters be cleaned?", "acceptedAnswer": {"@type": "Answer", "text": "Without guards, twice a year minimum. Spring and fall. With guards installed, every 2 to 3 years is usually sufficient. Homes with heavy tree coverage may need more frequent attention."}},
    {"@type": "Question", "name": "Can gutters be installed in winter?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We install gutters year round. Aluminum is easy to work with in cold weather, and there's no sealant or adhesive that needs warm temperatures to cure."}},
    {"@type": "Question", "name": "What color options are available?", "acceptedAnswer": {"@type": "Answer", "text": "Over 25 standard colors to match virtually any home exterior. We bring a color chart so you can match your trim, fascia, or siding."}},
    {"@type": "Question", "name": "Are damaged gutters covered by insurance?", "acceptedAnswer": {"@type": "Answer", "text": "If the damage was caused by hail or wind, yes. We include gutter damage in storm damage restorations and document it for your insurance company."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Gutters & Guards", "item": "https://gatesroof.com/services/gutters-guards"}
  ]
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GuttersContent />
    </>
  );
}

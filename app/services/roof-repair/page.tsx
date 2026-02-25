import type { Metadata } from "next";
import Script from "next/script";
import RepairContent from "./content";

export const metadata: Metadata = {
  title: "Roof Repair Colorado | Gates Enterprises LLC",
  description: "Fast, reliable roof repairs for leaks, missing shingles, and wind damage. Same week scheduling. Certified Colorado roofers. Free inspections.",
  alternates: { canonical: "https://gatesroof.com/services/roof-repair" },
  openGraph: {
    title: "Roof Repair Colorado | Gates Enterprises LLC",
    description: "Fast, reliable roof repairs for leaks, missing shingles, and wind damage. Same week scheduling. Certified Colorado roofers. Free inspections.",
    url: "https://gatesroof.com/services/roof-repair",
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
  "url": "https://gatesroof.com/services/roof-repair",
  "provider": {"@id": "https://gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"}
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How much does a roof repair cost in Denver?", "acceptedAnswer": {"@type": "Answer", "text": "Simple repairs like pipe boot replacements or a few missing shingles typically run $200 to $600. More complex repairs involving flashing, valleys, or multiple areas can range from $500 to $2,000. We'll give you an exact price before we start."}},
    {"@type": "Question", "name": "Can you repair my roof temporarily until I can afford a replacement?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We can make targeted repairs to stop active leaks and buy you time. We'll be upfront about how long the repair should hold and what a replacement would cost when you're ready."}},
    {"@type": "Question", "name": "Do you repair flat roofs?", "acceptedAnswer": {"@type": "Answer", "text": "We primarily work on residential pitched roofs. For flat or low slope commercial roofs, we can refer you to a trusted specialist."}},
    {"@type": "Question", "name": "Is a roof leak covered by insurance?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on the cause. Storm damage is typically covered. Wear and tear or deferred maintenance is not. We can inspect and help you determine whether it makes sense to file."}},
    {"@type": "Question", "name": "How do I know if I need a repair or a full replacement?", "acceptedAnswer": {"@type": "Answer", "text": "Age, extent of damage, and condition of the surrounding shingles all factor in. If your roof is under 15 years old and the damage is isolated, repair is usually the right call. We'll give you an honest recommendation either way."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services"},
    {"@type": "ListItem", "position": 3, "name": "Roof Repair", "item": "https://gatesroof.com/services/roof-repair"}
  ]
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RepairContent />
    </>
  );
}

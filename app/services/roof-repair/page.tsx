import type { Metadata } from "next";
import Script from "next/script";
import RepairContent from "./content";

export const metadata: Metadata = {
  title: "Roof Repair Colorado | Gates Enterprises LLC",
  description: "Fast, reliable roof repairs for leaks, missing shingles, and wind damage. Same week scheduling. Certified Colorado roofers. Free inspections.",
  alternates: { canonical: "https://www.gatesroof.com/services/roof-repair" },
  openGraph: {
    title: "Roof Repair Colorado | Gates Enterprises LLC",
    description: "Fast, reliable roof repairs for leaks, missing shingles, and wind damage. Same week scheduling. Certified Colorado roofers. Free inspections.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How much does a roof repair cost in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "Minor roof repairs in Colorado typically cost $300 to $1,500. Simple repairs like pipe boot replacements run $200 to $600. More complex repairs involving flashing or valleys range from $500 to $2,000."}},
    {"@type": "Question", "name": "How do I know if my roof needs repair or full replacement?", "acceptedAnswer": {"@type": "Answer", "text": "If your roof is less than 15 years old and the damage is isolated, repair is usually the right call. If approaching 20+ years with widespread damage, replacement is the better investment."}},
    {"@type": "Question", "name": "What are the most common roof repairs in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "Pipe boot seal failures, flashing leaks around chimneys and skylights, wind-lifted shingles, and minor hail damage. Most are straightforward and cost a fraction of a full replacement."}},
    {"@type": "Question", "name": "Is a roof leak covered by insurance?", "acceptedAnswer": {"@type": "Answer", "text": "Storm damage from hail, wind, or fallen debris is typically covered. Normal wear and tear or deferred maintenance is not. We can inspect and help determine if the damage is claim-worthy."}},
    {"@type": "Question", "name": "How quickly can you respond to an emergency roof repair?", "acceptedAnswer": {"@type": "Answer", "text": "Emergency tarping to stop active leaks can often be done same-day or next-day. Our team carries common repair materials on our trucks to minimize return trips."}},
    {"@type": "Question", "name": "Do you repair flat roofs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We handle both pitched and flat roof repairs, including TPO, EPDM, and modified bitumen systems."}}
  ]
};

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
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RepairContent />
    </>
  );
}

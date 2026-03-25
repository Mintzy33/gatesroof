import type { Metadata } from "next";
import Script from "next/script";
import SidingContent from "./content";

export const metadata: Metadata = {
  title: "Siding Installation Colorado | Gates Enterprises LLC",
  description: "Professional siding installation and repair in Colorado. James Hardie, vinyl, and engineered wood. Free estimates from Gates Enterprises.",
  alternates: { canonical: "https://www.gatesroof.com/services/siding-exterior" },
  openGraph: {
    title: "Siding Installation Colorado | Gates Enterprises LLC",
    description: "Professional siding installation and repair in Colorado. James Hardie, vinyl, and engineered wood. Free estimates from Gates Enterprises.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How much does siding replacement cost in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "Siding replacement in Colorado costs $8,000 to $20,000 depending on material, home size, and complexity. James Hardie fiber cement typically runs $10 to $15 per square foot installed."}},
    {"@type": "Question", "name": "What siding material is best for Colorado homes?", "acceptedAnswer": {"@type": "Answer", "text": "James Hardie fiber cement siding is the top recommendation for Colorado. It handles UV radiation, temperature extremes, and hail better than vinyl or wood and carries a Class A fire rating."}},
    {"@type": "Question", "name": "Does homeowners insurance cover siding replacement?", "acceptedAnswer": {"@type": "Answer", "text": "If your siding was damaged by hail, wind, or another covered event, your homeowners insurance should cover the replacement cost minus your deductible."}},
    {"@type": "Question", "name": "How long does siding installation take?", "acceptedAnswer": {"@type": "Answer", "text": "A full siding installation typically takes one to two weeks depending on home size and complexity. Partial repairs are usually completed in one to two days."}},
    {"@type": "Question", "name": "Can siding and roof replacement be done at the same time?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Coordinating roof and siding work saves time, reduces disruption, and often reduces total cost. If both were damaged by the same storm, a single insurance claim typically covers everything."}},
    {"@type": "Question", "name": "What is James Hardie fiber cement siding?", "acceptedAnswer": {"@type": "Answer", "text": "James Hardie is the leading manufacturer of fiber cement siding, made from a mix of cement, sand, and cellulose fibers. It resists fire, rot, pests, and hail better than vinyl or wood."}},
    {"@type": "Question", "name": "Will new siding improve my home's energy efficiency?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. New siding installation includes house wrap and often insulated sheathing that significantly reduces air infiltration, keeping conditioned air inside and extreme temperatures outside."}}
  ]
};

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
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SidingContent />
    </>
  );
}

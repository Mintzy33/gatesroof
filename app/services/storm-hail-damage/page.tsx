import type { Metadata } from "next";
import Script from "next/script";
import StormContent from "./content";

export const metadata: Metadata = {
  title: "Storm Damage & Hail Repair Colorado | Gates Enterprises",
  description: "Colorado storm damage and hail repair from a quadruple certified roofing company. Free inspections, insurance restoration support, and warranties up to 50 years. Call (720) 766-3377.",
  alternates: { canonical: "https://gatesroof.com/services/storm-hail-damage" },
  openGraph: {
    title: "Storm Damage & Hail Repair Colorado | Gates Enterprises",
    description: "Colorado storm damage and hail repair from a quadruple certified roofing company. Free inspections, insurance restoration support, and warranties up to 50 years. Call (720) 766-3377.",
    url: "https://gatesroof.com/services/storm-hail-damage",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado Roofing Experts" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Storm & Hail Damage Repair",
  "name": "Storm & Hail Damage Roof Repair in Colorado",
  "description": "Expert hail and storm damage assessment, repair, and full replacement. We work directly with your insurance company to maximize your coverage.",
  "url": "https://gatesroof.com/services/storm-hail-damage",
  "provider": { "@id": "https://gatesroof.com/#organization" },
  "areaServed": { "@type": "State", "name": "Colorado" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I know if my roof has hail damage?", "acceptedAnswer": { "@type": "Answer", "text": "Hail damage isn't always visible from the ground. Common signs include dented gutters, granule loss in your downspouts, and dings on roof vents or flashing. Even if your roof looks fine from the street, hail can compromise the shingle's integrity underneath. We offer free inspections so you can know for certain." } },
    { "@type": "Question", "name": "Should I file with my insurance for storm damage?", "acceptedAnswer": { "@type": "Answer", "text": "If the damage exceeds your deductible, filing is usually the right move. Colorado is one of the most hail prone states in the country, and most homeowner policies are designed to cover exactly this kind of damage. Our team has helped thousands of homeowners navigate the restoration process from initial inspection through final install." } },
    { "@type": "Question", "name": "How quickly can you respond after a storm?", "acceptedAnswer": { "@type": "Answer", "text": "Storm response is our top priority. With over 100 team members across Colorado's Front Range, we have the capacity to mobilize immediately after a storm hits." } },
    { "@type": "Question", "name": "Will my insurance cover the full cost of repairs?", "acceptedAnswer": { "@type": "Answer", "text": "Most homeowner policies cover storm damage minus your deductible. We document every detail thoroughly with photos, measurements, and manufacturer specifications to support a complete and fair resolution." } },
    { "@type": "Question", "name": "What should I do immediately after a hailstorm?", "acceptedAnswer": { "@type": "Answer", "text": "Don't get on your roof. Document what you can see from the ground, take photos of any damage to gutters, siding, or windows, and call us for a free inspection. The sooner you get a professional assessment, the stronger your case will be." } },
    { "@type": "Question", "name": "Do I need to pay anything out of pocket?", "acceptedAnswer": { "@type": "Answer", "text": "Your only out of pocket cost is typically your insurance deductible. The rest is covered by your policy. We work directly with your insurance company to make sure the scope of work and pricing align so there are no surprises." } },
    { "@type": "Question", "name": "Can I choose my own contractor or does insurance pick one?", "acceptedAnswer": { "@type": "Answer", "text": "You always have the right to choose your own contractor in Colorado. Your insurance company may suggest preferred vendors, but you are not required to use them." } },
    { "@type": "Question", "name": "What if my insurance restoration gets denied?", "acceptedAnswer": { "@type": "Answer", "text": "It happens, but it's not always the final answer. We can help you understand why coverage was denied and whether a re inspection or supplement is worth pursuing." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gatesroof.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gatesroof.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Storm & Hail Damage", "item": "https://gatesroof.com/services/storm-hail-damage" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <StormContent />
    </>
  );
}

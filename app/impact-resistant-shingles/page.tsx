import type { Metadata } from "next";
import Script from "next/script";
import ImpactResistantContent from "./content";

export const metadata: Metadata = {
  title: "Class 4 Impact Resistant Shingles Colorado | Save on Insurance | Gates Enterprises",
  description: "Class 4 impact resistant shingles tested to UL 2218. Many Colorado homeowners save up to 28% on insurance premiums. GAF, Owens Corning, Malarkey, CertainTeed. Free estimates. Call (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/impact-resistant-shingles" },
  openGraph: {
    title: "Class 4 Impact Resistant Shingles Colorado | Gates Enterprises LLC",
    description: "Class 4 impact resistant shingles tested to UL 2218. Many Colorado homeowners save up to 28% on insurance premiums. Free estimates. Call (720) 766-3377.",
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
  "name": "Class 4 Impact Resistant Shingle Installation in Colorado",
  "description": "Installation of UL 2218 Class 4 impact resistant shingles from GAF, CertainTeed, Owens Corning, and Malarkey. Quadruple manufacturer certified contractor.",
  "url": "https://www.gatesroof.com/impact-resistant-shingles",
  "provider": {"@id": "https://www.gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"},
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Impact Resistant Shingle Options",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "GAF Timberline AS II Installation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Owens Corning Duration FLEX Installation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Malarkey Vista AR Installation"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "CertainTeed Presidential Impact Installation"}}
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What are Class 4 impact resistant shingles?", "acceptedAnswer": {"@type": "Answer", "text": "Class 4 is the highest impact resistance rating for asphalt shingles. They are tested to the UL 2218 standard, which involves dropping a 2 inch steel ball from 20 feet onto the shingle. Class 4 shingles must show no cracking, splitting, or tearing after impact."}},
    {"@type": "Question", "name": "How much can I save on insurance with impact resistant shingles?", "acceptedAnswer": {"@type": "Answer", "text": "Many Colorado homeowners save up to 28% on their homeowner's insurance premiums with Class 4 impact resistant shingles. Colorado law requires insurers to offer discounts for impact resistant roofing. Savings vary by carrier and policy. Contact your insurance company for your specific discount."}},
    {"@type": "Question", "name": "What is the UL 2218 testing standard?", "acceptedAnswer": {"@type": "Answer", "text": "UL 2218 is the standard used to test the impact resistance of roofing materials. Shingles are struck with steel balls of increasing size, from 1.25 inches (Class 1) up to 2 inches (Class 4). The shingle must show no visible damage after two strikes in the same spot."}},
    {"@type": "Question", "name": "Can I get Class 4 shingles through my insurance claim?", "acceptedAnswer": {"@type": "Answer", "text": "In many cases, if your insurance claim covers a full roof replacement, you may be able to upgrade to Class 4 impact resistant shingles at little or no additional cost beyond what your claim covers. Your coverage depends on your specific policy. We can help you understand your options."}},
    {"@type": "Question", "name": "Which brands of Class 4 shingles does Gates Enterprises install?", "acceptedAnswer": {"@type": "Answer", "text": "Gates Enterprises is quadruple manufacturer certified, meaning we install Class 4 shingles from all four major manufacturers: GAF Timberline AS II, Owens Corning Duration FLEX, Malarkey Vista AR, and CertainTeed Presidential Impact. Each has a unique look, price point, and warranty."}}
  ]
};

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
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ImpactResistantContent />
    </>
  );
}

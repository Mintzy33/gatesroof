import type { Metadata } from "next";
import Script from "next/script";
import RoofReplacementContent from "./content";

export const metadata: Metadata = {
  title: "Roof Replacement CO | 4x Certified ★ Free Estimates",
  description: "4x certified roof replacement in Colorado. 7,200+ roofs, warranties up to 50 years. GAF, Owens Corning, Malarkey & CertainTeed. Free estimates. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/services/roof-replacement" },
  openGraph: {
    title: "Roof Replacement CO | 4x Certified ★ Free Estimates",
    description: "4x certified roof replacement in Colorado. 7,200+ roofs, warranties up to 50 years. GAF, Owens Corning, Malarkey & CertainTeed. Free estimates. (720) 766-3377",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How long does a roof replacement take in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "Most residential roof replacements are completed in one to two days. Larger or more complex roofs with steep pitches, multiple valleys, or extensive deck repairs may take two to three days."}},
    {"@type": "Question", "name": "What does a roof replacement cost in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "The average roof replacement in Colorado costs between $8,000 and $25,000 depending on roof size, material, and complexity. If your roof was damaged by hail or wind, your homeowners insurance typically covers the cost minus your deductible."}},
    {"@type": "Question", "name": "What is the best roofing material for Colorado weather?", "acceptedAnswer": {"@type": "Answer", "text": "Class 4 impact-resistant shingles are the top choice for Colorado homes. They withstand hail impacts that destroy standard shingles, and most insurance companies offer 20 to 30% premium discounts for Class 4 roofs."}},
    {"@type": "Question", "name": "Does homeowners insurance cover roof replacement?", "acceptedAnswer": {"@type": "Answer", "text": "Insurance covers roof replacement when the damage was caused by a covered event like hail, wind, or fallen debris. If your roof reached end of life from normal wear, that is typically not covered. A free inspection will determine if your damage is claim-worthy."}},
    {"@type": "Question", "name": "How do I know if I need a full replacement vs repair?", "acceptedAnswer": {"@type": "Answer", "text": "If your roof is less than 15 years old and the damage is isolated, repair is usually the right call. If your roof is approaching 20+ years with widespread damage or systemic failure, replacement is the better investment."}},
    {"@type": "Question", "name": "What certifications should my roofer have?", "acceptedAnswer": {"@type": "Answer", "text": "Manufacturer certifications determine your warranty options. Gates Enterprises holds four premium certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master. Fewer than 2% of roofers nationwide hold even one."}},
    {"@type": "Question", "name": "Can I get a roof replaced in winter in Colorado?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Winter installations require special cold-weather techniques including hand-sealing shingles and using cold-weather adhesives. Spring and fall are ideal, but if you have storm damage or a leak, do not wait."}}
  ]
};

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
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RoofReplacementContent />
    </>
  );
}

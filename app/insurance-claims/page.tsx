import type { Metadata } from "next";
import Script from "next/script";
import InsuranceClaimsContent from "./content";

export const metadata: Metadata = {
  title: "Roof Insurance Claims CO | We Fight for You ★",
  description: "We handle your entire roof insurance claim: adjuster meetings, supplements & advocacy. Most pay only their deductible. 7,200+ claims. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/insurance-claims" },
  openGraph: {
    title: "Roof Insurance Claims CO | We Fight for You ★",
    description: "We handle your entire roof insurance claim: adjuster meetings, supplements & advocacy. Most pay only their deductible. 7,200+ claims. (720) 766-3377",
    url: "https://www.gatesroof.com/insurance-claims",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roof Insurance Claims Colorado" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Roof Insurance Claim Assistance",
  "name": "Roof Insurance Claims in Colorado",
  "description": "Full-service roof insurance claim support. Free inspection, adjuster coordination, supplement handling, and certified installation. Most homeowners pay only their deductible.",
  "url": "https://www.gatesroof.com/insurance-claims",
  "provider": {"@id": "https://www.gatesroof.com/#organization"},
  "areaServed": {"@type": "State", "name": "Colorado"},
  "offers": {
    "@type": "Offer",
    "description": "Free roof inspection and insurance claim consultation",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "How much does a roof insurance claim cost me out of pocket?", "acceptedAnswer": {"@type": "Answer", "text": "In most cases, your primary out of pocket cost is your insurance deductible. Gates Enterprises helps document damage and works with your insurance adjuster to support the coverage your policy provides. Homeowners are responsible for their deductible as required by Colorado law."}},
    {"@type": "Question", "name": "What is Gates Enterprises' insurance claim approval rate?", "acceptedAnswer": {"@type": "Answer", "text": "When Gates Enterprises recommends filing a claim, our approval rate is over 99%. We only recommend filing when we are confident the damage warrants a claim, and we document everything thoroughly to support approval."}},
    {"@type": "Question", "name": "What are supplements and why do they matter?", "acceptedAnswer": {"@type": "Answer", "text": "Supplements are additional documentation submitted to your insurance company when the initial estimate does not cover the full scope of work. Most homeowners do not know supplements exist. Gates Enterprises handles the entire supplement process, often recovering thousands of additional dollars for your project."}},
    {"@type": "Question", "name": "Does Gates Enterprises meet with my insurance adjuster?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We attend every adjuster meeting on site. We walk the roof with your adjuster, point out all documented damage, and ensure nothing is missed or undervalued."}},
    {"@type": "Question", "name": "Does my insurance cover the full cost of a roof replacement?", "acceptedAnswer": {"@type": "Answer", "text": "Most Colorado homeowner insurance policies cover the full replacement cost of your roof minus your deductible. Many homeowners do not realize this. Gates Enterprises works with your insurance company to pursue the coverage your policy provides."}},
    {"@type": "Question", "name": "How long does the insurance roof replacement process take?", "acceptedAnswer": {"@type": "Answer", "text": "From initial inspection to completed installation, most projects take 4 to 8 weeks. The timeline depends on insurance company response times and weather. We keep the process moving and communicate with you every step of the way."}}
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gatesroof.com"},
    {"@type": "ListItem", "position": 2, "name": "Insurance Claims", "item": "https://www.gatesroof.com/insurance-claims"}
  ]
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Roof Insurance Claim Services",
  "brand": {"@type": "Brand", "name": "Gates Enterprises LLC"},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "293",
    "bestRating": "5"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "author": {"@type": "Person", "name": "Colorado Homeowner"},
      "reviewBody": "We thought we'd have to pay thousands out of pocket. Gates documented everything and worked with our adjuster. We only paid our deductible."
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <InsuranceClaimsContent />
    </>
  );
}

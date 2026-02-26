import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";

export const metadata: Metadata = {
  title: "Roofing Contractor Parker CO | Gates Enterprises",
  description: "Parker's trusted roofing contractor. 4x certified, 293+ reviews, 4.8★. Roof replacement, hail damage repair & insurance claims. Free inspection. Call (720) 766-3377.",
  alternates: { canonical: "https://gatesroof.com/areas/parker" },
  openGraph: {
    title: "Roofing Contractor Parker CO | Gates Enterprises",
    description: "Parker's trusted roofing contractor. 4x certified, 293+ reviews, 4.8★. Roof replacement, hail damage repair & insurance claims. Free inspection. Call (720) 766-3377.",
    url: "https://gatesroof.com/areas/parker",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Parker, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://gatesroof.com/#organization",
      "name": "Gates Enterprises LLC",
      "image": "https://gatesroof.com/images/gates-enterprises-logo.png",
      "url": "https://gatesroof.com",
      "telephone": "(720) 766-3377",
      "foundingDate": "2017-05",
      "description": "Quadruple manufacturer certified roofing contractor serving Parker, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, CertainTeed Shingle Master Pro. 294+ Google reviews, 4.8 stars.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Parker",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Douglas County, Colorado"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.5186,
          "longitude": -104.7614
        },
        "geoRadius": "30"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "294",
        "bestRating": "5"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing and Exterior Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Restoration", "url": "https://gatesroof.com/storm-damage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement", "url": "https://gatesroof.com/roof-replacement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair", "url": "https://gatesroof.com/roof-repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding", "url": "https://gatesroof.com/siding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutters", "url": "https://gatesroof.com/gutters" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Windows", "url": "https://gatesroof.com/windows" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Painting", "url": "https://gatesroof.com/painting" } }
        ]
      },
      "sameAs": [
        "https://www.google.com/maps/place/Gates+Enterprises+LLC",
        "https://www.facebook.com/gatesenterprises",
        "https://www.instagram.com/gatesenterprises"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I know if my Parker home has hail damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Parker homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises work with my insurance company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports, and work directly with your insurance company throughout the restoration process."
          }
        },
        {
          "@type": "Question",
          "name": "Why does Parker get so much hail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parker sits along the Palmer Divide, a ridge of higher elevation terrain between Denver and Colorado Springs. This geography creates strong updrafts during storm season that produce frequent and often severe hailstorms. Douglas County consistently ranks among the most hail prone counties in Colorado."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials do you recommend for Parker homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Given Parker's severe weather exposure, we recommend impact resistant shingles rated Class 3 or Class 4. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a roof replacement take in Parker?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential roof replacements are completed in one to two days, depending on the size and complexity of the roof."
          }
        },
        {
          "@type": "Question",
          "name": "Is Gates Enterprises LLC licensed and insured in Douglas County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Douglas County, the Town of Parker, and throughout Colorado's Front Range."
          }
        },
        {
          "@type": "Question",
          "name": "How soon should I get an inspection after a hailstorm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As soon as possible. Most insurance policies have a deadline for filing storm damage claims, often within one year of the event. Hidden damage can worsen over time if left unaddressed. We recommend scheduling a free inspection within a few weeks of any significant storm."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="parker-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <CityContent />
    </>
  );
}

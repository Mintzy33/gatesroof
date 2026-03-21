import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Brighton Roof Repair & Replacement | 4x Certified | Gates Enterprises",
  description: "Brighton's 4x certified roofer with 301 Google reviews and 4.8 stars. Free inspections, storm damage experts. Call Gates Enterprises at (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/areas/brighton" },
  openGraph: {
    title: "Brighton Roof Repair & Replacement | 4x Certified | Gates Enterprises",
    description: "Brighton's 4x certified roofer with 301 Google reviews and 4.8 stars. Free inspections, storm damage experts. Call Gates Enterprises at (720) 766-3377.",
    url: "https://www.gatesroof.com/areas/brighton",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Brighton, CO" }],
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.gatesroof.com/#organization",
      "name": "Gates Enterprises LLC",
      "image": "https://www.gatesroof.com/images/gates-enterprises-logo.png",
      "url": "https://www.gatesroof.com",
      "telephone": "(720) 766-3377",
      "foundingDate": "2017-05",
      "description": "Quadruple manufacturer certified roofing contractor serving Brighton, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, CertainTeed Shingle Master Pro. 300+ Google reviews, 4.8 stars.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Brighton",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Adams County, Colorado"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.9853,
          "longitude": -104.8206
        },
        "geoRadius": "30"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "301",
        "bestRating": "5"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing and Exterior Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Restoration", "url": "https://www.gatesroof.com/storm-damage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement", "url": "https://www.gatesroof.com/roof-replacement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair", "url": "https://www.gatesroof.com/roof-repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding", "url": "https://www.gatesroof.com/siding" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutters", "url": "https://www.gatesroof.com/gutters" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Windows", "url": "https://www.gatesroof.com/windows" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Painting", "url": "https://www.gatesroof.com/painting" } }
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
          "name": "How do I know if my Brighton home has hail damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. Brighton's open plains exposure means hailstones often arrive at high velocity with little wind break. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Brighton homeowners."
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
          "name": "Why does Brighton get so much hail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brighton sits on the open plains northeast of Denver with minimal terrain protection. Storms that develop along the Front Range move across flat agricultural land with nothing to weaken them before reaching Brighton neighborhoods. Adams County consistently sees high volumes of hail damage claims each storm season."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials do you recommend for Brighton homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Given Brighton's severe hail exposure on the open plains, we recommend impact resistant shingles rated Class 3 or Class 4. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a roof replacement take in Brighton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential roof replacements are completed in one to two days, depending on the size and complexity of the roof."
          }
        },
        {
          "@type": "Question",
          "name": "Is Gates Enterprises LLC licensed and insured in Adams County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Adams County, the City of Brighton, and throughout Colorado's Front Range."
          }
        },
        {
          "@type": "Question",
          "name": "Does Brighton's rapid growth affect roofing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brighton is one of the fastest growing communities in Colorado. While newer homes may have intact roofs, even recent construction can sustain hail damage. We work with both established neighborhoods and new developments across Brighton, and our team is familiar with the building codes and HOA requirements in the area."
          }
        }
      ]
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Brighton", "brighton");

export default function Page() {
  return (
    <>
      <Script id="brighton-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="brighton-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}

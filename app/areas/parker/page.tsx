import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Parker CO Roofer | 4x Certified, 306+ Reviews ★",
  description: "Parker CO roofing by a 4x manufacturer certified contractor. Roof replacement, hail repair, and insurance help. 7,200+ roofs done. Free inspection.",
  alternates: { canonical: "https://www.gatesroof.com/areas/parker" },
  openGraph: {
    title: "Parker CO Roofer | 4x Certified, 306+ Reviews ★",
    description: "Parker CO roofing by a 4x manufacturer certified contractor. Roof replacement, hail repair, and insurance help. 7,200+ roofs done. Free inspection.",
    url: "https://www.gatesroof.com/areas/parker",
    siteName: "Gates Enterprises",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises - Roofing Contractor in Parker, CO" }],
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
      "description": "Quadruple manufacturer certified roofing contractor serving Parker, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed Shingle Master Pro. 306 Google reviews, 4.9 stars. 7,200+ completed projects. Roof replacement, hail damage repair, and storm restoration for Parker homeowners along the Palmer Divide hail corridor.",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Parker",
        "addressRegion": "CO",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.5186,
        "longitude": -104.7614
      },
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
        "ratingValue": "4.9",
        "reviewCount": "306",
        "bestRating": "5"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing and Exterior Services in Parker CO",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement in Parker CO", "url": "https://www.gatesroof.com/services/roof-replacement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Restoration in Parker CO", "url": "https://www.gatesroof.com/services/storm-hail-damage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair in Parker CO", "url": "https://www.gatesroof.com/services/roof-repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Inspection in Parker CO", "url": "https://www.gatesroof.com/areas/parker" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Installation in Parker CO", "url": "https://www.gatesroof.com/services/gutters-guards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Installation in Parker CO", "url": "https://www.gatesroof.com/services/siding-exterior" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window Replacement in Parker CO", "url": "https://www.gatesroof.com/services/windows" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting in Parker CO", "url": "https://www.gatesroof.com/services/paint" } }
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
          "name": "How much does a new roof cost in Parker CO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A new roof in Parker typically costs between $8,000 and $25,000+ depending on the size of your home, the roofing materials selected, and the complexity of the roof. Many Parker homeowners pay little to nothing out of pocket when their roof replacement is covered by a legitimate insurance claim for storm damage. Gates Enterprises offers free inspections and detailed estimates so you know exactly what to expect before any work begins."
          }
        },
        {
          "@type": "Question",
          "name": "Does insurance cover hail damage in Parker?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, yes. Standard homeowners insurance policies in Colorado typically cover hail damage to your roof. Parker sits along the Palmer Divide, one of the most active hail corridors in the country, so insurers in this area are familiar with storm damage claims. Gates Enterprises documents all damage thoroughly and works directly with your insurance company to support your claim."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my Parker home has hail damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. Soft metal damage on AC units, mailboxes, and window trim can also indicate roof damage. The most reliable way to know is to schedule a professional inspection. Gates Enterprises offers free roof inspections for Parker homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises work with my insurance company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports with photo evidence, and coordinate documentation with your insurance company throughout the restoration process to ensure nothing is missed."
          }
        },
        {
          "@type": "Question",
          "name": "Why does Parker get so much hail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parker sits along the Palmer Divide, a ridge of higher elevation terrain between Denver and Colorado Springs. This geography creates strong updrafts during storm season that produce frequent and often severe hailstorms. Douglas County consistently ranks among the most hail prone counties in Colorado, with 3 to 5 significant hail events in a typical year."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials are best for Parker's hail corridor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Given Parker's position along the Palmer Divide hail corridor, we recommend impact resistant shingles rated Class 3 or Class 4. These shingles are designed to withstand hail impact and may qualify you for insurance premium discounts. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a roof replacement take in Parker?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential roof replacements in Parker are completed in one to two days, depending on the size and complexity of the roof. Larger or more complex projects may take an additional day. Gates Enterprises coordinates scheduling, materials delivery, and crew assignments to minimize disruption to your family."
          }
        },
        {
          "@type": "Question",
          "name": "Is Gates Enterprises licensed and insured in Douglas County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises is fully licensed and insured to perform roofing and exterior work in Douglas County, the Town of Parker, and throughout Colorado's Front Range."
          }
        },
        {
          "@type": "Question",
          "name": "How soon should I get an inspection after a hailstorm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As soon as possible. Most insurance policies have a deadline for filing storm damage claims, often within one year of the event. Hidden damage can worsen over time if left unaddressed, potentially leading to leaks, mold, or structural issues. We recommend scheduling a free inspection within a few weeks of any significant storm."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Roofing Services in Parker, CO",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.gatesroof.com/#organization"
      },
      "areaServed": {
        "@type": "City",
        "name": "Parker",
        "containedInPlace": { "@type": "State", "name": "Colorado" }
      },
      "serviceType": "Roofing Contractor",
      "description": "Complete roofing services for Parker, CO homeowners including roof replacement, storm damage restoration, roof repair, inspections, gutters, siding, windows, and painting. Quadruple manufacturer certified with 306 Google reviews and 4.9 stars.",
      "offers": {
        "@type": "Offer",
        "description": "Free Roof Inspection in Parker CO",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
};

const areaBreadcrumbs = cityBreadcrumb("Parker", "parker");

export default function Page() {
  return (
    <>
      <Script id="parker-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <Script id="parker-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Roofing Contractor Morrison CO | Gates Enterprises",
  description: "Morrison's trusted roofing contractor. 4x certified, 300+ reviews, 4.8★. Roof replacement, hail damage repair & insurance claims. Free inspection. Call (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/areas/morrison" },
  openGraph: {
    title: "Roofing Contractor Morrison CO | Gates Enterprises",
    description: "Morrison's trusted roofing contractor. 4x certified, 300+ reviews, 4.8★. Roof replacement, hail damage repair & insurance claims. Free inspection. Call (720) 766-3377.",
    url: "https://www.gatesroof.com/areas/morrison",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Morrison, CO" }],
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
      "description": "Quadruple manufacturer certified roofing contractor serving Morrison, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, CertainTeed Shingle Master Pro. 300+ Google reviews, 4.8 stars.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Morrison",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Jefferson County, Colorado"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.6536,
          "longitude": -105.1911
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
          "name": "How do I know if my Morrison home has hail damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hail damage is not always visible from the ground, especially on mountain homes with steep roof pitches. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Morrison homeowners."
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
          "name": "How do mountain weather patterns affect roofs in Morrison?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Morrison sits at approximately 5,800 feet elevation at the transition between the plains and the foothills. This geography creates unique weather patterns including sudden hailstorms, high winds channeled through canyons, heavy snow loads, and rapid temperature swings. These conditions accelerate roof wear and make impact resistant, weather rated materials essential."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials do you recommend for Morrison homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For Morrison's mountain environment, we recommend impact resistant shingles rated Class 3 or Class 4 with high wind ratings. Materials that handle rapid freeze thaw cycles and heavy snow loads perform best at foothills elevation. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a roof replacement take in Morrison?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential roof replacements are completed in one to two days. However, Morrison homes with steep pitches, complex roof lines, or limited access on mountain properties may require additional time. Our team plans logistics carefully to ensure efficient completion."
          }
        },
        {
          "@type": "Question",
          "name": "Is Gates Enterprises LLC licensed and insured in Jefferson County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Jefferson County, the Town of Morrison, and throughout Colorado's Front Range."
          }
        },
        {
          "@type": "Question",
          "name": "Can Gates Enterprises handle steep mountain roofs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Many Morrison homes feature steep roof pitches designed for snow shedding, along with complex architectural details. Our crews are experienced with mountain roofing installations and have the safety equipment and expertise to work on steep and high elevation roofs safely and effectively."
          }
        }
      ]
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Morrison", "morrison");

export default function Page() {
  return (
    <>
      <Script id="morrison-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="morrison-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";

export const metadata: Metadata = {
  title: "Lakewood Roofing Company | Gates Enterprises — Headquartered in Lakewood, CO",
  description: "Lakewood's own roofing company. 4x certified, 7,200+ roofs, 4.8★ from 293+ reviews. Roof replacement, hail damage repair & insurance claims. Call (720) 766-3377.",
  alternates: { canonical: "https://gatesroof.com/areas/lakewood" },
  openGraph: {
    title: "Lakewood Roofing Company | Gates Enterprises — Headquartered in Lakewood, CO",
    description: "Lakewood's own roofing company. 4x certified, 7,200+ roofs, 4.8★ from 293+ reviews. Roof replacement, hail damage repair & insurance claims. Call (720) 766-3377.",
    url: "https://gatesroof.com/areas/lakewood",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Lakewood, CO" }],
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
      "description": "Locally headquartered roofing contractor in Lakewood, CO. Gates Enterprises LLC is quadruple manufacturer certified with 294+ Google reviews and 4.8 stars. Serving Lakewood and Colorado's Front Range since 2017.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1445 Holland St",
        "addressLocality": "Lakewood",
        "addressRegion": "CO",
        "postalCode": "80215",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Lakewood",
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
          "latitude": 39.7047,
          "longitude": -105.0814
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
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Restoration", "url": "https://gatesroof.com/services/storm-hail-damage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement", "url": "https://gatesroof.com/services/roof-replacement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair", "url": "https://gatesroof.com/services/roof-repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding", "url": "https://gatesroof.com/services/siding-exterior" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutters", "url": "https://gatesroof.com/services/gutters-guards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Windows", "url": "https://gatesroof.com/services/windows" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Painting", "url": "https://gatesroof.com/services/paint" } }
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
          "name": "Is Gates Enterprises actually based in Lakewood?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is headquartered in Lakewood, CO. This is our home and has been since we were founded in May 2017. When you hire us, you are hiring your neighbors."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my Lakewood home has hail damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hail damage is often invisible from the ground. Signs to watch for include dented gutters, granule accumulation in downspout splash zones, and cracked or bruised shingles. The most reliable way to know is a professional inspection. Gates Enterprises LLC offers free inspections for Lakewood homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises work with my insurance company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all damage with detailed photos and measurements, provide comprehensive reports, and work directly with your insurance company throughout the entire restoration process."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials work best for Lakewood homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend Class 3 or Class 4 impact resistant shingles for Lakewood homes due to the frequency of hail in Jefferson County. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can you inspect my roof after a storm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because we are headquartered in Lakewood, we can typically schedule inspections within days of a storm event. During peak storm season, demand increases, so we recommend reaching out as soon as possible."
          }
        },
        {
          "@type": "Question",
          "name": "What warranties are available through Gates Enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our four manufacturer certifications unlock the highest tier warranties available from each manufacturer, including GAF's Golden Pledge with 25 year workmanship coverage, Owens Corning's Platinum Protection, Malarkey's Emerald level warranties, and CertainTeed's SureStart PLUS coverage."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises offer free inspections and estimates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer completely free roof inspections and estimates for all Lakewood homeowners. No pressure, no obligation."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="lakewood-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <CityContent />
    </>
  );
}

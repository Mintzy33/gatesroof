import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";

export const metadata: Metadata = {
  title: "Roofing Contractor Denver CO | Gates Enterprises",
  description: "Denver's top-rated roofing contractor. 4x manufacturer certified, 293+ reviews, 4.8★. Storm damage, roof replacement, siding & gutters. Free inspection.",
  alternates: { canonical: "https://gatesroof.com/areas/denver" },
  openGraph: {
    title: "Roofing Contractor Denver CO | Gates Enterprises",
    description: "Denver's top-rated roofing contractor. 4x manufacturer certified, 293+ reviews, 4.8★. Storm damage, roof replacement, siding & gutters. Free inspection.",
    url: "https://gatesroof.com/areas/denver",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Denver, CO" }],
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
      "description": "Quadruple manufacturer certified roofing contractor serving Denver, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, CertainTeed Shingle Master Pro. 294+ Google reviews, 4.8 stars.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lakewood",
        "addressRegion": "CO",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Denver",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Denver County, Colorado"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.7392,
          "longitude": -104.9903
        },
        "geoRadius": "40"
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
          "name": "How often should Denver homeowners inspect their roof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend a professional roof inspection at least once per year and after every significant hailstorm. Denver's position in the hail corridor means your roof takes more punishment than homes in most other cities."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises work with insurance companies on storm damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is an insurance restoration expert. We perform detailed inspections, document all damage with photos and measurements, and work directly with your insurance company throughout the restoration process."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work on older Denver homes with unique roof designs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Denver has a wide range of architectural styles, from Victorian homes in Capitol Hill to Craftsman bungalows in Park Hill to mid century ranches in Harvey Park. Our crews have experience with steep pitches, complex valleys, and everything in between."
          }
        },
        {
          "@type": "Question",
          "name": "What type of shingles hold up best in Denver's climate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend Class 3 or Class 4 impact resistant shingles for Denver homes. Our quadruple manufacturer certifications mean you can choose from the best product lines offered by GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical roof replacement take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential roof replacements in Denver are completed in one to three days, depending on the size of the home, roof complexity, and weather conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises serve the entire Denver metro?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC serves homeowners across Colorado's Front Range, including Lakewood, Parker, Aurora, Arvada, Westminster, Littleton, Centennial, and surrounding communities."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a cost for the initial roof inspection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Gates Enterprises LLC offers free roof inspections and estimates for Denver homeowners. We assess your roof's condition honestly and provide a clear recommendation with no pressure and no obligation."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script id="denver-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <CityContent />
    </>
  );
}

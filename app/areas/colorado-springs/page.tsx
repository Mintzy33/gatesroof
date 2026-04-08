import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Colorado Springs CO Roofer | 4x Certified, 308+ Reviews",
  description: "Colorado Springs roofer serving the Pikes Peak region. 4x certified, 4.9 stars, and warranties up to 50 years. Book your free roof inspection today.",
  alternates: { canonical: "https://www.gatesroof.com/areas/colorado-springs" },
  openGraph: {
    title: "Colorado Springs CO Roofer | 4x Certified, 308+ Reviews",
    description: "Colorado Springs roofer serving the Pikes Peak region. 4x certified, 4.9 stars, and warranties up to 50 years. Book your free roof inspection today.",
    url: "https://www.gatesroof.com/areas/colorado-springs",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Colorado Springs, CO" }],
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
      "description": "Quadruple manufacturer certified roofing contractor serving Colorado Springs, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed Shingle Master Pro. 308+ Google reviews, 4.9 stars.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lakewood",
        "addressRegion": "CO",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Colorado Springs",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "El Paso County, Colorado"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 38.8339,
          "longitude": -104.8214
        },
        "geoRadius": "40"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "308",
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
          "name": "How often should Colorado Springs homeowners inspect their roof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend a professional roof inspection at least once per year and after every significant hailstorm. Colorado Springs sits at the base of Pikes Peak where Palmer Divide storms regularly track through, making annual inspections critical for catching hidden damage before it leads to costly repairs."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises work with insurance companies on storm damage in Colorado Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is an insurance restoration expert. We perform detailed inspections, document all damage with photos and measurements, and coordinate documentation with your insurance company throughout the restoration process. After major events like the June 2023 storm that caused $1.4 billion in damage, our team helped hundreds of homeowners navigate their claims."
          }
        },
        {
          "@type": "Question",
          "name": "What type of shingles hold up best against Colorado Springs hail?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend Class 3 or Class 4 impact resistant shingles for Colorado Springs homes. Given the city's position in a heavy hail corridor, impact resistant shingles provide significantly better protection. Our quadruple manufacturer certifications mean you can choose from the best product lines offered by GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises handle HOA requirements in Colorado Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many Colorado Springs neighborhoods like Briargate, Flying Horse, and Wolf Ranch have strict HOA guidelines for roofing materials, colors, and styles. We work within your HOA's requirements and can assist with the approval process to ensure your new roof meets all community standards."
          }
        },
        {
          "@type": "Question",
          "name": "Who handles building permits for roofing in Colorado Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Pikes Peak Regional Building Department handles all roofing permits in the Colorado Springs area. Gates Enterprises LLC manages the permitting process for you, ensuring your project meets all local building codes and passes inspection."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with military families at Fort Carson and the Air Force bases?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Colorado Springs is home to Fort Carson, Peterson Space Force Base, Schriever Space Force Base, and the United States Air Force Academy. We understand that military families face frequent PCS moves and that roof condition directly impacts resale value. We provide thorough inspections and quality repairs on timelines that work with military schedules."
          }
        },
        {
          "@type": "Question",
          "name": "Is there a cost for the initial roof inspection in Colorado Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Gates Enterprises LLC offers free roof inspections and estimates for Colorado Springs homeowners. We assess your roof's condition honestly and provide a clear recommendation with no pressure and no obligation."
          }
        }
      ]
    }
  ]
};

const areaBreadcrumbs = cityBreadcrumb("Colorado Springs", "colorado-springs");

export default function Page() {
  return (
    <>
      <Script id="colorado-springs-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <Script id="colorado-springs-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}

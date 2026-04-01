import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Fort Collins CO Roofer | 4x Certified, 306+ Reviews",
  description: "Fort Collins roofing with 7,200+ completed projects across Northern Colorado. Hail repair, full replacements, and claims support. Free inspection.",
  alternates: { canonical: "https://www.gatesroof.com/areas/fort-collins" },
  openGraph: {
    title: "Fort Collins CO Roofer | 4x Certified, 306+ Reviews",
    description: "Fort Collins roofing with 7,200+ completed projects across Northern Colorado. Hail repair, full replacements, and claims support. Free inspection.",
    url: "https://www.gatesroof.com/areas/fort-collins",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Fort Collins, CO" }],
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
      "description": "Quadruple manufacturer certified roofing contractor serving Fort Collins, CO and Northern Colorado. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed Shingle Master Pro. 306+ Google reviews, 4.9 stars.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lakewood",
        "addressRegion": "CO",
        "addressCountry": "US"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Fort Collins",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Larimer County, Colorado"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 40.5853,
          "longitude": -105.0844
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
          "name": "How often should Fort Collins homeowners inspect their roof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend a professional roof inspection at least once per year and after every significant hailstorm. Fort Collins sits in the Northern Colorado hail corridor where severe storms form along the foothills and track across the city. Annual inspections catch small problems before they become expensive repairs."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises work with insurance companies on storm damage in Fort Collins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is an insurance restoration expert. We perform detailed inspections, document all damage with photos and measurements, and coordinate documentation with your insurance company throughout the restoration process. Fort Collins homeowners deal with frequent hail claims, and we handle the process from start to finish."
          }
        },
        {
          "@type": "Question",
          "name": "What type of shingles hold up best in Fort Collins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We recommend Class 3 or Class 4 impact resistant shingles for Fort Collins homes. Given the frequency of hail along the I-25 corridor, impact rated shingles provide the best long term protection. Our four manufacturer certifications give you access to the best product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "Can you work on older homes in Old Town Fort Collins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Old Town Fort Collins has a mix of historic homes, some with original wood shake roofs. Our crews have experience with steep pitches, complex valleys, and transitioning older wood shake roofs to modern architectural shingles while preserving the character of the home."
          }
        },
        {
          "@type": "Question",
          "name": "Does Fort Collins require permits for roof replacement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The City of Fort Collins requires building permits for roof replacements. Fort Collins also has strict green building standards. Gates Enterprises LLC handles the permitting process for you and ensures all work meets or exceeds local code requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you serve Timnath, Windsor, and Loveland as well?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC serves the entire Northern Colorado region, including Timnath, Windsor, Loveland, Greeley, Longmont, and surrounding communities. We also serve Boulder, Denver, and the rest of the Front Range."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a roof replacement take in Fort Collins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential roof replacements in Fort Collins are completed in one to three days, depending on the size of the home, roof complexity, and weather conditions. We coordinate closely with you on scheduling and keep you informed throughout the project."
          }
        }
      ]
    }
  ]
};

const areaBreadcrumbs = cityBreadcrumb("Fort Collins", "fort-collins");

export default function Page() {
  return (
    <>
      <Script id="fort-collins-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <Script id="fort-collins-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}

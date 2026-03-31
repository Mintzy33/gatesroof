import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Superior CO Roofer | 4x Certified, 308+ Reviews ★",
  description: "Superior's most certified roofer. 7,200+ roofs, 4.8★ from 308 Reviews. 4x manufacturer certified. Free roof inspections. Call (720) 766-3377 today",
  alternates: { canonical: "https://www.gatesroof.com/areas/superior" },
  openGraph: {
    title: "Superior CO Roofer | 4x Certified, 308+ Reviews ★",
    description: "Superior's most certified roofer. 7,200+ roofs, 4.8★ from 308 Reviews. 4x manufacturer certified. Free roof inspections. Call (720) 766-3377 today",
    url: "https://www.gatesroof.com/areas/superior",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Superior, CO" }],
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
      "description": "Quadruple manufacturer certified roofing contractor serving Superior, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed Shingle Master Pro. 300+ Google reviews, 4.8 stars.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Superior",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        {
          "@type": "AdministrativeArea",
          "name": "Boulder County, Colorado"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 39.9528,
          "longitude": -105.1686
        },
        "geoRadius": "30"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
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
          "name": "How do I know if my Superior home has hail damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Superior homeowners."
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
          "name": "How did the Marshall Fire affect roofing needs in Superior?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Marshall Fire in December 2021 destroyed over 1,000 homes in Superior and Louisville. Many homes were rebuilt or repaired, and some surrounding properties sustained heat, smoke, or ember damage to roofing materials. If your home was in the affected area and has not had a professional roof inspection, hidden damage may be shortening the life of your roof."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials do you recommend for Superior homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Given Superior's exposure to both hail and high winds along the Front Range, we recommend impact resistant shingles rated Class 3 or Class 4. For homes rebuilt after the Marshall Fire, we also recommend fire resistant roofing materials. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a roof replacement take in Superior?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential roof replacements are completed in one to two days, depending on the size and complexity of the roof."
          }
        },
        {
          "@type": "Question",
          "name": "Is Gates Enterprises LLC licensed and insured in Boulder County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Boulder County, the Town of Superior, and throughout Colorado's Front Range."
          }
        },
        {
          "@type": "Question",
          "name": "Does Superior get significant hail damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Superior sits along the Front Range where storms frequently produce damaging hail. The area's proximity to the foothills creates atmospheric conditions that intensify storms. Boulder County regularly sees hail damage claims, and Superior homeowners should schedule inspections after any significant storm event."
          }
        }
      ]
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Superior", "superior");

export default function Page() {
  return (
    <>
      <Script id="superior-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="superior-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Evergreen CO Roofer | 4x Certified ★ Mountain Experts",
  description: "Evergreen mountain roofing experts. Snow load, ice dam, and storm damage solutions. 4x certified with 7,200+ roofs completed. Free mountain home inspection.",
  alternates: { canonical: "https://www.gatesroof.com/areas/evergreen" },
  openGraph: {
    title: "Evergreen CO Roofer | 4x Certified ★ Mountain Experts",
    description: "Evergreen mountain roofing experts. Snow load, ice dam, and storm damage solutions. 4x certified with 7,200+ roofs completed. Free mountain home inspection.",
    url: "https://www.gatesroof.com/areas/evergreen",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Evergreen, CO" }],
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
      "description": "Quadruple manufacturer certified roofing contractor serving Evergreen, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed Shingle Master Pro. 300+ Google reviews, 4.9 stars.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Evergreen",
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
          "latitude": 39.6333,
          "longitude": -105.3172
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
          "name": "How do I know if my Evergreen home has hail damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hail damage is not always visible from the ground, and tree cover in Evergreen can make it even harder to spot. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Evergreen homeowners."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gates Enterprises work with my insurance company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports, and coordinate documentation with your insurance company throughout the restoration process."
          }
        },
        {
          "@type": "Question",
          "name": "How does Evergreen's elevation affect roofing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At 7,220 feet elevation, Evergreen homes face extreme conditions including heavy snow loads, intense UV exposure, rapid temperature swings, hailstorms, and high winds. These factors accelerate shingle deterioration and make proper installation and material selection critical. Roofs in Evergreen typically endure more stress than those at lower elevations."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials do you recommend for Evergreen homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For Evergreen's high elevation mountain environment, we recommend impact resistant shingles rated Class 3 or Class 4 with high wind ratings and excellent snow load performance. Materials that handle extreme UV and freeze thaw cycles are essential at 7,220 feet. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "Does pine beetle tree damage affect roofs in Evergreen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Pine beetle damage has killed many trees throughout the Evergreen area, and dead trees are more likely to drop large branches onto roofs during storms or heavy snow. Falling debris can crack shingles, damage flashing, and compromise roof integrity. Regular inspections are especially important for homes surrounded by affected trees."
          }
        },
        {
          "@type": "Question",
          "name": "Is Gates Enterprises LLC licensed and insured in Jefferson County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Jefferson County, the Evergreen area, and throughout Colorado's Front Range."
          }
        },
        {
          "@type": "Question",
          "name": "How does heavy snow affect roofs in Evergreen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evergreen receives significantly more snow than Denver and the surrounding plains. Heavy snow loads can stress roof structures, cause ice dams, and lead to moisture intrusion if the roof system is compromised. Proper ventilation, ice and water shield underlayment, and impact resistant shingles are all important for Evergreen homes."
          }
        }
      ]
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Evergreen", "evergreen");

export default function Page() {
  return (
    <>
      <Script id="evergreen-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="evergreen-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}

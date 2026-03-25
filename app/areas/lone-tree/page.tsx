import type { Metadata } from "next";
import Script from "next/script";
import CityContent from "./content";
import { cityBreadcrumb, faqSchema, cityFaqItems } from "../../../lib/schema";

export const metadata: Metadata = {
  title: "Lone Tree Roof Repair & Replacement | 4x Certified | Gates Enterprises",
  description: "Lone Tree's 4x certified roofer. 305 Google reviews, 4.8 stars. Free storm damage inspections for Lone Tree homeowners. (720) 766-3377.",
  alternates: { canonical: "https://www.gatesroof.com/areas/lone-tree" },
  openGraph: {
    title: "Lone Tree Roof Repair & Replacement | 4x Certified | Gates Enterprises",
    description: "Lone Tree's 4x certified roofer. 305 Google reviews, 4.8 stars. Free storm damage inspections for Lone Tree homeowners. (720) 766-3377.",
    url: "https://www.gatesroof.com/areas/lone-tree",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Roofing Contractor in Lone Tree, CO" }],
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
      "description": "Quadruple manufacturer certified roofing contractor serving Lone Tree, CO and Colorado's Front Range. GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, CertainTeed Shingle Master Pro. 300+ Google reviews, 4.8 stars.",
      "areaServed": [
        {
          "@type": "City",
          "name": "Lone Tree",
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
          "latitude": 39.5369,
          "longitude": -104.8953
        },
        "geoRadius": "30"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "305",
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
          "name": "How do I know if my Lone Tree home has hail damage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Lone Tree homeowners."
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
          "name": "Why should Lone Tree homeowners invest in quality roofing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lone Tree has some of the highest property values in Douglas County. A quality roof protects your investment, maintains curb appeal, and ensures your home meets the standards expected in communities like Heritage Hills and Ridgegate. Premium roofing materials and certified installation also provide better long term warranty protection."
          }
        },
        {
          "@type": "Question",
          "name": "What roofing materials do you recommend for Lone Tree homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Given Lone Tree's location in Douglas County's hail corridor, we recommend impact resistant shingles rated Class 3 or Class 4. For upscale homes, we also offer designer shingle lines that combine aesthetics with durability. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a roof replacement take in Lone Tree?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most residential roof replacements are completed in one to two days, depending on the size and complexity of the roof. Larger custom homes in Lone Tree may require additional time."
          }
        },
        {
          "@type": "Question",
          "name": "Is Gates Enterprises LLC licensed and insured in Douglas County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Douglas County, the City of Lone Tree, and throughout Colorado's Front Range."
          }
        },
        {
          "@type": "Question",
          "name": "Does Lone Tree have specific HOA roofing requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many Lone Tree communities have HOA guidelines that specify approved roofing materials, colors, and styles. Gates Enterprises LLC is experienced working within HOA requirements and can help you select materials that meet your community's standards while providing maximum protection against Colorado's severe weather."
          }
        }
      ]
    }
  ]
};


const areaBreadcrumbs = cityBreadcrumb("Lone Tree", "lone-tree");

export default function Page() {
  return (
    <>
      <Script id="lone-tree-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
            <Script id="lone-tree-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaBreadcrumbs) }} />
      <CityContent />
    </>
  );
}

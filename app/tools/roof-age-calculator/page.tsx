import type { Metadata } from "next";
import Script from "next/script";
import RoofCostEstimatorContent from "./content";

export const metadata: Metadata = {
  title: "Roof Replacement Cost Estimator | Colorado 2025/2026 Pricing | Gates Enterprises",
  description: "Estimate your Colorado roof replacement cost instantly. Select your material, home size, and location for a realistic price range. Free tool for Colorado homeowners from Gates Enterprises.",
  alternates: { canonical: "https://www.gatesroof.com/tools/roof-age-calculator" },
  openGraph: {
    title: "Roof Replacement Cost Estimator | Colorado Pricing | Gates Enterprises",
    description: "Get an instant roof replacement cost estimate for your Colorado home. Select your material, home size, and area for a realistic price range.",
    url: "https://www.gatesroof.com/tools/roof-age-calculator",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Roof Replacement Cost Estimator",
  description:
    "Estimate your Colorado roof replacement cost based on material, home size, stories, complexity, and location. Instant results with 2025/2026 pricing.",
  url: "https://www.gatesroof.com/tools/roof-age-calculator",
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: {
    "@type": "RoofingContractor",
    name: "Gates Enterprises LLC",
    url: "https://www.gatesroof.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.gatesroof.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Free Tools",
      item: "https://www.gatesroof.com/tools",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Roof Replacement Cost Estimator",
      item: "https://www.gatesroof.com/tools/roof-age-calculator",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a roof replacement cost in Colorado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Colorado roof replacements cost between $8,000 and $25,000 for asphalt shingles, depending on home size, roof complexity, and material choice. Impact-resistant (Class 4) shingles typically run $9,000 to $40,000. Premium materials like metal or tile could cost significantly more.",
      },
    },
    {
      "@type": "Question",
      name: "Could my insurance cover roof replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your roof has storm damage from hail or wind, your homeowner's insurance policy may cover the full replacement cost minus your deductible. Many Colorado homeowners pay only $1,000 to $2,000 out of pocket for a new roof after a qualifying storm event.",
      },
    },
    {
      "@type": "Question",
      name: "What factors affect roof replacement cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest factors include roof material, home square footage (which determines the number of roofing squares), number of stories, roof complexity (dormers, valleys, steep pitch), and your location in Colorado. Mountain area projects may cost more due to access and logistics.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Gates Enterprises for roof replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gates Enterprises is Colorado's only quadruple manufacturer certified roofer, holding GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master certifications. This means access to the best warranty options and installation standards from every major manufacturer.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="webapp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoofCostEstimatorContent />
    </>
  );
}

import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import RoofCostEstimatorContent from "./content";
import { FAQS } from "./faqs";
import { faqSchema as buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Roof Cost Estimator CO (2026) | Free ★ Gates",
  description: "Calculate your Colorado roof replacement cost with 2026 pricing. Select material, home size, and location for an instant estimate. Free tool.",
  alternates: { canonical: "https://www.gatesroof.com/tools/roof-age-calculator" },
  openGraph: {
    title: "Roof Cost Estimator CO (2026) | Free ★ Gates",
    description: "Calculate your Colorado roof replacement cost with 2026 pricing. Select material, home size, and location for an instant estimate. Free tool.",
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

const faqSchema = buildFaqSchema(FAQS);

export default function Page() {
  return (
    <>
      <PageSchema route="/tools/roof-age-calculator" />
      <script
        id="webapp-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RoofCostEstimatorContent />
    </>
  );
}

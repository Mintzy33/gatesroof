import type { Metadata } from "next";
import Script from "next/script";
import CostEstimatorContent from "./content";

export const metadata: Metadata = {
  title: "Roof Repair Cost Estimator | Colorado 2026 Pricing | Gates Enterprises",
  description: "Estimate your roof repair or replacement cost based on size, material, pitch, and service type. Real Colorado 2026 pricing. Free tool, no signup required.",
  alternates: { canonical: "https://www.gatesroof.com/tools/repair-cost-estimator" },
  openGraph: {
    title: "Roof Repair Cost Estimator | Colorado 2026 Pricing | Gates Enterprises",
    description: "Estimate your roof repair or replacement cost. Real Colorado 2026 pricing. Free tool, no signup required.",
    url: "https://www.gatesroof.com/tools/repair-cost-estimator",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Roof Repair Cost Estimator",
  "description": "Estimate roof repair and replacement costs for Colorado homeowners. Based on real 2026 pricing data.",
  "url": "https://www.gatesroof.com/tools/repair-cost-estimator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "provider": {
    "@type": "RoofingContractor",
    "name": "Gates Enterprises LLC",
    "url": "https://www.gatesroof.com",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gatesroof.com" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.gatesroof.com/tools" },
    { "@type": "ListItem", position: 3, name: "Repair Cost Estimator", item: "https://www.gatesroof.com/tools/repair-cost-estimator" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="webapp-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CostEstimatorContent />
    </>
  );
}

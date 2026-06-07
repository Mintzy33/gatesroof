import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import InsuranceCoverageEstimatorContent from "./content";

export const metadata: Metadata = {
  title: "Free Roof Insurance Estimator | Gates Enterprises",
  description: "Estimate your roof insurance coverage in seconds. Coverage depends on your policy and the cause of damage. Free tool, no signup.",
  alternates: { canonical: "https://www.gatesroof.com/tools/insurance-coverage-estimator" },
  openGraph: {
    title: "Free Roof Insurance Estimator | Gates Enterprises",
    description: "Estimate your roof insurance coverage in seconds. Coverage depends on your policy and the cause of damage. Free tool, no signup.",
    url: "https://www.gatesroof.com/tools/insurance-coverage-estimator",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Insurance Coverage Estimator",
  "description": "Estimate how much insurance could cover for your roof replacement in Colorado. Coverage depends on your policy and the cause of damage.",
  "url": "https://www.gatesroof.com/tools/insurance-coverage-estimator",
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
    { "@type": "ListItem", position: 3, name: "Insurance Coverage Estimator", item: "https://www.gatesroof.com/tools/insurance-coverage-estimator" },
  ],
};

export default function Page() {
  return (
    <>
      <PageSchema route="/tools/insurance-coverage-estimator" />
      <script id="webapp-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InsuranceCoverageEstimatorContent />
    </>
  );
}

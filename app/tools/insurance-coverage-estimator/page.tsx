import type { Metadata } from "next";
import Script from "next/script";
import InsuranceCoverageEstimatorContent from "./content";

export const metadata: Metadata = {
  title: "Free Roof Insurance Estimator | Gates Enterprises",
  description: "Estimate your roof insurance coverage in seconds. Most Colorado homeowners pay only their deductible for a full replacement. Free tool, no signup.",
  alternates: { canonical: "https://www.gatesroof.com/tools/insurance-coverage-estimator" },
  openGraph: {
    title: "Free Roof Insurance Estimator | Gates Enterprises",
    description: "Estimate your roof insurance coverage in seconds. Most Colorado homeowners pay only their deductible for a full replacement. Free tool, no signup.",
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
  "description": "Estimate how much insurance could cover for your roof replacement in Colorado. Most homeowners pay only their deductible.",
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
      <Script id="webapp-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InsuranceCoverageEstimatorContent />
    </>
  );
}

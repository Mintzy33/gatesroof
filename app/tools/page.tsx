import type { Metadata } from "next";
import Script from "next/script";
import ToolsContent from "./content";

export const metadata: Metadata = {
  title: "Free Roofing Tools | Cost Estimator, Insurance Coverage & Hail Risk Check | Gates Enterprises",
  description: "Free roofing tools for Colorado homeowners. Calculate your roof's age and remaining life, estimate insurance coverage value, and check your home's hail risk score. No signup required.",
  alternates: { canonical: "https://www.gatesroof.com/tools" },
  openGraph: {
    title: "Free Roofing Tools | Gates Enterprises LLC",
    description: "Free roofing tools for Colorado homeowners. Calculate your roof's age, estimate costs, and check hail risk. No signup required.",
    url: "https://www.gatesroof.com/tools",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gatesroof.com" },
    { "@type": "ListItem", position: 2, name: "Free Tools", item: "https://www.gatesroof.com/tools" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolsContent />
    </>
  );
}

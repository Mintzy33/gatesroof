import type { Metadata } from "next";
import Script from "next/script";
import HailRiskContent from "./content";

export const metadata: Metadata = {
  title: "Free Hail Risk Check | Your Home's Score ★ Gates",
  description: "Check your home's hail risk score for free. Powered by 4.5M+ radar records spanning 10 years and all 50 states. Instant results from HailScore.",
  alternates: { canonical: "https://www.gatesroof.com/tools/hail-risk-check" },
  openGraph: {
    title: "Free Hail Risk Check | Your Home's Score ★ Gates",
    description: "Check your home's hail risk score for free. Powered by 4.5M+ radar records spanning 10 years and all 50 states. Instant results from HailScore.",
    url: "https://www.gatesroof.com/tools/hail-risk-check",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Hail Risk Check",
  "description": "Check your home's hail risk score based on 4.5 million+ NOAA radar hail records. Powered by HailScore.",
  "url": "https://www.gatesroof.com/tools/hail-risk-check",
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
    { "@type": "ListItem", position: 3, name: "Hail Risk Check", item: "https://www.gatesroof.com/tools/hail-risk-check" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="webapp-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HailRiskContent />
    </>
  );
}

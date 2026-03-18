import type { Metadata } from "next";
import Script from "next/script";
import RoofAgeContent from "./content";

export const metadata: Metadata = {
  title: "Roof Age Calculator | How Old Is Your Roof? | Gates Enterprises",
  description: "Find out how much life your roof has left. Enter your home's build year and roof material for an instant age estimate, risk level, and professional recommendation. Free tool for Colorado homeowners.",
  alternates: { canonical: "https://www.gatesroof.com/tools/roof-age-calculator" },
  openGraph: {
    title: "Roof Age Calculator | How Old Is Your Roof? | Gates Enterprises",
    description: "Find out how much life your roof has left. Enter your home's build year and roof material for an instant age estimate and risk level.",
    url: "https://www.gatesroof.com/tools/roof-age-calculator",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Roof Age Calculator",
  "description": "Calculate your roof's estimated age, remaining lifespan, and risk level based on your home's build year and roof material.",
  "url": "https://www.gatesroof.com/tools/roof-age-calculator",
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
    { "@type": "ListItem", position: 3, name: "Roof Age Calculator", item: "https://www.gatesroof.com/tools/roof-age-calculator" },
  ],
};

export default function Page() {
  return (
    <>
      <Script id="webapp-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RoofAgeContent />
    </>
  );
}

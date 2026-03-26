import type { Metadata } from "next";
import Script from "next/script";
import ToolsContent from "./content";

export const metadata: Metadata = {
  title: "Free Roofing Tools | Cost & Hail Risk ★ Gates",
  description: "Free roofing tools: estimate costs, check hail risk & insurance coverage. No signup required. Built by Colorado's 4x certified roofer. (720) 766-3377",
  alternates: { canonical: "https://www.gatesroof.com/tools" },
  openGraph: {
    title: "Free Roofing Tools | Cost & Hail Risk ★ Gates",
    description: "Free roofing tools: estimate costs, check hail risk & insurance coverage. No signup required. Built by Colorado's 4x certified roofer. (720) 766-3377",
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

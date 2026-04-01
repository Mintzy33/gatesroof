import type { Metadata } from "next";
import Script from "next/script";
import AreasContent from "./areas-content";

export const metadata: Metadata = {
  title: "Service Areas | Gates Enterprises LLC — Colorado Front Range Roofer",
  description:
    "Find your city. Gates Enterprises serves 30+ Front Range communities from Fort Collins to Castle Rock. Roofing, siding, gutters, and storm repair.",
  alternates: { canonical: "https://www.gatesroof.com/areas" },
  openGraph: {
    title: "Service Areas | Gates Enterprises LLC — Colorado Front Range Roofer",
    description:
      "Find your city. Gates Enterprises serves 30+ Front Range communities from Fort Collins to Castle Rock. Roofing, siding, gutters, and storm repair.",
    url: "https://www.gatesroof.com/areas",
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
    { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.gatesroof.com/areas" },
  ],
};

export default function AreasPage() {
  return (
    <>
      <Script
        id="areas-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AreasContent />
    </>
  );
}

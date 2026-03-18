import type { Metadata } from "next";
import Script from "next/script";
import AboutContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "About Gates Enterprises | Colorado's Most Certified Roofer",
  description:
    "Locally owned roofing company with 10+ years on Colorado's Front Range. GAF, Owens Corning, Malarkey, and CertainTeed certified.",
  alternates: { canonical: "https://www.gatesroof.com/about" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "About", url: "https://www.gatesroof.com/about" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <AboutContent />
    </>
  );
}

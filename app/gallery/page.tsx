import type { Metadata } from "next";
import Script from "next/script";
import GalleryContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Project Gallery | Gates Enterprises LLC",
  description:
    "See our work. Before and after photos of roof replacements, siding, gutters, and more across Colorado's Front Range.",
  alternates: { canonical: "https://www.gatesroof.com/gallery" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Gallery", url: "https://www.gatesroof.com/gallery" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <GalleryContent />
    </>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import GalleryContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Roofing Photo Gallery | 7,200+ Projects ★ Gates",
  description:
    "See 7,200+ completed roofing projects across Colorado. Before & after photos of roof replacements, siding, gutters & more. 4.8★ from 308 Reviews",
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

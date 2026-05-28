import type { Metadata } from "next";
import PageSchema from "@/app/components/PageSchema";
import GalleryContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Roofing Photo Gallery | 7,200+ Projects ★ Gates",
  description:
    "Browse before and after photos from 7,200+ roofing, siding, and gutter projects across Colorado. See the quality behind our 4.9 star rating.",
  alternates: { canonical: "https://www.gatesroof.com/gallery" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Gallery", url: "https://www.gatesroof.com/gallery" },
]);

export default function Page() {
  return (
    <>
      <PageSchema route="/gallery" />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <GalleryContent />
    </>
  );
}

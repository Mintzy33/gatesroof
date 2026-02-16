import type { Metadata } from "next";
import GalleryContent from "./content";
export const metadata: Metadata = {
  title: "Roofing Project Gallery | Gates Enterprises | Before & After",
  description: "See completed roofing, siding & gutter projects by Gates Enterprises. Before & after photos from homes across Colorado. 7,200+ roofs and counting.",
};
export default function Page() { return <GalleryContent />; }

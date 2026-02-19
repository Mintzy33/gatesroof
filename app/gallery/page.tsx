import type { Metadata } from "next";
import GalleryContent from "./content";
export const metadata: Metadata = {
  title: "Project Gallery | Gates Enterprises LLC",
  description: "See our work. Before and after photos of roof replacements, siding, gutters, and more across Colorado's Front Range.",
};
export default function Page() { return <GalleryContent />; }

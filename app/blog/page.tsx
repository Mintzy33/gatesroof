import type { Metadata } from "next";
import BlogContent from "./content";
export const metadata: Metadata = {
  title: "Roofing Tips & News | Gates Enterprises Blog",
  description: "Expert roofing tips, Colorado hail season updates, insurance claim advice & shingle comparisons from Gates Enterprises. Stay informed about your roof.",
};
export default function Page() { return <BlogContent />; }

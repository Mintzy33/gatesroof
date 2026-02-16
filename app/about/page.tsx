import type { Metadata } from "next";
import AboutContent from "./content";
export const metadata: Metadata = {
  title: "About Gates Enterprises | Colorado Roofing Experts Since Day One",
  description: "Learn about Gates Enterprises — Lakewood-based roofing company with 7,200+ roofs completed. GAF Master Elite & CertainTeed Platinum Preferred certified team.",
};
export default function Page() { return <AboutContent />; }

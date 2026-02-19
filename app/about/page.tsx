import type { Metadata } from "next";
import AboutContent from "./content";
export const metadata: Metadata = {
  title: "About Gates Enterprises | Colorado's Most Certified Roofer",
  description: "Locally owned roofing company with 10+ years on Colorado's Front Range. GAF, Owens Corning, Malarkey, and CertainTeed certified.",
};
export default function Page() { return <AboutContent />; }

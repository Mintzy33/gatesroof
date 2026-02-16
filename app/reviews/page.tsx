import type { Metadata } from "next";
import ReviewsContent from "./content";
export const metadata: Metadata = {
  title: "Customer Reviews | Gates Enterprises | 4.8★ Google Rating",
  description: "Read reviews from Gates Enterprises customers. 4.8★ Google rating from 200+ reviews. See why Colorado homeowners trust us for roofing, siding & gutters.",
};
export default function Page() { return <ReviewsContent />; }

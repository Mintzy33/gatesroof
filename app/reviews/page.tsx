import type { Metadata } from "next";
import ReviewsContent from "./content";
export const metadata: Metadata = {
  title: "Customer Reviews | Gates Enterprises LLC",
  description: "293+ five star reviews from Colorado homeowners. See why Gates Enterprises is the most trusted roofer on the Front Range.",
};
export default function Page() { return <ReviewsContent />; }

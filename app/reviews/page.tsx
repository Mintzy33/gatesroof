import type { Metadata } from "next";
import Script from "next/script";
import ReviewsContent from "./content";
import { reviewPageSchema, breadcrumbSchema } from "../../lib/schema";
import { reviews } from "../data/reviews";

export const metadata: Metadata = {
  title: "Customer Reviews | Gates Enterprises LLC",
  description:
    "300+ five star reviews from Colorado homeowners. See why Gates Enterprises is the most trusted roofer on the Front Range.",
  alternates: { canonical: "https://www.gatesroof.com/reviews" },
};

const reviewSchema = reviewPageSchema(reviews);

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Reviews", url: "https://www.gatesroof.com/reviews" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ReviewsContent />
    </>
  );
}

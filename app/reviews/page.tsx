import type { Metadata } from "next";
import Script from "next/script";
import ReviewsContent from "./content";
import { reviewPageSchema, breadcrumbSchema } from "../../lib/schema";
import { reviews } from "../data/reviews";

export const metadata: Metadata = {
  title: "308+ Reviews, 4.8★ | Gates Enterprises LLC",
  description:
    "Read 308+ five-star reviews from Colorado homeowners. 7,200+ roofs completed. See why Gates Enterprises is the Front Range's most trusted roofer",
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

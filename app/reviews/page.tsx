import type { Metadata } from "next";
import ReviewsContent from "./content";
import { reviewPageSchema, breadcrumbSchema } from "../../lib/schema";
import { reviews } from "../data/reviews";

export const metadata: Metadata = {
  title: "339+ Reviews, 4.9★ | Gates Enterprises LLC",
  description:
    "Read 339+ verified reviews from Colorado homeowners. Rated 4.9 stars on Google. See why families across the Front Range trust Gates Enterprises.",
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
      <script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ReviewsContent />
    </>
  );
}

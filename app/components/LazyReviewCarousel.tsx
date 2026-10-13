"use client";
import dynamic from "next/dynamic";

// SSR stays on so crawlers get the review text, names and ratings in the initial
// HTML. The GSAP scroll starts in ReviewCarousel's effect, after hydration.
const ReviewCarousel = dynamic(() => import("./ReviewCarousel"));

export default function LazyReviewCarousel() {
  return <ReviewCarousel />;
}

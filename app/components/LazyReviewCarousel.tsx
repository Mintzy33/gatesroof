"use client";
import dynamic from "next/dynamic";

const ReviewCarousel = dynamic(() => import("./ReviewCarousel"), { ssr: false });

export default function LazyReviewCarousel() {
  return <ReviewCarousel />;
}

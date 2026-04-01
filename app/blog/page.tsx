import type { Metadata } from "next";
import BlogContent from "./content";

export const metadata: Metadata = {
  title: "Roofing Tips & News | Gates Enterprises Blog",
  description:
    "Roofing tips, Colorado hail season guides, and shingle comparisons from a 4x certified contractor. Expert advice for Front Range homeowners.",
  openGraph: {
    title: "Roofing Tips & News | Gates Enterprises Blog",
    description:
      "Roofing tips, Colorado hail season guides, and shingle comparisons from a 4x certified contractor.",
    url: "https://www.gatesroof.com/blog",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.gatesroof.com/blog",
  },
};

export default function Page() {
  return <BlogContent />;
}

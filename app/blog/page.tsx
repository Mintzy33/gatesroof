import type { Metadata } from "next";
import BlogContent from "./content";

export const metadata: Metadata = {
  title: "Roofing Tips & News | Gates Enterprises Blog",
  description:
    "Expert roofing advice for Colorado homeowners. Storm prep, maintenance tips, and industry insights from Gates Enterprises.",
  openGraph: {
    title: "Roofing Tips & News | Gates Enterprises Blog",
    description:
      "Expert roofing tips, Colorado hail season updates, insurance restoration advice & shingle comparisons from Gates Enterprises.",
    url: "https://gatesroof.com/blog",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://gatesroof.com/blog",
  },
};

export default function Page() {
  return <BlogContent />;
}

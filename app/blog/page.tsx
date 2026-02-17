import type { Metadata } from "next";
import BlogContent from "./content";

export const metadata: Metadata = {
  title: "Roofing Tips & News | Gates Enterprises Blog",
  description:
    "Expert roofing tips, Colorado hail season updates, insurance claim advice & shingle comparisons from Gates Enterprises. Colorado's #1 roofing contractor with 7,200+ roofs completed.",
  openGraph: {
    title: "Roofing Tips & News | Gates Enterprises Blog",
    description:
      "Expert roofing tips, Colorado hail season updates, insurance claim advice & shingle comparisons from Gates Enterprises.",
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

import type { Metadata } from "next";
import TermsContent from "./content";

export const metadata: Metadata = {
  title: "Terms of Service | Gates Enterprises LLC",
  description:
    "Terms of Service for Gates Enterprises LLC. Review the terms and conditions governing the use of gatesroof.com and our roofing, siding, and exterior services.",
  alternates: { canonical: "https://www.gatesroof.com/terms" },
  openGraph: {
    title: "Terms of Service | Gates Enterprises LLC",
    description:
      "Terms of Service for Gates Enterprises LLC. Review the terms and conditions governing the use of our website and services.",
    url: "https://www.gatesroof.com/terms",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <TermsContent />;
}

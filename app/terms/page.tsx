import type { Metadata } from "next";
import TermsContent from "./content";

export const metadata: Metadata = {
  title: "Terms of Service | Gates Enterprises LLC",
  description:
    "Gates Enterprises LLC terms of service. Review the terms governing use of gatesroof.com and our roofing, siding, and exterior services in Colorado.",
  alternates: { canonical: "https://www.gatesroof.com/terms" },
  openGraph: {
    title: "Terms of Service | Gates Enterprises LLC",
    description:
      "Gates Enterprises LLC terms of service. Review the terms governing use of gatesroof.com and our services in Colorado.",
    url: "https://www.gatesroof.com/terms",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <TermsContent />;
}

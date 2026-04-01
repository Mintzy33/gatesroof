import type { Metadata } from "next";
import PrivacyContent from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy | Gates Enterprises LLC",
  description:
    "Gates Enterprises LLC privacy policy. How we collect, use, and protect your personal information on gatesroof.com. Updated for 2026.",
  alternates: { canonical: "https://www.gatesroof.com/privacy" },
  openGraph: {
    title: "Privacy Policy | Gates Enterprises LLC",
    description:
      "Gates Enterprises LLC privacy policy. How we collect, use, and protect your personal information on gatesroof.com.",
    url: "https://www.gatesroof.com/privacy",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <PrivacyContent />;
}

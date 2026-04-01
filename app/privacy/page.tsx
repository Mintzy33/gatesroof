import type { Metadata } from "next";
import PrivacyContent from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy | Gates Enterprises LLC",
  description:
    "Privacy Policy for Gates Enterprises LLC. Learn how we collect, use, and protect your personal information when you visit gatesroof.com or use our services.",
  alternates: { canonical: "https://www.gatesroof.com/privacy" },
  openGraph: {
    title: "Privacy Policy | Gates Enterprises LLC",
    description:
      "Privacy Policy for Gates Enterprises LLC. Learn how we collect, use, and protect your personal information.",
    url: "https://www.gatesroof.com/privacy",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <PrivacyContent />;
}

import type { Metadata } from "next";
import Script from "next/script";
import ContactContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Contact Us | Free Roof Inspection ★ (720) 766-3377",
  description:
    "Contact Gates Enterprises for a free roof inspection. Call (720) 766-3377, email, or book online. Serving 65+ Colorado Front Range cities.",
  alternates: { canonical: "https://www.gatesroof.com/contact" },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://www.gatesroof.com" },
  { name: "Contact", url: "https://www.gatesroof.com/contact" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ContactContent />
    </>
  );
}

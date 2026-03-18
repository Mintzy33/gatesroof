import type { Metadata } from "next";
import Script from "next/script";
import ContactContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Contact Gates Enterprises | Free Roof Inspection Colorado",
  description:
    "Get in touch with Gates Enterprises for a free roof inspection. Call (720) 766-3377 or schedule online.",
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

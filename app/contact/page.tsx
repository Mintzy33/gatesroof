import type { Metadata } from "next";
import Script from "next/script";
import ContactContent from "./content";
import { breadcrumbSchema } from "../../lib/schema";

export const metadata: Metadata = {
  title: "Contact Us | Free Roof Inspection ★ (720) 766-3377",
  description:
    "Schedule your free roof inspection with Colorado's only 4x certified roofer. 7,200+ roofs, 308 Reviews, 4.8★. Call (720) 766-3377 or book online",
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

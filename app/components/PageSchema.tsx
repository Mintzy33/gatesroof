import { webPageSchema } from "@/lib/schema";

/**
 * Renders a WebPage JSON-LD node carrying the page's dateModified (recency signal).
 * Server component → emits a native <script> tag in the server HTML so AI crawlers
 * and Google read it. Date is sourced from lib/page-dates.json (git-derived).
 */
export default function PageSchema({ route }: { route: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(route)) }}
    />
  );
}

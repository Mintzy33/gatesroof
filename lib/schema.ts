// Shared JSON-LD schema generators for Gates Enterprises
// All schema types used across the site

export const BUSINESS_INFO = {
  name: "Gates Enterprises LLC",
  alternateName: "Gates Enterprises",
  url: "https://www.gatesroof.com",
  telephone: "+17207663377",
  telephoneDisplay: "(720) 766-3377",
  email: "info@gatesroof.com",
  logo: "https://www.gatesroof.com/logo.png",
  image: "https://www.gatesroof.com/images/gates-enterprises-og.jpg",
  description:
    "Colorado's only quadruple manufacturer certified roofing contractor. GAF Master Elite, Owens Corning Platinum Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master.",
  address: {
    locality: "Denver",
    region: "CO",
    country: "US",
  },
  rating: { value: "4.8", count: "301", best: "5" },
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/GatesEnterprisesLLC/",
    "https://www.instagram.com/gatesroofing",
    "https://www.linkedin.com/company/gatesenterprisesllc/",
    "https://www.google.com/maps/place/Gates+Enterprises+LLC",
  ],
} as const;

// ─── Breadcrumb Schema ───────────────────────────────────────────────
export function breadcrumbSchema(
  items: { name: string; url: string }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── FAQ Schema ──────────────────────────────────────────────────────
export function faqSchema(faqs: { q: string; a: string }[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

// ─── BlogPosting Schema ─────────────────────────────────────────────
export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  category: string;
  keyword: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Person",
      "@id": "https://www.gatesroof.com/about/alex-chicilo#person",
      name: "Alex Chicilo",
      url: "https://www.gatesroof.com/about/alex-chicilo",
      jobTitle: "Owner",
      worksFor: {
        "@type": "Organization",
        name: BUSINESS_INFO.name,
        url: BUSINESS_INFO.url,
      },
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.url,
      logo: {
        "@type": "ImageObject",
        url: BUSINESS_INFO.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.gatesroof.com/blog/${post.slug}`,
    },
    keywords: post.keyword,
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

// ─── Review / AggregateRating Schema ────────────────────────────────
export function reviewPageSchema(
  reviews: { name: string; city: string; text: string; rating: number }[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": "https://www.gatesroof.com/#organization",
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.telephoneDisplay,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.rating.value,
      reviewCount: BUSINESS_INFO.rating.count,
      bestRating: BUSINESS_INFO.rating.best,
    },
    review: reviews.slice(0, 10).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
      },
      reviewBody: r.text,
      datePublished: "2025-01-01",
    })),
  };
}

// ─── City area page FAQ generator (unique per city) ─────────────────
export function cityFaqItems(cityName: string): { q: string; a: string }[] {
  return [
    {
      q: `How much does a roof replacement cost in ${cityName}, Colorado?`,
      a: `Roof replacement costs in ${cityName} vary based on roof size, pitch, material choice, and the condition of the decking underneath. Most residential replacements in ${cityName} fall between $10,000 and $30,000. Many ${cityName} homeowners pay little to nothing out of pocket when insurance covers storm damage. Contact us for a free estimate specific to your ${cityName} home.`,
    },
    {
      q: `How often does ${cityName} get hail storms?`,
      a: `${cityName} sits along Colorado's Front Range hail corridor, one of the most active hail regions in the country. Most ${cityName} neighborhoods experience at least one significant hail event per year. Some years bring multiple storms with hailstones large enough to damage roofing, siding, and gutters. Regular inspections after storms are the best way to catch damage early.`,
    },
    {
      q: `What is the best roofing material for homes in ${cityName}?`,
      a: `For ${cityName} homes, we recommend Class 4 impact resistant shingles. They withstand hail up to golf ball size and qualify for insurance premium discounts in Colorado. Top options include GAF Timberline HDZ IR, Owens Corning Duration FLEX, Malarkey Vista AR, and CertainTeed Landmark IR. Each comes with strong warranties and proven performance in ${cityName}'s weather.`,
    },
    {
      q: `Does homeowners insurance cover hail damage in ${cityName}?`,
      a: `Yes. Most homeowners insurance policies in ${cityName} cover hail damage to your roof, siding, and gutters under dwelling coverage. You are responsible for your deductible, but the rest is typically covered. Gates Enterprises handles the entire insurance claims process for ${cityName} homeowners so you do not have to deal with adjusters on your own.`,
    },
    {
      q: `How long does a roof replacement take in ${cityName}?`,
      a: `Most residential roof replacements in ${cityName} are completed in a single day. Larger homes or roofs with complex features like multiple valleys, skylights, or steep pitch may require two days. Weather can also affect timing during Colorado's storm season. We provide a specific timeline before starting any ${cityName} project.`,
    },
  ];
}

// ─── City Breadcrumb ────────────────────────────────────────────────
export function cityBreadcrumb(cityName: string, citySlug: string): object {
  return breadcrumbSchema([
    { name: "Home", url: "https://www.gatesroof.com" },
    { name: "Service Areas", url: "https://www.gatesroof.com/areas" },
    {
      name: `${cityName}, CO`,
      url: `https://www.gatesroof.com/areas/${citySlug}`,
    },
  ]);
}

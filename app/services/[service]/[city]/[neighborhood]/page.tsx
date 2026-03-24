import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { services, getCityBySlug, getServiceBySlug } from "../../../../../lib/service-areas-data";
import { neighborhoods, getNeighborhoodBySlug, getNeighborhoodsByCity } from "../../../../../lib/neighborhoods";
import { getHailScore } from "../../../../../lib/hail-data";
import { shouldIndexNeighborhood } from "../../../../../lib/seo-config";
import { getCityData, getHousingEra, getValueTier, getHailLevel, formatDollars, formatPopulation } from "../../../../data/location-data";
import type { CityData } from "../../../../data/location-data";
import NeighborhoodContent from "./content";

interface Props {
  params: Promise<{ service: string; city: string; neighborhood: string }>;
}

export async function generateStaticParams() {
  return services.flatMap((service) =>
    neighborhoods.map((n) => ({
      service: service.slug,
      city: n.parentCity,
      neighborhood: n.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug, neighborhood: neighborhoodSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);

  if (!city || !service || !neighborhood || neighborhood.parentCity !== citySlug) return {};

  const title = `${service.service} in ${neighborhood.name}, ${city.city} CO | Gates Enterprises`;
  const description = `${service.service} in ${neighborhood.name}, ${city.city}, Colorado. ${neighborhood.housingAge} homes with ${neighborhood.commonRoofTypes.toLowerCase()}. 4x manufacturer certified, 4.8 stars, 301 reviews. Free estimates.`;
  const url = `https://www.gatesroof.com/services/${service.slug}/${city.slug}/${neighborhood.slug}`;

  const indexed = shouldIndexNeighborhood();

  return {
    title,
    description,
    ...(indexed ? {} : { robots: { index: false, follow: true } }),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Gates Enterprises LLC",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov",
          width: 1200,
          height: 630,
          alt: `Gates Enterprises LLC - ${service.service} in ${neighborhood.name}, ${city.city} CO`,
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { service: serviceSlug, city: citySlug, neighborhood: neighborhoodSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);

  if (!city || !service || !neighborhood || neighborhood.parentCity !== citySlug) notFound();

  const url = `https://www.gatesroof.com/services/${service.slug}/${city.slug}/${neighborhood.slug}`;
  const hailData = getHailScore(city.slug);
  const cityData = getCityData(citySlug);

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.service,
    name: `${service.service} in ${neighborhood.name}, ${city.city}, CO`,
    description: `${service.service} for ${neighborhood.housingAge} homes in ${neighborhood.name}, ${city.city}, Colorado. ${service.shortDesc}`,
    url,
    provider: {
      "@type": "RoofingContractor",
      "@id": "https://www.gatesroof.com/#organization",
      name: "Gates Enterprises LLC",
      telephone: "+17207663377",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1445 Holland St",
        addressLocality: "Lakewood",
        addressRegion: "CO",
        postalCode: "80215",
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "301",
        bestRating: "5",
      },
    },
    areaServed: {
      "@type": "Place",
      name: `${neighborhood.name}, ${city.city}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.city,
        addressRegion: "CO",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lon },
    },
  };

  // FAQ schema - 7 unique questions per neighborhood+service combo
  const faqItems = generateNeighborhoodFAQs(neighborhood, service, city, hailData, cityData);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gatesroof.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.gatesroof.com/services" },
      { "@type": "ListItem", position: 3, name: service.service, item: `https://www.gatesroof.com/services/${service.parentSlug}` },
      { "@type": "ListItem", position: 4, name: `${city.city}, CO`, item: `https://www.gatesroof.com/services/${service.slug}/${city.slug}` },
      { "@type": "ListItem", position: 5, name: neighborhood.name, item: url },
    ],
  };

  return (
    <>
      <Script id="service-neighborhood-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-neighborhood-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-neighborhood-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NeighborhoodContent
        serviceSlug={serviceSlug}
        citySlug={citySlug}
        neighborhoodSlug={neighborhoodSlug}
        faqItems={faqItems}
        cityData={cityData}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// FAQ generator - 7 unique questions per neighborhood+service combination
// ---------------------------------------------------------------------------
interface FAQPair { q: string; a: string; }

function generateNeighborhoodFAQs(
  n: NonNullable<ReturnType<typeof getNeighborhoodBySlug>>,
  s: NonNullable<ReturnType<typeof getServiceBySlug>>,
  c: NonNullable<ReturnType<typeof getCityBySlug>>,
  hailData: ReturnType<typeof getHailScore>,
  cd: CityData,
): FAQPair[] {
  const hailScore = hailData?.hailScore ?? 70;
  const riskWord = hailScore >= 85 ? "extreme" : hailScore >= 65 ? "high" : "moderate";
  const era = getHousingEra(cd.medianYearBuilt);
  const tier = getValueTier(cd.medianHomeValue);
  const hailLevel = getHailLevel(cd.hailRiskRating);
  const yearStr = cd.medianYearBuilt ? String(cd.medianYearBuilt) : "the mid-1900s";
  const valueStr = cd.medianHomeValue ? formatDollars(cd.medianHomeValue) : n.avgHomeValue;
  const femaRating = cd.hailRiskRating ?? "elevated";
  const inspectionWord = hailLevel === "very-high" ? "essential" : hailLevel === "high" ? "strongly recommended" : "advisable";

  // Cost answer varies by value tier
  const costAnswers: Record<typeof tier, string> = {
    entry: `${s.service} costs in ${n.name} depend on roof size, pitch, material, and condition. According to U.S. Census data, the median home value here is ${valueStr}. At this price point, many homeowners choose quality architectural shingles that balance durability with budget. Gates Enterprises provides free estimates with transparent pricing. Many ${n.name} homeowners also use insurance claims to cover storm-related work at no out-of-pocket cost beyond their deductible.`,
    mid: `${s.service} costs in ${n.name} depend on roof size, pitch, material, and condition. Census data shows the median home value in this area is ${valueStr}, and protecting that investment starts with the roof. Most ${n.name} homeowners opt for impact-resistant Class 4 shingles or premium architectural options. Gates Enterprises provides free estimates with transparent pricing and no hidden fees. Insurance claims cover many storm-related projects in full.`,
    premium: `${s.service} costs in ${n.name} depend on roof size, pitch, material, and condition. With median home values around ${valueStr} according to Census data, ${n.name} homeowners typically invest in premium roofing systems: designer shingles, concrete tile, or standing seam metal. Gates Enterprises provides free estimates with detailed material comparisons tailored to high-value properties. Many projects are fully covered through insurance claims after storm damage.`,
  };

  // Materials answer varies by housing era
  const materialsAnswers: Record<typeof era, string> = {
    historic: `${n.name} homes were typically built around ${yearStr}, and many still have original or aging roof materials including ${n.commonRoofTypes.toLowerCase()}. Older roofing systems can contain outdated materials that require careful removal. For replacements, we recommend impact-resistant Class 4 shingles that meet modern building codes while respecting the architectural character of ${n.name}. Gates Enterprises carries products from GAF, Owens Corning, Malarkey, and CertainTeed.`,
    established: `Homes in ${n.name} were typically built around ${yearStr} and commonly feature ${n.commonRoofTypes.toLowerCase()}. Many of these homes still have the original 3-tab shingles or early architectural shingles that are well past their expected lifespan. Upgrading to modern impact-resistant Class 4 shingles improves protection and qualifies for insurance premium discounts. Gates Enterprises carries GAF, Owens Corning, Malarkey, and CertainTeed to match any ${n.name} home.`,
    modern: `Most ${n.name} homes were built around ${yearStr} and feature ${n.commonRoofTypes.toLowerCase()}. These builder-grade materials are often reaching the end of their 20 to 25 year warranty window. Replacing with manufacturer-certified installations from Gates Enterprises means extended warranty coverage, often 50 years or more. We carry GAF, Owens Corning, Malarkey, and CertainTeed, all with Class 4 impact-resistant options for Colorado's hail exposure.`,
    new: `${n.name}'s newer homes (built around ${yearStr}) typically feature ${n.commonRoofTypes.toLowerCase()}. While these roofs are relatively new, Colorado hailstorms can cause damage in the first season. Documenting storm damage early and filing insurance claims promptly protects your warranty and your investment. Gates Enterprises carries GAF, Owens Corning, Malarkey, and CertainTeed products, all with impact-resistant Class 4 options.`,
  };

  // Hail risk answer varies by FEMA rating
  const hailAnswers: Record<typeof hailLevel, string> = {
    "very-high": `${c.city} has a HailScore of ${hailScore}/100, indicating ${riskWord} hail risk. FEMA's National Risk Index rates ${cd.county ?? c.city} County as "${femaRating}" for hail, placing it among the most hail-exposed counties in the nation. ${n.uniqueFact} Annual roof inspections are essential for ${n.name} homeowners, especially after the spring and summer storm season (April through August). Gates Enterprises offers free storm damage inspections with detailed documentation.`,
    high: `${c.city} has a HailScore of ${hailScore}/100, indicating ${riskWord} hail risk. FEMA rates ${cd.county ?? c.city} County as "${femaRating}" for hail damage. ${n.uniqueFact} We strongly recommend annual roof inspections for all ${n.name} homeowners, especially after severe weather events. Gates Enterprises offers free storm damage inspections to identify and document hail impact on your roof.`,
    moderate: `${c.city} has a HailScore of ${hailScore}/100. While the risk is moderate compared to some Front Range areas, FEMA still rates ${cd.county ?? c.city} County as "${femaRating}" for hail. ${n.uniqueFact} Regular roof inspections remain advisable for ${n.name} homeowners, particularly after notable storm events. Gates Enterprises provides free inspections to catch damage early before it leads to leaks.`,
  };

  // Insurance answer varies by housing era
  const insuranceAnswers: Record<typeof era, string> = {
    historic: `Gates Enterprises manages the full insurance claim process for ${n.name} homeowners, from initial inspection through final approval. Older homes (built around ${yearStr}) sometimes face additional scrutiny from adjusters around pre-existing wear versus storm damage. Our detailed documentation and experience with historic properties ensures your claim accurately reflects storm impact. With ${cd.county ?? c.city} County's "${femaRating}" hail risk rating, most ${n.name} homeowners qualify for full restoration through their policy.`,
    established: `Absolutely. Gates Enterprises handles every step of the insurance claim process for ${n.name} homeowners: initial inspection, damage documentation, adjuster meetings, and supplement approvals. Homes built around ${yearStr} are prime candidates for insurance-covered roof replacements after hail events, since the roofing materials have aged enough that storm damage is clearly distinguishable. With ${c.city}'s ${riskWord} hail exposure, many ${n.name} residents qualify for full roof restoration.`,
    modern: `Yes. Gates Enterprises manages insurance claims for ${n.name} homeowners from start to finish. Homes built around ${yearStr} often have manufacturer warranties still in effect, which we coordinate alongside your insurance claim for maximum coverage. With ${cd.county ?? c.city} County rated "${femaRating}" for hail by FEMA, storm-related claims are common and well-supported in this area. We handle all documentation so you can focus on everything else.`,
    new: `Gates Enterprises handles the complete insurance claim process for ${n.name} homeowners. For newer homes built around ${yearStr}, prompt damage documentation is critical to preserve both your insurance coverage and your manufacturer warranty. We photograph and catalog all damage before any temporary repairs. With ${cd.county ?? c.city} County's "${femaRating}" hail risk rating, storm claims are frequent in this area and well-understood by local adjusters.`,
  };

  const faqs: FAQPair[] = [
    {
      q: `How much does ${s.service.toLowerCase()} cost in ${n.name}, ${c.city}?`,
      a: costAnswers[tier],
    },
    {
      q: `What roofing materials work best for ${n.name} homes?`,
      a: materialsAnswers[era],
    },
    {
      q: `Does Gates Enterprises serve ${n.name} in ${c.city}?`,
      a: `Yes. Gates Enterprises provides ${s.service.toLowerCase()} throughout ${n.name} and all of ${c.city}. With thousands of completed projects across Colorado's Front Range and a 4.8-star rating from 301 Google reviews, we bring certified quality to every ${n.name} project. Call (720) 766-3377 or visit our contact page to schedule a free estimate.`,
    },
    {
      q: `How long does ${s.service.toLowerCase()} take in ${n.name}?`,
      a: `Most residential ${s.service.toLowerCase()} projects in ${n.name} are completed in one to two days, depending on roof size and complexity. ${n.name}'s ${n.housingAge} homes may have unique architectural features that affect timeline. We provide a specific schedule during your free estimate and coordinate around your availability.`,
    },
    {
      q: `Is ${n.name} at risk for hail damage?`,
      a: hailAnswers[hailLevel],
    },
    {
      q: `Do you handle insurance claims for ${n.name} homeowners?`,
      a: insuranceAnswers[era],
    },
    {
      q: `What makes Gates Enterprises different from other roofers in ${n.name}?`,
      a: `Gates Enterprises is the only contractor in Colorado certified by all four major manufacturers: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed Shingle Master. With 301 Google reviews (4.8 stars) and thousands of completed projects, we bring unmatched credentials to every ${n.name} project. We also provide free HailScore data for ${c.city} to help homeowners understand their specific risk.`,
    },
  ];

  return faqs;
}

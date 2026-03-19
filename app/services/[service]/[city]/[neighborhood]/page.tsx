import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { services, getCityBySlug, getServiceBySlug } from "../../../../../lib/service-areas-data";
import { neighborhoods, getNeighborhoodBySlug, getNeighborhoodsByCity } from "../../../../../lib/neighborhoods";
import { getHailScore } from "../../../../../lib/hail-data";
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

  return {
    title,
    description,
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
  const faqItems = generateNeighborhoodFAQs(neighborhood, service, city, hailData);
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
): FAQPair[] {
  const hailScore = hailData?.hailScore ?? 70;
  const riskWord = hailScore >= 85 ? "extreme" : hailScore >= 65 ? "high" : "moderate";

  const faqs: FAQPair[] = [
    {
      q: `How much does ${s.service.toLowerCase()} cost in ${n.name}, ${c.city}?`,
      a: `${s.service} costs in ${n.name} depend on roof size, pitch, material choice, and current condition. With average home values of ${n.avgHomeValue} in ${n.name}, most homeowners invest in quality materials that protect their property value. Gates Enterprises provides free estimates with transparent pricing and no hidden fees. Many ${n.name} homeowners use insurance claims to cover storm-related work.`,
    },
    {
      q: `What roofing materials work best for ${n.name} homes?`,
      a: `${n.name} homes (typically built in the ${n.housingAge} era) commonly have ${n.commonRoofTypes.toLowerCase()}. For ${riskWord} hail exposure in the ${c.city} area, we recommend impact-resistant Class 4 shingles that qualify for insurance premium discounts. Gates Enterprises carries products from GAF, Owens Corning, Malarkey, and CertainTeed to match any ${n.name} home style.`,
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
      a: `${c.city} has a HailScore of ${hailScore}/100, indicating ${riskWord} hail risk. ${n.uniqueFact} We recommend annual roof inspections for all ${n.name} homeowners, especially after spring and summer storms. Gates Enterprises offers free storm damage inspections to document any hail impact on your roof.`,
    },
    {
      q: `Do you handle insurance claims for ${n.name} homeowners?`,
      a: `Absolutely. Gates Enterprises manages the entire insurance claim process for ${n.name} homeowners, from initial inspection and damage documentation through adjuster meetings and supplemental approvals. With ${c.city}'s ${riskWord} hail exposure, many ${n.name} residents qualify for full roof restoration through their homeowners insurance. We help with the documentation so you can focus on everything else.`,
    },
    {
      q: `What makes Gates Enterprises different from other roofers in ${n.name}?`,
      a: `Gates Enterprises is the only contractor in Colorado certified by all four major manufacturers: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master. With 301 Google reviews (4.8 stars) and thousands of completed projects, we bring unmatched credentials to every ${n.name} project. We also provide free HailScore data for ${c.city} to help homeowners understand their specific risk.`,
    },
  ];

  return faqs;
}

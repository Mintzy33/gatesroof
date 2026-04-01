import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { cities, services, getCityBySlug, getServiceBySlug } from "../../../../lib/service-areas-data";
import { getMetaTitle, getMetaDescription } from "../../../../lib/service-meta";
import { shouldIndexServiceCity } from "../../../../lib/seo-config";
import ServiceCityContent from "./content";

interface Props {
  params: Promise<{ service: string; city: string }>;
}

export async function generateStaticParams() {
  return services.flatMap((service) =>
    cities.map((city) => ({
      service: service.slug,
      city: city.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) return {};

  const title = getMetaTitle(service, city);
  const description = getMetaDescription(service, city);
  const url = `https://www.gatesroof.com/services/${service.slug}/${city.slug}`;

  const indexed = shouldIndexServiceCity(service.slug, city.slug);

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
          alt: `Gates Enterprises LLC - ${service.service} in ${city.city}, CO`,
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { service: serviceSlug, city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) notFound();

  const url = `https://www.gatesroof.com/services/${service.slug}/${city.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.service,
    name: `${service.service} in ${city.city}, CO`,
    description: `${service.service} in ${city.city}, Colorado. ${service.shortDesc}`,
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
        ratingValue: "4.9",
        reviewCount: "306",
        bestRating: "5",
      },
    },
    areaServed: {
      "@type": "City",
      name: city.city,
      addressRegion: "CO",
      geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lon },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gatesroof.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.gatesroof.com/services" },
      { "@type": "ListItem", position: 3, name: service.service, item: `https://www.gatesroof.com/services/${service.parentSlug}` },
      { "@type": "ListItem", position: 4, name: `${city.city}, CO`, item: url },
    ],
  };

  return (
    <>
      <Script id="service-city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServiceCityContent serviceSlug={serviceSlug} citySlug={citySlug} />
    </>
  );
}

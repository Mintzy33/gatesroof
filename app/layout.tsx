import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Playfair_Display, Raleway } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import Analytics from "./components/Analytics";
import StickyBottomCTA from "./components/StickyBottomCTA";
import LoadingScreen from "./components/LoadingScreen";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "700"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lakewood Roofing Contractor | Gates Enterprises LLC | Colorado's Most Certified Roofer",
  description: "Lakewood's #1 roofing contractor. 4x manufacturer certified, 7,200+ roofs, 4.8★ from 294+ reviews. Free inspections. Call (720) 766-3377.",
  keywords: "roofing contractor Lakewood CO, hail damage repair Denver, roof replacement Colorado, GAF Master Elite, insurance restoration roofer, storm damage repair",
  alternates: { canonical: "https://gatesroof.com" },
  openGraph: {
    title: "Lakewood Roofing Contractor | Gates Enterprises LLC",
    description: "Lakewood's #1 roofing contractor. 4x manufacturer certified, 7,200+ roofs, 4.8★ from 294+ reviews. Free inspections. Call (720) 766-3377.",
    url: "https://gatesroof.com",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://res.cloudinary.com/dyr5ihrer/video/upload/q_80,f_jpg,w_1200,h_630,c_fill,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado's Most Trusted Roofing Team" }],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://gatesroof.com/#organization",
  "name": "Gates Enterprises LLC",
  "alternateName": "Gates Enterprises",
  "url": "https://gatesroof.com",
  "logo": "https://gatesroof.com/images/gates-enterprises-logo.png",
  "image": "https://gatesroof.com/images/gates-enterprises-og.jpg",
  "description": "Quadruple manufacturer certified roofing and exterior contractor serving Colorado's Front Range. 7,200+ roofs completed, 4.8 star rating, 294+ Google reviews.",
  "telephone": "+17207663377",
  "email": "info@gatesroof.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1445 Holland St",
    "addressLocality": "Lakewood",
    "addressRegion": "CO",
    "postalCode": "80215",
    "addressCountry": "US"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 39.7047, "longitude": -105.0814 },
  "areaServed": [
    {"@type":"City","name":"Lakewood","addressRegion":"CO"},{"@type":"City","name":"Denver","addressRegion":"CO"},
    {"@type":"City","name":"Aurora","addressRegion":"CO"},{"@type":"City","name":"Arvada","addressRegion":"CO"},
    {"@type":"City","name":"Westminster","addressRegion":"CO"},{"@type":"City","name":"Thornton","addressRegion":"CO"},
    {"@type":"City","name":"Centennial","addressRegion":"CO"},{"@type":"City","name":"Littleton","addressRegion":"CO"},
    {"@type":"City","name":"Englewood","addressRegion":"CO"},{"@type":"City","name":"Wheat Ridge","addressRegion":"CO"},
    {"@type":"City","name":"Golden","addressRegion":"CO"},{"@type":"City","name":"Broomfield","addressRegion":"CO"},
    {"@type":"City","name":"Highlands Ranch","addressRegion":"CO"},{"@type":"City","name":"Parker","addressRegion":"CO"},
    {"@type":"City","name":"Castle Rock","addressRegion":"CO"},{"@type":"City","name":"Commerce City","addressRegion":"CO"},
    {"@type":"City","name":"Conifer","addressRegion":"CO"},{"@type":"City","name":"Edgewater","addressRegion":"CO"},
    {"@type":"City","name":"Federal Heights","addressRegion":"CO"},{"@type":"City","name":"Northglenn","addressRegion":"CO"},
    {"@type":"City","name":"Brighton","addressRegion":"CO"},{"@type":"City","name":"Superior","addressRegion":"CO"},
    {"@type":"City","name":"Lone Tree","addressRegion":"CO"},{"@type":"City","name":"Morrison","addressRegion":"CO"},
    {"@type":"City","name":"Evergreen","addressRegion":"CO"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing & Exterior Services",
    "itemListElement": [
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Replacement","url":"https://gatesroof.com/services/roof-replacement"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Storm & Hail Damage Repair","url":"https://gatesroof.com/services/storm-hail-damage"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Siding Installation","url":"https://gatesroof.com/services/siding-exterior"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Gutter Installation","url":"https://gatesroof.com/services/gutters-guards"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Repair","url":"https://gatesroof.com/services/roof-repair"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Insurance Restoration","url":"https://gatesroof.com/services/insurance-claims"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Exterior Painting","url":"https://gatesroof.com/services"}}
    ]
  },
  "knowsAbout": ["GAF roofing systems","CertainTeed roofing","Malarkey shingles","Owens Corning roofing","Class 4 impact-resistant shingles","Colorado hail damage","Insurance restoration"],
  "hasCredential": [
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"GAF Master Elite Contractor"},
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"CertainTeed Shingle Master Pro"},
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"Owens Corning Preferred"},
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"Malarkey Emerald Pro"}
  ],
  "aggregateRating": {"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"293","bestRating":"5"},
  "openingHoursSpecification": [
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"17:00"},
    {"@type":"OpeningHoursSpecification","dayOfWeek":"Saturday","opens":"00:00","closes":"00:00","description":"By appointment"}
  ],
  "priceRange": "$$",
  "sameAs": ["https://www.facebook.com/gatesenterprises","https://www.instagram.com/gatesenterprises","https://www.google.com/maps/place/Gates+Enterprises"]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://gatesroof.com/#org",
  "name": "Gates Enterprises LLC",
  "url": "https://gatesroof.com",
  "logo": "https://gatesroof.com/images/gates-enterprises-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+17207663377",
    "contactType": "customer service",
    "email": "info@gatesroof.com",
    "areaServed": "US",
    "availableLanguage": ["English","Spanish"]
  },
  "sameAs": ["https://www.facebook.com/gatesenterprises","https://www.instagram.com/gatesenterprises","https://www.google.com/maps/place/Gates+Enterprises"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Does insurance cover hail damage?","acceptedAnswer":{"@type":"Answer","text":"Yes. Colorado homeowners insurance typically covers hail damage under your dwelling coverage. You're only responsible for your deductible. We handle the entire claims process so you don't have to."}},
    {"@type":"Question","name":"How long does a roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most residential roofs are completed in a single day. Larger or more complex roofs may take 2-3 days. We'll give you an exact timeline before work begins."}},
    {"@type":"Question","name":"What's the difference between repair and replacement?","acceptedAnswer":{"@type":"Answer","text":"Minor damage (a few missing or cracked shingles) can often be repaired. If damage exceeds 30% of the roof area or your roof is near end of life, replacement is more cost-effective and comes with a full warranty."}},
    {"@type":"Question","name":"Do you offer financing?","acceptedAnswer":{"@type":"Answer","text":"Yes. We offer flexible financing options for homeowners who need them. Ask us about $0 down payment plans during your free inspection."}},
    {"@type":"Question","name":"How do I know if my roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Most hail damage isn't visible from the ground. Look for dented gutters, chipped paint on window sills, or damaged patio furniture — those are signs your roof was likely hit too. The only way to know for sure is a professional inspection."}},
    {"@type":"Question","name":"What if my insurance claim is denied?","acceptedAnswer":{"@type":"Answer","text":"We fight for you. Our team has recovered millions in supplements and overturned denied claims. We know what documentation adjusters need and how to present it."}}
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable} ${raleway.variable}`}>
      <head>
        <meta name="google-site-verification" content="qt8H-yQxvNQ6cAJlE1eDue5L7A2zS6FDsdhBzUdONFU" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body style={{ margin: 0, padding: 0, paddingBottom: 70 }}>
        {/* GTM noscript fallback */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXDXPXB9" height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="GTM" /></noscript>
        {/* Meta Pixel noscript fallback */}
        <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1621445598880955&ev=PageView&noscript=1" alt="" /></noscript>
        <LoadingScreen />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
        <StickyBottomCTA />
      </body>
    </html>
  );
}

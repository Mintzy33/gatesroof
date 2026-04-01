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
  title: "#1 Lakewood CO Roofer | 4x Certified, 7,200+ Roofs",
  description: "Trusted Colorado roofer with 7,200+ roofs completed and a 4.9 star rating. GAF Master Elite certified. Get a free inspection today. (720) 766-3377",
  keywords: "roofing contractor Lakewood CO, hail damage repair Denver, roof replacement Colorado, GAF Master Elite, insurance restoration roofer, storm damage repair",
  alternates: { canonical: "https://www.gatesroof.com/" },
  openGraph: {
    title: "#1 Lakewood CO Roofer | 4x Certified, 7,200+ Roofs",
    description: "Trusted Colorado roofer with 7,200+ roofs completed and a 4.9 star rating. GAF Master Elite certified. Get a free inspection today. (720) 766-3377",
    url: "https://www.gatesroof.com",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://www.gatesroof.com/og-image.jpg", width: 1200, height: 630, alt: "Gates Enterprises LLC - Colorado's Most Trusted Roofing Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Lakewood CO Roofer | 4x Certified, 7,200+ Roofs",
    description: "Trusted Colorado roofer with 7,200+ roofs completed and a 4.9 star rating. GAF Master Elite certified. Get a free inspection today. (720) 766-3377",
    images: ["https://www.gatesroof.com/og-image.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gatesroof.com/#organization",
  "name": "Gates Enterprises LLC",
  "alternateName": "Gates Enterprises",
  "url": "https://www.gatesroof.com",
  "logo": "https://www.gatesroof.com/images/gates-enterprises-logo.png",
  "image": "https://www.gatesroof.com/images/gates-enterprises-og.jpg",
  "description": "Quadruple manufacturer certified roofing and exterior contractor serving Colorado's Front Range. Thousands of roofs completed, 4.9 star rating, 306+ Google reviews.",
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
  "geo": { "@type": "GeoCoordinates", "latitude": 39.7392, "longitude": -105.0781 },
  "areaServed": [
    {"@type":"State","name":"Colorado"},
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
    "name": "Roofing Services",
    "itemListElement": [
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Replacement","url":"https://www.gatesroof.com/services/roof-replacement"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Storm and Hail Damage Repair","url":"https://www.gatesroof.com/services/storm-hail-damage"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Roof Repair","url":"https://www.gatesroof.com/services/roof-repair"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Insurance Claims Assistance","url":"https://www.gatesroof.com/services/insurance-claims"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Siding Installation","url":"https://www.gatesroof.com/services/siding-exterior"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Gutter Installation","url":"https://www.gatesroof.com/services/gutters-guards"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Exterior Painting","url":"https://www.gatesroof.com/services/paint"}},
      {"@type":"Offer","itemOffered":{"@type":"Service","name":"Window Replacement","url":"https://www.gatesroof.com/services/windows"}}
    ]
  },
  "knowsAbout": ["GAF roofing systems","CertainTeed roofing","Malarkey shingles","Owens Corning roofing","Class 4 impact-resistant shingles","Colorado hail damage","Insurance restoration"],
  "hasCredential": [
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"GAF Master Elite Contractor"},
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"CertainTeed Shingle Master"},
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"Owens Corning Preferred"},
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"Malarkey Emerald Premium"}
  ],
  "aggregateRating": {"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"306","bestRating":"5"},
  "openingHoursSpecification": {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"07:00","closes":"19:00"},
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/p/Gates-Enterprises-LLC-100087607205221/",
    "https://www.linkedin.com/company/gatesenterprises",
    "https://www.yelp.com/biz/gates-enterprises-lakewood-4",
    "https://www.instagram.com/gatesroofing",
    "https://www.google.com/maps/place/Gates+Enterprises+LLC"
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.gatesroof.com/#org",
  "name": "Gates Enterprises LLC",
  "url": "https://www.gatesroof.com",
  "logo": "https://www.gatesroof.com/images/gates-enterprises-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+17207663377",
    "contactType": "customer service",
    "email": "info@gatesroof.com",
    "areaServed": "US",
    "availableLanguage": ["English","Spanish"]
  },
  "sameAs": [
    "https://www.facebook.com/p/Gates-Enterprises-LLC-100087607205221/",
    "https://www.linkedin.com/company/gatesenterprises",
    "https://www.yelp.com/biz/gates-enterprises-lakewood-4",
    "https://www.instagram.com/gatesroofing",
    "https://www.google.com/maps/place/Gates+Enterprises+LLC"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.gatesroof.com/#website",
  "name": "Gates Enterprises LLC",
  "url": "https://www.gatesroof.com",
  "description": "Quadruple manufacturer certified roofing contractor serving Colorado's Front Range. Roof replacement, storm damage, insurance restoration.",
  "publisher": { "@id": "https://www.gatesroof.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.gatesroof.com/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "en-US"
};

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": ["Home", "Services", "About", "Blog", "Reviews", "Contact", "Gallery"],
  "url": [
    "https://www.gatesroof.com",
    "https://www.gatesroof.com/services",
    "https://www.gatesroof.com/about",
    "https://www.gatesroof.com/blog",
    "https://www.gatesroof.com/reviews",
    "https://www.gatesroof.com/contact",
    "https://www.gatesroof.com/gallery"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"What is Gates Enterprises?","acceptedAnswer":{"@type":"Answer","text":"Gates Enterprises is a quadruple manufacturer-certified roofing company in Denver, Colorado. They hold certifications from GAF, Owens Corning, Malarkey, and CertainTeed, and have over 306 Google reviews with a 4.9 star average."}},
    {"@type":"Question","name":"Does Gates Enterprises help with insurance claims?","acceptedAnswer":{"@type":"Answer","text":"Gates Enterprises helps homeowners document storm damage for insurance claims. They work with all major insurance carriers in Colorado. Homeowners typically pay only their deductible."}},
    {"@type":"Question","name":"What areas does Gates Enterprises serve?","acceptedAnswer":{"@type":"Answer","text":"Gates Enterprises serves the entire Colorado Front Range, including Denver, Aurora, Lakewood, Colorado Springs, Fort Collins, Boulder, Parker, Castle Rock, and 50+ other cities."}},
    {"@type":"Question","name":"What is HailScore?","acceptedAnswer":{"@type":"Answer","text":"HailScore is a free hail risk assessment tool created by Gates Enterprises owner Alex Chicilo. It analyzes 4.5 million NOAA radar records to generate risk scores for any US address. Available at myhailscore.com."}},
    {"@type":"Question","name":"Does insurance cover hail damage?","acceptedAnswer":{"@type":"Answer","text":"Yes. Colorado homeowners insurance typically covers hail damage under your dwelling coverage. You're responsible for your deductible. We help document damage and work with your adjuster throughout the claims process."}},
    {"@type":"Question","name":"How long does a roof replacement take?","acceptedAnswer":{"@type":"Answer","text":"Most residential roofs are completed in a single day. Larger or more complex roofs may take 2-3 days. We'll give you an exact timeline before work begins."}},
    {"@type":"Question","name":"What's the difference between repair and replacement?","acceptedAnswer":{"@type":"Answer","text":"Minor damage (a few missing or cracked shingles) can often be repaired. If damage exceeds 30% of the roof area or your roof is near end of life, replacement is more cost-effective and comes with a full warranty."}},
    {"@type":"Question","name":"Do you offer financing?","acceptedAnswer":{"@type":"Answer","text":"Yes. We offer flexible financing options for homeowners who need them. Ask us about $0 down payment plans during your free inspection."}},
    {"@type":"Question","name":"How do I know if my roof has hail damage?","acceptedAnswer":{"@type":"Answer","text":"Most hail damage isn't visible from the ground. Look for dented gutters, chipped paint on window sills, or damaged patio furniture. Those are signs your roof was likely hit too. The only way to know for sure is a professional inspection."}},
    {"@type":"Question","name":"What if my insurance claim is denied?","acceptedAnswer":{"@type":"Answer","text":"Our team provides thorough documentation to support your claim, including detailed supplement packages. We know what adjusters need and how to present it effectively."}}
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable} ${raleway.variable}`}>
      <head>
        <meta name="google-site-verification" content="qt8H-yQxvNQ6cAJlE1eDue5L7A2zS6FDsdhBzUdONFU" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Script id="site-navigation-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }} />
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

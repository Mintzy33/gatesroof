import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Playfair_Display } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import Analytics from "./components/Analytics";
import StickyBottomCTA from "./components/StickyBottomCTA";

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

export const metadata: Metadata = {
  title: "Gates Enterprises | Colorado's #1 Roofing Contractor | 7,200+ Roofs",
  description: "Gates Enterprises is Colorado's trusted roofing contractor with 7,200+ roofs completed. GAF Master Elite & CertainTeed Platinum Preferred certified. Free inspections. Call (720) 766-3377.",
  keywords: "roofing contractor Lakewood CO, hail damage repair Denver, roof replacement Colorado, GAF Master Elite, insurance claim roofer, storm damage repair",
  openGraph: {
    title: "Gates Enterprises LLC | Colorado's Most Trusted Roofing Team",
    description: "GAF Master Elite Certified. 7,200+ roofs completed. Roof replacement, storm damage, siding, gutters & insurance claims across Denver metro.",
    url: "https://gatesroof.com",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
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
  "description": "Colorado's trusted roofing contractor with 7,200+ roofs completed. GAF Master Elite and CertainTeed Platinum Preferred certified. Roof replacement, storm damage repair, siding, and gutters.",
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
    {"@type":"City","name":"Federal Heights","addressRegion":"CO"},{"@type":"City","name":"Northglenn","addressRegion":"CO"}
  ],
  "serviceType": ["Roofing","Roof Replacement","Storm Damage Repair","Hail Damage Repair","Roof Repair","Siding Installation","Gutter Installation","Insurance Claims Assistance"],
  "knowsAbout": ["GAF roofing systems","CertainTeed roofing","Malarkey shingles","Class 4 impact-resistant shingles","Colorado hail damage"],
  "hasCredential": [
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"GAF Master Elite Contractor"},
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"CertainTeed Platinum Preferred Contractor"},
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"Malarkey Certified Installer"},
    {"@type":"EducationalOccupationalCredential","credentialCategory":"Manufacturer Certification","name":"Emerald Premium Contractor"}
  ],
  "aggregateRating": {"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"200","bestRating":"5"},
  "openingHoursSpecification": [
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"18:00"},
    {"@type":"OpeningHoursSpecification","dayOfWeek":"Saturday","opens":"08:00","closes":"14:00"}
  ],
  "priceRange": "$$",
  "sameAs": ["https://www.facebook.com/gatesenterprises","https://www.instagram.com/gatesenterprises","https://www.google.com/maps/place/Gates+Enterprises"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="google-site-verification" content="qt8H-yQxvNQ6cAJlE1eDue5L7A2zS6FDsdhBzUdONFU" />
        <link rel="preload" as="image" href="https://res.cloudinary.com/dyr5ihrer/video/upload/q_40,f_webp,w_800,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov" type="image/webp" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body style={{ margin: 0, padding: 0, paddingBottom: 70 }}>
        {/* GTM noscript fallback */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXDXPXB9" height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="GTM" /></noscript>
        {/* Meta Pixel noscript fallback */}
        <noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1621445598880955&ev=PageView&noscript=1" alt="" /></noscript>
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
        <StickyBottomCTA />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gates Enterprises LLC | Lakewood's Premier Roofing Contractor",
  description: "Colorado's most trusted roofing team. GAF Master Elite Certified. 7,200+ roofs completed. Roof replacement, storm damage, siding, gutters, insurance claims. Free inspections across Denver metro.",
  keywords: "roofing contractor Lakewood CO, hail damage repair Denver, roof replacement Colorado, GAF Master Elite, insurance claim roofer, storm damage repair",
  openGraph: {
    title: "Gates Enterprises LLC | Colorado's Most Trusted Roofing Team",
    description: "GAF Master Elite Certified. 7,200+ roofs completed across Denver metro. Free inspections.",
    url: "https://gatesroof.com",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

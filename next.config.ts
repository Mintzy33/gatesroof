import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dyr5ihrer/**",
      },
    ],
  },
  async redirects() {
    return [
      // Service area redirects (old /service-areas/{city}-co → /areas/{city})
      { source: "/service-areas/lakewood-co", destination: "/areas/lakewood", permanent: true },
      { source: "/service-areas/parker-co", destination: "/areas/parker", permanent: true },
      { source: "/service-areas/aurora-co", destination: "/areas/aurora", permanent: true },
      { source: "/service-areas/denver-co", destination: "/areas/denver", permanent: true },
      { source: "/service-areas/arvada-co", destination: "/areas/arvada", permanent: true },
      { source: "/service-areas/broomfield-co", destination: "/areas/broomfield", permanent: true },
      { source: "/service-areas/castle-rock-co", destination: "/areas/castle-rock", permanent: true },
      { source: "/service-areas/centennial-co", destination: "/areas/centennial", permanent: true },
      { source: "/service-areas/commerce-city-co", destination: "/areas/commerce-city", permanent: true },
      { source: "/service-areas/conifer-co", destination: "/areas/conifer", permanent: true },
      { source: "/service-areas/edgewater-co", destination: "/areas/edgewater", permanent: true },
      { source: "/service-areas/englewood-co", destination: "/areas/englewood", permanent: true },
      { source: "/service-areas/federal-heights-co", destination: "/areas/federal-heights", permanent: true },
      { source: "/service-areas/golden-co", destination: "/areas/golden", permanent: true },
      { source: "/service-areas/highlands-ranch-co", destination: "/areas/highlands-ranch", permanent: true },
      { source: "/service-areas/littleton-co", destination: "/areas/littleton", permanent: true },
      { source: "/service-areas/northglenn-co", destination: "/areas/northglenn", permanent: true },
      { source: "/service-areas/thornton-co", destination: "/areas/thornton", permanent: true },
      { source: "/service-areas/westminster-co", destination: "/areas/westminster", permanent: true },
      { source: "/service-areas/wheat-ridge-co", destination: "/areas/wheat-ridge", permanent: true },
      // Out-of-state pages that were indexed (redirect to homepage)
      { source: "/service-areas/las-vegas-nv", destination: "/", permanent: true },
      { source: "/service-areas/enterprise-nv", destination: "/", permanent: true },
      { source: "/service-areas/saint-paul-mn", destination: "/", permanent: true },
      // Catch-all for any other old service-areas URLs
      { source: "/service-areas/:slug", destination: "/areas/:slug", permanent: true },
      // Old service index pages
      { source: "/service-areas", destination: "/areas/lakewood", permanent: true },
      { source: "/services/residential-roofing", destination: "/services/roof-replacement", permanent: true },
      { source: "/services/general-contractor", destination: "/services/roof-replacement", permanent: true },
      // Old routes
      { source: "/regions", destination: "/areas/lakewood", permanent: true },
      { source: "/st-paul-minneapolis", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

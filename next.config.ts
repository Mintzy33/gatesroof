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
      // Consolidate all traffic to https://www.gatesroof.com (SEO canonical)
      {
        source: "/:path*",
        has: [{ type: "host", value: "gatesroof.com" }],
        destination: "https://www.gatesroof.com/:path*",
        permanent: true,
      },
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
      { source: "/service-areas/henderson-nv", destination: "/", permanent: true },
      { source: "/service-areas/enterprise-nv", destination: "/", permanent: true },
      { source: "/service-areas/saint-paul-mn", destination: "/", permanent: true },
      { source: "/service-areas/minneapolis-mn", destination: "/", permanent: true },
      { source: "/service-areas/spring-valley-nv", destination: "/", permanent: true },
      { source: "/service-areas/lockwood-mt", destination: "/", permanent: true },
      { source: "/service-areas/laurel-mt", destination: "/", permanent: true },
      { source: "/service-areas/worden-mt", destination: "/", permanent: true },
      { source: "/service-areas/park-city-mt", destination: "/", permanent: true },
      // Old about page
      { source: "/about-us", destination: "/about", permanent: true },
      // Catch-all for any other old service-areas URLs
      { source: "/service-areas/:slug", destination: "/areas/:slug", permanent: true },
      // Old service index pages
      { source: "/service-areas", destination: "/areas/lakewood", permanent: true },
      { source: "/services/residential-roofing", destination: "/services/roof-replacement", permanent: true },
      { source: "/services/general-contractor", destination: "/services/roof-replacement", permanent: true },
      { source: "/services/commercial-roofing", destination: "/services/roof-replacement", permanent: true },
      { source: "/services/insurance-claim-specialists", destination: "/services", permanent: true },
      { source: "/services/skylights", destination: "/services/windows", permanent: true },
      // Old tools
      { source: "/tools/roof-replacement-cost-estimator", destination: "/tools/repair-cost-estimator", permanent: true },
      // Old routes
      { source: "/regions", destination: "/areas/lakewood", permanent: true },
      { source: "/st-paul-minneapolis", destination: "/", permanent: true },
      // Old pages from previous site (Rebolt/legacy)
      { source: "/careers", destination: "/about", permanent: true },
      { source: "/residential-services", destination: "/services", permanent: true },
      { source: "/commercial-services", destination: "/services/roof-replacement", permanent: true },
      // Old FAQ format
      { source: "/roof-faq", destination: "/", permanent: true },
      { source: "/roof-faq/roofblog/:path*", destination: "/blog", permanent: true },
      { source: "/roof-faq/:id", destination: "/services", permanent: true },
      // Old blog posts that were indexed but no longer exist
      { source: "/blog/rooftop-revolution-exploring-the-cutting-edge-innovations-transforming-home-with-solar-roofing", destination: "/blog", permanent: true },
      { source: "/blog/pros-and-cons-of-different-roofing-styles-in-colorado-which-suits-you", destination: "/blog", permanent: true },
      { source: "/blog/more-essential-tips-for-finding-a-reliable-roofer-in-denver", destination: "/blog", permanent: true },
      { source: "/blog/red-flags-common-roofing-scams-targeting-colorado-residents", destination: "/blog", permanent: true },
      { source: "/blog/roof-claims-on-your-homeowners-insurance/:path*", destination: "/blog", permanent: true },
      // Old service URLs → correct service pages
      { source: "/services/roofing", destination: "/services", permanent: true },
      { source: "/services/gutters", destination: "/services/gutters/lakewood", permanent: true },
      { source: "/services/siding", destination: "/services", permanent: true },
      // Old pages → correct pages
      { source: "/get-a-quote", destination: "/contact", permanent: true },
      { source: "/financing", destination: "/contact", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/mission-statement", destination: "/about", permanent: true },
      { source: "/billings", destination: "/", permanent: true },
      { source: "/denver", destination: "/areas/denver", permanent: true },
      // Old project pages (specific before catch-all)
      { source: "/projects/transforming-homes-with-quality-siding-services", destination: "/services", permanent: true },
      { source: "/projects/transformative-home-painting-in-nevada", destination: "/services", permanent: true },
      { source: "/projects/:slug", destination: "/gallery", permanent: true },
    ];
  },
};

export default nextConfig;

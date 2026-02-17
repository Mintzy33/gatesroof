"use client";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { blogPosts } from "./posts";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#C9A54E";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const LIGHT_BG = "#FAFBFD";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

const categoryColors: Record<string, string> = {
  "Insurance Claims": "#DC2626",
  "Homeowner Tips": "#059669",
  "Roofing Materials": "#7C3AED",
  "Storm Prep": "#D97706",
  "Cost Guide": "#2563EB",
};

export default function BlogContent() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div style={{ background: WHITE, minHeight: "100vh" }}>
      <Header />

      {/* Hero */}
      <section style={{ padding: "140px 24px 64px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, textAlign: "center" as const }}>
        <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: GOLD, letterSpacing: "0.2em" }}>BLOG</span>
        <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "14px 0" }}>Roofing Tips & News</h1>
        <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>Expert advice on Colorado roofing, insurance claims, storm prep, and choosing the right materials for your home.</p>
      </section>

      {/* Featured Post */}
      <section style={{ padding: "48px 24px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link href={`/blog/${featured.slug}`} className="featured-card" style={{
            display: "block", textDecoration: "none",
            background: LIGHT_BG, borderRadius: 20,
            padding: "40px 36px", border: "1px solid rgba(13,33,55,0.06)",
            transition: "box-shadow 0.3s",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const,
                color: categoryColors[featured.category] || ACCENT,
                background: `${categoryColors[featured.category] || ACCENT}12`,
                padding: "4px 10px", borderRadius: 100,
              }}>{featured.category}</span>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>Featured</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: NAVY,
              lineHeight: 1.2, margin: "0 0 14px",
            }}>{featured.title}</h2>
            <p style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 16, lineHeight: 1.7, color: TEXT_LIGHT,
              margin: "0 0 16px", maxWidth: 700,
            }}>{featured.excerpt}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>{formatDate(featured.publishDate)}</span>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>{featured.readTime}</span>
              <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: ACCENT }}>Read article →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ padding: "48px 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{
                textDecoration: "none", background: WHITE, borderRadius: 16,
                padding: "28px 24px", border: "1px solid rgba(13,33,55,0.08)",
                transition: "box-shadow 0.3s, transform 0.3s",
                display: "flex", flexDirection: "column",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <span style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const,
                    color: categoryColors[post.category] || ACCENT,
                  }}>{post.category}</span>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: TEXT_LIGHT }} />
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, color: TEXT_LIGHT }}>{post.readTime}</span>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 17, fontWeight: 700, color: NAVY,
                  lineHeight: 1.35, margin: "0 0 10px",
                  display: "-webkit-box", WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical" as const, overflow: "hidden",
                }}>{post.title}</h3>
                <p style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14, lineHeight: 1.65, color: TEXT_LIGHT,
                  margin: "0 0 16px", flex: 1,
                  display: "-webkit-box", WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical" as const, overflow: "hidden",
                }}>{post.excerpt}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>{formatDate(post.publishDate)}</span>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: ACCENT }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Got Roofing Questions?" subtitle="We've got answers and free inspections. Colorado's most trusted roofing team." />
      <Footer />

      <style>{`
        .featured-card:hover { box-shadow: 0 8px 32px rgba(13,33,55,0.08); }
        .blog-card:hover { box-shadow: 0 6px 24px rgba(13,33,55,0.08); transform: translateY(-2px); }
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .featured-card { padding: 28px 24px !important; }
        }
      `}</style>
    </div>
  );
}

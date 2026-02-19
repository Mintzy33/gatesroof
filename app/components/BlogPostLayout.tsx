"use client";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const LIGHT_BG = "#FAFBFD";

interface BlogPostLayoutProps {
  title: string;
  category: string;
  publishDate: string;
  readTime: string;
  content: string[];
  internalLinks: { placeholder: string; href: string; text: string }[];
  slug: string;
  relatedPosts: { slug: string; title: string; category: string; readTime: string }[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function renderParagraph(
  text: string,
  links: { placeholder: string; href: string; text: string }[],
  idx: number
) {
  // Check if this is a heading-style paragraph (short, no period at end, or starts a section)
  const isHeading = text.length < 100 && !text.endsWith(".") && !text.endsWith(")") && !text.endsWith("?") && !text.includes(". ");
  const isSubHeading = isHeading && text.length < 60;

  // Replace [LINK: xyz] placeholders with actual links
  let processed = text;
  const parts: (string | { href: string; text: string })[] = [];
  let lastIndex = 0;

  const linkRegex = /\[LINK:\s*([^\]]+)\]/g;
  let match;
  while ((match = linkRegex.exec(processed)) !== null) {
    if (match.index > lastIndex) {
      parts.push(processed.slice(lastIndex, match.index));
    }
    const placeholder = match[1].trim();
    const linkInfo = links.find(l => l.placeholder === placeholder);
    if (linkInfo) {
      parts.push({ href: linkInfo.href, text: linkInfo.text });
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < processed.length) {
    parts.push(processed.slice(lastIndex));
  }

  if (isHeading) {
    return (
      <h2
        key={idx}
        style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: isSubHeading ? 22 : 26,
          fontWeight: 700,
          color: NAVY,
          margin: "40px 0 16px",
          lineHeight: 1.3,
        }}
      >
        {parts.map((p, i) =>
          typeof p === "string" ? p : <Link key={i} href={p.href} style={{ color: ACCENT, textDecoration: "underline", textUnderlineOffset: 3 }}>{p.text}</Link>
        )}
      </h2>
    );
  }

  return (
    <p
      key={idx}
      style={{
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        fontSize: 17,
        lineHeight: 1.85,
        color: TEXT,
        margin: "0 0 20px",
      }}
    >
      {parts.map((p, i) =>
        typeof p === "string" ? p : <Link key={i} href={p.href} style={{ color: ACCENT, textDecoration: "underline", textUnderlineOffset: 3, fontWeight: 500 }}>{p.text}</Link>
      )}
    </p>
  );
}

export default function BlogPostLayout({
  title, category, publishDate, readTime, content, internalLinks, slug, relatedPosts,
}: BlogPostLayoutProps) {
  return (
    <div style={{ background: WHITE, minHeight: "100vh" }}>
      <Header />

      {/* Hero */}
      <section style={{ padding: "140px 24px 60px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)` }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/blog" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            ← Back to Blog
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0 16px", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 700, color: ACCENT,
              letterSpacing: "0.15em", textTransform: "uppercase" as const,
              background: "rgba(37,99,235,0.1)", padding: "5px 12px", borderRadius: 100,
            }}>{category}</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
              {formatDate(publishDate)} &middot; {readTime}
            </span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 800, color: WHITE,
            lineHeight: 1.15, margin: 0,
          }}>{title}</h1>
        </div>
      </section>

      {/* Article Body */}
      <article style={{ padding: "56px 24px 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {content.map((p, i) => renderParagraph(p, internalLinks, i))}
        </div>
      </article>

      {/* Author Box */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{
          maxWidth: 760, margin: "0 auto",
          background: LIGHT_BG, borderRadius: 16, padding: "28px 32px",
          border: "1px solid rgba(13,33,55,0.06)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <div style={{
              width: 52, height: 52, borderRadius: "50%",
              background: `linear-gradient(135deg, ${ACCENT}, #60A5FA)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 20, fontWeight: 800, color: WHITE,
            }}>GE</div>
            <div>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, color: NAVY }}>Gates Enterprises</div>
              <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: TEXT_LIGHT }}>Colorado&apos;s #1 Roofing Contractor &middot; 7,200+ Roofs Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section style={{ padding: "0 24px 72px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <h3 style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              fontSize: 24, fontWeight: 700, color: NAVY, margin: "0 0 24px",
            }}>Related Articles</h3>
            <div className="related-posts-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {relatedPosts.map(rp => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} style={{
                  textDecoration: "none", background: LIGHT_BG, borderRadius: 14,
                  padding: "24px", border: "1px solid rgba(13,33,55,0.06)",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}>
                  <span style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700, color: ACCENT,
                    letterSpacing: "0.12em", textTransform: "uppercase" as const,
                  }}>{rp.category}</span>
                  <div style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 15, fontWeight: 600, color: NAVY, margin: "8px 0 8px",
                    lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical" as const, overflow: "hidden",
                  }}>{rp.title}</div>
                  <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>{rp.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA title="Need Expert Roofing Help?" subtitle="Free inspections. Insurance restoration support. The most trusted roofing team in Colorado." />
      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .related-posts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

"use client";
import Link from "next/link";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";

interface AnswerCapsuleProps {
  text: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function AnswerCapsule({ text, ctaText = "Get a Free Estimate", ctaHref = "/contact" }: AnswerCapsuleProps) {
  return (
    <section style={{ padding: "0 24px" }}>
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "32px 36px",
          background: "linear-gradient(135deg, #EFF6FF 0%, #F0F4F8 100%)",
          borderRadius: 16,
          borderLeft: `4px solid ${ACCENT}`,
          position: "relative",
          marginTop: -40,
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: 18,
            lineHeight: 1.8,
            color: NAVY,
            margin: 0,
            fontWeight: 500,
          }}
        >
          {text}
        </p>
        <div style={{ marginTop: 20 }}>
          <Link
            href={ctaHref}
            style={{
              display: "inline-block",
              background: ACCENT,
              color: "#FFFFFF",
              borderRadius: 100,
              padding: "12px 28px",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {ctaText} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

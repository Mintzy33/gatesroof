"use client";
import { getCityBySlug } from "../../lib/service-areas-data";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const LIGHT_BG = "#FAFBFD";
const TEXT_LIGHT = "#64748B";

/**
 * Displays zip codes, landmarks, and a Google Maps link for a given city.
 * Used on both area pages and service × city pages for local SEO.
 */
export default function LocalSEOInfo({
  citySlug,
  cityName,
  showMapsLink = false,
}: {
  citySlug: string;
  cityName: string;
  showMapsLink?: boolean;
}) {
  const city = getCityBySlug(citySlug);
  const zipCodes = city?.zipCodes;
  const landmarks = city?.landmarks;

  if (!zipCodes?.length && !landmarks?.length) return null;

  const mapsUrl = `https://www.google.com/maps/search/Gates+Enterprises+roofing+${encodeURIComponent(cityName)}+CO`;

  return (
    <section style={{ padding: "48px 24px", background: LIGHT_BG }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
            fontSize: 24,
            fontWeight: 800,
            color: NAVY,
            marginBottom: 16,
          }}
        >
          Serving {cityName}, Colorado
        </h2>

        {zipCodes && zipCodes.length > 0 && (
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.85,
              color: TEXT_LIGHT,
              marginBottom: 12,
            }}
          >
            <strong style={{ color: NAVY }}>Zip codes we serve in {cityName}:</strong>{" "}
            {zipCodes.join(", ")}
          </p>
        )}

        {landmarks && landmarks.length > 0 && (
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.85,
              color: TEXT_LIGHT,
              marginBottom: showMapsLink ? 24 : 0,
            }}
          >
            <strong style={{ color: NAVY }}>Located near:</strong>{" "}
            {landmarks.join(", ")}
          </p>
        )}

        {showMapsLink && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: ACCENT,
              color: "#FFFFFF",
              borderRadius: 100,
              padding: "14px 28px",
              textDecoration: "none",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Find Us on Google Maps →
          </a>
        )}
      </div>
    </section>
  );
}

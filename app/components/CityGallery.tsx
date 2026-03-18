"use client";
import Image from "next/image";

const GALLERY_IMAGES = [
  { src: "/images/services/black-asphalt-shingle-roof-colorado.webp", baseAlt: "Asphalt shingle roof replacement" },
  { src: "/images/services/residential-roof-replacement-colorado.webp", baseAlt: "Residential roof replacement" },
  { src: "/images/projects/roof-replacement-project-colorado-2.webp", baseAlt: "Roof replacement project" },
];

interface CityGalleryProps {
  city: string;
}

export default function CityGallery({ city }: CityGalleryProps) {
  return (
    <section style={{ padding: "clamp(48px, 8vw, 72px) 24px", background: "#FAFBFD" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h3 style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: "clamp(22px, 3vw, 28px)",
          fontWeight: 700,
          color: "#0D2137",
          textAlign: "center" as const,
          marginBottom: 24,
        }}>
          Recent Roofing Projects Near {city}, Colorado
        </h3>
        <div className="city-gallery" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, borderRadius: 20, overflow: "hidden" }}>
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} style={{ position: "relative", aspectRatio: "4/3" }}>
              <Image
                src={img.src}
                alt={`${img.baseAlt} in ${city}, Colorado by Gates Enterprises`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .city-gallery { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

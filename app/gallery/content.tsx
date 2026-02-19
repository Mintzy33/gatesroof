"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const NAVY = "#06263f";
const DEEP = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const WHITE = "#FFFFFF";
const LIGHT_BG = "#FAFBFD";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

type Category = "All" | "Residential" | "Tile and Specialty" | "Commercial" | "In Progress";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category[];
  location?: string;
  tall?: boolean;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/gallery/plantation-edited-website.jpg",
    alt: "Large estate roof replacement in progress with full crew on site",
    category: ["Residential", "In Progress"],
    location: "Berthoud, CO",
    tall: true,
  },
  {
    src: "/images/gallery/warren-edited.jpg",
    alt: "Completed luxury home with dark designer shingle roof surrounded by trees",
    category: ["Residential"],
    location: "Cherry Hills Village, CO",
  },
  {
    src: "/images/gallery/tile-finished-edit.jpg",
    alt: "Completed clay tile roof on brick estate home with aerial view",
    category: ["Residential", "Tile and Specialty"],
    location: "Castle Rock, CO",
    tall: true,
  },
  {
    src: "/images/gallery/engineer-edited.jpg",
    alt: "Estate home roof replacement with crane delivering materials on scenic hillside",
    category: ["Residential", "In Progress"],
    location: "Elizabeth, CO",
  },
  {
    src: "/images/gallery/davinci-edited-1.jpg",
    alt: "Aerial view of large home roof replacement near golf course",
    category: ["Residential", "In Progress"],
    location: "Littleton, CO",
  },
  {
    src: "/images/gallery/big-1-edited.jpg",
    alt: "Aerial view of luxury estate with completed designer shingle roof",
    category: ["Residential"],
    location: "Castle Pines, CO",
    tall: true,
  },
  {
    src: "/images/gallery/carriage-edit.jpg",
    alt: "Completed designer shingle roof on large home with aerial top down view",
    category: ["Residential"],
    location: "Parker, CO",
  },
  {
    src: "/images/gallery/davinci-edited-2.jpg",
    alt: "Completed DaVinci synthetic slate roof near golf course with aerial view",
    category: ["Residential", "Tile and Specialty"],
    location: "Littleton, CO",
  },
  {
    src: "/images/gallery/black-roof-edited.jpg",
    alt: "Completed charcoal shingle roof on residential home with aerial view",
    category: ["Residential"],
    location: "Evergreen, CO",
  },
  {
    src: "/images/gallery/gio-pio-edited.jpg",
    alt: "Large luxury estate with completed dark roof and tennis court",
    category: ["Residential"],
    location: "Greenwood Village, CO",
    tall: true,
  },
  {
    src: "/images/gallery/berthoud-web-edited.jpg",
    alt: "Stone and brick estate home mid roof replacement with crew and materials",
    category: ["Residential", "In Progress"],
    location: "Berthoud, CO",
  },
  {
    src: "/images/gallery/tile-web-edited.jpg",
    alt: "Tile roof installation in progress during winter with stacked materials",
    category: ["Tile and Specialty", "In Progress"],
    location: "Highlands Ranch, CO",
  },
  {
    src: "/images/gallery/metal-1-edited.jpg",
    alt: "Commercial metal roof replacement on large agricultural building",
    category: ["Commercial", "In Progress"],
    location: "Eastern Colorado",
    tall: true,
  },
  {
    src: "/images/gallery/apartment-edited.jpg",
    alt: "Aerial view of large apartment and townhome community roofing project",
    category: ["Commercial"],
    location: "Windsor, CO",
  },
  {
    src: "/images/gallery/house-1-edited.jpg",
    alt: "Completed shingle roof on custom stucco home with circular driveway",
    category: ["Residential"],
    location: "Fort Collins, CO",
  },
  {
    src: "/images/gallery/max-build-crane-edited.jpg",
    alt: "Crane delivering shingle bundles to residential roof replacement project",
    category: ["Residential", "In Progress"],
    location: "Thornton, CO",
  },
  {
    src: "/images/gallery/evergreen-edited.jpg",
    alt: "Mountain home with completed shingle roof nestled among pine trees",
    category: ["Residential"],
    location: "Evergreen, CO",
  },
  {
    src: "/images/gallery/plant-web-edited.jpg",
    alt: "Grand plantation style estate with crew performing full roof tear off",
    category: ["Residential", "In Progress"],
    location: "Berthoud, CO",
    tall: true,
  },
  {
    src: "/images/gallery/austin-roof-inspection-edited.jpg",
    alt: "Roof inspection in progress with team member on tile roof",
    category: ["Residential", "In Progress"],
    location: "Denver, CO",
  },
];

const CATEGORIES: Category[] = ["All", "Residential", "Tile and Specialty", "Commercial", "In Progress"];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());

  const filtered = activeCategory === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category.includes(activeCategory));

  const openLightbox = useCallback((idx: number) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navLightbox = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      const len = filtered.length;
      setLightboxIndex((lightboxIndex + dir + len) % len);
    },
    [lightboxIndex, filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navLightbox(1);
      if (e.key === "ArrowLeft") navLightbox(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, navLightbox]);

  const handleImageLoad = useCallback((idx: number) => {
    setLoaded((prev) => new Set(prev).add(idx));
  }, []);

  return (
    <div style={{ background: WHITE }}>
      <Header />

      <style>{`
        .gal-hero {
          padding: 160px 24px 80px;
          background: linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .gal-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .gal-kicker {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: ${ACCENT};
          letter-spacing: 0.2em;
          text-transform: uppercase;
          position: relative;
        }
        .gal-title {
          font-family: var(--font-playfair), 'Playfair Display', Georgia, serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: ${WHITE};
          margin: 14px 0;
          position: relative;
        }
        .gal-subtitle {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 18px;
          color: rgba(255,255,255,0.7);
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.75;
          position: relative;
        }
        .gal-count {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 14px;
          color: ${GOLD};
          margin-top: 20px;
          position: relative;
          font-weight: 600;
        }

        /* Filter Bar */
        .gal-filters {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          padding: 48px 24px 16px;
          background: ${LIGHT_BG};
          position: sticky;
          top: 72px;
          z-index: 40;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }
        .gal-filter-btn {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 100px;
          border: 1.5px solid rgba(0,0,0,0.1);
          background: ${WHITE};
          color: ${TEXT};
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .gal-filter-btn:hover {
          border-color: ${ACCENT};
          color: ${ACCENT};
          transform: translateY(-1px);
        }
        .gal-filter-btn.active {
          background: ${ACCENT};
          color: ${WHITE};
          border-color: ${ACCENT};
          box-shadow: 0 4px 14px rgba(37,99,235,0.3);
        }

        /* Masonry Grid */
        .gal-grid-wrap {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 24px 80px;
          background: ${LIGHT_BG};
        }
        .gal-result-count {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 14px;
          color: ${TEXT_LIGHT};
          text-align: center;
          margin-bottom: 32px;
        }
        .gal-grid {
          column-count: 3;
          column-gap: 20px;
        }
        .gal-card {
          break-inside: avoid;
          margin-bottom: 20px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          background: #e2e8f0;
        }
        .gal-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(6,38,63,0.7) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: 12px;
        }
        .gal-card:hover::after {
          opacity: 1;
        }
        .gal-card:hover .gal-card-info {
          opacity: 1;
          transform: translateY(0);
        }
        .gal-card:hover img {
          transform: scale(1.04);
        }
        .gal-card img {
          display: block;
          width: 100%;
          height: auto;
          transition: transform 0.5s ease;
          border-radius: 12px;
        }
        .gal-card-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px;
          z-index: 2;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.3s ease;
        }
        .gal-card-loc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: ${GOLD};
          letter-spacing: 0.05em;
        }
        .gal-card-desc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.9);
          margin-top: 4px;
          line-height: 1.4;
        }
        .gal-card-zoom {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gal-card:hover .gal-card-zoom {
          opacity: 1;
        }

        /* Skeleton loading */
        .gal-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #e2e8f0 25%, #edf2f7 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: galShimmer 1.5s infinite;
          border-radius: 12px;
        }
        @keyframes galShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* Lightbox */
        .gal-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(6,38,63,0.95);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: galFadeIn 0.25s ease;
          backdrop-filter: blur(12px);
        }
        @keyframes galFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .gal-lb-close {
          position: absolute;
          top: 20px;
          right: 24px;
          width: 48px;
          height: 48px;
          background: rgba(255,255,255,0.1);
          border: none;
          border-radius: 50%;
          color: ${WHITE};
          font-size: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }
        .gal-lb-close:hover {
          background: rgba(255,255,255,0.2);
        }
        .gal-lb-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          background: rgba(255,255,255,0.1);
          border: none;
          border-radius: 50%;
          color: ${WHITE};
          font-size: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }
        .gal-lb-nav:hover {
          background: rgba(255,255,255,0.2);
        }
        .gal-lb-prev { left: 20px; }
        .gal-lb-next { right: 20px; }
        .gal-lb-img-wrap {
          max-width: 90vw;
          max-height: 85vh;
          position: relative;
          animation: galSlideUp 0.3s ease;
        }
        @keyframes galSlideUp {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .gal-lb-img-wrap img {
          max-width: 90vw;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
        }
        .gal-lb-caption {
          text-align: center;
          padding: 16px 0 0;
        }
        .gal-lb-loc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: ${GOLD};
          letter-spacing: 0.05em;
        }
        .gal-lb-desc {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,0.8);
          margin-top: 4px;
        }
        .gal-lb-counter {
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          margin-top: 8px;
        }

        /* No results */
        .gal-empty {
          text-align: center;
          padding: 80px 24px;
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          color: ${TEXT_LIGHT};
          font-size: 16px;
        }

        @media (max-width: 960px) {
          .gal-grid {
            column-count: 2;
            column-gap: 16px;
          }
          .gal-card { margin-bottom: 16px; }
        }
        @media (max-width: 600px) {
          .gal-grid {
            column-count: 1;
            column-gap: 0;
          }
          .gal-card { margin-bottom: 16px; }
          .gal-filters {
            gap: 8px;
            padding: 32px 16px 12px;
            top: 64px;
          }
          .gal-filter-btn {
            font-size: 13px;
            padding: 8px 16px;
          }
          .gal-lb-nav {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }
          .gal-lb-prev { left: 10px; }
          .gal-lb-next { right: 10px; }
          .gal-card::after { opacity: 1; }
          .gal-card .gal-card-info { opacity: 1; transform: translateY(0); }
          .gal-card .gal-card-zoom { display: none; }
        }
      `}</style>

      {/* Hero */}
      <section className="gal-hero">
        <span className="gal-kicker">PROJECT GALLERY</span>
        <h1 className="gal-title">Our Work Speaks for Itself</h1>
        <p className="gal-subtitle">
          Browse completed projects across Colorado. From luxury estates to commercial buildings, every project receives the same attention to detail.
        </p>
        <p className="gal-count">{GALLERY_IMAGES.length} Projects and Counting</p>
      </section>

      {/* Filter Bar */}
      <div className="gal-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`gal-filter-btn${activeCategory === cat ? " active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gal-grid-wrap">
        <p className="gal-result-count">
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        </p>

        {filtered.length === 0 ? (
          <div className="gal-empty">No projects found in this category.</div>
        ) : (
          <div className="gal-grid">
            {filtered.map((img, idx) => {
              const globalIdx = GALLERY_IMAGES.indexOf(img);
              return (
                <div
                  key={img.src}
                  className="gal-card"
                  onClick={() => openLightbox(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(idx); }}
                >
                  {!loaded.has(globalIdx) && <div className="gal-skeleton" style={{ paddingBottom: img.tall ? "120%" : "75%" }} />}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={img.tall ? 720 : 450}
                    quality={70}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      opacity: loaded.has(globalIdx) ? 1 : 0,
                      transition: "opacity 0.4s ease, transform 0.5s ease",
                    }}
                    onLoad={() => handleImageLoad(globalIdx)}
                  />
                  <div className="gal-card-zoom">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                  <div className="gal-card-info">
                    {img.location && <div className="gal-card-loc">{img.location}</div>}
                    <div className="gal-card-desc">{img.alt}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="gal-lightbox"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
        >
          <button className="gal-lb-close" onClick={closeLightbox} aria-label="Close lightbox">
            ✕
          </button>
          <button className="gal-lb-nav gal-lb-prev" onClick={() => navLightbox(-1)} aria-label="Previous photo">
            ‹
          </button>
          <button className="gal-lb-nav gal-lb-next" onClick={() => navLightbox(1)} aria-label="Next photo">
            ›
          </button>
          <div className="gal-lb-img-wrap">
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              width={1200}
              height={800}
              quality={90}
              priority
              style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
            <div className="gal-lb-caption">
              {filtered[lightboxIndex].location && (
                <div className="gal-lb-loc">{filtered[lightboxIndex].location}</div>
              )}
              <div className="gal-lb-desc">{filtered[lightboxIndex].alt}</div>
              <div className="gal-lb-counter">
                {lightboxIndex + 1} of {filtered.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <CTA />
      <Footer />
    </div>
  );
}

"use client";
import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import reviews from "../data/reviews.json";

const NAVY = "#0D2137";
const GOLD = "#D4A853";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";
const WHITE = "#FFFFFF";

const CHAR_LIMIT = 220;

const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={GOLD} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

function ReviewCard({ r, i }: { r: typeof reviews[0]; i: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = r.text.length > CHAR_LIMIT;
  const displayText = !isLong || expanded ? r.text : r.text.slice(0, CHAR_LIMIT).trimEnd() + "...";

  return (
    <div style={{
      background: WHITE,
      borderRadius: 16,
      padding: "28px 24px",
      border: "1px solid rgba(13,33,55,0.06)",
      boxShadow: "0 2px 12px rgba(13,33,55,0.05)",
      display: "flex",
      flexDirection: "column" as const,
      height: "100%",
      position: "relative",
    }}>
      {/* Google logo top right */}
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <GoogleG />
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
        {Array.from({ length: r.rating }).map((_, j) => (
          <StarIcon key={j} />
        ))}
      </div>

      {/* Review text */}
      <p style={{
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        fontSize: 15,
        lineHeight: 1.75,
        color: TEXT,
        margin: "0 0 20px",
        flex: 1,
      }}>
        &ldquo;{displayText}&rdquo;
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none",
              border: "none",
              color: "#2563EB",
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              padding: "0 0 0 4px",
              display: "inline",
            }}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>

      {/* Reviewer info */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
        <div style={{
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${NAVY}, #1a3a5c)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: WHITE,
          fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
          fontSize: 15,
          fontWeight: 700,
          flexShrink: 0,
        }}>
          {r.name[0]}
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: NAVY }}>{r.name}</div>
          {r.date && (
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 12, color: TEXT_LIGHT }}>{r.date}</div>
          )}
        </div>
      </div>

      {/* Source text */}
      <div style={{
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        fontSize: 11,
        color: TEXT_LIGHT,
        marginTop: 16,
        paddingTop: 12,
        borderTop: "1px solid rgba(13,33,55,0.06)",
      }}>
        Posted on Google
      </div>
    </div>
  );
}

export default function ReviewCarousel() {
  const onSwiper = useCallback((swiper: SwiperType) => {
    if (swiper.autoplay && !swiper.autoplay.running) {
      swiper.autoplay.start();
    }
  }, []);

  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        loopAdditionalSlides={2}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={600}
        navigation={true}
        pagination={{ clickable: true }}
        onSwiper={onSwiper}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="review-swiper"
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i} style={{ height: "auto" }}>
            <ReviewCard r={r} i={i} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .review-swiper {
          padding-bottom: 52px !important;
          overflow: visible !important;
        }
        .review-swiper .swiper-slide {
          height: auto !important;
        }
        .review-swiper .swiper-button-prev,
        .review-swiper .swiper-button-next {
          width: 40px;
          height: 40px;
          background: ${WHITE};
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(13,33,55,0.1);
          top: calc(50% - 26px);
        }
        .review-swiper .swiper-button-prev::after,
        .review-swiper .swiper-button-next::after {
          font-size: 16px;
          font-weight: 700;
          color: ${NAVY};
        }
        .review-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(13,33,55,0.2);
          opacity: 1;
        }
        .review-swiper .swiper-pagination-bullet-active {
          background: #2563EB;
          width: 24px;
          border-radius: 4px;
        }
        @media (max-width: 768px) {
          .review-swiper .swiper-button-prev,
          .review-swiper .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

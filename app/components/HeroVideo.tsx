"use client";
import { useRef, useState, useEffect } from "react";

const POSTER = "/videos/hero-poster.jpg";

const baseStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 30%",
  opacity: 0.55,
  zIndex: 0,
};

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Poster-only by default (also the SSR + mobile render). Only mount the video
  // on larger screens without Save-Data, so phones never download it.
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const smallScreen = window.matchMedia("(max-width: 768px)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!smallScreen && !conn?.saveData) setShowVideo(true);
  }, []);

  // Poster paints instantly (the LCP element); on mobile/Save-Data this is all that loads.
  if (!showVideo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={POSTER} alt="" aria-hidden="true" style={baseStyle} />;
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={POSTER}
      style={baseStyle}
    >
      <source src="/videos/gates-hero.mp4" type="video/mp4" />
    </video>
  );
}

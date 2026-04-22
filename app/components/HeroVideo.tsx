"use client";
import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onPlaying={() => setVideoReady(true)}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 30%",
        opacity: 0.55,
        zIndex: 0,
      }}
    >
      <source src="/videos/gates-hero.mp4" type="video/mp4" />
    </video>
  );
}

"use client";
import { useRef, useState } from "react";
import Image from "next/image";

const VIDEO_URL = "https://res.cloudinary.com/dyr5ihrer/video/upload/q_auto,f_mp4,w_1920,br_8000k/v1776889931/gatesroof_header_v4_hq.mp4";
const VIDEO_POSTER = "https://res.cloudinary.com/dyr5ihrer/video/upload/q_60,f_webp,w_1280,so_0/v1776889931/gatesroof_header_v4_hq.mp4";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <>
      {/* Next.js Image as poster — loads instantly with priority for fast LCP, fades out once video plays */}
      <Image
        src={VIDEO_POSTER}
        alt="Gates Enterprises roofing crew working on a residential roof in Colorado"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          opacity: videoReady ? 0 : 0.55,
          transition: "opacity 0.8s ease",
          zIndex: 1,
        }}
        quality={60}
      />
      {/* Video plays over the poster once loaded */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlaying={() => setVideoReady(true)}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", opacity: 0.55, zIndex: 0 }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
    </>
  );
}

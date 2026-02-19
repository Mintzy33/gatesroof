"use client";
import { useRef, useState } from "react";
import Image from "next/image";

const VIDEO_URL = "https://res.cloudinary.com/dyr5ihrer/video/upload/q_auto,f_mp4,w_1280,br_1500k/v1771207837/gatesroof.com_Header_on1ccl.mov";
const VIDEO_POSTER = "https://res.cloudinary.com/dyr5ihrer/video/upload/q_40,f_webp,w_800,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <>
      {/* Next.js Image as poster — loads instantly with priority for fast LCP, fades out once video plays */}
      <Image
        src={VIDEO_POSTER}
        alt=""
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          opacity: videoReady ? 0 : 0.55,
          transition: "opacity 0.8s ease",
          zIndex: 1,
        }}
        quality={40}
      />
      {/* Video plays over the poster once loaded */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onPlaying={() => setVideoReady(true)}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.55, zIndex: 0 }}
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>
    </>
  );
}

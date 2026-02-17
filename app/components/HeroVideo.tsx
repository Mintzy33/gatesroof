"use client";

const VIDEO_URL = "https://res.cloudinary.com/dyr5ihrer/video/upload/q_auto,f_mp4,w_1280,br_1500k/v1771207837/gatesroof.com_Header_on1ccl.mov";
const VIDEO_POSTER = "https://res.cloudinary.com/dyr5ihrer/video/upload/q_40,f_webp,w_800,so_0/v1771207837/gatesroof.com_Header_on1ccl.mov";

export default function HeroVideo() {
  return (
    <video autoPlay muted loop playsInline preload="none" poster={VIDEO_POSTER} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.55 }}>
      <source src={VIDEO_URL} type="video/mp4" />
    </video>
  );
}

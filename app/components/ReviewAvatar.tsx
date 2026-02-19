"use client";

const AVATAR_COLORS = [
  "#06263f",
  "#1e40af",
  "#0369a1",
  "#0e7490",
  "#047857",
  "#4338ca",
  "#7c3aed",
  "#b45309",
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string): string {
  const parts = name.replace(/[^a-zA-Z\s]/g, "").trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export function ReviewAvatar({
  name,
  size = 40,
  fontSize = 14,
}: {
  name: string;
  size?: number;
  fontSize?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: getAvatarColor(name),
        color: "#fff",
        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
        fontWeight: 600,
        fontSize,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {getInitials(name)}
    </div>
  );
}

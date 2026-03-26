import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refer a Neighbor, Earn $250 Cash | Gates Enterprises Referral Program",
  description: "Refer a friend or neighbor to Gates Enterprises and earn $250 cash when their roofing job is approved. No limit on referrals. Colorado's most certified roofer.",
  alternates: { canonical: "https://www.gatesroof.com/referral" },
  openGraph: {
    title: "Refer a Neighbor, Earn $250 Cash | Gates Enterprises Referral Program",
    description: "Refer a friend or neighbor to Gates Enterprises and earn $250 cash when their roofing job is approved. No limit on referrals. Colorado's most certified roofer.",
    url: "https://www.gatesroof.com/referral",
    siteName: "Gates Enterprises LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refer a Neighbor, Earn $250 Cash | Gates Enterprises Referral Program",
    description: "Refer a friend or neighbor to Gates Enterprises and earn $250 cash when their roofing job is approved. No limit on referrals.",
  },
};

export default function ReferralLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

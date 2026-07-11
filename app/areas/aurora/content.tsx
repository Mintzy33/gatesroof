"use client";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import ReviewCarousel from "../../components/ReviewCarousel";
import LocalSEOInfo from "../../components/LocalSEOInfo";
import FAQAccordion from "../../components/FAQAccordion";
import HailScoreCard from "../../components/HailScoreCard";
import CityGallery from "../../components/CityGallery";
import { getCityFAQItems } from "../../../lib/faq-data";
import { SITE_STATS } from "../../../lib/site-stats";

const NAVY = "#0D2137";
const ACCENT = "#2563EB";
const GOLD = "#D4A853";
const LIGHT_BG = "#FAFBFD";
const WHITE = "#FFFFFF";
const TEXT = "#2D3748";
const TEXT_LIGHT = "#64748B";

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={GOLD} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const HAIL_EVENTS = [
  {
    date: "June 21–22, 2023",
    size: "2.5–3.0 inches",
    desc: "A multi-day Front Range system hammered southeast Aurora — Saddle Rock, Southlands, and Tallyn's Reach took repeated cells with golf-ball hail. Radar recorded dense cell tracks across Arapahoe County. Many 2000s-era architectural roofs that looked \"fine from the street\" needed full replacement after granule loss and bruising showed up under inspection.",
  },
  {
    date: "August 8, 2023",
    size: "2.0 inches",
    desc: "Late-season hail cut a north–south band through central Aurora toward the Denver border. Fast-moving but dense stones dented gutters, vents, and AC fins across mid-century and 1990s stock near Buckley-adjacent neighborhoods. August storms catch homeowners who already \"wrote off\" hail season.",
  },
  {
    date: "May 30, 2024",
    size: "1.75 inches",
    desc: "Early peak-season event across east Aurora HOA corridors. 1.75-inch stones plus high winds stripped ridge caps and damaged starter courses on roofs that still had manufacturer life left on paper — age does not equal hail resistance.",
  },
  {
    date: "July 19, 2024",
    size: "2.0 inches",
    desc: "Slow-moving cells stalled over southern Aurora, increasing dwell time on Saddle Rock Golf Course communities and Southlands. Slow tracks produce disproportionate damage because each slope takes more impacts before the storm clears.",
  },
  {
    date: "June 2025 season (multiple tracks)",
    size: "1.5–2.0 inches",
    desc: "Repeated 2025 cells tracked across the plains into Aurora's southern and eastern edges. If you are in Saddle Rock, Murphy Creek, or Tallyn's Reach and have not had a post-2025 inspection, collateral signs (granules in gutters, dented vents) are worth a free professional look before the next spring cycle.",
  },
];

const NEIGHBORHOODS = [
  "Saddle Rock", "Saddle Rock Golf Club", "Southlands", "Tallyn's Reach",
  "Murphy Creek", "Blackstone", "Wheatlands", "Inspiration",
  "Serenity Ridge", "The Conservatory", "Park View", "Side Creek",
  "Highline Villages", "Del Mar Parkway", "Hoffman Heights", "Original Aurora",
  "Fitzsimons", "Stapleton-adjacent / Central Park border", "Aurora Highlands",
  "Dove Valley", "Seven Hills", "Hutchinson Heights", "Meadowood",
  "Dam East / West", "Tower Triangle", "City Center", "Iliff Commons",
];

const SERVICES = [
  {
    title: "Hail Damage Roof Replacement",
    desc: "Full system replacement after hail or wind. We tear off, inspect the deck, install ice-and-water shield at eaves and valleys, and install GAF, Owens Corning, Malarkey, or CertainTeed systems that meet Aurora HOA approved-material lists. Peak-season response is prioritized for Saddle Rock, Southlands, and east Aurora tracks.",
    href: "/services/storm-hail-damage",
  },
  {
    title: "Roof Repair",
    desc: "Targeted repairs when a full replacement is not justified — cracked shingles, failed valleys, ridge caps, pipe boots. We document the difference so you are not sold a roof you do not need.",
    href: "/services/roof-repair",
  },
  {
    title: "New Roof Installation",
    desc: "New construction and re-roofs coordinated with Arapahoe County (and Denver County edge cases near the border). We match builder specs and HOA color boards common in Tallyn's Reach and Southlands.",
    href: "/services/roof-replacement",
  },
  {
    title: "Siding Replacement and Repair",
    desc: "Aurora hail regularly bruises fiber cement and vinyl. We install James Hardie and LP SmartSide lines that appear on many Aurora HOA approved lists, and we document siding on the same claim as the roof when it is legitimate storm damage.",
    href: "/services/siding-exterior",
  },
  {
    title: "Gutter Installation and Replacement",
    desc: "Seamless aluminum gutters and guards. Gutter dents are frequent hail collateral in open-plains Aurora neighborhoods and are often part of the same insurance scope.",
    href: "/services/gutters-guards",
  },
  {
    title: "Window Replacement",
    desc: "Impact-damaged glass and screens are easy to miss on a drive-by. We replace common double-hung and casement profiles across Aurora's 1990s–2010s housing stock.",
    href: "/services/windows",
  },
  {
    title: "Insurance Claims Assistance",
    desc: "We inspect, photograph, meet the adjuster, and file Xactimate-based supplements when the initial scope is short. Aurora HOA paperwork is handled in parallel so approval does not delay a covered replacement.",
    href: "/services/insurance-claims",
  },
  {
    title: "Storm Damage Inspection and Documentation",
    desc: "Free post-storm inspections for Aurora homeowners. Full system walk: field, ridges, valleys, flashings, penetrations, gutters — with drone photos on steep or multi-story homes.",
    href: "/contact",
  },
];

const CERTIFICATIONS = [
  {
    name: "GAF Master Elite",
    desc: "Top 2% of GAF contractors nationally. Unlocks Golden Pledge–level warranty options with extended workmanship coverage — critical after repeated Aurora hail cycles.",
  },
  {
    name: "Owens Corning Preferred Contractor",
    desc: "Preferred status for professionalism and install quality. Gives Aurora homeowners access to enhanced Owens Corning warranty programs on Duration and Duration FLEX lines popular in HOAs.",
  },
  {
    name: "Malarkey Emerald Premium",
    desc: "Trained on Malarkey's polymer-modified (SBS) impact lines — strong cold-weather flex for Front Range freeze/thaw after summer hail.",
  },
  {
    name: "CertainTeed ShingleMaster",
    desc: "Master-level CertainTeed install credential. Common on Aurora HOA boards that specify CertainTeed colors and profiles.",
  },
];

const INTERNAL_LINKS = [
  { label: "Storm and Hail Damage Restoration", href: "/services/storm-hail-damage" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Roof Repair", href: "/services/roof-repair" },
  { label: "Insurance Claims", href: "/services/insurance-claims" },
  { label: "Siding", href: "/services/siding-exterior" },
  { label: "Gutters", href: "/services/gutters-guards" },
  { label: "Roofing Contractor Denver CO", href: "/areas/denver" },
  { label: "Roofing Contractor Centennial CO", href: "/areas/centennial" },
  { label: "Roofing Contractor Parker CO", href: "/areas/parker" },
  { label: "Roofing Contractor Littleton CO", href: "/areas/littleton" },
  { label: "Roofing Contractor Lakewood CO", href: "/areas/lakewood" },
  { label: "Best Roofer in Aurora", href: "/best-roofer-aurora" },
  { label: "What Does Hail Damage Look Like?", href: "/blog/what-does-hail-damage-look-like-on-roof" },
  { label: "Colorado Hail Season Guide", href: "/blog/colorado-hail-season-2026-homeowners-guide" },
  { label: "Hail Damage Insurance Claim Colorado", href: "/blog/hail-damage-insurance-claim-colorado" },
  { label: "Class 4 Impact Resistant Shingles", href: "/blog/class-4-impact-resistant-shingles-colorado" },
  { label: "About Gates Enterprises", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function CityContent() {
  const faqItems = getCityFAQItems("aurora");
  const reviews = SITE_STATS.reviewCount;
  const rating = SITE_STATS.starRating;
  const roofs = SITE_STATS.totalRoofs;

  return (
    <div style={{ background: WHITE }}>
      <Header />

      {/* HERO */}
      <section className="aurora-hero" style={{ padding: "160px 24px 80px", background: `linear-gradient(170deg, ${NAVY} 0%, #0F2A42 100%)`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.06) 0%, transparent 50%)" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Home → Service Areas → Aurora</Link>
          <h1 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, color: WHITE, margin: "20px 0 16px", lineHeight: 1.1 }}>
            Aurora, Colorado&apos;s Hail-Ready Roofing Contractor
          </h1>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 17, color: ACCENT, fontWeight: 500, marginBottom: 20 }}>
            Saddle Rock · Southlands · Tallyn&apos;s Reach · Quadruple Certified · {reviews} Google Reviews
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, marginBottom: 32, maxWidth: 700 }}>
            Aurora sits on open plains east of Denver where storms organize and unload large hail with little terrain shelter. Homeowners in Saddle Rock, Southlands, Tallyn&apos;s Reach, and Murphy Creek live that reality every spring and summer. Gates Enterprises has spent 10+ years on Arapahoe County roofs — HOA boards, permit offices, and adjuster meetings included — so you are not learning the process on a damaged house.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Roof Inspection in Aurora →
            </Link>
            <a href="tel:7207663377" style={{ background: "rgba(255,255,255,0.06)", color: WHITE, border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      <CityGallery city="Aurora" />

      {/* TRUST */}
      <section style={{ padding: "48px 24px", background: WHITE, borderBottom: "1px solid rgba(13,33,55,0.06)" }}>
        <div className="aurora-trust-grid" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32, textAlign: "center" }}>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY }}>{reviews}</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Google Reviews</div>
            <div style={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 4 }}>
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY }}>{rating}</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Star Rating</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY }}>{roofs}</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Completed Projects</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 800, color: NAVY }}>4x</div>
            <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT }}>Manufacturer Certified</div>
          </div>
        </div>
      </section>

      {/* WHY AURORA */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 40, lineHeight: 1.2 }}>
            Why Aurora Homeowners Choose Gates Enterprises
          </h2>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Built for Aurora&apos;s HOA Reality</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Large master-planned communities — Tallyn&apos;s Reach, Southlands, Saddle Rock, Murphy Creek — control material lists, colors, and install standards. We prepare HOA submittals with manufacturer specs and samples so architectural review does not stall a storm claim. That is a different skill set than a door-knocker with a truck and a ladder.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Quadruple Manufacturer Certified</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Gates holds <Link href="/blog/manufacturer-certified-roofer-colorado" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster</Link>. One of the only Front Range contractors with all four at the top tier — which means HOA-friendly product options and manufacturer warranty tiers most crews cannot offer.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{reviews} Google Reviews. {rating} Stars.</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Verified reviews from Aurora-area and Front Range homeowners. Clear communication, clean sites, no surprise invoices — the same standard whether the job is a ridge repair or a full Saddle Rock replacement.
            </p>
          </div>

          <div style={{ marginBottom: 36 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Insurance Claims Done Correctly</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              We document damage, meet adjusters on the roof, and file supplements when the first scope is short. On a covered claim your out-of-pocket is typically your deductible — we do not offer illegal deductible waivers under Colorado law.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Arapahoe County Permits and Inspections</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Most of Aurora sits in Arapahoe County with City of Aurora building requirements layered on top. We pull the right permit, schedule inspections, and keep the job code-compliant — including ice barrier and ventilation updates that older installs often miss.
            </p>
          </div>
        </div>
      </section>

      {/* HAIL HISTORY */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Aurora&apos;s Hail History — Why Your Roof Is at Risk
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 28 }}>
            Aurora is repeatedly cited among Colorado&apos;s most hail-active cities. Storms build on the eastern plains and track west or northwest across open neighborhoods with little natural shelter. Between 2019 and 2025, multiple 2.0-inch-plus events hit southern and eastern Aurora corridors — exactly where Saddle Rock, Southlands, and Tallyn&apos;s Reach sit.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
            {HAIL_EVENTS.map((event, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(13,33,55,0.06)" }}>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{event.date}</div>
                <div style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 8 }}>Max Hail Size: {event.size}</div>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.75, color: TEXT_LIGHT, margin: 0 }}>{event.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
            Get a Free Roof Inspection in Aurora →
          </Link>
        </div>
      </section>

      {/* NEIGHBORHOOD ROOF TYPES */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Common Roof Types Across Aurora Neighborhoods
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            Aurora&apos;s housing stock spans original mid-century core neighborhoods through 2010s master plans. Each era fails differently under hail.
          </p>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Saddle Rock and Saddle Rock Golf Club (1990s–2000s)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Large single-family homes with architectural shingles, complex multi-plane roofs, and active HOA control. Many original roofs are at or past expected life after multiple hail cycles. Searching for a <strong style={{ color: NAVY, fontWeight: 600 }}>roofer in Saddle Rock</strong>? You need a crew that can match HOA colors, handle steep and multi-valley installs, and document insurance claims without pressure tactics. That is standard Gates process — free inspection first, then a clear repair-vs-replace recommendation.
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Southlands and Tallyn&apos;s Reach (2000s–2010s HOAs)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Newer does not mean hail-proof. We regularly document functional damage on roofs under 15 years old after large-stone events. These communities typically require architectural approval before material or color changes — we submit manufacturer boards and photos of comparable installs so review does not delay a covered claim.
            </p>
          </div>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Murphy Creek, Wheatlands, Inspiration</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              East and southeast Aurora growth corridors with production architectural shingles and open exposure to plains storms. Ice-and-water shield at eaves, proper ventilation, and Class 4 impact options are frequent upgrade conversations when a full replacement is approved.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>Original Aurora, Hoffman Heights, Del Mar (Pre-1980s)</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Older ranch and tri-level stock near the Denver border. Decks, previous overlays, and mixed prior repairs are common. We inspect the full deck during tear-off decisions — surface cosmetics alone do not tell the story after decades of Front Range weather.
            </p>
          </div>
        </div>
      </section>

      {/* CODES / HOA */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 32, lineHeight: 1.2 }}>
            Aurora Building Codes, Permits, and HOA Requirements
          </h2>

          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>City of Aurora and Arapahoe County</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>
              Roofing permits are required for re-roofs inside city limits. We pull permits, schedule inspections, and build to current IRC-based requirements adopted locally — ice barrier, ventilation, and flashing details that matter when you sell. Work does not start without a permit on permitted jobs.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              Properties near the Denver border can sit in edge-case jurisdictions. We verify the correct office before paperwork goes in so you are not stuck between two building departments mid-job.
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>HOA Architectural Review</h3>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>
              Saddle Rock, Southlands, Tallyn&apos;s Reach, Murphy Creek, and similar communities almost always require approval for color or product changes. Typical packets: color sample, manufacturer cut sheet, and sometimes a photo of a completed comparable home. Review often runs 7–14 days — we start that clock early so insurance timelines still work.
            </p>
            <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT }}>
              We already know the product lines most Aurora HOAs pre-approve. That cuts back-and-forth and keeps Class 4 impact upgrades available where boards allow them.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Roofing and Exterior Services in Aurora, CO
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            Full roofing and exterior scope for Aurora homeowners — storm restoration, replacement, repair, siding, gutters, windows, and insurance support.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {SERVICES.map((s, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>{s.desc}</p>
                <Link href={s.href} style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
                  Learn more about {s.title.toLowerCase()} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Quadruple Manufacturer Certified for Aurora Homeowners
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 40 }}>
            Fewer than 2% of U.S. roofers hold a top-tier manufacturer credential. Gates holds four. For Aurora that means warranty access, HOA-compatible product lines, and install standards the manufacturers themselves audit.
          </p>
          <div className="aurora-certs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {CERTIFICATIONS.map((cert, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 16, padding: "28px 24px", border: `2px solid ${GOLD}20`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${GOLD}, ${GOLD}80)` }} />
                <h3 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{cert.name}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: TEXT_LIGHT, margin: 0 }}>{cert.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Roof Inspection in Aurora →
            </Link>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD LIST */}
      <section style={{ padding: "80px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            Aurora Neighborhoods We Serve
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 32 }}>
            From Saddle Rock to Original Aurora — same process, same documentation standard.
          </p>
          <div className="aurora-neighborhoods-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px 24px", marginBottom: 32 }}>
            {NEIGHBORHOODS.map((n, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT, lineHeight: 1.5 }}>{n}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 16 }}>
            Not listed? We still serve you. Nearby: <Link href="/areas/denver" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Denver</Link>, <Link href="/areas/centennial" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Centennial</Link>, <Link href="/areas/parker" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Parker</Link>, <Link href="/areas/littleton" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Littleton</Link>, and <Link href="/areas/highlands-ranch" style={{ color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Highlands Ranch</Link>.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/contact" style={{ display: "inline-block", background: ACCENT, color: WHITE, borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600 }}>
              Get a Free Roof Inspection in Aurora →
            </Link>
            <a href="tel:7207663377" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: NAVY, border: "1px solid rgba(13,33,55,0.15)", borderRadius: 100, padding: "16px 32px", textDecoration: "none", fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 500 }}>
              Call (720) 766-3377
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "80px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800, color: NAVY, marginBottom: 16, lineHeight: 1.2 }}>
            What Aurora-Area Homeowners Say About Gates
          </h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.85, color: TEXT_LIGHT, marginBottom: 8 }}>
            {reviews} Google reviews, {rating} stars — one of the strongest review profiles on the Front Range.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, color: NAVY, marginLeft: 8 }}>{rating} out of 5</span>
            <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, color: TEXT_LIGHT, marginLeft: 4 }}>({reviews} Reviews)</span>
          </div>
        </div>
        <ReviewCarousel />
        <div style={{ maxWidth: 800, margin: "32px auto 0" }}>
          <a href="https://www.google.com/maps/place/Gates+Enterprises+LLC" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: ACCENT, textDecoration: "none" }}>
            Read All {reviews} Reviews on Google →
          </a>
        </div>
      </section>

      <FAQAccordion
        items={faqItems}
        title="Frequently Asked Questions: Roofing in Aurora, CO"
      />

      <CTA
        title="Get a Free Roof Inspection in Aurora"
        subtitle={`Hail hit Saddle Rock, Southlands, or Tallyn's Reach? Gates Enterprises documents damage, works with your adjuster, and installs HOA-approved systems. ${roofs} projects, ${reviews} Google reviews, ${rating} stars. Call (720) 766-3377 or request your free inspection online.`}
      />

      <section style={{ padding: "64px 24px", background: LIGHT_BG }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: "0.2em" }}>OUR SERVICES</span>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, margin: "10px 0 12px" }}>Services in Aurora, CO</h2>
          <p style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: TEXT_LIGHT, marginBottom: 24, lineHeight: 1.7 }}>Gates Enterprises provides a full range of roofing and exterior services in Aurora.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { n: "Roof Replacement", s: "roof-replacement" },
              { n: "Storm & Hail Damage Repair", s: "storm-hail-damage" },
              { n: "Roof Repair", s: "roof-repair" },
              { n: "Siding Installation", s: "siding" },
              { n: "Gutter Installation", s: "gutters" },
              { n: "Roof Inspection", s: "roof-inspection" },
              { n: "Insurance Claims", s: "insurance-claims" },
              { n: "Metal Roofing", s: "metal-roofing" },
            ].map((svc) => (
              <Link key={svc.s} href={`/services/${svc.s}/aurora`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
                {svc.n}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 24px", background: WHITE }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 800, color: NAVY, marginBottom: 24, lineHeight: 1.2 }}>
            Explore More from Gates Enterprises
          </h2>
          <div className="aurora-internal-links" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 32px" }}>
            {INTERNAL_LINKS.map((link, i) => (
              <Link key={i} href={link.href} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif", fontSize: 15, color: ACCENT, textDecoration: "none", fontWeight: 500, padding: "8px 0" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HailScoreCard citySlug="aurora" cityName="Aurora" />
      <LocalSEOInfo citySlug="aurora" cityName="Aurora" showMapsLink />
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .aurora-hero { padding: 120px 20px 60px !important; }
          .aurora-trust-grid { grid-template-columns: 1fr 1fr !important; }
          .aurora-certs-grid { grid-template-columns: 1fr !important; }
          .aurora-neighborhoods-grid { grid-template-columns: 1fr 1fr !important; }
          .aurora-internal-links { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .aurora-hero { padding: 110px 16px 48px !important; }
          .aurora-neighborhoods-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

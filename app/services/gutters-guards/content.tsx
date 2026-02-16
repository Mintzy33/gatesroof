"use client";
import ServicePage from "../../components/ServicePage";
export default function GuttersContent() {
  return (
    <ServicePage
      breadcrumb="Gutters & Guards"
      h1="Gutter Installation in Denver and Lakewood, CO"
      subheadline="Seamless gutters, gutter guards, and downspout systems built to handle Colorado storms."
      heroCopy="Gutters are one of those things nobody thinks about until water is pouring over the side of their house and pooling against their foundation. Gates Enterprises installs seamless gutters and gutter guard systems across the Denver metro area. We size them right, pitch them right, and make sure water goes where it's supposed to go."
      sections={[
        {
          title: "Seamless Gutter Installation",
          content: [
            "Seamless gutters are custom fabricated on site to the exact length of each run. No seams means no weak points where leaks develop. We use heavy gauge aluminum (0.027\" or 0.032\") that holds up to Colorado's freeze-thaw cycles and hail.",
            "Standard 5-inch K-style gutters work for most homes. For larger roofs or steep pitches that channel a lot of water, we install 6-inch gutters with oversized 3x4 downspouts. Getting the sizing right matters more than most contractors admit. Undersized gutters overflow in heavy rain and defeat the entire purpose.",
            "We match gutter color to your trim or fascia for a clean, finished look. Over 25 color options available."
          ]
        },
        {
          title: "Gutter Guards and Leaf Protection",
          content: [
            "Cleaning gutters twice a year is nobody's idea of a good time. Gutter guards keep leaves, pine needles, and debris out while letting water flow through. We install micro-mesh and surface tension systems that work with your specific gutter size and roof type.",
            "No gutter guard is 100% maintenance free despite what some companies claim. But a quality guard system reduces cleaning from twice a year to once every few years. That's a meaningful difference, especially for two story homes or homes surrounded by mature trees."
          ]
        },
        {
          title: "Downspouts and Drainage",
          content: [
            "Gutters collect water. Downspouts and drainage move it away from your foundation. We install downspouts at proper intervals, extend them at least 4 feet from the foundation, and connect underground drainage lines when needed.",
            "Foundation damage from poor drainage is one of the most expensive repairs a homeowner can face. We've seen crawl spaces and basements flood because downspouts were dumping water right next to the foundation wall. Proper gutter and downspout installation prevents these problems before they start."
          ]
        },
        {
          title: "Gutter Repair and Replacement",
          content: [
            "Sagging gutters, leaking seams, rusted sections, or gutters pulling away from the fascia. We fix all of it. Sometimes a repair is all you need. Sometimes your 30 year old gutters need to go. We'll give you an honest recommendation and a fair price either way.",
            "If your gutters were damaged in a storm, that repair or replacement may be covered by your insurance claim. We include gutter damage in every storm damage assessment we perform."
          ]
        }
      ]}
      process={[
        { step: "01", title: "Inspection and Measurement", desc: "We assess your current gutters (if any), check fascia board condition, and measure every run." },
        { step: "02", title: "Recommendation", desc: "We tell you what size, style, and accessories (guards, extensions, drainage) make sense for your home." },
        { step: "03", title: "On-Site Fabrication", desc: "We bring our gutter machine to your home and fabricate seamless gutters on the spot. Cut to exact length." },
        { step: "04", title: "Installation", desc: "Gutters are hung with hidden hangers spaced every 24 inches for maximum strength. Downspouts placed for optimal drainage." },
        { step: "05", title: "Water Test", desc: "We run water through the system and verify proper flow before we leave." },
      ]}
      whyGates={[
        { bold: "Custom fabricated on site.", rest: "Seamless gutters cut to exact length. No pre-made sections, no unnecessary joints." },
        { bold: "Proper sizing.", rest: "We calculate water volume based on your roof area and pitch. No guessing." },
        { bold: "Full exterior integration.", rest: "We install gutters alongside roof and siding projects for a seamless finish and single point of accountability." },
        { bold: "Storm damage coverage.", rest: "Damaged gutters are included in your insurance claim when applicable." },
      ]}
      faqs={[
        { q: "How much do seamless gutters cost in Denver?", a: "Seamless aluminum gutters typically cost $6 to $12 per linear foot installed, depending on gauge, size, and accessibility. An average home with 150 to 200 linear feet runs $1,200 to $2,400 for gutters alone. Guards add $3 to $8 per foot." },
        { q: "How often should gutters be cleaned?", a: "Without guards, twice a year minimum. Spring and fall. With guards installed, every 2 to 3 years is usually sufficient. Homes with heavy tree coverage may need more frequent attention." },
        { q: "Can gutters be installed in winter?", a: "Yes. We install gutters year round. Aluminum is easy to work with in cold weather, and there's no sealant or adhesive that needs warm temperatures to cure." },
        { q: "What color options are available?", a: "Over 25 standard colors to match virtually any home exterior. We bring a color chart so you can match your trim, fascia, or siding." },
        { q: "Are damaged gutters covered by insurance?", a: "If the damage was caused by hail or wind, yes. We include gutter damage in storm damage claims and document it for your insurance company." },
      ]}
      ctaTitle="Need new gutters or gutter guards?"
      ctaSubtitle="Call Gates Enterprises at (720) 766-3377. We'll measure your home, recommend the right system, and install it right. Free estimates for all gutter projects."
    />
  );
}

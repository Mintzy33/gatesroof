"use client";
import ServicePage from "../../components/ServicePage";
export default function RepairContent() {
  return (
    <ServicePage
      breadcrumb="Roof Repair"
      h1="Roof Repair in Denver and Lakewood, CO"
      subheadline="Fast response. Honest diagnosis. Repairs that last."
      heroCopy="Not every roof problem needs a full replacement. Sometimes it's a cracked pipe boot, a blown off cap shingle, or flashing that's pulled away from a wall. Gates Enterprises handles roof repairs across Denver and Lakewood with the same care and precision we bring to full replacements. We find the real problem, fix it right, and tell you honestly how much life your roof has left."
      images={[
        { src: "/images/services/roof-inspection-colorado-gates-enterprises.webp", alt: "Professional roof inspection and repair by Gates Enterprises in Colorado", width: 1600, height: 1200 },
        { src: "/images/services/residential-roof-replacement-colorado.webp", alt: "Residential roof repair in progress by Gates Enterprises in Colorado", width: 1600, height: 1200 },
        { src: "/images/services/roof-replacement-berthoud-colorado.webp", alt: "Roof repair and restoration project in Berthoud, Colorado by Gates Enterprises", width: 1600, height: 1200 },
      ]}
      sections={[
        {
          title: "Common Roof Repairs We Handle Every Week",
          content: [
            "Most roof leaks come from a handful of problem areas. Pipe boot failures are number one. That rubber gasket around your plumbing vents dries out and cracks after about 10 years, and water runs right down the pipe into your ceiling. We replace these with high quality boots that last the life of your roof.",
            "Other common repairs include missing or damaged shingles, failed flashing around chimneys and walls, clogged or damaged valleys, and vent replacements. We also repair damage caused by fallen tree limbs, animal intrusion, and improper previous repairs."
          ]
        },
        {
          title: "Emergency Roof Repair and Tarping",
          content: [
            "When a storm blows through and leaves your roof exposed, you can't wait a week for a contractor to show up. We offer emergency tarping to stop water intrusion immediately. Our team can typically get a tarp in place within 24 hours of your call, and in many cases the same day.",
            "Emergency tarping is often covered by your homeowner's insurance as a temporary repair. We document everything so you can get reimbursed."
          ]
        },
        {
          title: "Roof Leak Repair in Colorado",
          content: [
            "Roof leak repair in Colorado comes with some unique challenges. Ice dams in winter, thermal expansion in summer, and UV exposure at altitude all take a toll. A leak that shows up inside your home might originate 10 feet away on the roof. Water travels along rafters, decking, and even electrical lines before it drops into your living space.",
            "We trace every leak to its source. No guesswork, no \"let's try this and see.\" We find it, fix it, and verify it's sealed before we leave."
          ]
        },
        {
          title: "When Repair Makes Sense (and When It Doesn't)",
          content: [
            "We'll always give you an honest assessment. If your roof is 20 years old and leaking in multiple places, a $500 repair might buy you a year, but a replacement would be the smarter investment. On the other hand, if you have a 5 year old roof with one failed pipe boot, that's a $250 fix that takes an hour.",
            "We'll show you photos, explain the issue, and give you options. No pressure to replace when a repair will do the job."
          ]
        }
      ]}
      process={[
        { step: "01", title: "Call or Book Online", desc: "Tell us what's happening. Leak location, when it started, anything you've noticed." },
        { step: "02", title: "Inspection", desc: "We get on the roof and trace the problem. Interior inspection too, if needed." },
        { step: "03", title: "Diagnosis and Estimate", desc: "We show you exactly what's wrong and what it costs to fix. No hidden fees." },
        { step: "04", title: "Repair", desc: "Most repairs are completed the same day as the inspection." },
        { step: "05", title: "Verification", desc: "We water test the area (when possible) and confirm the repair is solid." },
      ]}
      whyGates={[
        { bold: "Honest assessments.", rest: "We won't sell you a replacement when a $300 repair solves the problem." },
        { bold: "Fast response.", rest: "Emergency tarping available within 24 hours. Most repairs completed same day." },
        { bold: "Manufacturer certified crews.", rest: "The same skilled installers who do our full replacements handle our repairs." },
        { bold: "Transparent pricing.", rest: "You get a written estimate before any work begins. Period." },
      ]}
      answerCapsule="Minor roof repairs in Colorado typically cost $300 to $1,500. Common issues include missing shingles, flashing leaks, and storm damage. Gates Enterprises offers free inspections to determine if repair or replacement is the right option."
      faqs={[
        { q: "How much does a roof repair cost in Colorado?", a: "Minor roof repairs in Colorado typically cost $300 to $1,500. Simple repairs like pipe boot replacements or a few missing shingles run $200 to $600. More complex repairs involving flashing, valleys, or multiple areas can range from $500 to $2,000. We provide an exact price before any work begins." },
        { q: "How do I know if my roof needs repair or full replacement?", a: "If your roof is less than 15 years old and the damage is isolated to a specific area, repair is usually the right call. If your roof is approaching 20+ years, has widespread damage, or shows signs of systemic failure like curling shingles, granule loss, or multiple leak points, replacement is the better investment. Gates Enterprises gives honest assessments. We never push replacements on roofs that still have useful life." },
        { q: "What are the most common roof repairs in Colorado?", a: "The most common repairs we see include pipe boot seal failures (the rubber boots around plumbing vents crack after 10 to 15 years), flashing leaks around chimneys and skylights, wind-lifted shingles, and minor hail damage. Clogged gutters causing water backup under shingles is another frequent issue. Most of these repairs are straightforward and cost a fraction of a full replacement." },
        { q: "Can you repair my roof temporarily until I can afford a replacement?", a: "Yes. We can make targeted repairs to stop active leaks and buy you time. We'll be upfront about how long the repair should hold and what a replacement would cost when you're ready. Emergency tarping is also available for active leaks that need immediate attention." },
        { q: "Do you repair flat roofs?", a: "Yes. We handle both pitched and flat roof repairs, including TPO, EPDM, and modified bitumen systems. Whether it's a residential low-slope section or a full flat roof, we'll get it sorted." },
        { q: "Is a roof leak covered by insurance?", a: "It depends on the cause. Storm damage from hail, wind, or fallen debris is typically covered by your homeowners insurance. Normal wear and tear or deferred maintenance is not. We can inspect your roof and help you determine whether the damage is claim-worthy and if it makes sense to file." },
        { q: "How quickly can you respond to an emergency roof repair?", a: "Storm response is our top priority. Emergency tarping to stop active leaks can often be done same-day or next-day. Our team carries common repair materials on our trucks to minimize return trips. Call (720) 766-3377 for emergency service." },
        { q: "Can a roof repair fix a leak permanently?", a: "Yes, when the repair addresses the actual source of the leak. Many leaks originate from a single failure point like a cracked pipe boot or lifted flashing. We trace every leak to its source using on-roof inspection, not guesswork. A properly executed repair at the source is a permanent fix." },
        { q: "Do I need a full roof inspection for a small repair?", a: "We recommend it. A small visible problem sometimes indicates a larger underlying issue. During every repair visit, we do a quick visual assessment of the surrounding area to make sure nothing else needs attention. If we find additional issues, we document them and let you decide how to proceed. There is no pressure." },
        { q: "What should I do if I notice a roof leak?", a: "First, place a bucket or container under the drip to catch water. Move any valuables away from the area. Do not go on the roof yourself. Call Gates Enterprises at (720) 766-3377 and describe the location and severity. Take photos if you can safely do so. We will schedule an inspection and repair as quickly as possible." },
      ]}
      serviceAreasSlug="roof-repair"
      serviceAreasLabel="Roof Repair"
      ctaTitle="Got a roof leak?"
      ctaSubtitle="Call Gates Enterprises at (720) 766-3377. We'll get on your roof fast, find the problem, and fix it right. Emergency service available."
    />
  );
}

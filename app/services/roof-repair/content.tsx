"use client";
import ServicePage from "../../components/ServicePage";
export default function RepairContent() {
  return (
    <ServicePage
      breadcrumb="Roof Repair"
      h1="Roof Repair in Denver and Lakewood, CO"
      subheadline="Fast response. Honest diagnosis. Repairs that last."
      heroCopy="Not every roof problem needs a full replacement. Sometimes it's a cracked pipe boot, a blown-off cap shingle, or flashing that's pulled away from a wall. Gates Enterprises handles roof repairs across Denver and Lakewood with the same care and precision we bring to full replacements. We find the real problem, fix it right, and tell you honestly how much life your roof has left."
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
      faqs={[
        { q: "How much does a roof repair cost in Denver?", a: "Simple repairs like pipe boot replacements or a few missing shingles typically run $200 to $600. More complex repairs involving flashing, valleys, or multiple areas can range from $500 to $2,000. We'll give you an exact price before we start." },
        { q: "Can you repair my roof temporarily until I can afford a replacement?", a: "Yes. We can make targeted repairs to stop active leaks and buy you time. We'll be upfront about how long the repair should hold and what a replacement would cost when you're ready." },
        { q: "Do you repair flat roofs?", a: "We primarily work on residential pitched roofs. For flat or low slope commercial roofs, we can refer you to a trusted specialist." },
        { q: "Is a roof leak covered by insurance?", a: "It depends on the cause. Storm damage is typically covered. Wear and tear or deferred maintenance is not. We can inspect and help you determine whether a claim makes sense." },
        { q: "How do I know if I need a repair or a full replacement?", a: "Age, extent of damage, and condition of the surrounding shingles all factor in. If your roof is under 15 years old and the damage is isolated, repair is usually the right call. We'll give you an honest recommendation either way." },
      ]}
      ctaTitle="Got a roof leak?"
      ctaSubtitle="Call Gates Enterprises at (720) 766-3377. We'll get on your roof fast, find the problem, and fix it right. Emergency service available."
    />
  );
}

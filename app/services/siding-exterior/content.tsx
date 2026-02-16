"use client";
import ServicePage from "../../components/ServicePage";
export default function SidingContent() {
  return (
    <ServicePage
      breadcrumb="Siding & Exterior"
      h1="Siding Installation in Denver and Lakewood, CO"
      subheadline="Protect your home's exterior with siding that stands up to Colorado weather."
      heroCopy="Your siding does more than look good. It's your home's first line of defense against hail, wind, UV exposure, and temperature swings that can hit 60 degrees in a single day. Gates Enterprises installs and repairs siding across the Denver metro area using products built to handle everything Colorado throws at them."
      sections={[
        {
          title: "James Hardie Fiber Cement Siding",
          content: [
            "James Hardie is the gold standard for siding in Colorado, and for good reason. Fiber cement stands up to hail better than vinyl, doesn't rot like wood, and handles our extreme temperature swings without warping or cracking. It's non-combustible, which matters in a state with increasing wildfire risk.",
            "We install the full James Hardie product line, including HardiePlank lap siding, HardieShingle, and HardiePanel vertical siding. Every product comes with James Hardie's 30 year substrate warranty and 15 year finish warranty when installed by a certified contractor.",
            "The ColorPlus finish technology means your color is baked on in the factory, not painted in your driveway. It resists fading and chipping far longer than field-applied paint."
          ]
        },
        {
          title: "Vinyl and Wood Siding Options",
          content: [
            "Not every home needs fiber cement. Vinyl siding has come a long way and offers a solid combination of durability, low maintenance, and affordability. We install premium vinyl products that resist fading and stand up to moderate hail.",
            "For homeowners who love the look of natural wood, we install cedar and engineered wood siding. Cedar is beautiful but requires regular maintenance. Engineered wood products like LP SmartSide offer the look of real wood with better resistance to moisture and insects. We'll help you weigh the pros and cons so you make the right choice for your home and lifestyle."
          ]
        },
        {
          title: "Exterior Painting",
          content: [
            "Sometimes your siding is in good shape but the paint is peeling, fading, or just outdated. We offer exterior painting services that prep surfaces properly, use high quality exterior paints rated for Colorado's UV exposure, and deliver a finish that lasts.",
            "Proper prep is everything. We scrape, sand, prime bare spots, caulk gaps, and apply two coats. Skipping prep is how you end up repainting in three years instead of eight."
          ]
        },
        {
          title: "Storm Damage Siding Repair and Insurance Claims",
          content: [
            "Hail doesn't just hit your roof. Siding takes damage too, and it's often covered by your homeowner's insurance. We inspect your siding for hail hits, document the damage, and include it in your insurance claim alongside any roof damage. Many homeowners don't realize they can get their siding replaced through the same storm damage claim."
          ]
        }
      ]}
      process={[
        { step: "01", title: "Free Exterior Inspection", desc: "We assess your current siding condition, check for moisture intrusion, and document any storm damage." },
        { step: "02", title: "Material Consultation", desc: "We bring samples, discuss options, and help you choose the right product for your budget and goals." },
        { step: "03", title: "Detailed Proposal", desc: "Written scope of work with material specs, labor, and timeline. Everything spelled out." },
        { step: "04", title: "Installation", desc: "Professional removal of old siding, inspection of housewrap and sheathing, and expert installation of your new siding." },
        { step: "05", title: "Final Walkthrough", desc: "We inspect every detail together and make sure you're completely satisfied." },
      ]}
      whyGates={[
        { bold: "Full exterior contractor.", rest: "Roof, siding, gutters, paint. One crew, one point of contact, one company responsible for everything." },
        { bold: "Insurance claim integration.", rest: "If hail damaged your siding, we include it in your storm damage claim. Many homeowners miss this." },
        { bold: "10+ years in the Denver market.", rest: "We know which products perform best in our climate." },
        { bold: "Locally owned, community focused.", rest: "We live in Lakewood. Your neighborhood is our neighborhood." },
      ]}
      faqs={[
        { q: "How much does James Hardie siding cost in Denver?", a: "James Hardie fiber cement siding typically runs $8 to $14 per square foot installed, depending on the product and complexity of your home. A full re-side for an average home ranges from $15,000 to $35,000. We provide exact pricing in your proposal." },
        { q: "Is siding damage covered by insurance?", a: "If the damage is caused by hail or wind, yes. We document siding damage and include it in your storm claim. It's often approved alongside roof replacement." },
        { q: "How long does a siding installation take?", a: "Most full re-sides take 1 to 2 weeks depending on home size and product selection. Partial repairs are usually completed in 1 to 3 days." },
        { q: "What's the best siding for Colorado hail?", a: "James Hardie fiber cement is the most hail resistant option for residential siding. It resists cracking and denting far better than vinyl. For areas with extreme hail exposure, it's our top recommendation." },
        { q: "Do you handle the permit process?", a: "Yes. If your municipality requires a permit for siding installation, we handle the application and inspections." },
      ]}
      ctaTitle="Ready to upgrade your home's exterior?"
      ctaSubtitle="Call Gates Enterprises at (720) 766-3377 or email info@gatesroof.com. We'll assess your current siding, show you your options, and give you a straightforward proposal."
    />
  );
}

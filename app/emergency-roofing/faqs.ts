// FAQs for /emergency-roofing.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// page.tsx previously hand-maintained a second, abbreviated copy inside its
// JSON-LD; the wording here is the copy that was visible on the page.
export const FAQS: { q: string; a: string }[] = [
  {
    q: "How quickly can Gates Enterprises respond to a roofing emergency?",
    a: "We prioritize emergency calls and aim to have a crew on site as fast as possible. With over 100 team members across Colorado's Front Range, we have the capacity to respond rapidly after storms and other urgent situations. Call (720) 766-3377 any time.",
  },
  {
    q: "What qualifies as an emergency roof repair?",
    a: "An emergency roof repair is needed when your home is actively taking on water, a tree or debris has punctured or collapsed part of the roof, storm damage has exposed the decking or underlayment, or structural damage makes the home unsafe. If you are unsure, call us and we will help you assess the situation.",
  },
  {
    q: "Does insurance cover emergency roof repairs?",
    a: "Whether emergency repairs are covered depends on your policy and the cause of damage. When a sudden event like a storm, fallen tree, or hail is covered, policies often include temporary protective measures like tarping as well as permanent repairs, subject to your deductible. We document everything and coordinate documentation with your insurance company to support your claim.",
  },
  {
    q: "What happens during an emergency roof tarping?",
    a: "Our crew secures heavy-duty tarps over the damaged area to stop water intrusion immediately. We anchor the tarps to prevent wind uplift and ensure your home is protected until permanent repairs can be completed. Tarping is a temporary measure designed to prevent further interior damage while the full scope of work is assessed.",
  },
  {
    q: "Should I wait until the storm passes to call for emergency roof repair?",
    a: "Call as soon as it is safe to do so. The sooner we know about the damage, the sooner we can schedule a response. Waiting allows water to cause secondary damage to insulation, drywall, and electrical systems, which can significantly increase repair costs.",
  },
];

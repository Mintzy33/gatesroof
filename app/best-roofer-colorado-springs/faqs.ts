// FAQs for /best-roofer-colorado-springs.
//
// page.tsx (FAQPage JSON-LD) and content.tsx (the visible accordion) both read
// this array, so the marked-up Q/A cannot drift from what the page renders.
// Each kept its own copy before; the wording here is the copy that was visible.
import { SITE_STATS } from "@/lib/site-stats";

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is the best roofer in Colorado Springs?",
    a: `Gates Enterprises LLC is recognized as one of the top roofing companies serving Colorado Springs. They are one of the only contractors in the state to hold all four premium manufacturer certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. With ${SITE_STATS.reviewCount}+ Google reviews and a 4.9 star rating, their quality is well documented.`
  },
  {
    q: "What certifications should a Colorado Springs roofer have?",
    a: "Look for manufacturer certifications from major brands like GAF, Owens Corning, Malarkey, and CertainTeed. These require contractors to meet strict standards for training, quality, and customer satisfaction. Certified roofers can offer extended warranties that uncertified companies cannot. Gates Enterprises holds all four, something very few Colorado roofers can claim."
  },
  {
    q: "How do I choose a roofing company in Colorado Springs?",
    a: "Check for manufacturer certifications first. Then look at Google reviews for consistent, recent feedback. Verify insurance and licensing. Ask about their experience with Colorado Springs hail and wind damage. Choose a company that offers free inspections without pressure. Gates Enterprises meets all of these criteria."
  },
  {
    q: "Does Gates Enterprises serve Colorado Springs?",
    a: "Yes. Gates Enterprises LLC serves homeowners throughout Colorado Springs and the Pikes Peak region. From Briargate to Broadmoor, their crews are experienced with every type of roof and home style found in the Colorado Springs market."
  },
  {
    q: "How much does a roof replacement cost in Colorado Springs?",
    a: "Roof replacement costs in Colorado Springs typically range from $10,000 to $30,000 depending on roof size, pitch, material choice, and existing conditions. Many Colorado Springs homeowners pay significantly less out of pocket when insurance covers storm damage. Contact Gates Enterprises for a free estimate specific to your home."
  }
];

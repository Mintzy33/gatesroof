export interface Review {
  name: string;
  city: string;
  text: string;
  rating: number;
}

export const reviews: Review[] = [
  // ─── ROW 1 (index 0–9) ───
  { name: "Christian D.", city: "Lakewood", text: "Matt is fantastic! His crew did a great job. Matt was able to get me a new roof from our DENY happy insurance company and got it approved after having a third party inspection.", rating: 5 },
  { name: "Patience L.", city: "Lakewood", text: "Austin and Giovanny were so polite and thorough in their breakdown and execution of service! Definitely recommend.", rating: 5 },
  { name: "Frank S.", city: "Lakewood", text: "Great services and the guy was very helpful with all knowledge he got. I am impressed.", rating: 5 },
  { name: "Sara W.", city: "Lakewood", text: "Clancey was great to work with. We needed some repairs after the job was complete and he has people at our house next day. I recommend working with this company!", rating: 5 },
  { name: "CourtneyLynne", city: "Colorado", text: "Phil Ross managed the project and made everything seamless and stress free. Communication was clear and consistent, the work was done quickly, and the quality exceeded our expectations.", rating: 5 },
  { name: "Vickie K.", city: "Lakewood", text: "Clancey Comisky, our project manager, was fantastic to work with. He was there every step of the process from the beginning with the insurance adjuster to the end.", rating: 5 },
  { name: "Jeff R.", city: "Colorado", text: "Our home was wiped out from the siding to the roof. Gates stepped in and took on the whole project. Matt handled our project very well and as a true professional.", rating: 5 },
  { name: "Paul H.", city: "Lakewood", text: "They handled the insurance part and made it very pleasant for me. The new roof and gutters look outstanding!", rating: 5 },
  { name: "Kandee C.", city: "Colorado", text: "Brandon Bailey, the project manager, was exceptional. He was always easy to reach, happy to answer questions, and kept us updated on what was happening each day.", rating: 5 },
  { name: "SarsaD", city: "Colorado", text: "Jameson and the whole team worked hard to argue for a full replacement. We haven\u2019t found a single nail or other remnant from the replacement!", rating: 5 },

  // ─── ROW 2 (index 10–19) ───
  { name: "Lil T.", city: "Colorado", text: "Brandon did all upfront work with insurance company and kept me updated thru the whole process. His team was very professional and did quality work.", rating: 5 },
  { name: "Marissa W.", city: "Colorado", text: "I called on a Monday, and by Thursday they already had a crew on my roof. Dylan was fantastic, responsive, helpful, and super knowledgeable.", rating: 5 },
  { name: "Debbie B.", city: "Colorado", text: "Clancy was the best. Very helpful and willing to work on getting our job done right. He was there checking on the progress of the roofing and the painting.", rating: 5 },
  { name: "Aaron A.", city: "Colorado", text: "Marcus Montoya treats your home like it\u2019s his own. He was professional, attentive, and on top of every detail from start to finish.", rating: 5 },
  { name: "Tatiana Z.", city: "Thornton", text: "I had a positive experience working with this company. They did my parent\u2019s house in Thornton, it was an easy experience!", rating: 5 },
  { name: "Samantha M.", city: "Colorado", text: "This was our first time replacing a roof, and they made the entire process easy and stress free. Brandon Bailey was fantastic.", rating: 5 },
  { name: "Vince S.", city: "Colorado", text: "Did a much better job than the builder 7 years ago. On the roof at 7 and done at 1 with no shiners! Good to have hired a company that still has pride.", rating: 5 },
  { name: "James W.", city: "Colorado", text: "The roofers arrived at 6:40 am and completed the project by 7:00 pm. They were very professional, organized and quite skilled.", rating: 5 },
  { name: "Sarah F.", city: "Colorado", text: "Brandon the project manager was upfront and honest. The teams they used for the roof, gutters and paint went above and beyond.", rating: 5 },
  { name: "Ron W.", city: "Colorado", text: "These guys deserve more than 5 stars. I\u2019m an Architect and Gates, particularly Demetri, are just outstanding. They removed and installed 40+ squares in ONE day.", rating: 5 },

  // ─── ROW 3 (index 20–29) ───
  { name: "Jon C.", city: "Colorado", text: "I had my roof replaced by Gates five years ago. I reach out to Drew and he was on it! Great service and professionalism!", rating: 5 },
  { name: "Whitney A.", city: "Colorado", text: "Hunter was an exceptional project manager. He helped us work with our insurance and even jumped through the HOA hoops for us.", rating: 5 },
  { name: "Harry O.", city: "Denver", text: "Gates was by far the best quote and Matt was very helpful every step along the way. I will recommend Gates to all my family and friends.", rating: 5 },
  { name: "Rozanet H.", city: "Colorado", text: "Professional, reliable, and efficient. Zack was wonderful at handling our project and made the whole process easy and stress free.", rating: 5 },
  { name: "Jamie R.", city: "Colorado", text: "Giovanny was very responsive and easy to work with. They handled the insurance process seamlessly and completed the job on time. Our new roof looks amazing.", rating: 5 },
  { name: "Vickie K.", city: "Lakewood", text: "Gates Roofing Company did an amazing job replacing the roof on our house. They were all professional and very courteous. A true 5 star experience!", rating: 5 },
  { name: "SarsaD", city: "Colorado", text: "We are so glad that we went with Gates and not one of the other companies! We are convinced that Gates is the reason we have a brand new beautiful roof!", rating: 5 },
  { name: "Kandee C.", city: "Colorado", text: "The work quality, professionalism, and Brandon\u2019s hands on management made this project a success. This was a five star experience for us.", rating: 5 },
  { name: "Samantha M.", city: "Colorado", text: "We highly recommend Gates Enterprises if you\u2019re looking for quality work and outstanding support!", rating: 5 },
  { name: "Aaron A.", city: "Colorado", text: "Marcus kept us updated at every step, checked in constantly, and made sure we felt taken care of throughout the entire process.", rating: 5 },
];

/* Subset for homepage carousel (8 reviews spread across the full set) */
export const homepageReviews = [
  reviews[0],  // Christian D.
  reviews[4],  // CourtneyLynne
  reviews[11], // Marissa W.
  reviews[19], // Ron W.
  reviews[22], // Harry O.
  reviews[23], // Rozanet H.
  reviews[24], // Jamie R.
  reviews[6],  // Jeff R.
];

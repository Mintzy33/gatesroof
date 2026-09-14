// Unique FAQ generator for city and service×city pages
// Every city+service combination produces a different set of FAQ items

import type { CityData, ServiceData } from "./service-areas-data";
import { getCityBySlug, getServiceBySlug } from "./service-areas-data";
import { SITE_STATS } from "./site-stats";

export interface FAQItem {
  question: string;
  answer: string;
}

// ---------------------------------------------------------------------------
// City-specific data for generating unique answers
// ---------------------------------------------------------------------------

interface CityProfile {
  priceMultiplier: number; // 1.0 = average, 1.2 = expensive market
  elevation: string;
  hailNote: string;
  weatherNote: string;
  bestSeason: string;
  materialRec: string;
  localFlavor: string;
  neighborhoodAge: string;
}

function getCityProfile(city: CityData): CityProfile {
  const isMetro = ["Denver", "Aurora", "Lakewood", "Arvada", "Westminster", "Thornton", "Broomfield", "Northglenn", "Federal Heights", "Commerce City", "Wheat Ridge", "Edgewater", "Englewood", "Sheridan", "Mountain View"].includes(city.city);
  const isSouthMetro = ["Centennial", "Highlands Ranch", "Parker", "Castle Rock", "Castle Pines", "Lone Tree", "Greenwood Village", "Cherry Hills Village", "Littleton", "Columbine", "Ken Caryl"].includes(city.city);
  const isMountain = city.hailRisk === "low";
  const isNorthern = ["Fort Collins", "Loveland", "Windsor", "Greeley", "Evans", "Longmont", "Erie", "Johnstown", "Firestone", "Frederick", "Dacono", "Lochbuie"].includes(city.city);
  const isPalmerDivide = ["Castle Rock", "Parker", "Monument", "Palmer Lake", "Elizabeth", "Franktown", "Sedalia"].includes(city.city);
  const isUpscale = ["Cherry Hills Village", "Greenwood Village", "Castle Pines", "Lone Tree", "Superior", "Ken Caryl"].includes(city.city);

  let priceMultiplier = 1.0;
  if (isUpscale) priceMultiplier = 1.3;
  else if (isSouthMetro) priceMultiplier = 1.15;
  else if (isMountain) priceMultiplier = 1.2;
  else if (isNorthern) priceMultiplier = 0.95;
  else if (isMetro) priceMultiplier = 1.05;

  let elevation = "5,280 feet";
  if (isMountain) {
    if (city.city === "Conifer") elevation = "8,200 feet";
    else if (city.city === "Evergreen") elevation = "7,200 feet";
    else if (city.city === "Idaho Springs") elevation = "7,500 feet";
    else if (city.city === "Georgetown") elevation = "8,500 feet";
    else if (city.city === "Bailey") elevation = "7,700 feet";
    else if (city.city === "Nederland") elevation = "8,200 feet";
    else elevation = "7,000+ feet";
  } else if (isPalmerDivide) {
    if (city.city === "Castle Rock") elevation = "6,200 feet";
    else if (city.city === "Monument") elevation = "6,900 feet";
    else if (city.city === "Palmer Lake") elevation = "7,200 feet";
    else if (city.city === "Elizabeth") elevation = "6,500 feet";
    else elevation = "6,000+ feet";
  } else if (city.city === "Boulder") elevation = "5,430 feet";
  else if (city.city === "Fort Collins") elevation = "5,000 feet";
  else if (city.city === "Golden") elevation = "5,675 feet";
  else if (city.city === "Pueblo") elevation = "4,690 feet";
  else if (city.city === "Colorado Springs") elevation = "6,035 feet";
  else if (city.city === "Manitou Springs") elevation = "6,320 feet";

  let hailNote = "";
  if (city.hailRisk === "high") {
    if (isPalmerDivide) hailNote = `${city.city} sits along the Palmer Divide, one of the most hail-active zones in the entire country. Orographic lifting along the Divide generates severe supercell thunderstorms that regularly produce golf ball and larger hailstones.`;
    else if (isNorthern) hailNote = `Northern Colorado's open plains and the Cheyenne Ridge convergence zone make ${city.city} a frequent target for large hail events. Several storms in recent years have caused widespread roof damage across the area.`;
    else hailNote = `${city.city} is located in Colorado's hail corridor, where conditions regularly produce damaging hailstorms from May through August. Homeowners here should expect at least one significant hail event every few years.`;
  } else if (city.hailRisk === "moderate") {
    hailNote = `${city.city} experiences moderate hail exposure. While not in the most intense zone, storms that develop along the foothills or track across the metro can still produce damaging hail in the 1 to 2 inch range.`;
  } else {
    hailNote = `${city.city}'s mountain location means hail is less frequent, but when it does hit, the combination of hail, strong winds, and rapid temperature changes can cause significant damage. Mountain storms are often more intense than they appear.`;
  }

  let weatherNote = "";
  if (isMountain) weatherNote = `At ${elevation}, ${city.city} homes face heavy snow loads, extreme UV radiation, ice dam formation, and temperature swings of 50+ degrees in a single day. These conditions accelerate roof aging significantly compared to Front Range homes.`;
  else if (isPalmerDivide) weatherNote = `${city.city}'s elevated position on the Palmer Divide means more intense UV exposure, bigger temperature swings, and higher winds than the Denver metro floor. Roofs here age faster and take more punishment from severe weather.`;
  else if (city.city === "Boulder") weatherNote = "Boulder's unique Chinook wind events can gust over 100 mph, tearing shingles and flashing off roofs. Combined with regular hail exposure and intense high-altitude UV, Boulder roofs need materials designed for extreme conditions.";
  else if (city.city === "Pueblo") weatherNote = "Pueblo's hot summers and southern Colorado sun create intense UV degradation on roofing materials. Combined with occasional severe thunderstorms from the Wet Mountains, roofs here face a different set of challenges than northern Front Range homes.";
  else weatherNote = `Colorado's Front Range weather puts ${city.city} roofs through extreme cycles: intense summer UV, hail events, rapid freeze-thaw in winter, and high winds that can exceed 60 mph during downslope events.`;

  let bestSeason = "";
  if (isMountain) bestSeason = "Late spring through early fall (May through September) is the ideal window for roofing work in the mountains. Winter weather at elevation makes roofing difficult and adhesive sealants need warmer temperatures to bond properly.";
  else bestSeason = "Spring (March through May) and fall (September through November) are the best times for roofing in Colorado. Summer works well too, though afternoon storms can interrupt work schedules. Winter installations are possible but require special cold-weather techniques.";

  let materialRec = "";
  if (city.hailRisk === "high") materialRec = `For ${city.city} homes, we strongly recommend Class 4 impact-resistant shingles. These withstand hail impacts that destroy standard shingles, and most Colorado insurance companies offer 20-30% premium discounts for Class 4 roofs. Popular choices include GAF Armor Shield II, Owens Corning Duration FLEX, and Malarkey Highlander NEX.`;
  else if (isMountain) materialRec = `Mountain homes in ${city.city} benefit from materials designed for extreme conditions. Standing seam metal roofing is excellent for shedding snow and resisting wind. For shingle roofs, we recommend heavy-weight architectural shingles with enhanced wind ratings and algae resistance.`;
  else materialRec = `${city.city} homeowners have great options across all four manufacturers we carry. Architectural shingles from GAF, Owens Corning, Malarkey, or CertainTeed all perform well here. For maximum protection, consider upgrading to Class 4 impact-resistant shingles, especially if you want the insurance premium discount.`;

  let localFlavor = "";
  if (city.neighborhoods && city.neighborhoods.length > 0) {
    localFlavor = `We serve all ${city.city} neighborhoods, including ${city.neighborhoods.slice(0, 3).join(", ")}, and surrounding areas throughout ${city.county} County.`;
  } else {
    localFlavor = `Gates Enterprises proudly serves homeowners throughout ${city.city} and the greater ${city.county} County area.`;
  }

  let neighborhoodAge = "";
  if (["Arvada", "Wheat Ridge", "Englewood", "Edgewater", "Sheridan", "Federal Heights", "Northglenn"].includes(city.city)) {
    neighborhoodAge = `Many ${city.city} homes were built in the 1950s through 1970s, which means a significant number of roofs in the area are original or past their expected lifespan. Older homes often have unique framing and ventilation configurations that require experienced assessment.`;
  } else if (["Firestone", "Frederick", "Dacono", "Lochbuie", "Henderson", "Erie", "Johnstown"].includes(city.city)) {
    neighborhoodAge = `${city.city} has seen rapid new construction over the past decade. While newer roofs shouldn't need replacement yet, Colorado hail can damage even brand-new shingles. Many newer homes also benefit from gutter guard installation and proactive maintenance plans.`;
  } else {
    neighborhoodAge = `${city.city} has a mix of established homes and newer construction, each with different roofing needs. Older homes may need full system replacement, while newer homes may need storm damage assessment or gutter installation.`;
  }

  return { priceMultiplier, elevation, hailNote, weatherNote, bestSeason, materialRec, localFlavor, neighborhoodAge };
}

// ---------------------------------------------------------------------------
// Deterministic "random" selection based on string hash
// ---------------------------------------------------------------------------

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

function pickItems<T>(items: T[], seed: string, count: number): T[] {
  const hash = hashString(seed);
  const result: T[] = [];
  const available = [...items];
  let h = hash;
  for (let i = 0; i < count && available.length > 0; i++) {
    const idx = h % available.length;
    result.push(available[idx]);
    available.splice(idx, 1);
    h = hashString(seed + String(i) + String(h));
  }
  return result;
}

// ---------------------------------------------------------------------------
// FAQ generators for SERVICE x CITY pages
// ---------------------------------------------------------------------------

function getServiceCityFAQs(city: CityData, service: ServiceData): FAQItem[] {
  const profile = getCityProfile(city);
  const seed = `${city.slug}-${service.slug}`;

  // Build a pool of possible FAQ items specific to this city+service combo
  const pool: FAQItem[] = [];

  // Cost questions (service-specific)
  const baseCosts: Record<string, [number, number]> = {
    "roof-replacement": [10000, 28000],
    "storm-hail-damage": [8000, 25000],
    "roof-repair": [350, 3500],
    "siding": [12000, 35000],
    "gutters": [1200, 3500],
    "roof-inspection": [0, 0],
    "insurance-claims": [0, 0],
    "metal-roofing": [22000, 55000],
  };

  const [baseLow, baseHigh] = baseCosts[service.slug] || [5000, 20000];
  if (baseLow > 0) {
    const low = Math.round(baseLow * profile.priceMultiplier / 100) * 100;
    const high = Math.round(baseHigh * profile.priceMultiplier / 100) * 100;
    pool.push({
      question: `How much does ${service.service.toLowerCase()} cost in ${city.city}, Colorado?`,
      answer: `${service.service} costs in ${city.city} typically range from $${low.toLocaleString()} to $${high.toLocaleString()} for most residential projects. The final price depends on your roof's size, pitch, material selection, and any underlying deck repairs needed. ${city.hailRisk === "high" ? "If your roof was damaged by a hail event, your homeowners insurance typically covers the cost minus your deductible." : "For storm-damaged roofs, insurance often covers most or all of the replacement cost."} Call us at (720) 766-3377 for a free estimate specific to your ${city.city} home.`,
    });
  }

  // Timeline questions
  const timelines: Record<string, string> = {
    "roof-replacement": `Most roof replacements in ${city.city} are completed in one to two days for standard residential homes. Larger or more complex roofs, particularly those with steep pitches or multiple valleys, may take two to three days. ${profile.elevation.includes("7") || profile.elevation.includes("8") ? "Mountain access and weather windows can also affect scheduling at this elevation." : `We coordinate scheduling around ${city.city}'s weather patterns to minimize delays.`}`,
    "storm-hail-damage": `The full storm damage restoration process in ${city.city} typically takes four to eight weeks from initial inspection to project completion. The timeline depends primarily on your insurance company's response time. The actual roof work itself is usually completed in one to two days once approved. Gates Enterprises manages the entire process so you don't have to chase your insurance company.`,
    "roof-repair": `Most roof repairs in ${city.city} are completed in a single visit, typically taking two to six hours depending on the scope. Emergency tarping for active leaks can often be done same-day or next-day. We carry common repair materials on our trucks to minimize return trips.`,
    "siding": `A full siding installation on a ${city.city} home typically takes one to two weeks, depending on the home's size and complexity. Partial repairs and small sections are usually completed in one to two days. We work to minimize disruption to your daily routine throughout the project.`,
    "gutters": `Gutter installation in ${city.city} is typically completed in a single day. Our crews fabricate seamless gutters on-site from continuous aluminum coils, then install them with proper brackets and downspout routing. The entire process from measurement to completion usually takes four to six hours.`,
    "roof-inspection": `A professional roof inspection in ${city.city} takes approximately 45 to 60 minutes. We inspect the roof surface, flashing, vents, and gutters from on top of the roof, then check the attic when accessible. You receive a written report with photos within 24 hours of the inspection.`,
    "insurance-claims": `The insurance claim process for ${city.city} homeowners typically runs four to eight weeks from filing to completed restoration. The largest variable is your insurance company's adjuster scheduling. Gates Enterprises handles all documentation, adjuster meetings, and supplements to keep the process moving as efficiently as possible.`,
    "metal-roofing": `Metal roofing installation in ${city.city} takes three to five days for most residential homes. The longer timeline compared to asphalt shingles is due to custom panel fabrication and the precision required for standing seam installations. Every panel, flashing, and transition detail must be exact for proper performance.`,
  };

  pool.push({
    question: `How long does ${service.service.toLowerCase()} take in ${city.city}?`,
    answer: timelines[service.slug] || `Project timelines in ${city.city} vary based on scope and complexity. Contact us at (720) 766-3377 for a specific timeline estimate for your project.`,
  });

  // Insurance questions
  if (["roof-replacement", "storm-hail-damage", "siding", "gutters", "insurance-claims"].includes(service.slug)) {
    const insuranceAnswers: Record<string, string> = {
      "storm-hail-damage": `Whether hail or wind damage is covered depends on your specific policy and dwelling coverage. ${city.hailRisk === "high" ? `Given ${city.city}'s high hail frequency, insurers see frequent storm claims from this area.` : `Filing promptly after a storm matters — most policies have a one-year filing window.`} Gates Enterprises documents all damage with photos and measurements in the format adjusters require and works with your carrier throughout the claim.`,
      "roof-replacement": `Insurance may cover roof replacement when the damage was caused by a covered event like hail, wind, or fallen debris — coverage depends on your policy and the adjuster's assessment. ${city.hailRisk === "high" ? `In ${city.city}'s hail corridor, many roofs carry documented storm damage.` : `Many ${city.city} homeowners are surprised to learn their roof has storm damage worth a professional inspection.`} Damage from normal wear or age is generally not covered. A free inspection from Gates Enterprises will assess whether your damage is claim-worthy.`,
      "siding": `If your siding was damaged by hail, wind, or another covered event, it may be eligible under your homeowners policy, subject to your coverage and deductible. In ${city.city}, we include siding in every storm damage inspection because hail frequently damages siding alongside roofing — often a single claim covers both.`,
      "gutters": `Gutters damaged by hail, falling branches, or storm debris may be eligible under your homeowners policy, depending on your coverage. In ${city.city}, gutter damage is commonly documented alongside roof and siding from the same storm. Gates Enterprises documents all gutter damage as part of our comprehensive exterior inspection.`,
      "insurance-claims": `Homeowners policies commonly cover sudden damage from perils like hail, wind, and fallen trees — what's covered depends on your policy and the cause of damage. In ${city.city}, the most common claims involve hail damage to roofing, siding, and gutters. Gates Enterprises manages the documentation process, from initial inspection through final supplement, and works with your adjuster throughout.`,
    };
    pool.push({
      question: `Does homeowners insurance cover ${service.service.toLowerCase()} in ${city.city}?`,
      answer: insuranceAnswers[service.slug] || `Insurance coverage depends on the cause of damage. Storm-related damage is typically covered. Call us at (720) 766-3377 for a free assessment.`,
    });
  }

  // Weather/climate questions
  pool.push({
    question: `How does Colorado weather affect roofs in ${city.city}?`,
    answer: profile.weatherNote + " Regular inspections help catch weather-related damage early, before small issues become expensive problems. Gates Enterprises recommends annual inspections for all " + city.city + " homes.",
  });

  pool.push({
    question: `When is the best time to schedule ${service.service.toLowerCase()} in ${city.city}?`,
    answer: profile.bestSeason + ` That said, we perform ${service.service.toLowerCase()} year-round in ${city.city}. If you have storm damage or an active leak, don't wait for the "perfect" season. Call (720) 766-3377 and we'll get your project scheduled.`,
  });

  // Material questions (for relevant services)
  if (["roof-replacement", "storm-hail-damage", "metal-roofing", "roof-repair"].includes(service.slug)) {
    pool.push({
      question: `What is the best roofing material for homes in ${city.city}?`,
      answer: profile.materialRec + " As a quadruple manufacturer-certified contractor, Gates Enterprises can install and warranty products from GAF, Owens Corning, Malarkey, and CertainTeed, giving you the widest selection of any roofer serving " + city.city + ".",
    });
  }

  // Certification question
  pool.push({
    question: `Why choose a certified roofer in ${city.city}?`,
    answer: `Manufacturer certifications matter because they determine your warranty options. An uncertified contractor installing GAF shingles in ${city.city} can only offer a basic manufacturer warranty. Gates Enterprises, as a GAF Master Elite contractor, can offer the Golden Pledge warranty with 25 years of workmanship coverage. We hold four certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. Fewer than 2% of roofers nationwide hold even one of these credentials.`,
  });

  // Local service question
  pool.push({
    question: `Does Gates Enterprises serve ${city.city}, Colorado?`,
    answer: `Yes. Gates Enterprises serves ${city.city} and all of ${city.county} County from our Lakewood headquarters. ${profile.localFlavor} With over 7,200 completed projects across the Front Range and a 4.9-star rating from ${SITE_STATS.reviewCount} Google reviews, we bring the same certified quality to every ${city.city} project. Call (720) 766-3377 to schedule your free inspection.`,
  });

  // Hail-specific question
  if (city.hailRisk === "high" || city.hailRisk === "moderate") {
    pool.push({
      question: `How do I know if my ${city.city} roof has hail damage?`,
      answer: `${profile.hailNote} Signs you might have damage include dented gutters or downspouts, chipped paint on window frames, and damaged outdoor furniture or AC units. However, most roof hail damage is invisible from the ground. The only reliable way to know is a professional inspection from on top of the roof. Gates Enterprises provides free hail damage inspections for ${city.city} homeowners with no obligation.`,
    });
  }

  // Mountain-specific question
  if (city.hailRisk === "low") {
    pool.push({
      question: `What makes mountain roofing different in ${city.city}?`,
      answer: `Roofing at ${profile.elevation} in ${city.city} presents challenges that flatland roofers may not understand. Heavy snow accumulation stresses the structure, ice dams form at eaves and in valleys, UV radiation is 20-30% more intense at altitude, and temperature swings can exceed 50 degrees in a single day. Pine needle accumulation also traps moisture against roofing materials. Gates Enterprises has extensive mountain roofing experience and selects materials specifically suited for these conditions.`,
    });
  }

  // Neighborhood age question
  pool.push({
    question: `How old are most roofs in ${city.city}?`,
    answer: profile.neighborhoodAge + ` Regardless of your roof's age, a professional inspection gives you a clear picture of its current condition and remaining lifespan. Gates Enterprises provides honest assessments. If your roof has years of life left, we'll tell you.`,
  });

  // Service-specific unique questions
  const serviceSpecific: Record<string, FAQItem[]> = {
    "roof-replacement": [
      {
        question: `Can I choose my shingle color for a roof replacement in ${city.city}?`,
        answer: `Absolutely. With four manufacturer certifications, Gates Enterprises offers ${city.city} homeowners the widest color and style selection available. GAF, Owens Corning, Malarkey, and CertainTeed each offer dozens of color options in their architectural shingle lines. We bring samples to your home so you can see how different colors look against your siding, trim, and landscaping. ${city.city} HOA requirements, if applicable, are something we can help you navigate during color selection.`,
      },
      {
        question: `Do I need to replace my entire roof or can you do a partial replacement in ${city.city}?`,
        answer: `In most cases, we recommend a full replacement when the roof has reached end of life. Partial replacements can create mismatched aging, color differences, and warranty complications. However, if only one section of your ${city.city} roof is damaged and the rest is in good condition, a targeted repair or partial replacement may make sense. We assess every roof individually and give you an honest recommendation.`,
      },
    ],
    "storm-hail-damage": [
      {
        question: `Should I get my ${city.city} roof inspected after every storm?`,
        answer: `Not every storm requires an inspection, but any storm producing hail of 1 inch or larger, or sustained winds above 60 mph, warrants a professional look. ${city.hailRisk === "high" ? `In ${city.city}'s high-hail zone, we recommend calling us after any notable storm event.` : `If you hear hail hitting your windows or see damage to cars, plants, or outdoor items, that's a good indicator your roof may have been hit too.`} Remember, most hail damage is not visible from the ground. Our inspections are free with no obligation.`,
      },
      {
        question: `What happens if I wait too long to file a hail damage claim in ${city.city}?`,
        answer: `Most Colorado homeowners insurance policies give you one year from the date of the storm to file a claim. After that window closes, you may lose your right to coverage entirely. Additionally, unrepaired hail damage allows moisture intrusion that causes secondary damage your insurance may not cover. If your ${city.city} home was in a storm's path within the past year, call (720) 766-3377 for a free inspection before your filing window expires.`,
      },
    ],
    "roof-repair": [
      {
        question: `What are the most common roof repairs in ${city.city}?`,
        answer: `The most common repairs we see in ${city.city} include pipe boot seal failures (the rubber boots around plumbing vents crack after 10-15 years), flashing leaks around chimneys and skylights, wind-lifted shingles, and minor hail damage. ${profile.elevation.includes("7") || profile.elevation.includes("8") ? "At elevation, ice dam damage and snow-related issues are also common." : "Clogged gutters causing water backup under shingles is another frequent issue."} Most of these repairs are straightforward and cost a fraction of a full replacement.`,
      },
      {
        question: `How do I know if my ${city.city} roof needs repair or full replacement?`,
        answer: `As a general rule, if your roof is less than 15 years old and the damage is isolated to a specific area, repair is usually the right call. If your roof is approaching 20+ years, has widespread damage, or shows signs of systemic failure (curling shingles, granule loss, multiple leak points), replacement is the better investment. Gates Enterprises inspects every ${city.city} roof with fresh eyes and gives you an honest assessment. We never push replacements on roofs that still have useful life.`,
      },
    ],
    "siding": [
      {
        question: `What type of siding is best for ${city.city} homes?`,
        answer: `James Hardie fiber cement siding is our top recommendation for ${city.city}. It handles Colorado's UV radiation, temperature extremes, and hail better than vinyl or wood. It carries a Class A fire rating, which is increasingly important in Colorado. It also holds paint well at altitude where UV degradation is more intense. For ${city.city} homeowners who prefer a different look, we also install premium vinyl and wood siding options.`,
      },
      {
        question: `Can siding and roof replacement be done at the same time in ${city.city}?`,
        answer: `Yes, and we recommend it when both need attention. Coordinating roof and siding work on your ${city.city} home saves time, reduces disruption, and often reduces total cost because scaffolding and crew mobilization happen once instead of twice. If both were damaged by the same storm, a single insurance claim typically covers everything.`,
      },
    ],
    "gutters": [
      {
        question: `Do I need gutter guards in ${city.city}?`,
        answer: `If you have trees near your ${city.city} home, gutter guards are a smart investment. ${city.hailRisk === "low" ? "Mountain homes are especially prone to pine needle and debris buildup that clogs gutters and creates ice dams in winter." : "Clogged gutters cause ice dams during Colorado winters and overflow during summer storms, both of which can damage your home's fascia, siding, and foundation."} We offer micro-mesh gutter guard systems that keep debris out while handling Colorado's heavy downpours.`,
      },
      {
        question: `What size gutters does my ${city.city} home need?`,
        answer: `Most ${city.city} homes use 5-inch seamless gutters with 2x3-inch downspouts. Homes with steep roof pitches, large roof areas, or multiple stories may need 6-inch gutters with 3x4-inch downspouts to handle the volume of water during heavy Colorado thunderstorms. We calculate the correct size based on your specific roof area, pitch, and local rainfall intensity. Oversized gutters are always better than undersized ones.`,
      },
    ],
    "roof-inspection": [
      {
        question: `What does a roof inspection in ${city.city} include?`,
        answer: `Our ${city.city} roof inspections cover the entire roofing system: shingle condition and granule loss, flashing integrity around chimneys, vents, and skylights, pipe boot seals, ridge cap condition, gutter attachment and condition, soffit and fascia, and attic ventilation when accessible. Every finding is photographed and documented. You receive a written report with our honest assessment and recommendation.`,
      },
      {
        question: `I'm buying a home in ${city.city}. Should I get a separate roof inspection?`,
        answer: `We strongly recommend it. A general home inspector checks the roof briefly from the ground or edge. A certified roofing contractor inspects every component from on top of the roof, where most damage is actually visible. In ${city.city}'s ${city.hailRisk === "high" ? "high-hail environment, many homes have undocumented storm damage that could cost thousands to address" : "climate, catching hidden issues before closing can save you significant unexpected expenses"}. The cost of a specialized inspection is minimal compared to the potential savings.`,
      },
    ],
    "insurance-claims": [
      {
        question: `Can I choose my own contractor for an insurance claim in ${city.city}?`,
        answer: `Yes. Colorado law gives you the right to choose your own contractor regardless of what your insurance company suggests. Insurance company "preferred vendor" programs exist to benefit the insurer, not the homeowner. Gates Enterprises works for you, not for the insurance company. We document all damage thoroughly, meet adjusters on-site, and put the full scope of work your ${city.city} home needs in front of them in writing.`,
      },
      {
        question: `What if my insurance adjuster misses damage on my ${city.city} roof?`,
        answer: `This happens more often than you might expect. Adjusters handle dozens of claims per week and may rush through inspections, especially after major storm events in ${city.city}. Gates Enterprises meets your adjuster on-site to walk the roof together and point out every item of damage. If the initial approval still falls short, we prepare detailed supplements with additional documentation. That documentation is what gives your insurer a basis to reconsider.`,
      },
    ],
    "metal-roofing": [
      {
        question: `Is metal roofing a good investment for ${city.city} homes?`,
        answer: `Metal roofing makes strong financial sense for ${city.city} homeowners, especially those planning to stay long-term. ${city.hailRisk === "high" ? `In ${city.city}'s hail corridor, you might replace an asphalt roof two or three times over the 50+ year lifespan of a single metal roof. When you factor in the avoided replacement costs, metal often costs less over time.` : `A metal roof lasts 50+ years compared to 15-25 years for asphalt shingles. At ${city.city}'s elevation, where UV degradation accelerates shingle aging, the longevity advantage is even more significant.`} Metal also adds to your home's resale value.`,
      },
      {
        question: `Will a metal roof look out of place in my ${city.city} neighborhood?`,
        answer: `Modern metal roofing comes in a wide range of profiles, colors, and styles. Standing seam panels offer a clean, contemporary look. Metal shingles can mimic the appearance of traditional asphalt, slate, or wood shake. We help ${city.city} homeowners select profiles and colors that complement their home's architecture and neighborhood aesthetic. Metal roofing has become increasingly common and accepted in Colorado neighborhoods.`,
      },
    ],
  };

  if (serviceSpecific[service.slug]) {
    pool.push(...serviceSpecific[service.slug]);
  }

  // Pick 7 items deterministically based on city+service hash
  return pickItems(pool, seed, 7);
}

// ---------------------------------------------------------------------------
// FAQ generators for CITY-ONLY pages (area pages)
// ---------------------------------------------------------------------------

// Per-city cost narratives. The dollar range stays formula-derived (see
// priceMultiplier) so a city page can never drift from its siblings; only the
// surrounding explanation is city-specific. Numbers quoted here must be
// verifiable — the Aurora hail counts come from NOAA's Storm Events Database
// (bulk CSVs at ncei.noaa.gov, Arapahoe County, CZ_TYPE=C, pulled 2026-09-14).
const CITY_COST_NARRATIVE: Record<string, (low: string, high: string) => string> = {
  aurora: (low, high) =>
    `Residential roof replacement in Aurora typically ranges from $${low} to $${high}, reflecting the city's spread across Arapahoe, Adams, and Douglas County permit zones and its position in Colorado's primary hail corridor. NOAA's Storm Events Database records 115 hail events in Arapahoe County between 2019 and 2024, 38 of them producing hailstones of 1.5 inches or larger. When a covered storm event causes the damage, your homeowners insurance typically covers the cost minus your deductible. Gates Enterprises provides free storm damage inspections across Aurora \u2014 from Southlands and Saddle Rock in the east to Murphy Creek and Del Mar Parkway \u2014 and has completed projects across Aurora's major neighborhoods. Call (720) 766-3377 for a free estimate.`,
};

function getCityOnlyFAQs(city: CityData): FAQItem[] {
  const profile = getCityProfile(city);
  const seed = `city-only-${city.slug}`;

  const pool: FAQItem[] = [];

  // General roofing cost
  const baseLow = Math.round(10000 * profile.priceMultiplier / 100) * 100;
  const baseHigh = Math.round(28000 * profile.priceMultiplier / 100) * 100;
  const costLow = baseLow.toLocaleString();
  const costHigh = baseHigh.toLocaleString();
  pool.push({
    question: `How much does a new roof cost in ${city.city}, Colorado?`,
    answer: CITY_COST_NARRATIVE[city.slug]
      ? CITY_COST_NARRATIVE[city.slug](costLow, costHigh)
      : `Residential roof replacement in ${city.city} typically ranges from $${baseLow.toLocaleString()} to $${baseHigh.toLocaleString()}, depending on roof size, pitch, material choice, and deck condition. ${city.hailRisk === "high" || city.hailRisk === "moderate" ? "If your roof was damaged by hail or wind, your homeowners insurance typically covers the cost minus your deductible." : "For storm-damaged roofs, insurance may cover some or all of the cost."} Gates Enterprises provides free, no-obligation estimates for ${city.city} homeowners. Call (720) 766-3377 to schedule yours.`,
  });

  // Hail frequency
  pool.push({
    question: `How often does ${city.city} get hail?`,
    answer: profile.hailNote + ` Colorado's hail season runs from April through September, with peak activity in May, June, and July. Even a single significant hail event can compromise your roof's integrity in ways that aren't visible from the ground.`,
  });

  // Best roofer question
  pool.push({
    question: `Who is the best roofing contractor in ${city.city}?`,
    answer: `Gates Enterprises is one of the only quadruple manufacturer-certified roofing contractors serving ${city.city}. We hold GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster certifications. With ${SITE_STATS.reviewCount} Google reviews and a 4.9-star rating, our track record speaks for itself. These certifications give ${city.city} homeowners access to the highest warranty tiers available from all four major shingle manufacturers.`,
  });

  // Weather impact
  pool.push({
    question: `How does Colorado weather affect roofs in ${city.city}?`,
    answer: profile.weatherNote + " An annual professional inspection is the best way to catch weather-related damage early and extend the life of your roofing system.",
  });

  // Insurance question
  pool.push({
    question: `Does insurance cover roof damage in ${city.city}?`,
    answer: `Whether roof damage from hail, wind, fallen trees, or other sudden events is covered depends on your specific policy and the cause of damage. ${city.hailRisk === "high" ? `In ${city.city}'s high-hail area, insurers see frequent storm-damage claims.` : `Many ${city.city} homeowners have storm damage they don't know about.`} Gates Enterprises provides free storm damage inspections and works with your adjuster through the claims process. Normal wear and aging are generally not covered.`,
  });

  // Material recommendation
  pool.push({
    question: `What is the best roofing material for ${city.city} homes?`,
    answer: profile.materialRec + " Gates Enterprises carries products from all four major manufacturers, so you're never limited to one brand or product line.",
  });

  // Inspection frequency
  pool.push({
    question: `How often should I have my ${city.city} roof inspected?`,
    answer: `We recommend annual professional inspections for all ${city.city} homes, plus an inspection after any significant hail or wind event. ${city.hailRisk === "high" ? "Given the high hail frequency in your area, you may need inspections more often." : city.hailRisk === "low" ? "Mountain homes should also be checked after heavy snow events and at the end of winter to catch ice dam damage." : "Colorado's unpredictable weather means damage can happen at any time."} Catching a small issue early can save thousands in avoided repairs. Storm damage inspections from Gates Enterprises are always free.`,
  });

  // Service area confirmation
  pool.push({
    question: `Does Gates Enterprises serve all of ${city.city}?`,
    answer: `Yes. ${profile.localFlavor} We are based in Lakewood and serve the entire Colorado Front Range, from Fort Collins to Pueblo. With over 7,200 completed projects and ${SITE_STATS.reviewCount} Google reviews at 4.9 stars, ${city.city} homeowners can trust that they're getting the same certified quality we bring to every project. Call (720) 766-3377 to schedule a free inspection.`,
  });

  // Best time question
  pool.push({
    question: `When is the best time to replace a roof in ${city.city}?`,
    answer: profile.bestSeason + ` However, if you have active damage or a leak, don't wait for ideal weather. We handle emergency repairs and urgent replacements year-round in ${city.city}.`,
  });

  // Certification question
  pool.push({
    question: `What do roofing certifications mean for ${city.city} homeowners?`,
    answer: `Manufacturer certifications determine your warranty options and ensure proper installation. An uncertified roofer using GAF shingles can only offer a basic warranty. Gates Enterprises, as a GAF Master Elite contractor, can offer the Golden Pledge warranty with 25 years of workmanship coverage. We hold four premium certifications: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. This gives ${city.city} homeowners more material choices and better warranties than any other local contractor.`,
  });

  // Pick 7 unique ones
  const picked = pickItems(pool, seed, 7);

  // A city only gets a CITY_COST_NARRATIVE because that cost answer is the
  // page's quotable one, so pickItems() must not be allowed to drop it —
  // Aurora's slug hash did exactly that, silently.
  if (CITY_COST_NARRATIVE[city.slug]) {
    const costQuestion = `How much does a new roof cost in ${city.city}, Colorado?`;
    if (!picked.some((f) => f.question === costQuestion)) {
      const cost = pool.find((f) => f.question === costQuestion);
      if (cost) return [cost, ...picked.slice(0, 6)];
    }
  }

  return picked;
}

// ---------------------------------------------------------------------------
// City-specific FAQ overrides — curated content takes precedence over generator
// ---------------------------------------------------------------------------

// Curated, city-specific FAQs. A slug listed here bypasses the generated
// getCityOnlyFAQs() pool entirely. This is the ONLY place a city's FAQ copy
// may live: both app/areas/<city>/page.tsx (FAQPage JSON-LD) and its
// content.tsx (the rendered accordion) read it through getCityFAQItems(),
// so the markup and the visible text cannot drift apart. Before 2026-09-14
// ten cities kept two hardcoded copies and 20 answers had already diverged.
const CITY_FAQ_OVERRIDES: Record<string, FAQItem[]> = {
  littleton: [
    {
      question: "Do I need a permit to replace my roof in Littleton?",
      answer: "Yes. The City of Littleton requires a building permit for any full roof replacement, and inspections are required after installation. Depending on your property location, permits may be issued through the City of Littleton Building Division, Arapahoe County, or Douglas County. Gates Enterprises handles permit pulling and inspection scheduling as standard practice — you don't need to manage that process yourself.",
    },
    {
      question: "My property is on the Arapahoe/Douglas County line. How does that affect permitting?",
      answer: "It depends on your specific address and which jurisdiction your parcel falls under. Both counties have slightly different application processes and fee schedules. We've worked in both jurisdictions extensively and will identify the correct permit authority before any work begins. This is a common situation in south Littleton, and it's not a complication — just a step we handle as part of standard project setup.",
    },
    {
      question: "When does hail season typically peak in Littleton?",
      answer: "Colorado's hail season runs April through September, with the highest frequency of large-hail events in May, June, and July. Littleton's western location, close to the foothills storm interface, means it often receives storms that have organized and intensified before tracking northeast toward the metro. NOAA data for the Littleton area shows 11 storms delivering 2.0-inch or larger hail between 2019 and 2024 — an average of more than two significant events per year.",
    },
    {
      question: "My roof looks fine from the ground. How do I know if I have hail damage?",
      answer: "You often can't tell from the ground. Hail impact damage to asphalt shingles — called bruising — appears as soft spots in the shingle mat that aren't visible without getting on the roof and pressing by hand or probing with a tool. Impact fractures accelerate granule loss and eventually expose the fiberglass mat to UV and moisture. We provide free post-storm inspections with written documentation so you have an accurate picture of what, if anything, needs attention.",
    },
    {
      question: "How long does a roof replacement take in Littleton?",
      answer: "A standard residential roof replacement in Littleton takes one to two days for most single-family homes, weather permitting. Larger homes, complex multi-plane roofs, and jobs requiring HOA approval or permit processing add time to the front end. We give you a realistic timeline at estimate and stick to it.",
    },
    {
      question: "Will my HOA in Ken Caryl or Columbine need to approve my new roof?",
      answer: "Most HOA-governed communities in Littleton require architectural review committee approval for roofing material and color changes. The Ken Caryl Ranch Master Association is one of the more active HOAs in this regard. We handle HOA submittal documentation — color samples, manufacturer spec sheets, project description — and factor the typical 7–14 day approval window into your project schedule so it doesn't cause delays.",
    },
    {
      question: "What manufacturer certifications does Gates Enterprises hold?",
      answer: "We hold four: GAF Master Elite, Owens Corning Preferred, Malarkey Emerald Premium, and CertainTeed ShingleMaster. Each certification comes with access to enhanced warranty programs — including GAF's System Plus and Golden Pledge warranties and Owens Corning's Platinum Protection limited warranty — that non-certified installers cannot offer their customers.",
    },
    {
      question: "Does Gates Enterprises work with homeowners filing insurance claims?",
      answer: "Yes. We assist Littleton homeowners through the full documentation and inspection process. We conduct thorough inspections, provide written damage reports, coordinate documentation with insurance adjusters, and ensure that the scope of damage is fully represented before a claim is settled. You are responsible for your deductible — our role is to support you through the process and make sure the work is scoped and priced accurately.",
    },
    {
      question: "What roofing materials do you recommend for Littleton's climate?",
      answer: "For most Littleton homes, we recommend Class 4 impact-resistant asphalt shingles — GAF Timberline HDZ or Owens Corning Duration Storm are the most common choices. Class 4 IR shingles are the highest impact resistance rating available and frequently qualify for a premium discount through your homeowner's insurance carrier in Colorado. The Littleton area's storm history makes the modest cost premium on Class 4 shingles a straightforward return on investment for most homeowners.",
    },
  ],
  brighton: [
    {
      question: "How do I know if my Brighton home has hail damage?",
      answer: "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. Brighton's open plains exposure means hailstones often arrive at high velocity with little wind break. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Brighton homeowners.",
    },
    {
      question: "Does Gates Enterprises work with my insurance company?",
      answer: "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports, and coordinate documentation with your insurance company throughout the restoration process. We document damage thoroughly and walk you through repair vs replace options so you can decide next steps with clear information.",
    },
    {
      question: "Why does Brighton get so much hail?",
      answer: "Brighton sits on the open plains northeast of Denver with minimal terrain protection. Storms that develop along the Front Range move across flat agricultural land with nothing to weaken them before reaching Brighton neighborhoods. Adams County consistently sees high volumes of hail damage claims each storm season.",
    },
    {
      question: "What roofing materials do you recommend for Brighton homes?",
      answer: "Given Brighton's severe hail exposure on the open plains, we recommend impact resistant shingles rated Class 3 or Class 4. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed, each offering excellent hail resistance and long term durability.",
    },
    {
      question: "How long does a roof replacement take in Brighton?",
      answer: "Most residential roof replacements are completed in one to two days, depending on the size and complexity of the roof. Gates Enterprises LLC coordinates scheduling, materials delivery, and crew assignments to minimize disruption to your family.",
    },
    {
      question: "Is Gates Enterprises LLC licensed and insured in Adams County?",
      answer: "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Adams County, the City of Brighton, and throughout Colorado's Front Range.",
    },
    {
      question: "Does Brighton's rapid growth affect roofing services?",
      answer: "Brighton is one of the fastest growing communities in Colorado. While newer homes may have intact roofs, even recent construction can sustain hail damage. We work with both established neighborhoods and new developments across Brighton, and our team is familiar with the building codes and HOA requirements in the area.",
    },
  ],
  "colorado-springs": [
    {
      question: "How often should Colorado Springs homeowners inspect their roof?",
      answer: "We recommend a professional roof inspection at least once per year and after every significant hailstorm. Colorado Springs sits at the base of Pikes Peak where Palmer Divide storms regularly track through, making annual inspections critical for catching hidden damage before it leads to costly repairs.",
    },
    {
      question: "Does Gates Enterprises work with insurance companies on storm damage in Colorado Springs?",
      answer: "Yes. Gates Enterprises LLC is an insurance restoration expert. We perform detailed inspections, document all damage with photos and measurements, and coordinate documentation with your insurance company throughout the restoration process. After major events like the June 2023 storm that caused $1.4 billion in damage, our team helped hundreds of homeowners navigate their claims.",
    },
    {
      question: "What type of shingles hold up best against Colorado Springs hail?",
      answer: "We recommend Class 3 or Class 4 impact resistant shingles for Colorado Springs homes. Given the city's position in a heavy hail corridor, impact resistant shingles provide significantly better protection. Our quadruple manufacturer certifications mean you can choose from the best product lines offered by GAF, Owens Corning, Malarkey, and CertainTeed.",
    },
    {
      question: "Does Gates Enterprises handle HOA requirements in Colorado Springs?",
      answer: "Yes. Many Colorado Springs neighborhoods like Briargate, Flying Horse, and Wolf Ranch have strict HOA guidelines for roofing materials, colors, and styles. We work within your HOA's requirements and can assist with the approval process to ensure your new roof meets all community standards.",
    },
    {
      question: "Who handles building permits for roofing in Colorado Springs?",
      answer: "The Pikes Peak Regional Building Department handles all roofing permits in the Colorado Springs area. Gates Enterprises LLC manages the permitting process for you, ensuring your project meets all local building codes and passes inspection.",
    },
    {
      question: "Do you work with military families at Fort Carson and the Air Force bases?",
      answer: "Absolutely. Colorado Springs is home to Fort Carson, Peterson Space Force Base, Schriever Space Force Base, and the United States Air Force Academy. We understand that military families face frequent PCS moves and that roof condition directly impacts resale value. We provide thorough inspections and quality repairs on timelines that work with military schedules.",
    },
    {
      question: "Is there a cost for the initial roof inspection in Colorado Springs?",
      answer: "No. Gates Enterprises LLC offers free roof inspections and estimates for Colorado Springs homeowners. We assess your roof's condition honestly and provide a clear recommendation with no pressure and no obligation.",
    },
  ],
  denver: [
    {
      question: "How often should Denver homeowners inspect their roof?",
      answer: "We recommend a professional roof inspection at least once per year and after every significant hailstorm. Denver's position in the hail corridor means your roof takes more punishment than homes in most other cities. Annual inspections catch small problems before they become expensive repairs.",
    },
    {
      question: "Does Gates Enterprises work with insurance companies on storm damage?",
      answer: "Yes. Gates Enterprises LLC is an insurance restoration expert. We perform detailed inspections, document all damage with photos and measurements, and coordinate documentation with your insurance company throughout the restoration process. Our goal is to document damage thoroughly and explain repair vs replace options clearly so you can decide next steps.",
    },
    {
      question: "Can you work on older Denver homes with unique roof designs?",
      answer: "Absolutely. Denver has a wide range of architectural styles, from Victorian homes in Capitol Hill to Craftsman bungalows in Park Hill to mid century ranches in Harvey Park. Our crews have experience with steep pitches, complex valleys, slate to shingle conversions, and everything in between.",
    },
    {
      question: "What type of shingles hold up best in Denver's climate?",
      answer: "We recommend Class 3 or Class 4 impact resistant shingles for Denver homes. These shingles are specifically designed to withstand hail impacts. Our quadruple manufacturer certifications mean you can choose from the best product lines offered by GAF, Owens Corning, Malarkey, and CertainTeed.",
    },
    {
      question: "How long does a typical roof replacement take?",
      answer: "Most residential roof replacements in Denver are completed in one to three days, depending on the size of the home, roof complexity, and weather conditions. We coordinate closely with you on scheduling and keep you informed throughout the project.",
    },
    {
      question: "Does Gates Enterprises serve the entire Denver metro?",
      answer: "Yes. While this page focuses on Denver proper, Gates Enterprises LLC serves homeowners across Colorado's Front Range, including Lakewood, Parker, Aurora, Arvada, Westminster, Littleton, Centennial, and surrounding communities.",
    },
    {
      question: "Is there a cost for the initial roof inspection?",
      answer: "No. Gates Enterprises LLC offers free roof inspections and estimates for Denver homeowners. We assess your roof's condition honestly and provide a clear recommendation with no pressure and no obligation.",
    },
  ],
  evergreen: [
    {
      question: "How do I know if my Evergreen home has hail damage?",
      answer: "Hail damage is not always visible from the ground, and heavy tree cover in Evergreen can make it even harder to spot. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Evergreen homeowners.",
    },
    {
      question: "Does Gates Enterprises work with my insurance company?",
      answer: "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports, and coordinate documentation with your insurance company throughout the restoration process. We document damage thoroughly and walk you through repair vs replace options so you can decide next steps with clear information.",
    },
    {
      question: "How does Evergreen's elevation affect roofing?",
      answer: "At 7,220 feet elevation, Evergreen homes face extreme conditions including heavy snow loads, intense UV exposure, rapid temperature swings, hailstorms, and high winds. These factors accelerate shingle deterioration and make proper installation and material selection critical. Roofs in Evergreen typically endure more stress than those at lower elevations.",
    },
    {
      question: "What roofing materials do you recommend for Evergreen homes?",
      answer: "For Evergreen's high elevation mountain environment, we recommend impact resistant shingles rated Class 3 or Class 4 with high wind ratings and excellent snow load performance. Materials that handle extreme UV and freeze thaw cycles are essential at 7,220 feet. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed.",
    },
    {
      question: "Does pine beetle tree damage affect roofs in Evergreen?",
      answer: "Yes. Pine beetle damage has killed many trees throughout the Evergreen area, and dead trees are more likely to drop large branches onto roofs during storms or heavy snow. Falling debris can crack shingles, damage flashing, and compromise roof integrity. Regular inspections are especially important for homes surrounded by affected trees.",
    },
    {
      question: "Is Gates Enterprises LLC licensed and insured in Jefferson County?",
      answer: "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Jefferson County, the Evergreen area, and throughout Colorado's Front Range.",
    },
    {
      question: "How does heavy snow affect roofs in Evergreen?",
      answer: "Evergreen receives significantly more snow than Denver and the surrounding plains. Heavy snow loads can stress roof structures, cause ice dams, and lead to moisture intrusion if the roof system is compromised. Proper ventilation, ice and water shield underlayment, and impact resistant shingles are all important for Evergreen homes.",
    },
  ],
  "fort-collins": [
    {
      question: "How often should Fort Collins homeowners inspect their roof?",
      answer: "We recommend a professional roof inspection at least once per year and after every significant hailstorm. Fort Collins sits in the Northern Colorado hail corridor where severe storms form along the foothills and track across the city. Annual inspections catch small problems before they become expensive repairs.",
    },
    {
      question: "Does Gates Enterprises work with insurance companies on storm damage in Fort Collins?",
      answer: "Yes. Gates Enterprises LLC is an insurance restoration expert. We perform detailed inspections, document all damage with photos and measurements, and coordinate documentation with your insurance company throughout the restoration process. Fort Collins homeowners deal with frequent hail claims, and we handle the process from start to finish.",
    },
    {
      question: "What type of shingles hold up best in Fort Collins?",
      answer: "We recommend Class 3 or Class 4 impact resistant shingles for Fort Collins homes. Given the frequency of hail along the I-25 corridor, impact rated shingles provide the best long term protection. Our four manufacturer certifications give you access to the best product lines from GAF, Owens Corning, Malarkey, and CertainTeed.",
    },
    {
      question: "Can you work on older homes in Old Town Fort Collins?",
      answer: "Absolutely. Old Town Fort Collins has a mix of historic homes, some with original wood shake roofs. Our crews have experience with steep pitches, complex valleys, and transitioning older wood shake roofs to modern architectural shingles while preserving the character of the home.",
    },
    {
      question: "Does Fort Collins require permits for roof replacement?",
      answer: "Yes. The City of Fort Collins requires building permits for roof replacements. Fort Collins also has strict green building standards. Gates Enterprises LLC handles the permitting process for you and ensures all work meets or exceeds local code requirements.",
    },
    {
      question: "Do you serve Timnath, Windsor, and Loveland as well?",
      answer: "Yes. Gates Enterprises LLC serves the entire Northern Colorado region, including Timnath, Windsor, Loveland, Greeley, Longmont, and surrounding communities. We also serve Boulder, Denver, and the rest of the Front Range.",
    },
    {
      question: "How long does a roof replacement take in Fort Collins?",
      answer: "Most residential roof replacements in Fort Collins are completed in one to three days, depending on the size of the home, roof complexity, and weather conditions. We coordinate closely with you on scheduling and keep you informed throughout the project.",
    },
  ],
  lakewood: [
    {
      question: "Is Gates Enterprises actually based in Lakewood?",
      answer: "Yes. Gates Enterprises LLC is headquartered in Lakewood, CO. This is our home and has been since we were founded in 2014. When you hire us, you are hiring your neighbors.",
    },
    {
      question: "How do I know if my Lakewood home has hail damage?",
      answer: "Hail damage is often invisible from the ground. Signs to watch for include dented gutters, granule accumulation in downspout splash zones, and cracked or bruised shingles. The most reliable way to know is a professional inspection. Gates Enterprises LLC offers free inspections for Lakewood homeowners.",
    },
    {
      question: "Does Gates Enterprises work with my insurance company?",
      answer: "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all damage with detailed photos and measurements, provide comprehensive reports, and coordinate documentation with your insurance company throughout the entire restoration process.",
    },
    {
      question: "What roofing materials work best for Lakewood homes?",
      answer: "We recommend Class 3 or Class 4 impact resistant shingles for Lakewood homes due to the frequency of hail in Jefferson County. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed. We help you choose the best option for your budget, style, and warranty preferences.",
    },
    {
      question: "How quickly can you inspect my roof after a storm?",
      answer: "Because we are headquartered in Lakewood, we can typically schedule inspections within days of a storm event. During peak storm season, demand increases, so we recommend reaching out as soon as possible to secure your spot.",
    },
    {
      question: "What warranties are available through Gates Enterprises?",
      answer: "Our four manufacturer certifications unlock the highest tier warranties available from each manufacturer. That includes GAF's Golden Pledge® with 25 year workmanship coverage, Owens Corning's Preferred Protection, Malarkey's Emerald level warranties, and CertainTeed's SureStart PLUS™ coverage. We walk you through every option so you can make an informed decision.",
    },
    {
      question: "Does Gates Enterprises offer free inspections and estimates?",
      answer: "Yes. We offer completely free roof inspections and estimates for all Lakewood homeowners. No pressure, no obligation. We assess your roof's condition, explain what we find, and give you a clear recommendation.",
    },
  ],
  "lone-tree": [
    {
      question: "How do I know if my Lone Tree home has hail damage?",
      answer: "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Lone Tree homeowners.",
    },
    {
      question: "Does Gates Enterprises work with my insurance company?",
      answer: "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports, and coordinate documentation with your insurance company throughout the restoration process. We document damage thoroughly and walk you through repair vs replace options so you can decide next steps with clear information.",
    },
    {
      question: "Why should Lone Tree homeowners invest in quality roofing?",
      answer: "Lone Tree has some of the highest property values in Douglas County. A quality roof protects your investment, maintains curb appeal, and ensures your home meets the standards expected in communities like Heritage Hills and Ridgegate. Premium roofing materials and certified installation also provide better long term warranty protection.",
    },
    {
      question: "What roofing materials do you recommend for Lone Tree homes?",
      answer: "Given Lone Tree's location in Douglas County's hail corridor, we recommend impact resistant shingles rated Class 3 or Class 4. For upscale homes, we also offer designer shingle lines that combine aesthetics with durability. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed.",
    },
    {
      question: "How long does a roof replacement take in Lone Tree?",
      answer: "Most residential roof replacements are completed in one to two days, depending on the size and complexity of the roof. Larger custom homes in Lone Tree may require additional time. Gates Enterprises LLC coordinates scheduling, materials delivery, and crew assignments to minimize disruption to your family.",
    },
    {
      question: "Is Gates Enterprises LLC licensed and insured in Douglas County?",
      answer: "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Douglas County, the City of Lone Tree, and throughout Colorado's Front Range.",
    },
    {
      question: "Does Lone Tree have specific HOA roofing requirements?",
      answer: "Many Lone Tree communities have HOA guidelines that specify approved roofing materials, colors, and styles. Gates Enterprises LLC is experienced working within HOA requirements and can help you select materials that meet your community's standards while providing maximum protection against Colorado's severe weather.",
    },
  ],
  morrison: [
    {
      question: "How do I know if my Morrison home has hail damage?",
      answer: "Hail damage is not always visible from the ground, especially on mountain homes with steep roof pitches. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Morrison homeowners.",
    },
    {
      question: "Does Gates Enterprises work with my insurance company?",
      answer: "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports, and coordinate documentation with your insurance company throughout the restoration process. We document damage thoroughly and walk you through repair vs replace options so you can decide next steps with clear information.",
    },
    {
      question: "How do mountain weather patterns affect roofs in Morrison?",
      answer: "Morrison sits at approximately 5,800 feet elevation at the transition between the plains and the foothills. This geography creates unique weather patterns including sudden hailstorms, high winds channeled through canyons, heavy snow loads, and rapid temperature swings. These conditions accelerate roof wear and make impact resistant, weather rated materials essential.",
    },
    {
      question: "What roofing materials do you recommend for Morrison homes?",
      answer: "For Morrison's mountain environment, we recommend impact resistant shingles rated Class 3 or Class 4 with high wind ratings. Materials that handle rapid freeze thaw cycles and heavy snow loads perform best at foothills elevation. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed.",
    },
    {
      question: "How long does a roof replacement take in Morrison?",
      answer: "Most residential roof replacements are completed in one to two days. However, Morrison homes with steep pitches, complex roof lines, or limited access on mountain properties may require additional time. Our team plans logistics carefully to ensure efficient completion.",
    },
    {
      question: "Is Gates Enterprises LLC licensed and insured in Jefferson County?",
      answer: "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Jefferson County, the Town of Morrison, and throughout Colorado's Front Range.",
    },
    {
      question: "Can Gates Enterprises handle steep mountain roofs?",
      answer: "Absolutely. Many Morrison homes feature steep roof pitches designed for snow shedding, along with complex architectural details. Our crews are experienced with mountain roofing installations and have the safety equipment and expertise to work on steep and high elevation roofs safely and effectively.",
    },
  ],
  parker: [
    {
      question: "How much does a new roof cost in Parker CO?",
      answer: "A new roof in Parker typically costs between $8,000 and $25,000+ depending on the size of your home, the roofing materials selected, and the complexity of the roof. When storm damage is involved, an approved insurance claim can offset much of that cost, depending on your policy. Gates Enterprises offers free inspections and detailed estimates so you know exactly what to expect before any work begins.",
    },
    {
      question: "Does insurance cover hail damage in Parker?",
      answer: "In most cases, yes. Standard homeowners insurance policies in Colorado typically cover hail damage to your roof. Parker sits along the Palmer Divide, one of the most active hail corridors in the country, so insurers in this area are familiar with storm damage claims. Gates Enterprises documents all damage thoroughly and works directly with your insurance company to support your claim.",
    },
    {
      question: "How do I know if my Parker home has hail damage?",
      answer: "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. Soft metal damage on AC units, mailboxes, and window trim can also indicate roof damage. The most reliable way to know is to schedule a professional inspection. Gates Enterprises offers free roof inspections for Parker homeowners.",
    },
    {
      question: "Does Gates Enterprises work with my insurance company?",
      answer: "Yes. Gates Enterprises is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports with photo evidence, and coordinate documentation with your insurance company throughout the restoration process to ensure nothing is missed.",
    },
    {
      question: "Why does Parker get so much hail?",
      answer: "Parker sits along the Palmer Divide, a ridge of higher elevation terrain between Denver and Colorado Springs. This geography creates strong updrafts during storm season that produce frequent and often severe hailstorms. Douglas County consistently ranks among the most hail prone counties in Colorado, with 3 to 5 significant hail events in a typical year.",
    },
    {
      question: "What roofing materials are best for Parker's hail corridor?",
      answer: "Given Parker's position along the Palmer Divide hail corridor, we recommend impact resistant shingles rated Class 3 or Class 4. These shingles are designed to withstand hail impact and may qualify you for insurance premium discounts. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed, each offering excellent hail resistance and long term durability.",
    },
    {
      question: "How long does a roof replacement take in Parker?",
      answer: "Most residential roof replacements in Parker are completed in one to two days, depending on the size and complexity of the roof. Larger or more complex projects may take an additional day. Gates Enterprises coordinates scheduling, materials delivery, and crew assignments to minimize disruption to your family.",
    },
    {
      question: "Is Gates Enterprises licensed and insured in Douglas County?",
      answer: "Yes. Gates Enterprises is fully licensed and insured to perform roofing and exterior work in Douglas County, the Town of Parker, and throughout Colorado's Front Range.",
    },
    {
      question: "How soon should I get an inspection after a hailstorm?",
      answer: "As soon as possible. Most insurance policies have a deadline for filing storm damage claims, often within one year of the event. However, hidden damage can worsen over time if left unaddressed, potentially leading to leaks, mold, or structural issues. We recommend scheduling a free inspection within a few weeks of any significant storm.",
    },
  ],
  superior: [
    {
      question: "How do I know if my Superior home has hail damage?",
      answer: "Hail damage is not always visible from the ground. Common signs include dented gutters, cracked or missing shingles, and granule loss in your downspout splash areas. The most reliable way to know is to schedule a professional inspection. Gates Enterprises LLC offers free roof inspections for Superior homeowners.",
    },
    {
      question: "Does Gates Enterprises work with my insurance company?",
      answer: "Yes. Gates Enterprises LLC is an insurance restoration expert. We document all storm damage thoroughly, provide detailed reports, and coordinate documentation with your insurance company throughout the restoration process. We document damage thoroughly and walk you through repair vs replace options so you can decide next steps with clear information.",
    },
    {
      question: "How did the Marshall Fire affect roofing needs in Superior?",
      answer: "The Marshall Fire in December 2021 destroyed over 1,000 homes in Superior and Louisville. Many homes were rebuilt or repaired, and some surrounding properties sustained heat, smoke, or ember damage to roofing materials. If your home was in the affected area and has not had a professional roof inspection, hidden damage may be shortening the life of your roof.",
    },
    {
      question: "What roofing materials do you recommend for Superior homes?",
      answer: "Given Superior's exposure to both hail and high winds along the Front Range, we recommend impact resistant shingles rated Class 3 or Class 4. For homes rebuilt after the Marshall Fire, we also recommend fire resistant roofing materials. Our quadruple manufacturer certifications give you access to premium product lines from GAF, Owens Corning, Malarkey, and CertainTeed.",
    },
    {
      question: "How long does a roof replacement take in Superior?",
      answer: "Most residential roof replacements are completed in one to two days, depending on the size and complexity of the roof. Gates Enterprises LLC coordinates scheduling, materials delivery, and crew assignments to minimize disruption to your family.",
    },
    {
      question: "Is Gates Enterprises LLC licensed and insured in Boulder County?",
      answer: "Yes. Gates Enterprises LLC is fully licensed and insured to perform roofing and exterior work in Boulder County, the Town of Superior, and throughout Colorado's Front Range.",
    },
    {
      question: "Does Superior get significant hail damage?",
      answer: "Yes. Superior sits along the Front Range where storms frequently produce damaging hail. The area's proximity to the foothills creates atmospheric conditions that intensify storms. Boulder County regularly sees hail damage claims, and Superior homeowners should schedule inspections after any significant storm event.",
    },
  ],
};

// ---------------------------------------------------------------------------
// PUBLIC API
// ---------------------------------------------------------------------------

/**
 * Get unique FAQ items for a service x city page.
 * Returns 7 unique FAQs based on the city and service combination.
 */
export function getServiceCityFAQItems(citySlug: string, serviceSlug: string): FAQItem[] {
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);
  if (!city || !service) return [];
  return getServiceCityFAQs(city, service);
}

/**
 * Get unique FAQ items for a city-only area page.
 * Curated overrides take precedence; otherwise returns 7 generated FAQs.
 */
export function getCityFAQItems(citySlug: string): FAQItem[] {
  if (CITY_FAQ_OVERRIDES[citySlug]) return CITY_FAQ_OVERRIDES[citySlug];
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  return getCityOnlyFAQs(city);
}

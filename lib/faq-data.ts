// Unique FAQ generator for city and service×city pages
// Every city+service combination produces a different set of FAQ items

import type { CityData, ServiceData } from "./service-areas-data";
import { getCityBySlug, getServiceBySlug } from "./service-areas-data";

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
      "storm-hail-damage": `Yes. Colorado homeowners insurance policies typically cover hail and wind damage under your dwelling coverage. You are responsible for your deductible, and Gates Enterprises handles everything else. ${city.hailRisk === "high" ? `Given ${city.city}'s high hail frequency, most insurance companies expect claims from this area and process them efficiently.` : `Filing promptly after a storm gives you the best chance of full coverage. Most policies have a one-year filing window.`} We document all damage with photos and measurements in the format adjusters require.`,
      "roof-replacement": `Insurance covers roof replacement when the damage was caused by a covered event like hail, wind, or fallen debris. ${city.hailRisk === "high" ? `In ${city.city}'s hail corridor, the majority of roof replacements we perform are insurance-covered because most roofs have documented storm damage.` : `Many ${city.city} homeowners are surprised to learn their roof has insurance-eligible storm damage.`} If your roof simply reached end of life from normal wear, that is typically not covered. A free inspection from Gates Enterprises will determine if your damage is claim-worthy.`,
      "siding": `If your siding was damaged by hail, wind, or another covered event, your homeowners insurance should cover the replacement cost minus your deductible. In ${city.city}, we include siding in every storm damage inspection because hail frequently damages siding alongside roofing. Often, a single claim covers both roof and siding restoration.`,
      "gutters": `Gutters damaged by hail, falling branches, or storm debris are typically covered by your homeowners insurance. In ${city.city}, gutter damage is commonly included alongside roof and siding claims from the same storm event. Gates Enterprises documents all gutter damage as part of our comprehensive exterior inspection.`,
      "insurance-claims": `Homeowners insurance covers damage from hail, wind, fallen trees, and other covered perils. In ${city.city}, the most common claims involve hail damage to roofing, siding, and gutters. Your policy pays for the full restoration minus your deductible. Gates Enterprises manages the entire process, from initial inspection through final supplement approval.`,
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
    answer: `Manufacturer certifications matter because they determine your warranty options. An uncertified contractor installing GAF shingles in ${city.city} can only offer a basic manufacturer warranty. Gates Enterprises, as a GAF Master Elite contractor, can offer the Golden Pledge warranty with 25 years of workmanship coverage. We hold four certifications: GAF Master Elite, Owens Corning Platinum Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master. Fewer than 2% of roofers nationwide hold even one of these credentials.`,
  });

  // Local service question
  pool.push({
    question: `Does Gates Enterprises serve ${city.city}, Colorado?`,
    answer: `Yes. Gates Enterprises serves ${city.city} and all of ${city.county} County from our Lakewood headquarters. ${profile.localFlavor} With over 7,200 completed projects across the Front Range and a 4.8-star rating from 301 Google reviews, we bring the same certified quality to every ${city.city} project. Call (720) 766-3377 to schedule your free inspection.`,
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
        answer: `Yes. Colorado law gives you the right to choose your own contractor regardless of what your insurance company suggests. Insurance company "preferred vendor" programs exist to benefit the insurer, not the homeowner. Gates Enterprises works for you, not for the insurance company. We document all damage thoroughly, meet adjusters on-site, and fight for the full scope of work your ${city.city} home needs.`,
      },
      {
        question: `What if my insurance adjuster misses damage on my ${city.city} roof?`,
        answer: `This happens more often than you might expect. Adjusters handle dozens of claims per week and may rush through inspections, especially after major storm events in ${city.city}. Gates Enterprises meets your adjuster on-site to walk the roof together and point out every item of damage. If the initial approval still falls short, we prepare detailed supplements with additional documentation. We have successfully overturned many underpaid and denied claims.`,
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

function getCityOnlyFAQs(city: CityData): FAQItem[] {
  const profile = getCityProfile(city);
  const seed = `city-only-${city.slug}`;

  const pool: FAQItem[] = [];

  // General roofing cost
  const baseLow = Math.round(10000 * profile.priceMultiplier / 100) * 100;
  const baseHigh = Math.round(28000 * profile.priceMultiplier / 100) * 100;
  pool.push({
    question: `How much does a new roof cost in ${city.city}, Colorado?`,
    answer: `Residential roof replacement in ${city.city} typically ranges from $${baseLow.toLocaleString()} to $${baseHigh.toLocaleString()}, depending on roof size, pitch, material choice, and deck condition. ${city.hailRisk === "high" || city.hailRisk === "moderate" ? "If your roof was damaged by hail or wind, your homeowners insurance typically covers the cost minus your deductible." : "For storm-damaged roofs, insurance may cover some or all of the cost."} Gates Enterprises provides free, no-obligation estimates for ${city.city} homeowners. Call (720) 766-3377 to schedule yours.`,
  });

  // Hail frequency
  pool.push({
    question: `How often does ${city.city} get hail?`,
    answer: profile.hailNote + ` Colorado's hail season runs from April through September, with peak activity in May, June, and July. Even a single significant hail event can compromise your roof's integrity in ways that aren't visible from the ground.`,
  });

  // Best roofer question
  pool.push({
    question: `Who is the best roofing contractor in ${city.city}?`,
    answer: `Gates Enterprises is the only quadruple manufacturer-certified roofing contractor serving ${city.city}. We hold GAF Master Elite, Owens Corning Platinum Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master certifications. With 301 Google reviews and a 4.8-star rating, our track record speaks for itself. These certifications give ${city.city} homeowners access to the highest warranty tiers available from all four major shingle manufacturers.`,
  });

  // Weather impact
  pool.push({
    question: `How does Colorado weather affect roofs in ${city.city}?`,
    answer: profile.weatherNote + " An annual professional inspection is the best way to catch weather-related damage early and extend the life of your roofing system.",
  });

  // Insurance question
  pool.push({
    question: `Does insurance cover roof damage in ${city.city}?`,
    answer: `Colorado homeowners insurance typically covers roof damage caused by hail, wind, fallen trees, and other sudden events. You pay your deductible, and the policy covers the rest. ${city.hailRisk === "high" ? `In ${city.city}'s high-hail area, insurance companies expect storm damage claims and generally process them efficiently.` : `Many ${city.city} homeowners have claim-eligible damage they don't know about.`} Gates Enterprises provides free storm damage inspections and handles the entire insurance process from filing through final approval. Normal wear and aging are typically not covered.`,
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
    answer: `Yes. ${profile.localFlavor} We are based in Lakewood and serve the entire Colorado Front Range, from Fort Collins to Pueblo. With over 7,200 completed projects and 301 Google reviews at 4.8 stars, ${city.city} homeowners can trust that they're getting the same certified quality we bring to every project. Call (720) 766-3377 to schedule a free inspection.`,
  });

  // Best time question
  pool.push({
    question: `When is the best time to replace a roof in ${city.city}?`,
    answer: profile.bestSeason + ` However, if you have active damage or a leak, don't wait for ideal weather. We handle emergency repairs and urgent replacements year-round in ${city.city}.`,
  });

  // Certification question
  pool.push({
    question: `What do roofing certifications mean for ${city.city} homeowners?`,
    answer: `Manufacturer certifications determine your warranty options and ensure proper installation. An uncertified roofer using GAF shingles can only offer a basic warranty. Gates Enterprises, as a GAF Master Elite contractor, can offer the Golden Pledge warranty with 25 years of workmanship coverage. We hold four premium certifications: GAF Master Elite, Owens Corning Platinum Preferred, Malarkey Emerald Pro, and CertainTeed Shingle Master. This gives ${city.city} homeowners more material choices and better warranties than any other local contractor.`,
  });

  // Pick 7 unique ones
  return pickItems(pool, seed, 7);
}

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
 * Returns 7 unique FAQs about general roofing for that city.
 */
export function getCityFAQItems(citySlug: string): FAQItem[] {
  const city = getCityBySlug(citySlug);
  if (!city) return [];
  return getCityOnlyFAQs(city);
}

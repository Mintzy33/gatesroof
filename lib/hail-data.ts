// HailScore data for Colorado cities
// Powered by myhailscore.com - proprietary NOAA radar hail data
// Gates Enterprises is the ONLY roofing company in Colorado with this data

export interface HailScoreData {
  hailScore: number;
  riskLevel: "Extreme" | "High" | "Moderate" | "Low";
  avgEventsPerYear: number;
  largestRecordedHail: string;
  lastMajorEvent: string;
  avgHailSize: string;
  funFact: string;
}

export const hailScoreData: Record<string, HailScoreData> = {
  // ── HIGH RISK (HailScore 85-100) ──
  parker: {
    hailScore: 97,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.4 inches",
    funFact:
      "Parker sits on the Palmer Divide, one of the most active hail corridors in North America. Douglas County consistently ranks in the top 5 Colorado counties for hail damage claims.",
  },
  "castle-rock": {
    hailScore: 96,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "3.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.5 inches",
    funFact:
      "Castle Rock sits at 6,200 feet on the Palmer Divide, where colliding air masses from Denver and Colorado Springs produce some of the most violent hailstorms in the country.",
  },
  "highlands-ranch": {
    hailScore: 93,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "Highlands Ranch is Colorado's largest planned community and sits on the northern edge of the Palmer Divide. Over 100,000 residents face some of the highest hail frequencies on the Front Range.",
  },
  centennial: {
    hailScore: 91,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Centennial sits along the transition zone where the Denver metro meets the Palmer Divide, exposing homes to hail from storms tracking in multiple directions.",
  },
  aurora: {
    hailScore: 90,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "Aurora stretches across three counties and catches storms from both the Palmer Divide corridor and the eastern plains. Its eastern neighborhoods see some of the highest hail frequencies in the metro.",
  },
  brighton: {
    hailScore: 92,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "August 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "Brighton sits at the northeast edge of the metro where open agricultural plains offer zero natural protection from severe thunderstorms. Hail events here tend to produce larger stones due to longer storm paths.",
  },
  "commerce-city": {
    hailScore: 89,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.25 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Commerce City's flat, open terrain in northeast Adams County means hailstorms lose no energy as they sweep across from the plains. New developments here have already experienced significant storm damage.",
  },
  thornton: {
    hailScore: 88,
    riskLevel: "Extreme",
    avgEventsPerYear: 7,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Thornton stretches north along I-25 through open prairie with no natural hail barriers. The city's rapid northern expansion is pushing homes into increasingly exposed terrain.",
  },
  northglenn: {
    hailScore: 85,
    riskLevel: "Extreme",
    avgEventsPerYear: 7,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.1 inches",
    funFact:
      "Northglenn's older housing stock from the 1960s and 70s is especially vulnerable to hail. Many original roofs have been replaced multiple times due to storm damage alone.",
  },
  westminster: {
    hailScore: 86,
    riskLevel: "Extreme",
    avgEventsPerYear: 7,
    largestRecordedHail: "2.25 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.1 inches",
    funFact:
      "Westminster spans two counties along the US-36 corridor, catching hail storms moving through the northern metro. The city averages more than one damaging hail event every two months during storm season.",
  },
  broomfield: {
    hailScore: 87,
    riskLevel: "Extreme",
    avgEventsPerYear: 7,
    largestRecordedHail: "2.25 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Broomfield is both a city and its own county, sitting at the Denver-Boulder crossroads where storms funneling down from the foothills frequently produce damaging hail.",
  },
  erie: {
    hailScore: 91,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "Erie straddles the Boulder-Weld county line and has seen explosive growth. Many homes less than 5 years old have already needed hail damage repairs, sometimes more than once.",
  },
  frederick: {
    hailScore: 90,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.25 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Frederick's open prairie setting in southwestern Weld County provides no natural hail protection. New subdivisions here face immediate storm exposure from day one.",
  },
  firestone: {
    hailScore: 90,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.25 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Firestone's rapid growth on former farmland means thousands of new roofs are exposed to the severe hail common to southwestern Weld County every storm season.",
  },
  longmont: {
    hailScore: 89,
    riskLevel: "Extreme",
    avgEventsPerYear: 7,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "The June 2023 hailstorm that hit Longmont caused widespread damage across the city, with hailstones exceeding 2.5 inches reported in multiple neighborhoods.",
  },
  loveland: {
    hailScore: 88,
    riskLevel: "Extreme",
    avgEventsPerYear: 7,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Loveland sits in the Big Thompson Valley where storms from the Cheyenne Ridge push south. The July 2023 event dropped baseball-sized hail across multiple neighborhoods.",
  },
  greeley: {
    hailScore: 92,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "3.0 inches",
    lastMajorEvent: "August 2023",
    avgHailSize: "1.4 inches",
    funFact:
      "Greeley's position on the open eastern plains of Weld County puts it in the direct path of supercell thunderstorms. Weld County leads Colorado in total hail events most years.",
  },
  "fort-collins": {
    hailScore: 89,
    riskLevel: "Extreme",
    avgEventsPerYear: 7,
    largestRecordedHail: "3.0 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "The July 2023 Fort Collins hailstorm produced baseball-sized hail, damaging thousands of homes and vehicles. It was one of the costliest single-city hail events in Colorado history.",
  },
  windsor: {
    hailScore: 91,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "Windsor straddles the Larimer-Weld county line where open plains and the Rawhide Flats create ideal conditions for supercell development and large hail production.",
  },
  "colorado-springs": {
    hailScore: 88,
    riskLevel: "Extreme",
    avgEventsPerYear: 7,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "August 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Colorado Springs' eastern neighborhoods sit in an active hail corridor while western areas near Pikes Peak experience intense wind. El Paso County ranks among the top 3 Colorado counties for hail claims.",
  },
  monument: {
    hailScore: 95,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.4 inches",
    funFact:
      "Monument sits atop the Palmer Divide at 6,900 feet, the geographic high point between Denver and Colorado Springs. This makes it one of the most hail-impacted towns in all of North America.",
  },
  "palmer-lake": {
    hailScore: 94,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.4 inches",
    funFact:
      "Palmer Lake sits at the very crest of the Palmer Divide where orographic lifting creates severe thunderstorms with alarming regularity during the May through August storm season.",
  },
  elizabeth: {
    hailScore: 95,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.5 inches",
    funFact:
      "Elizabeth sits at over 6,500 feet in Elbert County on the Palmer Divide, where the combination of elevation and open terrain produces some of the most severe hail events in Colorado.",
  },
  franktown: {
    hailScore: 94,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.4 inches",
    funFact:
      "Franktown's high-elevation position on the Palmer Divide in eastern Douglas County, surrounded by ranch land, means severe hail is a regular occurrence with no terrain shelter.",
  },
  "castle-pines": {
    hailScore: 92,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "Castle Pines' luxury homes sit along the Palmer Divide where high-end roofing systems face some of Colorado's most severe hail exposure. Premium materials and proper installation are essential here.",
  },

  // ── MEDIUM-HIGH RISK (HailScore 70-84) ──
  denver: {
    hailScore: 78,
    riskLevel: "High",
    avgEventsPerYear: 6,
    largestRecordedHail: "2.25 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Denver's urban heat island effect can weaken some storms, but the city still averages 6 damaging hail events per year. Eastern neighborhoods like Green Valley Ranch and Montbello see the worst of it.",
  },
  lakewood: {
    hailScore: 74,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Lakewood is Gates Enterprises' home city. Sitting at the base of the foothills in Jefferson County, the city gets less hail than the plains but more than the mountains. We've completed more projects here than anywhere else.",
  },
  arvada: {
    hailScore: 76,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Arvada sits between the foothills and the northern Denver metro, catching hail storms rolling south off the Boulder County line. The Candelas and Leyden Rock neighborhoods are especially exposed.",
  },
  "wheat-ridge": {
    hailScore: 75,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Wheat Ridge's many mid-century homes from the 1950s and 60s have seen decades of hail accumulation. Even moderate storms can push aging roofs past the point of repair.",
  },
  golden: {
    hailScore: 70,
    riskLevel: "High",
    avgEventsPerYear: 4,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "0.9 inches",
    funFact:
      "Golden sits at the mouth of Clear Creek Canyon where the plains meet the foothills. Storms that weaken as they hit the mountains can still produce damaging hail across the Table Mountain area.",
  },
  littleton: {
    hailScore: 77,
    riskLevel: "High",
    avgEventsPerYear: 6,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.1 inches",
    funFact:
      "Littleton's established neighborhoods along the South Platte River feature mature tree canopies that can hide roof damage from hail. Professional inspections are essential after every storm season.",
  },
  englewood: {
    hailScore: 76,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Englewood is surrounded by Denver on three sides, and its dense, established neighborhoods feature many mid-century homes where roofing systems have exceeded their expected lifespan.",
  },
  sheridan: {
    hailScore: 75,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Sheridan is so compact that a single hail event can damage nearly every home in town. Many 1950s-era homes here have been through dozens of hail seasons.",
  },
  "federal-heights": {
    hailScore: 78,
    riskLevel: "High",
    avgEventsPerYear: 6,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.1 inches",
    funFact:
      "Federal Heights sits near the I-25 and US-36 interchange in Adams County where storms funneling through the northern metro regularly produce damaging hail.",
  },

  // ── MEDIUM RISK (HailScore 55-69) ──
  boulder: {
    hailScore: 65,
    riskLevel: "Moderate",
    avgEventsPerYear: 4,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "0.9 inches",
    funFact:
      "Boulder's Flatirons provide some shelter from westerly storms, but the city is vulnerable to Chinook windstorms that can exceed 100 mph and tear shingles off roofs even without hail.",
  },
  louisville: {
    hailScore: 63,
    riskLevel: "Moderate",
    avgEventsPerYear: 4,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "0.9 inches",
    funFact:
      "Louisville's mix of historic downtown homes and newer developments creates diverse roofing needs. The Marshall Fire in December 2021 also reminded residents of the importance of fire-rated roofing materials.",
  },
  lafayette: {
    hailScore: 66,
    riskLevel: "Moderate",
    avgEventsPerYear: 5,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "0.9 inches",
    funFact:
      "Lafayette sits along the US-287 corridor where open agricultural land to the east provides no buffer against hail storms pushing west across the plains.",
  },
  superior: {
    hailScore: 62,
    riskLevel: "Moderate",
    avgEventsPerYear: 4,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "0.9 inches",
    funFact:
      "Superior sits on an elevated mesa between Denver and Boulder along US-36. The December 2021 Marshall Fire destroyed hundreds of homes, making fire-rated roofing a top priority alongside hail resistance.",
  },
  "lone-tree": {
    hailScore: 68,
    riskLevel: "Moderate",
    avgEventsPerYear: 5,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Lone Tree sits in northern Douglas County along the Park Meadows corridor, close enough to the Palmer Divide to catch the edge of its most severe storms.",
  },
  morrison: {
    hailScore: 55,
    riskLevel: "Moderate",
    avgEventsPerYear: 3,
    largestRecordedHail: "1.5 inches",
    lastMajorEvent: "July 2022",
    avgHailSize: "0.8 inches",
    funFact:
      "Morrison is home to Red Rocks Amphitheatre and sits at the mouth of Bear Creek Canyon. While hail is less frequent here, extreme wind events from canyon channeling can damage roofs year-round.",
  },

  // ── LOWER RISK (HailScore 40-54) ──
  evergreen: {
    hailScore: 48,
    riskLevel: "Low",
    avgEventsPerYear: 2,
    largestRecordedHail: "1.25 inches",
    lastMajorEvent: "August 2022",
    avgHailSize: "0.7 inches",
    funFact:
      "Evergreen's 7,200-foot elevation in Bear Creek Canyon means less hail but more UV damage, heavy snow loads, and ice dams. Roofs here age differently than on the plains.",
  },
  conifer: {
    hailScore: 44,
    riskLevel: "Low",
    avgEventsPerYear: 2,
    largestRecordedHail: "1.0 inches",
    lastMajorEvent: "July 2022",
    avgHailSize: "0.6 inches",
    funFact:
      "At 8,200 feet, Conifer's biggest roofing threats are heavy snow (100+ inches annually), extreme UV that accelerates shingle degradation, and wildfire risk rather than hail.",
  },
  bailey: {
    hailScore: 42,
    riskLevel: "Low",
    avgEventsPerYear: 2,
    largestRecordedHail: "1.0 inches",
    lastMajorEvent: "July 2022",
    avgHailSize: "0.6 inches",
    funFact:
      "Bailey's 7,700-foot elevation along US-285 means snow and wildfire are bigger concerns than hail. Fire-rated roofing materials are strongly recommended for all mountain properties here.",
  },
  "idaho-springs": {
    hailScore: 40,
    riskLevel: "Low",
    avgEventsPerYear: 1,
    largestRecordedHail: "1.0 inches",
    lastMajorEvent: "August 2021",
    avgHailSize: "0.5 inches",
    funFact:
      "Idaho Springs sits in a narrow canyon at 7,500 feet on I-70. The canyon walls provide natural hail protection, but extreme mountain weather, ice dams, and heavy snow are constant roofing challenges.",
  },

  // ── ADDITIONAL CITIES ──
  henderson: {
    hailScore: 91,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "Henderson's rapid growth on former farmland in northeast Adams County puts new homes directly in the path of intense spring and summer hailstorms.",
  },
  edgewater: {
    hailScore: 74,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Edgewater is so small that a single hail event can damage nearly every roof in town. With just 5,500 residents surrounded by Lakewood and Wheat Ridge, the entire city shares the same storm exposure.",
  },
  "greenwood-village": {
    hailScore: 72,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Greenwood Village's high-value properties in the Denver Tech Center area feature premium roofing materials that require manufacturer-certified contractors for proper warranty coverage.",
  },
  "cherry-hills-village": {
    hailScore: 72,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Cherry Hills Village is Colorado's most exclusive residential community. Estates with complex roof systems and premium materials need manufacturer-certified contractors to maintain warranty coverage.",
  },
  columbine: {
    hailScore: 71,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Columbine's mix of 1970s-era and newer homes in southwest Jefferson County means a wide range of roofing conditions. Older homes often need complete system upgrades after hail damage.",
  },
  "ken-caryl": {
    hailScore: 68,
    riskLevel: "Moderate",
    avgEventsPerYear: 4,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "0.9 inches",
    funFact:
      "Ken Caryl nestles against the foothills in southern Jefferson County, getting some mountain shelter but still catching storms that develop along the hogback ridgeline.",
  },
  "mountain-view": {
    hailScore: 70,
    riskLevel: "High",
    avgEventsPerYear: 4,
    largestRecordedHail: "1.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "0.9 inches",
    funFact:
      "Mountain View sits between Lakewood and Golden where residential areas transition into the foothills, facing both plains hail and mountain wind patterns.",
  },
  evans: {
    hailScore: 92,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "August 2023",
    avgHailSize: "1.4 inches",
    funFact:
      "Evans sits adjacent to Greeley in Weld County, sharing the same extreme hail exposure. Affordable housing here means many homeowners rely on insurance restoration after major storms.",
  },
  johnstown: {
    hailScore: 90,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "Johnstown's explosive residential growth along I-25 between Loveland and Longmont is putting new subdivisions on former farmland with wide-open hail exposure.",
  },
  dacono: {
    hailScore: 89,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.25 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Dacono's rapid growth on flat, exposed terrain in Weld County makes hail damage a near-certainty within the first few years of homeownership.",
  },
  lochbuie: {
    hailScore: 91,
    riskLevel: "Extreme",
    avgEventsPerYear: 8,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "1.3 inches",
    funFact:
      "Lochbuie's open agricultural surroundings in southwestern Weld County provide no shelter from severe thunderstorms, leading to frequent and intense hail events.",
  },
  bennett: {
    hailScore: 93,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.4 inches",
    funFact:
      "Bennett's position on the wide-open eastern plains of Adams County along I-70 creates conditions for severe supercell thunderstorms with damaging hail.",
  },
  strasburg: {
    hailScore: 93,
    riskLevel: "Extreme",
    avgEventsPerYear: 9,
    largestRecordedHail: "2.75 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.4 inches",
    funFact:
      "Strasburg sits on the open eastern plains where no urban features weaken approaching storms. Homes here face the rawest hail exposure on the entire Front Range.",
  },
  sedalia: {
    hailScore: 72,
    riskLevel: "High",
    avgEventsPerYear: 5,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "1.0 inches",
    funFact:
      "Sedalia sits where the foothills meet the Palmer Divide in western Douglas County, creating unpredictable storm patterns with hail arriving from unexpected directions.",
  },
  fountain: {
    hailScore: 87,
    riskLevel: "Extreme",
    avgEventsPerYear: 7,
    largestRecordedHail: "2.5 inches",
    lastMajorEvent: "August 2023",
    avgHailSize: "1.2 inches",
    funFact:
      "Fountain's location south of Colorado Springs near Fort Carson puts it in the path of storms tracking north along the Front Range. Military families stationed nearby face frequent hail damage.",
  },
  "manitou-springs": {
    hailScore: 58,
    riskLevel: "Moderate",
    avgEventsPerYear: 3,
    largestRecordedHail: "1.5 inches",
    lastMajorEvent: "August 2022",
    avgHailSize: "0.8 inches",
    funFact:
      "Manitou Springs' nestled position at the base of Pikes Peak provides natural hail shelter, but steep terrain and mountain weather patterns create unique challenges for roofers.",
  },
  pueblo: {
    hailScore: 65,
    riskLevel: "Moderate",
    avgEventsPerYear: 4,
    largestRecordedHail: "2.0 inches",
    lastMajorEvent: "July 2023",
    avgHailSize: "0.9 inches",
    funFact:
      "Pueblo is Colorado's southern Front Range anchor along the Arkansas River. Hot summers and storms moving off the Wet Mountains create unique hail patterns different from the Denver metro.",
  },
  nederland: {
    hailScore: 42,
    riskLevel: "Low",
    avgEventsPerYear: 1,
    largestRecordedHail: "1.0 inches",
    lastMajorEvent: "August 2021",
    avgHailSize: "0.5 inches",
    funFact:
      "At 8,200 feet in Boulder County, Nederland's biggest roofing challenges are extreme snow loads, UV degradation at altitude, and wildfire risk rather than hail.",
  },
  lyons: {
    hailScore: 60,
    riskLevel: "Moderate",
    avgEventsPerYear: 3,
    largestRecordedHail: "1.5 inches",
    lastMajorEvent: "June 2023",
    avgHailSize: "0.8 inches",
    funFact:
      "Lyons sits at the confluence of the North and South St. Vrain Creeks. After the devastating 2013 floods, resilient building practices and proper roof drainage are especially valued here.",
  },
  georgetown: {
    hailScore: 40,
    riskLevel: "Low",
    avgEventsPerYear: 1,
    largestRecordedHail: "0.75 inches",
    lastMajorEvent: "July 2021",
    avgHailSize: "0.5 inches",
    funFact:
      "Georgetown's Victorian-era buildings at 8,500 feet face extreme mountain weather. Historic preservation requirements make roofing work technically demanding, but hail is rarely the primary concern.",
  },
};

// Helper to get HailScore data by city slug
export function getHailScore(citySlug: string): HailScoreData | undefined {
  return hailScoreData[citySlug];
}

// Get color for risk level
export function getRiskColor(riskLevel: HailScoreData["riskLevel"]): string {
  switch (riskLevel) {
    case "Extreme":
      return "#DC2626";
    case "High":
      return "#EA580C";
    case "Moderate":
      return "#CA8A04";
    case "Low":
      return "#16A34A";
  }
}

// Get background color for risk level (lighter)
export function getRiskBgColor(riskLevel: HailScoreData["riskLevel"]): string {
  switch (riskLevel) {
    case "Extreme":
      return "#FEF2F2";
    case "High":
      return "#FFF7ED";
    case "Moderate":
      return "#FEFCE8";
    case "Low":
      return "#F0FDF4";
  }
}

// Get service-specific recommendation based on hail score
export function getServiceRecommendation(
  serviceSlug: string,
  cityName: string,
  hailScore: number
): string {
  if (hailScore >= 85) {
    const recs: Record<string, string> = {
      "roof-replacement": `With a HailScore of ${hailScore}/100, ${cityName} homeowners should strongly consider impact-resistant Class 4 shingles that qualify for insurance premium discounts.`,
      "storm-hail-damage": `With a HailScore of ${hailScore}/100, ${cityName} homeowners should schedule a free inspection after every major storm and keep their insurance documentation current.`,
      "roof-repair": `With a HailScore of ${hailScore}/100, ${cityName} homeowners should get annual inspections to catch hail damage early, before small issues become expensive problems.`,
      siding: `With a HailScore of ${hailScore}/100, ${cityName} homeowners should choose hail-resistant siding materials like James Hardie fiber cement that can withstand repeated impacts.`,
      gutters: `With a HailScore of ${hailScore}/100, ${cityName} homeowners should expect gutter damage after major storms and include gutters in every insurance damage assessment.`,
      "roof-inspection": `With a HailScore of ${hailScore}/100, ${cityName} homeowners should get inspected at least once per year and after every significant hail event.`,
      "insurance-claims": `With a HailScore of ${hailScore}/100, ${cityName} homeowners file more roof insurance claims than most Colorado communities. Having an experienced restoration contractor is essential.`,
      "metal-roofing": `With a HailScore of ${hailScore}/100, ${cityName} homeowners should seriously consider metal roofing for maximum hail protection and long-term cost savings.`,
    };
    return recs[serviceSlug] || `With a HailScore of ${hailScore}/100, ${cityName} homeowners should prioritize storm-resistant materials and regular professional inspections.`;
  } else if (hailScore >= 70) {
    return `With a HailScore of ${hailScore}/100, ${cityName} sees significant hail activity. Regular inspections and quality materials are your best defense.`;
  } else if (hailScore >= 55) {
    return `With a HailScore of ${hailScore}/100, ${cityName} experiences moderate hail risk. Annual inspections help catch damage before it leads to costly repairs.`;
  } else {
    return `With a HailScore of ${hailScore}/100, ${cityName} has lower hail risk, but mountain weather brings unique challenges like heavy snow, ice dams, and extreme UV exposure.`;
  }
}

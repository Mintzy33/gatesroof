// Neighborhood data for service x neighborhood programmatic SEO pages
// Gates Enterprises - Colorado Front Range
// ~111 neighborhoods across 9 major cities = ~888 new pages (111 x 8 services)

export interface NeighborhoodData {
  slug: string;
  name: string;
  parentCity: string;       // matches city slug in service-areas-data.ts
  parentCityName: string;
  description: string;
  housingAge: string;
  commonRoofTypes: string;
  avgHomeValue: string;
  population: string;
  uniqueFact: string;
}

// ---------------------------------------------------------------------------
// DENVER (40 neighborhoods)
// ---------------------------------------------------------------------------
const denverNeighborhoods: NeighborhoodData[] = [
  {
    slug: "capitol-hill",
    name: "Capitol Hill",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "One of Denver's most densely populated neighborhoods, Capitol Hill is known for its historic apartment buildings, Victorian homes, and vibrant nightlife along Colfax Avenue and Broadway.",
    housingAge: "1900s-1960s",
    commonRoofTypes: "Flat roofs, asphalt shingles, some original slate and tile",
    avgHomeValue: "$450,000-$650,000",
    population: "~17,000",
    uniqueFact: "Capitol Hill has one of the highest concentrations of historic homes in Denver, many with original slate and tile roofs over 80 years old that require specialized repair techniques."
  },
  {
    slug: "highland",
    name: "Highland/LoHi",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Highland and its sub-neighborhood LoHi (Lower Highland) have transformed from a working-class Italian neighborhood into one of Denver's most desirable areas, with a mix of renovated Victorian homes and modern new builds.",
    housingAge: "1890s-1920s (historic), 2010s-present (new builds)",
    commonRoofTypes: "Asphalt shingles, flat membrane roofs on modern homes, some standing seam metal",
    avgHomeValue: "$600,000-$1,200,000",
    population: "~12,000",
    uniqueFact: "LoHi's rapid development means many homes have brand-new roofing systems sitting next to 100-year-old originals, creating a unique mix of roofing needs on the same block."
  },
  {
    slug: "central-park",
    name: "Stapleton/Central Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Built on the former Stapleton International Airport site, Central Park is Denver's largest master-planned community with thousands of newer homes, parks, and family-friendly amenities.",
    housingAge: "2000s-present",
    commonRoofTypes: "Asphalt architectural shingles, some composite tile",
    avgHomeValue: "$550,000-$850,000",
    population: "~35,000",
    uniqueFact: "Central Park's homes were all built after 2000, but many original roofs from the early phases are now 20+ years old and reaching the end of their warranty period."
  },
  {
    slug: "washington-park",
    name: "Washington Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Wash Park is one of Denver's most established and desirable neighborhoods, centered around the 165-acre Washington Park with its lakes, gardens, and recreation facilities.",
    housingAge: "1900s-1950s",
    commonRoofTypes: "Asphalt shingles, wood shake, some slate on historic homes",
    avgHomeValue: "$700,000-$1,500,000",
    population: "~8,000",
    uniqueFact: "Washington Park's tree-lined streets create heavy shade that promotes moss and algae growth on roofs, a common maintenance issue unique to this neighborhood."
  },
  {
    slug: "cherry-creek",
    name: "Cherry Creek",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Cherry Creek is Denver's premier shopping and dining destination, featuring upscale homes, luxury condominiums, and the Cherry Creek Shopping Center.",
    housingAge: "1950s-1980s (original), 2000s-present (rebuilds)",
    commonRoofTypes: "Designer asphalt shingles, concrete tile, some slate, flat membrane on condos",
    avgHomeValue: "$800,000-$2,000,000",
    population: "~6,000",
    uniqueFact: "Cherry Creek's high home values mean homeowners often choose premium roofing materials like designer shingles and concrete tile to match the neighborhood's upscale aesthetic."
  },
  {
    slug: "rino",
    name: "RiNo/Five Points",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "The River North Art District (RiNo) and adjacent Five Points have transformed from industrial and historically African American neighborhoods into Denver's creative hub, packed with breweries, galleries, and converted lofts.",
    housingAge: "1900s-1940s (historic), 2015s-present (new construction)",
    commonRoofTypes: "Flat commercial roofs, TPO membrane, asphalt shingles on residential",
    avgHomeValue: "$500,000-$900,000",
    population: "~10,000",
    uniqueFact: "RiNo's converted warehouse buildings often have flat commercial roofing systems that require different maintenance and repair approaches than standard residential roofs."
  },
  {
    slug: "congress-park",
    name: "Congress Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Congress Park is a quiet, tree-lined residential neighborhood east of downtown Denver, popular with families and known for its well-maintained Craftsman bungalows and Denver Squares.",
    housingAge: "1900s-1940s",
    commonRoofTypes: "Asphalt shingles, some wood shake on bungalows",
    avgHomeValue: "$600,000-$950,000",
    population: "~10,000",
    uniqueFact: "Congress Park's Craftsman-era homes feature characteristic wide eaves and exposed rafter tails that need regular inspection to prevent water damage and rot."
  },
  {
    slug: "park-hill",
    name: "Park Hill",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Park Hill stretches from City Park to the eastern edge of Denver, encompassing diverse sub-neighborhoods from the historic South Park Hill mansions to the bungalows of North Park Hill.",
    housingAge: "1920s-1960s",
    commonRoofTypes: "Asphalt shingles, wood shake on older homes",
    avgHomeValue: "$500,000-$900,000",
    population: "~30,000",
    uniqueFact: "Park Hill's large mature elm and oak trees frequently drop branches during storms, causing more direct roof impact damage than most Denver neighborhoods."
  },
  {
    slug: "montbello",
    name: "Montbello",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Montbello is a large residential neighborhood in far northeast Denver, originally developed in the 1960s-70s with ranch-style homes and split-levels on generous lots.",
    housingAge: "1960s-1980s",
    commonRoofTypes: "Asphalt three-tab shingles, some original roofs needing replacement",
    avgHomeValue: "$350,000-$475,000",
    population: "~32,000",
    uniqueFact: "Many Montbello homes still have their original 1970s-era roofs or first replacements, making this one of Denver's highest-need neighborhoods for roof replacement."
  },
  {
    slug: "green-valley-ranch",
    name: "Green Valley Ranch",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Green Valley Ranch is a master-planned community in far northeast Denver near DIA, featuring newer homes, good parks, and easy airport access.",
    housingAge: "1990s-2010s",
    commonRoofTypes: "Asphalt architectural shingles, some composite materials",
    avgHomeValue: "$400,000-$550,000",
    population: "~25,000",
    uniqueFact: "Green Valley Ranch's open, flat terrain near DIA provides zero wind protection, making homes here particularly vulnerable to wind-driven hail damage."
  },
  {
    slug: "sloans-lake",
    name: "Sloan's Lake",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Sloan's Lake is centered around Denver's largest lake, offering stunning mountain views and a mix of renovated historic homes and new luxury condos.",
    housingAge: "1900s-1940s (historic), 2015-present (condos and new builds)",
    commonRoofTypes: "Asphalt shingles, flat membrane on condos, some metal roofing",
    avgHomeValue: "$550,000-$1,100,000",
    population: "~9,000",
    uniqueFact: "Sloan's Lake's proximity to the lake creates higher humidity exposure for nearby roofs, accelerating algae growth and requiring algae-resistant shingles for long-term performance."
  },
];

// ---------------------------------------------------------------------------
// AURORA (15 neighborhoods)
// ---------------------------------------------------------------------------
const auroraNeighborhoods: NeighborhoodData[] = [
  {
    slug: "southlands",
    name: "Southlands",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Southlands is a newer community in far southeast Aurora built around the Southlands shopping center, featuring modern suburban homes and excellent amenities.",
    housingAge: "2005-present",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade materials",
    avgHomeValue: "$500,000-$750,000",
    population: "~12,000",
    uniqueFact: "Southlands sits on the eastern edge of Aurora's development, where storms approaching from the plains hit with full force before encountering any urban wind barriers."
  },
  {
    slug: "murphy-creek",
    name: "Murphy Creek",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Murphy Creek is a golf course community in east Aurora, offering a mix of single-family homes and townhomes built around the Murphy Creek Golf Course.",
    housingAge: "2000-2015",
    commonRoofTypes: "Asphalt architectural shingles, some stone-coated steel",
    avgHomeValue: "$450,000-$650,000",
    population: "~6,000",
    uniqueFact: "Murphy Creek homes built in the early 2000s used builder-grade 25-year shingles that are now at or past their expected lifespan, creating a wave of replacement demand."
  },
  {
    slug: "tallyns-reach",
    name: "Tallyn's Reach",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Tallyn's Reach is a large master-planned community in southeast Aurora with diverse home styles, pools, trails, and highly rated Cherry Creek schools.",
    housingAge: "2000-2015",
    commonRoofTypes: "Asphalt architectural shingles, some tile roofs",
    avgHomeValue: "$500,000-$750,000",
    population: "~15,000",
    uniqueFact: "Tallyn's Reach is one of Aurora's largest neighborhoods by population, and after major hail events, the demand for roofing contractors can create months-long wait times."
  },
];

// ---------------------------------------------------------------------------
// COLORADO SPRINGS (15 neighborhoods)
// ---------------------------------------------------------------------------
const coloradoSpringsNeighborhoods: NeighborhoodData[] = [
  {
    slug: "briargate",
    name: "Briargate",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Briargate is one of Colorado Springs' most popular neighborhoods in the north part of the city, featuring family-friendly subdivisions, excellent schools, and shopping along Powers Boulevard.",
    housingAge: "1990s-2010s",
    commonRoofTypes: "Asphalt architectural shingles, some concrete tile",
    avgHomeValue: "$450,000-$650,000",
    population: "~25,000",
    uniqueFact: "Briargate's position in northern Colorado Springs places it in the direct path of storms moving south along the Front Range, making it one of the city's most hail-prone areas."
  },
  {
    slug: "broadmoor",
    name: "Broadmoor",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "The Broadmoor area is Colorado Springs' most prestigious neighborhood, centered around the iconic Broadmoor Hotel, with luxury homes and stunning Cheyenne Mountain views.",
    housingAge: "1920s-1970s (original), 2000s (newer sections)",
    commonRoofTypes: "Cedar shake, slate, designer asphalt, concrete tile",
    avgHomeValue: "$800,000-$3,000,000",
    population: "~4,000",
    uniqueFact: "Broadmoor homeowners frequently choose premium roofing materials like genuine slate and cedar shake to match the neighborhood's luxury character, with some homes requiring $50,000+ roof installations."
  },
];

// ---------------------------------------------------------------------------
// LAKEWOOD (10 neighborhoods)
// ---------------------------------------------------------------------------
const lakewoodNeighborhoods: NeighborhoodData[] = [
  {
    slug: "green-mountain",
    name: "Green Mountain",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "Green Mountain is an elevated Lakewood neighborhood surrounding Green Mountain itself, offering stunning views and a mix of 1970s-90s homes.",
    housingAge: "1970s-1990s",
    commonRoofTypes: "Asphalt shingles, some wood shake, tile accents",
    avgHomeValue: "$500,000-$750,000",
    population: "~10,000",
    uniqueFact: "Green Mountain's elevation creates higher wind exposure than surrounding Lakewood neighborhoods, and the mountain terrain can channel and accelerate storm winds across rooftops."
  },
  {
    slug: "belmar",
    name: "Belmar",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "Belmar is Lakewood's urban center, built on the former Villa Italia mall site, featuring new residential, retail, and entertainment in a walkable downtown setting.",
    housingAge: "2004-present",
    commonRoofTypes: "Flat membrane on commercial, asphalt shingles on residential, some metal",
    avgHomeValue: "$400,000-$600,000",
    population: "~3,500",
    uniqueFact: "Belmar's mixed-use development includes townhomes with flat and low-slope roofs that require different materials and maintenance approaches than traditional suburban homes."
  },
  {
    slug: "applewood",
    name: "Applewood",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "Applewood is a desirable Lakewood neighborhood near the Golden border, known for its apple orchards heritage, excellent schools, and well-maintained mid-century homes.",
    housingAge: "1955-1975",
    commonRoofTypes: "Asphalt shingles, some wood shake on split-levels",
    avgHomeValue: "$550,000-$800,000",
    population: "~7,000",
    uniqueFact: "Applewood's proximity to Golden and the foothills puts it at the edge of the urban-mountain weather transition, where storm patterns can be particularly unpredictable."
  },
];

// ---------------------------------------------------------------------------
// ARVADA (8 neighborhoods)
// ---------------------------------------------------------------------------
const arvadaNeighborhoods: NeighborhoodData[] = [
  {
    slug: "olde-town-arvada",
    name: "Olde Town",
    parentCity: "arvada",
    parentCityName: "Arvada",
    description: "Olde Town Arvada is the historic heart of the city, featuring charming shops, restaurants, and homes dating back to the late 1800s along the Gold Line rail corridor.",
    housingAge: "1880s-1940s",
    commonRoofTypes: "Asphalt shingles, some original wood shake, historic materials",
    avgHomeValue: "$500,000-$800,000",
    population: "~5,000",
    uniqueFact: "Olde Town's historic designation means some roof replacements must consider local preservation guidelines, including material choices that maintain the neighborhood's character."
  },
  {
    slug: "candelas",
    name: "Candelas",
    parentCity: "arvada",
    parentCityName: "Arvada",
    description: "Candelas is an upscale master-planned community on Arvada's western edge near the Rocky Flats wildlife refuge, featuring newer homes with mountain views.",
    housingAge: "2012-present",
    commonRoofTypes: "Asphalt architectural and designer shingles, some composite tile",
    avgHomeValue: "$600,000-$1,000,000",
    population: "~7,000",
    uniqueFact: "Candelas' HOA has specific roofing material and color requirements that must be followed during replacement, making pre-approval an important step before starting any project."
  },
];

// ---------------------------------------------------------------------------
// PARKER (5 neighborhoods)
// ---------------------------------------------------------------------------
const parkerNeighborhoods: NeighborhoodData[] = [
  {
    slug: "stonegate",
    name: "Stonegate",
    parentCity: "parker",
    parentCityName: "Parker",
    description: "Stonegate is one of Parker's largest master-planned communities, featuring upscale homes, a community pool, parks, and highly rated Douglas County schools.",
    housingAge: "2000-2015",
    commonRoofTypes: "Asphalt architectural shingles, some tile, designer options",
    avgHomeValue: "$550,000-$850,000",
    population: "~10,000",
    uniqueFact: "Stonegate's Palmer Divide location gives it one of the highest HailScores in Colorado, and many homeowners here have filed multiple insurance claims in just a few years."
  },
  {
    slug: "stroh-ranch",
    name: "Stroh Ranch",
    parentCity: "parker",
    parentCityName: "Parker",
    description: "Stroh Ranch is a popular Parker community with affordable-to-mid-range homes, excellent schools, and a family-focused atmosphere along the community's trail system.",
    housingAge: "2002-2012",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade materials",
    avgHomeValue: "$475,000-$650,000",
    population: "~8,000",
    uniqueFact: "Stroh Ranch's builder-grade roofs from the mid-2000s are now 15-20 years old, hitting the point where Colorado's harsh weather often exposes material limitations."
  },
];

// ---------------------------------------------------------------------------
// CASTLE ROCK (5 neighborhoods)
// ---------------------------------------------------------------------------
const castleRockNeighborhoods: NeighborhoodData[] = [
  {
    slug: "the-meadows",
    name: "The Meadows",
    parentCity: "castle-rock",
    parentCityName: "Castle Rock",
    description: "The Meadows is Castle Rock's largest master-planned community, with a town center, pools, parks, and a wide range of home styles from townhomes to custom builds.",
    housingAge: "2003-present",
    commonRoofTypes: "Asphalt architectural shingles, some tile and designer options",
    avgHomeValue: "$500,000-$800,000",
    population: "~15,000",
    uniqueFact: "The Meadows' Palmer Divide position at 6,200 feet elevation makes it one of the most hail-damaged communities in Colorado, with major events hitting nearly every storm season."
  },
];

// ---------------------------------------------------------------------------
// HIGHLANDS RANCH (5 neighborhoods)
// ---------------------------------------------------------------------------
const highlandsRanchNeighborhoods: NeighborhoodData[] = [
  {
    slug: "backcountry",
    name: "Backcountry",
    parentCity: "highlands-ranch",
    parentCityName: "Highlands Ranch",
    description: "Backcountry is the newest and most upscale section of Highlands Ranch, featuring custom homes, a wilderness area, and the Backcountry Wilderness Area with 8,000 acres of open space.",
    housingAge: "2010-present",
    commonRoofTypes: "Designer asphalt shingles, concrete tile, some standing seam metal",
    avgHomeValue: "$800,000-$1,500,000",
    population: "~5,000",
    uniqueFact: "Backcountry's luxury homes and high property values make premium roofing materials like Class 4 designer shingles a smart investment that protects significant real estate value."
  },
];

// ---------------------------------------------------------------------------
// FORT COLLINS (8 neighborhoods)
// ---------------------------------------------------------------------------
const fortCollinsNeighborhoods: NeighborhoodData[] = [
];

// ---------------------------------------------------------------------------
// COMBINED EXPORT
// ---------------------------------------------------------------------------
export const neighborhoods: NeighborhoodData[] = [
  ...denverNeighborhoods,
  ...auroraNeighborhoods,
  ...coloradoSpringsNeighborhoods,
  ...lakewoodNeighborhoods,
  ...arvadaNeighborhoods,
  ...parkerNeighborhoods,
  ...castleRockNeighborhoods,
  ...highlandsRanchNeighborhoods,
  ...fortCollinsNeighborhoods,
];

// ---------------------------------------------------------------------------
// LOOKUP HELPERS
// ---------------------------------------------------------------------------
export function getNeighborhoodBySlug(slug: string): NeighborhoodData | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getNeighborhoodsByCity(citySlug: string): NeighborhoodData[] {
  return neighborhoods.filter((n) => n.parentCity === citySlug);
}

export function getRelatedNeighborhoods(slug: string, limit = 5): NeighborhoodData[] {
  const current = getNeighborhoodBySlug(slug);
  if (!current) return [];
  return neighborhoods
    .filter((n) => n.parentCity === current.parentCity && n.slug !== slug)
    .slice(0, limit);
}

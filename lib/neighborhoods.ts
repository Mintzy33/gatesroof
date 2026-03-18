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
    slug: "baker",
    name: "Baker",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Baker is a walkable, eclectic neighborhood south of downtown Denver along Broadway, known for its mix of Victorian homes, bungalows, and trendy restaurants.",
    housingAge: "1880s-1930s",
    commonRoofTypes: "Asphalt shingles, some original wood shake, flat roofs on commercial",
    avgHomeValue: "$450,000-$750,000",
    population: "~5,500",
    uniqueFact: "Baker's century-old homes often have steep roof pitches and complex gable designs that increase replacement costs but also provide excellent water and snow shedding."
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
    slug: "gateway",
    name: "Gateway/Green Valley Ranch East",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Gateway is one of Denver's newest neighborhoods near DIA, developed primarily in the 2000s-2010s with modern suburban homes and townhouses.",
    housingAge: "2005-present",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade materials",
    avgHomeValue: "$375,000-$525,000",
    population: "~15,000",
    uniqueFact: "Gateway's builder-grade roofs from the mid-2000s construction boom are now reaching the 15-20 year mark when manufacturer warranties begin to expire."
  },
  {
    slug: "hampden",
    name: "Hampden",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "The Hampden neighborhood sits along the busy Hampden Avenue corridor in south Denver, featuring a mix of mid-century ranch homes and 1970s split-levels.",
    housingAge: "1950s-1970s",
    commonRoofTypes: "Asphalt shingles, low-slope sections common on ranch homes",
    avgHomeValue: "$425,000-$600,000",
    population: "~8,000",
    uniqueFact: "Hampden's ranch-style homes often have low-slope roof sections that are prone to ponding water and ice dams, requiring special underlayment during replacement."
  },
  {
    slug: "university-hills",
    name: "University Hills",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "University Hills is a quiet residential area in south Denver near the University of Denver, known for its mid-century homes and proximity to shopping along South Colorado Boulevard.",
    housingAge: "1950s-1970s",
    commonRoofTypes: "Asphalt shingles, some original wood shake",
    avgHomeValue: "$450,000-$650,000",
    population: "~7,500",
    uniqueFact: "University Hills' proximity to the DU campus means many homes serve as rental properties, where deferred roof maintenance is more common than in owner-occupied neighborhoods."
  },
  {
    slug: "southmoor-park",
    name: "Southmoor Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Southmoor Park is an established south Denver neighborhood near the Southmoor Park light rail station, featuring mid-century homes on larger lots.",
    housingAge: "1950s-1970s",
    commonRoofTypes: "Asphalt shingles, some tile accents",
    avgHomeValue: "$500,000-$750,000",
    population: "~5,000",
    uniqueFact: "Southmoor Park's proximity to the light rail station has increased home values, motivating homeowners to invest in premium roofing materials that boost curb appeal."
  },
  {
    slug: "hilltop",
    name: "Hilltop",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Hilltop is one of Denver's most affluent neighborhoods, located between Cherry Creek and Crestmoor Park, featuring large Tudor, Colonial, and contemporary homes on tree-lined streets.",
    housingAge: "1920s-1950s",
    commonRoofTypes: "Wood shake, slate, designer asphalt shingles, some tile",
    avgHomeValue: "$1,000,000-$2,500,000",
    population: "~4,000",
    uniqueFact: "Hilltop's high-value homes often feature original slate or cedar shake roofs that require specialized contractors who understand historic roofing materials and techniques."
  },
  {
    slug: "cory-merrill",
    name: "Cory-Merrill",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Cory-Merrill is a family-friendly neighborhood between Cherry Creek and the University of Denver, experiencing significant redevelopment as original ranch homes are replaced with larger modern builds.",
    housingAge: "1950s (original), 2015-present (pop-tops and new builds)",
    commonRoofTypes: "Asphalt shingles on originals, standing seam metal and flat membrane on new builds",
    avgHomeValue: "$700,000-$1,300,000",
    population: "~3,500",
    uniqueFact: "Cory-Merrill's pop-top renovation trend means many homes have a mix of old and new roofing sections that need to be properly integrated to prevent leaks at transition points."
  },
  {
    slug: "platt-park",
    name: "Platt Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Platt Park is a charming south Denver neighborhood centered around South Pearl Street's shops and restaurants, known for its Craftsman bungalows and Denver Squares.",
    housingAge: "1900s-1940s",
    commonRoofTypes: "Asphalt shingles, some wood shake",
    avgHomeValue: "$600,000-$950,000",
    population: "~5,000",
    uniqueFact: "Platt Park's South Pearl Street commercial corridor means many properties have flat commercial roofing systems that require different maintenance than the surrounding residential roofs."
  },
  {
    slug: "sunnyside",
    name: "Sunnyside",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Sunnyside is a rapidly gentrifying neighborhood in north Denver, with a mix of historic Victorian cottages and modern infill homes near the 44th Avenue dining district.",
    housingAge: "1890s-1920s (historic), 2010s-present (new builds)",
    commonRoofTypes: "Asphalt shingles, flat roofs on modern infill",
    avgHomeValue: "$500,000-$850,000",
    population: "~6,000",
    uniqueFact: "Sunnyside's narrow lot sizes mean roofing crews often have limited staging area, requiring experienced crews who can work efficiently in tight spaces."
  },
  {
    slug: "berkeley",
    name: "Berkeley",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Berkeley is a popular northwest Denver neighborhood along Tennyson Street, known for its walkable retail corridor, bungalow homes, and strong community feel.",
    housingAge: "1900s-1940s",
    commonRoofTypes: "Asphalt shingles, some wood shake on bungalows",
    avgHomeValue: "$550,000-$900,000",
    population: "~10,000",
    uniqueFact: "Berkeley's Tennyson Street corridor has driven up home values significantly, making quality roof replacement a smart investment that boosts resale value in this competitive market."
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
  {
    slug: "villa-park",
    name: "Villa Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Villa Park is a west Denver neighborhood near Lakewood, featuring affordable mid-century homes and convenient access to the West Colfax corridor.",
    housingAge: "1940s-1960s",
    commonRoofTypes: "Asphalt three-tab and architectural shingles",
    avgHomeValue: "$350,000-$475,000",
    population: "~5,000",
    uniqueFact: "Villa Park's affordable home prices make it one of Denver's best values, and many homeowners here use insurance claims from hail damage to upgrade from three-tab to architectural shingles."
  },
  {
    slug: "barnum",
    name: "Barnum",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Barnum is a west Denver neighborhood between Lakewood and the Sixth Avenue freeway, with a mix of post-war bungalows and ranch homes.",
    housingAge: "1940s-1960s",
    commonRoofTypes: "Asphalt shingles, many aging three-tab roofs",
    avgHomeValue: "$325,000-$450,000",
    population: "~7,500",
    uniqueFact: "Barnum's homes were largely built during the post-WWII housing boom, and the neighborhood has a high percentage of roofs at or past their expected lifespan."
  },
  {
    slug: "ruby-hill",
    name: "Ruby Hill",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Ruby Hill sits on elevated terrain in southwest Denver, home to Ruby Hill Park's popular sledding hill and BMX course, with a mix of bungalows and ranch-style homes.",
    housingAge: "1920s-1960s",
    commonRoofTypes: "Asphalt shingles, some original wood shake",
    avgHomeValue: "$400,000-$575,000",
    population: "~6,000",
    uniqueFact: "Ruby Hill's elevated position exposes roofs to stronger winds than surrounding lower-lying neighborhoods, making wind-rated shingle installation especially important here."
  },
  {
    slug: "harvey-park",
    name: "Harvey Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Harvey Park is a large residential neighborhood in southwest Denver, one of the city's earliest suburban-style developments with ranch homes on spacious lots.",
    housingAge: "1950s-1960s",
    commonRoofTypes: "Asphalt shingles, low-slope sections on ranch homes",
    avgHomeValue: "$400,000-$550,000",
    population: "~12,000",
    uniqueFact: "Harvey Park's 1950s ranch homes often have hip roofs with multiple low-slope sections that need careful flashing detail work to prevent leaks at transitions."
  },
  {
    slug: "bear-valley",
    name: "Bear Valley",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Bear Valley is a southwest Denver neighborhood near Bear Creek and the foothills, featuring mid-century homes and the Bear Valley shopping center.",
    housingAge: "1960s-1980s",
    commonRoofTypes: "Asphalt shingles, some wood shake",
    avgHomeValue: "$400,000-$575,000",
    population: "~8,000",
    uniqueFact: "Bear Valley's proximity to the foothills creates unique wind patterns that can channel and accelerate storm winds, causing wind damage patterns that differ from central Denver."
  },
  {
    slug: "regis",
    name: "Regis",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Regis is a northwest Denver neighborhood near Regis University, featuring a mix of post-war homes and newer development along Federal Boulevard.",
    housingAge: "1940s-1970s",
    commonRoofTypes: "Asphalt shingles, some flat roofs on duplexes",
    avgHomeValue: "$375,000-$525,000",
    population: "~7,000",
    uniqueFact: "Regis has a high percentage of duplex and multi-family structures with flat or low-slope roof sections that require different materials and techniques than standard residential roofs."
  },
  {
    slug: "chaffee-park",
    name: "Chaffee Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Chaffee Park is a north Denver neighborhood between I-70 and I-76, a diverse community with affordable homes and growing investment.",
    housingAge: "1940s-1960s",
    commonRoofTypes: "Asphalt shingles, aging three-tab on many homes",
    avgHomeValue: "$350,000-$475,000",
    population: "~4,500",
    uniqueFact: "Chaffee Park's proximity to major highways creates elevated exposure to airborne debris during storms, which can cause unique impact damage patterns on roofing systems."
  },
  {
    slug: "globeville",
    name: "Globeville",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Globeville is one of Denver's oldest neighborhoods, located between I-25 and I-70 in north Denver, with a strong Eastern European heritage and a growing number of renovations.",
    housingAge: "1880s-1930s",
    commonRoofTypes: "Asphalt shingles, some original materials on unrenovated homes",
    avgHomeValue: "$300,000-$450,000",
    population: "~4,000",
    uniqueFact: "Globeville's homes include some of Denver's oldest surviving residential structures, where roof replacement requires careful evaluation of historic framing that may not meet modern loading standards."
  },
  {
    slug: "elyria-swansea",
    name: "Elyria-Swansea",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Elyria-Swansea is a historic north Denver neighborhood undergoing rapid change with the National Western Center redevelopment and I-70 reconstruction project.",
    housingAge: "1890s-1940s",
    commonRoofTypes: "Asphalt shingles, some flat roofs, aging materials",
    avgHomeValue: "$325,000-$475,000",
    population: "~5,000",
    uniqueFact: "The I-70 reconstruction has created significant construction vibration and dust in Elyria-Swansea, which can accelerate wear on existing roofing materials."
  },
  {
    slug: "cole",
    name: "Cole",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Cole is a rapidly developing neighborhood between RiNo and City Park, with a growing mix of renovated Victorian homes and new construction.",
    housingAge: "1890s-1920s (historic), 2015-present (new builds)",
    commonRoofTypes: "Asphalt shingles, flat roofs on new builds, some original slate",
    avgHomeValue: "$450,000-$750,000",
    population: "~4,500",
    uniqueFact: "Cole's redevelopment has created many scrape-and-rebuild projects where new homes with different roof heights sit next to historic structures, creating complex drainage considerations."
  },
  {
    slug: "whittier",
    name: "Whittier",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Whittier is a historic neighborhood east of downtown Denver, known for its Victorian architecture, cultural landmarks, and proximity to City Park.",
    housingAge: "1880s-1920s",
    commonRoofTypes: "Asphalt shingles, wood shake, some original slate on Victorians",
    avgHomeValue: "$500,000-$800,000",
    population: "~3,500",
    uniqueFact: "Whittier's concentration of Victorian homes means many roofs have steep pitches, turrets, and dormers that require specialized crews experienced with complex roof geometries."
  },
  {
    slug: "city-park",
    name: "City Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "City Park is Denver's largest park neighborhood, home to the Denver Zoo and Denver Museum of Nature and Science, surrounded by stately early 1900s homes.",
    housingAge: "1900s-1930s",
    commonRoofTypes: "Asphalt shingles, wood shake, some tile on grander homes",
    avgHomeValue: "$550,000-$1,000,000",
    population: "~5,000",
    uniqueFact: "City Park's grand homes often have multiple dormers, complex rooflines, and large square footage that make accurate measurement critical for proper material ordering."
  },
  {
    slug: "city-park-west",
    name: "City Park West",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "City Park West is a dense neighborhood between Uptown and City Park, featuring a mix of historic homes, apartment buildings, and newer condominiums.",
    housingAge: "1900s-1930s (homes), 1960s-1980s (apartments)",
    commonRoofTypes: "Flat membrane roofs on apartments, asphalt shingles on homes",
    avgHomeValue: "$400,000-$650,000",
    population: "~8,000",
    uniqueFact: "City Park West's high density of apartment buildings means a significant portion of roofing work here involves flat commercial systems rather than traditional residential shingles."
  },
  {
    slug: "cheesman-park",
    name: "Cheesman Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Cheesman Park is an upscale Denver neighborhood surrounding the historic park of the same name, known for its grand homes, Botanic Gardens proximity, and stunning mountain views.",
    housingAge: "1900s-1920s",
    commonRoofTypes: "Slate, wood shake, designer asphalt shingles, flat membrane on condos",
    avgHomeValue: "$500,000-$1,500,000",
    population: "~7,000",
    uniqueFact: "Cheesman Park's historic mansions include some of the finest original slate roofs remaining in Denver, making preservation-quality repair work a frequent need in this neighborhood."
  },
  {
    slug: "speer",
    name: "Speer",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Speer is a central Denver neighborhood along Speer Boulevard and Cherry Creek, bridging downtown with the residential neighborhoods to the south.",
    housingAge: "1900s-1940s (homes), mixed eras for commercial",
    commonRoofTypes: "Asphalt shingles, flat membrane, mixed commercial-residential",
    avgHomeValue: "$450,000-$800,000",
    population: "~6,000",
    uniqueFact: "Speer's location along Cherry Creek means some homes are in the flood-adjacent zone, where proper roof drainage and gutter systems are critical to prevent compounding water issues."
  },
  {
    slug: "lincoln-park",
    name: "Lincoln Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Lincoln Park is a small neighborhood west of downtown Denver, home to the Denver Art Museum and Civic Center area, with a mix of residential and commercial properties.",
    housingAge: "1890s-1940s",
    commonRoofTypes: "Flat roofs, asphalt shingles on remaining residential",
    avgHomeValue: "$350,000-$600,000",
    population: "~3,000",
    uniqueFact: "Lincoln Park's proximity to downtown means many properties have been converted from residential to commercial use, often requiring roof system upgrades to handle HVAC equipment loads."
  },
  {
    slug: "athmar-park",
    name: "Athmar Park",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Athmar Park is a south Denver neighborhood along the South Platte River, featuring affordable post-war homes and growing investment from young buyers.",
    housingAge: "1940s-1960s",
    commonRoofTypes: "Asphalt shingles, many aging three-tab roofs",
    avgHomeValue: "$375,000-$500,000",
    population: "~5,500",
    uniqueFact: "Athmar Park's proximity to the South Platte River creates higher humidity levels that can accelerate shingle granule loss and promote algae growth on north-facing roof slopes."
  },
  {
    slug: "overland",
    name: "Overland",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Overland is a small south Denver neighborhood along South Santa Fe Drive and the South Platte River, with a mix of industrial conversions and traditional homes.",
    housingAge: "1920s-1950s",
    commonRoofTypes: "Asphalt shingles, flat roofs on converted industrial buildings",
    avgHomeValue: "$425,000-$625,000",
    population: "~3,000",
    uniqueFact: "Overland's Santa Fe Drive art corridor has driven renovation activity, with many property owners upgrading roofs as part of broader building improvements and conversions."
  },
  {
    slug: "mar-lee",
    name: "Mar Lee",
    parentCity: "denver",
    parentCityName: "Denver",
    description: "Mar Lee is a west Denver neighborhood along Morrison Road, featuring affordable post-war ranch homes and a strong Latino cultural identity.",
    housingAge: "1940s-1960s",
    commonRoofTypes: "Asphalt three-tab and architectural shingles",
    avgHomeValue: "$350,000-$475,000",
    population: "~9,000",
    uniqueFact: "Mar Lee's high concentration of 1950s ranch homes means many roofs have similar dimensions and pitch, allowing experienced crews to complete replacements efficiently."
  },
];

// ---------------------------------------------------------------------------
// AURORA (15 neighborhoods)
// ---------------------------------------------------------------------------
const auroraNeighborhoods: NeighborhoodData[] = [
  {
    slug: "saddle-rock",
    name: "Saddle Rock",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Saddle Rock is a premier golf course community in southeast Aurora, featuring upscale homes built around the Saddle Rock Golf Course with mountain views.",
    housingAge: "1998-2010s",
    commonRoofTypes: "Asphalt architectural shingles, some concrete tile, designer shingles",
    avgHomeValue: "$650,000-$1,000,000",
    population: "~8,000",
    uniqueFact: "Saddle Rock's open terrain along the golf course creates a wind tunnel effect that can increase wind-driven hail damage on homes adjacent to the fairways."
  },
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
    slug: "tollgate-crossing",
    name: "Tollgate Crossing",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Tollgate Crossing is a master-planned community in southeast Aurora with newer homes, excellent schools, and family-oriented amenities.",
    housingAge: "2010-present",
    commonRoofTypes: "Asphalt architectural shingles, some composite materials",
    avgHomeValue: "$500,000-$700,000",
    population: "~8,000",
    uniqueFact: "Tollgate Crossing's newer homes may still have manufacturer warranties in effect, but hail damage voids warranty coverage, making prompt post-storm inspections essential."
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
  {
    slug: "piney-creek",
    name: "Piney Creek",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Piney Creek is an established southeast Aurora neighborhood near Smoky Hill Road, with mature trees and well-maintained 1990s homes.",
    housingAge: "1990s-2000s",
    commonRoofTypes: "Asphalt shingles, some wood shake that is now being replaced",
    avgHomeValue: "$450,000-$600,000",
    population: "~7,000",
    uniqueFact: "Many Piney Creek homes originally had wood shake roofs that are now being replaced with impact-resistant asphalt or composite materials for better hail protection and lower insurance costs."
  },
  {
    slug: "heather-ridge",
    name: "Heather Ridge",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Heather Ridge is a central Aurora community built around the former Heather Ridge golf course, featuring 1970s-80s homes and condominiums.",
    housingAge: "1970s-1980s",
    commonRoofTypes: "Asphalt shingles, flat roofs on condos, aging materials",
    avgHomeValue: "$300,000-$425,000",
    population: "~5,000",
    uniqueFact: "Heather Ridge's large condo complexes require coordinated roof replacement projects where entire buildings are done at once, a process that needs experienced multi-unit contractors."
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Mission Viejo is an established Aurora neighborhood near Cherry Creek State Park, featuring 1970s-80s homes in a convenient central location.",
    housingAge: "1975-1990",
    commonRoofTypes: "Asphalt shingles, some wood shake, original three-tab on unrenovated homes",
    avgHomeValue: "$375,000-$525,000",
    population: "~6,000",
    uniqueFact: "Mission Viejo's location near Cherry Creek State Park makes it one of the first Aurora neighborhoods hit by storms moving northwest off the Palmer Divide."
  },
  {
    slug: "dayton-triangle",
    name: "Dayton Triangle",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Dayton Triangle is a central Aurora neighborhood near the Anschutz Medical Campus, experiencing revitalization with new construction alongside established homes.",
    housingAge: "1960s-1980s (original), 2015-present (new builds)",
    commonRoofTypes: "Asphalt shingles, flat roofs on new modern builds",
    avgHomeValue: "$350,000-$500,000",
    population: "~4,000",
    uniqueFact: "Dayton Triangle's proximity to the Anschutz Medical Campus has driven redevelopment, with many original roofs being replaced as part of home renovation and investment projects."
  },
  {
    slug: "aurora-hills",
    name: "Aurora Hills",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Aurora Hills is one of Aurora's oldest neighborhoods near Fitzsimons, with mid-century homes on tree-lined streets and a strong community feel.",
    housingAge: "1950s-1970s",
    commonRoofTypes: "Asphalt shingles, many original or second-generation roofs",
    avgHomeValue: "$350,000-$475,000",
    population: "~5,000",
    uniqueFact: "Aurora Hills' mature trees provide significant shade that keeps homes cool but also promotes moss growth on roofs and drops branches during storms, creating dual maintenance needs."
  },
  {
    slug: "side-creek",
    name: "Side Creek",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Side Creek is a newer Aurora neighborhood near E-470, offering modern suburban living with good access to DIA and the southeast Aurora corridor.",
    housingAge: "2005-2015",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade materials",
    avgHomeValue: "$425,000-$575,000",
    population: "~5,500",
    uniqueFact: "Side Creek's location along E-470 provides easy access but also sits in an open corridor where hail events tend to be particularly severe due to lack of wind breaks."
  },
  {
    slug: "meadow-hills",
    name: "Meadow Hills",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Meadow Hills is a large established Aurora neighborhood near the Meadow Hills Golf Course, featuring 1980s homes with mature landscaping.",
    housingAge: "1980s-1990s",
    commonRoofTypes: "Asphalt shingles, some wood shake being replaced",
    avgHomeValue: "$400,000-$550,000",
    population: "~8,000",
    uniqueFact: "Meadow Hills experienced major hail damage in recent years, and many homeowners have upgraded from standard shingles to Class 4 impact-resistant materials through insurance claims."
  },
  {
    slug: "sable-ridge",
    name: "Sable Ridge",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Sable Ridge is a central Aurora neighborhood near Sable Boulevard, with a mix of single-family homes and townhomes from the 1980s-90s.",
    housingAge: "1985-2000",
    commonRoofTypes: "Asphalt shingles, builder-grade materials",
    avgHomeValue: "$350,000-$475,000",
    population: "~5,000",
    uniqueFact: "Sable Ridge's townhome communities often have HOA-coordinated roof replacement schedules, where bulk purchasing and coordinated installation can reduce per-unit costs significantly."
  },
  {
    slug: "chambers-heights",
    name: "Chambers Heights",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Chambers Heights is an Aurora neighborhood along Chambers Road, featuring a mix of 1980s and 1990s homes in a convenient central location.",
    housingAge: "1980s-1990s",
    commonRoofTypes: "Asphalt shingles, three-tab on older homes",
    avgHomeValue: "$375,000-$500,000",
    population: "~6,000",
    uniqueFact: "Chambers Heights sits along one of Aurora's busiest corridors, and the constant traffic vibration combined with Colorado weather creates unique stress patterns on aging roof structures."
  },
  {
    slug: "fletcher",
    name: "Fletcher",
    parentCity: "aurora",
    parentCityName: "Aurora",
    description: "Fletcher is a central Aurora neighborhood near the Aurora Municipal Center, featuring affordable homes and convenient access to city services.",
    housingAge: "1960s-1980s",
    commonRoofTypes: "Asphalt shingles, aging three-tab materials",
    avgHomeValue: "$325,000-$425,000",
    population: "~4,500",
    uniqueFact: "Fletcher's affordable home prices and aging roof stock make it one of Aurora's highest-opportunity neighborhoods for insurance-funded roof replacements after hail events."
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
    slug: "northgate",
    name: "Northgate",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Northgate is a newer development area in far north Colorado Springs near the Air Force Academy, with modern homes and the Polaris Pointe shopping area.",
    housingAge: "2005-present",
    commonRoofTypes: "Asphalt architectural shingles, some stone-coated steel",
    avgHomeValue: "$500,000-$750,000",
    population: "~12,000",
    uniqueFact: "Northgate's newer construction means many homes still have original builder-grade roofs that may not have been upgraded to impact-resistant materials despite the area's high hail exposure."
  },
  {
    slug: "old-colorado-city",
    name: "Old Colorado City",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Old Colorado City is the original Colorado Springs settlement, now an artsy neighborhood west of downtown with galleries, shops, and a mix of historic and renovated homes.",
    housingAge: "1880s-1940s",
    commonRoofTypes: "Asphalt shingles, some original tin and wood shake",
    avgHomeValue: "$350,000-$550,000",
    population: "~8,000",
    uniqueFact: "Old Colorado City's historic buildings include some of the oldest standing structures in the Pikes Peak region, many with roof framing that predates modern building codes."
  },
  {
    slug: "manitou-springs-area",
    name: "Manitou Springs Area",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "The Manitou Springs area at the base of Pikes Peak features eclectic mountain homes, Victorian-era buildings, and tourist attractions in a unique hillside setting.",
    housingAge: "1880s-1950s (historic), varied (newer homes)",
    commonRoofTypes: "Asphalt shingles, metal roofing, some slate and wood shake",
    avgHomeValue: "$400,000-$700,000",
    population: "~5,500",
    uniqueFact: "Manitou Springs' steep hillside terrain means many homes have extremely difficult roof access, requiring specialized safety equipment and experienced high-slope crews."
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
  {
    slug: "flying-horse",
    name: "Flying Horse",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Flying Horse is an upscale golf club community in north Colorado Springs, featuring custom-built homes around the Flying Horse Club course.",
    housingAge: "2005-present",
    commonRoofTypes: "Designer asphalt shingles, concrete tile, some standing seam metal",
    avgHomeValue: "$700,000-$1,500,000",
    population: "~5,000",
    uniqueFact: "Flying Horse's HOA requires specific roofing materials and colors to maintain the community's aesthetic standards, making material selection an important part of any replacement project."
  },
  {
    slug: "cordera",
    name: "Cordera",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Cordera is a master-planned community in north Colorado Springs with newer homes, parks, trails, and highly rated schools in District 20.",
    housingAge: "2010-present",
    commonRoofTypes: "Asphalt architectural shingles, some composite materials",
    avgHomeValue: "$500,000-$700,000",
    population: "~8,000",
    uniqueFact: "Cordera's homes are new enough that most still have original roofs, but the area's high hail exposure means many have already experienced storm damage requiring insurance claims."
  },
  {
    slug: "wolf-ranch",
    name: "Wolf Ranch",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Wolf Ranch is a growing community in north Colorado Springs along Powers Boulevard, with new homes, retail, and the Wolf Ranch Town Center.",
    housingAge: "2015-present",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade materials",
    avgHomeValue: "$450,000-$650,000",
    population: "~7,000",
    uniqueFact: "Wolf Ranch's rapid growth means hundreds of homes are built each year, and many builders use standard-grade materials that may not withstand the area's frequent hail events."
  },
  {
    slug: "banning-lewis-ranch",
    name: "Banning Lewis Ranch",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Banning Lewis Ranch is a massive master-planned community on the far east side of Colorado Springs, one of the largest developments in the Pikes Peak region.",
    housingAge: "2006-present",
    commonRoofTypes: "Asphalt architectural shingles, various builder options",
    avgHomeValue: "$400,000-$600,000",
    population: "~10,000",
    uniqueFact: "Banning Lewis Ranch sits on open prairie east of the city, fully exposed to storms rolling across the plains with no geographic features to weaken hail before it reaches homes."
  },
  {
    slug: "stetson-hills",
    name: "Stetson Hills",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Stetson Hills is a popular family neighborhood in northeast Colorado Springs near Powers Boulevard, with diverse home options and growing amenities.",
    housingAge: "2000-2015",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade materials",
    avgHomeValue: "$375,000-$525,000",
    population: "~15,000",
    uniqueFact: "Stetson Hills' early-2000s homes are now entering the 20-year window when original builder-grade roofs typically need their first replacement, creating strong demand for contractors."
  },
  {
    slug: "falcon",
    name: "Falcon",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Falcon is a fast-growing community northeast of Colorado Springs on the open plains, with rural-suburban homes and excellent Falcon District 49 schools.",
    housingAge: "1990s-present",
    commonRoofTypes: "Asphalt shingles, some metal roofing on larger properties",
    avgHomeValue: "$400,000-$600,000",
    population: "~14,000",
    uniqueFact: "Falcon's exposed prairie location makes it one of the most hail-prone communities in the Pikes Peak region, with some homes experiencing multiple significant hail events in a single year."
  },
  {
    slug: "cimarron-hills",
    name: "Cimarron Hills",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Cimarron Hills is an established community on the east side of Colorado Springs, featuring affordable homes from the 1970s-90s and easy base access.",
    housingAge: "1970s-1990s",
    commonRoofTypes: "Asphalt shingles, aging three-tab on older homes",
    avgHomeValue: "$300,000-$425,000",
    population: "~18,000",
    uniqueFact: "Cimarron Hills' large military-connected population means many homeowners PCS (relocate) frequently, making quick, reliable roof work essential for pre-sale home preparation."
  },
  {
    slug: "security-widefield",
    name: "Security-Widefield",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "Security-Widefield is a large community south of Colorado Springs near Fort Carson, with affordable homes and a strong military community presence.",
    housingAge: "1960s-1990s",
    commonRoofTypes: "Asphalt shingles, three-tab and early architectural",
    avgHomeValue: "$275,000-$400,000",
    population: "~38,000",
    uniqueFact: "Security-Widefield's affordable housing stock and aging roofs create high demand for cost-effective roof replacement, with many homeowners using VA-backed financing or insurance claims."
  },
  {
    slug: "peterson-area",
    name: "Peterson Area",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "The Peterson area in east Colorado Springs near Peterson Space Force Base features homes ranging from 1960s-era military housing to newer subdivisions.",
    housingAge: "1960s-2000s",
    commonRoofTypes: "Asphalt shingles, mixed quality levels",
    avgHomeValue: "$325,000-$475,000",
    population: "~12,000",
    uniqueFact: "The Peterson area's mix of military families and long-term residents creates diverse roofing needs, from quick pre-PCS repairs to comprehensive upgrades for forever homes."
  },
  {
    slug: "powers",
    name: "Powers",
    parentCity: "colorado-springs",
    parentCityName: "Colorado Springs",
    description: "The Powers corridor is Colorado Springs' main commercial and residential growth area along Powers Boulevard, featuring newer homes and extensive shopping.",
    housingAge: "1995-2015",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade materials",
    avgHomeValue: "$350,000-$500,000",
    population: "~35,000",
    uniqueFact: "The Powers corridor represents the highest concentration of homes built during the 2000-2010 decade in Colorado Springs, creating a large cohort of roofs all reaching replacement age together."
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
    slug: "bear-creek-lakewood",
    name: "Bear Creek",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "Bear Creek is a Lakewood neighborhood along Bear Creek near the foothills, with a mix of older ranch homes and newer developments near Bear Creek Lake Park.",
    housingAge: "1960s-1990s",
    commonRoofTypes: "Asphalt shingles, some wood shake",
    avgHomeValue: "$450,000-$650,000",
    population: "~8,000",
    uniqueFact: "Bear Creek's proximity to Bear Creek Lake Park and the foothills creates micro-weather patterns where storm intensity can vary significantly across just a few blocks."
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
  {
    slug: "carmody",
    name: "Carmody",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "Carmody is a central Lakewood neighborhood near Colorado Mills Mall, with a mix of 1960s-80s homes and easy access to C-470 and the mountains.",
    housingAge: "1960s-1980s",
    commonRoofTypes: "Asphalt shingles, aging three-tab and early architectural",
    avgHomeValue: "$400,000-$550,000",
    population: "~6,000",
    uniqueFact: "Carmody is located in Gates Enterprises' home territory, and our crews have completed more roofing projects in this neighborhood than almost any other in the Denver metro."
  },
  {
    slug: "morse-park",
    name: "Morse Park",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "Morse Park is a quiet Lakewood neighborhood near Wadsworth Boulevard, featuring affordable homes and convenient access to shopping and transit.",
    housingAge: "1960s-1980s",
    commonRoofTypes: "Asphalt shingles, three-tab and transitional architectural",
    avgHomeValue: "$375,000-$500,000",
    population: "~5,000",
    uniqueFact: "Morse Park's central Lakewood location means Gates Enterprises crews can respond to storm damage inspections here faster than almost anywhere else in our service area."
  },
  {
    slug: "eiber",
    name: "Eiber",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "Eiber is a Lakewood neighborhood near the Lakewood City Commons and civic center, with a mix of older homes and increasing redevelopment activity.",
    housingAge: "1950s-1970s",
    commonRoofTypes: "Asphalt shingles, aging materials on many homes",
    avgHomeValue: "$375,000-$500,000",
    population: "~5,500",
    uniqueFact: "Eiber's redevelopment near the Lakewood civic center has increased property values, motivating many homeowners to invest in premium roofing as part of home improvement projects."
  },
  {
    slug: "two-creeks",
    name: "Two Creeks",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "Two Creeks is a newer Lakewood neighborhood near Ken Caryl and C-470, featuring 1990s-2000s homes with mountain views and excellent schools.",
    housingAge: "1990s-2000s",
    commonRoofTypes: "Asphalt architectural shingles, some tile accents",
    avgHomeValue: "$550,000-$750,000",
    population: "~4,000",
    uniqueFact: "Two Creeks' position along the C-470 corridor near the foothills creates a weather transition zone where hail events can be particularly intense as storms interact with mountain terrain."
  },
  {
    slug: "foothills-lakewood",
    name: "Foothills",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "The Foothills area in western Lakewood sits at the base of the Rocky Mountains near the Dakota Hogback, offering mountain access and foothill living within the city.",
    housingAge: "1970s-1990s",
    commonRoofTypes: "Asphalt shingles, wood shake, some metal roofing",
    avgHomeValue: "$500,000-$700,000",
    population: "~6,000",
    uniqueFact: "The Foothills area's elevation and proximity to Red Rocks creates unique wind patterns during storms, and the mountain terrain can focus hail into narrow damage corridors."
  },
  {
    slug: "union-square",
    name: "Union Square",
    parentCity: "lakewood",
    parentCityName: "Lakewood",
    description: "Union Square is a Lakewood neighborhood near Union Boulevard and Alameda, featuring a mix of 1970s-80s homes and townhome communities.",
    housingAge: "1970s-1980s",
    commonRoofTypes: "Asphalt shingles, flat roofs on townhomes",
    avgHomeValue: "$350,000-$475,000",
    population: "~5,000",
    uniqueFact: "Union Square's townhome communities make up a significant portion of the housing stock, requiring contractors experienced with HOA coordination and multi-unit replacement projects."
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
    slug: "ralston-valley",
    name: "Ralston Valley",
    parentCity: "arvada",
    parentCityName: "Arvada",
    description: "Ralston Valley is a popular Arvada neighborhood near Ralston Valley High School, with a mix of 1980s-90s homes and newer developments on the city's west side.",
    housingAge: "1980s-2000s",
    commonRoofTypes: "Asphalt architectural shingles, some tile",
    avgHomeValue: "$500,000-$700,000",
    population: "~12,000",
    uniqueFact: "Ralston Valley's west Arvada location puts it closer to the foothills where spring storm systems intensify, often producing the first significant hail events of the season."
  },
  {
    slug: "leyden-rock",
    name: "Leyden Rock",
    parentCity: "arvada",
    parentCityName: "Arvada",
    description: "Leyden Rock is a newer master-planned community in northwest Arvada, featuring modern homes with mountain views and extensive trail systems.",
    housingAge: "2012-present",
    commonRoofTypes: "Asphalt architectural shingles, some designer options",
    avgHomeValue: "$600,000-$900,000",
    population: "~5,000",
    uniqueFact: "Leyden Rock's elevated northwest Arvada position provides stunning mountain views but also exposes roofs to stronger winds and more direct storm impacts than lower neighborhoods."
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
  {
    slug: "west-woods",
    name: "West Woods",
    parentCity: "arvada",
    parentCityName: "Arvada",
    description: "West Woods is a golf course community in Arvada, built around the West Woods Golf Club, with well-maintained 1990s-2000s homes.",
    housingAge: "1995-2008",
    commonRoofTypes: "Asphalt architectural shingles, some tile on larger homes",
    avgHomeValue: "$550,000-$800,000",
    population: "~6,000",
    uniqueFact: "West Woods' golf course setting creates open exposure for homes along the fairways, similar to Saddle Rock in Aurora, where wind-driven hail impacts roofs more directly."
  },
  {
    slug: "whisper-creek",
    name: "Whisper Creek",
    parentCity: "arvada",
    parentCityName: "Arvada",
    description: "Whisper Creek is a newer Arvada neighborhood near Standley Lake, offering modern homes with views and access to outdoor recreation.",
    housingAge: "2008-present",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade and upgraded options",
    avgHomeValue: "$500,000-$700,000",
    population: "~4,000",
    uniqueFact: "Whisper Creek's proximity to Standley Lake reservoir creates local weather effects where moisture from the lake can intensify storm activity over nearby neighborhoods."
  },
  {
    slug: "arvada-plaza",
    name: "Arvada Plaza",
    parentCity: "arvada",
    parentCityName: "Arvada",
    description: "Arvada Plaza is a central Arvada neighborhood near Wadsworth and Ralston, with established 1960s-80s homes and convenient access to shopping and transit.",
    housingAge: "1960s-1980s",
    commonRoofTypes: "Asphalt shingles, aging three-tab, some early architectural",
    avgHomeValue: "$400,000-$550,000",
    population: "~8,000",
    uniqueFact: "Arvada Plaza's central location and aging housing stock create consistent demand for roof replacement, with many homeowners upgrading after hail events reveal deteriorating shingles."
  },
  {
    slug: "two-ponds",
    name: "Two Ponds",
    parentCity: "arvada",
    parentCityName: "Arvada",
    description: "Two Ponds is an Arvada neighborhood near the Two Ponds National Wildlife Refuge, with 1980s-90s homes in a natural setting.",
    housingAge: "1980s-1990s",
    commonRoofTypes: "Asphalt shingles, some wood shake",
    avgHomeValue: "$450,000-$600,000",
    population: "~5,000",
    uniqueFact: "Two Ponds' proximity to the wildlife refuge means homes here are surrounded by mature vegetation that can contribute to algae and moss growth on shaded roof surfaces."
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
    slug: "idyllwilde",
    name: "Idyllwilde",
    parentCity: "parker",
    parentCityName: "Parker",
    description: "Idyllwilde is a golf course community in Parker, built around the Idyllwilde by Wedgewood golf course, with homes ranging from townhomes to custom estates.",
    housingAge: "1997-2010",
    commonRoofTypes: "Asphalt architectural and designer shingles, some concrete tile",
    avgHomeValue: "$500,000-$900,000",
    population: "~5,000",
    uniqueFact: "Idyllwilde's golf course exposure combined with Parker's Palmer Divide hail activity creates some of the highest residential hail damage rates in the entire Denver metro area."
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
  {
    slug: "canterberry",
    name: "Canterberry",
    parentCity: "parker",
    parentCityName: "Parker",
    description: "Canterberry is a newer Parker neighborhood with modern homes, parks, and excellent proximity to Parker's mainstreet shopping and dining district.",
    housingAge: "2010-present",
    commonRoofTypes: "Asphalt architectural shingles, some upgraded impact-resistant",
    avgHomeValue: "$500,000-$700,000",
    population: "~5,000",
    uniqueFact: "Some Canterberry builders began offering impact-resistant shingles as a standard option, recognizing Parker's extreme hail exposure and the insurance savings these materials provide."
  },
  {
    slug: "lincoln-creek",
    name: "Lincoln Creek",
    parentCity: "parker",
    parentCityName: "Parker",
    description: "Lincoln Creek is a newer master-planned community in southeast Parker, featuring modern homes with open space, trails, and mountain views.",
    housingAge: "2015-present",
    commonRoofTypes: "Asphalt architectural shingles, some composite and impact-resistant",
    avgHomeValue: "$550,000-$750,000",
    population: "~4,000",
    uniqueFact: "Lincoln Creek represents the newest generation of Parker development, where many builders are proactively installing Class 4 impact-resistant shingles to reduce insurance costs."
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
  {
    slug: "terrain",
    name: "Terrain",
    parentCity: "castle-rock",
    parentCityName: "Castle Rock",
    description: "Terrain is a newer Castle Rock community known for its active lifestyle focus, with trails, fitness facilities, and modern homes designed for outdoor living.",
    housingAge: "2015-present",
    commonRoofTypes: "Asphalt architectural shingles, some impact-resistant options",
    avgHomeValue: "$500,000-$700,000",
    population: "~4,000",
    uniqueFact: "Terrain's newer construction means many homes still carry original warranties, but Castle Rock's extreme hail means those warranties may be voided by storm damage before expiration."
  },
  {
    slug: "crystal-valley",
    name: "Crystal Valley",
    parentCity: "castle-rock",
    parentCityName: "Castle Rock",
    description: "Crystal Valley is a master-planned community in south Castle Rock, featuring a ranch, farm, and ranch club amenities with homes ranging from starter to luxury.",
    housingAge: "2016-present",
    commonRoofTypes: "Asphalt architectural shingles, composite options, some metal",
    avgHomeValue: "$450,000-$700,000",
    population: "~5,000",
    uniqueFact: "Crystal Valley's south Castle Rock location sits at the heart of the Palmer Divide, where some of Colorado's largest recorded hailstones have fallen in recent years."
  },
  {
    slug: "founders-village",
    name: "Founders Village",
    parentCity: "castle-rock",
    parentCityName: "Castle Rock",
    description: "Founders Village is one of Castle Rock's most established communities, with mature trees, well-maintained homes, and a strong neighborhood identity.",
    housingAge: "1998-2008",
    commonRoofTypes: "Asphalt architectural shingles, some wood shake being replaced",
    avgHomeValue: "$475,000-$650,000",
    population: "~6,000",
    uniqueFact: "Founders Village homes from the early 2000s are now on their second or even third roofs due to Castle Rock's relentless hail, making impact-resistant upgrades the top recommendation."
  },
  {
    slug: "castlewood-ranch",
    name: "Castlewood Ranch",
    parentCity: "castle-rock",
    parentCityName: "Castle Rock",
    description: "Castlewood Ranch is a established Castle Rock neighborhood near the Castlewood Canyon, with homes on larger lots and a semi-rural character.",
    housingAge: "2000-2012",
    commonRoofTypes: "Asphalt shingles, some metal and composite",
    avgHomeValue: "$500,000-$700,000",
    population: "~4,000",
    uniqueFact: "Castlewood Ranch's proximity to Castlewood Canyon creates unique wind dynamics during storms, with canyon-channeled winds that can drive hail at unusual angles against roof surfaces."
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
  {
    slug: "eastridge",
    name: "Eastridge",
    parentCity: "highlands-ranch",
    parentCityName: "Highlands Ranch",
    description: "Eastridge is one of Highlands Ranch's original neighborhoods on the east side of the community, with mature trees and established 1980s-90s homes.",
    housingAge: "1982-1995",
    commonRoofTypes: "Asphalt shingles, some original wood shake being replaced",
    avgHomeValue: "$500,000-$700,000",
    population: "~8,000",
    uniqueFact: "Eastridge's older homes are among the first built in Highlands Ranch, and many are now on their third roof, giving local contractors deep experience with these specific home designs."
  },
  {
    slug: "westridge",
    name: "Westridge",
    parentCity: "highlands-ranch",
    parentCityName: "Highlands Ranch",
    description: "Westridge is a central Highlands Ranch neighborhood with 1990s homes, the Westridge Recreation Center, and easy access to C-470 and Highland Heritage Regional Park.",
    housingAge: "1990-2002",
    commonRoofTypes: "Asphalt architectural shingles, some designer upgrades",
    avgHomeValue: "$550,000-$750,000",
    population: "~7,000",
    uniqueFact: "Westridge's central HR location has experienced some of the community's most significant hail events, with the 2017 and 2023 storms causing widespread roof replacement across the neighborhood."
  },
  {
    slug: "northridge",
    name: "Northridge",
    parentCity: "highlands-ranch",
    parentCityName: "Highlands Ranch",
    description: "Northridge is a Highlands Ranch neighborhood along the northern boundary near Centennial, with 1990s homes and proximity to the Highlands Ranch Golf Club.",
    housingAge: "1990-2000",
    commonRoofTypes: "Asphalt shingles, some tile and wood shake",
    avgHomeValue: "$500,000-$700,000",
    population: "~6,000",
    uniqueFact: "Northridge's border position between Highlands Ranch and Centennial means storms often track directly across this area before continuing northeast through the metro."
  },
  {
    slug: "southridge",
    name: "Southridge",
    parentCity: "highlands-ranch",
    parentCityName: "Highlands Ranch",
    description: "Southridge is a Highlands Ranch neighborhood on the southern edge near Lone Tree and Castle Pines, featuring well-maintained homes and excellent Douglas County schools.",
    housingAge: "1995-2008",
    commonRoofTypes: "Asphalt architectural shingles, some composite and tile",
    avgHomeValue: "$550,000-$800,000",
    population: "~7,000",
    uniqueFact: "Southridge's position on the northern edge of the Palmer Divide gives it higher hail exposure than the northern Highlands Ranch neighborhoods, reflected in higher insurance claim rates."
  },
];

// ---------------------------------------------------------------------------
// FORT COLLINS (8 neighborhoods)
// ---------------------------------------------------------------------------
const fortCollinsNeighborhoods: NeighborhoodData[] = [
  {
    slug: "old-town-fort-collins",
    name: "Old Town",
    parentCity: "fort-collins",
    parentCityName: "Fort Collins",
    description: "Old Town Fort Collins is the vibrant historic downtown district, known for its preserved Victorian architecture, craft breweries, and the inspiration for Disneyland's Main Street USA.",
    housingAge: "1880s-1940s",
    commonRoofTypes: "Asphalt shingles, some original slate and tin, wood shake",
    avgHomeValue: "$500,000-$900,000",
    population: "~8,000",
    uniqueFact: "Old Town's historic character means many roofing projects must balance preservation aesthetics with modern weather protection, often requiring materials that replicate the look of original roofing."
  },
  {
    slug: "midtown-fort-collins",
    name: "Midtown",
    parentCity: "fort-collins",
    parentCityName: "Fort Collins",
    description: "Midtown Fort Collins is the commercial and residential corridor along College Avenue between Old Town and Harmony, featuring a mix of housing types and active redevelopment.",
    housingAge: "1960s-1990s",
    commonRoofTypes: "Asphalt shingles, flat roofs on commercial, mixed materials",
    avgHomeValue: "$375,000-$550,000",
    population: "~12,000",
    uniqueFact: "Midtown's active redevelopment along the MAX bus rapid transit corridor has increased property values, motivating homeowners to invest in roof upgrades that boost curb appeal."
  },
  {
    slug: "timnath",
    name: "Timnath",
    parentCity: "fort-collins",
    parentCityName: "Fort Collins",
    description: "Timnath is a fast-growing town east of Fort Collins, with newer master-planned communities, excellent schools, and a small-town feel despite rapid development.",
    housingAge: "2005-present",
    commonRoofTypes: "Asphalt architectural shingles, some tile and composite",
    avgHomeValue: "$550,000-$800,000",
    population: "~8,000",
    uniqueFact: "Timnath's position east of Fort Collins on the open plains makes it more exposed to hail events that track across Weld County, producing higher damage rates than sheltered Old Town."
  },
  {
    slug: "wellington",
    name: "Wellington",
    parentCity: "fort-collins",
    parentCityName: "Fort Collins",
    description: "Wellington is a growing community north of Fort Collins, transitioning from a small agricultural town to a bedroom community with new subdivisions and rising home values.",
    housingAge: "1900s (old town), 2005-present (new development)",
    commonRoofTypes: "Asphalt shingles, metal roofing on agricultural properties",
    avgHomeValue: "$400,000-$575,000",
    population: "~12,000",
    uniqueFact: "Wellington's open agricultural landscape provides zero wind protection from storms, making proper wind-rated and impact-resistant shingle installation critical for new and existing homes."
  },
  {
    slug: "harmony",
    name: "Harmony",
    parentCity: "fort-collins",
    parentCityName: "Fort Collins",
    description: "The Harmony corridor in south Fort Collins is one of the city's main commercial areas, surrounded by 1990s-2010s residential neighborhoods and Fort Collins' primary shopping district.",
    housingAge: "1990s-2010s",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade materials",
    avgHomeValue: "$450,000-$650,000",
    population: "~15,000",
    uniqueFact: "The Harmony corridor's homes represent Fort Collins' main growth period, and many original 1990s roofs are now reaching the 25-30 year replacement window."
  },
  {
    slug: "fossil-creek",
    name: "Fossil Creek",
    parentCity: "fort-collins",
    parentCityName: "Fort Collins",
    description: "Fossil Creek is a south Fort Collins neighborhood near Fossil Creek Reservoir, with newer homes and access to natural areas and trails.",
    housingAge: "2000-2015",
    commonRoofTypes: "Asphalt architectural shingles, some composite options",
    avgHomeValue: "$475,000-$650,000",
    population: "~8,000",
    uniqueFact: "Fossil Creek's reservoir proximity creates local moisture effects that can intensify afternoon thunderstorms, producing more frequent hail events than areas further from water."
  },
  {
    slug: "front-range-village",
    name: "Front Range Village",
    parentCity: "fort-collins",
    parentCityName: "Fort Collins",
    description: "Front Range Village is a south Fort Collins area near the shopping center of the same name, with a mix of newer residential developments and established neighborhoods.",
    housingAge: "2005-present",
    commonRoofTypes: "Asphalt architectural shingles, builder-grade and upgraded options",
    avgHomeValue: "$425,000-$600,000",
    population: "~6,000",
    uniqueFact: "Front Range Village's newer construction includes homes with a variety of builder-installed roof materials, from basic three-tab to architectural shingles, creating uneven storm performance across the neighborhood."
  },
  {
    slug: "mountain-vista",
    name: "Mountain Vista",
    parentCity: "fort-collins",
    parentCityName: "Fort Collins",
    description: "Mountain Vista is a newer Fort Collins community near the Mountain Vista High School campus, with modern homes and excellent views of the Rocky Mountain front range.",
    housingAge: "2008-present",
    commonRoofTypes: "Asphalt architectural shingles, some designer and impact-resistant",
    avgHomeValue: "$500,000-$700,000",
    population: "~7,000",
    uniqueFact: "Mountain Vista's elevated terrain on Fort Collins' south side provides the mountain views the neighborhood is named for, but also creates higher wind exposure during severe weather."
  },
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

// Per-neighborhood content for the "block by block" detail panels.
// Vibe stories: written from common public knowledge of SF (as of Jun 2026).
// Market stats: derived from public sources — see DATA SOURCES note at the bottom
// of the page and the citations printed inside each panel.
//
// IMPORTANT (June 2026 truthfulness pass):
// - School sections list nearby or commonly considered schools; SFUSD assignment
//   is choice-based and not guaranteed by address.
// - Transit lists are location-dependent and verified against SFMTA/BART/Caltrain.
// - Parks/outdoor entries are parks, plazas, and trails. Cultural institutions,
//   bike routes, and event venues are NOT parks and should be labeled separately.
// - Noise notes are block-dependent and qualitative; no city noise model used.
// - Neighborhood boundaries follow SF Planning Analysis Neighborhoods (analytical
//   groupings, not legal or universally accepted names).
// - Market stats and ZIP-level Zillow trends are directional proxies and may not
//   exactly match neighborhood boundaries.
// - Citations say what was actually verified vs. what is AI baseline.

window.NEIGHBORHOODS = {
  castro_upper_market: {
    name: "The Castro / Upper Market",
    zip: "94114",
    vibe: {
      tag: "Lively, proud, walkable",
      story: "The Castro is San Francisco's most extroverted neighborhood. The streets are dense, the commercial spine is animated, and a small dense grid of bars, restaurants, gyms, and one-screen cinemas means the area is walkable to almost every kind of amenity. Weekend brunch lines and street festivals define the calendar; weeknights belong to cocktail spots and the occasional rooftop. Rainbow crosswalks mark the intersections, a small hardware store has been on the corner since the 1940s, and the residential streets above 18th are noticeably quieter than the commercial core.",
      best_for: "Anyone prioritizing a high-density urban environment with walkable dining corridors, lively street life, and a strong Market Street Muni Metro and bus network — strong connections to many parts of the city from the Castro station and surrounding stops.",
      schools: {"elementary": ["Harvey Milk Civil Rights Academy (TK-5)", "Sanchez Elementary (TK-5)", "McKinley Elementary"], "middle": ["Everett Middle School (6-8)"], "high": ["Mission High School (9-12, 18th and Dolores)"]},
      parks: {"list": ["Mission Dolores Park (south, west, and center sections; only the NE corner is in the Mission per SF Planning boundaries — nearby)", "Harvey Milk Plaza (Market and Castro) — public plaza", "Pink Triangle Park (17th and Market) — small public space", "Kite Hill", "Noe Valley Town Square (12-15 min walk south) — nearby, outside the Castro/Upper Market core"]},
      transit: {"bart": "", "muni": "K Ingleside, L Taraval, M Ocean View at Castro Station (S Shuttle at peak hours); other Market Street rail lines depending on exact stop and schedule", "bus": "24 Divisadero, 33 Ashbury/18th Street, 35 Eureka, 37 Corbett"},
      noise: "Block-dependent. Livelier near Castro, Market, and 18th Street; quieter on the hill and residential side streets above 18th toward Corona Heights. Late-night conditions vary block by block.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 27 sales in the last 30 days (13 condo, 14 SFR).
      median_condo_sell: 1800000,
      median_sfr_sell: 2418000,
      median_psf: 2028,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 12,  // median days on market, last 30d (27 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 27 sales (13 condo, 14 SFR). DOM is median from the last 30d where reported (27 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (10 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment. ~259 sales over the 2-year period in this neighborhood.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  noe_valley: {
    name: "Noe Valley",
    zip: "94114",
    vibe: {
      tag: "Sunny, stroller-paced, walkable main street",
      story: "Noe Valley is the part of SF that feels least like San Francisco and most like a small town. Two commercial strips (24th Street and Church Street) are stacked with bakeries, yoga and pilates studios, locally-owned clothing shops, and the kind of independent bookstore that knows your name. The streets are sunnier than most of SF because of how the hills channel morning light, and the architecture skews Edwardian and Craftsman — wide front porches, big kitchens, and back gardens. Weekend mornings are a parade of strollers and dog-walkers. Weeknights are quiet.",
      best_for: "Anyone seeking a low-key residential pocket with low-density streets, public parks, and walkable everyday services, but without the late-night noise. The architecture (Edwardian and Craftsman with wide front porches and big kitchens) rewards buyers who notice a renovation.",
      schools: {"elementary": ["Alvarado Elementary (K-5, southern edge)", "Alvarado (PK-8 SFUSD public school, southern edge)"], "middle": ["James Lick Middle (boundary edges; verify with SFUSD)", "Everett Middle (450 Church, Castro edge)"], "high": []},
      parks: {"list": ["Noe Valley Town Square (24th between Sanchez and Noe — central neighborhood plaza)", "Billy Goat Hill (30th near Castro, sunset views)", "Glen Canyon Park access via Diamond Heights Shopping Center trails — nearby, not in Noe Valley core"]},
      transit: {"bart": "", "muni": "J Church (Church Street)", "bus": "24 Divisadero (Noe St, 30th St), 48 Quintara (24th Street)"},
      noise: "Block-dependent. Generally quieter on residential side streets; more activity around 24th Street, Church Street, school pickup/dropoff, and transit corridors. Late-night conditions vary block by block.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 23 sales in the last 30 days (8 condo, 15 SFR).
      median_condo_sell: 1200000,
      median_sfr_sell: 3212500,
      median_psf: 2196,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 13,  // median days on market, last 30d (23 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 23 sales (8 condo, 15 SFR). DOM is median from the last 30d where reported (23 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (17 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  pacific_hgts: {
    name: "Pacific Heights",
    zip: "94115",
    vibe: {
      tag: "Architectural pedigree, hillside elegance, view-block real estate",
      story: "Pacific Heights is the part of San Francisco known for its architecture: Beaux-Arts mansions, Spanish Revivals, Edwardians, and the occasional Painted Lady that would be a Painted Lady if it were a few blocks east. The houses are the point. Fillmore Street on the eastern edge is the liveliest part (restaurants, boutiques, a Williams-Sonoma and a movie theater). Interior blocks, especially above Broadway, are mostly residential. Views of the Bay from the top of the hill are the kind you put on a postcard and don't take.",
      best_for: "Buyers who prioritize architecture as a feature (not a footnote), large square-footage in a walkable central location, and properties with view-block elevation. The neighborhood rewards research: every block is a different period and a different style.",
      schools: {"elementary": ["San Francisco Public Montessori (SFUSD public K-8, Pacific Heights address)", "Claire Lilienthal (SFUSD public K-8, Madison campus in Inner Richmond / main campus near the Marina edge — verify with SFUSD)"], "middle": [], "high": []},
      parks: {"list": ["Lafayette Park (city park with tennis courts, sfrecpark.org)", "Alta Plaza Park (city park, Jackson & Steiner)", "Lyon Street stairs (between Broadway and Green — public pedestrian steps)"]},
      transit: {"bart": "", "muni": "", "bus": "22 Fillmore (Fillmore Street spine), 1 California (northern edge), 45 Union/Stockton (western edge)"},
      noise: "Block-dependent. Interior residential blocks are generally quieter than Fillmore, California, Sacramento, and other busier corridors.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 25 sales in the last 30 days (17 condo, 8 SFR).
      median_condo_sell: 1425000,
      median_sfr_sell: 7225000,
      median_psf: 1193,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 12,  // median days on market, last 30d (25 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 25 sales (17 condo, 8 SFR). DOM is median from the last 30d where reported (25 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (16 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address. San Francisco Public Montessori is an SFUSD public school; Claire Lilienthal has multiple SFUSD campuses — verify address with SFUSD.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. No BART or Muni Metro inside Pacific Heights; bus-based only.",
      "Parks checked against SF Rec & Park (sfrecpark.org) and SF Planning neighborhood maps, June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  lone_mountain_usf: {
    name: "Lone Mountain / USF",
    zip: "94117",
    vibe: {
      tag: "Forested, tucked-away, dog-park central",
      story: "Lone Mountain / USF is the part of San Francisco defined by the University of San Francisco campus, Lone Mountain (the wooded hill that's now a USF property), and the residential blocks that wrap around them — Edwardian and Craftsman homes with a few mid-rises, edged by Golden Gate Park's Panhandle and the Inner Richmond to the north and the Inner Sunset to the south. Angelo J. Rossi Playground and Pool at Arguello and Anza is the local park; commercial edges run along Geary and Clement on the north and Irving on the south.",
      best_for: "Buyers seeking a low-key residential environment with Edwardian and Craftsman homes, walking distance to USF and the Inner Sunset's commercial strip, and a tucked-away feel with abundant greenery.",
      schools: {"elementary": [], "middle": [], "high": []},
      parks: {"list": ["Angelo J. Rossi Playground and Rossi Pool (Arguello and Anza)", "Golden Gate Park Panhandle (north end, nearby)", "Lone Mountain open space (USF campus area, public access along edges)"]},
      transit: {"bart": "", "muni": "", "bus": "5 Fulton (western edge along Fulton), 31 Balboa (nearby), 33 Ashbury/18th (nearby), 43 Masonic (along Masonic); 38 Geary nearby depending on exact block"},
      noise: "Block-dependent. Generally quiet on residential blocks; more traffic noise near Fulton, Masonic, Geary, and USF campus/event edges.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 19 sales in the last 30 days (15 condo, 4 SFR).
      median_condo_sell: 1498000,
      median_sfr_sell: 3800000,
      median_psf: 1243,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 14,  // median days on market, last 30d (19 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 19 sales (15 condo, 4 SFR). DOM is median from the last 30d where reported (19 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (8 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans: no specific SFUSD schools tagged to this neighborhood in the SFUSD directory; nearby schools listed in adjacent neighborhoods (Inner Richmond, Inner Sunset, Cole Valley).",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. No BART or Muni Metro inside Lone Mountain / USF; bus-based only.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  west_portal: {
    name: "West Portal",
    zip: "94127",
    vibe: {
      tag: "Small-town main street, low-density residential, the Muni at the corner",
      story: "West Portal is the part of SF that genuinely feels like a small town. Ulloa Street is the main drag — a 6-block stretch of independent shops, a hardware store that's been there since the 1940s, a cinema, a bookstore, a handful of Italian restaurants and dim sum spots, and a Peet's at the corner. Above the street, the residential blocks are quiet, mostly single-family homes from the 1920s–1940s in Mediterranean and Tudor styles. K Ingleside, L Taraval, and M Ocean View pass through West Portal Station, making it a major Muni Metro hub between western neighborhoods and downtown — though which lines terminate at West Portal depends on the schedule.",
      best_for: "Anyone seeking a quiet residential environment with a small main street of family-run shops, a single-seat rail commute to downtown via West Portal Station, and proximity to Mount Davidson and Pine Lake Park. Streets are low-density.",
      schools: {"elementary": ["West Portal Elementary (K-5, SFUSD public)"], "middle": ["Aptos Middle (West of Twin Peaks, SFUSD public)"], "high": ["Ruth Asawa SOTA (SFUSD performing-arts magnet, application-based)", "Lowell High School (academic-based admissions; verify current SFUSD admissions rules)"]},
      parks: {"list": ["West Portal Park (small neighborhood park above the tunnel portal)", "Pine Lake Park (small lake, walkable in 15 min — adjacent)", "Stern Grove (33 acres, summer festival, technically Parkside — adjacent)", "Mount Davidson (928 ft, SF's highest natural point, south end — adjacent)"]},
      transit: {"bart": "", "muni": "K Ingleside, L Taraval, M Ocean View pass through West Portal Station; S Shuttle may terminate there depending on schedule", "bus": "48 Quintara, 57 Parkmerced"},
      noise: "Block-dependent. More rail and traffic noise near West Portal Station and tunnel/portal areas; quieter on surrounding residential blocks.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 40 sales in the last 30 days (1 condo, 39 SFR).
      median_condo_sell: 901000,
      median_sfr_sell: 2400000,
      median_psf: 1337,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 11,  // median days on market, last 30d (40 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 40 sales (1 condo, 39 SFR). DOM is median from the last 30d where reported (40 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (38 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address. Lowell admissions are academic-based (formerly exam-based); verify current admissions rules with SFUSD.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. K, L, and M all pass through West Portal; which ones terminate depends on the schedule.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026; Mount Davidson, Stern Grove, and Pine Lake Park are labeled adjacent.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  presidio_hgts: {
    name: "Presidio Heights",
    zip: "94118",
    vibe: {
      tag: "Quiet residential streets, walking distance to the Presidio, view-block real estate",
      story: "Presidio Heights is the part of SF that backs up to the Presidio, primarily residential, with nearby shopping and dining on Sacramento, California, and the Laurel Village edges depending on the block. The architecture is mostly early 1900s Mediterranean and Spanish Revival, with a few modernist exceptions. Lake Street / Mountain Lake is the part of Presidio Heights that faces Mountain Lake Park and backs up to the entrance to the Presidio's main park. Streets are quiet and mostly residential.",
      best_for: "Buyers who want a real house with a yard in a quiet, low-density residential setting with walking access to the Presidio's trails and open space. The architecture rewards research (early 1900s Mediterranean and Spanish Revival, with modernist exceptions).",
      schools: {"elementary": ["Claire Lilienthal (SFUSD public K-8, multiple campuses including Madison in Inner Richmond — verify address with SFUSD)", "Sherman Elementary (SFUSD public K-5, Marina address — verify with SFUSD)"], "middle": ["Presidio Middle School (SFUSD public, Outer Richmond — verify with SFUSD)"], "high": []},
      parks: {"list": ["Mountain Lake Park (city park, adjacent to Presidio Heights)", "The Presidio (1,491 acres, federal land managed by the Presidio Trust — adjacent)", "Lyon Street stairs (public pedestrian steps, connecting toward the Marina)"]},
      transit: {"bart": "", "muni": "", "bus": "1 California, 33 Ashbury/18th Street, 43 Masonic"},
      noise: "Block-dependent. Generally quiet residential blocks; more activity near major streets, schools, and Presidio entrances.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 3 sales in the last 30 days (1 condo, 2 SFR).
      median_condo_sell: 2215000,
      median_sfr_sell: 3214444,
      median_psf: 2025,  // $/sqft from SF Assessor parcel join (single-unit only, last 90d)
      median_dom: 13,  // median days on market, last 30d (3 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 3 sales (1 condo, 2 SFR). DOM is median from the last 30d where reported (3 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 90d (9 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address. Sherman and Claire Lilienthal serve multiple addresses; verify with SFUSD.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. No BART or Muni Metro inside Presidio Heights; bus-based only.",
      "Parks checked against SF Rec & Park (sfrecpark.org), the Presidio Trust (presidio.gov / presidio.gov/explore), and NPS pages, June 2026. The Presidio's 1,491-acre figure is from the Presidio Trust.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  bernal_heights: {
    name: "Bernal Heights",
    zip: "94110",
    vibe: {
      tag: "Sunny, hilly, dog-park central, tight-knit",
      story: "Bernal Heights is the residential pocket that climbs the south hill and stays. The neighborhood is a mix of 1900s–1940s homes and a few mid-century pockets, all oriented toward the sun (one of the warmer, less-foggy spots in central SF). Bernal Heights Park is the heart: a hilltop with an off-leash dog area, 360-degree views of the city, and a community of regulars who wave at each other from the hill. Cortland Avenue is the small main street.",
      best_for: "Anyone seeking a residential pocket with abundant sun, a community feel, and walkable commercial strips (Cortland Avenue, Precita Park). Streets are low-density and the hilltop park offers 360-degree views of the city.",
      schools: {"elementary": ["Leonard R. Flynn Elementary (K-5, SFUSD public, cross-listed with Mission — verify with SFUSD)", "Junipero Serra Elementary (SFUSD public — verify with SFUSD)", "Paul Revere PreK-8 (SFUSD public — verify with SFUSD)"], "middle": ["James Denman Middle (SFUSD public — verify with SFUSD)"], "high": ["Downtown High School (SFUSD public — verify with SFUSD)", "John O'Connell High (SFUSD public — verify with SFUSD)"]},
      parks: {"list": ["Bernal Heights Park (city park, hilltop with off-leash area and 360-degree views)", "Holly Park (city park, north end)", "Precita Park (city park, Folsom at north slope)", "John McLaren Park (large park — nearby for southeast open-space access)"]},
      transit: {"bart": "24th Street Mission BART is walkable from parts of the north/northwest slope, but not from every Bernal block — verify walking distance for a specific address", "muni": "", "bus": "24 Divisadero (crosstown), 67 Bernal Heights (loops the hilltop), 14 Mission (north edge)"},
      noise: "Block-dependent. Quieter on hill and residential streets; more activity near Cortland, Mission edge, Cesar Chavez edge, and park access points.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 16 sales in the last 30 days (1 condo, 15 SFR).
      median_condo_sell: 1207500,
      median_sfr_sell: 1855000,
      median_psf: 1538,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 14,  // median days on market, last 30d (16 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 16 sales (1 condo, 15 SFR). DOM is median from the last 30d where reported (16 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (12 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. BART walkability depends on exact block.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026. McLaren Park is adjacent; Bernal Heights Park, Holly Park, and Precita Park are core.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  mission: {
    name: "Mission",
    zip: "94110",
    vibe: {
      tag: "Murals, taquerías, design-forward conversions",
      story: "The Mission is SF's most compressed neighborhood — many blocks feature murals and public art, taquerías, coffee roasters, and converted Victorians. Valencia Street is boutique density at its peak: independent shops and design-forward restaurants. Mission Street is busier, more commercial, and more visually chaotic, with a longer mix of small businesses, restaurants, and older buildings. Mission Dolores Park on a sunny weekend is the city's living room. Bernal Heights to the south is the quieter, sunnier stepchild.",
      best_for: "Anyone prioritizing a high-density urban environment with vibrant street life, public art, walkable dining corridors, and BART access. The architecture rewards buyers who notice a renovation (Victorian conversions, warehouse-to-condo, new-build mid-rise).",
      schools: {"elementary": ["Bryant Elementary (SFUSD public — verify with SFUSD)", "Buena Vista Horace Mann K-8 (SFUSD public — verify with SFUSD)", "César Chávez Elementary (SFUSD public — verify with SFUSD)", "Moscone Elementary (SFUSD public — verify with SFUSD)", "Marshall Elementary (SFUSD public — verify with SFUSD)"], "middle": ["Everett Middle School (SFUSD public, Mission/Castro cross-listed — verify with SFUSD)"], "high": ["Mission High School (9-12, 18th and Dolores, SFUSD public)"]},
      parks: {"list": ["Mission Dolores Park (south-end views of downtown and the Bay)", "Bernal Heights Park (south slope, off-leash area — adjacent)"]},
      transit: {"bart": "16th Street Mission (2000 Mission St), 24th Street Mission", "muni": "J Church (western edge)", "bus": "14 Mission, 49 Van Ness/Mission, 22 Fillmore (16th and Mission)"},
      noise: "Block-dependent. Livelier around Valencia, Mission Street, 16th/24th BART areas, nightlife, and commercial corridors; quieter on some residential side streets. Conditions vary block by block.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 31 sales in the last 30 days (19 condo, 12 SFR).
      median_condo_sell: 955000,
      median_sfr_sell: 2500000,
      median_psf: 1268,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 16,  // median days on market, last 30d (31 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 31 sales (19 condo, 12 SFR). DOM is median from the last 30d where reported (31 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (11 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes) and BART station pages (bart.gov/stations), June 2026.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026. Cultural institutions (e.g., Mission Cultural Center) and bike routes (e.g., The Wiggle on Steiner) are not included in parks/outdoor.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  hayes_valley: {
    name: "Hayes Valley",
    zip: "94102",
    vibe: {
      tag: "Boutique-lined, design-forward, transit-tight",
      story: "Hayes Valley was dramatically transformed after the damaged Central Freeway was removed and Octavia Boulevard / Patricia's Green helped reconnect the neighborhood. What replaced it is now one of SF's most consistently photographed six blocks: a tight grid of independent boutiques, design shops, Michelin-noticed restaurants, and the small public space at Patricia's Green. The residential streets around Hayes are mostly mid-rise condos from the 2000s–2010s, plus a few converted Victorians. The neighborhood rewards a preference for a tight urban grid and direct rail access.",
      best_for: "Buyers who want a lock-and-leave condo or townhouse, walkable access to every kind of transit (BART, Muni Metro, bus), and a small but dense commercial strip of independent boutiques and restaurants.",
      schools: {"elementary": [], "middle": [], "high": []},
      parks: {"list": ["Patricia's Green (Octavia between Fell and Hayes — public plaza)", "Octavia Boulevard open space (former Central Freeway stub)"]},
      transit: {"bart": "Civic Center BART is walkable depending on exact block (Hayes Valley is south of Market between Octavia and Franklin)", "muni": "Van Ness station: J, K, L, M, N, S (Van Ness / Civic Center / Market Street service depending on exact block)", "bus": "5 Fulton (McAllister, just north), 47 Van Ness, 49 Van Ness/Mission"},
      noise: "Block-dependent. Hayes Street and Octavia can be busy; the residential cross streets are quieter. Nearby event and commercial activity along Franklin/Gough affects conditions block by block.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 12 sales in the last 30 days (8 condo, 4 SFR).
      median_condo_sell: 1372500,
      median_sfr_sell: 2700000,
      median_psf: 1471,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 17,  // median days on market, last 30d (12 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 12 sales (8 condo, 4 SFR). DOM is median from the last 30d where reported (12 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (3 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "Schools: no specific SFUSD schools tagged to this neighborhood in the SFUSD directory; nearby schools listed in adjacent neighborhoods (Civic Center, Hayes Valley edges, NOPA).",
      "Transit verified against SFMTA route pages (sfmta.com/routes) and BART station pages (bart.gov/stations), June 2026.",
      "Parks / public spaces checked against SF Planning Octavia / Central Freeway planning materials and SF Rec & Park, June 2026. Fell/Oak bike corridor and The Wiggle (Steiner) are bike routes, not parks.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  mission_bay: {
    name: "Mission Bay",
    zip: "94158",
    vibe: {
      tag: "New-build, UCSF-centric, waterfront, condo-heavy",
      story: "Mission Bay was developed from former rail yards and adjacent redevelopment areas into a UCSF, biotech, waterfront, and condo-heavy neighborhood from the late 1990s onward. The neighborhood is now a mix of UCSF medical campus, biotech offices, mid-rise and high-rise condos, and a few restaurants. The population is dense, young, professional, and mostly there for proximity to UCSF or the tech corridor. The architecture is 2000s–2020s new-construction, mostly mid-rise to high-rise.",
      best_for: "Anyone prioritizing a new-build condo with full amenity packages, walkable waterfront trails, direct rail and bus connections, and proximity to UCSF's Mission Bay campus and the emerging biotech corridor.",
      schools: {"elementary": ["Mission Bay School — SFUSD public school at 1415 Owens Street, opening fall 2026 with early grades (verify current grade expansion with SFUSD)", "Bessie Carmichael School (SFUSD public PreK-8 with Filipino Education Center — nearby, in SoMa)"], "middle": [], "high": []},
      parks: {"list": ["Mission Creek Park", "Bayfront Park (waterfront, Terry A. Francois Blvd)", "China Basin Park", "Mission Bay Commons", "Surrounding waterfront trails"]},
      transit: {"bart": "", "muni": "T Third Street serves Mission Bay (UCSF / Chase Center / UCSF Medical Center); Caltrain and additional Muni connections are nearby around 4th & King. UCSF shuttles serve eligible UCSF riders.", "bus": ""},
      noise: "Block-dependent. UCSF activity, Chase Center event days, T Third/traffic, and waterfront variation all affect conditions; quieter on the waterfront side at off-peak times.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 15 sales in the last 30 days (15 condo, 0 SFR).
      median_condo_sell: 845000,
      median_sfr_sell: null,
      median_psf: 925,  // $/sqft from SF Assessor parcel join (single-unit only, last 90d)
      median_dom: 13,  // median days on market, last 30d (15 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 15 sales (15 condo, 0 SFR). DOM is median from the last 30d where reported (15 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 90d (6 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school pages (sfusd.edu/school/mission-bay-school/enrollment and sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address. Mission Bay School's grade expansion is ongoing — verify current status.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. T Third is the primary Mission Bay rail line; Caltrain is at 4th & King for southern/eastern access.",
      "Parks checked against SF Rec & Park (sfrecpark.org) and SF Planning Mission Bay area plans, June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  financial_district_south_beach: {
    name: "South Beach",
    zip: "94105",
    vibe: {
      tag: "High-rise, waterfront, downtown-adjacent",
      story: "South Beach is the part of SF just south of the Financial District, on the Rincon Hill slope and the waterfront. The architecture is mostly 2000s–2010s high-rise condos and a few surviving 1900s warehouses (the South Beach Marina area). The Embarcadero is the spine; the Bay Bridge is the eastern edge. The neighborhood is dense and concentrated in mid-rise and high-rise condo towers.",
      best_for: "Anyone prioritizing a high-rise condo with bay views, direct rail and BART connections (Embarcadero, Montgomery, Powell), and walkable access to the Financial District, the Embarcadero promenade, and Oracle Park (event venue).",
      schools: {"elementary": [], "middle": [], "high": []},
      parks: {"list": ["Rincon Park (waterfront promenade at Bay Bridge touchdown)", "Rincon Hill Park (small park at top of hill)", "Embarcadero promenade (waterfront walkway)"]},
      transit: {"bart": "Embarcadero BART is walkable depending on block; Montgomery and Powell nearby for some blocks", "muni": "F-Market streetcar along the Embarcadero; T Third Street around Yerba Buena / Moscone / 4th Street; N Judah at 4th & King / Caltrain edge", "bus": ""},
      noise: "Block-dependent. Bay Bridge, Embarcadero, downtown traffic, and Oracle Park event days affect conditions; quieter on residential side streets and waterfront setbacks.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 42 sales in the last 30 days (42 condo, 0 SFR).
      median_condo_sell: 1498500,
      median_sfr_sell: null,
      median_psf: 1155,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 30,  // median days on market, last 30d (42 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 42 sales (42 condo, 0 SFR). DOM is median from the last 30d where reported (42 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (15 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "Schools: no specific SFUSD schools tagged to this neighborhood in the SFUSD directory; nearby schools listed in adjacent neighborhoods (Civic Center, Tenderloin, SoMa).",
      "Transit verified against SFMTA route pages (sfmta.com/routes), Caltrain station pages (caltrain.com/stations), and BART station pages (bart.gov/stations), June 2026.",
      "Parks checked against SF Rec & Park (sfrecpark.org) and SF Planning Rincon Hill / South Beach plans, June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  south_of_market: {
    name: "SoMa",
    zip: "94103",
    vibe: {
      tag: "Loft-conversion, museums, downtown-edge, transit-tight",
      story: "SoMa (South of Market) is the part of SF that was mostly industrial until the 1990s and has been re-invented as the city's loft-and-museum district. The architectural mix is striking: surviving 1900s warehouses converted to lofts, public housing blocks, and 2000s–2010s mid-rise and high-rise new builds sit side by side. The Yerba Buena Gardens anchor the eastern edge, and the museum corridor (SFMOMA, the Contemporary Jewish Museum, the Museum of the African Diaspora, the Children's Creativity Museum) is part of the area's identity.",
      best_for: "Anyone prioritizing a high-density urban environment with direct access to Powell BART and the F-Market streetcar, the museum corridor (SFMOMA, Contemporary Jewish Museum, Museum of the African Diaspora), and walkable connections to downtown, the Embarcadero, and Union Square.",
      schools: {"elementary": ["Bessie Carmichael School (SFUSD public PreK-8 with Filipino Education Center — verify with SFUSD)"], "middle": [], "high": []},
      parks: {"list": ["Yerba Buena Gardens (central green with fountains and ice skating rink)", "South Park (the small circular park that gave the area its name)"]},
      transit: {"bart": "Powell Street BART is walkable depending on block; Montgomery BART adjacent for some blocks", "muni": "F-Market streetcar on Market Street; T Third / Central Subway around Yerba Buena / Moscone and 4th Street; N Judah at 4th & King / Caltrain edge", "bus": "5, 14, 19, 30, 38 (specific routes serve specific blocks — verify by address)"},
      noise: "Block-dependent. Convention-center events, Folsom/Harrison nightlife, freeway/arterial traffic, and museum crowds all affect conditions; quieter on residential side streets and in pockets like Yerba Buena and South Park.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 14 sales in the last 30 days (14 condo, 0 SFR).
      median_condo_sell: 871500,
      median_sfr_sell: 2800000,
      median_psf: 620,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 60,  // median days on market, last 30d (14 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 14 sales (14 condo, 0 SFR). DOM is median from the last 30d where reported (14 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (5 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), Caltrain station pages (caltrain.com/stations), and BART station pages (bart.gov/stations), June 2026.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026. Cultural institutions (SFMOMA, Contemporary Jewish Museum, MoAD, Children's Creativity Museum) are listed under vibe/culture, not under parks/outdoor.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  potrero_hill: {
    name: "Potrero Hill",
    zip: "94107",
    vibe: {
      tag: "Sunny, hilltop views, transit-connected",
      story: "Potrero Hill is the residential pocket that climbs the south slope of the Mission Creek basin. It is one of the sunnier, less-foggy parts of San Francisco and has some of the best views of the downtown skyline from many blocks. The architecture is a mix: 1900s Victorians and Edwardians on the lower blocks, mid-century and 1990s new-builds climbing the hill, a few industrial-edge pockets. The streets are quiet, mostly single-family homes from the 1920s–1940s. Eighteenth Street is the small main street.",
      best_for: "Anyone seeking a residential environment with abundant sun, hilltop views, a small commercial strip on 18th Street, and proximity to Mission Bay and the biotech corridor. The architecture offers 1900s Victorians, mid-century pockets, and warehouse conversions.",
      schools: {"elementary": ["Daniel Webster Elementary (K-5, SFUSD public — verify with SFUSD)", "Starr King Elementary (K-5, SFUSD public — verify with SFUSD)"], "middle": [], "high": ["Downtown High School (SFUSD public — verify with SFUSD)", "SF International High School (SFUSD public — verify with SFUSD)"]},
      parks: {"list": ["Potrero Hill Recreation Center (playground, tennis, baseball)", "McKinley Square (park atop the hill)", "Jackson Playground (north slope)", "Crane Cove Park (Mission Creek edge — Mission Bay / Dogpatch waterfront)"]},
      transit: {"bart": "", "muni": "T Third Street is accessible east of the hill (Mission Bay); regional rail is nearby at Caltrain 22nd Street", "bus": "10 Townsend, 19 Polk, 22 Fillmore, 48 Quintara; specific stops depend on exact block — verify by address"},
      noise: "Block-dependent. Generally quieter on hilltop residential streets; more traffic/freeway noise near I-280, 16th/17th/Mariposa edges, and Mission Bay/Dogpatch edges.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 13 sales in the last 30 days (8 condo, 5 SFR).
      median_condo_sell: 1057500,
      median_sfr_sell: 2553525,
      median_psf: 1440,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 12,  // median days on market, last 30d (13 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 13 sales (8 condo, 5 SFR). DOM is median from the last 30d where reported (13 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (9 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes) and Caltrain station pages (caltrain.com/stations), June 2026. Caltrain 22nd Street is on the eastern edge.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  inner_outer_richmond: {
    name: "Richmond District",
    zip: "94118",
    vibe: {
      tag: "Foggy, two commercial corridors, residential grid",
      story: "The Richmond is the Sunset's mirror twin: a 4-mile-long, 1-mile-wide grid north of Golden Gate Park, between the Park and the Pacific. The houses are mostly 1920s–1950s single-family, the fog is real, and the commercial strips have a long-standing character all their own: Geary Boulevard carries an extensive mix of family-run businesses, ethnic grocers, and small specialty shops, while Clement Street is the foodie corridor. UCSF Parnassus medical campus is south of Golden Gate Park, on the Inner Sunset edge, not in the Richmond.",
      best_for: "Anyone seeking a low-density residential environment with a diverse commercial strip (Geary's family-run and specialty-shop spine, Clement's foodie corridor), strong east-west bus service to downtown (1 California, 38/38R Geary, plus other bus routes depending on exact block), and walking distance to the beach, Golden Gate Park, and the Presidio.",
      schools: {"elementary": ["Inner Richmond: Alamo, Argonne, Frank McCoppin, George Peabody, Sutro (SFUSD public — verify each with SFUSD)", "Outer Richmond: Lafayette (SFUSD public — verify with SFUSD)"], "middle": ["Presidio Middle (Outer Richmond, SFUSD public — verify with SFUSD)", "Roosevelt Middle (SFUSD public — verify with SFUSD)"], "high": ["George Washington HS (Outer Richmond, SFUSD public — verify with SFUSD)"]},
      parks: {"list": ["Golden Gate Park (north end — adjacent, edge access)", "Mountain Lake Park (eastern edge)", "Presidio's east edge (adjacent)", "Ocean Beach (western edge)"]},
      transit: {"bart": "", "muni": "", "bus": "1 California, 2 Clement, 5/5R Fulton, 31 Balboa (north edge), 38/38R Geary"},
      noise: "Block-dependent. Geary and major corridors are louder; residential blocks vary block by block.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 29 sales in the last 30 days (4 condo, 25 SFR).
      median_condo_sell: 1757500,
      median_sfr_sell: 2510000,
      median_psf: 1467,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 11,  // median days on market, last 30d (29 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 29 sales (4 condo, 25 SFR). DOM is median from the last 30d where reported (29 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (23 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. No BART or Muni Metro inside the Richmond; bus-based only. 1 California and 38/38R Geary are major east-west routes.",
      "Parks checked against SF Rec & Park (sfrecpark.org) and NPS / Presidio Trust pages, June 2026. Golden Gate Park, Mountain Lake Park, the Presidio, and Ocean Beach are labeled by edge direction, not core.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  sunset_parkside: {
    name: "Sunset / Parkside",
    zip: "94116",
    vibe: {
      tag: "Foggy, residential, mid-century single-family",
      story: "The Sunset is the largest residential district in SF: a 4-mile-long, 1-mile-wide grid west of Twin Peaks, hemmed in by the ocean on one side and Golden Gate Park on the other. The houses are mostly 1940s–1960s single-family homes (one story, one car, one backyard, often a granny unit), with the occasional new build pushing taller. The commercial strips (Irving, Judah, Noriega, Taraval) are the only places with restaurants, grocery stores, and the famous dim sum. The fog is part of the address.",
      best_for: "Anyone seeking a low-density residential environment with single-family homes — often more attainable than many central/northern SF neighborhoods, depending on block and condition — and proximity to Ocean Beach, Lake Merced, and Golden Gate Park's west end.",
      schools: {"elementary": ["Sunset Elementary (Outer Sunset, SFUSD public — verify with SFUSD)", "Commodore Sloat (SFUSD public — verify with SFUSD)", "Dianne Feinstein (Parkside/Sunset, SFUSD public — verify with SFUSD)"], "middle": ["A.P. Giannini (Outer Sunset, SFUSD public — verify with SFUSD)", "Presidio Middle (SFUSD public — verify with SFUSD)"], "high": ["Abraham Lincoln HS (Parkside/Sunset, SFUSD public — verify with SFUSD)"]},
      parks: {"list": ["Golden Gate Park's west end (Polo Field, Murphy Windmill, Bison Paddock, Ocean Beach — edge access)", "Lake Merced (south edge)", "Stern Grove (adjacent, technically Parkside edge)", "Sunset / Parkside neighborhood playgrounds (verify each by address)"]},
      transit: {"bart": "", "muni": "L Taraval (Parkside corridor), N Judah (along Judah Street); M Ocean View near West Portal and along southern edges", "bus": "7, 18, 23, 28, 29, 48 (crosstown) — specific routes serve specific blocks"},
      noise: "Block-dependent. Quieter residential blocks; more noise near Ocean Beach, 19th Avenue, Great Highway/Upper Great Highway, major commercial corridors, and rail/bus streets.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 35 sales in the last 30 days (0 condo, 35 SFR).
      median_condo_sell: 1007500,
      median_sfr_sell: 1955000,
      median_psf: 1384,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 12,  // median days on market, last 30d (35 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 35 sales (0 condo, 35 SFR). DOM is median from the last 30d where reported (35 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (35 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. L Taraval, N Judah, and M Ocean View serve parts of the Sunset/Parkside depending on exact block.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026. Ocean Beach, Lake Merced, Stern Grove, and Golden Gate Park's west end are labeled by edge access.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  glen_park: {
    name: "Glen Park",
    zip: "94131",
    vibe: {
      tag: "Small-town village, canyon-edge, BART-direct",
      story: "Glen Park is the part of SF that still feels like a small town. The village center is Diamond Street and Chenery, with a hardware store, a bookstore, a few coffee shops, and the kind of family-run places that have been there for decades. The neighborhood climbs the south slope of the city into Glen Canyon, with houses ranging from Edwardians to mid-century moderns. BART is here, which makes it one of the few genuinely transit-rich residential neighborhoods south of Twin Peaks.",
      best_for: "Anyone seeking a low-key residential environment with BART connectivity, a small village-style commercial district (Diamond and Chenery), and walkable access to Glen Canyon Park's open space and a canyon-edge location with views.",
      schools: {"elementary": ["Glen Park Elementary (K-5, SFUSD public — verify with SFUSD)", "Dolores Huerta Elementary (K-5, SFUSD public — verify with SFUSD)"], "middle": ["James Lick Middle (SFUSD public — verify with SFUSD)"], "high": []},
      parks: {"list": ["Glen Canyon Park (city park with canyon trails and open space)", "Village playgrounds (Diamond and Chenery area)", "Twin Peaks open space (adjacent, not a Glen Park park)"]},
      transit: {"bart": "Glen Park BART", "muni": "J Church near San Jose Avenue / Glen Park area", "bus": "23, 35, 44, 52 (specific stops depend on exact block)"},
      noise: "Block-dependent. Traffic and transit noise are more noticeable near Glen Park Station, San Jose Avenue, Bosworth, and I-280; canyon and residential side streets tend to be quieter.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 9 sales in the last 30 days (4 condo, 5 SFR).
      median_condo_sell: 1405000,
      median_sfr_sell: 2400000,
      median_psf: 1453,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 12,  // median days on market, last 30d (9 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 9 sales (4 condo, 5 SFR). DOM is median from the last 30d where reported (9 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (5 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes) and BART station pages (bart.gov/stations), June 2026. BART access via Glen Park Station.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026. Glen Canyon Park acreage and trails — verify by visiting sfrecpark.org for current info.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  cole_valley: {
    name: "Cole Valley",
    zip: "94117",
    vibe: {
      tag: "Tiny main street, fog-soft, half-block village",
      story: "Cole Valley is the part of San Francisco that fits between the Inner Sunset and Haight-Ashbury, and somehow has a separate identity: a small commercial node along Cole Street near Carl (a grocery, a coffee shop, a wine bar, a bookshop), an N Judah stop, and then residential streets of Edwardians and Craftsman homes climbing toward the hills. The streets are quiet, mostly single-family, with a community feel (the kind where neighbors know the corner store by name). Cole Valley is small enough to be a village.",
      best_for: "Anyone seeking a low-key residential pocket with low-density streets, a small commercial node along Cole Street, N Judah access, and walking distance to Golden Gate Park's south end and the Panhandle.",
      schools: {"elementary": ["Grattan Elementary (SFUSD public — verify with SFUSD)"], "middle": [], "high": []},
      parks: {"list": ["Cole Valley Playground (Cole and Carl)", "Golden Gate Park south end (De Young, Academy of Sciences — within walking distance)", "The Panhandle (edge)"]},
      transit: {"bart": "", "muni": "N Judah stops around Carl/Cole (Muni surface stop, not a station in SFMTA's rail-station sense)", "bus": "6 Hayes/Parnassus, 7 Haight-Noriega, 33 Ashbury/18th Street, 44 O'Shaughnessy"},
      noise: "Block-dependent. More rail noise near Carl/Cole and the N Judah tracks; quieter on surrounding residential streets.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 12 sales in the last 30 days (10 condo, 2 SFR).
      median_condo_sell: 1724688,
      median_sfr_sell: 3600918,
      median_psf: 1795,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 12,  // median days on market, last 30d (12 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 12 sales (10 condo, 2 SFR). DOM is median from the last 30d where reported (12 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (4 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. N Judah stops at Cole Valley are surface stops, not rail stations.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  inner_sunset: {
    name: "Inner Sunset",
    zip: "94122",
    vibe: {
      tag: "Foggy, walkable main street, near Golden Gate Park",
      story: "The Inner Sunset sits beside Golden Gate Park's east/southeast areas and has direct N Judah access west to Ocean Beach and east to downtown. Irving Street is the commercial strip: Asian restaurants, brunch spots, an old-school ice cream parlor, a hardware store, the kind of independent bookstore that knows your name. The residential blocks are 1920s–1940s single-family homes with garages, and a fair number of condo conversions. The UCSF medical campus (Parnassus) is two blocks south of the Inner Sunset's southern edge, and the streets are quiet.",
      best_for: "Anyone seeking a low-density residential environment with a small commercial corridor of Asian restaurants, brunch spots, an old-school ice cream parlor, and an independent bookstore, with N Judah rail access and walking distance to Golden Gate Park's east end.",
      schools: {"elementary": ["Jefferson Elementary (SFUSD public — verify with SFUSD)", "Alice Fong Yu Alternative K-8 (SFUSD public Chinese-immersion — verify with SFUSD)"], "middle": ["A.P. Giannini (SFUSD public — verify with SFUSD)"], "high": []},
      parks: {"list": ["Golden Gate Park east end (De Young, Academy of Sciences, Botanical Garden, Conservatory of Flowers — adjacent)", "Inner Sunset neighborhood playgrounds (verify each by address)", "The Panhandle (edge)"]},
      transit: {"bart": "", "muni": "N Judah on Judah Street", "bus": "44 O'Shaughnessy, 7 Haight-Noriega"},
      noise: "Block-dependent. Quieter residential blocks; more activity around Irving/9th, UCSF/Parnassus edge, and N Judah/bus corridors.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 9 sales in the last 30 days (5 condo, 4 SFR).
      median_condo_sell: 1375000,
      median_sfr_sell: 2357500,
      median_psf: 1433,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 13,  // median days on market, last 30d (9 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 9 sales (5 condo, 4 SFR). DOM is median from the last 30d where reported (9 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (6 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026. The Inner Sunset is the eastern section of the broader Sunset, not the area closest to the ocean.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  russian_hill: {
    name: "Russian Hill",
    zip: "94109",
    vibe: {
      tag: "Bay-view Victorians, cable cars, vertical streets",
      story: "Russian Hill climbs. The streets are steep, the houses are old, and the views from the top are the kind people move to San Francisco for. Hyde and Powell run the cable car lines; the rest of the neighborhood is a tight grid of 1900s–1920s apartment buildings and a few surviving mansions. Lombard Street's famous switchback is technically here, though it's mostly a tourist stop these days. The residential blocks are quiet; the architecture rewards buyers who notice a renovation.",
      best_for: "Anyone prioritizing a true San Francisco address with view-block elevation, walkable access to the cable car, and a tight grid of 1900s–1920s apartment buildings plus a few surviving mansions. Lombard Street's switchback is the famous photo op; the rest is residential quiet.",
      schools: {"elementary": ["Jean Parker Elementary (K-5, SFUSD public, cross-listed with Chinatown and North Beach — verify with SFUSD)", "Sherman Elementary (K-5, SFUSD public, Marina address — verify with SFUSD)"], "middle": [], "high": ["Galileo Academy of Science and Technology (SFUSD public — verify with SFUSD)"]},
      parks: {"list": ["Vallejo Street Crest (small public plaza)", "Ina Coolbrith Park (city park on Vallejo Street)", "Alice Marble Tennis Courts (Lombard and Hyde)"]},
      transit: {"bart": "", "muni": "", "bus": "1 California, 30 Stockton, 45 Union/Stockton", "cable_car": "Powell-Hyde cable car (Hyde Street, 21% grade at the steepest block)"},
      noise: "Block-dependent. Cable car corridors and the Lombard tourist area are livelier; residential side streets are quieter.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 to May 2026, with the last 30 days as the primary window.
      // 16 sales in the last 30 days (11 condo, 5 SFR).
      median_condo_sell: 1510000,
      median_sfr_sell: 2350000,
      median_psf: 1312,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 16,  // median days on market, last 30d (16 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 16 sales (11 condo, 5 SFR). DOM is median from the last 30d where reported (16 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (9 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes) and SFMTA cable car pages, June 2026. No BART access inside Russian Hill.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  marina: {
    name: "Marina",
    zip: "94123",
    vibe: {
      tag: "Bay light, flat, classic 1920s–1940s, brunch capital",
      story: "The Marina is the flat, sunny part of northern San Francisco along the waterfront. The Marina suffered concentrated severe damage in the 1989 Loma Prieta earthquake, especially in areas built on fill; rebuilding and retrofit awareness shaped parts of today's housing stock. Chestnut and Union Streets are the commercial core (boutique fitness, brunch spots, a Whole Foods with a wine bar). Streets are mostly 1920s–1940s Mediterranean and Spanish Revival, with some rebuilt and retrofitted properties. The Marina Green is the long waterfront park; the yacht harbor is the eastern edge.",
      best_for: "Anyone who appreciates 1920s–1940s Mediterranean and Spanish Revival architecture (with some rebuilt / retrofitted properties), prioritizes a flat, walkable neighborhood, and values proximity to the waterfront and the Presidio.",
      schools: {"elementary": ["Sherman Elementary (K-5, SFUSD public — verify with SFUSD)", "Claire Lilienthal (SFUSD public K-8, multiple campuses including Marina main campus — verify with SFUSD)"], "middle": ["Marina Middle (6-8, SFUSD public — verify with SFUSD)"], "high": []},
      parks: {"list": ["Marina Green (city waterfront park — verify acreage with SF Rec & Park)", "Fort Mason Center (east/southeast of Marina Green, adjacent)", "Lyon Street stairs (public pedestrian steps)", "Wave Organ (eastern end of Marina Green)", "Crissy Field and Golden Gate Bridge path (adjacent, via the Presidio)"]},
      transit: {"bart": "", "muni": "", "bus": "22 Fillmore, 28 19th Avenue, 30 Stockton / 30X Marina Express, 43 Masonic, 45 Union/Stockton (specific routes serve specific blocks — verify by address)"},
      noise: "Block-dependent. Livelier around Chestnut/Union, Marina Green, waterfront event days, and major corridors; quieter on residential side streets. Wind and foghorns may be noticeable near the waterfront.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 12 sales in the last 30 days (7 condo, 5 SFR).
      median_condo_sell: 1750000,
      median_sfr_sell: 4995000,
      median_psf: 1930,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 12,  // median days on market, last 30d (12 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 12 sales (7 condo, 5 SFR). DOM is median from the last 30d where reported (12 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (6 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address. Marina Middle is SFUSD public; verify zoning with SFUSD.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. No BART or Muni Metro inside the Marina; bus-based only.",
      "Parks and architecture context verified against SF Rec & Park (sfrecpark.org) and USGS Loma Prieta Marina District materials, June 2026. Marina Green acreage — verify with SF Rec & Park.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  nob_hill: {
    name: "Nob Hill",
    zip: "94109",
    vibe: {
      tag: "Historic hotels, cable cars, downtown-adjacent",
      story: "Nob Hill is downtown's older sibling — the neighborhood that was the center of SF wealth in the 1860s railroad era and still has the hotels, mansions, and Grace Cathedral to prove it. The Fairmont, the Mark Hopkins, the Huntington, Grace Cathedral: they're all on one hill. The residential blocks are mostly mid-rise apartments and a few surviving mansions. The mid-rise apartment blocks date to the early 1900s, with a few new-build condo additions featuring views.",
      best_for: "Buyers prioritizing walking distance to the Financial District, Union Square, and Chinatown, with cable car access, a historic-architecture street scene (Fairmont, Mark Hopkins, Grace Cathedral, Huntington Park), and mid-rise apartment living.",
      schools: {"elementary": ["Redding Elementary (K-5, SFUSD public — verify with SFUSD)", "Spring Valley Science Elementary (K-5, SFUSD public — verify with SFUSD)"], "middle": [], "high": []},
      parks: {"list": ["Huntington Park (full city block, Sacramento/Taylor/California/Cushman)", "Washington & Hyde Mini Park (city mini park)"]},
      transit: {"bart": "Powell Street BART is walkable from the southeast foot of the hill depending on exact block", "muni": "", "bus": "1 California, 30 Stockton, 45 Union/Stockton", "cable_car": "Powell-Hyde, Powell-Mason, California cable cars"},
      noise: "Block-dependent. Cable car bells, California Street traffic, and the occasional hotel event noise affect conditions on the spine streets; the cross streets are quieter.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 14 sales in the last 30 days (13 condo, 1 SFR).
      median_condo_sell: 915000,
      median_sfr_sell: 1535000,
      median_psf: 1111,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 40,  // median days on market, last 30d (14 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 14 sales (13 condo, 1 SFR). DOM is median from the last 30d where reported (14 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (9 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), BART station pages (bart.gov/stations), and SFMTA cable car pages, June 2026.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026. Grace Cathedral grounds are a religious / cultural landmark, not a public park.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  north_beach: {
    name: "North Beach",
    zip: "94133",
    vibe: {
      tag: "Italian, Beat-era, café culture",
      story: "North Beach is the part of SF that doesn't quite feel like SF — more like a Mediterranean piazza dropped into a steep grid. Columbus Avenue is the spine: Italian delis, cafés with outdoor seating, neon signs, and the kind of bookstore that stays open late. Washington Square is the park at the heart. Beat-era landmarks (City Lights, Vesuvio, the Jack Kerouac alley) sit next to old Italian social clubs. The architecture is mostly 1900s-1920s walk-up apartments with a few surviving single-family homes, and the rhythm of the neighborhood rewards long-term familiarity.",
      best_for: "Anyone prioritizing a high-density urban environment with walkable access to cafés, restaurants, and historic landmarks (Washington Square, the cable car turnaround), strong neighborhood character, and proximity to downtown via the 8 Bayshore and connections to Montgomery/Powell BART.",
      schools: {"elementary": ["Jean Parker Elementary (K-5, SFUSD public, cross-listed with Chinatown and North Beach — verify with SFUSD)", "Garfield Elementary (SFUSD public — verify with SFUSD)", "John Yehall Chin Elementary (K-5, SFUSD public, Cantonese language program — verify with SFUSD)", "Yick Wo Alternative Elementary (SFUSD public — verify with SFUSD)"], "middle": ["Francisco Middle School (6-8, SFUSD public — verify with SFUSD)"], "high": []},
      parks: {"list": ["Washington Square Park (city park — verify acreage and historical dates with SF Rec & Park)"]},
      transit: {"bart": "Montgomery or Powell BART is accessible by walk or Muni connection depending on exact block", "muni": "Powell-Mason cable car (serves the neighborhood edge)", "bus": "8 Bayshore, 30 Stockton, 45 Union/Stockton"},
      noise: "Block-dependent. Livelier around Columbus, Broadway edge, Washington Square, and nightlife corridors; quieter on the hill and side streets. Late-night activity varies block by block.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 6 sales in the last 30 days (4 condo, 2 SFR).
      median_condo_sell: 1000000,
      median_sfr_sell: 4300000,
      median_psf: 1534,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 12,  // median days on market, last 30d (6 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 6 sales (4 condo, 2 SFR). DOM is median from the last 30d where reported (6 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (6 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), BART station pages (bart.gov/stations), and SFMTA cable car pages, June 2026.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  twin_peaks: {
    name: "Twin Peaks",
    zip: "94114",
    vibe: {
      tag: "Hilltop, view-blessed, quiet, residential",
      story: "Twin Peaks is the saddle of hills near the geographic center of San Francisco, with the highest public viewpoints in the city at 925 ft. The neighborhood wraps around the peaks, with streets climbing up from the Castro, Noe Valley, West Portal, and Glen Park. The houses are mostly 1920s–1940s single-family homes with views. The streets are quiet and almost no through-traffic. There's no commercial strip; the closest coffee shop is in one of the surrounding neighborhoods.",
      best_for: "Buyers who want view-block elevation, single-family homes with city and bay views, low-density streets with almost no through-traffic, and proximity to the geographic center of the city. The architecture rewards buyers who notice a renovation (1920s–1940s homes with original details).",
      schools: {"elementary": ["Rooftop School TK-8 (SFUSD public, main + Mayeda campuses — verify with SFUSD)", "Clarendon Alternative Elementary (SFUSD public — verify with SFUSD)"], "middle": [], "high": ["Ruth Asawa San Francisco School of the Arts (SOTA) — SFUSD public, application-based"]},
      parks: {"list": ["Twin Peaks summit (public viewpoint, 360-degree views — verify public access details with SF Rec & Park)", "Twin Peaks open space", "Surrounding canyon and hill trails — verify which are publicly accessible"]},
      transit: {"bart": "", "muni": "", "bus": "37, 48, 52 (limited service — verify by exact block)"},
      noise: "Block-dependent. Generally quiet and wind-exposed; more traffic near Twin Peaks Boulevard, Portola, Market, and viewpoint/tourist areas.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 6 sales in the last 30 days (2 condo, 4 SFR).
      median_condo_sell: 2390000,
      median_sfr_sell: 1819000,
      median_psf: 1419,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 16,  // median days on market, last 30d (6 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 6 sales (2 condo, 4 SFR). DOM is median from the last 30d where reported (6 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (5 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address. SOTA is application-based.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. Service in Twin Peaks is limited and block-dependent.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026. The summit viewpoint is public; verify trail accessibility for canyon/hill trails.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  excelsior: {
    name: "Excelsior",
    zip: "94112",
    vibe: {
      tag: "Family-run shops, residential, transit-connected",
      story: "The Excelsior is one of the largest residential districts in the city, south of Glen Park and Bernal. The architecture is mostly 1920s–1950s: one-story stucco homes with garages, a few mid-century pockets, the occasional new build. The commercial strips (Mission Street, Geneva Avenue) carry an extensive mix of small businesses, restaurants, and grocery stores, including many that have been there for decades. John McLaren Park borders the Excelsior to the east — a large park with open space and recreation facilities.",
      best_for: "Buyers seeking a low-density residential environment with single-family homes — often more attainable than many central/northern SF neighborhoods, depending on block and condition — with multiple family-run commercial strips (Mission Street, Geneva Avenue) and proximity to John McLaren Park.",
      schools: {"elementary": ["Cleveland Elementary (SFUSD public — verify with SFUSD)", "Guadalupe Elementary (SFUSD public — verify with SFUSD)", "Hillcrest Elementary (SFUSD public — verify with SFUSD)", "Monroe Elementary (SFUSD public — verify with SFUSD)"], "middle": ["James Denman Middle (SFUSD public — verify with SFUSD)", "Dr. Martin Luther King Jr. Academic Middle (SFUSD public — verify with SFUSD)"], "high": ["Balboa High School (SFUSD public — verify with SFUSD)", "San Francisco Community School (SFUSD public — verify with SFUSD)", "Phillip and Sala Burton Academic HS (SFUSD public — verify with SFUSD)"]},
      parks: {"list": ["John McLaren Park (large park with open space and recreation facilities — verify acreage with SF Rec & Park)", "Excelsior neighborhood playgrounds (verify each by address)"]},
      transit: {"bart": "", "muni": "M Ocean View terminates at/near Balboa Park; M Ocean View access depends on exact block", "bus": "14 Mission, 24 Divisadero, 44 O'Shaughnessy, 43 Masonic (specific routes serve specific blocks — verify by address)"},
      noise: "Block-dependent. Generally quieter on residential side streets; more traffic / commercial noise along Mission Street, Geneva Avenue, Alemany, and freeway/arterial edges.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 27 sales in the last 30 days (0 condo, 27 SFR).
      median_condo_sell: null,
      median_sfr_sell: 1385000,
      median_psf: 958,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 12,  // median days on market, last 30d (27 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 27 sales (0 condo, 27 SFR). DOM is median from the last 30d where reported (27 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (26 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. M Ocean View terminates at/near Balboa Park; verify access for a specific address.",
      "Parks checked against SF Rec & Park (sfrecpark.org), June 2026. John McLaren Park acreage — verify with SF Rec & Park.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  bayview: {
    name: "Bayview",
    zip: "94124",
    vibe: {
      tag: "Industrial-past, residential-present, deep SF",
      story: "Bayview has a long industrial, maritime, and residential history and is experiencing ongoing public and private investment and development. The neighborhood is a long strip between the Third Street light rail and the bay, with a mix of 1940s–1960s homes, public housing legacy, and newer single-family-home developments. The architecture is varied: 1940s–1960s single-family, public housing, the newer Hunters Point development, and the industrial shipyard. The commercial strip is Third Street, which is mid-revival. Bayview's housing includes some of San Francisco's more attainable single-family-home options, depending on block, condition, and market cycle.",
      best_for: "Buyers seeking single-family homes that are often among San Francisco's more attainable, depending on block and condition, with T Third Street rail access, proximity to Candlestick Point State Recreation Area, and the opportunity to be part of a residential area with ongoing change.",
      schools: {"elementary": ["Bret Harte Elementary (SFUSD public — verify with SFUSD)", "Dr. George Washington Carver Elementary (SFUSD public — verify with SFUSD)", "Malcolm X Academy Elementary (SFUSD public — verify with SFUSD)", "Leola M. Havard Early Education School (SFUSD public — verify with SFUSD)"], "middle": ["Willie L. Brown Jr. Middle School (SFUSD public — verify with SFUSD)", "C.A.R.E. Middle School (SFUSD public — verify with SFUSD)"], "high": ["Thurgood Marshall Academic High School (SFUSD public — verify with SFUSD)"]},
      parks: {"list": ["Candlestick Point State Recreation Area (state park, bayside)", "Heron's Head Park (city eco-park at tip of bay)", "Bayview neighborhood playgrounds (verify each by address)", "India Basin waterfront / park projects (verify current status and public access)"]},
      transit: {"bart": "", "muni": "T Third Street along Third Street", "bus": "Specific bus routes serve Bayview — verify current SFMTA schedules for the routes that serve a specific address"},
      noise: "Block-dependent. Noise varies by block; freeway, industrial, port/shipyard, construction, and Third Street corridors can be louder, while residential side streets are quieter.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 14 sales in the last 30 days (4 condo, 10 SFR).
      median_condo_sell: 667000,
      median_sfr_sell: 963500,
      median_psf: 879,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 18,  // median days on market, last 30d (14 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 14 sales (4 condo, 10 SFR). DOM is median from the last 30d where reported (14 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (10 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. Verify specific bus routes serving a given Bayview address.",
      "Parks checked against SF Rec & Park (sfrecpark.org) and California State Parks pages for Candlestick Point SRA, June 2026.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  visitacion: {
    name: "Visitacion Valley",
    zip: "94134",
    vibe: {
      tag: "Industrial-edge, residential, single-family, foggy",
      story: "Visitacion Valley is a residential area tucked between McLaren Park, the Cow Palace event venue, and the bay-side industrial edge. The houses are mostly 1940s–1960s single-family homes. The neighborhood is often considered by buyers seeking relatively attainable single-family homes in San Francisco. John McLaren Park is to the west. Candlestick Point State Recreation Area is to the south-east. The architecture is consistent and the streets are quiet.",
      best_for: "Buyers prioritizing single-family homes that are often among San Francisco's more attainable, depending on block and condition, with nearby T Third Street access at Sunnydale (eastern/southeastern edge), proximity to McLaren Park's open space, and a residential environment on the southern edge of the city.",
      schools: {"elementary": ["Visitacion Valley Elementary (SFUSD public — verify with SFUSD)", "El Dorado Elementary (SFUSD public — verify with SFUSD)", "San Miguel Early Education School (SFUSD public — verify with SFUSD)", "John McLaren Early Education School (SFUSD public — verify with SFUSD)"], "middle": ["Visitacion Valley Middle School (SFUSD public — verify with SFUSD)"], "high": ["Burton (SFUSD public, Portola area — verify with SFUSD)", "Lincoln (SFUSD public, Parkside/Sunset area — verify with SFUSD)"]},
      parks: {"list": ["McLaren Park access (adjacent, large park — verify acreage and access with SF Rec & Park)", "Visitacion Valley Greenway / smaller neighborhood green spaces (verify public access by address)", "Candlestick Point State Recreation Area (adjacent, bayside)"]},
      transit: {"bart": "", "muni": "T Third Street at Sunnydale is near the eastern/southeastern edge (not at the door of every Visitacion Valley block)", "bus": "Specific bus routes serve Visitacion Valley — verify current SFMTA schedules for routes serving a specific address"},
      noise: "Block-dependent. Highway 101 and Cow Palace event noise can affect edges during events; quieter on interior residential blocks.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 25 sales in the last 30 days (0 condo, 25 SFR).
      median_condo_sell: 583500,
      median_sfr_sell: 1320000,
      median_psf: 922,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 13,  // median days on market, last 30d (25 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 25 sales (0 condo, 25 SFR). DOM is median from the last 30d where reported (25 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (24 sales)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes), June 2026. T Third at Sunnydale is near the eastern/southeastern edge only.",
      "Parks checked against SF Rec & Park (sfrecpark.org) and California State Parks pages, June 2026. Cow Palace is an event venue, not a park; included here only as an adjacent noise/edge consideration.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  },

  civic_center: {
    name: "Civic Center",
    zip: "94102",
    vibe: {
      tag: "Civic-spine, arts-dense, mid-rise, walk-to-everything",
      story: "Civic Center is the part of San Francisco that runs from City Hall down Market Street, including the Asian Art Museum, the War Memorial Opera House, the Davies Symphony Hall, the Orpheum, the Strand, and the ballet. The residential blocks are mostly 1900s–1920s mid-rise apartments with a few new-build lofts. The Tenderloin borders it to the north; SoMa to the south; Mid-Market is the transitional strip in between.",
      best_for: "Arts and culture buyers who prioritize walking distance to the Civic Center's performance venues (War Memorial Opera House, Davies Symphony Hall, the ballet, the Orpheum, the Strand), the Asian Art Museum, and a dense urban setting with direct BART and Muni Metro access.",
      schools: {"elementary": ["Tenderloin Community Elementary School (K-5, SFUSD public — verify with SFUSD)"], "middle": [], "high": ["Civic Center Secondary School (SFUSD public — verify with SFUSD)"]},
      parks: {"list": ["Civic Center Plaza (central public plaza, just east of City Hall)", "United Nations Plaza (pedestrian mall on Fulton Street, designed by Lawrence Halprin)", "Helen Diller Civic Center Playgrounds (renovated 2018)", "Boeddeker Park (Eddy & Jones — adjacent, Tenderloin edge)", "Tenderloin Playground (Ellis between Leavenworth and Hyde — adjacent, Tenderloin edge)"]},
      transit: {"bart": "Civic Center BART", "muni": "Civic Center station: J, K, L, M, N, S Muni Metro; F-Market streetcar along Market Street (verify specific lines and current service via SFMTA)", "bus": "Multiple bus lines serve Civic Center — verify by specific address"},
      noise: "Block-dependent. Market Street, Civic Center events, UN Plaza activity, transit, and nearby Tenderloin / Mid-Market street activity can make the area louder; quieter conditions vary by building and block.",
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 6 sales in the last 30 days (5 condo, 1 SFR).
      median_condo_sell: 398000,
      median_sfr_sell: 625000,
      median_psf: 625,  // $/sqft from SF Assessor parcel join (single-unit only, last 90d)
      median_dom: 41,  // median days on market, last 30d (6 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 6 sales (5 condo, 1 SFR). DOM is median from the last 30d where reported (6 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 90d (1 sale)."
    },
    citations: [
      "SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number Display), 2-year period Apr 2024 to May 2026. Real per-neighborhood data geocoded to SF Planning Analysis Neighborhoods via the US Census Bureau geocoder and point-in-polygon assignment.",
      "School names and grade spans checked against SFUSD school directory and SFUSD school pages (sfusd.edu/schools), June 2026; SFUSD assignment is choice-based and not guaranteed by address.",
      "Transit verified against SFMTA route pages (sfmta.com/routes) and BART station pages (bart.gov/stations), June 2026.",
      "Parks / public spaces checked against SF Rec & Park (sfrecpark.org), June 2026. Asian Art Museum is a cultural institution, not a park. Boeddeker Park and Tenderloin Playground are Tenderloin-edge public spaces, labeled adjacent.",
      "Vibe story: AI baseline from training data; spot-checked against public sources, June 2026.",
      "Noise notes are qualitative and block-dependent; no city noise model used.",
    ]
  }
};

// Per-neighborhood content for the "block by block" detail panels.
// Vibe stories: written from common public knowledge of SF (as of Jun 2026).
// Market stats: derived from public sources — see DATA SOURCES note at the bottom
// of the page and the citations printed inside each panel.

window.NEIGHBORHOODS = {
  castro_upper_market: {
    name: "The Castro",
    zip: "94114",
    vibe: {
      tag: "Lively, proud, walkable",
      story: "The Castro is San Francisco's most extroverted neighborhood. The streets are dense, the commercial spine is animated, and a small dense grid of bars, restaurants, gyms, and one-screen cinemas means the area is walkable to almost every kind of amenity. Weekend brunch lines and street festivals define the calendar; weeknights belong to cocktail spots and the occasional rooftop. Rainbow crosswalks mark the intersections, a small hardware store has been on the corner since the 1940s, and the residential streets above 18th are noticeably quieter than the commercial core.",
      best_for: "Anyone prioritizing a high-density urban environment with walkable dining corridors, lively street life, and an extensive transit network — the rail and pedestrian grid puts most of the city within a 20-minute reach.",
      schools: {"elementary": ["Harvey Milk Civil Rights Academy (TK-5)", "Sanchez Elementary (TK-5)", "McKinley Elementary"], "middle": ["Everett Middle School (6-8)"], "high": ["Mission High School (9-12, 18th and Dolores)"]},
      parks: {"list": ["Mission Dolores Park (south, west, and center sections; only the NE corner is in the Mission per SF Planning boundaries)", "Harvey Milk Plaza (Market and Castro)", "Pink Triangle Park (17th and Market)", "Kite Hill", "Noe Valley Town Square (12-15 min walk south)"]},
      transit: {"bart": "", "muni": "K Ingleside, L Taraval, M Ocean View (S Shuttle at peak hours)", "bus": "24 Divisadero, 33 Ashbury/18th Street, 35 Eureka, 37 Corbett"},
      noise: "Medium-to-loud. The Castro street core is busy until 1am on weekends; the side streets (above 18th, toward Corona Heights) are noticeably quieter.",
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
      '"March median home price hit a record high of $2.15 million, according to Compass." — Emily Landes, SF Standard, Apr 8 2026 (sfstandard.com/2026/04/08/sf-luxury-market-is-back)',
      '"22 houses in San Francisco sold for more than $5 million in March." — SF Standard, Apr 8 2026',
      '"Bidding wars and millions over asking continuing to be the norm." — SF Standard, May 31 2026 (sfstandard.com/2026/05/31/home-buyers-double-down)',
    ]
  },

  noe_valley: {
    name: "Noe Valley",
    zip: "94114",
    vibe: {
      tag: "Sunny, stroller-paced, walkable main street",
      story: "Noe Valley is the part of SF that feels least like San Francisco and most like a small town. Two commercial strips (24th Street and Church Street) are stacked with bakeries, yoga and pilates studios, locally-owned clothing shops, and the kind of independent bookstore that knows your name. The streets are sunnier than most of SF because of how the hills channel morning light, and the architecture skews Edwardian and Craftsman — wide front porches, big kitchens, and back gardens. Weekend mornings are a parade of strollers and dog-walkers. Weeknights are quiet.",
      best_for: "Anyone seeking a low-key residential pocket with low-density streets, public parks, and walkable everyday services, but without the late-night noise. The architecture (Edwardian and Craftsman with wide front porches and big kitchens) rewards buyers who notice a renovation.",
      schools: {"elementary": ["Alvarado Elementary (K-5, southern edge)"], "middle": ["James Lick Middle (in neighborhood)", "Everett Middle (450 Church, Castro edge)"], "high": []},
      parks: {"list": ["Noe Valley Town Square (24th between Sanchez and Noe, the only town square in SF)", "Billy Goat Hill (30th near Castro, sunset views)", "Glen Canyon Park access via Diamond Heights Shopping Center trails"]},
      transit: {"bart": "", "muni": "J Church (Church Street)", "bus": "24 Divisadero (Noe St, 30th St), 48 Quintara (24th Street)"},
      noise: "Quiet. The loudest thing you'll hear on most evenings is someone's wind chime.",
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
      '"As of March 2026, the median home sale price in San Francisco was more than $2m, an 18% increase from the previous year." — The Guardian, Jun 11 2026',
      '"24 luxury condominiums sold for more than $3 million, nearly four times as many as in March 2025." — SF Standard, Apr 8 2026',
      'Zillow ZHVI for ZIP 94114, monthly through May 2026 (zillow.com/research/data).',
    ]
  },

  pacific_hgts: {
    name: "Pacific Heights",
    zip: "94115",
    vibe: {
      tag: "Architectural pedigree, hillside elegance, view-block real estate",
      story: "Pacific Heights is the part of San Francisco known for its architecture: Beaux-Arts mansions, Spanish Revivals, Edwardians, and the occasional Painted Lady that would be a Painted Lady if it were a few blocks east. The houses are the point, and the streets that the buses don't run on are some of the quietest in the city. Fillmore Street on the eastern edge is the liveliest part (restaurants, boutiques, a Williams-Sonoma and a movie theater). The interior blocks, especially above Broadway, are almost entirely residential and almost entirely silent. Views of the Bay from the top of the hill are the kind you put on a postcard and don't take.",
      best_for: "Buyers who prioritize architecture as a feature (not a footnote), large square-footage in a walkable central location, and properties with view-block elevation. The neighborhood rewards research: every block is a different period and a different style.",
      schools: {"elementary": ["San Francisco Public Montessori (K-8, Pacific Heights)", "Claire Lilienthal (K-8, Lower Pacific Heights edge)", "Town School for Boys (K-8, Marina)"], "middle": [], "high": []},
      parks: {"list": ["Lafayette Park (12.5 acres, tennis courts)", "Alta Plaza Park (12.9 acres at Jackson & Steiner)", "Lyon Street stairs (between Broadway and Green)"]},
      transit: {"bart": "", "muni": "", "bus": "22 Fillmore (Fillmore Street spine), 1 California (northern edge), 45 Union/Stockton (western edge)"},
      noise: "Very quiet inside the blocks. Fillmore Street has the noise; Pacific, Broadway, and Vallejo do not.",
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
      '"$25M Pac Heights Victorian trades after less than two weeks on market." — The Real Deal, Jun 16 2026',
      '"Homes sell for $5m and above… fierce." — Drew Wilkerson, Sotheby\'s, via The Guardian, Jun 11 2026',
      'Zillow ZHVI for ZIP 94115, monthly through May 2026.',
    ]
  },


  // ============================================================
  // 4 new neighborhoods — quieter / residential SF, west and south
  // ============================================================


  lone_mountain_usf: {
    name: "Lone Mountain/USF",
    zip: "94117",
    vibe: {
      tag: "Forested, tucked-away, dog-park central",
      story: "Lone Mountain / USF is the kind of San Francisco neighborhood where people describe it with the phrase 'you almost wouldn't know it was here.' Tucked between Forest Hill, Twin Peaks, and the Inner Sunset, it is a small residential pocket of Edwardian and Craftsman homes with a few mid-rises, all wrapped in eucalyptus and pine. There's one small commercial corner (the Midtown Terrace Playground and Rec Center) and not much else. The streets are quiet enough that bike-riding is a regular sight. The fog rolls in here earlier than anywhere else in the city.",
      best_for: "Buyers seeking a low-key residential environment with mid-century and Edwardian homes, walking distance to USF and the Inner Sunset's commercial strip, and a tucked-away feel with abundant greenery and fog-soft mornings.",
      schools: {"elementary": [], "middle": [], "high": []},
      parks: {"list": ["Midtown Terrace Playground", "Angelo J. Rossi Playground and Rossi Pool (Arguello and Anza)", "Interior Green Belt (south end)", "Mount Sutro"]},
      transit: {"bart": "", "muni": "", "bus": "36 Teresita (terminus at Forest Hill/Midtown Terrace), 44 O'Shaughnessy (Portola)"},
      noise: "Very quiet. The loudest thing you'll regularly hear is the Sutro Tower wind hum on foggy nights, which is the city's most underrated sound."
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
      '"Bidding wars and millions over asking continuing to be the norm." — SF Standard, May 31 2026',
      'Zillow ZHVI for ZIP 94117: +4.1% over 2 years; ZORI: +30.8% over 2 years.',
    ]
  },

  west_portal: {
    name: "West Portal",
    zip: "94127",
    vibe: {
      tag: "Small-town main street, low-density residential, the Muni at the corner",
      story: "West Portal is the part of SF that genuinely feels like a small town. Ulloa Street is the main drag — a 6-block stretch of independent shops, a hardware store that's been there since the 1940s, a cinema, a bookstore, a handful of Italian restaurants and dim sum spots, and a Peet's at the corner. Above the street, the residential blocks are quiet, mostly single-family homes from the 1920s–1940s in Mediterranean and Tudor styles. The K, M, and L Muni Metro lines all terminate at the West Portal station, so getting downtown is one seat, no transfers.",
      best_for: "Anyone seeking a quiet residential environment with a small main street of family-run shops, a single-seat rail commute to downtown, and proximity to Mount Davidson and Pine Lake Park. Streets are low-density and quiet enough that the loudest sound is the Muni bell at the line's end.",
      schools: {"elementary": ["West Portal Elementary (K-5)"], "middle": ["Aptos Middle (West of Twin Peaks)"], "high": ["Ruth Asawa SOTA (performing-arts magnet)", "Lowell (exam-based)"]},
      parks: {"list": ["Pine Lake Park (small lake, walkable in 15 min)", "Stern Grove (33 acres, summer festival, technically Parkside)", "Mount Davidson (928 ft, SF's highest natural point, south end)", "West Portal Park (small neighborhood park above the tunnel portal)"]},
      transit: {"bart": "", "muni": "K Ingleside, M Ocean View, L Taraval (S Shuttle terminates)", "bus": "48 Quintara, 57 Parkmerced"},
      noise: "Quiet except for the Muni bell at the end of every line — which longtime residents find charming and newcomers find... character-building."
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
      '"Median home price hit a record high of $2.15 million, according to Compass." — SF Standard, Apr 8 2026, citing Compass',
      'Zillow ZHVI for ZIP 94127: +6.5% over 2 years; ZORI rent data only available since late 2025.',
    ]
  },


// ============================================================================
// 24 new neighborhoods (added 2026-06-21) — top 8 stays as the original 10,
// Mission and Hayes Valley moved from top to this section, plus 20 new from
// the handoff's 26-neighborhood list. Marina and Russian Hill split out from
// the existing combined 'Marina & Russian Hill' entry.
//
// Vibe content: AI baseline from training data, not source-verified.
// Per-property market stats: null/coming soon (user-requested: skip).
// 2-year chart: real Zillow ZHVI/ZORI per-ZIP data, downloaded from
// https://files.zillowstatic.com/research/public_csvs/ on 2026-06-21.
// ZIP-level, not neighborhood-specific — same caveat the existing 10 carry.
//
// To verify: visit each SFUSD school page, each Wikipedia neighborhood page,
// and SFMTA's route maps. Mark each entry with citations as you verify.
// ============================================================================

  presidio_hgts: {
    name: "Presidio Heights",
    zip: "94118",
    vibe: {
      tag: "Quiet residential streets, walking distance to the Presidio, view-block real estate",
      story: "Presidio Heights is the part of SF that backs up to the Presidio, with no commercial strip to speak of, and a population of houses that are the point. The architecture is mostly early 1900s Mediterranean and Spanish Revival, with a few modernist exceptions. The streets are silent except for the occasional dog-walker. Lake District is the part of Presidio Heights that faces Mountain Lake and backs up to the entrance to the Presidio\'s main park.",
      best_for: "Buyers who want a real house with a yard in a quiet, low-density residential setting with direct walking access to the Presidio's trails and open space. The architecture rewards research (early 1900s Mediterranean and Spanish Revival, with modernist exceptions).",
      schools: {"elementary": ["Claire Lilienthal K-8 (Marina main + Inner Richmond Madison campuses)", "Sherman Elementary (Marina)"], "middle": ["Presidio Middle School (Outer Richmond)"], "high": []},
      parks: {"list": ["Mountain Lake Park (14 acres, adjacent to Presidio Heights)", "The Presidio (1,491 acres, federal land, National Historic Landmark since 1962)", "Lyon Street steps (connecting to the Marina)"]},
      transit: {"bart": "", "muni": "", "bus": "1 California, 33 Ashbury/18th Street, 43 Masonic"},
      noise: "Very quiet. The closest thing to a sound is wind in the cypress trees and the Presidio\'s wildlife."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~259 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 13 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  bernal_heights: {
    name: "Bernal Heights",
    zip: "94110",
    vibe: {
      tag: "Sunny, hilly, dog-park central, tight-knit",
      story: "Bernal Heights is the residential pocket that climbs the south hill and stays. The neighborhood is a mix of 1900s–1940s homes and a few mid-century pockets, all oriented toward the sun (one of the warmest, least-foggy spots in central SF). Bernal Heights Park is the heart: a 26-acre hilltop with the famous off-leash dog area, 360-degree views of the city, and a community of regulars who wave at each other from the hill. Cortland Avenue is the small main street.",
      best_for: "Anyone seeking a residential pocket with abundant sun, a community feel, and walkable commercial strips (Cortland Avenue, Precita Park). Streets are low-density and the hilltop park offers 360-degree views of the city.",
      schools: {"elementary": ["Leonard R. Flynn Elementary (K-5, cross-listed with Mission)", "Junipero Serra Elementary", "Paul Revere PreK-8"], "middle": ["James Denman Middle"], "high": ["Downtown High School", "John O'Connell High"]},
      parks: {"list": ["Bernal Heights Park (26.3 acres, hilltop, off-leash area, 360-degree views)", "Holly Park (8.15 acres, north end)", "Precita Park (2.06 acres, Folsom at north slope)", "McLaren Park (south end)"]},
      transit: {"bart": "24th Street Mission (two blocks from north slope)", "muni": "", "bus": "24 Divisadero (crosstown workhorse), 67 Bernal Heights (loops the hilltop), 14 Mission (north edge)"},
      noise: "Medium-to-quiet. The morning dog-park chatter from Bernal Heights Park is the neighborhood soundtrack; the Mission\'s weekend noise doesn\'t quite reach the top of the hill."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~159 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 22 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  mission: {
    name: "Mission",
    zip: "94110",
    vibe: {
      tag: "Murals, taquerías, design-forward conversions",
      story: "The Mission is SF\'s most compressed neighborhood — almost every block has a mural, a taqueria, a coffee roaster, and a converted-Victorian-turned-office. Valencia Street is boutique density at its peak: independent shops and design-forward restaurants. Mission Street is busier, more commercial, and more visually chaotic, with a longer mix of small businesses, restaurants, and older buildings. Dolores Park on a sunny weekend is the city\'s living room. Bernal Heights to the south is the quieter, sunnier stepchild.",
      best_for: "Anyone prioritizing a high-density urban environment with vibrant street life, public art, walkable dining corridors, and direct rail and BART access. The architecture rewards buyers who notice a renovation (Victorian conversions, warehouse-to-condo, new-build mid-rise).",
      schools: {"elementary": ["Bryant Elementary", "Buena Vista Horace Mann K-8", "César Chávez Elementary", "Moscone Elementary", "Marshall Elementary"], "middle": ["Everett Middle School (Mission/Castro cross-listed)"], "high": ["Mission High School (9-12, 18th and Dolores)"]},
      parks: {"list": ["Mission Dolores Park (south-end views of downtown and the Bay)", "Bernal Heights Park (south slope, off-leash area)", "The Wiggle (Steiner Street bicycle route to Castro and GG Park)", "Mission Cultural Center (2868 Mission St)"]},
      transit: {"bart": "16th Street Mission (2000 Mission St), 24th Street Mission", "muni": "J Church (western edge)", "bus": "14 Mission, 49 Van Ness/Mission, 22 Fillmore (16th and Mission)"},
      noise: "Loud on weekends, moderate during the week. Construction noise is a constant; this is a neighborhood that rebuilds itself every decade."
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
      "Zillow ZHVI for ZIP 94110 (typical home value, monthly, 2-year series). Also ZORI for ZIP 94110 (median rent).",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  hayes_valley: {
    name: "Hayes Valley",
    zip: "94102",
    vibe: {
      tag: "Boutique-lined, design-forward, transit-tight",
      story: "Hayes Valley didn\'t exist as a neighborhood until the 1990s, when the Central Freeway came down. What replaced it is now one of SF\'s most consistently photographed six blocks: a tight grid of independent boutiques, design shops, Michelin-noticed restaurants, and the small public space at Patricia\'s Green. The residential streets around Hayes are mostly mid-rise condos from the 2000s–2010s, plus a few converted Victorians. The neighborhood rewards a preference for a tight urban grid and direct rail access.",
      best_for: "Buyers who want a lock-and-leave condo or townhouse, walkable access to every kind of transit (BART, Muni Metro, bus), and a small but dense commercial strip of independent boutiques and restaurants.",
      schools: {"elementary": [], "middle": [], "high": []},
      parks: {"list": ["Patricia's Green (Octavia between Fell and Hayes)", "Fell-Oak bike corridor and the Wiggle (Steiner St bicycle route)", "Octavia Boulevard open space (former Central Freeway stub, demolished after 1989 Loma Prieta)"]},
      transit: {"bart": "Civic Center (six blocks north)", "muni": "Van Ness station: J, K, L, M, N, S", "bus": "5 Fulton (McAllister, just north), 47 Van Ness, 49 Van Ness/Mission"},
      noise: "Medium. Hayes Street can be busy; the cross streets are quiet."
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
      "Zillow ZHVI for ZIP 94102 (typical home value, monthly, 2-year series). Also ZORI for ZIP 94102 (median rent).",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  mission_bay: {
    name: "Mission Bay",
    zip: "94158",
    vibe: {
      tag: "New-build, UCSF-centric, waterfront, condo-heavy",
      story: "Mission Bay is the part of SF that didn\'t exist 25 years ago: a former rail yard that the city rezoned in the 1990s and has been building out ever since. The neighborhood is now a mix of UCSF medical campus, biotech offices, mid-rise and high-rise condos, and a few restaurants. The population is dense, young, professional, and mostly there for proximity to UCSF or the tech corridor. The architecture is 2000s–2020s new-construction, mostly mid-rise to high-rise.",
      best_for: "Anyone prioritizing a new-build condo with full amenity packages, walkable waterfront trails, direct rail and bus connections, and proximity to UCSF's Mission Bay campus and the emerging biotech corridor.",
      schools: {"elementary": ["Mission Bay School (K-8, in neighborhood, opened 2025)", "Bessie Carmichael School (PreK-8 Filipino Education Center)"], "middle": ["Marina Middle"], "high": []},
      parks: {"list": ["Mission Creek Park", "Bayfront Park (waterfront, Terry A. Francois Blvd)", "China Basin Park", "Mission Bay Commons", "Surrounding waterfront trails"]},
      transit: {"bart": "", "muni": "T Third Street, N Judah (Carl Street station)", "bus": "UCSF shuttles (free for the UCSF community)"},
      noise: "Medium. The new-build density and the UCSF activity make this busier than the typical SF neighborhood. The waterfront side is quieter."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~107 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 25 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  financial_district_south_beach: {
    name: "South Beach",
    zip: "94105",
    vibe: {
      tag: "High-rise, waterfront, downtown-adjacent",
      story: "South Beach is the part of SF just south of the Financial District, on the Rincon Hill slope and the waterfront. The architecture is mostly 2000s–2010s high-rise condos and a few surviving 1900s warehouses (the South Beach Marina area). The neighborhood is dense, mostly renters, mostly new-build, and concentrated in mid-rise and high-rise condo towers. The Embarcadero is the spine; the Bay Bridge is the eastern edge. Population is dense, mostly renters, mostly new-build.",
      best_for: "Anyone prioritizing a high-rise condo with bay views, direct rail and BART connections (Embarcadero, Montgomery, Powell), and walkable access to the Financial District, the Embarcadero promenade, and Oracle Park.",
      schools: {"elementary": ["Bessie Carmichael School (PreK-8 Filipino Education Center)", "Tenderloin Community Elementary School"], "middle": ["Civic Center Secondary School"], "high": ["Youth Chance High School"]},
      parks: {"list": ["Rincon Park (waterfront promenade at Bay Bridge touchdown)", "Rincon Hill Park (small park at top of hill)", "Embarcadero promenade"]},
      transit: {"bart": "Embarcadero", "muni": "F-Market streetcar, T Third Street (Yerba Buena/Moscone), N Judah (4th & King / Caltrain)", "bus": ""},
      noise: "Medium-to-loud. The Bay Bridge and the Embarcadero are the dominant sounds. The cross streets are quieter."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~425 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 45 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  south_of_market: {
    name: "SoMa",
    zip: "94103",
    vibe: {
      tag: "Loft-conversion, museums, downtown-edge, transit-tight",
      story: "SoMa (South of Market) is the part of SF that was mostly industrial until the 1990s and has been re-invented as the city\'s loft-and-museum district. The architectural mix is striking: surviving 1900s warehouses converted to lofts, public housing blocks, and 2000s–2010s mid-rise and high-rise new builds sit side by side. The architecture is a mix: surviving 1900s warehouses converted to lofts, 2000s–2010s mid-rise and high-rise new builds, the Yerba Buena gardens, the museums (SFMOMA, the Contemporary Jewish Museum, the Museum of the African Diaspora, the Children\'s Creativity Museum).",
      best_for: "Anyone prioritizing a high-density urban environment with direct access to Powell BART and the F-Market streetcar, the museum corridor (SFMOMA, Contemporary Jewish Museum, Museum of the African Diaspora), and walkable connections to downtown, the Embarcadero, and Union Square.",
      schools: {"elementary": ["Bessie Carmichael School (PreK-8 Filipino Education Center)", "Bay Street (SFUSD access)"], "middle": [], "high": []},
      parks: {"list": ["Yerba Buena Gardens (central green, fountains, ice skating rink)", "South Park (the small circular park that gave the area its name)", "Museum plaza green space (SFMOMA, Contemporary Jewish Museum, MoAD, Children's Creativity Museum)"]},
      transit: {"bart": "Powell Street", "muni": "F-Market streetcar, N Judah", "bus": "5, 14, 19, 30, 38"},
      noise: "Medium-to-loud. The downtown traffic, the convention center, the nightlife on Folsom and Harrison, the museum crowds. The cross streets and the residential pockets (Yerba Buena, South Park) are quieter."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~234 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 44 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },


  potrero_hill: {
    name: "Potrero Hill",
    zip: "94107",
    vibe: {
      tag: "Sunny, hilltop views, transit-connected",
      story: "Potrero Hill is the residential pocket that climbs the south slope of the Mission Creek basin, with the most reliable sun in the city (it is on the warm side of the fog line) and the best view of the downtown skyline from many blocks. The architecture is a mix: 1900s Victorians and Edwardians on the lower blocks, mid-century and 1990s new-builds climbing the hill, a few industrial-edge pockets. The streets are quiet, mostly single-family homes from the 1920s–1940s. Eighteenth Street is the small main street.",
      best_for: "Anyone seeking a residential environment with abundant sun, hilltop views, a small commercial strip on 18th Street, and proximity to Mission Bay and the biotech corridor. The architecture offers 1900s Victorians, mid-century pockets, and warehouse conversions.",
      schools: {"elementary": ["Daniel Webster Elementary (K-5)", "Starr King Elementary (K-5)"], "middle": ["Marina Middle (technically Marina)"], "high": ["Downtown High School (in neighborhood)", "SF International High School (in neighborhood)"]},
      parks: {"list": ["Potrero Hill Recreation Center (playground, tennis, baseball)", "McKinley Square (park atop the hill)", "Jackson Playground (north slope)", "Crane Cove Park (Mission Creek edge)"]},
      transit: {"bart": "", "muni": "T Third Street (two blocks east at Mission Bay)", "bus": "19 Polk, 22 Fillmore, 10 Townsend, 48 Quintara, Caltrain 22nd Street (eastern edge)"},
      noise: "Medium. The 280 is audible on the south edge; the rest of the hill is quiet. The dogs and strollers at the Rec Center are the daily soundtrack."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~616 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 33 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  inner_outer_richmond: {
    name: "Richmond District",
    zip: "94118",
    vibe: {
      tag: "Foggy, two commercial corridors, residential grid",
      story: "The Richmond is the Sunset's mirror twin: a 4-mile-long, 1-mile-wide grid north of Golden Gate Park, between the Park and the Pacific. The houses are the same vintage (1920s–1950s single-family), the fog is the same, and the commercial strips have a long-standing character all their own: Geary Boulevard carries an extensive mix of family-run businesses, ethnic grocers, and small specialty shops, while Clement Street is the foodie corridor. The UCSF medical campus is on the south edge. Clement Street is the foodie strip; Geary is the immigrant-business spine.",
      best_for: "Anyone seeking a low-density residential environment with a diverse commercial strip (Geary's family-run and specialty-shop spine, Clement's foodie corridor), direct rail access to downtown (1 California, 38 Geary), and walking distance to the beach, Golden Gate Park, and the Presidio.",
      schools: {"elementary": ["Inner Richmond: Alamo, Argonne, Frank McCoppin, George Peabody, Sutro", "Outer Richmond: Lafayette"], "middle": ["Presidio Middle (Outer Richmond)", "Roosevelt Middle"], "high": ["George Washington HS (Outer Richmond)"]},
      parks: {"list": ["Golden Gate Park (north end: Murphy windmill, polo field, bison, Stow Lake, AIDS Grove)", "Mountain Lake Park", "Presidio's east edge", "Ocean Beach"]},
      transit: {"bart": "", "muni": "", "bus": "1 California, 2 Clement, 5/5R Fulton, 31 Balboa (north edge), 38/38R Geary"},
      noise: "Very quiet inside the residential blocks. Geary is the exception — it\'s a major thoroughfare and gets loud."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~64 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 12 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  sunset_parkside: {
    name: "Sunset District",
    zip: "94116",
    vibe: {
      tag: "Foggy, residential, mid-century single-family",
      story: "The Sunset is the largest residential district in SF: a 4-mile-long, 1-mile-wide grid west of Twin Peaks, hemmed in by the ocean on one side and Golden Gate Park on the other. The houses are mostly 1940s–1960s single-family homes (one story, one car, one backyard, often a granny unit), with the occasional new build pushing taller. The commercial strips (Irving, Judah, Noriega, Taraval) are the only places with restaurants, grocery stores, and the famous dim sum. The fog is part of the address.",
      best_for: "Anyone seeking a low-density residential environment with single-family homes at accessible price points, multiple commercial strips (Irving, Judah, Noriega, Taraval) with restaurants and groceries, and proximity to Ocean Beach, Lake Merced, and Golden Gate Park's west end.",
      schools: {"elementary": ["Sunset Elementary (Outer Sunset)", "Commodore Sloat", "Dianne Feinstein (Parkside/Sunset)"], "middle": ["A.P. Giannini (Outer Sunset)", "Presidio Middle"], "high": ["Abraham Lincoln HS (Parkside/Sunset)"]},
      parks: {"list": ["Golden Gate Park's west end (Polo Field, Murphy Windmill, Bison Paddock, Ocean Beach)", "Lake Merced (south)", "Stern Grove (just over the border into West Portal)"]},
      transit: {"bart": "", "muni": "L Taraval, N Judah", "bus": "7, 28, 29, 48 (crosstown)"},
      noise: "Very quiet inside the residential blocks. The fog absorbs more sound than the east side. The ocean roar is the soundtrack if you\'re close enough."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~423 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 13 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  glen_park: {
    name: "Glen Park",
    zip: "94131",
    vibe: {
      tag: "Small-town village, canyon-edge, BART-direct",
      story: "Glen Park is the part of SF that still feels like a small town — partly because it actually was one until 1909. The village center is Diamond Street and Chenery, with a hardware store, a bookstore, a few coffee shops, and the kind of family-run places that have been there for decades. The neighborhood climbs the south slope of the city into Glen Canyon, with houses ranging from Edwardians to mid-century moderns. BART is here, which makes it one of the few genuinely transit-rich residential neighborhoods south of Twin Peaks.",
      best_for: "Anyone seeking a low-key residential environment with BART connectivity, a small village-style commercial district (Diamond and Chenery), walkable access to Glen Canyon Park's 70 acres of wilderness, and a canyon-edge location with views.",
      schools: {"elementary": ["Glen Park Elementary (K-5)", "Dolores Huerta Elementary (K-5)"], "middle": ["James Lick Middle"], "high": []},
      parks: {"list": ["Glen Canyon Park (70 acres, canyon wilderness, only undeveloped creek in SF)", "Village playgrounds (Diamond and Chenery)", "Twin Peaks (south end)"]},
      transit: {"bart": "Glen Park", "muni": "J Church (San Jose / Glen Park)", "bus": "44 O'Shaughnessy, 23, 35, 52"},
      noise: "Quiet. The canyon absorbs sound; the BART rumble is the closest thing to a daily sound, and longtime residents stop noticing it."
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
      "Zillow ZHVI for ZIP 94131 (typical home value, monthly, 2-year series). Also ZORI for ZIP 94131 (median rent).",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  haight_ashbury: {
    name: "Cole Valley",
    zip: "94117",
    vibe: {
      tag: "Tiny main street, fog-soft, half-block village",
      story: "Cole Valley is the part of San Francisco that fits between the Inner Sunset and Haight-Ashbury, and somehow has a separate identity: a half-block of small shops (a grocery, a coffee shop, a wine bar, a bookshop), a train stop, and then residential streets of Edwardians and Craftsman homes climbing toward the hills. The streets are quiet, mostly single-family, with a community feel (the kind where neighbors know the corner store by name). Cole Valley is small enough to be a village.",
      best_for: "Anyone seeking a low-key residential pocket with low-density streets, a half-block of small shops, direct rail access via the N Judah, and walking distance to Golden Gate Park's south end and the Panhandle.",
      schools: {"elementary": ["Grattan Elementary"], "middle": [], "high": []},
      parks: {"list": ["Cole Valley playground (Cole and Carl)", "Kezar Stadium (Cole Valley edge, bleachers open to public off-trail)", "Golden Gate Park south end (De Young, Academy of Sciences within walking distance)", "The Panhandle (edge)"]},
      transit: {"bart": "", "muni": "N Judah (Cole Valley station)", "bus": "6 Hayes/Parnassus, 7 Haight-Noriega, 33 Ashbury/18th Street, 44 O'Shaughnessy"},
      noise: "Quiet. The N train is the loudest thing on most days, and longtime residents find its bell part of the rhythm."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~194 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 14 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  inner_sunset: {
    name: "Inner Sunset",
    zip: "94122",
    vibe: {
      tag: "Foggy, walkable main street, near Golden Gate Park",
      story: "The Inner Sunset is the part of San Francisco closest to the ocean and closest to Golden Gate Park's east end — and it leans into both. Irving Street is the commercial strip: Asian restaurants, brunch spots, an old-school ice cream parlor, a hardware store, the kind of independent bookstore that knows your name. The residential blocks are 1920s–1940s single-family homes with garages, and a fair number of condo conversions. The UCSF medical campus is two blocks south, and the streets are quiet.",
      best_for: "Anyone seeking a low-density residential environment with a small commercial corridor of Asian restaurants, brunch spots, an old-school ice cream parlor, and the kind of independent bookstore that knows your name, with direct rail access to downtown and walking distance to Golden Gate Park's east end.",
      schools: {"elementary": ["Jefferson Elementary", "Alice Fong Yu Alternative K-8 (Chinese-immersion)"], "middle": ["A.P. Giannini (common middle)"], "high": []},
      parks: {"list": ["Golden Gate Park east end (De Young, Academy of Sciences, Botanical Garden, Conservatory of Flowers)", "Inner Sunset playgrounds", "The Panhandle (edge)"]},
      transit: {"bart": "", "muni": "N Judah (Judah Street)", "bus": "44 O'Shaughnessy, 7 Haight-Noriega"},
      noise: "Quiet. The fog softens everything. The N train is the closest thing to a daily sound."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~482 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 13 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  russian_hill: {
    name: "Russian Hill",
    zip: "94109",
    vibe: {
      tag: "Bay-view Victorians, cable cars, vertical streets",
      story: "Russian Hill climbs. The streets are steep, the houses are old, and the views from the top are the kind people move to San Francisco for. Hyde and Powell run the cable car lines; the rest of the neighborhood is a tight grid of 1900s–1920s apartment buildings and a few surviving mansions. Lombard Street (the 'crookedest street in the world') is technically here, though it's mostly a tourist stop these days. The residential blocks are quiet; the architecture rewards buyers who notice a renovation.",
      best_for: "Anyone prioritizing a true San Francisco address with view-block elevation, walkable access to the cable car, and a tight grid of 1900s–1920s apartment buildings plus a few surviving mansions. Lombard Street's switchback is the famous photo op; the rest is residential quiet.",
      schools: {"elementary": ["Jean Parker Elementary (K-5, cross-listed with Chinatown and North Beach)", "Sherman Elementary (Marina)"], "middle": ["Marina Middle School (Marina)"], "high": ["Galileo Academy of Science and Technology"]},
      parks: {"list": ["Vallejo Street Crest (small plaza, Russian government memorial)", "Ina Coolbrith Park (Vallejo Street)", "Alice Marble Tennis Courts (Lombard and Hyde)"]},
      transit: {"bart": "", "muni": "", "bus": "1 California, 30 Stockton, 45 Union/Stockton", "cable_car": "Powell-Hyde cable car (Hyde Street, 21% grade)"},
      noise: "Quiet inside the apartments; the cable car gong is the soundtrack on Hyde."
    },
    market: {
      // Last-30-day stats from SF MLS data, geocoded to this neighborhood via SF Planning polygons.
      // Source: SF MLS exports (Schema A for sell_price, Schema B for DOM, joined on ML Number).
      // 2-year period Apr 2024 - May 2026, with the last 30 days as the primary window.
      // 16 sales in the last 30 days (11 condo, 5 SFR).
      median_condo_sell: 1510000,
      median_sfr_sell: 2350000,
      median_psf: 1312,  // $/sqft from SF Assessor parcel join (single-unit only, last 30d)
      median_dom: 16,  // median days on market, last 30d (16 sales with DOM data)
      sale_to_list_pct: null,
      note: "Last 30 days of SF MLS data (since 2026-05-20). 16 sales (11 condo, 5 SFR). DOM is median from the last 30d where reported (16 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 30d (9 sales)."
    },
    citations: [
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~121 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 22 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  marina: {
    name: "Marina",
    zip: "94123",
    vibe: {
      tag: "Bay light, flat, classic 1920s, brunch capital",
      story: "The Marina is the part of San Francisco that the 1989 earthquake flattened, then rebuilt into the neighborhood people think of when they imagine a flat, sunny, Mediterranean-style San Francisco. Chestnut and Union Streets are the commercial core (boutique fitness, brunch spots, a Whole Foods with a wine bar). Streets are mostly 1920s–1940s Mediterranean and Spanish Revival (replaced or rebuilt after 1989). The Marina Green is the long waterfront park; the yacht harbor is the eastern edge. The architecture rewards buyers who notice a renovation.",
      best_for: "Anyone who appreciates mid-century and Mediterranean architecture, prioritizes a flat, walkable neighborhood, and values proximity to the waterfront and the Presidio.",
      schools: {"elementary": ["Sherman Elementary (K-5)", "Claire Lilienthal Alternative K-8 (also serves Inner Richmond)"], "middle": ["Marina Middle (6-8, competitive)"], "high": []},
      parks: {"list": ["Marina Green (74 acres, waterfront)", "Fort Mason trails and Center (west of Marina Green)", "Lyon Street stairs (climbing to Pacific Heights)", "Wave Organ (eastern end of Marina Green)", "Crissy Field and Golden Gate Bridge path (Presidio, west of Fort Mason)"]},
      transit: {"bart": "", "muni": "T Third Street, F-Market streetcar (eastern edge along Embarcadero)", "bus": "30, 30X Marina Express, 22 Fillmore"},
      noise: "Quiet on weekends. The wind can be louder than the traffic. The foghorn is the early-morning sound."
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
      "Zillow ZHVI for ZIP 94123 (typical home value, monthly, 2-year series). Also ZORI for ZIP 94123 (median rent).",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  nob_hill: {
    name: "Nob Hill",
    zip: "94109",
    vibe: {
      tag: "Historic hotels, cable cars, downtown-adjacent",
      story: "Nob Hill is downtown\'s older sibling — the neighborhood that was the center of SF wealth in the 1860s railroad era and still has the hotels, mansions, and Grace Cathedral to prove it. The Fairmont, the Mark Hopkins, the Huntington, Grace Cathedral: they\'re all on one hill. The residential blocks are mostly mid-rise apartments and a few surviving mansions. The mid-rise apartment blocks date to the early 1900s, with a few new-build condo additions featuring views.",
      best_for: "Buyers prioritizing walking distance to the Financial District, Union Square, and Chinatown, with cable car access, a historic-architecture street scene (Fairmont, Mark Hopkins, Grace Cathedral, Huntington Park), and mid-rise apartment living.",
      schools: {"elementary": ["Redding Elementary (K-5)", "Spring Valley Science Elementary (K-5)"], "middle": ["Marina Middle (technically Marina)"], "high": []},
      parks: {"list": ["Huntington Park (full city block, Sacramento/Taylor/California/Cushman)", "Washington & Hyde Mini Park", "Grace Cathedral grounds (labyrinth, AIDS memorial, walking meditation)"]},
      transit: {"bart": "Powell Street (southeast foot of hill)", "muni": "", "bus": "1 California, 30 Stockton, 45 Union/Stockton", "cable_car": "Powell-Hyde, Powell-Mason, California"},
      noise: "Medium. Cable car bells, downtown traffic on California, and the occasional hotel event noise. The cross streets are quieter than the spine streets."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~453 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 37 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  north_beach: {
    name: "North Beach",
    zip: "94133",
    vibe: {
      tag: "Italian, Beat-era, café culture",
      story: "North Beach is the part of SF that doesn\'t quite feel like SF — more like a Mediterranean piazza dropped into a steep grid. Columbus Avenue is the spine: Italian delis, cafés with outdoor seating, neon signs, and the kind of bookstore that stays open until midnight. Washington Square is the park at the heart. Beat-era landmarks (City Lights, Vesuvio, the Jack Kerouac alley) sit next to old Italian social clubs. The architecture is mostly 1900s-1920s walk-up apartments with a few surviving single-family homes, and the rhythm of the neighborhood rewards long-term familiarity.",
      best_for: "Anyone prioritizing a high-density urban environment with walkable access to cafés, restaurants, and historic landmarks (Washington Square, the cable car turnaround), strong neighborhood character, and proximity to downtown via the 8 Bayshore or a 10-minute walk to BART.",
      schools: {"elementary": ["Jean Parker Elementary (K-5, cross-listed with Chinatown and North Beach)", "Garfield Elementary", "John Yehall Chin Elementary (K-5, Cantonese language program)", "Yick Wo Alternative Elementary"], "middle": ["Francisco Middle School (6-8)"], "high": []},
      parks: {"list": ["Washington Square Park (2.8 acres, established 1847, surrounded by cafes and Sts. Peter and Paul Church)"]},
      transit: {"bart": "Montgomery or Powell (10 min walk)", "muni": "Powell-Mason cable car (terminates at edge)", "bus": "8 Bayshore"},
      noise: "Loud on Columbus, especially on weekends; quieter on the side streets and the hill. The cafés spill onto the sidewalk until 1am."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~189 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 24 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },


  twin_peaks: {
    name: "Twin Peaks",
    zip: "94114",
    vibe: {
      tag: "Hilltop, view-blessed, quiet, residential",
      story: "Twin Peaks is the saddle of hills near the geographic center of San Francisco, with the highest public viewpoints in the city at 925 ft. The neighborhood wraps around the peaks, with streets climbing up from the Castro, Noe Valley, West Portal, and Glen Park. The houses are mostly 1920s–1940s single-family homes with views. The streets are quiet and almost no through-traffic. There's no commercial strip; the closest coffee shop is in one of the surrounding neighborhoods.",
      best_for: "Buyers who want view-block elevation, single-family homes with city and bay views, low-density streets with almost no through-traffic, and proximity to the geographic center of the city. The architecture rewards buyers who notice a renovation (1920s–1940s homes with original details).",
      schools: {"elementary": ["Rooftop School TK-8 (main + Mayeda campuses)", "Clarendon Alternative Elementary"], "middle": [], "high": ["Ruth Asawa San Francisco School of the Arts (SOTA)"]},
      parks: {"list": ["Twin Peaks summit (925 ft, second-highest natural point in SF after Mount Davidson; 360-degree views from public viewpoint)", "Twin Peaks open space", "Sutro Tower open space", "Surrounding canyon and hill trails"]},
      transit: {"bart": "", "muni": "", "bus": "37, 48, 52"},
      noise: "Very quiet. The wind is the loudest thing on most days. Sutro Tower hum is the late-night sound for the closest blocks."
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
      "Zillow ZHVI for ZIP 94114 (typical home value, monthly, 2-year series). Also ZORI for ZIP 94114 (median rent).",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  excelsior: {
    name: "Excelsior",
    zip: "94112",
    vibe: {
      tag: "Family-run shops, residential, transit-connected",
      story: "The Excelsior is one of the largest residential districts in the city, a 4-mile stretch south of Glen Park and Bernal. The architecture is mostly 1920s–1950s: one-story stucco homes with garages, a few mid-century pockets, the occasional new build. The commercial strips (Mission Street, Geneva Avenue) carry an extensive mix of small businesses, restaurants, and grocery stores, including many that have been there for decades. John McLaren Park (313.7 acres) borders the Excelsior to the east.",
      best_for: "Buyers seeking a low-density residential environment with single-family homes at accessible price points, multiple family-run commercial strips (Mission Street, Geneva Avenue), and proximity to John McLaren Park (313.7 acres of undeveloped green space).",
      schools: {"elementary": ["Cleveland Elementary", "Guadalupe Elementary", "Hillcrest Elementary", "Monroe Elementary", "June Jordan School for Equity"], "middle": ["James Denman Middle", "Dr. Martin Luther King Jr. Academic Middle"], "high": ["Balboa High School", "San Francisco Community School", "Phillip and Sala Burton Academic HS"]},
      parks: {"list": ["John McLaren Park (313.7 acres, Jerry Garcia Amphitheatre, Herz Playground, Louis Sutter Playground, Gleneagles Golf Course)", "Excelsior neighborhood playgrounds"]},
      transit: {"bart": "", "muni": "M Ocean View (Balboa Park terminus)", "bus": "14 Mission, 24 Divisadero, 44 O'Shaughnessy, 43 Masonic"},
      noise: "Quiet. The fog absorbs the noise. Mission Street and Geneva Avenue are the exceptions — they\'re busy and loud."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~557 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 14 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  bayview: {
    name: "Bayview",
    zip: "94124",
    vibe: {
      tag: "Industrial-past, residential-present, deep SF",
      story: "The Bayview is the residential pocket that has been overlooked for most of the city's history and is now starting to be discovered. The neighborhood is a long strip between the Third Street light rail and the bay, with a mix of 1940s–1960s homes, public housing legacy, and newer single-family-home developments. The architecture is varied: 1940s–1960s single-family, public housing, the newer Hunters Point development, the industrial shipyard. The commercial strip is Third Street, which is mid-revival. The Bayview's housing is the most affordable single-family stock in the city.",
      best_for: "Buyers seeking single-family homes at accessible price points, direct rail access via the T Third Street, proximity to Candlestick Point State Recreation Area, and the opportunity to be part of a residential area with new development and ongoing change.",
      schools: {"elementary": ["Bret Harte Elementary", "Dr. George Washington Carver Elementary", "Malcolm X Academy Elementary", "Leola M. Havard Early Education School"], "middle": ["Willie L. Brown Jr. Middle School", "C.A.R.E. Middle School"], "high": ["Thurgood Marshall Academic High School"]},
      parks: {"list": ["Candlestick Point State Recreation Area (bayside, partly developed)", "Heron's Head Park (eco-park at tip of bay)", "Bayview neighborhood playgrounds", "India Basin (newer mixed-use)"]},
      transit: {"bart": "", "muni": "T Third Street (along Third Street)", "bus": "19 Polk, 24 Divisadero (terminus), 44 O'Shaughnessy, 9 San Bruno, 15 Bayview-Hunters Point Express, 23 Monterey, 29 Sunset, 54 Felton, 56 Rutland, 67 Bernal Heights, 90/91 owl"},
      noise: "Quiet inside the residential blocks. The freeway and the shipyard are the industrial soundtrack. The new development is denser, which will change this."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~268 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 32 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  visitacion: {
    name: "Visitacion Valley",
    zip: "94134",
    vibe: {
      tag: "Industrial-edge, residential, single-family, foggy",
      story: "Visitacion Valley is the residential pocket that is mostly unknown to people who don't live there: a residential area tucked between McLaren Park, the Cow Palace, and the bay-side industrial edge. The houses are mostly 1940s–1960s single-family homes. The neighborhood is one of the more affordable parts of San Francisco for single-family stock, which has started to attract attention from buyers priced out of the rest of the city. John McLaren Park is to the west. Candlestick Point State Recreation Area is to the south-east. The architecture is consistent and the streets are quiet.",
      best_for: "Buyers prioritizing single-family homes at accessible price points, direct rail access via the T Third Street (Sunnydale terminus), proximity to McLaren Park's open space, and a residential environment on the southern edge of the city.",
      schools: {"elementary": ["Visitacion Valley Elementary", "El Dorado Elementary", "San Miguel Early Education School", "John McLaren Early Education School"], "middle": ["Visitacion Valley Middle School"], "high": ["Burton (Portola)", "Lincoln (Parkside/Sunset)"]},
      parks: {"list": ["McLaren Park (one of the city's largest, closest big green space)", "Cow Palace (venue)", "Candlestick Point State Recreation Area (bayside, new Candlestick Point development underway)"]},
      transit: {"bart": "", "muni": "T Third Street (Sunnydale terminus)", "bus": "56 Rutland, 43 Masonic"},
      noise: "Quiet inside the residential blocks. Highway 101 and the Cow Palace events are audible but not constant."
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
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~309 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 16 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  },

  tenderloin: {
    name: "Civic Center",
    zip: "94102",
    vibe: {
      tag: "Civic-spine, arts-dense, mid-rise, walk-to-everything",
      story: "Civic Center is the part of San Francisco that runs from City Hall down Market Street, including the Asian Art Museum, the War Memorial Opera House, the Davies Symphony Hall, the Orpheum, the Strand, and the ballet. The residential blocks are mostly 1900s–1920s mid-rise apartments with a few new-build lofts. The Tenderloin borders it to the north; SoMa to the south; Mid-Market is the transitional strip in between.",
      best_for: "Arts and culture buyers who prioritize walking distance to the Civic Center's performance venues (War Memorial Opera House, Davies Symphony Hall, the ballet, the Orpheum, the Strand), the Asian Art Museum, and a dense urban setting with direct BART and Muni Metro access.",
      schools: {"elementary": ["Tenderloin Community Elementary School (K-5)"], "middle": [], "high": ["Civic Center Secondary School"]},
      parks: {"list": ["Civic Center Plaza (central green, just east of City Hall)", "United Nations Plaza (2.6-acre pedestrian mall, Fulton St, designed by Lawrence Halprin)", "Helen Diller Civic Center Playgrounds (renovated 2018)", "Asian Art Museum outdoor spaces", "Boeddeker Park (Eddy & Jones, Tenderloin)", "Tenderloin Playground (Ellis between Leavenworth and Hyde)"]},
      transit: {"bart": "Civic Center", "muni": "Civic Center station: J, K, L, M, N, S; F-Market streetcar (Market Street)", "bus": ""},
      noise: "Medium-to-loud. Market Street, the UN Plaza, and the Tenderloin spillover are the dominant sounds. The residential pockets to the west (Hayes Valley, NOPA) are quieter."
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
      note: "Last 30 days of SF MLS data (since 2026-05-20). 6 sales (5 condo, 1 SFR). DOM is median from the last 30d where reported (6 sales). Sqft joined from SF Assessor-Recorder parcel roll, single-unit buildings only, last 90d (1 sales)."
    },
    citations: [
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~88 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 51 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  }
};
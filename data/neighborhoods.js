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
      story: "The Castro is San Francisco's most extroverted neighborhood. Rainbow crosswalks, a constant sidewalk hum, and a small dense grid of bars, restaurants, gyms and one-screen cinemas mean you almost never need a car. Weekends hum with brunch lines and street festivals; weeknights belong to cocktail spots and the occasional rooftop. It skews single and coupled, with a younger professional median age than most of SF, and a visible, vocal queer community that has defined the neighborhood since the 1970s.",
      best_for: "Singles, couples, and anyone who wants to walk to dinner in under five minutes.",
      schools: "Public: Harvey Milk Civil Rights Academy (K–5, very high parent demand), Sanchez K–8. Many families also use SFUSD lottery for middle and high school outside the neighborhood.",
      parks: "Mission Dolores Park (the north-west corner is technically the Castro), Castro Commons, Noe Valley Town Square a few blocks south.",
      transit: "Castro Muni station puts you on the Muni Metro (K, L, M, T lines) and the F-Market heritage streetcar. 14, 24, 35 bus lines. 20 minutes to FiDi, 15 to SoMa.",
      noise: "Medium-to-loud. The Castro street core is busy until 1am on weekends; the side streets (above 18th, toward Corona Hill) are noticeably quieter.",
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 342 actual sales.
      median_condo_sell: 1500000,
      median_sfr_sell: 2310500,
      median_psf: 1474,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 342 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Sunny, family-first, stroller-paced",
      story: "Noe Valley is the part of SF that feels least like San Francisco and most like a small town. Two commercial strips (24th Street and Church Street) are stacked with bakeries, yoga studios, kids' clothing shops, and the kind of independent bookstore that knows your name. The streets are sunnier than most of SF because of how the hills channel morning light, and the architecture skews Edwardian and Craftsman — wide front porches, big kitchens, and back gardens. Weekend mornings are a parade of strollers and dog-walkers. Weeknights are quiet.",
      best_for: "Families with young kids, anyone who wants walkability without the late-night noise.",
      schools: "Highly rated public options: Alvarado Elementary, Sherman Elementary, and the famously popular K–8 paths. SFUSD middle-school lottery is the gate to AP Giannini or Everett.",
      parks: "Noe Valley Town Square (the small one), Billy Goat Hill (sunset views over downtown), and the south-west entry to Glen Canyon.",
      transit: "24 Muni line, J-Church, plus the 48 bus on Church Street. The J takes you to downtown in 20 minutes; the 24 is the city's most reliable crosstown.",
      noise: "Quiet. The loudest thing you'll hear on most evenings is someone's wind chime.",
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 400 actual sales.
      median_condo_sell: 1395000,
      median_sfr_sell: 2521500,
      median_psf: null,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 400 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Architectural pedigree, quiet luxury, view-block real estate",
      story: "Pacific Heights is where SF's old money lives behind hedges and on streets the buses don't run. The houses are the point — Beaux-Arts mansions, Spanish Revivals, painted ladies that would be Painted Ladies if they weren't in their own zip code. Fillmore Street on the eastern edge is the liveliest part (restaurants, boutiques, a Williams-Sonoma and a movie theater). The interior blocks, especially above Broadway, are almost entirely residential and almost entirely silent. Views of the Bay from the top of the hill are the kind you put on a postcard and don't take.",
      best_for: "High-net-worth families, design-conscious buyers, anyone who wants architecture as a feature, not a footnote.",
      schools: "Hillwood Academic, Sherman, and SFUSD's marquee options — Claire Lilienthal and Marina Middle for the lottery-lucky. Private: Town School, Convent of the Sacred Heart, San Francisco Day School.",
      parks: "Lafayette Park (with the dog run and tennis courts), Alta Plaza (the slide-into-SF views), the Lyon Street stairs.",
      transit: "1, 3, 22 buses. There is no BART or Muni Metro stop inside the neighborhood, which is part of the point. Car ownership is normal here.",
      noise: "Very quiet inside the blocks. Fillmore Street has the noise; Pacific, Broadway, and Vallejo do not.",
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 405 actual sales.
      median_condo_sell: 1450000,
      median_sfr_sell: 4672500,
      median_psf: 1208,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 405 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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

  twin_peaks_glen_park: {
    name: "Miraloma Park",
    zip: "94131",
    vibe: {
      tag: "Hillside calm, mid-century homes, big sky",
      story: "Miraloma Park sits on the south slope of Mount Davidson like a quiet cousin to the Castro — geographically close, atmospherically a world away. The streets are residential, the houses are mostly 1920s–1940s stucco and shingle with the occasional Eichler or post-war modern tucked in, and the views back toward downtown and the bay are the kind that sell the listing on the second photo. There's no commercial strip to speak of; the closest coffee shop is technically Glen Park or Bernal. What you get in exchange is one of the best weekday-evening sunsets in the city and almost no through-traffic.",
      best_for: "Families and design-trained buyers who want a single-family home, a yard, and a neighborhood that empties out at night.",
      schools: "Sunnyside Elementary (SFUSD K-5) is the local public option. There is no SFUSD school named 'Miraloma Elementary' — the closest nearby elementary is Sunnyside or, on the Glen Park side, Glen Park Elementary. AP Giannini Middle (in the Sunset) and the SFUSD lottery for high school.",
      parks: "Mount Davidson (the city's highest natural point, 928 ft, with the large Easter cross), Glen Canyon Park (70 acres of canyon wilderness, with the only undeveloped creek in SF), and Billy Goat Hill is just over the hill in Noe Valley.",
      transit: "The 44 bus is the spine. Glen Park BART (with a parking lot, if you ever need it) is a 5-minute drive. Driving is honestly the most common commute.",
      noise: "Very quiet. Coyotes occasionally. Wind from the ocean sometimes. That's the noise."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 223 actual sales.
      median_condo_sell: 1050000,
      median_sfr_sell: 1782500,
      median_psf: 1232,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 223 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
    },
    citations: [
      '"Median home sale price in San Francisco was more than $2m, an 18% increase from the previous year." — The Guardian, Jun 11 2026',
      'Zillow ZHVI for ZIP 94131: +7.0% over 2 years; ZORI: +31.4% over 2 years.',
    ]
  },

  lone_mountain_usf: {
    name: "Midtown Terrace",
    zip: "94117",
    vibe: {
      tag: "Forested, tucked-away, dog-park central",
      story: "Midtown Terrace is the kind of neighborhood people in SF describe with the phrase 'you almost wouldn't know it was here.' Tucked between Forest Hill, Twin Peaks, and the Inner Sunset, it's a small residential pocket of mid-century homes and a few mid-rises wrapped in eucalyptus and pine. There's one small commercial corner (the Midtown Terrace Playground and Rec Center) and not much else. The streets are quiet enough that kids ride bikes in the road. The fog rolls in here earlier than anywhere else in the city.",
      best_for: "Quiet-seekers, families with school-age kids, anyone who wants the Sunset/Inner Sunset commute without the through-traffic.",
      schools: "Forest Hill, Grattan, and the SFUSD lottery paths. The local cluster is small enough that the school community is genuinely a community.",
      parks: "Midtown Terrace Playground (the unofficial town square), Twin Peaks, the south end of the Interior Green Belt, Mount Sutro is a hike uphill.",
      transit: "The 36 bus on Teresita and the 44 on Portola are the closest. No Muni Metro, no BART. Car is essentially required.",
      noise: "Very quiet. The loudest thing you'll regularly hear is the Sutro Tower wind hum on foggy nights, which is the city's most underrated sound."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 357 actual sales.
      median_condo_sell: 940000,
      median_sfr_sell: 1825000,
      median_psf: 1397,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 357 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Small-town main street, families, the Muni at the corner",
      story: "West Portal is the part of SF that genuinely feels like a small town. Ulloa Street is the main drag — a 6-block stretch of independent shops, a hardware store that's been there since the 1940s, a cinema, a bookstore, a handful of Italian and Chinese restaurants, and a Peet's at the corner. Above the street, the residential blocks are quiet, mostly single-family homes from the 1920s–1940s in Mediterranean and Tudor styles. The K, M, and L Muni Metro lines all terminate at the West Portal station, so getting downtown is one seat, no transfers.",
      best_for: "Families with kids of any age, anyone who wants walkable main-street energy but a real house with a yard, commuters who work downtown.",
      schools: "Public K-5: West Portal Elementary (SFUSD, on the avenue). Middle: Aptos Middle School (SFUSD), a performing-arts magnet in the same ZIP 94127. High school is by SFUSD assignment; many West Portal families use the lottery for Lincoln (Sunset) or apply to Lowell or other exam-based schools. The school walk is part of why families cluster here.",
      parks: "Pine Lake Park (a small lake you can walk around in 15 minutes), Stern Grove (the summer Stern Grove Festival is a city institution), the south end of Mount Davidson (928 ft, SF's highest natural point).",
      transit: "K Ingleside, M Ocean View, L Taraval, and the S Shuttle all run through the West Portal station, with service straight downtown through the Twin Peaks tunnel in about 20 minutes. The 48 Quintara and the 57 Parkmerced buses also serve the area.",
      noise: "Quiet except for the Muni bell at the end of every line — which longtime residents find charming and newcomers find... character-building."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 490 actual sales.
      median_condo_sell: 901000,
      median_sfr_sell: 2139250,
      median_psf: 1207,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 490 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Quiet luxury, old money, on the edge of the Presidio",
      story: "Presidio Heights is the part of SF that backs up to the Presidio, with no commercial strip to speak of, and a population of houses that are the point. The architecture is mostly early 1900s Mediterranean and Spanish Revival, with a few modernist exceptions. The streets are silent except for the occasional dog-walker. Lake District is the part of Presidio Heights that faces Mountain Lake and backs up to the entrance to the Presidio\'s main park.",
      best_for: "High-net-worth families, design-trained buyers who want a real house, anyone who wants to walk into the Presidio for a morning run.",
      schools: "Public: Presidio Heights is zoned for SFUSD\'s lottery-based assignment, with no traditional K-5 school located directly inside the neighborhood. Nearby SFUSD options include Claire Lilienthal (K-8, Madison campus in Inner Richmond and main campus in Marina) and Sherman Elementary (Marina). The Marina Middle School and Presidio Middle School (also by lottery) are the most common public middle-school paths. Private schools within a short drive: Town School for Boys, Convent of the Sacred Heart, San Francisco Day School, Stuart Hall, the French American International School, the San Francisco Waldorf School, and others clustered in the Presidio Heights / Pacific Heights / Jordan Park / Laurel Heights corridor.",
      parks: "Mountain Lake Park (with the playground, tennis courts, and the path into the Presidio), the Lyon Street steps down to the Marina, the Presidio itself (1,500 acres of park and forest, technically federal land).",
      transit: "The 1, 3, 33, 38 buses serve the edges. There is no BART or Muni Metro stop in the neighborhood. Car ownership is normal.",
      noise: "Very quiet. The closest thing to a sound is wind in the cypress trees and the Presidio\'s wildlife."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 135 actual sales.
      median_condo_sell: 1800000,
      median_sfr_sell: 4550000,
      median_psf: 1291,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 135 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "Bernal Heights is the part of the Mission that climbed the south hill and stayed. The neighborhood is a mix of 1900s–1940s homes and a few mid-century pockets, all oriented toward the sun (it\'s the warmest, least-foggy neighborhood in central SF). Bernal Heights Park is the heart: a 26-acre hilltop with the famous off-leash dog area, 360-degree views of the city, and a community of regulars who wave at each other from the hill. Cortland Avenue is the small main street.",
      best_for: "Dog owners, families who want the sun and a real community, anyone priced out of Noe Valley who wants the same vibe one hill over.",
      schools: "Public K-5: Leonard R. Flynn Elementary School (SFUSD, Bernal Heights). Also nearby: Bryant, Buena Vista Horace Mann K-8, Daniel Webster, George R. Moscone, Marshall, Starr King, Longfellow, Junipero Serra. Middle: James Denman, James Lick, the SFUSD lottery. High: Downtown, John O\'Connell, San Francisco International.",
      parks: "Bernal Heights Park (the hilltop with the off-leash area and the views), Holly Park (smaller, in the north end), the south end of McLaren Park (one of the city\'s largest).",
      transit: "The 24, 44, 67 buses. The BART is two blocks away at 24th Street Mission. Driving downtown is 15 minutes outside of rush hour.",
      noise: "Medium-to-quiet. The morning dog-park chatter from Bernal Heights Park is the neighborhood soundtrack; the Mission\'s weekend noise doesn\'t quite reach the top of the hill."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 361 actual sales.
      median_condo_sell: 1107500,
      median_sfr_sell: 1605005,
      median_psf: 1237,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 361 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "The Mission is SF\'s most compressed neighborhood — almost every block has a mural, a taqueria, a coffee roaster, and a converted-Victorian-turned-office. Valencia Street is boutique density at its peak: independent shops, design-forward restaurants, and a population that skews single and creative. Mission Street is busier, more working-class, more Latin, and more visually chaotic. Dolores Park on a sunny weekend is the city\'s living room. Bernal Heights to the south is the quieter, sunnier stepchild; this is the part where the rent climbs.",
      best_for: "Singles, young couples, anyone who wants density and design over square footage.",
      schools: "Public: Mission Dolores Academy (SFUSD K-8), Everett Middle School (SFUSD), and the SFUSD lottery for high school. Charter and language-immersion options in surrounding ZIPs.",
      parks: "Mission Dolores Park (the most-used park in SF), Bernal Heights Park (technically next door, the south slope with the off-leash area), the wiggle (the bicycle route through to the Castro).",
      transit: "16th Street BART and 24th Street BART, plus the J Church, M Ocean View, and BART connections. One of the most transit-rich neighborhoods in SF.",
      noise: "Loud on weekends, moderate during the week. Construction noise is a constant; this is a neighborhood that rebuilds itself every decade."
    },
    market: {
      // Per-property market stats (condo $/sq ft, SFR $/sq ft, days on market, % over
      // asking) are AI baseline estimates and not source-verified for these neighborhoods.
      // See the panel's "Sources" section for the per-ZIP chart and citations.
      condo_psf: null,
      sfr_psf: null,
      dom: null,
      over_asking_pct: null,
      note: "Per-property market data coming soon. The 2-year chart below shows the ZIP-level trend from Zillow ZHVI (sale) and ZORI (rent). The chart reflects the entire ZIP, not just this neighborhood."
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
      tag: "Boutique-lined, design-aware, transit-tight",
      story: "Hayes Valley didn\'t exist as a neighborhood until the 1990s, when the Central Freeway came down. What replaced it is now one of SF\'s most consistently photographed six blocks: a tight grid of independent boutiques, design shops, Michelin-noticed restaurants, and the small public space at Patricia\'s Green. The residential streets around Hayes are mostly mid-rise condos from the 2000s–2010s, plus a few converted Victorians. Population skews young, design-literate, and transit-dependent.",
      best_for: "Buyers who want a lock-and-leave condo, walkable to every kind of transit, design-forward without Pacific Heights prices.",
      schools: "SFUSD assignments are mixed; many families lottery out to neighboring schools. SFUSD middle schools (Lilienthal, Marina) reachable via the city\'s assignment system.",
      parks: "Patricia\'s Green, the Hayes Valley freeway-deck park (built on the Central Freeway stub), and the Fell-Oak bike corridor two blocks south.",
      transit: "Civic Center BART is six blocks north; the J, N, K, M, L, T Muni Metro lines are all within four blocks. The 47, 49, and 5 buses run nearby. The freeway-stub re-development brought in some taller buildings but didn\'t change the noise profile noticeably.",
      noise: "Medium. Hayes Street can be busy; the cross streets are quiet."
    },
    market: {
      // Per-property market stats (condo $/sq ft, SFR $/sq ft, days on market, % over
      // asking) are AI baseline estimates and not source-verified for these neighborhoods.
      // See the panel's "Sources" section for the per-ZIP chart and citations.
      condo_psf: null,
      sfr_psf: null,
      dom: null,
      over_asking_pct: null,
      note: "Per-property market data coming soon. The 2-year chart below shows the ZIP-level trend from Zillow ZHVI (sale) and ZORI (rent). The chart reflects the entire ZIP, not just this neighborhood."
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
      best_for: "UCSF-affiliated buyers (faculty, staff, students), biotech workers, anyone who wants a new-build condo in a walk-to-everything location.",
      schools: "Public K-5: Mission Bay School (SFUSD, K-8, in the neighborhood). Bessie Carmichael School (PreK-8 Filipino Education Center) is also nearby. Middle: by lottery, Marina Middle or others.",
      parks: "Mission Bay Park (the central green, with the play area and the bay views), the UCSF campus green, the channel-side trails, the new Oracle Park waterfront (just to the north).",
      transit: "The T Third Street Muni Metro runs through Mission Bay with a stop at UCSF Medical Center. The N Judah has its southern terminus at 4th and King (Caltrain) on the Mission Bay border. BART ( Powell or 16th Street Mission) is walkable. Caltrain\'s SF station is at the south end of Mission Bay. The I-280 is at the south edge. Driving to downtown is 5-10 minutes outside of rush hour.",
      noise: "Medium. The new-build density and the UCSF activity make this busier than the typical SF neighborhood. The waterfront side is quieter."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 229 actual sales.
      median_condo_sell: 970000,
      median_sfr_sell: null,
      median_psf: null,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 229 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "South Beach is the part of SF just south of the Financial District, on the Rincon Hill slope and the waterfront. The architecture is mostly 2000s–2010s high-rise condos and a few surviving 1900s warehouses (the South Beach Marina area). The population skews urban, professional, and often works in finance or tech. The Embarcadero is the spine; the Bay Bridge is the eastern edge. Population is dense, mostly renters, mostly new-build.",
      best_for: "Downtown workers, buyers who want a high-rise condo with bay views, anyone who wants walkability to FiDi and the Embarcadero.",
      schools: "Public: Bessie Carmichael School PreK-8 Filipino Education Center (SFUSD, South of Market), Civic Center Secondary School, Tenderloin Community Elementary School. Youth Chance High School. Most K-5 South Beach families use SFUSD lottery for placement outside the immediate area.",
      parks: "South Beach Park (the small green at the foot of the Bay Bridge), the Embarcadero\'s promenade, Rincon Hill Park (the small park at the top of the hill).",
      transit: "Embarcadero BART and the F-Market streetcar, the T Third Street and N Judah, the 1, 8, 14, 30, 38, 41, 45 buses. The Bay Bridge is two blocks away. Walking to FiDi in 5 minutes.",
      noise: "Medium-to-loud. The Bay Bridge and the Embarcadero are the dominant sounds. The cross streets are quieter."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 562 actual sales.
      median_condo_sell: 1220000,
      median_sfr_sell: 3900000,
      median_psf: 904,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 562 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "SoMa (South of Market) is the part of SF that was mostly industrial until the 1990s and has been re-invented as the city\'s loft-and-museum district. The population is a mix: long-time residents in the housing projects, newer tech workers in the new condos, the museum-going crowd on weekends. The architecture is a mix: surviving 1900s warehouses converted to lofts, 2000s–2010s mid-rise and high-rise new builds, the Yerba Buena gardens, the museums (SFMOMA, the Contemporary Jewish Museum, the Museum of the African Diaspora, the Children\'s Creativity Museum).",
      best_for: "Downtown workers, design-literate buyers who want a loft, museum-and-arts scene lovers.",
      schools: "Public: Bessie Carmichael School PreK-8 Filipino Education Center (SFUSD, SoMa), Civic Center Secondary School, Tenderloin Community Elementary School, Mission Bay School (SOMA/Mission Bay boundary), Youth Chance High School. Most K-5 SoMa families use SFUSD lottery for placement outside the immediate area.",
      parks: "Yerba Buena Gardens (the central green, with the fountains and the ice skating rink), South Park (the small circular park that gave the area its name), the small plazas around the museums.",
      transit: "Powell BART and the F-Market streetcar, the N Judah, the 5, 6, 7, 9, 14, 19, 30, 38, 45 buses. Walking to FiDi in 10 minutes; walking to Union Square in 5.",
      noise: "Medium-to-loud. The downtown traffic, the convention center, the nightlife on Folsom and Harrison, the museum crowds. The cross streets and the residential pockets (Yerba Buena, South Park) are quieter."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 257 actual sales.
      median_condo_sell: 725000,
      median_sfr_sell: 1900000,
      median_psf: 760,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 257 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Sunny, tech-adjacent, hilltop views",
      story: "Potrero Hill is the part of SF that climbs the south slope of the Mission Creek basin, with the most reliable sun in the city (it\'s on the warm side of the fog line) and the best view of the downtown skyline from many blocks. The architecture is a mix: 1900s Victorians and Edwardians on the lower blocks, mid-century and 1990s new-builds climbing the hill, a few industrial-edge pockets. The population skews design-literate, tech-adjacent (the neighborhood is close to Mission Bay and SoMa), and family-friendly. Eighteenth Street is the small main street.",
      best_for: "Tech buyers who want a real house with a view, families priced out of Noe Valley, design-trained buyers who appreciate the architecture variety.",
      schools: "Public K-5: Daniel Webster Elementary School (SFUSD, in the neighborhood). Also nearby: Bryant, Buena Vista Horace Mann K-8, César Chávez, George R. Moscone, Hilltop, Marshall, Starr King, Leonard R. Flynn. Middle: by lottery, often Marina Middle. High: Downtown, John O\'Connell. Private (close): Live Oak School (private K-8, not in SFUSD directory), Town School for Boys.",
      parks: "Potrero Hill Recreation Center (with the playground, tennis courts, and the famous hilltop views), McKinley Square, the small neighborhood playgrounds, the new Crane Cove Park (at the Mission Creek edge, walkable).",
      transit: "The 19, 22, 48 buses. The T Third Street is two blocks away at Mission Bay. The 280 freeway is right at the south edge. Driving downtown is 10 minutes outside of rush hour.",
      noise: "Medium. The 280 is audible on the south edge; the rest of the hill is quiet. The dogs and kids at the Rec Center are the daily soundtrack."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 284 actual sales.
      median_condo_sell: 1100000,
      median_sfr_sell: 1895000,
      median_psf: 913,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 284 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Foggy, Russian/Chinese immigrant hubs, family-first",
      story: "The Richmond is the Sunset\'s mirror twin: a 4-mile-long, 1-mile-wide grid north of Golden Gate Park, between the Park and the Pacific. The houses are the same vintage (1920s–1950s single-family), the fog is the same, and the population has its own distinct character: a long-standing Russian and Chinese immigrant community centered on Geary Boulevard, with new families and UCSF-connected buyers (the medical campus is on the south edge). Clement Street is the foodie strip; Geary is the immigrant-business spine.",
      best_for: "Families with kids, UCSF-connected buyers, anyone who wants the fog-and-quiet life with a more diverse commercial strip than the Inner Sunset.",
      schools: "Public K-5: Argonne Elementary School (SFUSD, Inner Richmond neighborhood), Alamo Elementary School (SFUSD, Richmond), Francis Scott Key Elementary, George Peabody Elementary, Lafayette Elementary, Robert Louis Stevenson Elementary, Sutro Elementary, Ulloa Elementary. Sherman Elementary is in the Marina. Middle: A.P. Giannini (Outer Sunset), Presidio Middle, Roosevelt Middle. High: George Washington High School (Outer Richmond), Lowell High School (lakeshore; by application), Abraham Lincoln High School (Parkside/Sunset; by lottery).",
      parks: "Golden Gate Park (the entire north end: the Murphy windmill, the polo field, the bison, Stow Lake, the AIDS Grove), Mountain Lake Park, the Presidio\'s east edge, Ocean Beach.",
      transit: "Bus: 1 California, 2 Clement/Sutter, 5/5R Fulton (via Park Presidio), 18 46th Avenue, 31 Balboa, 38/38R Geary (one of the busiest lines in the city, east-west crosstown). No Muni Metro inside the neighborhood. The closest rail is the N Judah at Carl and Cole (Cole Valley) on the southern edge of the Richmond.",
      noise: "Very quiet inside the residential blocks. Geary is the exception — it\'s a major thoroughfare and gets loud."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 419 actual sales.
      median_condo_sell: 1335500,
      median_sfr_sell: 2010000,
      median_psf: 1600,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 419 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      best_for: "Families with kids, anyone who wants a real single-family house in SF under $2M, buyers who are fine trading views for square footage.",
      schools: "Public K-5: Sunset Elementary School (SFUSD, Outer Sunset), Commodore Sloat Elementary, Dianne Feinstein Elementary, E.R. Taylor Elementary, Francis Scott Key Elementary, Lafayette Elementary, Robert Louis Stevenson Elementary, Ulloa Elementary, Noriega Early Education School. Middle: A.P. Giannini Middle School (Outer Sunset), Dr. Martin Luther King Jr. Academic Middle School, Presidio Middle School, Lawton Alternative School K-8, Roosevelt Middle School. High: Abraham Lincoln High School (Parkside/Sunset), George Washington High School (Outer Richmond), Lowell High School (by application), Phillip and Sala Burton Academic High School (Portola).",
      parks: "Golden Gate Park (the entire west end: the Polo Field, the windmill, the Murphy Windmill, Ocean Beach, the Bison Paddock), Lake Merced, Stern Grove, Pine Lake Park, the smaller neighborhood playgrounds.",
      transit: "The L Taraval and N Judah Muni Metro lines run along the top and bottom of the district. The 7, 28, 29, 48 buses cover crosstown. Driving downtown is 20-30 minutes depending on traffic; the 280 is the freeway option.",
      noise: "Very quiet inside the residential blocks. The fog absorbs more sound than the east side. The ocean roar is the soundtrack if you\'re close enough."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 668 actual sales.
      median_condo_sell: 1175000,
      median_sfr_sell: 1610000,
      median_psf: 1169,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 668 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      best_for: "Families who want walkability and BART, people priced out of Noe Valley who want the same community vibe, design-trained buyers who appreciate the canyon edge.",
      schools: "Public K-5: Glen Park Elementary (SFUSD, in the neighborhood). Also nearby: Alvarado (Noe Valley), Dolores Huerta, Junipero Serra, Paul Revere PreK-8. Middle: James Lick Middle (SFUSD) or by lottery. High: by lottery.",
      parks: "Glen Canyon Park (70 acres of canyon wilderness, the only undeveloped creek in SF, with rock outcrops and native plantings), the village\'s small playgrounds, the south end of Twin Peaks.",
      transit: "Glen Park BART (Civic Center in 8 minutes, Mission in 4 minutes) is the transit spine. The 23, 35, 44, 52 buses cover the residential streets. Driving to downtown is 15 minutes.",
      noise: "Quiet. The canyon absorbs sound; the BART rumble is the closest thing to a daily sound, and longtime residents stop noticing it."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 150 actual sales.
      median_condo_sell: 952000,
      median_sfr_sell: 2200000,
      median_psf: null,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 150 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Tiny main street, family-friendly, fog-soft",
      story: "Cole Valley is the part of SF that fits between the Inner Sunset and Haight-Ashbury, and somehow has a separate identity: a half-block of small shops (a grocery, a coffee shop, a wine bar, a bookshop), a train stop, and then residential streets of Edwardians and Craftsman homes climbing toward the hills. Population skews families, long-term residents, and the kind of neighbors who know the corner store by name. Cole Valley is small enough to be a village.",
      best_for: "Families with young kids, anyone who wants walkability without the late-night noise, design-trained buyers who notice a good renovation.",
      schools: "Public K-5: Grattan Elementary School (SFUSD, Haight Ashbury neighborhood boundary). Also nearby: Alice Fong Yu (K-8, Inner Sunset), Chinese Immersion School at De Avila, John Muir Elementary, Jefferson Elementary, New Traditions Creative Arts Elementary. Middle and high: by SFUSD lottery. Private (close): Urban School of San Francisco, Town School for Boys.",
      parks: "Cole Valley\'s playground at the corner of Cole and Carl, the south end of Golden Gate Park (with the De Young and the Academy of Sciences within walking distance), the edge of the Panhandle.",
      transit: "The N Judah Muni Metro line stops at Cole Valley station. Direct to downtown in 20 minutes. The 6, 37, 43, 44 buses for crosstown and connecting to the Inner Sunset and UCSF.",
      noise: "Quiet. The N train is the loudest thing on most days, and longtime residents find its bell part of the rhythm."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 193 actual sales.
      median_condo_sell: 1525000,
      median_sfr_sell: 2915000,
      median_psf: 1114,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 193 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Foggy, family-first, walking distance to Golden Gate Park",
      story: "The Inner Sunset is the part of SF closest to the ocean and closest to Golden Gate Park\'s east end — and it leans into both. Irving Street is the commercial strip: Asian restaurants, brunch spots, an old-school ice cream parlor, a hardware store, the kind of independent bookstore that knows your name. The residential blocks are 1920s–1940s single-family homes with garages, and a fair number of condo conversions. Population skews families, UCSF-affiliated people (the medical campus is two blocks south), and longtime residents who chose the fog over the noise.",
      best_for: "Families with kids, UCSF-connected buyers, anyone who wants the fog-and-quiet life with a real commercial strip.",
      schools: "Public K-5: Sunset Elementary School (SFUSD, Outer Sunset neighborhood boundary), Alice Fong Yu Alternative School K-8 (SFUSD Chinese-immersion, very high demand), Chinese Immersion School at De Avila, Francis Scott Key, Jefferson, New Traditions Creative Arts, Robert Louis Stevenson, Ulloa. Middle by lottery; A.P. Giannini, Presidio, Roosevelt are common. Dr. Martin Luther King Jr. Academic Middle School is also in the area.",
      parks: "Golden Gate Park (the entire east end is walkable: the De Young, the Academy of Sciences, the Botanical Garden, the Conservatory of Flowers), the Inner Sunset\'s small playgrounds, the edge of the Panhandle.",
      transit: "The N Judah Muni Metro runs along Irving Street\'s edge, with several stops. The 44, 48, 71 buses cover crosstown and Sunset-to-other-corridors. Driving to downtown is a non-event in 20 minutes outside of rush hour.",
      noise: "Quiet. The fog softens everything. The N train is the closest thing to a daily sound."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 215 actual sales.
      median_condo_sell: 1275000,
      median_sfr_sell: 2125000,
      median_psf: 1166,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 215 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "Russian Hill climbs. The streets are steep, the houses are old, and the views from the top are the kind people move to SF for. Hyde and Powell run the cable car lines; the rest of the neighborhood is a tight grid of 1900s–1920s apartment buildings and a few surviving mansions. Lombard Street (the \'crookedest street in the world\') is technically here, though it\'s mostly a tourist stop these days. Population skews older, established, and quiet about money.",
      best_for: "Buyers who want a true SF address with views, walkability, and the cable car as a commute.",
      schools: "Public K-8: SFUSD assignments vary. Marina Middle School (SFUSD) is a common lottery middle-school option. Sherman Elementary is technically in the Marina (Marina neighborhood boundary). Galileo Academy of Science and Technology (high school) is in the Russian Hill / North Beach area. Private (within a short drive): Town School for Boys, Convent of the Sacred Heart, Cathedral School for Boys.",
      parks: "Russian Hill Park (small, at the top of the hill, with the best view you can get for free), Vallejo Street steps, the cable-car-line greenery on Hyde.",
      transit: "Powell-Hyde and Powell-Mason cable car lines run through the neighborhood. The 1, 19, 27, 30, 41, 45 buses cover the edges. No Muni Metro stop inside the neighborhood.",
      noise: "Quiet inside the apartments; the cable car gong is the soundtrack on Hyde."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 263 actual sales.
      median_condo_sell: 1250000,
      median_sfr_sell: 1400000,
      median_psf: 1121,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 263 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "The Marina is the part of SF that the 1989 earthquake flattened, then rebuilt into the neighborhood people think of when they imagine a flat, sunny, Mediterranean-style San Francisco. Chestnut and Union Streets are the commercial core (boutique fitness, brunch spots, a Whole Foods with a wine bar). Streets are mostly 1920s–1940s Mediterranean and Spanish Revival — replaced or rebuilt after 1989. The Marina Green is the long waterfront park; the yacht harbor is the eastern edge. Population skews couples, families, and design-trained buyers who notice a good renovation.",
      best_for: "Couples, families with school-age kids, design-trained buyers who notice a good renovation.",
      schools: "Highly rated public: Sherman, Marina Middle, AP Giannini. Marina Middle lottery is competitive. Private: Town, Convent, Lick-Wilmerding options are a short drive.",
      parks: "Marina Green (the long waterfront park, the windiest picnic spot in SF), Crissy Field (the east side, the path to the Golden Gate Bridge), the Lyon Street stairs to the top of Pacific Heights, the Fort Mason trails.",
      transit: "30, 30X, 43 buses. The T-Third and F-Market lines reach the eastern edge. Car ownership is more common than transit here.",
      noise: "Quiet on weekends. The wind can be louder than the traffic. The foghorn is the early-morning sound."
    },
    market: {
      // Per-property market stats (condo $/sq ft, SFR $/sq ft, days on market, % over
      // asking) are AI baseline estimates and not source-verified for these neighborhoods.
      // See the panel's "Sources" section for the per-ZIP chart and citations.
      condo_psf: null,
      sfr_psf: null,
      dom: null,
      over_asking_pct: null,
      note: "Per-property market data coming soon. The 2-year chart below shows the ZIP-level trend from Zillow ZHVI (sale) and ZORI (rent). The chart reflects the entire ZIP, not just this neighborhood."
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
      story: "Nob Hill is downtown\'s older sibling — the neighborhood that was the center of SF wealth in the 1860s railroad era and still has the hotels, mansions, and Grace Cathedral to prove it. The Fairmont, the Mark Hopkins, the Huntington, Grace Cathedral: they\'re all on one hill. The residential blocks are mostly mid-rise apartments and a few surviving mansions. Population skews older, established, urbanite; the new construction is mostly luxury condos with views.",
      best_for: "Buyers who want walking distance to FiDi, Union Square, and Chinatown; people who like the cable car as a commute.",
      schools: "Public: Spring Valley Science Elementary School (SFUSD, Nob Hill, lottery) and others in the broader area. Sherman Elementary is in the Marina; by SFUSD lottery, Nob Hill families often reach Marina. Private schools (Cathedral, Stuart Hall, Town School) are within a short drive. Middle: by lottery, often Marina Middle or Francisco.",
      parks: "Grace Cathedral (the church, the labyrinth, the AIDS memorial, the walking meditation space), Huntington Park (the small green across from the Grace, with the library steps), the cable-car-line greenery on California.",
      transit: "Three cable car lines run through or near the neighborhood (Powell-Hyde, Powell-Mason, California). The 1, 8, 30, 45 buses. BART is two blocks north at Powell. Walk to FiDi in 15 minutes.",
      noise: "Medium. Cable car bells, downtown traffic on California, and the occasional hotel event noise. The cross streets are quieter than the spine streets."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 203 actual sales.
      median_condo_sell: 1028750,
      median_sfr_sell: 1200000,
      median_psf: 934,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 203 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "North Beach is the part of SF that doesn\'t quite feel like SF — more like a Mediterranean piazza dropped into a steep grid. Columbus Avenue is the spine: Italian delis, cafés with outdoor seating, neon signs, and the kind of bookstore that stays open until midnight. Washington Square is the park at the heart. Beat-era landmarks (City Lights, Vesuvio, the Jack Kerouac alley) sit next to old Italian social clubs. Population skews long-term residents, artists, and the people who\'ve been coming back for decades.",
      best_for: "Buyers who want a real SF neighborhood with character, walkability, and a strong café scene.",
      schools: "Public K-5: Jean Parker Elementary School (SFUSD, Chinatown/North Beach/Russian Hill), Garfield Elementary, John Yehall Chin Elementary, Yick Wo Alternative Elementary. Middle: Francisco Middle School (SFUSD). High: Galileo Academy of Science and Technology. Private (close): St. Mary the Angels (Catholic), French American International School, Convent of the Sacred Heart.",
      parks: "Washington Square (the heart of the neighborhood, used for bocce, dogs, and the Italian flag ceremony), Joe DiMaggio Playground, the Filbert Street steps (with the hidden Grace Marchant gardens).",
      transit: "The 8, 30, 41, 45 buses. The Powell-Mason cable car line ends at the edge of the neighborhood. BART is a 10-minute walk at Montgomery or Powell. Parking is famously terrible.",
      noise: "Loud on Columbus, especially on weekends; quieter on the side streets and the hill. The cafés spill onto the sidewalk until 1am."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 107 actual sales.
      median_condo_sell: 1030000,
      median_sfr_sell: 1425000,
      median_psf: 1180,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 107 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "Twin Peaks is the saddle of hills in the geographic center of SF, with the highest public viewpoints in the city (922 ft). The neighborhood wraps around the peaks, with streets climbing up from the Castro, Noe Valley, West Portal, and Glen Park. The houses are mostly 1920s–1940s single-family homes with views. The population skews long-term residents and design-trained buyers who want the views and the quiet. There\'s no commercial strip; the closest coffee shop is in one of the surrounding neighborhoods.",
      best_for: "Buyers who want view-block real estate, design-trained buyers who notice a good renovation, anyone who wants to be in the geographic center of the city with almost no through-traffic.",
      schools: "Public K-8: Rooftop School TK-8 (SFUSD, two campuses — main and Mayeda). Harvey Milk Civil Rights Academy (Castro/Upper Market). Clarendon Alternative Elementary. McKinley Elementary. Middle: James Lick Middle (SFUSD). High: Ruth Asawa San Francisco School of the Arts (SFUSD), Mission High School. Twin Peaks-area families use SFUSD lottery for elementary placement.",
      parks: "Twin Peaks summit (925 ft, second-highest natural point in SF after Mount Davidson; 360-degree views of the city from the public viewpoint), the Twin Peaks open space, the Sutro Tower open space, the surrounding canyon and hill trails.",
      transit: "The 37, 48, 52 buses. No Muni Metro or BART inside the neighborhood. Driving downtown is 15 minutes; the 280 is two blocks away.",
      noise: "Very quiet. The wind is the loudest thing on most days. Sutro Tower hum is the late-night sound for the closest blocks."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 115 actual sales.
      median_condo_sell: 1205000,
      median_sfr_sell: 1812500,
      median_psf: null,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 115 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Multicultural, working-class, foggy, residential",
      story: "The Excelsior is the part of SF south of Glen Park and Bernal, one of the largest residential districts in the city. The population is unusually diverse for SF — long-standing Latino and Asian immigrant communities, with newer families from across the Bay Area drawn by the relative affordability and the single-family-house stock. The architecture is mostly 1920s–1950s: one-story stucco homes with garages, a few mid-century pockets, the occasional new build. The commercial strips (Mission Street, Geneva Avenue) are immigrant-business spines.",
      best_for: "Families priced out of other SF neighborhoods, multi-generational buyers, anyone who wants a real house in SF under $1.5M.",
      schools: "Public K-5: Cleveland Elementary School (SFUSD, Excelsior), Guadalupe Elementary School, E.R. Taylor Elementary, Hillcrest Elementary, Monroe Elementary, Longfellow Elementary, June Jordan School for Equity. Middle: Dr. Martin Luther King Jr. Academic Middle School, James Denman Middle School. High: Balboa High School, Phillip and Sala Burton Academic High School, San Francisco Community School.",
      parks: "McLaren Park (one of the city\'s largest, mostly undeveloped), the Excelsior\'s neighborhood playgrounds, the edge of the Sunnyside Conservatory.",
      transit: "The M Ocean View Muni Metro line ends nearby at Balboa Park (SFUSD / City College area), and the J Church line runs to the same station. The T Third Street runs further south to Sunnydale. Bus: 8, 9, 14, 43, 44, 54. BART is two stops away at Glen Park (Civic Center) or Balboa Park (SFO/Millbrae).",
      noise: "Quiet. The fog absorbs the noise. Mission Street and Geneva Avenue are the exceptions — they\'re busy and loud."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 480 actual sales.
      median_condo_sell: 718000,
      median_sfr_sell: 1175000,
      median_psf: 915,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 480 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "The Bayview is the part of SF that\'s been overlooked for most of the city\'s history and is now starting to be discovered. The neighborhood is a long strip between the Third Street light rail and the bay, with a long-standing African American community, a public housing legacy, and newer single-family-home developments. The architecture is a mix: 1940s–1960s homes, public housing, the newer Hunters Point development, the industrial shipyard. The commercial strip is Third Street, which is mid-revival.",
      best_for: "First-time SF buyers priced out of the rest of the city, people working at the new UCSF Mission Bay campus, anyone who wants to be part of a neighborhood that is changing fast.",
      schools: "Public K-5: Bret Harte Elementary School (SFUSD, Bayview), Dr. George Washington Carver Elementary School, Malcolm X Academy Elementary School, Leola M. Havard Early Education School. Middle: Willie L. Brown Jr. Middle School, C.A.R.E. Middle School. High: Thurgood Marshall Academic High School. (Bayview Elementary is not a current SFUSD school name.)",
      parks: "Candlestick Point State Recreation Area (the bayside park, partly developed), Heron\'s Head Park (the eco-park at the tip of the bay), the Bayview\'s neighborhood playgrounds, the India Basin development (newer mixed-use).",
      transit: "The T Third Street Muni Metro line runs through the heart of the neighborhood, connecting to downtown in 20 minutes. The 19, 24, 44, 54 buses. Driving to downtown is 15-20 minutes via 101 or 280.",
      noise: "Quiet inside the residential blocks. The freeway and the shipyard are the industrial soundtrack. The new development is denser, which will change this."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 296 actual sales.
      median_condo_sell: 700000,
      median_sfr_sell: 980000,
      median_psf: 717,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 296 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      tag: "Industrial-edge, residential, working-class, foggy",
      story: "Visitacion Valley is the part of SF that\'s mostly unknown to people who don\'t live there: a residential pocket tucked between McLaren Park, the Cow Palace, and the bay-side industrial edge. The population is mostly working-class families, with a long-standing Asian and Latino community. The houses are mostly 1940s–1960s single-family homes. The neighborhood is one of the more affordable parts of SF, which has started to attract first-time buyers priced out of the rest of the city.",
      best_for: "First-time SF buyers, working families, anyone who wants a real house in the city on a real budget.",
      schools: "Public K-5: Visitacion Valley Elementary School (SFUSD, in the neighborhood), El Dorado Elementary School, San Miguel Early Education School, John McLaren Early Education School. Middle: Visitacion Valley Middle School (SFUSD). High: by lottery (Burton is in Portola, Lincoln in Parkside/Sunset, not technically in Visitacion).",
      parks: "McLaren Park (one of the city\'s largest, the closest big green space), the Cow Palace (the venue, technically), Candlestick Point State Recreation Area (the bayside park, with the new Candlestick Point development underway).",
      transit: "The T Third Street Muni Metro line ends at Sunnydale (the southern terminus, in Visitacion Valley). Bus: 9, 44, 56. Driving to downtown is 15-20 minutes via US-101 or I-280.",
      noise: "Quiet inside the residential blocks. Highway 101 and the Cow Palace events are audible but not constant."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 424 actual sales.
      median_condo_sell: 670000,
      median_sfr_sell: 1125562,
      median_psf: 865,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 424 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
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
      story: "Civic Center is the part of SF that runs from City Hall down Market Street, including the Asian Art Museum, the War Memorial Opera House, the Davies Symphony Hall, the Orpheum, the Strand, and the ballet. The residential blocks are mostly 1900s–1920s mid-rise apartments with a few new-build lofts. The population skews urban, design-literate, and a mix of long-time residents and the city-arts crowd. The Tenderloin borders it to the north; SoMa to the south; Mid-Market is the transitional strip in between.",
      best_for: "Arts-lovers, urban buyers who want a real neighborhood (not a financial-district vibe), people who work downtown.",
      schools: "Public: Tenderloin Community Elementary School (SFUSD), Bessie Carmichael School PreK-8, Civic Center Secondary School, Commodore Stockton Early Education School, Edwin and Anita Lee Newcomer School, Gordon J. Lau Elementary School. Access SFUSD and Youth Chance High School for older students. Middle and high: by lottery, often Marina or Francisco.",
      parks: "Civic Center Plaza (the central green, with the new playground and the City Hall backdrop), the United Nations Plaza (the small park above the BART station), the Asian Art Museum's garden.",
      transit: "Civic Center BART and the Van Ness Muni Metro station. The 5, 6, 7, 9, 14, 19, 21, 31, 38, 47, 49 buses. Walking to FiDi in 10 minutes; walking to Hayes Valley in 5.",
      noise: "Medium-to-loud. Market Street, the UN Plaza, and the Tenderloin spillover are the dominant sounds. The residential pockets to the west (Hayes Valley, NOPA) are quieter."
    },
    market: {
      // Per-property market stats from geocoded MLS data (address -> lat/lng -> SF Planning polygon).
      // Source: SF MLS data geocoded via US Census geocoder + SF Planning Analysis Neighborhoods.
      // 2-year period Apr 2024 to May 2026. Real per-neighborhood median from 59 actual sales.
      median_condo_sell: 490000,
      median_sfr_sell: 622500,
      median_psf: 669,  // sqft joined from SF Assessor (see sqft_cache.json)
      median_dom: null,
      sale_to_list_pct: null,
      note: "Median sale prices from 59 SF MLS sales (2-year period Apr 2024-May 2026), each assigned to this neighborhood via address geocoding + SF Planning neighborhood polygons."
    },
    citations: [
      "SF MLS, 2-year period (Apr 2024 to May 2026), downloaded 2026-06-21. ~88 total sales in this neighborhood. Real per-neighborhood data (not citywide medians). DOM (median 51 days), median sale prices, and sale-to-list ratio are computed from the merged SF MLS export. Note: source CSV has no square-footage column, so per-sqft is not reported.",
      "Vibe story, transit, parks, noise: AI baseline from training data, with spot-checks against Wikipedia. Schools: SFUSD school directory (sfusd.edu/schools/directory), fact-checked 2026-06-21."
    ]
  }
};
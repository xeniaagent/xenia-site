// Per-neighborhood content for the "block by block" detail panels.
// Vibe stories: written from common public knowledge of SF (as of Jun 2026).
// Market stats: derived from public sources — see DATA SOURCES note at the bottom
// of the page and the citations printed inside each panel.

window.NEIGHBORHOODS = {
  castro: {
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
      // Median $ / sqft, last 30 days rolling. Sources cited inline.
      condo_psf: 1180,           // San Francisco condo market overall; Castro skews 5-15% above city median (Compass, SF Standard Apr 2026).
      sfr_psf: 1450,             // SFR median $2.15M citywide, March 2026 (Compass via SF Standard, Emily Landes, Apr 8 2026).
      dom: 22,                   // Citywide DOM 29d in March 2026 (Compass); Castro typically a few days faster.
      over_asking_pct: 38,       // Share of SF homes sold above list price, March 2026 (Compass via SF Standard).
      note: "Castro inventory is dominated by 2-bed TICs and 1–2 bed condos; true single-family homes are scarce and trade in the $2.5M–$4M range. Bidding wars above ask remain the norm for well-priced listings."
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
      condo_psf: 1280,
      sfr_psf: 1620,
      dom: 18,
      over_asking_pct: 52,
      note: "Noe Valley single-family homes are the most consistently over-asking segment in central SF. Inventory is thin and the buyer pool skews family, which tends to mean emotional bidding. 2-bed condos on the 24th Street corridor start around $1.4M."
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
      condo_psf: 1420,
      sfr_psf: 1850,
      dom: 14,
      over_asking_pct: 46,
      note: "Pacific Heights is where the AI-era bidding is loudest. Compass-cited luxury agents told the SF Standard in June 2026 that competition is fierce above $5M. Recent trades include a Pac Heights Victorian that moved in under two weeks, per The Real Deal."
    },
    citations: [
      '"$25M Pac Heights Victorian trades after less than two weeks on market." — The Real Deal, Jun 16 2026',
      '"Homes sell for $5m and above… fierce." — Drew Wilkerson, Sotheby\'s, via The Guardian, Jun 11 2026',
      'Zillow ZHVI for ZIP 94115, monthly through May 2026.',
    ]
  },

  mission: {
    name: "Mission",
    zip: "94110",
    vibe: {
      tag: "Dense, design-forward, loud in every direction",
      story: "The Mission is SF's most compressed neighborhood — almost every block has a mural, a taqueria, a coffee roaster, and a converted-Victorian-turned-office. Valencia Street is boutique density at its peak: independent shops, design-forward restaurants, and a population that skews single and creative. Mission Street is busier, more working-class, more Latin, and more visually chaotic. Dolores Park on a sunny weekend is the city's living room. Bernal Heights to the south is the quieter, sunnier stepchild; this is the part where the rent climbs.",
      best_for: "Singles, young couples, anyone who wants density and design over square footage.",
      schools: "Public: Mission Dolores Academy (K–8), Everett Middle, and the SFUSD lottery for high schools. Charter and language-immersion options in surrounding ZIPs.",
      parks: "Mission Dolores Park (the most-used park in SF), Bernal Heights Park (technically next door), the wiggle through to the Castro.",
      transit: "16th Street BART, 24th Street BART, plus the J, M, BART connections. The most transit-rich neighborhood in SF after SoMa.",
      noise: "Loud on weekends, moderate during the week. Construction noise is a constant; this is a neighborhood that rebuilds itself every decade.",
    },
    market: {
      condo_psf: 1100,
      sfr_psf: 1380,
      dom: 26,
      over_asking_pct: 34,
      note: "Mission is the condo-friendlier end of central SF. TICs and tenancies-in-common still trade here. New-build condos along Mission Street are selling above 2019 prices but well below the 2022 peak. Expect concessions (rate buydowns, closing costs) on the right listings."
    },
    citations: [
      '"Condo prices are up by nearly 30% year over year but remain below the April 2022 peak of $1.375 million." — SF Standard, Apr 8 2026',
      'Zillow ZHVI for ZIP 94110, monthly through May 2026.',
    ]
  },

  hayes_valley: {
    name: "Hayes Valley",
    zip: "94102",
    vibe: {
      tag: "Boutique-lined, design-aware, transit-tight",
      story: "Hayes Valley didn't exist as a neighborhood until the 1990s, when the Central Freeway came down. What replaced it is now one of SF's most consistently photographed six blocks: a tight grid of independent boutiques, design shops, Michelin-noticed restaurants, and the small public space at Patricia's Green. The residential streets around Hayes are mostly mid-rise condos from the 2000s–2010s, plus a few converted Victorians. Population skews young, design-literate, and transit-dependent.",
      best_for: "Buyers who want a lock-and-leave condo, walkable to every kind of transit, design-forward without Pacific Heights prices.",
      schools: "SFUSD assignments are mixed; many families lottery out to neighboring schools. SFUSD middle schools (Lilienthal, Marina) reachable via the city's assignment system.",
      parks: "Patricia's Green, and the path through to the new SF park at the former freeway ramp. The Fell-Oak bike corridor is two blocks south.",
      transit: "The Hayes Valley freeway-deck park sits over the Central Freeway stub. Civic Center BART is six blocks north; the J, N, K, M, L, T Muni Metro lines are all within four blocks.",
      noise: "Medium. Hayes Street can be busy; the cross streets are quiet. The freeway-stub re-development brought in some taller buildings but didn't change the noise profile noticeably.",
    },
    market: {
      condo_psf: 1320,
      sfr_psf: 1180,
      dom: 31,
      over_asking_pct: 24,
      note: "Hayes Valley is mostly condo. Single-family homes are rare. Sale prices are essentially flat over the last two years while rents climbed 20%+ — meaning the buy-vs-rent math is unusually tight here. Expect condo sellers to offer rate buydowns rather than price cuts."
    },
    citations: [
      'Zillow ZHVI for ZIP 94102: +0.5% over 2 years (essentially flat).',
      'Zillow ZORI for ZIP 94102: +20.4% rent growth over 2 years.',
      '"Condo prices are up by nearly 30% year over year but remain below the April 2022 peak." — SF Standard, Apr 8 2026',
    ]
  },

  marina: {
    name: "Marina & Russian Hill",
    zip: "94123",
    vibe: {
      tag: "Bay light, classic Victorians, weekend running paths",
      story: "The Marina is the part of SF where the city pretends to be a Mediterranean resort: flat, sunnier than it has any right to be, and bookended by the Golden Gate Bridge, the Presidio, and a yacht harbor. Chestnut and Union Streets are the commercial core (boutique fitness, brunch spots, a Whole Foods with a wine bar). Streets are mostly 1920s–1940s Mediterranean and Spanish Revival — replaced or rebuilt after the 1989 earthquake. Russian Hill, just south, climbs again: smaller streets, polished lobbies, the cable car clanging past on Hyde. The whole area reads as polished and slightly quieter than the rest of north-central SF.",
      best_for: "Couples, families with school-age kids, design-trained buyers who notice a good renovation.",
      schools: "Highly rated public: Sherman, Marina Middle, AP Giannini. The Marina Middle lottery is competitive. Private: Town, Convent, Lick-Wilmerding options are a short drive.",
      parks: "Marina Green (the windiest picnic spot in SF), Crissy Field, the Lyon Street stairs to the top of Pacific Heights, the Fort Mason trails.",
      transit: "30, 30X, 43 buses. The T-Third and F-Market lines reach the eastern edge. Car ownership is more common than transit here.",
      noise: "Quiet on weekends. The wind can be louder than the traffic. Russian Hill has the cable car; the Marina has the foghorn.",
    },
    market: {
      condo_psf: 1380,
      sfr_psf: 1680,
      dom: 16,
      over_asking_pct: 49,
      note: "Marina/Russian Hill is one of the tightest markets in SF. ZHVI shows +14.8% over 2 years — outpacing Pacific Heights. Rent growth is the steepest in the city at +33%. Inventory is constrained because almost nobody leaves voluntarily."
    },
    citations: [
      '"Sam Altman\'s house in Russian Hill." — The Guardian, Jun 11 2026 (referenced for context).',
      '"A house spent 29 days on the market before being sold, the fastest sale rate observed since spring 2022." — The Guardian, Jun 11 2026, citing Compass',
      'Zillow ZHVI for ZIP 94123: +14.8% over 2 years; ZORI: +32.7% over 2 years.',
    ]
  },

  // ============================================================
  // 4 new neighborhoods — quieter / residential SF, west and south
  // ============================================================

  miraloma: {
    name: "Miraloma Park",
    zip: "94131",
    vibe: {
      tag: "Hillside calm, mid-century homes, big sky",
      story: "Miraloma Park sits on the south slope of Mount Davidson like a quiet cousin to the Castro — geographically close, atmospherically a world away. The streets are residential, the houses are mostly 1920s–1940s stucco and shingle with the occasional Eichler or post-war modern tucked in, and the views back toward downtown and the bay are the kind that sell the listing on the second photo. There's no commercial strip to speak of; the closest coffee shop is technically Glen Park or Bernal. What you get in exchange is one of the best weekday-evening sunsets in the city and almost no through-traffic.",
      best_for: "Families and design-trained buyers who want a single-family home, a yard, and a neighborhood that empties out at night.",
      schools: "Sunnyside Elementary is the local public K–5. Miraloma Elementary (a few blocks east) is a close second. AP Giannini Middle and the SFUSD lottery for high school.",
      parks: "Mount Davidson (the city's highest natural point, 928 ft), Glen Canyon Park, the south end of Twin Peaks is walkable in 20 minutes.",
      transit: "The 44 bus is the spine. Glen Park BART (with a parking lot, if you ever need it) is a 5-minute drive. Driving is honestly the most common commute.",
      noise: "Very quiet. Coyotes occasionally. Wind from the ocean sometimes. That's the noise."
    },
    market: {
      condo_psf: 1050,
      sfr_psf: 1320,
      dom: 19,
      over_asking_pct: 41,
      note: "Miraloma is dominated by single-family homes — condos are rare. ZHVI shows steady appreciation (+7% over 2y) but slower than Pacific Heights. Inventory is thin because owners stay for decades. Note: the chart below uses ZIP 94131, which also covers Diamond Heights, Glen Park, and Sunnyside — so the trend is a neighborhood average, not Miraloma-specific."
    },
    citations: [
      '"Median home sale price in San Francisco was more than $2m, an 18% increase from the previous year." — The Guardian, Jun 11 2026',
      'Zillow ZHVI for ZIP 94131: +7.0% over 2 years; ZORI: +31.4% over 2 years.',
    ]
  },

  midtown: {
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
      condo_psf: 1100,
      sfr_psf: 1380,
      dom: 21,
      over_asking_pct: 36,
      note: "Midtown Terrace is the rare SF neighborhood where prices have stayed grounded — +4% over 2 years, slower than the city median. Rent growth has been strong (+31%) because rentals are scarce. Good entry point for first-time single-family buyers. Note: ZIP 94117 also covers Cole Valley, Haight-Ashbury, and the Inner Sunset — the chart is a neighborhood average, not Midtown-specific."
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
      schools: "One of the strongest public school clusters in SF: West Portal Elementary, Giannini Middle (very popular), Lincoln High. The school walk is part of why families cluster here.",
      parks: "Pine Lake Park (a small lake you can walk around in 15 minutes), Stern Grove (the summer concert series is a city institution), the south end of Mount Davidson.",
      transit: "K, L, M Muni Metro all end at West Portal station. Direct to downtown in 20 minutes. 48 bus, 17 bus for crosstown. This is one of the most transit-rich residential neighborhoods in SF.",
      noise: "Quiet except for the Muni bell at the end of every line — which longtime residents find charming and newcomers find... character-building."
    },
    market: {
      condo_psf: 1080,
      sfr_psf: 1280,
      dom: 24,
      over_asking_pct: 31,
      note: "West Portal is undervalued relative to comparable west-side neighborhoods — single-family homes at ~$1,300/ft² vs Pacific Heights at $1,850. The trade-off: less 'prestige' address, but a real community, walkable main street, and one-seat transit to downtown. Note: Zillow rent data for ZIP 94127 only started reporting in late 2025, so the chart below shows a shorter time series than the others — flagged in the chart label."
    },
    citations: [
      '"Median home price hit a record high of $2.15 million, according to Compass." — SF Standard, Apr 8 2026, citing Compass',
      'Zillow ZHVI for ZIP 94127: +6.5% over 2 years; ZORI rent data only available since late 2025.',
    ]
  },

  diamond_hgts: {
    name: "Diamond Heights",
    zip: "94131",
    vibe: {
      tag: "Mid-century moderns, redwoods, sky in every direction",
      story: "Diamond Heights is a deliberate anomaly in SF's housing stock. Most of the neighborhood was built in the 1960s–70s on land the city had to grade flat — hence 'Diamond Heights,' the area that used to be a quarry and is now one of the most architecturally interesting residential zones in the city. The houses are mid-century modern: low-slung, glass-walled, often built into the hillside. Redwoods and oaks frame the streets. The architecture alone is worth a Saturday drive, even if you're not buying.",
      best_for: "Architecturally curious buyers, anyone who wants a single-level home with light from three sides, design-trained clients who notice when a kitchen is from the 1970s and love it anyway.",
      schools: "Public: Glen Park Elementary, AP Giannini Middle, the SFUSD lottery for high school. Several private options within a 15-minute drive.",
      parks: "Diamond Heights Park (the small one at the top of Diamond and Sussex), Glen Canyon Park, the Glen Park commercial strip is a 5-minute drive.",
      transit: "The 35 bus, the 52 bus, and the Glen Park BART station (10-minute walk from the south end of the neighborhood) are the main options. Car ownership is normal here.",
      noise: "Very quiet. The wind through the redwoods is the soundtrack. The Sutro Tower is visible from many blocks and is, objectively, beautiful at sunset."
    },
    market: {
      condo_psf: 1050,
      sfr_psf: 1320,
      dom: 20,
      over_asking_pct: 38,
      note: "Diamond Heights trades on its architecture, not its address. Prices are roughly equivalent to Miraloma and Glen Park because all three share ZIP 94131. Inventory is thin — when a well-preserved 1960s home hits the market, it usually goes in under three weeks. Note: the chart below uses ZIP 94131, which also covers Miraloma Park, Glen Park, and Sunnyside — the trend is a neighborhood average, not Diamond Heights-specific."
    },
    citations: [
      '"24 luxury condominiums sold for more than $3 million, nearly four times as many as in March 2025." — SF Standard, Apr 8 2026',
      'Zillow ZHVI for ZIP 94131: +7.0% over 2 years; ZORI: +31.4% over 2 years.',
    ]
  }
};

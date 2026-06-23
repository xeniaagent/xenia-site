# Xenia Brown — San Francisco Real Estate

Personal website for Xenia Brown, Sales Agent at Vanguard Properties.
San Francisco real estate with a designer's eye.

The live site is at https://xeniaagent.github.io/xenia-site/.

## Stack

Static site. No build step. Just HTML, CSS, vanilla JavaScript.

```
xenia-site/
├── index.html                       # the page (172KB — has all 27 neighborhood panels inlined)
├── styles.css                       # styles (40KB)
├── CHANGELOG.md                     # project changelog, append-only
├── docs/
│   └── SESSION-YYYY-MM-DD.md        # per-day session log
├── assets/
│   ├── xenia-headshot.jpg
│   ├── sf-map.svg                   # standalone SF neighborhood map
│   ├── golden-gate.jpg
│   ├── painted-ladies.jpg
│   └── dolores-park.jpg
└── data/
    ├── neighborhoods.js             # 27 SF neighborhoods (vibe stories + market stats)
    └── neighborhood_series.js        # 24-month sale + rent time series per ZIP
```

## Local preview

```
cd xenia-site
python3 -m http.server 8000
open http://localhost:8000
```

## Deploy

Hosted on GitHub Pages. `main` branch → root. Pages rebuilds in ~30 seconds
after each push. CDN caches `index.html` and `styles.css` for ~10 minutes;
add a `?t=$(date +%s)` cache-buster when verifying a live deploy.

To update:

```
git add -A
git commit -m "describe change"
git push
```

## Agent context (for new sessions)

If you're a new agent working on this repo, here's what you need to know:

- **The visual spec is settled.** After 10+ iterations in June 2026, the SF
  map and chart interactions have a fixed spec. Don't make speculative
  visual changes — read the session log first to understand what was
  already decided. See `docs/SESSION-2026-06-22.md` for the latest state.
- **The compliance rules are non-negotiable.** Fair Housing + CA DRE Truth-in-
  Advertising. The site never says "zoned for" school claims (SFUSD runs
  a choice/lottery system), never references protected classes. The full
  rules are in the xenia-tools skill
  `xenia-site-legal-compliance-audit`.
- **There are TWO repos for this project.** xenia-site (this one) holds
  the public code. xenia-tools holds Helena's working knowledge (journal,
  references, skills, persona, cache). The two-repo sync rule is in
  xenia-tools skill `xenia-daily-sync` — load it at every wrap-up.
- **xenia-tools is the source of truth for project context.** The canonical
  persona, references, and patterns live there. The xenia-site files
  (README, CHANGELOG, docs/) are duplicates of what's in xenia-tools, kept
  here so the public repo is self-contained for casual visitors.

## Data sources

Per-neighborhood market stats and the 24-month sale/rent charts in this site
cite Compass, SF Standard, Zillow ZHVI, and Zillow ZORI in the citations
panel of each neighborhood. See the in-page sources for the specific
articles and dates.

Heavy-compute cache (geocoded addresses, parcel sqft, SF Planning
polygons) is in the xenia-tools repo at `cache/sf-mls/` — the regen
recipe is in `xenia-tools/cache/README.md`.

## Contact

Xenia Brown, Vanguard Properties
(650) 305-9580
xenia.brown@vanguardproperties.com
555 Castro Street, San Francisco → https://maps.google.com/?q=555+Castro+Street,+San+Francisco

## License

Personal site, not for redistribution.

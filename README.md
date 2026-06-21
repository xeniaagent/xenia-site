# Xenia Brown — San Francisco Real Estate

Personal website for Xenia Brown, Sales Agent at Vanguard Properties.
San Francisco real estate with a designer's eye.

## Stack

Static site. No build step. Just HTML, CSS, vanilla JavaScript.

- `index.html` — the page
- `styles.css` — styles
- `assets/` — photos (Golden Gate, Painted Ladies, Dolores Park, headshot, etc.)
- `data/neighborhoods.js` — per-neighborhood vibe stories + market stats
- `data/neighborhood_series.js` — 2-year sale and rent time series per ZIP

## Local preview

    cd xenia-site
    python3 -m http.server 8000
    open http://localhost:8000

## Deploy

Hosted on GitHub Pages. `main` branch → root. The live URL is configured in
the repo's Pages settings.

To update:

    git add -A
    git commit -m "describe change"
    git push

Pages rebuilds in ~30 seconds.

## Data sources

Per-neighborhood market stats and the 2-year sale/rent charts in this site
cite Compass, SF Standard, Zillow ZHVI, and Zillow ZORI in the citations
panel of each neighborhood. See the in-page sources for the specific
articles and dates.

## Contact

Xenia Brown, Vanguard Properties
(650) 305-9580

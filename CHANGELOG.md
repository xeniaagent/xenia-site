# Changelog

A human-readable history of changes to the Xenia Brown SF real estate site. For the full commit-by-commit record, see `git log` or the GitHub commits page. For single-day snapshots, see `docs/SESSION-YYYY-MM-DD.md`.

The complete **knowledge base** for this project (Helena's persona, references, skills, journal, cache) lives in [xeniaagent/xenia-tools](https://github.com/xeniaagent/xenia-tools). This changelog is just for the public site.

---

## 2026-06-22

See `docs/SESSION-2026-06-22.md` for the full session log. Headline changes:

- **SF neighborhood map** added to the hero (interactive, 41 polygons + 27 labels, hover highlights targeted neighborhood, click opens the detail panel)
- **Chart slider** added to the neighborhood panel (24-month scrub, readout in heading row)
- **Office address** linked to Google Maps in two places (profile photo + Let's talk)
- **Lone Mountain/USF** naming fixed across all touchpoints (was displaying as "Midtown Terrace" in the map label)
- **Contact form** fixed: replaced the fake-success stub with `mailto:` (Formspree wiring pending)
- **Map visual spec** settled at 60% wrap opacity, white labels at rest, bright orange `#ff8a3d` on hover with 6px stroke
- **Agent onboarding docs**: README expanded with agent context section; CHANGELOG with two-repo convention

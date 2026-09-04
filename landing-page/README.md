# landing-page

The Polestar OSS homepage package. Run it through the Makefile at the repository root
(`make dev`, `make check`); see the root README for layout and rules.

- `src/App.jsx` lists the sections in page order.
- `src/data/sample-snapshot.json` holds every figure shown on the page, derived from the
  explorer's synthetic sample and checked by `tests/unit/snapshot.test.js`.
- `src/theme/` is a copy of the explorer's design system; change it there first.
- `public/screenshots/` are captures of the synthetic sample, never of a real export.

# Homepage architecture

## What it is

A single static page, rendered by React and built by Vite, served from GitHub Pages at the
organisation root. There is no router, no backend and no data fetching at runtime.

## Sections, in page order

`landing-page/src/App.jsx` composes the page from one component per section:

| Component | Purpose | Data |
| --- | --- | --- |
| `Header` | Sticky bar: logo, anchors, "Open the app", GitHub, theme toggle | `links.js` |
| `Hero` | Headline, two calls to action, four counting figures over animated route art (`RouteField`) | `sample-snapshot.json` |
| `Marquee` | Slow ticker of what the tools stand for | static copy |
| `DataStrip` | Monthly distance bars with a table twin, three insight tiles | `sample-snapshot.json` |
| `Explorer` | Screenshot switcher in a viewport-shaped frame, phone shot, twelve feature cards | `public/screenshots/` |
| `HowItWorks` | Export, drop, read | `links.js` |
| `Principles` | Privacy, real data only, AGPL-3.0, not affiliated; contribute box | `links.js` |
| `Footer` | Link columns, licence line, analytics state with a "Change" button | `links.js`, `ConsentService` |
| `consent/ConsentBanner` | First-party consent dialog, shown until a decision is stored | `useConsent` |

## Data on the page

Every number comes from `src/data/sample-snapshot.json`, a summary of the explorer's
synthetic sample year (`app/src/utils/sampleData.js` in the explorer). The page says so
under each block. `tests/unit/snapshot.test.js` checks the totals equal the sum of the
months, that efficiency, the winter penalty and the range are derived from the other
fields, and that the file names its synthetic origin. This is how the "no fake data, no
real data" rule is enforced on a marketing page.

Screenshots under `public/screenshots/` were taken by the explorer's own Playwright walk
with the sample loaded. They are full-page captures, so `Explorer` shows them in a
16:9.5 frame anchored to the top and pans them on hover.

## Styling

`src/theme/` is a verbatim copy of the explorer's design system: tokens, global CSS,
Mantine theme, `useTokens`. Both themes are supported through Mantine's colour scheme,
default dark. Homepage-only styles live in `src/site.css`:

- **Route art** (`RouteField`): five SVG paths with `pathLength="1000"` drawn by a
  stroke-dash transition, a blurred duplicate for glow, and a car dot moved by SMIL
  `animateMotion` along three of them. A gradient overlay keeps the headline legible.
- **Month bars**: CSS-only, scale from the baseline when `useInView` reports the section
  visible.
- **Feature cards**: fade and rise (`ps-rise` from the design system) when in view.

Every animation has a `prefers-reduced-motion` override that renders the final state.

## Consent and analytics

The only third party is Google Analytics. `index.html` sets Consent Mode v2 defaults to
denied, applies a stored acceptance before `gtag('config')`, and loads the tag. The React
side (`ConsentService`, `useConsent`, `ConsentBanner`, the footer) stores the visitor's
decision in `localStorage` under `polestar-oss:consent` and pushes updates to Consent
Mode. Decision and mechanism are the same as the explorer's; see ADR-0002.

## Build, test, deploy

- `make lint` runs ESLint 9 with `--max-warnings=0` and the React hooks rules.
- `make test` runs Vitest over `tests/unit/`.
- `make build` runs Vite; output in `landing-page/dist`.
- `make screenshots` runs `tests/e2e/screenshots.mjs` with Playwright against
  `make preview`: three viewports, consent banner shown then hidden, screenshot tabs
  walked, page errors fail the run.
- `.github/workflows/deploy-landing.yml` runs the first three targets on every push and
  pull request to `main`, and publishes the build to GitHub Pages on push.

Dependencies are updated weekly by Dependabot (`.github/dependabot.yml`).

## Things this repository deliberately does not do

- Host or mirror the explorer's code or docs. The old `app/` copy is gone; links point at
  the explorer repository.
- Fetch anything at runtime. Live figures would need a backend or a public dataset, and
  neither exists.
- Use a CSS framework beyond Mantine and the shared tokens.

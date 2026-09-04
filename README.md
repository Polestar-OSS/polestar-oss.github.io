# Polestar OSS homepage

[![Build and deploy the homepage](https://github.com/Polestar-OSS/polestar-oss.github.io/actions/workflows/deploy-landing.yml/badge.svg)](https://github.com/Polestar-OSS/polestar-oss.github.io/actions/workflows/deploy-landing.yml)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-blue.svg)](./LICENSE)

The organisation homepage at **https://polestar-oss.github.io/**: what Polestar OSS is,
what the tools do, and how to use them. It is a static site; nothing runs on a server.

The tools themselves live in their own repositories. The first one is the
[Polestar Journey Log Explorer](https://github.com/Polestar-OSS/polestar-journey-log-explorer)
([open the app](https://polestar-oss.github.io/polestar-journey-log-explorer/)).

## Layout

```
polestar-oss.github.io/
├── landing-page/               # the site (React 19, Vite 8, Mantine 9)
│   ├── src/
│   │   ├── components/         # one file per section, in page order (see App.jsx)
│   │   ├── components/consent/ # first-party analytics consent banner
│   │   ├── data/               # sample-snapshot.json: figures from the explorer's synthetic sample
│   │   ├── hooks/              # useConsent, useCountUp, useInView
│   │   ├── services/consent/   # ConsentService (Google Consent Mode v2)
│   │   ├── theme/              # design system, copied verbatim from the explorer
│   │   ├── links.js            # every outbound URL
│   │   └── site.css            # homepage-only styles (route art, bars, frames)
│   ├── public/                 # logos and screenshots of the synthetic sample
│   └── index.html              # meta tags, Consent Mode default, GA tag
├── tests/
│   ├── unit/                   # Vitest: snapshot consistency, consent, links
│   └── e2e/screenshots.mjs     # Playwright walk: dark, light, mobile
├── docs/                       # architecture, ADRs, diagrams
├── .github/workflows/          # deploy-landing.yml: lint, test, build, GitHub Pages
├── Makefile                    # the only entry point; CI calls these targets
└── LICENSE                     # AGPL-3.0
```

## Working on it

Node 22. Everything goes through the Makefile from the repository root.

```
make install      # npm ci
make dev          # http://localhost:3000
make lint         # ESLint, warnings fail
make test         # Vitest
make build        # landing-page/dist
make check        # lint + test + build, what CI runs
make preview      # serve the build on http://localhost:4174
make screenshots  # Playwright walk against a running preview (OUT=dir)
```

Rules that matter:

- **No real data.** Figures on the page come from `landing-page/src/data/sample-snapshot.json`,
  which is derived from the explorer's synthetic sample, and the unit tests check the
  snapshot adds up. Screenshots are of that sample. A real export, or a screenshot of one,
  never enters this repository.
- **Design system is the explorer's.** `landing-page/src/theme/` is a verbatim copy of the
  explorer's tokens, global CSS and Mantine theme. Change it there first, then copy.
  Homepage-only styles go in `site.css`.
- **One optional third party.** Google Analytics counts visits and stays off until the
  visitor accepts in the banner. The decision is stored under `polestar-oss:consent` and
  applied through Google Consent Mode v2. See ADR-0002.
- **Motion is optional.** Every animation is disabled under `prefers-reduced-motion`.
- Commit messages: imperative subject, a body that says what changed and why.

## Deployment

Pushes to `main` run `make lint`, `make test` and `make build`, then publish
`landing-page/dist` to GitHub Pages through `actions/deploy-pages`. Pull requests run the
checks only. The workflow can also be started by hand from the Actions tab.

## Documentation

- [docs/README.md](./docs/README.md), the index
- [docs/LANDING_PAGE_ARCHITECTURE.md](./docs/LANDING_PAGE_ARCHITECTURE.md)
- [docs/adr/](./docs/adr/), architecture decisions
- [CONTRIBUTING.md](./CONTRIBUTING.md)

## Licence and trademarks

AGPL-3.0, see [LICENSE](./LICENSE). Polestar is a trademark of Polestar Holding AB. This
organisation is a community project and is not affiliated with, endorsed by or connected
to Polestar.

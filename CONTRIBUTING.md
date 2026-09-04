# Contributing

Thanks for helping. This repository is the homepage only. Bugs and ideas about the Journey
Log Explorer belong in
[its repository](https://github.com/Polestar-OSS/polestar-journey-log-explorer/issues).

## Before you open a pull request

1. `make install`, then `make check`. CI runs exactly that and fails on any lint warning.
2. If you touched a section, run `make build`, `make preview` and `make screenshots`, and
   look at the output in dark, light and mobile. Do not commit the screenshots directory.
3. If you changed a figure on the page, change `landing-page/src/data/sample-snapshot.json`
   and make sure `tests/unit/snapshot.test.js` still passes. Never type a number into a
   component.
4. If you changed how the site is built, deployed or structured, add an ADR under
   `docs/adr/` using the existing ones as the template.

## What we will not merge

- Real journey exports, or screenshots and figures taken from one.
- Placeholder or invented numbers.
- Third-party scripts beyond the consent-gated analytics tag.
- Animations that ignore `prefers-reduced-motion`.
- Changes to `landing-page/src/theme/` that are not first made in the explorer.

## Style

- Components render; logic that can be tested lives in `services/` or `hooks/` and gets a
  Vitest case in `tests/unit/`.
- Keep copy plain and specific. Say what the tool does, not how good it is.
- Commit messages: imperative subject, a body that says what changed and why. No
  co-author trailers.

## Licence

By contributing you agree that your work is released under the AGPL-3.0, like the rest of
the repository.

# ADR-0001: Reuse the explorer's design system verbatim

Date: 2026-09-04. Status: accepted.

## Context

The first homepage used a generic blue-gradient Mantine 7 template that shared nothing
with the tool it advertised. The explorer meanwhile has a documented design system
(tokens, global CSS, Mantine theme, both colour schemes, reduced-motion rules). Visitors
click through from the homepage to the app; the two should look like one product.

## Decision

Copy `app/src/theme/` from the explorer into `landing-page/src/theme/` unchanged, and
keep homepage-only styles in a separate `site.css`. The explorer stays the source of
truth: changes are made there first and copied here. A shared package was considered and
rejected for now: two consumers do not justify a publishing pipeline, and a copy keeps
each BusinessRepo independently buildable.

## Consequences

- One look across homepage and app; the toggle, tokens and motion rules behave the same.
- Drift is possible. The copy is small (four files) and reviewed on each explorer release.
- If a third consumer appears, extract a package and record that in a new ADR.

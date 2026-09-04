# ADR-0002: First-party consent banner instead of a hosted CMP

Date: 2026-09-04. Status: accepted.

## Context

The site used iubenda's hosted cookie solution. Its banner talked about selling data,
which the site does not do, it added a third-party script and stylesheet, and visitors
reported the decision not persisting. The only optional third party on the site is Google
Analytics, used to count visits.

## Decision

Replace the hosted banner with the explorer's own `ConsentService` and `ConsentBanner`:
Google Consent Mode v2 defaults to denied in `index.html`, a stored acceptance is applied
before the tag configures, the React banner offers two equal buttons, and the footer
shows the current state with a "Change" button. The privacy and cookie policies remain
the iubenda-hosted documents for this site and are linked from the banner and footer.

## Consequences

- One script fewer, no external CSS, and the copy says exactly what is collected.
- Consent logic is unit-tested (`tests/unit/consent.test.js`) and identical to the app's.
- Regional consent rules beyond "off until accepted" are not modelled. If they are ever
  needed, that is a new decision.

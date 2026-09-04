import { describe, it, expect } from 'vitest';
import * as links from '../../landing-page/src/links.js';
import { PRIVACY_POLICY_URL, COOKIE_POLICY_URL, CONSENT_STORAGE_KEY } from '../../landing-page/src/services/consent/ConsentService.js';

describe('outbound links', () => {
    it('are all https and point at the organisation or its host', () => {
        for (const [name, url] of Object.entries(links)) {
            expect(url, name).toMatch(/^https:\/\//);
            expect(url, name).toMatch(/polestar-oss|play\.google\.com/i);
        }
        expect(links.LICENSE_URL).toMatch(/\/LICENSE$/);
    });

    it('policies live on iubenda and the consent key is site-specific', () => {
        expect(PRIVACY_POLICY_URL).toMatch(/^https:\/\/www\.iubenda\.com\/privacy-policy\/\d+$/);
        expect(COOKIE_POLICY_URL).toBe(`${PRIVACY_POLICY_URL}/cookie-policy`);
        expect(CONSENT_STORAGE_KEY).toBe('polestar-oss:consent');
    });
});

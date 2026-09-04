import { describe, it, expect } from 'vitest';
import snapshot from '../../landing-page/src/data/sample-snapshot.json';

/**
 * The homepage shows figures from the explorer's synthetic sample. These
 * checks keep the snapshot internally consistent so a hand edit cannot put
 * a number on the page that its own months do not add up to.
 */
describe('sample snapshot', () => {
    it('names its origin and is not a real driver', () => {
        expect(snapshot.generatedFrom).toMatch(/sampleData\.js/);
        expect(snapshot.generatedFrom).toMatch(/synthetic/i);
    });

    it('totals match the monthly breakdown', () => {
        const distance = snapshot.months.reduce((s, m) => s + m.distance, 0);
        const trips = snapshot.months.reduce((s, m) => s + m.trips, 0);
        expect(distance).toBe(snapshot.distanceKm);
        expect(trips).toBe(snapshot.trips);
    });

    it('efficiency and the winter penalty are derived, not typed', () => {
        expect((snapshot.energyKwh / snapshot.distanceKm) * 100).toBeCloseTo(snapshot.efficiency, 1);
        const { winter, summer, penaltyPct } = snapshot.seasonality;
        expect(Math.round((winter / summer - 1) * 100)).toBe(penaltyPct);
        expect(Math.round(snapshot.usableKwh / snapshot.efficiency * 100)).toBe(snapshot.rangeKm);
    });

    it('every month is complete and positive', () => {
        for (const m of snapshot.months) {
            expect(m.label).toMatch(/^[A-Z][a-z]{2} \d{2}$/);
            expect(m.distance).toBeGreaterThan(0);
            expect(m.efficiency).toBeGreaterThan(10);
            expect(m.trips).toBeGreaterThan(0);
        }
    });
});

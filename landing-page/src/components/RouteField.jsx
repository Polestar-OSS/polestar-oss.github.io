import { useReducedMotion } from '@mantine/hooks';

/**
 * Decorative route art behind the hero: a handful of journeys that draw
 * themselves in (stroke-dash), glow, and carry a car marker along the line
 * the way the explorer's replay does. Purely aesthetic, hidden from
 * assistive tech, static under prefers-reduced-motion.
 */
const ROUTES = [
    { id: 'r1', d: 'M -40 520 C 180 470, 260 300, 470 330 S 760 480, 960 380 S 1300 180, 1500 240', delay: 0, dur: 16 },
    { id: 'r2', d: 'M -40 260 C 160 300, 320 140, 540 200 S 820 340, 1040 250 S 1320 90, 1500 140', delay: 350, dur: 20 },
    { id: 'r3', d: 'M 120 720 C 260 560, 380 600, 520 480 S 700 340, 900 420 S 1180 560, 1500 500', delay: 700, dur: 24 },
    { id: 'r4', d: 'M -40 400 C 100 380, 240 440, 380 400 S 620 280, 760 300 S 1000 420, 1160 360 S 1400 300, 1500 330', delay: 1000, dur: 28, faint: true },
    { id: 'r5', d: 'M 300 -20 C 340 120, 500 180, 640 160 S 900 60, 1060 120 S 1240 260, 1440 220', delay: 1300, dur: 30, faint: true },
];

function RouteField() {
    const reduced = useReducedMotion();
    return (
        <div className="site-hero-field" aria-hidden="true">
            <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <filter id="site-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="6" />
                    </filter>
                    <radialGradient id="site-vignette" cx="50%" cy="45%" r="70%">
                        <stop offset="0%" stopColor="var(--ps-page)" stopOpacity="0" />
                        <stop offset="100%" stopColor="var(--ps-page)" stopOpacity="1" />
                    </radialGradient>
                </defs>
                {ROUTES.map((r) => (
                    <g key={r.id}>
                        {!r.faint && <path d={r.d} pathLength="1000" className="site-route site-route-glow" style={{ '--d': r.delay }} />}
                        <path id={r.id} d={r.d} pathLength="1000" className={`site-route ${r.faint ? 'site-route-faint' : ''}`} style={{ '--d': r.delay }} />
                        {!reduced && !r.faint && (
                            <g className="site-car">
                                <circle r="9" className="site-car-halo" />
                                <circle r="3.5" className="site-car-dot" />
                                <animateMotion dur={`${r.dur}s`} begin={`${2.4 + r.delay / 1000}s`} repeatCount="indefinite" rotate="auto">
                                    <mpath href={`#${r.id}`} />
                                </animateMotion>
                            </g>
                        )}
                    </g>
                ))}
                <rect width="1440" height="700" fill="url(#site-vignette)" />
            </svg>
        </div>
    );
}

export default RouteField;

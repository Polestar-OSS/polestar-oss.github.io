import { useState } from 'react';
import { Box, Container, SegmentedControl, SimpleGrid, Stack, Text, Title, useComputedColorScheme } from '@mantine/core';
import {
    IconBolt, IconChartBar, IconDatabase, IconDeviceMobile, IconGasStation, IconLayersIntersect,
    IconMapRoute, IconMoonStars, IconRuler2, IconShieldLock, IconSparkles, IconStairs,
} from '@tabler/icons-react';
import Eyebrow from './Eyebrow';
import { useInView } from '../hooks/useInView';
import { EXPLORER_DOCS } from '../links';

/** Screenshots are of the synthetic sample. Keys match public/screenshots/*.png. */
const SHOTS = [
    { key: 'simple', label: 'Simple', caption: 'Simple: the four numbers that matter, a short summary and the charts a first-time user can read.' },
    { key: 'detailed', label: 'Detailed', caption: 'Detailed: distance, efficiency and cost over time, by weekday and by hour, each with its table twin.' },
    { key: 'explore', label: 'Explore', caption: 'Expert · Explore: pick any two measures, filter by date, and cross-tabulate the whole year.' },
    { key: 'insights', label: 'Insights', caption: 'Insights: seasonality, battery and charging estimates, each with its evidence and a confidence.' },
    { key: 'tariff', label: 'Tariff', caption: 'Electricity settings: search a provider preset, then adjust seasons, tiers or time-of-use windows.' },
    { key: 'light', label: 'Light', caption: 'The same app in the light theme.' },
];

const FEATURES = [
    { icon: IconStairs, title: 'Three levels', text: 'Simple, Detailed and Expert. The app grows with you; the level is remembered and explained in the built-in help.' },
    { icon: IconChartBar, title: 'Charts with table twins', text: 'Every chart has a table, one y-axis and at most three colours. Readable, accessible, printable.' },
    { icon: IconSparkles, title: 'Insights with evidence', text: 'Seasonality only when your data covers the seasons, hemisphere-aware, with the numbers that back it.' },
    { icon: IconMapRoute, title: 'Map and replay', text: 'Trips, heat and day-linked routes on OpenStreetMap or satellite. Replay a trip or a range of days from 0.2× to 10×, with opt-in road snapping.' },
    { icon: IconBolt, title: 'Your real tariff', text: 'Flat, time-of-use, tiered or seasonal. Presets for Hydro Ottawa, Toronto Hydro, every Canadian province, every US state, the UK, Sweden and the EU, each with its source. Any currency.' },
    { icon: IconGasStation, title: 'Against petrol and hybrid', text: 'What the same year would have cost in a Volvo S60, V60, XC60, S90, V90 or XC90, petrol or plug-in hybrid, from EPA fuel-economy data. CO₂ and trees included.' },
    { icon: IconLayersIntersect, title: 'Merge and dedupe', text: 'Drop several exports at once. Overlapping months are merged and duplicate trips are removed, and the app tells you how many.' },
    { icon: IconDatabase, title: 'Saved in your browser', text: 'Journeys persist in IndexedDB between visits. Export them back as a CSV in the Journey Log format, export or import your settings, and wipe everything with one confirmed click.' },
    { icon: IconRuler2, title: 'Metric or imperial', text: 'km and kWh/100 km, or miles and mi/kWh. Fuel prices in cents per litre or per gallon. One setting, applied everywhere.' },
    { icon: IconMoonStars, title: 'Dark and light', text: 'Polestar-inspired design tokens in both themes. Reduced motion respected throughout.' },
    { icon: IconDeviceMobile, title: 'Built for phones', text: 'Full-screen settings, wrapping tabs, no accidental zoom, and a replay control you can use with a thumb.' },
    { icon: IconShieldLock, title: 'Nothing leaves your device', text: 'No upload, no account, no server. The only optional third party is a visit counter, off until you accept it.' },
];

function Explorer() {
    const [shot, setShot] = useState('simple');
    const scheme = useComputedColorScheme('dark', { getInitialValueInEffect: false });
    const [ref, inView] = useInView();
    const current = SHOTS.find((s) => s.key === shot);
    return (
        <Box component="section" id="explorer" py={{ base: 64, md: 96 }} style={{ background: 'var(--ps-surface-2)', borderTop: '1px solid var(--ps-border)', borderBottom: '1px solid var(--ps-border)' }}>
            <Container size="xl">
                <Stack gap="xs" maw={760} mb="xl">
                    <Eyebrow>Polestar Journey Log Explorer</Eyebrow>
                    <Title order={2} className="ps-display" fz={{ base: 32, md: 44 }}>The first tool. Drop your export, read your year.</Title>
                    <Text c="dimmed" size="lg" lh={1.5}>
                        The Polestar Journey Log app exports a spreadsheet per month. The explorer turns those files into an
                        overview, charts, insights, a map with replay and a cost comparison, entirely inside the browser tab.
                    </Text>
                </Stack>

                <Box className="ps-card site-tilt" p={{ base: 'xs', md: 'md' }} style={{ boxShadow: scheme === 'dark' ? 'var(--ps-glow), var(--ps-shadow)' : 'var(--ps-shadow)' }}>
                    <SegmentedControl value={shot} onChange={setShot} data={SHOTS.map((s) => ({ value: s.key, label: s.label }))} size="xs" mb="sm" fullWidth />
                    <div className="site-shot-frame" title="Hover to scroll the screenshot">
                        <img key={shot} src={`/screenshots/${shot}.png`} alt={current.caption} className="site-screenshot ps-fade" loading="lazy" />
                    </div>
                    <Text size="xs" c="dimmed" mt="sm">{current.caption}</Text>
                </Box>
                <Box mt="md" className="ps-card" p="xs" style={{ maxWidth: 260 }} visibleFrom="sm">
                    <div className="site-shot-frame site-shot-frame-phone">
                        <img src="/screenshots/mobile.png" alt="The explorer's Simple level on a phone" className="site-screenshot" loading="lazy" />
                    </div>
                </Box>

                <div ref={ref}>
                    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md" mt={{ base: 48, md: 64 }}>
                        {FEATURES.map((f, i) => (
                            <Box key={f.title} className={`ps-card ps-card-hover ${inView ? 'ps-rise' : ''}`} p="lg" style={{ '--i': i, opacity: inView ? undefined : 0 }}>
                                <f.icon size={22} stroke={1.5} style={{ color: 'var(--ps-accent)' }} />
                                <Text fw={500} mt="sm">{f.title}</Text>
                                <Text size="sm" c="dimmed" mt={4} lh={1.5}>{f.text}</Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </div>
                <Text size="sm" c="dimmed" mt="lg">
                    Every formula is documented, from the efficiency thresholds to how charging sessions are inferred:{' '}
                    <a href={EXPLORER_DOCS} target="_blank" rel="noreferrer" style={{ color: 'var(--ps-accent)' }}>read the docs</a>.
                </Text>
            </Container>
        </Box>
    );
}

export default Explorer;

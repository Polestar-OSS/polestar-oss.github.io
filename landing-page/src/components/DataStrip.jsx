import { Box, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import Eyebrow from './Eyebrow';
import { useInView } from '../hooks/useInView';
import { EXPLORER_URL } from '../links';
import snapshot from '../data/sample-snapshot.json';

const max = Math.max(...snapshot.months.map((m) => m.distance));

/** One bar per month, growing from the baseline when the section is seen. Table twin follows. */
function MonthBars({ inView }) {
    return (
        <div className={`site-bars ${inView ? 'is-in' : ''}`} role="img" aria-label="Monthly distance from the synthetic sample, September to September">
            {snapshot.months.map((m, i) => (
                <div key={m.label} className="site-bar-col" title={`${m.label}: ${m.distance} km, ${m.efficiency} kWh/100 km`}>
                    <div className="site-bar" style={{ height: `${(m.distance / max) * 100}%`, '--i': i }} />
                    <Text size="xs" c="dimmed" className="site-bar-label">{m.label.split(' ')[0]}</Text>
                </div>
            ))}
        </div>
    );
}

function Tile({ value, unit, label, detail, index }) {
    return (
        <Box className="ps-card ps-card-hover" p="lg" style={{ '--i': index }}>
            <Group gap={6} align="baseline" wrap="nowrap">
                <Text className="ps-display ps-tabular" fz={40} lh={1}>{value}</Text>
                {unit && <Text c="dimmed" size="sm">{unit}</Text>}
            </Group>
            <Eyebrow mt={6}>{label}</Eyebrow>
            <Text size="sm" c="dimmed" mt="sm" lh={1.5}>{detail}</Text>
        </Box>
    );
}

function DataStrip() {
    const [ref, inView] = useInView();
    const s = snapshot.seasonality;
    return (
        <Box component="section" py={{ base: 64, md: 96 }} ref={ref}>
            <Container size="xl">
                <Stack gap="xs" maw={720} mb="xl">
                    <Eyebrow>What a year looks like</Eyebrow>
                    <Title order={2} className="ps-display" fz={{ base: 32, md: 44 }}>A whole year of driving, read at a glance.</Title>
                    <Text c="dimmed" size="lg" lh={1.5}>
                        Distance, energy, efficiency and cost by month, week, weekday and hour. Every chart on the site and in
                        the app comes with a table twin, one y-axis and at most three colours.
                    </Text>
                </Stack>
                <Box className="ps-card" p={{ base: 'md', md: 'xl' }}>
                    <Group justify="space-between" align="flex-end" mb="md" wrap="wrap">
                        <div>
                            <Text fw={500}>Distance by month</Text>
                            <Text size="xs" c="dimmed">km · synthetic sample, {snapshot.months[0].label} to {snapshot.months.at(-1).label}</Text>
                        </div>
                        <Text size="xs" c="dimmed">Summer holidays show up; so does the winter dip.</Text>
                    </Group>
                    <MonthBars inView={inView} />
                    <details style={{ marginTop: 12 }}>
                        <summary style={{ cursor: 'pointer', fontSize: 12, color: 'var(--ps-muted)' }}>Show as a table</summary>
                        <Box className="ps-scroll-x" mt="xs">
                            <table className="ps-tabular" style={{ fontSize: 12, borderCollapse: 'collapse', width: '100%' }}>
                                <thead>
                                    <tr>{['Month', 'Trips', 'Distance (km)', 'Efficiency (kWh/100 km)'].map((h) => <th key={h} style={{ textAlign: 'left', padding: '4px 8px', color: 'var(--ps-muted)', fontWeight: 500 }}>{h}</th>)}</tr>
                                </thead>
                                <tbody>
                                    {snapshot.months.map((m) => (
                                        <tr key={m.label} style={{ borderTop: '1px solid var(--ps-border)' }}>
                                            <td style={{ padding: '4px 8px' }}>{m.label}</td>
                                            <td style={{ padding: '4px 8px' }}>{m.trips}</td>
                                            <td style={{ padding: '4px 8px' }}>{m.distance}</td>
                                            <td style={{ padding: '4px 8px' }}>{m.efficiency}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Box>
                    </details>
                </Box>
                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mt="md">
                    <Tile value={`+${s.penaltyPct}`} unit="%" label="winter penalty" detail={`${s.winter} kWh/100 km in winter against ${s.summer} in summer. The app only says this when your data actually covers both seasons, and it knows which hemisphere you drive in.`} index={0} />
                    <Tile value={snapshot.usableKwh} unit="kWh" label="usable battery" detail={`Estimated from the battery percentage and energy columns of your own trips; about ${snapshot.rangeKm} km of range at this year's efficiency.`} index={1} />
                    <Tile value={snapshot.homeSharePct} unit="%" label="charged at home" detail="Charging sessions are inferred from battery deltas between trips and priced with your tariff, flat, time-of-use, tiered or seasonal." index={2} />
                </SimpleGrid>
                <Text size="xs" c="dimmed" mt="md">
                    Figures come from the synthetic sample bundled with the app so that no real driver's data appears on this page.{' '}
                    <a href={EXPLORER_URL} style={{ color: 'var(--ps-accent)' }}>Load your own export</a> to get the real thing.
                </Text>
            </Container>
        </Box>
    );
}

export default DataStrip;

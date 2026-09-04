import { Box, Button, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';
import Eyebrow from './Eyebrow';
import RouteField from './RouteField';
import { useCountUp } from '../hooks/useCountUp';
import { EXPLORER_REPO, EXPLORER_URL } from '../links';
import snapshot from '../data/sample-snapshot.json';

const fmt = (n, digits = 0) => n.toLocaleString('en-GB', { minimumFractionDigits: digits, maximumFractionDigits: digits });

function Figure({ value, digits = 0, unit, label, index }) {
    const animated = useCountUp(value, 1400);
    return (
        <div className="ps-rise" style={{ '--i': index + 6 }}>
            <Group gap={6} align="baseline" wrap="nowrap">
                <Text className="ps-display ps-tabular" fz={{ base: 34, md: 44 }} lh={1}>{fmt(animated, digits)}</Text>
                {unit && <Text c="dimmed" size="sm">{unit}</Text>}
            </Group>
            <Eyebrow>{label}</Eyebrow>
        </div>
    );
}

function Hero() {
    return (
        <Box component="section" className="site-hero" pt={{ base: 64, md: 112 }} pb={{ base: 56, md: 96 }}>
            <RouteField />
            <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
                <Stack gap="xl" maw={860}>
                    <Eyebrow className="ps-rise" style={{ '--i': 0 }}>Open-source tools for Polestar owners</Eyebrow>
                    <Title order={1} className="ps-hero-figure ps-rise" style={{ '--i': 1 }}>
                        Your car.<br />Your data.<br />Your browser.
                    </Title>
                    <Text size="xl" c="dimmed" maw={620} lh={1.5} className="ps-rise" style={{ '--i': 2 }}>
                        Community-built, privacy-first tools that turn your Polestar's exports into
                        something you can read, compare and replay. Nothing is uploaded. There is no
                        account, no server and no tracking of your journeys.
                    </Text>
                    <Group gap="sm" className="ps-rise" style={{ '--i': 3 }}>
                        <Button component="a" href={EXPLORER_URL} size="md" rightSection={<IconArrowUpRight size={18} />}>Open the Journey Log Explorer</Button>
                        <Button component="a" href={EXPLORER_REPO} target="_blank" rel="noreferrer" size="md" variant="default" leftSection={<IconBrandGithub size={18} />}>Source on GitHub</Button>
                    </Group>
                </Stack>
                <Box mt={{ base: 48, md: 80 }} className="ps-glass" style={{ display: 'inline-block', padding: '18px 22px' }}>
                    <SimpleGrid cols={{ base: 2, sm: 4 }} spacing={{ base: 'lg', sm: 40 }}>
                        <Figure value={snapshot.trips} label="trips" index={0} />
                        <Figure value={snapshot.distanceKm} unit="km" label="driven" index={1} />
                        <Figure value={snapshot.energyKwh} unit="kWh" label="energy" index={2} />
                        <Figure value={snapshot.efficiency} digits={1} unit="kWh/100 km" label="efficiency" index={3} />
                    </SimpleGrid>
                    <Text size="xs" c="dimmed" mt="sm">One year of the synthetic sample that ships with the app, not a real driver. Open the app to see yours.</Text>
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;

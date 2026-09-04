import { Box, Container, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import Eyebrow from './Eyebrow';
import { EXPLORER_URL, JOURNEY_LOG_APP_URL } from '../links';

const STEPS = [
    { n: '01', title: 'Export from the Journey Log app', text: <>Open Polestar's <a href={JOURNEY_LOG_APP_URL} target="_blank" rel="noreferrer" style={{ color: 'var(--ps-accent)' }}>Journey Log</a> app and export a month. You get a spreadsheet or CSV with every trip: dates, distance, energy, battery levels and start and end positions.</> },
    { n: '02', title: 'Drop the files in the explorer', text: <>Drag one file or a whole year into <a href={EXPLORER_URL} style={{ color: 'var(--ps-accent)' }}>the explorer</a>. Files are parsed in your browser, merged and de-duplicated. Nothing is sent anywhere.</> },
    { n: '03', title: 'Read, compare, replay', text: 'Start on Simple. Move to Detailed for the charts, Expert for the map, the replay, the tariff engine and the petrol comparison. Come back later: your journeys are still there.' },
];

function HowItWorks() {
    return (
        <Box component="section" id="how" py={{ base: 64, md: 96 }}>
            <Container size="xl">
                <Stack gap="xs" maw={720} mb="xl">
                    <Eyebrow>How it works</Eyebrow>
                    <Title order={2} className="ps-display" fz={{ base: 32, md: 44 }}>Three steps. No sign-up.</Title>
                </Stack>
                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
                    {STEPS.map((s) => (
                        <Box key={s.n} className="ps-card" p="lg" style={{ position: 'relative', overflow: 'hidden' }}>
                            <Text className="ps-display ps-tabular" fz={64} lh={1} style={{ color: 'var(--ps-accent)', opacity: 0.9 }}>{s.n}</Text>
                            <Text fw={500} mt="md">{s.title}</Text>
                            <Text size="sm" c="dimmed" mt={4} lh={1.55}>{s.text}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default HowItWorks;

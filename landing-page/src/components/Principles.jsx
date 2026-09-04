import { Box, Button, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { IconBrandGithub, IconCertificate, IconEyeOff, IconScale, IconUsers } from '@tabler/icons-react';
import Eyebrow from './Eyebrow';
import { EXPLORER_REPO, LICENSE_URL, ORG_URL } from '../links';

const PRINCIPLES = [
    { icon: IconEyeOff, title: 'Privacy by design', text: 'Static sites, no backend. Journey data is parsed and stored in the browser only. Real exports and screenshots of them never enter a repository.' },
    { icon: IconCertificate, title: 'Real data only', text: 'No placeholder numbers. Tariffs cite their regulator or utility, fuel prices cite StatCan, the EIA or DESNZ, and comparison cars come from EPA fuel-economy data, with the method written down.' },
    { icon: IconScale, title: 'AGPL-3.0', text: 'Copyleft, including over a network. Fork it, host it, improve it, and share the source of what you ship.' },
    { icon: IconUsers, title: 'Community, not affiliated', text: 'Built by owners. Polestar is a trademark of Polestar Holding AB; this organisation has no connection with it.' },
];

function Principles() {
    return (
        <Box component="section" id="principles" py={{ base: 64, md: 96 }} style={{ background: 'var(--ps-surface-2)', borderTop: '1px solid var(--ps-border)' }}>
            <Container size="xl">
                <Stack gap="xs" maw={720} mb="xl">
                    <Eyebrow>Principles</Eyebrow>
                    <Title order={2} className="ps-display" fz={{ base: 32, md: 44 }}>Small rules, kept strictly.</Title>
                </Stack>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                    {PRINCIPLES.map((p) => (
                        <Box key={p.title} className="ps-card ps-card-hover" p="lg">
                            <Group gap="sm" wrap="nowrap" align="flex-start">
                                <p.icon size={22} stroke={1.5} style={{ color: 'var(--ps-accent)', flexShrink: 0, marginTop: 2 }} />
                                <div>
                                    <Text fw={500}>{p.title}</Text>
                                    <Text size="sm" c="dimmed" mt={4} lh={1.55}>{p.text}</Text>
                                </div>
                            </Group>
                        </Box>
                    ))}
                </SimpleGrid>
                <Box className="ps-card" p={{ base: 'lg', md: 'xl' }} mt="md" style={{ borderColor: 'var(--ps-accent)' }}>
                    <Group justify="space-between" align="center" wrap="wrap" gap="lg">
                        <div style={{ maxWidth: 560 }}>
                            <Text fw={500} fz="lg">Have an idea for the next tool?</Text>
                            <Text size="sm" c="dimmed" mt={4} lh={1.5}>
                                Issues and pull requests are welcome. Each tool lives in its own repository with its code, tests,
                                pipeline and docs, and architecture decisions are recorded as ADRs.
                            </Text>
                        </div>
                        <Group gap="sm">
                            <Button component="a" href={`${EXPLORER_REPO}/issues`} target="_blank" rel="noreferrer" variant="default" leftSection={<IconBrandGithub size={18} />}>Open an issue</Button>
                            <Button component="a" href={ORG_URL} target="_blank" rel="noreferrer" variant="subtle">All repositories</Button>
                            <Button component="a" href={LICENSE_URL} target="_blank" rel="noreferrer" variant="subtle">Read the licence</Button>
                        </Group>
                    </Group>
                </Box>
            </Container>
        </Box>
    );
}

export default Principles;

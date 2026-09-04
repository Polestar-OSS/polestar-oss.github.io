import { Anchor, Box, Button, Container, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import Eyebrow from './Eyebrow';
import { EXPLORER_DOCS, EXPLORER_REPO, EXPLORER_URL, LICENSE_URL, ORG_URL, SITE_REPO } from '../links';
import { COOKIE_POLICY_URL, PRIVACY_POLICY_URL } from '../services/consent/ConsentService';

const COLUMNS = [
    { title: 'Tools', links: [{ href: EXPLORER_URL, label: 'Journey Log Explorer' }, { href: EXPLORER_REPO, label: 'Explorer source' }, { href: EXPLORER_DOCS, label: 'Explorer docs' }] },
    { title: 'Organisation', links: [{ href: ORG_URL, label: 'GitHub' }, { href: SITE_REPO, label: "This site's source" }, { href: LICENSE_URL, label: 'AGPL-3.0 licence' }] },
    { title: 'Legal', links: [{ href: PRIVACY_POLICY_URL, label: 'Privacy policy' }, { href: COOKIE_POLICY_URL, label: 'Cookie policy' }] },
];

function Footer({ consent, onChangeConsent }) {
    const state = consent === null ? 'not decided' : consent.analytics ? 'on' : 'off';
    return (
        <Box component="footer" py={{ base: 40, md: 56 }} style={{ borderTop: '1px solid var(--ps-border)' }}>
            <Container size="xl">
                <SimpleGrid cols={{ base: 1, sm: 4 }} spacing="lg">
                    <Stack gap="xs">
                        <Group gap="sm"><img src="/logo-grey.png" alt="" height={26} width={26} /><Text fw={500}>Polestar OSS</Text></Group>
                        <Text size="xs" c="dimmed" lh={1.5} maw={280}>
                            Community-built, open-source tools for Polestar owners. Not affiliated with, endorsed by or connected to
                            Polestar Holding AB or its subsidiaries.
                        </Text>
                    </Stack>
                    {COLUMNS.map((c) => (
                        <Stack key={c.title} gap={6}>
                            <Eyebrow>{c.title}</Eyebrow>
                            {c.links.map((l) => <Anchor key={l.href} href={l.href} target="_blank" rel="noreferrer" size="sm" c="var(--ps-ink-2)" underline="hover">{l.label}</Anchor>)}
                        </Stack>
                    ))}
                </SimpleGrid>
                <Group justify="space-between" mt="xl" pt="md" style={{ borderTop: '1px solid var(--ps-border)' }} wrap="wrap" gap="xs">
                    <Text size="xs" c="dimmed">Licensed under AGPL-3.0. Built with React, Mantine and Vite; hosted on GitHub Pages.</Text>
                    <Group gap="xs">
                        <Text size="xs" c="dimmed">Analytics: {state}</Text>
                        <Button size="compact-xs" variant="subtle" onClick={onChangeConsent}>Change</Button>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}

export default Footer;

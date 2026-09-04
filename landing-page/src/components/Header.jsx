import { ActionIcon, Anchor, Box, Button, Container, Group, Text, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { IconBrandGithub, IconMoon, IconSun } from '@tabler/icons-react';
import Eyebrow from './Eyebrow';
import { EXPLORER_URL, ORG_URL } from '../links';

const NAV = [
    { href: '#explorer', label: 'Explorer' },
    { href: '#how', label: 'How it works' },
    { href: '#principles', label: 'Principles' },
];

function Header() {
    const { toggleColorScheme } = useMantineColorScheme();
    const scheme = useComputedColorScheme('dark', { getInitialValueInEffect: false });
    return (
        <Box component="header" className="ps-sticky-header">
            <Container size="xl" py={10}>
                <Group justify="space-between" wrap="nowrap">
                    <Group gap="sm" wrap="nowrap">
                        <img src={scheme === 'dark' ? '/logo-white.png' : '/logo-black.png'} alt="" height={30} width={30} style={{ display: 'block' }} />
                        <div>
                            <Text fw={500} lh={1.1}>Polestar OSS</Text>
                            <Eyebrow style={{ fontSize: 10 }} visibleFrom="sm">Community · not affiliated with Polestar</Eyebrow>
                        </div>
                    </Group>
                    <Group gap="lg" visibleFrom="md">
                        {NAV.map((n) => <Anchor key={n.href} href={n.href} c="var(--ps-ink-2)" size="sm" underline="never">{n.label}</Anchor>)}
                    </Group>
                    <Group gap="xs" wrap="nowrap">
                        <Button component="a" href={EXPLORER_URL} size="xs" visibleFrom="xs">Open the app</Button>
                        <ActionIcon component="a" href={ORG_URL} target="_blank" rel="noreferrer" variant="default" size="lg" aria-label="Polestar OSS on GitHub"><IconBrandGithub size={18} /></ActionIcon>
                        <ActionIcon variant="default" size="lg" onClick={() => toggleColorScheme()} aria-label="Toggle colour scheme">
                            {scheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
                        </ActionIcon>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
}

export default Header;

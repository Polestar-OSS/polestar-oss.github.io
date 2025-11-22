import { Container, Text, Group, ActionIcon, Divider, Stack, Anchor, Box } from '@mantine/core'
import { IconBrandGithub, IconHeart } from '@tabler/icons-react'

export default function Footer() {
  return (
    <Box 
      py={40}
      style={(theme) => ({
        background: theme.colorScheme === 'dark' 
          ? theme.colors.dark[9]
          : theme.colors.gray[1],
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]}`,
      })}
    >
      <Container size="xl">
        <Stack gap="xl">
          <Group justify="space-between" align="flex-start">
            <Stack gap="xs" style={{ flex: 1 }}>
              <Text size="lg" fw={700}>
                Polestar OSS
              </Text>
              <Text size="sm" c="dimmed" maw={400}>
                A community-driven initiative creating open source tools for Polestar owners. 
                Built with privacy, performance, and user experience at the core.
              </Text>
            </Stack>

            <Stack gap="xs">
              <Text size="sm" fw={600}>
                Resources
              </Text>
              <Anchor 
                href="https://github.com/Polestar-OSS/polestar-journey-log-explorer" 
                target="_blank"
                size="sm"
                c="dimmed"
              >
                GitHub Repository
              </Anchor>
              <Anchor 
                href="https://github.com/Polestar-OSS/polestar-journey-log-explorer/blob/main/docs/USER_GUIDE.md" 
                target="_blank"
                size="sm"
                c="dimmed"
              >
                User Guide
              </Anchor>
              <Anchor 
                href="https://github.com/Polestar-OSS/polestar-journey-log-explorer/blob/main/docs/CONTRIBUTING.md" 
                target="_blank"
                size="sm"
                c="dimmed"
              >
                Contributing
              </Anchor>
              <Anchor 
                href="https://github.com/Polestar-OSS/polestar-journey-log-explorer/issues" 
                target="_blank"
                size="sm"
                c="dimmed"
              >
                Report Issues
              </Anchor>
            </Stack>

            <Stack gap="xs">
              <Text size="sm" fw={600}>
                Documentation
              </Text>
              <Anchor 
                href="https://github.com/Polestar-OSS/polestar-journey-log-explorer/blob/main/docs/ARCHITECTURE.md" 
                target="_blank"
                size="sm"
                c="dimmed"
              >
                Architecture
              </Anchor>
              <Anchor 
                href="https://github.com/Polestar-OSS/polestar-journey-log-explorer/blob/main/docs/DEVELOPMENT.md" 
                target="_blank"
                size="sm"
                c="dimmed"
              >
                Development Guide
              </Anchor>
              <Anchor 
                href="https://github.com/Polestar-OSS/polestar-journey-log-explorer/blob/main/docs/QUICKSTART.md" 
                target="_blank"
                size="sm"
                c="dimmed"
              >
                Quick Start
              </Anchor>
            </Stack>

            <Stack gap="xs">
              <Text size="sm" fw={600}>
                Connect
              </Text>
              <Group gap="xs">
                <ActionIcon
                  component="a"
                  href="https://github.com/Polestar-OSS"
                  target="_blank"
                  variant="subtle"
                  size="lg"
                >
                  <IconBrandGithub size={20} />
                </ActionIcon>
              </Group>
            </Stack>
          </Group>

          <Divider />

          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              © 2025 Polestar OSS Community. Licensed under MIT.
            </Text>
            <Group gap="xs">
              <Text size="sm" c="dimmed">
                Made with
              </Text>
              <IconHeart size={16} style={{ color: 'var(--mantine-color-red-6)' }} />
              <Text size="sm" c="dimmed">
                by the community
              </Text>
            </Group>
          </Group>
        </Stack>
      </Container>
    </Box>
  )
}

import { Container, Title, Text, Button, Group, Stack, Box } from '@mantine/core'
import { IconBrandGithub, IconRocket, IconShieldCheck } from '@tabler/icons-react'

export default function Hero() {
  return (
    <Box
      style={(theme) => ({
        background: theme.colorScheme = 'linear-gradient(135deg, rgb(248, 249, 250) 0%, rgb(233, 236, 239) 100%)',
        padding: '120px 0 80px 0',
      })}
    >
      <Container size="lg">
        <Stack align="center" gap="xl">
          <Stack align="center" gap="md" style={{ maxWidth: 800, textAlign: 'center' }}>
            <Title 
              order={1} 
              size={56}
              style={{ 
                lineHeight: 1.2,
                letterSpacing: '-1px',
              }}
            >
              Open Source Tools for{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              >
                Polestar Vehicles
              </Text>
            </Title>
            
            <Text size="xl" c="dimmed" maw={700}>
              A community-driven collection of privacy-first, open-source applications 
              designed to enhance your Polestar ownership experience. All tools run locally 
              in your browser—your data never leaves your device.
            </Text>
          </Stack>

          <Group gap="md" mt="xl">
            <Button
              component="a"
              href="https://polestar-oss.github.io/polestar-journey-log-explorer/"
              target="_blank"
              size="lg"
              leftSection={<IconRocket size={20} />}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              Launch App
            </Button>
            <Button
              component="a"
              href="https://github.com/Polestar-OSS/polestar-journey-log-explorer"
              target="_blank"
              size="lg"
              leftSection={<IconBrandGithub size={20} />}
              variant="default"
            >
              View on GitHub
            </Button>
          </Group>

          <Group gap="xl" mt="xl">
            <Group gap="xs">
              <IconShieldCheck size={20} style={{ color: 'var(--mantine-color-green-6)' }} />
              <Text size="sm" fw={500}>100% Privacy</Text>
            </Group>
            <Group gap="xs">
              <IconShieldCheck size={20} style={{ color: 'var(--mantine-color-green-6)' }} />
              <Text size="sm" fw={500}>No Backend</Text>
            </Group>
            <Group gap="xs">
              <IconShieldCheck size={20} style={{ color: 'var(--mantine-color-green-6)' }} />
              <Text size="sm" fw={500}>Open Source</Text>
            </Group>
          </Group>
        </Stack>
      </Container>
    </Box>
  )
}

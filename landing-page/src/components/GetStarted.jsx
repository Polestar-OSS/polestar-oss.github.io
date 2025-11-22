import { Container, Title, Text, Button, Stack, Box, Group, Code, Card, Anchor } from '@mantine/core'
import { IconRocket, IconBrandGithub, IconBook, IconDownload } from '@tabler/icons-react'

export default function GetStarted() {
  return (
    <Box 
      py={80}
      style={(theme) => ({
        background: theme.colorScheme === 'dark' 
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
      })}
    >
      <Container size="lg">
        <Stack align="center" gap="xl">
          <Stack align="center" gap="md" style={{ maxWidth: 700, textAlign: 'center' }}>
            <Title order={2} size={42}>
              Get Started with Journey Log Explorer
            </Title>
            <Text size="lg" c="dimmed">
              No installation required. Visit the app, upload your Polestar journey log, 
              and start exploring your data immediately. More tools coming soon!
            </Text>
          </Stack>

          <Card shadow="md" padding="xl" radius="md" withBorder style={{ width: '100%', maxWidth: 700 }}>
            <Stack gap="xl">
              <div>
                <Text size="lg" fw={600} mb="md">
                  Using Journey Log Explorer
                </Text>
                <Stack gap="sm">
                  <Group gap="sm">
                    <Text 
                      size="xl" 
                      fw={700} 
                      c="blue"
                      style={{ 
                        minWidth: 32, 
                        height: 32, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}
                    >
                      1
                    </Text>
                    <Text>Export your journey log from the Polestar app (Settings → Privacy → Export data)</Text>
                  </Group>
                  <Box ml={44} mt="xs" mb="sm">
                    <Text size="sm" c="dimmed">
                      Don&apos;t have data yet?{' '}
                      <Anchor href="/Journey_Log_Sample.csv" download size="sm" fw={500}>
                        Download sample data <IconDownload size={14} style={{ verticalAlign: 'middle' }} />
                      </Anchor>
                    </Text>
                  </Box>
                  <Group gap="sm">
                    <Text 
                      size="xl" 
                      fw={700} 
                      c="blue"
                      style={{ 
                        minWidth: 32, 
                        height: 32, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}
                    >
                      2
                    </Text>
                    <Text>Upload your CSV/XLSX file—all processing happens in your browser</Text>
                  </Group>
                  <Group gap="sm">
                    <Text 
                      size="xl" 
                      fw={700} 
                      c="blue"
                      style={{ 
                        minWidth: 32, 
                        height: 32, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                      }}
                    >
                      3
                    </Text>
                    <Text>Analyze your trips with interactive charts, maps, and detailed statistics</Text>
                  </Group>
                </Stack>
              </div>

              <div>
                <Text size="lg" fw={600} mb="md">
                  Or run locally
                </Text>
                <Code block mb="md" style={{ fontSize: '0.85rem' }}>
{`git clone https://github.com/Polestar-OSS/polestar-journey-log-explorer.git
cd polestar-journey-log-explorer/app
npm install
npm run dev`}
                </Code>
              </div>

              <Group justify="center" gap="md" mt="md">
                <Button
                  component="a"
                  href="https://polestar-oss.github.io/polestar-journey-log-explorer/"
                  target="_blank"
                  size="lg"
                  leftSection={<IconRocket size={20} />}
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                >
                  Launch App Now
                </Button>
                <Button
                  component="a"
                  href="https://github.com/Polestar-OSS/polestar-journey-log-explorer"
                  target="_blank"
                  size="lg"
                  leftSection={<IconBrandGithub size={20} />}
                  variant="default"
                >
                  View Source
                </Button>
              </Group>
            </Stack>
          </Card>

          <Group gap="md" mt="lg">
            <Button
              component="a"
              href="https://github.com/Polestar-OSS/polestar-journey-log-explorer/blob/main/docs/USER_GUIDE.md"
              target="_blank"
              leftSection={<IconBook size={18} />}
              variant="subtle"
            >
              User Guide
            </Button>
            <Button
              component="a"
              href="https://github.com/Polestar-OSS/polestar-journey-log-explorer/blob/main/docs/DEVELOPMENT.md"
              target="_blank"
              leftSection={<IconBook size={18} />}
              variant="subtle"
            >
              Documentation
            </Button>
            <Button
              component="a"
              href="https://github.com/Polestar-OSS/polestar-journey-log-explorer/blob/main/docs/CONTRIBUTING.md"
              target="_blank"
              leftSection={<IconBook size={18} />}
              variant="subtle"
            >
              Contributing
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  )
}

import { Container, Title, Text, Stack, Box, Card, SimpleGrid } from '@mantine/core'

const screenshots = [
  {
    title: 'Journey Analytics Dashboard',
    description: 'The Journey Log Explorer provides comprehensive analytics with 11+ key metrics including total distance, consumption, efficiency, and carbon savings. Track your EV performance over time.',
    image: '/dashboard.png',
  },
  {
    title: 'Interactive Route Mapping',
    description: 'Visualize your trips on interactive maps with color-coded efficiency indicators. See exactly where you drove and analyze your route patterns with detailed trip information.',
    image: '/map.png',
  },
]

export default function Screenshots() {
  return (
    <Box 
      py={80}
      style={(theme) => ({
        background: theme.colorScheme === 'dark' 
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
      })}
    >
      <Container size="xl">
        <Stack align="center" gap="md" mb={60}>
          <Title order={2} size={42} ta="center">
            Our First Tool: Journey Log Explorer
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={700}>
            Analyze your Polestar journey data with interactive charts, maps, and comprehensive statistics. 
            Upload your journey log and explore insights about your driving patterns.
          </Text>
        </Stack>

        <Stack gap="xl">
          {screenshots.map((screenshot, index) => (
            <Card key={index} shadow="md" padding="xl" radius="md" withBorder>
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                <Stack justify="center" gap="md" order={{ base: 2, md: index % 2 === 0 ? 1 : 2 }}>
                  <Text size="xl" fw={600}>
                    {screenshot.title}
                  </Text>
                  <Text c="dimmed">
                    {screenshot.description}
                  </Text>
                </Stack>
                <Box order={{ base: 1, md: index % 2 === 0 ? 2 : 1 }}>
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  />
                </Box>
              </SimpleGrid>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

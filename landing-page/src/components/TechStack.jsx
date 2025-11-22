import { Container, Title, Text, Stack, Box, SimpleGrid, Badge, Group, Card } from '@mantine/core'

const techStack = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React 18', description: 'Modern UI framework with hooks' },
      { name: 'Vite', description: 'Lightning-fast build tool' },
      { name: 'Mantine UI', description: 'Feature-rich component library' },
    ],
  },
  {
    category: 'Visualization',
    technologies: [
      { name: 'Recharts', description: 'Composable charting library' },
      { name: 'OpenLayers', description: 'High-performance mapping' },
      { name: 'Tabler Icons', description: '3000+ crisp icons' },
    ],
  },
  {
    category: 'Data Processing',
    technologies: [
      { name: 'PapaParse', description: 'Fast CSV parsing' },
      { name: 'ExcelJS', description: 'Excel file support' },
      { name: 'Day.js', description: 'Date manipulation' },
    ],
  },
  {
    category: 'Architecture',
    technologies: [
      { name: 'SOLID Principles', description: 'Clean, maintainable code' },
      { name: 'Strategy Pattern', description: 'Flexible component design' },
      { name: 'Service Layer', description: 'Separation of concerns' },
    ],
  },
]

const stats = [
  { label: 'Components', value: '30+' },
  { label: 'Chart Types', value: '5' },
  { label: 'Key Metrics', value: '11+' },
  { label: 'Bundle Size', value: '<500KB' },
]

export default function TechStack() {
  return (
    <Box py={80}>
      <Container size="xl">
        <Stack align="center" gap="md" mb={60}>
          <Title order={2} size={42} ta="center">
            Built with Modern Technology
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={700}>
            All our tools leverage the best open-source libraries and architectural patterns. 
            Every application is designed for privacy, performance, and an excellent user experience.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 2, md: 4 }} spacing="lg" mb={60}>
          {stats.map((stat) => (
            <Card key={stat.label} shadow="sm" padding="xl" radius="md" withBorder ta="center">
              <Text size="xl" fw={700} c="blue">
                {stat.value}
              </Text>
              <Text size="sm" c="dimmed" mt={4}>
                {stat.label}
              </Text>
            </Card>
          ))}
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {techStack.map((stack) => (
            <Card key={stack.category} shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <Badge size="lg" variant="light">
                  {stack.category}
                </Badge>
                <Stack gap="sm">
                  {stack.technologies.map((tech) => (
                    <div key={tech.name}>
                      <Text size="sm" fw={600}>
                        {tech.name}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {tech.description}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        <Box mt={60}>
          <Card shadow="sm" padding="xl" radius="md" withBorder>
            <Stack gap="md">
              <Text size="lg" fw={600}>
                Architecture Highlights
              </Text>
              <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
                <Stack gap={4}>
                  <Text size="sm" fw={500}>Clean Code</Text>
                  <Text size="xs" c="dimmed">
                    Follows SOLID principles with clear separation of concerns, strategy patterns, and service layers.
                  </Text>
                </Stack>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>Performance</Text>
                  <Text size="xs" c="dimmed">
                    Optimized with React.memo, useMemo, code splitting, and lazy loading for fast load times.
                  </Text>
                </Stack>
                <Stack gap={4}>
                  <Text size="sm" fw={500}>Tested & Linted</Text>
                  <Text size="xs" c="dimmed">
                    ESLint configuration, GitHub Actions CI/CD, and automated deployments ensure code quality.
                  </Text>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

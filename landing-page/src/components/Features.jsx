import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, Stack, Box } from '@mantine/core'
import {
  IconChartBar,
  IconMap,
  IconTable,
  IconShieldLock,
  IconBattery,
  IconCurrencyDollar,
  IconCloudOff,
  IconDeviceDesktop,
  IconFilter,
  IconLeaf,
  IconAdjustments,
  IconNotes,
} from '@tabler/icons-react'

const features = [
  {
    icon: IconChartBar,
    title: 'Interactive Charts',
    description: 'Visualize distance, consumption, and efficiency trends with beautiful, responsive charts powered by Recharts.',
    color: 'blue',
  },
  {
    icon: IconMap,
    title: 'Route Mapping',
    description: 'View your trips on interactive OpenLayers maps with color-coded efficiency indicators and detailed popups.',
    color: 'cyan',
  },
  {
    icon: IconTable,
    title: 'Data Table',
    description: 'Search, sort, and filter your trip data with a powerful data grid. Export filtered results for external analysis.',
    color: 'violet',
  },
  {
    icon: IconShieldLock,
    title: '100% Privacy',
    description: 'All data processing happens locally in your browser. Your journey data never leaves your device.',
    color: 'green',
  },
  {
    icon: IconBattery,
    title: 'Battery Analytics',
    description: 'Track SOC patterns, charging behavior, and battery usage across all your trips.',
    color: 'yellow',
  },
  {
    icon: IconCurrencyDollar,
    title: 'Cost Calculator',
    description: 'Estimate charging costs with global electricity rates and compare savings vs ICE vehicles.',
    color: 'teal',
  },
  {
    icon: IconLeaf,
    title: 'Carbon Savings',
    description: 'Calculate your environmental impact and see how much CO₂ you\'ve saved compared to gasoline vehicles.',
    color: 'lime',
  },
  {
    icon: IconFilter,
    title: 'Advanced Filtering',
    description: 'Filter trips by date range, distance, efficiency, SOC, and custom criteria to focus on what matters.',
    color: 'orange',
  },
  {
    icon: IconCloudOff,
    title: 'No Backend Required',
    description: 'Pure client-side application with no servers, databases, or cloud services. Works completely offline.',
    color: 'indigo',
  },
  {
    icon: IconDeviceDesktop,
    title: 'Responsive Design',
    description: 'Optimized for desktop, tablet, and mobile devices with a beautiful Mantine UI interface.',
    color: 'pink',
  },
  {
    icon: IconNotes,
    title: 'Trip Annotations',
    description: 'Add custom notes, tags, and categories to your trips for better organization and insights.',
    color: 'grape',
  },
  {
    icon: IconAdjustments,
    title: 'Customizable',
    description: 'Dark/light theme support, flexible date ranges, and configurable metrics display.',
    color: 'red',
  },
]

export default function Features() {
  return (
    <Box py={80}>
      <Container size="xl">
        <Stack align="center" gap="md" mb={60}>
          <Title order={2} size={42} ta="center">
            Why Polestar OSS?
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={700}>
            Our tools are built by the community, for the community. 
            Every application prioritizes your privacy and data ownership.
          </Text>
        </Stack>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 3 }}
          spacing="lg"
        >
          {features.map((feature) => (
            <Card key={feature.title} shadow="sm" padding="lg" radius="md" withBorder>
              <Stack gap="md">
                <ThemeIcon size={50} radius="md" variant="light" color={feature.color}>
                  <feature.icon size={28} />
                </ThemeIcon>
                <div>
                  <Text size="lg" fw={600} mb={8}>
                    {feature.title}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {feature.description}
                  </Text>
                </div>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

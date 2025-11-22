import { Container, Group, ActionIcon, Tooltip, useMantineColorScheme, Image } from '@mantine/core'
import { IconSun, IconMoon, IconBrandGithub } from '@tabler/icons-react'

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Container size="xl" h="100%" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Group gap="md">
        <Image
          src={colorScheme === 'dark' ? '/white_transparent.png' : '/black_transparent.png'}
          alt="Polestar OSS"
          h={60}
          w="auto"
          fit="contain"
        />
      </Group>
      <Group>
        <Tooltip label="View on GitHub">
          <ActionIcon
            component="a"
            href="https://github.com/Polestar-OSS"
            target="_blank"
            variant="subtle"
            size="lg"
          >
            <IconBrandGithub size={20} />
          </ActionIcon>
        </Tooltip>
        <Tooltip label={`Switch to ${colorScheme === 'dark' ? 'light' : 'dark'} mode`}>
          <ActionIcon
            variant="subtle"
            size="lg"
            onClick={() => toggleColorScheme()}
          >
            {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
          </ActionIcon>
        </Tooltip>
      </Group>
    </Container>
  )
}

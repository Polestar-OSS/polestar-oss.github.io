import { AppShell } from '@mantine/core'
import Hero from './components/Hero'
import Features from './components/Features'
import Screenshots from './components/Screenshots'
import TechStack from './components/TechStack'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <AppShell
      header={{ height: 70 }}
      padding={0}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Hero />
        <Features />
        <Screenshots />
        <TechStack />
        <GetStarted />
        <Footer />
      </AppShell.Main>
    </AppShell>
  )
}

export default App

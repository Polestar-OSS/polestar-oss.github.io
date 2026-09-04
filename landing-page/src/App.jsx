import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import DataStrip from './components/DataStrip';
import Explorer from './components/Explorer';
import HowItWorks from './components/HowItWorks';
import Principles from './components/Principles';
import Footer from './components/Footer';
import ConsentBanner from './components/consent/ConsentBanner';
import { useConsent } from './hooks/useConsent';
import './site.css';

function App() {
    const consent = useConsent();
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Marquee />
                <DataStrip />
                <Explorer />
                <HowItWorks />
                <Principles />
            </main>
            <Footer consent={consent.decision} onChangeConsent={consent.reopen} />
            <ConsentBanner open={consent.open} onDecide={consent.decide} />
        </>
    );
}

export default App;

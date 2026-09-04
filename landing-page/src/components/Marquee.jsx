import { Box, Text } from '@mantine/core';

const WORDS = [
    'Runs in your browser', 'Nothing uploaded', 'AGPL-3.0', 'Three experience levels',
    'Every chart has a table', 'Route replay', 'Time-of-use tariffs', 'Real EPA comparisons',
    'Metric or imperial', 'Dark and light', 'Built for phones', 'Open to contributions',
];

/** A slow, single-line ticker of what the tools stand for. Static under reduced motion. */
function Marquee() {
    const track = [...WORDS, ...WORDS];
    return (
        <Box component="section" aria-label="Highlights" py="md" style={{ borderTop: '1px solid var(--ps-border)', borderBottom: '1px solid var(--ps-border)' }}>
            <div className="site-marquee">
                <div className="site-marquee-track">
                    {track.map((w, i) => (
                        <Text key={`${w}-${i}`} component="span" className="ps-eyebrow" style={{ fontSize: 12 }} aria-hidden={i >= WORDS.length ? 'true' : undefined}>
                            <span style={{ color: 'var(--ps-accent)', marginRight: 32 }}>•</span>{w}
                        </Text>
                    ))}
                </div>
            </div>
        </Box>
    );
}

export default Marquee;

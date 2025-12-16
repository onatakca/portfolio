import React from 'react';
import SideDock from './components/SideDock';
import FloatingDock from './components/FloatingDock';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans selection:bg-accent selection:text-white transition-colors duration-500">

                {/* Subtle Background Texture (Optional "Noise") */}
                <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                </div>

                <main className="relative z-10 flex flex-col gap-0 pb-32">
                    <Hero />
                    <Education />
                    <Projects />

                    <Experience />
                    <About />

                </main>

                <SideDock />
                {/* Keep FloatingDock (bottom) for Mobile, hide on Desktop */}
                <div className="md:hidden">
                    <FloatingDock />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;

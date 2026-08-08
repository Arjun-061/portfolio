import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function WaveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#f1f4f8]">
      {/* Soft Ambient Radial Lights */}
      <div className="absolute -top-32 -left-32 w-[750px] h-[750px] bg-white/70 blur-[100px] rounded-full" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-[#23395d]/5 blur-[130px] rounded-full" />
      <div className="absolute bottom-10 left-1/3 w-[850px] h-[850px] bg-slate-200/30 blur-[150px] rounded-full" />

      {/* 50% Dimmed 3D Parametric Architectural Wave Lines */}
      <svg
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g strokeLinecap="round">
          {Array.from({ length: 32 }).map((_, i) => {
            const offset = i * 20;
            const isAccent = i % 4 === 0;
            const isDark = i % 3 === 0;
            const strokeColor = isAccent ? '#23395d' : isDark ? '#334155' : '#94a3b8';
            const strokeWidth = isAccent ? 2.0 : isDark ? 1.4 : 1.0;
            const opacity = isAccent ? 0.25 : isDark ? 0.18 : 0.12;

            return (
              <path
                key={i}
                d={`M -200 ${80 + offset} C 280 ${-120 + offset}, 780 ${420 + offset}, 1680 ${30 + offset}`}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeOpacity={opacity}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`min-h-screen relative text-[#0f172a] selection:bg-[#23395d] selection:text-white transition-opacity duration-500 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Dedicated 50% Dimmed Wave Background */}
      <WaveBackground />

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main Sections */}
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Full Curated Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Floating Back-to-Top Button */}
      <ScrollToTop />
    </div>
  );
}

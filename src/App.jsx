import React, { useEffect, useState, useRef } from 'react';
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

function AmbientBackground({ theme }) {
  const isDark = theme === 'dark';
  const spotlightRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);

  useEffect(() => {
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let current = { x: mouse.x, y: mouse.y };
    let animId;
    let isMoving = false;

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      // Smooth lerp easing for high physical realism
      current.x += (mouse.x - current.x) * 0.08;
      current.y += (mouse.y - current.y) * 0.08;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
        if (isMoving && spotlightRef.current.style.opacity !== '1') {
          spotlightRef.current.style.opacity = '1';
        }
      }

      // Parallax shifts on background orbs based on cursor coordinates
      const normX = (current.x / window.innerWidth - 0.5);
      const normY = (current.y / window.innerHeight - 0.5);

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate3d(${normX * 40}px, ${normY * 35}px, 0)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(${normX * 60}px, ${normY * 50}px, 0)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate3d(${normX * 35}px, ${normY * 30}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500">
      {/* Base Canvas */}
      <div className={`absolute inset-0 ${isDark ? 'bg-[#0e0e11]' : 'bg-[#f1f4f8]'}`} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-ambient-grid" />

      {/* Responsive Mouse-Following Ambient Spotlight */}
      <div
        ref={spotlightRef}
        style={{
          opacity: 0,
          transition: 'opacity 0.8s ease-out',
          willChange: 'transform',
        }}
        className="absolute -top-[350px] -left-[350px] w-[700px] h-[700px] rounded-full pointer-events-none"
      >
        <div
          className={`w-full h-full rounded-full blur-[90px] ${
            isDark ? 'bg-[#e2c08d]/12' : 'bg-[#23395d]/8'
          }`}
        />
      </div>

      {/* Interactive 3D Parallax Orbs (Tailored to Photo) */}
      <div
        ref={orb1Ref}
        style={{ willChange: 'transform' }}
        className={`absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none ${
          isDark ? 'bg-[#e2c08d]/10' : 'bg-white/80'
        }`}
      />
      <div
        ref={orb2Ref}
        style={{ willChange: 'transform' }}
        className={`absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full blur-[150px] pointer-events-none ${
          isDark ? 'bg-[#79a96e]/12' : 'bg-[#23395d]/8'
        }`}
      />
      <div
        ref={orb3Ref}
        style={{ willChange: 'transform' }}
        className={`absolute -bottom-20 left-1/4 w-[750px] h-[750px] rounded-full blur-[160px] pointer-events-none ${
          isDark ? 'bg-[#e2c08d]/8' : 'bg-slate-200/50'
        }`}
      />
    </div>
  );
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'light';
  });

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen relative selection:bg-[#23395d] dark:selection:bg-[#e2c08d] dark:selection:text-[#1a1412] selection:text-white transition-opacity duration-500 text-[#0f172a] dark:text-white ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Interactive Motion Ambient Background responsive to mouse pointer */}
      <AmbientBackground theme={theme} />

      {/* Main Content Hierarchy */}
      <div className="relative z-10">
        {/* Floating Glass Island Navbar */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Core Showcase Sections */}
        <main>
          <Hero theme={theme} onOpenResume={() => setIsResumeOpen(true)} />
          <About theme={theme} />
          <Skills theme={theme} />
          <Experience theme={theme} />
          <Projects theme={theme} />
          <Certifications theme={theme} />
          <Contact theme={theme} />
        </main>

        {/* Modern Minimalist Footer */}
        <Footer theme={theme} />
      </div>

      {/* Curated Interactive Resume Modal */}
      <ResumeModal
        theme={theme}
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Scroll To Top Dock */}
      <ScrollToTop theme={theme} />
    </div>
  );
}

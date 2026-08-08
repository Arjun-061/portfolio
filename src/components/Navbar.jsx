import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, FileText, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSection, setActiveSection] = useState('about');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);

        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        setScrollPct(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

        let current = navLinks[0].href.slice(1);
        for (const link of navLinks) {
          const el = document.getElementById(link.href.slice(1));
          if (el && el.getBoundingClientRect().top <= 120) {
            current = link.href.slice(1);
          }
        }
        setActiveSection(current);

        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-300 py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#23395d] to-[#0f172a] p-[2px] shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-[#23395d] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-wider text-[#0f172a] flex items-center gap-1">
              ARJUN <span className="text-[#23395d]">KRISHNAA</span>
            </span>
            <span className="text-[10px] text-[#1e293b] font-mono tracking-widest uppercase font-bold">Software Developer</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-300 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-sm rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-[#23395d] font-bold shadow-md'
                    : 'text-[#0f172a] font-bold hover:text-[#23395d] hover:bg-[#23395d]/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#0f172a] bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all active:scale-95 shadow-sm"
          >
            <FileText className="w-4 h-4 text-[#23395d]" />
            View Resume
          </button>
          <a
            href="#contact"
            className="relative group overflow-hidden px-4 py-2 text-xs font-bold text-white bg-[#23395d] hover:bg-[#1b2b47] rounded-xl shadow-md transition-all active:scale-95 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-200" />
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white text-[#0f172a] hover:text-[#23395d] focus:outline-none border border-slate-300 shadow-sm"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Scroll progress indicator */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-300 px-4 pt-4 pb-6 mt-2 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-bold rounded-xl transition-all ${
                    isActive ? 'text-white bg-[#23395d]' : 'text-[#0f172a] hover:text-[#23395d] hover:bg-[#23395d]/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-300 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-[#0f172a] bg-slate-100 rounded-xl border border-slate-300"
              >
                <FileText className="w-4 h-4 text-[#23395d]" />
                View Full Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 text-sm font-bold text-white bg-[#23395d] hover:bg-[#1b2b47] rounded-xl"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, FileText, Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenResume, theme, onToggleTheme }) {
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
          if (el && el.getBoundingClientRect().top <= 140) {
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

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled || mobileMenuOpen
              ? 'glass-dock'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`relative flex items-center justify-center w-10 h-10 rounded-xl p-[2px] shadow-md group-hover:scale-105 transition-transform duration-300 ${
                isDark
                  ? 'bg-gradient-to-tr from-[#e2c08d] to-stone-200'
                  : 'bg-gradient-to-tr from-[#23395d] to-[#0f172a]'
              }`}
            >
              <div
                className={`w-full h-full rounded-[10px] flex items-center justify-center transition-colors ${
                  isDark ? 'bg-[#121014]' : 'bg-white'
                }`}
              >
                <Code2
                  className={`w-5 h-5 group-hover:rotate-12 transition-transform duration-300 ${
                    isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-wider flex items-center gap-1">
                <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>ARJUN</span>
                <span className={isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}>KRISHNAA</span>
              </span>
              <span
                className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
                  isDark ? 'text-stone-300' : 'text-[#1e293b]'
                }`}
              >
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className={`hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full border transition-all ${
              isDark
                ? 'border-white/10 bg-stone-900/90 shadow-lg'
                : 'border-slate-300 bg-white/90 shadow-sm'
            } backdrop-blur-xl`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-mono font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-[#121014] bg-[#e2c08d] shadow-sm font-black'
                        : 'text-white bg-[#23395d] shadow-md'
                      : isDark
                      ? 'text-stone-200 hover:text-white hover:bg-white/10'
                      : 'text-[#0f172a] hover:text-[#23395d] hover:bg-[#23395d]/10'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster: Theme Toggle, Resume & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-xl border transition-all active:scale-95 ${
                isDark
                  ? 'border-white/20 bg-stone-900 text-[#e2c08d] hover:bg-stone-800'
                  : 'border-slate-300 bg-white text-[#0f172a] hover:bg-slate-100 hover:text-[#23395d] shadow-sm'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#23395d]" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-bold rounded-xl border transition-all active:scale-95 ${
                isDark
                  ? 'border-white/20 bg-stone-900 text-white hover:border-[#e2c08d] hover:text-[#e2c08d]'
                  : 'border-slate-300 bg-white text-[#0f172a] hover:border-[#23395d] hover:text-[#23395d] hover:bg-slate-50 shadow-sm'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
              <span>Resume</span>
            </button>

            {/* Get in Touch CTA */}
            <a
              href="#contact"
              className={`relative group overflow-hidden px-4 py-2 text-xs font-mono font-bold rounded-xl transition-all duration-300 active:scale-95 flex items-center gap-1.5 ${
                isDark
                  ? 'text-[#121014] bg-[#e2c08d] hover:bg-[#f3d8a8] shadow-photo-gold font-black'
                  : 'text-white bg-[#23395d] hover:bg-[#1b2b47] shadow-md'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-[#121014]' : 'text-sky-200'}`} />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-xl border ${
                isDark
                  ? 'border-white/20 bg-stone-900 text-[#e2c08d]'
                  : 'border-slate-300 bg-white text-[#0f172a]'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#23395d]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isDark
                  ? 'border-white/20 bg-stone-900 text-white'
                  : 'border-slate-300 bg-white text-[#0f172a]'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-2 p-4 rounded-2xl border shadow-2xl backdrop-blur-2xl animate-fade-up ${
              isDark
                ? 'border-white/20 bg-[#121014]/95 text-white'
                : 'border-slate-300 bg-white/98 text-[#0f172a]'
            }`}
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-xs font-mono font-bold rounded-xl transition-all ${
                      isActive
                        ? isDark
                          ? 'text-[#121014] bg-[#e2c08d] font-black'
                          : 'text-white bg-[#23395d]'
                        : isDark
                        ? 'text-stone-200 hover:text-white hover:bg-white/10'
                        : 'text-[#0f172a] hover:text-[#23395d] hover:bg-[#23395d]/10'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div
                className={`pt-3 mt-2 border-t flex flex-col gap-2 ${
                  isDark ? 'border-white/10' : 'border-slate-300'
                }`}
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono font-bold rounded-xl border ${
                    isDark
                      ? 'border-white/20 bg-stone-900 text-white'
                      : 'border-slate-300 bg-slate-100 text-[#0f172a]'
                  }`}
                >
                  <FileText className={`w-4 h-4 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                  View Full Resume
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-center px-4 py-2.5 text-xs font-mono font-bold rounded-xl ${
                    isDark
                      ? 'text-[#121014] bg-[#e2c08d] font-black'
                      : 'text-white bg-[#23395d] shadow-md'
                  }`}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Scroll Progress Bar */}
      <div className="scroll-progress mt-1" style={{ width: `${scrollPct}%` }} />
    </header>
  );
}

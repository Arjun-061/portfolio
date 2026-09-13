import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop({ theme }) {
  const [visible, setVisible] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl transition-all duration-300 active:scale-95 ${
        isDark
          ? 'bg-[#e2c08d] hover:bg-[#f3d8a8] text-[#121014] shadow-photo-gold'
          : 'bg-[#23395d] hover:bg-[#1b2b47] text-white shadow-lg shadow-[#23395d]/30'
      } hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

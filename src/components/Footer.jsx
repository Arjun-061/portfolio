import React from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer({ theme }) {
  const isDark = theme === 'dark';

  return (
    <footer
      className={`border-t py-12 relative backdrop-blur-xl transition-colors duration-300 ${
        isDark
          ? 'border-white/15 bg-stone-900/90 text-stone-300'
          : 'border-slate-300 bg-white/80 text-[#0f172a] shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand info */}
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center font-black font-mono shadow-sm ${
              isDark ? 'bg-[#e2c08d] text-[#121014]' : 'bg-[#23395d] text-white'
            }`}
          >
            AK
          </div>
          <div className="flex flex-col">
            <span className={`text-sm font-black font-mono tracking-wider ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              ARJUN KRISHNAA V
            </span>
            <span className={`text-[11px] font-mono font-bold ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
              Software Developer
            </span>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className={`flex items-center gap-6 text-xs font-mono font-bold ${isDark ? 'text-stone-300' : 'text-[#0f172a]'}`}>
          <a
            href="https://github.com/Arjun-061"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors flex items-center gap-1.5 ${isDark ? 'hover:text-[#e2c08d]' : 'hover:text-[#23395d]'}`}
          >
            <Github className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/arjun-krishnaa-v"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors flex items-center gap-1.5 ${isDark ? 'hover:text-[#e2c08d]' : 'hover:text-[#23395d]'}`}
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a
            href="mailto:arjunkrishnaa23@gmail.com"
            className={`transition-colors flex items-center gap-1.5 ${isDark ? 'hover:text-[#e2c08d]' : 'hover:text-[#23395d]'}`}
          >
            <Mail className="w-3.5 h-3.5" /> Direct Email
          </a>
        </div>

        {/* Right: Status & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs font-mono font-bold">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for Hire
          </span>
          <span className={isDark ? 'text-stone-500' : 'text-slate-400'}>•</span>
          <span className={isDark ? 'text-stone-300' : 'text-slate-900'}>
            © {new Date().getFullYear()} Arjun Krishnaa V
          </span>
        </div>

      </div>
    </footer>
  );
}

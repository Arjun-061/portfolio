import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-300 py-12 relative backdrop-blur-md bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#23395d] text-white flex items-center justify-center font-black font-mono shadow-sm">
            AK
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black text-[#0f172a] tracking-wider">ARJUN KRISHNAA V</span>
            <span className="text-[11px] text-slate-900 font-mono font-bold">Software Developer</span>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6 text-[#0f172a] text-xs font-mono font-bold">
          <a href="https://github.com/Arjun-061" target="_blank" rel="noopener noreferrer" className="hover:text-[#23395d] transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/arjun-krishnaa-v" target="_blank" rel="noopener noreferrer" className="hover:text-[#23395d] transition-colors">
            LinkedIn
          </a>
          <a href="mailto:arjunkrishnaa23@gmail.com" className="hover:text-[#23395d] transition-colors">
            Email
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono font-bold text-slate-900">
            © {new Date().getFullYear()} Arjun Krishnaa V. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}

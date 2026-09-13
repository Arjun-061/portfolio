import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, theme }) {
  if (!isOpen) return null;

  const isDark = theme === 'dark';
  const resumePdfPath = "/arjun-resume.pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-up">
      <div
        className={`relative w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${
          isDark ? 'border-white/20 bg-stone-900' : 'border-slate-300 bg-white'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'border-white/15 bg-stone-800' : 'border-slate-300 bg-slate-100'
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`p-2 rounded-xl shadow-sm ${
                isDark ? 'bg-[#e2c08d] text-[#121014]' : 'bg-[#23395d] text-white'
              }`}
            >
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className={`text-base font-black font-mono ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                Arjun Krishnaa V — Official Resume
              </h3>
              <p className={`text-xs font-mono font-bold ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                Software Developer • Verified Curriculum Vitae
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={resumePdfPath}
              download="Arjun_Krishnaa_V_Resume.pdf"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all shadow-sm active:scale-95 ${
                isDark
                  ? 'bg-[#e2c08d] hover:bg-[#f3d8a8] text-[#121014] font-black'
                  : 'bg-[#23395d] hover:bg-[#1b2b47] text-white'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-all shadow-sm ${
                isDark
                  ? 'border-white/20 bg-stone-800 text-white hover:border-[#e2c08d] hover:text-[#e2c08d]'
                  : 'border-slate-300 bg-white text-[#0f172a] hover:border-[#23395d]'
              }`}
              title="Open in new browser tab"
            >
              <ExternalLink className={`w-4 h-4 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
              <span>Open Tab</span>
            </a>

            <button
              onClick={onClose}
              className={`p-2 rounded-xl border transition-colors shadow-sm ${
                isDark
                  ? 'border-white/20 bg-stone-800 text-stone-200 hover:bg-stone-700'
                  : 'border-slate-300 bg-white text-[#0f172a] hover:bg-slate-200'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Multi-Page PDF Viewer */}
        <div className="flex-1 bg-slate-900/95 p-4 overflow-y-auto flex items-center justify-center min-h-[550px]">
          <iframe
            src={`${resumePdfPath}#toolbar=0&navpanes=0`}
            title="Arjun Krishnaa V Resume Document"
            className="w-full h-[680px] rounded-xl border border-slate-300 shadow-2xl bg-white"
          />
        </div>

        {/* Modal Footer Note */}
        <div
          className={`px-6 py-3 border-t flex items-center justify-between text-xs font-mono font-bold ${
            isDark ? 'border-white/15 bg-stone-800 text-stone-300' : 'border-slate-300 bg-slate-50 text-slate-900'
          }`}
        >
          <span>Arjun Krishnaa V • arjunkrishnaa23@gmail.com</span>
          <span className={isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}>Official Document (2 Pages)</span>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { X, Download, FileText, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const resumePdfPath = "/arjun-resume.pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-white border border-slate-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-300 bg-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-lg bg-[#23395d] text-white shadow-sm">
              <FileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-black text-[#0f172a]">Arjun Krishnaa V — Official Resume</h3>
              <p className="text-xs font-mono font-bold text-[#23395d]">Software Developer • 2-Page Document</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resumePdfPath}
              download="Arjun_Krishnaa_V_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#23395d] hover:bg-[#1b2b47] text-white text-xs font-extrabold font-mono transition-all shadow-sm active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-[#0f172a] transition-all shadow-sm"
              title="Open in new browser tab"
            >
              <ExternalLink className="w-4 h-4 text-[#23395d]" />
              <span>Open Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white hover:bg-slate-200 border border-slate-300 text-[#0f172a] transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Multi-Page PDF Viewer */}
        <div className="flex-1 bg-slate-900/90 p-4 overflow-y-auto flex items-center justify-center min-h-[550px]">
          <iframe
            src={`${resumePdfPath}#toolbar=0&navpanes=0`}
            title="Arjun Krishnaa V Resume Document"
            className="w-full h-[680px] rounded-xl border border-slate-300 shadow-2xl bg-white"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 border-t border-slate-300 bg-slate-50 flex items-center justify-between text-xs font-mono font-bold text-slate-900">
          <span>Arjun Krishnaa V • arjunkrishnaa23@gmail.com</span>
          <span className="text-[#23395d] font-black">Official Document (2 Pages)</span>
        </div>

      </div>
    </div>
  );
}

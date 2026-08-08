import React from 'react';
import { X, Printer } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-300 bg-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#23395d] animate-pulse" />
            <h3 className="text-base font-black text-[#0f172a]">Arjun Krishnaa V — Curated Resume</h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-[#0f172a] transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4 text-[#23395d]" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-[#0f172a] transition-colors shadow-sm"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-[#0f172a] text-sm font-sans leading-relaxed">
          
          {/* Header Info */}
          <div className="border-b border-slate-300 pb-6 text-center space-y-2">
            <h1 className="text-3xl font-black text-[#0f172a] tracking-wider">ARJUN KRISHNAA V</h1>
            <p className="text-sm font-mono text-[#23395d] font-black">Software Developer</p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold text-slate-900 pt-1">
              <span>📧 arjunkrishnaa23@gmail.com</span>
              <span>•</span>
              <span>🔗 LinkedIn: Arjun krishnaa V</span>
              <span>•</span>
              <span>💻 GitHub: Arjun-061</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-black uppercase tracking-wider text-[#23395d] flex items-center gap-1.5">
              SUMMARY
            </h2>
            <p className="text-slate-950 font-medium leading-relaxed">
              Detail-oriented Computer Science undergraduate with hands-on software development experience from internships at Codec Technologies and TailsMart. Proficient in Python, Java, SQL, and cloud fundamentals. Passionate about building scalable software, responsive web interfaces, and structured backend systems.
            </p>
          </div>

          {/* Academic Qualification */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-black uppercase tracking-wider text-[#23395d] flex items-center gap-1.5">
              ACADEMIC QUALIFICATION
            </h2>
            <div className="space-y-2 text-xs font-mono font-bold">
              <div className="flex justify-between items-baseline border-b border-slate-300 pb-2">
                <div>
                  <strong className="text-[#0f172a] text-sm font-black">V.S.B. College of Engineering and Technical Campus</strong>
                  <div className="text-slate-900 font-bold">B.E. Computer Science — 75.3%</div>
                </div>
                <div className="text-slate-900 font-bold">2023 – 2027</div>
              </div>

              <div className="flex justify-between items-baseline border-b border-slate-300 pb-2">
                <div>
                  <strong className="text-[#0f172a] text-sm font-black">Vivek Vidyalaya Matric Hr Sec School</strong>
                  <div className="text-slate-900 font-bold">HSC — 74.5%</div>
                </div>
                <div className="text-slate-900 font-bold">2021 – 2023</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-black uppercase tracking-wider text-[#23395d] flex items-center gap-1.5">
              EXPERIENCE
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-black text-[#0f172a]">
                  <span>Codec Technologies — Software & AI Trainee Internship</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-900 font-medium mt-1 space-y-1">
                  <li>Applied foundational algorithms and data preprocessing techniques.</li>
                  <li>Gained hands-on experience in feature engineering and data pipelines.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between text-sm font-black text-[#0f172a]">
                  <span>TailsMart — Software Developer Internship</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-900 font-medium mt-1 space-y-1">
                  <li>Assisted in the development and testing of software applications.</li>
                  <li>Collaborated with team members to improve application functionality and user experience.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Training / Courses */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-black uppercase tracking-wider text-[#23395d] flex items-center gap-1.5">
              TRAINING / COURSE
            </h2>
            <div className="space-y-3 text-xs text-slate-900 font-medium">
              <div>
                <div className="flex justify-between font-bold text-[#0f172a]">
                  <span>AWS Foundations: Getting Started with the AWS Cloud Essentials</span>
                  <span className="font-mono font-bold text-slate-900">04/2026 – 05/2026</span>
                </div>
                <p className="mt-0.5">Learned cloud computing fundamentals including on-demand resource provisioning, pay-as-you-go pricing, shared responsibility model, global infrastructure, and security best practices.</p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[#0f172a]">
                  <span>Generative AI Foundations & LLM Architecture</span>
                  <span className="font-mono font-bold text-slate-900">04/2026 – 05/2026</span>
                </div>
                <p className="mt-0.5">Explored foundational concepts of Generative AI including LLMs, prompt engineering, and transformer architectures for text and code assistance.</p>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-black uppercase tracking-wider text-[#23395d] flex items-center gap-1.5">
              FEATURED PROJECTS
            </h2>
            <div className="space-y-3 text-xs text-slate-900 font-medium">
              <div>
                <strong className="text-[#0f172a] text-sm font-black">Stock Analytics Dashboard</strong> (JavaScript, WebSockets, Plotly.js, Python)
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Built a full-stack stock analytics web app rendering interactive multi-pane price/indicator charts.</li>
                  <li>Implemented real-time WebSocket price feed with auto-reconnect backoff and heartbeat keep-alive.</li>
                </ul>
              </div>

              <div>
                <strong className="text-[#0f172a] text-sm font-black">Asset Management System</strong> (Java, JDBC, SQL)
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Designed and developed Java-based asset management system with role-based access control (Admin/Employee).</li>
                  <li>Built normalized SQL schema managing asset lifecycle states (in-use, in-repair, retired) and depreciation reports.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2 pt-2 border-t border-slate-300">
            <h2 className="text-xs font-mono font-black uppercase tracking-wider text-[#23395d]">SKILLS SUMMARY</h2>
            <p className="text-xs font-mono font-bold text-slate-900">
              <strong>Technical:</strong> Java, Python, C/C++, SQL, Cloud Fundamentals (AWS), Linux environments<br />
              <strong>Tools & Productivity:</strong> ChatGPT, GitHub, VS Code, Prompt Engineering<br />
              <strong>Soft Skills:</strong> Time management, Team collaboration & leadership, Quick learner & adaptable
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

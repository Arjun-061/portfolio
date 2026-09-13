import React, { useState } from 'react';
import { Award, Cloud, Sparkles, Calendar, CheckCircle2, ShieldCheck, Eye, Download, X } from 'lucide-react';
import Reveal from './Reveal';

export default function Certifications({ theme }) {
  const [activeCertModal, setActiveCertModal] = useState(null);
  const isDark = theme === 'dark';

  const certifications = [
    {
      id: "aws-cert",
      title: "AWS Foundations: Getting Started with AWS Cloud Essentials",
      issuer: "Amazon Web Services (AWS)",
      period: "Completed: May 14, 2026",
      icon: Cloud,
      badgeText: "AWS Official Certification",
      hasPhotocopy: true,
      certDoc: "/aws-certificate.pdf",
      isPdf: true,
      awardee: "Arjun Krishnaa V",
      director: "Michelle Vaz, Director, AWS Training & Certification",
      bullets: [
        "Mastered cloud computing fundamentals including on-demand resource provisioning, elasticity, and pay-as-you-go pricing models.",
        "Understood AWS Shared Responsibility Model for cloud security & compliance.",
        "Explored AWS Global Infrastructure across Regions, Availability Zones, and Edge Locations.",
        "Applied best practices for cloud cost optimization, basic IAM security policies, and resource monitoring."
      ]
    },
    {
      id: "genai-cert",
      title: "Generative AI Foundations (GEN AI NASSCOM)",
      issuer: "NASSCOM & FutureSkills Prime",
      period: "Completed: May 28, 2026",
      icon: Sparkles,
      badgeText: "NASSCOM Certified",
      hasPhotocopy: true,
      certDoc: "/genai-certificate.png",
      isPdf: false,
      awardee: "Arjun Krishnaa V",
      director: "NASSCOM Competency Standards",
      bullets: [
        "Learned core concepts of Generative AI including Large Language Models (LLMs), attention mechanisms, and Transformer architectures.",
        "Hands-on prompt engineering techniques for text generation, code assistance, and reasoning tasks.",
        "Aligned with competency standards developed by NASSCOM in collaboration with industry and approved by the Government.",
        "Studied ethical AI deployment, fine-tuning concepts, and RAG architectures."
      ]
    }
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider border ${
              isDark
                ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                : 'bg-[#23395d]/10 border-[#23395d]/30 text-[#23395d]'
            }`}
          >
            <Award className="w-3.5 h-3.5" /> Industry Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>Cloud & </span>
            <span className="gradient-text">Verified Credentials</span>
          </h2>
          <p className={`text-base max-w-2xl font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
            Verified official certifications featuring interactive photocopies, verification records, and cloud training curriculum.
          </p>
        </Reveal>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Reveal
                key={index}
                delay={index * 120}
                variant="scale"
                className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm ${
                  isDark
                    ? 'border-white/15 bg-stone-900/90 hover:border-[#e2c08d]'
                    : 'border-slate-300 hover:border-[#23395d]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`p-3 rounded-xl border ${
                        isDark
                          ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                          : 'bg-[#23395d]/15 border-[#23395d]/40 text-[#23395d]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-mono font-black rounded-full border ${
                        isDark
                          ? 'border-[#e2c08d]/40 bg-[#e2c08d]/15 text-[#e2c08d]'
                          : 'border-[#23395d]/40 bg-[#23395d]/15 text-[#23395d]'
                      }`}
                    >
                      {cert.badgeText}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl font-black leading-snug tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono mt-2">
                      <span className={`font-bold ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>{cert.issuer}</span>
                      <span className="text-slate-400">•</span>
                      <span className={`flex items-center gap-1 font-bold ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                        <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                        {cert.period}
                      </span>
                    </div>
                  </div>

                  {/* View Certification Action Button */}
                  {cert.hasPhotocopy && (
                    <div className="pt-2 pb-1">
                      <button
                        onClick={() => setActiveCertModal(cert)}
                        className={`w-full py-3.5 px-4 rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 group ${
                          isDark
                            ? 'bg-[#e2c08d] hover:bg-[#f3d8a8] text-[#121014] font-black shadow-photo-gold'
                            : 'bg-[#23395d] hover:bg-[#1b2b47] text-white shadow-md'
                        }`}
                      >
                        <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>Inspect Official Document</span>
                      </button>
                    </div>
                  )}

                  <div className="pt-2 space-y-2.5">
                    {cert.bullets.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className={`flex items-start gap-2.5 text-sm leading-relaxed font-medium ${
                          isDark ? 'text-stone-200' : 'text-slate-800'
                        }`}
                      >
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                        <span className="leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between text-xs font-mono ${
                  isDark ? 'border-white/15' : 'border-slate-300'
                }`}>
                  <span className={`flex items-center gap-1.5 font-black ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                    <ShieldCheck className="w-4 h-4" /> Verified Credentials Badge
                  </span>
                  <span className={isDark ? 'text-stone-300' : 'text-slate-900'}>
                    2026 Completion
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* ---------------- INTERACTIVE CERTIFICATE PHOTOCOPY MODAL ---------------- */}
      {activeCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-up">
          <div className={`relative w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${
            isDark ? 'border-white/20 bg-stone-900' : 'border-slate-300 bg-white'
          }`}>
            {/* Modal Header */}
            <div className={`flex items-center justify-between px-6 py-4 border-b ${
              isDark ? 'border-white/15 bg-stone-800' : 'border-slate-300 bg-slate-100'
            }`}>
              <div className="flex items-center gap-2.5">
                <span className={`p-2 rounded-xl shadow-sm ${
                  isDark ? 'bg-[#e2c08d] text-[#121014]' : 'bg-[#23395d] text-white'
                }`}>
                  <Award className="w-5 h-5" />
                </span>
                <div>
                  <h3 className={`text-base font-black ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                    {activeCertModal.title}
                  </h3>
                  <p className={`text-xs font-mono font-bold ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                    Awarded to: {activeCertModal.awardee} • {activeCertModal.period}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeCertModal.certDoc}
                  download={`Arjun_Krishnaa_V_${activeCertModal.id}.png`}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all shadow-sm ${
                    isDark
                      ? 'bg-[#e2c08d] hover:bg-[#f3d8a8] text-[#121014] font-black'
                      : 'bg-[#23395d] hover:bg-[#1b2b47] text-white'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Document</span>
                </a>

                <button
                  onClick={() => setActiveCertModal(null)}
                  className={`p-2 rounded-xl border transition-colors shadow-sm ${
                    isDark
                      ? 'border-white/20 bg-stone-800 text-stone-200 hover:bg-stone-700'
                      : 'border-slate-300 bg-white text-[#0f172a] hover:bg-slate-100'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Certificate Viewport */}
            <div className="flex-1 bg-slate-900/95 p-4 overflow-y-auto flex items-center justify-center min-h-[500px]">
              {activeCertModal.isPdf ? (
                <iframe
                  src={`${activeCertModal.certDoc}#toolbar=0&navpanes=0`}
                  title={activeCertModal.title}
                  className="w-full h-[650px] rounded-xl border border-slate-300 shadow-2xl bg-white"
                />
              ) : (
                <img
                  src={activeCertModal.certDoc}
                  alt={activeCertModal.title}
                  className="max-h-[650px] w-auto object-contain rounded-xl border border-slate-300 shadow-2xl"
                />
              )}
            </div>

            {/* Modal Footer Note */}
            <div className={`px-6 py-3 border-t flex items-center justify-between text-xs font-mono font-bold ${
              isDark ? 'border-white/15 bg-stone-800 text-stone-300' : 'border-slate-300 bg-slate-50 text-slate-900'
            }`}>
              <span>Verified Document Record</span>
              <span className={isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}>Official Credential</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

import React, { useState } from 'react';
import { Award, Cloud, Sparkles, Calendar, CheckCircle2, ShieldCheck, Eye, Download, X } from 'lucide-react';
import Reveal from './Reveal';

export default function Certifications() {
  const [activeCertModal, setActiveCertModal] = useState(null);

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d] text-xs font-mono font-extrabold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Industry Certifications & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            Cloud & <span className="gradient-text">Verified Credentials</span>
          </h2>
          <p className="text-slate-900 font-medium text-base max-w-2xl">
            Verified official certifications featuring downloadable photocopies, credentials verification, and cloud training records.
          </p>
        </Reveal>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Reveal
                key={index}
                delay={index * 120}
                variant="scale"
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-300 hover:border-[#23395d] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="p-3 rounded-xl bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 text-xs font-mono font-black rounded-full border border-[#23395d]/40 bg-[#23395d]/15 text-[#23395d]">
                      {cert.badgeText}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#0f172a] leading-snug">{cert.title}</h3>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-900 font-bold mt-2">
                      <span className="text-[#23395d] font-black">{cert.issuer}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#23395d]" />
                        {cert.period}
                      </span>
                    </div>
                  </div>

                  {/* Clean View Certification Action Button */}
                  {cert.hasPhotocopy && (
                    <div className="pt-2 pb-1">
                      <button
                        onClick={() => setActiveCertModal(cert)}
                        className="w-full py-3 px-4 rounded-xl bg-[#23395d] hover:bg-[#1b2b47] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 group"
                      >
                        <Eye className="w-4 h-4 text-sky-200 group-hover:scale-110 transition-transform" />
                        <span>View Certification</span>
                      </button>
                    </div>
                  )}

                  <div className="pt-2 space-y-2.5">
                    {cert.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-900 font-medium leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#23395d] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-300 flex items-center justify-between text-xs font-mono font-bold text-slate-900">
                  <span className="flex items-center gap-1.5 text-[#23395d] font-black">
                    <ShieldCheck className="w-4 h-4" /> Verified Credentials Badge
                  </span>
                  <span className="text-slate-900 font-bold">2026 Completion</span>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      {/* ---------------- INTERACTIVE CERTIFICATE PHOTOCOPY MODAL ---------------- */}
      {activeCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl max-h-[92vh] bg-white border border-slate-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-300 bg-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-[#23395d] text-white">
                  <Award className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-base font-black text-[#0f172a]">{activeCertModal.title}</h3>
                  <p className="text-xs font-mono font-bold text-[#23395d]">Awarded to: {activeCertModal.awardee} • {activeCertModal.period}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeCertModal.certDoc}
                  download={`Arjun_Krishnaa_V_${activeCertModal.id}.png`}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#23395d] hover:bg-[#1b2b47] text-white text-xs font-extrabold font-mono transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Document</span>
                </a>

                <button
                  onClick={() => setActiveCertModal(null)}
                  className="p-2 rounded-xl bg-white hover:bg-slate-200 border border-slate-300 text-[#0f172a] transition-colors shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Certificate Viewport */}
            <div className="flex-1 bg-slate-900/90 p-4 overflow-y-auto flex items-center justify-center min-h-[500px]">
              {activeCertModal.isPdf ? (
                <iframe
                  src={`${activeCertModal.certDoc}#toolbar=0&navpanes=0`}
                  title={activeCertModal.title}
                  className="w-full h-[650px] rounded-xl border border-slate-300 shadow-xl bg-white"
                />
              ) : (
                <img
                  src={activeCertModal.certDoc}
                  alt={activeCertModal.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl border border-slate-300 shadow-2xl bg-white"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "C:/Users/Arjun/.gemini/antigravity/brain/335c47c2-7e82-40ed-859b-1586358b8b44/.user_uploaded/media_1786166288173.png";
                  }}
                />
              )}
            </div>

            {/* Modal Footer Note */}
            <div className="px-6 py-3 border-t border-slate-300 bg-slate-50 flex items-center justify-between text-xs font-mono font-bold text-slate-900">
              <span>{activeCertModal.issuer} • Awarded to Arjun Krishnaa V</span>
              <span className="text-[#23395d] font-black">Official Certificate Document</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

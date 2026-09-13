import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import Reveal from './Reveal';

export default function Experience({ theme }) {
  const isDark = theme === 'dark';

  const experiences = [
    {
      company: "Codec Technologies",
      role: "Software & AI Trainee Internship",
      type: "Internship",
      period: "Engineering Track",
      location: "Remote / Onsite",
      badgeColor: isDark
        ? "bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]"
        : "bg-[#23395d]/15 border-[#23395d]/40 text-[#23395d]",
      skills: ["Data Preprocessing", "Predictive Analytics", "Algorithms"],
      bullets: [
        "Applied foundational computer science algorithms and data processing techniques.",
        "Gained hands-on practical experience in data cleaning, feature engineering, and analytics pipelines.",
        "Constructed and evaluated data model performance utilizing standard evaluation metrics.",
        "Explored software optimization and code refactoring best practices."
      ]
    },
    {
      company: "TailsMart",
      role: "Software Developer Internship",
      type: "Internship",
      period: "Software Engineering Track",
      location: "Software Dev Team",
      badgeColor: isDark
        ? "bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]"
        : "bg-[#23395d]/15 border-[#23395d]/40 text-[#23395d]",
      skills: ["Software Engineering", "Full-Stack Development", "Testing & Debugging", "UI/UX Enhancements", "Agile Collaboration"],
      bullets: [
        "Assisted in the end-to-end development, code refactoring, and quality assurance testing of core software applications.",
        "Collaborated with cross-functional team members to improve application functionality and elevate user experience (UX).",
        "Identified, documented, and fixed software bugs and UI inconsistencies to ensure high performance and reliability.",
        "Participated in code reviews and team sprint discussions to deliver features on schedule."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider border ${
              isDark
                ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                : 'bg-[#23395d]/10 border-[#23395d]/30 text-[#23395d]'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" /> Professional Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>Internships & </span>
            <span className="gradient-text">Practical Work</span>
          </h2>
          <p className={`text-base max-w-2xl font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
            Real-world industry experience delivering software applications and data workflows in collaborative environments.
          </p>
        </Reveal>

        {/* Timeline Cards Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Reveal
              key={index}
              delay={index * 120}
              className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-300 shadow-sm ${
                isDark
                  ? 'border-white/15 bg-stone-900/90 hover:border-[#e2c08d]'
                  : 'border-slate-300 hover:border-[#23395d]'
              }`}
            >
              {/* Card Header */}
              <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b ${
                isDark ? 'border-white/15' : 'border-slate-300'
              }`}>
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3.5 rounded-2xl shadow-md shrink-0 ${
                      isDark ? 'bg-[#e2c08d] text-[#121014]' : 'bg-[#23395d] text-white'
                    }`}
                  >
                    <Building2 className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className={`text-xl font-black ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                        {exp.company}
                      </h3>
                      <span className={`px-2.5 py-0.5 text-xs font-mono font-black rounded-full border ${exp.badgeColor}`}>
                        {exp.type}
                      </span>
                    </div>
                    <p className={`text-base font-bold mt-1 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:self-start md:self-center">
                  <span
                    className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg border flex items-center gap-1.5 shadow-sm ${
                      isDark
                        ? 'bg-stone-800 border-white/15 text-stone-200'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  >
                    <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="py-6 space-y-3">
                <h4 className={`text-xs font-mono uppercase tracking-wider font-black ${
                  isDark ? 'text-stone-300' : 'text-slate-950'
                }`}>
                  Key Deliverables & Impact:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div
                        className={`p-1 rounded mt-0.5 shrink-0 ${
                          isDark ? 'bg-[#e2c08d]/15 text-[#e2c08d]' : 'bg-[#23395d]/15 text-[#23395d]'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className={`text-sm font-medium leading-relaxed ${
                        isDark ? 'text-stone-200' : 'text-[#0f172a]'
                      }`}>
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className={`pt-4 border-t flex items-center gap-2 flex-wrap ${
                isDark ? 'border-white/15' : 'border-slate-300'
              }`}>
                <span className={`text-xs font-mono font-black ${isDark ? 'text-stone-300' : 'text-slate-950'}`}>
                  Tech Stack:
                </span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border transition-all shadow-sm ${
                      isDark
                        ? 'bg-stone-800 border-white/15 text-stone-200 hover:border-[#e2c08d] hover:text-[#e2c08d]'
                        : 'bg-white border-slate-300 text-[#0f172a] hover:border-[#23395d]'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

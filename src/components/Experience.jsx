import React, { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import Reveal from './Reveal';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      company: "Codec Technologies",
      role: "Software & AI Trainee Internship",
      type: "Internship",
      period: "Engineering Track",
      location: "Remote / Onsite",
      accent: "from-[#23395d] to-[#0f172a]",
      badgeColor: "bg-[#23395d]/15 border-[#23395d]/40 text-[#23395d]",
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
      accent: "from-[#23395d] to-[#3a5a8c]",
      badgeColor: "bg-[#23395d]/15 border-[#23395d]/40 text-[#23395d]",
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d] text-xs font-mono font-extrabold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" /> Professional Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            Internships & <span className="gradient-text">Practical Work</span>
          </h2>
          <p className="text-slate-900 font-medium text-base max-w-2xl">
            Real-world industry experience delivering software applications and data workflows in collaborative environments.
          </p>
        </Reveal>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Reveal
              key={index}
              delay={index * 120}
              className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                expandedIndex === index
                  ? 'border-[#23395d] shadow-lg'
                  : 'border-slate-300 hover:border-[#23395d]'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3.5 rounded-2xl bg-[#23395d] text-white shadow-md shrink-0`}>
                    <Building2 className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-black text-[#0f172a]">{exp.company}</h3>
                      <span className={`px-2.5 py-0.5 text-xs font-mono font-extrabold rounded-full border ${exp.badgeColor}`}>
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-base font-bold text-[#23395d] mt-1">{exp.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:self-start md:self-center">
                  <span className="text-xs font-mono font-bold text-slate-900 bg-white px-3 py-1.5 rounded-lg border border-slate-300 flex items-center gap-1.5 shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-[#23395d]" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="py-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-950 font-black">Key Deliverables & Impact:</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <div className="p-1 rounded bg-[#23395d]/15 text-[#23395d] mt-0.5 shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-slate-900 font-medium leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Used */}
              <div className="pt-4 border-t border-slate-300 flex items-center gap-2 flex-wrap">
                <span className="text-xs text-slate-950 font-mono font-bold">Tech Stack:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-white text-[#0f172a] border border-slate-300 shadow-sm"
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

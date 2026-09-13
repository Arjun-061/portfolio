import React from 'react';
import { Cpu, Code2, Cloud, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

export default function Skills({ theme }) {
  const isDark = theme === 'dark';

  const skillCategories = [
    {
      title: "Core Languages & Systems",
      icon: Code2,
      subtitle: "Full-Stack, Scripting & Design Foundations",
      skills: [
        { name: "Java", desc: "OOP, Collections, Multi-threading" },
        { name: "Python", desc: "Scripting, Automation, Backend Logic" },
        { name: "Web Development", desc: "HTML5, CSS3, JavaScript, Responsive Interfaces" },
        { name: "UI/UX Design", desc: "Figma, Wireframing, Intuitive User Experience" },
        { name: "SQL & Relational DBs", desc: "Normalized Schemas, Joins, Queries" },
        { name: "C / C++", desc: "Data Structures, Memory, Logic" },
      ],
    },
    {
      title: "Cloud & Environments",
      icon: Cloud,
      subtitle: "Infrastructure & Operating Systems",
      skills: [
        { name: "AWS Cloud Fundamentals", desc: "EC2, S3, IAM, Security Basics" },
        { name: "Linux Systems", desc: "Bash, File Systems, Permissions" },
        { name: "Kali Linux Exposure", desc: "Security Concepts & Networking" },
      ],
    },
    {
      title: "AI & Productivity Tools",
      icon: Cpu,
      subtitle: "Modern Engineering Workflows",
      skills: [
        { name: "ChatGPT & Prompt Engineering", desc: "Context Structuring, Code Assistance" },
        { name: "VS Code & Development IDEs", desc: "Version Control, Debugging Tools" },
        { name: "Postman & API Testing", desc: "HTTP Methods, Verification" },
      ],
    },
    {
      title: "Soft Skills & Leadership",
      icon: Users,
      subtitle: "Team Collaboration & Delivery",
      skills: [
        { name: "Team Collaboration", desc: "Cross-functional Sprint Participation" },
        { name: "Rapid Problem Solving", desc: "Root Cause Analysis & Debugging" },
        { name: "Time Management", desc: "Milestone Delivery & Prioritization" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
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
            <Sparkles className="w-3.5 h-3.5" /> Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>Skills & </span>
            <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className={`text-base max-w-2xl font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
            A comprehensive breakdown of programming languages, development tools, cloud foundations, and interpersonal capabilities.
          </p>
        </Reveal>

        {/* Skill Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={index} delay={index * 100} variant="up">
                <div
                  className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-300 space-y-6 shadow-sm ${
                    isDark
                      ? 'border-white/15 bg-stone-900/90 hover:border-[#e2c08d]'
                      : 'border-slate-300 hover:border-[#23395d]'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl border shrink-0 ${
                        isDark
                          ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                          : 'bg-[#23395d]/10 border-[#23395d]/30 text-[#23395d]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                        {category.title}
                      </h3>
                      <p className={`text-xs font-mono font-bold ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-4 rounded-xl border transition-all flex items-start gap-3 shadow-sm group ${
                          isDark
                            ? 'border-white/10 bg-stone-800/80 hover:border-[#e2c08d]'
                            : 'border-slate-300 bg-white hover:border-[#23395d]'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4.5 h-4.5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform ${
                            isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'
                          }`}
                        />
                        <div>
                          <span className={`text-sm font-black block ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                            {skill.name}
                          </span>
                          <span className={`text-xs font-medium block ${isDark ? 'text-stone-300' : 'text-slate-700'}`}>
                            {skill.desc}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

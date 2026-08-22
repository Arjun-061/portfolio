import React from 'react';
import { Cpu, Code2, Cloud, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

export default function Skills() {
  const accentStyle = "text-[#23395d] border-[#23395d]/40 bg-[#23395d]/15";

  const skillCategories = [
    {
      title: "Technical & Core Languages",
      icon: Code2,
      accent: accentStyle,
      skills: [
        { name: "Java" },
        { name: "SQL & Relational DBs" },
        { name: "C++" },
      ]
    },
    {
      title: "AI & Productivity Tools",
      icon: Cpu,
      accent: accentStyle,
      skills: [
        { name: "ChatGPT & Prompt Engineering" },
        { name: "VS Code & Development IDEs" },
      ]
    },
    {
      title: "Cloud & OS Environments",
      icon: Cloud,
      accent: accentStyle,
      skills: [
        { name: "AWS Cloud Fundamentals" },
        { name: "Linux Systems" },
        { name: "Kali Linux Exposure" },
      ]
    },
    {
      title: "Soft Skills & Teamwork",
      icon: Users,
      accent: accentStyle,
      skills: [
        { name: "Time Management" },
        { name: "Team Collaboration & Leadership" },
        { name: "Quick Learner & Adaptable" },
        { name: "Problem Solving" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d] text-xs font-mono font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            Skills & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="text-slate-900 font-medium text-base max-w-2xl">
            A comprehensive breakdown of programming languages, development tools, cloud foundations, and interpersonal capabilities.
          </p>
        </Reveal>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={index} delay={index * 100} variant="up">
                <SkillCard category={category} Icon={Icon} />
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function SkillCard({ category, Icon }) {
  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-300 hover:border-[#23395d] transition-all duration-300 space-y-6">
      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-xl border ${category.accent}`}>
          <Icon className="w-6 h-6 text-[#23395d]" />
        </div>
        <h3 className="text-xl font-extrabold text-[#0f172a]">{category.title}</h3>
      </div>

      <ul className="space-y-3">
        {category.skills.map((skill, sIdx) => (
          <li
            key={sIdx}
            className="flex items-center p-3.5 rounded-xl bg-white border border-slate-300 hover:border-[#23395d] hover:bg-white transition-all shadow-sm"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#23395d] shrink-0" />
              <span className="font-extrabold text-sm text-[#0f172a]">{skill.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

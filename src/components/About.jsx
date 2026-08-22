import React from 'react';
import { GraduationCap, BookOpen, CheckCircle, Code2, Database, Cloud, Zap, User, Sparkles, Star } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Core Software Engineering",
      desc: "Proficient in Java and C/C++ with strong foundation in Data Structures, OOP, and algorithm design.",
      color: "text-[#23395d] border-[#23395d]/30 bg-[#23395d]/10",
    },
    {
      icon: Database,
      title: "Database & Backend Systems",
      desc: "Experience building normalized SQL schemas, JDBC integration, and backend API structures.",
      color: "text-[#23395d] border-[#23395d]/30 bg-[#23395d]/10",
    },
    {
      icon: Cloud,
      title: "Cloud & OS Environments",
      desc: "AWS Cloud Foundations certified with practical command of Linux system environments.",
      color: "text-[#23395d] border-[#23395d]/30 bg-[#23395d]/10",
    },
    {
      icon: Zap,
      title: "Problem Solving & Agile",
      desc: "Adaptable fast learner with proven teamwork and sprint execution across software internships.",
      color: "text-[#23395d] border-[#23395d]/30 bg-[#23395d]/10",
    },
  ];

  const academics = [
    {
      institution: "V.S.B. College of Engineering and Technical Campus",
      degree: "B.E. Computer Science and Engineering",
      period: "2023 – 2027",
      score: "75.3%",
      scoreType: "Aggregate Score",
      status: "Present",
      current: true,
      highlights: [
        "Specializing in Software Engineering, Data Structures, OOP, and Database Management Systems.",
        "Developing hands-on full-stack applications, stock analytics dashboards, and relational database systems.",
        "Active participant in technical projects and collaborative engineering activities."
      ]
    },
    {
      institution: "Vivek Vidyalaya Matric Hr Sec School",
      degree: "HSC (Higher Secondary Certificate)",
      period: "2021 – 2023",
      score: "74.5%",
      scoreType: "Board Percentage",
      status: "Completed",
      current: false,
      highlights: [
        "Strong foundation in Mathematics, Computer Science, and Physics.",
        "Engaged in school technical competitions, coding activities, and team events."
      ]
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d] text-xs font-mono font-extrabold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" /> About Me & Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            Background & <span className="gradient-text">Academic Qualification</span>
          </h2>
          <p className="text-slate-900 font-medium text-base max-w-2xl">
            A dedicated Computer Science student building scalable applications, robust database schemas, and cloud-backed software solutions.
          </p>
        </Reveal>

        {/* Top Grid: Bio Card & Core Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Column: Bio / Overview Card WITH PROFILE PICTURE */}
          <Reveal variant="left" className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-300 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            {/* Decorative Glow Orb */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#23395d]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-4 pb-3 border-b border-slate-300">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#23395d] shadow-md shadow-[#23395d]/20 shrink-0">
                  <img
                    src="/arjun-profile.jpg"
                    alt="Arjun Krishnaa V"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "C:/Users/Arjun/.gemini/antigravity/brain/335c47c2-7e82-40ed-859b-1586358b8b44/.user_uploaded/media_1787412770497.jpg";
                    }}
                  />
                </div>
                <div>
                  {/* PROMINENTLY HIGHLIGHTED NAME */}
                  <h3 className="text-2xl sm:text-3xl font-black text-[#23395d] tracking-tight leading-tight">
                    ARJUN <span className="text-[#0f172a]">KRISHNAA V</span>
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#23395d]/15 text-[#23395d] text-xs font-mono font-extrabold mt-1">
                    <Sparkles className="w-3 h-3" /> Software Developer
                  </div>
                </div>
              </div>

              {/* Highlight Box for Arjun Krishnaa V */}
              <div className="p-4 rounded-xl bg-white border border-[#23395d]/40 shadow-sm space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#23395d] font-extrabold uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-[#23395d] text-[#23395d]" /> Featured Profile
                </div>
                <p className="text-slate-900 text-sm sm:text-base font-medium leading-relaxed">
                  <strong className="text-[#23395d] text-base font-black">Arjun Krishnaa V</strong> is a detail-oriented Computer Science undergraduate with hands-on software development experience gained through internships at <strong className="text-slate-950 font-black">Codec Technologies</strong> and <strong className="text-slate-950 font-black">TailsMart</strong>.
                </p>
              </div>

              <p className="text-slate-900 text-sm font-medium leading-relaxed">
                Proficient in Java, SQL, and AWS cloud fundamentals. Passionate about building robust backend logic, responsive web user interfaces, and structured database systems.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-300 grid grid-cols-2 gap-4 relative z-10">
              <div className="p-3 rounded-xl bg-white border border-slate-300">
                <span className="text-xs text-slate-900 font-mono font-bold block">Primary Focus</span>
                <p className="text-sm font-black text-[#23395d] mt-0.5">Software Engineering</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-300">
                <span className="text-xs text-slate-900 font-mono font-bold block">Degree</span>
                <p className="text-sm font-black text-[#0f172a] mt-0.5">B.E. CS (2023–2027)</p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 4 Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={idx} delay={idx * 80} variant="right">
                  <div className="h-full glass-card rounded-2xl p-5 border border-slate-300 hover:border-[#23395d] transition-all flex flex-col space-y-3">
                    <div className={`p-2.5 rounded-xl border w-fit ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-extrabold text-[#0f172a]">{pillar.title}</h4>
                    <p className="text-xs text-slate-900 font-medium leading-relaxed">{pillar.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

        {/* Bottom Section: Academic Qualifications */}
        <div className="space-y-6">
          <Reveal className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[#23395d]" />
            <h3 className="text-2xl font-black text-[#0f172a]">Education Journey</h3>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {academics.map((item, index) => (
              <Reveal
                key={index}
                delay={index * 100}
                variant="up"
                className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                  item.current 
                    ? 'border-[#23395d] shadow-md' 
                    : 'border-slate-300 hover:border-[#23395d]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-lg font-black text-[#0f172a]">{item.institution}</h4>
                      {item.current && (
                        <span className="px-2.5 py-0.5 text-[10px] font-mono font-black uppercase rounded-full bg-[#23395d]/15 text-[#23395d] border border-[#23395d]/40">
                          {item.status}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold text-[#23395d] flex items-center gap-1.5 mt-1">
                      <BookOpen className="w-4 h-4" />
                      {item.degree}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono font-bold text-slate-900 bg-white px-3 py-1 rounded-lg border border-slate-300 shadow-sm">
                      {item.period}
                    </span>
                    <div className="px-3 py-1 rounded-lg bg-[#23395d] text-white font-mono font-black text-xs shadow-sm">
                      {item.score}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-900 font-medium pt-4 border-t border-slate-300">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#23395d] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

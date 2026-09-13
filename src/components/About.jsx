import React from 'react';
import { GraduationCap, BookOpen, CheckCircle, Code2, Database, Cloud, Zap, User, Sparkles, Star } from 'lucide-react';
import Reveal from './Reveal';

export default function About({ theme }) {
  const isDark = theme === 'dark';

  const pillars = [
    {
      icon: Code2,
      title: "Core Software Engineering",
      desc: "Proficient in Java, C/C++ with strong principles in Object-Oriented Programming, Data Structures, and clean modular code architecture.",
      badge: "Java & OOP",
    },
    {
      icon: Database,
      title: "Database & Backend Systems",
      desc: "Experience building normalized relational SQL schemas, JDBC integration, database transactions, and backend API structures.",
      badge: "SQL & Relational DBs",
    },
    {
      icon: Cloud,
      title: "Cloud & OS Environments",
      desc: "AWS Cloud Foundations certified with practical command of Linux system environments, server operations, and deployment basics.",
      badge: "AWS & Linux",
    },
    {
      icon: Zap,
      title: "Problem Solving & Agile",
      desc: "Adaptable fast learner with proven teamwork, bug-fixing, and sprint execution across practical software engineering internships.",
      badge: "Agile & Teamwork",
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
        "Active participant in technical projects and collaborative engineering hackathons."
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
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider border ${
              isDark
                ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                : 'bg-[#23395d]/10 border-[#23395d]/30 text-[#23395d]'
            }`}
          >
            <User className="w-3.5 h-3.5" /> About Me & Education
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>Background & </span>
            <span className="gradient-text">Academic Qualification</span>
          </h2>
          <p className={`text-base max-w-2xl font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
            A dedicated Computer Science student building scalable applications, robust database schemas, and cloud-backed software solutions.
          </p>
        </Reveal>

        {/* Top Grid: Bio Card & Core Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Bio / Overview Card */}
          <Reveal
            variant="left"
            className={`lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden border shadow-xl ${
              isDark ? 'border-white/15 bg-stone-900/90' : 'border-slate-300'
            }`}
          >
            {/* Ambient Radial Accent */}
            <div
              className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
                isDark ? 'bg-[#e2c08d]/10' : 'bg-[#23395d]/10'
              }`}
            />

            <div className="space-y-5 relative z-10">
              <div className={`flex items-center gap-4 pb-4 border-b ${isDark ? 'border-white/15' : 'border-slate-300'}`}>
                <div
                  className={`relative w-16 h-16 rounded-2xl overflow-hidden border-2 shadow-md shrink-0 ${
                    isDark ? 'border-[#e2c08d]' : 'border-[#23395d]'
                  }`}
                >
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
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                    <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>ARJUN </span>
                    <span className={isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}>KRISHNAA V</span>
                  </h3>
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-extrabold mt-1 border ${
                      isDark
                        ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                        : 'bg-[#23395d]/10 border-[#23395d]/30 text-[#23395d]'
                    }`}
                  >
                    <Sparkles className="w-3 h-3" /> Software Developer
                  </div>
                </div>
              </div>

              {/* Highlight Box */}
              <div
                className={`p-4 rounded-xl border shadow-sm space-y-1.5 ${
                  isDark
                    ? 'border-[#e2c08d]/30 bg-stone-900/90'
                    : 'border-[#23395d]/30 bg-white'
                }`}
              >
                <div
                  className={`flex items-center gap-1.5 text-xs font-mono font-black uppercase tracking-wider ${
                    isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'
                  }`}
                >
                  <Star className="w-3.5 h-3.5 fill-current" /> Featured Profile
                </div>
                <p className={`text-sm sm:text-base leading-relaxed font-medium ${isDark ? 'text-stone-100' : 'text-[#0f172a]'}`}>
                  <strong className={`font-black ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                    Arjun Krishnaa V
                  </strong>{' '}
                  is a detail-oriented Computer Science undergraduate with hands-on software development experience gained through internships at{' '}
                  <strong className={`font-black ${isDark ? 'text-white' : 'text-[#23395d]'}`}>Codec Technologies</strong> and{' '}
                  <strong className={`font-black ${isDark ? 'text-white' : 'text-[#23395d]'}`}>TailsMart</strong>.
                </p>
              </div>

              <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
                Proficient in Java, SQL schemas, and AWS cloud fundamentals. Passionate about building robust backend logic, responsive web user interfaces, and structured database systems.
              </p>
            </div>

            <div className={`pt-4 border-t grid grid-cols-2 gap-3 relative z-10 ${isDark ? 'border-white/15' : 'border-slate-300'}`}>
              <div className={`p-3 rounded-xl border shadow-sm ${isDark ? 'bg-stone-900 border-white/15' : 'border-slate-300 bg-white'}`}>
                <span className={`text-[10px] font-mono font-black uppercase tracking-wider block ${isDark ? 'text-stone-300' : 'text-slate-700'}`}>
                  Primary Focus
                </span>
                <p className={`text-sm font-black mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                  Software Engineering
                </p>
              </div>

              <div className={`p-3 rounded-xl border shadow-sm ${isDark ? 'bg-stone-900 border-white/15' : 'border-slate-300 bg-white'}`}>
                <span className={`text-[10px] font-mono font-black uppercase tracking-wider block ${isDark ? 'text-stone-300' : 'text-slate-700'}`}>
                  Degree
                </span>
                <p className={`text-sm font-black mt-0.5 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                  B.E. CS (2023–2027)
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: 4 Core Capability Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={idx} delay={idx * 80} variant="right">
                  <div
                    className={`h-full glass-card rounded-2xl p-6 border transition-all flex flex-col justify-between space-y-4 shadow-sm group ${
                      isDark
                        ? 'border-white/15 bg-stone-900/90 hover:border-[#e2c08d]'
                        : 'border-slate-300 hover:border-[#23395d]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div
                          className={`p-3 rounded-xl border group-hover:scale-105 transition-transform ${
                            isDark
                              ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                              : 'bg-[#23395d]/10 border-[#23395d]/30 text-[#23395d]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                            isDark
                              ? 'bg-stone-800 border-white/15 text-stone-200'
                              : 'bg-white border-slate-300 text-[#0f172a]'
                          }`}
                        >
                          {pillar.badge}
                        </span>
                      </div>

                      <h4 className={`text-base font-extrabold ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                        {pillar.title}
                      </h4>

                      <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-stone-300' : 'text-slate-800'}`}>
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>

        {/* Bottom Section: Education Journey */}
        <div className="space-y-6">
          <Reveal className="flex items-center gap-2.5">
            <div
              className={`p-2 rounded-xl border shadow-sm ${
                isDark
                  ? 'bg-[#e2c08d]/15 text-[#e2c08d] border-[#e2c08d]/30'
                  : 'bg-[#23395d]/10 text-[#23395d] border-[#23395d]/30'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              Education Journey
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {academics.map((item, index) => (
              <Reveal
                key={index}
                delay={index * 100}
                variant="up"
                className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all duration-300 shadow-sm ${
                  item.current
                    ? isDark
                      ? 'border-[#e2c08d] shadow-md'
                      : 'border-[#23395d] shadow-md'
                    : isDark
                    ? 'border-white/15 hover:border-[#e2c08d]'
                    : 'border-slate-300 hover:border-[#23395d]'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className={`text-lg font-black ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                        {item.institution}
                      </h4>
                      {item.current && (
                        <span
                          className={`px-2.5 py-0.5 text-[10px] font-mono font-black uppercase rounded-full border ${
                            isDark
                              ? 'bg-[#e2c08d]/20 text-[#e2c08d] border-[#e2c08d]/40'
                              : 'bg-[#23395d]/15 text-[#23395d] border-[#23395d]/40'
                          }`}
                        >
                          {item.status}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm font-bold flex items-center gap-1.5 mt-1 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                      <BookOpen className="w-4 h-4" />
                      {item.degree}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-xs font-mono font-bold px-3 py-1 rounded-lg border shadow-sm ${
                        isDark
                          ? 'bg-stone-800 border-white/15 text-stone-200'
                          : 'bg-white border-slate-300 text-[#0f172a]'
                      }`}
                    >
                      {item.period}
                    </span>
                    <div
                      className={`px-3 py-1 rounded-lg font-mono font-black text-xs shadow-sm ${
                        isDark
                          ? 'bg-[#e2c08d] text-[#121014]'
                          : 'bg-[#23395d] text-white'
                      }`}
                    >
                      {item.score}
                    </div>
                  </div>
                </div>

                <ul className={`space-y-2.5 text-xs sm:text-sm font-medium pt-4 border-t ${
                  isDark ? 'border-white/15 text-stone-200' : 'border-slate-300 text-slate-800'
                }`}>
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
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

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const isSmallScreen = canvas.parentElement.offsetWidth < 640;
    const particleCount = isSmallScreen ? 22 : 45;

    let width, height;

    const setSize = () => {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      setSize();
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
    }));

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(35, 57, 93, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(35, 57, 93, 0.45)';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#23395d';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleVisibility = () => {
      running = !document.hidden;
      if (running) draw();
      else cancelAnimationFrame(animationFrameId);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && !document.hidden;
        if (running) draw();
        else cancelAnimationFrame(animationFrameId);
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#23395d]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-slate-400/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Particle Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-lg shadow-[#23395d]/10 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23395d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#23395d]"></span>
              </span>
              <span className="text-xs font-sans text-[#23395d] tracking-wider font-extrabold uppercase">
                Open for Software Engineering Roles
              </span>
            </div>

            {/* Main Headline */}
            <div
              className={`space-y-2 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h1 className="text-4xl sm:text-6xl font-black text-[#0f172a] tracking-tight leading-none">
                Hi, I'm <span className="gradient-text">Arjun Krishnaa</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#23395d] font-mono">
                Software Developer
              </p>
            </div>

            {/* Summary Text (Enhanced Contrast) */}
            <p
              className={`text-base sm:text-lg text-slate-900 font-medium leading-relaxed max-w-2xl transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Computer Science undergraduate at V.S.B. College of Engineering Technical Campus with hands-on software development experience from internships at <strong className="text-[#23395d] font-black">Codec Technologies</strong> and <strong className="text-[#23395d] font-black">TailsMart</strong>. Proficient in Java, SQL, AWS, and modern web application development.
            </p>

            {/* Tech Badges (High Contrast) */}
            <div
              className={`flex flex-wrap items-center gap-2 pt-1 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '300ms' }}
            >
              {['Java', 'SQL', 'AWS', 'Linux'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-white text-[#0f172a] border border-slate-300 hover:border-[#23395d] hover:text-[#23395d] hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-[#23395d] hover:bg-[#1b2b47] rounded-xl shadow-lg shadow-[#23395d]/30 transition-all active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-[#0f172a] bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all hover:border-[#23395d] flex items-center justify-center gap-2 group active:scale-95 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#23395d] group-hover:scale-110 transition-transform" />
                <span>Resume Preview</span>
              </button>
            </div>

            {/* Social & Direct Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs text-slate-900 font-mono font-bold uppercase tracking-wider">Connect:</span>
              <a
                href="https://github.com/Arjun-061"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-300 text-[#0f172a] hover:text-[#23395d] hover:border-[#23395d] transition-all hover:-translate-y-0.5 shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/arjun-krishnaa-v"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-300 text-[#0f172a] hover:text-[#23395d] hover:border-[#23395d] transition-all hover:-translate-y-0.5 shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:arjunkrishnaa23@gmail.com"
                className="p-2.5 rounded-xl bg-white border border-slate-300 text-[#0f172a] hover:text-[#23395d] hover:border-[#23395d] transition-all hover:-translate-y-0.5 shadow-sm"
                title="Email Arjun"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column - High-End Profile Picture Card & Quick Stats */}
          <div
            className={`lg:col-span-5 flex flex-col items-center gap-6 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="relative group w-full max-w-md">
              {/* Ambient Accent Glow backdrop */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#23395d] via-[#3a5a8c] to-[#0f172a] rounded-[2.5rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative glass-card rounded-[2rem] p-4 sm:p-6 border border-slate-300 shadow-2xl flex flex-col items-center text-center space-y-4">
                
                {/* Profile Image Frame */}
                <div className="relative w-full aspect-[4/4.2] rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-slate-100 group">
                  <img
                    src="/arjun-profile.jpg"
                    alt="Arjun Krishnaa V - Software Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "C:/Users/Arjun/.gemini/antigravity/brain/335c47c2-7e82-40ed-859b-1586358b8b44/.user_uploaded/media_1787412770497.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-sans font-extrabold tracking-widest uppercase bg-white/20 backdrop-blur-xl px-3.5 py-1.5 rounded-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] drop-shadow-md flex items-center gap-2 text-white text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-sky-300 drop-shadow animate-pulse" /> Arjun Krishnaa V
                    </span>
                    <span className="bg-emerald-500/80 backdrop-blur-xl border border-emerald-300/50 text-white font-sans font-extrabold px-3 py-1 rounded-xl flex items-center gap-1.5 text-[11px] shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Active
                    </span>
                  </div>
                </div>

                {/* Quick Stat Badges */}
                <div className="grid grid-cols-3 gap-2.5 w-full pt-1">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-300 text-center shadow-sm">
                    <span className="text-base font-black text-[#23395d] font-mono block">2</span>
                    <span className="text-[10px] text-slate-900 font-mono font-bold block leading-tight">Internships</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-300 text-center shadow-sm">
                    <span className="text-base font-black text-[#23395d] font-mono block">2</span>
                    <span className="text-[10px] text-slate-900 font-mono font-bold block leading-tight">Projects</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-300 text-center shadow-sm">
                    <span className="text-base font-black text-[#23395d] font-mono block">AWS</span>
                    <span className="text-[10px] text-slate-900 font-mono font-bold block leading-tight">Certified</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

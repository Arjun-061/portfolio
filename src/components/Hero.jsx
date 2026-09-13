import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero({ onOpenResume, theme }) {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const isDark = theme === 'dark';

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
    const starCount = isSmallScreen ? 85 : 175;

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

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
      radius: window.innerWidth < 768 ? 170 : 250,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Galaxy Star Palette: tuned for Dark & Light Themes
    const darkStarColors = [
      '255, 255, 255', // Diamond white
      '255, 255, 255', // Diamond white
      '226, 192, 141', // Warm champagne starlight (harmonized with Arjun photo)
      '243, 210, 153', // Solar gold
      '186, 230, 253', // Celestial icy blue
      '216, 180, 254', // Starlight nebula violet
    ];

    const lightStarColors = [
      '35, 57, 93',    // Royal starlight navy
      '35, 57, 93',    // Royal navy
      '59, 130, 246',  // Cosmic sapphire
      '15, 23, 42',    // Deep slate
      '180, 130, 60',  // Warm solar bronze
    ];

    const palette = isDark ? darkStarColors : lightStarColors;

    // Create multi-tier Galaxy Stars with depth, twinkling & diffraction flares
    const stars = Array.from({ length: starCount }, () => {
      const depth = Math.random(); // 0 = distant micro star, 1 = radiant foreground star
      let radius;
      if (depth < 0.65) {
        radius = 0.5 + Math.random() * 0.7; // Tiny background star
      } else if (depth < 0.88) {
        radius = 1.2 + Math.random() * 0.8; // Midfield star
      } else {
        radius = 2.0 + Math.random() * 1.2; // Brilliant foreground star
      }

      const speedFactor = 0.15 + depth * 0.25;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedFactor,
        vy: (Math.random() - 0.5) * speedFactor,
        depth,
        radius,
        baseAlpha: 0.35 + depth * 0.45,
        twinkleSpeed: 0.015 + Math.random() * 0.035,
        twinklePhase: Math.random() * Math.PI * 2,
        colorRgb: palette[Math.floor(Math.random() * palette.length)],
        hasFlare: depth > 0.88, // Prominent stars have 4-point diffraction cross flares
      };
    });

    // Shooting Stars / Cosmic Meteors
    const meteors = [];
    let lastMeteorTime = 0;

    const spawnMeteor = (now) => {
      if (now - lastMeteorTime > 3200 && Math.random() < 0.035 && meteors.length < 2) {
        lastMeteorTime = now;
        const startX = Math.random() * width * 0.85;
        const startY = Math.random() * height * 0.45;
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.35;
        const speed = 7 + Math.random() * 5;
        meteors.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          tailLength: 70 + Math.random() * 45,
          alpha: 1,
          decay: 0.016 + Math.random() * 0.01,
        });
      }
    };

    let startTime = performance.now();

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      const now = performance.now();
      const elapsed = (now - startTime) * 0.001;

      // 1. Subtle galactic nebula dust glow in the background
      if (isDark) {
        const nebulaGrad1 = ctx.createRadialGradient(
          width * 0.3, height * 0.4, 0,
          width * 0.3, height * 0.4, width * 0.45
        );
        nebulaGrad1.addColorStop(0, 'rgba(226, 192, 141, 0.035)');
        nebulaGrad1.addColorStop(0.6, 'rgba(56, 189, 248, 0.015)');
        nebulaGrad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = nebulaGrad1;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Gravitational Magnetic Attraction & Constellation Filaments
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Gravitational attraction towards mouse pointer
        if (mouse.active) {
          const dx = mouse.x - s.x;
          const dy = mouse.y - s.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const pullFactor = 1 - dist / mouse.radius;
            const nx = dx / dist;
            const ny = dy / dist;
            // Tangential vector creates a subtle orbital swirl around the cursor
            const tx = -ny;
            const ty = nx;

            if (dist > 36) {
              const pull = pullFactor * pullFactor * 2.2;
              const swirl = pullFactor * 0.8;
              s.x += (nx * pull + tx * swirl);
              s.y += (ny * pull + ty * swirl);
              s.vx += nx * pullFactor * 0.06;
              s.vy += ny * pullFactor * 0.06;
            } else {
              // Gentle inner halo orbit cushion so stars do not collapse into a single point
              const cushion = (1 - dist / 36) * 1.1;
              s.x -= nx * cushion;
              s.y -= ny * cushion;
              s.x += tx * 1.6;
              s.y += ty * 1.6;
            }
          }
        }

      }

      // 3. Render Stars with Real Starlight Twinkle & Diffraction Spikes
      stars.forEach((s) => {
        // Apply gentle velocity damping to preserve smooth organic celestial drift
        s.vx *= 0.99;
        s.vy *= 0.99;

        // Keep gentle continuous background drift
        const speed = Math.sqrt(s.vx * s.vx + s.vy * s.vy);
        if (speed < 0.1) {
          s.vx += (Math.random() - 0.5) * 0.08;
          s.vy += (Math.random() - 0.5) * 0.08;
        } else if (speed > 2.0) {
          s.vx = (s.vx / speed) * 2.0;
          s.vy = (s.vy / speed) * 2.0;
        }

        s.x += s.vx;
        s.y += s.vy;

        // Smooth boundary wrapping for infinite galaxy feel
        if (s.x < -10) s.x = width + 10;
        else if (s.x > width + 10) s.x = -10;
        if (s.y < -10) s.y = height + 10;
        else if (s.y > height + 10) s.y = -10;

        // Calculate twinkling luminance
        const twinkle = Math.sin(elapsed * s.twinkleSpeed * 60 + s.twinklePhase);
        const currentAlpha = Math.max(0.12, Math.min(1, s.baseAlpha + twinkle * 0.28));

        // Draw star core and soft starlight aura
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.colorRgb}, ${currentAlpha})`;
        ctx.shadowBlur = s.radius > 1.8 ? 9 : 4;
        ctx.shadowColor = `rgba(${s.colorRgb}, ${currentAlpha * 0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw 4-point cross diffraction flare for brilliant foreground stars
        if (s.hasFlare && currentAlpha > 0.55) {
          const flareLen = s.radius * (3.0 + twinkle * 0.8);
          ctx.beginPath();
          ctx.moveTo(s.x - flareLen, s.y);
          ctx.lineTo(s.x + flareLen, s.y);
          ctx.moveTo(s.x, s.y - flareLen);
          ctx.lineTo(s.x, s.y + flareLen);
          ctx.strokeStyle = `rgba(${s.colorRgb}, ${currentAlpha * 0.35})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      });

      // 4. Update and Draw Shooting Stars (Cosmic Meteors)
      spawnMeteor(now);
      for (let m = meteors.length - 1; m >= 0; m--) {
        const met = meteors[m];
        met.x += met.vx;
        met.y += met.vy;
        met.alpha -= met.decay;

        if (met.alpha <= 0 || met.x > width + 120 || met.y > height + 120) {
          meteors.splice(m, 1);
          continue;
        }

        const hyp = Math.hypot(met.vx, met.vy);
        const tailX = met.x - (met.vx / hyp) * met.tailLength;
        const tailY = met.y - (met.vy / hyp) * met.tailLength;

        const grad = ctx.createLinearGradient(tailX, tailY, met.x, met.y);
        if (isDark) {
          grad.addColorStop(0, 'rgba(243, 210, 153, 0)');
          grad.addColorStop(0.7, `rgba(226, 192, 141, ${met.alpha * 0.45})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${met.alpha * 0.95})`);
        } else {
          grad.addColorStop(0, 'rgba(35, 57, 93, 0)');
          grad.addColorStop(0.7, `rgba(59, 130, 246, ${met.alpha * 0.4})`);
          grad.addColorStop(1, `rgba(35, 57, 93, ${met.alpha * 0.85})`);
        }

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(met.x, met.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Meteor bright glowing head
        ctx.beginPath();
        ctx.arc(met.x, met.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${met.alpha})`
          : `rgba(35, 57, 93, ${met.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = isDark ? '#ffffff' : '#23395d';
        ctx.fill();
        ctx.shadowBlur = 0;
      }



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
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Ambient Glow Spots */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] blur-[120px] rounded-full pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-[#e2c08d]/10' : 'bg-[#23395d]/8'
        }`}
      />
      <div
        className={`absolute top-1/3 left-1/4 w-[380px] h-[280px] blur-[100px] rounded-full pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-[#79a96e]/10' : 'bg-slate-300/20'
        }`}
      />

      {/* Particle Canvas Layer: Stars of the Galaxy */}
      <div className="absolute inset-0 pointer-events-none opacity-85">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill Badge */}
            <div
              className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border shadow-sm backdrop-blur-xl transition-all duration-700 ease-out ${
                isDark
                  ? 'border-[#e2c08d]/30 bg-stone-900/80 text-[#e2c08d]'
                  : 'border-slate-300 bg-white/80 text-[#23395d]'
              } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isDark ? 'bg-[#e2c08d]' : 'bg-[#23395d]'
                  }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                    isDark ? 'bg-[#e2c08d]' : 'bg-[#23395d]'
                  }`}
                />
              </span>
              <span className="text-xs font-mono font-extrabold tracking-wide uppercase">
                Open for Software Engineering Roles
              </span>
            </div>

            {/* Main Title & Subtitle */}
            <div
              className={`space-y-3 transition-all duration-700 ease-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>Hi, I'm </span>
                <span className="gradient-text">Arjun Krishnaa</span>
              </h1>
              <div className="flex items-center gap-2">
                <div
                  className={`h-0.5 w-6 rounded-full ${
                    isDark ? 'bg-[#e2c08d]' : 'bg-[#23395d]'
                  }`}
                />
                <p
                  className={`text-xl sm:text-2xl font-bold font-mono tracking-wide ${
                    isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'
                  }`}
                >
                  Software Developer
                </p>
              </div>
            </div>

            {/* Summary Text (Words clearly visible) */}
            <p
              className={`text-base sm:text-lg font-medium leading-relaxed max-w-2xl transition-all duration-700 ease-out ${
                isDark ? 'text-stone-200' : 'text-[#0f172a]'
              } ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Computer Science undergraduate at V.S.B. College of Engineering Technical Campus with hands-on software development experience from internships at{' '}
              <strong className={isDark ? 'text-[#e2c08d] font-black' : 'text-[#23395d] font-black'}>
                Codec Technologies
              </strong>{' '}
              and{' '}
              <strong className={isDark ? 'text-[#e2c08d] font-black' : 'text-[#23395d] font-black'}>
                TailsMart
              </strong>. Proficient in Java, SQL, AWS, and modern web application development.
            </p>

            {/* Tech Badges */}
            <div
              className={`flex flex-wrap items-center gap-2 pt-1 transition-all duration-700 ease-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {['Java', 'SQL', 'AWS', 'Linux', 'Spring/OOP', 'REST APIs'].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border transition-all shadow-sm hover:-translate-y-0.5 ${
                    isDark
                      ? 'bg-stone-900/80 text-stone-100 border-white/20 hover:border-[#e2c08d] hover:text-[#e2c08d]'
                      : 'bg-white text-[#0f172a] border-slate-300 hover:border-[#23395d] hover:text-[#23395d]'
                  }`}
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              className={`flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto transition-all duration-700 ease-out ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <a
                href="#projects"
                className={`w-full sm:w-auto px-6 py-3.5 text-sm font-mono font-bold rounded-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 group ${
                  isDark
                    ? 'bg-[#e2c08d] hover:bg-[#f3d8a8] text-[#121014] font-black shadow-photo-gold'
                    : 'bg-[#23395d] hover:bg-[#1b2b47] text-white shadow-lg shadow-[#23395d]/30'
                }`}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className={`w-full sm:w-auto px-6 py-3.5 text-sm font-mono font-bold rounded-xl border transition-all flex items-center justify-center gap-2 group active:scale-95 shadow-sm ${
                  isDark
                    ? 'bg-stone-900/80 hover:bg-stone-800 border-white/20 text-white hover:border-[#e2c08d] hover:text-[#e2c08d]'
                    : 'bg-white hover:bg-slate-100 border-slate-300 text-[#0f172a] hover:border-[#23395d]'
                }`}
              >
                <FileText className={`w-4 h-4 group-hover:scale-110 transition-transform ${
                  isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'
                }`} />
                <span>Resume Preview</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                isDark ? 'text-stone-300' : 'text-slate-900'
              }`}>
                Connect:
              </span>
              <a
                href="https://github.com/Arjun-061"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition-all hover:-translate-y-0.5 shadow-sm ${
                  isDark
                    ? 'bg-stone-900 border-white/20 text-stone-200 hover:text-[#e2c08d] hover:border-[#e2c08d]'
                    : 'bg-white border-slate-300 text-[#0f172a] hover:text-[#23395d] hover:border-[#23395d]'
                }`}
                title="GitHub Profile"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com/in/arjun-krishnaa-v"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl border transition-all hover:-translate-y-0.5 shadow-sm ${
                  isDark
                    ? 'bg-stone-900 border-white/20 text-stone-200 hover:text-[#e2c08d] hover:border-[#e2c08d]'
                    : 'bg-white border-slate-300 text-[#0f172a] hover:text-[#23395d] hover:border-[#23395d]'
                }`}
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href="mailto:arjunkrishnaa23@gmail.com"
                className={`p-2.5 rounded-xl border transition-all hover:-translate-y-0.5 shadow-sm ${
                  isDark
                    ? 'bg-stone-900 border-white/20 text-stone-200 hover:text-[#e2c08d] hover:border-[#e2c08d]'
                    : 'bg-white border-slate-300 text-[#0f172a] hover:text-[#23395d] hover:border-[#23395d]'
                }`}
                title="Direct Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>

          </div>

          {/* Right Column: High-End Profile Card & Telemetry */}
          <div
            className={`lg:col-span-5 flex flex-col items-center gap-6 transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <div className="relative group w-full max-w-md">
              {/* Ambient Accent Glow backdrop */}
              <div
                className={`absolute -inset-1.5 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition duration-500 ${
                  isDark
                    ? 'bg-gradient-to-r from-[#e2c08d] via-[#79a96e] to-stone-700'
                    : 'bg-gradient-to-r from-[#23395d] via-[#3a5a8c] to-[#0f172a]'
                }`}
              />

              {/* Glass Card Container */}
              <div
                className={`relative glass-card rounded-[2.2rem] p-5 sm:p-6 border flex flex-col items-center text-center space-y-4 shadow-2xl ${
                  isDark ? 'border-white/20 bg-stone-900/90' : 'border-slate-300'
                }`}
              >
                {/* Profile Picture Frame */}
                <div className="relative w-full aspect-[4/4.2] rounded-2xl overflow-hidden border-2 border-white/40 shadow-xl bg-slate-100 group">
                  <img
                    src="/arjun-profile.jpg"
                    alt="Arjun Krishnaa V - Software Developer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "C:/Users/Arjun/.gemini/antigravity/brain/335c47c2-7e82-40ed-859b-1586358b8b44/.user_uploaded/media_1787412770497.jpg";
                    }}
                  />
                  
                  {/* Subtle bottom gradient tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11]/80 via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-mono font-extrabold tracking-wide uppercase bg-black/40 backdrop-blur-xl px-3.5 py-1.5 rounded-xl border border-white/30 shadow-md flex items-center gap-2 text-white text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" /> Arjun Krishnaa V
                    </span>
                    <span className="bg-emerald-600/90 backdrop-blur-xl border border-emerald-300/50 text-white font-mono font-extrabold px-3 py-1 rounded-xl flex items-center gap-1.5 text-[11px] shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Active
                    </span>
                  </div>
                </div>

                {/* Quick Telemetry / Stats Cards */}
                <div className="grid grid-cols-3 gap-2.5 w-full pt-1">
                  <div
                    className={`p-3 rounded-xl border text-center shadow-sm ${
                      isDark ? 'bg-stone-900 border-white/15' : 'bg-white border-slate-300'
                    }`}
                  >
                    <span
                      className={`text-xl font-black font-mono block ${
                        isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'
                      }`}
                    >
                      2
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                        isDark ? 'text-stone-300' : 'text-slate-900'
                      }`}
                    >
                      Internships
                    </span>
                  </div>

                  <div
                    className={`p-3 rounded-xl border text-center shadow-sm ${
                      isDark ? 'bg-stone-900 border-white/15' : 'bg-white border-slate-300'
                    }`}
                  >
                    <span
                      className={`text-xl font-black font-mono block ${
                        isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'
                      }`}
                    >
                      2
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                        isDark ? 'text-stone-300' : 'text-slate-900'
                      }`}
                    >
                      Projects
                    </span>
                  </div>

                  <div
                    className={`p-3 rounded-xl border text-center shadow-sm ${
                      isDark ? 'bg-stone-900 border-white/15' : 'bg-white border-slate-300'
                    }`}
                  >
                    <span
                      className={`text-base font-black font-mono block pt-0.5 ${
                        isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'
                      }`}
                    >
                      AWS
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                        isDark ? 'text-stone-300' : 'text-slate-900'
                      }`}
                    >
                      Certified
                    </span>
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

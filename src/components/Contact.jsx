import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, MapPin, Sparkles, MessageSquare, Briefcase, Code2, Loader2, AlertCircle, RotateCcw, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact({ theme }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const isDark = theme === 'dark';
  const emailAddress = "arjunkrishnaa23@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handlePresetTopic = (topic) => {
    setFormState((prev) => ({ ...prev, subject: topic }));
  };

  const handleDirectEmailFallback = () => {
    const subject = encodeURIComponent(formState.subject || `Message from ${formState.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(`Hi Arjun,\n\n${formState.message}\n\nBest regards,\n${formState.name || 'Visitor'} (${formState.email || 'No email provided'})`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (*)');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
      handleDirectEmailFallback();
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name.trim(),
          email: formState.email.trim(),
          subject: formState.subject.trim() || `Portfolio Message from ${formState.name}`,
          message: formState.message.trim(),
          from_name: formState.name.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Unable to deliver message right now. Please try direct email.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage('Network connection error. You can use the direct email button below to send your message.');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
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
            <MessageSquare className="w-3.5 h-3.5" /> Let's Connect
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>Get In Touch & </span>
            <span className="gradient-text">Collaborate</span>
          </h2>
          <p className={`text-base max-w-2xl font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
            Interested in discussing software engineering opportunities, technical projects, or general inquiries? Drop a message below!
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Status */}
          <Reveal variant="left" className="lg:col-span-5 space-y-4">
            
            {/* Availability Status Card */}
            <div
              className={`glass-card rounded-2xl p-5 border flex items-center gap-3.5 shadow-sm ${
                isDark
                  ? 'border-[#e2c08d]/30 bg-stone-900/90'
                  : 'border-[#23395d]/30 bg-[#23395d]/10'
              }`}
            >
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isDark ? 'bg-[#e2c08d]' : 'bg-[#23395d]'
                }`} />
                <span className={`relative inline-flex rounded-full h-3 w-3 ${
                  isDark ? 'bg-[#e2c08d]' : 'bg-[#23395d]'
                }`} />
              </span>
              <div>
                <h4 className={`text-sm font-black ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                  Currently Available
                </h4>
                <p className={`text-xs font-mono font-bold mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                  Open for Software Engineering Roles
                </p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div
              className={`glass-card rounded-2xl p-5 border flex items-center justify-between gap-3 transition-colors shadow-sm ${
                isDark
                  ? 'border-white/15 bg-stone-900/90 hover:border-[#e2c08d]'
                  : 'border-slate-300 hover:border-[#23395d]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`p-2.5 rounded-xl border ${
                    isDark
                      ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                      : 'bg-[#23395d]/15 border-[#23395d]/40 text-[#23395d]'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono font-bold uppercase ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                    Direct Email
                  </span>
                  <p className={`text-sm font-black font-mono ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                    {emailAddress}
                  </p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`px-3.5 py-1.5 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95 ${
                  isDark
                    ? 'border-white/15 bg-stone-800 text-stone-200 hover:border-[#e2c08d] hover:text-[#e2c08d]'
                    : 'border-slate-300 bg-white hover:bg-slate-100 text-[#0f172a] hover:border-[#23395d] hover:text-[#23395d]'
                }`}
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <Check className={`w-3.5 h-3.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                ) : (
                  <Copy className={`w-3.5 h-3.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                )}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/Arjun-061"
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card rounded-2xl p-5 border flex items-center justify-between gap-3 transition-all hover:translate-x-1 shadow-sm ${
                isDark
                  ? 'border-white/15 bg-stone-900/90 hover:border-[#e2c08d]'
                  : 'border-slate-300 hover:border-[#23395d]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-2.5 rounded-xl border shadow-sm ${
                  isDark ? 'border-white/15 bg-stone-800 text-[#e2c08d]' : 'border-slate-300 bg-white text-[#23395d]'
                }`}>
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono font-bold uppercase ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                    GitHub Profile
                  </span>
                  <p className={`text-sm font-black font-mono ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                    @Arjun-061
                  </p>
                </div>
              </div>
              <span className={`text-xs font-mono font-bold ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>Explore ↗</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/arjun-krishnaa-v"
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card rounded-2xl p-5 border flex items-center justify-between gap-3 transition-all hover:translate-x-1 shadow-sm ${
                isDark
                  ? 'border-white/15 bg-stone-900/90 hover:border-[#e2c08d]'
                  : 'border-slate-300 hover:border-[#23395d]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className={`p-2.5 rounded-xl border shadow-sm ${
                  isDark ? 'border-white/15 bg-stone-800 text-[#e2c08d]' : 'border-slate-300 bg-white text-[#23395d]'
                }`}>
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-[10px] font-mono font-bold uppercase ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                    LinkedIn Network
                  </span>
                  <p className={`text-sm font-black font-mono ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                    Arjun Krishnaa V
                  </p>
                </div>
              </div>
              <span className={`text-xs font-mono font-bold ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>Connect ↗</span>
            </a>

            {/* Location Card */}
            <div className={`glass-card rounded-2xl p-5 border flex items-center gap-3.5 shadow-sm ${
              isDark ? 'border-white/15 bg-stone-900/90' : 'border-slate-300'
            }`}>
              <div className={`p-2.5 rounded-xl border ${
                isDark
                  ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                  : 'bg-[#23395d]/15 border-[#23395d]/40 text-[#23395d]'
              }`}>
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-[10px] font-mono font-bold uppercase ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                  Location
                </span>
                <p className={`text-sm font-black ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                  Tamil Nadu, India
                </p>
              </div>
            </div>

          </Reveal>

          {/* Right Column: Interactive Message Form */}
          <Reveal
            variant="right"
            delay={100}
            className={`lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border shadow-xl ${
              isDark ? 'border-white/15 bg-stone-900/90' : 'border-slate-300'
            }`}
          >
            <h3 className={`text-2xl font-black tracking-tight mb-2 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
              Send Me a Message
            </h3>
            <p className={`text-xs font-mono font-bold mb-4 ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
              Click a preset topic or compose your custom inquiry below:
            </p>

            {/* Preset Topic Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                type="button"
                onClick={() => handlePresetTopic('Hiring / Recruitment Opportunity')}
                className={`px-3.5 py-2 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                  formState.subject === 'Hiring / Recruitment Opportunity'
                    ? isDark
                      ? 'bg-[#e2c08d] text-[#121014] border-[#e2c08d] font-black'
                      : 'bg-[#23395d] text-white border-[#23395d]'
                    : isDark
                    ? 'bg-stone-800 border-white/15 text-stone-200 hover:border-[#e2c08d]'
                    : 'bg-white border-slate-300 text-[#0f172a] hover:bg-slate-100 hover:border-[#23395d]'
                }`}
              >
                <Briefcase className={`w-3.5 h-3.5 ${isDark ? 'text-current' : 'text-[#23395d]'}`} />
                Hiring / Role
              </button>
              <button
                type="button"
                onClick={() => handlePresetTopic('Software Project Collaboration')}
                className={`px-3.5 py-2 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                  formState.subject === 'Software Project Collaboration'
                    ? isDark
                      ? 'bg-[#e2c08d] text-[#121014] border-[#e2c08d] font-black'
                      : 'bg-[#23395d] text-white border-[#23395d]'
                    : isDark
                    ? 'bg-stone-800 border-white/15 text-stone-200 hover:border-[#e2c08d]'
                    : 'bg-white border-slate-300 text-[#0f172a] hover:bg-slate-100 hover:border-[#23395d]'
                }`}
              >
                <Code2 className={`w-3.5 h-3.5 ${isDark ? 'text-current' : 'text-[#23395d]'}`} />
                Project Collaboration
              </button>
              <button
                type="button"
                onClick={() => handlePresetTopic('General Technical Inquiry')}
                className={`px-3.5 py-2 rounded-lg border text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-sm ${
                  formState.subject === 'General Technical Inquiry'
                    ? isDark
                      ? 'bg-[#e2c08d] text-[#121014] border-[#e2c08d] font-black'
                      : 'bg-[#23395d] text-white border-[#23395d]'
                    : isDark
                    ? 'bg-stone-800 border-white/15 text-stone-200 hover:border-[#e2c08d]'
                    : 'bg-white border-slate-300 text-[#0f172a] hover:bg-slate-100 hover:border-[#23395d]'
                }`}
              >
                <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-current' : 'text-[#23395d]'}`} />
                General Inquiry
              </button>
            </div>

            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-up">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                  isDark ? 'bg-[#e2c08d] text-[#121014]' : 'bg-[#23395d] text-white'
                }`}>
                  <Check className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className={`text-xl font-black ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                    Message Sent Successfully!
                  </h4>
                  <p className={`text-sm max-w-sm font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
                    Thank you for reaching out. Arjun will review your note and respond back shortly at <span className={`font-bold ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>{emailAddress}</span>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className={`mt-2 px-5 py-2.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all ${
                    isDark
                      ? 'bg-[#e2c08d]/15 hover:bg-[#e2c08d]/25 border-[#e2c08d]/30 text-[#e2c08d]'
                      : 'bg-[#23395d]/10 hover:bg-[#23395d]/20 border-[#23395d]/30 text-[#23395d]'
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium space-y-2 animate-fade-up">
                    <div className="flex items-center gap-2 font-bold text-rose-900">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage || 'Failed to send message.'}</span>
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        type="button"
                        onClick={handleDirectEmailFallback}
                        className={`inline-flex items-center gap-1 text-xs font-bold hover:underline ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Send directly via Email Client
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono font-bold ${isDark ? 'text-stone-200' : 'text-slate-900'}`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      disabled={status === 'loading'}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full rounded-xl px-4 py-3 text-sm transition-all shadow-sm ${
                        isDark
                          ? 'bg-stone-800 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-[#e2c08d]'
                          : 'bg-white border border-slate-300 text-[#0f172a] placeholder-slate-500 focus:outline-none focus:border-[#23395d]'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono font-bold ${isDark ? 'text-stone-200' : 'text-slate-900'}`}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      disabled={status === 'loading'}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full rounded-xl px-4 py-3 text-sm transition-all shadow-sm ${
                        isDark
                          ? 'bg-stone-800 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-[#e2c08d]'
                          : 'bg-white border border-slate-300 text-[#0f172a] placeholder-slate-500 focus:outline-none focus:border-[#23395d]'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-mono font-bold ${isDark ? 'text-stone-200' : 'text-slate-900'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    disabled={status === 'loading'}
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Software Developer Position"
                    className={`w-full rounded-xl px-4 py-3 text-sm transition-all shadow-sm ${
                      isDark
                        ? 'bg-stone-800 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-[#e2c08d]'
                        : 'bg-white border border-slate-300 text-[#0f172a] placeholder-slate-500 focus:outline-none focus:border-[#23395d]'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-mono font-bold ${isDark ? 'text-stone-200' : 'text-slate-900'}`}>
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    disabled={status === 'loading'}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full rounded-xl px-4 py-3 text-sm resize-none transition-all shadow-sm ${
                      isDark
                        ? 'bg-stone-800 border border-white/20 text-white placeholder-stone-400 focus:outline-none focus:border-[#e2c08d]'
                        : 'bg-white border border-slate-300 text-[#0f172a] placeholder-slate-500 resize-none focus:outline-none focus:border-[#23395d]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-3.5 px-6 rounded-xl font-mono font-bold text-sm transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${
                    isDark
                      ? 'bg-[#e2c08d] hover:bg-[#f3d8a8] text-[#121014] font-black shadow-photo-gold'
                      : 'bg-[#23395d] hover:bg-[#1b2b47] text-white shadow-md'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </Reveal>

        </div>

      </div>
    </section>
  );
}

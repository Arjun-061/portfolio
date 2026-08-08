import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, MapPin, Sparkles, MessageSquare, Briefcase, Code2 } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "arjunkrishnaa23@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handlePresetTopic = (topic) => {
    setFormState((prev) => ({ ...prev, subject: topic }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d] text-xs font-mono font-extrabold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" /> Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            Get In Touch & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-slate-900 font-medium text-base max-w-2xl">
            Interested in discussing software engineering opportunities, technical projects, or general inquiries? Drop a message below!
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Status */}
          <Reveal variant="left" className="lg:col-span-5 space-y-4">
            
            {/* Availability Status Card */}
            <div className="glass-card rounded-2xl p-5 border border-[#23395d]/40 bg-[#23395d]/10 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23395d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#23395d]"></span>
              </span>
              <div>
                <h4 className="text-sm font-black text-[#0f172a]">Currently Available</h4>
                <p className="text-xs text-slate-950 font-mono font-bold mt-0.5">Open for Software Engineering Roles</p>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-300 flex items-center justify-between gap-3 hover:border-[#23395d] transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-950 uppercase">Direct Email</span>
                  <p className="text-sm font-black text-[#0f172a] font-mono">{emailAddress}</p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-mono font-extrabold text-[#0f172a] flex items-center gap-1.5 transition-all shadow-sm"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#23395d]" /> : <Copy className="w-3.5 h-3.5 text-[#23395d]" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/Arjun-061"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border border-slate-300 flex items-center justify-between gap-3 hover:border-[#23395d] transition-all hover:translate-x-1"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-300 text-[#23395d] shadow-sm">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-950 uppercase">GitHub Profile</span>
                  <p className="text-sm font-black text-[#0f172a] font-mono">@Arjun-061</p>
                </div>
              </div>
              <span className="text-xs text-[#23395d] font-mono font-black">Visit ↗</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/arjun-krishnaa-v"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border border-slate-300 flex items-center justify-between gap-3 hover:border-[#23395d] transition-all hover:translate-x-1"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-300 text-[#23395d] shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-950 uppercase">LinkedIn Profile</span>
                  <p className="text-sm font-black text-[#0f172a] font-mono">Arjun krishnaa V</p>
                </div>
              </div>
              <span className="text-xs text-[#23395d] font-mono font-black">Connect ↗</span>
            </a>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-300 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-950 uppercase">Location</span>
                <p className="text-sm font-black text-[#0f172a]">Tamil Nadu, India</p>
              </div>
            </div>

          </Reveal>

          {/* Right Column: Interactive Message Form */}
          <Reveal variant="right" delay={100} className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-300">
            <h3 className="text-xl font-black text-[#0f172a] mb-2">Send Me a Message</h3>
            <p className="text-xs font-mono font-bold text-slate-900 mb-4">Click a preset topic or write your custom message below:</p>

            {/* Preset Topics */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                type="button"
                onClick={() => handlePresetTopic('Hiring / Recruitment Opportunity')}
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-[#0f172a] flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#23395d]" />
                Hiring / Opportunity
              </button>
              <button
                type="button"
                onClick={() => handlePresetTopic('Software Project Collaboration')}
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-[#0f172a] flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Code2 className="w-3.5 h-3.5 text-[#23395d]" />
                Software Project
              </button>
              <button
                type="button"
                onClick={() => handlePresetTopic('General Technical Inquiry')}
                className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-[#0f172a] flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#23395d]" />
                General Inquiry
              </button>
            </div>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#23395d] text-white flex items-center justify-center shadow-lg">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-[#0f172a]">Message Sent Successfully!</h4>
                <p className="text-sm font-medium text-slate-900 max-w-sm">
                  Thank you for reaching out. Arjun will review your message and reply back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-900">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0f172a] font-medium placeholder-slate-500 focus:outline-none focus:border-[#23395d] transition-colors shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-900">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0f172a] font-medium placeholder-slate-500 focus:outline-none focus:border-[#23395d] transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-900">Subject</label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Software Developer Position"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0f172a] font-medium placeholder-slate-500 focus:outline-none focus:border-[#23395d] transition-colors shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-900">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-[#0f172a] font-medium placeholder-slate-500 focus:outline-none focus:border-[#23395d] transition-colors resize-none shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#23395d] hover:bg-[#1b2b47] text-white font-black text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </Reveal>

        </div>

      </div>
    </section>
  );
}

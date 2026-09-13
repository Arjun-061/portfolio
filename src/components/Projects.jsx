import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, LineChart, ShieldCheck, 
  Activity, CheckCircle, Search, UserCheck, Shield, Sparkles
} from 'lucide-react';
import Reveal from './Reveal';

export default function Projects({ theme }) {
  const [activeTab, setActiveTab] = useState('stock');
  const isDark = theme === 'dark';

  // --- Stock Predictor Interactive Demo State ---
  const [selectedTicker, setSelectedTicker] = useState('NVDA');
  const [showSMA, setShowSMA] = useState(true);
  const [showRSI, setShowRSI] = useState(true);
  const [isLiveWs, setIsLiveWs] = useState(true);
  const [livePrice, setLivePrice] = useState(128.45);
  const [wsPing, setWsPing] = useState(18);

  useEffect(() => {
    if (!isLiveWs) return;
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.48) * 1.5;
      setLivePrice((prev) => parseFloat((prev + delta).toFixed(2)));
      setWsPing(Math.floor(12 + Math.random() * 15));
    }, 1500);
    return () => clearInterval(interval);
  }, [isLiveWs]);

  // --- Asset Management Interactive Demo State ---
  const [role, setRole] = useState('admin');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [assetList, setAssetList] = useState([
    { id: 'AST-101', name: 'MacBook Pro M3 Max 16"', category: 'Hardware', dept: 'Engineering', status: 'IN USE', owner: 'Arjun K.', depRate: '15%/yr' },
    { id: 'AST-102', name: 'Dell UltraSharp 4K 32"', category: 'Peripheral', dept: 'Design', status: 'IN USE', owner: 'Sarah M.', depRate: '20%/yr' },
    { id: 'AST-103', name: 'Cisco Enterprise Switch', category: 'Networking', dept: 'IT Infrastructure', status: 'IN REPAIR', owner: 'Tech Lab', depRate: '10%/yr' },
    { id: 'AST-104', name: 'JetBrains All Products License', category: 'Software', dept: 'Engineering', status: 'IN USE', owner: 'Dev Team', depRate: 'N/A' },
    { id: 'AST-105', name: 'ThinkPad P1 Gen 5', category: 'Hardware', dept: 'QA Testing', status: 'RETIRED', owner: 'Unassigned', depRate: '25%/yr' },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setAssetList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const filteredAssets = assetList.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <section id="projects" className="py-24 relative">
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
            <FolderGit2 className="w-3.5 h-3.5" /> Featured Engineering Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            <span className={isDark ? 'text-white' : 'text-[#0f172a]'}>Projects with </span>
            <span className="gradient-text">Interactive Live Demos</span>
          </h2>
          <p className={`text-base max-w-2xl font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
            Explore functional interactive widgets demonstrating real-time analytics, API streaming, and Java SQL database architectures.
          </p>

          {/* Project Switcher Tabs */}
          <div
            className={`flex items-center p-1.5 rounded-2xl border shadow-sm mt-6 ${
              isDark ? 'border-white/15 bg-stone-900/90' : 'border-slate-300 bg-white'
            }`}
          >
            <button
              onClick={() => setActiveTab('stock')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === 'stock'
                  ? isDark
                    ? 'bg-[#e2c08d] text-[#121014] font-black shadow-sm'
                    : 'bg-[#23395d] text-white shadow-md'
                  : isDark
                  ? 'text-stone-300 hover:text-white'
                  : 'text-[#0f172a] hover:text-[#23395d]'
              }`}
            >
              <LineChart className="w-4 h-4" />
              <span>Stock Analytics Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab('asset')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono font-bold text-xs sm:text-sm transition-all duration-300 ${
                activeTab === 'asset'
                  ? isDark
                    ? 'bg-[#e2c08d] text-[#121014] font-black shadow-sm'
                    : 'bg-[#23395d] text-white shadow-md'
                  : isDark
                  ? 'text-stone-300 hover:text-white'
                  : 'text-[#0f172a] hover:text-[#23395d]'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Asset Management System</span>
            </button>
          </div>
        </Reveal>

        {/* ---------------- PROJECT 1: STOCK ANALYTICS DASHBOARD ---------------- */}
        {activeTab === 'stock' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-up">
            
            {/* Left Column: Project Overview */}
            <Reveal
              variant="left"
              className={`lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border space-y-6 shadow-sm ${
                isDark ? 'border-white/15 bg-stone-900/90' : 'border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-black border ${
                    isDark
                      ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                      : 'bg-[#23395d]/10 border-[#23395d]/30 text-[#23395d]'
                  }`}
                >
                  Real-Time Market Analytics
                </span>
                <span className={`text-xs font-mono font-bold ${isDark ? 'text-stone-300' : 'text-slate-800'}`}>
                  Plotly.js • WebSockets
                </span>
              </div>

              <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                Stock Analytics Web App
              </h3>
              
              <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
                A full-stack financial analytics web application rendering interactive multi-pane price charts and technical indicators with live simulated WebSocket streaming.
              </p>

              <div className="space-y-3">
                <h4 className={`text-xs font-mono uppercase tracking-wider font-black ${
                  isDark ? 'text-stone-300' : 'text-slate-950'
                }`}>
                  Key Architectural Highlights:
                </h4>
                <ul className={`space-y-2.5 text-xs sm:text-sm font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                    <span><strong className={isDark ? 'text-white' : 'text-[#0f172a]'}>Technical Indicators:</strong> Dynamic SVG calculations for SMA-20 and RSI (14) momentum overlays.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                    <span><strong className={isDark ? 'text-white' : 'text-[#0f172a]'}>Live Feed Simulation:</strong> Real-time streaming price updates with auto-heartbeat & latency monitor.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                    <span><strong className={isDark ? 'text-white' : 'text-[#0f172a]'}>Interactive Visuals:</strong> High-refresh candle simulation and responsive ticker selector.</span>
                  </li>
                </ul>
              </div>

              <div className={`flex flex-wrap gap-2 pt-3 border-t ${isDark ? 'border-white/15' : 'border-slate-300'}`}>
                {['JavaScript', 'Plotly.js', 'WebSockets', 'HTML5', 'Python'].map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border shadow-sm ${
                      isDark
                        ? 'bg-stone-800 border-white/15 text-stone-200'
                        : 'border-slate-300 bg-white text-[#0f172a]'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Right Column: Live Interactive Demo Widget */}
            <Reveal
              variant="right"
              delay={100}
              className={`lg:col-span-7 glass-card rounded-2xl p-6 border space-y-5 shadow-xl ${
                isDark ? 'border-white/15 bg-stone-900/90' : 'border-slate-300'
              }`}
            >
              {/* Demo Toolbar */}
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b pb-4 ${
                isDark ? 'border-white/15' : 'border-slate-300'
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                    Ticker:
                  </span>
                  <div className="flex gap-1.5">
                    {['NVDA', 'AAPL', 'TSLA', 'MSFT'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTicker(t)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-black transition-all ${
                          selectedTicker === t
                            ? isDark
                              ? 'bg-[#e2c08d] text-[#121014] font-black shadow-sm'
                              : 'bg-[#23395d] text-white shadow-sm'
                            : isDark
                            ? 'bg-stone-800 text-stone-200 hover:text-white border border-white/10'
                            : 'bg-slate-100 text-[#0f172a] hover:text-[#23395d] border border-slate-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsLiveWs(!isLiveWs)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold border transition-all ${
                      isLiveWs
                        ? isDark
                          ? 'bg-[#e2c08d]/20 border-[#e2c08d] text-[#e2c08d]'
                          : 'bg-[#23395d] text-white border-[#23395d] shadow-sm'
                        : isDark
                        ? 'bg-stone-800 border-white/15 text-stone-300'
                        : 'bg-slate-100 border-slate-300 text-slate-700'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isLiveWs ? 'bg-emerald-400 animate-ping' : 'bg-slate-400'
                      }`}
                    />
                    <span>{isLiveWs ? `WebSocket Live (${wsPing}ms)` : 'Feed Paused'}</span>
                  </button>
                </div>
              </div>

              {/* Live Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className={`p-3.5 rounded-xl border shadow-sm ${
                  isDark ? 'border-white/15 bg-stone-800' : 'border-slate-300 bg-white'
                }`}>
                  <span className={`text-[10px] font-mono font-bold uppercase block ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                    Live Spot Price
                  </span>
                  <div className={`text-xl font-black font-mono flex items-center gap-1.5 mt-0.5 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                    ${livePrice}
                    <span className={`text-xs font-bold ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>+1.82%</span>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border shadow-sm ${
                  isDark ? 'border-[#e2c08d] bg-stone-800' : 'border-[#23395d] bg-white'
                }`}>
                  <span className={`text-[10px] font-mono font-extrabold uppercase block ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                    Projected Range
                  </span>
                  <div className={`text-xl font-black font-mono flex items-center gap-1.5 mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                    ${(livePrice * 1.024).toFixed(2)}
                    <span className="text-xs font-bold">Bullish</span>
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border shadow-sm col-span-2 sm:col-span-1 ${
                  isDark ? 'border-white/15 bg-stone-800' : 'border-slate-300 bg-white'
                }`}>
                  <span className={`text-[10px] font-mono font-bold uppercase block ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                    Data Accuracy
                  </span>
                  <div className={`text-xl font-black font-mono mt-0.5 ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                    99.4%
                  </div>
                </div>
              </div>

              {/* Interactive SVG Chart Container */}
              <div className={`rounded-xl p-4 border space-y-3 shadow-sm ${
                isDark ? 'border-white/15 bg-stone-950/70' : 'border-slate-300 bg-white'
              }`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={`flex items-center gap-1.5 font-bold ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                    <Activity className={`w-4 h-4 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} /> {selectedTicker} / USD 1D Candle Overlay
                  </span>
                  
                  {/* Indicator Toggles */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowSMA(!showSMA)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all ${
                        showSMA
                          ? isDark
                            ? 'bg-[#e2c08d] text-[#121014] font-black'
                            : 'bg-[#23395d] text-white shadow-sm'
                          : isDark
                          ? 'bg-stone-800 text-stone-300 border border-white/10'
                          : 'bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      SMA 20
                    </button>
                    <button
                      onClick={() => setShowRSI(!showRSI)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all ${
                        showRSI
                          ? isDark
                            ? 'bg-[#e2c08d] text-[#121014] font-black'
                            : 'bg-[#23395d] text-white shadow-sm'
                          : isDark
                          ? 'bg-stone-800 text-stone-300 border border-white/10'
                          : 'bg-slate-100 text-slate-700 border border-slate-300'
                      }`}
                    >
                      RSI 14
                    </button>
                  </div>
                </div>

                {/* SVG Visualizing Dynamic Chart */}
                <div className="h-44 w-full relative overflow-hidden flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    <line x1="0" y1="30" x2="400" y2="30" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(35,57,93,0.15)"} strokeDasharray="4" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(35,57,93,0.15)"} strokeDasharray="4" />
                    <line x1="0" y1="120" x2="400" y2="120" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(35,57,93,0.15)"} strokeDasharray="4" />

                    <defs>
                      <linearGradient id="chartThemeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={isDark ? "#e2c08d" : "#23395d"} stopOpacity="0.35" />
                        <stop offset="100%" stopColor={isDark ? "#e2c08d" : "#23395d"} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 0 110 Q 50 130 100 80 T 200 60 T 300 40 T 400 25 L 400 150 L 0 150 Z"
                      fill="url(#chartThemeGrad)"
                    />

                    <path
                      d="M 0 110 Q 50 130 100 80 T 200 60 T 300 40 T 400 25"
                      fill="none"
                      stroke={isDark ? "#e2c08d" : "#23395d"}
                      strokeWidth="2.5"
                    />

                    {showSMA && (
                      <path
                        d="M 0 120 Q 60 110 120 90 T 240 70 T 360 45 T 400 35"
                        fill="none"
                        stroke={isDark ? "#ffffff" : "#0f172a"}
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                    )}

                    <circle cx="400" cy="25" r="4" fill={isDark ? "#e2c08d" : "#23395d"} />
                    <circle cx="400" cy="25" r="9" fill={isDark ? "#e2c08d" : "#23395d"} opacity="0.4" className="animate-ping" />
                  </svg>
                </div>

                <div className={`flex items-center justify-between text-[11px] font-mono font-bold pt-1 ${isDark ? 'text-stone-300' : 'text-slate-800'}`}>
                  <span>09:30 AM</span>
                  <span>12:00 PM</span>
                  <span>02:30 PM</span>
                  <span>04:00 PM (Close)</span>
                </div>
              </div>

            </Reveal>

          </div>
        )}

        {/* ---------------- PROJECT 2: ASSET MANAGEMENT SYSTEM ---------------- */}
        {activeTab === 'asset' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-up">
            
            {/* Left Column: Project Overview */}
            <Reveal
              variant="left"
              className={`lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border space-y-6 shadow-sm ${
                isDark ? 'border-white/15 bg-stone-900/90' : 'border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-black border ${
                    isDark
                      ? 'bg-[#e2c08d]/15 border-[#e2c08d]/30 text-[#e2c08d]'
                      : 'bg-[#23395d]/10 border-[#23395d]/30 text-[#23395d]'
                  }`}
                >
                  Enterprise Software & SQL
                </span>
                <span className={`text-xs font-mono font-bold ${isDark ? 'text-stone-300' : 'text-slate-800'}`}>
                  Java • JDBC • MySQL
                </span>
              </div>

              <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                Asset Management System
              </h3>
              
              <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
                Designed and developed a robust Java-based asset management system to track, allocate, and monitor company hardware/software assets across departments with automated lifecycle depreciation.
              </p>

              <div className="space-y-3">
                <h4 className={`text-xs font-mono uppercase tracking-wider font-black ${
                  isDark ? 'text-stone-300' : 'text-slate-950'
                }`}>
                  Key Architectural Highlights:
                </h4>
                <ul className={`space-y-2.5 text-xs sm:text-sm font-medium ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                    <span><strong className={isDark ? 'text-white' : 'text-[#0f172a]'}>Role-Based Access Control:</strong> Granular Admin and Employee permission workflows via JDBC authentication.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                    <span><strong className={isDark ? 'text-white' : 'text-[#0f172a]'}>Normalized SQL Schema:</strong> Structured tables managing lifecycle states (`IN USE`, `IN REPAIR`, `RETIRED`).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`} />
                    <span><strong className={isDark ? 'text-white' : 'text-[#0f172a]'}>Cost Depreciation:</strong> Built-in computation for asset depreciation rates and department allocation.</span>
                  </li>
                </ul>
              </div>

              <div className={`flex flex-wrap gap-2 pt-3 border-t ${isDark ? 'border-white/15' : 'border-slate-300'}`}>
                {['Java', 'JDBC', 'MySQL', 'RBAC', 'Depreciation Logic'].map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border shadow-sm ${
                      isDark
                        ? 'bg-stone-800 border-white/15 text-stone-200'
                        : 'border-slate-300 bg-white text-[#0f172a]'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Right Column: Interactive Mini Dashboard */}
            <Reveal
              variant="right"
              delay={100}
              className={`lg:col-span-7 glass-card rounded-2xl p-6 border space-y-5 shadow-xl ${
                isDark ? 'border-white/15 bg-stone-900/90' : 'border-slate-300'
              }`}
            >
              {/* Dashboard Header Bar */}
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b pb-4 ${
                isDark ? 'border-white/15' : 'border-slate-300'
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                    Role View:
                  </span>
                  <button
                    onClick={() => setRole(role === 'admin' ? 'employee' : 'admin')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-black transition-all ${
                      role === 'admin'
                        ? isDark
                          ? 'bg-[#e2c08d] text-[#121014] font-black shadow-sm'
                          : 'bg-[#23395d] text-white shadow-sm'
                        : isDark
                        ? 'bg-stone-800 text-stone-200 border border-white/15'
                        : 'bg-slate-100 text-[#0f172a] border border-slate-300'
                    }`}
                  >
                    {role === 'admin' ? <Shield className="w-3.5 h-3.5" /> : <UserCheck className="w-3.5 h-3.5" />}
                    <span>{role.toUpperCase()} MODE (Toggle)</span>
                  </button>
                </div>

                <div className={`text-xs font-mono font-bold ${isDark ? 'text-stone-300' : 'text-slate-900'}`}>
                  Managed Assets: {assetList.length}
                </div>
              </div>

              {/* Search & Filter Control Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search asset ID, hardware name..."
                    className={`w-full rounded-xl pl-9 pr-3 py-2 text-xs font-mono font-bold transition-all shadow-sm ${
                      isDark
                        ? 'bg-stone-800 border border-white/15 text-white placeholder-stone-400 focus:outline-none focus:border-[#e2c08d]'
                        : 'bg-white border border-slate-300 text-[#0f172a] placeholder-slate-500 focus:outline-none focus:border-[#23395d]'
                    }`}
                  />
                </div>

                <div className={`flex items-center gap-1 p-1 rounded-xl border ${
                  isDark ? 'border-white/15 bg-stone-800' : 'border-slate-300 bg-slate-100'
                }`}>
                  {['ALL', 'IN USE', 'IN REPAIR', 'RETIRED'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-black transition-all ${
                        statusFilter === st
                          ? isDark
                            ? 'bg-[#e2c08d] text-[#121014] font-black'
                            : 'bg-[#23395d] text-white shadow-sm'
                          : isDark
                          ? 'text-stone-300 hover:text-white'
                          : 'text-[#0f172a] hover:text-[#23395d]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Asset Table */}
              <div className={`overflow-x-auto border rounded-xl shadow-sm ${
                isDark ? 'border-white/15 bg-stone-900/90' : 'border-slate-300 bg-white'
              }`}>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`text-[11px] font-mono font-black uppercase border-b ${
                      isDark
                        ? 'border-white/15 bg-stone-800 text-stone-200'
                        : 'border-slate-300 bg-slate-100 text-slate-950'
                    }`}>
                      <th className="py-2.5 px-3">Asset ID</th>
                      <th className="py-2.5 px-3">Name</th>
                      <th className="py-2.5 px-3">Dept</th>
                      <th className="py-2.5 px-3">Status</th>
                      {role === 'admin' && <th className="py-2.5 px-3 text-right">Action</th>}
                    </tr>
                  </thead>
                  <tbody className={`divide-y text-xs font-mono font-bold ${
                    isDark ? 'divide-white/10' : 'divide-slate-300'
                  }`}>
                    {filteredAssets.map((item) => (
                      <tr
                        key={item.id}
                        className={`transition-colors ${isDark ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}
                      >
                        <td className={`py-3 px-3 font-black ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                          {item.id}
                        </td>
                        <td className={`py-3 px-3 font-sans font-bold ${isDark ? 'text-white' : 'text-[#0f172a]'}`}>
                          {item.name}
                        </td>
                        <td className={`py-3 px-3 ${isDark ? 'text-stone-200' : 'text-slate-800'}`}>
                          {item.dept}
                        </td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black ${
                              item.status === 'IN USE'
                                ? isDark
                                  ? 'bg-[#e2c08d] text-[#121014] font-black'
                                  : 'bg-[#23395d] text-white'
                                : item.status === 'IN REPAIR'
                                ? 'bg-amber-600 text-white'
                                : 'bg-slate-300 text-slate-900'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        {role === 'admin' && (
                          <td className="py-3 px-3 text-right">
                            <select
                              value={item.status}
                              onChange={(e) => handleStatusChange(item.id, e.target.value)}
                              className={`rounded px-2 py-1 text-[11px] font-mono font-bold focus:outline-none ${
                                isDark
                                  ? 'bg-stone-800 border border-white/20 text-white focus:border-[#e2c08d]'
                                  : 'bg-white border border-slate-300 text-[#0f172a] focus:border-[#23395d]'
                              }`}
                            >
                              <option value="IN USE">In Use</option>
                              <option value="IN REPAIR">In Repair</option>
                              <option value="RETIRED">Retired</option>
                            </select>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Status Note */}
              <div className={`text-[11px] font-mono flex items-center justify-between pt-1 font-bold ${
                isDark ? 'text-stone-300' : 'text-slate-800'
              }`}>
                <span className={`flex items-center gap-1.5 font-black ${isDark ? 'text-[#e2c08d]' : 'text-[#23395d]'}`}>
                  <Sparkles className="w-3.5 h-3.5" /> Live JDBC Transaction Simulation
                </span>
                <span>Permission: {role === 'admin' ? 'FULL CRUD' : 'READ ONLY'}</span>
              </div>

            </Reveal>

          </div>
        )}

      </div>
    </section>
  );
}

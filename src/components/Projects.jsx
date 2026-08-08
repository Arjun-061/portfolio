import React, { useState, useEffect } from 'react';
import { 
  FolderGit2, LineChart, ShieldCheck, 
  Activity, CheckCircle, Search, UserCheck, Shield
} from 'lucide-react';
import Reveal from './Reveal';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('stock');

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d] text-xs font-mono font-extrabold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" /> Featured Engineering Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight">
            Projects with <span className="gradient-text">Interactive Live Demos</span>
          </h2>
          <p className="text-slate-900 font-medium text-base max-w-2xl">
            Explore fully functional interactive widgets demonstrating underlying real-time analytics, API streaming, and Java SQL systems.
          </p>

          {/* Project Switcher Tabs */}
          <div className="flex items-center p-1.5 rounded-2xl bg-white border border-slate-300 shadow-sm mt-6">
            <button
              onClick={() => setActiveTab('stock')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'stock'
                  ? 'bg-[#23395d] text-white shadow-md'
                  : 'text-[#0f172a] hover:text-[#23395d]'
              }`}
            >
              <LineChart className="w-4 h-4" />
              Stock Analytics Dashboard
            </button>
            <button
              onClick={() => setActiveTab('asset')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'asset'
                  ? 'bg-[#23395d] text-white shadow-md'
                  : 'text-[#0f172a] hover:text-[#23395d]'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Asset Management System (Java & SQL)
            </button>
          </div>
        </Reveal>

        {/* ---------------- PROJECT 1: STOCK ANALYTICS DASHBOARD ---------------- */}
        {activeTab === 'stock' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            
            {/* Left Column: Project Overview */}
            <Reveal variant="left" className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-300 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d]">
                  Real-Time Market Analytics
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">Plotly.js • WebSockets</span>
              </div>

              <h3 className="text-2xl font-black text-[#0f172a]">Stock Analytics Web App</h3>
              
              <p className="text-slate-900 text-sm sm:text-base font-medium leading-relaxed">
                A full-stack stock analytics web app rendering interactive multi-pane price and technical indicator charts with live WebSocket streaming updates.
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-950 font-black">Key Architectural Highlights:</h4>
                <ul className="space-y-2 text-sm text-slate-900 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#23395d] shrink-0 mt-0.5" />
                    <span><strong>Technical Overlay Metrics:</strong> Renders key technical indicators including SMA, EMA, and RSI.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#23395d] shrink-0 mt-0.5" />
                    <span><strong>Resilient Streaming Feed:</strong> Real-time streaming price updates with auto-reconnect backoff algorithm & heartbeat keep-alive.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#23395d] shrink-0 mt-0.5" />
                    <span><strong>Interactive Visualizations:</strong> Fast, responsive plotting using Plotly.js and SVG overlays.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-300">
                {['JavaScript', 'Plotly.js', 'WebSockets', 'HTML/CSS', 'Python'].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono font-bold rounded bg-white text-[#0f172a] border border-slate-300 shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Right Column: Live Interactive Demo Widget */}
            <Reveal variant="right" delay={100} className="lg:col-span-7 glass-card rounded-2xl p-6 border border-slate-300 shadow-xl space-y-5">
              
              {/* Demo Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-300 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-900">Ticker:</span>
                  <div className="flex gap-1">
                    {['NVDA', 'AAPL', 'TSLA', 'MSFT'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTicker(t)}
                        className={`px-2.5 py-1 rounded text-xs font-mono font-black transition-colors ${
                          selectedTicker === t ? 'bg-[#23395d] text-white' : 'bg-slate-100 text-[#0f172a] border border-slate-300 hover:text-[#23395d]'
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
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-black transition-colors ${
                      isLiveWs ? 'bg-[#23395d] text-white border border-[#23395d]' : 'bg-slate-100 text-slate-900 border border-slate-300'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isLiveWs ? 'bg-emerald-400 animate-ping' : 'bg-slate-400'}`} />
                    {isLiveWs ? `WebSocket Live (${wsPing}ms)` : 'Feed Paused'}
                  </button>
                </div>
              </div>

              {/* Price Score Card */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-xl border border-slate-300 shadow-sm">
                  <span className="text-[10px] font-mono font-bold text-slate-900 uppercase">Live Spot Price</span>
                  <div className="text-xl font-black font-mono text-[#0f172a] flex items-center gap-1 mt-0.5">
                    ${livePrice}
                    <span className="text-xs text-[#23395d] font-bold">+1.82%</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#23395d] shadow-sm">
                  <span className="text-[10px] font-mono font-extrabold text-[#23395d] uppercase">Projected Range</span>
                  <div className="text-xl font-black font-mono text-[#23395d] flex items-center gap-1 mt-0.5">
                    ${(livePrice * 1.024).toFixed(2)}
                    <span className="text-xs text-[#23395d] font-bold">Bullish</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-300 col-span-2 sm:col-span-1 shadow-sm">
                  <span className="text-[10px] font-mono font-bold text-slate-900 uppercase">Data Accuracy</span>
                  <div className="text-xl font-black font-mono text-[#0f172a] mt-0.5">
                    99.4%
                  </div>
                </div>
              </div>

              {/* Interactive SVG Chart Container */}
              <div className="relative bg-white rounded-xl p-4 border border-slate-300 space-y-3 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-slate-900">
                  <span className="flex items-center gap-1 font-extrabold text-[#0f172a]">
                    <Activity className="w-3.5 h-3.5 text-[#23395d]" /> {selectedTicker} / USD 1D Candle Overlay
                  </span>
                  
                  {/* Indicator Toggles */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowSMA(!showSMA)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold transition-colors ${
                        showSMA ? 'bg-[#23395d] text-white' : 'bg-slate-100 text-slate-900 border border-slate-300'
                      }`}
                    >
                      SMA 20
                    </button>
                    <button
                      onClick={() => setShowRSI(!showRSI)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold transition-colors ${
                        showRSI ? 'bg-[#23395d] text-white' : 'bg-slate-100 text-slate-900 border border-slate-300'
                      }`}
                    >
                      RSI (14)
                    </button>
                  </div>
                </div>

                {/* SVG Visualizing Dynamic Chart */}
                <div className="h-44 w-full relative overflow-hidden flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
                    <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(35,57,93,0.15)" strokeDasharray="4" />
                    <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(35,57,93,0.15)" strokeDasharray="4" />
                    <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(35,57,93,0.15)" strokeDasharray="4" />

                    <defs>
                      <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#23395d" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#23395d" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M 0 110 Q 50 130 100 80 T 200 60 T 300 40 T 400 25 L 400 150 L 0 150 Z"
                      fill="url(#priceGrad)"
                    />

                    <path
                      d="M 0 110 Q 50 130 100 80 T 200 60 T 300 40 T 400 25"
                      fill="none"
                      stroke="#23395d"
                      strokeWidth="2.5"
                    />

                    {showSMA && (
                      <path
                        d="M 0 120 Q 60 110 120 90 T 240 70 T 360 45 T 400 35"
                        fill="none"
                        stroke="#0f172a"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                    )}

                    <circle cx="400" cy="25" r="4" fill="#23395d" />
                    <circle cx="400" cy="25" r="8" fill="#23395d" opacity="0.4" className="animate-ping" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-900 pt-1">
                  <span>09:30 AM</span>
                  <span>12:00 PM</span>
                  <span>02:30 PM</span>
                  <span>04:00 PM (Market Close)</span>
                </div>
              </div>

            </Reveal>

          </div>
        )}

        {/* ---------------- PROJECT 2: ASSET MANAGEMENT SYSTEM ---------------- */}
        {activeTab === 'asset' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            
            {/* Left Column: Project Overview */}
            <Reveal variant="left" className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 border border-slate-300 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-black bg-[#23395d]/15 border border-[#23395d]/40 text-[#23395d]">
                  Enterprise Software & SQL
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">Java • JDBC • MySQL</span>
              </div>

              <h3 className="text-2xl font-black text-[#0f172a]">Asset Management System</h3>
              
              <p className="text-slate-900 text-sm sm:text-base font-medium leading-relaxed">
                Designed and developed a robust Java-based asset management system to track, allocate, and monitor company hardware/software assets across departments, significantly reducing manual tracking effort.
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-950 font-black">Key Architectural Highlights:</h4>
                <ul className="space-y-2 text-sm text-slate-900 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#23395d] shrink-0 mt-0.5" />
                    <span><strong>Role-Based Access Control (RBAC):</strong> Granular Admin and Employee permission workflows via JDBC authentication.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#23395d] shrink-0 mt-0.5" />
                    <span><strong>Normalized Database Schema:</strong> Structured SQL tables tracking asset lifecycle states (`IN USE`, `IN REPAIR`, `RETIRED`) with automatic depreciation calculations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#23395d] shrink-0 mt-0.5" />
                    <span><strong>Compliance Reports:</strong> Built-in report generator analyzing asset utilization rates and department cost allocation.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-300">
                {['Java', 'JDBC', 'SQL', 'RBAC', 'Database Design', 'Depreciation Logic'].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono font-bold rounded bg-white text-[#0f172a] border border-slate-300 shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Right Column: Interactive Mini Dashboard */}
            <Reveal variant="right" delay={100} className="lg:col-span-7 glass-card rounded-2xl p-6 border border-slate-300 shadow-xl space-y-5">
              
              {/* Dashboard Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-300 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-900">Current Role View:</span>
                  <button
                    onClick={() => setRole(role === 'admin' ? 'employee' : 'admin')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-black transition-all ${
                      role === 'admin'
                        ? 'bg-[#23395d] text-white'
                        : 'bg-slate-100 text-[#0f172a] border border-slate-300'
                    }`}
                  >
                    {role === 'admin' ? <Shield className="w-3.5 h-3.5 text-white" /> : <UserCheck className="w-3.5 h-3.5" />}
                    {role.toUpperCase()} MODE (Click to Toggle)
                  </button>
                </div>

                <div className="text-xs font-mono font-bold text-slate-900">
                  Total Managed Assets: {assetList.length}
                </div>
              </div>

              {/* Search & Filter Control Bar */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-4 h-4 text-slate-700 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search asset ID, name..."
                    className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs font-mono font-bold text-[#0f172a] placeholder-slate-500 focus:outline-none focus:border-[#23395d]"
                  />
                </div>

                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-300">
                  {['ALL', 'IN USE', 'IN REPAIR', 'RETIRED'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-extrabold transition-colors ${
                        statusFilter === st ? 'bg-[#23395d] text-white' : 'text-[#0f172a] hover:text-[#23395d]'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Asset Table */}
              <div className="overflow-x-auto border border-slate-300 rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-[11px] font-mono font-black text-slate-950 border-b border-slate-300 uppercase">
                      <th className="py-2.5 px-3">Asset ID</th>
                      <th className="py-2.5 px-3">Asset Name</th>
                      <th className="py-2.5 px-3">Department</th>
                      <th className="py-2.5 px-3">Status</th>
                      {role === 'admin' && <th className="py-2.5 px-3 text-right">Admin Action</th>}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 text-xs font-mono font-bold">
                    {filteredAssets.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-3 font-black text-[#23395d]">{item.id}</td>
                        <td className="py-3 px-3 text-[#0f172a] font-sans font-bold">{item.name}</td>
                        <td className="py-3 px-3 text-slate-900">{item.dept}</td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-black ${
                              item.status === 'IN USE'
                                ? 'bg-[#23395d] text-white'
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
                              className="bg-white text-[#0f172a] border border-slate-300 rounded px-2 py-1 text-[11px] font-bold focus:outline-none focus:border-[#23395d]"
                            >
                              <option value="IN USE">Mark In-Use</option>
                              <option value="IN REPAIR">Send Repair</option>
                              <option value="RETIRED">Retire Asset</option>
                            </select>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Status Note */}
              <div className="text-[11px] text-slate-900 font-mono font-bold flex items-center justify-between pt-1">
                <span>⚡ Live JDBC Transaction Simulation</span>
                <span>Role Permission Level: {role === 'admin' ? 'FULL CRUD ACCESS' : 'READ ONLY'}</span>
              </div>

            </Reveal>

          </div>
        )}

      </div>
    </section>
  );
}

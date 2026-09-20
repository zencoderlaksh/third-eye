import React, { useState, useEffect } from "react";
import {
  Terminal,
  Code2,
  Cpu,
  Palette,
  Calculator,
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Layers,
  Activity,
  Sliders,
  FileCode,
  Zap,
} from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function InteractiveLab3D() {
  const [activeTab, setActiveTab] = useState("code");
  const [isRunning, setIsRunning] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    "ready: initialized 100% practical lab environment",
    "status: mentor online @ workstation #04",
  ]);

  // Terminal run simulation
  const handleRunCode = () => {
    setIsRunning(true);
    setTerminalOutput(["compiling client & backend modules..."]);

    setTimeout(() => {
      setTerminalOutput((prev) => [
        ...prev,
        "✓ bundled 24 components in 128ms",
        "✓ authenticated JWT session with MongoDB Atlas",
      ]);
    }, 400);

    setTimeout(() => {
      setTerminalOutput((prev) => [
        ...prev,
        "🚀 server listening on http://localhost:5000",
        "✨ live preview synced at 60 FPS",
      ]);
      setIsRunning(false);
    }, 900);
  };

  // AI simulation values
  const [aiEpoch, setAiEpoch] = useState(45);
  const [aiAccuracy, setAiAccuracy] = useState(98.6);

  // Accounting simulation values
  const [invoiceAmount, setInvoiceAmount] = useState(50000);
  const gstRate = 18;
  const gstTotal = (invoiceAmount * gstRate) / 100;
  const finalTotal = invoiceAmount + gstTotal;

  return (
    <section className="relative py-28 bg-[#07080E] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-yellow-400/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #facc15 1px, transparent 1px), linear-gradient(to bottom, #facc15 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(250,204,21,0.15)]">
              <Terminal className="w-4 h-4 text-yellow-400" />
              <span>Interactive Virtual Workstation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Test Drive Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Practical Labs
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
              No dull classroom theory. Every student is assigned their own private high-spec computer workstation with industry software and direct mentor supervision.
            </p>
          </div>
        </ScrollReveal>

        {/* Workstation Mode Switcher Tabs */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-8">
            {[
              { id: "code", label: "Full Stack IDE", icon: Code2, desc: "React & Node" },
              { id: "ai", label: "AI & Neural Studio", icon: Cpu, desc: "Python & ML" },
              { id: "design", label: "UI/UX Vector Canvas", icon: Palette, desc: "Figma & 3D" },
              { id: "finance", label: "GST & Tally Terminal", icon: Calculator, desc: "ERP & Accounts" },
            ].map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/25 scale-[1.03]"
                      : "bg-[#10121D] text-zinc-400 hover:text-white hover:bg-[#181B2B] border border-white/[0.08]"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-black" : "text-yellow-400"}`} />
                  <div className="text-left">
                    <div>{tab.label}</div>
                    <div className={`text-[10px] font-medium ${isActive ? "text-black/80" : "text-zinc-500"}`}>
                      {tab.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Virtual Workstation Screen Frame */}
        <ScrollReveal direction="zoom" delay={200}>
          <div className="relative rounded-3xl bg-[#0B0D15] border border-yellow-400/30 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(250,204,21,0.06)] overflow-hidden">
            {/* Top Window Bar */}
            <div className="px-5 py-3.5 bg-[#0F111C] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-zinc-400 ml-2 hidden sm:inline">
                  ThirdEye_Lab_Workstation_01 :: active
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Workstation 60 FPS
                </span>
                <span className="text-[11px] font-mono text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-md border border-yellow-400/20">
                  100% Hands-On
                </span>
              </div>
            </div>

            {/* Content Area Based on Active Tab */}
            <div className="p-6 sm:p-8 min-h-[440px] flex flex-col justify-between">
              {/* TAB 1: FULL STACK IDE */}
              {activeTab === "code" && (
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-yellow-400/10 text-yellow-400 text-xs font-mono font-bold border border-yellow-400/20 flex items-center gap-1.5">
                        <FileCode className="w-3.5 h-3.5" />
                        App.jsx
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">authMiddleware.js</span>
                      <span className="text-xs text-zinc-500 font-mono">database.config.js</span>
                    </div>

                    <button
                      onClick={handleRunCode}
                      disabled={isRunning}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-400 text-black text-xs font-black hover:bg-yellow-300 transition-all shadow-md shadow-yellow-400/20 active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>{isRunning ? "Running Build..." : "Run Live Project"}</span>
                    </button>
                  </div>

                  {/* Code Editor View */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 bg-[#080910] rounded-2xl p-5 border border-white/[0.06] font-mono text-xs sm:text-sm leading-relaxed text-zinc-300 overflow-x-auto shadow-inner">
                      <div className="flex gap-4">
                        <div className="text-zinc-600 select-none text-right font-mono">
                          <div>01</div>
                          <div>02</div>
                          <div>03</div>
                          <div>04</div>
                          <div>05</div>
                          <div>06</div>
                          <div>07</div>
                          <div>08</div>
                        </div>
                        <div className="space-y-0.5">
                          <p>
                            <span className="text-yellow-400">import</span> React, &#123; useState, useEffect &#125; <span className="text-yellow-400">from</span> <span className="text-emerald-400">&apos;react&apos;</span>;
                          </p>
                          <p>
                            <span className="text-yellow-400">export default function</span> <span className="text-blue-400">PortfolioApp</span>() &#123;
                          </p>
                          <p className="pl-4">
                            <span className="text-zinc-500">// 100% Practical Client Project at Third Eye</span>
                          </p>
                          <p className="pl-4">
                            <span className="text-yellow-400">const</span> [status, setStatus] = <span className="text-blue-400">useState</span>(<span className="text-emerald-400">&apos;production_ready&apos;</span>);
                          </p>
                          <p className="pl-4">
                            <span className="text-purple-400">return</span> (
                          </p>
                          <p className="pl-8">
                            &lt;<span className="text-yellow-400">div</span> <span className="text-cyan-400">className</span>=<span className="text-emerald-400">&quot;career-ready-engineer&quot;</span>&gt;
                          </p>
                          <p className="pl-12">
                            &lt;<span className="text-yellow-400">CareerOffer</span> <span className="text-cyan-400">package</span>=<span className="text-emerald-400">&quot;₹7.5 LPA&quot;</span> /&gt;
                          </p>
                          <p className="pl-8">&lt;/<span className="text-yellow-400">div</span>&gt;</p>
                        </div>
                      </div>
                    </div>

                    {/* Live Output Terminal */}
                    <div className="lg:col-span-5 bg-[#07080F] rounded-2xl p-5 border border-yellow-400/20 font-mono text-xs flex flex-col justify-between shadow-inner">
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] text-zinc-400 font-bold">
                          <span className="flex items-center gap-1.5 text-yellow-400">
                            <Terminal className="w-3.5 h-3.5" />
                            Console Output
                          </span>
                          <span className="text-[10px] text-zinc-500">Node v20.11</span>
                        </div>
                        <div className="space-y-1.5 text-zinc-300">
                          {terminalOutput.map((line, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-yellow-400 select-none">&gt;</span>
                              <span className={line.startsWith("✓") || line.startsWith("🚀") ? "text-emerald-400" : ""}>
                                {line}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-zinc-500 flex items-center justify-between">
                        <span>Status: Connected</span>
                        <span className="text-emerald-400 font-bold">Latency: 18ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: AI & NEURAL STUDIO */}
              {activeTab === "ai" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Visual Neural Diagram */}
                    <div className="lg:col-span-7 bg-[#080911] rounded-2xl p-6 border border-white/[0.06]">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-wider">
                          Neural Synapse Architecture
                        </span>
                        <span className="text-xs font-mono text-emerald-400 font-bold">
                          Loss: 0.0042 • Accuracy: {aiAccuracy}%
                        </span>
                      </div>

                      {/* Animated SVG Neural Network */}
                      <div className="relative h-44 flex items-center justify-between px-6 bg-[#0B0D18] rounded-xl border border-white/[0.04] overflow-hidden">
                        <div className="space-y-4">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />
                          ))}
                        </div>
                        <div className="space-y-5">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24]" />
                          ))}
                        </div>
                        <div className="space-y-4">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-4 h-4 rounded-full bg-yellow-300 shadow-[0_0_12px_#fde047]" />
                          ))}
                        </div>

                        {/* Animated overlay connecting pulse lines */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-amber-400/10 to-yellow-400/5 animate-pulse pointer-events-none" />
                      </div>

                      <p className="text-xs text-zinc-400 mt-3 font-mono">
                        Dataset: 50,000 real customer records analyzed using Python, Pandas & Scikit-Learn.
                      </p>
                    </div>

                    {/* Interactive Tuning Sliders */}
                    <div className="lg:col-span-5 bg-[#090B14] rounded-2xl p-6 border border-yellow-400/20 space-y-4">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-yellow-400" />
                        Interactive Hyperparameters
                      </h4>

                      <div>
                        <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                          <span>Epoch Iterations</span>
                          <span className="text-yellow-400 font-bold">{aiEpoch}</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          value={aiEpoch}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            setAiEpoch(val);
                            setAiAccuracy((95 + val * 0.045).toFixed(1));
                          }}
                          className="w-full accent-yellow-400 cursor-pointer"
                        />
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#111422] border border-white/[0.06] text-xs space-y-1 font-mono">
                        <div className="flex justify-between text-zinc-400">
                          <span>Framework:</span>
                          <span className="text-white font-bold">TensorFlow + PyTorch</span>
                        </div>
                        <div className="flex justify-between text-zinc-400">
                          <span>Prediction Latency:</span>
                          <span className="text-emerald-400 font-bold">4.2ms (GPU Accelerated)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: UI/UX VECTOR CANVAS */}
              {activeTab === "design" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8 bg-[#080910] rounded-2xl p-6 border border-white/[0.06]">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-yellow-400">
                          Figma Canvas :: Mobile Design System
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#FACC15]" />
                          <span className="w-3 h-3 rounded-full bg-[#090A0F] border border-white/20" />
                          <span className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                        </div>
                      </div>

                      <div className="h-44 rounded-xl bg-gradient-to-tr from-[#121422] to-[#181C2E] border border-yellow-400/20 p-5 flex items-center justify-around">
                        <div className="w-24 h-36 rounded-xl bg-[#090A0F] border border-yellow-400/40 p-2 shadow-xl flex flex-col justify-between">
                          <div className="w-full h-2 rounded bg-yellow-400/80" />
                          <div className="space-y-1">
                            <div className="w-full h-1.5 rounded bg-zinc-700" />
                            <div className="w-3/4 h-1.5 rounded bg-zinc-700" />
                          </div>
                          <div className="w-full py-1 rounded bg-yellow-400 text-black text-[8px] font-black text-center">
                            CTA
                          </div>
                        </div>

                        <div className="space-y-2 text-left">
                          <div className="text-xs font-bold text-white">Auto Layout 4.0 Active</div>
                          <div className="text-[11px] text-zinc-400">Tokens: Color, Typography, Grid</div>
                          <span className="inline-block px-2.5 py-1 rounded-md bg-yellow-400/10 text-yellow-400 text-[10px] font-bold border border-yellow-400/20">
                            Pixel Perfect Figma to Code
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#0A0C16] rounded-2xl p-6 border border-white/[0.06] space-y-3 text-xs">
                      <h4 className="font-bold text-white">Design Lab Highlights</h4>
                      <p className="text-zinc-400 leading-relaxed">
                        Master Behance portfolios, Figma component variants, Illustrator branding, and Photoshop composite lighting under award-winning design mentors.
                      </p>
                      <div className="p-3 rounded-xl bg-yellow-400/10 text-yellow-400 font-bold border border-yellow-400/20">
                        12+ Projects Built Per Student
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: GST & TALLY TERMINAL */}
              {activeTab === "finance" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-7 bg-[#080911] rounded-2xl p-6 border border-white/[0.06] space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <span className="text-xs font-mono font-bold text-yellow-400">
                          Tally Prime ERP :: Corporate Tax Calculator
                        </span>
                        <span className="text-xs font-mono text-emerald-400 font-bold">
                          E-Way Bill: Validated
                        </span>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                          <span>Adjust Base Transaction (₹)</span>
                          <span className="text-yellow-400 font-bold">₹{invoiceAmount.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="10000"
                          max="200000"
                          step="5000"
                          value={invoiceAmount}
                          onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                          className="w-full accent-yellow-400 cursor-pointer"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-3 pt-2 text-xs font-mono text-center">
                        <div className="p-2.5 rounded-xl bg-[#111422] border border-white/[0.06]">
                          <div className="text-zinc-400 text-[10px]">CGST (9%)</div>
                          <div className="text-yellow-400 font-bold mt-0.5">₹{(gstTotal / 2).toLocaleString()}</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#111422] border border-white/[0.06]">
                          <div className="text-zinc-400 text-[10px]">SGST (9%)</div>
                          <div className="text-yellow-400 font-bold mt-0.5">₹{(gstTotal / 2).toLocaleString()}</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-[#111422] border border-yellow-400/30">
                          <div className="text-zinc-400 text-[10px]">Net Invoice</div>
                          <div className="text-emerald-400 font-bold mt-0.5">₹{finalTotal.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#0A0C16] rounded-2xl p-6 border border-white/[0.06] space-y-3 text-xs">
                      <h4 className="font-bold text-white">Why Learn Tally at Third Eye?</h4>
                      <p className="text-zinc-400 leading-relaxed">
                        We work on real business bank statements, corporate balance sheets, and live government GST portal filing so you are 100% corporate job ready from Day 1.
                      </p>
                      <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Audited by Chartered Accountants
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Lab Guarantee Strip */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>1 Workstation Per Student Guarantee • Zero Computer Sharing</span>
                </div>
                <a
                  href="https://wa.me/918058061222?text=Hi%2C%20I%20want%20to%20reserve%20a%20workstation%20for%20the%20Free%20Practical%20Demo%20Class."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-yellow-400 font-bold hover:underline"
                >
                  <span>Reserve Your Workstation Seat</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

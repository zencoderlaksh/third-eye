import React, { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Users,
  Laptop,
  FolderGit2,
  Award,
  ArrowRight,
  Zap,
  Clock,
  Briefcase,
  Monitor,
} from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function InteractiveLearningMethodology() {
  const [comparisonMode, setComparisonMode] = useState("thirdeye"); // 'thirdeye' | 'traditional'
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "workstation",
      icon: Monitor,
      title: "1 Workstation Per Student Guarantee",
      tagline: "Zero computer sharing. Full ownership of your high-speed lab machine.",
      desc: "In traditional classes, 3 to 4 students crowd around a single outdated computer. At Third Eye, every student is assigned their own private high-performance workstation equipped with dual displays, high-speed NVMe storage, and pre-configured industry toolchains from Day 1.",
      metrics: [
        { label: "Screen Sharing", value: "0%", status: "Zero Sharing" },
        { label: "Hands-On Time", value: "100%", status: "Pure Practical" },
        { label: "Hardware Spec", value: "High-Speed", status: "Modern Lab" },
      ],
      highlight: "Individual Lab Machine Assigned Daily",
    },
    {
      id: "mentor",
      icon: Users,
      title: "Personal 1-on-1 On-Desk Mentorship",
      tagline: "Your mentor sits beside your desk to debug live code & solve doubts.",
      desc: "No waiting with raised hands in crowded 100-student lecture halls. Our expert mentors walk through the lab floor, sitting directly beside your workstation whenever you encounter a syntax error, accounting discrepancy, or design issue.",
      metrics: [
        { label: "Doubt Response", value: "< 2 Mins", status: "Instant Support" },
        { label: "Batch Ratio", value: "Small", status: "Personal Attention" },
        { label: "Mentor Quality", value: "10+ Yrs", status: "Industry Pros" },
      ],
      highlight: "Direct Line-by-Line Code Review",
    },
    {
      id: "projects",
      icon: FolderGit2,
      title: "Live Production Capstones (Not Theory)",
      tagline: "Build verifiable client-grade projects that impress hiring managers.",
      desc: "Textbook rote learning never gets anyone hired. Every module at Third Eye culminates in real-world, deployable projects with live links, verifiable GitHub repositories, and production-grade portfolio case studies.",
      metrics: [
        { label: "Projects Built", value: "4 to 12", status: "Per Student" },
        { label: "Portfolio Grade", value: "Client-Ready", status: "Live Links" },
        { label: "Git Commits", value: "Verified", status: "GitHub Profile" },
      ],
      highlight: "100% Verifiable Portfolio Deployment",
    },
    {
      id: "placements",
      icon: Award,
      title: "ISO Certification & 150+ Placement Drives",
      tagline: "Government-registered credentials and dedicated campus interviews.",
      desc: "Receive government-recognized, ISO 9001:2015 accredited certificates featuring digital online QR verification. Our placement cell conducts weekly resume reviews, mock HR interviews, and connects you with 150+ active hiring partners.",
      metrics: [
        { label: "Placement Rate", value: "98%", status: "Career Ready" },
        { label: "Hiring Partners", value: "150+", status: "Top Recruiters" },
        { label: "Credentials", value: "ISO 9001", status: "Online QR Verify" },
      ],
      highlight: "Direct Recruitment Drives & Mock Rounds",
    },
  ];

  const currentPillar = pillars[activePillar];

  return (
    <section className="relative py-28 bg-[#090B12] text-white overflow-hidden border-y border-yellow-400/20">
      {/* Warm Ambient Golden Halo Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-yellow-400/[0.04] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber gold subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #facc15 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(250,204,21,0.15)]">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>The Practical Edge</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              How You Actually Learn at{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Third Eye
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              We replaced boring textbook lectures with an immersive 100% practical lab ecosystem designed to turn complete beginners into industry-ready professionals.
            </p>

            {/* Interactive Toggle: Third Eye vs Traditional */}
            <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#121522] border border-yellow-400/25 shadow-xl">
              <button
                onClick={() => setComparisonMode("thirdeye")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer ${
                  comparisonMode === "thirdeye"
                    ? "bg-yellow-400 text-black shadow-md shadow-yellow-400/25 scale-[1.02]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>The Third Eye Lab Experience</span>
              </button>

              <button
                onClick={() => setComparisonMode("traditional")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  comparisonMode === "traditional"
                    ? "bg-red-500/20 text-red-300 border border-red-500/40 shadow-md scale-[1.02]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <XCircle className="w-4 h-4" />
                <span>Traditional Theory Coaching</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Comparison Banner (If Traditional is Selected) */}
        {comparisonMode === "traditional" ? (
          <ScrollReveal direction="zoom">
            <div className="rounded-3xl bg-gradient-to-b from-[#1E1214] via-[#150D0E] to-[#0E0809] border border-red-500/30 p-8 sm:p-12 mb-12 shadow-2xl text-center max-w-4xl mx-auto">
              <div className="inline-block p-3 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
                <XCircle className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Why 90% of Traditional Students Struggle to Find Jobs
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl mx-auto mb-8">
                Traditional institutes teach 10-year-old textbook theory, force 3 to 4 students to share a single slow computer, and provide zero hands-on project experience or portfolio reviews.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left font-mono">
                <div className="p-4 rounded-2xl bg-[#281316] border border-red-500/20">
                  <div className="text-red-400 text-xs font-bold mb-1">❌ 3-4 Students Per PC</div>
                  <div className="text-xs text-zinc-400">Little to no hands-on keyboard time during classes.</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#281316] border border-red-500/20">
                  <div className="text-red-400 text-xs font-bold mb-1">❌ Boring Theory Slides</div>
                  <div className="text-xs text-zinc-400">Memorizing concepts for written exams with zero code.</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#281316] border border-red-500/20">
                  <div className="text-red-400 text-xs font-bold mb-1">❌ Zero Placement Help</div>
                  <div className="text-xs text-zinc-400">Course finishes and students are left on their own.</div>
                </div>
              </div>

              <button
                onClick={() => setComparisonMode("thirdeye")}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 text-black text-xs font-black hover:bg-yellow-300 transition-all cursor-pointer shadow-lg shadow-yellow-400/20"
              >
                <span>Switch to Third Eye Practical Lab Mode</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        ) : (
          /* Third Eye Interactive Learning Pillars Canvas */
          <div>
            {/* 4 Interactive Pillar Tabs */}
            <ScrollReveal direction="up" delay={100}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {pillars.map((pillar, idx) => {
                  const IconComp = pillar.icon;
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillar(idx)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                        isActive
                          ? "bg-gradient-to-b from-[#1C2136] via-[#141829] to-[#0E111F] border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.18)] scale-[1.02]"
                          : "bg-[#101320] border-white/[0.08] hover:border-yellow-400/40 hover:bg-[#15192C]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            isActive
                              ? "bg-yellow-400 text-black"
                              : "bg-yellow-400/10 text-yellow-400"
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-xs font-mono font-bold ${
                            isActive ? "text-yellow-400" : "text-zinc-500"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                      </div>

                      <div>
                        <h3
                          className={`text-sm sm:text-base font-bold transition-colors ${
                            isActive ? "text-yellow-400" : "text-zinc-200"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                          {pillar.tagline}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Interactive Pillar Showcase Display */}
            <ScrollReveal direction="zoom" delay={150}>
              <div className="rounded-3xl bg-gradient-to-b from-[#14182B] via-[#101323] to-[#0C0F1A] border border-yellow-400/35 p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_35px_rgba(250,204,21,0.06)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Detailed Pillar Story (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold border border-yellow-400/25">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currentPillar.highlight}</span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                        {currentPillar.title}
                      </h3>
                      <p className="text-sm sm:text-base text-yellow-400 font-semibold mt-1.5">
                        {currentPillar.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-4">
                        {currentPillar.desc}
                      </p>
                    </div>

                    {/* 3 Metric Cards */}
                    <div className="grid grid-cols-3 gap-3 font-mono">
                      {currentPillar.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl bg-[#181D33] border border-white/[0.08] text-center"
                        >
                          <div className="text-[10px] text-zinc-400">{m.label}</div>
                          <div className="text-base sm:text-lg font-black text-yellow-400 mt-0.5">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-semibold text-emerald-400 mt-0.5">
                            {m.status}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action CTA */}
                    <div className="pt-2">
                      <a
                        href="https://wa.me/918058061222?text=Hi%2C%20I%20want%20to%20experience%20Third%20Eye's%20practical%20labs%20firsthand."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-yellow-400 text-black text-xs sm:text-sm font-black hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/25 active:scale-95 group"
                      >
                        <span>Experience With Free 2-Day Trial</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Graphic Card (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-gradient-to-b from-[#171C33] via-[#12162A] to-[#0E1120] border border-yellow-400/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                      <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/[0.08]">
                        <span className="text-xs font-mono text-yellow-400 font-bold uppercase tracking-wider">
                          Third Eye Lab Architecture
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                          Active Lab Session
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0F1222] border border-white/[0.06]">
                          <div className="w-9 h-9 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                            <Monitor className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Private Workstation Assigned</div>
                            <div className="text-[10px] text-zinc-400">100% individual desk time every class</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0F1222] border border-white/[0.06]">
                          <div className="w-9 h-9 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Direct Mentor Support</div>
                            <div className="text-[10px] text-zinc-400">Mentor sits beside you for live doubt clearance</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0F1222] border border-white/[0.06]">
                          <div className="w-9 h-9 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center shrink-0">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">Placement Drive Ready</div>
                            <div className="text-[10px] text-zinc-400">Resume, mock interview & hiring drives</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                        <span>ISO 9001:2015 Accredited</span>
                        <span className="text-yellow-400 font-bold font-mono">10,000+ Placed</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          </div>
        )}
      </div>
    </section>
  );
}

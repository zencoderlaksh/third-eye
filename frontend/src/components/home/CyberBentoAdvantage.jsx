import React, { useState } from "react";
import {
  ShieldCheck,
  Cpu,
  Users2,
  Award,
  Zap,
  CheckCircle2,
  GitBranch,
  QrCode,
  Sparkles,
  TrendingUp,
  Clock,
  Laptop,
} from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function CyberBentoAdvantage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-28 bg-[#07080E] text-white overflow-hidden"
    >
      {/* Dynamic mouse spotlight follows user across section */}
      <div
        className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(250, 204, 21, 0.07), transparent 70%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Next-Gen Training Architecture</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              The Third Eye{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Advantage
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
              Engineered from the ground up for measurable skill mastery. Zero boring theory, 100% practical computing.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: 1 System Per Student (Col span 2) */}
          <div className="md:col-span-2 lg:col-span-2">
            <ScrollReveal direction="up" delay={100}>
              <div className="h-full rounded-3xl bg-[#0D0F18]/90 border border-white/[0.08] hover:border-yellow-400/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/[0.03] rounded-full blur-[100px] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                      100% Dedicated
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    1 Workstation Per Student — Zero Computer Sharing
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    No taking turns or crowding around a single screen. You get full control over high-speed hardware with SSDs, dual monitors, and modern dev tools ready from your first minute.
                  </p>
                </div>

                {/* Live Speedometer & Lab Hardware Specs */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.06] font-mono text-center">
                  <div className="p-3 rounded-2xl bg-[#121422] border border-white/[0.06]">
                    <div className="text-[10px] text-zinc-400">RAM Allocation</div>
                    <div className="text-sm sm:text-base font-bold text-yellow-400 mt-1">16GB DDR5</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#121422] border border-white/[0.06]">
                    <div className="text-[10px] text-zinc-400">Storage IO</div>
                    <div className="text-sm sm:text-base font-bold text-emerald-400 mt-1">NVMe Gen4</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#121422] border border-white/[0.06]">
                    <div className="text-[10px] text-zinc-400">Uptime Rate</div>
                    <div className="text-sm sm:text-base font-bold text-white mt-1">99.9% Lab</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 2: 1-on-1 Dedicated Mentor (Col span 1 or 2) */}
          <div className="md:col-span-1 lg:col-span-2">
            <ScrollReveal direction="up" delay={150}>
              <div className="h-full rounded-3xl bg-[#0D0F18]/90 border border-white/[0.08] hover:border-yellow-400/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group backdrop-blur-xl relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                      <Users2 className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      &lt; 2 Mins Doubt SLA
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Personal Mentor At Your Desk
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    Never get stuck. When you encounter a syntax bug or logical hurdle, senior faculty sit right beside your workstation to explain root causes and clean solutions.
                  </p>
                </div>

                {/* Animated Status Bar */}
                <div className="p-4 rounded-2xl bg-[#121422] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      1:1
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Direct Guidance Policy</div>
                      <div className="text-[10px] text-zinc-400">No batch questions left unanswered</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 3: Real Client Capstones & GitHub Heatmap (Col span 2) */}
          <div className="md:col-span-2 lg:col-span-2">
            <ScrollReveal direction="up" delay={200}>
              <div className="h-full rounded-3xl bg-[#0D0F18]/90 border border-white/[0.08] hover:border-yellow-400/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group backdrop-blur-xl">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                      <GitBranch className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                      Live Capstones
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Build Production Portfolios
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    Graduate with verified code repositories, live Vercel deployments, and production-ready portfolio case studies that prove your value to hiring managers.
                  </p>
                </div>

                {/* Simulated GitHub Activity Grid */}
                <div className="p-4 rounded-2xl bg-[#0B0D16] border border-white/[0.06] space-y-2">
                  <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                    <span>1,420+ Student Commits this term</span>
                    <span className="text-emerald-400 font-bold">100% Verified</span>
                  </div>
                  <div className="flex gap-1 overflow-hidden py-1">
                    {[...Array(28)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-4 w-full rounded-sm ${
                          i % 5 === 0
                            ? "bg-yellow-400"
                            : i % 3 === 0
                            ? "bg-yellow-500/60"
                            : i % 2 === 0
                            ? "bg-yellow-600/30"
                            : "bg-zinc-800"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 4: ISO-Certified Verifiable QR Credential (Col span 1) */}
          <div className="md:col-span-1 lg:col-span-1">
            <ScrollReveal direction="up" delay={250}>
              <div className="h-full rounded-3xl bg-[#0D0F18]/90 border border-white/[0.08] hover:border-yellow-400/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group backdrop-blur-xl">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 mb-6">
                    <QrCode className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Verifiable QR Certificate
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Government registered, ISO 9001:2015 accredited certificates with digital online authentication.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-[#121422] border border-yellow-400/30 text-center font-mono text-xs text-yellow-400 font-bold">
                  Scan & Verify Online
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Card 5: 150+ Hiring Placement Tie-Ups (Col span 1) */}
          <div className="md:col-span-1 lg:col-span-1">
            <ScrollReveal direction="up" delay={300}>
              <div className="h-full rounded-3xl bg-[#0D0F18]/90 border border-white/[0.08] hover:border-yellow-400/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between group backdrop-blur-xl">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20 group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300 mb-6">
                    <TrendingUp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    150+ Hiring Tie-Ups
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Direct recruitment drives with leading IT software companies, CA firms, and agencies.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-[#121422] border border-white/[0.06] text-center font-mono text-xs text-emerald-400 font-bold">
                  98% Placement Rate
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

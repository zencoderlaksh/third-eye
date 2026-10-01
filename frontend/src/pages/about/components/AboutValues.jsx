import React from "react";
import {
  Compass,
  Shield,
  Zap,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "1. The Aviator's Discipline",
    tag: "IAF Heritage",
    desc: "Derived from our founder's Indian Air Force background. We enforce zero-defect standards in code syntax, 3D topology, and professional lab punctuality.",
  },
  {
    icon: Zap,
    title: "2. Outcome-Obsessed Learning",
    tag: "Proof of Work",
    desc: "We measure success exclusively through tangible outputs: production-grade Git repositories, studio showreels, and verified job appointments.",
  },
  {
    icon: Compass,
    title: "3. Continuous Curricular Velocity",
    tag: "Future Proof",
    desc: "Technology shifts every month. Our syllabus is reviewed quarterly alongside corporate engineering directors to keep pace with AI and spatial tech.",
  },
  {
    icon: HeartHandshake,
    title: "4. Radical Accessibility & Empathy",
    tag: "Youth Empowerment",
    desc: "We believe any driven mind can master tech. Whether coming from an arts degree or a remote village, our mentors meet each learner where they are.",
  },
];

export default function AboutValues() {
  return (
    <section className="relative z-10 py-24 sm:py-28 bg-[#050505] overflow-hidden select-none border-t border-white/[0.06]">
      {/* Background Subtle Tech Line */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1508] text-[#f6d96b] border border-[#f6d96b]/30 shadow-[0_0_20px_rgba(246,217,107,0.12)] mb-4">
            <Compass className="w-3.5 h-3.5 text-[#f6d96b]" />
            <span>The Third Eye Creed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Values That Guide Our{" "}
            <span className="bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] to-[#f59e0b] bg-clip-text text-transparent">
              Every Classroom
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Principles that have governed our classrooms since 2008 and will continue to inspire our next generation of digital pioneers.
          </p>
        </div>

        {/* 4 Values Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel-tech rounded-3xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f6d96b]/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1c160e] border border-[#f6d96b]/30 text-[#f6d96b] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#f6d96b] group-hover:text-black transition-all shadow-[0_0_20px_rgba(246,217,107,0.12)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#f6d96b] bg-[#f6d96b]/10 border border-[#f6d96b]/20 px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#f6d96b] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>UNCOMPROMISING</span>
                  <span className="text-zinc-300">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  CheckCircle2,
  XCircle,
  Sparkles,
  Shield,
  Plane,
  Award,
  Cpu,
  Boxes,
  Zap,
} from "lucide-react";
import mlChaudharyImg from "../../../assets/leadership/ml_chaudhary.png";

const philosophyPillars = [
  {
    icon: Cpu,
    title: "1. Analytical Insight",
    desc: "Seeing through algorithmic complexity. We train students to grasp the underlying system logic and architecture rather than merely memorizing syntax.",
  },
  {
    icon: Boxes,
    title: "2. Spatial Perception",
    desc: "Visualizing 3D volumes, character bone kinematics, and parametric CAD jewelry geometries before the first digital polygon is even manipulated.",
  },
  {
    icon: Zap,
    title: "3. Technological Foresight",
    desc: "Anticipating career paradigm shifts. From Web 1.0 to Full-Stack, Generative AI, and Spatial Computing—we keep learners 3 steps ahead.",
  },
];

const comparisons = [
  {
    feature: "Lab Workstation Access",
    traditional: "Shared PCs (2 to 3 students per screen) with outdated hardware.",
    thirdEye: "100% Dedicated High-Spec Workstation with RTX GPUs & dual displays.",
  },
  {
    feature: "Curriculum & Pedagogy",
    traditional: "Bookish rote memorization & passive blackboard lectures.",
    thirdEye: "Hands-on studio production with live client simulations & Git portfolios.",
  },
  {
    feature: "Mentorship Caliber",
    traditional: "Recent graduates or non-practicing theoretical teachers.",
    thirdEye: "Seasoned industry directors with 10 to 25+ years in MNCs and VFX studios.",
  },
  {
    feature: "Certification & Verification",
    traditional: "Unverified paper printouts not accepted by corporate HR.",
    thirdEye: "Govt. Recognized & ISO 9001:2015 accredited with instant QR/Roll validation.",
  },
  {
    feature: "Career & Placement",
    traditional: "Zero accountability once the course fees are collected.",
    thirdEye: "Dedicated Placement Cell with 150+ hiring partners and interview bootcamps.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section id="philosophy" className="relative z-10 py-24 sm:py-28 bg-[#050505] overflow-hidden select-none border-t border-white/[0.06]">
      {/* Background glow and subtle dots */}
      <div className="absolute inset-0 bg-cyber-dots opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#f6d96b]/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1508] text-[#f6d96b] border border-[#f6d96b]/30 shadow-[0_0_20px_rgba(246,217,107,0.12)] mb-4">
            <Eye className="w-3.5 h-3.5 text-[#f6d96b]" />
            <span>The Genesis & The Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Why the Name{" "}
            <span className="bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] to-[#f59e0b] bg-clip-text text-transparent">
              "Third Eye"?
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            In philosophy, the Third Eye symbolizes awakening and perception beyond physical sight. In technology, it represents the ability to foresee solutions, master invisible logic, and engineer things that didn't exist before.
          </p>
        </div>

        {/* 3 Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {philosophyPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel-tech rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f6d96b]/50"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#1f190e] border border-[#f6d96b]/30 text-[#f6d96b] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#f6d96b] group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(246,217,107,0.15)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f6d96b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>CORE INTELLECT</span>
                  <span className="text-[#f6d96b] font-bold">0{idx + 1} / 03</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── THE FOUNDER'S TRIBUTE & IAF MILITARY PEDIGREE ── */}
        <div className="glass-panel-highlight rounded-3xl p-6 sm:p-10 md:p-12 mb-20 border border-[#f6d96b]/30 relative overflow-hidden">
          {/* Subtle Ambient Watermark */}
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 translate-x-10 translate-y-10">
            <Plane className="w-96 h-96 text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Founder Photo */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] to-[#f59e0b] opacity-40 blur-lg group-hover:opacity-75 transition duration-500" />
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden bg-[#120f0a] border-2 border-[#f6d96b]/50 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                  <img
                    src={mlChaudharyImg}
                    alt="Mr. M.L. Chaudhary - Founder & Chief Patron"
                    className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-extrabold text-white">Mr. M.L. Chaudhary</h4>
                <div className="text-xs font-mono font-bold text-[#f6d96b] uppercase tracking-wider mt-0.5">
                  Founder & Chief Patron
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px] text-zinc-300 mt-2 font-medium">
                  <Shield className="w-3 h-3 text-[#f6d96b]" />
                  <span>Indian Air Force Veteran • IAF Commendation</span>
                </div>
              </div>
            </div>

            {/* Founder's Story & Creed */}
            <div className="lg:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#261907] text-[#f6d96b] border border-[#f6d96b]/30">
                <Plane className="w-3.5 h-3.5 text-[#f6d96b]" />
                <span>Roots of Military Precision & Technical Rigor</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                "Arise, Awake, and Stop Not Till the Goal is Reached."
              </h3>

              <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                <p>
                  As an accredited technical safety inspector in the aviation wing of the <strong className="text-white">Indian Air Force</strong> and recipient of the esteemed <strong className="text-[#f6d96b]">Indian Air Force Commendation</strong>, Mr. M.L. Chaudhary operated where a 0.1% margin of error was never tolerated.
                </p>
                <p>
                  In 2008, he observed that young minds in Rajasthan were hungry for technology careers but were being shortchanged by obsolete computer institutes offering blackboard lectures and shared terminals. He resolved to bring military-standard discipline, modern lab infrastructure, and uncompromising practical training to computer education.
                </p>
                <blockquote className="p-4 rounded-2xl bg-black/40 border-l-4 border-[#f6d96b] text-zinc-200 text-sm italic font-serif">
                  "Our mission is to plant the seed of true digital craftsmanship in every youth—guiding them through the philosophy of Swami Vivekananda until their ultimate career milestone is triumphantly unlocked."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* ── THE COMPARISON MATRIX (TRADITIONAL VS THIRD EYE) ── */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              The Third Eye Studio Standard
            </h3>
            <p className="text-zinc-400 text-sm">
              How we re-engineered vocational computer education from the ground up.
            </p>
          </div>

          <div className="glass-panel-tech rounded-3xl overflow-hidden border border-[#f6d96b]/20 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-[#120e08]/90 text-xs sm:text-sm uppercase tracking-wider font-mono">
                    <th className="py-4 px-6 text-zinc-400 font-semibold w-1/4">Aspect</th>
                    <th className="py-4 px-6 text-red-400/90 font-semibold w-3/8">
                      Typical Computer Institute
                    </th>
                    <th className="py-4 px-6 text-[#f6d96b] font-bold w-3/8 bg-[#f6d96b]/5">
                      Third Eye Computer Classes
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                  {comparisons.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-4 px-6 font-bold text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-zinc-400">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-zinc-200 bg-[#f6d96b]/[0.03] font-medium">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#f6d96b] shrink-0 mt-0.5" />
                          <span className="text-white">{row.thirdEye}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

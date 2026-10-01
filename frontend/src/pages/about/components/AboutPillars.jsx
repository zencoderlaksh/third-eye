import React from "react";
import {
  Monitor,
  Users2,
  Award,
  Briefcase,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    number: "01",
    icon: Monitor,
    title: "100% Hands-On Studio Architecture",
    tagline: "One Student = One Dedicated Workstation",
    description:
      "We strictly ban passive whiteboard-only lectures. From the first hour, every learner operates their own high-spec terminal equipped with NVIDIA RTX graphics, dual displays, and licensed creative suites. You learn by coding, rigging, modeling, and deploying.",
    bullets: [
      "Zero shared terminals — guaranteed 1:1 seat allocation",
      "Git-based source control and live production deployment",
      "Daily lab assignments reviewed individually by faculty",
    ],
  },
  {
    number: "02",
    icon: Users2,
    title: "Veteran Industry-Practitioner Faculty",
    tagline: "Mentored by 10 to 25+ Year Industry Directors",
    description:
      "Our faculty members are not fresh graduates reading from textbooks. They are seasoned software engineers, 3D studio art directors, and CAD master-jewelers with decades of commercial experience across top MNCs and studios.",
    bullets: [
      "Real-world architecture patterns & production secrets",
      "Individual portfolio critique and code optimizations",
      "Direct guidance on freelancing, contracts, and studio etiquette",
    ],
  },
  {
    number: "03",
    icon: Award,
    title: "Govt. Recognized & ISO 9001:2015 Certified",
    tagline: "Globally Validated & Online Verifiable Credentials",
    description:
      "Every diploma and certificate issued by Third Eye carries the weight of ISO 9001:2015 educational compliance and government-recognized standards. Our credentials are valid for public sector examinations and corporate MNC recruitment.",
    bullets: [
      "ISO 9001:2015 certified quality management curriculum",
      "Instant 24/7 online credential validation via Roll Number",
      "Accepted by leading IT recruiters across India & abroad",
    ],
  },
  {
    number: "04",
    icon: Briefcase,
    title: "Dedicated Career Cell & 150+ Hiring Partners",
    tagline: "From First Demo Class to Final Appointment Letter",
    description:
      "Our dedicated Placement Cell operates round the clock to bridge our talent with top hiring enterprises. We conduct mock technical interviews, resume overhauls, LinkedIn profile optimization, and direct campus recruitment drives.",
    bullets: [
      "150+ active hiring partners in software, VFX, & design",
      "Pre-placement behavioral workshops & aptitude drills",
      "Alumni network mentorship and lifetime career support",
    ],
  },
];

export default function AboutPillars() {
  return (
    <section id="pillars" className="relative z-10 py-24 sm:py-28 bg-[#050505] overflow-hidden select-none border-t border-white/[0.06]">
      {/* Background glow and subtle dots */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#f6d96b]/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1508] text-[#f6d96b] border border-[#f6d96b]/30 shadow-[0_0_20px_rgba(246,217,107,0.12)] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#f6d96b]" />
            <span>The Educational Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            The 4 Architectural Pillars of{" "}
            <span className="bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] to-[#f59e0b] bg-clip-text text-transparent">
              Third Eye Pedagogy
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Engineered over 18 years to guarantee that every student graduates with verified capability, portfolio proof, and career readiness.
          </p>
        </div>

        {/* 4 Pillars Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel-tech rounded-3xl p-7 sm:p-9 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f6d96b]/50 relative overflow-hidden"
              >
                {/* Glowing Corner Badge */}
                <div className="absolute top-0 right-0 p-6 sm:p-8 pointer-events-none">
                  <span className="text-5xl sm:text-6xl font-black font-mono text-white/[0.04] group-hover:text-[#f6d96b]/10 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <div className="relative z-10">
                  {/* Icon and Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#1c160e] border border-[#f6d96b]/35 text-[#f6d96b] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#f6d96b] group-hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(246,217,107,0.15)]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#f6d96b] transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <div className="text-xs font-semibold uppercase tracking-wider text-[#f6d96b] mb-4">
                    {pillar.tagline}
                  </div>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                    {pillar.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#f6d96b] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>THIRD EYE STANDARDS</span>
                  <span className="text-[#f6d96b] font-bold">100% ASSURED</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Link Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 px-6 rounded-2xl bg-[#120e08] border border-[#f6d96b]/25 text-xs sm:text-sm text-zinc-300">
            <span>Interested in experiencing our studio labs in person?</span>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-1.5 font-bold text-[#f6d96b] hover:text-white transition-colors"
            >
              <span>Book a Free Walkthrough Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

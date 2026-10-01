import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Award,
  Users,
  Building,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import logo from "../../../assets/logo.webp";

const quickStats = [
  { value: "18+", label: "Years of Excellence", sub: "Since 2008 in Jaipur" },
  { value: "25,000+", label: "Graduates Enlightened", sub: "Placed Across Global Tech" },
  { value: "300+", label: "Industry Modules", sub: "Animation, CAD, Full-Stack, AI" },
  { value: "98.4%", label: "Placement Success", sub: "150+ Corporate Recruiters" },
];

const jumpLinks = [
  { label: "The Genesis", href: "#philosophy" },
  { label: "Our 18-Yr Journey", href: "#timeline" },
  { label: "4 Pedagogy Pillars", href: "#pillars" },
  { label: "Leadership", href: "#leadership" },
  { label: "Studio Labs", href: "#infrastructure" },
  { label: "Alumni Impact", href: "#impact" },
];

export default function AboutHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative z-10 min-h-[92vh] pt-36 sm:pt-40 md:pt-44 pb-16 sm:pb-20 overflow-hidden flex flex-col justify-between bg-[#050505]"
    >
      {/* Dynamic Golden Tech Mesh Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-80 pointer-events-none -z-10" />

      {/* Cybernetic Radial Focal Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] pointer-events-none -z-10 blur-[140px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(246, 217, 107, 0.28) 0%, rgba(217, 119, 6, 0.12) 50%, transparent 80%)",
          transform: `translate(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px))`,
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Secondary Ambient Accent Glow */}
      <div className="absolute top-10 right-[10%] w-[380px] h-[380px] rounded-full bg-[#f6d96b]/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[8%] w-[420px] h-[420px] rounded-full bg-[#b45309]/10 blur-[130px] pointer-events-none -z-10" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto">
        {/* Top Accreditation Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold bg-[#120e08]/90 text-[#f6d96b] border border-[#f6d96b]/35 shadow-[0_0_25px_rgba(246,217,107,0.15)] backdrop-blur-md mb-6 sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f6d96b] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f6d96b]" />
          </span>
          <span className="tracking-widest uppercase font-mono font-bold text-[11px] sm:text-xs">
            ESTD. 2008 • JAIPUR, RAJASTHAN
          </span>
          <span className="hidden md:inline text-zinc-500">•</span>
          <span className="hidden md:inline text-zinc-300 font-medium">
            18+ Years Defining Modern Computer Education
          </span>
        </motion.div>

        {/* Central Eye Aperture Geometric Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-6 sm:mb-8 inline-block"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-gradient-to-br from-[#1f190f] via-[#100d08] to-[#080603] border border-[#f6d96b]/40 shadow-[0_0_40px_rgba(246,217,107,0.22)] p-3 flex items-center justify-center group">
            {/* Ambient Eye Ring */}
            <div className="absolute inset-0 rounded-3xl bg-[#f6d96b]/10 blur-md group-hover:bg-[#f6d96b]/20 transition-all duration-500 pointer-events-none" />
            <img
              src={logo}
              alt="Third Eye Computer Classes Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(246,217,107,0.5)] transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Grand Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] sm:leading-[1.08] max-w-5xl mb-6"
        >
          Enlightening Success.{" "}
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] via-[#eab308] to-[#f59e0b] bg-clip-text text-transparent">
            The Third Eye Journey.
          </span>
        </motion.h1>

        {/* Detailed Narrative Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mb-10 sm:mb-12"
        >
          Born from the disciplined vision of an <span className="text-zinc-100 font-semibold">Indian Air Force veteran</span> in 2008 with just five workstations,{" "}
          <strong className="text-[#f6d96b] font-semibold">Third Eye Computer Classes</strong> has grown into Jaipur's foremost technology academy. We unite military-grade precision with cutting-edge 3D Animation, CAD Matrix, Full-Stack Engineering, and AI.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14 sm:mb-16"
        >
          <a
            href="#timeline"
            onClick={(e) => scrollToSection(e, "#timeline")}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-[#ffe894] via-[#f6d96b] to-[#f59e0b] hover:from-[#fff0ad] hover:via-[#fedf7c] hover:to-[#f59e0b] shadow-[0_0_30px_rgba(246,217,107,0.35)] hover:shadow-[0_0_40px_rgba(246,217,107,0.55)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Explore The 18-Year Odyssey</span>
            <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 stroke-[2.5]" />
          </a>

          <Link
            to="/courses"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm sm:text-base text-zinc-200 bg-[#120e08]/90 border border-[#f6d96b]/30 hover:border-[#f6d96b]/60 hover:text-white hover:bg-[#1c160d] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          >
            <span>Browse 300+ Courses</span>
            <ArrowUpRight className="w-4 h-4 text-[#f6d96b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* 4 Quick Impact Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-5xl"
        >
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel-tech rounded-2xl p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#f6d96b]/50 group"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono tracking-tight text-white group-hover:text-[#f6d96b] transition-colors mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-200 mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Jump Navigation Pill Bar */}
      <div className="relative z-10 w-full mt-12 sm:mt-16 pt-6 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto hide-scrollbar flex items-center justify-start sm:justify-center gap-2 sm:gap-3 py-1">
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 shrink-0 mr-1 hidden sm:inline">
            Quick Navigation:
          </span>
          {jumpLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-300 hover:text-[#f6d96b] bg-white/[0.03] hover:bg-[#f6d96b]/10 border border-white/[0.08] hover:border-[#f6d96b]/30 transition-all duration-150 shrink-0 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

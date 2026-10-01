import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowUpRight,
  PhoneCall,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#080603] py-24 sm:py-28 border-t border-white/[0.08] select-none">
      {/* Background Ambience: Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-70 pointer-events-none -z-10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080603] via-[#120c06]/50 to-[#080603] -z-10" />

      {/* Ambient Central Lens Flare */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#f6d96b]/[0.08] rounded-full blur-[140px] -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1f1609] text-[#f6d96b] border border-[#f6d96b]/35 shadow-[0_0_25px_rgba(246,217,107,0.15)] mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#f6d96b]" />
          <span>Write Your Chapter in the Third Eye Story</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6">
          Ready to Step Into the{" "}
          <span className="bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] to-[#f59e0b] bg-clip-text text-transparent">
            Next Dimension?
          </span>
        </h2>

        {/* Supporting description */}
        <p className="text-zinc-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-10 font-normal">
          Whether you want to animate cinematic 3D characters, design micrometer-accurate CAD jewelry, architect scalable full-stack web applications, or master AI tools—our labs are ready for you.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            to="/courses"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-zinc-950 bg-gradient-to-r from-[#ffe894] via-[#f6d96b] to-[#f59e0b] hover:from-[#fff0ad] hover:via-[#fedf7c] hover:to-[#f59e0b] shadow-[0_0_30px_rgba(246,217,107,0.4)] hover:shadow-[0_0_40px_rgba(246,217,107,0.6)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore 300+ Tech & Creative Courses</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
          </Link>

          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-zinc-100 bg-[#120e08]/90 border border-[#f6d96b]/35 hover:border-[#f6d96b]/60 hover:text-white hover:bg-[#1a140c] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.7)]"
          >
            <PhoneCall className="w-4 h-4 text-[#f6d96b] transition-transform group-hover:scale-110" />
            <span>Book Free Lab Walkthrough</span>
          </Link>
        </div>

        {/* Contact Hotline Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-300 mb-10 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">Admissions Helpline:</span>
            <a href="tel:+919876543210" className="text-[#f6d96b] hover:underline font-bold">
              +91 9876543210
            </a>
          </div>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">Email:</span>
            <a href="mailto:info@thirdeyeclasses.com" className="text-[#f6d96b] hover:underline font-bold">
              info@thirdeyeclasses.com
            </a>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="inline-flex flex-wrap items-center justify-center gap-y-2 gap-x-6 sm:gap-x-8 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f6d96b]" />
            <span className="text-zinc-300">18+ Years Legacy in Jaipur</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f6d96b]" />
            <span className="text-zinc-300">25,000+ Placed Students</span>
          </div>
          <span className="text-zinc-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f6d96b]" />
            <span className="text-zinc-300">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}

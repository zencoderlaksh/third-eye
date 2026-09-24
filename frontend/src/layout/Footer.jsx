import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  ShieldCheck,
  Award,
  Sparkles,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from "lucide-react";
import logo from "../assets/logo.webp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const usefulLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about-us" },
    { label: "Courses", to: "/courses" },
    { label: "Our Team", to: "/our-team" },
    { label: "Contact Us", to: "/contact-us" },
  ];

  return (
    <footer
      className="relative overflow-hidden text-zinc-300 border-t border-[#f6d96b]/20"
      style={{
        backgroundColor: "#080705",
        backgroundImage: `
          radial-gradient(circle 600px at 10% 10%, rgba(246, 217, 107, 0.14) 0%, rgba(217, 119, 6, 0.04) 50%, transparent 80%),
          radial-gradient(circle 550px at 90% 10%, rgba(180, 83, 9, 0.14) 0%, rgba(120, 53, 15, 0.03) 50%, transparent 80%),
          radial-gradient(ellipse 800px 350px at 50% 100%, rgba(217, 119, 6, 0.10) 0%, rgba(45, 23, 5, 0.06) 60%, transparent 85%),
          radial-gradient(circle at 50% 50%, rgba(61, 38, 12, 0.08) 0%, transparent 60%)
        `,
      }}
    >
      {/* ── LUXURY WARM YELLOW-BROWN & DARK AMBIENT GLOWS ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-Left Warm Golden Amber Glow */}
        <div
          className="absolute -top-32 -left-16 w-[620px] h-[360px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(246, 217, 107, 0.20) 0%, rgba(217, 119, 6, 0.07) 50%, transparent 70%)",
          }}
        />

        {/* Top-Right Warm Bronze & Molten Brown Glow */}
        <div
          className="absolute -top-24 -right-16 w-[580px] h-[360px] rounded-full blur-[135px]"
          style={{
            background:
              "radial-gradient(circle, rgba(217, 119, 6, 0.16) 0%, rgba(120, 53, 15, 0.07) 50%, transparent 70%)",
          }}
        />

        {/* Center-Bottom Deep Espresso Atmosphere */}
        <div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[360px] rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(146, 64, 14, 0.14) 0%, rgba(45, 23, 5, 0.08) 50%, transparent 80%)",
          }}
        />

        {/* Seamless 44px Tech Grid Pattern Matching Entire Site */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(246, 217, 107, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(246, 217, 107, 0.02) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* Top Edge Ambient Golden-Bronze Beam */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#f6d96b]/70 via-[#d97706]/40 to-transparent pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-12">
        {/* ── TOP HIGHLIGHT BAR ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-[#f6d96b]/15">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1f1508] text-[#f6d96b] border border-[#f6d96b]/30 shadow-[0_0_15px_rgba(246,217,107,0.12)]">
              <span className="w-2 h-2 rounded-full bg-[#f6d96b] animate-ping" />
              Jaipur's Premier Creative Tech Academy
            </span>
            <span className="text-xs text-zinc-600 hidden sm:inline">•</span>
            <span className="text-xs text-zinc-400 hidden sm:inline font-medium">
              Empowering Careers Since 2012
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
            <span className="text-[#f6d96b] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#f6d96b]" />
              300+ Industry Programs
            </span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-300">25,000+ Students Mentored</span>
          </div>
        </div>

        {/* ── 3 CLEAN ARCHITECTURAL COLUMNS (5 : 3 : 4 = 12 Cols) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
          {/* ============================================================ */}
          {/* COLUMN 1: Brand Headquarters (lg:col-span-5)                  */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo & Status Badge */}
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/" className="inline-block group focus-visible:outline-none">
                <img
                  src={logo}
                  alt="Third Eye Computer Classes"
                  className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_20px_rgba(246,217,107,0.3)]"
                  loading="lazy"
                />
              </Link>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1c1307] border border-[#f6d96b]/30 text-[11px] font-bold text-[#f6d96b]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f6d96b] animate-pulse" />
                Admissions Open 2026-27
              </span>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-[17px] text-zinc-300 leading-relaxed font-normal max-w-lg">
              Unlock the power of tech with{" "}
              <strong className="text-white font-semibold">Thirdeye Computer Classes</strong>!
              300+ courses to help you become a coding whiz, digital marketing expert, and more.
            </p>

            {/* Unified Dark-Gold Social Media Hub */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Official Channels
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 rounded-xl bg-[#181208] border border-[#f6d96b]/20 hover:border-[#f6d96b] text-zinc-300 hover:text-[#f6d96b] hover:bg-[#f6d96b]/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(246,217,107,0.3)] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-xl bg-[#181208] border border-[#f6d96b]/20 hover:border-[#f6d96b] text-zinc-300 hover:text-[#f6d96b] hover:bg-[#f6d96b]/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(246,217,107,0.3)] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-xl bg-[#181208] border border-[#f6d96b]/20 hover:border-[#f6d96b] text-zinc-300 hover:text-[#f6d96b] hover:bg-[#f6d96b]/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(246,217,107,0.3)] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-[#181208] border border-[#f6d96b]/20 hover:border-[#f6d96b] text-zinc-300 hover:text-[#f6d96b] hover:bg-[#f6d96b]/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(246,217,107,0.3)] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="w-11 h-11 rounded-xl bg-[#181208] border border-[#f6d96b]/20 hover:border-[#f6d96b] text-zinc-300 hover:text-[#f6d96b] hover:bg-[#f6d96b]/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(246,217,107,0.3)] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-11 h-11 rounded-xl bg-[#181208] border border-[#f6d96b]/20 hover:border-[#f6d96b] text-zinc-300 hover:text-[#f6d96b] hover:bg-[#f6d96b]/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(246,217,107,0.3)] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Trust Pill */}
            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-[#f6d96b]" />
              <span>100% Practical Industry Training & Placement Assistance</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: Useful Links (lg:col-span-3)                       */}
          {/* ============================================================ */}
          <div className="lg:col-span-3 space-y-5">
            <div>
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.2em] text-[#f6d96b] flex items-center gap-2">
                <span>USEFUL LINK</span>
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#f6d96b] to-transparent mt-2" />
            </div>

            <ul className="space-y-3">
              {usefulLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    className="group flex items-center gap-2.5 text-zinc-300 hover:text-[#f6d96b] font-semibold text-base sm:text-[17px] transition-colors py-1"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#f6d96b] transition-transform duration-200 group-hover:translate-x-1.5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 3: Contact (lg:col-span-4)                            */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-[0.2em] text-[#f6d96b] flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#f6d96b]" />
                  <span>CONTACT</span>
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Help
                </span>
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#f6d96b] to-transparent mt-2" />
            </div>

            <div className="space-y-4">
              {/* Online Timings Card */}
              <div className="p-4 rounded-2xl bg-[#140e06]/80 border border-[#f6d96b]/20 hover:border-[#f6d96b]/40 transition-all duration-200 group/call">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span className="flex items-center gap-1.5 text-white font-bold text-sm sm:text-base">
                    <Clock className="w-4 h-4 text-[#f6d96b]" />
                    Online: 11am - 8pm
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#f6d96b] bg-[#f6d96b]/10 px-2 py-0.5 rounded border border-[#f6d96b]/20">
                    Online Helpline
                  </span>
                </div>
                <a
                  href="tel:+919876543210"
                  className="text-2xl sm:text-[26px] font-black font-mono text-[#f6d96b] hover:text-[#ffe07a] transition-colors block tracking-tight mt-1 whitespace-nowrap"
                >
                  +91 9876543210
                </a>
              </div>

              {/* Offline Timings Card */}
              <div className="p-4 rounded-2xl bg-[#140e06]/80 border border-[#f6d96b]/20 hover:border-[#f6d96b]/40 transition-all duration-200 group/call">
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-1">
                  <span className="flex items-center gap-1.5 text-white font-bold text-sm sm:text-base">
                    <Clock className="w-4 h-4 text-[#f6d96b]" />
                    Offline: 8am - 8pm
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#f6d96b] bg-[#f6d96b]/10 px-2 py-0.5 rounded border border-[#f6d96b]/20">
                    Campus Walk-in
                  </span>
                </div>
                <a
                  href="tel:+919876543211"
                  className="text-2xl sm:text-[26px] font-black font-mono text-[#f6d96b] hover:text-[#ffe07a] transition-colors block tracking-tight mt-1 whitespace-nowrap"
                >
                  +91 9876543211
                </a>
              </div>

              {/* Email Card */}
              <div className="p-3.5 rounded-2xl bg-[#140e06]/80 border border-[#f6d96b]/20 hover:border-[#f6d96b]/40 transition-all duration-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#f6d96b]/10 border border-[#f6d96b]/25 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#f6d96b]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-zinc-400 block font-medium">Inquiry Email</span>
                  <a
                    href="mailto:info@thirdeyeclasses.com"
                    className="text-base sm:text-[17px] font-bold text-zinc-200 hover:text-[#f6d96b] transition-colors block truncate"
                  >
                    info@thirdeyeclasses.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BOTTOM COPYRIGHT & COMPLIANCE BAR                            */}
        {/* ============================================================ */}
        <div className="mt-14 pt-8 border-t border-[#f6d96b]/15 flex flex-col md:flex-row items-center justify-between gap-5 text-sm">
          {/* Copyright Notice */}
          <div className="text-zinc-400 text-center md:text-left text-sm sm:text-base font-normal">
            © {new Date().getFullYear()}{" "}
            <strong className="text-white font-bold">Third Eye Computer Classes</strong>. All
            rights reserved.
          </div>

          {/* Quality & Certification Badges */}
          <div className="flex items-center gap-6 text-zinc-300 text-sm sm:text-base font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#f6d96b]" />
              <span>ISO 9001 Certified</span>
            </div>
            <span className="text-zinc-700">|</span>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#f6d96b]" />
              <span>Govt. Recognized</span>
            </div>
          </div>

          {/* Back to top button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181208] border border-[#f6d96b]/25 hover:border-[#f6d96b] text-zinc-300 hover:text-[#f6d96b] hover:bg-[#f6d96b]/15 text-sm sm:text-base font-bold transition-all duration-200 group focus:outline-none shadow-[0_0_15px_rgba(246,217,107,0.1)]"
            >
              <span>Back to top</span>
              <div className="p-1 rounded-full bg-[#f6d96b]/10 group-hover:bg-[#f6d96b]/20 group-hover:-translate-y-0.5 transition-all">
                <ArrowUp className="w-4 h-4 text-[#f6d96b]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

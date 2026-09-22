import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  ShieldCheck,
  Award,
} from "lucide-react";
import logo from "../assets/logo.webp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#181408] via-[#0c0a07] to-[#050505] text-zinc-300 border-t border-[#f3cf65]/15">
      {/* Top Edge Ambient Golden Beam */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#f3cf65]/50 to-transparent pointer-events-none" />

      {/* Yellow & Black Atmospheric Gradient Mixing Flares */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#f3cf65]/15 via-[#ffd35a]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-[-100px] w-80 h-80 bg-[#f3cf65]/[0.06] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-50px] w-96 h-96 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ============================================================ */}
          {/* COLUMN 1: Brand Logo & Social Buttons                        */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <Link to="/" className="inline-block group focus-visible:outline-none">
              <img
                src={logo}
                alt="Third Eye Logo"
                className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(243,207,101,0.25)]"
                loading="lazy"
              />
            </Link>

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Empowering future tech leaders with industry-grade software engineering,
              multimedia animation, and modern computing education.
            </p>

            {/* Social Media Channels (Sheryians Style Rounded Glass Pills) */}
            <div className="flex items-center gap-3 pt-1">
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#f3cf65] hover:border-[#f3cf65] hover:shadow-[0_0_20px_rgba(243,207,101,0.4)] transition-all duration-200"
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
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#f3cf65] hover:border-[#f3cf65] hover:shadow-[0_0_20px_rgba(243,207,101,0.4)] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#f3cf65] hover:border-[#f3cf65] hover:shadow-[0_0_20px_rgba(243,207,101,0.4)] transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* X (formerly Twitter) */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] flex items-center justify-center text-zinc-300 hover:text-black hover:bg-[#f3cf65] hover:border-[#f3cf65] hover:shadow-[0_0_20px_rgba(243,207,101,0.4)] transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: ABOUT                                              */}
          {/* ============================================================ */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              About
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/about-us"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/our-certification"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  Our Certification
                </Link>
              </li>
              <li>
                <Link
                  to="/certificate-verification"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  Verify Certificate
                </Link>
              </li>
              <li>
                <Link
                  to="/student-reviews"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  Student Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 3: COMPANY                                            */}
          {/* ============================================================ */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/jobs-and-placement"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  Hire From Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-team"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  Mentors & Faculty
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  Franchise
                </Link>
              </li>
              <li>
                <Link
                  to="/pay-now"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  Pricing & Fees
                </Link>
              </li>
              <li>
                <Link
                  to="/sweet-memories"
                  className="text-zinc-400 hover:text-[#f3cf65] transition-colors duration-200"
                >
                  Campus Memories
                </Link>
              </li>
            </ul>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 4: CONTACT (Sheryians Format: Online / Offline Hours) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h3>

            <div className="space-y-3.5 text-sm text-zinc-400">
              {/* Online Timings */}
              <div>
                <p className="font-semibold text-white">
                  Online: 11am - 8pm
                </p>
                <a
                  href="tel:+919876543210"
                  className="text-[#f3cf65] hover:underline font-mono text-sm block mt-0.5"
                >
                  +91 9876543210
                </a>
              </div>

              {/* Offline Timings */}
              <div>
                <p className="font-semibold text-white">
                  Offline: 8am - 8pm
                </p>
                <a
                  href="tel:+919876543211"
                  className="text-[#f3cf65] hover:underline font-mono text-sm block mt-0.5"
                >
                  +91 9876543211
                </a>
              </div>

              {/* Email */}
              <div>
                <a
                  href="mailto:info@thirdeyeclasses.com"
                  className="hover:text-[#f3cf65] transition-colors block"
                >
                  info@thirdeyeclasses.com
                </a>
              </div>

              {/* Address */}
              <div className="text-xs text-zinc-500 leading-relaxed pt-1">
                Main Campus, Enlightening Success Academy,
                <br />
                Rajasthan, India - 302020
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM COPYRIGHT & COMPLIANCE BAR                            */}
      {/* ============================================================ */}
      <div className="relative z-10 border-t border-white/[0.06] bg-black/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            {/* Copyright */}
            <div className="text-zinc-400 text-center sm:text-left">
              © {new Date().getFullYear()}{" "}
              <strong className="text-zinc-200">Third Eye Computer Classes</strong>. All
              rights reserved.
            </div>

            {/* Quality & Recognition Badges */}
            <div className="flex items-center gap-4 text-zinc-400">
              <div className="flex items-center gap-1.5 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f3cf65]" />
                <span>ISO 9001 Certified</span>
              </div>
              <span className="text-zinc-700">|</span>
              <div className="flex items-center gap-1.5 text-[11px]">
                <Award className="w-3.5 h-3.5 text-[#f3cf65]" />
                <span>Govt. Recognized</span>
              </div>
            </div>

            {/* Back to top button */}
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#f3cf65] transition-colors group focus:outline-none"
              >
                <span>Back to top</span>
                <div className="p-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] group-hover:border-[#f3cf65]/40 group-hover:bg-[#f3cf65]/10 transition-colors">
                  <ArrowUp className="w-3 h-3 text-[#f3cf65]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

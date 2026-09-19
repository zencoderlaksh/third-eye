import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  ShieldCheck,
  Award,
  ArrowUp,
  Sparkles,
  Home,
  Building2,
  BookOpen,
  Users,
  PhoneCall,
} from "lucide-react";
import logo from "../assets/logo.webp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const branches = [
    { name: "Sanganer", tag: "Main Center" },
    { name: "Vidhyadhar Nagar", tag: "North Campus" },
    { name: "Pratap Nagar", tag: "Tech Hub" },
    { name: "Raja Park", tag: "Central" },
    { name: "Jagatpura", tag: "IT Lab" },
    { name: "Jhotwara", tag: "Branch" },
    { name: "Vaishali Nagar", tag: "Prime Lab" },
    { name: "Gopalpura", tag: "Coaching Hub" },
    { name: "Mansarovar", tag: "Mega Campus" },
    { name: "Sodala", tag: "Metro Center" },
  ];

  const usefulLinks = [
    { label: "Home", path: "/", icon: Home },
    { label: "About Us", path: "/about-us", icon: Building2 },
    { label: "Courses", path: "/courses", icon: BookOpen },
    { label: "Our Team", path: "/our-team", icon: Users },
    { label: "Contact Us", path: "/contact-us", icon: PhoneCall },
  ];

  return (
    <footer className="relative bg-[#07080D] border-t border-[#1C1F2E] text-zinc-400 overflow-hidden">
      {/* Ambient subtle yellow glow in background */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-yellow-400/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* ============================================================ */}
          {/* COLUMN 1: Brand Info, Bio, Contact & Social Links            */}
          {/* ============================================================ */}
          <div className="md:col-span-12 lg:col-span-4 space-y-6">
            {/* Logo */}
            <Link to="/" className="inline-block group focus:outline-none">
              <img
                src={logo}
                alt="Third Eye Computer Classes Logo"
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </Link>

            {/* Bio text from image */}
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Unlock the power of tech with <strong className="text-zinc-200">Thirdeye Computer Classes</strong>! 300+ courses to help you become a coding whiz, digital marketing expert, and more.
            </p>

            {/* Quick Contact Chips */}
            <div className="space-y-2.5 text-xs text-zinc-400 pt-1">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#141622] text-yellow-400 border border-zinc-800">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Admissions: <a href="tel:+919876543210" className="text-zinc-300 hover:text-yellow-400 font-semibold transition-colors">+91 98765 43210</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#141622] text-yellow-400 border border-zinc-800">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>Support: <a href="mailto:info@thirdeyeclasses.com" className="text-zinc-300 hover:text-yellow-400 font-medium transition-colors">info@thirdeyeclasses.com</a></span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#141622] text-yellow-400 border border-zinc-800">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Lab Hours: Mon – Sat (8:00 AM – 8:00 PM)</span>
              </div>
            </div>

            {/* Social Media Channels (Facebook, Instagram, YouTube, LinkedIn, Pinterest, X) */}
            <div className="pt-2">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Connect With Us
              </div>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/40 transition-all duration-200"
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
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#E1306C]/40 transition-all duration-200"
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
                  className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#FF0000]/40 transition-all duration-200"
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
                  className="w-8 h-8 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#0077B5]/40 transition-all duration-200"
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
                  className="w-8 h-8 rounded-full bg-[#BD081C] text-white flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-[#BD081C]/40 transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* X (formerly Twitter) */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-8 h-8 rounded-full bg-black text-white border border-zinc-700 flex items-center justify-center hover:scale-110 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 2: USEFUL LINKS                                       */}
          {/* ============================================================ */}
          <div className="md:col-span-5 lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-yellow-400 rounded-full" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                  Useful Links
                </h3>
              </div>
              <span className="text-[10px] font-bold bg-zinc-800/80 text-zinc-400 px-2 py-0.5 rounded-full">
                Quick Access
              </span>
            </div>

            <p className="text-xs text-zinc-400 mb-4">
              Direct access to essential institute information:
            </p>

            <div className="space-y-2.5">
              {usefulLinks.map((link, idx) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={idx}
                    to={link.path}
                    className="group flex items-center justify-between p-2.5 rounded-xl bg-[#0F111A] border border-[#1E212F] hover:border-yellow-400/40 hover:bg-[#151824] transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-zinc-200 group-hover:text-yellow-400 transition-colors">
                        {link.label}
                      </span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* COLUMN 3: JAIPUR BRANCHES (10 Campuses Across the City)      */}
          {/* Note: "Our Programs" is completely removed per user request  */}
          {/* ============================================================ */}
          <div className="md:col-span-8 lg:col-span-5">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-4 bg-yellow-400 rounded-full" />
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
                  Jaipur Branches
                </h3>
              </div>
              <span className="text-[10px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-2 py-0.5 rounded-full">
                10 Centers
              </span>
            </div>

            <p className="text-xs text-zinc-400 mb-4">
              State-of-the-art computer labs & authorized training facilities conveniently located across Jaipur:
            </p>

            {/* 10 Branches presented in modern 2-column interactive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {branches.map((branch, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-between p-2.5 rounded-xl bg-[#0F111A] border border-[#1E212F] hover:border-yellow-400/40 hover:bg-[#151824] transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-zinc-200 group-hover:text-yellow-400 transition-colors block">
                        {branch.name}
                      </span>
                      <span className="text-[9px] text-zinc-400 font-medium block">
                        {branch.tag}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM COPYRIGHT & COMPLIANCE BAR                            */}
      {/* ============================================================ */}
      <div className="border-t border-[#161824] bg-[#05060A] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            
            {/* Copyright Notice */}
            <div className="flex items-center gap-2 text-zinc-400 text-center md:text-left">
              <span>
                © {new Date().getFullYear()} <strong className="text-zinc-300">Third Eye Computer Classes</strong>. All rights reserved.
              </span>
              <span className="hidden sm:inline text-zinc-700">•</span>
              <span className="hidden sm:inline text-yellow-400 font-medium">Enlightening Success</span>
            </div>

            {/* Quality & Certification Badges */}
            <div className="flex items-center gap-4 text-zinc-400">
              <div className="flex items-center gap-1.5 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <span className="text-zinc-700">|</span>
              <div className="flex items-center gap-1.5 text-[11px]">
                <Award className="w-3.5 h-3.5 text-yellow-400" />
                <span>Govt. Recognized</span>
              </div>
            </div>

            {/* Back to top button */}
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-yellow-400 transition-colors group focus:outline-none"
              >
                <span>Back to top</span>
                <div className="p-1 rounded-full bg-[#12141F] border border-zinc-800 group-hover:border-yellow-400/40 transition-colors">
                  <ArrowUp className="w-3 h-3 text-yellow-400" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

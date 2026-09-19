import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  CreditCard,
  Building2,
  PhoneCall,
  Award,
  FileCheck,
  CheckCircle2,
  Star,
  Briefcase,
  Users,
  Camera,
  Sparkles,
  BookOpen,
  Building,
  ArrowRight,
  Code2,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({
    company: false,
    certification: false,
    riseAndShine: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navRef = useRef(null);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open for app-like UX
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle subtle border & background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile accordion section
  const toggleMobileSection = (section) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header
      role="banner"
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#090A0F]/95 backdrop-blur-md border-b border-[#272A38] shadow-2xl shadow-black/60"
          : "bg-[#090A0F] border-b border-[#1E212D]"
      }`}
    >
      {/* Main Navigation Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[84px] lg:min-h-[96px] py-2">
          
          {/* ============================================================ */}
          {/* LEFT: BRAND DISPLAY (Different for Desktop vs Mobile)        */}
          {/* ============================================================ */}

          {/* 1. DESKTOP / LAPTOP ONLY: Big prominent Logo image */}
          <div className="hidden lg:flex flex-shrink-0 items-center">
            <Link
              to="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded-xl p-1"
              aria-label="Third Eye Computer Classes - Enlightening Success Home"
            >
              <img
                src={logo}
                alt="Third Eye Computer Classes - Enlightening Success"
                className="h-16 sm:h-20 lg:h-22 xl:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />
            </Link>
          </div>

          {/* 2. MOBILE ONLY: Modern Tech Brand Mark & Institute Wordmark */}
          <div className="flex lg:hidden items-center">
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus-visible:outline-none"
              aria-label="Third Eye Computer Classes Home"
            >
              {/* High-Tech Coding & Computing Emblem */}
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 flex items-center justify-center text-black shadow-lg shadow-yellow-400/25 group-active:scale-95 transition-transform">
                <Code2 className="w-5 h-5 text-black stroke-[2.5]" />
              </div>

              {/* Institute Name in crisp typography */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-base font-black tracking-wide text-white leading-none font-sans">
                    THIRD <span className="text-yellow-400">EYE</span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                </div>
                <span className="text-[9px] font-bold tracking-widest text-zinc-400 uppercase mt-0.5">
                  Computer Classes
                </span>
              </div>
            </Link>
          </div>

          {/* ============================================================ */}
          {/* MIDDLE: 5 Navigation Items (Desktop / Laptop View)           */}
          {/* ============================================================ */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            <ul className="flex items-center space-x-1 xl:space-x-2 list-none m-0 p-0">
              {/* 1. COMPANY (Dropdown) */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === "company"}
                  aria-haspopup="true"
                  aria-controls="company-menu"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "company" ? null : "company"
                    )
                  }
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                    activeDropdown === "company" ||
                    isActive("/about-us") ||
                    isActive("/contact-us")
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-zinc-200 hover:text-yellow-400 hover:bg-[#141620]"
                  }`}
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "company"
                        ? "rotate-180 text-yellow-400"
                        : "text-zinc-400"
                    }`}
                  />
                </button>

                {/* Company Dropdown Menu */}
                {activeDropdown === "company" && (
                  <div
                    id="company-menu"
                    role="menu"
                    className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="bg-[#141620] border border-[#272A38] rounded-xl shadow-2xl shadow-black/80 p-2 backdrop-blur-xl">
                      <Link
                        to="/about-us"
                        role="menuitem"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-yellow-400/10 group transition-all"
                      >
                        <div className="p-2 rounded-lg bg-[#1C1F2D] text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors mt-0.5">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                            About Us
                          </div>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                            Our vision, heritage & pedagogy
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/contact-us"
                        role="menuitem"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-yellow-400/10 group transition-all mt-1"
                      >
                        <div className="p-2 rounded-lg bg-[#1C1F2D] text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors mt-0.5">
                          <PhoneCall className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                            Contact Us
                          </div>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                            Visit campus, reach out or inquire
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* 2. COURSES (Direct Link) */}
              <li>
                <Link
                  to="/courses"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                    isActive("/courses")
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-zinc-200 hover:text-yellow-400 hover:bg-[#141620]"
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-yellow-400/80" />
                  <span>Courses</span>
                </Link>
              </li>

              {/* 3. CERTIFICATION (Dropdown) */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("certification")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === "certification"}
                  aria-haspopup="true"
                  aria-controls="certification-menu"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "certification" ? null : "certification"
                    )
                  }
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                    activeDropdown === "certification" ||
                    isActive("/our-certification") ||
                    isActive("/apply-certificate") ||
                    isActive("/certificate-verification")
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-zinc-200 hover:text-yellow-400 hover:bg-[#141620]"
                  }`}
                >
                  <span>Certification</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "certification"
                        ? "rotate-180 text-yellow-400"
                        : "text-zinc-400"
                    }`}
                  />
                </button>

                {/* Certification Dropdown Menu */}
                {activeDropdown === "certification" && (
                  <div
                    id="certification-menu"
                    role="menu"
                    className="absolute left-0 top-full pt-2 w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="bg-[#141620] border border-[#272A38] rounded-xl shadow-2xl shadow-black/80 p-2 backdrop-blur-xl">
                      <Link
                        to="/our-certification"
                        role="menuitem"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-yellow-400/10 group transition-all"
                      >
                        <div className="p-2 rounded-lg bg-[#1C1F2D] text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors mt-0.5">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                            Our Certification
                          </div>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                            Govt. recognized & industry validated
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/apply-certificate"
                        role="menuitem"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-yellow-400/10 group transition-all mt-1"
                      >
                        <div className="p-2 rounded-lg bg-[#1C1F2D] text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors mt-0.5">
                          <FileCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                            Apply for Certificate
                          </div>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                            Request your course completion credential
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/certificate-verification"
                        role="menuitem"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-yellow-400/10 group transition-all mt-1"
                      >
                        <div className="p-2 rounded-lg bg-[#1C1F2D] text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                            <span>Certificate Verification</span>
                            <span className="text-[10px] bg-yellow-400/20 text-yellow-400 px-1.5 py-0.5 rounded font-bold">
                              Instant
                            </span>
                          </div>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                            Verify authenticity via Roll Number
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* 4. RISE AND SHINE (Dropdown with 4 options) */}
              <li
                className="relative"
                onMouseEnter={() => setActiveDropdown("riseAndShine")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === "riseAndShine"}
                  aria-haspopup="true"
                  aria-controls="rise-shine-menu"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "riseAndShine" ? null : "riseAndShine"
                    )
                  }
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                    activeDropdown === "riseAndShine" ||
                    isActive("/student-reviews") ||
                    isActive("/jobs-and-placement") ||
                    isActive("/our-team") ||
                    isActive("/sweet-memories")
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-zinc-200 hover:text-yellow-400 hover:bg-[#141620]"
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                  <span>Rise and Shine</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "riseAndShine"
                        ? "rotate-180 text-yellow-400"
                        : "text-zinc-400"
                    }`}
                  />
                </button>

                {/* Rise and Shine Dropdown Menu */}
                {activeDropdown === "riseAndShine" && (
                  <div
                    id="rise-shine-menu"
                    role="menu"
                    className="absolute left-0 top-full pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="bg-[#141620] border border-[#272A38] rounded-xl shadow-2xl shadow-black/80 p-2 backdrop-blur-xl">
                      {/* Option 1: Students Reviews */}
                      <Link
                        to="/student-reviews"
                        role="menuitem"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-yellow-400/10 group transition-all"
                      >
                        <div className="p-2 rounded-lg bg-[#1C1F2D] text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors mt-0.5">
                          <Star className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                            1. Students Reviews
                          </div>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                            Alumni testimonials & success ratings
                          </p>
                        </div>
                      </Link>

                      {/* Option 2: Jobs and Placement */}
                      <Link
                        to="/jobs-and-placement"
                        role="menuitem"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-yellow-400/10 group transition-all mt-1"
                      >
                        <div className="p-2 rounded-lg bg-[#1C1F2D] text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors mt-0.5">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                            2. Jobs and Placement
                          </div>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                            Recruitment drives & partner companies
                          </p>
                        </div>
                      </Link>

                      {/* Option 3: Our Team */}
                      <Link
                        to="/our-team"
                        role="menuitem"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-yellow-400/10 group transition-all mt-1"
                      >
                        <div className="p-2 rounded-lg bg-[#1C1F2D] text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors mt-0.5">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                            3. Our Team
                          </div>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                            Meet our certified mentors & faculty
                          </p>
                        </div>
                      </Link>

                      {/* Option 4: Sweet Memories */}
                      <Link
                        to="/sweet-memories"
                        role="menuitem"
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-yellow-400/10 group transition-all mt-1"
                      >
                        <div className="p-2 rounded-lg bg-[#1C1F2D] text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors mt-0.5">
                          <Camera className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                            4. Sweet Memories
                          </div>
                          <p className="text-xs text-zinc-400 group-hover:text-zinc-300 line-clamp-1">
                            Moments, lab activities & celebrations
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* 5. FRANCHISE (Direct Link) */}
              <li>
                <Link
                  to="/franchise"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                    isActive("/franchise")
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-zinc-200 hover:text-yellow-400 hover:bg-[#141620]"
                  }`}
                >
                  <Building className="w-4 h-4 text-yellow-400/80" />
                  <span>Franchise</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* ============================================================ */}
          {/* RIGHT: Pay Now Button & Mobile Hamburger Menu Button         */}
          {/* ============================================================ */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* PAY NOW CTA BUTTON (Desktop / Laptop only - on mobile it is in the sidebar drawer) */}
            <Link
              to="/pay-now"
              className="hidden lg:inline-flex relative items-center justify-center gap-2 px-5 py-2.5 text-sm font-extrabold text-black bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/25 hover:bg-yellow-300 hover:shadow-yellow-400/40 active:scale-95 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-black"
              aria-label="Pay Course Fees or Registration Now"
            >
              <CreditCard className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Pay Now</span>
              <ArrowRight className="w-3.5 h-3.5 -ml-0.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label="Toggle Navigation Menu"
                className={`p-2 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                  mobileMenuOpen
                    ? "bg-yellow-400 text-black shadow-md shadow-yellow-400/20"
                    : "bg-[#141622] border border-[#272A38] text-zinc-300 hover:text-yellow-400 hover:border-yellow-400/40"
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 stroke-[2.5]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE NAVIGATION DRAWER (Full-screen app style sheet)       */}
      {/* ============================================================ */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="navigation"
          aria-label="Mobile Navigation"
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[#090A0F]/98 backdrop-blur-2xl border-t border-[#1F2230] p-4 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-4">
            {/* Quick Action Pills: Fast access to Certificate & Helpline */}
            <div className="grid grid-cols-2 gap-2.5">
              <Link
                to="/certificate-verification"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#141622] border border-[#272A38] text-xs font-semibold text-yellow-400 hover:border-yellow-400/40 active:scale-95 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                <span>Verify Roll No</span>
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#141622] border border-[#272A38] text-xs font-semibold text-zinc-300 hover:text-white active:scale-95 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-yellow-400" />
                <span>Call Helpline</span>
              </a>
            </div>

            {/* Menu Items Accordion / Cards List */}
            <ul className="space-y-2 list-none p-0 m-0">
              {/* 1. Mobile Company (Accordion Card) */}
              <li className="bg-[#12141D] border border-[#222533] rounded-2xl overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("company")}
                  className="w-full flex items-center justify-between p-3.5 text-sm font-semibold text-zinc-100 hover:text-yellow-400"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span>Company</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileExpanded.company ? "rotate-180 text-yellow-400" : "text-zinc-500"
                    }`}
                  />
                </button>
                {mobileExpanded.company && (
                  <div className="px-3.5 pb-3.5 pt-1 space-y-1.5 border-t border-[#1C1F2B]">
                    <Link
                      to="/about-us"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#171924] text-xs text-zinc-300 hover:text-yellow-400 active:bg-yellow-400/10 transition-colors"
                    >
                      <span>About Us</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                    </Link>
                    <Link
                      to="/contact-us"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#171924] text-xs text-zinc-300 hover:text-yellow-400 active:bg-yellow-400/10 transition-colors"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                    </Link>
                  </div>
                )}
              </li>

              {/* 2. Mobile Courses (Direct Card) */}
              <li>
                <Link
                  to="/courses"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#12141D] border border-[#222533] text-sm font-semibold text-zinc-100 hover:text-yellow-400 active:scale-98 transition-all"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span>Courses</span>
                  </span>
                  <span className="text-[10px] font-bold bg-yellow-400/20 text-yellow-400 px-2 py-0.5 rounded-full">
                    Explore
                  </span>
                </Link>
              </li>

              {/* 3. Mobile Certification (Accordion Card) */}
              <li className="bg-[#12141D] border border-[#222533] rounded-2xl overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("certification")}
                  className="w-full flex items-center justify-between p-3.5 text-sm font-semibold text-zinc-100 hover:text-yellow-400"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <span>Certification</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileExpanded.certification ? "rotate-180 text-yellow-400" : "text-zinc-500"
                    }`}
                  />
                </button>
                {mobileExpanded.certification && (
                  <div className="px-3.5 pb-3.5 pt-1 space-y-1.5 border-t border-[#1C1F2B]">
                    <Link
                      to="/our-certification"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#171924] text-xs text-zinc-300 hover:text-yellow-400 active:bg-yellow-400/10 transition-colors"
                    >
                      <span>Our Certification</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                    </Link>
                    <Link
                      to="/apply-certificate"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#171924] text-xs text-zinc-300 hover:text-yellow-400 active:bg-yellow-400/10 transition-colors"
                    >
                      <span>Apply for Certificate</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                    </Link>
                    <Link
                      to="/certificate-verification"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#171924] text-xs text-yellow-400 font-semibold active:bg-yellow-400/10 transition-colors"
                    >
                      <span>Certificate Verification</span>
                      <span className="text-[9px] bg-yellow-400 text-black px-1.5 py-0.5 rounded font-black">
                        Instant
                      </span>
                    </Link>
                  </div>
                )}
              </li>

              {/* 4. Mobile Rise and Shine (Accordion Card) */}
              <li className="bg-[#12141D] border border-[#222533] rounded-2xl overflow-hidden transition-all">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("riseAndShine")}
                  className="w-full flex items-center justify-between p-3.5 text-sm font-semibold text-zinc-100 hover:text-yellow-400"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span>Rise and Shine</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileExpanded.riseAndShine ? "rotate-180 text-yellow-400" : "text-zinc-500"
                    }`}
                  />
                </button>
                {mobileExpanded.riseAndShine && (
                  <div className="px-3.5 pb-3.5 pt-1 space-y-1.5 border-t border-[#1C1F2B]">
                    <Link
                      to="/student-reviews"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#171924] text-xs text-zinc-300 hover:text-yellow-400 active:bg-yellow-400/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Star className="w-3.5 h-3.5 text-yellow-400" />
                        1. Students Reviews
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                    </Link>
                    <Link
                      to="/jobs-and-placement"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#171924] text-xs text-zinc-300 hover:text-yellow-400 active:bg-yellow-400/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-yellow-400" />
                        2. Jobs and Placement
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                    </Link>
                    <Link
                      to="/our-team"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#171924] text-xs text-zinc-300 hover:text-yellow-400 active:bg-yellow-400/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-yellow-400" />
                        3. Our Team
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                    </Link>
                    <Link
                      to="/sweet-memories"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#171924] text-xs text-zinc-300 hover:text-yellow-400 active:bg-yellow-400/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Camera className="w-3.5 h-3.5 text-yellow-400" />
                        4. Sweet Memories
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                    </Link>
                  </div>
                )}
              </li>

              {/* 5. Mobile Franchise (Direct Card) */}
              <li>
                <Link
                  to="/franchise"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#12141D] border border-[#222533] text-sm font-semibold text-zinc-100 hover:text-yellow-400 active:scale-98 transition-all"
                >
                  <span className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                      <Building className="w-4 h-4" />
                    </div>
                    <span>Franchise</span>
                  </span>
                  <span className="text-[10px] font-bold bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full">
                    Partner
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Drawer Bottom Action Section */}
          <div className="pt-5 mt-4 border-t border-[#1C1F2B] space-y-3">
            <Link
              to="/pay-now"
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-black text-black bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 rounded-xl shadow-lg shadow-yellow-400/20 active:scale-98 transition-all"
            >
              <CreditCard className="w-4 h-4" />
              <span>Pay Fees / Tuition Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="text-center">
              <span className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                Enlightening Success • ISO Certified Institute
              </span>
            </div>
          </div>
        </div>
      )}

      {/* JSON-LD Schema for SEO SiteNavigationElement */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": [
              "Company",
              "Courses",
              "Certification",
              "Rise and Shine",
              "Franchise",
              "Pay Now"
            ],
            "url": [
              "/about-us",
              "/courses",
              "/our-certification",
              "/student-reviews",
              "/franchise",
              "/pay-now"
            ]
          }),
        }}
      />
    </header>
  );
}

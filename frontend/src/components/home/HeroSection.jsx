import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Play,
  CheckCircle2,
  Boxes,
  Code2,
  Palette,
  Compass,
} from "lucide-react";

// Disciplines that rotate smoothly in the headline
const rotatingDisciplines = [
  { text: "2D & 3D Animation", tag: "Creative Studio" },
  { text: "Full Stack Development", tag: "Tech & Software" },
  { text: "3D CAD Matrix Design", tag: "CAD & Jewelry" },
  { text: "UI/UX & Visual Design", tag: "Product & Identity" },
  { text: "VFX & Motion Graphics", tag: "Media & Film" },
];

// Quick category exploration links for zero-friction navigation
const quickCategories = [
  { name: "Animation & 3D", path: "/courses/2d-3d-animation" },
  { name: "Full-Stack Dev", path: "/courses" },
  { name: "CAD Matrix", path: "/courses" },
  { name: "Graphic & UI/UX", path: "/courses" },
  { name: "AI & Python", path: "/courses" },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger entering animation from downwards to upwards whenever page loads/reloads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 60);
    return () => clearTimeout(timer);
  }, []);

  // Rotate headline discipline every 2.8 seconds with smooth fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingDisciplines.length);
        setFadeAnim(true);
      }, 250);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Track mouse coordinates for interactive spotlight
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  const current = rotatingDisciplines[index];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 pt-28 sm:pt-36 pb-8 sm:pb-10 overflow-hidden flex flex-col items-center justify-start"
    >
      {/* Component-Specific Keyframe Animations */}
      <style>{`
        @keyframes float-slow-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float-slow-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(14px) rotate(-1deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.3; }
          100% { transform: scale(0.95); opacity: 0.8; }
        }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        .animate-float-1 {
          animation: float-slow-1 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-slow-2 7s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer-sweep 3s ease-in-out infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring 4s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Interactive Mouse Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(246, 217, 107, 0.12), transparent 70%)`,
          opacity: mousePos.x > -500 ? 1 : 0,
        }}
      />

      {/* 2. Static Ambient Atmospheric Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#f6d96b]/8 rounded-full blur-[120px] -z-10 animate-pulse-ring" />
      <div className="pointer-events-none absolute top-1/2 -left-20 w-80 h-80 bg-[#f6d96b]/5 rounded-full blur-[100px] -z-10" />
      <div className="pointer-events-none absolute top-1/2 -right-20 w-80 h-80 bg-[#f6d96b]/5 rounded-full blur-[100px] -z-10" />

      {/* 3. Floating Ambient Studio Badges (Fade in smoothly on reload) */}
      <div
        className={`hidden xl:block pointer-events-none absolute left-8 top-1/3 transition-all duration-1000 delay-[700ms] ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="animate-float-1 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#14110c]/95 border border-[#2d2419] shadow-[0_12px_32px_rgba(0,0,0,0.65),0_0_20px_rgba(246,217,107,0.06)] backdrop-blur-md text-zinc-200">
          <div className="w-8 h-8 rounded-xl bg-[#f6d96b]/15 border border-[#f6d96b]/25 flex items-center justify-center text-[#f6d96b]">
            <Boxes className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-white text-xs sm:text-sm tracking-wide">Maya & Blender 3D</div>
            <div className="text-xs text-zinc-300 font-normal">Production Ready Studio</div>
          </div>
        </div>
      </div>

      <div
        className={`hidden xl:block pointer-events-none absolute right-8 top-1/3 transition-all duration-1000 delay-[700ms] ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="animate-float-2 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#14110c]/95 border border-[#2d2419] shadow-[0_12px_32px_rgba(0,0,0,0.65),0_0_20px_rgba(246,217,107,0.06)] backdrop-blur-md text-zinc-200">
          <div className="w-8 h-8 rounded-xl bg-[#f6d96b]/15 border border-[#f6d96b]/25 flex items-center justify-center text-[#f6d96b]">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="font-semibold text-white text-xs sm:text-sm tracking-wide">Full Stack & AI Labs</div>
            <div className="text-xs text-zinc-300 font-normal">Live Enterprise Projects</div>
          </div>
        </div>
      </div>

      <div
        className={`hidden xl:block pointer-events-none absolute left-12 bottom-1/4 transition-all duration-1000 delay-[900ms] ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="animate-float-2 flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#14110c]/95 border border-[#2d2419] text-xs text-zinc-200 font-medium shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <Palette className="w-4 h-4 text-[#f6d96b]" />
          <span>UI/UX & CAD Matrix</span>
        </div>
      </div>

      <div
        className={`hidden xl:block pointer-events-none absolute right-12 bottom-1/4 transition-all duration-1000 delay-[900ms] ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="animate-float-1 flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#14110c]/95 border border-[#2d2419] text-xs text-zinc-200 font-medium shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <Compass className="w-4 h-4 text-[#f6d96b]" />
          <span>100% Placement Record</span>
        </div>
      </div>

      {/* 4. Main Clean Centered Content with Staggered Downwards-to-Upwards Transitions */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Layer 1: Live Status Accreditation Pill */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#f6d96b]/10 text-[#f6d96b] border border-[#f6d96b]/25 backdrop-blur-md shadow-[0_0_20px_rgba(246,217,107,0.12)] mb-8 transition-transform hover:scale-105 duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f6d96b] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f6d96b]" />
            </span>
            <span className="uppercase tracking-widest font-mono text-[11px]">
              Jaipur's Premier 3D Tech, Creative & IT Academy
            </span>
            <span className="hidden sm:inline text-zinc-300 font-normal">
              • ISO 9001:2015 Certified
            </span>
          </div>
        </div>

        {/* Layer 2: Main Headline & Animated Rotating Discipline */}
        <div className="mb-6">
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Master Practical Skills In
          </h1>

          {/* Rotating Discipline with Smooth Transition */}
          <div
            className={`min-h-[50px] sm:min-h-[75px] md:min-h-[90px] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span
              className={`inline-block text-3xl sm:text-5xl md:text-6xl font-bold text-[#f6d96b] tracking-tight transition-all duration-300 transform drop-shadow-[0_4px_30px_rgba(246,217,107,0.3)] ${
                fadeAnim
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-3 scale-95"
              }`}
            >
              {current.text}
            </span>
          </div>
        </div>

        {/* Layer 3: High-Contrast, Ultra-Readable Subtitle */}
        <p
          className={`text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed max-w-2xl mb-10 font-normal transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Gain industry-grade capabilities through hands-on studio pipelines,
          dedicated physical tech labs, and 1-on-1 mentorship. Built for
          students and creators aiming for high-impact careers.
        </p>

        {/* Layer 4: Action CTAs */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            to="/courses"
            className="group relative inline-flex items-center gap-3 px-8 sm:px-9 py-4 rounded-full font-semibold tracking-normal text-base sm:text-lg text-zinc-950 bg-[#f6d96b] hover:bg-[#f9dc77] shadow-[0_10px_30px_rgba(246,217,107,0.3)] hover:shadow-[0_15px_40px_rgba(246,217,107,0.45)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 overflow-hidden"
          >
            {/* Shimmer Light Sweep Effect */}
            <div className="absolute inset-0 -top-1 -bottom-1 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 animate-shimmer pointer-events-none" />

            <span className="relative z-10">Explore All Courses</span>
            <ArrowUpRight className="w-5 h-5 relative z-10 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2]" />
          </Link>

          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base sm:text-lg text-zinc-100 bg-[#15110b] border border-[#2d2419] hover:border-[#f6d96b]/70 hover:text-white hover:bg-[#1f1911] transition-all duration-200 hover:-translate-y-1 shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            <Play className="w-4 h-4 text-[#f6d96b] fill-[#f6d96b] transition-transform group-hover:scale-110" />
            <span>Book Free Demo Session</span>
          </Link>
        </div>

        {/* Layer 5: Quick Category Exploration Pills */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Popular Learning Paths:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickCategories.map((cat, i) => (
              <Link
                key={i}
                to={cat.path}
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#14110c] text-zinc-200 border border-[#2a2217] hover:border-[#f6d96b]/70 hover:text-[#f6d96b] hover:bg-[#1e1811] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Layer 6: Trust Badges */}
        <div
          className={`mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-zinc-200 font-medium transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f6d96b]" />
            <span>15+ Years Legacy</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f6d96b]" />
            <span>10,000+ Placed Students</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#f6d96b]" />
            <span>100% Practical Studio Labs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

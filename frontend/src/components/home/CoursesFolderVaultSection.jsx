import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  TrendingUp,
  Palette,
  Code2,
  Film,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  BookOpen,
} from "lucide-react";
import FolderFloat from "../common/FolderFloat";

// 4 Flagship Digital Programs Matching the 4 Discipline Tracks
const vaultCourseItems = [
  {
    value: "marketing",
    label: "Digital Marketing",
    subtitle: "Meta Ads • Google Growth",
    accentColor: "#10b981",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=80",
    link: "/courses",
  },
  {
    value: "uiux",
    label: "UI/UX Designing",
    subtitle: "Figma • Design Systems",
    accentColor: "#a855f7",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=200&auto=format&fit=crop&q=80",
    link: "/courses",
  },
  {
    value: "software",
    label: "Software Development",
    subtitle: "React 19 • Python • Cloud",
    accentColor: "#38bdf8",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&auto=format&fit=crop&q=80",
    link: "/courses",
  },
  {
    value: "video",
    label: "Video Editing",
    subtitle: "Premiere • DaVinci Color",
    accentColor: "#f6d96b",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&auto=format&fit=crop&q=80",
    link: "/courses",
  },
];

// 4 Interactive 3D Cards with Distinct Radiant Color Accents
const disciplineCards = [
  {
    id: "marketing",
    title: "Digital Marketing",
    modules: "75+ Modules",
    description:
      "Meta & Google Ads, Performance Funnels, SEO Dominance, GA4, Viral Campaigns & ROI Analytics.",
    icon: TrendingUp,
    color: "#10b981", // Emerald Green
    glowColor: "rgba(16, 185, 129, 0.45)",
    glowColorLow: "rgba(16, 185, 129, 0.12)",
    link: "/courses",
  },
  {
    id: "uiux",
    title: "UI/UX Designing",
    modules: "90+ Modules",
    description:
      "Figma Systems, Mobile App UX, User Psychology, Wireframing, Micro-Interactions & Prototyping.",
    icon: Palette,
    color: "#a855f7", // Electric Violet
    glowColor: "rgba(168, 85, 247, 0.45)",
    glowColorLow: "rgba(168, 85, 247, 0.12)",
    link: "/courses",
  },
  {
    id: "software",
    title: "Software Development",
    modules: "120+ Modules",
    description:
      "Enterprise Full-Stack, React 19, Python AI, Node.js Backends, Docker, Cloud & DevOps Systems.",
    icon: Code2,
    color: "#38bdf8", // Cyber Blue
    glowColor: "rgba(56, 189, 248, 0.45)",
    glowColorLow: "rgba(56, 189, 248, 0.12)",
    link: "/courses",
  },
  {
    id: "video",
    title: "Video Editing",
    modules: "85+ Modules",
    description:
      "Premiere Pro CC, DaVinci Resolve Studio Color, After Effects Motion VFX & Cinema Audio.",
    icon: Film,
    color: "#f6d96b", // Cinematic Gold
    glowColor: "rgba(246, 217, 107, 0.45)",
    glowColorLow: "rgba(246, 217, 107, 0.12)",
    link: "/courses",
  },
];

// Interactive 3D Tilting Card with Parallax Depth & Specular Glare Reflection
function Discipline3DCard({ item }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -9; // degrees
    const rotateY = ((x - centerX) / centerX) * 9;
    setRotate({
      x: rotateX,
      y: rotateY,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const IconComponent = item.icon;

  return (
    <Link
      to={item.link}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group block relative cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* 3D Tilting Card Surface */}
      <div
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(14px) scale3d(1.025, 1.025, 1.025)`
            : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)",
          transformStyle: "preserve-3d",
          transition: isHovered
            ? "transform 80ms ease-out, border-color 200ms ease, box-shadow 200ms ease"
            : "transform 450ms cubic-bezier(0.23, 1, 0.32, 1), border-color 300ms ease, box-shadow 300ms ease",
          borderColor: isHovered ? item.color : `${item.color}35`,
          boxShadow: isHovered
            ? `0 22px 50px rgba(0,0,0,0.92), 0 0 35px ${item.glowColor}, inset 0 1px 0 rgba(255,255,255,0.18)`
            : `0 8px 25px rgba(0,0,0,0.85), 0 0 16px ${item.glowColorLow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
        }}
        className="relative p-5 sm:p-5.5 rounded-2xl bg-gradient-to-br from-[#140f0a]/95 via-[#0b0805]/95 to-[#060402] border backdrop-blur-md overflow-hidden"
      >
        {/* Specular 3D Reflection Glare following Cursor */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle at ${rotate.glareX}% ${rotate.glareY}%, rgba(255, 255, 255, 0.16) 0%, transparent 60%)`,
            }}
          />
        )}

        {/* Internal Colored Radial Ambient Light Bloom */}
        <div
          className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none blur-[60px] -z-10 transition-opacity duration-300"
          style={{
            background: item.color,
            opacity: isHovered ? 0.28 : 0.1,
          }}
        />

        {/* 3D Elevated Header Layer (translateZ 28px) */}
        <div
          style={{
            transform: "translateZ(28px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-20 flex items-center justify-between mb-3.5"
        >
          {/* 3D Glossy Icon Tile with Colored Glow */}
          <div
            style={{
              borderColor: `${item.color}55`,
              boxShadow: isHovered
                ? `0 0 25px ${item.glowColor}, inset 0 1px 2px rgba(255,255,255,0.3)`
                : `0 0 14px ${item.glowColorLow}, inset 0 1px 1px rgba(255,255,255,0.12)`,
            }}
            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1d160d] to-[#0c0905] border flex items-center justify-center transition-all duration-300 group-hover:scale-105"
          >
            <IconComponent
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              style={{ color: item.color }}
            />
          </div>

          {/* Module Count Badge & 3D Hover Arrow */}
          <div className="flex items-center gap-2">
            <span
              style={{
                color: item.color,
                borderColor: `${item.color}35`,
                backgroundColor: `${item.color}15`,
              }}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border font-medium"
            >
              {item.modules}
            </span>
            <div
              style={{ color: item.color }}
              className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Title at 3D Parallax Depth translateZ(22px) */}
        <div
          style={{
            transform: "translateZ(22px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-20 mb-1.5"
        >
          <h3 className="text-base sm:text-lg font-bold text-white transition-colors">
            {item.title}
          </h3>
        </div>

        {/* Description at 3D Parallax Depth translateZ(14px) */}
        <div
          style={{
            transform: "translateZ(14px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-20"
        >
          <p className="text-xs text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function CoursesFolderVaultSection() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Open folder when section is scrolled into view and keep open while viewing
          setIsOpen(true);
        } else {
          // Reset when scrolled away completely out of view
          setIsOpen(false);
        }
      },
      { threshold: 0.2 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-12 sm:py-20 lg:py-24 bg-[#050505] overflow-hidden w-full select-none"
    >
      {/* Background Ambience: Warm Golden Amber Spotlights */}
      <div className="absolute top-[20%] left-1/3 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(246,217,107,0.16)_0%,rgba(217,119,6,0.08)_45%,transparent_75%)] blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[15%] right-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(246,217,107,0.14)_0%,rgba(217,119,6,0.06)_50%,transparent_75%)] blur-[110px] pointer-events-none -z-10" />

      {/* Subtle Background Tech Grid with Warm Amber Tint */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(246, 217, 107, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246, 217, 107, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Header (displayed on mobile, hidden on lg) */}
        <div className="block lg:hidden text-center mb-7 px-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#f6d96b]/10 text-[#f6d96b] border border-[#f6d96b]/25 shadow-[0_0_15px_rgba(246,217,107,0.1)] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#f6d96b] animate-pulse" />
            <span className="font-mono tracking-wider uppercase text-[10px] sm:text-[11px]">
              Jaipur&apos;s Largest Creative &amp; Tech Academy
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15]">
            300+ Digital Courses.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#f6d96b]">
              One Unstoppable Career.
            </span>
          </h2>
        </div>

        {/* 2-Column Responsive Layout: Folder on Left, Relevant 3D Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* ============================================================ */}
          {/* LEFT COLUMN: FOLDER WITH 4 2x2 BALANCED FLOATING CARDS       */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center w-full">
            {/* Arena Container for Folder: strictly overflow-hidden so cards NEVER escape */}
            <div className="relative w-full max-w-[480px] lg:max-w-[500px] min-h-[540px] sm:min-h-[620px] lg:min-h-[690px] rounded-3xl bg-gradient-to-b from-[#140f09]/85 via-[#0b0805]/95 to-[#0e0a06] border border-[#f6d96b]/20 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(246,217,107,0.08)] p-3 sm:p-5 lg:p-6 flex flex-col items-center justify-between overflow-hidden group">
              {/* Radial Golden Halo inside the container */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full bg-[radial-gradient(circle,rgba(246,217,107,0.22)_0%,rgba(217,119,6,0.1)_45%,transparent_75%)] blur-[60px] pointer-events-none" />

              {/* Top Arena Indicator Pill */}
              <div className="w-full flex items-center justify-between pointer-events-none z-10 pt-1">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#18120a] border border-[#f6d96b]/25 text-[10px] sm:text-[11px] font-mono text-[#f6d96b] shadow-[0_0_12px_rgba(246,217,107,0.12)]">
                  <Sparkles className="w-3 h-3 text-[#f6d96b] animate-pulse" />
                  <span>Curated Tracks</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">300+ Courses</span>
              </div>

              {/* Folder and Floating Items: positioned with generous vertical headroom & wide spread */}
              <div className="relative flex justify-center items-end w-full mt-auto mb-4 pt-20 sm:pt-28 lg:pt-32 pb-4 z-10">
                <FolderFloat
                  items={vaultCourseItems}
                  label="300+ Digital Programs"
                  sublabel=""
                  trigger="hover"
                  isOpen={isOpen}
                  closeOnLeave={false}
                  closeOnSelect={false}
                  physics={false}
                  drift={0.4}
                  width={isMobile ? 260 : 320}
                  height={isMobile ? 205 : 255}
                  radius={isMobile ? 16 : 20}
                  spread={isMobile ? 140 : 190}
                  lift={isMobile ? 20 : 26}
                  tilt={isMobile ? 3 : 4}
                  flapAngle={34}
                  restAngle={14}
                  isMobile={isMobile}
                  folderColor="#17120a"
                  frontColor="#251c12"
                  paperColor="#fcf8f0"
                  itemColor="#130e08"
                  itemTextColor="#ffffff"
                  labelColor="#ffffff"
                  onSelect={(val, i, item) => {
                    if (item?.link) navigate(item.link);
                  }}
                  onOpenChange={(next) => setIsOpen(next)}
                />
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: RELEVANT HEADLINE & 4 INTERACTIVE 3D CARDS    */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
            {/* Desktop Headline & Badge (hidden on mobile since shown above) */}
            <div className="hidden lg:block space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#f6d96b]/10 text-[#f6d96b] border border-[#f6d96b]/25 shadow-[0_0_20px_rgba(246,217,107,0.12)]">
                  <Layers className="w-3.5 h-3.5 text-[#f6d96b] animate-pulse" />
                  <span className="font-mono tracking-widest uppercase text-[11px]">
                    Jaipur&apos;s Largest Creative &amp; Tech Academy
                  </span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                300+ Digital Courses.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#f6d96b]">
                  One Unstoppable Career.
                </span>
              </h2>
            </div>

            {/* 4 Interactive 3D Discipline Cards with Radiant Accent Colors */}
            <div className="relative">
              {/* Soft Golden Amber Radial Glow behind Tiles */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,217,107,0.14)_0%,rgba(217,119,6,0.06)_55%,transparent_80%)] blur-[50px] pointer-events-none -z-10" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
                {disciplineCards.map((card) => (
                  <Discipline3DCard key={card.id} item={card} />
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-zinc-950 bg-[#f6d96b] hover:bg-[#f9dc77] transition-all duration-200 shadow-[0_0_20px_rgba(246,217,107,0.35)] group cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-zinc-950" />
                <span>Explore All 300+ Courses</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm text-zinc-300 hover:text-white bg-[#15110b] hover:bg-[#1f1911] border border-[#2b2216] transition-all duration-200 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#f6d96b]" />
                <span>Book Free 2-Day Trial</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

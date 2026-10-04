import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./FranchiseHero.css";
import { 
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  PhoneCall,
  Award,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  Megaphone,
  Headphones,
  BookOpen,
  Building2,
  MapPin,
  BadgePercent,
  Check,
  ChevronDown
} from "lucide-react";

// Interactive 3D tilt card with specular cursor flare
function TiltCard({ children, className = "" }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setRotate({ x: rotateX, y: rotateY });
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.16s ease-out",
      }}
      className={`hero-tilt-card group relative ${className}`}
    >
      {/* Dynamic Cursor Spotlight Flare */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[24px]"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(550px circle at ${spotlight.x}px ${spotlight.y}px, rgba(246, 217, 107, 0.12), transparent 60%)`,
        }}
      />
      {/* Top Edge Golden Micro-Laser Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ffd300]/65 to-transparent pointer-events-none rounded-t-[24px]" />
      {children}
    </div>
  );
}

// Smooth count-up counter component triggered on viewport intersection
function AnimatedCounter({ end, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          let startTime = null;
          const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const PART1 = "START A ";
const HIGHLIGHT_TEXT = "THIRDEYE";
const PART2 = " FRANCHISE IN YOUR CITY";
const FULL_HEADLINE_LENGTH = PART1.length + HIGHLIGHT_TEXT.length + PART2.length;

const SUBTITLE_TEXT =
  "Join hands with Rajasthan’s leading IT skill development brand. Build a profitable, future-proof education business with 11+ operational centers and complete 360° corporate support.";

const HIGHLIGHT_ITEMS = [
  {
    title: "Proven & Tested Business Model",
    icon: Sparkles,
    badge: "High Success",
  },
  {
    title: "Investments in a Rapidly Growing Org",
    icon: TrendingUp,
    badge: "High Growth",
  },
  {
    title: "Strong Brand Recognition & Presence",
    icon: Award,
    badge: "Brand Power",
  },
  {
    title: "Exclusive Area Rights & Territory",
    icon: MapPin,
    badge: "100% Protected",
  },
  {
    title: "Zero Dead Stock & Minimal Risk",
    icon: ShieldCheck,
    badge: "Zero Risk",
  },
  {
    title: "High Return on Investment (ROI)",
    icon: BadgePercent,
    badge: "Rapid Break-Even",
  },
  {
    title: "Extensive Faculty & Staff Training",
    icon: GraduationCap,
    badge: "360° Training",
  },
  {
    title: "Centralized Digital Marketing & Leads",
    icon: Megaphone,
    badge: "Direct Leads",
  },
  {
    title: "Hassle-Free Setup & 24/7 Tech Backup",
    icon: Headphones,
    badge: "24/7 Tech",
  },
  {
    title: "Continuous Modern Curriculum Updates",
    icon: BookOpen,
    badge: "Cutting-Edge",
  },
  {
    title: "Recession-Free Essential Education Model",
    icon: Building2,
    badge: "All-Season Demand",
    fullWidth: true,
  },
];

export default function FranchiseHero({ onOpenInquiry }) {
  const [showAllAdvantages, setShowAllAdvantages] = useState(false);
  const [headlineCount, setHeadlineCount] = useState(0);
  const [subtitleCount, setSubtitleCount] = useState(0);
  const [isHeadlineDone, setIsHeadlineDone] = useState(false);
  const [isSubtitleDone, setIsSubtitleDone] = useState(false);

  // Character-by-character typewriter animation on visit
  useEffect(() => {
    let headlineTimer;

    const startHeadline = setTimeout(() => {
      headlineTimer = setInterval(() => {
        setHeadlineCount((prev) => {
          if (prev < FULL_HEADLINE_LENGTH) {
            return prev + 1;
          } else {
            clearInterval(headlineTimer);
            setIsHeadlineDone(true);
            return prev;
          }
        });
      }, 35);
    }, 180);

    return () => {
      clearTimeout(startHeadline);
      if (headlineTimer) clearInterval(headlineTimer);
    };
  }, []);

  // Subtitle streams character-by-character once headline finishes
  useEffect(() => {
    if (!isHeadlineDone) return;

    let subTimer;
    const startSubtitle = setTimeout(() => {
      subTimer = setInterval(() => {
        setSubtitleCount((prev) => {
          if (prev < SUBTITLE_TEXT.length) {
            return Math.min(prev + 1, SUBTITLE_TEXT.length);
          } else {
            clearInterval(subTimer);
            setIsSubtitleDone(true);
            return prev;
          }
        });
      }, 12);
    }, 120);

    return () => {
      clearTimeout(startSubtitle);
      if (subTimer) clearInterval(subTimer);
    };
  }, [isHeadlineDone]);

  // Segmented headline computations
  const renderedPart1 = PART1.slice(0, Math.min(headlineCount, PART1.length));

  const highlightCount = Math.max(0, headlineCount - PART1.length);
  const renderedHighlight =
    highlightCount > 0
      ? HIGHLIGHT_TEXT.slice(0, Math.min(highlightCount, HIGHLIGHT_TEXT.length))
      : "";

  const part2Count = Math.max(0, headlineCount - (PART1.length + HIGHLIGHT_TEXT.length));
  const renderedPart2 =
    part2Count > 0
      ? PART2.slice(0, Math.min(part2Count, PART2.length))
      : "";

  const renderedSubtitle = SUBTITLE_TEXT.slice(0, subtitleCount);

  // Quick skip handler on click
  const handleSkipTyping = () => {
    setHeadlineCount(FULL_HEADLINE_LENGTH);
    setSubtitleCount(SUBTITLE_TEXT.length);
    setIsHeadlineDone(true);
    setIsSubtitleDone(true);
  };

  return (
    <section className="franchise-hero-section">
      <div className="franchise-hero-container">
        {/* Top Badge */}
        <div className="hero-badge-wrap">
          <span className="hero-pill-badge">
            <Sparkles size={16} className="badge-icon" />
            PARTNER WITH RAJASTHAN'S #1 IT SKILL POWERHOUSE
          </span>
        </div>

        {/* Hero Main Header: Animated Written One-by-One */}
        <div 
          className="hero-header-block cursor-default"
          onClick={handleSkipTyping}
        >
          <h1 className="hero-main-title">
            {renderedPart1}
            {headlineCount < PART1.length && (
              <span className="typewriter-cursor" />
            )}

            {highlightCount > 0 && (
              <span className="title-highlight">
                {renderedHighlight}
                {headlineCount >= PART1.length &&
                  headlineCount < PART1.length + HIGHLIGHT_TEXT.length && (
                    <span className="typewriter-cursor highlight-cursor" />
                  )}
              </span>
            )}

            {renderedPart2}
            {headlineCount >= PART1.length + HIGHLIGHT_TEXT.length && !isHeadlineDone && (
              <span className="typewriter-cursor" />
            )}
          </h1>

          <p className="hero-lead-text">
            {renderedSubtitle}
            {isHeadlineDone && !isSubtitleDone && (
              <span className="typewriter-cursor sub-cursor" />
            )}
          </p>
        </div>

        {/* Hero CTA Action Buttons */}
        <div className="hero-action-row">
          <Link 
            to="/courses"
            className="hero-btn-primary"
          >
            <span>Explore Courses</span>
            <ArrowRight size={18} />
          </Link>
          <a href="tel:+918058061222" className="hero-btn-outline">
            <PhoneCall size={16} />
            <span>+91 805 806 1222</span>
          </a>
        </div>

        {/* Unboxed Studio Editorial Showcase */}
        <div className="hero-studio-showcase">
          {/* Left Column: Why Partner With Thirdeye (3D Tilt Card Container) */}
          <TiltCard className="advantages-glass-card">
            <div className="alliance-header-bar">
              <div className="alliance-icon-box">
                <ShieldCheck size={24} className="text-[#0c0a04]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                  <h3 className="alliance-header-title">Why Partner With Thirdeye?</h3>
                  <span className="live-status-pill">
                    <span className="live-dot" />
                    Guaranteed Growth
                  </span>
                </div>
                <p className="alliance-header-sub">Built to guarantee consistent profitability &amp; student trust</p>
              </div>
            </div>

            {/* 2-Column Matrix with Icon, Title, Badge & Checkmark */}
            <div className="advantages-interactive-matrix">
              {HIGHLIGHT_ITEMS.map((item, idx) => {
                const IconComponent = item.icon;
                const isHiddenOnMobile = !showAllAdvantages && idx >= 4;
                return (
                  <div
                    key={idx}
                    className={`advantage-matrix-item ${item.fullWidth ? "col-span-full fullwidth-highlight-item" : ""} ${isHiddenOnMobile ? "mobile-hidden-item" : ""}`}
                  >
                    <div className="matrix-item-icon-box">
                      <IconComponent size={15} />
                    </div>
                    <div className="matrix-item-text">
                      <span className="matrix-item-title">{item.title}</span>
                      <span className="matrix-item-badge">{item.badge}</span>
                    </div>
                    <div className="matrix-item-check">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Expand / Collapse Button */}
            <button
              type="button"
              className="advantages-mobile-toggle-btn"
              onClick={() => setShowAllAdvantages(!showAllAdvantages)}
              aria-label={showAllAdvantages ? "Show fewer advantages" : "View all 11 advantages"}
            >
              <span>{showAllAdvantages ? "Show Less" : "+ 7 More Advantages"}</span>
              <ChevronDown 
                size={15} 
                className={`toggle-chevron ${showAllAdvantages ? "is-rotated" : ""}`} 
              />
            </button>
          </TiltCard>

          {/* Vertical Golden Beam Divider */}
          <div className="studio-center-divider" />

          {/* Right Column: 02 — ACCREDITATION & SCALE */}
          <div className="studio-col studio-col-right">
            <div className="studio-index-tag">
              <span className="index-label">HONORS &amp; INSTITUTIONAL SCALE</span>
            </div>

            <h2 className="studio-display-title">
              IMPACT
            </h2>

            <p className="studio-tagline">
              Endorsed by leading universities & national industry bodies.
            </p>

            {/* Unboxed Raw Typographic Metric Counters */}
            <div className="studio-stats-display">
              <div className="studio-stat-col">
                <div className="studio-stat-number text-[#ffd300]">
                  <AnimatedCounter end={11500} suffix="+" />
                </div>
                <div className="studio-stat-label">Students Trained</div>
              </div>
              <div className="studio-stat-sep" />
              <div className="studio-stat-col">
                <div className="studio-stat-number text-[#ffd300]">
                  <AnimatedCounter end={6700} suffix="+" />
                </div>
                <div className="studio-stat-label">Students Placed</div>
              </div>
              <div className="studio-stat-sep" />
              <div className="studio-stat-col">
                <div className="studio-stat-number text-[#ffd300]">
                  <AnimatedCounter end={11} suffix="+" />
                </div>
                <div className="studio-stat-label">Active Branches</div>
              </div>
            </div>

            {/* University Citations (Minimalist Editorial Rows) */}
            <div className="studio-honors-list">
              <div className="studio-honor-item">
                <div className="honor-meta">
                  <span className="honor-index">01</span>
                  <span className="honor-authority">Poornima Global University</span>
                  <span className="honor-badge">Official Citation</span>
                </div>
                <h4 className="honor-title">
                  Awarded Best Tech Training Institute
                </h4>
              </div>

              <div className="studio-honor-item">
                <div className="honor-meta">
                  <span className="honor-index">02</span>
                  <span className="honor-authority">ICFAI Global University</span>
                  <span className="honor-badge">Excellence Award</span>
                </div>
                <h4 className="honor-title">
                  Awarded Best SAP Training Institute
                </h4>
              </div>
            </div>

            {/* Architectural Pull-Quote with Amber Beam */}
            <div className="studio-pullquote">
              <div className="quote-mark">“</div>
              <blockquote className="quote-body">
                Fastest growing tech training brand committed to high-impact career excellence and student transformation.
              </blockquote>
              <div className="quote-byline">
                — RAJASTHAN ACADEMIC EVALUATION COUNCIL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

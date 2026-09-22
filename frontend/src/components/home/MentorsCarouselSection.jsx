import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────
// MENTOR DATA — update name / position / discipline as needed
// ─────────────────────────────────────────────────────────────────
import mentor1 from "../../assets/mentor_1.png";
import mentor2 from "../../assets/mentor_2.png";
import mentor3 from "../../assets/mentor_3.png";
import mentor4 from "../../assets/mentor_4.png";
import mentor5 from "../../assets/mentor_5.png";

const MENTORS = [
  {
    id: 1,
    name: "R.K. SHARMA",
    position: "Founder & CEO",
    discipline: "THIRD EYE",
    image: mentor1,
  },
  {
    id: 2,
    name: "VIKAS CHOUDHARY",
    position: "Head Instructor",
    discipline: "THIRD EYE",
    image: mentor2,
  },
  {
    id: 3,
    name: "PRIYA SHARMA",
    position: "Senior Faculty",
    discipline: "THIRD EYE",
    image: mentor3,
  },
  {
    id: 4,
    name: "ROHIT VERMA",
    position: "Lab Instructor",
    discipline: "THIRD EYE",
    image: mentor4,
  },
  {
    id: 5,
    name: "NISHA GUPTA",
    position: "Faculty",
    discipline: "THIRD EYE",
    image: mentor5,
  },
];

// ─────────────────────────────────────────────────────────────────
// Coverflow transform values per offset slot (Desktop / Tablet)
// ─────────────────────────────────────────────────────────────────
function getTransform(offset) {
  switch (offset) {
    case  0: return { scale: 1.00, x:    0, y:  0, rotateY:   0, z: 40, opacity: 1.00 };
    case  1: return { scale: 0.87, x:  280, y: 24, rotateY:  -9, z: 28, opacity: 0.90 };
    case -1: return { scale: 0.87, x: -280, y: 24, rotateY:   9, z: 28, opacity: 0.90 };
    case  2: return { scale: 0.73, x:  490, y: 48, rotateY: -17, z: 10, opacity: 0.55 };
    case -2: return { scale: 0.73, x: -490, y: 48, rotateY:  17, z: 10, opacity: 0.55 };
    default:
      return { scale: 0.60, x: Math.sign(offset) * 680, y: 72, rotateY: Math.sign(offset) * -22, z: 0, opacity: 0 };
  }
}

// ─────────────────────────────────────────────────────────────────
// Mobile 3-Card Peek Transform (matches reference screenshot)
// ─────────────────────────────────────────────────────────────────
function getMobileTransform(offset, screenWidth = 375) {
  const isTiny = screenWidth < 360;
  const isLarge = screenWidth >= 400;
  const stepX = isTiny ? 142 : isLarge ? 172 : 158;
  const scaleSide = isTiny ? 0.84 : 0.86;

  switch (offset) {
    case 0:
      return { scale: 1.0, x: 0, y: 0, rotateY: 0, z: 30, opacity: 1.0, brightness: 1.0 };
    case 1:
      return { scale: scaleSide, x: stepX, y: 14, rotateY: -8, z: 15, opacity: 0.85, brightness: 0.75 };
    case -1:
      return { scale: scaleSide, x: -stepX, y: 14, rotateY: 8, z: 15, opacity: 0.85, brightness: 0.75 };
    default:
      return {
        scale: 0.55,
        x: Math.sign(offset) * (stepX * 1.8),
        y: 28,
        rotateY: Math.sign(offset) * -12,
        z: 0,
        opacity: 0,
        brightness: 0.5,
      };
  }
}

// ─────────────────────────────────────────────────────────────────
// Single Desktop Mentor Card
// ─────────────────────────────────────────────────────────────────
function MentorCard({ mentor, offset, onClick }) {
  const t = getTransform(offset);
  const isCenter = offset === 0;

  return (
    <motion.div
      onClick={onClick}
      animate={{
        x: t.x,
        y: t.y,
        scale: t.scale,
        rotateY: t.rotateY,
        opacity: t.opacity,
        zIndex: t.z,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.9 }}
      className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer select-none"
      style={{
        width:  "clamp(220px, 24vw, 320px)",
        height: "clamp(300px, 38vw, 460px)",
        zIndex: t.z,
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Card shell */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          borderRadius: "clamp(18px, 2.2vw, 28px)",
          background: isCenter
            ? "linear-gradient(170deg, #c9a200 0%, #7a5e00 35%, #1c1500 70%, #090700 100%)"
            : "linear-gradient(170deg, #a88500 0%, #5e4700 35%, #141000 70%, #060500 100%)",
          boxShadow: isCenter
            ? "0 24px 64px rgba(198,160,0,0.30), 0 4px 20px rgba(0,0,0,0.80)"
            : "0 8px 32px rgba(0,0,0,0.70)",
          border: isCenter
            ? "1.5px solid rgba(246,217,107,0.35)"
            : "1.5px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Subtle inner glow at top */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isCenter
              ? "radial-gradient(ellipse at 50% 0%, rgba(246,217,107,0.18) 0%, transparent 60%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(246,217,107,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Circular Profile Photo — centered, fills upper portion */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
          style={{
            top: "5%",
            width:  "clamp(180px, 20vw, 268px)",
            height: "clamp(180px, 20vw, 268px)",
          }}
        >
          <img
            src={mentor.image}
            alt={mentor.name}
            draggable={false}
            className="w-full h-full object-contain"
            style={{
              borderRadius: "50%",
              filter: isCenter ? "drop-shadow(0 8px 28px rgba(0,0,0,0.55))" : "drop-shadow(0 4px 12px rgba(0,0,0,0.45))",
            }}
          />
        </div>

        {/* Bottom name + position block */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 pb-5 pt-14"
          style={{
            background: "linear-gradient(to top, rgba(5,4,0,0.98) 55%, transparent 100%)",
          }}
        >
          <h3
            className="font-extrabold text-white uppercase leading-tight"
            style={{
              fontSize: "clamp(13px, 1.55vw, 21px)",
              letterSpacing: "0.04em",
              textShadow: "0 1px 8px rgba(0,0,0,0.9)",
            }}
          >
            {mentor.name}
          </h3>

          <p
            className="mt-[3px] font-semibold uppercase tracking-[0.20em]"
            style={{
              fontSize: "clamp(8px, 0.85vw, 11px)",
              color: isCenter ? "#f6d96b" : "rgba(246,217,107,0.55)",
            }}
          >
            {mentor.position}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Mobile Mentor Card (3-Card Peek Layout matching Sheryians reference)
// ─────────────────────────────────────────────────────────────────
function MobileMentorCard({ mentor, offset, screenWidth, onClick }) {
  const t = getMobileTransform(offset, screenWidth);
  const isCenter = offset === 0;

  const cardWidth = screenWidth < 360 ? 212 : screenWidth >= 400 ? 245 : 228;
  const cardHeight = screenWidth < 360 ? 335 : screenWidth >= 400 ? 370 : 352;
  const photoSize = screenWidth < 360 ? 140 : screenWidth >= 400 ? 165 : 152;

  return (
    <motion.div
      onClick={onClick}
      animate={{
        x: t.x,
        y: t.y,
        scale: t.scale,
        rotateY: t.rotateY,
        opacity: t.opacity,
        filter: `brightness(${t.brightness})`,
        zIndex: t.z,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.85 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none"
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        zIndex: t.z,
        willChange: "transform, opacity, filter",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Card shell */}
      <div
        className="relative w-full h-full overflow-hidden rounded-[24px]"
        style={{
          background: isCenter
            ? "linear-gradient(170deg, #c9a200 0%, #7a5e00 35%, #1c1500 70%, #090700 100%)"
            : "linear-gradient(170deg, #a88500 0%, #5e4700 35%, #141000 70%, #060500 100%)",
          boxShadow: isCenter
            ? "0 22px 50px rgba(198,160,0,0.28), 0 4px 20px rgba(0,0,0,0.85)"
            : "0 8px 24px rgba(0,0,0,0.7)",
          border: isCenter
            ? "1.5px solid rgba(246,217,107,0.4)"
            : "1px solid rgba(246,217,107,0.15)",
        }}
      >
        {/* Ambient top radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isCenter
              ? "radial-gradient(ellipse at 50% 0%, rgba(246,217,107,0.20) 0%, transparent 60%)"
              : "radial-gradient(ellipse at 50% 0%, rgba(246,217,107,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Circular Profile Photo */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
          style={{
            top: "6%",
            width: `${photoSize}px`,
            height: `${photoSize}px`,
          }}
        >
          <img
            src={mentor.image}
            alt={mentor.name}
            draggable={false}
            className="w-full h-full object-contain"
            style={{
              borderRadius: "50%",
              filter: isCenter
                ? "drop-shadow(0 8px 24px rgba(0,0,0,0.6))"
                : "drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
            }}
          />
        </div>

        {/* Bottom name + position block */}
        <div
          className="absolute bottom-0 left-0 right-0 px-3.5 pb-4 pt-12 text-center"
          style={{
            background: "linear-gradient(to top, rgba(5,4,0,0.98) 55%, transparent 100%)",
          }}
        >
          <h3
            className="font-extrabold text-white uppercase leading-tight tracking-wide"
            style={{
              fontSize: isCenter ? "18px" : "15px",
              textShadow: "0 2px 8px rgba(0,0,0,0.95)",
            }}
          >
            {mentor.name}
          </h3>

          <p
            className="mt-[3px] font-semibold uppercase tracking-[0.20em]"
            style={{
              fontSize: "10px",
              color: isCenter ? "#f6d96b" : "rgba(246,217,107,0.6)",
            }}
          >
            {mentor.position}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Main Section Export
// ─────────────────────────────────────────────────────────────────
export default function MentorsCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);

  // Screen width tracking for responsive mobile 3D peek calculations
  const [screenWidth, setScreenWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 375
  );

  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mobile swipe tracking states
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);

  const total = MENTORS.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handlePrev, handleNext]);

  // Desktop drag / swipe
  const onPointerDown = (e) => setDragStartX(e.clientX ?? e.touches?.[0]?.clientX ?? null);
  const onPointerUp = (e) => {
    if (dragStartX === null) return;
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX ?? dragStartX;
    const delta = dragStartX - endX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) { handleNext(); } else { handlePrev(); }
    }
    setDragStartX(null);
  };

  // Mobile dedicated touch gestures (does not trap vertical scrolling)
  const onMobileTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const onMobileTouchEnd = (e) => {
    if (touchStartX === null || touchStartY === null) return;
    const deltaX = touchStartX - e.changedTouches[0].clientX;
    const deltaY = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  // Shortest-path circular offset
  const getOffset = (idx) => {
    let off = idx - activeIndex;
    if (off > total / 2) off -= total;
    if (off < -total / 2) off += total;
    return off;
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] py-16 md:py-28 select-none">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: "80vw",
            height: "40vw",
            background: "radial-gradient(ellipse, rgba(160,120,0,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "10%", left: "15%",
            width: "28vw", height: "28vw",
            background: "radial-gradient(ellipse, rgba(50,0,90,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "10%", right: "15%",
            width: "28vw", height: "28vw",
            background: "radial-gradient(ellipse, rgba(50,0,90,0.12) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Section Header ── */}
      <div className="relative z-10 text-center mb-8 md:mb-14 px-4">
        <h2
          className="font-bold text-white mx-auto leading-tight"
          style={{
            fontSize: "clamp(24px, 3.6vw, 52px)",
            maxWidth: "780px",
            letterSpacing: "-0.01em",
          }}
        >
          Learn From People Who&apos;ve Actually Done the Work
        </h2>
      </div>

      {/* ============================================================= */}
      {/* 1. DESKTOP & TABLET VIEW (>= 768px): UNTOUCHED 3D COVERFLOW   */}
      {/* ============================================================= */}
      <div className="hidden md:block">
        <div
          className="relative w-full max-w-[1400px] mx-auto"
          style={{ height: "clamp(320px, 44vw, 510px)", perspective: "1200px" }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onTouchStart={onPointerDown}
          onTouchEnd={onPointerUp}
        >
          {MENTORS.map((mentor, i) => {
            const off = getOffset(i);
            if (Math.abs(off) > 2) return null;
            return (
              <MentorCard
                key={mentor.id}
                mentor={mentor}
                offset={off}
                onClick={() => { if (off !== 0) setActiveIndex(i); }}
              />
            );
          })}
        </div>

        {/* Desktop Navigation Controls */}
        <div className="relative z-10 flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:border-[#f6d96b]/60 hover:bg-[#f6d96b]/10 transition-all duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:border-[#f6d96b]/60 hover:bg-[#f6d96b]/10 transition-all duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ============================================================= */}
      {/* 2. MOBILE VIEW (< 768px): 3-CARD PEEK COVERFLOW               */}
      {/*    (Left peek, Center dominant, Right peek - Sheryians style)  */}
      {/* ============================================================= */}
      <div className="block md:hidden px-2">
        {/* Mobile 3D Stage with 3 Peek Cards */}
        <div
          className="relative w-full max-w-[440px] mx-auto overflow-hidden touch-pan-y flex items-center justify-center"
          style={{ height: "385px", perspective: "950px" }}
          onTouchStart={onMobileTouchStart}
          onTouchEnd={onMobileTouchEnd}
        >
          {MENTORS.map((mentor, i) => {
            const off = getOffset(i);
            if (Math.abs(off) > 1) return null;
            return (
              <MobileMentorCard
                key={mentor.id}
                mentor={mentor}
                offset={off}
                screenWidth={screenWidth}
                onClick={() => {
                  if (off !== 0) {
                    if (off > 0) handleNext();
                    else handlePrev();
                  }
                }}
              />
            );
          })}
        </div>

        {/* Mobile Navigation Controls & Indicator Dots */}
        <div className="relative z-10 flex items-center justify-center gap-5 mt-4">
          <button
            onClick={handlePrev}
            aria-label="Previous Mentor"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 active:bg-[#f6d96b]/20 active:border-[#f6d96b] transition-all duration-150 cursor-pointer"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots indicator with active expanding pill */}
          <div className="flex items-center gap-2">
            {MENTORS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-6 bg-[#f6d96b] shadow-[0_0_8px_rgba(246,217,107,0.8)]"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next Mentor"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 active:bg-[#f6d96b]/20 active:border-[#f6d96b] transition-all duration-150 cursor-pointer"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}


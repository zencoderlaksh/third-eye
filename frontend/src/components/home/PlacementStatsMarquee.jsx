import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Handshake, Trophy, GraduationCap } from "lucide-react";

// Interactive 3D tilt card component with mouse-tracking radial sheen
function TiltCard({ children, className = "" }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-[#14110c] to-[#0c0906] border border-[#2b2216] hover:border-[#f6d96b]/70 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(246,217,107,0.15)] overflow-hidden group ${className}`}
    >
      {/* Top Edge Golden Micro-Glow Accent */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#f6d96b]/35 to-transparent pointer-events-none" />

      {/* Warm Ambient Internal Depth Glow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#f6d96b]/[0.04] rounded-full blur-2xl pointer-events-none" />

      {/* Glare Sheen following cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(246, 217, 107, ${glare.opacity}), transparent 65%)`,
        }}
      />
      {children}
    </div>
  );
}

// Smooth count-up counter component triggered on viewport entry
function AnimatedCounter({ end, decimals = 0, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Cubic ease out
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(easeOut * end);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

// Full-color, authentic original recruiter and studio brand logos (Scaled & Prominent)
const companyLogos = [
  {
    name: "Accenture",
    logo: (
      <div className="flex items-center gap-2 select-none min-w-[170px] sm:min-w-[210px] justify-center">
        <span className="text-3xl font-black text-[#A100FF] -mr-0.5">&gt;</span>
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
          accenture
        </span>
      </div>
    ),
  },
  {
    name: "Razorpay",
    logo: (
      <div className="flex items-center gap-3 select-none min-w-[180px] sm:min-w-[220px] justify-center">
        <svg className="w-8 h-8 text-[#0284c7]" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 2,22 9,22 14,12 22,2" />
        </svg>
        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight italic text-white">
          Razorpay
        </span>
      </div>
    ),
  },
  {
    name: "Walmart",
    logo: (
      <div className="flex items-center gap-2.5 select-none min-w-[180px] sm:min-w-[220px] justify-center">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Walmart
        </span>
        <svg className="w-8 h-8 text-[#FFC220]" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="4" r="2.5" />
          <circle cx="12" cy="20" r="2.5" />
          <circle cx="4" cy="12" r="2.5" />
          <circle cx="20" cy="12" r="2.5" />
          <circle cx="6.5" cy="6.5" r="2.5" />
          <circle cx="17.5" cy="17.5" r="2.5" />
        </svg>
      </div>
    ),
  },
  {
    name: "TCS",
    logo: (
      <div className="flex items-center gap-3 select-none min-w-[200px] sm:min-w-[250px] justify-center">
        <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#FF0055] via-[#A855F7] to-[#00D4FF] bg-clip-text text-transparent">
          tcs
        </span>
        <div className="h-6 w-px bg-zinc-600 mx-1 hidden sm:block" />
        <span className="text-xs font-bold tracking-widest text-zinc-300 uppercase leading-tight hidden sm:block">
          Tata Consultancy<br />Services
        </span>
      </div>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <div className="flex items-center gap-3.5 select-none min-w-[180px] sm:min-w-[220px] justify-center">
        <div className="grid grid-cols-2 gap-1 w-6 h-6">
          <span className="w-2.5 h-2.5 bg-[#F25022] rounded-[1px]" />
          <span className="w-2.5 h-2.5 bg-[#7FBA00] rounded-[1px]" />
          <span className="w-2.5 h-2.5 bg-[#00A4EF] rounded-[1px]" />
          <span className="w-2.5 h-2.5 bg-[#FFB900] rounded-[1px]" />
        </div>
        <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white font-sans">
          Microsoft
        </span>
      </div>
    ),
  },
  {
    name: "Amazon",
    logo: (
      <div className="flex flex-col items-center select-none min-w-[160px] sm:min-w-[200px] justify-center">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-none">
          amazon
        </span>
        <svg className="w-18 h-4 text-[#FF9900]" viewBox="0 0 100 20" fill="none">
          <path
            d="M 5 10 Q 50 25 95 5"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    name: "Google",
    logo: (
      <div className="flex items-center gap-3 select-none min-w-[170px] sm:min-w-[210px] justify-center">
        <svg className="w-8 h-8" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.15 0 9.92 0 12s.45 3.85 1.24 5.42l4.04-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Google
        </span>
      </div>
    ),
  },
  {
    name: "Adobe",
    logo: (
      <div className="flex items-center gap-3 select-none min-w-[170px] sm:min-w-[200px] justify-center">
        <div className="w-8 h-8 rounded-lg bg-[#FA0F00] flex items-center justify-center font-black text-white text-sm shadow-md">
          A
        </div>
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FA0F00]">
          Adobe
        </span>
      </div>
    ),
  },
  {
    name: "Ubisoft",
    logo: (
      <div className="flex items-center gap-3 select-none min-w-[180px] sm:min-w-[220px] justify-center">
        <svg className="w-8 h-8 text-[#00D4FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7a5 5 0 0 1 5 5c0 3-2.5 5-5 5s-5-2-5-5a3 3 0 0 1 3-3" />
        </svg>
        <span className="text-2xl sm:text-3xl font-black tracking-wider text-white">
          UBISOFT
        </span>
      </div>
    ),
  },
  {
    name: "Infosys",
    logo: (
      <div className="flex items-center select-none min-w-[160px] sm:min-w-[190px] justify-center">
        <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#007CC3]">
          Infosys
        </span>
      </div>
    ),
  },
];

export default function PlacementStatsMarquee() {
  return (
    <section className="relative z-10 pt-0 sm:pt-2 pb-16 sm:pb-24 overflow-hidden w-full">
      {/* 1. Top Section: Centered 4 Animative 3D Metric Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {/* Card 1: 7.5 Lakh Average Package */}
          <TiltCard>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-baseline text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  <AnimatedCounter end={7.5} decimals={1} />
                  <span className="text-2xl sm:text-3xl font-normal text-[#f6d96b] ml-2">
                    Lakh
                  </span>
                </div>
                <div className="text-sm sm:text-base font-medium text-zinc-300 mt-2">
                  Average Package
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#f6d96b]/10 border border-[#f6d96b]/25 flex items-center justify-center text-[#f6d96b] group-hover:scale-110 group-hover:bg-[#f6d96b] group-hover:text-black transition-all duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <div className="text-xs text-zinc-400 font-normal">
              Across tech & animation placements
            </div>
          </TiltCard>

          {/* Card 2: 47 Lakh Highest Package */}
          <TiltCard>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-baseline text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  <AnimatedCounter end={47} />
                  <span className="text-2xl sm:text-3xl font-normal text-[#f6d96b] ml-2">
                    Lakh
                  </span>
                </div>
                <div className="text-sm sm:text-base font-medium text-zinc-300 mt-2">
                  Highest Package
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#f6d96b]/10 border border-[#f6d96b]/25 flex items-center justify-center text-[#f6d96b] group-hover:scale-110 group-hover:bg-[#f6d96b] group-hover:text-black transition-all duration-300">
                <Handshake className="w-6 h-6" />
              </div>
            </div>
            <div className="text-xs text-zinc-400 font-normal">
              Top global studio offer record
            </div>
          </TiltCard>

          {/* Card 3: 300+ Hiring Partners */}
          <TiltCard>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-baseline text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  <AnimatedCounter end={300} suffix="+" />
                </div>
                <div className="text-sm sm:text-base font-medium text-zinc-300 mt-2">
                  Hiring Partners
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#f6d96b]/10 border border-[#f6d96b]/25 flex items-center justify-center text-[#f6d96b] group-hover:scale-110 group-hover:bg-[#f6d96b] group-hover:text-black transition-all duration-300">
                <Trophy className="w-6 h-6" />
              </div>
            </div>
            <div className="text-xs text-zinc-400 font-normal">
              Active campus placement network
            </div>
          </TiltCard>

          {/* Card 4: 10M+ Monthly Tech Reach */}
          <TiltCard>
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-baseline text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  <AnimatedCounter end={10} suffix=" M+" />
                </div>
                <div className="text-sm sm:text-base font-medium text-zinc-300 mt-2">
                  Monthly Tech Reach
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#f6d96b]/10 border border-[#f6d96b]/25 flex items-center justify-center text-[#f6d96b] group-hover:scale-110 group-hover:bg-[#f6d96b] group-hover:text-black transition-all duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>
            <div className="text-xs text-zinc-400 font-normal">
              10,000+ certified alumni community
            </div>
          </TiltCard>
        </div>

        {/* Recruiter Marquee Header */}
        <div className="text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f6d96b] animate-pulse" />
            Top Recruiters & Hiring Partners Network
          </span>
        </div>
      </div>

      {/* 2. Full-Width Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-4 bg-transparent">
        {/* Left Edge Subtle Dark Fade Mask (Short & Clean) */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />

        {/* Right Edge Subtle Dark Fade Mask (Short & Clean) */}
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        {/* Continuous Full-Width Marquee Track */}
        <div className="flex items-center gap-16 sm:gap-24 w-max animate-marquee pause-hover py-4 sm:py-5">
          {/* First Set of Colorful Original Brand Logos */}
          {companyLogos.map((item, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer select-none"
            >
              {item.logo}
            </div>
          ))}

          {/* Duplicate Set for Seamless Continuous Infinite Loop */}
          {companyLogos.map((item, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 cursor-pointer select-none"
            >
              {item.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

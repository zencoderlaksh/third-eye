import React, { useState } from "react";
import {
  Laptop,
  MessageSquareCode,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Terminal,
} from "lucide-react";

// Individual 3D Tilt Card Component
function TiltCard({ item, index }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-8px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
      className="relative rounded-3xl p-8 bg-[#0D0F18]/90 border border-[#222535] hover:border-yellow-400/50 shadow-2xl shadow-black/80 transition-all duration-300 group overflow-hidden"
    >
      {/* Ambient background hover glow */}
      <div
        className={`absolute -inset-20 bg-yellow-400/[0.08] rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Top Number & Icon Pill */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-lg shadow-yellow-400/10">
          <item.icon className="w-7 h-7" />
        </div>
        <span className="text-3xl font-black text-zinc-800 group-hover:text-yellow-400/25 transition-colors">
          0{index + 1}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-extrabold text-white group-hover:text-yellow-400 transition-colors mb-3 relative z-10">
        {item.title}
      </h3>

      {/* Main Quote & Description */}
      <p className="text-sm text-zinc-300 leading-relaxed mb-6 relative z-10">
        {item.description}
      </p>

      {/* Bullet Points */}
      <ul className="space-y-2.5 relative z-10 list-none p-0 m-0 border-t border-zinc-800/80 pt-6">
        {item.highlights.map((h, i) => (
          <li key={i} className="flex items-center gap-2.5 text-xs text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WhyChooseUs3D() {
  const pillars = [
    {
      icon: Laptop,
      title: "100% Practical Training",
      description:
        "No boring theory slides. Students write real code, configure databases, manage real ad campaigns, and solve production bugs from Day 1.",
      highlights: [
        "Live industry client projects",
        "Modern high-spec computer labs",
        "Portfolio creation before graduation",
        "Hands-on homework & coding sprints",
      ],
    },
    {
      icon: MessageSquareCode,
      title: "Personal 1-on-1 Mentorship",
      description:
        "Never get left behind. Our expert educators and industry mentors are available to solve your doubts, review code, and guide your pace.",
      highlights: [
        "Instant WhatsApp & in-lab doubt support",
        "Small batch sizes for individual focus",
        "Flexible morning, day & evening timings",
        "Free demo classes before joining",
      ],
    },
    {
      icon: Briefcase,
      title: "Job-Ready Placement Drive",
      description:
        "We bridge the gap between classroom and corporate. Complete career support from resume polishing to interview prep and campus recruitment.",
      highlights: [
        "100% placement assistance network",
        "Mock HR & technical interview rounds",
        "LinkedIn & GitHub profile optimization",
        "Direct referrals to 150+ hiring partners",
      ],
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#090A0F] overflow-hidden">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141622_1px,transparent_1px),linear-gradient(to_bottom,#141622_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Third Eye Difference</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Why Students Love Learning at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
              Third Eye?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400">
            Engineered from the ground up to give you real-world technical mastery, portfolio credentials, and immediate employability.
          </p>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <TiltCard key={idx} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

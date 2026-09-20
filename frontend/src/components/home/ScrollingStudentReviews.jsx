import React, { useState } from "react";
import {
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  Award,
  TrendingUp,
  Briefcase,
  Play,
  Pause,
  MessageSquare,
} from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function ScrollingStudentReviews() {
  const [isPaused, setIsPaused] = useState(false);

  const reviewsRow1 = [
    {
      id: "chetan",
      name: "Chetan Jangid",
      course: "Full Stack Web Development (MERN)",
      role: "Software Developer",
      company: "Infosys Placement",
      package: "₹6.8 LPA",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      avatarInitials: "CJ",
      rating: 5,
      feedback:
        "Third Eye transformed my career! I started with zero coding experience. With 100% individual workstation training and constant mentor debugging, I built real MERN apps and cleared technical rounds on my first attempt.",
      tags: ["React.js", "Node.js", "MongoDB", "Express"],
      accent: "from-amber-400/20 via-yellow-400/10 to-transparent",
      badgeColor: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
    },
    {
      id: "dharmendar",
      name: "Dharmendar Kumar Jain",
      course: "Python & Machine Learning",
      role: "Data Analyst",
      company: "Analytics Firm",
      package: "Placed via Campus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
      avatarInitials: "DJ",
      rating: 5,
      feedback:
        "The personal 1-on-1 mentorship here is unmatched in Jaipur. No sharing computers! We solved real enterprise datasets using Pandas, NumPy and Machine Learning models. The faculty is extremely supportive.",
      tags: ["Python 3", "Data Science", "Pandas", "SQL"],
      accent: "from-yellow-400/20 via-amber-500/10 to-transparent",
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/40",
    },
    {
      id: "devanshi",
      name: "Devanshi Rawat",
      course: "Tally Prime with Corporate GST",
      role: "Senior Accounts Executive",
      company: "Chartered Accounting Firm",
      package: "Corporate Finance",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
      avatarInitials: "DR",
      rating: 5,
      feedback:
        "Coming from a college background, taxation felt scary. The teachers made corporate voucher entries, GST returns and TDS reconciliations so straightforward that I now handle complete client balance sheets confidently.",
      tags: ["Tally Prime", "GST Filing", "Payroll", "Auditing"],
      accent: "from-yellow-500/20 via-yellow-400/10 to-transparent",
      badgeColor: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
    },
    {
      id: "shubham",
      name: "Shubham Rathore",
      course: "Graphic Design & UI/UX Mastery",
      role: "Lead Creative Designer",
      company: "Digital Studio Jaipur",
      package: "Design Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
      avatarInitials: "SR",
      rating: 5,
      feedback:
        "I built an international-grade Behance portfolio here! From mobile Figma UI systems to Photoshop composite manipulation, my mentor sat beside me refining every micro-interaction. Placed right after completion.",
      tags: ["Figma", "Photoshop", "Illustrator", "UI/UX"],
      accent: "from-amber-400/20 via-yellow-400/10 to-transparent",
      badgeColor: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
    },
  ];

  const reviewsRow2 = [
    {
      id: "ronak",
      name: "Ronak Jain",
      course: "Full Stack JavaScript & Cloud",
      role: "Frontend Engineer",
      company: "Fintech Startup",
      package: "₹7.2 LPA",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80",
      avatarInitials: "RJ",
      rating: 5,
      feedback:
        "Best institute in Jaipur without any doubt! Weekly coding drills, mock interview rounds, and live project deployments gave me high confidence. Cleared a competitive fintech developer interview smoothly.",
      tags: ["React.js", "TypeScript", "Next.js", "Tailwind"],
      accent: "from-yellow-400/20 via-amber-400/10 to-transparent",
      badgeColor: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
    },
    {
      id: "urvashi",
      name: "Urvashi Adwani",
      course: "Advanced Digital Marketing & SEO",
      role: "Growth Marketing Lead",
      company: "E-Commerce Agency",
      package: "Digital Strategist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
      avatarInitials: "UA",
      rating: 5,
      feedback:
        "Not just theory! We managed real Google Ads budgets, did on-page technical SEO audits, and analyzed conversion funnels on live sites. Extremely high practical value for anyone wanting digital mastery.",
      tags: ["Google Ads", "Technical SEO", "Meta Ads", "Analytics"],
      accent: "from-amber-500/20 via-yellow-400/10 to-transparent",
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/40",
    },
    {
      id: "aman",
      name: "Aman Sharma",
      course: "Java Enterprise & Microservices",
      role: "Backend Software Engineer",
      company: "Cloud Solutions",
      package: "₹6.5 LPA",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
      avatarInitials: "AS",
      rating: 5,
      feedback:
        "The object-oriented fundamentals and Spring Boot architecture taught here were far deeper and more practical than my 4 years of college degree. The trainers are veteran developers who know MNC hiring criteria.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      accent: "from-yellow-400/20 via-yellow-500/10 to-transparent",
      badgeColor: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
    },
    {
      id: "shilpa",
      name: "Shilpa Mathur",
      course: "ADCA Diploma (Govt. Recognized)",
      role: "Systems Administrator",
      company: "Corporate Enterprises",
      package: "Govt. Approved",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
      avatarInitials: "SM",
      rating: 5,
      feedback:
        "The 1-year ADCA diploma gave me all-round computer proficiency. From advanced Excel macros to database management and DTP, the certification is respected across private and government sectors.",
      tags: ["Advanced Excel", "MIS Reporting", "MS Office", "DTP"],
      accent: "from-amber-400/20 via-yellow-400/10 to-transparent",
      badgeColor: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
    },
  ];

  const renderCard = (rev) => (
    <div
      key={rev.id}
      className="w-[340px] sm:w-[400px] shrink-0 rounded-3xl bg-gradient-to-b from-[#161A2B] via-[#121524] to-[#0E111E] border border-yellow-400/25 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(250,204,21,0.05)] hover:border-yellow-400 hover:shadow-[0_20px_45px_rgba(250,204,21,0.15)] transition-all duration-300 group flex flex-col justify-between"
    >
      <div>
        {/* Top Student Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3.5">
            {/* Student Image with Golden Glow Border */}
            <div className="relative">
              <img
                src={rev.image}
                alt={rev.name}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    rev.name
                  )}&background=FACC15&color=000000&bold=true`;
                }}
                className="w-13 h-13 rounded-2xl object-cover border-2 border-yellow-400 shadow-md shadow-yellow-400/20 group-hover:scale-105 transition-transform"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#121524] shadow-sm" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {rev.name}
                </h4>
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
              </div>
              <p className="text-xs text-yellow-400/90 font-medium line-clamp-1">
                {rev.course}
              </p>
              <p className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                <Briefcase className="w-3 h-3 text-zinc-500" />
                <span>{rev.role}</span>
              </p>
            </div>
          </div>

          {/* Package Badge */}
          <span
            className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border shrink-0 ${rev.badgeColor}`}
          >
            {rev.package}
          </span>
        </div>

        {/* Rating and Quote */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(rev.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-xs font-bold text-white ml-1">5.0</span>
          <span className="text-[11px] text-zinc-500 ml-auto font-mono">
            Verified Alumni
          </span>
        </div>

        <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed italic line-clamp-4 mb-4">
          &ldquo;{rev.feedback}&rdquo;
        </p>
      </div>

      {/* Skills Badges */}
      <div className="pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
        {rev.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#1B2034] text-yellow-300 border border-white/[0.06]"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-28 bg-[#090C16] text-white overflow-hidden">
      {/* Warm Ambient Golden Gradient Backdrops (Not dull dark!) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-yellow-500/10 via-amber-400/10 to-yellow-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/35 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_25px_rgba(250,204,21,0.2)]">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Real Students • Real Placements</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Loved By Over{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                10,000+ Alumni
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Hover over any card to pause and read real transformation stories from students who mastered practical tech at Third Eye.
            </p>

            {/* Social Proof Strip with Play/Pause Control */}
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-6 py-2.5 rounded-2xl bg-[#14182B] border border-yellow-400/25 shadow-xl">
              <div className="flex items-center gap-1.5">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-black text-white ml-1">4.9 / 5.0</span>
              </div>

              <div className="h-4 w-px bg-zinc-700 hidden sm:block" />

              <span className="text-xs text-zinc-300 font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-yellow-400" />
                150+ Direct Recruitment Partners
              </span>

              <div className="h-4 w-px bg-zinc-700 hidden sm:block" />

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 hover:text-yellow-300 cursor-pointer transition-colors"
                title={isPaused ? "Resume Auto Scroll" : "Pause Auto Scroll"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 fill-yellow-400" /> : <Pause className="w-3.5 h-3.5 fill-yellow-400" />}
                <span>{isPaused ? "Resume" : "Pause"}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Track 1: Scrolling Left */}
      <div className="relative w-full overflow-hidden mb-6 pause-hover">
        <div
          className={`flex gap-6 w-max ${
            isPaused ? "" : "animate-marquee"
          }`}
          style={{ animationDuration: "36s" }}
        >
          {/* Double the list for infinite seamless marquee loop */}
          {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((rev, index) => (
            <React.Fragment key={`${rev.id}-${index}`}>
              {renderCard(rev)}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Track 2: Scrolling Right (Reverse) */}
      <div className="relative w-full overflow-hidden pause-hover">
        <div
          className={`flex gap-6 w-max ${
            isPaused ? "" : "animate-marquee-reverse"
          }`}
          style={{ animationDuration: "36s" }}
        >
          {/* Double the list for infinite seamless marquee loop */}
          {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((rev, index) => (
            <React.Fragment key={`${rev.id}-${index}`}>
              {renderCard(rev)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

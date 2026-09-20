import React, { useState } from "react";
import {
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  Award,
  Briefcase,
  TrendingUp,
  Code2,
  Palette,
  Calculator,
  Laptop,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function StudentReviews3D() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Reviews", icon: Sparkles },
    { id: "coding", label: "Full Stack & Web Dev", icon: Code2 },
    { id: "ai_data", label: "Python & Data Science", icon: Laptop },
    { id: "design", label: "UI/UX & Design", icon: Palette },
    { id: "accounts", label: "Tally & Finance", icon: Calculator },
  ];

  const reviews = [
    {
      id: "chetan",
      name: "Chetan Jangid",
      category: "coding",
      role: "Software Developer",
      company: "Leading IT MNC",
      package: "₹6.8 LPA Package",
      course: "Full Stack Web Development (MERN)",
      avatarGradient: "from-yellow-400 via-amber-400 to-yellow-500",
      avatarInitials: "CJ",
      rating: 5,
      year: "2025 Batch",
      featured: true,
      highlight: "Zero Prior Coding → Placed in 1st Attempt",
      quote:
        "I started at Third Eye with absolutely zero coding background. The faculty gave me 100% individual workstation time with zero sharing. In just 5 months, I built full-stack production apps with JWT authentication, Stripe payment gateways, and cloud deployment. When the placement drive arrived, I cleared the technical rounds on my very first attempt!",
      skills: ["React.js", "Node.js", "MongoDB", "Express", "REST APIs", "Git"],
    },
    {
      id: "dharmendar",
      name: "Dharmendar Kumar Jain",
      category: "ai_data",
      role: "Data Analyst & ML Specialist",
      company: "Data & Analytics Firm",
      package: "Placed via Campus Drive",
      course: "Python & Data Science Mastery",
      avatarGradient: "from-amber-400 to-yellow-600",
      avatarInitials: "DJ",
      rating: 5,
      year: "2024 Batch",
      featured: false,
      highlight: "1-on-1 Mentor Support on Live Datasets",
      quote:
        "The personal 1-on-1 mentorship at Third Eye is unmatched. No sharing computers! We worked directly with Pandas, NumPy, and Scikit-Learn on real enterprise datasets. Difficult machine learning logic was explained through visual diagrams and practical lab exercises.",
      skills: ["Python 3", "Pandas", "NumPy", "Scikit-Learn", "SQL"],
    },
    {
      id: "shubham",
      name: "Shubham Rathore",
      category: "design",
      role: "Lead Creative & UI/UX Designer",
      company: "Creative Studio Jaipur",
      package: "Creative Lead Role",
      course: "Graphic Design & UI/UX Mastery",
      avatarGradient: "from-yellow-300 via-amber-500 to-orange-500",
      avatarInitials: "SR",
      rating: 5,
      year: "2025 Batch",
      featured: false,
      highlight: "Built 12+ Professional Behance Projects",
      quote:
        "Third Eye helped me build a world-class Behance portfolio. From brand identity systems to complex Figma mobile app prototypes and advanced Photoshop manipulation, the mentor sat beside me refining every millimeter until it was pixel-perfect.",
      skills: ["Figma", "Photoshop", "Illustrator", "UI Prototyping", "Design Systems"],
    },
    {
      id: "devanshi",
      name: "Devanshi Rawat",
      category: "accounts",
      role: "Senior Accounts Executive",
      company: "Chartered Accounting Firm",
      package: "Corporate Finance Role",
      course: "Tally Prime with Corporate GST & E-Way Bill",
      avatarGradient: "from-amber-300 to-yellow-500",
      avatarInitials: "DR",
      rating: 5,
      year: "2024 Batch",
      featured: false,
      highlight: "From Commerce Student to Corporate Accountant",
      quote:
        "Being fresh out of college, corporate taxation seemed overwhelming. The faculty taught actual business voucher entries, GST returns, TDS reconciliations, and payroll processing. Today I manage complete corporate balance sheets with total confidence.",
      skills: ["Tally Prime", "GST Portal", "TDS Filing", "E-Way Bill", "Corporate Payroll"],
    },
    {
      id: "ronak",
      name: "Ronak Jain",
      category: "coding",
      role: "Frontend Engineer",
      company: "Fintech Startup",
      package: "₹7.2 LPA Placement",
      course: "Full Stack JavaScript & Cloud Deployment",
      avatarGradient: "from-yellow-400 to-amber-600",
      avatarInitials: "RJ",
      rating: 5,
      year: "2025 Batch",
      featured: false,
      highlight: "Cracked High-Paying Fintech Developer Role",
      quote:
        "Best computer institute without question! The mock interviews, weekly coding challenges, and individual lab mentors prepared me for every curveball in technical interviews. If you want a real engineering job rather than boring theory, join Third Eye.",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Next.js"],
    },
    {
      id: "urvashi",
      name: "Urvashi Adwani",
      category: "design",
      role: "Growth Marketer & SEO Specialist",
      company: "E-Commerce Agency",
      package: "Digital Growth Lead",
      course: "Advanced Digital Marketing & SEO",
      avatarGradient: "from-amber-400 to-yellow-500",
      avatarInitials: "UA",
      rating: 5,
      year: "2024 Batch",
      featured: false,
      highlight: "Managed Live Client Ad Budgets",
      quote:
        "We didn't just stare at PowerPoint slides—we actually launched and managed live Google Ads campaigns, conducted deep technical SEO audits, and optimized conversion funnels. The hands-on exposure was incredible.",
      skills: ["Google Ads", "Technical SEO", "Meta Ads", "Conversion Rate", "Analytics"],
    },
    {
      id: "aman",
      name: "Aman Sharma",
      category: "coding",
      role: "Backend Software Engineer",
      company: "Cloud Software Solutions",
      package: "Core Engineering Role",
      course: "Java Enterprise & Spring Boot Microservices",
      avatarGradient: "from-yellow-400 to-amber-500",
      avatarInitials: "AS",
      rating: 5,
      year: "2025 Batch",
      featured: false,
      highlight: "Practical Microservices & Database Tuning",
      quote:
        "The object-oriented programming foundations and Spring Boot microservices taught here were deeper and more practical than my 4 years of engineering college. The mentors are senior developers who know exactly what recruiters test.",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Microservices"],
    },
    {
      id: "shilpa",
      name: "Shilpa Mathur",
      category: "accounts",
      role: "Office IT & Systems Admin",
      company: "Corporate Enterprises",
      package: "Administrative Specialist",
      course: "ADCA Diploma (1-Year Govt. Recognized)",
      avatarGradient: "from-amber-400 to-yellow-600",
      avatarInitials: "SM",
      rating: 5,
      year: "2024 Batch",
      featured: false,
      highlight: "Govt. Recognized Certification Recognized Everywhere",
      quote:
        "The 1-year ADCA diploma gave me all-round computer proficiency. From advanced Excel macros and formulas to database administration and DTP, the certification from Third Eye is recognized and respected by every employer.",
      skills: ["Advanced Excel", "MIS Reporting", "MS Office Suite", "DTP", "Databases"],
    },
  ];

  const filteredReviews = reviews.filter((rev) => {
    if (activeCategory === "all") return true;
    return rev.category === activeCategory;
  });

  return (
    <section id="reviews" className="relative py-28 bg-[#090A0F] text-white overflow-hidden">
      {/* Dynamic ambient backdrop illumination */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-yellow-400/[0.035] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Circuit overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #facc15 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_25px_rgba(250,204,21,0.15)]">
            <Award className="w-4 h-4 text-yellow-400" />
            <span>Wall of Verified Alumni Success</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            From Complete Beginners to{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Real feedback and career breakthroughs from graduates who mastered hands-on skills in our 100% practical computer labs.
          </p>

          {/* Social Proof Badges Strip */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-2xl bg-[#11131E]/90 border border-white/[0.08] backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-black text-white ml-0.5">4.9 / 5.0</span>
            </div>

            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-yellow-400" />
              <span>10,000+ Students Certified</span>
            </div>

            <div className="h-4 w-px bg-zinc-800 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs font-semibold text-yellow-400">
              <TrendingUp className="w-4 h-4 text-yellow-400" />
              <span>150+ Hiring Placement Partners</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/25 scale-105"
                    : "bg-[#121420] text-zinc-400 hover:text-white hover:bg-[#1A1D2D] border border-white/[0.08]"
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? "text-black" : "text-yellow-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Bento-Wall Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className={`group relative rounded-3xl bg-[#0D0F18]/90 border border-white/[0.08] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_30px_rgba(250,204,21,0.08)] flex flex-col justify-between backdrop-blur-xl ${
                rev.featured
                  ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#131625] via-[#0E111C] to-[#0A0C14] border-yellow-400/30"
                  : ""
              }`}
            >
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent group-hover:via-yellow-400/80 transition-all duration-500" />

              <div>
                {/* Top Row: Avatar, Identity, and Verified Badge */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    {/* Glowing Avatar */}
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${rev.avatarGradient} text-black font-black text-sm flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover:scale-105 transition-transform duration-300`}
                      >
                        {rev.avatarInitials}
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0D0F18] shadow-sm" />
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {rev.name}
                        </h3>
                        <CheckCircle2 className="w-4 h-4 text-yellow-400 fill-yellow-400/20 shrink-0" />
                      </div>
                      <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                        <Briefcase className="w-3 h-3 text-yellow-400/80" />
                        <span>{rev.role}</span>
                      </p>
                    </div>
                  </div>

                  {/* Company / Package Tag */}
                  <div className="text-right shrink-0">
                    <span className="inline-block text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/25 tracking-wide">
                      {rev.package}
                    </span>
                    <div className="text-[10px] text-zinc-500 font-medium mt-1">
                      {rev.company}
                    </div>
                  </div>
                </div>

                {/* Rating Stars & Course Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 py-2 border-y border-white/[0.06]">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-[11px] font-bold text-white ml-1.5">5.0</span>
                  </div>

                  <span className="text-[11px] font-semibold text-zinc-400 bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-white/[0.06]">
                    {rev.course}
                  </span>
                </div>

                {/* Highlight banner if any */}
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1.5 rounded-xl border border-yellow-400/20">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                  <span>{rev.highlight}</span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Skills Tag List */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                {rev.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#141724] text-zinc-300 border border-white/[0.06] group-hover:border-yellow-400/20 group-hover:text-yellow-300 transition-colors"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar & Action */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#121422] via-[#16192A] to-[#121422] border border-yellow-400/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-black text-white">
              Want to be our next placed student?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Experience the 100% practical curriculum firsthand with a zero-risk 2-Day Practical Demo Class.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/918058061222?text=Hi%20Third%20Eye%20Classes!%20I%20saw%20your%20alumni%20reviews%20and%20want%20to%20book%20a%20Free%20Practical%20Demo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-yellow-400 text-black text-xs sm:text-sm font-black hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/20 active:scale-95 group"
            >
              <span>Book Your Free Demo Class</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

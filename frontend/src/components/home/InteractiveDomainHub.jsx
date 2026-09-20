import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Cpu,
  Palette,
  Calculator,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Laptop,
  Briefcase,
  Play,
  Layers,
  Flame,
} from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function InteractiveDomainHub() {
  const [activeTab, setActiveTab] = useState("coding");

  const domains = {
    coding: {
      id: "coding",
      badge: "Most Popular Track",
      badgeColor: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
      title: "Full Stack Web & Software Engineering",
      headline: "From Zero to Building Scalable Enterprise Web Apps",
      desc: "Learn to architect modern full-stack web applications with React 19, Node.js, Express, MongoDB, and Tailwind CSS. Deploy live apps on AWS and Vercel with real payment gateways.",
      colorGradient: "from-yellow-400 via-amber-400 to-yellow-500",
      duration: "6 Months Intensive",
      batch: "Morning, Evening & Weekend Batches",
      startingSalary: "₹5.5 – ₹12+ LPA",
      tools: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST APIs", "Git/GitHub"],
      projectPreview: {
        type: "Full-Stack SaaS Platform",
        title: "Cloud E-Commerce Platform with Live Payments",
        specs: ["JWT Authentication", "Stripe Checkout", "Admin Analytics Dashboard", "MongoDB Cluster"],
        mockupGradient: "from-[#1A1F36] via-[#15192C] to-[#0F1220]",
        accentBorder: "border-yellow-400/40",
      },
    },
    ai_python: {
      id: "ai_python",
      badge: "High Growth 2026",
      badgeColor: "bg-emerald-400/20 text-emerald-300 border-emerald-400/40",
      title: "Python, Data Science & Machine Learning",
      headline: "Harness Big Data, Predictive Models & Neural Networks",
      desc: "Dive into data science with Python 3, Pandas, NumPy, and Scikit-Learn. Train machine learning models, analyze enterprise datasets, and build intelligent AI solutions.",
      colorGradient: "from-emerald-400 via-teal-400 to-cyan-500",
      duration: "4 to 6 Months",
      batch: "Regular & Fast-Track Available",
      startingSalary: "₹6.0 – ₹14+ LPA",
      tools: ["Python 3", "Pandas", "NumPy", "Scikit-Learn", "SQL", "Tableau", "Neural Networks"],
      projectPreview: {
        type: "Machine Learning Model",
        title: "Enterprise Sales & Predictive Churn AI",
        specs: ["50K+ Dataset Analysis", "Random Forest Classifier", "Interactive Tableau Dashboards", "Flask API"],
        mockupGradient: "from-[#102422] via-[#0E1E1D] to-[#0B1515]",
        accentBorder: "border-emerald-400/40",
      },
    },
    design: {
      id: "design",
      badge: "Creative Excellence",
      badgeColor: "bg-purple-400/20 text-purple-300 border-purple-400/40",
      title: "Graphic Design, UI/UX & 3D Multimedia",
      headline: "Craft Stunning Mobile Apps, Brand Identities & Web Experiences",
      desc: "Master industry design tools including Figma, Adobe Illustrator, and Photoshop. Create interactive prototypes, design systems, and international Behance portfolios.",
      colorGradient: "from-purple-400 via-pink-400 to-amber-400",
      duration: "3 to 6 Months",
      batch: "Flexible Lab Hours",
      startingSalary: "₹4.5 – ₹9+ LPA",
      tools: ["Figma", "Photoshop", "Illustrator", "UI Prototyping", "Design Systems", "Typography"],
      projectPreview: {
        type: "Mobile UI/UX System",
        title: "Fintech Mobile App & Design System",
        specs: ["Figma Interactive Prototype", "Light/Dark Color Tokens", "Brand Identity Guidelines", "Behance Case Study"],
        mockupGradient: "from-[#22162C] via-[#1A1124] to-[#120B1A]",
        accentBorder: "border-purple-400/40",
      },
    },
    finance: {
      id: "finance",
      badge: "100% Job Ready",
      badgeColor: "bg-blue-400/20 text-blue-300 border-blue-400/40",
      title: "Tally Prime with Corporate GST & E-Way Bill",
      headline: "Master Corporate Accounting, Taxation & Balance Sheets",
      desc: "Gain complete mastery over corporate vouchers, GST returns, TDS reconciliations, e-invoicing, and payroll management on actual business books.",
      colorGradient: "from-blue-400 via-indigo-400 to-yellow-400",
      duration: "3 Months Fast Track",
      batch: "Morning & Evening Working Slots",
      startingSalary: "₹3.5 – ₹7.5 LPA",
      tools: ["Tally Prime", "Corporate GST", "TDS Filing", "E-Way Bill", "Balance Sheet", "Payroll"],
      projectPreview: {
        type: "Corporate Financial Audit",
        title: "Full-Year Financial Accounting & GST Filing",
        specs: ["Multi-Company Ledgers", "Monthly GSTR-1 & 3B Filing", "TDS Calculation Sheets", "Audited Balance Sheet"],
        mockupGradient: "from-[#131D33] via-[#0F1628] to-[#0A0F1D]",
        accentBorder: "border-blue-400/40",
      },
    },
    diploma: {
      id: "diploma",
      badge: "Govt. Recognized",
      badgeColor: "bg-amber-400/20 text-amber-300 border-amber-400/40",
      title: "ADCA & O-Level Computer Diplomas",
      headline: "All-Round Computer Literacy for Govt. & Private Careers",
      desc: "Comprehensive 1-year diploma covering Advanced Excel, MS Office Suite, DTP, Tally ERP, Web Designing basics, and hardware fundamentals.",
      colorGradient: "from-amber-400 via-yellow-400 to-orange-500",
      duration: "1 Year Diploma",
      batch: "Daily Regular Batches",
      startingSalary: "Government Exam Recognized",
      tools: ["Advanced Excel", "MS Office 365", "Tally ERP", "DTP", "Web Fundamentals", "MIS Reports"],
      projectPreview: {
        type: "Government Authorized Diploma",
        title: "Comprehensive Office IT & Data Management",
        specs: ["Advanced Excel Macros", "MIS Business Reporting", "Govt. Job Eligibility", "Verifiable QR Certificate"],
        mockupGradient: "from-[#261E14] via-[#1C160F] to-[#140F0A]",
        accentBorder: "border-amber-400/40",
      },
    },
  };

  const current = domains[activeTab];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#090A0F] via-[#0E1220] to-[#090C16] text-white overflow-hidden border-y border-yellow-400/20">
      {/* Dynamic colorful ambient glow matching active track */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-yellow-400/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-amber-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/35 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Interactive Tech Playground</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Choose What You Love.{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                We Build Your Career.
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Click below to explore real client projects, software stacks, and placement outcomes for each domain.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Domain Nav Tabs */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
            {[
              { id: "coding", label: "Web & Full Stack", icon: Code2 },
              { id: "ai_python", label: "Python & AI Data", icon: Cpu },
              { id: "design", label: "UI/UX & Graphics", icon: Palette },
              { id: "finance", label: "Tally & GST ERP", icon: Calculator },
              { id: "diploma", label: "ADCA Diploma", icon: GraduationCap },
            ].map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/30 scale-105 font-black"
                      : "bg-[#141829] text-zinc-300 hover:text-white hover:bg-[#1B2138] border border-white/10"
                  }`}
                >
                  <IconComponent className={`w-4 h-4 ${isActive ? "text-black" : "text-yellow-400"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Interactive Domain Canvas Card */}
        <ScrollReveal direction="zoom" delay={150}>
          <div className="rounded-3xl bg-gradient-to-b from-[#14182B] via-[#101323] to-[#0D101C] border border-yellow-400/35 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(250,204,21,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT: Course Info & Live Stats (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`text-xs font-extrabold px-3 py-1 rounded-full border ${current.badgeColor}`}
                  >
                    {current.badge}
                  </span>
                  <span className="text-xs text-yellow-400 font-mono font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-yellow-400" />
                    {current.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                    {current.title}
                  </h3>
                  <p className="text-sm sm:text-base text-yellow-400 font-semibold mt-1">
                    {current.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-3">
                    {current.desc}
                  </p>
                </div>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
                  <div className="p-3 rounded-2xl bg-[#181D33] border border-white/[0.08]">
                    <div className="text-[10px] text-zinc-400">Target Package</div>
                    <div className="text-sm font-bold text-yellow-400 mt-0.5">{current.startingSalary}</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#181D33] border border-white/[0.08]">
                    <div className="text-[10px] text-zinc-400">Workstation</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">100% Dedicated</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#181D33] border border-white/[0.08] col-span-2 sm:col-span-1">
                    <div className="text-[10px] text-zinc-400">Placement</div>
                    <div className="text-sm font-bold text-white mt-0.5">150+ Partners</div>
                  </div>
                </div>

                {/* Tools Learned Tag Cloud */}
                <div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
                    Core Technologies & Tools Mastered:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-xl bg-[#1A1F36] text-yellow-300 border border-yellow-400/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://wa.me/918058061222?text=Hi%2C%20I%20want%20to%20book%20a%20Free%20Practical%20Demo%20Class%20for%20this%20track."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-yellow-400 text-black text-xs sm:text-sm font-black hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/25 active:scale-95 group"
                  >
                    <Play className="w-4 h-4 fill-black text-black" />
                    <span>Book 2-Day Free Trial</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#181D34] text-white hover:text-yellow-400 text-xs sm:text-sm font-bold border border-white/10 hover:border-yellow-400/40 transition-all"
                  >
                    <span>Explore All Courses</span>
                  </Link>
                </div>
              </div>

              {/* RIGHT: Live Capstone Project Preview Frame (5 cols) */}
              <div className="lg:col-span-5">
                <div
                  className={`rounded-2xl bg-gradient-to-b ${current.projectPreview.mockupGradient} border ${current.projectPreview.accentBorder} p-6 shadow-2xl relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                    <span className="text-[11px] font-mono text-yellow-400 font-bold uppercase tracking-wider">
                      Capstone Project You Build
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md border border-emerald-400/20">
                      <CheckCircle2 className="w-3 h-3" />
                      Production Ready
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs text-zinc-400 font-mono">
                      Project Type: <span className="text-white font-bold">{current.projectPreview.type}</span>
                    </div>
                    <h4 className="text-lg font-black text-white leading-snug">
                      {current.projectPreview.title}
                    </h4>

                    {/* Specs Checklist */}
                    <div className="space-y-2 py-3 border-y border-white/[0.06] text-xs text-zinc-300">
                      {current.projectPreview.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                      <span>1-on-1 Code Review</span>
                      <span className="text-yellow-400 font-bold">GitHub Portfolio Ready</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

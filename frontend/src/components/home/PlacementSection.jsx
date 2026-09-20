import React from "react";
import {
  Briefcase,
  TrendingUp,
  Building2,
  CheckCircle2,
  Sparkles,
  Award,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Users,
  Target,
  Zap,
} from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function PlacementSection() {
  const row1Partners = [
    {
      name: "Infosys",
      domain: "IT & Software Services",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 110 32" fill="none">
          <text x="0" y="24" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="24" fill="#007CC3" letterSpacing="-0.5">Infosys</text>
        </svg>
      ),
    },
    {
      name: "TCS",
      domain: "Global Technology",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 130 32" fill="none">
          <text x="0" y="23" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="22" fill="#FFFFFF" letterSpacing="1">TCS</text>
          <line x1="52" y1="6" x2="52" y2="26" stroke="#FACC15" strokeWidth="2" />
          <text x="60" y="16" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#94A3B8" letterSpacing="0.5">TATA</text>
          <text x="60" y="26" fontFamily="Arial, sans-serif" fontWeight="600" fontSize="9" fill="#64748B" letterSpacing="0.5">CONSULTANCY</text>
        </svg>
      ),
    },
    {
      name: "Wipro",
      domain: "Enterprise Digital",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 115 32" fill="none">
          <circle cx="10" cy="11" r="4.5" fill="#DD1367" />
          <circle cx="19" cy="8" r="4" fill="#009245" />
          <circle cx="9" cy="20" r="4" fill="#F37023" />
          <circle cx="19" cy="20" r="5" fill="#0072BC" />
          <text x="30" y="23" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#FFFFFF">wipro</text>
        </svg>
      ),
    },
    {
      name: "Cognizant",
      domain: "Cloud & Solutions",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 135 32" fill="none">
          <circle cx="13" cy="16" r="11" stroke="#0033A0" strokeWidth="3" fill="none" />
          <path d="M13 8 L17 16 L13 24 L9 16 Z" fill="#00A3E0" />
          <text x="32" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="#FFFFFF">cognizant</text>
        </svg>
      ),
    },
    {
      name: "Tech Mahindra",
      domain: "Telecom & Software",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 145 32" fill="none">
          <rect x="2" y="9" width="14" height="14" rx="3" fill="#E31837" />
          <path d="M6 13 L12 16 L6 19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="22" y="17" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="#FFFFFF">TECH</text>
          <text x="22" y="26" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#E31837">MAHINDRA</text>
        </svg>
      ),
    },
    {
      name: "HCL Tech",
      domain: "Engineering & IT",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 115 32" fill="none">
          <text x="0" y="23" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" fill="#006699" letterSpacing="0.5">HCL</text>
          <text x="56" y="23" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="16" fill="#F58220">Tech</text>
        </svg>
      ),
    },
    {
      name: "Capgemini",
      domain: "Consulting & Tech",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 135 32" fill="none">
          <path d="M12 7 C8 12, 4 15, 4 18 C4 21, 7 23, 10 23 C11 23, 12 22.5, 12 22 L11 25 L13 25 L12 22 C12 22.5, 13 23, 14 23 C17 23, 20 21, 20 18 C20 15, 16 12, 12 7 Z" fill="#0070AD" />
          <text x="26" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="#FFFFFF">Capgemini</text>
        </svg>
      ),
    },
  ];

  const row2Partners = [
    {
      name: "Deloitte",
      domain: "Taxation & Finance",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 115 32" fill="none">
          <text x="0" y="23" fontFamily="Georgia, serif" fontWeight="700" fontSize="23" fill="#FFFFFF" letterSpacing="-0.5">Deloitte</text>
          <circle cx="86" cy="21" r="3.5" fill="#86BC25" />
        </svg>
      ),
    },
    {
      name: "Zoho",
      domain: "SaaS & Web Software",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 105 32" fill="none">
          <rect x="2" y="8" width="16" height="16" rx="3" fill="#E42528" />
          <text x="6" y="21" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF">Z</text>
          <rect x="22" y="8" width="16" height="16" rx="3" fill="#339933" />
          <text x="25" y="21" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF">O</text>
          <rect x="42" y="8" width="16" height="16" rx="3" fill="#2D72B8" />
          <text x="46" y="21" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF">H</text>
          <rect x="62" y="8" width="16" height="16" rx="3" fill="#F58220" />
          <text x="65" y="21" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF">O</text>
        </svg>
      ),
    },
    {
      name: "Accenture",
      domain: "Digital Consulting",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 125 32" fill="none">
          <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="19" fill="#FFFFFF" letterSpacing="-0.5">accenture</text>
          <path d="M49 6 L54 10 L49 14" stroke="#A100FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      name: "Microsoft",
      domain: "Cloud & Enterprise",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 130 32" fill="none">
          <rect x="2" y="7" width="8" height="8" fill="#F25022" />
          <rect x="12" y="7" width="8" height="8" fill="#7FBA00" />
          <rect x="2" y="17" width="8" height="8" fill="#00A4EF" />
          <rect x="12" y="17" width="8" height="8" fill="#FFB900" />
          <text x="27" y="22" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="600" fontSize="18" fill="#FFFFFF">Microsoft</text>
        </svg>
      ),
    },
    {
      name: "IBM",
      domain: "AI & Cloud Platforms",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 85 32" fill="none">
          <text x="0" y="24" fontFamily="Courier New, monospace" fontWeight="900" fontSize="26" fill="#4B8FE2" letterSpacing="2">IBM</text>
        </svg>
      ),
    },
    {
      name: "Amazon",
      domain: "Cloud & E-Commerce",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 115 32" fill="none">
          <text x="0" y="20" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="20" fill="#FFFFFF">amazon</text>
          <path d="M4 25 Q35 34 68 23" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M66 21 L70 24 L65 26 Z" fill="#FF9900" />
        </svg>
      ),
    },
    {
      name: "Paytm",
      domain: "Fintech & Payments",
      logo: (
        <svg className="h-6 w-auto" viewBox="0 0 100 32" fill="none">
          <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="#FFFFFF">Pay</text>
          <text x="40" y="22" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="#00BAF2">tm</text>
        </svg>
      ),
    },
  ];

  const recentPlacements = [
    {
      student: "Chetan Jangid",
      role: "Full Stack Developer",
      company: "Infosys",
      package: "₹6.8 LPA",
      batch: "2025 Placed",
      course: "MERN Stack Pro",
      accent: "border-yellow-400/40",
    },
    {
      student: "Ronak Jain",
      role: "Frontend Engineer",
      company: "Fintech Startup",
      package: "₹7.2 LPA",
      batch: "2025 Placed",
      course: "React & Cloud",
      accent: "border-yellow-400/40",
    },
    {
      student: "Dharmendar Kumar",
      role: "Data Analyst",
      company: "Analytics Firm",
      package: "₹6.0 LPA",
      batch: "2024 Placed",
      course: "Python & ML",
      accent: "border-yellow-400/40",
    },
    {
      student: "Devanshi Rawat",
      role: "Sr. Accounts Executive",
      company: "CA Tax Associates",
      package: "Corporate Finance",
      batch: "2024 Placed",
      course: "Tally Prime GST",
      accent: "border-yellow-400/40",
    },
    {
      student: "Shubham Rathore",
      role: "Lead UI/UX Designer",
      company: "Creative Studio",
      package: "Design Lead",
      batch: "2025 Placed",
      course: "UI/UX Mastery",
      accent: "border-yellow-400/40",
    },
    {
      student: "Aman Sharma",
      role: "Backend Engineer",
      company: "Cloud Systems",
      package: "₹6.5 LPA",
      batch: "2025 Placed",
      course: "Java Spring Boot",
      accent: "border-yellow-400/40",
    },
  ];

  const placementProcess = [
    {
      step: "01",
      title: "ATS Resume & GitHub Review",
      desc: "Our career mentors refine your resume to pass automated ATS filters and audit your GitHub repositories.",
      icon: FileCheck,
    },
    {
      step: "02",
      title: "1-on-1 Technical Mock Rounds",
      desc: "Simulated whiteboard interviews, coding algorithms, and practical accounting problem sets.",
      icon: Target,
    },
    {
      step: "03",
      title: "HR & Communication Grooming",
      desc: "Soft-skill workshops, behavioral questions, personal branding, and salary negotiation tactics.",
      icon: Users,
    },
    {
      step: "04",
      title: "Direct Campus Drives & Offers",
      desc: "Direct interviews with our 150+ hiring partner HR teams until you hold your verified offer letter.",
      icon: Award,
    },
  ];

  return (
    <section className="relative py-28 bg-[#070911] text-white overflow-hidden border-t border-yellow-400/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-yellow-400/[0.04] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber gold pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #facc15 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(250,204,21,0.15)]">
              <Briefcase className="w-4 h-4 text-yellow-400" />
              <span>Dedicated Corporate Placement Cell</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Where Talent Meets{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Career Offers
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              We bridge the gap between classroom skills and corporate careers. With 150+ direct recruitment tie-ups, our students step directly into verified employment.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Core Placement Metrics */}
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Placement Success Rate", value: "98%", sub: "Career Assistance Guaranteed" },
              { label: "Highest Package Offered", value: "₹14.5 LPA", sub: "Product & Software MNC" },
              { label: "Average Starting Salary", value: "₹5.8 LPA", sub: "Across IT & Accounts" },
              { label: "Direct Hiring Partners", value: "150+", sub: "Jaipur, NCR & Bangalore" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-gradient-to-b from-[#141829] via-[#101322] to-[#0D101C] border border-yellow-400/25 text-center shadow-xl hover:border-yellow-400/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1.5">{stat.label}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Recent Placed Students Spotlight Cards */}
        <div className="mb-16">
          <ScrollReveal direction="up" delay={150}>
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-wider">
                  Recent Alumni Breakthroughs
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  Latest Placement Drives
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20 font-bold hidden sm:inline-block">
                ✓ Verified Placements
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recentPlacements.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0F1220] border border-white/[0.08] hover:border-yellow-400/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {item.student}
                        </h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">{item.role}</p>
                    </div>

                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-yellow-400/15 text-yellow-300 border border-yellow-400/30 font-mono shrink-0">
                      {item.package}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span className="text-white font-bold flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-yellow-400" />
                      {item.company}
                    </span>
                    <span className="text-yellow-400/90 font-semibold">{item.course}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Top Hiring Partners Logo Grid */}
        <div className="mb-16">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-wider">
                Recruitment Network
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Top Hiring Partners Recruiting From Third Eye
              </h3>
            </div>

            {/* Scrolling Companies Container with Dark Gradient in Both Corners */}
            <div className="relative w-full overflow-hidden">
              {/* Left Dark Gradient Fade */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#070911] via-[#070911]/90 to-transparent z-10" />
              {/* Right Dark Gradient Fade */}
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#070911] via-[#070911]/90 to-transparent z-10" />

              {/* Track 1: Scrolling Left */}
              <div className="overflow-hidden mb-4 pause-hover">
                <div
                  className="flex gap-4 w-max animate-marquee"
                  style={{ animationDuration: "36s" }}
                >
                  {[...row1Partners, ...row1Partners, ...row1Partners, ...row1Partners].map((partner, idx) => (
                    <div
                      key={`r1-${idx}`}
                      className="w-56 sm:w-64 shrink-0 px-5 py-3.5 rounded-2xl bg-[#0E111E] border border-white/[0.08] hover:border-yellow-400/50 hover:bg-[#141829] transition-all duration-300 flex items-center gap-4 group hover:-translate-y-0.5 shadow-lg"
                    >
                      <div className="shrink-0 flex items-center justify-center min-w-[70px]">
                        {partner.logo}
                      </div>
                      <div className="min-w-0 border-l border-white/[0.08] pl-3.5">
                        <h4 className="text-xs font-bold text-white group-hover:text-yellow-400 transition-colors truncate">
                          {partner.name}
                        </h4>
                        <p className="text-[10px] text-zinc-400 truncate font-mono mt-0.5">
                          {partner.domain}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Track 2: Scrolling Right */}
              <div className="overflow-hidden pause-hover">
                <div
                  className="flex gap-4 w-max animate-marquee-reverse"
                  style={{ animationDuration: "36s" }}
                >
                  {[...row2Partners, ...row2Partners, ...row2Partners, ...row2Partners].map((partner, idx) => (
                    <div
                      key={`r2-${idx}`}
                      className="w-56 sm:w-64 shrink-0 px-5 py-3.5 rounded-2xl bg-[#0E111E] border border-white/[0.08] hover:border-yellow-400/50 hover:bg-[#141829] transition-all duration-300 flex items-center gap-4 group hover:-translate-y-0.5 shadow-lg"
                    >
                      <div className="shrink-0 flex items-center justify-center min-w-[70px]">
                        {partner.logo}
                      </div>
                      <div className="min-w-0 border-l border-white/[0.08] pl-3.5">
                        <h4 className="text-xs font-bold text-white group-hover:text-yellow-400 transition-colors truncate">
                          {partner.name}
                        </h4>
                        <p className="text-[10px] text-zinc-400 truncate font-mono mt-0.5">
                          {partner.domain}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 4-Step Placement Support System */}
        <ScrollReveal direction="up" delay={250}>
          <div className="rounded-3xl bg-gradient-to-b from-[#131628] via-[#0F1220] to-[#0A0D18] border border-yellow-400/30 p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-wider">
                End-to-End Career Support
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                How Our Placement Cell Prepares You
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {placementProcess.map((proc, idx) => {
                const IconComponent = proc.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#161B2E] border border-white/[0.08] hover:border-yellow-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-500">
                        {proc.step}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors mb-2">
                      {proc.title}
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h5 className="text-sm font-bold text-white">
                  Looking to hire job-ready tech & accounting talent?
                </h5>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Corporate recruiters can schedule on-campus or remote hiring drives directly with our placement cell.
                </p>
              </div>

              <a
                href="https://wa.me/918058061222?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Third%20Eye%20Placements%20and%20Hiring%20Partners."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 text-black text-xs font-black hover:bg-yellow-300 transition-all shadow-md shadow-yellow-400/20 active:scale-95 shrink-0 cursor-pointer"
              >
                <span>Connect With Placement Officer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

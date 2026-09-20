import React, { useState } from "react";
import {
  TrendingUp,
  Target,
  Award,
  Zap,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Palette,
  Calculator,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

export default function CareerMatrixInteractive() {
  const [selectedRole, setSelectedRole] = useState("webdev");
  const [experienceMonths, setExperienceMonths] = useState(6);

  const careerTracks = {
    webdev: {
      title: "Full Stack Web Developer",
      icon: Code2,
      salaryRange: {
        3: { package: "₹4.5 LPA", role: "Junior Frontend Dev", companies: "Wipro, Startups, Agencies" },
        6: { package: "₹7.2 LPA", role: "Full Stack Engineer (MERN)", companies: "Infosys, Cognizant, Fintech" },
        12: { package: "₹12.5 LPA", role: "Senior Full Stack Specialist", companies: "Product MNCs, Global Remote" },
      },
      skills: ["React 19", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST & GraphQL", "Git & Docker"],
      timeline: [
        { phase: "Month 1", title: "HTML5, Modern CSS & JavaScript Mastery", desc: "Building responsive web pages from scratch without frameworks." },
        { phase: "Months 2-3", title: "React, State Management & API Integration", desc: "Developing single-page enterprise apps with Redux and Tailwind." },
        { phase: "Months 4-5", title: "Backend Node.js, Databases & Authentication", desc: "Architecting secure REST APIs with MongoDB and cloud deployment." },
        { phase: "Month 6", title: "Live Client Capstones & Placement Drives", desc: "Weekly mock interviews, portfolio optimization, and HR interviews." },
      ],
    },
    ai_python: {
      title: "Python AI & Data Engineer",
      icon: Cpu,
      salaryRange: {
        3: { package: "₹4.2 LPA", role: "Junior Python Programmer", companies: "Analytics Hubs, IT Services" },
        6: { package: "₹6.8 LPA", role: "Data Analyst & ML Associate", companies: "TCS, Data Corp, E-Commerce" },
        12: { package: "₹11.0 LPA", role: "AI & Machine Learning Specialist", companies: "AI Startups, Enterprise Labs" },
      },
      skills: ["Python 3", "Pandas", "NumPy", "Scikit-Learn", "SQL", "Tableau", "Neural Networks"],
      timeline: [
        { phase: "Month 1", title: "Python Core Logic & OOP Engineering", desc: "Data structures, algorithmic thinking, and automated scripting." },
        { phase: "Months 2-3", title: "Data Wrangling & Statistical Insights", desc: "Analyzing real business datasets with Pandas and Tableau charts." },
        { phase: "Months 4-5", title: "Machine Learning Models & Predictions", desc: "Training regression, classification, and clustering ML models." },
        { phase: "Month 6", title: "AI Project Deployment & Campus Drives", desc: "Deploying Python APIs to production and clearing technical interviews." },
      ],
    },
    uiux: {
      title: "UI/UX & Product Designer",
      icon: Palette,
      salaryRange: {
        3: { package: "₹3.8 LPA", role: "Junior Visual Designer", companies: "Design Studios, Ad Agencies" },
        6: { package: "₹6.0 LPA", role: "UI/UX Product Designer", companies: "Product Startups, Digital Hubs" },
        12: { package: "₹9.5 LPA", role: "Senior Product Design Lead", companies: "Enterprise SaaS, Global Brands" },
      },
      skills: ["Figma", "Design Systems", "Adobe Illustrator", "Photoshop", "Wireframing", "User Research"],
      timeline: [
        { phase: "Month 1", title: "Design Principles, Typography & Color Theory", desc: "Mastering visual hierarchy, layouts, and brand identity systems." },
        { phase: "Months 2-3", title: "Figma Mastery & Interactive Prototyping", desc: "Building mobile and desktop app designs with micro-interactions." },
        { phase: "Months 4-5", title: "UX Research, Wireframing & Usability Testing", desc: "Conducting user journeys, empathy maps, and design audits." },
        { phase: "Month 6", title: "Behance Portfolio & Placement Showcase", desc: "Publishing 4 world-class case studies that guarantee recruiter calls." },
      ],
    },
    finance: {
      title: "Corporate Accounting & GST Specialist",
      icon: Calculator,
      salaryRange: {
        3: { package: "₹3.5 LPA", role: "Accounts Assistant", companies: "Trading Firms, CA Offices" },
        6: { package: "₹5.5 LPA", role: "Senior GST & Tally Executive", companies: "Corporate Houses, Tax Consultancies" },
        12: { package: "₹8.5 LPA", role: "Chief Accounts Manager", companies: "National Enterprises, Auditing MNCs" },
      },
      skills: ["Tally Prime", "Corporate GST", "TDS Filing", "E-Way Bill", "Balance Sheet", "Corporate Payroll"],
      timeline: [
        { phase: "Month 1", title: "Accounting Principles & Voucher Entries", desc: "Understanding financial double-entry logic and journal vouchers." },
        { phase: "Months 2-3", title: "Tally Prime Mastery & Inventory Controls", desc: "Managing multi-location stock, billing, and purchase orders." },
        { phase: "Months 4-5", title: "Live GST Portal Filing, TDS & E-Way Bills", desc: "Filing real monthly GST returns, TDS reconciliations, and balance sheets." },
        { phase: "Month 6", title: "Chartered Firm Interviews & Direct Placement", desc: "Practical taxation assessments and direct corporate placement." },
      ],
    },
  };

  const currentTrack = careerTracks[selectedRole];
  const salaryData = currentTrack.salaryRange[experienceMonths] || currentTrack.salaryRange[6];

  return (
    <section className="relative py-28 bg-[#090A0F] text-white overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[450px] bg-yellow-400/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(250,204,21,0.12)]">
              <TrendingUp className="w-4 h-4 text-yellow-400" />
              <span>Interactive ROI & Skill Tree</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              The Career{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Transformation Matrix
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
              Explore your earning potential and the exact month-by-month roadmap from beginner to placed high-income professional.
            </p>
          </div>
        </ScrollReveal>

        {/* Career Role Selector Tabs */}
        <ScrollReveal direction="up" delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {Object.entries(careerTracks).map(([key, track]) => {
              const IconComp = track.icon;
              const isSelected = selectedRole === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedRole(key)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-b from-[#181B2C] to-[#10121F] border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.15)] scale-[1.02]"
                      : "bg-[#0E101A] border-white/[0.08] hover:border-zinc-700 hover:bg-[#131624]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected ? "bg-yellow-400 text-black" : "bg-yellow-400/10 text-yellow-400"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15]" />
                    )}
                  </div>
                  <h3
                    className={`text-xs sm:text-sm font-bold ${
                      isSelected ? "text-yellow-400" : "text-zinc-200"
                    }`}
                  >
                    {track.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Dynamic Calculator & Interactive Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Dynamic Salary & Growth Predictor (5 Cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={150}>
              <div className="rounded-3xl bg-gradient-to-b from-[#111320] to-[#0A0C14] border border-yellow-400/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-wider">
                    Expected Package Projection
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full border border-emerald-400/20">
                    <Zap className="w-3 h-3" />
                    High Demand
                  </span>
                </div>

                {/* Salary Display Counter */}
                <div className="text-center py-6 bg-[#080911] rounded-2xl border border-white/[0.06] mb-6">
                  <div className="text-xs text-zinc-400 font-medium mb-1">Average Starting Package</div>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500">
                    {salaryData.package}
                  </div>
                  <div className="text-xs text-yellow-400 font-bold mt-2 flex items-center justify-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{salaryData.role}</span>
                  </div>
                </div>

                {/* Interactive Duration Slider */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-xs font-mono text-zinc-300">
                    <span>Program & Experience Level:</span>
                    <span className="text-yellow-400 font-bold">
                      {experienceMonths === 3
                        ? "3 Months (Fast Track)"
                        : experienceMonths === 6
                        ? "6 Months (Full Diploma)"
                        : "12 Months (Advanced Master)"}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: 3, label: "3 Mo (Fast)" },
                      { val: 6, label: "6 Mo (Pro)" },
                      { val: 12, label: "1 Yr (Master)" },
                    ].map((btn) => (
                      <button
                        key={btn.val}
                        onClick={() => setExperienceMonths(btn.val)}
                        className={`py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                          experienceMonths === btn.val
                            ? "bg-yellow-400 text-black font-extrabold shadow-md shadow-yellow-400/20"
                            : "bg-[#141624] text-zinc-400 hover:text-white border border-white/[0.06]"
                        }`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hiring Partners Badge */}
                <div className="p-4 rounded-2xl bg-[#0C0E18] border border-white/[0.06] space-y-2 mb-6">
                  <div className="text-xs font-bold text-zinc-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Typical Recruiting Companies:</span>
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {salaryData.companies}
                  </div>
                </div>

                {/* Skills Learned Badges */}
                <div>
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
                    Curriculum Competencies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentTrack.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#141726] text-yellow-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Month-by-Month Roadmap Timeline (7 Cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={200}>
              <div className="rounded-3xl bg-[#0B0D16] border border-white/[0.08] p-6 sm:p-8">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-yellow-400" />
                    <span>{currentTrack.title} Execution Roadmap</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">100% Practical</span>
                </div>

                {/* Milestone Steps with Animated Vertical Line */}
                <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-yellow-400 before:via-amber-400/40 before:to-transparent">
                  {currentTrack.timeline.map((step, idx) => (
                    <div key={idx} className="relative group">
                      {/* Milestone glowing node dot */}
                      <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#090A0F] border-2 border-yellow-400 shadow-[0_0_8px_#facc15] group-hover:scale-125 transition-transform" />

                      <div className="p-5 rounded-2xl bg-[#0F111C] border border-white/[0.06] group-hover:border-yellow-400/40 transition-all duration-300 group-hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-yellow-400 font-mono">
                            {step.phase}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-mono">
                            Workstation Sprint #{idx + 1}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-yellow-400 transition-colors mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Action Trigger */}
                <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-zinc-400">
                    Ready to start your roadmap? 2-Day Free Trial Available.
                  </span>
                  <a
                    href="https://wa.me/918058061222?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20career%20roadmap%20and%20placement%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-400 text-black text-xs font-black hover:bg-yellow-300 transition-all shadow-md shadow-yellow-400/20 active:scale-95 group"
                  >
                    <span>Consult Career Advisor</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

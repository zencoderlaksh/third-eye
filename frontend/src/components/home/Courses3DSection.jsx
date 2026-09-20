import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Code2,
  Palette,
  Calculator,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  Sparkles,
  Layers,
} from "lucide-react";

export default function Courses3DSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Programs" },
    { id: "coding", label: "Software & Coding" },
    { id: "design", label: "Creative & Design" },
    { id: "finance", label: "Accounting & IT" },
    { id: "diploma", label: "Govt. Diplomas" },
  ];

  const courses = [
    {
      id: 1,
      category: "coding",
      title: "Full Stack Web Development",
      badge: "High Hiring Demand",
      duration: "6 Months",
      mode: "Offline Lab + Live Online",
      description:
        "Master modern web engineering: HTML5, CSS3, JavaScript ES6+, React.js, Node.js, Express, MongoDB, and Git.",
      skills: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs"],
      rating: "4.95",
      students: "1,800+ Graduates",
    },
    {
      id: 2,
      category: "coding",
      title: "Python Programming & AI Basics",
      badge: "Future Ready",
      duration: "4 Months",
      mode: "Hands-on Lab Projects",
      description:
        "Learn Python from syntax fundamentals to data structures, automated web scrapers, and generative AI tool integration.",
      skills: ["Python 3", "Data Structures", "OpenAI APIs", "Automation", "SQL"],
      rating: "4.92",
      students: "1,450+ Graduates",
    },
    {
      id: 3,
      category: "design",
      title: "Professional Graphic Design & UI/UX",
      badge: "Most Creative",
      duration: "4 Months",
      mode: "Portfolio Focused",
      description:
        "Industry-standard digital design: Adobe Photoshop, Illustrator, InDesign, CorelDraw, and Figma for mobile app UI/UX.",
      skills: ["Photoshop", "Illustrator", "Figma", "Branding", "UI/UX"],
      rating: "4.90",
      students: "2,100+ Graduates",
    },
    {
      id: 4,
      category: "finance",
      title: "Tally Prime with GST & E-Way Bill",
      badge: "Immediate Job",
      duration: "3 Months",
      mode: "Real Ledger Data",
      description:
        "Master computerized corporate accounting, GST billing, reconciliation, TDS, payroll processing, and audit preparation.",
      skills: ["Tally Prime", "GST E-Filing", "Payroll", "Balance Sheet", "TDS"],
      rating: "4.96",
      students: "3,200+ Graduates",
    },
    {
      id: 5,
      category: "diploma",
      title: "ADCA (Advance Diploma in Computer Applications)",
      badge: "Govt. Recognized",
      duration: "1 Year",
      mode: "Diploma + Lab Certificate",
      description:
        "The complete all-in-one IT master diploma: Office Automation, DTP, Tally ERP, Web Design fundamentals, and hardware basics.",
      skills: ["MS Office Suite", "DTP", "Accounting", "HTML/CSS", "Cyber Basics"],
      rating: "4.98",
      students: "4,500+ Graduates",
    },
    {
      id: 6,
      category: "coding",
      title: "Data Analytics with Power BI & SQL",
      badge: "Top Salary Growth",
      duration: "4 Months",
      mode: "Interactive Dashboards",
      description:
        "Extract actionable business intelligence using Advanced Excel, relational SQL databases, Power BI dashboards, and Tableau.",
      skills: ["Power BI", "SQL", "Advanced Excel", "Tableau", "Data Modeling"],
      rating: "4.91",
      students: "950+ Graduates",
    },
    {
      id: 7,
      category: "design",
      title: "Digital Marketing & Performance SEO",
      badge: "Business Growth",
      duration: "3 Months",
      mode: "Real Ad Budgets",
      description:
        "Dominate search engines and social platforms: Google Ads, Meta Ads Manager, SEO on-page/off-page, and AI marketing hacks.",
      skills: ["Google Ads", "Meta Ads", "SEO", "Analytics", "Email Automation"],
      rating: "4.89",
      students: "1,600+ Graduates",
    },
    {
      id: 8,
      category: "diploma",
      title: "DCA (Diploma in Computer Applications)",
      badge: "Core Certification",
      duration: "6 Months",
      mode: "Govt. Validated",
      description:
        "Foundational computer science credentials covering operating systems, office software, database management, and internet tech.",
      skills: ["Computer Systems", "MS Office", "Database", "Typing", "Internet"],
      rating: "4.94",
      students: "3,100+ Graduates",
    },
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeTab === "all" || course.category === activeTab;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.skills.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="relative py-24 sm:py-32 bg-[#07080D] border-t border-[#1C1F2E] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-yellow-400/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Job-Ready Curriculums</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Master In-Demand{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                Tech & IT Courses
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              From beginner-friendly diplomas to advanced full-stack and accounting certifications, engineered for immediate employment.
            </p>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course or tech..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#11131E] border border-[#222535] text-xs font-medium text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 focus:outline-none ${
                activeTab === cat.id
                  ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/25 scale-105"
                  : "bg-[#11131E] text-zinc-300 border border-[#222535] hover:border-yellow-400/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-3xl p-6 sm:p-7 bg-[#0D0F18] border border-[#202333] hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/60 flex flex-col justify-between"
            >
              {/* Card Top Pill */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-yellow-400/10 text-yellow-400 border border-yellow-400/25">
                    {course.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-yellow-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-black text-white group-hover:text-yellow-400 transition-colors mb-3 leading-snug">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                  {course.description}
                </p>

                {/* Tech Skills Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {course.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-[#161826] text-[10px] font-semibold text-zinc-300 border border-zinc-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Mode & Actions */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="text-[11px] text-zinc-400 font-medium">
                  Rating: <span className="text-yellow-400 font-bold">★ {course.rating}</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/918058061222?text=Hi%2C%20I%20want%20the%20syllabus%20details%20for%20the%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-yellow-400 hover:text-yellow-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Syllabus</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <span className="text-zinc-600">|</span>
                  <Link
                    to="/pay-now"
                    className="text-xs font-bold text-white hover:text-yellow-400 transition-colors"
                  >
                    Enroll
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Programs Bar */}
        <div className="mt-14 text-center">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-black bg-yellow-400 hover:bg-yellow-300 shadow-lg shadow-yellow-400/20 active:scale-95 transition-all"
          >
            <span>View All 300+ Modules & Diplomas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

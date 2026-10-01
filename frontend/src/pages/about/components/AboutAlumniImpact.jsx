import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Star,
  Sparkles,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  Quote,
} from "lucide-react";

import student1 from "../../../assets/students/student_1.jpg";
import student2 from "../../../assets/students/student_2.jpg";
import student3 from "../../../assets/students/student_3.jpg";
import student4 from "../../../assets/students/student_4.jpg";

const impactStats = [
  { value: "25,000+", label: "Enrolled & Certified", sub: "Since 2008" },
  { value: "₹4.5L - ₹47L", label: "Salary Package Range", sub: "Domestic & Global" },
  { value: "150+", label: "Hiring Partners", sub: "IT, Studios & SEZ Units" },
  { value: "4.9 / 5.0", label: "Average Review Rating", sub: "Over 2,400+ Reviews" },
];

const transformationStories = [
  {
    name: "Rahul Verma",
    course: "3D Animation & Maya VFX Master Track",
    currentRole: "Senior 3D Lighting & Comp Artist",
    company: "VFX Creative Studio, Mumbai",
    image: student1,
    review:
      "I had zero 3D knowledge when I joined Third Eye. The mentors didn't just teach software buttons; they taught lighting physics, Arnold rendering, and camera composition. Within 2 months of graduation, I landed my dream VFX studio role.",
    badge: "Placed @ ₹8.4 LPA",
  },
  {
    name: "Pooja Choudhary",
    course: "Full Stack Web Development (MERN)",
    currentRole: "Frontend Engineer",
    company: "FinTech Solutions, Bangalore",
    image: student2,
    review:
      "The practical lab discipline here is phenomenal. Every single day was a live code sprint. By graduation, I had built 4 full-stack projects deployed on GitHub and AWS. Third Eye's Placement Cell arranged 3 interviews within a single week!",
    badge: "Placed @ ₹11.2 LPA",
  },
  {
    name: "Aman Agarwal",
    course: "3D CAD Matrix Jewelry Design",
    currentRole: "Head CAD Specialist",
    company: "Export Diamond House, Sitapura SEZ",
    image: student3,
    review:
      "Jaipur is the epicenter of jewelry, and Third Eye's Matrix CAD training is hands down the gold standard. We modeled intricate polki and diamond rings with micron precision. Today, my 3D CAD models are cast and shipped to New York and Dubai.",
    badge: "SEZ Design Specialist",
  },
  {
    name: "Neha Mathur",
    course: "Tally Prime & Advanced Business Analytics",
    currentRole: "Senior Financial Analyst",
    company: "Chartered Accounting Firm, Jaipur",
    image: student4,
    review:
      "The GST and Tally Prime training was completely hands-on using genuine business balance sheets. Third Eye gave me the practical confidence that college never did. Highly recommended for every commerce graduate.",
    badge: "Fast-Track Promotion",
  },
];

const hiringPartners = [
  "TCS",
  "Infosys",
  "Wipro",
  "Genpact",
  "CarDekho",
  "Metacube",
  "Tech Mahindra",
  "Cognizant",
  "HCL Technologies",
  "Sitapura Gems Hub",
  "Reliance Retail",
  "Aditya Birla Group",
];

export default function AboutAlumniImpact() {
  return (
    <section id="impact" className="relative z-10 py-24 sm:py-28 bg-[#080603] overflow-hidden select-none border-t border-white/[0.06]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#f6d96b]/[0.04] rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1f1609] text-[#f6d96b] border border-[#f6d96b]/30 shadow-[0_0_20px_rgba(246,217,107,0.12)] mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-[#f6d96b]" />
            <span>Alumni Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            25,000+ Journeys Sparked.{" "}
            <span className="bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] to-[#f59e0b] bg-clip-text text-transparent">
              Real Careers Launched.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            The true measure of Third Eye is not our hardware or our classrooms—it is the transformative career leaps of our students.
          </p>
        </div>

        {/* 4 Impact Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {impactStats.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-tech rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 hover:border-[#f6d96b]/40"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono text-white mb-1">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-zinc-200 mb-0.5">
                {item.label}
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-400">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Transformation Stories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {transformationStories.map((story, idx) => (
            <div
              key={idx}
              className="glass-panel-tech rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:border-[#f6d96b]/40 relative overflow-hidden"
            >
              <div>
                {/* Header with Student Photo & Details */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#18130b] border-2 border-[#f6d96b]/40 shadow-md shrink-0">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-[#f6d96b] transition-colors">
                      {story.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#f6d96b]">
                      {story.currentRole}
                    </div>
                    <div className="text-xs text-zinc-400">
                      {story.company}
                    </div>
                  </div>
                </div>

                {/* Course Track Tag & Package Pill */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.05] border border-white/[0.1] text-zinc-300">
                    {story.course}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#f6d96b]/15 text-[#f6d96b] border border-[#f6d96b]/30">
                    {story.badge}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal italic">
                  "{story.review}"
                </p>
              </div>

              {/* Rating Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-zinc-400 font-mono text-[11px]">5.0 / 5.0</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">VERIFIED ALUMNI</span>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Hiring Partners Marquee / Grid */}
        <div className="glass-panel-tech rounded-3xl p-6 sm:p-8 border border-white/[0.08] text-center">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-6">
            Trusted by 150+ Top Technology, VFX & Enterprise Recruiters
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {hiringPartners.map((partner, i) => (
              <div
                key={i}
                className="px-4 sm:px-5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#f6d96b]/40 hover:bg-[#f6d96b]/10 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-all cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm">
            <Link
              to="/student-reviews"
              className="inline-flex items-center gap-1.5 font-bold text-[#f6d96b] hover:underline"
            >
              <span>Read 2,400+ Alumni Reviews</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <Link
              to="/jobs-and-placement"
              className="inline-flex items-center gap-1.5 font-bold text-zinc-300 hover:text-[#f6d96b]"
            >
              <span>Explore Placement Cell Drives</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

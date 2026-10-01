import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowUpRight,
  Quote,
  Briefcase,
  ChevronRight,
} from "lucide-react";

import mlChaudharyImg from "../../../assets/leadership/ml_chaudhary.png";
import preetiSharmaImg from "../../../assets/leadership/preeti_sharma.png";
import suumitSharmaImg from "../../../assets/leadership/suumit_sharma.png";
import mentor4Img from "../../../assets/mentor_4.png";
import mentor3Img from "../../../assets/mentor_3.png";

const leaders = [
  {
    name: "Mr. M.L. Chaudhary",
    role: "Founder & Chief Patron",
    badge: "IAF Veteran & Commendation Recipient",
    image: mlChaudharyImg,
    experience: "35+ Years Leadership & Technical Aviation Safety",
    bio: "A disciplined technical instructor trained in technical aviation safety in the Indian Air Force. Recipient of the esteemed Indian Air Force Commendation. Inspired by Swami Vivekananda, his mission has been to develop modern computer skills in each and every youth.",
    quote: "“Arise, awake, and stop not until the goal is reached.”",
  },
  {
    name: "Preeti Sharma",
    role: "Chief Managing Director",
    badge: "Strategic Operations & HR Leadership",
    image: preetiSharmaImg,
    experience: "15+ Years Enterprise Growth & Strategic Alliances",
    bio: "Chief Managing Director of Third Eye Computer Classes, Preeti is a proven executive with 15+ years of experience across Business Development, Talent Recruiting, and Customer Relationship Management. She leads institutional vision and corporate partnerships.",
    quote: "“Every student who steps into our lab carries an ambition. Our responsibility is to turn that ambition into an undisputed career.”",
  },
  {
    name: "Puneet Sharma",
    role: "Managing Director",
    badge: "Executive Direction & Institutional Growth",
    image: mentor4Img,
    experience: "20+ Years in Management & Technology Direction",
    bio: "Managing Director of Third Eye Computer Classes, Puneet is a results-oriented leader with over 20 years of expertise in steering high-impact educational institutions, maintaining top academic standards and robust corporate relations.",
    quote: "“True tech education must be 100% practical. When students build tangible assets, their confidence becomes unshakeable.”",
  },
  {
    name: "Suumit Sharrma",
    role: "Chief Operating Officer",
    badge: "Academic Ops & Curricular Innovation",
    image: suumitSharmaImg,
    experience: "12+ Years High-Growth Training Architecture",
    bio: "Suumit oversees daily operations, student lifecycles, and strategic growth initiatives across all Third Eye campuses. He ensures our curriculums in AI, VFX, CAD, and Full-Stack are continuously updated to exceed employer expectations.",
    quote: "“We don't teach software tools; we teach creative logic, clean architecture, and the problem-solving mindset of top engineers.”",
  },
  {
    name: "Sheetal Sharma",
    role: "Head of Sales & Business Development",
    badge: "ICF Life Coach & Toastmasters Award Winner",
    image: mentor3Img,
    experience: "27+ Years Franchise Growth & Corporate Training",
    bio: "A seasoned leader with 27 years of experience spearheading growth, franchise expansion, and student transformation. Formerly Head at Samyak, she is an ICF-accredited Life Coach and an award-winning storyteller dedicated to student mentorship.",
    quote: "“Communication, resilience, and technological mastery together create leaders who shine in any boardroom or studio.”",
  },
];

export default function AboutLeadership() {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <section id="leadership" className="relative z-10 py-24 sm:py-28 bg-[#080603] overflow-hidden select-none border-t border-white/[0.06]">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-[#f6d96b]/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1f1609] text-[#f6d96b] border border-[#f6d96b]/30 shadow-[0_0_20px_rgba(246,217,107,0.12)] mb-4">
            <Users className="w-3.5 h-3.5 text-[#f6d96b]" />
            <span>The Minds Behind the Movement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Visionary Leadership at{" "}
            <span className="bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] to-[#f59e0b] bg-clip-text text-transparent">
              Third Eye
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Guided by leaders with over a century of collective experience across aviation engineering, corporate leadership, academic governance, and creative arts.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className={`glass-panel-tech rounded-3xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f6d96b]/50 relative overflow-hidden ${
                idx === 0 ? "md:col-span-2 lg:col-span-1 glass-panel-highlight border-[#f6d96b]/35" : ""
              }`}
            >
              <div>
                {/* Photo & Badge */}
                <div className="relative mb-6">
                  <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#120f09] border border-white/[0.08] group-hover:border-[#f6d96b]/40 transition-colors shadow-lg">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/[0.1] text-[11px] font-mono text-[#f6d96b] font-bold truncate">
                      {leader.badge}
                    </div>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#f6d96b] transition-colors mb-1">
                  {leader.name}
                </h3>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#f6d96b] mb-3">
                  {leader.role}
                </div>
                <div className="text-xs text-zinc-400 font-medium mb-4">
                  {leader.experience}
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {leader.bio}
                </p>
              </div>

              {/* Quote Footer */}
              <div className="pt-4 border-t border-white/[0.08] relative">
                <Quote className="w-4 h-4 text-[#f6d96b]/40 mb-1" />
                <p className="text-[11px] sm:text-xs text-zinc-300 italic font-serif leading-relaxed">
                  {leader.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Team Page */}
        <div className="text-center">
          <Link
            to="/our-team"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-white/[0.04] hover:bg-[#f6d96b]/10 border border-white/[0.1] hover:border-[#f6d96b]/40 transition-all duration-200"
          >
            <span>Meet All 25+ Expert Mentors, Faculty & Placement Leads</span>
            <ChevronRight className="w-4 h-4 text-[#f6d96b] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MonitorCheck,
  Cpu,
  Layers,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
  Shield,
  Wifi,
} from "lucide-react";

import classroomPanoramic from "../../../assets/classroom_panoramic.png";
import classroomSliceCenter from "../../../assets/classroom_slice_center.webp";
import classroomSliceLeft from "../../../assets/classroom_slice_left.webp";
import classroomSliceRight from "../../../assets/classroom_slice_right.webp";

const labSpecs = [
  {
    icon: Cpu,
    title: "RTX GPU Render Stations",
    desc: "Nvidia RTX graphics processors engineered for real-time Blender viewport rendering, Maya Arnold batches, and Matrix CAD raytracing.",
  },
  {
    icon: Layers,
    title: "Dual-Screen Workstations",
    desc: "Every desk features high-resolution dual monitors so students code or model on one display while checking live previews on the other.",
  },
  {
    icon: Wifi,
    title: "Dedicated Gigabit Fiber & Git",
    desc: "Ultra-low latency connectivity with local Git servers, continuous integration mirrors, and instant project deployments.",
  },
  {
    icon: MonitorCheck,
    title: "Digital Art & Wacom Desks",
    desc: "Pressure-sensitive digital tablets for character concept artists, digital sculptors in ZBrush, and texture painters.",
  },
];

const campusLocations = [
  {
    name: "Central HQ & Animation Studio",
    address: "Tonk Road, Near Bus Stand, Jaipur, Rajasthan 302015",
    focus: "3D Animation, VFX, Unreal Engine, Matrix CAD & Full-Stack",
    timings: "8:00 AM – 8:00 PM (Daily)",
    isMain: true,
  },
  {
    name: "Pratap Nagar Technology Center",
    address: "Sector 3, Near Coaching Hub, Pratap Nagar, Jaipur",
    focus: "Software Engineering, Python, AI/ML, Cloud DevOps",
    timings: "8:00 AM – 8:00 PM (Mon-Sat)",
    isMain: false,
  },
  {
    name: "Mansarovar Design Hub",
    address: "Near Metro Pillar 84, Mansarovar, Jaipur",
    focus: "CAD Matrix Jewelry, Graphic Design, Video Editing",
    timings: "8:30 AM – 7:30 PM (Mon-Sat)",
    isMain: false,
  },
  {
    name: "Jhotwara Tech & Accounting",
    address: "Main Kalwar Road, Jhotwara, Jaipur",
    focus: "Tally Prime, Advanced MIS, Web Design & Office Automation",
    timings: "8:00 AM – 8:00 PM (Mon-Sat)",
    isMain: false,
  },
];

export default function AboutInfrastructure() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="infrastructure" className="relative z-10 py-24 sm:py-28 bg-[#050505] overflow-hidden select-none border-t border-white/[0.06]">
      {/* Subtle Grid and Ambient Light */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-[#f6d96b]/[0.04] rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1508] text-[#f6d96b] border border-[#f6d96b]/30 shadow-[0_0_20px_rgba(246,217,107,0.12)] mb-4">
            <MonitorCheck className="w-3.5 h-3.5 text-[#f6d96b]" />
            <span>Studio Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            World-Class Labs Engineered for{" "}
            <span className="bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] to-[#f59e0b] bg-clip-text text-transparent">
              Zero Compromise
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Take a look inside Rajasthan's most sophisticated training facilities. Designed to replicate top animation studios and Silicon Valley software development floors.
          </p>
        </div>

        {/* 3-Image Studio Showpiece (Sheryians Kodr style) */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
            {/* Left slice */}
            <div className="md:col-span-3 rounded-3xl overflow-hidden glass-panel-tech border border-white/[0.1] relative group h-64 md:h-96">
              <img
                src={classroomSliceLeft}
                alt="Third Eye Computer Classes Lab Rig"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono font-bold text-[#f6d96b]">
                  STUDIO LAB 01 • GRAPHICS CLUSTER
                </span>
              </div>
            </div>

            {/* Center panoramic showpiece */}
            <div className="md:col-span-6 rounded-3xl overflow-hidden glass-panel-highlight border border-[#f6d96b]/40 relative group h-80 md:h-96 shadow-[0_10px_40px_rgba(246,217,107,0.15)]">
              <img
                src={classroomPanoramic}
                alt="Third Eye Panoramic Classroom"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6d96b]/20 border border-[#f6d96b]/40 text-[#f6d96b] text-[11px] font-mono font-bold mb-2 w-fit">
                  <span>MAIN PRODUCTION AMPHITHEATER</span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white">
                  50+ High-Performance Terminals & Live Projection Array
                </h4>
                <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                  Equipped with synchronized mentor broadcasting screens so every demonstration is crisply visible.
                </p>
              </div>
            </div>

            {/* Right slice */}
            <div className="md:col-span-3 rounded-3xl overflow-hidden glass-panel-tech border border-white/[0.1] relative group h-64 md:h-96">
              <img
                src={classroomSliceRight}
                alt="Third Eye Student Workstation Desk"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-mono font-bold text-[#f6d96b]">
                  STUDIO LAB 02 • FULL-STACK FLOOR
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Hardware Hardware Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {labSpecs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className="glass-panel-tech rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f6d96b]/40 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1c160e] border border-[#f6d96b]/30 text-[#f6d96b] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#f6d96b] group-hover:text-black transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#f6d96b] transition-colors">
                  {spec.title}
                </h4>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── JAIPUR CAMPUS ECOSYSTEM NETWORK ── */}
        <div className="glass-panel-tech rounded-3xl p-6 sm:p-10 border border-[#f6d96b]/20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1c1508] text-[#f6d96b] border border-[#f6d96b]/30 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#f6d96b]" />
                <span>Jaipur Network</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                4 Strategic Campuses Across Jaipur
              </h3>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#f6d96b] hover:text-white transition-colors"
            >
              <span>View Map Directions & Book Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campusLocations.map((campus, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  campus.isMain
                    ? "bg-[#16110a] border-[#f6d96b]/40 shadow-[0_0_25px_rgba(246,217,107,0.08)]"
                    : "bg-black/40 border-white/[0.08] hover:border-white/[0.2]"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{campus.name}</span>
                      {campus.isMain && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#f6d96b] text-black">
                          MAIN HQ
                        </span>
                      )}
                    </h4>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-zinc-300 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#f6d96b] shrink-0 mt-0.5" />
                    <span>{campus.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>{campus.timings}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.08] text-xs">
                  <span className="text-zinc-400 font-medium">Core Focus: </span>
                  <span className="text-[#f6d96b] font-semibold">{campus.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

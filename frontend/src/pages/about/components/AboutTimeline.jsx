import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Sparkles,
  Award,
  Cpu,
  Layers,
  Building,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Flame,
} from "lucide-react";

const milestones = [
  {
    year: "2008",
    phase: "Phase 01: The Inception",
    title: "The First Spark & Tonk Road Lab",
    badge: "Foundational Era",
    tagline: "5 Pentium Workstations & A Veteran's Oath",
    description:
      "Mr. M.L. Chaudhary founded Third Eye Computer Classes in a small studio facility near Tonk Road, Jaipur. With only five desktop computers and a commitment to zero-defect learning, the institute aimed to liberate Rajasthani youth from passive theoretical coaching by guaranteeing 100% individual workstation seat time.",
    highlights: [
      "Inaugural 5-PC dedicated practical lab launched",
      "Pioneered structured DOS, C Programming & Tally ERP training",
      "100+ students certified in the very first academic year",
    ],
    techStack: ["C / C++", "Tally 7.2", "MS Office", "Visual Basic"],
    metric: "100+ Students Enlightened",
  },
  {
    year: "2012",
    phase: "Phase 02: Creative Expansion",
    title: "Pioneering the 2D & 3D Animation Studio",
    badge: "The Creative Leap",
    tagline: "First Studio-Grade Animation Labs in Jaipur",
    description:
      "Recognizing the explosion of VFX, television graphics, and game art, Third Eye established one of Jaipur's earliest dedicated 3D Animation and Multimedia design studios. Investing in high-end graphics processing and dual monitors, students learned character rigging, 3D modeling, and post-production.",
    highlights: [
      "Introduced Autodesk Maya, 3ds Max & Adobe Creative Suite",
      "First batch of 3D animators hired by Mumbai & Delhi broadcast studios",
      "Campus expanded to accommodate 50+ high-performance GPU rigs",
    ],
    techStack: ["Autodesk Maya", "3ds Max", "After Effects", "Photoshop", "CorelDraw"],
    metric: "2,500+ Certified Artists",
  },
  {
    year: "2016",
    phase: "Phase 03: Industrial Precision",
    title: "Gemvision Matrix & 3D Jewelry CAD Revolution",
    badge: "Industrial Craft",
    tagline: "Bridging Jaipur's Heritage Jewelry with 3D CAD",
    description:
      "Jaipur is the gemstone and jewelry capital of India. Third Eye innovated by developing specialized curriculums in Gemvision Matrix, Rhino 3D, and CAD/CAM prototyping. Traditional jewelry artisans and young designers flocked to transform handcrafted jewelry sketches into micrometer-accurate 3D CAD models.",
    highlights: [
      "Launched Rajasthan's leading Matrix & Rhino 3D CAD curriculum",
      "Trained CAD designers for Sitapura SEZ jewelry exporters",
      "Over 90% immediate placement rate for CAD Matrix graduates",
    ],
    techStack: ["Gemvision Matrix", "Rhino 3D", "AutoCAD", "V-Ray", "3D Printing Prototyping"],
    metric: "5,000+ Jewelry & CAD Pros",
  },
  {
    year: "2019",
    phase: "Phase 04: Software Renaissance",
    title: "The Full-Stack & Engineering Era",
    badge: "Modern Tech",
    tagline: "Full-Stack Web, Python, Cloud & Data Science",
    description:
      "As software engineering expanded beyond legacy systems, Third Eye overhauled its IT engineering wing. We introduced modern full-stack web development (MERN), Python scripting, Django, Java enterprise architecture, and cloud fundamentals—focusing entirely on GitHub portfolios and real-world web apps.",
    highlights: [
      "Transitioned curriculum to modern JavaScript (React, Node.js) & Python",
      "Weekly hackathons and live client simulation builds introduced",
      "Alumni began securing 6-figure entry salaries in top Indian tech firms",
    ],
    techStack: ["React.js", "Node.js", "Python & Django", "Advanced Java", "AWS Cloud"],
    metric: "12,000+ Alumni Milestone",
  },
  {
    year: "2022",
    phase: "Phase 05: Placement Powerhouse",
    title: "ISO 9001:2015 & Dedicated Placement Cell",
    badge: "Quality Accreditation",
    tagline: "National Recognition & 150+ Corporate Recruitment Drives",
    description:
      "Third Eye achieved formal ISO 9001:2015 certification for quality educational management. Concurrently, we launched the centralized Placement & Career Cell led by senior corporate HR leaders, offering mock technical panels, resume engineering, and guaranteed interview opportunities.",
    highlights: [
      "ISO 9001:2015 Quality Management Accreditation awarded",
      "Institutional tie-ups with 150+ software, VFX, and accounting firms",
      "Automated online Certificate Verification portal launched",
    ],
    techStack: ["MERN Stack", "Flutter", "DevOps", "Advanced Excel & MIS", "Tally Prime"],
    metric: "98.4% Placement Record",
  },
  {
    year: "2024 - 2026+",
    phase: "Phase 06: Spatial & AI Frontier",
    title: "Generative AI, Unreal 5 & Multi-Campus Odyssey",
    badge: "Next-Gen Future",
    tagline: "Spatial Computing, AI Toolchains & 25,000+ Strong Community",
    description:
      "Today, Third Eye stands as Jaipur's premier digital skills powerhouse. With multiple interconnected tech centers across Jaipur (Tonk Road, Pratap Nagar, Mansarovar, Jhotwara), we lead instruction in Generative AI workflows, Unreal Engine 5 spatial pipelines, and advanced full-stack systems—enlightening the next generation of global tech leaders.",
    highlights: [
      "Integrated Generative AI, Prompt Engineering & LLM tools into all tracks",
      "Unreal Engine 5 virtual production & architectural visualization lab",
      "Over 25,000 students empowered and thriving globally",
    ],
    techStack: ["Generative AI", "Unreal Engine 5", "Next.js", "AI-Augmented VFX", "Cloud Arch"],
    metric: "25,000+ Global Alumni Network",
  },
];

export default function AboutTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeMilestone = milestones[activeIdx];

  return (
    <section id="timeline" className="relative z-10 py-24 sm:py-28 bg-[#080603] overflow-hidden select-none border-t border-white/[0.06]">
      {/* Background Subtle Tech Line */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#f6d96b]/[0.05] rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1f1609] text-[#f6d96b] border border-[#f6d96b]/30 shadow-[0_0_20px_rgba(246,217,107,0.12)] mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#f6d96b]" />
            <span>The Evolution (2008 – Present)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            18 Years of Innovation:{" "}
            <span className="bg-gradient-to-r from-[#ffeab0] via-[#f6d96b] to-[#f59e0b] bg-clip-text text-transparent">
              The Third Eye Odyssey
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            Click through our journey milestones to see how a five-computer lab transformed into Rajasthan's most trusted technological institution.
          </p>
        </div>

        {/* Milestone Selector Tabs (Horizontal Interactive Scrubber) */}
        <div className="relative mb-12 sm:mb-14">
          <div className="overflow-x-auto hide-scrollbar pb-3">
            <div className="flex items-center justify-between min-w-[700px] border-b border-white/[0.1] relative">
              {milestones.map((m, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`relative pb-4 px-4 flex flex-col items-center group transition-all duration-200 focus:outline-none ${
                      isActive ? "text-[#f6d96b]" : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    <span className="text-xs font-mono font-semibold tracking-wider uppercase mb-1 opacity-70">
                      0{idx + 1}
                    </span>
                    <span className={`text-base sm:text-lg font-black transition-all ${
                      isActive ? "text-[#f6d96b] scale-110" : "text-zinc-300"
                    }`}>
                      {m.year}
                    </span>

                    {/* Active Golden Beacon Dot */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full mt-3 transition-all duration-300 border-2 ${
                        isActive
                          ? "bg-[#f6d96b] border-[#ffe894] shadow-[0_0_15px_#f6d96b] scale-125"
                          : "bg-[#141009] border-zinc-700 group-hover:border-[#f6d96b]/60"
                      }`}
                    />

                    {/* Bottom Active Highlighter Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTimelineBar"
                        className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#f6d96b] to-transparent shadow-[0_0_12px_#f6d96b]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Milestone Detail Card (Framer Motion Animated Transition) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="glass-panel-highlight rounded-3xl p-6 sm:p-10 md:p-12 border border-[#f6d96b]/35 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Narrative & Headline (lg:col-span-7) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#f6d96b]/15 text-[#f6d96b] border border-[#f6d96b]/40">
                    {activeMilestone.phase}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {activeMilestone.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                  {activeMilestone.title}
                </h3>

                <div className="text-sm font-semibold text-[#f6d96b]">
                  {activeMilestone.tagline}
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                  {activeMilestone.description}
                </p>

                {/* Key Achievements Bullet Points */}
                <div className="pt-2 space-y-2.5">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                    Historical Milestones Reached:
                  </div>
                  {activeMilestone.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-[#f6d96b] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Tech Arsenal & Stat Box (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-black/40 border border-white/[0.08] p-6 sm:p-7 rounded-2xl">
                {/* Metric Badge */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#1f1709] to-[#0e0c08] border border-[#f6d96b]/25 shadow-lg">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    Era Impact Output
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#f6d96b] font-mono">
                    {activeMilestone.metric}
                  </div>
                </div>

                {/* Tech Stack Modules Introduced */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#f6d96b]" />
                    <span>Key Curriculums Integrated:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeMilestone.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.05] border border-white/[0.1] text-zinc-200 hover:border-[#f6d96b]/40 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Navigation helpers */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
                  <button
                    type="button"
                    onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : milestones.length - 1))}
                    className="hover:text-[#f6d96b] transition-colors py-1 px-2"
                  >
                    ← Previous Era
                  </button>
                  <span className="font-mono text-zinc-400">
                    {activeIdx + 1} of {milestones.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveIdx((prev) => (prev < milestones.length - 1 ? prev + 1 : 0))}
                    className="hover:text-[#f6d96b] transition-colors py-1 px-2 flex items-center gap-1 font-semibold text-zinc-300"
                  >
                    <span>Next Era</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

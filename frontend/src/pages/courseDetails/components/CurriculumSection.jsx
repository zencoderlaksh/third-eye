import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Clock,
  CheckCircle2,
} from "lucide-react";
import "./CurriculumSection.css";

// Default Prerequisites Data
const DEFAULT_PREREQUISITES = {
  title: "Course Prerequisites",
  description:
    "Basic programming understanding is recommended, beginners are welcome, be ready to learn fast, stay consistent, and take responsibility for your progress.",
  level: "Beginner To Advance",
  duration: "30 Weeks",
  overviewTitle: "A QUICK OVERVIEW OF THE COURSE",
  highlights: [
    "Access to Industry Ready Curriculum",
    "Real-World Production Grade Projects",
    "Live 1:1 Mentor Guidance & Code Reviews",
    "Lifetime Access to Resources, Notes & LMS",
    "Dedicated Placement Assistance & Mock Interviews",
  ],
};

// Exactly 5 Clean Modules (as requested by user)
const DEFAULT_MODULES = [
  {
    id: 1,
    moduleNumber: "MODULE 1",
    title: "Internet, Networking & Web Fundamentals",
    description: "Understand how the web works from low-level networking to browser systems.",
  },
  {
    id: 2,
    moduleNumber: "MODULE 2",
    title: "Modern JavaScript & Deep Dive Architecture",
    description: "Master core ECMAScript, closures, asynchronous event loop, and functional paradigms.",
  },
  {
    id: 3,
    moduleNumber: "MODULE 3",
    title: "React 19, Component Architecture & Performance",
    description: "Build scalable web applications with advanced hooks, suspense, and state machines.",
  },
  {
    id: 4,
    moduleNumber: "MODULE 4",
    title: "Next.js Fullstack Engine & API Design",
    description: "Server-side rendering, incremental static generation, and edge route handlers.",
  },
  {
    id: 5,
    moduleNumber: "MODULE 5",
    title: "Production Backend, Databases & Cloud Deployments",
    description: "Relational data modeling, PostgreSQL, Docker containers, and CI/CD automated pipelines.",
  },
];

export default function CurriculumSection({
  badge = "CURRICULUM",
  title = "Structured Curriculum Designed For Real Growth",
  prerequisites = null,
  modules = null,
}) {
  const activePrereq = prerequisites || DEFAULT_PREREQUISITES;
  const rawModules = Array.isArray(modules) && modules.length > 0 ? modules : DEFAULT_MODULES;
  // Strictly enforce 5 modules only
  const displayModules = rawModules.slice(0, 5);

  return (
    <section className="curriculum-section">
      <div className="curriculum-wrapper">
        
        {/* Ambient Golden Spotlight */}
        <div className="curriculum-glow" />

        {/* Section Header */}
        <div className="curriculum-header">
          <motion.div
            className="curriculum-badge"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>{badge}</span>
          </motion.div>

          <motion.h2
            className="curriculum-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Two Column Layout: Left Prerequisites Card + Right 5 Modules Stack */}
        <div className="curriculum-grid">
          
          {/* Left Column: Course Prerequisites Card */}
          <div className="curriculum-left-col">
            <motion.div
              className="prerequisites-card"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="prerequisites-title">{activePrereq.title}</h3>
              <p className="prerequisites-desc">{activePrereq.description}</p>

              {/* Level & Duration Badges */}
              <div className="prerequisites-pills-row">
                <div className="prereq-pill">
                  <BarChart3 size={16} className="text-[#f6d96b]" />
                  <span>{activePrereq.level}</span>
                </div>
                <div className="prereq-pill">
                  <Clock size={16} className="text-[#f6d96b]" />
                  <span>{activePrereq.duration}</span>
                </div>
              </div>

              {/* Divider & Overview Title */}
              <div className="prerequisites-divider">
                <span>{activePrereq.overviewTitle}</span>
              </div>

              {/* Checklist Items */}
              <ul className="prerequisites-checklist">
                {activePrereq.highlights.map((item, idx) => (
                  <li key={`highlight-${idx}`}>
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Exactly 5 Modules Stack (Clean, No Dropdowns) */}
          <div className="curriculum-right-col">
            <div className="modules-stack">
              {displayModules.map((mod, idx) => (
                <motion.div
                  key={mod.id || `mod-${idx}`}
                  className="module-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                >
                  <div className="module-card-header">
                    <span className="module-badge">{mod.moduleNumber || `MODULE ${idx + 1}`}</span>
                  </div>

                  <h4 className="module-title">{mod.title}</h4>
                  <p className="module-desc">{mod.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

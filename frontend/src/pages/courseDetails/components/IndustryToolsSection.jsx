import React from "react";
import { motion } from "framer-motion";
import "./IndustryToolsSection.css";

// Built-in Crisp Vector Brand Icons
const TOOL_ICONS = {
  react: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" width="56" height="56">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 180 180" width="52" height="52">
      <rect width="180" height="180" rx="36" fill="#14171d" stroke="rgba(255,255,255,0.15)" strokeWidth="4" />
      <path
        d="M62 48v84h16V76.8l47.2 55.2h12.8V48h-16v55.2L74.8 48H62z"
        fill="#ffffff"
      />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 128 128" width="52" height="52">
      <rect width="128" height="128" rx="28" fill="#3178c6" />
      <path
        d="M57.4 61.2v7.8h-13.8v39H31.8v-39H18.2v-7.8h39.2zm48.8 17c-2.4-1.6-5.4-2.8-9-3.6-3.6-.8-6.4-1.5-8.4-2.1-2-.6-3.4-1.3-4.2-2.1-.8-.8-1.2-1.9-1.2-3.3 0-1.7.7-3 2.1-4 1.4-1 3.4-1.5 6-1.5 2.8 0 5.4.6 7.8 1.8 2.4 1.2 4.4 2.8 6 4.8l7.2-6.6c-2.4-2.8-5.6-5-9.6-6.6-4-1.6-8.6-2.4-13.8-2.4-5.2 0-9.8.9-13.8 2.7-4 1.8-7.2 4.3-9.6 7.5-2.4 3.2-3.6 7-3.6 11.4 0 3.2.7 6 2.1 8.4 1.4 2.4 3.4 4.4 6 5.9 2.6 1.5 5.8 2.8 9.6 3.9 3.8 1.1 6.8 2 9 2.8 2.2.8 3.8 1.7 4.8 2.7 1 1 1.5 2.3 1.5 3.9 0 1.9-.8 3.4-2.4 4.5-1.6 1.1-3.9 1.6-6.9 1.6-3.4 0-6.6-.8-9.6-2.4-3-1.6-5.4-3.8-7.2-6.6l-7.8 6.6c2.8 3.8 6.6 6.8 11.4 9 4.8 2.2 10.4 3.3 16.8 3.3 5.6 0 10.6-1 15-3 4.4-2 7.8-4.8 10.2-8.4 2.4-3.6 3.6-7.8 3.6-12.6 0-3.6-.8-6.8-2.4-9.6-1.6-2.8-4-5-7.2-6.8z"
        fill="#ffffff"
      />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" width="56" height="56">
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="#38bdf8"
      />
    </svg>
  ),
  blender: (
    <svg viewBox="0 0 24 24" width="56" height="56">
      <circle cx="12" cy="13" r="5" fill="#ea7600" />
      <circle cx="12" cy="13" r="2.2" fill="#ffffff" />
      <path d="M12 4v4M6 8l4 2.5M18 8l-4 2.5" stroke="#ea7600" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  maya: (
    <svg viewBox="0 0 100 100" width="52" height="52">
      <rect width="100" height="100" rx="22" fill="#0696d7" />
      <path d="M26 74V26l24 24 24-24v48h-14V46L46 60h-2L30 46v28H26z" fill="#ffffff" />
    </svg>
  ),
  aftereffects: (
    <svg viewBox="0 0 100 100" width="52" height="52">
      <rect width="100" height="100" rx="22" fill="#00005b" stroke="#9999ff" strokeWidth="2" />
      <text x="50" y="64" fontSize="42" fontWeight="bold" fill="#9999ff" textAnchor="middle" fontFamily="sans-serif">
        Ae
      </text>
    </svg>
  ),
  photoshop: (
    <svg viewBox="0 0 100 100" width="52" height="52">
      <rect width="100" height="100" rx="22" fill="#001e36" stroke="#31a8ff" strokeWidth="2" />
      <text x="50" y="64" fontSize="42" fontWeight="bold" fill="#31a8ff" textAnchor="middle" fontFamily="sans-serif">
        Ps
      </text>
    </svg>
  ),
};

// Default 4 Tools (as seen in user's reference image)
const DEFAULT_TOOLS = [
  { id: "react", name: "React", iconType: "react", glowColor: "rgba(97, 218, 251, 0.25)" },
  { id: "nextjs", name: "Next.Js", iconType: "nextjs", glowColor: "rgba(255, 255, 255, 0.2)" },
  { id: "typescript", name: "TypeScript", iconType: "typescript", glowColor: "rgba(49, 120, 198, 0.25)" },
  { id: "tailwind", name: "Tailwind CSS", iconType: "tailwind", glowColor: "rgba(56, 189, 248, 0.25)" },
];

export default function IndustryToolsSection({
  title = "Industry Tools You'll Master",
  badge = "TECHNOLOGIES",
  containerTitle = "TOOLS AND TECHNOLOGIES",
  tools = null,
}) {
  // Use passed props, or fallback to default 4 tools
  const activeTools = Array.isArray(tools) && tools.length > 0 ? tools : DEFAULT_TOOLS;
  // Strictly enforce 4 cards as requested
  const displayTools = activeTools.slice(0, 4);

  return (
    <section className="industry-tools-section">
      <div className="industry-tools-wrapper">
        
        {/* Ambient Glow */}
        <div className="industry-tools-glow" />

        {/* Section Header */}
        <div className="industry-tools-header">
          <motion.div
            className="industry-tools-badge"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>{badge}</span>
          </motion.div>

          <motion.h2
            className="industry-tools-title"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Outer Container Box for Tools */}
        <motion.div
          className="industry-tools-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Inner Header: TOOLS AND TECHNOLOGIES */}
          <div className="industry-tools-box-title">
            <span>{containerTitle}</span>
          </div>

          {/* Exactly 4 Cards Grid */}
          <div className="industry-tools-grid">
            {displayTools.map((tool, idx) => {
              const icon = tool.icon || TOOL_ICONS[tool.iconType] || TOOL_ICONS.react;
              const glow = tool.glowColor || "rgba(246, 217, 107, 0.25)";

              return (
                <motion.div
                  key={tool.id || `tool-${idx}`}
                  className="industry-tool-card"
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                >
                  {/* Tool Icon with Ambient Glow */}
                  <div className="industry-tool-icon-wrap" style={{ "--glow-color": glow }}>
                    <div className="industry-tool-icon-aura" />
                    {tool.image ? (
                      <img src={tool.image} alt={tool.name} className="industry-tool-img" />
                    ) : (
                      <div className="industry-tool-svg">{icon}</div>
                    )}
                  </div>

                  {/* Tool Name */}
                  <span className="industry-tool-name">{tool.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

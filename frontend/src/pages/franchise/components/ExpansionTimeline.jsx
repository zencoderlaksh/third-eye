import React, { useState, useEffect } from "react";
import "./ExpansionTimeline.css";
import { 
  Milestone, 
  MapPin, 
  Calendar, 
  Compass, 
  ArrowUpRight, 
  TrendingUp, 
  CheckCircle2, 
  Radio, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function ExpansionTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const milestones = [
    {
      step: "01",
      year: "MARCH 2023",
      metric: "1st Center",
      title: "The Genesis",
      subtitle: "Flagship Hub, Sanganer",
      highlight: "State-of-the-art IT campus"
    },
    {
      step: "02",
      year: "2023 – 2024",
      metric: "4 Centers",
      title: "Rapid Expansion",
      subtitle: "Pratap Nagar & Jagatpura",
      highlight: "3,500+ active students"
    },
    {
      step: "03",
      year: "2024 – 2025",
      metric: "11+ Centers",
      title: "City Dominance",
      subtitle: "All Core Jaipur Zones",
      highlight: "11 branches running strong"
    },
    {
      step: "04",
      year: "2025 – 2026+",
      metric: "Pan-Rajasthan",
      title: "Statewide Era",
      subtitle: "District Franchise Hubs",
      highlight: "Dedicated franchise rollout live",
      isLive: true
    }
  ];

  // Auto-advance timeline steps for high-energy animative feel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % milestones.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [isPaused, milestones.length]);

  const upcomingCities = [
    { city: "AJMER" },
    { city: "SIKAR" },
    { city: "ALWAR" }
  ];

  const handleScrollToInquiry = (cityName = "") => {
    const inquirySection = document.getElementById("apply-franchise");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
      if (cityName) {
        setTimeout(() => {
          const cityInput = document.querySelector('input[name="city"]');
          if (cityInput) {
            cityInput.value = cityName;
            cityInput.focus();
            cityInput.dispatchEvent(new Event("input", { bubbles: true }));
          }
        }, 500);
      }
    }
  };

  return (
    <section className="timeline-section" id="timeline">
      {/* Background ambient lighting */}
      <div className="timeline-ambient-glow timeline-ambient-glow-left" />
      <div className="timeline-ambient-glow timeline-ambient-glow-right" />

      <div className="timeline-container">
        {/* Section Header */}
        <div className="timeline-header-block">
          <div className="timeline-badge-pill">
            <Milestone size={16} className="timeline-pill-icon" />
            <span>EXPANSION TIMELINE (2023–2026)</span>
          </div>

          <h2 className="timeline-main-title">
            GROWTH <span className="timeline-title-highlight">JOURNEY</span>
          </h2>

          <p className="timeline-sub-text">
            From our very first branch in Sanganer, Jaipur in March 2023 to now 11+ branches 
            in less than three years, Thirdeye has continued to grow strong and steady across the state.
          </p>

          {/* Quick Metrics Ticker */}
          <div className="timeline-meta-ticker">
            <div className="meta-ticker-item">
              <span className="ticker-val">3+</span>
              <span className="ticker-lbl">Years of Proven Execution</span>
            </div>
            <div className="meta-ticker-divider" />
            <div className="meta-ticker-item">
              <span className="ticker-val">11+</span>
              <span className="ticker-lbl">Jaipur Centers Active</span>
            </div>
            <div className="meta-ticker-divider" />
            <div className="meta-ticker-item">
              <span className="ticker-val">Pan-RJ</span>
              <span className="ticker-lbl">Statewide Expansion Phase</span>
            </div>
          </div>
        </div>

        {/* Chronological Growth Highway */}
        <div className="timeline-highway-container">
          {/* Animated Connecting Track (Desktop) */}
          <div className="timeline-track-wrapper">
            <div className="timeline-track-rail">
              <div className="timeline-track-glow-pulse" />
              <div 
                className="timeline-track-active-fill" 
                style={{ width: `${(activeStep / (milestones.length - 1)) * 100}%` }}
              />
            </div>

            {/* Stage Beacons / Checkpoints on the Track */}
            <div className="timeline-checkpoints-row">
              {milestones.map((m, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div 
                    key={idx} 
                    className={`timeline-checkpoint-node ${isActive ? "is-active" : ""} ${m.isLive ? "is-live-node" : ""}`}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => {
                      setIsPaused(true);
                      setActiveStep(idx);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                    title={`Click to highlight ${m.year}`}
                  >
                    <div className="node-outer-ring">
                      {m.isLive && <div className="node-radar-ping" />}
                      <div className="node-inner-core">
                        {m.isLive ? (
                          <Radio size={14} className="node-icon-live" />
                        ) : (
                          <CheckCircle2 size={14} className="node-icon-check" />
                        )}
                        <span className="node-number">{m.step}</span>
                      </div>
                    </div>
                    <div className="node-drop-laser" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Cards Grid (Simplified, Yellow & Animative) */}
          <div className="timeline-cards-grid">
            {milestones.map((item, index) => {
              const isSelected = activeStep === index;
              return (
                <div 
                  key={index} 
                  className={`timeline-step-card ${isSelected ? "card-highlighted" : ""} ${item.isLive ? "card-live-stage" : ""}`}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setActiveStep(index);
                  }}
                  onMouseLeave={() => setIsPaused(false)}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Watermark Step Number */}
                  <div className="step-watermark-number">{item.step}</div>

                  {/* Top Laser Accent */}
                  <div className="step-top-laser" />

                  {/* Card Header: Year Capsule & Metric Badge */}
                  <div className="step-card-top">
                    <span className="step-year-badge">
                      <Calendar size={13} />
                      {item.year}
                    </span>
                    <span className="step-metric-badge">
                      <TrendingUp size={12} className="metric-arrow-icon" />
                      {item.metric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="step-card-title">{item.title}</h3>
                  <p className="step-card-sub">{item.subtitle}</p>

                  {/* Clean Highlight Pill */}
                  <div className="step-highlight-pill">
                    <Sparkles size={13} className="pill-sparkle" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Territory Allotment Radar Module (Upcoming Branches) */}
        <div className="upcoming-radar-module">
          <div className="radar-mesh-bg" />
          <div className="radar-glow-rim" />

          {/* Radar Header */}
          <div className="upcoming-box-header">
            <div className="upcoming-title-left">
              <div className="radar-icon-container">
                <Compass size={24} className="radar-compass-icon" />
                <div className="radar-pulse-wave" />
              </div>
              <div>
                <div className="radar-sub-tag">
                  <Sparkles size={13} className="radar-sparkle-gold" />
                  <span>NEXT-GEN EXPANSION PIPELINE</span>
                </div>
                <h4 className="upcoming-title">
                  UPCOMING <span className="upcoming-title-yellow">BRANCHES</span>
                </h4>
                <p className="upcoming-sub">
                  High-demand territories available for immediate partner allotment across Rajasthan
                </p>
              </div>
            </div>

            <button 
              className="upcoming-cta-btn" 
              onClick={() => handleScrollToInquiry()}
              aria-label="Pre-book franchise territory"
            >
              <span>PRE-BOOK TERRITORY</span>
              <ArrowRight size={16} className="cta-arrow-icon" />
            </button>
          </div>

          {/* Territory Nodes Grid (Only Names) */}
          <div className="upcoming-cities-grid">
            {upcomingCities.map((item, idx) => (
              <div 
                key={idx} 
                className="city-chip-card"
                onClick={() => handleScrollToInquiry(item.city)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleScrollToInquiry(item.city);
                  }
                }}
              >
                <div className="city-pin-wrapper">
                  <MapPin size={18} className="city-pin" />
                </div>
                <span className="city-name">{item.city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

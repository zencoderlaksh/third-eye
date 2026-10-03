import React from "react";
import "./FranchiseHero.css";
import { 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  PhoneCall, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function FranchiseHero({ onOpenInquiry }) {
  const highlights = [
    "Proven & Tested Business Model",
    "Investments in a Rapidly Growing Organization",
    "Strong Brand Recognition & Market Presence",
    "Exclusive Area Rights & Territory Protection",
    "Zero Dead Stock & Minimal Risk",
    "High Return on Investment (High ROI)",
    "Extensive Product, Faculty & Staff Training",
    "Centralized Digital Marketing & Lead Support",
    "Hassle-Free Setup & 24/7 Technical Backup",
    "Continuous Modern Curriculum Updates",
    "Recession-Free Essential Education Model"
  ];

  return (
    <section className="franchise-hero-section">
      <div className="franchise-hero-container">
        {/* Top Badge */}
        <div className="hero-badge-wrap">
          <span className="hero-pill-badge">
            <Sparkles size={16} className="badge-icon" />
            PARTNER WITH RAJASTHAN'S #1 IT SKILL POWERHOUSE
          </span>
        </div>

        {/* Hero Main Header */}
        <div className="hero-header-block">
          <h1 className="hero-main-title">
            START A <span className="title-highlight">THIRDEYE</span> FRANCHISE IN YOUR CITY
          </h1>
          <p className="hero-lead-text">
            Join hands with Rajasthan’s leading IT skill development brand. Build a profitable, 
            future-proof education business with 11+ operational centers and complete 360° corporate support.
          </p>
        </div>

        {/* Hero CTA Action Buttons */}
        <div className="hero-action-row">
          <button 
            type="button" 
            className="hero-btn-primary"
            onClick={onOpenInquiry}
          >
            <span>Apply For Franchise Now</span>
            <ArrowRight size={18} />
          </button>
          <a href="#how-to-start" className="hero-btn-secondary">
            <span>Explore 6-Step Setup</span>
          </a>
          <a href="tel:+918058061222" className="hero-btn-outline">
            <PhoneCall size={16} />
            <span>+91 805 806 1222</span>
          </a>
        </div>

        {/* Hero Two Column Showcase: Highlights & Awards */}
        <div className="hero-features-grid">
          {/* Key Advantages Column */}
          <div className="hero-feature-card advantages-card">
            <div className="card-header-bar">
              <div className="header-icon-box black-icon">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="card-header-title">Why Partner With Thirdeye?</h3>
                <p className="card-header-sub">Built to guarantee consistent profitability & student trust</p>
              </div>
            </div>

            <div className="advantages-checklist">
              {highlights.map((item, idx) => (
                <div key={idx} className="advantage-check-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Milestones Column */}
          <div className="hero-feature-card recognition-card">
            <div className="card-header-bar">
              <div className="header-icon-box yellow-icon">
                <Award size={22} />
              </div>
              <div>
                <h3 className="card-header-title text-white">Awards & Recognition</h3>
                <p className="card-header-sub text-white-sub">Endorsed by leading universities & industry bodies</p>
              </div>
            </div>

            <div className="awards-list">
              <div className="award-item-box">
                <div className="award-trophy-dot">🏆</div>
                <div className="award-item-text">
                  <strong>Awarded Best Tech Training Institute</strong>
                  <span>Poornima Global University</span>
                </div>
              </div>

              <div className="award-item-box">
                <div className="award-trophy-dot">⭐</div>
                <div className="award-item-text">
                  <strong>Awarded Best SAP Training Institute</strong>
                  <span>ICFAI Global University</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-stats-row">
              <div className="hero-stat-pill">
                <div className="stat-num">11,500+</div>
                <div className="stat-lbl">Students Trained</div>
              </div>
              <div className="hero-stat-pill">
                <div className="stat-num">6,700+</div>
                <div className="stat-lbl">Students Placed</div>
              </div>
              <div className="hero-stat-pill">
                <div className="stat-num">11+</div>
                <div className="stat-lbl">Active Branches</div>
              </div>
            </div>

            <div className="hero-quote-box">
              <TrendingUp size={20} className="quote-icon" />
              <p>
                "Fastest growing tech training brand committed to high-impact career excellence and student transformation."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

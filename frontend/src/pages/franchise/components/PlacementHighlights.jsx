import React from "react";
import "./PlacementHighlights.css";
import { 
  Briefcase, 
  CalendarDays, 
  CheckCircle2, 
  Building, 
  Users2, 
  Sparkles
} from "lucide-react";

export default function PlacementHighlights() {
  const placementPillars = [
    "Direct hiring requirements sourced from leading MNCs & high-growth tech companies",
    "Centralized H.O. placement cell managing verified corporate openings statewide",
    "In-house and pooled regional placement drives open to all franchise students",
    "Corporate on-campus interview opportunities where applicable",
    "Immediate on-the-spot offer letters issued for job-ready candidates",
    "Personalized re-skilling & coaching strategy for students before next interview drive"
  ];

  const hiringRoles = [
    { role: "Web Developer", category: "Tech" },
    { role: "Data Analyst", category: "Analytics" },
    { role: "Digital Marketer", category: "Marketing" },
    { role: "UI/UX Designer", category: "Design" },
    { role: "Accountant & Tally Expert", category: "Finance" },
    { role: "Software QA Tester", category: "Tech" },
    { role: "Full Stack Engineer", category: "Tech" },
    { role: "Graphic Designer", category: "Design" }
  ];

  return (
    <section className="placement-franchise-section" id="placements">
      <div className="placement-franchise-container">
        {/* Section Header */}
        <div className="placement-header-block">
          <div className="placement-badge">
            <Briefcase size={16} />
            <span>100% CAREER SUPPORT | REAL OPPORTUNITIES</span>
          </div>
          <h2 className="placement-title">PLACEMENT DRIVE</h2>
          <p className="placement-lead">
            Every 3rd Saturday: At Thirdeye Computer Classes, placements are not random events — 
            they are an engineered, structured operational system.
          </p>
        </div>

        {/* Big Metrics Grid */}
        <div className="placement-metrics-grid">
          <div className="placement-metric-card highlight-card">
            <div className="metric-icon-box">
              <CalendarDays size={26} />
            </div>
            <div className="metric-large-text">EVERY 3RD SATURDAY</div>
            <div className="metric-title-text">Regular Placement Drives</div>
            <p className="metric-sub-text">
              Predictable monthly recruitment cycles guaranteeing interview access for all qualified batches.
            </p>
          </div>

          <div className="placement-metric-card">
            <div className="metric-icon-box black-box">
              <Sparkles size={26} />
            </div>
            <div className="metric-large-text">3 GUARANTEED</div>
            <div className="metric-title-text">Interview Attempts</div>
            <p className="metric-sub-text">
              Every job-oriented student receives 3 corporate interview chances with active feedback.
            </p>
          </div>

          <div className="placement-metric-card">
            <div className="metric-icon-box black-box">
              <Users2 size={26} />
            </div>
            <div className="metric-large-text">6,700+ PLACED</div>
            <div className="metric-title-text">Out of 11,500+ Trained</div>
            <p className="metric-sub-text">
              Real career outcomes powering immense word-of-mouth student referrals for your center.
            </p>
          </div>
        </div>

        {/* Two Column Placement Details & Roles */}
        <div className="placement-details-row">
          {/* Left: System Checklist */}
          <div className="placement-system-box">
            <h3 className="system-box-title">Structured Placement Process</h3>
            <p className="system-box-sub">How our centralized placement team assists your franchise branch</p>
            
            <div className="system-checklist">
              {placementPillars.map((text, idx) => (
                <div key={idx} className="system-check-item">
                  <CheckCircle2 size={18} className="system-check-icon" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Recent Hiring Roles */}
          <div className="placement-roles-box">
            <div className="roles-box-header">
              <Building size={22} className="roles-icon" />
              <div>
                <h3 className="roles-title">Recent Corporate Hiring Roles</h3>
                <p className="roles-sub">Profiles frequently placed across partner companies</p>
              </div>
            </div>

            <div className="roles-chips-grid">
              {hiringRoles.map((item, i) => (
                <div key={i} className="role-tag-card">
                  <span className="role-dot"></span>
                  <div className="role-info">
                    <span className="role-name">{item.role}</span>
                    <span className="role-cat">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="roles-banner-note">
              <strong>Corporate Tie-ups:</strong> Placements coordinated with top regional IT firms, 
              MNC branches, digital agencies, and financial accounting consultancies.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

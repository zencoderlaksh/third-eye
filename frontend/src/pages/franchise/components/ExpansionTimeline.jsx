import React from "react";
import "./ExpansionTimeline.css";
import { Milestone, MapPin, Calendar, Compass, ArrowUpRight } from "lucide-react";

export default function ExpansionTimeline() {
  const milestones = [
    {
      year: "MARCH 2023",
      title: "The Genesis — Sanganer, Jaipur",
      description: "Thirdeye founded its flagship center in Sanganer with state-of-the-art lab infrastructure and modern job-oriented IT curriculum.",
      badge: "Inaugural Center",
      metric: "1st Center"
    },
    {
      year: "2023 – 2024",
      title: "Rapid City Expansion",
      description: "Opened high-footfall branches in Pratap Nagar, Jagatpura, and Vaishali Nagar, scaling student enrollments past 3,500+.",
      badge: "Core Jaipur Reach",
      metric: "4 Centers"
    },
    {
      year: "2024 – 2025",
      title: "11+ Centers Network",
      description: "Established operations in Mansarovar, Vidhyadhar Nagar, Raja Park, Jhotwara, Gopalpura, and Sodala with standardized quality delivery.",
      badge: "City Dominance",
      metric: "11 Centers"
    },
    {
      year: "2025 – 2026+",
      title: "Statewide Expansion Beyond Jaipur",
      description: "Launching dedicated franchise operations across key district hubs with full Head Office operational backing.",
      badge: "Statewide Scaling",
      metric: "Pan-Rajasthan"
    }
  ];

  const upcomingCities = [
    { city: "AJMER", status: "Franchise Allocation Open" },
    { city: "SIKAR", status: "Territory Reserved" },
    { city: "ALWAR", status: "Partner Application Open" },
    { city: "KOTA", status: "Feasibility Review" },
    { city: "JODHPUR", status: "Upcoming District" },
    { city: "BIKANER", status: "Upcoming District" }
  ];

  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-container">
        {/* Section Header */}
        <div className="timeline-header-block">
          <div className="timeline-badge-pill">
            <Milestone size={16} />
            <span>EXPANSION TIMELINE (2023–2026)</span>
          </div>
          <h2 className="timeline-main-title">GROWTH JOURNEY</h2>
          <p className="timeline-sub-text">
            From our very first branch in Sanganer, Jaipur in March 2023 to now 11+ branches 
            in less than three years, Thirdeye has continued to grow strong and steady across the state.
          </p>
        </div>

        {/* Timeline Grid / Path */}
        <div className="timeline-cards-grid">
          {milestones.map((item, index) => (
            <div key={index} className="timeline-step-card">
              <div className="step-card-top">
                <span className="step-year-badge">
                  <Calendar size={13} />
                  {item.year}
                </span>
                <span className="step-metric-badge">{item.metric}</span>
              </div>

              <h3 className="step-card-title">{item.title}</h3>
              <p className="step-card-desc">{item.description}</p>

              <div className="step-card-footer">
                <span className="step-category-pill">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Branches Banner */}
        <div className="upcoming-branches-box">
          <div className="upcoming-box-header">
            <div className="upcoming-title-left">
              <Compass size={22} className="upcoming-icon" />
              <div>
                <h4 className="upcoming-title">UPCOMING BRANCHES</h4>
                <p className="upcoming-sub">High-demand territories available for immediate partner allotment</p>
              </div>
            </div>
            <div className="upcoming-badge">PRE-BOOK TERRITORY</div>
          </div>

          <div className="upcoming-cities-grid">
            {upcomingCities.map((item, idx) => (
              <div key={idx} className="city-chip-card">
                <div className="city-chip-header">
                  <MapPin size={16} className="city-pin" />
                  <span className="city-name">{item.city}</span>
                </div>
                <div className="city-status-text">
                  <span>{item.status}</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

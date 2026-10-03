import React from "react";
import "./IndustryOverview.css";
import { 
  LineChart, 
  Sparkles, 
  Laptop, 
  Briefcase, 
  Globe2, 
  TrendingUp, 
  ShieldCheck, 
  GraduationCap 
} from "lucide-react";

export default function IndustryOverview() {
  const drivers = [
    {
      icon: <Laptop size={24} />,
      title: "Rising Demand for Digital Literacy",
      desc: "Every industry today requires foundational to advanced computer knowledge, making tech training an inescapable necessity."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Surging Tech Career Opportunities",
      desc: "Companies are hiring based on tangible practical skills rather than mere degrees, multiplying enrollment demand."
    },
    {
      icon: <Globe2 size={24} />,
      title: "Digital India & Tech Adoption",
      desc: "Massive government initiatives and widespread digital adoption are accelerating demand in Tier-1, Tier-2, and Tier-3 cities."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Higher Earning Potential & ROI",
      desc: "Students and working professionals realize that digital skills yield instant salary increments and reliable job placement."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Recession-Resistant Economics",
      desc: "Even during economic slowdowns, spending on skilling and education remains a top household priority to safeguard careers."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Non-Stop Upgradation Cycle",
      desc: "Software and frameworks evolve every 12-18 months, guaranteeing continuous recurring student pipelines and batch turnovers."
    }
  ];

  return (
    <section className="industry-section" id="industry-overview">
      <div className="industry-container">
        {/* Section Header */}
        <div className="industry-header-block">
          <div className="industry-badge">
            <LineChart size={16} />
            <span>MARKET DYNAMICS & POTENTIAL</span>
          </div>
          <h2 className="industry-title">EDUCATION INDUSTRY OVERVIEW</h2>
          <h3 className="industry-sub-title">Why the Education Business is a Smart, Future-Proof Investment</h3>
        </div>

        {/* Highlight Thesis Box */}
        <div className="thesis-banner">
          <div className="thesis-icon-box">
            <Sparkles size={28} />
          </div>
          <div className="thesis-content">
            <h4 className="thesis-heading">The Recession-Free Advantage</h4>
            <p className="thesis-text">
              The education industry, especially computer education and digital skill training, is one of the fastest-growing 
              and most future-secure sectors in India. With rapid digital transformation, rising employment competition, and continuous 
              technology upgrades, students and professionals must continuously upgrade their skills—creating <strong>permanent and recurring demand</strong>. 
              Unlike traditional retail or manufacturing businesses, education is a <strong>low-risk, recession-resistant model</strong>. 
              Even during market uncertainties, individuals prioritize learning to improve employability, keeping your franchise consistently profitable.
            </p>
          </div>
        </div>

        {/* 6 Drivers Grid */}
        <div className="drivers-grid">
          {drivers.map((item, idx) => (
            <div key={idx} className="driver-card">
              <div className="driver-icon-circle">{item.icon}</div>
              <h4 className="driver-title">{item.title}</h4>
              <p className="driver-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

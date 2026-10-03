import React from "react";
import "./PartnerSupport.css";
import { 
  HeartHandshake, 
  CreditCard, 
  Headset, 
  Megaphone, 
  FileText, 
  Users, 
  Building2, 
  PlusCircle, 
  PhoneCall, 
  Clock, 
  Wrench, 
  PiggyBank, 
  ShieldCheck, 
  PackageCheck,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Zap
} from "lucide-react";

export default function PartnerSupport() {
  const supportPillars = [
    {
      number: "01",
      theme: "cyan",
      icon: <Headset size={22} />,
      title: "Dedicated Partner Support Team",
      tag: "Direct HO Line",
      badge: "Single Point Contact"
    },
    {
      number: "02",
      theme: "emerald",
      icon: <Clock size={22} />,
      title: "Faculty Hiring Within 72 Hours",
      tag: "< 72h Fast-Track",
      badge: "Screened Instructors"
    },
    {
      number: "03",
      theme: "orange",
      icon: <Megaphone size={22} />,
      title: "Centralized Digital Marketing & Leads",
      tag: "Google & Meta Ads",
      badge: "High-Intent Leads"
    },
    {
      number: "04",
      theme: "purple",
      icon: <FileText size={22} />,
      title: "Updated Curriculum & Study Kits",
      tag: "Modern Syllabus",
      badge: "Complete Workbooks"
    },
    {
      number: "05",
      theme: "amber",
      icon: <Users size={22} />,
      title: "Batch & Student Management",
      tag: "SOP Timetables",
      badge: "Lab Optimization"
    },
    {
      number: "06",
      theme: "rose",
      icon: <Building2 size={22} />,
      title: "Corporate & Placement Tie-Ups",
      tag: "200+ Recruiters",
      badge: "Statewide Drives"
    },
    {
      number: "07",
      theme: "indigo",
      icon: <PlusCircle size={22} />,
      title: "Continuous New Course Additions",
      tag: "Zero License Fees",
      badge: "AI & Cloud Verticals"
    },
    {
      number: "08",
      theme: "lime",
      icon: <PhoneCall size={22} />,
      title: "Head Office Audits & Feedback",
      tag: "Regular Audits",
      badge: "Gold-Standard NPS"
    },
    {
      number: "09",
      theme: "sky",
      icon: <Wrench size={22} />,
      title: "24/7 Technical & Operational Backup",
      tag: "ERP & LMS Backup",
      badge: "Lab IT Assistance"
    },
    {
      number: "10",
      theme: "yellow",
      icon: <PiggyBank size={22} />,
      title: "Cost Management & Profitability",
      tag: "Expense Control",
      badge: "Margin Maximization"
    },
    {
      number: "11",
      theme: "fuchsia",
      icon: <ShieldCheck size={22} />,
      title: "Standardized Quality Delivery",
      tag: "Instructor Screening",
      badge: "Uniform Delivery"
    },
    {
      number: "12",
      theme: "gold",
      icon: <PackageCheck size={22} />,
      title: "Franchise Onboarding Kit",
      tag: "Branded Artwork",
      badge: "Turnkey Launch Kit"
    }
  ];

  const emiHighlights = [
    { title: "Zero / Low-Cost EMI", desc: "No student admission barrier" },
    { title: "Instant 15-Min Approvals", desc: "Rapid spot enrollment" },
    { title: "Upfront Tuition Credit", desc: "100% payout to center" },
    { title: "Top Bank & NBFC Tie-ups", desc: "Pan-India lending network" }
  ];

  return (
    <section className="partner-support-section" id="partner-support">
      {/* Background ambient lighting */}
      <div className="support-ambient-glow support-glow-cyan" />
      <div className="support-ambient-glow support-glow-amber" />
      <div className="support-ambient-glow support-glow-rose" />

      <div className="partner-support-container">
        {/* Section Header */}
        <div className="support-header-block">
          <div className="support-badge">
            <HeartHandshake size={16} />
            <span>360° OPERATIONAL ECOSYSTEM</span>
          </div>

          <h2 className="support-title">HOW THIRDEYE HELPS YOU GROW</h2>

          <div className="support-motto-pill">
            <span className="motto-pulse-dot" />
            <span>#Your growth is our priority, because Thirdeye grows only when their partners succeed</span>
          </div>
        </div>

        {/* Feature Highlight: EMI Facilities Command Banner */}
        <div className="emi-highlight-module">
          <div className="emi-top-laser" />

          <div className="emi-header-row">
            <div className="emi-title-group">
              <div className="emi-icon-pod">
                <CreditCard size={28} />
              </div>
              <div>
                <div className="emi-micro-tag">
                  <Sparkles size={13} />
                  <span>FINANCIAL ENABLER FOR ENROLLMENTS</span>
                </div>
                <h3 className="emi-main-title">
                  Exclusive EMI Facilities Through Partner Banks
                </h3>
              </div>
            </div>

            <div className="emi-partner-shield">
              <span className="shield-dot" />
              <span>INSTANT STUDENT DISBURSAL</span>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="emi-pills-grid">
            {emiHighlights.map((item, index) => (
              <div key={index} className="emi-feature-chip">
                <CheckCircle2 size={18} className="emi-check-icon" />
                <div className="emi-chip-text">
                  <span className="emi-chip-name">{item.title}</span>
                  <span className="emi-chip-sub">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12 Support Pillars Grid — Colorful, Vibrant & Zero Paragraph Clutter */}
        <div className="support-pillars-grid">
          {supportPillars.map((item, idx) => (
            <div 
              key={idx} 
              className={`support-node-card card-theme-${item.theme}`}
            >
              {/* Colored Top Accent Beam */}
              <div className="card-top-beam" />

              {/* Watermark Number */}
              <span className="card-watermark-num">{item.number}</span>

              {/* Header: Solid Color Icon Pod & Number Pill */}
              <div className="support-node-header">
                <div className="support-icon-pod">
                  {item.icon}
                </div>
                <span className="node-index-pill">{item.number}</span>
              </div>

              {/* Bold Title */}
              <h3 className="support-node-title">{item.title}</h3>

              {/* Themed Micro Tags */}
              <div className="support-node-tags">
                <span className="node-tag-item">
                  <span className="tag-dot" />
                  {item.tag}
                </span>
                <span className="node-badge-item">{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

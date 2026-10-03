import React from "react";
import "./LeadershipTeam.css";
import { Users } from "lucide-react";

// Official leadership photos
import mlChaudharyImg from "../../../assets/leadership/ml_chaudhary.png";
import preetiSharmaImg from "../../../assets/leadership/preeti_sharma.png";
import puneetSharmaImg from "../../../assets/leadership/puneet_sharma.png";
import suumitSharmaImg from "../../../assets/leadership/suumit_sharma.png";
import sheetalSharmaImg from "../../../assets/leadership/sheetal_sharma.png";
import neelamSharmaImg from "../../../assets/leadership/neelam_sharma.png";
import muskanAvesthiImg from "../../../assets/leadership/muskan_avesthi.png";
import khushwangSharmaImg from "../../../assets/leadership/khushwang_sharma.png";
import shubhamSainiImg from "../../../assets/leadership/shubham_saini.png";
import amitSainiImg from "../../../assets/leadership/amit_saini.png";
import mohitSharmaImg from "../../../assets/leadership/mohit_sharma.png";
import gauravSinghImg from "../../../assets/leadership/gaurav_singh.png";

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Mr. M.L. Chaudhary",
      role: "FOUNDER & CHIEF PATRON",
      image: mlChaudharyImg,
      desc: "Trained in technical management with Indian Airforce Commendation. Visionary pioneer in expanding IT skills."
    },
    {
      name: "Preeti Sharma",
      role: "CHIEF MANAGING DIRECTOR",
      image: preetiSharmaImg,
      desc: "Proven leader with 15+ years experience in Business Development, Key Account Management, and strategic growth."
    },
    {
      name: "Puneet Sharma",
      role: "MANAGING DIRECTOR",
      image: puneetSharmaImg,
      desc: "Results-oriented visionary with 20+ years expertise in institutional expansion, operations, and partner support."
    },
    {
      name: "Suumit Sharrma",
      role: "CHIEF OPERATING OFFICER",
      image: suumitSharmaImg,
      desc: "Oversees daily execution, strategic growth, and standardized training delivery across all branch networks."
    },
    {
      name: "Sheetal Sharma",
      role: "SALES & B.D. HEAD",
      image: sheetalSharmaImg,
      desc: "27 years of corporate leadership, specialized in franchise growth, strategic alliances, and expansion."
    },
    {
      name: "Neelam Sharma",
      role: "RECRUITMENT HEAD",
      image: neelamSharmaImg,
      desc: "Heads centralized admission strategy, student guidance, and counselor training across all branches."
    },
    {
      name: "Muskan Avesthi",
      role: "PLACEMENT MANAGER",
      image: muskanAvesthiImg,
      desc: "Leads Saturday placement drives, corporate recruiter relations, and student soft-skills readiness."
    },
    {
      name: "Khushwang Sharma",
      role: "SOCIAL MEDIA & OPERATIONS HEAD",
      image: khushwangSharmaImg,
      desc: "Drives brand reach, lead-generation campaigns, and centralized digital marketing support for partners."
    },
    {
      name: "Shubham Saini",
      role: "SR. TRAINING MANAGER",
      image: shubhamSainiImg,
      desc: "Spearheads instructor onboarding, syllabus calibration, and quality audits across regional branches."
    },
    {
      name: "Amit Saini",
      role: "SR. DIGITAL MARKETING MANAGER",
      image: amitSainiImg,
      desc: "9+ years experience in digital growth, funnel marketing, and localized center promotional campaigns."
    },
    {
      name: "Mohit Sharma",
      role: "ADMIN MANAGER",
      image: mohitSharmaImg,
      desc: "Ensures seamless back-office logistics, operational compliance, and center infrastructure readiness."
    },
    {
      name: "Gaurav Singh Panwar",
      role: "IVR & CRM SUPPORT MANAGER",
      image: gauravSinghImg,
      desc: "Oversees student lead response tracking, CRM portal operations, and partner helpdesk systems."
    }
  ];

  return (
    <section className="leadership-franchise-section" id="leadership">
      <div className="leadership-franchise-container">
        {/* Section Header */}
        <div className="leadership-header-block">
          <div className="leadership-badge">
            <Users size={16} />
            <span>EXECUTIVE BACKING</span>
          </div>
          <h2 className="leadership-title">MEET THE TEAM BEHIND THE BRAND</h2>
          <p className="leadership-sub">
            Our experienced corporate leadership team provides continuous strategic, operational, 
            and marketing backup to every franchise center.
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="leaders-grid">
          {leaders.map((leader, idx) => (
            <div key={idx} className="leader-card">
              {/* Upper Half: 50% Image */}
              <div className="leader-img-box">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="leader-img" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextSibling) {
                      e.currentTarget.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="leader-fallback-avatar" style={{ display: 'none' }}>
                  {leader.name.split(" ").map(w => w[0]).join("")}
                </div>
              </div>

              {/* Lower Half: 50% Text */}
              <div className="leader-content">
                <div className="leader-role-badge">{leader.role}</div>
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-desc">{leader.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

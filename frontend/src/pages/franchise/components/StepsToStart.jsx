import React from "react";
import "./StepsToStart.css";
import { 
  FileSignature, 
  MapPin, 
  UserPlus, 
  Rocket, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function StepsToStart({ onOpenInquiry }) {
  const steps = [
    {
      num: "01",
      icon: <PhoneCall size={22} />,
      title: "Initial Consultation & Territory Selection",
      desc: "Connect with our Franchise Expansion team to discuss your preferred city, evaluate demographics, catchment area viability, and market potential."
    },
    {
      num: "02",
      icon: <FileSignature size={22} />,
      title: "Agreement Signing & Initial Payment",
      desc: "Finalize territorial exclusivity rights, execute the formal franchise agreement, and complete transparent onboarding financial formalities."
    },
    {
      num: "03",
      icon: <MapPin size={22} />,
      title: "Site Selection & Center Setup",
      desc: "Identify prime commercial property with our team's guidance. Receive turnkey architectural layouts, interior branding guidelines, and computer lab specs."
    },
    {
      num: "04",
      icon: <UserPlus size={22} />,
      title: "Staff Recruitment & Training",
      desc: "Head Office assists in hiring counselors, centre managers, and technical trainers within 72 hours, followed by intensive operational training."
    },
    {
      num: "05",
      icon: <Rocket size={22} />,
      title: "Grand Opening & Ongoing Support",
      desc: "Execute a high-impact local launch marketing blitz with digital ads, print campaigns, and welcome offers, supported by senior management presence."
    },
    {
      num: "06",
      icon: <GraduationCap size={22} />,
      title: "Student Enrollment & Scale",
      desc: "Kickstart batch operations, enroll incoming students with direct placement cell integration, and begin generating healthy recurring monthly cash flow."
    }
  ];

  return (
    <section className="steps-franchise-section" id="how-to-start">
      <div className="steps-franchise-container">
        {/* Section Header */}
        <div className="steps-header-block">
          <div className="steps-badge">
            <Sparkles size={16} />
            <span>ROADMAP TO LAUNCH</span>
          </div>
          <h2 className="steps-title">HOW TO GET STARTED</h2>
          <p className="steps-sub">
            From initial enquiry to your inaugural student batch — our proven 6-step framework 
            takes your center live smoothly within 30 to 45 days.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-card-header">
                <span className="step-number-pill">{step.num}</span>
                <div className="step-icon-box">{step.icon}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              <div className="step-card-status">
                <CheckCircle2 size={14} className="status-check" />
                <span>Structured Milestone</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="steps-bottom-cta">
          <div className="cta-text-left">
            <h3 className="cta-heading">Ready to book your exclusive city territory?</h3>
            <p className="cta-sub">Territories are allotted on a strict first-come, first-served basis.</p>
          </div>
          <button 
            type="button" 
            className="steps-apply-btn"
            onClick={onOpenInquiry}
          >
            <span>Start Franchise Application</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

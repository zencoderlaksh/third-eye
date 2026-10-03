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
  PackageCheck 
} from "lucide-react";

export default function PartnerSupport() {
  const supportPillars = [
    {
      icon: <Headset size={22} />,
      title: "Dedicated Partner Support Team",
      desc: "Direct single-point-of-contact at Head Office for operational queries, academic escalations, and smooth daily execution."
    },
    {
      icon: <Clock size={22} />,
      title: "Faculty Hiring Within 72 Hours",
      desc: "Our centralized recruitment desk sources and technically screens qualified instructors for your center within 72 hours."
    },
    {
      icon: <Megaphone size={22} />,
      title: "Centralized Digital Marketing & Leads",
      desc: "Head Office runs localized Google Ads, Meta campaigns, and SEO drives to funnel high-intent student leads directly to your center."
    },
    {
      icon: <FileText size={22} />,
      title: "Updated Curriculum & Study Kits",
      desc: "Modern syllabus aligned with current tech requirements, complete with workbooks, assignment sheets, and test modules."
    },
    {
      icon: <Users size={22} />,
      title: "Batch & Student Management",
      desc: "Guidance on optimal batch timing, teacher-student ratios, lab utilization, and academic timetable scheduling."
    },
    {
      icon: <Building2 size={22} />,
      title: "Corporate & Placement Tie-Ups",
      desc: "Direct access to Thirdeye’s network of 200+ recruiters, pooling your students into statewide placement drives."
    },
    {
      icon: <PlusCircle size={22} />,
      title: "Continuous New Course Additions",
      desc: "Whenever industry demand shifts (AI, Cloud, Cyber), we introduce new verticals without demanding new licensing fees."
    },
    {
      icon: <PhoneCall size={22} />,
      title: "Head Office Audits & Feedback",
      desc: "Senior management visits and regular student feedback calls ensure your branch maintains gold-standard academic ratings."
    },
    {
      icon: <Wrench size={22} />,
      title: "24/7 Technical & Operational Backup",
      desc: "Assistance with lab computer configuration, software licensing, ERP management, and LMS portals."
    },
    {
      icon: <PiggyBank size={22} />,
      title: "Cost Management & Profitability",
      desc: "Guidance on operational expenses, staff payroll optimization, utility budgets, and margin maximization."
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Standardized Quality Delivery",
      desc: "Rigorous instructor onboarding criteria ensuring uniform student satisfaction matching our flagship centers."
    },
    {
      icon: <PackageCheck size={22} />,
      title: "Franchise Onboarding Kit",
      desc: "Complete branded welcome kit: signage artwork, brochures, student folders, certificate templates, and operational SOPs."
    }
  ];

  return (
    <section className="partner-support-section" id="partner-support">
      <div className="partner-support-container">
        {/* Section Header */}
        <div className="support-header-block">
          <div className="support-badge">
            <HeartHandshake size={16} />
            <span>360° OPERATIONAL ECOSYSTEM</span>
          </div>
          <h2 className="support-title">HOW THIRDEYE HELPS YOU GROW</h2>
          <div className="support-motto-pill">
            #Your growth is our priority, because Thirdeye grows only when their partners succeed
          </div>
        </div>

        {/* Feature Highlight: EMI Facilities */}
        <div className="emi-highlight-card">
          <div className="emi-icon-box">
            <CreditCard size={32} />
          </div>
          <div className="emi-content">
            <div className="emi-badge">FINANCIAL ENABLER FOR ENROLLMENTS</div>
            <h3 className="emi-title">Exclusive EMI Facilities Through Partner Banks</h3>
            <p className="emi-desc">
              High course fees never become a barrier to enrollment at your center. We provide instant, low-cost/zero-cost 
              EMI financing for students through our banking and NBFC partners, allowing you to close admissions instantly 
              while receiving upfront tuition credits.
            </p>
          </div>
        </div>

        {/* Support Grid */}
        <div className="support-grid">
          {supportPillars.map((item, idx) => (
            <div key={idx} className="support-card">
              <div className="support-icon-wrap">{item.icon}</div>
              <h3 className="support-card-title">{item.title}</h3>
              <p className="support-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

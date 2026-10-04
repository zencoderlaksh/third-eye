import React, { useRef } from "react";
import "./Franchise.css";

// Components inside components/ folder
import FranchiseHero from "./components/FranchiseHero";
import ExpansionTimeline from "./components/ExpansionTimeline";
import FranchiseCourses from "./components/FranchiseCourses";
import PartnerSupport from "./components/PartnerSupport";
import NetworkCentres from "./components/NetworkCentres";
import PartnerTestimonials from "./components/PartnerTestimonials";
import StepsToStart from "./components/StepsToStart";
import FranchiseInquiryForm from "./components/FranchiseInquiryForm";
import ScrollReveal from "./components/ScrollReveal";

export default function Franchise() {
  const inquiryRef = useRef(null);

  const scrollToInquiry = () => {
    if (inquiryRef.current) {
      inquiryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="franchise-page-wrapper">
      {/* Global Seamless Yellow-Tinted Tech Grid (Same as Home Page) */}
      <div className="franchise-grid-overlay" />

      {/* 1. Hero Section */}
      <ScrollReveal direction="up" delay={20} duration={700}>
        <FranchiseHero onOpenInquiry={scrollToInquiry} />
      </ScrollReveal>
      
      {/* 3. 300+ Courses Portfolio */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <FranchiseCourses />
      </ScrollReveal> 

      
      {/* 2. Expansion Timeline (2023 - 2026) */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <ExpansionTimeline />
      </ScrollReveal>
      
      {/* 5. 10 Running Centres & Phase II Upcoming Hubs */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <NetworkCentres onOpenInquiry={scrollToInquiry} />
      </ScrollReveal>
      

      {/* 4. 360° Partner Support Ecosystem & EMI Facilities */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <PartnerSupport />
      </ScrollReveal>

      

      {/* 6. Partner Testimonials & Reviews (Success Begins Here) */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <PartnerTestimonials />
      </ScrollReveal>


      {/* 10. 6-Step Roadmap to Launch */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <StepsToStart onOpenInquiry={scrollToInquiry} />
      </ScrollReveal>

      {/* 11. Interactive Franchise Application Form & Direct Helpline */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <FranchiseInquiryForm formRef={inquiryRef} />
      </ScrollReveal>
    </div>
  );
}

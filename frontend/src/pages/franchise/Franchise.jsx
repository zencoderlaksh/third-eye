import React, { useRef } from "react";
import "./Franchise.css";

// Components inside components/ folder
import FranchiseHero from "./components/FranchiseHero";
import ExpansionTimeline from "./components/ExpansionTimeline";
import IndustryOverview from "./components/IndustryOverview";
import FranchiseCourses from "./components/FranchiseCourses";
import PartnerSupport from "./components/PartnerSupport";
import PlacementHighlights from "./components/PlacementHighlights";
import RunningCentres from "./components/RunningCentres";
import PartnerTestimonials from "./components/PartnerTestimonials";
import LeadershipTeam from "./components/LeadershipTeam";
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
      {/* 1. Hero Section */}
      <ScrollReveal direction="up" delay={20} duration={700}>
        <FranchiseHero onOpenInquiry={scrollToInquiry} />
      </ScrollReveal>

      {/* 2. Expansion Timeline (2023 - 2026) */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <ExpansionTimeline />
      </ScrollReveal>

      {/* 3. Industry Overview (Why Education is a Smart Investment) */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <IndustryOverview />
      </ScrollReveal>

      {/* 4. 300+ Courses Portfolio */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <FranchiseCourses />
      </ScrollReveal>

      {/* 5. 360° Partner Support Ecosystem & EMI Facilities */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <PartnerSupport />
      </ScrollReveal>

      {/* 6. Placement Drives & Student Hiring Outcomes */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <PlacementHighlights />
      </ScrollReveal>

      {/* 7. Running Centers in Jaipur & Upcoming Rajasthan Hubs */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <RunningCentres />
      </ScrollReveal>

      {/* 8. Partner Testimonials & Reviews */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <PartnerTestimonials />
      </ScrollReveal>

      {/* 9. Leadership Team Behind the Brand */}
      <ScrollReveal direction="up" delay={40} duration={750}>
        <LeadershipTeam />
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

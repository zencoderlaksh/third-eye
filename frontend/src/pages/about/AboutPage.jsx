import React, { useEffect } from "react";
import AboutHero from "./components/AboutHero";
import AboutPhilosophy from "./components/AboutPhilosophy";
import AboutTimeline from "./components/AboutTimeline";
import AboutPillars from "./components/AboutPillars";
import AboutLeadership from "./components/AboutLeadership";
import AboutInfrastructure from "./components/AboutInfrastructure";
import AboutAlumniImpact from "./components/AboutAlumniImpact";
import AboutValues from "./components/AboutValues";
import AboutCTA from "./components/AboutCTA";
import "./AboutPage.css";

export default function AboutPage() {
  useEffect(() => {
    document.title =
      "About Us | The Third Eye Journey - 18+ Years of High-Tech & Creative Computer Education Jaipur";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="about-page-container relative min-h-screen bg-[#050505] text-white selection:bg-[#f6d96b] selection:text-black overflow-x-clip">
      {/* 1. Cinematic Hero Section with Aperture Eye & Quick Navigation */}
      <AboutHero />

      {/* 2. The Genesis & The Meaning of the "Third Eye" (IAF Roots & Vivekananda Philosophy) */}
      <AboutPhilosophy />

      {/* 3. The 18-Year Odyssey Timeline (2008 to 2026+) */}
      <AboutTimeline />

      {/* 4. The 4 Core Architectural Pillars of Pedagogy */}
      <AboutPillars />

      {/* 5. Visionary Leadership & Founders */}
      <AboutLeadership />

      {/* 6. Studio Infrastructure, GPU Labs & 4 Jaipur Campuses */}
      <AboutInfrastructure />

      {/* 7. 25,000+ Alumni Impact, Salaries & Student Transformations */}
      <AboutAlumniImpact />

      {/* 8. The Third Eye Creed & Core Values */}
      <AboutValues />

      {/* 9. Brand Torch Grand Finale & Admissions Walkthrough CTA */}
      <AboutCTA />
    </div>
  );
}

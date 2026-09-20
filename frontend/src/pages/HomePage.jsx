import React, { useEffect, Suspense, lazy } from "react";
import Hero3D from "../components/home/Hero3D";
import InteractiveLearningMethodology from "../components/home/InteractiveLearningMethodology";
import FaqAccordion from "../components/home/FaqAccordion";
import FinalCta3D from "../components/home/FinalCta3D";

// Lazy-loaded components for optimal 60 FPS performance and smooth scrolling
const CyberBentoAdvantage = lazy(() => import("../components/home/CyberBentoAdvantage"));
const PlacementSection = lazy(() => import("../components/home/PlacementSection"));
const ScrollingStudentReviews = lazy(() => import("../components/home/ScrollingStudentReviews"));

// Futuristic Cyber Skeleton Loader for Zero Cumulative Layout Shift (CLS = 0)
function SectionLoadingSkeleton() {
  return (
    <div className="py-24 bg-[#090C16] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border-2 border-yellow-400/30 border-t-yellow-400 animate-spin" />
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Loading Content...
        </span>
      </div>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    // Dynamic page title
    document.title = "Third Eye Computer Classes | Next-Gen 3D Tech Labs & Job Placement";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090C16] text-white selection:bg-yellow-400 selection:text-black scroll-smooth">
      {/* 1. Landing Hero: Master In-Demand Tech Skills (KEPT) */}
      <Hero3D />

      {/* 2. Interactive Practical Learning Methodology (Directly below Hero) */}
      <InteractiveLearningMethodology />

      {/* 3. Mouse-Reactive Cyber Bento Grid: The Third Eye Advantage */}
      <Suspense fallback={<SectionLoadingSkeleton />}>
        <CyberBentoAdvantage />
      </Suspense>

      {/* 4. Dedicated Corporate Placement Cell (Just above Student Reviews) */}
      <Suspense fallback={<SectionLoadingSkeleton />}>
        <PlacementSection />
      </Suspense>

      {/* 5. Infinite Scrolling Student Reviews (Dual-Track with Photos & Feedback) */}
      <Suspense fallback={<SectionLoadingSkeleton />}>
        <ScrollingStudentReviews />
      </Suspense>

      {/* 5. Frequently Asked Questions Accordion (KEPT) */}
      <FaqAccordion />

      {/* 6. High-Voltage Final CTA: Ready To Launch Your Career (KEPT) */}
      <FinalCta3D />
    </div>
  );
}

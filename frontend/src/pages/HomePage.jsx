import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import PlacementStatsMarquee from "../components/home/PlacementStatsMarquee";
import Immersive3DJourneySection from "../components/home/Immersive3DJourneySection";
import CoursesFolderVaultSection from "../components/home/CoursesFolderVaultSection";
import StudioCardsScrollSection from "../components/home/StudioCardsScrollSection";
import MentorsCarouselSection from "../components/home/MentorsCarouselSection";
import FAQSection from "../components/home/FAQSection";
import ScrollReveal from "../components/common/ScrollReveal";

export default function HomePage() {
  useEffect(() => {
    document.title = "Third Eye Computer Classes | Premier 3D Animation, IT & Tech Labs Jaipur";
  }, []);

  return (
    <div className="home-page-container relative min-h-screen bg-[#050505] text-white selection:bg-[#f6d96b] selection:text-black overflow-x-clip">
      {/* Background Ambience: Subtle Tech Grid & Warm Golden Ambient Glows */}
      <style>{`
        .home-page-container {
          background:
            radial-gradient(circle at 18% 12%, rgba(246, 217, 107, 0.08), transparent 30%),
            radial-gradient(circle at 85% 25%, rgba(246, 217, 107, 0.07), transparent 35%),
            radial-gradient(circle at 50% 65%, rgba(246, 217, 107, 0.06), transparent 40%),
            radial-gradient(circle at 20% 90%, rgba(246, 217, 107, 0.05), transparent 40%),
            #050505;
          position: relative;
        }

        .home-page-container::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 45px 45px;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      {/* 1. Hero Section (First Section User Sees) */}
      <ScrollReveal direction="up" duration={800} delay={30}>
        <HeroSection />
      </ScrollReveal>

      {/* 2. Placement Stats & Top Hiring Partners Marquee */}
      <ScrollReveal direction="up" duration={800} delay={50}>
        <PlacementStatsMarquee />
      </ScrollReveal>

      {/* 3. The Converging Hands Journey & Connected Timeline */}
      <Immersive3DJourneySection />

      {/* 4. The 300+ Digital Courses Vault (ReactBits FolderFloat) */}
      <ScrollReveal direction="up" duration={800} delay={50}>
        <CoursesFolderVaultSection />
      </ScrollReveal>

      {/* 5. Studio Immersion 3-Split Image & 3D Card Flip Scrub (Sheryians Kodr style) */}
      <StudioCardsScrollSection />

      {/* 6. Our Expert Faculty — 3D Coverflow Carousel */}
      <MentorsCarouselSection />

      {/* 7. Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SplashCursor from "../components/course/SplashCursor";
import Ballpit from "../components/course/Ballpit";

const courseContent = [
  "Computer Graphics?",
  "Concept of Effects.",
  "Basic Knowledge of Photoshop",
  "How to use GoAnimate Software.",
  "How to Handle animated video editing by Powtoon",
  "Composition Editing by ADOBE AFTER EFFECTS.",
  "CorelDRAW Editing",
  "Knowledge of Movie Maker.",
  "What is Vector Design?",
  "Object & Shapes Creativity.",
  "How to create a GIF Image in Photoshop."
];

const learnings = [
  "Movie Creation",
  "Composition Effects",
  "Graphics Editing",
  "Live Video Editing"
];

const testimonials = [
  {
    name: "Shina Mathur",
    role: "Student (Graphic designing)",
    text: "My Graphic Designing Training from Thirdeye Computer Classes was very helpful . The Trainer Mukesh Sir has extremely good expertise inn the subject. Now that I am able to Make Designs, edit Videos & much More, I am satisfied and it has been an excellent learning experience for me . Now I am fairly confident in my capacity to obtain a good job. Thank you so much Thirdeye team. Definitely recommended."
  },
  {
    name: "Ilmuddin Behlim",
    role: "Student",
    text: "Best coaching in Jaipur.And Faculty are highly experienced and professional. All team members are very supportive and dedicated... highly recommend to join if you want to take any life changing course..."
  },
  {
    name: "Punya Singh",
    role: "Student",
    text: "I learnt React JS from this institute and the experience and mentorship was so efficient that i completed 60% of course in just 25 days and that's a great pleasure for me because more than half of the course was completed before two months. Thank you ThirdEye"
  },
  {
    name: "Shadab Mohammad",
    role: "Student, Thirdeye Computer Classes",
    text: "am doing sql and python programming for Data Analytics course online from Third eye computer class Class is amazing and fruitful , instructor Tanush Mahirchandani is very friendly in teaching. Focuses more on Practical over theories."
  },
  {
    name: "Geet Kashyap",
    role: "Digital Marketing Student",
    text: "I m taking digital marketing course from third eye computer classes. Faculty are highly experienced and professional. All team members are very supportive and dedicated... highly recommend to join if you want to take any life changing course..."
  }
];

const trustedFeatures = [
  "Advanced Syllabus",
  "Live Projects Based",
  "Certified Faculties",
  "International Certifications"
];

const stats = [
  {
    number: "100+",
    label: "Expert Mentors",
    symbol: "✦"
  },
  {
    number: "300+",
    label: "Courses Offered",
    symbol: "◈"
  },
  {
    number: "10,000+",
    label: "Students Trained",
    symbol: "✧"
  },
  {
    number: "11+",
    label: "Branches Worldwide",
    symbol: "◎"
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    title: "Creative Motion",
    small: "01"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    title: "Digital Design",
    small: "02"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    title: "Visual Creation",
    small: "03"
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=85",
    title: "Creative Technology",
    small: "04"
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85",
    title: "Digital Workspace",
    small: "05"
  }
];

const BALLPIT_COLORS = ["#f1c025", "#cfab3b", "#a98d17"];

function TwoDThreeDAnimation() {
  const [activeCourse, setActiveCourse] = useState(0);
  const [activeFeedback, setActiveFeedback] = useState(0);
  const [activeGallery, setActiveGallery] = useState(0);
  const [activeOutcome, setActiveOutcome] = useState(0);
  const [whyActive, setWhyActive] = useState(0);
  const [cursorEnabled, setCursorEnabled] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(pointer:fine)").matches
      : false
  );

  const creativeRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "2D & 3D Animation Course in Jaipur | ThirdEye Computer Classes";

    const handlePointer = () => {
      setCursorEnabled(window.matchMedia("(pointer:fine)").matches);
    };

    window.addEventListener("resize", handlePointer, { passive: true });

    return () => {
      window.removeEventListener("resize", handlePointer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCourse((prev) => (prev + 1) % courseContent.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeedback((prev) => (prev + 1) % testimonials.length);
    }, 4700);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOutcome((prev) => (prev + 1) % learnings.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setWhyActive((prev) => (prev + 1) % trustedFeatures.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (creativeRef.current) {
        const rect = creativeRef.current.getBoundingClientRect();
        const viewport = window.innerHeight;
        if (rect.bottom >= -200 && rect.top <= viewport + 200) {
          const progress = (viewport - rect.top) / (viewport + rect.height);
          const clamped = Math.max(-1, Math.min(1, progress * 2 - 1));
          creativeRef.current.style.setProperty("--parallax", clamped.toFixed(4));
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    updateParallax();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getCourse = (offset) => {
    const index =
      (activeCourse + offset + courseContent.length) %
      courseContent.length;

    return {
      index,
      title: courseContent[index],
      number: String(index + 1).padStart(2, "0")
    };
  };

  const previous = getCourse(-1);
  const current = getCourse(0);
  const next = getCourse(1);
  const nextTwo = getCourse(2);

  return (
    <div className="animation-page">
      {cursorEnabled && (
        <SplashCursor
          TRANSPARENT={true}
          RAINBOW_MODE={false}
          COLOR="#FFD45A"
          SPLAT_FORCE={4200}
          SPLAT_RADIUS={0.18}
          CURL={3}
          SHADING={true}
        />
      )}

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #050605;
        }

        .animation-page {
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(255, 211, 91, 0.11),
              transparent 30%
            ),
            radial-gradient(
              circle at 0% 45%,
              rgba(255, 200, 60, 0.05),
              transparent 30%
            ),
            #050605;
          color: #f8f3df;
          font-family: Arial, Helvetica, sans-serif;
        }

        .animation-page::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.45;
          background-image:
            linear-gradient(
              rgba(255, 210, 86, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 210, 86, 0.04) 1px,
              transparent 1px
            );
          background-size: 75px 75px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 92%
          );
        }

        .page-content {
          position: relative;
          z-index: 2;
        }

        .animation-hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 45%, rgba(255, 210, 80, 0.06), transparent 38%),
            #030303;
          isolation: isolate;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          width: min(1000px, 90%);
          text-align: center;
          padding: 110px 20px 100px;
        }

        .hero-eyebrow {
          margin-bottom: 28px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 9px;
          text-transform: uppercase;
          animation: heroFadeUp 1s ease forwards;
        }

        .hero-eyebrow span {
          color: #ffd45a;
          margin: 0 10px;
        }

        .hero-title {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 0.9;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
        }

        .hero-title span {
          display: block;
          color: #fffaf0;
          font-size: clamp(58px, 8vw, 112px);
          letter-spacing: -4px;
          text-shadow:
            0 0 15px rgba(255, 244, 210, 0.15),
            0 0 35px rgba(255, 210, 80, 0.08);
          animation: titleReveal 1.1s ease forwards;
        }

        .hero-title strong {
          display: block;
          margin-top: 12px;
          color: #ffd45a;
          font-size: clamp(58px, 9vw, 128px);
          font-weight: 700;
          letter-spacing: -5px;
          text-shadow:
            0 0 8px rgba(255, 212, 90, 0.95),
            0 0 22px rgba(255, 196, 55, 0.8),
            0 0 50px rgba(255, 178, 20, 0.55),
            0 0 100px rgba(255, 178, 20, 0.3);
          animation:
            titleReveal 1.2s ease forwards,
            titleGlow 3s ease-in-out 1.2s infinite;
        }

        .hero-subtitle {
          margin: 35px 0 0;
          color: #fff;
          font-size: clamp(18px, 2vw, 25px);
          font-weight: 400;
          letter-spacing: 1px;
          animation: heroFadeUp 1.2s ease 0.2s both;
        }

        .hero-description {
          max-width: 620px;
          margin: 18px auto 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          line-height: 1.8;
          animation: heroFadeUp 1.2s ease 0.35s both;
        }

        .hero-cta {
          position: relative;
          margin-top: 35px;
          padding: 17px 31px;
          border: 1px solid rgba(255, 220, 100, 0.9);
          border-radius: 999px;
          background: #ffd45a;
          color: #080808;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          box-shadow:
            0 0 15px rgba(255, 212, 90, 0.45),
            0 0 35px rgba(255, 190, 40, 0.18);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
          animation: heroFadeUp 1.2s ease 0.5s both;
        }

        .hero-cta::before {
          content: "";
          position: absolute;
          inset: -2px;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.55),
            transparent 75%
          );
          transform: translateX(-120%);
          transition: transform 0.7s ease;
        }

        .hero-cta:hover::before {
          transform: translateX(120%);
        }

        .hero-cta:hover {
          transform: translateY(-4px) scale(1.03);
          box-shadow:
            0 0 20px rgba(255, 212, 90, 0.65),
            0 0 55px rgba(255, 190, 40, 0.3);
        }

        .hero-cta span {
          position: relative;
          margin-left: 12px;
          font-size: 21px;
        }

        .hero-light {
          position: absolute;
          top: 20%;
          width: 5px;
          height: 65%;
          z-index: 1;
          background: #ffd45a;
          box-shadow:
            0 0 8px #ffd45a,
            0 0 25px #ffc928,
            0 0 60px rgba(255, 197, 50, 0.8),
            0 0 120px rgba(255, 180, 20, 0.45);
        }

        .hero-light::before {
          content: "";
          position: absolute;
          top: -5%;
          width: 420px;
          height: 110%;
          opacity: 0.65;
          filter: blur(28px);
        }

        .hero-light::after {
          content: "";
          position: absolute;
          top: 10%;
          width: 600px;
          height: 80%;
          opacity: 0.35;
          filter: blur(55px);
        }

        .hero-light-left {
          left: 5.5%;
        }

        .hero-light-left::before {
          left: 0;
          background: linear-gradient(
            90deg,
            rgba(255, 212, 90, 0.65),
            transparent
          );
        }

        .hero-light-left::after {
          left: -20px;
          background: linear-gradient(
            90deg,
            rgba(255, 185, 30, 0.5),
            transparent
          );
        }

        .hero-light-right {
          right: 5.5%;
        }

        .hero-light-right::before {
          right: 0;
          background: linear-gradient(
            -90deg,
            rgba(255, 212, 90, 0.65),
            transparent
          );
        }

        .hero-light-right::after {
          right: -20px;
          background: linear-gradient(
            -90deg,
            rgba(255, 185, 30, 0.5),
            transparent
          );
        }

        .hero-side-line {
          position: absolute;
          top: 17%;
          width: 17%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 212, 90, 0.45),
            transparent
          );
          opacity: 0.7;
        }

        .hero-side-line-left {
          left: 0;
          transform: rotate(27deg);
          transform-origin: left;
        }

        .hero-side-line-right {
          right: 0;
          transform: rotate(-27deg);
          transform-origin: right;
        }

        .hero-floor-glow {
          position: absolute;
          bottom: -100px;
          left: 50%;
          width: 80%;
          height: 180px;
          transform: translateX(-50%);
          background: radial-gradient(
            ellipse,
            rgba(255, 194, 45, 0.25),
            rgba(255, 194, 45, 0.08) 35%,
            transparent 70%
          );
          filter: blur(25px);
          z-index: 1;
        }

        @keyframes titleReveal {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.94);
            filter: blur(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes titleGlow {
          0%,
          100% {
            text-shadow:
              0 0 8px rgba(255, 212, 90, 0.95),
              0 0 22px rgba(255, 196, 55, 0.8),
              0 0 50px rgba(255, 178, 20, 0.55),
              0 0 100px rgba(255, 178, 20, 0.3);
          }

          50% {
            text-shadow:
              0 0 12px rgba(255, 225, 120, 1),
              0 0 30px rgba(255, 205, 70, 0.95),
              0 0 70px rgba(255, 178, 20, 0.7),
              0 0 130px rgba(255, 178, 20, 0.4);
          }
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          .animation-hero {
            min-height: 82vh;
          }

          .hero-light-left {
            left: 2%;
          }

          .hero-light-right {
            right: 2%;
          }

          .hero-light {
            height: 58%;
          }

          .hero-description {
            max-width: 520px;
          }
        }

        @media (max-width: 600px) {
          .animation-hero {
            min-height: 80vh;
          }

          .hero-content {
            padding: 100px 18px 80px;
          }

          .hero-eyebrow {
            font-size: 10px;
            letter-spacing: 5px;
          }

          .hero-eyebrow span {
            margin: 0 5px;
          }

          .hero-title span {
            letter-spacing: -2px;
          }

          .hero-title strong {
            letter-spacing: -3px;
          }

          .hero-description {
            font-size: 14px;
            line-height: 1.7;
          }

          .hero-light {
            width: 3px;
            top: 25%;
            height: 50%;
          }

          .hero-light-left {
            left: 1%;
          }

          .hero-light-right {
            right: 1%;
          }

          .hero-light::before {
            width: 180px;
          }

          .hero-light::after {
            width: 260px;
          }

          .hero-side-line {
            display: none;
          }
        }

        .section {
          position: relative;
          padding: 90px 7%;
        }

        .section-container {
          max-width: 1380px;
          margin: auto;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 55px;
        }

        .section-label {
          margin-bottom: 12px;
          color: #c9a844;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 3px;
        }

        .section-heading h2 {
          margin: 0;
          color: #fff0b0;
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1;
          letter-spacing: -3px;
          text-shadow: 0 0 25px rgba(255, 210, 86, 0.15);
        }

        .section-heading p {
          max-width: 720px;
          margin: 18px auto 0;
          color: #999587;
          line-height: 1.7;
        }

        .stats-gallery {
          display: flex;
          gap: 15px;
          height: 330px;
        }

        .stat-gallery-card {
          position: relative;
          flex: 1;
          min-width: 0;
          overflow: hidden;
          padding: 28px;
          border-radius: 25px;
          border: 1px solid rgba(255, 211, 91, 0.18);
          background:
            linear-gradient(
              145deg,
              rgba(255, 215, 105, 0.1),
              rgba(8, 9, 7, 0.92)
            );
          box-shadow:
            inset 0 0 35px rgba(255, 210, 86, 0.025),
            0 20px 45px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition:
            flex 0.65s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.45s ease,
            border-color 0.45s ease,
            box-shadow 0.45s ease;
        }

        .stat-gallery-card:hover,
        .stat-gallery-card.active {
          flex: 2.2;
          transform: translateY(-8px);
          border-color: rgba(255, 216, 102, 0.62);
          box-shadow:
            0 0 35px rgba(255, 211, 91, 0.16),
            inset 0 0 40px rgba(255, 211, 91, 0.05);
        }

        .stat-gallery-card::before {
          content: "";
          position: absolute;
          width: 170px;
          height: 170px;
          right: -75px;
          top: -75px;
          border-radius: 50%;
          background: rgba(255, 211, 91, 0.12);
          filter: blur(18px);
        }

        .stat-symbol {
          position: absolute;
          right: 25px;
          top: 23px;
          color: #ffd968;
          font-size: 35px;
          text-shadow: 0 0 20px rgba(255, 211, 91, 0.55);
        }

        .stat-gallery-card .stat-number {
          position: absolute;
          left: 28px;
          bottom: 76px;
          color: #ffe184;
          font-size: 42px;
          font-weight: 950;
          white-space: nowrap;
          text-shadow: 0 0 18px rgba(255, 211, 91, 0.28);
        }

        .stat-gallery-card .stat-label {
          position: absolute;
          left: 28px;
          bottom: 32px;
          color: #c8c2b1;
          font-size: 14px;
          white-space: nowrap;
        }

        .gallery-orbit {
          position: absolute;
          width: 130px;
          height: 130px;
          right: 25px;
          bottom: 35px;
          border: 1px solid rgba(255, 211, 91, 0.15);
          border-radius: 50%;
          animation: slowSpin 12s linear infinite;
        }

        .gallery-orbit::before,
        .gallery-orbit::after {
          content: "";
          position: absolute;
          inset: 20px;
          border: 1px solid rgba(255, 211, 91, 0.12);
          border-radius: 50%;
        }

        .gallery-orbit::after {
          inset: 43px;
        }

        .course-section {
          overflow: hidden;
        }

        .course-slider {
          position: relative;
          max-width: 1200px;
          height: 500px;
          margin: auto;
          perspective: 1400px;
        }

        .course-card {
          position: absolute;
          left: 50%;
          top: 45px;
          width: 450px;
          min-height: 375px;
          padding: 24px;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255, 211, 91, 0.17);
          background:
            linear-gradient(
              145deg,
              rgba(255, 218, 108, 0.11),
              rgba(8, 9, 7, 0.9)
            );
          box-shadow:
            inset 0 0 45px rgba(255, 211, 91, 0.025),
            0 25px 65px rgba(0, 0, 0, 0.45);
          transition:
            transform 0.95s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.75s ease,
            filter 0.75s ease;
        }

        .course-card.active {
          transform: translateX(-50%) scale(1);
          opacity: 1;
          z-index: 5;
          border-color: rgba(255, 221, 118, 0.8);
          animation: courseGlow 2.8s ease-in-out infinite;
        }

        .course-card.next {
          transform: translateX(32%) translateY(30px) scale(0.84)
            rotateY(-8deg);
          opacity: 0.52;
          z-index: 3;
        }

        .course-card.next-two {
          transform: translateX(78%) translateY(65px) scale(0.69)
            rotateY(-13deg);
          opacity: 0.25;
          z-index: 2;
        }

        .course-card.previous {
          transform: translateX(-125%) translateY(35px) scale(0.82)
            rotateY(10deg);
          opacity: 0.16;
          z-index: 1;
        }

        .card-visual {
          height: 170px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 21px;
          border: 1px solid rgba(255, 216, 106, 0.2);
          background:
            radial-gradient(
              circle,
              rgba(255, 213, 91, 0.18),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              rgba(255, 213, 91, 0.08),
              rgba(0, 0, 0, 0.5)
            );
        }

        .card-visual::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 1px solid rgba(255, 213, 91, 0.18);
          animation: visualOrbit 9s linear infinite;
        }

        .card-visual::after {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          border: 1px solid rgba(255, 222, 120, 0.23);
          animation: visualOrbitReverse 7s linear infinite;
        }

        .visual-symbol {
          width: 75px;
          height: 75px;
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 21px;
          border: 1px solid rgba(255, 221, 117, 0.42);
          background: rgba(255, 211, 91, 0.11);
          color: #fff1b1;
          font-size: 26px;
          font-weight: 950;
          box-shadow:
            0 0 30px rgba(255, 211, 91, 0.23),
            inset 0 0 25px rgba(255, 211, 91, 0.08);
        }

        .course-number {
          margin-top: 20px;
          color: #c7a844;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .course-card h3 {
          margin: 8px 0 9px;
          color: #fff0b1;
          font-size: 24px;
          line-height: 1.2;
        }

        .course-card p {
          margin: 0;
          color: #9e9a8d;
          font-size: 14px;
          line-height: 1.6;
        }

        .course-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 10px;
        }

        .course-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4d493c;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .course-dot.active {
          width: 27px;
          border-radius: 20px;
          background: #ffd45a;
          box-shadow: 0 0 15px rgba(255, 211, 91, 0.7);
        }

        .outcome-stage {
          height: 480px;
          max-width: 1100px;
          margin: auto;
          position: relative;
          perspective: 1200px;
        }

        .outcome-card {
          position: absolute;
          width: 390px;
          height: 300px;
          left: 50%;
          top: 50%;
          transform-style: preserve-3d;
          transition:
            transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.7s ease,
            filter 0.7s ease;
        }

        .outcome-card-inner {
          width: 100%;
          height: 100%;
          border-radius: 30px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255, 211, 91, 0.25);
          background:
            linear-gradient(
              145deg,
              rgba(42, 34, 14, 0.98),
              rgba(7, 8, 6, 0.99)
            ),
            #080907;
          box-shadow:
            inset 0 0 45px rgba(255, 211, 91, 0.035),
            0 25px 65px rgba(0, 0, 0, 0.65);
        }

        .outcome-card.active .outcome-card-inner {
          border: 1.5px solid rgba(255, 224, 115, 0.92);
          box-shadow:
            0 0 28px rgba(255, 212, 90, 0.42),
            0 0 65px rgba(255, 190, 40, 0.22),
            0 28px 75px rgba(0, 0, 0, 0.8),
            inset 0 0 50px rgba(255, 211, 91, 0.12);
        }

        .outcome-number {
          color: #c8a846;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .outcome-icon {
          width: 75px;
          height: 75px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          color: #ffe9a3;
          font-size: 30px;
          background: rgba(255, 211, 91, 0.1);
          border: 1px solid rgba(255, 217, 106, 0.3);
          box-shadow: 0 0 25px rgba(255, 211, 91, 0.15);
        }

        .outcome-card h3 {
          margin: 0;
          color: #fff0b0;
          font-size: 27px;
        }

        .outcome-ring {
          position: absolute;
          width: 380px;
          height: 380px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(255, 211, 91, 0.1);
          border-radius: 50%;
          pointer-events: none;
          animation: slowSpin 16s linear infinite;
        }

        .outcome-ring::before,
        .outcome-ring::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255, 211, 91, 0.08);
          border-radius: 50%;
        }

        .outcome-ring::before {
          inset: 45px;
        }

        .outcome-ring::after {
          inset: 90px;
        }

        .creative-section {
          --parallax: 0;
          overflow: hidden;
        }

        .parallax-window {
          position: relative;
          width: 100%;
          height: 510px;
          overflow: hidden;
          border-radius: 32px;
          border: 1px solid rgba(255, 211, 91, 0.16);
          background: #080a07;
          box-shadow:
            inset 0 0 60px rgba(255, 211, 91, 0.025),
            0 30px 80px rgba(0, 0, 0, 0.35);
        }

        .parallax-track {
          position: absolute;
          top: 55px;
          left: -8%;
          display: flex;
          align-items: center;
          gap: 22px;
          width: max-content;
          will-change: transform;
          transform: translate3d(calc(var(--parallax, 0) * -120px), 0, 0);
          transition: transform 0.12s linear;
        }

        .parallax-card {
          --card-offset: calc(var(--parallax, 0) * -18px);
          position: relative;
          width: 390px;
          height: 395px;
          overflow: hidden;
          flex-shrink: 0;
          border-radius: 26px;
          border: 1px solid rgba(255, 211, 91, 0.2);
          background: #0c0d0a;
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(255, 211, 91, 0.05);
          will-change: transform;
          transform: translate3d(0, var(--card-offset), 0);
          transition:
            transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            border-color 0.45s ease;
        }

        .parallax-card:nth-child(even) {
          --card-offset: calc(35px + var(--parallax, 0) * 25px);
        }

        .parallax-card:hover {
          transform: translate3d(0, calc(var(--card-offset) - 12px), 0) scale(1.02);
          border-color: rgba(255, 220, 109, 0.65);
        }

        .parallax-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.7) contrast(1.05);
          transition:
            transform 0.8s ease,
            filter 0.8s ease;
        }

        .parallax-card:hover img {
          transform: scale(1.1);
          filter: saturate(1) contrast(1.05);
        }

        .parallax-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(3, 4, 3, 0.95),
              transparent 55%
            );
        }

        .parallax-info {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 23px;
          z-index: 2;
        }

        .parallax-info small {
          color: #d4ae47;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .parallax-info h3 {
          margin: 7px 0 0;
          color: #fff0ae;
          font-size: 25px;
        }

        .parallax-line {
          position: absolute;
          width: 160px;
          height: 1px;
          left: 50%;
          top: 50%;
          background: #ffd45a;
          box-shadow: 0 0 18px rgba(255, 211, 91, 0.65);
          opacity: 0.5;
        }

        .parallax-line.one {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .parallax-line.two {
          transform: translate(-50%, -50%);
        }

        .feedback-section {
          position: relative;
          overflow: hidden;
        }

        .feedback-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: rgba(255, 204, 73, 0.07);
          filter: blur(100px);
          pointer-events: none;
        }

        .feedback-slider {
          position: relative;
          max-width: 920px;
          min-height: 420px;
          margin: auto;
        }

        .feedback-card {
          position: absolute;
          inset: 0;
          padding: 40px;
          border-radius: 30px;
          border: 1px solid rgba(255, 211, 91, 0.25);
          background:
            linear-gradient(
              145deg,
              rgba(255, 213, 91, 0.1),
              rgba(8, 9, 7, 0.92)
            );
          box-shadow:
            0 0 40px rgba(255, 211, 91, 0.08),
            inset 0 0 50px rgba(255, 211, 91, 0.025);
          opacity: 0;
          transform: translateX(80px) scale(0.95);
          pointer-events: none;
          transition:
            opacity 0.7s ease,
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .feedback-card.active {
          opacity: 1;
          transform: translateX(0) scale(1);
          pointer-events: auto;
        }

        .feedback-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .feedback-user {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .feedback-avatar {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          color: #fff0ad;
          font-size: 20px;
          font-weight: 800;
          background: rgba(255, 210, 84, 0.1);
          border: 1px solid rgba(255, 215, 98, 0.3);
          box-shadow:
            0 0 25px rgba(255, 211, 91, 0.15),
            inset 0 0 20px rgba(255, 211, 91, 0.06);
        }

        .feedback-user h3 {
          margin: 0 0 5px;
          color: #fff0b0;
          font-size: 18px;
        }

        .feedback-user span {
          color: #8f8b7d;
          font-size: 13px;
        }

        .stars {
          color: #ffd15b;
          letter-spacing: 4px;
          text-shadow: 0 0 12px rgba(255, 209, 91, 0.6);
        }

        .feedback-text {
          margin: 40px 0 0;
          color: #c6c1b2;
          font-size: 18px;
          line-height: 1.85;
        }

        .feedback-quote {
          position: absolute;
          right: 35px;
          bottom: 20px;
          color: rgba(255, 211, 91, 0.1);
          font-size: 100px;
          line-height: 1;
          font-weight: 900;
        }

        .feedback-dots {
          display: flex;
          justify-content: center;
          gap: 9px;
          margin-top: 35px;
        }

        .feedback-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4c483d;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .feedback-dot.active {
          width: 28px;
          border-radius: 20px;
          background: #ffd361;
          box-shadow: 0 0 15px rgba(255, 211, 97, 0.7);
        }

        .linear-trusted {
          display: flex;
          gap: 18px;
          overflow: hidden;
          padding: 15px 2px 30px;
        }

        .linear-trusted-card {
          min-width: 310px;
          height: 190px;
          position: relative;
          overflow: hidden;
          padding: 28px;
          border-radius: 25px;
          background:
            linear-gradient(
              145deg,
              #ffe18a,
              #dcae36
            );
          color: #080907;
          border: 1px solid rgba(255, 235, 159, 0.8);
          box-shadow:
            0 20px 45px rgba(0, 0, 0, 0.25),
            inset 0 0 35px rgba(255, 247, 193, 0.25);
          transition: 0.45s ease;
        }

        .linear-trusted-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 0 40px rgba(255, 213, 91, 0.25),
            0 20px 55px rgba(0, 0, 0, 0.3);
        }

        .linear-trusted-card::before {
          content: "";
          position: absolute;
          width: 70%;
          height: 2px;
          left: -80%;
          top: 25px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 0, 0, 0.65),
            transparent
          );
          animation: trustedSweep 3s linear infinite;
        }

        .linear-trusted-card:nth-child(2)::before {
          animation-delay: 0.7s;
        }

        .linear-trusted-card:nth-child(3)::before {
          animation-delay: 1.4s;
        }

        .linear-trusted-card:nth-child(4)::before {
          animation-delay: 2.1s;
        }

        .trusted-index {
          font-size: 11px;
          font-weight: 950;
          opacity: 0.5;
          letter-spacing: 3px;
        }

        .trusted-icon {
          position: absolute;
          right: 25px;
          top: 22px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .linear-trusted-card h3 {
          position: absolute;
          left: 28px;
          bottom: 28px;
          margin: 0;
          max-width: 230px;
          font-size: 21px;
          line-height: 1.25;
        }

        .why-section {
          overflow: hidden;
        }

        .why-stack {
          height: 500px;
          max-width: 1100px;
          margin: auto;
          position: relative;
          perspective: 1400px;
          transform-style: preserve-3d;
        }

        .why-orbit-ring {
          position: absolute;
          width: 430px;
          height: 430px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotateX(68deg);
          border-radius: 50%;
          border: 1px dashed rgba(255, 212, 90, 0.28);
          box-shadow:
            0 0 40px rgba(255, 212, 90, 0.08),
            inset 0 0 40px rgba(255, 212, 90, 0.08);
          pointer-events: none;
          animation: whyOrbitSpin 16s linear infinite;
        }

        .why-orbit-ring.reverse {
          width: 620px;
          height: 620px;
          border-style: solid;
          border-color: rgba(255, 212, 90, 0.12);
          animation: whyOrbitSpinReverse 24s linear infinite;
        }

        @keyframes whyOrbitSpin {
          from {
            transform: translate(-50%, -50%) rotateX(68deg) rotateZ(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotateX(68deg) rotateZ(360deg);
          }
        }

        @keyframes whyOrbitSpinReverse {
          from {
            transform: translate(-50%, -50%) rotateX(68deg) rotateZ(360deg);
          }
          to {
            transform: translate(-50%, -50%) rotateX(68deg) rotateZ(0deg);
          }
        }

        .why-card {
          position: absolute;
          width: 480px;
          height: 320px;
          left: 50%;
          top: 50%;
          padding: 32px;
          border-radius: 30px;
          border: 1px solid rgba(255, 211, 91, 0.16);
          background:
            linear-gradient(
              145deg,
              rgba(26, 22, 11, 0.98),
              rgba(7, 8, 6, 0.99)
            ),
            #080907;
          box-shadow:
            0 25px 65px rgba(0, 0, 0, 0.7),
            inset 0 0 40px rgba(255, 211, 91, 0.02);
          cursor: pointer;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          transition:
            transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.75s ease,
            filter 0.75s ease,
            border-color 0.5s ease,
            box-shadow 0.5s ease,
            background 0.5s ease;
        }

        .why-card:not(.active) h3,
        .why-card:not(.active) p,
        .why-card:not(.active) .why-card-number {
          opacity: 0.45;
        }

        .why-card.active {
          background:
            linear-gradient(
              145deg,
              rgba(56, 44, 15, 0.99),
              rgba(9, 10, 8, 1)
            ),
            #090a08;
          border: 1.5px solid rgba(255, 224, 115, 0.95);
          box-shadow:
            0 0 30px rgba(255, 212, 90, 0.48),
            0 0 80px rgba(255, 190, 40, 0.26),
            0 30px 85px rgba(0, 0, 0, 0.88),
            inset 0 0 50px rgba(255, 212, 90, 0.14);
        }

        .why-card.active h3 {
          color: #fff7cf;
          text-shadow:
            0 0 14px rgba(255, 212, 90, 0.45),
            0 0 32px rgba(255, 190, 40, 0.22);
        }

        .why-card-rotor {
          position: absolute;
          right: 28px;
          top: 26px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px dashed rgba(255, 212, 90, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffd45a;
          font-size: 18px;
          box-shadow: 0 0 18px rgba(255, 212, 90, 0.15);
          animation: slowSpin 9s linear infinite;
        }

        .why-card.active .why-card-rotor {
          border-style: solid;
          border-color: rgba(255, 212, 90, 0.85);
          box-shadow: 0 0 24px rgba(255, 212, 90, 0.38);
          animation-duration: 5s;
        }

        .why-card-number {
          color: #c7a744;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .why-card-line {
          width: 75px;
          height: 1px;
          margin-top: 25px;
          background: #ffd45a;
          box-shadow: 0 0 12px rgba(255, 211, 91, 0.7);
        }

        .why-card h3 {
          margin: 30px 0 10px;
          color: #fff0b1;
          font-size: 29px;
        }

        .why-card p {
          margin: 0;
          max-width: 350px;
          color: #9f9a8c;
          line-height: 1.7;
        }

        .why-controls {
          display: flex;
          justify-content: center;
          gap: 9px;
          margin-top: 15px;
        }

        .why-control {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4b473b;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .why-control.active {
          width: 28px;
          border-radius: 20px;
          background: #ffd45a;
          box-shadow: 0 0 15px rgba(255, 211, 91, 0.7);
        }

        .help-card {
          max-width: 1100px;
          min-height: 440px;
          margin: auto;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 55px;
          border-radius: 32px;
          border: 1.5px solid rgba(255, 212, 90, 0.55);
          background:
            radial-gradient(
              circle at 75% 50%,
              rgba(241, 192, 37, 0.16),
              transparent 55%
            ),
            linear-gradient(
              135deg,
              rgba(22, 18, 9, 0.96),
              rgba(7, 8, 6, 0.98)
            );
          color: #fff6d1;
          box-shadow:
            0 0 45px rgba(255, 210, 79, 0.2),
            0 25px 75px rgba(0, 0, 0, 0.75),
            inset 0 0 50px rgba(255, 212, 90, 0.08);
        }

        .help-content {
          position: relative;
          z-index: 3;
          padding: 32px 36px;
          border-radius: 24px;
          background: rgba(8, 9, 7, 0.72);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 212, 90, 0.28);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.55);
        }

        .help-content small {
          color: #ffd45a;
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0.9;
        }

        .help-content h2 {
          margin: 10px 0 12px;
          color: #fff6d1;
          font-size: clamp(38px, 5vw, 60px);
          letter-spacing: -2px;
          text-shadow: 0 0 20px rgba(255, 212, 90, 0.35);
        }

        .help-content p {
          margin: 0;
          color: rgba(255, 246, 209, 0.78);
          line-height: 1.6;
        }

        .help-button {
          position: relative;
          z-index: 4;
          flex-shrink: 0;
          padding: 17px 25px;
          border-radius: 14px;
          background: #ffd45a;
          color: #080907;
          text-decoration: none;
          font-weight: 900;
          transition: 0.35s ease;
          box-shadow:
            0 0 25px rgba(255, 212, 90, 0.35);
        }

        .help-button:hover {
          transform: translateY(-5px);
          box-shadow:
            0 0 35px rgba(255, 212, 90, 0.65),
            0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .ball-pit {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ball {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at 32% 25%,
            #fff1a6,
            #ffd65c 40%,
            #d39e21 100%
          );
          box-shadow:
            0 0 15px rgba(255, 212, 84, 0.45),
            inset -5px -7px 12px rgba(120, 80, 0, 0.15);
          animation: ballFloat 3.5s ease-in-out infinite;
        }

        .ball:nth-child(2n) {
          background: radial-gradient(
            circle at 32% 25%,
            #fff4bd,
            #f3c748 40%,
            #c28c18 100%
          );
        }

        .ball:nth-child(3n) {
          background: radial-gradient(
            circle at 32% 25%,
            #ffe998,
            #e8b83e 40%,
            #b77d13 100%
          );
        }

        @keyframes inflateText {
          0%,
          100% {
            transform: scale(1);
            letter-spacing: -6px;
          }

          45% {
            transform: scale(1.035, 1.06);
            letter-spacing: -4px;
          }

          65% {
            transform: scale(0.99, 1.01);
            letter-spacing: -5px;
          }
        }

        @keyframes ringPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.85);
            opacity: 0.4;
          }

          50% {
            transform: translate(-50%, -50%) scale(1.25);
            opacity: 0.9;
          }
        }

        @keyframes rayLeft {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0.35;
          }

          50% {
            transform: translateX(-25px);
            opacity: 1;
          }
        }

        @keyframes rayRight {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0.35;
          }

          50% {
            transform: translateX(25px);
            opacity: 1;
          }
        }

        @keyframes pillFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes pulseDot {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.45);
          }
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }

          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }

        @keyframes orbitDecoration {
          from {
            transform: rotate(45deg);
          }

          to {
            transform: rotate(405deg);
          }
        }

        @keyframes floatDecoration {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes lineMove {
          0%,
          100% {
            transform: translateX(-20px);
            opacity: 0.25;
          }

          50% {
            transform: translateX(60px);
            opacity: 1;
          }
        }

        @keyframes lineMoveReverse {
          0%,
          100% {
            transform: translateX(20px);
            opacity: 0.25;
          }

          50% {
            transform: translateX(-60px);
            opacity: 1;
          }
        }

        @keyframes courseGlow {
          0%,
          100% {
            box-shadow:
              0 0 30px rgba(255, 211, 91, 0.17),
              0 25px 65px rgba(0, 0, 0, 0.45),
              inset 0 0 45px rgba(255, 211, 91, 0.04);
          }

          50% {
            box-shadow:
              0 0 50px rgba(255, 211, 91, 0.3),
              0 0 110px rgba(255, 190, 45, 0.12),
              0 25px 65px rgba(0, 0, 0, 0.45),
              inset 0 0 65px rgba(255, 211, 91, 0.08);
          }
        }

        @keyframes visualOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes visualOrbitReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes slowSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes trustedSweep {
          0% {
            left: -80%;
          }

          100% {
            left: 120%;
          }
        }

        @keyframes ballFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(8deg);
          }
        }

        @media (max-width: 950px) {
          .stats-gallery {
            height: 290px;
          }

          .parallax-card {
            width: 330px;
          }

          .why-card {
            width: 430px;
          }

          .help-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .ball-pit {
            width: 100%;
            opacity: 0.75;
          }
        }

        @media (max-width: 650px) {
          .section {
            padding: 65px 5%;
          }

          .stats-gallery {
            height: auto;
            flex-direction: column;
          }

          .stat-gallery-card,
          .stat-gallery-card:hover,
          .stat-gallery-card.active {
            height: 160px;
            flex: none;
            transform: none;
          }

          .stat-gallery-card .stat-number {
            bottom: 62px;
          }

          .stat-gallery-card .stat-label {
            bottom: 25px;
          }

          .course-slider {
            height: 475px;
          }

          .course-card {
            width: calc(100vw - 42px);
            min-height: 365px;
          }

          .course-card.next {
            transform: translateX(8%) translateY(30px) scale(0.82);
            opacity: 0.3;
          }

          .course-card.next-two,
          .course-card.previous {
            display: none;
          }

          .outcome-stage {
            height: 400px;
          }

          .outcome-card {
            width: calc(100vw - 55px);
            height: 280px;
          }

          .outcome-ring {
            width: 280px;
            height: 280px;
          }

          .parallax-window {
            height: 430px;
          }

          .parallax-card {
            width: 285px;
            height: 330px;
          }

          .feedback-card {
            padding: 28px;
          }

          .feedback-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .feedback-text {
            margin-top: 28px;
            font-size: 16px;
          }

          .linear-trusted {
            overflow-x: auto;
            scrollbar-width: none;
          }

          .linear-trusted::-webkit-scrollbar {
            display: none;
          }

          .linear-trusted-card {
            min-width: 280px;
          }

          .why-stack {
            height: 420px;
          }

          .why-card {
            width: calc(100vw - 45px);
            height: 290px;
            padding: 27px;
          }

          .why-card h3 {
            font-size: 24px;
          }

          .help-card {
            padding: 35px 28px;
          }

          .ball-pit {
            width: 100%;
            opacity: 0.65;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>

      <div className="page-content">
        <section className="animation-hero">
          <div className="hero-light hero-light-left"></div>
          <div className="hero-light hero-light-right"></div>

          <div className="hero-side-line hero-side-line-left"></div>
          <div className="hero-side-line hero-side-line-right"></div>

          <div className="hero-content">
            <div className="hero-eyebrow">
              LEARN <span>•</span> CREATE <span>•</span> MASTER
            </div>

            <h1 className="hero-title">
              <span>2D & 3D</span>
              <strong>ANIMATION</strong>
            </h1>

            <p className="hero-subtitle">
              2D & 3D Animation Course in Jaipur
            </p>

            <p className="hero-description">
              Build your creative skills, master animation tools and bring
              your ideas to life with practical learning.
            </p>

            <button
              className="hero-cta"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth"
                })
              }
            >
              Explore Course
              <span>→</span>
            </button>
          </div>

          <div className="hero-floor-glow"></div>
        </section>

        <section className="section">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">
                ThirdEye Learning Network
              </div>
              <h2>Meet The Numbers</h2>
              <p>
                Explore the learning network.
              </p>
            </div>

            <div className="stats-gallery">
              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`stat-gallery-card ${
                    activeGallery === index ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveGallery(index)}
                  onClick={() => setActiveGallery(index)}
                >
                  <div className="stat-symbol">
                    {item.symbol}
                  </div>

                  <div className="gallery-orbit"></div>

                  <div className="stat-number">
                    {item.number}
                  </div>

                  <div className="stat-label">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section course-section"
          id="course-content"
        >
          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">
                Course Content
              </div>

              <h2>Explore 2D & 3D Animation</h2>

              <p>
                Explore the complete course content through an interactive
                learning experience.
              </p>
            </div>

            <div className="course-slider">
              <div
                className="course-card previous"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setActiveCourse(
                    (activeCourse - 1 + courseContent.length) %
                      courseContent.length
                  )
                }
              >
                <div className="card-visual">
                  <div className="visual-symbol">
                    {previous.number}
                  </div>
                </div>

                <div className="course-number">
                  MODULE {previous.number}
                </div>

                <h3>{previous.title}</h3>

                <p>
                  Explore this part of the course through practical learning
                  and creative application.
                </p>
              </div>

              <div className="course-card active">
                <div className="card-visual">
                  <div className="visual-symbol">
                    {current.number}
                  </div>
                </div>

                <div className="course-number">
                  MODULE {current.number}
                </div>

                <h3>{current.title}</h3>

                <p>
                  Explore this part of the course through practical learning
                  and creative application.
                </p>
              </div>

              <div
                className="course-card next"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setActiveCourse(
                    (activeCourse + 1) % courseContent.length
                  )
                }
              >
                <div className="card-visual">
                  <div className="visual-symbol">
                    {next.number}
                  </div>
                </div>

                <div className="course-number">
                  MODULE {next.number}
                </div>

                <h3>{next.title}</h3>

                <p>
                  Explore this part of the course through practical learning
                  and creative application.
                </p>
              </div>

              <div
                className="course-card next-two"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setActiveCourse(
                    (activeCourse + 2) % courseContent.length
                  )
                }
              >
                <div className="card-visual">
                  <div className="visual-symbol">
                    {nextTwo.number}
                  </div>
                </div>

                <div className="course-number">
                  MODULE {nextTwo.number}
                </div>

                <h3>{nextTwo.title}</h3>

                <p>
                  Explore this part of the course through practical learning
                  and creative application.
                </p>
              </div>
            </div>

            <div className="course-dots">
              {courseContent.map((_, index) => (
                <div
                  key={index}
                  className={`course-dot ${
                    activeCourse === index ? "active" : ""
                  }`}
                  onClick={() => setActiveCourse(index)}
                ></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">
                Learning Outcomes
              </div>

              <h2>What You Will Explore</h2>

              <p>
                Discover the learning outcomes .
              </p>
            </div>

            <div className="outcome-stage">
              <div className="outcome-ring"></div>

              {learnings.map((item, index) => {
                const relative =
                  (index - activeOutcome + learnings.length) %
                  learnings.length;

                let transform = "";
                let opacity = 1;
                let zIndex = 2;
                let filter = "none";

                if (relative === 0) {
                  transform =
                    "translate3d(-50%, -50%, 0) rotateY(0deg) scale(1)";
                  zIndex = 5;
                } else if (relative === 1) {
                  transform =
                    "translate3d(calc(-50% + 295px), -50%, 0) rotateY(-35deg) scale(.78)";
                  opacity = 0.45;
                  zIndex = 3;
                  filter = "blur(2px) brightness(0.68)";
                } else if (relative === 2) {
                  transform =
                    "translate3d(-50%, -50%, -180px) rotateY(180deg) scale(.7)";
                  opacity = 0.18;
                  zIndex = 1;
                  filter = "blur(3px) brightness(0.5)";
                } else {
                  transform =
                    "translate3d(calc(-50% - 295px), -50%, 0) rotateY(35deg) scale(.78)";
                  opacity = 0.45;
                  zIndex = 3;
                  filter = "blur(2px) brightness(0.68)";
                }

                return (
                  <div
                    key={item}
                    className={`outcome-card ${
                      relative === 0 ? "active" : ""
                    }`}
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      filter,
                      willChange: "transform, opacity"
                    }}
                    onClick={() => setActiveOutcome(index)}
                  >
                    <div className="outcome-card-inner">
                      <div className="outcome-number">
                        OUTCOME {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="outcome-icon">
                        {["✦", "◈", "✧", "◎"][index]}
                      </div>

                      <h3>{item}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="section creative-section"
          ref={creativeRef}
        >
          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">
                Creative Space
              </div>

              <h2>Enter The Creative Zone</h2>

              <p>
                explore the creative space.
              </p>
            </div>

            <div className="parallax-window">
              <div className="parallax-line one"></div>
              <div className="parallax-line two"></div>

              <div className="parallax-track">
                {galleryImages.map((image) => (
                  <div
                    className="parallax-card"
                    key={image.title}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="parallax-overlay"></div>

                    <div className="parallax-info">
                      <small>{image.small}</small>
                      <h3>{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section feedback-section">
          <div className="feedback-glow"></div>

          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">
                Hear From Our Students
              </div>

              <h2>Student Feedback</h2>

              <p>
                We help students upskill & grow their career in the most
                comprehensive way possible.
              </p>
            </div>

            <div className="feedback-slider">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`feedback-card ${
                    index === activeFeedback ? "active" : ""
                  }`}
                >
                  <div className="feedback-top">
                    <div className="feedback-user">
                      <div className="feedback-avatar">
                        {testimonial.name.charAt(0)}
                      </div>

                      <div>
                        <h3>{testimonial.name}</h3>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>

                    <div className="stars">
                      ★★★★★
                    </div>
                  </div>

                  <p className="feedback-text">
                    {testimonial.text}
                  </p>

                  <div className="feedback-quote">
                    “
                  </div>
                </div>
              ))}
            </div>

            <div className="feedback-dots">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`feedback-dot ${
                    index === activeFeedback ? "active" : ""
                  }`}
                  onClick={() => setActiveFeedback(index)}
                ></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">
                Trusted By Big Companies
              </div>

              <h2>Built Around Better Learning</h2>

              <p>
                Explore the learning network.
              </p>
            </div>

            <div className="linear-trusted">
              {trustedFeatures.map((feature, index) => (
                <div
                  className="linear-trusted-card"
                  key={feature}
                >
                  <div className="trusted-index">
                    0{index + 1}
                  </div>

                  <div className="trusted-icon">
                    {["✦", "↗", "✓", "◆"][index]}
                  </div>

                  <h3>{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">
                Why Learn With Us
              </div>

              <h2>Learning That Keeps Moving</h2>

              <p>
                A 3D rotating orbital card interaction keeps the
                section dynamic while preserving the original information.
              </p>
            </div>

            <div className="why-stack">
              <div className="why-orbit-ring"></div>
              <div className="why-orbit-ring reverse"></div>

              {trustedFeatures.map((feature, index) => {
                const relative =
                  (index - whyActive + trustedFeatures.length) %
                  trustedFeatures.length;

                let transform = "";
                let opacity = 1;
                let filter = "none";
                let zIndex = 2;

                if (relative === 0) {
                  transform =
                    "translate(-50%, -50%) translate3d(0px, 15px, 120px) rotateY(0deg) rotateX(0deg) rotateZ(0deg) scale(1)";
                  zIndex = 5;
                } else if (relative === 1) {
                  transform =
                    "translate(-50%, -50%) translate3d(340px, 0px, -70px) rotateY(-40deg) rotateX(6deg) rotateZ(8deg) scale(0.84)";
                  opacity = 0.45;
                  filter = "blur(2px) brightness(0.65)";
                  zIndex = 3;
                } else if (relative === 2) {
                  transform =
                    "translate(-50%, -50%) translate3d(0px, -75px, -220px) rotateY(0deg) rotateX(18deg) rotateZ(0deg) scale(0.7)";
                  opacity = 0.2;
                  filter = "blur(3px) brightness(0.5)";
                  zIndex = 1;
                } else {
                  transform =
                    "translate(-50%, -50%) translate3d(-340px, 0px, -70px) rotateY(40deg) rotateX(6deg) rotateZ(-8deg) scale(0.84)";
                  opacity = 0.45;
                  filter = "blur(2px) brightness(0.65)";
                  zIndex = 3;
                }

                return (
                  <div
                    key={feature}
                    className={`why-card ${
                      relative === 0 ? "active" : ""
                    }`}
                    style={{
                      transform,
                      opacity,
                      filter,
                      zIndex,
                      willChange: "transform, opacity"
                    }}
                    onClick={() => setWhyActive(index)}
                  >
                    <div className="why-card-rotor">
                      {["✦", "◈", "✧", "◎"][index]}
                    </div>

                    <div className="why-card-number">
                      WHY LEARN WITH US · 0{index + 1}
                    </div>

                    <div className="why-card-line"></div>

                    <h3>{feature}</h3>

                    <p>
                      Experience this part of the ThirdEye learning
                      environment through a more interactive presentation.
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="why-controls">
              {trustedFeatures.map((_, index) => (
                <div
                  key={index}
                  className={`why-control ${
                    whyActive === index ? "active" : ""
                  }`}
                  onClick={() => setWhyActive(index)}
                ></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-container">
            <div className="help-card">
              <div className="help-content">
                <small>Need Help?</small>

                <h2>Need Help?</h2>

                <p>
                  Connect with us & know what's the best
                </p>

                <div style={{ marginTop: "25px" }}>
                  <Link
                    to="/contact-us"
                    className="help-button"
                  >
                    Connect With Us →
                  </Link>
                </div>
              </div>

              <div className="ball-pit">
                <div style={{ width: "100%", height: "100%", position: "relative" }}>
                  <Ballpit
                    count={75}
                    gravity={0.5}
                    friction={0.9975}
                    wallBounce={0.95}
                    followCursor
                    colors={BALLPIT_COLORS}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TwoDThreeDAnimation;
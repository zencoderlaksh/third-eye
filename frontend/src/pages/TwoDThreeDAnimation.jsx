import React, { useEffect, useState } from "react";

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

const visualImages = [
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=80"
];

function TwoDThreeDAnimation() {
  const [activeCourse, setActiveCourse] = useState(0);
  const [activeFeedback, setActiveFeedback] = useState(0);

  useEffect(() => {
    const courseTimer = setInterval(() => {
      setActiveCourse((prev) => (prev + 1) % courseContent.length);
    }, 2600);

    return () => clearInterval(courseTimer);
  }, []);

  useEffect(() => {
    const feedbackTimer = setInterval(() => {
      setActiveFeedback((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(feedbackTimer);
  }, []);

  const getCourseCard = (offset) => {
    const index =
      (activeCourse + offset + courseContent.length) % courseContent.length;

    return {
      index,
      title: courseContent[index],
      number: String(index + 1).padStart(2, "0")
    };
  };

  const activeCard = getCourseCard(0);
  const nextCard = getCourseCard(1);
  const nextTwoCard = getCourseCard(2);
  const previousCard = getCourseCard(-1);

  return (
    <div className="course-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #070806;
        }

        .course-page {
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(circle at 50% 8%, rgba(255, 202, 73, 0.13), transparent 27%),
            radial-gradient(circle at 10% 55%, rgba(255, 194, 54, 0.06), transparent 28%),
            radial-gradient(circle at 90% 75%, rgba(255, 210, 100, 0.05), transparent 30%),
            #070806;
          color: #f8f3df;
          font-family: Arial, Helvetica, sans-serif;
        }

        .course-page::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.42;
          background-image:
            linear-gradient(rgba(255, 207, 92, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 207, 92, 0.045) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: linear-gradient(to bottom, black, transparent 92%);
          z-index: 0;
        }

        .course-page::after {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, transparent 0%, rgba(255, 213, 103, 0.035) 50%, transparent 100%);
          z-index: 0;
        }

        .page-inner {
          position: relative;
          z-index: 1;
        }

        .hero {
          min-height: 650px;
          padding: 105px 7% 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
        }

        .hero-grid {
          width: 100%;
          max-width: 1350px;
          position: relative;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 18px;
          border: 1px solid rgba(255, 207, 92, 0.4);
          border-radius: 14px;
          background: rgba(255, 202, 73, 0.045);
          color: #f7ca55;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.8px;
          box-shadow:
            0 0 25px rgba(255, 202, 73, 0.12),
            inset 0 0 20px rgba(255, 202, 73, 0.035);
          animation: pillGlow 3s ease-in-out infinite;
        }

        .hero-pill::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ffd45f;
          box-shadow: 0 0 12px #ffd45f, 0 0 25px rgba(255, 212, 95, 0.7);
        }

        .hero-dots {
          display: flex;
          justify-content: center;
          gap: 13px;
          margin: 30px 0 22px;
        }

        .hero-dots span {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #ffd15b;
          box-shadow:
            0 0 8px #ffd15b,
            0 0 22px rgba(255, 209, 91, 0.75);
          animation: dotPulse 2s ease-in-out infinite;
        }

        .hero-dots span:nth-child(2) {
          animation-delay: 0.25s;
        }

        .hero-dots span:nth-child(3) {
          animation-delay: 0.5s;
        }

        .hero-title-wrap {
          position: relative;
          display: inline-block;
          padding: 0 70px;
        }

        .hero-title-wrap::before,
        .hero-title-wrap::after {
          content: "";
          position: absolute;
          top: 50%;
          width: 55px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            #ffd15b
          );
          box-shadow: 0 0 12px rgba(255, 209, 91, 0.8);
        }

        .hero-title-wrap::before {
          right: 100%;
        }

        .hero-title-wrap::after {
          left: 100%;
          transform: rotate(180deg);
        }

        .hero-title {
          margin: 0;
          font-size: clamp(54px, 8vw, 112px);
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -5px;
          color: #ffe18a;
          text-shadow:
            0 0 8px rgba(255, 225, 138, 0.45),
            0 0 25px rgba(255, 202, 73, 0.28),
            0 0 55px rgba(255, 202, 73, 0.13);
          animation: titleFloat 4s ease-in-out infinite;
        }

        .hero-title span {
          background: linear-gradient(
            180deg,
            #fff1ae 0%,
            #ffd86a 45%,
            #dba92f 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-subtitle {
          margin: 25px auto 0;
          max-width: 820px;
          color: #ddd7c4;
          font-size: clamp(18px, 2vw, 25px);
          line-height: 1.5;
        }

        .hero-subtitle strong {
          color: #ffe083;
        }

        .hero-decoration {
          position: absolute;
          width: 150px;
          height: 150px;
          border: 1px solid rgba(255, 209, 91, 0.14);
          border-radius: 28px;
          transform: rotate(45deg);
          pointer-events: none;
        }

        .hero-decoration.left {
          left: -65px;
          top: 150px;
        }

        .hero-decoration.right {
          right: -65px;
          bottom: 90px;
        }

        .section {
          padding: 85px 7%;
          position: relative;
        }

        .section-container {
          max-width: 1350px;
          margin: 0 auto;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 55px;
        }

        .section-label {
          color: #dcb451;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 12px;
        }

        .section-heading h2 {
          margin: 0;
          color: #fff0b1;
          font-size: clamp(36px, 5vw, 65px);
          line-height: 1;
          letter-spacing: -2px;
          text-shadow: 0 0 25px rgba(255, 209, 91, 0.18);
        }

        .section-heading p {
          max-width: 700px;
          margin: 18px auto 0;
          color: #989484;
          line-height: 1.7;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .stat-card {
          min-height: 160px;
          position: relative;
          overflow: hidden;
          padding: 28px;
          border: 1px solid rgba(255, 209, 91, 0.2);
          border-radius: 22px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 213, 104, 0.09),
              rgba(255, 255, 255, 0.015)
            );
          box-shadow:
            inset 0 0 30px rgba(255, 209, 91, 0.025),
            0 12px 40px rgba(0, 0, 0, 0.25);
          transition: 0.45s ease;
        }

        .stat-card::before {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          right: -40px;
          top: -40px;
          border-radius: 50%;
          background: rgba(255, 211, 91, 0.12);
          filter: blur(15px);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 216, 106, 0.6);
          box-shadow:
            0 0 30px rgba(255, 209, 91, 0.12),
            inset 0 0 30px rgba(255, 209, 91, 0.05);
        }

        .stat-number {
          color: #ffdc72;
          font-size: 42px;
          font-weight: 900;
          text-shadow: 0 0 18px rgba(255, 210, 85, 0.35);
        }

        .stat-label {
          margin-top: 8px;
          color: #d7d2c2;
          font-size: 15px;
        }

        .course-section {
          overflow: hidden;
        }

        .course-slider {
          height: 480px;
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          perspective: 1300px;
        }

        .course-card {
          position: absolute;
          width: 440px;
          min-height: 360px;
          left: 50%;
          top: 45px;
          padding: 25px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 210, 86, 0.16);
          background:
            linear-gradient(
              145deg,
              rgba(255, 220, 120, 0.11),
              rgba(10, 10, 8, 0.82)
            );
          box-shadow:
            inset 0 0 40px rgba(255, 211, 91, 0.025),
            0 25px 70px rgba(0, 0, 0, 0.45);
          transition:
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.7s ease,
            filter 0.7s ease,
            box-shadow 0.7s ease;
          transform-style: preserve-3d;
        }

        .course-card::before {
          content: "";
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(255, 210, 86, 0.08);
          border-radius: 20px;
          pointer-events: none;
        }

        .course-card::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          left: 50%;
          top: -100px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(255, 208, 78, 0.12);
          filter: blur(35px);
          pointer-events: none;
        }

        .course-card.active {
          transform: translateX(-50%) translateY(0) scale(1);
          opacity: 1;
          z-index: 5;
          border-color: rgba(255, 218, 108, 0.8);
          background:
            linear-gradient(
              145deg,
              rgba(255, 213, 91, 0.2),
              rgba(10, 10, 8, 0.88)
            );
          box-shadow:
            0 0 0 1px rgba(255, 215, 95, 0.08),
            0 0 35px rgba(255, 211, 91, 0.23),
            0 0 100px rgba(255, 190, 45, 0.12),
            inset 0 0 55px rgba(255, 210, 86, 0.055);
          animation: activeCardGlow 2.6s ease-in-out infinite;
        }

        .course-card.next {
          transform: translateX(30%) translateY(30px) scale(0.84) rotateY(-8deg);
          opacity: 0.55;
          z-index: 3;
          filter: saturate(0.7);
        }

        .course-card.next-two {
          transform: translateX(76%) translateY(65px) scale(0.7) rotateY(-13deg);
          opacity: 0.28;
          z-index: 2;
          filter: blur(0.5px) saturate(0.55);
        }

        .course-card.previous {
          transform: translateX(-125%) translateY(35px) scale(0.82) rotateY(10deg);
          opacity: 0.2;
          z-index: 1;
        }

        .card-visual {
          height: 165px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          border: 1px solid rgba(255, 216, 103, 0.2);
          background:
            radial-gradient(circle at 50% 45%, rgba(255, 213, 91, 0.18), transparent 25%),
            linear-gradient(
              135deg,
              rgba(255, 213, 91, 0.09),
              rgba(0, 0, 0, 0.5)
            );
        }

        .card-visual::before {
          content: "";
          position: absolute;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          border: 1px solid rgba(255, 213, 91, 0.15);
          box-shadow:
            0 0 25px rgba(255, 210, 80, 0.12),
            inset 0 0 25px rgba(255, 210, 80, 0.08);
        }

        .card-visual::after {
          content: "";
          position: absolute;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          border: 1px solid rgba(255, 222, 120, 0.22);
          box-shadow: 0 0 35px rgba(255, 213, 91, 0.18);
        }

        .visual-symbol {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          border-radius: 20px;
          color: #fff0ae;
          font-size: 28px;
          font-weight: 900;
          background: rgba(255, 211, 91, 0.12);
          border: 1px solid rgba(255, 218, 106, 0.35);
          box-shadow:
            0 0 25px rgba(255, 210, 83, 0.22),
            inset 0 0 20px rgba(255, 210, 83, 0.08);
        }

        .course-number {
          margin-top: 22px;
          color: #c9a744;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .course-card h3 {
          margin: 9px 0 10px;
          color: #fff0b1;
          font-size: 25px;
          line-height: 1.2;
        }

        .course-card p {
          margin: 0;
          color: #aaa596;
          line-height: 1.6;
          font-size: 14px;
        }

        .course-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 18px;
        }

        .course-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #514c3e;
          transition: 0.3s ease;
        }

        .course-dot.active {
          width: 25px;
          border-radius: 20px;
          background: #ffd361;
          box-shadow: 0 0 14px rgba(255, 211, 97, 0.7);
        }

        .learning-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .learning-card {
          min-height: 210px;
          position: relative;
          padding: 28px;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 211, 91, 0.17);
          background:
            linear-gradient(
              145deg,
              rgba(255, 215, 100, 0.09),
              rgba(10, 10, 8, 0.82)
            );
          transition: 0.45s ease;
        }

        .learning-card::before {
          content: "";
          position: absolute;
          width: 130px;
          height: 130px;
          right: -50px;
          bottom: -60px;
          border-radius: 50%;
          background: rgba(255, 207, 76, 0.15);
          filter: blur(25px);
        }

        .learning-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 216, 105, 0.55);
          box-shadow:
            0 0 35px rgba(255, 210, 86, 0.1),
            inset 0 0 30px rgba(255, 210, 86, 0.035);
        }

        .learning-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          border-radius: 16px;
          border: 1px solid rgba(255, 215, 100, 0.25);
          color: #ffdd7b;
          background: rgba(255, 213, 91, 0.07);
          font-size: 20px;
          box-shadow: 0 0 22px rgba(255, 211, 91, 0.08);
        }

        .learning-card h3 {
          margin: 0;
          color: #fff0b2;
          font-size: 20px;
        }

        .visual-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 18px;
        }

        .visual-card {
          height: 310px;
          position: relative;
          overflow: hidden;
          border-radius: 25px;
          border: 1px solid rgba(255, 211, 91, 0.17);
          background: #0b0c09;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .visual-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              transparent 45%,
              rgba(0, 0, 0, 0.7)
            );
        }

        .visual-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.55) sepia(0.25);
          transition: 0.7s ease;
        }

        .visual-card:hover img {
          transform: scale(1.08);
          filter: saturate(0.9) sepia(0.3);
        }

        .visual-card span {
          position: absolute;
          z-index: 2;
          left: 22px;
          bottom: 20px;
          color: #ffe69a;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .feedback-section {
          position: relative;
          overflow: hidden;
        }

        .feedback-glow {
          position: absolute;
          width: 550px;
          height: 550px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: rgba(255, 204, 73, 0.08);
          filter: blur(100px);
          pointer-events: none;
        }

        .feedback-slider {
          position: relative;
          max-width: 920px;
          min-height: 420px;
          margin: 0 auto;
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
          flex-shrink: 0;
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

        .trusted-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .trusted-card {
          min-height: 190px;
          position: relative;
          overflow: hidden;
          padding: 30px;
          border-radius: 25px;
          background:
            linear-gradient(
              145deg,
              #f9d66b,
              #d5a72d
            );
          color: #0a0a08;
          border: 1px solid rgba(255, 232, 154, 0.8);
          box-shadow:
            0 0 25px rgba(255, 207, 77, 0.13),
            inset 0 0 35px rgba(255, 243, 184, 0.22);
          transition: 0.45s ease;
        }

        .trusted-card::before {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          right: -40px;
          top: -45px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.12);
          box-shadow: 0 0 0 15px rgba(0, 0, 0, 0.025);
        }

        .trusted-card:hover {
          transform: translateY(-9px) rotate(-1deg);
          box-shadow:
            0 0 40px rgba(255, 213, 91, 0.3),
            0 20px 50px rgba(0, 0, 0, 0.3),
            inset 0 0 35px rgba(255, 243, 184, 0.25);
        }

        .trusted-number {
          font-size: 13px;
          font-weight: 900;
          opacity: 0.55;
          letter-spacing: 2px;
        }

        .trusted-card h3 {
          margin: 50px 0 0;
          font-size: 21px;
          line-height: 1.25;
        }

        .help-card {
          max-width: 1050px;
          min-height: 280px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 55px;
          border-radius: 32px;
          background:
            linear-gradient(
              135deg,
              #ffe18a 0%,
              #f5c84e 50%,
              #dcae35 100%
            );
          color: #090907;
          box-shadow:
            0 0 45px rgba(255, 210, 79, 0.18),
            inset 0 0 50px rgba(255, 245, 191, 0.3);
        }

        .help-card::before,
        .help-card::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(0, 0, 0, 0.13);
          border-radius: 50%;
          pointer-events: none;
        }

        .help-card::before {
          width: 220px;
          height: 220px;
          right: -90px;
          top: -100px;
        }

        .help-card::after {
          width: 150px;
          height: 150px;
          right: 55px;
          bottom: -100px;
        }

        .help-content {
          position: relative;
          z-index: 2;
        }

        .help-content small {
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0.55;
        }

        .help-content h2 {
          margin: 10px 0 12px;
          font-size: clamp(38px, 5vw, 60px);
          letter-spacing: -2px;
        }

        .help-content p {
          margin: 0;
          max-width: 600px;
          color: rgba(0, 0, 0, 0.63);
          line-height: 1.6;
        }

        .help-button {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          padding: 17px 25px;
          border: 1px solid rgba(255, 226, 129, 0.4);
          border-radius: 14px;
          background: #080907;
          color: #ffe18a;
          text-decoration: none;
          font-weight: 800;
          box-shadow:
            0 0 20px rgba(0, 0, 0, 0.25),
            inset 0 0 20px rgba(255, 211, 91, 0.05);
          transition: 0.35s ease;
        }

        .help-button:hover {
          transform: translateY(-4px);
          box-shadow:
            0 0 25px rgba(0, 0, 0, 0.35),
            0 0 35px rgba(255, 239, 159, 0.25);
        }

        @keyframes titleFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-4px) rotate(-0.35deg);
          }
          50% {
            transform: translateY(2px) rotate(0.35deg);
          }
          75% {
            transform: translateY(-2px) rotate(-0.2deg);
          }
        }

        @keyframes activeCardGlow {
          0%, 100% {
            box-shadow:
              0 0 0 1px rgba(255, 215, 95, 0.08),
              0 0 30px rgba(255, 211, 91, 0.18),
              0 0 75px rgba(255, 190, 45, 0.08),
              inset 0 0 45px rgba(255, 210, 86, 0.04);
          }

          50% {
            box-shadow:
              0 0 0 1px rgba(255, 215, 95, 0.14),
              0 0 45px rgba(255, 211, 91, 0.32),
              0 0 110px rgba(255, 190, 45, 0.15),
              inset 0 0 65px rgba(255, 210, 86, 0.08);
          }
        }

        @keyframes pillGlow {
          0%, 100% {
            box-shadow:
              0 0 20px rgba(255, 202, 73, 0.08),
              inset 0 0 20px rgba(255, 202, 73, 0.02);
          }

          50% {
            box-shadow:
              0 0 35px rgba(255, 202, 73, 0.18),
              inset 0 0 25px rgba(255, 202, 73, 0.05);
          }
        }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.75;
          }

          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        @media (max-width: 950px) {
          .stats-grid,
          .trusted-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .learning-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .visual-grid {
            grid-template-columns: 1fr 1fr;
          }

          .visual-card:first-child {
            grid-column: span 2;
          }

          .course-card {
            width: 390px;
          }

          .help-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 650px) {
          .hero {
            min-height: 560px;
            padding: 100px 5% 70px;
          }

          .hero-title-wrap {
            padding: 0;
          }

          .hero-title-wrap::before,
          .hero-title-wrap::after {
            display: none;
          }

          .hero-title {
            font-size: 54px;
            letter-spacing: -3px;
          }

          .section {
            padding: 65px 5%;
          }

          .stats-grid,
          .learning-grid,
          .trusted-grid,
          .visual-grid {
            grid-template-columns: 1fr;
          }

          .visual-card:first-child {
            grid-column: span 1;
          }

          .course-slider {
            height: 465px;
          }

          .course-card {
            width: calc(100vw - 45px);
            min-height: 355px;
          }

          .course-card.next {
            transform: translateX(8%) translateY(35px) scale(0.82);
            opacity: 0.32;
          }

          .course-card.next-two {
            display: none;
          }

          .course-card.previous {
            display: none;
          }

          .feedback-card {
            padding: 28px;
          }

          .feedback-top {
            align-items: flex-start;
            flex-direction: column;
          }

          .feedback-text {
            margin-top: 28px;
            font-size: 16px;
          }

          .help-card {
            padding: 35px 28px;
          }
        }
      `}</style>

      <div className="page-inner">
        <section className="hero">
          <div className="hero-decoration left"></div>
          <div className="hero-decoration right"></div>

          <div className="hero-grid">
            <div className="hero-pill">
              New Batch Starts Every Monday & Wednesday
            </div>

            <div className="hero-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="hero-title-wrap">
              <h1 className="hero-title">
                <span>2D & 3D</span>
                <br />
                Animation
              </h1>
            </div>

            <p className="hero-subtitle">
              <strong>2D & 3D Animation Course</strong> in Jaipur
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">Expert Mentors</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">300+</div>
                <div className="stat-label">Courses Offered</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Students Trained</div>
              </div>

              <div className="stat-card">
                <div className="stat-number">11+</div>
                <div className="stat-label">Branches Worldwide</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section course-section">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">Course Content</div>
              <h2>What You Will Learn</h2>
              <p>
                Explore the complete course content through an interactive
                learning experience.
              </p>
            </div>

            <div className="course-slider">
              <div className="course-card previous">
                <div className="card-visual">
                  <div className="visual-symbol">
                    {previousCard.number}
                  </div>
                </div>

                <div className="course-number">
                  MODULE {previousCard.number}
                </div>

                <h3>{previousCard.title}</h3>

                <p>
                  Explore this part of the course through practical learning
                  and creative application.
                </p>
              </div>

              <div className="course-card active">
                <div className="card-visual">
                  <div className="visual-symbol">
                    {activeCard.number}
                  </div>
                </div>

                <div className="course-number">
                  MODULE {activeCard.number}
                </div>

                <h3>{activeCard.title}</h3>

                <p>
                  Explore this part of the course through practical learning
                  and creative application.
                </p>
              </div>

              <div className="course-card next">
                <div className="card-visual">
                  <div className="visual-symbol">
                    {nextCard.number}
                  </div>
                </div>

                <div className="course-number">
                  MODULE {nextCard.number}
                </div>

                <h3>{nextCard.title}</h3>

                <p>
                  Explore this part of the course through practical learning
                  and creative application.
                </p>
              </div>

              <div className="course-card next-two">
                <div className="card-visual">
                  <div className="visual-symbol">
                    {nextTwoCard.number}
                  </div>
                </div>

                <div className="course-number">
                  MODULE {nextTwoCard.number}
                </div>

                <h3>{nextTwoCard.title}</h3>

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
                    index === activeCourse ? "active" : ""
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
              <div className="section-label">Learning Outcomes</div>
              <h2>What You Can Create</h2>
              <p>
                Build creative skills across animation, editing and graphics.
              </p>
            </div>

            <div className="learning-grid">
              {learnings.map((item, index) => (
                <div className="learning-card" key={item}>
                  <div className="learning-icon">
                    0{index + 1}
                  </div>

                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">Creative Space</div>
              <h2>Explore Your Creativity</h2>
              <p>
                Develop your creative workflow through graphics, effects,
                editing and animation.
              </p>
            </div>

            <div className="visual-grid">
              <div className="visual-card">
                <img src={visualImages[0]} alt="Creative learning" />
                <span>Creative Learning</span>
              </div>

              <div className="visual-card">
                <img src={visualImages[1]} alt="Graphics editing" />
                <span>Graphics Editing</span>
              </div>

              <div className="visual-card">
                <img src={visualImages[2]} alt="Visual design" />
                <span>Visual Design</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section feedback-section">
          <div className="feedback-glow"></div>

          <div className="section-container">
            <div className="section-heading">
              <div className="section-label">Hear From Our Students</div>
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

                    <div className="stars">★★★★★</div>
                  </div>

                  <p className="feedback-text">
                    {testimonial.text}
                  </p>

                  <div className="feedback-quote">“</div>
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
              <div className="section-label">Trusted By Big Companies</div>
              <h2>Why Learn With Us?</h2>
            </div>

            <div className="trusted-grid">
              {trustedFeatures.map((feature, index) => (
                <div className="trusted-card" key={feature}>
                  <div className="trusted-number">
                    0{index + 1}
                  </div>

                  <h3>{feature}</h3>
                </div>
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
              </div>

              <a className="help-button" href="#contact">
                Connect With Us →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TwoDThreeDAnimation;
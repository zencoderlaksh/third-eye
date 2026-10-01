import React, { useEffect, useMemo, useRef, useState } from "react";
import mentor3 from "../../assets/mentor_3.png";
import mentor4 from "../../assets/mentor_4.png";
import logo from "../../assets/logo.webp";

const mentors = [
  {
    name: "Preeti Sharma",
    role: "CHIEF MANAGING DIRECTOR",
    image: mentor3,
    description:
      "Preeti Sharma, Chief Managing Director of Thirdeye Computer Classes, is a proven professional with over 15 years of experience in Business Development and Key Account Management. She has a demonstrated history of success in the staffing and recruiting industry and is highly skilled in Negotiation, HR Consulting, Customer Relationship Management (CRM), Market Research, and Management.",
  },
  {
    name: "Puneet Sharma",
    role: "Managing Director",
    image: "",
    description:
      "Puneet Sharma, Managing Director of Thirdeye computer classses is a results-oriented professional with over 20 years of experience in managing and direction. Possesses excellent time management skills, top customer-relations abilities and strong communication methods",
  },
  {
    name: "Suumit sharrma",
    role: "Chief Operating Officer",
    image: "",
    description:
      "Suumit Sharrma is the Chief Operating Officer at Thirdeye Computer Classes, where he oversees daily operations, drives strategic growth initiatives, and ensures the smooth functioning of all departments. With a deep understanding of the education and training industry",
  },
  {
    name: "Mr. M.L. Chaudhary",
    role: "Founder & Chief Patron",
    image: "",
    description:
      "An enthusiastic person and qualified technical instructor, trained in technical management with incredible contributions to Indian Airforce. An accredited technical safety inspector in technical aviation field, Served with innovative ideas for the continues improvement in technical safety. The recipient of Indian Airforce Commandation was an asset to the service.\n\nHis vision is to develop the computer skills, in each and every youth and enlighten the IT knowledge by inspiring every student through the principle of Swami Vivekananda: “Arise, awake n do not stop until the goal is reached.”",
  },
  {
    name: "Sheetal Sharma",
    role: "SALES & B.D. HEAD",
    image: "",
    description:
      "A seasoned leader with 27 years of experience, Sheetal Sharma spearheads Sales and Business Development at Thirdeye. Formerly the Sales & B.D. Head and Franchise Manager at Samyak, she brings unmatched expertise in business expansion and strategic growth. She is an ICF-accredited Life Coach, a Corporate Soft Skills Trainer, and an award-winning storyteller from Toastmasters International.\n\nCombining her deep industry knowledge with a passion for English literature, Sheetal is dedicated to scaling Thirdeye’s vision to new heights.",
  },
  {
    name: "Neelam Sharma",
    role: "RECRUITMENT HEAD",
    image: "",
    description:
      "She is a highly accomplished and dedicated professional serving as the Admission & Counseling Head at Thirdeye Computer Classes. With a strong background in student guidance and enrollment management, Neelam plays a pivotal role in shaping the academic journeys of countless students. Their expertise in career counseling, admissions strategy, and student support has made them invaluable to the institution.\n\nKnown for their commitment to fostering a supportive and growth-oriented environment, Neelam strives to help students make informed decisions and achieve their academic and career aspirations.",
  },
  {
    name: "Muskan Avesthi",
    role: "PLACEMENT MANAGER",
    image: "",
    description:
      "Team Member Muskan Avesthi-An enthusiastic soft and communication skills trainer with demonstrated history of providing process training to new hires. With overall 8+ years of Experience in Career counselling and overseas consultant, Known for driving initiatives for business development.",
  },
  {
    name: "Kushwang Sharma",
    role: "Social Media Manager",
    image: "",
    description:
      "Social Media Manager & Operations Head, ThirdEye Computer Classes Khushwang Sharma leads social media and operations at ThirdEye Computer Classes, combining digital marketing expertise with strong organizational skills. His work has enhanced the institute’s brand presence and streamlined daily operations. Under his leadership, social media engagement and student enrollments have seen significant growth through effective, data-driven strategies.",
  },
  {
    name: "Amit Saini",
    role: "Senior Digital Marketing Manager",
    image: "",
    description:
      "Amit Saini is an experienced Digital Marketing Manager and Graphic Design Expert with over 9 years of experience in digital marketing, design, and brand strategy. He is a Senior Digital Marketing Manager and Educator at Thirdeye Computer Classes. He is also the Founder of Digitallitsolutions and has previously taught at Dicazo. Amit has successfully worked with brands like Lapinoz Pizza, GD Goenka, Maharaja Masala, Kids Pride School, Naughty Dogs, and Carz Spa.",
  },
  {
    name: "Shubham Saini",
    role: "SR. TRAINING MANAGER",
    image: "",
    description:
      "Shubham Saini is an accomplished Senior Manager at Thirdeye Computer Classes, where he brings a wealth of experience in business development, franchise management, and career counseling. With his strong leadership skills and strategic vision, Shubham has played a significant role in expanding the institute’s operations and guiding students toward successful career paths.\n\nAt Thirdeye Computer Classes, Shubham took on the role of Senior Branch Manager, where he successfully lead business development initiatives, expanded franchise operations, and offered career counseling to students. His role involves overseeing the daily operations of the branch, developing new business opportunities, managing franchise partnerships, and ensuring the overall growth and success of the organization.",
  },
  {
    name: "Tushar prajapat",
    role: "Senior bRANCH MANAGER",
    image: "",
    description:
      "Digital Marketer | Designer | Freelancer | Video Editor | Career Counsellor With 6 years of experience, Tushar Prajapat combines creativity and strategy to craft impactful digital solutions. At ThirdEye Computer Classes, he drives digital marketing, design, and career counselling initiatives—helping students and brands grow in the digital era.\n\nA versatile professional with expertise in branding, design, content, and freelancing, Tushar’s innovative and result-driven approach inspires learners to upskill and achieve their goals. Philosophy: “Learn. Create. Grow — because your skills define your success.”",
  },
  {
    name: "Gaurav Singh Panwar",
    role: "IVR & CRM SUPPORT mANAGER",
    image: "",
    description:
      "With 5+ years of experience in operations, sales, and client advisory, I’ve worked with leading MNCs like Genpact and Concentrix. At Genpact, I managed international projects, and at Concentrix, I served as a Senior Advisor for US/UK processes. Currently, I’m working with Thirdeye – The digital skills powerhouse, focused on driving growth of students.",
  },
  {
    name: "Rishika Raj",
    role: "Senior Career Counsellor",
    image: "",
    description:
      "Rishika Raj is an B.A. Graduate from Jaipur, With over 3.5 years of experience international clients handeling in Qdegrees, teleperformance and CarDekho. specializing in: Customer Support, Tele Sales, Customer Experience, Feedback Management. She is Dedicated professional and has a enthusiastic personality In Thirdeye she helps & guides students to choose correct pathway to build their career.",
  },
  {
    name: "ishika jain",
    role: "Senior Career Counsellor",
    image: "",
    description:
      "Ishika Jain holds a BBA, M.Com (HRM), and an MBA, and brings over five years of teaching experience at both domestic and international levels. She is passionate about guiding students through their academic journey with clarity and confidence. Her teaching approach focuses not only on building strong subject knowledge but also on developing the skills and self-assurance students need to succeed in their future careers.",
  },
  {
    name: "Diya Saini",
    role: "Senior bRANCH MANAGER",
    image: "",
    description:
      "With over 4 years of experience in education, I have guided students in English to enhance their communication and academic skills. I also worked as an E-commerce Executive in the Amazon Advertisement Department at Jaipur Global Services, gaining expertise in digital operations. Currently, I serve as a Counsellor at Thirdeye Computer Classes, helping students choose the right career-oriented courses for a successful future.",
  },
  {
    name: "Sheetanshu Saxena",
    role: "Digital Marketing Executive",
    image: "",
    description:
      "With a passion for creativity and data-driven strategy, Sheetanshu manages the digital presence of Thirdeye Computer Classes. From running impactful ad campaigns to optimizing online visibility, he ensures that Thirdeye stays ahead in the digital space. His innovative approach and keen eye for trends help connect students with the right opportunities and courses.",
  },
  {
    name: "Mohit Sharma",
    role: "ADMIN MANAGER",
    image: "",
    description:
      "A creative and passionate Animation & VFX Faculty with expertise in 2D & 3D Animation, Motion Graphics, and Visual Effects. With strong industry knowledge and hands-on software skills, they focus on practical learning and portfolio development. At ThirdEye Computer Classes, they train and mentor students to build successful careers in the animation and media industry.",
  },
  {
    name: "Rahul Verma",
    role: "Designing Executive",
    image: "",
    description:
      "Rahul is a creative Designing Executive with expertise in graphic design, branding, and visual content creation. With strong knowledge of modern design tools and trends, he develops impactful creatives for digital and print media. At ThirdEye Computer Classes, he contributes by creating engaging designs and supporting the institute’s branding and promotional activities.",
  },
  {
    name: "Harshita jain",
    role: "Senior Career Counsellor",
    image: "",
    description:
      "I am a B.Tech graduate in Computer Science & Engineering with a strong foundation in both technology and education. I have experience in web development, software training, and student counseling, which helps me bridge technical knowledge with student needs. Currently, I am working as Branch Manager and Academic Counsellor, where I guide students in choosing the right career path and support their overall learning. I am dedicated to mentoring and helping students build a successful future in the IT field.",
  },
  {
    name: "rohit bairwa",
    role: "Senior Career Counsellor",
    image: "",
    description:
      "Rohit Bairwa is a dedicated academic counselor who helps students plan their IT careers with clarity and confidence. Known for his detail-oriented approach, Rohit guides learners to align their goals with current industry trends. His personalized support ensures that every student makes informed and confident career decisions.",
  },
  {
    name: "Pankaj sharma",
    role: "Senior Career Counsellor",
    image: "",
    description:
      "Pankaj holds a BBA from Jai Narain Vyas University and an MCA in AI & ML from Amity University, Noida. He guides students in choosing the right career path with practical, industry-focused advice and personalized support.",
  },
];

function MentorPage({ mentor }) {
  if (!mentor) {
    return (
      <div className="empty-page">
        <span>THIRD EYE</span>
      </div>
    );
  }

  return (
    <div className="mentor-page">
      <div className="mentor-image">
        {mentor.image ? (
          <img src={mentor.image} alt={mentor.name} />
        ) : (
          <div className="image-placeholder">
            <div>MENTOR IMAGE</div>
            <span>IMAGE PLACEHOLDER</span>
          </div>
        )}
      </div>

      <div className="mentor-details">
        <div className="mentor-index">
          {String(mentor.index).padStart(2, "0")}
        </div>

        <h2>{mentor.name}</h2>

        <div className="mentor-role">{mentor.role}</div>

        <div className="yellow-divider" />

        <div className="mentor-description">
          {mentor.description.split("\n").map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              {index !== mentor.description.split("\n").length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function CoverPage() {
  return (
    <div className="cover-page">
      <div className="cover-eyebrow">THIRD EYE COMPUTER CLASSES</div>

      <h1>
        MEET OUR
        <br />
        <span>MENTORS</span>
      </h1>

      <div className="cover-logo">
  <img src={logo} alt="Third Eye Computer Classes" />
</div>
      <div className="cover-divider" />

      <p>Learn from experience. Grow with guidance.</p>
    </div>
  );
}

export default function OurTeam() {
  const [flippedCount, setFlippedCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);

  const numberedMentors = useMemo(
    () =>
      mentors.map((mentor, index) => ({
        ...mentor,
        index: index + 1,
      })),
    []
  );

  const sheets = useMemo(() => {
    const result = [];

    result.push({
      front: { cover: true },
      back: numberedMentors[0],
    });

    for (let i = 1; i < numberedMentors.length; i += 2) {
      result.push({
        front: numberedMentors[i],
        back: numberedMentors[i + 1] || null,
      });
    }

    return result;
  }, [numberedMentors]);

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const totalSheets = sheets.length;

  const nextPage = () => {
    if (isAnimating || flippedCount >= totalSheets) return;

    setIsAnimating(true);

    setFlippedCount((current) => current + 1);

    setTimeout(() => {
      setIsAnimating(false);
    }, 850);
  };

  const previousPage = () => {
    if (isAnimating || flippedCount <= 0) return;

    setIsAnimating(true);

    setFlippedCount((current) => current - 1);

    setTimeout(() => {
      setIsAnimating(false);
    }, 850);
  };

  useEffect(() => {
    const keyboardNavigation = (event) => {
      if (event.key === "ArrowRight") {
        nextPage();
      }

      if (event.key === "ArrowLeft") {
        previousPage();
      }
    };

    window.addEventListener("keydown", keyboardNavigation);

    return () => {
      window.removeEventListener("keydown", keyboardNavigation);
    };
  });

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0].clientX;

    const distance = touchStartX.current - endX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextPage();
      } else {
        previousPage();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section
      className={`team-section ${isMobile ? "mobile-book" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="heading-area">
        <div className="eyebrow">OUR TEAM</div>

        <h2>Meet the people behind the learning journey.</h2>

        <p>
          Discover the mentors and professionals who guide students at
          ThirdEye Computer Classes.
        </p>
      </div>

      <div className="book-wrapper">
        <div className="book-shadow" />

        <div className="book">
          <div className="spine-shadow" />

          {!isMobile && (
            <div className="base-page left-page">
              {flippedCount > 0 ? (
                sheets[Math.min(flippedCount - 1, sheets.length - 1)].back && (
                  <MentorPage
                    mentor={
                      sheets[Math.min(flippedCount - 1, sheets.length - 1)].back
                    }
                  />
                )
              ) : (
                <div className="empty-page">
                  <span>THIRD EYE</span>
                </div>
              )}
            </div>
          )}

          {!isMobile && (
            <div className="base-page right-page">
              {flippedCount < sheets.length &&
                !sheets[flippedCount].front.cover && (
                  <MentorPage mentor={sheets[flippedCount].front} />
                )}
            </div>
          )}

          {sheets.map((sheet, index) => {
            const flipped = index < flippedCount;

            return (
              <div
                key={index}
                className={`sheet ${flipped ? "flipped" : ""}`}
                style={{
                  zIndex: flipped
                    ? index + 1
                    : sheets.length - index + 20,
                }}
                onClick={() => {
                  if (isAnimating) return;

                  if (flipped) {
                    previousPage();
                  } else {
                    nextPage();
                  }
                }}
              >
                <div className="sheet-face front-face">
                  {sheet.front.cover ? (
                    <CoverPage />
                  ) : (
                    <MentorPage mentor={sheet.front} />
                  )}

                  <div className="page-corner" />
                </div>

                <div className="sheet-face back-face">
                  {sheet.back && <MentorPage mentor={sheet.back} />}

                  <div className="page-corner" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="book-controls">
        <button
          type="button"
          disabled={flippedCount === 0 || isAnimating}
          onClick={previousPage}
        >
          <span>←</span>
          PREVIOUS
        </button>

        <div className="page-counter">
          <strong>{Math.min(flippedCount + 1, totalSheets)}</strong>
          <span>/</span>
          <span>{totalSheets}</span>
        </div>

        <button
          type="button"
          disabled={flippedCount >= totalSheets || isAnimating}
          onClick={nextPage}
        >
          NEXT
          <span>→</span>
        </button>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          background: #000;
        }

        .team-section {
          width: 100%;
          min-height: 100vh;
          margin-top: 0;
          padding: 150px 25px 70px;
          overflow: hidden;
          color: #111;
          background: linear-gradient(
            to bottom,
            #000 0,
            #000 115px,
            #f4c542 115px,
            #f4c542 100%
          );
          font-family: Inter, Arial, sans-serif;
        }

        .heading-area {
          max-width: 850px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .eyebrow {
          color: #111;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .heading-area h2 {
          margin: 12px 0 0;
          color: #111;
          font-size: clamp(30px, 3.6vw, 50px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -2.5px;
        }

        .heading-area p {
          max-width: 620px;
          margin: 18px auto 0;
          color: #666;
          font-size: 14px;
          line-height: 1.7;
        }

        .book-wrapper {
          width: min(1500px, 96vw);
          height: min(700px, 54vw);
          min-height: 620px;
          margin: auto;
          position: relative;
          scroll-margin-top: 20px;
        }

        .book-shadow {
          position: absolute;
          left: 5%;
          bottom: -45px;
          width: 90%;
          height: 80px;
          background: #000;
          opacity: 0.22;
          filter: blur(30px);
          border-radius: 50%;
        }

        .book {
          position: absolute;
          inset: 0;
          background: #050505;
          border: 1px solid #171717;
          box-shadow: 0 24px 55px rgba(0, 0, 0, 0.28);
        }

        .base-page {
          position: absolute;
          top: 0;
          width: 50%;
          height: 100%;
          overflow: hidden;
          background: #050505;
          border: 1px solid #1d1d1d;
        }

        .left-page {
          left: 0;
          border-radius: 13px 0 0 13px;
          box-shadow:
            inset -20px 0 45px rgba(0, 0, 0, 0.4),
            -8px 10px 30px rgba(0, 0, 0, 0.12);
        }

        .right-page {
          right: 0;
          border-radius: 0 13px 13px 0;
          box-shadow:
            inset 20px 0 45px rgba(0, 0, 0, 0.4),
            8px 10px 30px rgba(0, 0, 0, 0.12);
        }

        .sheet {
          position: absolute;
          left: 50%;
          top: 0;
          width: 50%;
          height: 100%;
          transform-style: preserve-3d;
          transform-origin: left center;
          cursor: pointer;
          transition: transform 760ms cubic-bezier(0.22, 0.61, 0.36, 1);
        }

        .sheet.flipped {
          transform: rotateY(-180deg);
        }

        .sheet-face {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #050505;
          border: 1px solid #1d1d1d;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .front-face {
          transform: rotateY(0deg);
          border-radius: 0;
          box-shadow: inset 10px 0 22px rgba(0, 0, 0, 0.22);
        }

        .back-face {
          transform: rotateY(180deg);
          border-radius: 0;
          box-shadow: inset -10px 0 22px rgba(0, 0, 0, 0.22);
        }

        .spine-shadow {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          transform: translateX(-50%);
          z-index: 200;
          pointer-events: none;
          background: #252525;
        }

        .page-corner {
          display: none;
        }

        .cover-page {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 50px;
          background:
            radial-gradient(
              circle at 50% 42%,
              rgba(255, 211, 0, 0.14),
              transparent 35%
            ),
            #050505;
        }

        .cover-eyebrow {
          margin-bottom: 30px;
          color: #ffd300;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .cover-page h1 {
          margin: 0;
          color: #fff;
          font-size: clamp(45px, 5.5vw, 82px);
          line-height: 0.9;
          font-weight: 950;
          letter-spacing: -5px;
        }

        .cover-page h1 span {
          color: #ffd300;
        }

        .logo-placeholder {
          width: 200px;
          height: 95px;
          margin-top: 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px dashed rgba(255, 211, 0, 0.7);
          color: #ffd300;
        }

        .logo-placeholder span {
          font-size: 19px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .logo-placeholder small {
          margin-top: 7px;
          color: #777;
          font-size: 8px;
          letter-spacing: 3px;
        }

        .cover-divider {
          width: 70px;
          height: 3px;
          margin-top: 35px;
          background: #ffd300;
        }

        .cover-page p {
          margin-top: 17px;
          color: #777;
          font-size: 11px;
        }

        .mentor-page {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 48px 38px 28px;
          background: #050505;
          color: #fff;
          text-align: center;
        }

        .mentor-image {
          width: min(205px, 40%);
          aspect-ratio: 1;
          flex: 0 0 auto;
          overflow: hidden;
          background: #090909;
          border: 2px solid #ffd300;
          border-radius: 50%;
        }

        .mentor-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #090909;
          color: #ffd300;
          border-radius: 50%;
        }

        .image-placeholder div {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .image-placeholder span {
          margin-top: 7px;
          color: #555;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .mentor-details {
          width: 100%;
          flex: 1;
          min-height: 0;
          padding-top: 24px;
          overflow: visible;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mentor-index {
          margin-bottom: 7px;
          color: #ffd300;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .mentor-details h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(22px, 2.3vw, 34px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .mentor-role {
          margin-top: 10px;
          color: #ffd300;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .yellow-divider {
          width: 48px;
          height: 2px;
          margin: 15px 0;
          background: #ffd300;
        }

        .mentor-description {
          width: 100%;
          color: #b8b8b8;
          font-size: clamp(9px, 0.72vw, 11px);
          line-height: 1.42;
          text-align: left;
          overflow: visible;
          word-break: normal;
          overflow-wrap: anywhere;
        }

        .empty-page {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #050505;
        }

        .empty-page span {
          color: rgba(255, 211, 0, 0.08);
          font-size: 60px;
          font-weight: 950;
          letter-spacing: -4px;
        }

        .book-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 35px;
          margin-top: 60px;
        }

        .book-controls button {
          min-width: 140px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          border: 1px solid #bbb;
          background: transparent;
          color: #111;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: 0.25s ease;
        }

        .book-controls button:hover:not(:disabled) {
          border-color: #ffd300;
          background: #ffd300;
        }

        .book-controls button:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .page-counter {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #777;
          font-size: 13px;
        }

        .page-counter strong {
          color: #111;
          font-size: 18px;
        }

        @media (max-width: 1100px) {
          .book-wrapper {
            min-height: 580px;
          }

          .mentor-page {
            padding: 42px 28px 28px;
          }

          .mentor-image {
            width: 195px;
          }

          .mentor-description {
            font-size: 9.5px;
            line-height: 1.42;
          }
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 120px 15px 50px;
            background: #f4c542;
          }

          .heading-area {
            margin-bottom: 28px;
          }

          .heading-area h2 {
            letter-spacing: -1.5px;
          }

          .book-wrapper {
            width: min(500px, 94vw);
            height: 620px;
            min-height: 0;
          }

          .base-page {
            display: none;
          }

          .sheet {
            left: 0;
            width: 100%;
            transform-origin: center center;
          }

          .front-face,
          .back-face {
            border-radius: 0;
          }

          .spine-shadow {
            display: none;
          }

          .mentor-page {
            padding: 38px 24px 24px;
          }

          .mentor-image {
            width: 190px;
          }

          .mentor-description {
            font-size: 10px;
            line-height: 1.45;
          }

          .book-controls {
            margin-top: 45px;
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .team-section {
            padding-top: 105px;
          }

          .book-wrapper {
            height: 580px;
          }

          .mentor-page {
            padding: 32px 22px 22px;
          }

          .mentor-image {
            width: 165px;
          }

          .mentor-details {
            padding-top: 18px;
          }

          .mentor-details h2 {
            font-size: 22px;
          }

          .mentor-description {
            font-size: 9.5px;
          }

          .cover-page {
            padding: 30px;
          }

          .cover-page h1 {
            font-size: 48px;
          }

          .logo-placeholder {
            width: 165px;
            height: 80px;
          }

          .book-controls {
            gap: 10px;
            margin-top: 35px;
          }

          .book-controls button {
            min-width: 105px;
            padding: 12px 13px;
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  );
}
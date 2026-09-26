import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SplashCursor from "../../components/course/SplashCursor";
import Ballpit from "../../components/course/Ballpit";
import "./TwoDThreeDAnimation.css";

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
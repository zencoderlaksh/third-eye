import React, { useState, useEffect, useMemo } from "react";
import { Search, ArrowUpRight, Sparkles } from "lucide-react";

const courses = [
  {
    title: "2D & 3D Animation",
    category: "Animation & 3D",
    description:
      "Bring your creative ideas to life through animation, visual storytelling, and 3D design. Build skills for the world of digital media and animation.",
    link: "https://thirdeyeclasses.com/2d-3d-animation-course-in-jaipur/",
  },
  {
    title: "3D CAD Matrix",
    category: "CAD & 3D",
    description:
      "Learn professional 3D CAD concepts and create accurate digital models. Develop practical skills used across design and engineering industries.",
    link: "https://thirdeyeclasses.com/3d-cad-matrix-course-in-jaipur/",
  },
  {
    title: "3D Animation Using Maya",
    category: "Animation & 3D",
    description:
      "Explore 3D modelling, animation, and visual creation using Autodesk Maya. Turn your ideas into engaging 3D experiences.",
    link: "https://thirdeyeclasses.com/3d-animation-using-maya-course-in-jaipur/",
  },
  {
    title: "3D Animation Using Blender",
    category: "Animation & 3D",
    description:
      "Learn to create impressive 3D models, animations, and visual content with Blender. Build a foundation for creative 3D projects.",
    link: "https://thirdeyeclasses.com/3d-animation-using-blender-course-in-jaipur/",
  },
  {
    title: "ADCS",
    category: "Computer Applications",
    description:
      "Develop practical computer and technical skills through structured learning. Explore concepts designed to strengthen your professional capabilities.",
    link: "https://thirdeyeclasses.com/adcs-course-in-jaipur/",
  },
  {
    title: "Adobe After Effects",
    category: "Design & VFX",
    description:
      "Create motion graphics, visual effects, and engaging video content using Adobe After Effects. Learn skills used in modern digital media.",
    link: "https://thirdeyeclasses.com/adobe-after-effects-course-in-jaipur/",
  },
  {
    title: "Adobe Illustrator",
    category: "Graphic Design",
    description:
      "Learn vector illustration and professional graphic design using Adobe Illustrator. Create logos, illustrations, branding assets, and more.",
    link: "https://thirdeyeclasses.com/adobe-illustrator-course-in-jaipur/",
  },
  {
    title: "Adobe InDesign",
    category: "Publishing & Layout",
    description:
      "Learn professional page layout and publishing with Adobe InDesign. Create polished brochures, magazines, documents, and visual publications.",
    link: "https://thirdeyeclasses.com/adobe-indesign-course-in-jaipur/",
  },
  {
    title: "Adobe Premiere Pro",
    category: "Video Editing",
    description:
      "Turn raw footage into engaging videos with professional editing techniques. Learn the tools used to create polished digital content.",
    link: "https://thirdeyeclasses.com/adobe-premier-pro-course-in-jaipur/",
  },
  {
    title: "Advanced Excel",
    category: "Business & Analytics",
    description:
      "Go beyond basic spreadsheets and learn advanced Excel tools for analysis and productivity. Build practical skills for modern workplaces.",
    link: "https://thirdeyeclasses.com/advanced-excel-course-in-jaipur/",
  },
  {
    title: "Advanced Java",
    category: "Programming & Dev",
    description:
      "Take your Java development skills further with advanced programming concepts. Build a stronger foundation for enterprise and application development.",
    link: "https://thirdeyeclasses.com/advanced-java-j2ee-course-in-jaipur/",
  },
  {
    title: "Artificial Intelligence",
    category: "AI & Data",
    description:
      "Step into the world of Artificial Intelligence and explore how intelligent systems are built. Develop knowledge for the rapidly growing AI field.",
    link: "https://thirdeyeclasses.com/artificial-intelligence-ai-course-in-jaipur/",
  },
  {
    title: "AWS Cloud Computing",
    category: "Cloud & DevOps",
    description:
      "Learn the fundamentals of cloud computing with Amazon Web Services. Develop skills for deploying, managing, and working with cloud technologies.",
    link: "https://thirdeyeclasses.com/aws-amazon-web-services-cloud-computing-course-in-jaipur/",
  },
  {
    title: "C Programming",
    category: "Programming & Dev",
    description:
      "Build strong programming fundamentals with C. Learn logical problem-solving and core programming concepts that support advanced development.",
    link: "https://thirdeyeclasses.com/c-programming-course-in-jaipur/",
  },
  {
    title: "C++ Programming",
    category: "Programming & Dev",
    description:
      "Strengthen your programming skills with C++ and object-oriented concepts. Build a foundation for software development and problem solving.",
    link: "https://thirdeyeclasses.com/c-programming-course-in-jaipur-2/",
  },
  {
    title: "Data Analytics",
    category: "AI & Data",
    description:
      "Learn how to work with data, discover patterns, and turn information into useful insights. Develop practical skills for data-driven careers.",
    link: "https://thirdeyeclasses.com/data-analytics-course-in-jaipur/",
  },
  {
    title: "Data Science",
    category: "AI & Data",
    description:
      "Explore data, programming, and analytical techniques used to solve real-world problems. Start building skills for the evolving field of data science.",
    link: "https://thirdeyeclasses.com/data-science-course-course-in-jaipur/",
  },
  {
    title: "DevOps",
    category: "Cloud & DevOps",
    description:
      "Understand modern development and deployment practices with DevOps. Learn concepts that help teams build, deliver, and manage applications efficiently.",
    link: "https://thirdeyeclasses.com/devops-training-course-in-jaipur/",
  },
  {
    title: "Digital Marketing",
    category: "Marketing & Growth",
    description:
      "Learn how brands reach and engage audiences through digital platforms. Explore practical skills across modern online marketing channels.",
    link: "https://thirdeyeclasses.com/digital-marketing-course-course-in-jaipur/",
  },
  {
    title: "Ethical Hacking",
    category: "Cyber Security",
    description:
      "Explore cybersecurity concepts and ethical approaches to identifying vulnerabilities. Build foundational knowledge for a career in information security.",
    link: "https://thirdeyeclasses.com/ethical-hacking-course-in-jaipur/",
  },
  {
    title: "Figma",
    category: "Design & UI/UX",
    description:
      "Learn modern interface design and collaborative design workflows using Figma. Create clean, interactive designs for digital products.",
    link: "https://thirdeyeclasses.com/excel-vba-course-in-jaipur/",
  },
  {
    title: "Full Stack Development",
    category: "Programming & Dev",
    description:
      "Learn the technologies behind modern web applications from frontend to backend. Build practical development skills for full-stack projects.",
    link: "https://thirdeyeclasses.com/full-stack-options-course-in-jaipur/",
  },
  {
    title: "Machine Learning",
    category: "AI & Data",
    description:
      "Discover how machines learn from data and make predictions. Build a foundation in concepts used to create intelligent applications.",
    link: "https://thirdeyeclasses.com/machine-learning-course-in-jaipur/",
  },
  {
    title: "Python",
    category: "Programming & Dev",
    description:
      "Learn Python from the fundamentals and develop practical programming skills. Build a strong base for development, automation, data, and AI.",
    link: "https://thirdeyeclasses.com/python-course-in-jaipur/",
  },
  {
    title: "React JS",
    category: "Programming & Dev",
    description:
      "Learn to build modern and interactive web interfaces using React. Develop reusable components and create engaging frontend experiences.",
    link: "https://thirdeyeclasses.com/react-js-course-in-jaipur/",
  },
  {
    title: "Node JS",
    category: "Programming & Dev",
    description:
      "Build server-side applications and backend services using Node.js. Learn the foundations of creating modern web application backends.",
    link: "https://thirdeyeclasses.com/node-js-course-in-jaipur/",
  },
  {
    title: "UI & UX",
    category: "Design & UI/UX",
    description:
      "Learn how to design digital experiences that are both useful and visually engaging. Explore user-focused principles for modern product design.",
    link: "https://thirdeyeclasses.com/ui-ux-designing-course-in-jaipur/",
  },
  {
    title: "Web Designing",
    category: "Design & UI/UX",
    description:
      "Learn the fundamentals of creating attractive and functional websites. Develop practical skills for designing modern web experiences.",
    link: "https://thirdeyeclasses.com/web-designing-course-in-jaipur/",
  },
];

const categoryFilters = [
  { id: "all", label: "All Courses" },
  { id: "Programming & Dev", label: "Programming & Dev" },
  { id: "Animation & 3D", label: "Animation & 3D" },
  { id: "Design & UI/UX", label: "Design & Creative" },
  { id: "AI & Data", label: "AI & Data Science" },
  { id: "Cloud & DevOps", label: "Cloud & Security" },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    document.title = "All Courses & Certifications | Third Eye Computer Classes Jaipur";
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "all" ||
        course.category === activeCategory ||
        (activeCategory === "Design & UI/UX" &&
          (course.category === "Design & UI/UX" ||
            course.category === "Graphic Design" ||
            course.category === "Publishing & Layout" ||
            course.category === "Video Editing" ||
            course.category === "Design & VFX")) ||
        (activeCategory === "Cloud & DevOps" &&
          (course.category === "Cloud & DevOps" || course.category === "Cyber Security"));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      <style>{`
        .course-page {
          min-height: 100vh;
          padding: 90px 6%;
          background:
            radial-gradient(circle at 15% 15%, rgba(246, 217, 107, 0.08), transparent 25%),
            radial-gradient(circle at 85% 80%, rgba(246, 217, 107, 0.07), transparent 25%),
            #050505;
          position: relative;
          overflow: hidden;
        }

        .course-page::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 45px 45px;
          pointer-events: none;
        }

        .courses-section {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
        }

        .courses-heading {
          max-width: 820px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .courses-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(246, 217, 107, 0.1);
          border: 1px solid rgba(246, 217, 107, 0.25);
          color: #f6d96b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .courses-heading h1 {
          margin: 0 0 20px;
          color: #ffffff;
          font-size: clamp(38px, 5.5vw, 64px);
          line-height: 1.1;
          font-weight: 850;
          letter-spacing: -1.5px;
        }

        .courses-heading p {
          margin: 0 auto;
          color: #a9a9a9;
          font-size: 17px;
          line-height: 1.8;
          max-width: 680px;
        }

        /* Controls: Search and Filter Pills */
        .courses-controls {
          max-width: 780px;
          margin: 0 auto 60px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          align-items: center;
        }

        .courses-search-wrap {
          position: relative;
          width: 100%;
          max-width: 600px;
        }

        .courses-search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #f6d96b;
          pointer-events: none;
        }

        .courses-search-input {
          width: 100%;
          padding: 15px 45px 15px 50px;
          background: #111420;
          border: 1px solid #272a38;
          border-radius: 14px;
          color: #ffffff;
          font-size: 15px;
          outline: none;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
          transition: all 0.25s ease;
        }

        .courses-search-input:focus {
          border-color: #f6d96b;
          box-shadow: 0 0 0 3px rgba(246, 217, 107, 0.2);
          background: #151928;
        }

        .courses-search-input::placeholder {
          color: #71717a;
        }

        .courses-search-clear {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #71717a;
          font-size: 14px;
          cursor: pointer;
          padding: 4px;
        }

        .courses-search-clear:hover {
          color: #ffffff;
        }

        .courses-filter-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }

        .courses-pill {
          padding: 7px 16px;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid #272a38;
          background: #111420;
          color: #a1a1aa;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .courses-pill:hover {
          border-color: rgba(246, 217, 107, 0.4);
          color: #ffffff;
        }

        .courses-pill.active {
          background: #f6d96b;
          color: #080808;
          border-color: #f6d96b;
          font-weight: 750;
        }

        .courses-meta-count {
          font-size: 13px;
          color: #71717a;
          font-weight: 500;
        }

        /* Zigzag Grid */
        .courses-grid {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .course-card {
          position: relative;
          display: block;
          width: 62%;
          min-height: 255px;
          padding: 34px;
          overflow: hidden;
          text-decoration: none;
          background: #f6d96b;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          box-shadow:
            0 12px 0 rgba(255, 255, 255, 0.035),
            0 25px 50px rgba(0, 0, 0, 0.35);
          transition:
            transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
            box-shadow 0.4s ease,
            background 0.3s ease;
        }

        .course-card:nth-child(even) {
          align-self: flex-end;
        }

        .course-card:nth-child(odd) {
          align-self: flex-start;
        }

        .course-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          top: -90px;
          right: -60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          transition: transform 0.5s ease;
        }

        .course-card::after {
          content: "";
          position: absolute;
          width: 120px;
          height: 120px;
          bottom: -70px;
          left: -50px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.07);
          transition: transform 0.5s ease;
        }

        .course-card:hover {
          transform: translateY(-10px) scale(1.015);
          background: #f9dc77;
          box-shadow:
            0 18px 0 rgba(255, 255, 255, 0.045),
            0 35px 70px rgba(246, 217, 107, 0.2);
        }

        .course-card:hover::before {
          transform: scale(1.6);
        }

        .course-card:hover::after {
          transform: scale(1.5);
        }

        .course-card-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .course-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .course-card-number {
          font-family: monospace;
          font-size: 13px;
          font-weight: 800;
          color: rgba(8, 8, 8, 0.55);
          letter-spacing: 1px;
        }

        .course-card-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.08);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #080808;
        }

        .course-card h2 {
          margin: 0 0 14px;
          color: #080808;
          font-size: 26px;
          line-height: 1.25;
          font-weight: 850;
          letter-spacing: -0.5px;
        }

        .course-card p {
          max-width: 680px;
          margin: 0;
          color: #242424;
          font-size: 15px;
          line-height: 1.7;
          flex-grow: 1;
        }

        .course-card-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 22px;
          font-size: 14px;
          font-weight: 800;
          color: #080808;
          transition: gap 0.2s ease;
        }

        .course-card:hover .course-card-action {
          gap: 10px;
        }

        .course-card-action svg {
          transition: transform 0.25s ease;
        }

        .course-card:hover .course-card-action svg {
          transform: translate(3px, -3px);
        }

        /* Empty state */
        .courses-empty {
          text-align: center;
          padding: 70px 20px;
          background: #111420;
          border: 1px dashed #272a38;
          border-radius: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        .courses-empty h3 {
          font-size: 20px;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .courses-empty p {
          color: #71717a;
          font-size: 14px;
          margin: 0 0 20px;
        }

        .courses-empty-btn {
          padding: 9px 20px;
          background: #f6d96b;
          color: #080808;
          border: none;
          border-radius: 10px;
          font-weight: 750;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .courses-empty-btn:hover {
          background: #f9dc77;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .course-page {
            padding: 60px 5%;
          }

          .courses-heading {
            margin-bottom: 36px;
          }

          .courses-heading h1 {
            font-size: clamp(32px, 8vw, 44px);
          }

          .courses-controls {
            margin-bottom: 40px;
          }

          .courses-grid {
            gap: 24px;
          }

          .course-card {
            width: 100% !important;
            align-self: center !important;
            padding: 24px;
            min-height: auto;
            border-radius: 18px;
          }

          .course-card h2 {
            font-size: 21px;
            margin-bottom: 10px;
          }

          .course-card p {
            font-size: 14px;
            line-height: 1.6;
          }
        }
      `}</style>

      <div className="course-page">
        <div className="courses-section">
          {/* Header */}
          <div className="courses-heading">
            <div className="courses-badge">
              <Sparkles size={13} />
              <span>Career Programs & Certifications</span>
            </div>
            <h1>Explore Our Courses</h1>
            <p>
              Master high-demand technical and creative skills with hands-on lab training,
              industry projects, and government-recognized certifications in Jaipur.
            </p>
          </div>

          {/* Controls: Search & Category Pills */}
          <div className="courses-controls">
            <div className="courses-search-wrap">
              <Search className="courses-search-icon" size={19} />
              <input
                type="text"
                placeholder="Search 28+ courses (e.g., Python, React, Animation, AWS, UI/UX)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="courses-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="courses-search-clear"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="courses-filter-pills">
              {categoryFilters.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`courses-pill ${activeCategory === cat.id ? "active" : ""}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="courses-meta-count">
              Showing {filteredCourses.length} of {courses.length} courses
            </div>
          </div>

          {/* Grid or Empty */}
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course, index) => (
                <a
                  key={course.title}
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-card group"
                >
                  <div className="course-card-content">
                    <div className="course-card-header">
                      <span className="course-card-number">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="course-card-tag">{course.category}</span>
                    </div>
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <div className="course-card-action">
                      <span>Explore Course Syllabus</span>
                      <ArrowUpRight size={17} strokeWidth={2.4} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="courses-empty">
              <h3>No courses found</h3>
              <p>We couldn't find any courses matching "{searchQuery}". Try a different keyword or reset filters.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="courses-empty-btn"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Courses;

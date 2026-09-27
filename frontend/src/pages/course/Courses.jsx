import React, { useState, useEffect, useMemo } from "react";
import { Search, ArrowUpRight, Sparkles } from "lucide-react";
import "./Courses.css";

const courses = [
  {
    title: "2D & 3D Animation",
    category: "Animation & 3D",
    description:
      "Bring your creative ideas to life through animation, visual storytelling, and 3D design. Build skills for the world of digital media and animation.",
     link: "/courses/2d-3d-animation",
  },
  {
    title: "3D CAD Matrix",
    category: "CAD & 3D",
    description:
      "Learn professional 3D CAD concepts and create accurate digital models. Develop practical skills used across design and engineering industries.",
    link: "/courses/3d-cad-matrix",
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
    <div className="course-page mt-15">
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
  );
};

export default Courses;

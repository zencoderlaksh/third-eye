import React from "react";
import "./FranchiseCourses.css";
import { 
  BookOpen, 
  Layers, 
  Clock, 
  CheckCircle, 
  Sparkles, 
  MonitorPlay, 
  Briefcase, 
  Globe 
} from "lucide-react";

export default function FranchiseCourses() {

  const categories = [
    {
      id: "professional",
      title: "PROFESSIONAL COURSES",
      badge: "2 to 6 Months",
      icon: <Clock size={20} />,
      points: [
        "Duration: 2 to 6 Months intensive curriculum",
        "Project-Based Learning with real-world business applications",
        "Placement Readiness Program (Soft skills & technical interview prep)"
      ]
    },
    {
      id: "job-oriented",
      title: "JOB-ORIENTED PROGRAMS",
      badge: "8 + 4 Months",
      icon: <Briefcase size={20} />,
      points: [
        "8 Months Advanced Training + 4 Months Guaranteed Industry Internship",
        "Curriculum co-designed in direct collaboration with industry tech leaders",
        "Minimum 3 Live Industry Projects for comprehensive student portfolio building"
      ]
    },
    {
      id: "overseas",
      title: "OVERSEAS CAREER SUPPORT",
      badge: "Global Pathways",
      icon: <Globe size={20} />,
      points: [
        "Dedicated career counselling for global tech opportunities",
        "Complete assistance with international university selection & visa documentation",
        "Guidance for admission into reputed accredited international programs"
      ]
    },
    {
      id: "bootcamps",
      title: "WORKSHOPS & BOOTCAMPS",
      badge: "7 to 10 Days",
      icon: <Layers size={20} />,
      points: [
        "Intensive 7 to 10 days short-term specialized programs",
        "Laser-focused on rapid upskilling and cutting-edge domain knowledge",
        "100% Hands-on practical lab sessions with immediate output"
      ]
    },
    {
      id: "hybrid",
      title: "RECORDED + LIVE CLASSES",
      badge: "Hybrid Flexibility",
      icon: <MonitorPlay size={20} />,
      points: [
        "Unlimited access to recorded video sessions anytime for seamless revision",
        "Attend live interactive masterclasses for real-time doubt clearing",
        "A proven blend of self-paced flexibility and expert instructor guidance"
      ]
    },
    {
      id: "corporate",
      title: "CORPORATE TRAINING",
      badge: "Enterprise Grade",
      icon: <BookOpen size={20} />,
      points: [
        "Engineered to bridge specific technical skill gaps within enterprises",
        "Customized workforce performance enhancement roadmaps",
        "Project-driven modules designed for immediate workplace ROI"
      ]
    }
  ];

  const trendingCourses = [
    { name: "Digital Marketing", tag: "High Demand", category: "marketing" },
    { name: "Web Designing & UI/UX", tag: "Creative Tech", category: "design" },
    { name: "Graphic Designing", tag: "Visual Arts", category: "design" },
    { name: "Ethical Hacking & Cyber Security", tag: "Security", category: "tech" },
    { name: "2D & 3D Animation", tag: "VFX / Media", category: "media" },
    { name: "SAP-FICO | SAP-MM", tag: "Enterprise ERP", category: "finance" },
    { name: "Data Science & AI", tag: "Trending", category: "tech" },
    { name: "CAD | CAM & Architecture", tag: "Engineering", category: "engineering" },
    { name: "Jewellery Design & Matrix", tag: "Specialized", category: "design" },
    { name: "Tally Prime | GST Accounting", tag: "Finance", category: "finance" },
    { name: "Android App Development", tag: "Mobile Tech", category: "tech" },
    { name: "PGDCA Degree Support", tag: "Academics", category: "academics" },
    { name: "SketchUp 3D Modeling", tag: "Civil / Interior", category: "engineering" },
    { name: "MERN & MEAN Full Stack", tag: "Software Eng", category: "tech" },
    { name: "3Ds Max Architecture", tag: "Visualization", category: "design" },
    { name: "E-Commerce & Dropshipping", tag: "Business", category: "marketing" },
    { name: "Interior Designing", tag: "Creative", category: "design" },
    { name: "Z-Brush Sculpting", tag: "3D Art", category: "media" }
  ];

  return (
    <section className="courses-franchise-section" id="courses">
      <div className="courses-franchise-container">
        {/* Section Header */}
        <div className="courses-header-block">
          <div className="courses-badge">
            <BookOpen size={16} />
            <span>OFFLINE & ONLINE PORTFOLIO</span>
          </div>
          <h2 className="courses-title">300+ JOB-ORIENTED COURSES</h2>
          <p className="courses-sub">
            As a Thirdeye franchise partner, your center gains instant rights to teach high-margin, 
            market-aligned training programs across tech, design, finance, and enterprise software.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <div className="category-card-top">
                <div className="cat-icon-badge">{cat.icon}</div>
                <span className="cat-duration-badge">{cat.badge}</span>
              </div>
              <h3 className="cat-card-title">{cat.title}</h3>
              <div className="cat-points-list">
                {cat.points.map((pt, i) => (
                  <div key={i} className="cat-point-row">
                    <CheckCircle size={15} className="cat-point-check" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trending Courses Grid */}
        <div className="trending-courses-wrapper">
          <div className="trending-header-bar">
            <div className="trending-title-left">
              <Sparkles size={22} className="sparkle-icon" />
              <div>
                <h3 className="trending-title">TOP ENROLLMENT COURSES</h3>
                <p className="trending-sub">High-conversion curriculum with immediate local batch demand</p>
              </div>
            </div>
            <div className="trending-count-badge">18+ HIGH DEMAND TRACKS</div>
          </div>

          <div className="trending-chips-grid">
            {trendingCourses.map((course, idx) => (
              <div key={idx} className="trending-chip">
                <span className="chip-indicator"></span>
                <span className="chip-name">{course.name}</span>
                <span className="chip-tag">{course.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

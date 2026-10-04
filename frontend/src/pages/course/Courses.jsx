import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, Sparkles, RefreshCw, PlusCircle } from "lucide-react";
import ThirdEyeSpinner from "../../components/ThirdEyeSpinner";
import { getCourses } from "../../services/courseApi";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    document.title = "All Courses & Certifications | Third Eye Computer Classes Jaipur";
    window.scrollTo(0, 0);

    let isMounted = true;
    getCourses()
      .then((data) => {
        if (isMounted) setCourses(data || []);
      })
      .catch((err) => {
        console.error("Failed to load courses:", err);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Compute categories dynamically from fetched courses
  const categoryFilters = useMemo(() => {
    const cats = new Set();
    courses.forEach((c) => {
      if (c.category) cats.add(c.category);
    });
    const dynamicList = Array.from(cats).map((cat) => ({ id: cat, label: cat }));
    return [{ id: "all", label: "All Courses" }, ...dynamicList];
  }, [courses]);

  // Filter courses based on activeCategory and searchQuery
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        activeCategory === "all" ||
        (course.category && course.category.toLowerCase() === activeCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        course.title?.toLowerCase().includes(query) ||
        course.description?.toLowerCase().includes(query) ||
        course.category?.toLowerCase().includes(query) ||
        course.slug?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [courses, activeCategory, searchQuery]);

  return (
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
              placeholder="Search dynamic courses (e.g., Python, React, Animation, AWS, UI/UX)..."
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
            {isLoading
              ? "Loading courses catalog..."
              : `Showing ${filteredCourses.length} of ${courses.length} courses`}
          </div>
        </div>

        {/* Content Area */}
        {isLoading ? (
          <div className="courses-loading-wrap flex flex-col items-center justify-center py-20 text-center">
            <ThirdEyeSpinner size="lg" showGlow={true} />
            <p className="mt-4 text-sm font-mono tracking-wider text-zinc-400">
              Fetching dynamic studio courses...
            </p>
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="courses-grid">
            {filteredCourses.map((course, index) => {
              const courseUrl = course.slug
                ? `/courses/${course.slug}`
                : (course.link || "/courses");

              const CardContent = (
                <div className="course-card-content">
                  <div className="course-card-header">
                    <span className="course-card-number">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="course-card-tag">{course.category || "Certification"}</span>
                  </div>
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                  <div className="course-card-action">
                    <span>Explore Course Syllabus</span>
                    <ArrowUpRight size={17} strokeWidth={2.4} />
                  </div>
                </div>
              );

              return (
                <Link
                  key={course._id || course.id || course.title}
                  to={courseUrl}
                  className="course-card group"
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="courses-empty">
            <h3>No courses found</h3>
            <p>
              {searchQuery || activeCategory !== "all"
                ? `We couldn't find any courses matching "${searchQuery}". Try a different keyword or reset filters.`
                : "No courses currently available in the dynamic catalog. Visit the Admin Panel to publish new courses."}
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "16px" }}>
              {(searchQuery || activeCategory !== "all") ? (
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
              ) : (
                <Link to="/admin" className="courses-empty-btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                  <PlusCircle size={16} />
                  <span>Go to Admin Panel</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

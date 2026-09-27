import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  ExternalLink,
  BookOpen,
  Cloud,
  Database,
  Layers,
  Sparkles,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { getCourses, createCourse, updateCourse, deleteCourse } from "../../services/courseApi";
import CourseFormModal from "./components/CourseFormModal";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import "./AdminPage.css";

export default function AdminPage() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [toastMessage, setToastMessage] = useState("");
  const [serverHealth, setServerHealth] = useState(null);

  // Modal states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deletingCourse, setDeletingCourse] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 4000);
  };

  const loadData = () => {
    setIsLoading(true);
    getCourses()
      .then((data) => {
        setCourses(data);
      })
      .catch((err) => {
        console.error("Failed to load courses:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    fetch("/api/health")
      .then((res) => (res.ok ? res.json() : null))
      .then((h) => {
        if (h) setServerHealth(h);
      })
      .catch(() => {});
  };

  useEffect(() => {
    document.title = "Admin Console | Third Eye Courses Management";
    window.scrollTo(0, 0);

    let isMounted = true;
    getCourses()
      .then((data) => {
        if (isMounted) setCourses(data);
      })
      .catch((err) => {
        console.error("Failed to load courses:", err);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    fetch("/api/health")
      .then((res) => (res.ok ? res.json() : null))
      .then((h) => {
        if (isMounted && h) setServerHealth(h);
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter courses by search and category
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesCategory =
        selectedCategory === "all" ||
        (c.category && c.category.toLowerCase() === selectedCategory.toLowerCase());
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        c.title?.toLowerCase().includes(q) ||
        c.slug?.toLowerCase().includes(q) ||
        c.description?.toLowerCase().includes(q) ||
        c.category?.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [courses, searchQuery, selectedCategory]);

  // Categories list derived from current courses
  const categoriesList = useMemo(() => {
    const set = new Set();
    courses.forEach((c) => {
      if (c.category) set.add(c.category);
    });
    return ["all", ...Array.from(set)];
  }, [courses]);

  // Open Create Modal
  const handleOpenCreate = () => {
    setEditingCourse(null);
    setIsFormOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (course) => {
    setEditingCourse(course);
    setIsFormOpen(true);
  };

  // Open Delete Modal
  const handleOpenDelete = (course) => {
    setDeletingCourse(course);
    setIsDeleteOpen(true);
  };

  // Save (Create or Update)
  const handleSaveCourse = async (courseData, imageFile) => {
    setIsSaving(true);
    try {
      if (editingCourse) {
        const id = editingCourse._id || editingCourse.id;
        const updated = await updateCourse(id, courseData, imageFile);
        setCourses((prev) =>
          prev.map((c) => ((c._id && c._id === id) || (c.id && c.id === id) ? updated : c))
        );
        showToast(`Course "${courseData.title}" updated successfully!`);
      } else {
        const created = await createCourse(courseData, imageFile);
        setCourses((prev) => [created, ...prev]);
        showToast(`Course "${courseData.title}" published successfully!`);
      }
      setIsFormOpen(false);
      setEditingCourse(null);
    } catch (err) {
      alert(`Failed to save course: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  // Delete Action
  const handleConfirmDelete = async (id) => {
    setIsDeleting(true);
    try {
      await deleteCourse(id);
      setCourses((prev) => prev.filter((c) => c._id !== id && c.id !== id));
      showToast("Course deleted successfully.");
      setIsDeleteOpen(false);
      setDeletingCourse(null);
    } catch (err) {
      alert(`Failed to delete course: ${err.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  // Seed 1 sample course for quick start
  const handleSeedSampleCourse = async () => {
    setIsSaving(true);
    const sample = {
      title: "MERN Full Stack Development",
      slug: "mern-full-stack-development",
      category: "Web Development",
      duration: "6 Months",
      badge: "Job Oriented",
      description: "Master modern full-stack engineering with MongoDB, Express.js, React, Node.js, Next.js, and automated cloud deployments.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=80",
      prerequisites: [
        "Basic computer literacy",
        "Curiosity for building web applications",
        "No prior coding experience required",
      ],
      tools: [
        { id: "react", name: "React 19", iconType: "react", glowColor: "rgba(97, 218, 251, 0.3)" },
        { id: "nodejs", name: "Node.js", iconType: "nodejs", glowColor: "rgba(104, 160, 99, 0.3)" },
        { id: "mongodb", name: "MongoDB", iconType: "mongodb", glowColor: "rgba(71, 162, 72, 0.3)" },
        { id: "tailwind", name: "Tailwind CSS", iconType: "tailwind", glowColor: "rgba(56, 189, 248, 0.3)" },
      ],
      modules: [
        { id: "m-1", moduleNumber: "MODULE 1", title: "HTML5, CSS3, Modern UI & Responsive Layouts", description: "Design principles, flexbox, CSS grid, and modern styling architectures." },
        { id: "m-2", moduleNumber: "MODULE 2", title: "JavaScript ES6+, DOM Manipulation & Async Engine", description: "Closures, promises, fetch API, events, and modern JS patterns." },
        { id: "m-3", moduleNumber: "MODULE 3", title: "React, State Management & Modern Hooks", description: "Functional components, custom hooks, context, and client-side routing." },
        { id: "m-4", moduleNumber: "MODULE 4", title: "Node.js, Express & RESTful API Architecture", description: "Middleware, JWT authentication, error handling, and server logic." },
        { id: "m-5", moduleNumber: "MODULE 5", title: "MongoDB Database Modeling & Cloud Deployments", description: "Aggregation pipelines, schema validation, Docker, and CI/CD hosting." },
      ],
    };

    try {
      const created = await createCourse(sample);
      setCourses((prev) => [created, ...prev]);
      showToast("Sample course created successfully!");
    } catch (err) {
      alert("Failed to create sample course: " + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="admin-page">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="admin-toast">
          <CheckCircle2 size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="admin-container">
        {/* Top Header */}
        <div className="admin-header">
          <div>
            <div className="admin-badge-row">
              <span className="admin-badge">ADMIN CONSOLE</span>
              <span className="admin-status-pill">
                <Cloud size={14} />
                <span>
                  ImageKit: {serverHealth?.imagekit === "connected" ? "Active" : "Available"}
                </span>
              </span>
            </div>
            <h1 className="admin-title">Course Management</h1>
            <p className="admin-subtitle">
              Add, edit, remove, and manage all live courses dynamically with ImageKit CDN uploads.
            </p>
          </div>

          <div className="admin-header-actions">
            <button className="admin-refresh-btn" onClick={loadData} title="Refresh catalog">
              <RefreshCw size={17} className={isLoading ? "spin" : ""} />
            </button>
            <button className="admin-add-btn" onClick={handleOpenCreate}>
              <Plus size={18} />
              <span>Add New Course</span>
            </button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="admin-metrics-grid">
          <div className="admin-metric-card">
            <div className="metric-icon-wrap yellow">
              <BookOpen size={20} />
            </div>
            <div className="metric-info">
              <span className="metric-val">{courses.length}</span>
              <span className="metric-label">Active Courses</span>
            </div>
          </div>

          <div className="admin-metric-card">
            <div className="metric-icon-wrap blue">
              <Layers size={20} />
            </div>
            <div className="metric-info">
              <span className="metric-val">{Math.max(categoriesList.length - 1, 0)}</span>
              <span className="metric-label">Categories</span>
            </div>
          </div>

          <div className="admin-metric-card">
            <div className="metric-icon-wrap green">
              <Cloud size={20} />
            </div>
            <div className="metric-info">
              <span className="metric-val">ImageKit</span>
              <span className="metric-label">CDN Storage Engine</span>
            </div>
          </div>

          <div className="admin-metric-card">
            <div className="metric-icon-wrap purple">
              <Database size={20} />
            </div>
            <div className="metric-info">
              <span className="metric-val">Dynamic API</span>
              <span className="metric-label">Database Connected</span>
            </div>
          </div>
        </div>

        {/* Controls: Search & Category Filters */}
        <div className="admin-controls-card">
          <div className="admin-search-wrap">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by title, category, description, or slug..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="search-clear-btn" onClick={() => setSearchQuery("")}>
                Clear
              </button>
            )}
          </div>

          <div className="admin-filter-pills">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                className={`admin-filter-pill ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "all" ? "All Categories" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Table / Cards Grid */}
        {isLoading ? (
          <div className="admin-loading-state">
            <RefreshCw size={32} className="spin admin-loading-icon" />
            <p>Loading course catalog...</p>
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="admin-courses-grid">
            {filteredCourses.map((course) => (
              <div key={course._id || course.id} className="admin-course-card">
                {/* Image Banner */}
                <div className="admin-card-image-wrap">
                  {course.image ? (
                    <img src={course.image} alt={course.title} className="admin-card-img" />
                  ) : (
                    <div className="admin-card-placeholder-img">
                      <BookOpen size={36} />
                    </div>
                  )}
                  {course.badge && (
                    <span className="admin-card-badge">{course.badge}</span>
                  )}
                  <span className="admin-card-category">{course.category || "General"}</span>
                </div>

                {/* Content */}
                <div className="admin-card-body">
                  <h3 className="admin-card-title">{course.title}</h3>
                  <div className="admin-card-slug">/courses/{course.slug}</div>
                  <p className="admin-card-desc">
                    {course.description || "No description provided for this course."}
                  </p>

                  <div className="admin-card-meta">
                    <span className="card-meta-pill">⏱ {course.duration || "6 Months"}</span>
                    <span className="card-meta-pill">
                      📚 {course.modules?.length || 5} Modules
                    </span>
                    <span className="card-meta-pill">
                      🛠 {course.tools?.length || 4} Tools
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="admin-card-actions">
                  <Link
                    to={`/courses/${course.slug}`}
                    className="admin-action-btn view"
                    title="View live course page"
                  >
                    <ExternalLink size={15} />
                    <span>View Page</span>
                  </Link>

                  <div className="admin-action-group">
                    <button
                      className="admin-action-btn edit"
                      onClick={() => handleOpenEdit(course)}
                      title="Edit course"
                    >
                      <Edit2 size={15} />
                      <span>Edit</span>
                    </button>
                    <button
                      className="admin-action-btn delete"
                      onClick={() => handleOpenDelete(course)}
                      title="Delete course"
                    >
                      <Trash2 size={15} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="admin-empty-state">
            <div className="empty-icon-wrap">
              <Sparkles size={36} />
            </div>
            <h3>No dynamic courses found</h3>
            <p>
              {searchQuery
                ? `No courses matching "${searchQuery}". Try a different keyword.`
                : "All dummy courses have been cleared. You can now publish courses dynamically with ImageKit CDN image upload."}
            </p>
            <div className="empty-actions">
              <button className="empty-btn-primary" onClick={handleOpenCreate}>
                <Plus size={16} />
                <span>Create New Course</span>
              </button>
              {courses.length === 0 && (
                <button
                  className="empty-btn-secondary"
                  onClick={handleSeedSampleCourse}
                  disabled={isSaving}
                >
                  <Sparkles size={16} />
                  <span>Load Sample Course</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Course Form Modal (Add / Edit) */}
      <CourseFormModal
        key={editingCourse?._id || editingCourse?.id || (isFormOpen ? "open" : "closed")}
        isOpen={isFormOpen}
        course={editingCourse}
        onClose={() => setIsFormOpen(false)}
        onSave={handleSaveCourse}
        isSaving={isSaving}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        course={deletingCourse}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleConfirmDelete}
        isDeleting={isDeleting}
      />
    </div>
  );
}

const fs = require("fs");
const path = require("path");
const Course = require("../models/Course");
const { getDBStatus } = require("../config/db");

const DATA_DIR = path.join(__dirname, "../data");
const DATA_FILE = path.join(DATA_DIR, "courses.json");

// Ensure data directory and file exist for fallback
const ensureFileStorage = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2), "utf-8");
  }
};

const readCoursesFromFile = () => {
  ensureFileStorage();
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading courses from JSON file:", err.message);
    return [];
  }
};

const writeCoursesToFile = (courses) => {
  ensureFileStorage();
  fs.writeFileSync(DATA_FILE, JSON.stringify(courses, null, 2), "utf-8");
};

// Auto generate URL-friendly slug
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/**
 * Course Storage Facade (MongoDB + Local JSON File Fallback)
 */
const CourseStore = {
  // 1. Get All Courses
  async getAll(query = {}) {
    if (getDBStatus()) {
      const filter = {};
      if (query.category && query.category !== "all") {
        filter.category = new RegExp(query.category, "i");
      }
      if (query.search) {
        filter.$or = [
          { title: new RegExp(query.search, "i") },
          { description: new RegExp(query.search, "i") },
          { category: new RegExp(query.search, "i") },
        ];
      }
      return await Course.find(filter).sort({ createdAt: -1 });
    }

    // File Storage Fallback
    let courses = readCoursesFromFile();
    if (query.category && query.category !== "all") {
      courses = courses.filter((c) =>
        c.category?.toLowerCase().includes(query.category.toLowerCase())
      );
    }
    if (query.search) {
      const q = query.search.toLowerCase();
      courses = courses.filter(
        (c) =>
          c.title?.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          c.category?.toLowerCase().includes(q)
      );
    }
    return courses.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  },

  // 2. Find Course by Slug or ID
  async getBySlugOrId(identifier) {
    if (getDBStatus()) {
      let course = null;
      if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
        course = await Course.findById(identifier);
      }
      if (!course) {
        course = await Course.findOne({ slug: identifier.toLowerCase() });
      }
      return course;
    }

    const courses = readCoursesFromFile();
    return (
      courses.find(
        (c) =>
          (c._id && c._id.toString() === identifier) ||
          (c.id && c.id.toString() === identifier) ||
          (c.slug && c.slug.toLowerCase() === identifier.toLowerCase())
      ) || null
    );
  },

  // 3. Create Course
  async create(data) {
    const slug = data.slug ? generateSlug(data.slug) : generateSlug(data.title);

    if (getDBStatus()) {
      const existing = await Course.findOne({ slug });
      const finalSlug = existing ? `${slug}-${Date.now().toString().slice(-4)}` : slug;
      const course = new Course({ ...data, slug: finalSlug });
      return await course.save();
    }

    const courses = readCoursesFromFile();
    const existing = courses.find((c) => c.slug === slug);
    const finalSlug = existing ? `${slug}-${Date.now().toString().slice(-4)}` : slug;

    const newCourse = {
      _id: "c_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      ...data,
      slug: finalSlug,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    courses.unshift(newCourse);
    writeCoursesToFile(courses);
    return newCourse;
  },

  // 4. Update Course
  async update(id, data) {
    if (getDBStatus()) {
      if (data.title && !data.slug) {
        data.slug = generateSlug(data.title);
      }
      return await Course.findByIdAndUpdate(id, data, { new: true });
    }

    const courses = readCoursesFromFile();
    const index = courses.findIndex(
      (c) => (c._id && c._id.toString() === id) || (c.id && c.id.toString() === id)
    );

    if (index === -1) return null;

    if (data.title && !data.slug) {
      data.slug = generateSlug(data.title);
    }

    const updated = {
      ...courses[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    courses[index] = updated;
    writeCoursesToFile(courses);
    return updated;
  },

  // 5. Delete Course
  async delete(id) {
    if (getDBStatus()) {
      const res = await Course.findByIdAndDelete(id);
      return Boolean(res);
    }

    const courses = readCoursesFromFile();
    const filtered = courses.filter(
      (c) => (c._id && c._id.toString() !== id) && (c.id && c.id.toString() !== id)
    );

    const deleted = filtered.length < courses.length;
    if (deleted) {
      writeCoursesToFile(filtered);
    }
    return deleted;
  },
};

module.exports = CourseStore;

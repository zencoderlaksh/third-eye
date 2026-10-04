const Course = require("../models/Course");
const { getDBStatus } = require("../config/db");

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
 * Course Storage Service (MongoDB Only)
 */
const CourseStore = {
  checkDB() {
    if (!getDBStatus()) {
      throw new Error("MongoDB database is not connected. All course operations strictly require an active MongoDB connection.");
    }
  },

  // 1. Get All Courses
  async getAll(query = {}) {
    this.checkDB();
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
  },

  // 2. Find Course by Slug or ID
  async getBySlugOrId(identifier) {
    this.checkDB();
    let course = null;
    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      course = await Course.findById(identifier);
    }
    if (!course) {
      course = await Course.findOne({ slug: identifier.toLowerCase() });
    }
    return course;
  },

  // 3. Create Course
  async create(data) {
    this.checkDB();
    const slug = data.slug ? generateSlug(data.slug) : generateSlug(data.title);
    const existing = await Course.findOne({ slug });
    const finalSlug = existing ? `${slug}-${Date.now().toString().slice(-4)}` : slug;
    const course = new Course({ ...data, slug: finalSlug });
    return await course.save();
  },

  // 4. Update Course
  async update(id, data) {
    this.checkDB();
    if (data.title && !data.slug) {
      data.slug = generateSlug(data.title);
    }
    return await Course.findByIdAndUpdate(id, data, { returnDocument: "after", runValidators: true });
  },

  // 5. Delete Course
  async delete(id) {
    this.checkDB();
    const res = await Course.findByIdAndDelete(id);
    return Boolean(res);
  },
};

module.exports = CourseStore;

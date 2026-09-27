const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema(
  {
    id: { type: String, default: "" },
    name: { type: String, required: true },
    iconType: { type: String, default: "code" },
    glowColor: { type: String, default: "rgba(246, 217, 107, 0.3)" },
  },
  { _id: false }
);

const ModuleSchema = new mongoose.Schema(
  {
    id: { type: String, default: "" },
    moduleNumber: { type: String, default: "MODULE 1" },
    title: { type: String, required: true },
    description: { type: String, default: "" },
  },
  { _id: false }
);

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Course slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      default: "General",
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    badge: {
      type: String,
      default: "Job Oriented",
    },
    duration: {
      type: String,
      default: "6 Months",
    },
    prerequisites: {
      type: [String],
      default: [
        "Basic computer literacy",
        "Passion for hands-on learning",
        "No prior coding experience required",
      ],
    },
    tools: {
      type: [ToolSchema],
      default: [],
    },
    modules: {
      type: [ModuleSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", CourseSchema);

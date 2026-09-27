const express = require("express");
const multer = require("multer");
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  uploadImage,
} = require("../controllers/courseController");

const router = express.Router();

// Memory storage so multer buffers file in memory for Cloudinary upload stream
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB max
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"), false);
    }
  },
});

// Standalone image upload endpoint (used by Cloudinary upload widget / drag-and-drop)
router.post("/upload", upload.single("image"), uploadImage);

// Course CRUD endpoints
router.get("/courses", getCourses);
router.get("/courses/:idOrSlug", getCourse);
router.post("/courses", upload.single("image"), createCourse);
router.put("/courses/:id", upload.single("image"), updateCourse);
router.delete("/courses/:id", deleteCourse);

module.exports = router;

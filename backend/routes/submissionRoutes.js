const express = require("express");
const multer = require("multer");
const router = express.Router();
const submissionController = require("../controllers/submissionController");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024, // 15MB max for resumes
  },
});

// Helper middleware to safely parse multipart if sent, without breaking json
const handleResumeUpload = (req, res, next) => {
  upload.single("resume")(req, res, (err) => {
    if (err) {
      console.warn("[Multer] Upload warning:", err.message);
    }
    next();
  });
};

// Public Form Submission (handles both multipart with resume file and json)
router.post("/", handleResumeUpload, submissionController.createSubmission);
router.post("/upload-resume", handleResumeUpload, submissionController.uploadResume);

// Admin Submission Management
router.get("/", submissionController.getSubmissions);
router.get("/stats", submissionController.getSubmissionStats);
router.patch("/:id/status", submissionController.updateSubmissionStatus);
router.delete("/:id", submissionController.deleteSubmission);

module.exports = router;

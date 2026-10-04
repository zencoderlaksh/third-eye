const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

// 1. Get all jobs / filter
router.get("/jobs", jobController.getJobs);

// 2. Get single job by slug or ID
router.get("/jobs/:idOrSlug", jobController.getJob);

// 3. Create job
router.post("/jobs", jobController.createJob);

// 4. Update job
router.put("/jobs/:id", jobController.updateJob);

// 5. Delete job
router.delete("/jobs/:id", jobController.deleteJob);

module.exports = router;

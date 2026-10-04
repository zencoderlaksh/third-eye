const JobStore = require("../storage/jobStore");

/**
 * Controller: Get all jobs
 */
const getJobs = async (req, res) => {
  try {
    const { category, search, jobType, location } = req.query;
    const jobs = await JobStore.getAll({ category, search, jobType, location });
    res.json(jobs);
  } catch (err) {
    console.error("Error in getJobs:", err);
    res.status(500).json({ error: "Failed to fetch jobs", message: err.message });
  }
};

/**
 * Controller: Get single job by slug or ID
 */
const getJob = async (req, res) => {
  try {
    const { idOrSlug } = req.params;
    const job = await JobStore.getBySlugOrId(idOrSlug);
    if (!job) {
      return res.status(404).json({ error: "Job opening not found" });
    }
    res.json(job);
  } catch (err) {
    console.error("Error in getJob:", err);
    res.status(500).json({ error: "Failed to fetch job", message: err.message });
  }
};

/**
 * Controller: Create new job opening
 */
const createJob = async (req, res) => {
  try {
    const data = req.body;

    if (!data.title || !data.company || !data.location || !data.salary || !data.description) {
      return res.status(400).json({
        error: "Missing required fields: title, company, location, salary, description are required",
      });
    }

    const created = await JobStore.create(data);
    res.status(201).json(created);
  } catch (err) {
    console.error("Error in createJob:", err);
    res.status(500).json({ error: "Failed to create job", message: err.message });
  }
};

/**
 * Controller: Update existing job
 */
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updated = await JobStore.update(id, data);
    res.json(updated);
  } catch (err) {
    console.error("Error in updateJob:", err);
    res.status(500).json({ error: "Failed to update job", message: err.message });
  }
};

/**
 * Controller: Delete job
 */
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await JobStore.delete(id);
    res.json(result);
  } catch (err) {
    console.error("Error in deleteJob:", err);
    res.status(500).json({ error: "Failed to delete job", message: err.message });
  }
};

module.exports = {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};

const submissionStore = require("../storage/submissionStore");
const { uploadBufferToImageKit } = require("../config/imagekit");

// POST /api/submissions
exports.createSubmission = async (req, res) => {
  try {
    const body = req.body || {};
    const data = { ...body };

    // If candidate attached a resume file (PDF, DOCX, etc.), upload to ImageKit CDN
    if (req.file) {
      try {
        console.log(`[ImageKit] Uploading candidate resume "${req.file.originalname}"...`);
        const resumeUrl = await uploadBufferToImageKit(
          req.file.buffer,
          req.file.originalname,
          "/third_eye_resumes"
        );
        data.resumeUrl = resumeUrl;
        data.resumeFileName = req.file.originalname;
        console.log(`[ImageKit] Candidate resume uploaded successfully: ${resumeUrl}`);
      } catch (ikError) {
        console.error("ImageKit upload error for resume:", ikError.message);
        data.resumeFileName = req.file.originalname;
      }
    }

    const applicantName = (data.name || data.fullName || "").trim();
    if (!applicantName) {
      return res.status(400).json({
        success: false,
        message: "Your name is required to submit this form.",
      });
    }

    const phone = (data.phone || "").trim();
    if (!phone) {
      return res.status(400).json({
        success: false,
        message: "Your contact phone number is required.",
      });
    }

    data.name = applicantName;
    data.phone = phone;

    const created = await submissionStore.create(data);

    res.status(201).json({
      success: true,
      message: "Form inquiry successfully uploaded to database.",
      data: created,
    });
  } catch (error) {
    console.error("Error creating submission:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to submit form inquiry.",
    });
  }
};

// POST /api/submissions/upload-resume (Standalone resume upload)
exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No resume file provided" });
    }
    const url = await uploadBufferToImageKit(
      req.file.buffer,
      req.file.originalname,
      "/third_eye_resumes"
    );
    res.status(200).json({
      success: true,
      url,
      fileName: req.file.originalname,
    });
  } catch (error) {
    console.error("Error uploading resume to ImageKit:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to upload resume to ImageKit.",
    });
  }
};

// GET /api/submissions
exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await submissionStore.getAll(req.query);
    res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions,
    });
  } catch (error) {
    console.error("Error fetching submissions:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to retrieve form submissions.",
    });
  }
};

// GET /api/submissions/stats
exports.getSubmissionStats = async (req, res) => {
  try {
    const stats = await submissionStore.getStats();
    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching submission stats:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve submission statistics.",
    });
  }
};

// PATCH /api/submissions/:id/status
exports.updateSubmissionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;

    const updated = await submissionStore.updateStatus(id, status, adminNotes);
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Submission not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Submission status updated successfully.",
      data: updated,
    });
  } catch (error) {
    console.error("Error updating submission status:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update submission status.",
    });
  }
};

// DELETE /api/submissions/:id
exports.deleteSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await submissionStore.delete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Submission not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Submission removed from MongoDB.",
    });
  } catch (error) {
    console.error("Error deleting submission:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete submission.",
    });
  }
};

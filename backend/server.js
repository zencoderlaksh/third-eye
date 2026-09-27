const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const { isImageKitConfigured } = require("./config/imagekit");
const courseRoutes = require("./routes/courseRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database (MongoDB or local JSON fallback)
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes
app.use("/api", courseRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    imagekit: isImageKitConfigured() ? "connected" : "not_configured",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 [Third Eye Backend] Server running on http://localhost:${PORT}`);
  console.log(`📸 [ImageKit] Status: ${isImageKitConfigured() ? "Configured & Active" : "Missing credentials in backend/.env"}`);
  console.log(`📚 [Courses API] http://localhost:${PORT}/api/courses\n`);
});

module.exports = app;

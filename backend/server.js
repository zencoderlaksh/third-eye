const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const { connectDB, getDBStatus } = require("./config/db");
const { isImageKitConfigured } = require("./config/imagekit");
const courseRoutes = require("./routes/courseRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database (MongoDB)
connectDB();

// Allowed origins configuration (configured via FRONTEND_URL in .env)
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((url) => url.trim().replace(/\/$/, ""))
  : ["http://localhost:5173", "http://localhost:3000"];

// Middleware
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. curl, Postman, health checks, server-to-server)
      if (!origin) return callback(null, true);

      const normalizedOrigin = origin.replace(/\/$/, "");
      if (
        allowedOrigins.includes("*") ||
        allowedOrigins.includes(normalizedOrigin) ||
        process.env.NODE_ENV !== "production"
      ) {
        return callback(null, true);
      }

      return callback(new Error(`CORS error: Origin ${origin} not allowed by CORS policy`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes
app.use("/api", courseRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    database: getDBStatus() ? "connected" : "disconnected",
    imagekit: isImageKitConfigured() ? "connected" : "not_configured",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 [Third Eye Backend] Server running on port ${PORT}`);
  console.log(`📸 [ImageKit] Status: ${isImageKitConfigured() ? "Configured & Active" : "Missing credentials in backend/.env"}`);
  console.log(`🌐 [CORS] Allowed Origins: ${allowedOrigins.join(", ")}`);
  console.log(`📚 [Courses API] Endpoint active at /api/courses\n`);
});

module.exports = app;

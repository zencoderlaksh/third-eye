const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.log("ℹ️ [Database] MONGODB_URI not set. Using persistent local file storage (backend/data/courses.json).");
    return false;
  }

  try {
    const conn = await mongoose.connect(uri);
    isConnected = true;
    console.log(`✅ [MongoDB] Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`⚠️ [MongoDB] Connection error: ${error.message}`);
    console.log("ℹ️ [Database] Falling back to persistent local file storage (backend/data/courses.json).");
    isConnected = false;
    return false;
  }
};

const getDBStatus = () => isConnected;

module.exports = {
  connectDB,
  getDBStatus,
};

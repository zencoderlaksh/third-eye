const mongoose = require("mongoose");
const dns = require("dns");

// Set reliable public DNS servers (Google & Cloudflare) to prevent querySrv ECONNREFUSED
// which is frequently caused by local ISP / router DNS rejecting SRV queries
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (dnsErr) {
  // Ignore if custom DNS cannot be set
}

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("❌ [Database Error] MONGODB_URI is not set in backend/.env. MongoDB connection is required.");
    isConnected = false;
    return false;
  }

  try {
    const conn = await mongoose.connect(uri);
    isConnected = true;
    console.log(`✅ [MongoDB] Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ [MongoDB] Connection error: ${error.message}`);
    isConnected = false;
    return false;
  }
};

const getDBStatus = () => isConnected;

module.exports = {
  connectDB,
  getDBStatus,
};

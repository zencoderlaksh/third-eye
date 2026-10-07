const mongoose = require("mongoose");
const dns = require("dns");

// Set reliable public DNS servers (Google & Cloudflare) to prevent querySrv ECONNREFUSED
// which is frequently caused by local ISP / router DNS rejecting SRV queries
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (dnsErr) {
  // Ignore if custom DNS cannot be set
}

let isConnecting = false;

// Attach persistent Mongoose connection listeners
mongoose.connection.on("connected", () => {
  console.log(`✅ [MongoDB] Active connection host: ${mongoose.connection.host} (DB: ${mongoose.connection.db?.databaseName || "thirdeye"})`);
});

mongoose.connection.on("error", (err) => {
  console.error(`❌ [MongoDB] Connection error event: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ [MongoDB] Disconnected from database. Scheduling reconnect...");
  setTimeout(() => {
    connectDB().catch(() => {});
  }, 5000);
});

const connectDB = async (retryCount = 0) => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("❌ [Database Error] MONGODB_URI is not set in backend/.env. MongoDB connection is required.");
    return false;
  }

  if (mongoose.connection.readyState === 1) {
    return true;
  }

  if (isConnecting) {
    return false;
  }

  isConnecting = true;

  try {
    const conn = await mongoose.connect(uri, {
      dbName: "thirdeye",
      serverSelectionTimeoutMS: 15000,
    });
    isConnecting = false;
    console.log(`✅ [MongoDB] Successfully connected to database: ${conn.connection.db.databaseName}`);
    return true;
  } catch (error) {
    isConnecting = false;
    console.error(`❌ [MongoDB] Connection error (attempt ${retryCount + 1}): ${error.message}`);

    // If initial connection fails, retry with backoff up to 5 times
    if (retryCount < 5) {
      const delay = Math.min(2000 * Math.pow(1.5, retryCount), 10000);
      console.log(`⏳ [MongoDB] Retrying connection in ${Math.round(delay / 1000)}s...`);
      setTimeout(() => {
        connectDB(retryCount + 1).catch(() => {});
      }, delay);
    }

    return false;
  }
};

const getDBStatus = () => {
  // readyState 1 = connected, 2 = connecting (queries will buffer and resolve)
  return mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2;
};

module.exports = {
  connectDB,
  getDBStatus,
};

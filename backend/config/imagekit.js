const ImageKit = require("imagekit");
const dotenv = require("dotenv");

dotenv.config();

/**
 * Check if ImageKit credentials are validly supplied
 */
const isImageKitConfigured = () => {
  return Boolean(
    process.env.IMAGEKIT_PUBLIC_KEY &&
    process.env.IMAGEKIT_PRIVATE_KEY &&
    process.env.IMAGEKIT_URL_ENDPOINT
  );
};

let imageKitInstance = null;

const getImageKit = () => {
  if (!imageKitInstance && isImageKitConfigured()) {
    imageKitInstance = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    });
  }
  return imageKitInstance;
};

/**
 * Upload a file buffer directly to ImageKit
 * @param {Buffer} buffer - File buffer from multer memoryStorage
 * @param {string} originalName - Original filename
 * @param {string} folder - Target ImageKit directory folder
 * @returns {Promise<string>} - ImageKit CDN URL
 */
const uploadBufferToImageKit = async (buffer, originalName = "course_image.jpg", folder = "/third_eye_courses") => {
  const ik = getImageKit();
  if (!ik) {
    throw new Error("ImageKit credentials are not configured in backend/.env");
  }

  const safeFileName = `${Date.now()}_${originalName.replace(/[^\w.-]/g, "_")}`;

  const result = await ik.upload({
    file: buffer,
    fileName: safeFileName,
    folder: folder,
    useUniqueFileName: true,
  });

  return result.url;
};

module.exports = {
  isImageKitConfigured,
  uploadBufferToImageKit,
};

/**
 * Course API Service
 * Communicates with the Express backend for MongoDB Course CRUD operations and ImageKit image uploads.
 * All course data is stored strictly in MongoDB Atlas.
 */

const BASE_URL = (import.meta.env.VITE_API_URL || "").replace(/\/$/, "");
const API_BASE = `${BASE_URL}/api/courses`;
const UPLOAD_API = `${BASE_URL}/api/upload`;

/**
 * Check backend health status
 */
export async function getHealthStatus() {
  try {
    const res = await fetch(`${BASE_URL}/api/health`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

/**
 * Fetch all courses directly from MongoDB
 */
export async function getCourses() {
  const res = await fetch(API_BASE);
  if (!res.ok) {
    throw new Error(`Failed to fetch courses from server (HTTP ${res.status})`);
  }
  const data = await res.json();
  return Array.isArray(data) ? data : data.courses || [];
}

/**
 * Fetch single course by slug or ID from MongoDB
 */
export async function getCourseBySlug(slug) {
  const res = await fetch(`${API_BASE}/${slug}`);
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Failed to fetch course details (HTTP ${res.status})`);
  }
  return await res.json();
}

/**
 * Upload an image strictly to ImageKit CDN via backend
 */
export async function uploadImageToImageKit(file) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(UPLOAD_API, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    let errMsg = `Image upload failed (HTTP ${res.status})`;
    try {
      const errData = await res.json();
      if (errData.error) errMsg = errData.error;
    } catch {
      // ignore json parse error
    }
    throw new Error(errMsg);
  }

  const data = await res.json();
  return data.url || data.secure_url;
}

export const uploadImageToCloudinary = uploadImageToImageKit;

/**
 * Create a new course in MongoDB
 */
export async function createCourse(courseData, imageFile = null) {
  let imageUrl = courseData.image || "";

  if (imageFile) {
    imageUrl = await uploadImageToImageKit(imageFile);
  }

  const payload = {
    ...courseData,
    image: imageUrl,
    createdAt: new Date().toISOString(),
  };

  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let errMsg = `Failed to create course in MongoDB (HTTP ${res.status})`;
    try {
      const errData = await res.json();
      if (errData.error) errMsg = errData.error;
    } catch {
      // ignore
    }
    throw new Error(errMsg);
  }

  return await res.json();
}

/**
 * Update an existing course in MongoDB
 */
export async function updateCourse(id, courseData, imageFile = null) {
  let imageUrl = courseData.image;

  if (imageFile) {
    imageUrl = await uploadImageToImageKit(imageFile);
  }

  const payload = {
    ...courseData,
    image: imageUrl,
    updatedAt: new Date().toISOString(),
  };

  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let errMsg = `Failed to update course in MongoDB (HTTP ${res.status})`;
    try {
      const errData = await res.json();
      if (errData.error) errMsg = errData.error;
    } catch {
      // ignore
    }
    throw new Error(errMsg);
  }

  return await res.json();
}

/**
 * Delete a course from MongoDB
 */
export async function deleteCourse(id) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    let errMsg = `Failed to delete course from MongoDB (HTTP ${res.status})`;
    try {
      const errData = await res.json();
      if (errData.error) errMsg = errData.error;
    } catch {
      // ignore
    }
    throw new Error(errMsg);
  }

  return true;
}

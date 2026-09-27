/**
 * Course API Service
 * Communicates with the Express backend for Course CRUD operations and Cloudinary image uploads.
 * Includes local storage sync fallback so admin actions remain functional even before backend is started.
 */

const API_BASE = "/api/courses";
const UPLOAD_API = "/api/upload";
const LOCAL_STORAGE_KEY = "third_eye_dynamic_courses";

// Helper to get local courses
export function getLocalCourses() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Helper to save local courses
export function saveLocalCourses(courses) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(courses));
  } catch (err) {
    console.error("Failed to save courses to localStorage", err);
  }
}

/**
 * Fetch all dynamic courses
 */
export async function getCourses() {
  try {
    const res = await fetch(API_BASE);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    const courses = Array.isArray(data) ? data : (data.courses || []);
    // Cache to localStorage
    saveLocalCourses(courses);
    return courses;
  } catch (err) {
    console.warn("Backend not reachable, loading courses from local storage fallback:", err.message);
    return getLocalCourses();
  }
}

/**
 * Fetch single course by slug or ID
 */
export async function getCourseBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE}/${slug}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch {
    const local = getLocalCourses();
    return local.find((c) => c.slug === slug || c._id === slug || c.id === slug) || null;
  }
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
 * Create a new course
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

  try {
    const res = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Create course failed with status: ${res.status}`);
    const created = await res.json();
    
    // Update local cache
    const current = getLocalCourses();
    saveLocalCourses([created, ...current]);
    return created;
  } catch (err) {
    console.warn("Backend unavailable, saving course locally:", err.message);
    const mockCreated = {
      _id: "local_" + Date.now(),
      id: "local_" + Date.now(),
      ...payload,
    };
    const current = getLocalCourses();
    saveLocalCourses([mockCreated, ...current]);
    return mockCreated;
  }
}

/**
 * Update an existing course
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

  try {
    const res = await fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Update course failed with status: ${res.status}`);
    const updated = await res.json();

    const current = getLocalCourses().map((c) => (c._id === id || c.id === id ? updated : c));
    saveLocalCourses(current);
    return updated;
  } catch (err) {
    console.warn("Backend unavailable, updating course locally:", err.message);
    const updated = { ...payload, _id: id, id };
    const current = getLocalCourses().map((c) => (c._id === id || c.id === id ? updated : c));
    saveLocalCourses(current);
    return updated;
  }
}

/**
 * Delete a course
 */
export async function deleteCourse(id) {
  try {
    const res = await fetch(`${API_BASE}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`Delete course failed with status: ${res.status}`);
    
    const current = getLocalCourses().filter((c) => c._id !== id && c.id !== id);
    saveLocalCourses(current);
    return true;
  } catch (err) {
    console.warn("Backend unavailable, deleting course locally:", err.message);
    const current = getLocalCourses().filter((c) => c._id !== id && c.id !== id);
    saveLocalCourses(current);
    return true;
  }
}

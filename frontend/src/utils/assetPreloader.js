/**
 * Asset Preloader & Persistent Cache Service
 * Pre-downloads critical high-resolution images, 3D textures, web fonts, and audio
 * into the browser CacheStorage API and GPU texture memory.
 * Guarantees instantaneous loading for returning visitors.
 */

import logo from "../assets/logo.webp";
import classroomSliceLeft from "../assets/classroom_slice_left.webp";
import classroomSliceCenter from "../assets/classroom_slice_center.webp";
import classroomSliceRight from "../assets/classroom_slice_right.webp";
import teamPhoto from "../assets/team_photo.webp";
import classroomPanoramic from "../assets/classroom_panoramic.png";
import humanHand from "../assets/human_hand.png";
import robotHand from "../assets/robot_hand.png";
import cube3d from "../assets/cube_3d.png";
import mentor1 from "../assets/mentor_1.png";
import mentor2 from "../assets/mentor_2.png";
import mentor3 from "../assets/mentor_3.png";
import mentor4 from "../assets/mentor_4.png";
import mentor5 from "../assets/mentor_5.png";
import mlChaudhary from "../assets/leadership/ml_chaudhary.png";
import suumitSharma from "../assets/leadership/suumit_sharma.png";
import preetiSharma from "../assets/leadership/preeti_sharma.png";
import eccouncilCodeRed from "../assets/certificates/eccouncil_codered.png";
import redhatRhcsa from "../assets/certificates/redhat_rhcsa.png";
import autodeskAutocad from "../assets/certificates/autodesk_autocad.webp";
import userBackgroundMusic from "../assets/audio/ambient_music_theme.mp3";

export const CACHE_NAME = "thirdeye-v3-static";
const CACHE_STORAGE_KEY = "thirdeye_cached_assets_v3";

// List of all critical high-res visual assets and audio to pre-download
export const CRITICAL_ASSETS = [
  { id: "logo", src: logo, label: "Brand Vector Core" },
  { id: "classroomSliceLeft", src: classroomSliceLeft, label: "Studio Environment (Left)" },
  { id: "classroomSliceCenter", src: classroomSliceCenter, label: "Studio Environment (Center)" },
  { id: "classroomSliceRight", src: classroomSliceRight, label: "Studio Environment (Right)" },
  { id: "teamPhoto", src: teamPhoto, label: "Studio Team Panoramic" },
  { id: "classroomPanoramic", src: classroomPanoramic, label: "Classroom Panoramic Texture" },
  { id: "humanHand", src: humanHand, label: "Spatial Human Interface" },
  { id: "robotHand", src: robotHand, label: "Spatial AI Robotics" },
  { id: "cube3d", src: cube3d, label: "Isometric 3D Anchor" },
  { id: "mentor1", src: mentor1, label: "Faculty Mentorship Module 1" },
  { id: "mentor2", src: mentor2, label: "Faculty Mentorship Module 2" },
  { id: "mentor3", src: mentor3, label: "Faculty Mentorship Module 3" },
  { id: "mentor4", src: mentor4, label: "Faculty Mentorship Module 4" },
  { id: "mentor5", src: mentor5, label: "Faculty Mentorship Module 5" },
  { id: "mlChaudhary", src: mlChaudhary, label: "Leadership Directorate" },
  { id: "suumitSharma", src: suumitSharma, label: "Leadership Technology" },
  { id: "preetiSharma", src: preetiSharma, label: "Leadership Academy" },
  { id: "eccouncilCodeRed", src: eccouncilCodeRed, label: "EC-Council Credentials" },
  { id: "redhatRhcsa", src: redhatRhcsa, label: "RedHat Enterprise Cert" },
  { id: "autodeskAutocad", src: autodeskAutocad, label: "Autodesk Design Standard" },
  { id: "ambientAudio", src: userBackgroundMusic, label: "Background Music Track" },
];

/**
 * Check if the user already has cached assets on their device
 */
export function isCachedWarm() {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(CACHE_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

/**
 * Mark assets as warm in persistent storage
 */
export function markCachedWarm() {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CACHE_STORAGE_KEY, "true");
  } catch {}
}

/**
 * Preload a single image with GPU decode acceleration and CacheStorage persistence
 */
function preloadSingleAsset(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve();
      return;
    }

    // 1. Prime CacheStorage for instant offline retrieval on revisits
    if (typeof window !== "undefined" && "caches" in window) {
      caches
        .open(CACHE_NAME)
        .then((cache) => {
          cache.match(src).then((matched) => {
            if (!matched) {
              fetch(src)
                .then((res) => {
                  if (res && res.status === 200) {
                    cache.put(src, res.clone());
                  }
                })
                .catch(() => {});
            }
          });
        })
        .catch(() => {});
    }

    // 2. Audio preloading
    if (typeof src === "string" && (src.includes(".mp3") || src.includes(".wav") || src.includes(".ogg"))) {
      const audio = new Audio();
      audio.preload = "auto";
      audio.src = src;
      audio.oncanplaythrough = () => resolve(src);
      audio.onerror = () => resolve(src);
      setTimeout(() => resolve(src), 1500); // safety fallback
      return;
    }

    // 3. Image preloading with GPU rasterization decode
    const img = new Image();
    img.src = src;

    if (img.decode) {
      img
        .decode()
        .then(() => resolve(src))
        .catch(() => {
          if (img.complete) {
            resolve(src);
          } else {
            img.onload = () => resolve(src);
            img.onerror = () => resolve(src);
          }
        });
    } else {
      if (img.complete) {
        resolve(src);
      } else {
        img.onload = () => resolve(src);
        img.onerror = () => resolve(src);
      }
    }
  });
}

/**
 * Preload web fonts
 */
function preloadFonts() {
  if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
    return document.fonts.ready.catch(() => {});
  }
  return Promise.resolve();
}

/**
 * Preload all website assets with real-time progress callbacks and CacheStorage optimization
 * @param {Function} onProgress - Callback called on each asset loaded (loadedCount, totalCount, percentage, currentAssetLabel)
 * @param {number} timeoutMs - Maximum milliseconds before forcing completion
 * @returns {Promise<void>}
 */
export function preloadAllSources(onProgress = () => {}, timeoutMs = 5000) {
  return new Promise((resolve) => {
    const totalAssets = CRITICAL_ASSETS.length + 1; // +1 for Web Fonts
    let loadedCount = 0;
    let isFinished = false;

    const finish = () => {
      if (isFinished) return;
      isFinished = true;
      markCachedWarm();
      onProgress(totalAssets, totalAssets, 100, "All Studio Sources Ready");
      resolve();
    };

    // Safety timeout so user is never stuck
    const timer = setTimeout(() => {
      finish();
    }, timeoutMs);

    const handleSingleCompleted = (label) => {
      if (isFinished) return;
      loadedCount++;
      const pct = Math.min(100, Math.round((loadedCount / totalAssets) * 100));
      onProgress(loadedCount, totalAssets, pct, label);

      if (loadedCount >= totalAssets) {
        clearTimeout(timer);
        finish();
      }
    };

    // 1. Preload fonts
    preloadFonts()
      .then(() => handleSingleCompleted("Web Fonts & Typographic Hierarchy"))
      .catch(() => handleSingleCompleted("Web Fonts Fallback"));

    // 2. Preload critical images & audio in parallel
    CRITICAL_ASSETS.forEach((asset) => {
      preloadSingleAsset(asset.src)
        .then(() => handleSingleCompleted(asset.label))
        .catch(() => handleSingleCompleted(asset.label));
    });
  });
}

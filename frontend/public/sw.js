/**
 * Third Eye Service Worker - Ultra-Fast Asset Caching Engine
 * Caches high-res visual assets, 3D images, audio, and web fonts
 * to provide near-instant page loads for returning visitors.
 */

const CACHE_NAME = 'thirdeye-v3-static';

// Static file extensions to aggressively cache locally
const CACHEABLE_EXTENSIONS = [
  '.webp',
  '.png',
  '.jpg',
  '.jpeg',
  '.svg',
  '.mp3',
  '.wav',
  '.woff',
  '.woff2',
  '.ttf'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 1. Never cache dynamic backend API requests
  if (url.pathname.startsWith('/api') || url.pathname.startsWith('/uploads')) {
    return;
  }

  // 2. Audio Network-First Strategy (ensures fresh sound updates immediately)
  const isAudio =
    url.pathname.endsWith('.mp3') ||
    url.pathname.endsWith('.wav') ||
    url.pathname.includes('/audio/');

  if (isAudio && request.method === 'GET') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 3. Cache-First Strategy for Images, Fonts, and Static Chunks
  const isCacheableAsset =
    CACHEABLE_EXTENSIONS.some((ext) => url.pathname.endsWith(ext)) ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.hostname.includes('api.fontshare.com') ||
    url.pathname.includes('/assets/') ||
    url.pathname.includes('/audio/');

  if (isCacheableAsset && request.method === 'GET') {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve immediately from local device cache
          // Optionally revalidate in background
          fetch(request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(request, networkResponse);
                });
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        // Not in cache: fetch from network and store for next time
        return fetch(request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });

          return networkResponse;
        });
      })
    );
  }
});

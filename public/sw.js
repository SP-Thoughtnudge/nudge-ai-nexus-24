// Service Worker for caching optimization
const CACHE_NAME = 'thoughtnudge-v2';
const MAX_CACHE_ENTRIES = 100;

const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/lovable-uploads/e1f8cc14-e19f-4b94-9a66-947868364f9c.png',
];

// Allowed extensions for caching (no API responses)
const CACHEABLE_EXTENSIONS = ['.js', '.css', '.png', '.jpg', '.jpeg', '.webp', '.woff', '.woff2'];

// Check if URL should be cached
const isCacheable = (url) => {
  // Never cache API responses
  if (url.includes('/api/')) return false;
  
  // Only cache static assets with known extensions
  return CACHEABLE_EXTENSIONS.some(ext => url.includes(ext));
};

// Check if response should be cached based on headers
const shouldCacheResponse = (response) => {
  const cacheControl = response.headers.get('Cache-Control');
  if (cacheControl) {
    if (cacheControl.includes('no-store') || cacheControl.includes('no-cache')) {
      return false;
    }
  }
  return true;
};

// Evict old cache entries if limit exceeded
const evictOldEntries = async (cache) => {
  const keys = await cache.keys();
  if (keys.length > MAX_CACHE_ENTRIES) {
    // Remove oldest 20% of entries
    const toDelete = keys.slice(0, Math.floor(keys.length * 0.2));
    await Promise.all(toDelete.map(key => cache.delete(key)));
  }
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Check if this URL and response should be cached
            if (!isCacheable(event.request.url) || !shouldCacheResponse(response)) {
              return response;
            }

            // Clone the response before caching
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(async (cache) => {
                cache.put(event.request, responseToCache);
                // Evict old entries to prevent cache bloat
                await evictOldEntries(cache);
              });

            return response;
          });
      })
      .catch(() => {
        // Fallback for offline scenarios
        if (event.request.destination === 'document') {
          return caches.match('/');
        }
      })
  );
});

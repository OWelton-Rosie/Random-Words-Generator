const CACHE_NAME = 'random-words-generator-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/js/words.js',
    '/js/word-generation.js',
    '/js/ui.js',
    '/js/clipboard.js',
    '/js/download.js',

];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return cached response if available, else fetch from network
            return cachedResponse || fetch(event.request);
        })
    );
});

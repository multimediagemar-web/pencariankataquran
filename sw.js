self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Syarat dari Google agar aplikasi bisa diinstal di HP
  e.respondWith(
    fetch(e.request).catch(() => new Response('Mode Offline Aktif'))
  );
});
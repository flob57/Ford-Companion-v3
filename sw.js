const CACHE='ford-companion-v3-1';
const FILES=['./','index.html','styles.css','app.js','manifest.webmanifest','data/fiesta-data.json','assets/lbc.svg','assets/apple-maps.svg','assets/road.svg','assets/music.svg','assets/podcasts.svg','assets/phone.svg','assets/car.svg','assets/settings.svg','assets/spotify.svg','assets/youtube-music.svg','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('TechPro-Media').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/Home.html',
      '/Resources.html',
      '/About.html',
      '/Styles/main.css',
      '/Styles/iframe.css',
      '/Images/logo_animated.svg',
      '/Images/logo_new.svg',
      '/Images/logo_new.png',
      '/Images/DPE.svg',
      '/Images/Curbai.png',
      '/Images/BiiAndTechPro.svg',
      '/Images/green_background.jpg'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('TechPro-Media').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/Home.html',
      '/About.html',
      '/Resources.html',
      '/Privacy.html',
      '/Styles/main.css',
      '/Styles/iframe.css',
      '/Images/green_background.jpg',
      '/Images/BiiAndTechPro.svg',
      '/Images/logo_animated.svg',
      '/Images/logo_new.svg',
      '/Images/logo_new.png',
      '/Images/TechLabs.svg',
      '/Images/Curbai.png',
      '/Images/DPE.png',
      '/Scripts/main.js',
      '/Fonts/AGENCYR.TTF'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

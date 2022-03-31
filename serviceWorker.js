self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('TechPro-Media').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/Home.html',
      '/About.html',
      '/Projects.html',
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
      '/Images/RedTails.png',
      '/Images/TechProAndRedTails.svg',
      '/Scripts/main.js',
      '/Fonts/AGENCYR.TTF',
      'https://techlabsinc.github.io/Images/Circuit%20Blue%20Background.jpg'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

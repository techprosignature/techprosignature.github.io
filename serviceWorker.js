const staticService = "techpro-services.github.io";
const assets = [
  "/",
  "index.html",
  "Home.html",
  "Resources.html",
  "About.html",
  "Styles/main.css",
  "Styles/iframe.css",
  "Images/BiiAndTechPro.svg",
  "Images/Curbai.png",
  "Images/Imeages/DPE.svg",
  "Images/green_background.jpg",
  "Images/logo_animated.svg",
  "Images/logo_new.svg",
  "Images/logo_new.png",
  "Images/TechLabs.svg"
]

self.addEventListner("install", installEvent => {
  installEvent.waitUntil(
    caches.open("staticService").then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

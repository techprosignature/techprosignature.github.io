var SW;
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js", {scope: '/'})
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
var iframe = document.getElementById("content");
var hash = window.location.hash.split('#')[1];
if(hash != '' & hash != undefined){
  console.log(hash);
  iframe.src = hash;
}
window.addEventListener('hashchange',function(){
  hash = window.location.hash.split("#")[1];
  console.log(hash);
  iframe.src = hash;
})
function ContentHandler(event){
  const message = event.data.value;
  switch (message) {
      case 'ClearData':
          console.log("ClearData");
          navigator.serviceWorker.getRegistrations().then( function(registrations) { for(let registration of registrations) { registration.unregister(); } });
          caches.keys().then((keyList) => Promise.all(keyList.map((key) => caches.delete(key))));
          caches.open("TechPro-Media")
            .then(cache => cache.keys()
              .then(keys => {
                for (let key of keys) {
                  cache.delete(key)
                }
              }));
          window.location.reload(true);
          break;
  }
}
window.addEventListener("message", ContentHandler, false);
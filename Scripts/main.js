if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
function ContentHandler(event){
  const message = event.data.value;
  switch (message) {
      case 'ClearData':
          console.log("Reload");
          caches.delete("TechPro-Media");
          window.location.reload(true);
          break;
  }
}
window.addEventListener("message", ContentHandler, false);
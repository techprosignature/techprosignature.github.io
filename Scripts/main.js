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
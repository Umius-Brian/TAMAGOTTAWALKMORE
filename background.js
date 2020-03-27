// background.js
// tells the manifest the extension which file to reference and how that file should be

let health = document.getElementById("health")

setInterval(function() {
  health.value -= 10;
  if (health.value === 0) {
    window.close();
    let openingPage = chrome.runtime.openOptionsPage(function(){})
    openingPage();
  }
}, 1000);


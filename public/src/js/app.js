if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/ServiceWorker.js')
    .then(function () {
      console.log('Service worker registered.');
    });
}
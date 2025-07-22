self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('offline.html');
        }
        return new Response('Error de conexión', {
          status: 504,
          statusText: 'Sin conexión a Internet'
        });
      })
  );
});

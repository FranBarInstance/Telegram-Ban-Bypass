self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('offline.html');
                }
                return new Response('Connection Error', {
                    status: 504,
                    statusText: 'No Internet Connection'
                });
            })
    );
});

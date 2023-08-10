self.addEventListener('fetch', event => {
  // Intercept network requests
  event.respondWith(cachedResponse(event.request));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          return caches.delete(key);
        }),
      ),
    ),
  );
});

async function cachedResponse(request) {
// Open the cache named 'my-cache'
  const cache = await caches.open('my-cache');

  // Check if the request is already in the cache
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  // If not in cache, fetch the request from the network and cache it
  const response = await fetch(request);
  if('put' in Cache) {
    await cache.put(request, response.clone());
  }

  return response;
}


self.addEventListener('fetch', event => {
  // Intercept network requests
  event.respondWith(cachedResponse(event.request));
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
  await cache.put(request, response.clone());

  return response;
}


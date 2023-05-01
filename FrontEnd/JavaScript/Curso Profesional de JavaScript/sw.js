const VERSION = 'v1';

// self es como el this , pero específico para los server workers
self.addEventListener('install', event => {
    console.log("Service Worker : Installed!");

    // Lo primero que haremos será crear un pre-caché
    // Es decir, almacenar en caché los recursos estáticos de nuestra aplicación
    event.waitUntil(precache()); // waitUntil: espera a que el precache se complete
});

self.addEventListener('fetch', event => {
    const request = event.request;
    // get
    if (request.method !== 'GET') {
        return;
    }

    // buscar en cache
    event.respondWith(cachedResponse(request));

    // actualizar el cache
    event.waitUntil(updateCache(request));
});

async function precache() {
    // Creamos una instancia de cache
    const cache = await caches.open(VERSION);

    const assets = [
        // Aquí irán los archivos que queremos que se guarden en caché
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ];

    // Añadimos los recursos a caché, con recursos me refieron a los archivos estáticos(JS) que se necesitan para que nuestra aplicación funcione
    return cache.addAll(assets);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}

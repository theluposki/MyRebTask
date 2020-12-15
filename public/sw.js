const staticV1 = 'statich-task-v1'

const resorcesToPrecache = [
    '/index.html',
    '/favicon.png',
    '/manifest.json',
    '/db/dexie.min.js',
    '/db/db.js',
    '/js/vue.min.js',
    '/app.js',
    '/Roboto/Roboto-Regular.ttf',
    '/Roboto/Roboto-Medium.ttf',
    '/Roboto/Roboto-Bold.ttf',
    '/Roboto/Roboto-Black.ttf',
    '/icons/add-24px.svg',
    '/icons/done-24px.svg',
    '/icons/delete-24px.svg',
    '/style.css',
    '/img/logo_transparent192px.png',
    '/img/logo_transparent512px.png',
]

self.addEventListener('install', event => {
    console.log('V1 installing…')
    event.waitUntil(
      caches.open(staticV1).then(cache => cache.addAll(resorcesToPrecache))
    )
})

self.addEventListener('activate', event => {
    console.log('V1 now ready to handle fetches!', event)
})

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url)
  
    resorcesToPrecache.forEach(item => {
        if (url.origin == location.origin && url.pathname == item) {
            event.respondWith(caches.match(item))
        }
    })
  })

/*
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(cacheName)
        .then((cache) => {
            cache.addAll(resorcesToPrecache)
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
        .then(cacheResponse => {
            (cacheResponse || fetch(event.request))
        })
    )
})
*/

let cacheName = 'cache-v1';
let urlsToCache = [
		'./',
		'./css/main.css',
		'./css/responsive.css',
		'./css/styles.css',
		'./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg',
		'./img/7.jpg', './img/8.jpg', './img/9.jpg', './img/10.jpg',
		'./js/dbhelper.js',
		'./js/main.js',
		'./js/restaurant_info.js',
		'./index.html',
		'./restaurant.html',
		'./data/restaurants.json',
		'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
		'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
		'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2'
];

self.addEventListener('install', function(event) {
	console.log('[ServiceWorker] Installed');
	event.waitUntil(
         caches.open(cacheName).then(function(cache) {
         	console.log('[ServiceWorker] Caching urlsToCache');
    		cache.addAll(urlsToCache);
         }));
	
});

self.addEventListener('activate', function(event) {
	console.log('[ServiceWorker] Activated');
	//Delete Caches for the previous cacheName
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName){
				if(thisCacheName !== cacheName) {
					console.log('[ServiceWorker] Removing cache files from ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}))
		})

	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(cacheName).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          console.log('[ServiceWorker] Fetching', event.request.url);
          return response;
        });
      });
    }).catch(function(err) {
    	console.log('[ServiceWorker] Error while fetching cache', err);
    })
  );
});
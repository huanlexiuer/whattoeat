// 缓存名称和版本
const CACHE_NAME = 'whattoeat-v1';

// 需要缓存的资源
const CACHE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './server.js',
  './manifest.json',
  './image/app-icon-192.PNG',
  './image/app-icon-512.PNG',
  './image/weixin.PNG',
  './image/zhifubao.PNG'
];

// 安装 Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(CACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// 激活 Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 拦截请求
self.addEventListener('fetch', event => {
  event.respondWith(
    // 尝试从缓存获取资源
    caches.match(event.request)
      .then(response => {
        // 如果找到缓存的响应，则返回它
        if (response) {
          return response;
        }
        
        // 否则，从网络获取资源
        return fetch(event.request)
          .then(networkResponse => {
            // 检查是否收到有效响应
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // 克隆响应，因为响应是流，只能使用一次
            const responseToCache = networkResponse.clone();
            
            // 将新资源添加到缓存
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return networkResponse;
          });
      })
      .catch(() => {
        // 当网络和缓存都失败时的回退处理
        if (event.request.url.includes('.html')) {
          return caches.match('./index.html');
        }
      })
  );
});

// 处理导航请求
self.addEventListener('navigate', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .catch(() => {
            return caches.match('./index.html');
          });
      })
  );
});
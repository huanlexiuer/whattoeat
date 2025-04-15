// 缓存名称和版本 - 更新版本号以刷新缓存
const CACHE_NAME = 'whattoeat-v4';

// 需要缓存的资源
const CACHE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './images/app-icon-192.png',
  './images/app-icon-512.png',
  './images/weixin.png',
  './images/zhifubao.png'
];

// 安装 Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('缓存打开');
        // 逐个添加资源到缓存，忽略失败的资源
        return Promise.allSettled(
          CACHE_ASSETS.map(url => 
            cache.add(url).catch(error => {
              console.warn(`无法缓存资源: ${url}`, error);
            })
          )
        );
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
  // 检查是否是导航请求
  if (event.request.mode === 'navigate') {
    // 保存原始URL，包括hash部分
    const url = new URL(event.request.url);
    const hasHash = url.hash.length > 0;
    
    // 如果URL中有hash，我们需要保留它
    if (hasHash) {
      // 让浏览器正常处理带hash的请求，不拦截
      return;
    }
    
    // 检查URL路径是否指向特定页面
    const pathname = url.pathname;
    const isSpecificPage = pathname.includes('takeaway') || 
                          pathname.includes('cuisines') || 
                          pathname.includes('history') || 
                          pathname.includes('reset') || 
                          pathname.includes('donate');
    
    // 如果是特定页面的请求，不进行拦截
    if (isSpecificPage) {
      return;
    }
    
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('./index.html');
        })
    );
    return; // 导航请求已处理，不继续执行
  }
  
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
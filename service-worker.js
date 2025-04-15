// 缓存名称和版本 - 更新版本号以刷新缓存
const CACHE_NAME = 'whattoeat-v6';

// 需要缓存的资源
const CACHE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './all.js',
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
        const cachePromises = CACHE_ASSETS.map(url => {
          // 尝试请求资源并缓存，如果失败则忽略该资源
          return fetch(url)
            .then(response => {
              if (response.ok) {
                return cache.put(url, response);
              } else {
                console.warn(`资源请求失败，无法缓存: ${url}, 状态码: ${response.status}`);
                return Promise.resolve(); // 忽略错误，继续后续缓存
              }
            })
            .catch(error => {
              console.warn(`缓存资源时出错: ${url}`, error);
              return Promise.resolve(); // 忽略网络错误，继续后续缓存
            });
        });
        
        return Promise.allSettled(cachePromises);
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

// 检查URL是否为有效的缓存目标
function isValidCacheUrl(url) {
  // 解析URL
  try {
    const parsedUrl = new URL(url);
    // 排除chrome-extension和data URLs
    if (parsedUrl.protocol === 'chrome-extension:' || 
        parsedUrl.protocol === 'data:' ||
        parsedUrl.protocol === 'file:') {
      return false;
    }
    // 只缓存当前域名下的资源
    if (self.location.hostname && parsedUrl.hostname !== self.location.hostname) {
      return false;
    }
    return true;
  } catch (e) {
    console.warn('URL解析失败:', url, e);
    return false;
  }
}

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
  
  // 检查请求URL是否可以缓存
  if (!isValidCacheUrl(event.request.url)) {
    // 对于不能缓存的URL，直接返回fetch结果，不尝试缓存
    return;
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
            
            // 检查URL是否可以缓存
            if (!isValidCacheUrl(event.request.url)) {
              return networkResponse;
            }
            
            // 克隆响应，因为响应是流，只能使用一次
            const responseToCache = networkResponse.clone();
            
            // 将新资源添加到缓存
            caches.open(CACHE_NAME)
              .then(cache => {
                try {
                  cache.put(event.request, responseToCache);
                } catch (e) {
                  console.warn('缓存资源失败:', event.request.url, e);
                }
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
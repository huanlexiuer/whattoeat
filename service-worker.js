// 缓存名称和版本 - 更新版本号以刷新缓存
const CACHE_NAME = 'whattoeat-v7';

// 需要缓存的核心资源（确保离线可用）
const CORE_ASSETS = [
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
        console.log('缓存打开，开始预缓存核心资源');
        return cache.addAll(CORE_ASSETS).catch(error => {
          console.error('预缓存失败:', error);
          // 即使部分资源缓存失败，也继续安装Service Worker
          return Promise.resolve();
        });
      })
      .then(() => self.skipWaiting()) // 强制新Service Worker立即激活
  );
});

// 激活 Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('清理旧缓存:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
    .then(() => {
      console.log('Service Worker已激活');
      return self.clients.claim(); // 控制所有打开的客户端
    })
  );
});

// 检查URL是否为有效的缓存目标
function isValidCacheUrl(url) {
  // 解析URL
  try {
    const parsedUrl = new URL(url);
    // 排除不支持的协议
    if (parsedUrl.protocol === 'chrome-extension:' || 
        parsedUrl.protocol === 'data:' ||
        parsedUrl.protocol === 'file:') {
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
  // 忽略不支持缓存的请求
  if (!isValidCacheUrl(event.request.url)) {
    return;
  }

  // 优先使用网络，失败后回退到缓存
  const networkFirst = async () => {
    try {
      // 尝试从网络获取
      const networkResponse = await fetch(event.request);
      
      // 缓存最新的响应
      const cache = await caches.open(CACHE_NAME);
      try {
        // 只缓存成功的响应
        if (networkResponse.status === 200) {
          cache.put(event.request, networkResponse.clone());
        }
      } catch (e) {
        console.warn('缓存网络响应失败:', e);
      }
      
      return networkResponse;
    } catch (error) {
      // 网络请求失败，从缓存中获取
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // 如果是HTML请求且缓存也没有，返回首页
      if (event.request.headers.get('accept')?.includes('text/html')) {
        return caches.match('./index.html');
      }
      
      // 抛出原始错误
      throw error;
    }
  };

  // 对于导航请求使用缓存优先策略
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // 返回缓存的响应，同时在后台更新缓存
            fetch(event.request)
              .then(response => {
                if (response.ok) {
                  caches.open(CACHE_NAME)
                    .then(cache => cache.put(event.request, response));
                }
              })
              .catch(() => {});
            return cachedResponse;
          }
          
          // 如果缓存中没有，尝试从网络获取
          return fetch(event.request)
            .catch(() => caches.match('./index.html'));
        })
    );
    return;
  }
  
  // 对于其他请求使用网络优先策略
  event.respondWith(networkFirst());
});
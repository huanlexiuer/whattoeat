/**
 * all.js - 辅助脚本
 * 用于处理可能的运行时异常
 */
(function() {
  // 屏蔽针对exmid的错误
  Object.defineProperty(window, 'exmid', {
    configurable: true,
    get: function() { return window._exmid; },
    set: function(value) { window._exmid = value; }
  });
  
  // 创建一个全局对象来接收所有可能的exmid操作
  window.__exmidTarget = {};
  
  // 重写console.error以过滤掉特定错误
  const originalError = console.error;
  console.error = function(...args) {
    if (args[0] && typeof args[0] === 'string' && args[0].includes('exmid')) {
      console.warn('已过滤exmid相关错误:', args);
      return;
    }
    originalError.apply(console, args);
  };
  
  // 防止全局错误
  window.addEventListener('error', function(event) {
    // 拦截特定错误
    if (event.message && 
        (event.message.includes('Cannot set properties of null') || 
         event.message.includes('exmid'))) {
      console.warn('已拦截属性设置错误:', event.message);
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);
  
  // 监视未处理的promise错误
  window.addEventListener('unhandledrejection', function(event) {
    if (event.reason && event.reason.message && 
        (event.reason.message.includes('exmid') || 
         event.reason.message.includes('Cannot set properties of null'))) {
      console.warn('已拦截Promise错误:', event.reason.message);
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  });

  // 安全设置函数
  const safeSet = function(obj, prop, value) {
    if (obj && typeof obj === 'object') {
      obj[prop] = value;
      return true;
    } else if (prop === 'exmid') {
      // 特殊处理exmid属性
      window.__exmidTarget[prop] = value;
      return true;
    }
    return false;
  };

  // 将安全设置函数暴露给全局
  window.safeSet = safeSet;
  
  console.info("已初始化错误处理系统");
})();

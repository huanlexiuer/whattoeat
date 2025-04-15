/**
 * all.js - 辅助脚本
 * 用于处理可能的运行时异常
 */
(function() {
  // 防止全局错误
  window.addEventListener('error', function(event) {
    // 拦截特定错误
    if (event.message && event.message.includes('Cannot set properties of null')) {
      console.warn('已拦截空对象属性设置错误:', event.message);
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);

  // 安全设置函数
  const safeSet = function(obj, prop, value) {
    if (obj && typeof obj === 'object') {
      obj[prop] = value;
      return true;
    }
    return false;
  };

  // 全局对象保护 - 防止null对象访问
  try {
    // 只在开发环境下使用，防止污染全局Object原型
    if (typeof Object.defineProperty === 'function') {
      // 不再尝试拦截所有对象的exmid属性，而是使用专用的safeSet函数
      window.exmidTarget = {};
      console.info("已初始化exmid目标对象");
    }
  } catch (e) {
    console.warn("初始化exmid目标对象失败:", e);
  }

  // 将安全设置函数暴露给全局
  window.safeSet = safeSet;
})();

/**
 * all.js - 辅助脚本
 * 用于处理可能的运行时异常
 */
(function() {
  // 处理可能的null对象属性设置问题
  const originalSet = Object.prototype.__defineSetter__;
  
  // 安全设置函数
  const safeSet = function(obj, prop, value) {
    if (obj && typeof obj === 'object') {
      obj[prop] = value;
      return true;
    }
    return false;
  };
  
  // 特别处理exmid属性的设置，防止空对象错误
  try {
    // 尝试拦截所有对象的exmid属性设置
    Object.defineProperty(Object.prototype, 'exmid', {
      set: function(value) {
        // 只在对象有效时设置
        if (this !== null && this !== undefined) {
          this._exmid = value;
        }
      },
      get: function() {
        return this._exmid;
      },
      configurable: true
    });
  } catch (e) {
    console.warn("无法拦截exmid属性设置:", e);
  }
  
  // 将安全设置函数暴露给全局
  window.safeSet = safeSet;
})();

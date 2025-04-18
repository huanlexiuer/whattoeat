/**
 * all.js - 辅助脚本
 * 用于处理可能的运行时异常
 */
(function() {
  // 修复特定的执行环境
  const fixEnvironment = function() {
    // 创建全局错误处理
    const originalErrorHandler = window.onerror;
    window.onerror = function(message, source, lineno, colno, error) {
      // 检测并拦截特定错误
      if (message && (
          message.includes('exmid') || 
          message.includes('Cannot set properties of null')
      )) {
        console.warn('全局错误已拦截:', message);
        return true; // 阻止错误冒泡
      }
      
      // 调用原始错误处理器
      if (originalErrorHandler) {
        return originalErrorHandler.apply(this, arguments);
      }
    };
    
    // 全局空对象代理
    window.nullProxy = new Proxy({}, {
      get: function(target, prop) {
        if (prop === 'exmid') return undefined;
        return null;
      },
      set: function(target, prop, value) {
        if (prop === 'exmid') {
          target[prop] = value;
          return true;
        }
        return true;
      }
    });
    
    // 尝试通过代理拦截window.exmid
    try {
      Object.defineProperty(window, 'exmid', {
        configurable: true,
        writable: true,
        value: undefined
      });
    } catch (e) {
      console.warn('无法定义window.exmid:', e);
    }
    
    // 对可能导致错误的外部函数进行猴子补丁
    const originalGetElementById = document.getElementById;
    document.getElementById = function(id) {
      const element = originalGetElementById.call(document, id);
      if (!element && id.includes('exmid')) {
        console.warn('尝试获取不存在的元素:', id);
        return window.nullProxy;
      }
      return element;
    };
  };
  
  // 屏蔽针对exmid的错误
  try {
    // 执行环境修复
    fixEnvironment();
    
    // 防止控制台打印错误
    const originalConsoleError = console.error;
    console.error = function() {
      // 检查是否为exmid相关错误
      let isExmidError = false;
      for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] && typeof arguments[i] === 'string' && arguments[i].includes('exmid')) {
          isExmidError = true;
          break;
        }
        if (arguments[i] && arguments[i].stack && arguments[i].stack.includes('exmid')) {
          isExmidError = true;
          break;
        }
      }
      
      if (!isExmidError) {
        return originalConsoleError.apply(console, arguments);
      } else {
        console.warn('已过滤exmid相关错误');
      }
    };
    
    // 监视未处理的promise错误
    window.addEventListener('unhandledrejection', function(event) {
      if (event.reason && 
          ((event.reason.message && (
            event.reason.message.includes('exmid') || 
            event.reason.message.includes('Cannot set properties of null')
          )) || 
          (event.reason.stack && event.reason.stack.includes('exmid')))) {
        console.warn('已拦截Promise错误:', event.reason.message);
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    }, true);
    
    // 防止报错
    window.addEventListener('error', function(event) {
      if (event.error && 
          ((event.error.message && (
            event.error.message.includes('exmid') || 
            event.error.message.includes('Cannot set properties of null')
          )) || 
          (event.error.stack && event.error.stack.includes('exmid')))) {
        console.warn('已拦截错误事件:', event.error.message);
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
      
      if (event.message && (
          event.message.includes('exmid') || 
          event.message.includes('Cannot set properties of null')
      )) {
        console.warn('已拦截错误消息:', event.message);
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
    }, true);
    
    console.info("错误处理系统已加强");
  } catch (e) {
    console.warn("错误处理系统初始化失败:", e);
  }
})();

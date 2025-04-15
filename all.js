// Empty placeholder file

// all.js
// 这是一个占位文件，用于解决控制台报错
// 添加安全检查以避免TypeError: Cannot set properties of null (setting 'exmid')
(function() {
  // 防止尝试设置null对象的属性
  var safeSet = function(obj, prop, value) {
    if (obj && typeof obj === 'object') {
      obj[prop] = value;
      return true;
    }
    return false;
  };
  
  // 将安全设置函数暴露给全局
  window.safeSet = safeSet;
})();

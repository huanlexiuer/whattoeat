# 今天吃什么

这是一个帮助你解决"今天吃什么"难题的Web应用。

## 功能介绍

- **随机选择**：从已选美食或全部美食中随机选择
- **外卖管理**：编辑常见外卖选项
- **菜系管理**：编辑各系菜肴选项
- **菜系自定义**：添加、编辑或删除自己的菜系种类
- **美食修改记录**：记录对美食选项的修改历史
- **恢复默认设置**：一键恢复应用到初始状态

## 如何启动

### 使用 Node.js (推荐)

如果你安装了 Node.js，可以使用自带的服务器脚本：

```bash
# 启动服务器
node server.js
```

服务器将在 http://localhost:8000 启动

### 使用其他静态服务器

这是一个纯静态网站，你可以使用任何静态文件服务器来运行它：

#### 使用 Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 使用 npm serve

```bash
# 全局安装 serve
npm install -g serve

# 启动服务
serve -p 8000
```

#### 使用 PHP 内置服务器

```bash
php -S localhost:8000
```

## 使用指南

### 菜系管理

1. 点击"各系菜肴"页面的"编辑菜肴选项"按钮
2. 在弹出的模态框中，你可以:
   - 点击"新增菜系"添加新的菜系种类
   - 点击"编辑当前菜系"修改所选菜系的名称
   - 点击"删除当前菜系"删除所选的菜系及其所有菜肴
3. 对于每个菜系，你可以添加或删除菜肴

### 数据存储

所有数据都存储在浏览器的本地存储中，刷新或关闭浏览器后数据依然保留 

## 应用商店发布指南

### 发布到微软商店

1. **转换为 PWA 或 UWP 应用**
   - 添加 Web App Manifest 和 Service Worker
   - 使用 PWA Builder (https://www.pwabuilder.com/) 转换为 MSIX 包
   - 或使用 Electron 框架包装为桌面应用

2. **注册开发者账号**
   - 注册 Microsoft Partner Center 账号 ($19 一次性费用)
   - 网址：https://partner.microsoft.com/

3. **准备应用资源**
   - 创建各尺寸的应用图标 (不同分辨率)
   - 准备至少 3 张应用截图
   - 撰写应用描述、隐私政策等

4. **提交应用**
   - 上传 MSIX 或 AppX 包
   - 设置应用信息、价格等
   - 提交审核

### 发布到苹果 App Store

1. **转换为 iOS 应用**
   - 使用 Capacitor 或 Cordova 打包为 iOS 应用
   - 或使用 React Native/Flutter 重构应用

2. **注册开发者账号**
   - 加入 Apple Developer Program ($99/年)
   - 网址：https://developer.apple.com/programs/

3. **准备应用资源**
   - 创建各尺寸的应用图标
   - 准备 App Store 截图
   - 撰写应用描述、关键词、隐私政策等

4. **使用 Xcode 打包**
   - 设置应用证书和描述文件
   - 进行应用签名
   - 通过 TestFlight 测试

5. **提交到 App Store Connect**
   - 上传构建版本
   - 填写应用元数据
   - 提交审核 
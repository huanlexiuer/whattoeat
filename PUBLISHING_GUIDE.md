# "今天吃什么" 应用发布指南

本指南将帮助您将"今天吃什么"Web应用发布到微软商店和苹果App Store。

## 目录
1. [准备工作](#准备工作)
2. [发布到微软商店](#发布到微软商店)
3. [发布到苹果App Store](#发布到苹果app-store)
4. [常见问题](#常见问题)

## 准备工作

在开始发布之前，请确保您已完成以下步骤：

1. **确保Web应用已完全测试**
   - 所有功能正常工作
   - 界面响应式布局已测试（移动设备和桌面设备）
   - 离线功能工作正常

2. **准备应用资源**
   - 高质量应用图标（多种分辨率）
   - 应用截图（多种设备尺寸）
   - 应用描述文案
   - 隐私政策文档

3. **将项目转为PWA**
   - 确保 `manifest.json` 配置正确
   - 确保 Service Worker 正常工作
   - 测试PWA功能（安装、离线访问等）

4. **项目文件说明**
   本项目包含以下与发布相关的文件：
   - `manifest.json`: PWA配置文件
   - `service-worker.js`: PWA离线缓存服务
   - `PRIVACY_POLICY.md`: 隐私政策
   - `electron/`: Electron桌面应用配置目录
   - `electron/main.js`: Electron主进程文件
   - `electron/package.json`: Electron项目配置
   - `package-electron.bat`: Windows打包脚本
   - `capacitor.config.json`: Capacitor配置文件

5. **必须创建的图标文件**
   您需要在 `image` 目录中创建以下图标文件：
   - `app-icon-192.jpg`: 192x192像素的PWA图标
   - `app-icon-512.jpg`: 512x512像素的PWA图标
   - `screenshot1.jpg`: 1280x720像素的应用截图
   - `screenshot2.jpg`: 1280x720像素的应用截图

## 发布到微软商店

### 使用PWA Builder方法（推荐）

1. **访问PWA Builder网站**
   - 打开 [PWA Builder](https://www.pwabuilder.com/)
   - 输入您部署的Web应用URL（需要公开可访问）

2. **生成应用包**
   - 确认PWA分数和建议
   - 完成任何必要的修复
   - 选择 "Windows" 选项
   - 点击 "Generate" 生成MSIX包

3. **注册开发者账号**
   - 访问 [Microsoft Partner Center](https://partner.microsoft.com/)
   - 注册开发者账号（一次性费用$19）
   - 完成身份验证流程

4. **创建应用提交**
   - 在Partner Center创建新应用
   - 填写应用信息（名称、描述、类别等）
   - 上传应用包（MSIX）
   - 提供应用屏幕截图
   - 设置价格和可用性
   - 提交审核

### 使用Electron方法（替代方案）

1. **设置Electron项目**
   ```bash
   # 安装Electron
   npm init
   npm install --save-dev electron electron-builder
   ```

2. **创建Electron配置**
   - 创建 `main.js`（Electron主进程文件）
   - 修改 `package.json` 添加Electron配置
   - 创建 `electron-builder.yml` 配置

3. **构建Windows应用**
   ```bash
   # 构建Windows应用
   npm run build-windows
   ```

4. **提交到Microsoft Store**
   - 使用构建的AppX/MSIX包
   - 按照上述步骤在Partner Center提交

## 发布到苹果App Store

### 使用Capacitor方法（推荐）

1. **安装Capacitor**
   ```bash
   npm init
   npm install @capacitor/core @capacitor/ios
   npm install --save-dev @capacitor/cli
   npx cap init "今天吃什么" "com.yourdomain.whattoeat"
   ```

2. **添加iOS平台**
   ```bash
   npx cap add ios
   ```

3. **配置iOS应用**
   - 打开 `ios/App/App.xcworkspace`
   - 在Xcode中配置应用信息
   - 设置Bundle ID、版本号等

4. **注册Apple开发者账号**
   - 访问 [Apple Developer Program](https://developer.apple.com/programs/)
   - 注册开发者账号（年费$99）
   - 完成所有必要的协议和身份验证

5. **准备应用提交**
   - 创建App Store Connect上的应用条目
   - 配置应用信息、隐私政策
   - 上传屏幕截图和App图标

6. **构建和提交应用**
   - 在Xcode中构建最终版本
   - 使用Xcode或Application Loader上传到App Store Connect
   - 提交审核

### 使用React Native/Flutter方法（替代方案）

如果选择重构应用，可以使用React Native或Flutter：

1. **创建新项目**
   ```bash
   # React Native
   npx react-native init WhatToEatApp
   
   # 或Flutter
   flutter create what_to_eat_app
   ```

2. **迁移功能和设计**
   - 重建UI组件
   - 迁移数据逻辑
   - 添加本地存储功能

3. **测试和提交**
   - 按照上述步骤提交到App Store

## 常见问题

### 微软商店应用被拒绝的常见原因
- 应用功能不符合描述
- 应用质量不足（崩溃、性能问题）
- 隐私政策不合规
- 缺少必要的权限说明

### 苹果App Store应用被拒绝的常见原因
- 应用功能不完整
- UI不符合iOS设计准则
- 没有提供足够的功能价值
- 隐私政策不合规
- 使用了未公开的API

### PWA相关问题
- 确保Service Worker正确缓存资源
- 离线功能测试充分
- Web App Manifest包含所有必要字段

---

如有任何问题，请联系开发团队获取支持。 
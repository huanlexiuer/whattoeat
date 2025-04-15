# "今天吃什么"应用部署指南

本指南将帮助你将"今天吃什么"应用部署到各种静态网站托管平台。

## 准备工作

1. 确保你的项目包含以下文件：
   - index.html
   - styles.css
   - app.js
   - service-worker.js
   - manifest.json
   - image/目录（包含所有必要的图片资源）

2. 检查manifest.json中的路径配置是否正确
   - 所有资源路径应该使用相对路径
   - 确保图标路径正确指向image目录

3. 检查service-worker.js中的缓存配置
   - 确保CACHE_ASSETS中列出了所有需要缓存的资源
   - 路径配置应与实际部署环境匹配

## 部署选项

### 1. 部署到GitHub Pages

1. 创建GitHub仓库
   - 在GitHub上创建新仓库
   - 将仓库克隆到本地

2. 推送代码
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <你的仓库URL>
   git push -u origin main
   ```

3. 启用GitHub Pages
   - 进入仓库设置
   - 找到Pages设置
   - 选择main分支作为源
   - 保存设置

### 2. 部署到Netlify

1. 注册Netlify账号并登录

2. 从GitHub导入项目
   - 点击"New site from Git"
   - 选择GitHub
   - 选择你的仓库

3. 配置部署设置
   - Build command: 留空（静态网站不需要构建）
   - Publish directory: . （根目录）

### 3. 部署到Vercel

1. 注册Vercel账号并登录

2. 导入项目
   - 点击"Import Project"
   - 选择"Import Git Repository"
   - 选择你的仓库

3. 配置部署设置
   - Framework Preset: Other
   - Build Command: 留空
   - Output Directory: .

## 部署后检查

1. 验证PWA功能
   - 检查service worker是否正常注册
   - 测试离线访问功能
   - 确认可以添加到主屏幕

2. 测试所有功能
   - 确保所有页面都能正常加载
   - 验证所有交互功能
   - 检查图片资源是否正确显示

3. 性能优化
   - 使用Chrome DevTools的Lighthouse进行性能检测
   - 根据建议进行优化

## 常见问题解决

1. 如果资源无法加载，检查：
   - 文件路径是否正确
   - 大小写是否匹配
   - 跨域设置是否正确

2. 如果PWA功能不正常，检查：
   - manifest.json配置
   - service-worker.js注册
   - HTTPS配置

3. 如果部署后出现404错误：
   - 确认部署目录结构正确
   - 检查路由配置
   - 验证文件名大小写
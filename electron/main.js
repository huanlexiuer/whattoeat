const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

// 保持对window对象的全局引用
let mainWindow;

function createWindow() {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    minWidth: 320,
    minHeight: 500,
    icon: path.join(__dirname, '../image/app-icon-512.jpg'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true
    }
  });

  // 加载应用的index.html
  mainWindow.loadFile(path.join(__dirname, '../index.html'));

  // 创建菜单
  const template = [
    {
      label: '文件',
      submenu: [
        {
          label: '重置应用数据',
          click() {
            mainWindow.webContents.executeJavaScript(`
              if(confirm('确定要重置应用数据吗？此操作将删除所有自定义设置。')) {
                localStorage.clear();
                location.reload();
              }
            `);
          }
        },
        { type: 'separator' },
        {
          label: '退出',
          accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
          click() { app.quit(); }
        }
      ]
    },
    {
      label: '视图',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: '关于',
      click() {
        mainWindow.webContents.executeJavaScript(`
          alert('今天吃什么 - 帮助解决选择困难的小工具\\n\\n版本: 1.0.0');
        `);
      }
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // 当window被关闭时触发
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// 当Electron完成初始化并准备创建浏览器窗口时调用此方法
app.whenReady().then(createWindow);

// 当所有窗口关闭时退出应用
app.on('window-all-closed', function () {
  // 在macOS上保持应用活动状态，直到用户使用Cmd + Q退出
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // 在macOS上，当dock图标被点击且没有其他窗口打开时，通常会在应用程序中重新创建一个窗口
  if (mainWindow === null) createWindow();
}); 
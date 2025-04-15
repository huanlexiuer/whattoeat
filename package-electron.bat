@echo off
echo 正在准备打包"今天吃什么"应用为桌面应用...

if not exist electron\node_modules (
  echo 初始化Electron项目...
  cd electron
  npm install
  cd ..
) else (
  echo Electron项目已初始化...
)

echo.
echo 请选择打包类型:
echo 1. 打包为Windows应用(exe)
echo 2. 打包为Windows商店应用(appx)
echo 3. 打包为macOS应用(dmg)
echo 4. 打包全部平台
echo.

set /p choice=请输入选择(1-4): 

cd electron

if "%choice%"=="1" (
  echo 正在打包为Windows应用(exe)...
  call npm run dist-win
) else if "%choice%"=="2" (
  echo 正在打包为Windows商店应用(appx)...
  call npm run dist-win -- --win appx
) else if "%choice%"=="3" (
  echo 正在打包为macOS应用(dmg)...
  call npm run dist-mac
) else if "%choice%"=="4" (
  echo 正在打包全部平台...
  call npm run dist
) else (
  echo 无效选择，退出...
  goto end
)

cd ..
echo.
echo 打包完成! 打包后的文件位于electron/dist目录。

:end
pause 
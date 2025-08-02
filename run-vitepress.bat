@echo off
:: 检查 Node.js
node -v >nul 2>&1 || (
    echo [错误] 未检测到 Node.js，请先安装 Node.js
    pause
    exit /b
)

:: 进入项目目录
cd /d %~dp0

:: 安装依赖（如果没有 node_modules）
if not exist "node_modules" (
    echo 正在安装依赖...
    npm install
)

:: 运行 VitePress
echo 正在启动 VitePress...
npm run dev
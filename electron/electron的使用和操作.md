@[toc]
## 先创建一个基本的electron应用
先安装
```
npm install --save-dev electron
```

然后在package.json里面创建如下内容
```js
{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js", //这里是主入口
  "author": "萧寂",
  "license": "MIT",
  "scripts": {
    "start": "electron ." //运行的命令
  },
  "devDependencies": {
    "electron": "^26.0.0"
  }
}
```
**如果安装了nodemon,可以在script节点进行如下配置,可以监听js的代码并实时变化**
**在html代码改变后不会立即监听,需要切换到应用里面按下CTRL+R即可刷新**
```js
"scripts": {
  "start": "nodemon --watch main.js --exec npm run build",
  "build": "electron ."
},
```
在同级创建main.js,然后在main.js中插入以下内容
```js
const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  // 创建窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  //当前窗口显示的页面
  win.loadFile("index.html");
};

// app启动之后创建窗口
app.whenReady().then(() => {
  createWindow();
});

// 生命周期
// 通过on监听事件

// 监听关闭的
app.on("close", () => {
  console.log("当前窗口关闭");
});

app.on("window-all-closed", () => {
  console.log("所有窗口关闭");
  //退出应用
  app.quit();
});
```
**CTRL+SHIFT+I可以打开调试面板**
同级下创建index.html文件
```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <title>萧寂</title>
  </head>
  <body>
    <h1>你好!</h1>
    我们正在使用 Node.js <span id="node-version"></span>, Chromium
    <span id="chrome-version"></span>, 和 Electron
    <span id="electron-version"></span>.
  </body>
</html>
```
然后直接运行
```
npm start
```
## electron生命周期事件
```js
ready:app初始化完成
dom-ready:一个窗口中的文本加载完成
did-finsh-load:导航完成时触发
window-all-closed:所有窗口都被关闭时触发
before-quit:在关闭窗口之前触发
will-quit:在窗口关闭并且应用退出时触发
quit:当所有窗口被关闭时触发
close:当窗口关闭时触发,此时应删除窗口引用
```
## 单个窗体事件
```js
ready-to-show:等待完毕准备加载执行,适用于页面显示
```
## 创建窗体时所携带的一些属性
```js
  const win = new BrowserWindow({
    x: 100,
    y: 50, //窗体坐标
    show: false, //不展示窗体
    width: 800,
    height: 600, //长宽
    maxHeight: 600,
    maxWidth: 1000, //最大宽高
    minHeight: 200,
    minWidth: 300, //最小宽高
    resizable: false, //不允许缩放
    title: "萧寂", //标题(加上这个属性,在页面中就不要有title标签了)
    icon: "./及格.png", //设置icon图标
    // frame: false, //只保留主体部分,不保留其他的选项卡窗口了,隐藏菜单栏
    // transparent: true, //将窗体完全透明化
    autoHideMenuBar: true, //只保留标题，不保留其他的选项卡部分
  });
```
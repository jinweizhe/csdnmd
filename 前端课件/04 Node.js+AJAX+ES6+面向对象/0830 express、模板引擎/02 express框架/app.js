// 第一步：安装express
// npm install --save express

// 第二步：导入express模块
var express = require('express');

// 第三步：创建服务器对象
var app = express();

// 托管静态资源：
// 静态资源：不需要服务器参与处理的一些资源：比如图片、音视频、各种文件等资源
// app.use() node的中间件函数，任何请求会执行use函数
// express.static() 把和app.js同级的public目录当做服务器的根目录
// http://127.0.0.1:3000/img/01.png：表示在public目录中有img目录，在img中有01.png图片
app.use(express.static('public'));

// 注意：如果先写了静态目录，后写 app.get('/')，并且在静态目录中添加了index.html，访问http://127.0.0.1:3000/index.html 和 http://127.0.0.1:3000/ 的结果是一样的，都会访问到 index.html 文件，就不会再访问后面的app.get('/')


// app.get() 添加get请求方法
// 参数1：请求的url
// 参数2：收到客户端请求执行的回调函数
// 使用express的get和post方法直接添加get请求和post请求，想要回调函数执行：1、请求方法要匹配；2、请求路径url要匹配
app.get('/', function (req, res) {
	// console.log('收到客户端的请求', req.url, req.method);
	// 给客户端响应数据
  // 使用send给客户端响应的数据叫做动态数据，使用不带后缀名的url的访问：/  /login  /register
	res.send('首页');
});


app.get('/login', function (req, res) {
	// console.log('收到客户端的请求', req.url, req.method);
	res.send('登录');
});

app.get('/weather', function (req, res) {

  var htmlstr = '<h1>天气预报</h1> 今天是雷阵雨，下的很大'
  res.send(htmlstr);

});

// app.post() 添加post请求方法
// app.post('/user', function (req, res) {
// 	// console.log('收到客户端的请求', req.url, req.method);
// 	res.send('用户信息');
// });

// 第四步：监听3000端口
app.listen(3000, function () {
	console.log('服务监听：http://127.0.0.1:3000');
});

// 1、npm init 初始化项目，生成package.json文件，package.json文件主要使用来记录项目信息，其中dependencies选项记录项目所依赖的模块

// 2、npm install--save 模块名 ：安装模块 --save是局部安装；--global是全局安装，当使用局部安装的时候，会自动在package.json文件中的dependencies选项中记录安装的模块信息，并把安装的模块保存在node_modules文件夹中

// 3、npm uninstall --save 模块名 ：卸载模块 --save是局部卸载；--global是全局卸载，当使用局部卸载的是偶，会自动把package.json文件中的dependencies选项中记录的模块信息删除，并把下载到node_modules文件夹中的模块包删除

// 注意：项目的node_modules文件夹可以随意删除，package.json不能删除，当node_modules文件夹被删除的之后，只要有package.json文件并且dependencies选项中有记录的模块信息，执行 npm install 可以直接安装模块

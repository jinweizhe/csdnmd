// http模块：可以创建http服务器
// http 是一种传输协议，全称叫 超文本传输协议
var http = require('http');
var fs = require('fs');

// 请求：客户端向服务端发送请求
  // 发请求有很多种方式：比如在浏览器地址栏写上：http:127.0.0.1:3000 就向开启的服务器发送了请求
// 响应：服务端向客户端响应数据
  
// 如果客户端发起请求，但是服务器没有响应，客户端就会一直处于挂起状态
  
// http.createServer 创建服务器对象
// 回调函数：当收到客户端的请求时执行的函数，给的响应就是写在这个回调函数中
var app = http.createServer(function (req, res) {
  console.log('收到客户端的请求');

  // 给客户端响应数据
  // res.write('123');

  var data = fs.readFileSync('./index.html', 'utf-8');
  res.write(data);

  // 结束响应
  res.end();

});


// app.listen 开启服务器监听
// 参数1：指定监听的端口号；参数2：开启监听成功的回调
app.listen(3000, function () {
  console.log('开启服务器成功：http:127.0.0.1:3000');
});

// 如果在服务器监听过程中，修改入口文件app.js或者app.js导入的相关文件，需要退出服务，重新启动node app

// 3000端口已经被占用了
// 多次使用同一个程序开启服务，第二次开启的服务和第一次开启的端口号重复
// 在同一个电脑中开启的服务器端口号不能重复
// Error: listen EADDRINUSE: address already in use :::3000

// 退出：ctrl+c   
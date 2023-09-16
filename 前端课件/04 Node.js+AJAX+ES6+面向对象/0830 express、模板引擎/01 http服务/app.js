var http = require('http');

// 处理客户端的请求
// req：请求对象 request：包含了请求地址url、请求协议、对客户端环境的一些描述信息
// res：响应对象 response：包含了服务端给客户端响应的数据、协议、服务器环境的一些描述

// 请求方法：get和post。
// 在浏览器地址栏写入url向服务器发请求，使用的请求方法时get方法---浏览器地址栏发送请求，只能发送get请求
var app = http.createServer(function (req, res) {
	// console.log('收到客户端的请求');
	// req.method 请求方法：get post
	// req.url 请求的url地址
	// console.log('请求对象：',req);
	console.log('请求url：', req.url,req.method);

	// 作用：告诉浏览器服务器返回的数据是什么类型的，避免中文乱码
	res.setHeader('Content-Type', 'text/plain; charset=utf-8');

	// 直接在浏览器地址栏发送请求使用 http://127.0.0.1:3000 相当于访问 http://127.0.0.1:3000/
	if (req.method == 'GET') {
		if (req.url == '/') {
			// 首页
			res.write('首页');
		} else if (req.url == '/login') {
			// 登录，使用 http://127.0.0.1:3000/login访问
			res.write('登录');
		} else if (req.url == '/register') {
			// 注册
			res.write('注册');
		} else {
			// 其他
			res.write('未找到请求的地址');
		}
	} else {
		res.write('未找到post请求');
	}

	// 给客户端响应数据
	// res.write('123');
	res.end();
});

app.listen(3000, function () {
	console.log('开启服务：http://127.0.0.1:3000');
});

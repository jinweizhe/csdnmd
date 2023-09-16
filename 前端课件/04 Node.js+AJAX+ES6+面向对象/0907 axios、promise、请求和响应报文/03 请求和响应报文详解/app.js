var express = require('express');


var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.post('/api/post', (req, res) => {
	// 在服务端获取请求报文：请求行、请求头、请求体
	// 请求行
	// 请求头
	// 空行
	// 请求体
	console.log('在Node.js服务端获取请求报文：==============================');
	console.log('请求行：');
	console.log('请求方法：' + req.method);
	console.log('请求的URL：' + req.originalUrl);
	console.log('请求头：');
	console.log('主机地址：' + req.get('Host'));
	console.log('可接受的类型：' + req.get('Accept'));
	console.log('浏览器信息：' + req.get('User-Agent'));
	console.log('语言偏好：' + req.get('Accept-Language'));
	console.log('可接受的编码格式：' + req.get('Accept-Encoding'));
	console.log('请求体：', req.body);

	// 响应报文：响应行、响应头、响应体 --- 在服务端设置
	// 响应行
	// 响应头
	// 空行
	// 响应体
	console.log('在Node.js中设置响应报文：----------------------------');
	// 响应行：
	res.status(200); //设置状态码
	// 响应头：
	// res.set(name,value)  设置响应头
	res.set('Content-type', 'application/json'); //设置响应头
	res.set('Server', 'Node.js');
	// 响应体：
	// res.append('') 添加响应体（响应数据）
	// res.send() 设置响应体（响应数据）
	// res.end() 结束响应体
	// res.json({}) 转化为JSON

	if (req.body.username == '张三') {
		res.json({ error: 0, data: '注册成功' });
	} else {
		res.json({ error: 1, data: '注册失败' });
	}
});

app.listen(3000, () => {
	console.log('node running');
});

var express = require('express');
var app = express();

app.use(require('cors')());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/info', function (req, res) {
	console.log('get请求：', req.query);
	if (req.query.username == '张三' && req.query.password == '123') {
		res.json({ error: 1, data: '获取信息成功' });
	} else {
		res.json({ error: 1, data: '账号或者密码错误' });
	}
});

app.post('/login', function (req, res) {
	console.log('post请求：', req.body);
	if (req.body.username == '张三' && req.body.password == '123') {
		res.json({ error: 1, data: '登录成功' });
	} else {
		res.json({ error: 1, data: '账号或者密码错误' });
	}
});

app.listen(3000, function () {
	console.log('running');
});

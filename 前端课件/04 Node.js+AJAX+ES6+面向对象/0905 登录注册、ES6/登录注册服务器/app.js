var express = require('express');
var cors = require('cors');
var app = express();
var fs = require('fs');
var md5 = require('md5');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors()); //跨域

var globalUser = null;

//服务器启动后，先读取用户资料。
var users = [];
if (fs.existsSync('./users.json')) {
	var data = fs.readFileSync('./users.json', 'utf-8');
	users = JSON.parse(data);
}

// 注册
app.post('/regist', function (req, res) {
	console.log('注册：', req.body);
	console.log(req.body.hobby, Array.isArray(req.body.hobby));
	if (!req.body.username || typeof req.body.username != 'string') {
		return res.json({ error: 1, data: '账号不能为空' });
	}
	if (!req.body.password || typeof req.body.password != 'string') {
		return res.json({ error: 1, data: '密码不能为空' });
	}
	if (req.body.password != req.body.confirm) {
		return res.json({ error: 1, data: '两次密码不一致' });
	}
	if (!req.body.age || typeof req.body.age != 'string') {
		return res.json({ error: 1, data: '年龄不能为空' });
	}
	if (!req.body.sex || typeof req.body.sex != 'string') {
		return res.json({ error: 1, data: '性别不能为空' });
	}
	if (!req.body.major || typeof req.body.major != 'string') {
		return res.json({ error: 1, data: '专业不能为空' });
	}

	if (!req.body.hobby ) {
		return res.json({ error: 1, data: 'hobby必须是数组' });
	}
	var user = users.find(function (item) {
		return item.username == req.body.username;
	});
	if (user) {
		res.json({ error: 1, data: '用户名已存在！' });
	} else {
		delete req.body.confirm;
		req.body.password = md5(req.body.password);
		users.push(req.body);
		fs.writeFileSync('users.json', JSON.stringify(users));
		res.json({ error: 0, data: '注册成功！' });
	}
});

// 登录
app.post('/login', function (req, res) {
	if (req.body.username == '') {
		return res.json({ error: 1, data: '账号不能为空' });
	}
	if (req.body.password == '') {
		return res.json({ error: 1, data: '密码不能为空' });
	}
	var user = users.find(function (item) {
		return item.username == req.body.username;
	});
	if (!user) {
		res.json({ error: 1, data: '用户名不存在！' });
	} else {
		if (md5(req.body.password) == user.password) {
			globalUser = user;
			res.json({ error: 0, data: '登录成功！' });
		} else {
			res.json({ error: 1, data: '密码错误！' });
		}
	}
});

// 退出登录
app.get('/logout', (req, res) => {
	globalUser = null;
	res.json({ error: 0, data: '退出登录成功' });
});

// 获取用户信息
app.get('/user', (req, res) => {
	if (globalUser) {
		res.json({ error: 0, data: globalUser });
	} else {
		res.json({ error: 1, data: '请先登录' });
	}
});

// 获取所有用户
app.get('/all/user', (req, res) => {
	if (globalUser) {
		var data = JSON.parse(JSON.stringify(users)).map(function (user) {
			delete user.password;
			return user;
		});
		res.json({ error: 0, data: data });
	} else {
		res.json({ error: 1, data: '请先登录' });
	}
});

app.listen(3000, () => console.log('running'));

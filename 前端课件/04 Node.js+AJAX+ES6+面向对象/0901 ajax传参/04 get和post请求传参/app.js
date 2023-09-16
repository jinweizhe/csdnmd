var express = require('express');
var app = express();

app.use(express.static('public'));
// 用来解析post请求的参数，把post请求的参数解析到req.body中
app.use(express.urlencoded({ extended: false }));

// req: request 表示请求对象，包含客户端请求的url地址:req.url、请求的方法:req.method、请求的参数:req.query，和客户端相关的数据都包含在req对象中
// 请求的参数：get请求使用req.query获取；post请求使用req.body

// res: response 表示响应对象，包含服务端给客户端响应的数据res.json()、响应头等数据，和服务端相关的数据和操作都在res对象中

// var username = '';
// var password = '';
var users = [];
app.get('/login', function (req, res) {
	// req.query 获取get请求的参数
	// req.query是一个对象，该对象的属性就是客用户端传递参数名
	console.log('开始登录：', req.method, req.url, req.query);
	if (req.query.username == '') {
		return res.json({ error: 1, data: '账号不能为空' });
	}
	if (req.query.password == '') {
		return res.json({ error: 1, data: '密码不能为空' });
	}

	// 假设：账号：张三；密码：123
	// if (req.query.username == username) {
	// 	if (req.query.password == password) {
	// 		res.json({ error: 0, data: '登录成功' });
	// 	} else {
	// 		res.json({ error: 1, data: '密码错误' });
	// 	}
	// } else {
	// 	res.json({ error: 1, data: '账号不存在，请先注册' });
	// }

	var user = users.find(function (o) {
		return o.username == req.query.username;
	});
	console.log('user=', user);

	if (user) {
		// 存在，说明用户名已经有了，再判断密码是否正确
		if (req.query.password == user.password) {
			res.json({ error: 0, data: '登录成功' });
		} else {
			res.json({ error: 1, data: '密码错误' });
		}
	} else {
		res.json({ error: 1, data: '账号不存在，请先注册' });
	}
});

app.post('/register', function (req, res) {
	console.log('注册：', req.body);
	if (req.body.username == '') {
		return res.json({ error: 1, data: '账号不能为空' });
	}
	if (req.body.password == '') {
		return res.json({ error: 1, data: '密码不能为空' });
	}
	// username = req.body.username;
	// password = req.body.password;
	var user = users.find(function (o) {
		return o.username == req.body.username;
	});
	console.log('user=', user);

	if (user) {
		// 存在
		res.json({ error: 1, data: '用户名已存在' });
	} else {
		users.push(req.body);
		res.json({ error: 0, data: '注册成功' });
	}
	console.log(users);
});

app.listen(3000, function () {
	console.log('running');
});

// var data = [
// 	{ username: '张三', password: '123' },
// 	{ username: '李四', password: '123' },
// 	{ username: '王五', password: '123' },
// ];

// var obj = { username: '张三', password: '123' };
// // 1、for语句
// var user = null;
// for(var i = 0; i < data.length; i++){
//   var o = data[i];
//   if (o.username == obj.username) {
//     user = o;
//     break;
//   }
// }


// 2、find: 找到数组中第一个符合条件的元素，如果有返回该元素，如果没有返回undefined
// var user = data.find(function (o) {
//   return o.username==obj.username;
// });
// console.log('user=',user);

// if (user) {
// 	// 存在
// } else {
// 	data.push(obj);
// }

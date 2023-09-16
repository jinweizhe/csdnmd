const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const md5 = require('md5');
const User = require('./module/user');

// express-session 在node的服务端操作session
const session = require('express-session');

// 使用后use挂载session之后，会在请求对象req上自动添加session属性，可以在请求对象上使用 req.session 数据就保存在session对象上

// session的数据，保存在服务端
// maxAge的时间设置为0，session就是一种会话session，关闭浏览器，重新打开浏览器发请求，session会被删除
// maxAge设置一个固定的时间，session就是一种长久session，关闭浏览器，重新打开浏览器发请求，session不会被删除

// 默认是保存在内存中，如果服务端重启，session的数据会丢失；也可以给session做持久化存储，配合数据库，把session的数据保存在数据中
const MongoStore = require('connect-mongo');

app.use(
	session({
		secret: 'myapp',
		resave: true,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 60,
    },
    store: MongoStore.create({
			mongoUrl: 'mongodb://127.0.0.1/h21',
		}),
	})
);

// 注册
app.post('/regist', (req, res) => {
	// 重名判断: 从数据库中找username为张三的数据，如果有，说明已经被注册，如果没有可以注册
	User.findOne({ username: req.body.username })
		.exec()
		.then(data => {
			if (data) {
				// 如果data存在说明用户名已经存在
				res.json({ error: 1, data: '用户名已存在' });
			} else {
				req.body.password = md5(req.body.password);
				const user = new User(req.body);
				user.save().then(() => {
					res.json({ error: 0, data: '注册成功' });
				});
			}
		});
});

// 登录
app.post('/login', (req, res) => {
	User.findOne({ username: req.body.username })
		.exec()
		.then(data => {
			// console.log('登录：',data);
			if (data) {
				// 如果data存在说明用户名存在，判断密码是否正确
				if (data.password == md5(req.body.password)) {
					// 登录成功保存信息：
					// 1、使用cookie
					// 2、使用session
					req.session.user = JSON.parse(JSON.stringify(data));
					res.json({ error: 0, data: '登录成功' });
				} else {
					res.json({ error: 1, data: '密码错误' });
				}
			} else {
				res.json({ error: 1, data: '用户名已不存在' });
			}
		});
});


// 获取用户信息
app.get('/user', (req, res) => {
	console.log('session=', req.session);
	User.findOne({ _id: req.session?.user?._id || '' })
		.exec()
		.then(data => {
			res.json({ error: 0, data: JSON.parse(JSON.stringify(data)) });
		})
		.catch(err => {
			res.json({ error: 1, data: '请先登录' });
		});
});

// 退出登录
app.get('/logout', (req, res) => {
	// 删除session中的user
	req.session.user = null;
	res.json({ error: 0, data: '退出登录成功' });
});

app.listen(3000, () => console.log('running 3000'));

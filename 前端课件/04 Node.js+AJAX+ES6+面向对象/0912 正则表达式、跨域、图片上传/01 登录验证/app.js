const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require('cors')());
const md5 = require('md5');
const User = require('./module/user');
const jwt = require('jsonwebtoken');

// console.log(jwt);
const secret = 'hello world!';
// jwt.sign 生成token
// 参数1：token中保存的数据
// 参数2：加密提供的字符串
// 参数3：设置token过期时间
// const token = jwt.sign({ _id: 1, name: '张三' }, secret, {expiresIn: 60*60});

// jwt.verify 验证token
// jwt.verify(token, secret, (err, data) => {
//   console.log(err, data);
// });

const verify = (req, res, next) => {
	console.log('headers=', req.headers.authorization);
	const token = req.query.token || req.headers.authorization.replace('Bearer','').trim();
	jwt.verify(token, secret, (err, data) => {
		console.log(err, data);
		if (err) {
			res.json({ error: 1, data: 'token验证失败' });
		} else {
			// 在请求对象上添加_id
			req._id = data._id;
			next();
		}
	});
};

// 登录成功，服务端会签发一个token返回给客户端
// 客户端收到token使用localStorage保存在本地
// 下次发请求访问需要验证的接口把token放在请求头 或者 参数中传递token给服务端
// 服务端根据客户端发送的token进行验证：验证通过查找数据返回数据；验证失败：告诉客户端失败的原因

// 掘金：点赞、收藏、评论等接口需要token验证
// 查看文章、分类、标签不要token验证

// 注册
app.post('/regist', (req, res) => {
  if (!/^[\u4e00-\u9fa5]{2,6}$/.test(req.body.username)) {
    return res.json({ error: 1, data: '请输入2-6位汉字' });
  }
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
					// 3、使用jwt: 登录成功生成token，生成token的时候保存用户的信息，并把token发送给客户端
					res.json({
						error: 0,
						data: '登录成功',
						token: jwt.sign({ _id: data._id }, secret, { expiresIn: 60 * 60 }),
					});
				} else {
					res.json({ error: 1, data: '密码错误' });
				}
			} else {
				res.json({ error: 1, data: '用户名已不存在' });
			}
		});
});

// 获取用户信息
app.get('/user', verify, (req, res) => {
	User.findOne({ _id: req._id })
		.exec()
		.then(data => {
			res.json({ error: 0, data: JSON.parse(JSON.stringify(data)) });
		});
});

app.get('/zan', verify, (req, res) => {
	console.log('req._id=', req._id);
	res.json({ error: 0, data: '点赞成功' });
});

app.listen(3000, () => console.log('running 3000'));

const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const md5 = require('md5');
const User = require('./module/user');
// 用来解析cookie，可以在req.cookies对象中访问cookie
const cookieParser = require('cookie-parser');
app.use(cookieParser());

/*
  浏览器的存储技术：cookie、webstorage
  1、cookie是浏览器的一种存储技术，把数据存储在浏览器的某个文件夹内
  2、cookie是由服务端创建，并发送给客户端，cookie最终是保存客户端的
  3、当客户端下一次请求的时候，会自动携带之前服务端返回的cookie

  cookie：分为临时cookie和长久cookie
		临时cookie：设置cookie没有添加过期时间，是一种会话cookie，会话结束（关闭浏览器）cookie被删除
		长久cookie：设置一个过期时间，当达到设定的时间，浏览器会自动删除cookie
*/ 

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
					// 设置cookie：分为临时cookie和长久cookie
					// 临时cookie：设置cookie没有添加过期时间，是一种会话cookie，会话结束（关闭浏览器）cookie被删除
					// 长久cookie：设置一个过期时间，当达到设定的时间，浏览器会自动删除cookie
					// res.setHeader('Set-Cookie','_id='+data._id);
					res.cookie('_id', String(data._id), {
						maxAge: 1000 * 60 * 60,
					});

					res.json({ error: 0, data: '登录成功' });
				} else {
					res.json({ error: 1, data: '密码错误' });
				}
			} else {
				res.json({ error: 1, data: '用户名已不存在' });
			}
		});
});
/*
{
  id: new ObjectId("6319a3c7647c7ad8e598dfbd"),
  username: '张三',
  password: '202cb962ac59075b964b07152d234b70',
  age: 22,
  sex: '男',
  major: 'html',
  hobby: [ '运动' ],
  __v: 0
}
*/

// 获取用户信息
app.get('/user', (req, res) => {
	// console.log(req.headers.cookie);
  // 获取cookie 
	console.log(req.cookies);
	User.findOne({ _id: req.cookies._id || '' })
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
  // 删除cookie
  res.clearCookie('_id');
  res.json({ error: 0, data: '退出登录成功' });
});

app.listen(3000, () => console.log('running 3000'));

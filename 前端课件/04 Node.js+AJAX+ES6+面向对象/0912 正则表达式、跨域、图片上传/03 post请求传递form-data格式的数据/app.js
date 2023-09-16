var express = require('express');
// multer模块可以处理以formdata形式提交的数据,还可以处理上传的文件
var multer = require('multer');

var app = express();
app.use(express.static('public'));
app.use(require('cors')());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

var form = multer();

//第二个参数form.none()处理以formdata方式提交的数据，把formdata提交的数据提取出来放在req.body中
app.post('/login', form.none(), (req, res) => {
	console.log('req.body:', req.body);

	if (req.body.username == '张三') {
		res.json({ error: 0, data: '登录成功' });
	} else {
		res.json({ error: 1, data: '登录失败' });
	}
});

app.listen(3000, () => {
	console.log('node running');
});

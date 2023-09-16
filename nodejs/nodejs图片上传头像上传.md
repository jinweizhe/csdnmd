### 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/411ca4f280854ff4bcdad4232ce02cf2.png)
**utils文件夹无用,没文件**
### 前端代码
```html
<!DOCTYPE html>
<html lang="zh-CN">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<meta name="author" content="金西振" />
		<title></title>
		<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
		<style></style>
	</head>
	<body>
		<form>
			<!-- multiple 属性支持选择多个文件 -->
			<!-- accept="image/*" 只能选择图片 -->
			<input type="file" name="myfile" id="myfile" accept="image/*" multiple />
			<br />
			<input type="submit" value="上传" />
		</form>
		<script>
			const form = document.forms[0];
			const input = form.myfile;
			form.onsubmit = function (ev) {
				ev.preventDefault();
				// input.files获取选择的文件
				// console.log('文件上传 input.files', input.files);

				const file = input.files[0];
				console.log('file: ', file);
        if (!file) {
          return alert('请选择图片');
        }
				// 如果不是图片提示用户修改
				if (!file.type.startsWith('image')) {
					return alert('只能上传图片');
				}

				// 方式一：使用append；
				// const formdata = new FormData();
        // 上传一个文件
				// formdata.append('myfile', file);

        // 上传多个文件
				// formdata.append('myfile', input.files[0]);
				// formdata.append('myfile', input.files[1]);
				// formdata.append('myfile', input.files[2]);


				// 方式二：传递form对象：单个和多个文件写法一致
				const formdata = new FormData(form);

				axios({
					url: 'http://127.0.0.1:3000/upload',
					method: 'POST',
					data: formdata,
				}).then(({ data }) => {
					console.log('data: ', data);
				});
			};
		</script>
	</body>
</html>
```
### app.js代码
```js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./router/upload'));

app.listen(3000, () => {
	console.log('running: http://127.0.0.1:3000');
});

// 文件上传
// 服务端（听懂即可）：需要使用multer模块

// 客户端（掌握）：只需要使用post请求，发送formdata类型的数据即可
```
### upload核心代码:
```js
const router = require('express').Router();
const multer = require('multer');
const path = require('path');
// 获取文件的扩展名
console.log(path.extname('1.png'));

const storage = multer.diskStorage({
	// 用来指定文件的位置
	destination(req, file, cb) {
		cb(null, './public/img');
	},
	// 用来设置文件的名字
	filename(req, file, cb) {
		// console.log('file: ', file);
		const filename = Date.now() + path.extname(file.originalname);
		cb(null, filename);
	},
});

// {
//   fieldname: 'myfile',     上传时定义的名字
//   originalname: 'head.png',  图片名字
//   encoding: '7bit',     编码格式
//   mimetype: 'image/png'    文件类型
// }

const upload = multer({
	// 使用dest选项无法修改文件的名，文件名默认是一个长度为32位的随机值
	// dest: './public/img',
	storage: storage,
	// 文件上传限制:单位字节
	limits: { fileSize: 1024 * 1024 * 2 },
	// 文件过滤：决定哪些文件可以上传，哪些文件跳过
	// fileFilter: function (req, file, cb) {
	// 	if (file.mimetype.startsWith('image')) {
	// 		cb(null, true); // 接收这个文件
	// 	} else {
	// 		cb(null, false); // 拒绝这个文件
	// 	}
	// },
});

// multer模块是用来专门处理文件上传的，只处理multipart/form-data类型的数据
// 使用formdata可以传递文本信息，也可以传递文件数据
// 如果传递文本数据，会把参数数据保存在req.body中
// 如果传递文件数据，会把参数数据保存在req.file 或者 req.files 中

// 使用multer模块，会向req对象上添加body和 file或者files属性
// req.body 用来获取文本信息
// req.file 单个文件上传的信息  upload.single('myfile') 用上传单个文件
// req.files 一次上传多个文件的信息 upload.array('myfile', 6) 用于上传多个文件
// myfile是参数名，类似于username
router.post('/upload', upload.array('myfile'), (req, res) => {
	console.log('req.files:', req.files);

	// if (req.file) {
	res.json({ error: 0, data: '上传成功' });
	// } else {
	// 	res.json({ error: 0, data: '上传失败' });
	// }
});

module.exports = router;
```
## 头像上传数据库(这里只写后端核心代码)
```js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

let User = require('../modules/user');
let router = express.Router();
const jwt = require('../modules/jwt');

let uploadpath = './public/imgs/'; // 图头像上传地址
const imgURL = './imgs/'; // 头像网路地址
let avatarName; // 头像名字

let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadpath);
	},
	filename: function (req, file, cb) {
		let extname = path.extname(file.originalname);
		// 张三-1834137249801230921.png
		avatarName = req.username + '-' + Date.now() + extname;
		cb(null, avatarName);
	},
});
let isImage = false;
let upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: function (req, file, cb) {
		if (file.mimetype.startsWith('image')) {
			isImage = true;
			cb(null, true);
		} else {
			isImage = false;
			cb(null, false);
		}
	},
});

router.post('/user/avatar', jwt.verify, upload.single('avatar'), (req, res) => {
	if (!isImage) {
		res.json({ error: 1, data: '只能上传图片' });
		return;
	}
	// 如果现在的头像不是默认图片，删除现有的头像(旧头像)，保存新上传的头像地址
	if (fs.existsSync(uploadpath + avatarName)) {
		User.findOne({ _id: req._id }, (error, user) => {
			// 如果用户有旧头像，则先删除旧头像文件，然后把新头像文件的url存入用户信息
			if (user.avatar != imgURL + 'timg.jpg') {
				let oldpath = user.avatar.replace(imgURL, 'public/imgs/');
				if (fs.existsSync(oldpath)) {
					fs.unlinkSync(oldpath); //删除旧头像
				}
			}
			// 保存新头像
			user.avatar = imgURL + avatarName; //新头像的地址
			user.save(error => {
				res.json({ error: 0, data: '上传成功' });
			});
		});
	} else {
		res.json({ error: 0, data: '上传失败' });
	}
});

module.exports = router;
```
### JWZ权限验证代码
```js
const jwt = require('jsonwebtoken');
const secretkey = 'howdoyoudo'; //密钥

// 生成token
module.exports.sign = (data = {}) => {
	return jwt.sign(data, secretkey, {
		expiresIn: 60 * 60,
	});
};

// 验证token
module.exports.verify = (req, res, next) => {
	let authorization = req.headers.authorization || req.body.token || req.query.token || '';
	let token = '';
	if (authorization.includes('Bearer')) {
		token = authorization.replace('Bearer ', '');
	} else {
		token = authorization;
	}

	jwt.verify(token, secretkey, (error, data) => {
		if (error) {
			res.json({ error: 1, data: 'token验证失败' });
    } else {
			req._id = data._id;
			req.username = data.username;
			next();
		}
	});
};
```
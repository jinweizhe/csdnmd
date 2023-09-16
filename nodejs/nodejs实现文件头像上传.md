# 文件上传

文件上传就是把图片、音视频等文件上传到服务端，文件上传必须使用post请求，数据格式为multipart/form-data的数据。

# 服务端

在nodejs中处理文件，需要使用multer模块来处理multipart/form-data格式的数据。

Multer 是一个 node.js 中间件，用于处理 `multipart/form-data` 类型的表单数据，它主要用于上传文件。

**注意**: Multer 不会处理任何非 `multipart/form-data` 类型的表单数据。

中文文档：https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md

## 安装multer

```bash
npm install --save multer
```

## 使用

Multer 会添加一个 `body` 对象 以及 `file` 或 `files` 对象 到 express 的 `request` 对象中。 `body` 对象包含表单的文本域信息，`file` 或 `files` 对象包含对象表单上传的文件信息。

```js
const multer = require('multer');


const uploadPath = './public/imgs';

const storage = multer.diskStorage({
	// destination 是用来确定上传的文件应该存储在哪个文件夹中
	destination: function (req, file, cb) {
		cb(null, uploadPath);
	},
	// filename 用于确定文件夹中的文件名的确定。 如果没有设置 filename，每个文件将设置为一个随机文件名，并且是没有扩展名的。
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	},
});

const upload = multer({
	// 设置上传的文件存储位置
	storage: storage,
	// 文件上传限制:单位字节
	limits: { fileSize: 1024 * 1024 * 2 },
	// 文件过滤：决定哪些文件可以上传，哪些文件跳过
	fileFilter: function (req, file, cb) {
		if (file.mimetype.startsWith('image')) {
			cb(null, true); // 接收这个文件
		} else {
			cb(null, false); // 拒绝这个文件
		}
	},
});

//设置post请求处理图片上传
// upload.single(name) 单个文件上传
// upload.array(name,maxCount) 多个文件上传：name参数是文件选择input框的name属性，maxCount 最大上传数量
router.post('/upload', upload.single('myfile'), function (req, res) {
	// multer将请求中的文件存储之后，会把文件的信息(包括文件存储时的文件名)放入req.file对象中。(如果用的是upload.array，则会放在req.files中)
	// multer还会把本次表单提交的文本字段(如果有)解析为对象存入req.body中
	// console.log('文件：',req.file);
	if (req.file) {
		res.json({ error: 0, data: '上传成功' });
	} else {
		res.json({ error: 0, data: '上传失败' });
	}
});

```

# 客户端

文件上传必须使用post请求，数据使用 `multipart/form-data` 类型的表单数据。

有如下HTML结构

```html
<form>
  <div id="upload-box">
    <img class="img" src="./imgs/add.png">
    <input class="upfile" type="file" name="myfile" accept="image/*" hidden>
  </div>
  <input class="upload" type="button" value="上传">
</form>
```

```js
// 因为默认的input[type=file]标签长的丑，所以我们把它隐藏掉，但是依然保留其click的功能。
// 当点击div时，调用input[type=file]标签的click()方法，即可打开选择文件对话框
$("#upload-box").on("click", ".img", function () {
  $(this).next().click();
});

//显示图片(添加显示图片的代码)
var file = null;
$("#upload-box").on("change", ".upfile", function () {
  file = this.files[0];
  if (!file.type.startsWith('image')) {
    layer.msg('只能上传图片')
    file = null;
    return;
  }
  $('.upfile').prev().attr("src", URL.createObjectURL(file));
});

$('.upload').click(function (ev) {
  if (!file) {
    return alert('请选择图片')
  }

  var data = new FormData($('form').get(0));
  axios({
    url: '/upload',
    method: 'POST',
    data: data,
  }).then(res => {
    layer.msg(res.data.data)
  })
});
```

# 头像系统

```js
/user.js

const mongoose = require('./db');

const userSchema = new mongoose.Schema({
  username:String,
  password:String,
  age:Number,
  gender:Number,//0 男；1 女
  major:String,
  hobby:Array,
  avatar:{
    type:String,
    // 默认值
    default:'http://127.0.0.1:3000/imgs/timg.jpg'
  }
});

let User = mongoose.model('user-avatar',userSchema);

module.exports = User;
```

```js
//upload.js

const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

let User = require('../modules/user');
let router = express.Router();
const jwt = require('../modules/jwt');

let uploadpath = './public/imgs/'; // 图头像上传地址
const imgURL = 'http://127.0.0.1:3000/imgs/'; // 头像网路地址
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
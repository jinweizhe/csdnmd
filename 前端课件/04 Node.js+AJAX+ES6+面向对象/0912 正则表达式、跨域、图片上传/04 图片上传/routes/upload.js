var express = require('express');
var router = express.Router();
// Multer 用于处理 multipart/form-data 类型的表单数据， 它主要用于上传文件
var multer = require('multer');
// https://blog.csdn.net/kaelyn_X/article/details/78822006
// https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md

var uploadPath = './public/imgs';

var storage = multer.diskStorage({
	// destination 是用来确定上传的文件应该存储在哪个文件夹中
	destination: function (req, file, cb) {
		cb(null, uploadPath);
	},
	// filename 用于确定文件夹中的文件名的确定。 如果没有设置 filename，每个文件将设置为一个随机文件名，并且是没有扩展名的。
  filename: function (req, file, cb) {
    console.log('file=',file);
		// {
		//     fieldname: 'myfiles',
		//     originalname: 'hejp.png',
		//     encoding: '7bit',
		//     mimetype: 'image/png'
		// }
		cb(null, Date.now() + '-' + file.originalname);
	},
});
var upload = multer({
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
	console.log('文件：',req.file);
	console.log('文本：',req.body);
	if (req.file) {
		res.json({ error: 0, data: '上传成功' });
	} else {
		res.json({ error: 0, data: '上传失败' });
	}
});

module.exports = router;

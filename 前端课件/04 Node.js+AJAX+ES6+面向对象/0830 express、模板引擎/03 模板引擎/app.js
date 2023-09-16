var express = require('express');
var app = express();

// 导入模板引擎
var artTemplate = require('express-art-template');
// 注册模板引擎：
// 参数1：模板文件的后缀名；参数2：模板引擎
app.engine('html', artTemplate);
// 设置模板文件的目录，默认是在项目根目录下的views文件夹
// app.set('views', './views');// 如果不修改默认目录，这句话省略

var fs = require('fs');
var dataStr = fs.readFileSync('./data.json', 'utf-8');
var data = JSON.parse(dataStr);
// console.log(data);

app.get('/user', function (req, res) {
	res.render('user.html', data);
});

app.get('/', function (req, res) {
	// render函数用来渲染页面
	// 参数1：在views目录中的模板文件
	// 参数2：是模板的数据，模板的数据只能是对象{}，不能是数组[]，数据内部是可以包含数组
	// 参数2传入对象，可以直接在模板中使用该对象的属性名 {{city}} {{list}}
	res.render('index.html', {
		city: '南京市',
		list: ['雷阵雨', '雷阵雨+1', '多云'],
	});

	// var list = ['雷阵雨', '雷阵雨+1', '多云'];
	// res.render('index.html', {list: list});
});

// 渲染数据：直接直接使用原生JS的方式拼接字符串，比较繁琐，为了方便的渲染页面，可以使用模板引擎，把数据和模板（html页面）结合，可以很方便渲染页面
// app.get('/', function (req, res) {
//   var html = `<h1>${data.title}</h1>`;
// 	res.send(html);
// });

app.listen(3000, function () {
	console.log('服务监听：http://127.0.0.1:3000');
});

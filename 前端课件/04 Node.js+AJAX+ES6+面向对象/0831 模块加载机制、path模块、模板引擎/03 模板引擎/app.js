var express = require('express');
var app = express();
// var path = require('path');


var expressArtTemplate = require('express-art-template');
app.engine('html', expressArtTemplate);
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// 导入art-template，添加过滤器 {{变量 | 过滤器函数}}
// {{变量 | 过滤器函数}} 变量会自动成为过滤器函数的参数
// {{变量 | 过滤器函数 参数2 参数3}} 在过滤器函数的后面可以寄添加其余的参数
// {{变量 | 过滤器函数 | 过滤器函数 }} 使用多个顾虑器函数
var template = require('art-template');
template.defaults.imports.fn = function (v) {
  console.log(arguments);
  return v+'岁';
}

// app.use(express.static('public'));

var data = {
  "error":0,
  "msg":"success",
  "title":"好友列表",
  "data":[
    {
      "name": "张三",
      "age": 18,
      "height": 175
    },
    {
      "name": "李四",
      "age": 22,
      "height": 180
    },
    {
      "name": "王五",
      "age": 20,
      "height": 170
    }
  ]
}

app.get('/', function (req, res) {
	// 服务端渲染: 使用res.send 或者 res.render 给客户端返回数据
	// res.send('<h1>首页 send</h1>');
	// 参数2 传递一个对象，只要传递了对象，在模板中就可以直接使用该对象的属性
  res.render('home', data)
  // res.render('home', {
  //   title: data.title,
  //   data: data.data,
  //   fn: function (v) { 
  //     return v+'岁';
  //   }
  // });
  // res.render('home', {
  //   title: '首页'
  // });
});

app.listen(3000, function () {
	console.log('服务：http://127.0.0.1:3000');
});

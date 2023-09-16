var express = require('express');
var app = express();


app.use(require('cors')());
app.use(express.static('public'));

// 1、使用express.urlencoded({ extended: false })在服务端处理请求体中urlencoded类型的数据
app.use(express.urlencoded({ extended: false }));

// 2、使用 express.json() 在服务端处理请求体中json类型的数据
app.use(express.json());


// 服务端获取参数都是使用req.body  
app.post('/info', function (req, res) {
  console.log('post请求：', req.body);
  if (req.body.psw == '123') {
    res.json({ error: 0, data: '成功' });
  } else {
    res.json({error: 1, data: '失败'})
  }
});


app.listen(3000, function () {
	console.log('running');
});

var express = require('express');
var app = express();

app.use(require('cors')());

// 设置静态目录，使用 http://127.0.0.1:3000 目的是为了访问index.html
app.use(express.static('client'))


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

// get 方法创建的URL路径：http://127.0.0.1:3000/info
app.get('/info', function (req, res) {

  // res.json 给客户端返回json类型的数据
  res.json(data);
});


app.listen(3000, function () {
	console.log('running');
});

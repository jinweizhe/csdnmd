## 这是基于nodejs搭建的,下面是node.js的代码
安装: socket.io
```js
npm install socket.io
```
```js
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    //解决跨域问题
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // 自定义接收消息事件
  socket.on("sendMsg", (data) => {
    console.log(data);
    //   定义发送消息事件
    // io表示广播出去，发送给全部的连接
    io.emit("pushMsg", "服务端返回的消息：" + data);
  });
});

httpServer.listen(3000, function () {
  console.log("http://127.0.0.1:3000");
});
```
## 下面是html代码
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- socketio提供的客户端 -->
    <script src="https://cdn.socket.io/4.4.0/socket.io.min.js"></script>
</head>
<body>
    <input type="text" id="text"/>
    <input type="button" value="发送" onclick="send()"/>

    <script>
        // 直接建立连接
      var socket = io.connect('http://127.0.0.1:3000')
      function send(){
          var text = document.getElementById('text').value
        //   发送消息
          socket.emit('sendMsg',text)
      }

    //   接收服务端的消息
    socket.on('pushMsg',(data) => {
        console.log(data)
    })
    </script/>
</body>
</html>
```
### 打开多部浏览器模拟不同用户,发送内容查看效果即可
![在这里插入图片描述](https://img-blog.csdnimg.cn/e8809e5d470f44d1a5b4f35ea6b42b6c.png)
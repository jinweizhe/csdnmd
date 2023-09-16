**为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到app 上，而是推荐将路由抽离为单独的模块。**
**将路由抽离为单独模块的步骤如下:**
**1.创建路由模块对应的.js文件**
**2.调用express.Router()函数创建路由对象**
**3.向路由对象上挂载具体的路由**
**4.使用module.exports向外共享路由对象**
**5.使用app.use()函数注册路由模块**
新建的js模块内的代码如下:

```js
//导入express服务器第三方的包
const express = require("express")
//导入路由对象
const router = express.Router()

//挂载查询用户列表的路由
router.get('/user/list', function (req, res) {
    // res.send('用户列表')
    //通过req. query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    //通过 req. query获取客户端通过查询字符串，发送到服务器的数据
    res.send({
        status: 0,//0表示处理成功，1表示处理失败
        msg: "GET请求成功！",//状态的描述
        data: query//需要响应给客户端的数据
        //127.0.0.1/user/list?name=张三
        //拼接内容就是query内容

    })
})

//挂载添加用户的路由
router.post('/user/add', function (req, res) {
    res.send('添加用户')
})

module.exports = router  //向外导出路由对象
```
使用这个模块的方式:
```js
//导入express服务器第三方的包
const express = require("express")
const app = express()

//导入路由模块
const router = require("./路由模块")
//注册路由模块
app.use(router)
//注意:app. use()函数的作用，就是来注册全局中间件
//app.use("/xiaoji",router),添加前缀

app.listen(80, function () {
    console.log("开启了127.0.0.1服务器");
})
```
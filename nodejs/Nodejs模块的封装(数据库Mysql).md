@[toc]
## 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/62d0056299e14c37b7c762d1d0ef6b22.png)
**后面的项目相关文件的创建步骤按照我写的博客从上往下一步一步来**
### 本次演示需要使用的第三方包为
```js
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mysql": "^2.18.1"

下载命令为:
	npm i express@4.17.1
	npm i cors@2.8.5
	npm i mysql@2.18.1
```
**第一步需要进行初始化**
```js
npm init -y
```
### 1.app.js相关配置
**主要逻辑还是通过路由模块进行处理,通过导入和全局注册路由模块,代码如下:**
```js
//导入express服务器第三方的包
const express = require("express")
//解决跨域,导入中间件cors
const cors = require("cors")
//导入路由模块
const userrouter = require("./router/user.js")
//创建服务器实例
const app=express()
//注册跨域中间件
app.use(cors())
//用来解析post请求体中的参数,把post请求的参数解析res.body
app.use(express.urlencoded({extended:false}))
//全局注册router
app.use("/api",userrouter)

//调用listen启动服务器
app.listen(80, function () {
    console.log("开启了127.0.0.1服务器");
})
```
### 2.router下的user.js相关配置
**router下的user.js为用户模块的增删改查操作,但这里只提供接口,具体用户的业务操作在router_handler下的user.js**
**router下的user.js的代码如下:**
```js
//导入express服务器第三方的包
const express = require("express")
//使用路由模块
const router = express.Router()

//导入路由处理函数模块
const userhandler = require("../router_handler/user.js")

//注册新用户(以下的regUser,login为router_handler下的user.js向外暴露出的方法,只要导入router_handler下的user.js就能使用它里面的暴露的方法)
router.post('/reguser',userhandler.regUser)
//登录
router.post('/login',userhandler.login)

//将当前路由模块向外导出
module.exports = router
```
### 3.db/index.js文件相关操作
**在根目录下创建db文件夹,在db文件夹下创建index.js模块,这个模块用于连接数据库,代码如下:**
```js
//导入MySQL模块
const mysql=require("mysql")
//建立与MySQL数据库的连接
const db=mysql.createPool({
    host:"127.0.0.1", //数据库的IP地址
    user:"root",  //登录数据库的账号
    password:"admin",  //登录数据库的密码
    database:"xiaoji"  //指定要操作哪个数据库
})

//将连接好的数据库对象向外导出,供外界使用
module.exports = db
```
### 4.router_handler下的user.js相关操作
**这一个文件主要就是对传来的数据进行处理的,包括操作数据库等业务逻辑**

```js
//导入数据库模块
const db =  require("../db/index.js")


//注册用户的处理函数
exports.regUser = (req,res) => {
    const userinfo = req.body;
    //对表单的数据进行合法的校验(判断用户名或密码是否为空)
    if(!userinfo.username || !userinfo.password){
        return res.send({status:1,message:'用户名或密码不合法'})
    }

    //对数据库操作
    //定义sql
    const sql = 'select * from ev_users'
    db.query(sql,function(err,result){
        //查询失败返回数据
        if(err) return console.log("查询失败");
        //查询数据库成功将数据返回至前端使用
        return res.send({status:1,message:"查询成功",data:result})
    })
}


//用户登录的处理函数
exports.login = (req,res) =>{
    res.send("ok2")
}
```
**以上配置完就结束了,以下是接口响应效果:**
![在这里插入图片描述](https://img-blog.csdnimg.cn/c4f8f4b971974c91ae48864f1f744eef.png)
**注意:在项目中可能会多次调用res.send,因此可以封装个方法,不需要每次那么麻烦了**
**下面代码添加到根目录app.js里面所有的导入路由模块之前**
```js
//封装res.cc函数
app.use((req,res,next) => {
    res.cc=function(err,status = 1){
        res.send({
            status,
            message:err instanceof Error ? err.message:err,
        })
    }
    next()
})
```
**必须放到所有路由导入之前,不然没效果**
也可以直接下载resccjwz注册使用
```js
npm i resccjwz
```
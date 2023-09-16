## nodejs三层架构开发模式![在这里插入图片描述](https://img-blog.csdnimg.cn/a66e0d1c14a44cfc812e57c51fd8f3a5.png)
**项目结构**
![在这里插入图片描述](https://img-blog.csdnimg.cn/3337411ab7f24f898afe05358899a910.png)
依次在每个目录添加代码
 **1.在dao层下创建database.js模块,里面存放的是连接数据库的模块代码**
```js
const {connect,connection} = require('mongoose');
// 设置要连接的 MongoDB 服务器地址(studentsManage:要连接的数据库名称)
const dbURI = 'mongodb://localhost:27017/xiaoji';
// 连接数据库
connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
//当数据库连接成功时触发此事件
connection.on('connected', () => console.log(dbURI + ' 数据库连接成功'));
```
**2.在dao包下创建usersModel.js,用于存放我们的模型模块**
```js
// const mongoose = require('mongoose');
const {Schema,model} = require('mongoose');

//Schema这个方法是一个构造函数,通过new创建这个构造方法的实例对象
// 这个方法用于定义数据库列名和值的类型
// 1.定义数据集合的结构:定义出集合中数据有哪些属性，属性的值是什么类型。
const usersSchema = new Schema({
    username:String,
    password:Number
//后面以此类推定义列名和列的值类型
})

//2.定义数据集合的模型,将Schema和数据库中的集合关联起来
//model参数一:模型名称
//参数二:为上面的usersSchema
//参数三:数据库中的集合名称
const usersModel=model('usersmodel',usersSchema,'users')

//向外导出模型
module.exports.usersModel=usersModel;
```
**3.在主目录下创建sever.js,这个是核心层,运行服务器启动的就是这个界面,代码如下**

```js
// 导入express服务器第三方的包
const express = require("express")
// 创建服务器实例
const app=express()
//导入连接数据库的模块
const users=require('./routes/users.js')

require('./dao/database.js')
app.use(users)
//调用listen启动服务器
app.listen(80, function () {
    console.log("开启了127.0.0.1服务器");
})
```
**建议:**
**4,5,6都涉及数据的传输,从用户到数据库的数据传输建议直接按照6,5,4顺序看,从6用户传入数据,5接收6的数据再传送给4
从数据库到的用户数据传输建议直接按照4,5,6顺序看,从4数据库传出数据,5接收4的数据再传送给6用户界面**

**4.在dao包下创建userdao.js模块,这个模块才是真正操作数据库增删改查的模块,这里只演示条件查询用户**
```js
//导入模型模块,使用里面的方法进行数据库操作
const {usersModel}=require('./models/usersModel.js')
//这里的user是从5方法userService.js模块传入过来的数据
module.exports.login=async function(user){
	//这里演示查询所有用户,find不传参数为查询所有用户
   const data = await usersModel.find(user)
   //打印一下数据
   console.log('3333',data);
   //在module.exports上导出一个login方法,使外界导入此模块,能通过这个方法,传入数据
}
```
**5.在service包下创建userService.js模块（这个包下的模块用于处理数据，对数据进行判断过滤）,在里面导入上面的userdao.js,目的是使用上面的方法给userdao.js模块传入用户数据,代码如下**
```js
//通过解构赋值,找到userdao.js向外导出的login方法,在里面传入数据
const {login} = require('../dao/usersdao')

//这里的user是从6方法的users.js(用户)传入过来的
module.exports.login=function(user){
    //调用第三层的方法
    login(user)
}
```

**6.在routers包下创建各种操作的模块,例如老师增删改查模块,学生增删改查模块等等,这里只演示示条件查询用户接口,代码如下**
```js
// 导入express服务器第三方的包
const express = require("express")
const router=express.Router()
//导入userService.js模块,目的是通过上面的login方法传给userService.js模块传入数据
const {login}=require('../service/usersService')

router.get("/select",function(req,res){
    const user=req.query;//{username:'zs',password:'456'}
    //这里就是将用户发送来的数据传送给userService.js,再通过userService.js模块传送给usersdao.js模块,最后通过usersdao.js模块对传入的数据进行增删改查操作
    login(user)
})

module.exports=router;
```
上面配置完开始运行:
本人数据库:

![在这里插入图片描述](https://img-blog.csdnimg.cn/6969864aad1b4916b33534303b30ed79.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/38d97c60e49a43b082a106ab5c374506.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/75a0e2a68d6f4275b4cb74f257a8c336.png)


**数据成功获取**

**当传入不存在的数据时**
![在这里插入图片描述](https://img-blog.csdnimg.cn/a3c1c0ec77be4dfaa028ee35746c8bd0.png)
**完美运行**

**下面是数据从数据库到用户界面展现的过程**

**为了方便清楚数据如何从前往后,从后往前传递的,本人这里分开写---上面从用户到数据库,下面写从数据库到用户**

**由于数据库是有了数据，对数据进行完增删改查才返回处理好的数据，因此可以理解为，下面数据库到用户的代码为最全的代码，用户---数据库---数据库----用户**

**这里直接从4开始标号了，因为下面代码存在的模块和上面的4，5，6一样，因为是数据库到用户，所以这里的4对应上面的6，5对应上面的5，6对应上面的4**

**其实也没大家想的多复杂了，完成用户到数据库传送数据，那数据库将数据处理完返回就行了，因此就一直return就好了**

**4.usersdao.js里面直接将增删改查的获得的数据库的数据返回给userService.js即可**
```js
const {usersModel}=require('./models/usersModel.js')
module.exports.login=async function(user){
   const data = await usersModel.find(user)
   //将处理完的数据返回出去
   return data
}
```
**5.userService.js里面将数据进行处理判断,处理完了返回给users.js(用户界面)**
```js
const {login} = require('../dao/usersdao')

module.exports.login=async function(user){
    //调用第三层的方法
    //调用这个login方法得到usersdao.js的数据返回值
    // 因为这个方法是异步的,所以需要async/await处理
    const data=await login(user)
    // 对usersdao.js数据库传来的数据进行处理
    if(data.length>0){
        //说明有数据
        return {
            msg:'获取数据成功',
            status:1,
            data:data
        }
    }else{
        //无数据
        return {
            msg:'获取数据失败',
            status:0
        }
    }
}
```
**6.在users.js获得来自userService.js处理好的数据,并向用户响应数据**
```js
// 导入express服务器第三方的包
const express = require("express")
const router=express.Router()
const {login}=require('../service/usersService')

router.get("/select",async function(req,res){
    const user=req.query;//{username:'zs',password:'456'}
    // 同样的,这个login为异步请求,需要用async/await处理数据
   const data=await login(user)
   //将数据响应给用户
   res.send(data)
})
//向外导出路由模块
module.exports=router;
```
**以上都弄完,可以看最终效果图了**
![在这里插入图片描述](https://img-blog.csdnimg.cn/6180053db43f4703a4c865ded903bc09.png)
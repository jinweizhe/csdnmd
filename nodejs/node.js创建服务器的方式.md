### 第一种方式:采用nod.e.js内置的http模块
```niode.js
//导入web服务器http模块
const http = require("http")
//创建web 服务器实例
const sever = http.createServer((req, res) => {
    // console.log(req.url);//前端网址
    // console.log(req.method);//请求方式
    // console.log(req.query);//获取到查询的字符串的数据
    // console.log(req.headers);//请求头对象

    // res.write("hello world");//只是写的,但是没响应
    // res.end();//代表响应结束
    //http://127.0.0.1:8081/login?username=xiaoji&password=123456

    // console.log(req.url);
    const path = req.url.split("?")[0]//获取请求路径
    const query = req.url.split("?")[1];//获取查询字符串数据
    // console.log(path, query);
    if (req.method == "GET" && path == "/login") {
        // console.log("接收到/login的请求了");
        //创建一个URLSearchParams类型的对象,参数是查询字符串
        const userData = new URLSearchParams(query);
        console.log(userData);
        //get方法，从URLSearchParams类型的对象中根据key获取value;
        let un = userData.get("username");
        //判断账号
        if (userData.get("username") == "xiaoji") {
            //账号正确,密码判断
            if (userData.get("password") == "123456") {
                //账号密码都正确
                let resMes = JSON.stringify({ code: 2, msg: "登陆成功" })
                res.write(resMes)
            } else {
                let resMes = JSON.stringify({ code: 1, msg: "密码错误" })
                res.write(resMes)
            }
        } else {
            let resMes = JSON.stringify({ code: 0, msg: "账号错误" })
            res.write(resMes)
        }
        res.end();
    }
})
//启动服务器,第一个参数代表端口号，第二个回调函数
sever.listen(8081, function () {
    console.log("开启 http://127.0.0.1 这个端口号");
})
```
###### 获取post请求的请求体数据方式
![在这里插入图片描述](https://img-blog.csdnimg.cn/5a0b45a878d54537bbfc6b5e49204e2d.png)

###### 小拓展(将api接口和参数分开并创建一个新对象(通过get(key)获取里面的参数),并将新对象转换为object对象)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0084b1f389f64e00a1d958830300da80.png)

### 第二种方式,采用第三方的express包
```
cmd运行命令  npm i express,下载第三方包到当前文件夹
```
```node.js
//1.导入express
const xj = require("express")
//2.创建web服务器
const app = xj()

//3.监听get，post请求,并向客户端响应具体内容
//通过app.get()方法，可以监听客户端的GET请求，具体的语法格式如下:
//通过app.post()方法，可以监听客户端的POST请求，具体的语法格式如下:

// 参数1: 客户端请求的URL地址
// 参数2: 请求对应的处理函数
// req: 请求对象（包含了与请求相关的属性与方法) 
// res: 响应对象（包含了与响应相关的属性与方法)

//通过express提供的res.send()方法，可以把处理好的内容，发送给客户端:

app.get("/user", function (req, res) {
    //通过express提供的res.send()方法，向客户端相应一个json对象
    res.send({ name: "张三", age: 20, gender: "男" })
})

app.post("/user", function (req, res) {
    //通过express提供的res.send()方法，向客户端相应一个文本字符串
    res.send("post请求成功")
})


/**
 * 获取URL中携带的查询参数
 * 
 * 通过req.query对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数:
 * 
 * req.query 默认是一个空对象客户端使用?name=2s&age=20这种查询字符串形式，发送到服务器的参数,可以通过req.query对象访问到，例如:req.query.name，req.query.age
 */

app.get("/", function (req, res) {
    console.log(req.query);
    //通过req.query对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数:
    res.send(req.query)
})



//注意：这里的:id是一个动态的参数,id是一个参数，可以换名,后面可以跟多个参数
//http://127.0.0.1/user/1/张三
//通过req.params对象，可以访问到URL中，通过:匹配到的动态参数:
app.get("/user/:id/:name", function (req, res) {
    //req. params是动态匹配到的 URL参数，默认也是一个空对象
    console.log(req.params);
    res.send(req.params)
})



//4.启动服务器   调用app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(80, function () {
    console.log("启动服务器：http:127.0.0.1");
})
```
###### express相关参数
```js
//导入express服务器第三方的包
const express = require("express")
//创建服务器实例
const app=express()
//用来解析post请求体中的参数,把post请求的参数解析res.body
app.use(express.urlencoded({extended:false}))

app.get("/",function(req,res){
    console.log(req.url,"----查询字符串");
    console.log(req.method,"----请求方式");
    console.log(req.query,"----获取get请求参数");
    console.log(req.body,"----获取post请求参数");
    console.log(req.headers,"----请求头数据");
    console.log(res.send({code:1,msg:'信息'}),"----响应数据");
    console.log(res.json({code:1,msg:'信息'}),"----响应json数据,自动转换json");
})

app.post("/",function(req,res){})

//调用listen启动服务器
app.listen(80, function () {
    console.log("开启了127.0.0.1服务器");
})
```
#### 小案例(附带jQuery的GET和POST请求)
```js
//导入express服务器第三方的包
const express = require("express")
//创建服务器实例
const app = express()

//用来解析post请求体中的参数,把post请求的参数解析res.body
app.use(express.urlencoded({ extended: false }))
//解析查询字符串中json字符串的数据
app.use(express.json())

//静态资源托管
app.use(express.static("./public"))

// console.log(req.url, "----查询字符串");
// console.log(req.method, "----请求方式");
// console.log(req.query, "----获取get请求参数");
// console.log(req.body, "----获取post请求参数");
// console.log(req.headers, "----请求头数据");
// console.log(res.send({ code: 1, msg: '信息' }), "----响应数据");
// console.log(res.json({ code: 1, msg: '信息' }), "----响应json数据,自动转换json");
app.get("/login", function (req, res) {
    console.log(req.query, req.method);
    res.json({ success: 1, data: "请求成功" })
})

app.post("/zhuce", function (req, res) {
    console.log("接收到注册的请求了", req.body, req.method);
    res.json({ success: 1, data: "请求成功" })
})

//调用listen启动服务器
app.listen(80, function () {
    console.log("开启了127.0.0.1服务器");
})
```
##### GET请求
```html
    <script>
        $("form").submit(function(e){
            e.preventDefault();
            let username=$("[type=text]").val()
            let password=$("[type=password]").val()
            $.get(`http://127.0.0.1/login?username=${username}&password=${password}`).done(function(data){
                console.log(data);
            })
        })
    </script>
```
##### POST请求
```html
 <script>
        $("form").submit(function (e) {
            e.preventDefault();
            let username = $("[type=text]").val()
            let password = $("[type=password]").val()
            $.post("http://127.0.0.1/zhuce", $("form").serialize(), function (data) {
                console.log(data);
            })
        })
    </script>
```
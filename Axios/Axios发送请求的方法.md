@[toc]
### Axios发送请求的方法
#### 发送get请求的两种方式
```js
		发送get请求:
            传参方式一:直接使用 ?拼接在url后面,url?key=value&key=value. . .
            axios.get("http://localhost/login?username=张三&password=123").then(function (res) {
                //请求成功执行
                console.log(res);
            }).catch(function (error) {
                //请求失败执行
                console.log(error);
            })
            -----------------------
            传参方式二:使用params字段
            axios.get("http://localhost/login", {
                params: {
                    username: "张三",
                    password: "123"
                }
            }).then(res => {
                //请求成功执行
                console.log(res);
            }).catch(error => {
                //请求失败执行
                console.log(error);
            })
```

#### 发送post请求的方式
```js
		发送post请求:
            传参方式一:请求数据类型为json类型
            参数一:url服务器地址
            参数二:data post请求的数据
            axios.post("http://localhost/info", {
                username: "张三",
                password: "123"
            }).then(res => {
                //请求成功执行
                console.log(res);
            }).catch(error => {
                //请求失败执行
                console.log(error);
            })

            -------------------------
            传参方式二:如果服务器不支持json类型的参数，支持urlencoded类型的参数，使用以下方式:
            axios.post("http://localhost/info", "username=张三&password=123").then(res => {
                //成功后的回调函数
                console.log(res);
            }).catch(error => {
                //失败后的回调函数
                console.log(error);
            })
```
#### 发送Axios请求的方式
```js
		使用axios发送get请求
            axios({
                method: "GET",//请求方式
                url: "http://localhost/login?username=张三&password=123",//路径
            }).then(res => {
                //成功的回调函数
                console.log(res);
            }).catch(error => {
                //失败的回调函数
                console.log(error);
            })

        使用axios发送post请求
            axios({
                method: "POST",
                url: "http://localhost/info",
                // data:{
                //     username:"张三",
                //     password:"123"
                // },//json数据携带格式
                data: "username=张三&password=123"//urlencoded类型的数据
            }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            })
```
#### 完整代码(Html代码)
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 官网提供的 axios 在线地址 -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <title>Document</title>
</head>

<body>
    <button onclick="getclick()">Get请求</button>
    <button onclick="postclick()">POST请求</button>
    <button onclick="axiosclick()">AXIOS请求</button>
    <script>
        function getclick() {
            //发送get请求
            //传参方式一:直接使用 ?拼接在url后面,url?key=value&key=value. . .
            // axios.get("http://localhost/login?username=张三&password=123").then(function (res) {
            //     //请求成功执行
            //     console.log(res);
            // }).catch(function (error) {
            //     //请求失败执行
            //     console.log(error);
            // })
            //-----------------------
            //传参方式二:使用params字段
            axios.get("http://localhost/login", {
                params: {
                    username: "张三",
                    password: "123"
                }
            }).then(res => {
                //请求成功执行
                console.log(res);
            }).catch(error => {
                //请求失败执行
                console.log(error);
            })
        }
        //------------------------------------------------------------------------------
        function postclick() {
            //发送post请求
            //传参方式一:请求数据类型为json类型
            //参数一:url服务器地址
            //参数二:data post请求的数据
            // axios.post("http://localhost/info", {
            //     username: "张三",
            //     password: "123"
            // }).then(res => {
            //     //请求成功执行
            //     console.log(res);
            // }).catch(error => {
            //     //请求失败执行
            //     console.log(error);
            // })

            //-------------------------
            //传参方式二:如果服务器不支持json类型的参数，支持urlencoded类型的参数，使用以下方式:
            axios.post("http://localhost/info", "username=张三&password=123").then(res => {
                //成功后的回调函数
                console.log(res);
            }).catch(error => {
                //失败后的回调函数
                console.log(error);
            })
        }
        //--------------------------------------------------------------------------------
        function axiosclick() {
            //使用axios发送get请求
            // axios({
            //     method: "GET",//请求方式
            //     url: "http://localhost/login?username=张三&password=123",//路径
            // }).then(res => {
            //     //成功的回调函数
            //     console.log(res);
            // }).catch(error => {
            //     //失败的回调函数
            //     console.log(error);
            // })

            //使用axios发送post请求
            axios({
                method: "POST",
                url: "http://localhost/info",
                // data:{
                //     username:"张三",
                //     password:"123"
                // },//json数据携带格式
                data: "username=张三&password=123"//urlencoded类型的数据
            }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            })
        }
    </script>
</body>

</html>
```
#### 服务端代码(node.js服务端)
```js
// npm install express --save 安装
// npm uninstall express --save 卸载
//导入express服务器第三方的包
const express = require("express")
//解决跨域,导入中间件cors
const cors = require("cors")
//创建服务器实例
const app = express()
//注册跨域中间件
app.use(cors())
//用来解析post请求体中的参数,把post请求的参数解析res.body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//登录请求
app.get("/login", function (req, res) {
    console.log("登录请求", req.query);
    if (req.query.username == "张三" && req.query.password == "123") {
        res.json({ code: 1, msg: "登陆成功" })
    } else {
        res.json({ code: 0, msg: "账号或密码错误,登陆失败" })
    }
})

//获取个人信息
app.post("/info", function (req, res) {
    console.log("获取个人信息", req.body);
    if (req.body.username == "张三" && req.body.password == "123") {
        res.json({ code: 1, msg: "获取成功" })
    } else {
        res.json({ code: 0, msg: "获取失败" })
    }
})

//调用listen启动服务器
app.listen(80, function () {
    console.log("开启了127.0.0.1服务器");
})
```
### VUE在main.js里设置全局axios请求的配置
```js
//下载包
npm i axios -S
```
**在main.js配置如下**
```js
import axios from 'axios'
//配置共同的端口号和域名,后期代码中直接写接口就行,例如/user,/books
axios.default.baseURL='请求根路径'
//在vue实例对象的原型上添加这个属性
//今后，在每个.vue组件中要发起请求，直接调用this.axios.x××
Vue.prototype.axios=axios
```
**在组件中使用**
```js
<template>
	<div>
		<button @click="qingqiu">点击按钮发请求</button>
	</div>
</template>

//不在原型中添加axios属性的写法(不推荐,建议看下面这个)
/*
<script>
	import axios from 'axios'
	export dafault {
		methods:{
			async qingqiu(){
				const {data:res}=await axios.get('请求完整地址')
				console.log(res)
			}
		}
	}
</script>
*/

//第二种写法,在原型上添加axios属性,相当于全局配置了axios,全局都能直接使用
<script>
	export dafault {
		methods:{
			async qingqiu(){
			//this指向原型,通过打点调用里面的axios即可
				const {data:res}=await this.axios.get('请求接口')
				console.log(res)
			}
		}
	}
</script>
```
**把axios挂载到 vue原型上 有个缺点------无法实现API接口的复用**
**当想要在多个组件发送同样的请求时,每个组件都要写同样的按钮和方法(都要重新调用一下API接口)	,不利于复用**

### axios请求中添加token，Authorization中添加token
axios请求中添加token，应在header中添加的token，使用Authorization属性字段，如下代码
```js
export function downLoadZip(str, filename) {
  axios({
    method: 'get',
    url: url,
    responseType: 'blob',
    headers: { 'Authorization': 'Bearer ' + getToken() }
  }).then(res => {
   console.log(res)
  })
}
```
关键代码：
```js
headers: { 'Authorization': 'Bearer ' + getToken() }
```
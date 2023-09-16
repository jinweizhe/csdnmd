## 原生js发送GET请求
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            list-style: none;
            text-decoration: none;
        }

        #__bs_notify__ {
            display: none !important;
        }

        /*上面的选择器不要删,否则内置预览会有个黑色的块,在下方写页面其他选择器*/
    </style>
</head>

<body>
    <div class="xj1">文本内容</div>
    <button class="xj2">点击修改内容</button>

    <script>
        var xj2 = document.querySelector(".xj2")
        xj2.addEventListener("click", function () {
            // 定义一个新对象
            var xj = new XMLHttpRequest();

            //open发送的响应方式和响应地址(地址为后端服务器的映射地址)
            //参数一：发送的请求方式：get或者post请求
            //参数二：响应地址(地址为后端服务器的映射地址)
            xj.open("GET", "http://stuapi.ysdjypt.com/Home/GetIP")//这里的地址为获取本地的ip地址
            //将请求发送出去
            xj.send()


            //获取访问地址响应的数据
            //当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当 readyState 改变时，就会触发 onreadystatechange 事件
            xj.onreadystatechange = function () {

                //readyState 浏览器响应的五种状态 
                //0:请求初始化，此时没有调用open的请求
                //1：请求已经建立但是还没有发送请求 send
                //2：请求发送 正在处理
                //3：请求在处理中，有部分数据可用
                //4：相应完成，可以获取浏览器的响应了

                //status：代表请求的状态
                //通常400-499为前端报错，500-599为后端报错，200为成功获取数据
                //举个例子，404为前端路径错误，500为后端代码报错崩溃


                //判断响应是否完成，并且判断是否成功获取数据
                if (xj.readyState == 4 && xj.status == 200) {
                    //满足条件，相当于数据已经有了，接下来将获取的数据写入到div中

                    //responseText代表响应的数据以文本形式获取出来

                    //document.querySelector(".xj1").innerHTML获取div的dom元素
                    document.querySelector(".xj1").innerHTML = xj.responseText
                }
            }
        })
    </script>
</body>

</html>
```
## 原生js发送post请求
后台服务器需要设置响应头,代码如下
```js
res.setHeader('Access-Control-Allow-Origin', '*');
```
后台完整代码(这里使用的是node.js)
```js
//导入web服务器http模块
const http = require("http")
//创建web 服务器实例
const sever = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.method == "POST") {
        // console.log("接收到post请求了");
        res.write(JSON.stringify({ code: 2, mag: "请求成功了" }));//只是写的,但是没响应
        res.end();//代表响应结束
    }
})

//启动服务器,第一个参数代表端口号，第二个回调函数
sever.listen(80, function () {
    console.log("开启 http://127.0.0.1 这个端口号");

})
```
js代码
```js
<script>
        // GET 请求方式常用于获取服务器的数据，而 POST请求方式常用于向服务器发送数据，可携带参数量较大。
        //1.创建请求连接
        var xhr = new XMLHttpRequest();
        //2.创建请求连接
        xhr.open("POST", "http://127.0.0.1")
        //3.设置请求头,用于定义请求体数据类型
        //application/x-www-form-unlencoded:告诉服务器,请求体中的数据是查询字符串的类型.'key=value&key=value'
        //application/json 代表请求体中的数据类型为json字符串格式.
        //multipart/from-data:以特定分隔符分割的数据:常用于文件上传.
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')//默认情况下,不设置请求头,请求体中的数据默认是查询字符串的类型
        //4.发送请求
        xhr.send("username=jinweizhe&password=123456");//参数为post请求方式的请求体.(可以是查询字符串数据,json字符串数据,以特定分隔符分割的数据)
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                //请求请求发送完成,并且请求成功了
                let data = JSON.parse(xhr.responseText)
                console.log(data);
            }
        }
    </script>
```
## jQueryAjax发送GET请求
#### 例子一
```html
 <script>
 		//$.get\$.post\$.ajax方法会返回给一个deferred类型对象;deferred:延迟
        // deferred类型对象有一个方法done,是异步操作成功的回调函数
        //deferred类型对象有一个方法fail,是异步操作失败的回调函数
        // deferred类型对象有一个方法always ,是异步操作完成的回调函数
		
		//get请求
        $.get("http://123.57.142.211:8080/api/goodList?page=1").done(function(resDate){
            //done成功的回调函数
            console.log(resDate);
            console.log("请求成功了");
        }).fail(function(e){
            //fail请求失败的回调函数
            console.log(e);
            console.log("请求失败了");
        }).always(function(c){
            //无论成功还是失败,请求完成的回调函数
            console.log("请求完成了");
        })

		//post请求
		 $.post("http://123.57.142.211:8080/api/goodList", { page: 1 }).done(function (resDate) {
            //done成功的回调函数
            console.log(resDate);
            console.log("请求成功了");
        }).fail(function (e) {
            //fail请求失败的回调函数
            console.log(e);
            console.log("请求失败了");
        }).always(function (c) {
            //无论成功还是失败,请求完成的回调函数
            console.log("请求完成了");
        })

		//通用Ajax请求
		$.ajax({
            type:"GET",
            url:"http://123.57.142.211:8080/api/goodList?page=1",
            //data:{}//post请求体数据
            //header:{}//请求头数据
        }).done(function (resDate) {
            //done成功的回调函数
            console.log(resDate);
            console.log("请求成功了");
        }).fail(function (e) {
            //fail请求失败的回调函数
            console.log(e);
            console.log("请求失败了");
        }).always(function (c) {
            //无论成功还是失败,请求完成的回调函数
            console.log("请求完成了");
        })
    </script>
```
#### 例子二
```html
<button>发请求</button>
    <script>
        $("button").click(function () {
            // $.get({})
            // $.post({})
            // $.ajax({})//通用
            //参数:配置对象,配置字段如下:
            //type:请求方式,默认get;
            //url:请求地址(get请求查询字符串需要在url+?字符串拼接,post请求参数放在请求体中)(post请求的参数放到data内)
            //headers:对象;请求头数据对象
            //success:请求成功的回调函数
            //error:请求失败的回调函数
            //complete:不管请求成功还是失败都会触发的回调函数

            // $.ajax({
            //     type: "GET",
            //     url: "http://123.57.142.211:8080/api/goodList?page=1",
            //     // data:{post请求内多参数}
            //     // data:"post请求单参数"
            //     success(resData) {
            //         console.log("请求成功");
            //         console.log(resData);
            //     },
            //     error(error) {
            //         console.log("请求失败");
            //         console.log(error);
            //     },
            //     complete() {
            //         console.log("请求完成了");
            //     }
            // })

            //get请求简写
            //参数一:url+?query
            //参数二:成功的回调函数
            // $.get("http://123.57.142.211:8080/api/goodList?page=1", function (resdata) {
            //     console.log(resdata);
            // });


            //post请求简写
            //参数一:url
            //参数二:请求体数据
            $.post("http://stuapi.ysdjypt.com//common/index", { cmdld: "xiao" },function(resdata){
                console.log(resdata);
            })
        })
    </script>
```
## jq发送post请求
后台服务器需要设置响应头,代码如下
```js
res.setHeader('Access-Control-Allow-Origin', '*');
```
后台完整代码(这里使用的是node.js)
```js
//导入web服务器http模块
const http = require("http")
//创建web 服务器实例
const sever = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');


    //post请求
    //获得请求体数据
    //需要监听请求的data事件&end事件


    //每当前端发送过来请求体数据,会触发data事件,注意:数据量大时,data事件会多次触发.
    //定义变量保存接收到的数据
    let totalData = "";
    req.on("data", (data) => {
        // console.log(data);//Buffer的格式编码了,实际上就是请求体数据
        totalData += data;
    })

    //前端请求体发送完成时会触发end事件
    req.on("end", () => {
        //decodeURI()中文解码
        console.log("请求体数据接收完毕....", decodeURI(totalData));
        let data = new URLSearchParams(decodeURI(totalData))
        console.log(data);
    })



    if (req.method == "POST") {
        console.log("接收到post请求了");
        res.write(JSON.stringify({ code: 2, mag: "请求成功了" }));//只是写的,但是没响应
        res.end();//代表响应结束
    }
})

//启动服务器,第一个参数代表端口号，第二个回调函数
sever.listen(80, function () {
    console.log("开启 http://127.0.0.1 这个端口号");

})
```
jq代码
```js
 <script>
 		//第一种方式
        // $.post("http://127.0.0.1", {
        //     name: "xiaoji",
        //     sex: "男"
        // }, function (data) { 
        //     console.log(data);
        // })

        //第二种方式
        $.ajax({
            type: "POST",//请求方式
            url: "http://127.0.0.1",//请求路径
            data: {
                name: "xiaoji",
                age: 20,
                sex: "男"
            },//请求体数据,自动转换为字符串格式
            contentType: "application/x-www-form-urlencoded",//定义请求体数据类型,默认请求体数据为查询字符串格式.
            dataType: "json",//定义响应体类型(响应的数据类型,一般是json格式)
            headers: {},//请求头
            success(data) {//请求成功后的回调函数
                console.log(data);
            }
        })
    </script>
```
## 扩展表单序列化
```html
<form action="">
        <input type="text" name="username" autocomplete="off" placeholder="请输入账号"><br>
        <input type="text" name="passworld" autocomplete="off" placeholder="请输入密码"><br>
        <input type="submit" value="登录">
    </form>
    <script>
        $("form").submit(function (e) {
            e.preventDefault();//阻止事件默认行为
            // let un = $("[name=username]").val()
            // let pwd = $("[name=passworld]").val()
            // console.log(un,pwd);

            //将数据序列化(采用特定格式组织数据),以key-value形式展现出来
            //username=123&passworld=111
            let inpVals = $(this).serialize();
            console.log(inpVals);

            //快速获取表单控件的值;注意︰表单控件必须添加name属性。否则无法获取到value。
            $.get("http://localhost:8080?" + inpVals, function (a) { console.log(a); })
        })
    </script>
```
## 前后端不分离的情况(数据都来源于后端,前后端不可以分离使用)
> npm i express art-template express-art-template --S
> 先下载模板引擎,模板渲染,还有experss服务器的包
### js代码
```js
//导入express服务器第三方的包
const express = require("express")
//导入模板引擎
const artTemple = require("express-art-template")
//导入node的fs文件系统的模块
const fs = require("fs")


//创建服务器实例
const app = express()

//注册模板引擎(告诉express框架使用什么模板引擎渲染什么后缀的文件)
//参数一:要渲染的文件名后缀
//参数二:使用什么模板引擎去渲染
//默认会渲染项目根目录下的views文件夹下的.html
app.engine("html", artTemple)
//当文件夹名不是views
//设置目录文件夹
app.set("views", "./xiaoji")//如果不需要修改,这行代码就省略

app.get("/", function (req, res) {
    res.render("index1.html", {
        title: "今日书籍打折",
        books: [
            {
                name: "三国演义", price: 50, disc: 30
            },
            {
                name: "水浒传", price: 60, disc: 48
            },
            {
                name: "西游记", price: 70, disc: 56
            },
            {
                name: "红楼梦", price: 50, disc: 30
            }
        ],
        arr: ["小红", "小明", "小翠"],
        age: 20,
        score: 89
    })
})

//调用listen启动服务器
app.listen(80, function () {
    console.log("开启了127.0.0.1服务器");
})
```
### html代码
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- art-template语法 -->
    <!-- {{title}} 渲染的值 -->
    <!-- {{}}可以是变量\属性\表达式-->
    <h1>{{title}}</h1>

    <!--循环渲染arr $value:循环元素$index:索引-->
    {{each arr}}
    <p>{{$value}}----{{$index}}</p>
    {{/each}}

    <!--自定义索引名 和 循环元素名 each 数组 元素名 索引名-->
    <div>
        {{each books a b}}
        <section>
            <p>{{a.name}}---{{b}}</p>
            <p>原价:{{a.price}}</p>
            <p>现价:{{a.disc}}</p>
        </section>
        {{/each}}
    </div>
    <p>{{1>3?"不大于":"大于"}}</p>

    <p>{{0||10}}</p>
    <p>{{5||10}}</p>

    <!-- if判断 -->
    {{if age<18}} 
    <p>未成年了</p>
    {{/if}}

    {{if age>=18}}
    <p>成年了</p>
    {{else}}
    <p>未成年</p>
    {{/if}}

    <!-- if-else if-else -->
    {{if score >=90}}
    <p>成绩:优</p>
    {{else if score>=60}}
    <p>成绩:良</p>
    {{else}}
    <p>成绩:不及格</p>
    {{/if}}
</body>
</html>
```
###### 包结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/af0219c395364b40b4e76a7d5689da8d.png)
## 前后端分离模板的使用(前后端可以独立使用)

> 先获取模板的js文件,这里给大家提供
> 链接: https://pan.baidu.com/s/1ertUhroqoUL4Ek8ZN7LzgA?pwd=drck 提取码: drck 
#### 这里演示不用后台代码了，用一个get的api接口演示前端如何使用的模板(直接运行就可以看到效果)
###### html文件
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <!-- 引入jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        .container{
            display: flex;
            width: 90vw;
            flex-wrap: wrap;
            margin: 0 auto;
        }
        section{
            flex-basis: 20%;
        }
        section img{
            width: 80%;
            display: block;
            margin: 0 auto;
        }
    </style>
</head>

<body>
    <div class="container"></div>
    <!-- 导入art-template模板 -->
    <script src="./template-web.js"></script>
    <!-- 使用script标签添加模板,类型定义text/html,这时候script就是个标签 -->
    <script type="text/html" id="goods">
        <h1>{{title}}</h1>
        <!-- 渲染响应数据 -->
        <!-- item index 分别代表元素本身和下标 -->
        {{each goods item index}}
            <section>
                <img src="{{item.img_list_url}}" alt="">
                <p>{{item.title}}</p>
                {{if item.price>50}}
                <h2>{{item.price}}</h2>
                {{else}}
                {{item.price}}
                {{/if}}
            </section>
        <!-- 记得给结尾标签 -->
        {{/each}}
    </script>

    <script>
        $.get("http://123.57.142.211:8080/api/goodList?page=1").done(function(data){
            console.log(data);
            //将数据与模板结合
            //参数一:模板id
            //参数二:数据
            let htmlStr=template("goods",{
                goods:data,
                title:"首页"
            });
            console.log(htmlStr);
            $(".container").html(htmlStr)
        })
    </script>
</body>

</html>
```
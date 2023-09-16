# 模板引擎介绍

模板引擎可以将html模板和js对象中的数据拼接成一个完整的html页面。

art-template 是一个简约、超快的模板引擎。它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。

在nodejs中使用art-template 属于服务端渲染，

在浏览器中使用art-template  是客户端渲染。

中文文档：https://aui.github.io/art-template/zh-cn/docs/

# 服务端渲染

在nodejs中使用 art-template

## **第一步**：安装模板引擎

安装 art-template 和 express-art-template

```
npm install --save art-template
npm install --save express-art-template
```

## **第二步**：导入模板引擎

导入express-art-template

```js
var artTemplate = require('express-art-template');
```

## **第三步**：注册模板引擎

1. app.engine注册模板引擎，第一个参数是模板类型(后缀名)，第二个参数是模板引擎函数。

```js
app.engine("html",artTemplate);
```

2. 设置模板文件存放的目录，所有模板文件必须放在项目根目录下的views文件夹中，默认是views目录，这一步可以省略

```js
app.set('views', path.join(__dirname, 'views'));
```

3. 设置模板是否为调试环境，这一步也可以省略不写

```js
app.set("view option",{debug:true});
```

4. 设置模板文件的默认类型，设置类型为html后，使用res.render('index.html',data);的时候，可以把index.html简写为index，省略模板文件的后缀

```js
app.set('view engine', 'html');
```

## **第四步**：渲染页面

```js
// 假设从数据获取的数据为data
var data = {
  title:"今日打折书籍",
  books:[
    {name:"三国演义",price:50,disc:39},
    {name:"水浒传",price:40,disc:28},
    {name:"西游记",price:50,disc:39},
    {name:"红楼梦",price:60,disc:49}
  ]
};


//res.render，渲染一个页面（必须设置了模板引擎之后才能使用render）
// 第一个参数是要使用的模板(在views中)，会读取 ./views/index.html 文件的内容
// 第二个参数是模板要用的数据(数据不能是数组，只能是对象)。
// 设置了数据之后，可以在index.html中直接使用title 和 books属性，例如：{{title}} 会输出 “今日打折书籍”
// 页面渲染完成之后会得到一个完整的html页面，这个页面会自动返回给客户端。
app.get('/',function(req,res){
  res.render('index.html',data);
});
```

## **第五步**：编写模板文件

```html
<!-- header.html -->

<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1">
  <meta name="author" content="金西振">
  <title>{{title}}</title>
  <style>
    table {
      border: 1px solid black;
      border-collapse: collapse;
    }

    td {
      border: 1px solid black;
      text-align: center;
    }

    del {
      color: red;
    }

    .disc {
      color: green;
    }
  </style>
</head>

<body>
  <h1>{{title}}</h1>
```

```html
<!-- footer.html -->

</body>
</html>
```

```html
<!-- index.html -->

{{include './header.html'}}
<table>
    <tr>
      <td>序号</td>
      <td>书名</td>
      <td>原价</td>
      <td>现价</td>
    </tr>
    {{each books}}
    <tr>
      <td>{{$index + 1}}</td>
      <td>{{$value.name | bookname}}</td>
      <td><del>￥{{$value.price | price 2}}</del></td>
      <td class="disc">￥{{$value.disc | price 2}}</td>
    </tr> 
    {{/each}}
</table>
{{include './footer.html'}}
```

## **第六步**：使用过滤器

使用过滤器 `{{参数 |　函数名}}`

```js
var artTemplate = require('express-art-template');
artTemplate.template.defaults.imports.price = function(value,num){
    return value.toFixed(num);
}
artTemplate.template.defaults.imports.bookname = function(value){
    return '《'+ value +'》';
}

或者 
var template = require('art-template');
template.defaults.imports.price = function(value,num){
    return value.toFixed(num);
}
template.defaults.imports.bookname = function(value){
    return '《'+ value +'》';
}
```

# 客户端渲染

在浏览器中使用 art-template

## **第一步**：导入art-template

```js
<script src="https://unpkg.com/art-template/lib/template-web.js"></script>
```

## **第二步**：渲染数据

```js
var htmlStr = template('booksTmp',books);
$('#books').html(htmlStr);//把渲染的数据渲染到页面上
```

## **第三步**：编写模板

编写的模板是用来展示模板的数据: script标签的type属性设置为 type="text/html" 浏览器不会读取script中的html代码

```js
<script id="booksTmp" type="text/html">
  <p>{{title}}</p>
  <table>
    <tr>
      <td>序号</td>
      <td>书名</td>
      <td>原价</td>
      <td>现价</td>
    </tr>
    {{each data book i }}
    <tr>
      <td>{{i + 1}}</td>
      <td>{{book.name | bookname}}</td>
      <td class='del'>￥{{book.price | price 2}}</td>
      <td class="disc">￥{{book.disc | price 2}}</td>
    </tr> 
    {{/each}}
  </table>
</script>
```

## **第四步**：使用过滤器

使用过滤器`{{参数 | 函数名}}`

```js
template.defaults.imports.price = function(value,num){
  return value.toFixed(num);
}
template.defaults.imports.bookname = function(value){
  return '《'+ value +'》';
}
```

# 模板语法

1. 在模板中可以使用以下内容

```
{{模板逻辑表达式}} artTemplate 语法结构大括号内书写逻辑表达式
{{变量名}} 表示输出表达式，输出变量的内容
```

2. 数组或者对象的遍历结构，以数组为例：

```js
{{each 数组}} 
	$index 是数组的索引； $value是数组的元素值
{{/each}}

// 遍历时自定义  $index 和  $value 
{{each 数组 元素值 索引值}}

{{/each}} 
```

3. 条件判断表达式：

```
{{if 条件}} ...  {{/if}}
{{if 条件}} ... {{else}} ... {{/if}}
{{if 条件1}} ... {{else if 条件2}} ... {{else}} ... {{/if}}
```

4. 变量

```
{{set name = book.name}}
```

5. 子模板

```js
{{include './header.html'}}
```


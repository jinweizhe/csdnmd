# ejs介绍

高效的嵌入式 JavaScript 模板引擎。

EJS 是一套简单的模板语言，帮你利用普通的 JavaScript 代码生成 HTML 页面。EJS 没有如何组织内容的教条；也没有再造一套迭代和控制流语法；有的只是普通的 JavaScript 代码而已。

EJS使用的时候，用的是JS原生的写法，可以直接使用JS书写。

中文文档：https://ejs.bootcss.com/

# ejs服务端渲染

在nodejs中使用 ejs 

## 第一步：安装 ejs

ejs只需安装无需导入

```js
npm install ejs --save 
```

## 第二步：注册模板引擎

1. 设置模板文件类型为ejs

```js
app.set('view engine', 'ejs');
```

2. 设置模板视图的目录，所有模板文件必须放在项目根目录下的views文件夹中，默认是views目录，这一步可以省略

```js
app.set('views', path.join(__dirname, 'views'));
```

## 第三步：渲染页面

```js
var data = {
  title:"今日打折书籍",
  books:[
    {name:"三国演义",price:50,disc:39},
    {name:"水浒传",price:40,disc:28},
    {name:"西游记",price:50,disc:39},
    {name:"红楼梦",price:60,disc:49}
  ]
};

app.get('/',function(req,res){
  // res.render，渲染一个页面（必须设置了模板引擎之后才能使用render），
  // 第一个参数是要使用的模板(在views中)，会读取 ./views/index.ejs 文件的内容
  // 第二个参数是模板要用的数据(数据不能是数组，只能是对象)。设置了数据之后，可以在list.ejs中直接使用title 和 books属性，例如：<%= title %> 会输出 “今日打折书籍”
  // 页面渲染完成之后会得到一个完整的html页面，这个页面会自动返回给客户端。
  res.render('index',data)
});
```

## 第四步：编写模板文件

```ejs
<!-- header.ejs -->

<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge,chrome=1">
  <meta name="author" content="金西振">
  <title>
    <%= t %>
  </title>
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
  <h1>
    <%= t %>
  </h1>
```

```ejs
<!-- footer.ejs -->

</body>
</html>
```

```ejs
<!-- index.ejs -->

<%- include('header.ejs',{t:title}) %>

<table>
    <tr>
        <td>序号</td>
        <td>书名</td>
        <td>原价</td>
        <td>现价</td>
    </tr>
    <% for(var i = 0; i < books.length; i++){ %>
        <% var book = books[i] %>
        <tr>
            <td><%= i+1 %></td>
            <td><%= bookname(book.name) %></td>
            <td><del>￥<%= price(book.price,2) %></del></td>
            <td class="disc">￥<%= price(book.disc,2) %></td>
        </tr> 
    <% } %>
</table>

<%

function bookname(value) {
    return '《'+ value +'》';
}

function price(value,n) {
    return value.toFixed(n);
}

%>


<%- include('footer') %>
```

## 第五步：过滤器

ejs没有过滤器，但是ejs支持原生js语法，可以在 <%   %> 内部声明函数，直接在模板引擎文件中调用方法

```js
<%

function bookname(value) {
    return '《'+ value +'》';
}

function price(value,n) {
    return value.toFixed(n);
}

%>
```

# ejs客户端渲染

在浏览器中使用 ejs

## 第一步：导入 ejs

```html
<script src="https://github.com/mde/ejs/releases/download/v3.1.6/ejs.js"></script>
```

## 第二步：渲染数据

ejs.render方法，用于将模板和数据渲染为html字符串，第一个参数是模板的字符串，第二个参数是渲染数据，返回值就是渲染之后的html。
```js
var tmpStr = $("#booksEjs").text();
let htmlStr = ejs.render(tmpStr,books);
$("#ejsbooks").html(htmlStr);
```

## 第三步：编写模板

编写的模板是用来展示模板的数据: script标签的type属性设置为 type="text/html" 浏览器不会读取script中的html代码

```html
<script id="booksEjs" type="text/html">
  <%
  function bookname(value) {
      return '《'+ value +'》';
  }

  function price(value,n) {
      return value.toFixed(n);
  }

  %>
  <p><%= title %></p>
  <table>
      <tr>
        <td>序号</td>
        <td>书名</td>
        <td>原价</td>
        <td>现价</td>
      </tr>
      <% for(var i=0; i<data.length; i++) { %>
          <% var book = data[i] %>
      <tr>
        <td><%= i + 1 %></td>
        <td><%= bookname(book.name) %></td>
        <td class='del'>￥<%= price(book.price,2) %></td>
        <td class="disc">￥<%= price(book.disc,2) %></td>
      </tr> 
      <% } %>
  </table>
</script>
```
## 第四步：过滤器

ejs没有过滤器，但是ejs支持原生js语法，可以在 <%   %> 内部声明函数，直接在模板引擎文件中调用方法

```js
<%

function bookname(value) {
    return '《'+ value +'》';
}

function price(value,n) {
    return value.toFixed(n);
}

%>
```

# EJS语法

1. 需要向页面上输出值： `<%= %>`  把`{{currentCity}}` 替换成  `<%= currentCity %>`

2. 直接写JS代码：`<%  %>` 把 `{{var today = weather_data[0]}}` 替换成 `<% var today = weather_data[0]; %>`

3. if语句 和 for 语句 直接使用原生JS的写法

4. 过滤器的使用从 `{{today.date | current}}` 变成了 `<%= $imports.current(today.date) %>`。既然可以在 <%  %> 内部直接写JS代码，在 <% %> 定义函数，调用函数，代替过滤器

5. 导入子模板  `<%- include('./header.ejs', {tx: title}) %>`

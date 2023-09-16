# 表单

## 什么是表单

表单在网页中主要负责**数据采集功能**。HTML中的`<form>`标签，就是用于采集用户输入的信息，并通过`<form>`标签的**提交**操作，把采集到的信息提交到服务器端进行处理。

表单的两个作用：

- 可以让用户输入一些信息，然后收集用户输入的数据
- 把数据提交给服务器，所谓提交就是通过调用服务器的某个接口(接口：http://127.0.0.1:3000/login)，把收集的数据传给服务器。

## 表单的组成部分

表单由三个基本部分组成：

- 表单标签
- 表单域
- 表单按钮

以下面内容为例：

```html
<form action="http://127.0.0.1:3000/user" method="GET">
  <input type="text" name="username" placeholder="姓名"> <br>
  <input type="text" id="age" name="age" placeholder="年龄"> <br>
  <lable><input type="radio" name="gender" id="gender" value="男" checked>男</lable>
  <lable><input type="radio" name="gender" id="gender" value="女"> 女 </lable>lable><br>

  <input type="submit" value="提交">
  <input type="button" value="返回">
</form>
```

### 表单标签

表单标签是指form标签

```html
<form action="http://127.0.0.1:3000/user" method="GET">
 
</form>
```

### 表单域

表单域包含了：

- 文本框`[type=text]`
- 密码框`[type=password]`
- 隐藏域`[type=hiden]`
- 多行文本框`textarea`
- 复选框`[type=checkbox]`
- 单选框`[type=radio]`
- 下拉选择`sleect`框
- 文件上传`[type=file]`框等。

```html
  <input type="text" name="username" placeholder="姓名"> <br>
  <input type="passwprd" name="passwprd" placeholder="密码"> <br>
  <input type="text" id="age" name="age" placeholder="年龄"> <br>
  <lable><input type="radio" name="gender" id="gender" value="男" checked>男</lable>
  <lable><input type="radio" name="gender" id="gender" value="女"> 女 </lable>lable><br>
```

### 表单按钮

```html
  <input type="submit" value="提交">
```

# `<form>`标签的属性

`<form>`标签用来采集数据，`<form>`标签的属性则是用来规定如何把采集到的数据发送到服务器。

| **属性**     | **值**                                                       | **描述**                                  |
| ------------ | ------------------------------------------------------------ | ----------------------------------------- |
| action       | URL地址                                                      | 规定当提交表单时，向何处发送表单数据      |
| autocomplete | on<br />off                                                  | 规定表单是否应打开自动完成（填写）功能。  |
| method       | get或post                                                    | 规定以何种方式把表单数据提交到 action URL |
| name         | 字符串类型                                                   | 表单的名字                                |
| enctype      | application/x-www-form-urlencoded<br />multipart/form-data<br />text/plain | 规定在发送表单数据之前如何对其进行编码    |
| target       | `_blank`<br />`_self`<br />`_parent`<br />`_top`<br />framename | 规定在何处打开 action URL                 |

## action 属性

action 属性用来规定当提交表单时，向何处发送表单数据。
action 属性的值应该是后端提供的一个 URL 地址，这个 URL 地址专门负责接收表单提交过来的数据。
当 `<form>` 表单在未指定 action 属性值的情况下，action 的默认值为当前页面的 URL 地址。

```html
<form action="http://127.0.0.1:3000/user" method="GET">
 
</form>
```

注意：当提交表单后，页面会立即跳转到 action 属性指定的 URL 地址

## Target 属性

`target` 属性规定提交表单后在何处显示响应。

`target` 属性可设置以下值之一：

默认值为 `_self`，这意味着响应将在当前窗口中打开。

| 值        | 描述                           |
| :-------- | :----------------------------- |
| _blank    | 响应显示在新窗口或选项卡中。   |
| _self     | 默认值，响应显示在当前窗口中。 |
| _parent   | 响应显示在父框架中。           |
| _top      | 响应显示在窗口的整个 body 中。 |
| framename | 响应显示在命名的 iframe 中。   |

此处，提交的结果将在新的浏览器标签中打开：

```html
<form action="http://127.0.0.1:3000/user" method="GET" target="_blank">
 
</form>
```

## method 属性

method 属性指定提交表单数据时要使用的 HTTP 方法。

它的可选值有两个，分别是 get 和 post。

表单数据可以作为 URL 变量（使用 `method="get"`）或作为 HTTP post 事务（使用 `method="post"`）发送。

提交表单数据时，默认的 HTTP 方法是 GET。

post和get的选择：

- get 方式适合用来提交少量的、简单的数据，常用于仅仅从服务端获取数据。
- post 方式适合用来提交大量的、复杂的、或包含文件上传的数据。
- 在实际开发中，`<form>` 表单的 post 提交方式用的最多，很少用 get。例如登录、注册、添加数据等表单操作，都需要使用 post 方式来提交表单。

此例在提交表单数据时使用 GET 方法：

```html
<form action="http://127.0.0.1:3000/user" method="GET">
 
</form>
```

**关于 GET 的注意事项：**

- 以名称/值对的形式将表单数据追加到 URL
- 永远不要使用 GET 发送敏感数据！（提交的表单数据在 URL 中可见！）
- URL 的长度受到限制（2048 个字符）
- 对于用户希望将结果添加为书签的表单提交很有用
- GET 适用于非安全数据，例如 Google 中的查询字符串

**关于 POST 的注意事项：**

- 将表单数据附加在 HTTP 请求的正文中（不在 URL 中显示提交的表单数据）
- POST 没有大小限制，可用于发送大量数据。
- 带有 POST 的表单提交无法添加书签

**提示：**如果表单数据包含敏感信息或个人信息，请务必使用 POST！

## Autocomplete 属性

`autocomplete` 属性规定表单是否应打开自动完成功能。

启用自动完成功能后，浏览器会根据用户之前输入的值自动填写值。

| 值   | 描述                         |
| :--- | :--------------------------- |
| on   | 默认。规定启用自动完成功能。 |
| off  | 规定禁用自动完成功能。       |

## enctype 属性

enctype 属性用来规定在发送表单数据之前如何对数据进行编码。

它的可选值有三个，默认情况下，enctype 的值为 application/x-www-form-urlencoded，表示在发送前编码所有的字符。

| 值                                | 描述                                                         |
| :-------------------------------- | :----------------------------------------------------------- |
| application/x-www-form-urlencoded | 在发送前编码所有字符（默认）。<br />1. 表单数据发送前被编码为名称/值对：key=value&key=value的形式<br />2. 使用get方式提交时，把表单数据(key=value&key=value)以键值对拼接到url后，用'?'分割url和参数<br />3. 使用post方式提交时，把表单数据以键值对放在请求体中传输。 |
| multipart/form-data               | 不对字符编码。<br />表单数据被编码为一条消息，它不会对字符进行编码，一般用于传输二进制文件（图片、视频），使用表单上传文件时必须使用该值。 |
| text/plain                        | 空格转换为 "+" 加号，但不对特殊字符编码。                    |

注意：

- 使用表单进行文件上传的操作时，必须将 enctype 的值设置为 multipart/form-data
- 如果表单的提交不涉及到文件上传操作，使用 enctype 的默认值 application/x-www-form-urlencoded 

# 使用表单提交请求

在form表单中提交请求时，按钮input的type类型需设置为submit。

## GET请求

### 服务端

```js
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/user', function (req, res) {
  // get请求的参数放在url的后面，通过query查询的是url后边的查询参数
	var name = req.query.username;
	var age = req.query.age;
	res.send('<h2>个人资料提交成功</h2>' + '姓名：' + name + '<br>' + '年龄：' + age);
});

app.listen(3000, function () {
	console.log('服务器开启中...');
});
```

### 客户端

```html
<!--
  get方法请求的的参数是拼接在url后面：ip:端口号/资源路径?参数名1=参数值&参数名2=参数值
  http://127.0.0.1:3000/user?username=jinxizhen&age=28 
-->
<form action="http://127.0.0.1:3000/user" method="GET">
  <!-- 表单元素都有一个name属性，设置了name属性的元素，在表单提交时，用户输入的数据会作为本次发送请求的参数发给服务器，参数名就是name的值，参数值就是用户输入的内容 -->
  <!-- 如果表单元素没有设置name属性，那么表单提交时，其中的数据就不会发送给服务器 -->
  <input type="text" name="username" placeholder="请输入姓名"><br>
  <input type="text" name="age" placeholder="请输入年龄"><br>
  <lable><input type="radio" name="gender" id="gender" value="男" checked>男</lable>
  <lable><input type="radio" name="gender" id="gender" value="女"> 女 </lable>lable><br>
  <input type="submit" value="提交">
</form>
```

## POST请求

### 服务端

```js
var express = require('express');

var app = express();
app.use(express.static('public'));

// 将请求体中的参数解析为body对象，该body对象里边有一些属性，属性名称就是请求的参数名，属性的值就是请求的参数值
app.use(express.urlencoded({extended:false}));

app.post('/user',function(req,res){
    // 从post请求体中获取请求的数据需要使用body
    console.log('姓名：'+req.body.username);
    console.log('年龄：'+req.body.age);

    res.send('<h2>个人资料提交成功</h2>' + '姓名：' + req.body.username + '<br>' + '年龄：' + req.body.age);
});

app.listen(3000,function(){
    console.log('服务器开启中...');
});
```

### 客户端

```html
<!-- post 请求的参数是放在请求体内 -->
<form action="/user" method="POST">
  <input type="text" name="username" placeholder="请输入姓名"><br>
  <input type="text" name="age" placeholder="请输入年龄"><br>
  <lable><input type="radio" name="gender" id="gender" value="男" checked>男</lable>
  <lable><input type="radio" name="gender" id="gender" value="女"> 女 </lable>lable><br>
  <input type="submit" value="提交">
</form>
```

## 表单的同步提交及缺点

### 什么是表单的同步提交

通过点击 submit 按钮，触发表单提交的操作，从而使页面跳转到 action URL 的行为，叫做表单的同步提交。

### 表单同步提交的缺点

`<form>`表单同步提交后，整个页面会发生跳转，跳转到 action URL 所指向的地址，用户体验很差。
`<form>`表单同步提交后，页面之前的状态和数据会丢失。


思考：如何解决上述两个问题？

解决方案：表单只负责采集数据，Ajax 负责将数据提交到服务器。

# 通过Ajax提交表单数据

使用ajax提交表单数据，需要使用form标签监听表单的submit事件。

点击type类型为submit的按钮，默认会提交表单，这属于表单的默认行为，在表单的提交事件以中，可以调用事件对象的 event.preventDefault() 函数，来阻止表单的默认提交行为和页面的跳转，示例代码如下：

```js
document.forms[0].onsubmit = function (ev) {
  // 阻止表单提交和页面跳转
   ev.preventDefault();
}
```

以下面代码为例：

```html
<form>
  <input type="text" name="username" placeholder="账号"> <br>
  <input type="text" name="age" placeholder="年龄"> <br>
  <input type="submit" value="登录">
</form>
```

```js
var nameInput = document.querySelector('input[name=username]');
var ageInput = document.querySelector('input[name=age]');
document.forms[0].onsubmit = function (ev) {
  // 阻止表单提交和页面跳转
  ev.preventDefault();

  axios.post('http://127.0.0.1:3000/api/post',{
    username: nameInput.value,
    age: ageInput.value
  }).then(res=>{
    console.log(res.data);
  });
}
```

通过ajax提交表单，本质上和提交表单就没有关系了，使用 `ev.preventDefault();` 阻止的表单的默认行为，表单的的action和method属性也就不起作用了，此时，也不强制要求表单元素设置name属性了。

这种方式本质上就是ajax请求，使用ajax不会发生页面跳转，服务端把返回的结果交给JS处理，也比较方便。之所以还是用表单，主要就是为了收集用户在页面上输入的数据，在通过ajax发送给服务器。

在获取表单数据时，如果想要得到 application/x-www-form-urlencoded  格式的数据，可以还可以借助JQ的函数：

```js
$('form').serialize();
```

使用serialize()可以一次性获取表单中的数据，不需要手动拼接，但是这时不要忘记给表单元素设置name属性。

```html
<form>
  <input type="text" name="username" placeholder="账号"> <br>
  <input type="text" name="age" placeholder="年龄"> <br>
  <input type="submit" value="登录">
</form>
```

```js
$('form').serialize()
// 调用的结果：
// username=用户名的值&password=密码的值
```

注意：在使用 serialize() 函数快速获取表单数据时，必须为每个表单元素添加 name 属性！


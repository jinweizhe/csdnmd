# AJAX

AJAX：Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）

ajax 是浏览器的一种请求技术，由JS早期请求使用的数据格式是XML，所以名字叫ajax。但是XML这种数据格式相对于JSON过于臃肿、解析相对困难、性能差，所以现在的ajax技术早已不再使用XML数据，统一都改为了使用JSON数据，但是还是保留了ajax这个名字。

ajax：是一项前端非常强大而又实用的网络通信技术。它的核心是XMLHttpRequest，简称XHR，它是ajax中一个用来发送和管理请求的对象。

ajax最大的优点是可以实现无刷新的请求，同时提供异步的请求方式，不会阻塞当前程序，会给用户提供很好的用户体验。

对于浏览器发起的请求(例如a标签点击，表单提交等)，都是跳转式的请求，浏览器会根据本次请求到的数据格式 主动去处理本次请求，例如如果请求的是一个页面，浏览器会直接打开它，如果请求到的是一个图片，浏览器会显示图片，如果请求的是一个MP3，浏览器会自动播放它。

ajax请求和表单提交的请求最大的区别就是：ajax请求不会导致页面跳转，它会把请求到的数据交给JS处理。

# AJAX的使用

XMLHttpRequest 是 AJAX 的基础
XMLHttpRequest 对象用于和服务器交换数据，向服务器发起一个网络请求并从服务器获得响应

参考：
https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
https://developer.mozilla.org/zh-CN/docs/Web/API/FormData

## AJAX四步走

1. 创建一个XHR对象：var xhr = new XMLHttpRequest();
2. 监听xhr.onreadystatechange事件

     - 当xhr.readystate == 4 && xhr.status==200 的时候就可以接收数据了
     - 响应状态码：xhr.status
     - 响应的状态信息：xhr.statusText
     - 响应内容：xhr.responseText
3. 调用 open 函数，设置请求URL及请求方法：xhr.open('GET','/api/user')
4. 调用 send 函数，发送请求：xhr.send();

## XMLHttpRequest 对象方法

| 方法                            | 描述                                                         |
| :------------------------------ | :----------------------------------------------------------- |
| new XMLHttpRequest()            | 创建新的 XMLHttpRequest 对象                                 |
| abort()                         | 取消当前请求                                                 |
| getAllResponseHeaders()         | 返回头部信息                                                 |
| getResponseHeader()             | 返回特定的头部信息                                           |
| open(method, url, async)        | 规定请求的类型<br />1. method：请求的类型：GET 还是 POST<br />2. url：服务器（文件）地址<br />3. async：true（异步）或 false（同步），默认为true |
| send()                          | 向服务器发送请求（用于 GET）                                 |
| send(string)                    | 向服务器发送请求（用于 POST）                                |
| setRequestHeader(header, value) | 向请求添加 HTTP 头部<br />1. header：规定头部名称<br />2. value：规定头部值 |

## XMLHttpRequest 对象属性

| 属性               | 描述                                                         |
| :----------------- | :----------------------------------------------------------- |
| onreadystatechange | 定义当 readyState 属性发生变化时被调用的函数                 |
| readyState         | 保存 XMLHttpRequest 的状态。<br />0：请求未初始化<br />1：服务器连接已建立<br />2：请求已收到<br />3：正在处理请求<br />4：请求已完成且响应已就绪 |
| responseText       | 以字符串返回响应数据                                         |
| responseXML        | 以 XML 数据返回响应数据                                      |
| status             | 返回请求的状态号<br />200: "OK"<br />403: "Forbidden"<br />404: "Not Found" |
| statusText         | 返回状态文本（比如 "OK" 或 "Not Found"）                     |

只要 readyState 属性发生变化，就会调用相应的处理函数。这个回调函数会被用户线程所调用。xhr.onreadystatechange 会在 readyState 属性发生改变时触发 readystatechange事件。

| **值** | **状态**         | **描述**                                                     |
| ------ | ---------------- | ------------------------------------------------------------ |
| 0      | UNSENT           | 请求还未初始化：xhr对象已被创建，但尚未调用 open方法。       |
| 1      | OPENED           | 请求已经被提出：open() 方法已经被调用。                      |
| 2      | HEADERS_RECEIVED | 请求已发送：send() 方法已经被调用，响应头也已经被接收。      |
| 3      | LOADING          | 请求处理中：数据接收中，此时 response 属性中已经包含部分数据，服务器还未完成响应。 |
| 4      | DONE             | 请求已完成：Ajax 请求完成，这意味着数据传输已经彻底完成。    |

## AJAX异步和同步

ajax默认的都是异步请求。

### 异步请求

如需异步发送请求，open() 方法的 *async* 参数必须设置为 true：

```js
xhr.open("GET", "/api/user", true);
```

发送器请求	-->	继续执行后面的代码	-->	响应结果接收完毕了	-->	操作结果。

这是异步请求的大致过程。可以看到，异步请求在发送请求之后没有等待结果的返回而是继续执行后面的代码，也就是说在结果返回之前用户可以操作其他东西或是看到其他UI，用户体验良好。但是有些情况下我们还是得用同步请求。 

发送异步请求对 web 开发人员来说是一个巨大的进步。服务器上执行的许多任务都非常耗时。在 AJAX 之前，此操作可能会导致应用程序挂起或停止。

### 同步请求

如需执行同步的请求，请把 open() 方法中的第三个参数设置为 false：

```js
xhttp.open("GET", "/api/user", false);
```

有时 async = false 用于快速测试。你也会在更老的 JavaScript 代码中看到同步请求。

由于代码将等待服务器完成，所以不需要 onreadystatechange 函数：

```js
xhttp.open("GET",  "/api/user", false);
xhttp.send();
document.getElementById("demo").innerHTML = xhttp.responseText;
```

发送器请求	-->	等待结果	-->	操作结果	-->	继续执行后面的代码 。

这是同步请求的大致过程，由于客服端的javascript是单线程的，也就是说我们必须等待结果完全接收完毕之后才能继续执行后面的代码，严格按照步骤一步一步来，它通常会导致整个浏览器的UI阻塞（白屏等），如果连接服务器响应很慢，那么用户浏览器将冻结，用不不能进行其他操作。

如果我们发起一个同步请求，chrome浏览器会给你这样一个警告：

```
Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check http://xhr.spec.whatwg.org/. 

主线程中同步的 XMLHttpRequest 已不赞成使用，因其对终端用户的用户体验存在负面影响。可访问 http://xhr.spec.whatwg.org/ 详细了解
```

我们不推荐同步的 XMLHttpRequest (async = false)，因为 JavaScript 将停止执行直到服务器响应就绪。如果服务器繁忙或缓慢，应用程序将挂起或停止。

同步 XMLHttpRequest 正在从 Web 标准中移除，但是这个过程可能需要很多年。

现代开发工具被鼓励对使用同步请求做出警告，并且当这种情况发生时，可能会抛出 InvalidAccessError 异常。

# GET 和 POST请求

## GET 还是 POST？

GET 比 POST 更简单更快，可用于大多数情况下。

不过，请在以下情况始终使用 POST：

- 缓存文件不是选项（更新服务器上的文件或数据库）
- 向服务器发送大量数据（POST 无大小限制）
- 发送用户输入（可包含未知字符），POST 比 GET 更强大更安全

## xhr发送get请求

### 客户端

#### 不参数的get请求

```js
// 1. 创建 XHR 对象
var xhr = new XMLHttpRequest();

// 2. 监听 onreadystatechange 事件
xhr.onreadystatechange = function() {
  // 监听 xhr 对象的请求状态 readyState ；与服务器响应的状态 status
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 打印服务器响应回来的数据
    console.log(xhr.responseText)
  }
}

// 3. 调用 open 函数，指定 请求方式 与 URL地址
xhr.open('GET', 'http://127.0.0.1:3000/api/user');

// 4. 调用 send 函数，发起 Ajax 请求
xhr.send();
```

#### 带参数的get请求

GET提交的数据会放在URL之后，也就是请求行里面，以?分割URL和传输数据，多个参数之间以&相连。

比如：http://www.zhiyou100.com/login?username=jxz&password=123，其中?后面的username=jxz&password=123就是参数

在使用 xhr 对象发起带参数的 GET 请求时，只需在调用 xhr.open 时，为 URL 地址指定参数即可：

```js
xhr.open('GET','http://127.0.0.1:3000/api/login?username=张三&age=22');
```

这种在 URL 地址后面拼接的参数，叫做**查询字符串**。

#### 查询字符串

查询字符串（URL 参数）是指在 URL 的末尾加上用于向服务器发送信息的字符串（变量）。
格式：将英文的 ? 放在URL 的末尾，然后再加上 参数＝值 ，想加上多个参数的话，使用 & 符号进行分隔。以这个形式，可以将想要发送给服务器的数据添加到 URL 中。

```
// 不带参数的 URL 地址
http://127.0.0.1:3000/api/user

// 带一个参数的 URL 地址
http://127.0.0.1:3000/api/user?id=1

// 带两个参数的 URL 地址
http://127.0.0.1:3000/api/user?id=1&username=张三
```

### 服务端

get请求在服务端使用 req.query 获取查询字符串

```js
app.get('/api/login', (req, res) => {
	console.log(req.query);
	if (req.query.username == '张三') {
		res.status(200).json({ error: 0, data: '登录成功' });
	} else {
		res.status(200).json({ error: 1, data: '登录失败' });
	}
});
```

## xhr发送post请求

### 客户端

#### 不参数的post请求

```js
// 1. 创建 xhr 对象
var xhr = new XMLHttpRequest();

// 2. 监听 onreadystatechange 事件
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}

// 3. 调用 open()
xhr.open('POST', 'http://127.0.0.1:3000/api/regist');

// 4. 调用 send()，发送请求
xhr.send();
```

#### 带参数的post请求

post带参数的请求比get带参数请求多了一步设置请求头Content-type，Content-type的设置必须放在调用xhr.open函数之后：

POST方法是把提交的参数放在HTTP的请求体中，在send方法中进行设置。

```js
// 设置 Content-Type 属性
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// 调用 send()，同时将数据以查询字符串的形式，提交给服务器
xhr.send('username=张三&age=22');
```

POST请求常用的几种数据格式：

- urlencoded：`application/x-www-form-urlencoded`  提交的数据按照 key1=val1&key2=val2 的方式进行编码
- json：`application/json`  用来告诉服务端消息主体是序列化后的 JSON 字符串
- formdata：`multipart/form-data` 通过表单上传文件时，必须让 `<form>` 表单使用 enctype='multipart/form-data'和method='POST'

### 服务端

post请求在服务端使用 req.body 获取查询字符串

```js
// express.urlencoded 把请求体中的参数解析到req.body中
app.use(express.urlencoded({ extended: false }));

app.post('/api/regist', form.none(), (req, res) => {
  if (req.body.username == '张三') {
    res.json({ error: 0, data: '注册成功' });
  } else {
    res.json({ error: 1, data: '注册失败' });
  }
});
```

## formdata类型的请求

一般的get请求或是post请求，发送的请求数据格式都是一般的文本格式。

比如：get请求：`xhr.open('GET','http://127.0.0.1:3000/api/login??username=张三&age=22');`请求数据都是字符串。post请求本质上发送的也是查询字符串：`xhr.send('username=张三&age=22')`。

但是很多情况下我们发送给服务器的数据 不一定就是文本，比如上传头像，视频 ，音频，文件等数据，就不是文本，所以一般的get或是post就招架不住了。

form-data：即表单数据。使用form-data必须使用post请求，模拟表单提交时的数据格式，把请求的内容存入一个对象中，发送给服务器。与普通的ajax相比，formdata可以上传二进制文件

### 客户端

方式一：使用FormData实例的 append 方法添加参数

```js
// 1. 创建 xhr 对象
var xhr = new XMLHttpRequest();

// 2. 调用 open()
xhr.open('POST', 'http://127.0.0.1:3000/api/regist');

// 3. 添加formdata类型的数据
var data = new FormData();
data.append('username', '张三');
data.append('age', 12);

// 4. 调用 send()，同时将数据以formadata的形式，提交给服务器
xhr.send(data);

// 5. 监听 onreadystatechange 事件
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}
```

方式二：使用form表单的数据

```js
//  <form id="login">
//    <input type="text" name="username" placeholder="账号">
//    <input type="text" name="age" placeholder="年龄">
//  </form>

// 1. 创建 xhr 对象
var xhr = new XMLHttpRequest();

// 2. 调用 open()
xhr.open('POST', 'http://127.0.0.1:3000/api/regist');

// 3. 添加formdata类型的数据
// 创建formdata对象的时候传入原生form标签对象，会自动把form标签中带有name属性的表单元素的value值提取出来，相当于执行了 data.append('username','张三')
let form = document.forms[0];
let data = new FormData(form);

// 4. 调用 send()，同时将数据以formadata的形式，提交给服务器
xhr.send(data);

// 5. 监听 onreadystatechange 事件
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
    }
}
```

**注意：使用 FormData 类型的数据，必须使用POST请求。**

**注意**：使用form表单的数据，页面上需要添加form标签，并且input[type=text]、input[type=password]、input[type=radio]、input[type=checkbox]、select等表单元素必须添加name属性，否则会忽略该表单元素的值。

### 服务端

处理以formdata形式提交的数据，需要使用multer模块，

```js
var multer = require('multer');

var form = multer();

app.post('/api/regist', form.none(), (req, res) => {
  if (req.body.username == '张三') {
		res.json({ error: 0, data: '注册成功' });
	} else {
		res.json({ error: 1, data: '注册失败' });
	}
});
```

# AJAX传参总结

## GET请求传参

GET请求参数传递使用?放在url后面    ?key=value&key=value

```js
xhr.open('GET','/login'?username=张三&age=22');
```

## POST请求传参

### urlencoded类型的数据

**客户端**：在请求体中使用urlencoded格式的数据，此时需要设置请求头Content-type为application/x-www-form-urlencoded

**服务端**：对应服务端设置：`app.use(express.urlencoded({ extended: false }));`用来解析urlencoded格式的数据

```js
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
xhr.send('username=张三&age=22');
```

### json类型的数据

**客户端**：在请求体中使用json格式的数据，此时需要设置请求头Content-type为application/json

**服务端**：对应服务端设置：`app.use(express.json());`用来解析json格式的数据

```js
xhr.setRequestHeader('Content-type','application/json');
xhr.send(JSON.stringify({ username: '张三', age: 12 }));
```

### formdata类型的数据

在请求体使用formdata类型的数据，必须使用POST请求，此时在服务端的POST请求需要使用multer模块添加form.none() 进行处理。

**方式一**：使用FormData的实例 append 方法添加参数

```js
let data = new FormData();
data.append('username', '张三');
data.append('age', 12);

xhr.send(data);
```

**方式二**：使用form表单的数据

创建formdata对象的时候传入原生form标签对象，会自动把form标签中带有name属性的表单元素的value值提取出来，相当于执行了 data.append('username','张三')。

```js
let form = document.forms[0];
let data = new FormData(form);
       
xhr.send(data);
```

**注意**：使用方式二，页面上需要添加form标签，并且input[type=text]、input[type=password]、input[type=radio]、input[type=checkbox]、select等表单元素必须添加name属性，否则会忽略该表单元素的值

# XMLHttpRequest Level 2 

XMLHttpRequest是一个浏览器接口，使得Javascript可以进行HTTP(S)通信。

最早，微软在IE 5引进了这个接口。因为它太有用，其他浏览器也模仿部署了，ajax操作因此得以诞生。

但是，这个接口一直没有标准化，每家浏览器的实现或多或少有点不同。HTML 5的概念形成后，W3C开始考虑标准化这个接口。2008年2月，就提出了XMLHttpRequest Level 2草案。这个XMLHttpRequest的新版本，提出了很多有用的新功能。

## 老版本的缺点

老版本的XMLHttpRequest对象有以下几个缺点：

　　* 只支持文本数据的传送，无法用来读取和上传二进制文件。

　　* 传送和接收数据时，没有进度信息，只能提示有没有完成。

　　* 受到"同域限制"（Same Origin Policy），只能向同一域名的服务器请求数据。

## 新版本的功能

新版本的XMLHttpRequest对象，针对老版本的缺点，做出了大幅改进。

　　* 可以设置HTTP请求的时限。

　　* 可以使用FormData对象管理表单数据。

　　* 可以上传文件。

　　* 可以请求不同域名下的数据（跨域请求）。

　　* 可以获取服务器端的二进制数据。

　　* 可以获得数据传输的进度信息。

### HTTP请求的时限

有时，ajax操作很耗时，而且无法预知要花多少时间。如果网速很慢，用户可能要等很久。

新版本的XMLHttpRequest对象，增加了timeout属性，可以设置HTTP请求的时限。

```js
xhr.timeout = 3000;
```

上面的语句，将最长等待时间设为3000毫秒。过了这个时限，就自动停止HTTP请求。与之配套的还有一个timeout事件，用来指定回调函数。

```js
xhr.ontimeout = function(event){
  alert('请求超时！');
}
```

### FormData对象

ajax操作往往用来传递表单数据。为了方便表单处理，HTML 5新增了一个FormData对象，可以模拟表单。

```js
// 首先，新建一个FormData对象。
var formData = new FormData();

// 然后，为它添加表单项。
formData.append('username', '张三');

formData.append('age', 18);

// 最后，直接传送这个FormData对象。这与提交网页表单的效果，完全一样。
xhr.send(formData);
```

FormData对象也可以用来获取网页表单的值。

```js
var form = document.getElementById('myform');

var formData = new FormData(form);

xhr.open('POST', form.action);

xhr.send(formData);
```

### 上传文件

新版XMLHttpRequest对象，不仅可以发送文本信息，还可以上传文件。

```js
// 假定files是一个"选择文件"的表单元素（input[type="file"]），我们将它装入FormData对象。
var formData = new FormData();

for (var i = 0; i < files.length;i++) {
  formData.append('files[]', files[i]);
}

// 然后，发送这个FormData对象。
xhr.send(formData);
```

### 进度信息

新版本的XMLHttpRequest对象，传送数据的时候，有一个progress事件，用来返回进度信息。

它分成上传和下载两种情况。下载的progress事件属于XMLHttpRequest对象，上传的progress事件属于XMLHttpRequest.upload对象。

```js
// 我们先定义progress事件的回调函数。
xhr.upload.onprogress = updateProgress;

// 然后，在回调函数里面，使用这个事件的一些属性。
function updateProgress(event) {
  // event.lengthComputable 是一个布尔值，表示当前上传的资源是否具有可计算的长度
  // 如果event.lengthComputable不为真，则event.total等于0。
  if (event.lengthComputable) {
    // event.total是需要传输的总字节
    // event.loaded是已经传输的字节
    var percentComplete = event.loaded / event.total;
  }
}
```

与progress事件相关的，还有其他五个事件，可以分别指定回调函数：

　　* load事件：传输成功完成。

　　* abort事件：传输被用户取消。

　　* error事件：传输中出现错误。

　　* loadstart事件：传输开始。

　　* loadEnd事件：传输结束，但是不知道成功还是失败。

# URL编码与解码

## 什么是URL编码

URL 地址中，只允许出现英文相关的字母、标点符号、数字，因此，在 URL 地址中不允许出现中文字符。
如果 URL 中需要包含中文这样的字符，则必须对中文字符进行编码（转义）。

URL编码的原则：使用安全的字符（没有特殊用途或者特殊意义的可打印字符）去表示那些不安全的字符。
URL编码就是使用英文字符去表示非英文字符。

```js
http://127.0.0.1:3000/api/user?id=1&username=张三
编码之后
http://127.0.0.1:3000/api/user?id=1&username=%E5%BC%A0%E4%B8%89
```

## 如何对URL进行编码与解码

浏览器提供了 URL 编码与解码的 API，分别是：

- encodeURI()  编码的函数
- decodeURI()  解码的函数

```js
encodeURI('http://127.0.0.1:3000/api/user?id=1&username=张三')
// 'http://127.0.0.1:3000/api/user?id=1&username=%E5%BC%A0%E4%B8%89'

decodeURI('http://127.0.0.1:3000/api/user?id=1&username=%E5%BC%A0%E4%B8%89')
// 'http://127.0.0.1:3000/api/user?id=1&username=张三'
```

由于浏览器会自动对 URL 地址进行编码操作，因此，大多数情况下，程序员不需要关心 URL 地址的编码与解码操作。

更多关于 URL 编码的知识：https://www.cnblogs.com/jerrysion/p/5522673.html

# 接口

使用 Ajax 请求数据时，被请求的 URL 地址，就叫做数据接口（简称接口）。同时，每个接口必须有请求方式。
例如：
http://127.0.0.1:3000/api/user ：GET请求，获取用户信息
http://127.0.0.1:3000/api/login   POST请求，登录

接口测试工具

为了验证接口能否被正常被访问，需要经常对数据接口进行检测，借助接口测试工具，可以在不写任何代码的情况下，对接口进行调用和测试，非常方便。

测试工具有很多种：

1. 在VS code中可以使用Postcode测试插件
2. 安装ApiPost测试工具

# 接口文档

接口文档就是接口的说明文档，它是我们调用接口的依据。好的接口文档包含了对接口URL，参数以及输出内容的说明，我们参照接口文档就能方便的知道接口的作用，以及接口如何进行调用。

接口文档可以包含很多信息，也可以按需进行精简，不过，一个合格的接口文档，应该包含以下6项内容，从而为接口的调用提供依据：

- 接口名称：用来标识各个接口的简单说明，如登录接口，获取图书列表接口等。
- 接口URL：接口的调用地址。
- 调用方式：接口的调用方式，如 GET 或 POST。
- 参数格式：接口需要传递的参数，每个参数必须包含参数名称、参数类型、是否必选、参数说明这4项内容。
- 响应格式：接口的返回值的详细描述，一般包含数据名称、数据类型、说明3项内容。
- 返回示例（可选）：通过对象的形式，例举服务器返回数据的结构。

![image-20220219114441337](https://s2.loli.net/2022/02/19/KcSuGtM8JHbDvNj.png)

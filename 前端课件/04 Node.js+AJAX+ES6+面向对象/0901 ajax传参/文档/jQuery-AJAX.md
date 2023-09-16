# JQ-AJAX

jQuery的AJAX封装的是JavaScript的AJAX操作。浏览器中提供的 XMLHttpRequest 用法比较复杂，所以 jQuery 对 XMLHttpRequest 进行了封装，提供了一系列 Ajax 相关的函数，极大地降低了 Ajax 的使用难度。

jQuery执行一个异步的Ajax的请求，有以下常用的三个方法：

- $.ajax() 
- $.get()
- $.post()

# get和post使用方式

`$.ajax()`是基础的ajax请求，需要配置的属性比较多，更常用的是`$.get()`和`$.post()`

- $.get(URL,param,func)发送GET请求    
- $.post(URL,param,func)发送POST请求

使用方式有几种：

## 方式一：回调函数

```js
$.METHOD(URL,param,function(data,status,jqXHR){

});
```
- URL：请求的地址url
- param：可选，请求的参数。注意：get请求可以直接将参数放在url后面也可以放在这里。post请求需要将参数写在这里，不传递参数的时候，省略param。
- func：请求完成后的回调函数。在回调函数中也有三个参数：function(data,status,xhr)
  - data：请求返回的数据，该数据是jQuery已经处理过的数据，所以可以直接使用，不用再次处理。
  - status：请求返回的状态信息
  - jqXHR：是ajax请求的核心对象xhr

## 方式二：done和fail函数

```js
$.METHOD(URL,param)
  .done(function(data,status,jqXHR){
  //done() 请求成功回调的方法
  console.log("请求成功了");
})
  .fail(function(jqXHR,status,error){
  //fail() 请求失败回调的方法 
  console.log("请求失败了");
})
  .always(function(param1,param2,param3){
  //always：请求完成时调用。注意：不管成功还是失败都会调用
  //在响应一个成功的请求后，该函数的参数和.done()的参数是相同的：data, status, 和 jqXHR 对象.
  //对于失败的请求，参数和.fail()的参数是相同的：jqXHR 对象, status, 和 error。
  console.log(arguments);
});
```

## 方式三：then和catch

```js
$.METHOD(URL,param)
  .then(function(data,status,jqXHR){
  //then() 请求成功回调的方法
  console.log("请求成功了");
})
  .catch(function(jqXHR,status,error){
  //catch() 请求失败回调的方法 
  console.log("请求失败了");
});
```

# $.ajax()使用方式

使用`$.ajax()`可以实现更加基础的ajax请求，但是同时配置的属性也就更多了。相比于` $.get()` 和` $.post() `函数， `$.ajax()` 函数，是一个功能比较综合的函数，它允许我们对 Ajax 请求进行更详细的配置。

$.ajax() 函数的基本语法如下：

## 方式一：

```js
$.ajax({options})
  .done(function(data,status,jqXHR){
  //done() 请求成功回调的方法
  console.log("请求成功了");
})
  .fail(function(jqXHR,status,error){
  //fail() 请求失败回调的方法 
  console.log("请求失败了");
})
  .always(function(param1,param2,param3){
  //always：请求完成时调用。注意：不管成功还是失败都会调用
  //在响应一个成功的请求后，该函数的参数和.done()的参数是相同的：data, status, 和 jqXHR 对象.
  //对于失败的请求，参数和.fail()的参数是相同的：jqXHR 对象, status, 和 error。
  console.log(arguments);
});
```

##  方式二：

```js
$.ajax({
  // 请求类型 GET/POST
  method: "GET",
  // 请求的URL
  url: "/login",
  // 是否异步请求
  async: true,
  //请求数据(不区分get和post请求)
  data: {name:'Jxz',psw:'123456'},
  //cache: 缓存，即是否使用上次缓存的数据。如果设置为true，
  //则有可能不会再次发送请求，会直接使用上次的请求缓存数据
  cache: false,
  //dataType: 设置请求数据类型。是放在请求头里面发送给服务器，即会设置请求头的accept属性。
  //注意：dataType只能设置一个值(html xml text json script jsonp)
  //注意：accept可以设置多个值：text/json;text/html;application/json……
  dataType: 'json',
  //contentType: 内容格式。指的是你发送给服务器的数据格式,其实是设置Content-Type请求头属性
  //Content-Type默认值：application/x-www-form-urlencoded。大多数情况下，你不需要设置这个值
  //但是在上传文件时需要设置为：multipart/formdata
  //contentType: "text/json",
  //发送请求前的回调函数。
  //在这里可以设置一些请求前的准备工作，比如：在这里设置请求头或者取消本次请求
  //取消本次请求直接写：return false;
  beforeSend:function(xhr){
    //xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    return true;
  },
  //dataFilter: 过滤数据，即对服务器返回的数据进行处理。这里面有两个参数：
  //param1: 服务器返回的数据，原始数据。一般情况下ajax会自动帮我们处理
  //param2: 数据类型。该参数的值根据dataType属性而定。
  dataFilter: function(data,type){
    /*
     * 如何处理的
     * if(type == "json"){
     * 		var jsonData = $.parseJSON(data);
     * 		……
     * }
     * return jsonData;
     */
    return data;
  },
  //设置或者自定义请求头
  headers: {
    "name":"jxz"
  },
  //请求成功时回调
  success: function(data,status,xhr){
    console.dir(data);
  },
  //请求完成时回调
  //注意：不管是请求成功还是请求失败了，都是请求完成，也就是说都会回调该方法
  complete: function(xhr,status){
    console.log("请求完成了");
  },
  //请求出错时回调
  error: function(xhr,status,err){
    console.log(xhr.responseText);
    console.log(xhr.status);
    console.log(status);
    console.log(err);

    //假如是请求超时的错误
    if(err == 'timeout') {
      alert('请求超时了')
    }
  },
  //请求超时
  timeout: 20*1000
});
```

# JQ-AJAX传参总结

## $.get()请求传参

无论使用JQ中的 `$.ajax()`，还是使用 `$.get()`，又或者直接使用 xhr 对象发起 GET 请求，当需要携带参数的时候，本质上，都是直接将参数以查询字符串的形式，追加到 URL 地址的后面，发送到服务器的。

**1、拼接在url后面 **

```js
$.get('http://127.0.0.1:3000/login?username=张三&age=18').then(data=>{});
```

 **2、写在第二个参数 **

```js
$.get('http://127.0.0.1:3000/login',{username:'张三', age: 18}).then(data=>{});
$.get('http://127.0.0.1:3000/login','username=张三&age=18').then(data=>{});
```

 **3、通过 $('form').serialize() 获取表单元素的参数**

 $('form').serialize()得到的格式是： username=张三&age=18，直接放在第二个参数。

```js
$.get('http://127.0.0.1:3000/login',$('form').serialize()).then(data=>{});
```

**注意**：页面上需要添加form标签，并且input[type=text]、input[type=password]、input[type=radio]、input[type=checkbox]、select等表单元素必须添加name属性，否则会忽略该表单元素的值

## $.post()请求传参

 **1、写在第二个参数** 

```js
$.post('http://127.0.0.1:3000/regist',{username:'张三', age: 18}).then(data=>{});
$.post('http://127.0.0.1:3000/regist','username=张三&age=18').then(data=>{});
```

 **2、通过 $('form').serialize() 获取表单元素的参数**

得到的格式是： username=张三&age=18，直接放在第二个参数。

```js
$.post('http://127.0.0.1:3000/regist',$('form').serialize()).then(data=>{});
```

**注意**：页面上需要添加form标签，并且input[type=text]、input[type=password]、input[type=radio]、input[type=checkbox]、select等表单元素必须添加name属性，否则会忽略该表单元素的值。

## $.ajax()请求传参

$.ajax()传参放在配置对象的data属性中

```js
$.ajax({
  url: 'http://127.0.0.1:3000/api/post',
  method: 'POST',
  // 普通的数据key=value&key=value 和 {key:value} 可以直接放在data中传递
  // data: 'username=张三&age=12',
  data: { username: '张三', age: 22 },
  success (data) {
    console.log(data);
  },
  error (jqxhr, err) {
    console.log(err);
  }
});
```

## 使用formdata类型的数据

使用formdata主要用于文件上传，需要使用$.ajax()设置请求方法为POST，并且告诉JQ不要对数据进行处理，也不要设置请求头，此时在服务端POST请求中需要使用multer模块设置from.none()。

```js
var param = new FormData(document.forms[0]);
$.ajax({
  method: 'POST',
  url:'/regist',
  data: param,
  // 不对 FormData 中的数据进行 url 编码，而是将 FormData 数据原样发送到服务器
  
  processData: false,
  // 不修改 Content-Type 属性，使用 FormData 默认的 Content-Type 值
  contentType: false,
  success(data){
    console.log(' ajax data:', data);
  },
});
```

**注意**：页面上需要添加form标签，并且input[type=text]、input[type=password]、input[type=radio]、input[type=checkbox]、select等表单元素必须添加name属性，否则会忽略该表单元素的值

# 其他方法

## ajaxStart(callback)

Ajax 请求开始时，执行 ajaxStart 函数。可以在 ajaxStart 的 callback 中显示 loading 效果，示例代码如下：

```js
 // 自 jQuery 版本 1.8 起，该方法只能被附加到文档
 $(document).ajaxStart(function() {
     $('#loading').show()
 })
```

注意： $(document).ajaxStart() 函数会监听当前文档内所有的 Ajax 请求。

## ajaxStop(callback)

Ajax 请求结束时，执行 ajaxStop 函数。可以在 ajaxStop 的 callback 中隐藏 loading 效果，示例代码如下：

```js
 // 自 jQuery 版本 1.8 起，该方法只能被附加到文档
 $(document).ajaxStop(function() {
     $('#loading').hide()
 })
```

## ajaxSetup() 

ajaxSetup() 方法为将来的 AJAX 请求设置默认值。

```js
$.ajaxSetup({
  name:value, 
  name:value, ... 
})
```

该参数为带有一个或多个名称/值对的 AJAX 请求规定设置。

| 名称                         | 值/描述                                                      |
| :--------------------------- | :----------------------------------------------------------- |
| async                        | 布尔值，表示请求是否异步处理。默认是 true。                  |
| beforeSend(*xhr*)            | 发送请求前运行的函数。                                       |
| cache                        | 布尔值，表示浏览器是否缓存被请求页面。默认是 true。          |
| complete(*xhr,status*)       | 请求完成时运行的函数（在请求成功或失败之后均调用，即在 success 和 error 函数之后）。 |
| contentType                  | 发送数据到服务器时所使用的内容类型。默认是："application/x-www-form-urlencoded"。 |
| context                      | 为所有 AJAX 相关的回调函数规定 "this" 值。                   |
| data                         | 规定要发送到服务器的数据。                                   |
| dataFilter(*data*,*type*)    | 用于处理 XMLHttpRequest 原始响应数据的函数。                 |
| dataType                     | 预期的服务器响应的数据类型。                                 |
| error(*xhr,status,error*)    | 如果请求失败要运行的函数。                                   |
| global                       | 布尔值，规定是否为请求触发全局 AJAX 事件处理程序。默认是 true。 |
| ifModified                   | 布尔值，规定是否仅在最后一次请求以来响应发生改变时才请求成功。默认是 false。 |
| jsonp                        | 在一个 jsonp 中重写回调函数的字符串。                        |
| jsonpCallback                | 在一个 jsonp 中规定回调函数的名称。                          |
| password                     | 规定在 HTTP 访问认证请求中使用的密码。                       |
| processData                  | 布尔值，规定通过请求发送的数据是否转换为查询字符串。默认是 true。 |
| scriptCharset                | 规定请求的字符集。                                           |
| success(*result,status,xhr*) | 当请求成功时运行的函数。                                     |
| timeout                      | 设置本地的请求超时时间（以毫秒计）。                         |
| traditional                  | 布尔值，规定是否使用参数序列化的传统样式。                   |
| type                         | 规定请求的类型（GET 或 POST）。                              |
| url                          | 规定发送请求的 URL。默认是当前页面。                         |
| username                     | 规定在 HTTP 访问认证请求中使用的用户名。                     |
| xhr                          | 用于创建 XMLHttpRequest 对象的函数。                         |


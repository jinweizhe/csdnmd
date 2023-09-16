响应头部中可以携带一个Access-Control-Allow-Origin字段
其中,origin参数的值指定了允许访问该资源的外域URL。
**示例代码:**
```js
//下面的字段值将只允许来自http://itcast.cn的请求
res.setHeader( 'Access-Control-Allow-origin','http:/litcast.cn')
//如果指定了Access-Control-Allow-Origin字段的值为通配符*，表示允许来自任何域的请求
res.setHeader( 'Access-Control-Allow-origin','*')
```

默认情况下，CORS仅支持客户端向服务器发送如下的9个请求头:（注意:多个请求头之间使用英文的逗号进行分割）
Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width ,Content-Type(值仅限于text/plain、multipart/form-data、application/x-www-form-urlencoded 三者之一)
如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过Access-Control-Allow-Headers对额外的请求头进行声明，否则这次请求会失败!

默认情况下，CORS仅支持客户端发起GET、POST、HEAD请求。
如果客户端希望通过PUT、DELETE等方式请求服务器的资源，则需要在服务器端，通过Access-Control-Alow-Methods来指明实际请求所允许使用的HTTP方法。
**示例代码:**
```js
//只允许POST\GET\DELETE\HEAD 请求方法
res.setHeader('Access-Control-Allow_methods','POST,GET,DELETE,HEAD')
//允许所有的HTTP请求方法
res.setHeader('Access-Control-Allow_methods','*')
```

CORS请求的分类
客户端在请求CORS接口时，根据请求方式和请求头的不同，可以将CORS的请求分为两大类分别是:
简单请求
同时满足以下两大条件的请求，就属于简单请求:
    1.请求方式:GET、POST、HEAD三者之一
    2.HTTP头部信息不超过以下几种字段:无自定义头部字段、Accept、Accept-Language、Content-Language、DPR.Downlink、Save-Data、Viewport-Width、Width 、Content-Type (只有三个值application/x-www-form-urlencoded、multipart/form-data、text/plain)

    预检请求(在浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这一次的OPTION请求称为“预检请求”。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。)
    只要符合以下任何一个条件的请求，都需要进行预检请求:
    1.请求方式为GET、POST、HEAD之外的请求Method类型
    2.请求头中包含自定义头部字段
    3.向服务器发送了application/json格式的数据


简单请求和预检请求的区别：
简单请求的特点:客户端与服务器之间只会发生一次请求。
预检请求的特点:客户端与服务器之间会发生两次请求，OPTION预检请求成功之后，才会发起真正的请求。
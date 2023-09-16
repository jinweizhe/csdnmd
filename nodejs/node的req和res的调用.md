> 通常req用作传递给函数和方法的参数，而res则是函数的执行结果或者回调信息。

## request对象

> request 对象有“请求，需求，要求”的意思，表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性
> 常见属性有：
```
req.app 当callback为外部文件时，用req.app访问express的实例

req.baseUrl: 获取路由当前安装的URL路径

req.body /req.cookie 获得请求主体/cookies

req.fresh /req.stale 判断请求是否还新鲜

req.hostname / req.ip 获取主机名和IP地址

req.originalUrl 获取原始请求URL

req.path 获取请求路径

req.protocol 获取协议类型

req.route 获取当前匹配的路由

req.get 获取指定的http请求头

req.is 判断请求头Content-Type的MIME类型
```

## response对象

> response 对象有 “响应，反应，答复”的意思，表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据
```
res.app 同req.app 一样

res.append() 追加指定HTTP头

res.set() 在res.append()后将重置之前设置的头

res.cookie() 设置cookie

res.clearCookie() 清除cookie

res.download() 传送指定路径的文件

res.get() 返回指定的http头

res.json() 传送json响应

res.jsonp() 传送jsonp的响应

res.location() 只设置响应Location HTTP头，不设置状态码

res.redirect() 设置响应到location htpp头 ，设置状态吗302

res.render 渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。

res.send() 传送http响应

res.set() 设置http头，传入obj可以一次设置多个头

res.status() 设置hppt状态码

res.type() 设置content-type 的mime类型
```
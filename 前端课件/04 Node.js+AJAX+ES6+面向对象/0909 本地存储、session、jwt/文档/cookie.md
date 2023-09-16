# 什么是cookie

HTTP协议本身是无状态的。HTTP协议自身不对请求和响应之间的通信状态进行保存。

无状态是指Web浏览器与Web服务器之间不需要建立持久的连接，这意味着当一个客户端向服务器端发出请求，然后Web服务器返回响应（Response），连接就被关闭了，在服务器端不保留连接的有关信息。

可是，随着Web的不断发展，因无状态而导致业务处理变得棘手的情况增多了。比如，用户登录到一家购物网站，即使他跳转到该站的其他页面后，也需要能继续保持登录状态。针对这个实例，网站为了能够掌握是谁送出的请求，需要保存用户的状态。HTTP/1.1虽然是无状态协议，但为了实现期望的保持状态功能，于是引入了cookie技术。有了cookie再用HTTP协议通信，就可以管理状态了。

cookie实际上是一小段的文本信息（key-value格式）。客户端向服务器发起请求，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个cookie。客户端浏览器会把cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该cookie一同提交给服务器。服务器检查该cookie，以此来辨认用户状态。

cookie分为临时cookie和长久cookie：

- 如果一个cookie没有设置有效期，那么浏览器在关闭时就会删除这个cookie，这种cookie叫做临时cookie
- 如果cookie设置了有效期，那么浏览器会一直保存这个cookie，直到有效期为止，这种cookie叫做长久cookie。

#  cookie机制

cookie是一种浏览器缓存技术，能让服务器在用户的浏览器中存储数据，由服务器端生成，发送给User-Agent（一般是浏览器），服务端可以在响应头中添加 Set-cookie 字段，将cookie值发送给客户端，浏览器在收到这个响应时，会自动将cookie保存起来，浏览器会将cookie的key/value保存到某个目录下的文本文件内，以后每次发送请求时，会将这个cookie附带在请求头的cookie字段中发给服务器。

当用户第一次访问并登陆一个网站的时候，cookie的设置以及发送会经历以下4个步骤：

1. 客户端发送一个请求到服务器
2. 服务器发送一个Http Response响应到客户端，其中包含Set-cookie的头部
3. 客户端保存cookie，之后向服务器发送请求时，Http Request请求中会包含一个cookie的头部 
4. 服务器返回响应数据

![image-20220221232025121](https://s2.loli.net/2022/02/21/d4BJG3hUTQO1XVs.png)

# 在服务端操作cookie

express直接提供了创建cookie：res.cookie(); 和删除cookie：res.clearCookie();的函数。

也可以使用设置请求头的函数：res.setHeader("Set-Cookie",`key=value;key=value`);只是这个方法手动拼接字符串比较麻烦。

用express中自带的方法设置res.cookie，express就会将其填入Response Header中的Set-cookie，达到设置cookie的作用。

## cookie的创建

```js
res.cookie(name, value [, options]);
```

- name：字符串，cookie的名字
- value：字符串，可以是字符串或转换为 JSON 的对象。如果是Object会在cookie.serialize()之前自动调用JSON.stringify对其进行处理
- options：参数是一个可以具有以下属性的对象

options可使用的属性如下：

| 属性       | 类型            | 描述                                                         |
| ---------- | --------------- | ------------------------------------------------------------ |
| `domain`   | String          | cookie 的域名。默认为应用的域名。控制跟cookie关联的域名。这样可以将cookie分配给特定的子域名。注意，不能给cookie设置跟服务器所用域名不同的域名，因为那样它什么也不会做。 |
| `encode`   | Function        | 用于 cookie 值编码的同步函数。默认为`encodeURIComponent`.    |
| `expires`  | Date            | 以GMT为标准 cookie 的到期时间。如果未指定或设置为 0，则创建会话 cookie。即关闭浏览器后，这个cookie会被浏览器删除。 |
| `httpOnly` | Boolean         | 设置为true表明这个cookie只能由服务器修改。也就是说客户端JavaScript不能修改它。这有助于防范XSS攻击。 |
| `maxAge`   | Number          | 设置cookie过期的时间，指明从现在开始，多少毫秒以后，cookie到期。如果你省略了这一选项，浏览器关闭时cookie就会被删掉。（也可以用expires指定cookie过期的日期，但语法很麻烦。建议用maxAge。） |
| `path`     | String          | 设置cookie的路径。默认为“/”。注意，路径会隐含地通配其后的路径。如果用的路径是/，它会应用到网站的所有页面上。如果用的路径是/foo，它会应用到/foo、/foo/bar等路径上。 |
| `secure`   | Boolean         | 指定该cookie只通过安全（HTTPS）连接发送。默认为false         |
| `signed`   | Boolean         | 指示是否应该对 cookie 进行签名。设为true会对这个cookie签名，这样就需要用res.signedCookies而不是res.cookies访问它。被篡改的签名cookie会被服务器拒绝，并且cookie值会重置为它的原始值。类型Boolean，默认为false。express会使用req.secret来完成签名，需要cookie-parser配合使用 |
| `sameSite` | Boolean或String | **Set-Cookie**属性的值。                                     |

### cookie的过期时间

设置了有效期的cookie叫做持久化cookie，浏览器会保存到cookie过期为止。浏览器会将cookie持久化，即写到对应的cookie文件中（每个浏览器存储的位置不一致）。无论客户关闭了浏览器还是电脑，只要还在maxAge设定时间之前，登录网站时该cookie仍然有效。下面设置的cookie将在24小时候后失效：

```js
res.cookie("username",req.query.username,{
  maxAge:1000*60*60*24,
});
```

当maxAge属性为负数或者0，表示立即删除cookie

如果不指明指明 cookie有效时间，则表示该cookie只是一个临时cookie，不会被持久化，仅在本浏览器窗口或者本窗口打开的子窗口中有效，关闭浏览器后该cookie立即失效。下面设置的cookie将在关闭浏览器时失效：

```js
res.cookie("age",req.query.age);
```

### Cookie的域名

Cookie是不可以跨域名的，隐私安全机制禁止网站非法获取其他网站的Cookie。

正常情况下，同一个一级域名下的两个二级域名也不能交互使用Cookie，比如 `video.baidu.com` 和 `news.baidu.com`，因为二者的域名不完全相同。如果想要 `baidu.com` 名下的二级域名都可以使用该Cookie，需要设置Cookie的domain参数为**`.baidu.com`**，这样使用 `video.baidu.com` 和 `news.baidu.com`就能访问同一个cookie。

> 一级域名又称为顶级域名，一般由字符串+后缀组成。熟悉的一级域名有baidu.com，qq.com。com，cn，net等均是常见的后缀。
>  二级域名是在一级域名下衍生的，比如有个一级域名为 baidu.com，则 video.baidu.com 和news.baidu.com 均是其衍生出来的二级域名。

## cookie的删除

```js
 res.clearCookie(name [, options]);
```

- name：字符串，cookie的名字
- options：参照res.cookie()的options取值

```js
res.cookie('name', 'tobi', { path: '/admin' })
res.clearCookie('name', { path: '/admin' })
```

注意：使用 res.clearCookie()删除cookie的时候，只有在给定的选项与res.cookie()的选项相同时，Web浏览器和其他兼容客户端才会清除cookie。

## cookie的获取

设置cookie之后，下次访问同一个网站下一个页面时，该cookie就被浏览器带回

一、直接获取请求头req.headers.cookie

req.headers.cookie得到的是一段键值对拼接的字符串，比如：设置cookie "username=Tom; age=20;"取值不太方便

```js
var cookie = req.headers.cookie;

// NMTID=00O_TN8wGne1gfhiUUWuBEBiK47KgsAAAF65c_gVw; Hm_lvt_e8002ef3d9e0d8274b5b74cc4a027d08=1628500272; SID=s%3ADhnKQSaafdtC5Y65x-4P2L9YRbv3lG9W.kakzzVwJfH%2BNbYUk5Rboinu%2B8oriRRz4ncatb2Bm17o; age=12; username=Tom
```

二、使用cookie-parser模块

cookie-parser是处理cookie的中间件，用户请求时可以通过req.cookies来读取cookie

```js
var cookieParser = require('cookie-parser');

app.use(cookieParser());

var cookieObj = req.cookies;

{
  NMTID: '00O_TN8wGne1gfhiUUWuBEBiK47KgsAAAF65c_gVw',
  Hm_lvt_e8002ef3d9e0d8274b5b74cc4a027d08: '1628500272',
  SID: 's:DhnKQSaafdtC5Y65x-4P2L9YRbv3lG9W.kakzzVwJfH+NbYUk5Rboinu+8oriRRz4ncatb2Bm17o',
  age: '12',
  username: 'Tom'
}
```

# 在客户端操作cookie

一、直接获取，得到也是cookie字符串

```js
var cookie = document.cookie;

// NMTID=00O_TN8wGne1gfhiUUWuBEBiK47KgsAAAF65c_gVw; Hm_lvt_e8002ef3d9e0d8274b5b74cc4a027d08=1628500272; username=Tom; age=12
```

二、在客户端使用jQuery插件：jquery.cookie.js 来操作cookie 

jquery.cookie.js下载：http://plugins.jquery.com/cookie/

```javascript
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
```

1. 添加一个"会话cookie"

```javascript
$.cookie('name', 'value');
```

这里没有指明 cookie有效时间，所创建的cookie有效期默认到用户关闭浏览器为止，所以被称为 “会话cookie（session cookie）”。

2. 创建一个cookie并设置有效时间为 7天

```javascript
$.cookie('name', 'value', { expires: 7 });
```

这里指明了cookie有效时间，所创建的cookie被称为“持久 cookie （persistent cookie）”。注意单位是：天；

3. 创建一个cookie并设置 cookie的有效路径

```javascript
$.cookie('name', 'value', { expires: 7, path: '/' });
```

在默认情况下，只有设置 cookie的网页才能读取该 cookie。如果想让一个页面读取另一个页面设置的cookie，必须设置cookie的路径。cookie的路径用于设置能够读取 cookie的顶级目录。将这个路径设置为网站的根目录，可以让所有网页都能互相读取 cookie （一般不要这样设置，防止出现冲突）。

4. 读取cookie

```javascript
$.cookie('name');
```

5. 删除cookie

```javascript
$.removeCookie('name');   
```

6. 可选参数

```javascript
$.cookie('name','value',{
  expires:7,  
  path:'/',
  domain:'jquery.com',
  secure:true
})
```

- expires：（Number|Date）有效期；设置一个整数时，单位是天；也可以设置一个日期对象作为Cookie的过期日期；
- path：（String）创建该Cookie的页面路径；
- domain：（String）创建该Cookie的页面域名；
- secure：（Booblean）如果设为true，那么此Cookie的传输会要求一个安全协议，例如：HTTPS；

注意：cookie是基于域名来储存的。要放到测试服务器上或者本地localhost服务器上才会生效。cookie具有不同域名下储存不可共享的特性。单纯的本地一个html页面打开是无效的。
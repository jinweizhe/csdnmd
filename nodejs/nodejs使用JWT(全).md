# Token

token表示令牌，用户的登录凭证。

基于 Token 的身份验证方法，使用基于 Token 的身份验证方法，在服务端不需要存储用户的登录记录。大概的流程是这样的：

- 客户端使用用户名
- 跟密码请求登录
- 服务端收到请求，去验证用户名与密码
- 验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
- 客户端收到 Token 以后可以把它存储起来，比如放在 Cookie 里或者 Local Storage 里
- 客户端每次向服务端请求资源的时候需要带着服务端签发的 Token
- 服务端收到请求，然后去验证客户端请求里面带着的 Token，如果验证成功，就向客户端返回请求的数据

这种基于token的认证方式相比传统的session认证方式更节约服务器资源，并且对移动端和分布式更加友好。其优点如下：

- 支持跨域访问：cookie是无法跨域的，而token由于没有用到cookie(前提是将token放到请求头中)，所以跨域后不会存在信息丢失问题
- 无状态：token机制在服务端不需要存储session信息，因为token自身包含了所有登录用户的信息，所以可以减轻服务端压力
- 更适用CDN：可以通过内容分发网络请求服务端的所有资料
- 更适用于移动端：当客户端是非浏览器平台时，cookie是不被支持的，此时采用token认证方式会简单很多
- 无需考虑CSRF：由于不再依赖cookie，所以采用token认证方式不会发生CSRF，所以也就无需考虑CSRF的防御

而`JWT`就是上述流程当中`token`的一种具体实现方式，其全称是`JSON Web Token`，官网地址：https://jwt.io/

很多大型网站也都在用，比如 Facebook，Twitter，Google+，Github 等等，比起传统的身份验证方法，Token 扩展性更强，也更安全点，非常适合用在 Web 应用或者移动应用上。Token 的中文有人翻译成 “令牌”，我觉得挺好，意思就是，你拿着这个令牌，才能过一些关卡。

# JWT是什么

JWT（JSON Web Token），本质就是一个字符串书写规范，如下图，它是将用户信息保存到一个JSON字符串中，然后进行编码后得到一个`JWT token`，**并且这个`JWT token`带有签名信息，接收后可以校验是否被篡改**，所以可以用于在作用是用来在用户和服务器之间传递安全可靠的信息：

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/b9fe711f7fb1396a6bb0ceefb366d993.png#pic_center)


在目前前后端分离的开发过程中，使用`token`鉴权机制用于身份验证是最常见的方案，认证流程如下：

1. 首先，前端通过Web表单将自己的用户名和密码发送到后端的接口，这个过程一般是一个POST请求。建议的方式是通过SSL加密的传输(HTTPS)，从而避免敏感信息被嗅探
2. 后端核对用户名和密码成功后，将包含用户信息的数据作为JWT的Payload，将其与JWT Header分别进行Base64编码拼接后签名，形成一个JWT Token
3. 后端将JWT Token字符串作为登录成功的结果返回给前端。前端可以将返回的结果保存在浏览器中，退出登录时删除保存的JWT Token即可
4. 前端在每次请求时将JWT Token放入HTTP请求头中的Authorization属性中(解决XSS和XSRF问题)
5. 后端检查前端传过来的JWT Token，验证其有效性，比如检查签名是否正确、是否过期、token的接收方是否是自己等等
6. 验证通过后，后端解析出JWT Token中包含的用户信息，进行其他逻辑操作(一般是根据用户信息得到权限等)，返回结果

![](https://img-blog.csdnimg.cn/img_convert/2d0a36d98b6c764ba1e076311b0b22ba.png#pic_center)




# 为什么要用JWT

## 传统Session认证的弊端

我们知道HTTP本身是一种无状态的协议，这就意味着如果用户向我们的应用提供了用户名和密码来进行用户认证，认证通过后HTTP协议不会记录下认证后的状态，那么下一次请求时，用户还要再一次进行认证，因为根据HTTP协议，我们并不知道是哪个用户发出的请求，所以为了让我们的应用能识别是哪个用户发出的请求，我们只能在用户首次登录成功后，在服务器存储一份用户登录的信息，这份登录信息会在响应时传递给浏览器，告诉其保存为cookie，以便下次请求时发送给我们的应用，这样我们的应用就能识别请求来自哪个用户了，这是传统的基于session认证的过程

![](https://img-blog.csdnimg.cn/img_convert/b85ea5a19c513c81531fa722bf09ab9e.png#pic_center)


然而，传统的session认证有如下的问题：

- 每个用户的登录信息都会保存到服务器的session中，随着用户的增多，服务器开销会明显增大
- 由于session是存在与服务器的物理内存中，所以在分布式系统中，这种方式将会失效。虽然可以将session统一保存到Redis中，但是这样做无疑增加了系统的复杂性，对于不需要redis的应用也会白白多引入一个缓存中间件
- 对于非浏览器的客户端、手机移动端等不适用，因为session依赖于cookie，而移动端经常没有cookie
- 因为session认证本质基于cookie，所以如果cookie被截获，用户很容易收到跨站请求伪造攻击。并且如果浏览器禁用了cookie，这种方式也会失效
- 前后端分离系统中更加不适用，后端部署复杂，前端发送的请求往往经过多个中间件到达后端，cookie中关于session的信息会转发多次
- 由于基于Cookie，而cookie无法跨域，所以session的认证也无法跨域，对单点登录不适用

## JWT认证的优势

对比传统的session认证方式，JWT的优势是：

- 简洁：JWT Token数据量小，传输速度也很快
- 因为JWT Token是以JSON加密形式保存在客户端的，所以JWT是跨语言的，原则上任何web形式都支持
- 不需要在服务端保存会话信息，也就是说不依赖于cookie和session，所以没有了传统session认证的弊端，特别适用于分布式微服务
- 单点登录友好：使用Session进行身份认证的话，由于cookie无法跨域，难以实现单点登录。但是，使用token进行认证的话， token可以被保存在客户端的任意位置的内存中，不一定是cookie，所以不依赖cookie，不会存在这些问题
- 适合移动端应用：使用Session进行身份认证的话，需要保存一份信息在服务器端，而且这种方式会依赖到Cookie（需要 Cookie 保存 SessionId），所以不适合移动端

因为这些优势，目前无论单体应用还是分布式应用，都更加推荐用JWT token的方式进行用户认证

# JWT结构

JWT分成了三部分，头部（Header）、载荷（Payload）、签名（Signature），在传输的时候，会将JWT的3部分分别进行Base64编码后用`.`进行连接形成最终传输的字符串，其中头部和载荷都是以`JSON`格式存放数据，只是进行了编码。

```js
JWTString=Base64(Header).Base64(Payload).HMACSHA256(base64UrlEncode(header)+"."+base64UrlEncode(payload),secret)
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/9fb31ca66831cf2d4947c7f871faf2d1.png#pic_center)


## header

**JWT头**是一个描述JWT元数据的JSON对象，alg属性表示签名使用的算法，默认为HMAC SHA256（写为HS256）；typ属性表示令牌的类型，JWT令牌统一写为JWT。

```js
{  "alg": "HS256",  "typ": "JWT" } 
```

因为JWT是字符串，最后使用Base64 URL算法将上述JSON对象转换为字符串保存，编码后字符串如下：

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9        
```

## payload

**有效载荷**部分，是JWT的主体内容部分，也是一个**JSON对象**，包含需要传递的数据。 JWT指定七个默认字段供选择

```json
{
  iss：发行人
  exp：到期时间
  sub：主题
  aud：用户
  nbf：在此之前不可用
  iat：发布时间
  jti：JWT ID用于标识该JWT
}
```

这些预定义的字段并不要求强制使用。除以上默认字段外，我们还可以自定义私有字段，一般会把包含用户信息的数据放到payload中，例如用户的`id`和`name`，默认情况下也会携带令牌的签发时间`iat`，通过还可以设置过期时间，如下：

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

同样进行Base64编码后，字符串如下：

```http
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
```

> 请注意，**默认情况下JWT是未加密的，因为只是采用base64算法，拿到JWT字符串后可以转换回原本的JSON数据，任何人都可以解读其内容，因此不要构建隐私信息字段，比如用户的密码一定不能保存到JWT中**，以防止信息泄露。**JWT只是适合在网络中传输一些非敏感的信息**

## Signature

签名哈希部分是对上面两部分数据签名，需要使用base64编码后的header和payload数据，通过指定的算法生成哈希，以确保数据不会被篡改。首先，需要指定一个密钥（secret）。该密码仅仅为保存在服务器中，并且不能向用户公开。然后，使用header中指定的签名算法（默认情况下为HMAC SHA256）根据以下公式生成签名

```js
Signature = HMACSHA256(base64Url(header)+.+base64Url(payload),secretKey)
```

一旦前面两部分数据被篡改，只要服务器加密用的密钥没有泄露，得到的签名肯定和之前的签名不一致

在计算出签名哈希后，JWT头，有效载荷和签名哈希的三个部分组合成一个字符串，每个部分用`.`分隔，就构成整个JWT对象
![在这里插入图片描述](https://img-blog.csdnimg.cn/img_convert/2831644abac59cffc5d203f6fb0636d1.png#pic_center)


注意JWT每部分的作用，在服务端接收到客户端发送过来的JWT token之后：

- header和payload可以直接利用base64解码出原文，从header中获取哈希签名的算法，从payload中获取有效数据
- signature由于使用了不可逆的加密算法，无法解码出原文，它的作用是校验token有没有被篡改。服务端获取header中的加密算法之后，利用该算法加上secretKey对header、payload进行加密，比对加密后的数据和客户端发送过来的是否一致。注意secretKey只能保存在服务端，而且对于不同的加密算法其含义有所不同，一般对于MD5类型的摘要加密算法，secretKey实际上代表的是盐值

# 如何实现

`Token`的使用分成了两部分：

- 生成token：登录成功的时候，颁发token
- 验证token：访问某些资源或者接口时，验证token

## 生成 token

借助第三方库`jsonwebtoken`，通过`jsonwebtoken` 的 `sign` 方法生成一个 `token`：

```js
const jwt = require('jsonwebtoken');

jwt.sign(Payload, secretkey, option)
```

- 第一个参数指的是 Payload
- 第二个是秘钥，服务端特有
- 第三个参数是 option，可以定义 token 过期时间，单位是秒

## 校验token

使用 `jwt.verify(token, secretkey, (error, data)=>{})` 进行验证

- secret 必须和 sign 时候保持一致

## 登录注册实例

### 服务端

#### 定义生成token和校验token的函数

创建jwt.js模块，定义生成token和校验token的函数

```js
const jwt = require('jsonwebtoken');
const secretkey = 'howdoyoudo'; //密钥

// 生成token
const sign = (data={}) => {
	return jwt.sign(data, secretkey, {
		expiresIn: 60*60,
	});
};

// 验证token
const verify = (req, res, next) => {
	let authorization = req.headers.authorization || req.body.token || req.query.token || '';
	let token = '';
	if (authorization.includes('Bearer')) {
		token = authorization.replace('Bearer ', '');
	} else {
		token = authorization;
	}

  jwt.verify(token, secretkey, (error, data) => {
		if (error) {
			res.json({ error: 1, data: 'token验证失败' });
		} else {
			req._id = data._id;
			next();
		}
	});
};

module.exports = {
	sign,
	verify,
};
```

#### 登录成功生成token

```js
const router = require('express').Router();
const md5 = require('md5');

const User = require('../modules/user');
const jwt = require('../modules/jwt');

// 登录成功生成token
router.post('/login', (req, res)=>{
  User
  .findOne({username:req.body.username})
  .exec()
  .then(data=>{
    if (data) {
      if (data.password == md5(req.body.password)) {
        res.json({
          error:0, 
          data: '登录成功',
          token: jwt.sign({ _id: data._id }),// 生成token，并传入用户_id
        });
      }else{
        res.json({error:1, data: '密码错误'});
      }
    } else {
      res.json({error:1, data: '用户名不存在，请先注册'});
    }
  });
});
```

#### 在需要登录验证的方法中挂载验证函数

```js
router.get('/user', jwt.verify, (req, res)=>{
  User.findOne({_id: req._id}).exec().then(data=>{
    res.json({
      error: 0, 
      data: JSON.parse(JSON.stringify(data)) 
    });
  });
});

```

### 客户端

#### 登录成功保存token

在客户端接收到`token`后，一般情况会通过`localStorage`进行缓存

```js
localStorage.setItem('token', data.token);
```

#### 请求的过程中携带token

然后将`token`放到`HTTP`请求头`Authorization` 中，关于`Authorization` 的设置，前面要加上 [Bearer](https://segmentfault.com/q/1010000019185053/a-1020000019185166) ，注意后面带有空格：

[JWT规范](https://jwt.io/introduction/)

```js
axios({
  method: 'GET',
  url: '/user',
  headers: {
    Authorization: localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : '',
  }
}).then(res => {
  $('#login-box').html(template('login-template', res.data))
});
```

# session 和 jwt 对比

基于 session 都是需要服务端存储的，而 JWT 是不需要服务端来存储的，总结如下：

**1、基于 session 和 cookie 的认证和鉴权模式有什么好与不好的地方呢？**

缺点 ：

1. 容易遇到跨域问题。不同域名下是无法通过 session 直接来做到认证和鉴权的。 

2. 分布式部署的系统，需要使用共享 session 机制 

3. 容易出现 [CSRF](https://baike.baidu.com/item/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0/13777878?fromtitle=CSRF&fromid=2735433&fr=aladdin) 问题。

优点：

1. 方便灵活，服务器端直接创建一个 sessionid，下发给客户端，客户端请求携带 sessionid 即可。

2. session 存储在服务端，更加安全。 

3. 便于服务端清除 session，让用户重新授权一次。

**2、JWT 与 session 有什么区别呢？**

JWT 是基于客户端存储的一种认证方式，然而 session 是基于服务端存储的一种认证方式

优点：

- JWT具有通用性，所以可以跨域
- 组成简单，字节占用小，便于传输
- 服务端无需保存会话信息，很容易进行水平扩展
- 一处生成，多处使用，可以在分布式系统中，解决单点登录问题
- 可防护[CSRF](https://baike.baidu.com/item/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0/13777878?fromtitle=CSRF&fromid=2735433&fr=aladdin)攻击

缺点：

- 无法清除认证 token。由于 JWT 生成的 token 都是存储在客户端的，不能有服务端去主动清除，只有直到失效时间到了才能清除。除非服务端的逻辑做了改变。
- 存储在客户端，相对服务端，安全性更低一些。当 JWT 生成的 token 被破解，我们不便于清除该 token。

- payload部分仅仅是进行简单编码，所以只能用于存储逻辑必需的非敏感信息
- 需要保护好加密密钥，一旦泄露后果不堪设想
- 为避免token被劫持，最好使用https协议

**html用户界面代码:**
```html
<script>
			// 判断登录成功，获取用户信息，然后把用户信息展示到页面上
			// token放在请求头中，传递给服务端，需要知道在axios中怎么在请求头中设置token

			getUser();
			function getUser() {
				const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
				// 在请求头设置token
				// Authorization 字段名是固定的，约定的一种名字，服务端一般给的名字都是这个
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

				axios.get('http://127.0.0.1:3000/user').then(res => {
					const data = res.data;
					console.log('获取用户信息的结果 data: ', data);
					box.innerHTML = template('user', data);
					if (data.error == 0) {
						logout();
					}
				});
			}

			function logout() {
				const logoutBtn = document.querySelector('.logout');
				logoutBtn.onclick = function () {
					// 退出登录，无需发送请求，直接在浏览器删除token即可
					localStorage.removeItem('token');
					getUser();
				};
			}
		</script>
```
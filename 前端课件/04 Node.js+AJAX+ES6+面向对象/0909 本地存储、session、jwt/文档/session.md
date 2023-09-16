

# 什么是session

session是保存在**服务器**端的会话。session的典型应用场景是用户登录某网站之后，将其登录信息放入session，在以后的每次请求中查询相应的登录信息以确保该用户合法。比如购物车等等经典场景。

# 为什么使用 session 

谈及session一般是在web应用的背景之下，我们知道web应用是基于HTTP协议的，而HTTP协议恰恰是一种无状态协议。也就是说，用户从A页面跳转到B页面会重新发送一次HTTP请求，而服务端在返回响应的时候是无法获知该用户在请求B页面之前做了什么的。

而正是这种web动态化的需求，给HTTP协议提出了一个难题：一个无状态的协议怎样才能关联两次连续的请求呢？也就是说无状态的协议怎样才能满足有状态的需求呢？

此时有状态是必然趋势而协议的无状态性也是木已成舟，因此我们需要一些方案来解决这个矛盾，来保持HTTP连接状态，于是出现了cookie和session。

session是另一种记录客户状态的机制，不同的是Cookie保存在客户端浏览器中，而session运行在服务器端，session保存在服务器上。

当客户端第一次访问服务器时，可以将客户的登录信息保存。当客户端再次访问时，可以从该Session中查找该客户的信息，判断客户的登录状态，做出提示，相当于登录拦截。

session可以和数据库等结合做持久化操作，当服务器挂掉时也不会导致某些客户信息（购物车）丢失。

# session的工作流程 

当浏览器访问服务器并发送第一次请求时，服务器端会创建一个session对象，生成一个类似于key/value的键值对， 然后将key(cookie)返回到浏览器(客户)端，浏览器下次再访问时，携带key(cookie)，找到对应的session(value)。 客户的信息都保存在session中。 

# session的生命周期

由于session是存在服务器端数据库的，所以的它的生命周期可以持久化，而不仅限于浏览器关闭的时间。具体是由cookie.maxAge 决定：如果maxAge设定是1个小时，那么从这个因浏览器访问服务器导致session创建开始后，session会一直保存在服务器端，即使浏览器关闭，session也会继续存在。如果此时服务器宕机，只要开机后数据库没发生不可逆转的破坏，maxAge时间没过期，那么session是可以继续保持的。

当maxAge时间过期后，session会自动的数据库中移除，对应的还有浏览器的cookie。不过，由于connect-mongo的特殊机制（每1分钟检查一次过期session），session的移除可能在时间上会有一定的滞后。

当然，由于cookie是由浏览器厂商实现的，cookie不具有跨浏览器的特性，例如，我用firefox浏览器在京东上购物时，勾选了2周内免密码输入，但是当我第一次用IE登陆京东时，同样要重新输入密码。所以，这对服务器的同一个操作，不同的浏览器发起的请求，会产生不同的session-cookie。

# session与cookie的关系

上面提到解决HTTP协议自身无状态的方式有cookie和session。二者都能记录状态，前者是将状态数据保存在客户端，后者则保存在服务端。

# cookie和session优缺点及应用场景：

## 应用场景

Cookie的典型应用场景是Remember Me服务，即用户的账户信息通过cookie的形式保存在客户端，当用户再次请求匹配的URL的时候，账户信息会被传送到服务端，交由相应的程序完成自动登录等功能。当然也可以保存一些客户端信息，比如页面布局以及搜索历史等等。

Session的典型应用场景是用户登录某网站之后，将其登录信息放入session，在以后的每次请求中查询相应的登录信息以确保该用户合法。当然还是有购物车等等经典场景；

## 安全性

cookie将信息保存在客户端，如果不进行加密的话，无疑会暴露一些隐私信息，安全性很差，一般情况下敏感信息是经过加密后存储在cookie中，但很容易就会被窃取。而session只会将信息存储在服务端，如果存储在文件或数据库中，也有被窃取的可能，只是可能性比cookie小了太多。

Session安全性方面比较突出的是存在会话劫持的问题，这是一种安全威胁，这在下文会进行更详细的说明。总体来讲，session的安全性要高于cookie；

## 性能

Cookie存储在客户端，消耗的是客户端的I/O和内存，而session存储在服务端，消耗的是服务端的资源。但是session对服务器造成的压力比较集中，而cookie很好地分散了资源消耗，就这点来说，cookie是要优于session的；

## 时效性

Cookie可以通过设置有效期使其较长时间内存在于客户端，而session一般只有比较短的有效期（用户主动销毁session或关闭浏览器后引发超时）；

## 其他

Cookie的处理在开发中没有session方便。而且cookie在客户端是有数量和大小的限制的，而session的大小却只以硬件为限制，能存储的数据无疑大了太多。

# session的使用

在nodejs中使用session， 可以借助express-session模块，express-session 会话模块是基于express框专门用于处理session的中间件，将会话数据存储在服务器上：默认存储位置内存存储(服务器端)。

```js
const session = require('express-session');
```

将express-session中间件用use挂载后，express-session可以自动为http请求生成session对象，保存在req.session中，我们可以很方便的通过req参数来存储和访问session对象的数据。

```js
app.use(session(options));
```

options可选参数:

- cookie：会话 ID cookie 的设置对象。默认值为 `{ path: '/', httpOnly: true, secure: false, maxAge: null }`

  - cookie.domain：指定`Domain` `Set-Cookie`属性的值。默认情况下，没有设置域，大多数客户端会认为 cookie 仅适用于当前域。

  - cookie.expires：设置cookie过期时间。默认情况下，没有设置过期时间，大多数客户端会认为这是一个“非持久性 cookie”，并会在退出 Web 浏览器应用程序等条件下将其删除。

    - **注意** 如果选项中同时设置了`expires`和`maxAge`，则使用对象中定义的最后一个。

    - **注意**该` expires`选项不应直接设置；而是仅使用该`maxAge` 选项。

  - cookie.httpOnly：指定属性的`boolean`值。如果为真，`HttpOnly`则设置属性，否则不设置。默认情况下，该`HttpOnly` 属性已设置。

  - cookie.maxAge：设置过期时间

  - cookie.path：设置cookie的路径，默认情况下，它设置为`'/'`，这是域的根路径。

  - cookie.secure：指定属性的`boolean`值。如果为真，`Secure`则设置属性，否则不设置。默认情况下，该`Secure` 属性未设置。

- name：设置cookie的名字。默认：connect.sid
- proxy：设置安全 cookie 时信任反向代理（通过”x-forwarded-proto” header ）。默认值为`undefined`。
  - `true`将使用“X-Forwarded-Proto”标头。
  - `false`所有标头都将被忽略，并且仅当存在直接 TLS/SSL 连接时，该连接才被认为是安全的。
  - `undefined`使用 express 的“信任代理”设置
- resave：强制保存session即使它并没有变化 （默认 true，建议设置成false）
- rolling：在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
- saveUninitialized：强制将未初始化的session存储。当新建了一个session且未设定属性或值时，它就处于
  未初始化状态。在设定一个cookie前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的。（默认：true）
- secret：**必需选项**，用它来对session cookie签名，防止篡改。

- store：session存储实例，默认是内存存储。

- unset：控制req.session是否取消（例如通过 delete，或者将它的值设置为null）。这可以使session保持存储状态但忽略修改或删除的请求（默认：keep）
  - `'destroy'`响应结束时会话将被销毁（删除）。
  - `'keep'`将保留存储中的会话，但在请求期间所做的修改将被忽略且不保存。

session默认存储位置内存存储，有时候需要session的生命周期要长一点，比如：免密码两周内自动登录的功能。基于这个需求，session必须寻找内存之外的存储载体，数据库能提供完美的解决方案。express框架提供了针对mongodb的中间件：connect-mongo，设置为数据库存储后， express 的会自动管理session的存储、更新和删除。

```js
const MongoStore = require('connect-mongo');
```

示例：

```js
app.use(
	session({
		name: 'testapp',
		secret: 'mynodeapp',
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 1000 * 60 * 10,
		},
		rolling: true,
		store: MongoStore.create({
			mongoUrl: 'mongodb://127.0.0.1/zy-ajax',
		}),
	})
);

router.post('/login', (req, res) => {
  if (/* */) {
    // 把用户信息保存到session中
    req.session.user = JSON.parse(JSON.stringify(data));
    res.json({ error: 0, data: '登录成功！' });
  } else {
    res.json({ error: 1, data: '登录失败！' });
  }
});

router.get('/user', (req, res) => {
  // 取出用户信息使用
	if (req.session.user) {
		res.json({ error: 1, data: '获取用户信息' });
	} else {
		res.json({ error: 1, data: '请先登录' });
	}
});
```


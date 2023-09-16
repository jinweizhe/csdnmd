# 概述


Express是目前最流行的基于Node.js的Web开发框架，可以快速地搭建一个完整功能的网站。

Express中文网：http://www.expressjs.com.cn/

## Express的安装与使用

Express上手非常简单，首先新建一个项目目录，假定叫做hello-world，然后在hello-world目录下使用npm init初始化项目。

```
npm init
```

npm init会新建一个package.json文件，内容如下。

```json
{
  "name": "node-app",
  "version": "1.0.0",
  "description": "这是第一个nodejs项目",
  "main": "app.js",
  "scripts": {
    "test": "server"
  },
  "author": "金西振",
  "license": "ISC",
}
```

然后，就可以安装express模块了。

```
$ npm install express
```

安装后模块默认保存位置是项目目录中 node_modules 文件夹。安装的模块会被作为依赖项写入项目的配置文件package.json中。

```json
{
  "name": "node-app",
  "version": "1.0.0",
  "description": "这是第一个nodejs项目",
  "main": "app.js",
  "scripts": {
    "test": "server"
  },
  "author": "金西振",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.2"
  }
}
```

执行上面的命令以后，在项目根目录下，新建一个启动文件app.js。

```js
// 导入项目所需要的模块包
var express = require('express');

// 创建服务器对象
var app = express();

// 配置服务器静态文件夹
app.use(express.static('public'));

// 启动服务器(.listen)，假定端口为3000
app.listen(3000);  
```

然后，运行上面的启动脚本。

```
node app
```

现在就可以访问`http://localhost:3000`，它会在浏览器中打开当前目录的public子目录（严格来说，是打开public目录的index.html文件）。

**项目配置步骤：**

- 在终端使用cd 进入项目文件夹目录

- 使用npm init 初始化项目

- 下载项目所需要的模块，我们使用express模块， npm install express --save

- 创建应用入口文件 app.js，然后编写代码，在app.js中我们需要
  - 导入项目所需要的模块包
  - 创建服务器对象
  - 配置服务器静态文件夹
  - 编写服务器的各个接口
- 启动服务器(.listen)，假定端口为3000：使用 node 运行服务器文件app.js， node app
- 在浏览器输入：IP地址 + 端口号/文件目录的方式访问
  - 比如：127.0.0.1:3000 默认打开index.html文件
  - 127.0.0.1:3000/img/1.jpg 打开图片

**如果想关闭服务使用： ctrl + c 可以关闭该服务**

## 托管静态资源

静态资源：通常是一些浏览器可以直接访问或是下载的文件，不需要服务端参与处理，比如.jpg、 .png、 .css、 .js、.doc、.html等这类的资源，他们可以通过express.static内置中间件来设置静态资源的服务器。

比如使用`app.use(express.static('public')); `设置的public目录就是静态资源度武器。如果public目录之中有一个图片文件`my_image.png`，那么可以用`http://localhost:3000/my_image.png`访问该文件。

> Express 在静态目录查找文件，因此，存放静态文件的目录名不会出现在 URL 中。

如果要使用多个静态资源目录，请多次调用 `express.static` 中间件函数：

```javascript
app.use(express.static('public'))
app.use(express.static('files'))
```

访问静态资源文件时，`express.static` 中间件函数会根据目录的添加顺序查找所需的文件。

## 动态数据的生成

动态数据：通常都是`/` 、`/user`等不带后缀名的url，他们需要通过路由来进行处理。

路由定义采用以下结构：

```js
app.method(path, handler)
```

- app：express的实例
- MTHOD：http请求方法的小写，比如：app.get()、app.post()
- path：请求的url地址
- handler：当路由被匹配的时候执行的函数，该函数有两个参数request和response，分别表示请求对象和响应对象

可以在app.js之中，生成动态网页。

```js
// app.js

var express = require('express');
var app = express();

// 访问 /
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>');
});

app.listen(3000);
```

然后，在命令行下运行启动脚本，就可以在浏览器中访问项目网站了。

```
$ node app
```

上面代码会在本机的3000端口启动一个网站，网页显示Hello World。

启动脚本app.js的`app.get`方法，用于指定不同的访问路径所对应的回调函数，这叫做“路由”（routing）。上面代码只指定了根目录的回调函数，因此只有一个路由记录。实际应用中，可能有多个路由记录。

```js
// index.js

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});

// 访问 /login 
app.get('/login',function(req,res){
    res.send('<h1>欢迎来到登录界面</h1>');
})

// 访问 /regist
app.get('/regist',function(req,res){
    res.send('<h1>欢迎来到注册界面</h1>');
})

app.listen(3000);
```

## nodemon

在编写调试 Node.js 项目的时候，如果修改了项目的代码：app.js及导入到app.js相关模块的代码，则需要频繁的手动关掉服务器，然后再重新启动，非常繁琐。

nodemon是一种工具，它能够监听项目文件的变动，当代码被修改后，nodemon 会自动帮我们重启项目，极大方便了开发和调试。

nodemon地址：https://www.npmjs.com/package/nodemon

在终端中，运行如下命令，即可将 nodemon 安装为全局可用的工具：

```
npm i nodemon -g
```

当基于 Node.js 编写了一个网站应用的时候，传统的方式，是运行 node app 命令，来启动项目。这样做的坏处是：代码被修改之后，需要手动重启项目。

现在，我们可以将 node 命令替换为 nodemon 命令，使用 nodemon app.js 来启动项目。这样做的好处是：代码被修改之后，会被 nodemon 监听到，从而实现自动重启项目的效果。

```
node app

#使用nodemon替代node启动项目

nodemon app
```

# 运行原理

Express框架建立在node.js内置的http模块上。http模块生成服务器的原始代码如下。

```js
var http = require("http");

var app = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello world!");
});

app.listen(3000, "localhost");
```

上面代码的关键是http模块的createServer方法，表示生成一个HTTP服务器实例。该方法接受一个回调函数，该回调函数的参数，分别为代表HTTP请求和HTTP回应的request对象和response对象。

Express框架的核心是对http模块的再包装。上面的代码用Express改写如下。

```js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(3000);
```

比较两段代码，可以看到它们非常接近。原来是用`http.createServer`方法新建一个app实例，现在则是用Express的构造方法，生成一个Epress实例。两者的回调函数都是相同的。Express框架等于在http模块之上，加了一个中间层。

# 请求处理管线

express服务器在收到一个请求之后，会将这个请求放入请求处理管线，从管线入口开始逐个寻找能够匹配上(url路径和请求方式都要匹配)的请求处理函数，找到能够匹配的处理函数，就用这个处理函数处理本次请求，不再主动继续向下寻找。

app服务器对象，从创建到开启监听，中间可以通过use添加多个请求处理函数，服务器收到的所有请求都会按照顺序依次经过这些处理函数。请求处理函数中有三个参数，第一个req表示请求报文，第二个res表示响应报文，第三个next表示请求处理管线中下一个请求处理函数，如果本函数后面没有下一个函数，则next参数为空。

```js
// app.use方法，作用是在请求处理管线中添加一个无匹配条件的请求处理函数，任何请求都要经过它处理。
app.use(function (req, res, next) {
	console.log('hello from 1');
	// 请求处理函数，还有第三个参数，第三个参数是一个函数，表示继续在请求处理管线中向下寻找能够匹配的处理函数。
	//当前的方法没有结束请求-响应的循环，需要将处理通过next()传递给下一个回调函数，否则请求就会处于挂起的状态
	next();
});

app.use(function (req, res, next) {
	console.log('hello from 2');
	next();
});
```

app.get和app.post，都能够在请求处理管线中添加一个请求处理函数，这样添加的处理函数，必须请求方式和url路径都匹配上才能处理请求。

app.get添加接口，实质上是在请求处理管线中添加一个请求处理函数，这个函数内部会判断请求的路径是不是本接口路径，如果是，就调用.get所指定的处理函数，如果不是，则立刻调用next。

```js
app.use(function (req, res, next) {
	if (req.url == '/login') {
		res.send('hello from login');
	} else {
		next();
	}
});

```

如果所有请求都没有响应任何结果，请求处理管线中最后一个处理函数，要返回404页面。

```js
app.use(function (req, res, next) {
	res.status(404);
	res.send('404 not found');
});
```

/ 代表的意思是网站的根目录，也就是网站的首页.

```js
app.get('/', function (req, res) {
	res.send('hello world');
});
```

路由
在web开发中，“route”是指用户在访问某一个url的时候，要分配到对应的处理函数。可以通过url的变化实现页面的变化；

路由有对应的url，用户可以直接收藏url来对页面进行分享，路由与普通的js实现的显隐实现页面切换的区别:路由支持分享、链接、收藏；

路由句柄:可以为请求处理提供多个回调函数，

路由句柄有多种形式，可以是一个函数、一个函数数组，或者是两者混合，如下所示.

```js
// 1.使用一个回调函数处理路由
app.get('/news/a', function (req, res) {
	res.send('hello from A');
});

// 2.使用多个回调函数处理路由（记得指定 next 对象）：
app.get(
	'/news/b',
	function (req, res, next) {
		// res.send('hello from B');
		console.log('请求将由下一个函数处理 next 1');

		next();
	},
	function (req, res, next) {
		console.log('请求将由下一个函数处理 next 2');
		// res.send('hello from B');
		next();
	},
	function (req, res) {
		res.send('hello from B');
	}
);

// 3.使用回调函数数组处理路由：
var cb1 = function (req, res, next) {
	console.log('Hello from CB1');
	next();
};
var cb2 = function (req, res, next) {
	console.log('Hello from CB2');
	next();
};
var cb3 = function (req, res) {
	res.send('Hello from CB3');
};
app.get('/news/c', [cb1, cb2, cb3]);

// 4.混合函数和数组的方式处理路由
app.get(
	'/news/d',
	[cb1, cb2],
	function (req, res, next) {
		console.log('hello from next');
		next();
	},
	function (req, res) {
		res.send('hello from d');
	}
);
```

总结：在路由的处理函数中，要调用响应对象的方法(比如：res.send)向客户端返回响应，终止请求-响应的循环，如果在路由句柄中一个方法也不调用，来自客户端的请求会一直挂起。

记住，服务端一定要在最后将处理结果返回给客户端，以后再出现挂起的情况，首先要检查callback里面是否有返回结果的调用

# 中间件

## 什么是中间件

Express 是一个自身功能极简，完全是由路由和中间件构成一个的 web 开发框架：从本质上来说，一个 Express 应用就是在调用各种中间件。

中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。

简单说，中间件（middleware）就是处理HTTP请求的函数。它最大的特点就是，一个中间件处理完，再传递给下一个中间件。App实例在运行过程中，会调用一系列的中间件。

每个中间件可以从App实例，接收三个参数，依次为request对象（代表HTTP请求）、response对象（代表HTTP回应），next回调函数（代表下一个中间件）。每个中间件都可以对HTTP请求（request对象）进行加工，并且决定是否调用next方法，将request对象再传给下一个中间件。

中间件的功能包括：

- 执行任何代码。
- 修改请求和响应对象。
- 终结请求-响应循环。
- 调用堆栈中的下一个中间件。
- 如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。

一个不进行任何操作、只传递request对象的中间件，就是下面这样。

```js
function uselessMiddleware(req, res, next) {
  next();
}
```

上面代码的next就是下一个中间件。如果它带有参数，则代表抛出一个错误，参数为错误文本。

```js
function uselessMiddleware(req, res, next) {
  next('出错了！');
}
```

抛出错误以后，后面的中间件将不再执行，直到发现一个错误处理函数为止。

## use方法

use是express注册中间件的方法，它返回一个函数。下面是一个连续调用两个中间件的例子。

```js
var express = require("express");
var http = require("http");

var app = express();

app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

app.use(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello world!\n");
});

http.createServer(app).listen(1337);
```

上面代码使用`app.use`方法，注册了两个中间件。收到HTTP请求后，先调用第一个中间件，在控制台输出一行信息，然后通过`next`方法，将执行权传给第二个中间件，输出HTTP回应。由于第二个中间件没有调用`next`方法，所以request对象就不再向后传递了。

`use`方法内部可以对访问路径进行判断，据此就能实现简单的路由，根据不同的请求网址，返回不同的网页内容。

```js
var express = require("express");
var http = require("http");

var app = express();

app.use(function(request, response, next) {
  if (request.url == "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Welcome to the homepage!\n");
  } else {
    next();
  }
});

app.use(function(request, response, next) {
  if (request.url == "/about") {
    response.writeHead(200, { "Content-Type": "text/plain" });
  } else {
    next();
  }
});

app.use(function(request, response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404 error!\n");
});

http.createServer(app).listen(1337);
```

上面代码通过`request.url`属性，判断请求的网址，从而返回不同的内容。注意，`app.use`方法一共登记了三个中间件，只要请求路径匹配，就不会将执行权交给下一个中间件。因此，最后一个中间件会返回404错误，即前面的中间件都没匹配请求路径，找不到所要请求的资源。

除了在回调函数内部判断请求的网址，use方法也允许将请求网址写在第一个参数。这代表，只有请求路径匹配这个参数，后面的中间件才会生效。无疑，这样写更加清晰和方便。

```js
app.use('/path', someMiddleware);
```

上面代码表示，只对根目录的请求，调用某个中间件。

因此，上面的代码可以写成下面的样子。

```js
var express = require("express");
var http = require("http");

var app = express();

app.use("/home", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Welcome to the homepage!\n");
});

app.use("/about", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Welcome to the about page!\n");
});

app.use(function(request, response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404 error!\n");
});

http.createServer(app).listen(1337);
```

## 中间件的使用

### 中间件的调用流程

当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。

![image-20220218231630162](https://s2.loli.net/2022/02/18/NR8XQjVgsS7OzaK.png)

Express 的中间件，本质上就是一个 function 处理函数，Express 中间件的格式如下：

```js
app.use(function (req, res, next) {
	console.log('hello from 1');
	//当前的方法没有结束请求-响应的循环，需要将处理通过next()传递给下一个回调函数，否则请求就会处于挂起的状态
	next();
});
```

注意：中间件函数的形参列表中，必须包含 next 参数。而路由处理函数中只包含 req 和 res。

next 函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。

![image-20220218232146808](C:/Users/Jinxizhen/AppData/Roaming/Typora/typora-user-images/image-20220218232146808.png)

### 中间件函数

中间件函数就是一个带有req, res, next形参的函数：

```js
function cb(req, res, next) {
	console.log('hello cb');

	next();
}
```

### 全局中间件

客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。

通过调用 app.use(中间件函数)，即可定义一个全局生效的中间件，示例代码如下：

```js
app.use(cb);
```

也可以直接把函数写在app.use中

```js
app.use(function (req, res, next) {
	console.log('hello cb');

	next();
});
```

### 中间件的作用

多个中间件之间，共享同一份 req 和 res。基于这样的特性，我们可以在上游的中间件中，统一为 req 或 res 对象添加自定义的属性或方法，供下游的中间件或路由进行使用。

![image-20220218232945434](https://s2.loli.net/2022/02/18/zWgCrQtfIjEvGBc.png)

可以使用 app.use() 连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用，示例代码如下：

```js
app.use(function (req, res, next) {
	console.log('hello 1');

	next();
});

app.use(function (req, res, next) {
	console.log('hello 1');

	next();
});

// 请求 /login 会依次执行上面两个中间件
app.get('/login', function (req, res) {

});

```

### 局部中间件

不使用 app.use() 定义的中间件，叫做局部生效的中间件，示例代码如下：

```js
var cb1 = function (req, res, next) {
	console.log('Hello from CB1');
	next();
};

// cb1中间件只在访问 /news/a 的时候生效
app.get('/news/a', cb1, function (req, res) {
	res.send('hello from a');
});

// cb1中间件不影响下面的路由
app.get('/news/b',function (req, res) {
	res.send('hello from b');
});
```

定义多个局部中间件

```js
var cb1 = function (req, res, next) {
	console.log('Hello from CB1');
	next();
};
var cb2 = function (req, res, next) {
	console.log('Hello from CB2');
	next();
};

// 1.  使用多个参数处理
app.get('/news/a', cb1, cb2, function (req, res) {
	res.send('hello from a');
});

var cb3 = function (req, res) {
	res.send('Hello from CB3');
}
// 2.使用回调函数数组处理
app.get('/news/b', [cb1, cb2, cb3]);
 
// 3.混合函数和数组的方式处理
app.get('/news/c',[cb1, cb2], function (req, res, next) {
		console.log('hello from next');
		next();
	},
	function (req, res) {
		res.send('hello from d');
	}
);
```

## 中间件种类

Express 应用可使用如下几种中间件：

- 内置中间件
- 应用级中间件
- 路由级中间件
- 错误处理中间件
- 第三方中间件

### 内置中间件

自 Express 4.16.0 版本开始，Express 内置了 3 个常用的中间件，极大的提高了 Express 项目的开发效率和体验：

1. express.static 快速托管静态资源的内置中间件，例如： HTML 文件、图片、CSS 样式等（无兼容性）
2. express.json 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
3. express.urlencoded 解析 URL-encoded 格式：x-www-form-urlencoded的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）

```js
app.use(express.static('public'));

app.use(express.static('uploads'));
```

### 应用级中间件

应用级中间件绑定到 app 对象，使用 app.use() 和 app.METHOD()， 其中， METHOD 是需要处理的 HTTP 请求的方法，例如 GET, PUT, POST 等等，全部小写。

没有挂载路径的中间件，应用的每个请求都会执行该中间件。

app.use 每个请求过来的时候都会优先执行里面的代码：

```js
app.use(function (req, res, next) {
    console.log('Time:', new Date().toLocaleString());
    next();
});
```

指向 /user 的get请求

```js
app.get('/user',function (req, res) {
    res.send('hello user')
});
```

### 路由级中间件

路由级中间件和应用级中间件一样，只是它绑定的对象为 express.Router()。

```js
var router = express.Router();
```

没有挂载路径的中间件，通过该路由的每个请求都会执行该中间件

```js
router.use(function (req, res, next) {

  console.log('router Time:', new Date().toLocaleString());

  next();

});
```

挂载到 /login 的中间件

```js
router.get('/login',function (req, res, next) {

  res.send('hello login')
  
	next();
});
```

将路由挂至应用

```js
app.use('/api',router);

app.use(router);
```

### 错误处理中间件

错误级别中间件的**作用**：专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。

**格式**：错误级别中间件的 function 处理函数中，必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)。即使不需要 next 对象，也必须在签名中声明它，否则中间件会被识别为一个常规中间件，不能处理错误。

```js
app.use(function(err, req, res, next) {

 console.error(err.stack);

 res.status(500).send('Something broke!');

});
```

**注意：**错误级别的中间件，必须注册在所有路由之后！

### 第三方中间件

非 Express 官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件，为 Express 应用增加更多功能。在项目中，大家可以按需下载并配置第三方中间件，从而提高项目的开发效率。

安装所需功能的 node 模块，并在应用中加载，可以在应用级加载，也可以在路由级加载。

在 express@4.16.0 之前的版本中，经常使用 body-parser 这个第三方中间件，来解析请求体数据。使用步骤如下：

1. 运行 npm install body-parser 安装中间件

2. 使用 require 导入中间件

```js
var cookieParser = require('cookie-parser');
```

3. 调用 app.use() 注册并使用中间件

```js
app.use(bodyParser.urlencoded({ extended: false }));
```

注意：Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的

# Express的方法

## all方法和HTTP动词方法

针对不同的请求，Express提供了use方法的一些别名。比如，上面代码也可以用别名的形式来写。

```js
var express = require("express");
var http = require("http");
var app = express();

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("*", function(request, response) {
  response.end("404!");
});

http.createServer(app).listen(1337);
```

上面代码的all方法表示，所有请求都必须通过该中间件，参数中的“*”表示对所有路径有效。get方法则是只有GET动词的HTTP请求通过该中间件，它的第一个参数是请求的路径。由于get方法的回调函数没有调用next方法，所以只要有一个中间件被调用了，后面的中间件就不会再被调用了。

除了app.get方法以外，Express还提供app.post、app.put、app.delete方法，即HTTP动词都是Express的方法。

这些方法的第一个参数，都是请求的路径。除了绝对匹配以外，Express允许模式匹配。

```js
app.get("/hello/:who", function(req, res) {
  res.end("Hello, " + req.params.who + ".");
});
```

上面代码将匹配“/hello/alice”网址，网址中的alice将被捕获，作为req.params.who属性的值。需要注意的是，捕获后需要对网址进行检查，过滤不安全字符，上面的写法只是为了演示，生产中不应这样直接使用用户提供的值。

如果在模式参数后面加上问号，表示该参数可选。

```js
app.get('/hello/:who?',function(req,res) {
	if(req.params.id) {
    	res.end("Hello, " + req.params.who + ".");
	}
    else {
    	res.send("Hello, Guest.");
	}
});
```

下面是一些更复杂的模式匹配的例子。

```js
app.get('/forum/:fid/thread/:tid', middleware)

// 匹配/commits/71dbb9c
// 或/commits/71dbb9c..4c084f9这样的git格式的网址
app.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function(req, res){
  var from = req.params[0];
  var to = req.params[1] || 'HEAD';
  res.send('commit range ' + from + '..' + to);
});
```

## set方法

set方法用于指定变量的值。

```js
app.set("views", __dirname + "/views");

app.set("view engine", "jade");
```

上面代码使用set方法，为系统变量“views”和“view engine”指定值。

## request对象

**request**对象代表了一个HTTP请求，其具有一些属性来保存请求中的一些数据，比如**query string**，**parameters**，**body**，**HTTP headers**等等。这个对象总是简称为**req**(http响应简称为**res**)，但是它们实际的名字由这个回调方法在那里使用时的参数决定。 如下例子:

```js
app.get('/user/:id', function(req, res) {
    res.send('user' + req.params.id);
});
```

其实你也可以这样写：

```js
app.get('/user/:id', function(request, response) {
    response.send('user' + request.params.id);
});
```

### 属性

req.files 用于获取上传的文件。

在**Express 4**中，**req.files**默认在**req**对象中不再是可用的。为了通过**req.files**对象来获得上传的文件，你可以使用一个**multipart-handling**(多种处理的工具集)中间件，比如**busboy**，**multer**，**formidable**，**multipraty**，**connect-multiparty**或者**pez**。

#### req.app

这个属性持有**express**程序实例的一个引用，其可以作为中间件使用。

#### req.baseUrl

一个路由实例挂载的Url路径。

```
var greet = express.Router();
greet.get('/jp', function(req, res) {
    console.log(req.baseUrl); // greet
    res.send('Konichiwa!');
});
app.use('/greet', greet);
```

即使你使用的路径模式或者一系列路径模式来加载路由，**baseUrl**属性返回匹配的字符串，而不是路由模式。下面的例子，**greet**路由被加载在两个路径模式上。

```
app.use(['/gre+t', 'hel{2}o'], greet); // load the on router on '/gre+t' and '/hel{2}o'
```

当一个请求路径是**/greet/jp**，**baseUrl**是**/greet**，当一个请求路径是**/hello/jp**，**req.baseUrl**是**/hello**。 **req.baseUrl**和**app**对象的mountpath属性相似，除了**app.mountpath**返回的是路径匹配模式。

#### req.body

在请求的body中保存的是提交的一对对键值数据。默认情况下，它是**undefined**，当你使用比如**body-parser**和**multer**这类解析**body**数据的中间件时，它是填充的。 下面的例子，给你展示了怎么使用**body-parser**中间件来填充**req.body**。

```js
var app = require('express');
var bodyParser = require('body-parser');
var multer = require('multer')；// v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended:true})); // for parsing application/x-www-form-urlencoded
app.post('/profile', upload.array(), function(req, res, next) {
    console.log(req.body);
    res.json(req.body);
});
```

#### req.cookies

当使用cookie-parser中间件的时候，这个属性是一个对象，其包含了请求发送过来的cookies。如果请求没有带cookies，那么其值为{}。

```
// Cookie: name=tj
req.cookies.name
// => "tj"
```

#### req.hostname

包含了源自**Host**HTTP头部的**hostname**。

当**trust proxy**设置项被设置为启用值，**X-Forwarded-Host**头部被使用来代替**Host**。这个头部可以被客户端或者代理设置。

```
// Host: "example.com"
req.hostname
// => "example.com"
```

#### req.ip

req.ip 属性用于获得HTTP请求的IP地址。

```js
console.dir(req.ip)
// => '127.0.0.1'
```

#### req.params

一个对象，其包含了一系列的属性，这些属性和在路由中命名的参数名是一一对应的。例如，如果你有**/user/:name**路由，**name**属性可作为**req.params.name**。这个对象默认值为**{}**。

```
// GET /user/tj
req.params.name
// => "tj"
```

当你使用正则表达式来定义路由规则，捕获组的组合一般使用**req.params[n]**，这里的**n**是第几个捕获租。这个规则被施加在无名通配符匹配，比如**/file/\***的路由：

```
// GET /file/javascripts/jquery.js
req.params[0]
// => "javascripts/jquery.js"
```

#### req.path

包含请求URL的部分路径。

```
// example.com/users?sort=desc
req.path
// => "/users"
```

#### req.protocol

请求的协议，一般为**http**，当启用TLS加密，则为**https**。

当**trust proxy**设置一个启用的参数，如果存在**X-Forwarded-Proto**头部的话，其将被信赖和使用。这个头部可以被客户端或者代理设置。

```
req.ptotocol
// => "http"
```

#### req.query

一个对象，为每一个路由中的**query string**参数都分配一个属性。如果没有**query string**，它就是一个空对象，**{}**。

```js
// GET /search?q=tobi+ferret
req.query.q
// => "tobi ferret"
// GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
req.query.order
// => "desc"
req.query.shoe.color
// => "blue"
req.query.shoe.type
// => "converse"
```

#### req.route

当前匹配的路由，其为一串字符。比如：

```
app.get('/user/:id?', function userIdHandler(req, res) {
    console.log(req.route);
    res.send('GET')
})
```

前面片段的输出为:

```js
{ path:"/user/:id?"
    stack:
    [
        { handle:[Function:userIdHandler],
          name:"userIdHandler",
          params:undefined,
          path:undefined,
          keys:[],
          regexp:/^\/?$/i,
          method:'get'
        }
    ]
    methods:{get:true}
}
```

### 方法

#### req.accepts(types)

检查这个指定的内容类型是否被接受，基于请求的Accept HTTP头部。这个方法返回最佳匹配，如果没有一个匹配，那么其返回undefined(在这个case下，服务器端应该返回406和"Not Acceptable")。

type值可以是一个单的MIME type字符串(比如application/json)，一个扩展名比如json，一个逗号分隔的列表，或者一个数组。对于一个列表或者数组，这个方法返回最佳项(如果有的话)。

```js
// Accept: text/html
req.accepts('html');
// => "html"
// Accept: text/*, application/json
req.accepts('html');
// => "html"
req.accepts('text/html');
// => "text/html"
req.accepts(['json', 'text']);
// => "json"
req.accepts('application/json');
// => "application/json"
// Accept: text/*, application/json
req.accepts('image/png');
req.accepts('png');
// => undefined
// Accept: text/*;q=.5, application/json
req.accepts(['html', 'json']);
// => "json"
```

#### req.is(type)

如果进来的请求的**Content-type**头部域匹配参数**type**给定的**MIME type**，那么其返回**true**。否则返回**false**。

```js
// With Content-Type: text/html; charset=utf-8
req.is('html');
req.is('text/html');
req.is('text/*');
// => true
// When Content-Type is application/json
req.is('json');
req.is('application/json');
req.is('application/*');
// => true
req.is('html');
// => false
```

## response对象

**response**对象代表了当一个HTTP请求到来时，**Express**程序返回的HTTP响应。在本文档中，按照惯例，这个对象总是简称为**res**(http请求简称为**req**)，但是它们实际的名字由这个回调方法在那里使用时的参数决定。 例如：

```js
app.get('/user/:id', function(req, res) {
    res.send('user' + req.params.id);
});
```

这样写也是一样的：

```js
app.get('/user/:id', function(request, response) {
    response.send('user' + request.params.id);
});
```

### 属性

#### res.app

这个属性持有express程序实例的一个引用，其可以在中间件中使用。res.app和请求对象中的req.app属性是相同的。

#### res.headersSent

布尔类型的属性，指示这个响应是否已经发送HTTP头部。

```js
app.get('/', function(req, res) {
    console.log(res.headersSent); // false
    res.send('OK'); // send之后就发送了头部
    console.log(res.headersSent); // true
});
```

#### res.locals

一个对象，其包含了本次请求的响应中的变量和因此它的变量只提供给本次请求响应的周期内视图渲染里使用(如果有视图的话)。 其他方面，其和**app.locals**是一样的。

这个参数在导出请求级别的信息是很有效的，这些信息比如请求路径，已认证的用户，用户设置等等。

```js
app.use(function(req, res, next) {
    res.locals.user = req.user;
    res.locals.authenticated = !req.user.anonymous;
    next();
});
```

### 方法

#### res.cookie(name, value [,options])

设置**name**和**value**的**cookie**，**value**参数可以是一串字符或者是转化为json字符串的对象。

options是一个对象，其可以有下列的属性。

|   属性   |  类型   |                             描述                             |
| :------: | :-----: | :----------------------------------------------------------: |
|  domain  | String  |           设置cookie的域名。默认是你本app的域名。            |
| expires  |  Date   | cookie的过期时间，GMT格式。如果没有指定或者设置为0，则产生新的cookie。 |
| httpOnly | Boolean |            这个cookie只能被web服务器获取的标示。             |
|  maxAge  | String  |  是设置过去时间的方便选项，其为过期时间到当前时间的毫秒值。  |
|   path   | String  |                cookie的路径。默认值是**/**。                 |
|  secure  | Boolean |           标示这个cookie只用被**HTTPS**协议使用。            |
|  signed  | Boolean |                 指示这个cookie应该是签名的。                 |

> res.cookie()所作的都是基于提供的**options**参数来设置**Set-Cookie**头部。没有指定任何的**options**，那么默认值在**RFC6265**中指定。

使用实例：

```js
res.cookie('name', 'tobi', {'domain':'.example.com', 'path':'/admin', 'secure':true});
res.cookie('remenberme', '1', {'expires':new Date(Date.now() + 90000), 'httpOnly':true});
```

maxAge 是一个方便设置过期时间的方便的选项，其以当前时间开始的毫秒数来计算。下面的示例和上面的第二条功效一样。

```js
res.cookie('rememberme', '1', {'maxAge':90000}, "httpOnly":true);
```

你可以设置传递一个对象作为value的参数。然后其将被序列化为Json字符串，被bodyParser()中间件解析。

```js
res.cookie('cart', {'items':[1, 2, 3]});
res.cookie('cart', {'items':[1, 2, 3]}, {'maxAge':90000});
```

当我们使用cookie-parser中间件的时候，这个方法也支持签名的cookie。简单地，在设置options时包含signed选项为true。然后res.cookie()将使用传递给cookieParser(secret)的密钥来签名这个值。

```js
res.cookie('name', 'tobi', {'signed':true});
```

#### res.clearCookie(name [,options])

根据指定的**name**清除对应的cookie。更多关于**options**对象可以查阅**res.cookie()**。

```js
res.cookie('name', 'tobi', {'path':'/admin'});
res.clearCookie('name', {'path':'admin'});
```

#### res.download(path, [,filename], [,fn])

传输**path**指定文件作为一个附件。通常，浏览器提示用户下载。默认情况下，**Content-Disposition**头部"filename="的参数为**path**(通常会出现在浏览器的对话框中)。通过指定**filename**参数来覆盖默认值。

当一个错误发生时或者传输完成，这个方法将调用**fn**指定的回调方法。这个方法使用**res.sendFile()**来传输文件。

```js
res.download('/report-12345.pdf');
res.download('/report-12345.pdf', 'report.pdf');
res.download('report-12345.pdf', 'report.pdf', function(err) {
// Handle error, but keep in mind the response may be partially-sent
// so check res.headersSent
if (err) {
} else {
// decrement a download credit, etc.
}
});
```

#### res.end([data] [, encoding])

结束本响应的过程。这个方法实际上来自**Node**核心模块，具体的是response.end() method of http.ServerResponse。用来快速结束请求，没有任何的数据。如果你需要发送数据，可以使用res.send()和res.json()这类的方法。

```js
res.end();
res.status(404).end();
```

#### res.get(field)

返回**field**指定的HTTP响应的头部。匹配是区分大小写。

```js
res.get('Content-Type');
// => "text/plain"
```

#### res.json([body])

发送一个json的响应。这个方法和将一个对象或者一个数组作为参数传递给**res.send()**方法的效果相同。不过，你可以使用这个方法来转换其他的值到json，例如**null**，**undefined**。(虽然这些都是技术上无效的JSON)。

```js
res.json(null);
res.json({user:'tobi'});
res.status(500).json({error:'message'});
```

#### res.jsonp([body])

发送一个json的响应，并且支持JSONP。这个方法和res.json()效果相同，除了其在选项中支持JSONP回调。

```js
res.jsonp(null)
// => null
res.jsonp({user:'tobi'})
// => {"user" : "tobi"}
res.status(500).jsonp({error:'message'})
// => {"error" : "message"}
```

默认情况下，jsonp的回调方法简单写作callback。可以通过jsonp callback name设置来重写它。

下面是一些例子使用JSONP响应，使用相同的代码:

```js
// ?callback=foo
res.jsonp({user:'tobo'})
// => foo({"user":"tobi"})
app.set('jsonp callback name', 'cb')
// ?cb=foo
res.status(500).jsonp({error:'message'})
// => foo({"error":"message"})
```

#### res.redirect([status,] path)

重定向来源于指定**path**的URL，以及指定的HTTP status code **status**。如果你没有指定**status**，status code默认为"302 Found"。

```js
res.redirect('/foo/bar');
res.redirect('http://example.com');
res.redirect(301, 'http://example.com');
res.redirect('../login');
```

重定向也可以是完整的URL，来重定向到不同的站点。

```js
res.redirect('http://google.com');</p><p>
重定向也可以相对于主机的根路径。比如，如果程序的路径为<strong>http://example.com/admin/post/new</strong>，那么下面将重定向到<strong>http://example.com/admim</strong>:</p>
<pre>res.redirect('/admin');
```

重定向也可以相对于当前的URL。比如，来之于**http://example.com/blog/admin/**(注意结尾的**/**)，下面将重定向到**http://example.com/blog/admin/post/new**。

```
res.redirect('post/new');
```

如果来至于**http://example.com/blog/admin**（没有尾部**/**），重定向**post/new**，将重定向到**http://example.com/blog/post/new**。如果你觉得上面很混乱，可以把路径段认为目录(有'/')或者文件，这样是可以的。相对路径的重定向也是可以的。如果你当前的路径为**http://example.com/admin/post/new**，下面的操作将重定向到**http://example.com/admin/post**：

```
res.redirect('..');
```

**back**将重定向请求到referer，当没有**referer**的时候，默认为**/**。

```
res.redirect('back');
```

#### res.render(view [, locals] [, callback])

渲染一个视图，然后将渲染得到的HTML文档发送给客户端。可选的参数为:

- **locals**，定义了视图本地参数属性的一个对象。
- **callback**，一个回调方法。如果提供了这个参数，**render**方法将返回错误和渲染之后的模板，并且不自动发送响应。当有错误发生时，可以在这个回调内部，调用**next(err)**方法。

> 本地变量缓存使能视图缓存。在开发环境中缓存视图，需要手动设置为true；视图缓存在生产环境中默认开启。

```js
// send the rendered view to the client
res.render('index');
// if a callback is specified, the render HTML string has to be sent explicitly
res.render('index', function(err, html) {
    res.send(html);
});
// pass a local variable to  the view
res.render('user', {name:'Tobi'}, function(err, html) {
    // ...
});
```

#### res.send([body])

发送HTTP响应。

**body**参数可以是一个**Buffer**对象，一个字符串，一个对象，或者一个数组。比如：

```js
res.send(new Buffer('whoop'));
res.send({some:'json'});
res.send('<p>some html</p>');
res.status(404).send('Sorry, we cannot find that!');
res.status(500).send({ error: 'something blew up' });
```

对于一般的非流请求，这个方法可以执行许多有用的的任务：比如，它自动给Content-LengthHTTP响应头赋值(除非先前定义)，也支持自动的HEAD和HTTP缓存更新。

当参数是一个Buffer对象，这个方法设置Content-Type响应头为application/octet-stream，除非事先提供，如下所示:

```
res.set('Content-Type', 'text/html');
res.send(new Buffer('<p>some html</p>'));
```

当参数是一个字符串，这个方法设置Content-Type响应头为text/html：

```
res.send('<p>some html</p>');
```

当参数是一个对象或者数组，Express使用JSON格式来表示：

```
res.send({user:'tobi'});
res.send([1, 2, 3]);
```

#### res.sendStatus(statusCode)

设置响应对象的**HTTP status code**为**statusCode**并且发送**statusCode**的相应的字符串形式作为响应的Body。

```
res.sendStatus(200); // equivalent to res.status(200).send('OK');
res.sendStatus(403); // equivalent to res.status(403).send('Forbidden');
res.sendStatus(404); // equivalent to res.status(404).send('Not Found');
res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
```

如果一个不支持的状态被指定，这个HTTP status依然被设置为**statusCode**并且用这个code的字符串作为Body。

```
res.sendStatus(2000); // equivalent to res.status(2000).send('2000');
```

#### res.set(field [, value])

设置响应对象的HTTP头部**field**为**value**。为了一次设置多个值，那么可以传递一个对象为参数。

```
res.set('Content-Type', 'text/plain');
res.set({
    'Content-Type':'text/plain',
    'Content-Length':'123',
    'ETag':'123456'
})
```

其和res.header(field [,value])效果一致。

#### res.status(code)

使用这个方法来设置响应对象的HTTP status。其是Node中response.statusCode的一个连贯性的别名。

```
res.status(403).end();
res.status(400).send('Bad Request');
res.status(404).sendFile('/absolute/path/to/404.png');
```

## 搭建HTTPs服务器

使用Express搭建HTTPs加密服务器，也很简单。

```js
var fs = require('fs');
var options = {
  key: fs.readFileSync('E:/ssl/myserver.key'),
  cert: fs.readFileSync('E:/ssl/myserver.crt'),
  passphrase: '1234'
};

var https = require('https');
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World Expressjs');
});

var server = https.createServer(options, app);
server.listen(8084);
console.log('Server is running on port 8084');
```

# 路由

在 Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系。

## express的路由

Express 中的路由分 3 部分组成，分别是请求的类型、请求的 URL 地址、处理函数，格式如下：

```js
app.method('URL地址', 处理函数);
```

method对应http请求方法：get、post、put等，常用的是post和get，express中的路由：

```js
// 匹配GET请求，请求地址为  /login
app.get('/login', (req, res)=>{
  res.send('hello login');
});

// 匹配POST请求，请求地址为  /regist
app.post('/regist', (req, res)=>{
  res.send('hello regist');
});
```

## 路由的匹配过程

每当一个请求到达服务器之后，需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。

在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的 URL 同时匹配成功，则 Express 会将这次请求，转交给对应的 function 函数进行处理。

![image-20220218222942089](https://s2.loli.net/2022/02/18/I8q6YAS1ucXWGdf.png)

路由匹配的注意点：

- 按照定义的先后顺序进行匹配

- 请求类型和请求的URL同时匹配成功，才会调用对应的处理函数

## 路由的使用

在 Express 中使用路由最简单的方式，就是把路由挂载到 app 上，示例代码如下：

```js
// 匹配GET请求，请求地址为  /login
app.get('/login', (req, res)=>{
  res.send('hello login');
});

// 匹配POST请求，请求地址为  /regist
app.post('/regist', (req, res)=>{
  res.send('hello regist');
});
```

## 模块化路由

为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。
将路由抽离为单独模块的步骤如下：

1. 创建router文件夹，并在文件夹内创建路由模块对应的 index.js 文件
2. 在路由模块index.js中调用 require(‘express’).Router() 函数创建路由对象
3. 在路由模块index.js中向路由对象上挂载具体的路由
4. 在路由模块index.js中使用 module.exports 向外共享路由对象
5. 在app.js使用 app.use() 函数注册路由模块

### 创建路由模块

```js
// index.js

// 将路由单独写在一个模块中
var express = require('express');

// 获取路由对象
var router = express.Router();

// 一个路由对象像服务器对象app一样挂载路由
router.get('/', function (req, res) {
	res.send('hello world 首页');
});

router.get('/about', function (req, res) {
	res.send('hello world 关于');
});

// 导出路由模块
module.exports = router;
```

### 注册路由模块

```js
// 导入路由模块
var router = require('./router/index')
// 使用路由
// 路由对象本身也是一个中间件，可以被服务器对象使用。
// 在请求处理管线中添加路由，相当于把路由对象中的请求处理函数插入了请求处理管线，请求时会依次经过路由对象中所对应的请求处理函数。

// 使用路由时，如果不加路径参数，表示所有请求都要经过这个路由，如果添加了路径参数，只有请求路径是以路径参数开头的请求才会经过这个路由。
// 调用 index.js 中的 /about 接口，直接使用 /about
app.use(router);
```

### 为路由模块添加前缀

路由模块添加前缀的方式也非常简单：

```js
var router = require('./router/index')

//这句话的意思是：当用户去访问 /api 的时候，才会使用router文件夹下的index.js的路由规则
// 调用 index.js 中的 /about 接口，需要使用 /api/about
app.use('/api',router);
```

# Express.Router用法

从Express 4.0开始，路由器功能成了一个单独的组件`Express.Router`。它好像小型的express应用程序一样，有自己的use、get、param和route方法。

一个router对象是一个单独的实例关于中间件和路由。你可以认为其是一个"mini-application"（迷你程序），其具有操作中间件和路由方法的能力。每个Express程序有一个内建的app路由。 路由自身表现为一个中间件，所以你可以使用它作为app.use()方法的一个参数或者作为另一个路由的use()的参数。 

顶层的express对象有一个Router()方法，你可以使用Router()来创建一个新的router对象。

Router([options]) 可以创建一个路由：

```
var router = express.Router([options]);
```

首先，`Express.Router`是一个构造函数，调用后返回一个路由器实例。然后，使用该实例的HTTP动词方法，为不同的访问路径，指定回调函数；最后，挂载到某个路径。

```js
var router = express.Router();

router.get('/', function(req, res) {
  res.send('首页');
});

router.get('/about', function(req, res) {
  res.send('关于');
});

app.use('/', router);
```

上面代码先定义了两个访问路径，然后将它们挂载到根目录。如果最后一行改为app.use(‘/app’, router)，则相当于为`/app`和`/app/about`这两个路径，指定了回调函数。

这种路由器可以自由挂载的做法，为程序带来了更大的灵活性，既可以定义多个路由器实例，也可以为将同一个路由器实例挂载到多个路径。

## router.METHOD() 

router.METHOD(path, [callback, ...] callback) **方法提供了路由方法在**Express**中，这里的**METHOD**是HTTP方法中的一个，比如**GET**，**PUT**，**POST**等等，但**router**中的METHOD是小写的。所以，实际的方法是**router.get()**，**router.put()**，**router.post()**等等。

你可以提供多个回调函数，它们的行为和中间件一样，除了这些回调可以通过调用**next('router')**来绕过剩余的路由回调。你可以使用这个机制来为一个路由设置一些前提条件，如果请求没有满足当前路由的处理条件，那么传递控制到随后的路由。

下面的片段可能说明了最简单的路由定义。Experss转换path字符串为正则表达式，用于内部匹配传入的请求。在匹配的时候，是不考虑**Query strings**，例如，"GET /"将匹配下面的路由，"GET /?name=tobi"也是一样的。

```
router.get('/', function(req, res) {
    res.send('Hello World');
});
```

如果你对匹配的path有特殊的限制，你可以使用正则表达式，例如，下面的可以匹配"GET /commits/71dbb9c"和"GET /commits/71bb92..4c084f9"。

```
router.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function(req, res) {
    var from = req.params[0];
    var to = req.params[1];
    res.send('commit range ' + from + '..' + to);
});
```

## router.all()

router.all(path, [callback, ...] callback)方法和**router.METHOD()**方法一样，除了这个方法会匹配所有的HTTP动作。

这个方法对想映射全局的逻辑处理到特殊的路径前缀或者任意匹配是十分有用的。比如，如果你放置下面所示的这个路由在其他路由的前面，那么其将要求从这个点开始的所有的路由进行验证操作和自动加载用户信息。记住，这些全局的逻辑操作，不需要结束请求响应周期：**loaduser**可以执行一个任务，然后调用**next()**来将执行流程移交到随后的路由。

```
router.all('*', requireAuthentication, loadUser);
```

相等的形式:

```
router.all('*', requireAuthentication)
router.all('*', loadUser);
```

这是一个白名单全局功能的例子。这个例子很像前面的，不过其仅仅作用于以**/api**开头的路径:

```
router.all('/api/*', requireAuthentication);
```

## router.route()

router实例对象的route方法，可以接受访问路径作为参数。

```js
var router = express.Router();

router.route('/api')
	.post(function(req, res) {
		// ...
	})
	.get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err) res.send(err);
			res.json(bears);
		});
	});

app.use('/', router);
```

## router.use()

router.use([path], [function, ...] function) 给可选的path参数指定的路径挂载给定的中间件方法，未指定path参数，默认值为/。 这个方法类似于app.use()

use方法为router对象指定中间件，即在数据正式发给用户之前，对数据进行处理。下面就是一个中间件的例子。

```js
router.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});
```

上面代码中，回调函数的next参数，表示接受其他中间件的调用。函数体中的next()，表示将数据传递给下一个中间件。

注意，中间件的放置顺序很重要，等同于执行顺序。而且，中间件必须放在HTTP动词方法之前，否则不会执行。

## router.param()

router对象的param方法用于路径参数的处理，可以

```js
router.param('name', function(req, res, next, name) {
	// 对name进行验证或其他处理……
	console.log(name);
	req.name = name;
	next();
});

router.get('/hello/:name', function(req, res) {
	res.send('hello ' + req.name + '!');
});
```

上面代码中，get方法为访问路径指定了name参数，param方法则是对name参数进行处理。注意，param方法必须放在HTTP动词方法之前。

## app.route

假定app是Express的实例对象，Express 4.0为该对象提供了一个route属性。app.route实际上是express.Router()的缩写形式，除了直接挂载到根路径。因此，对同一个路径指定get和post方法的回调函数，可以写成链式形式。

```js
app.route('/login')
	.get(function(req, res) {
		res.send('this is the login form');
	})
	.post(function(req, res) {
		console.log('processing');
		res.send('processing the login form!');
	});
```

上面代码的这种写法，显然非常简洁清晰。

# 使用Express处理http请求

## GET请求

通过 app.get() 方法，可以监听客户端的 GET 请求，具体的语法格式如下：

```js
// 参数1: 客户端请求的url地址
// 参数2：请求对应的处理函数
//   req：请求对象
//   res：响应对象

app.get('url', function(req, res){  /*处理函数*/ })
```

get请求例子：

服务端

```js
var express = require('express');
var app = express();

app.use(express.static('public'));


// req：request 客户端发送的请求，包含本次请求的参数，用来处理客户端发送的数据
// res：response 服务器做出的响应，包含本次响应的数据，用来处理服务器发给客户端的数据
app.get('/user', function (req, res) {
	// get请求的参数放在url的后面，通过query查询的是url后边请求参数的部分
	console.log(req.query);
	var name = req.query.username;
	var age = req.query.age;
	console.log('name=' + name + ' age=' + age);

	// res.status(200).send(req.query);
	res.send('<h2>个人资料提交成功</h2>' + '姓名：' + name + '<br>' + '年龄：' + age);
});

// 监听3000端口
app.listen(3000, function () {
	console.log('服务器开启中...');
});
```

客户端

```html
<!--
创建一个form表单，表单有两个功能，
  1：可以让用户输入一些信息，然后收集用户输入的数据，
  2：把数据提交给服务器，所谓提交就是通过调用服务器的某个接口(接口：http://127.0.0.1:3000/login)，把数据传给服务器。

在form表单中提交数据时，按钮的type类型需设置为submit
	action：就是要访问的接口地址 url，比如 http://127.0.0.1:3000/login
	method：就是本次提交的请求方法：GET：get请求；POST：post请求
-->
<!-- <form action="http:127.0.0.1:3000/login" method="GET"> -->
<!--
get方法请求的的参数是拼接在url后面：
	ip:端口号/资源路径?参数名1=参数值&参数名2=参数值
	http://127.0.0.1:3000/user?username=jinxizhen&age=28 
-->
<form action="http://127.0.0.1:3000/user" method="GET">
  <!-- 表单元素都有一个name属性，设置了name属性的元素，在表单提交时，用户输入的数据会作为本次发送请求的参数发给服务器，参数名就是name的值，参数值就是用户输入的内容 -->
  <!-- 如果表单元素没有设置name属性，那么表单提交时，其中的数据就不会发送给服务器 -->
  <input type="text" name="username" placeholder="请输入姓名">
  <br>
  <input type="text" name="age" placeholder="请输入年龄">
  <br>
  <input type="radio" name="sex" value="男">男
  <input type="radio" name="sex" value="女">女
  <br>
  <input type="submit" value="提交">
</form>
```

## POST请求

通过 app.post() 方法，可以监听客户端的 POST 请求，具体的语法格式如下：

```js
// 参数1: 客户端请求的url地址
// 参数2：请求对应的处理函数
//   req：请求对象
//   res：响应对象

app.post('url', function(req, res){  /*处理函数*/ })
```

post请求的例子：

服务端

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

// 监听3000端口
app.listen(3000,function(){
    console.log('服务器开启中...');
});
```

客户端

```html
<!-- post 请求的参数是放在请求体内 -->
<form action="/user" method="POST">
  <input type="text" name="username" placeholder="请输入姓名">
  <br><br>
  <input type="text" name="age" placeholder="请输入年龄">
  <br><br>
  <input type="submit" value="提交">
</form>
```

## 获取URL中的动态参数

通过 req.params 对象，可以访问到 URL 中，通过 **:** 匹配到的动态参数：

```js
// http请求的参数，除了可以使用get参数和post参数之外，还可以通过路由路径传参
// 接口地址路径的某一层可以是:开头的通配符，通配符部分可以传递任意值，使用通配符路径格式，可以实现路径传参。路径传参可以实现网站的搜索引擎优化。
// get请求和post请求都可以使用路径传参。
app.get('/user/:name', (req, res) => {
	// get请求和post请求都可以通过路径传参，通过路径传递的参数在req.params中。
	console.log(req.params);
	var name = req.params.name;
	res.send('欢迎访问 ' + name + ' 的个人主页');
});
```


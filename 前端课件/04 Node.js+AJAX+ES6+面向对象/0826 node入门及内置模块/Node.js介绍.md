# Node.js介绍

JavaScript是一种脚本语言，本身并不能编译执行。JavaScript必须依赖一个运行环境作为载体才能够执行。

最早时期只是作为浏览器脚本，只能够在浏览器中执行。

2009年瑞安·达尔（Ryan Dahl）在GitHub上发布node.js的最初版本，在node.js中运行JS，使得JS可以在浏览器之外的环境上运行。Node.js 是一个JavaScript 运行环境，是一个基于 Chrome V8 引擎的 ，独立于浏览器的，所以能够实现让JS脱离浏览器单独执行。

Node.js提供了文件系统、网络系统等其他操作系统的API，可以用于服务端开发，创建一个服务环境，使用JavaScript搭建一个服务站点。它内部其实包含了很多的模块功能，其中有一些模块可以帮助我们方便快速的搭建一个web应用，甚至是完整网站。

早期只能在浏览器中运行JS，使用JS实现前端页面的开发。现在可以在node.js使用JS开发服务器，让JS实现后端的开发。但是在node.js中无法使用DOM和BOM等与浏览器相关的API。

学习node.js的作用：

- 通过学习Node.js开发深入理解**服务器开发**、**Web请求和响应过程**、 **了解服务器端如何与客户端配合**

- 掌握服务器端渲染

- 掌握服务器端为客户端编写接口

学习node.js需要的知识：

- JS基础知识：变量、数据类型、运算符、流程控制语句、内置对象（number、string、boolean、array、object、math、date等）

node.js的学习：

- node.js内置模块：fs、path、url、http等
- 第三方模块：express、mongoose等

# Node.js的安装与使用 

## 下载安装

中文官网：http://nodejs.cn/

中文社区：https://cnodejs.org/

下载node.js：http://nodejs.cn/download/

验证是否安装成功：

    node -v    #查看nodejs版本号，比如：v6.2.0

## Node.js的使用

### 在node环境下书写js代码

进入CMD终端输入node，然后回车，进入Node.js的环境，可以再里面直接写js代码

```
$ node
> var a = 2 + 3;
> console.log('a='+a);
a=5 
```

退出时直接使用：ctrl+c

### 在node环境中运行js文件:

进入终端打开文件目录，输入：node js文件名，可以让js文档直接在终端运行  

    cd 文件目录      #打开当前js文件所在文件夹
    node app.js     #使用node直接运行app.js文件(.js后缀名也可以不写，直接写node app)

在vs code 使用终端：如果报一下错误：

```shell
node : 无法将“node”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写
，如果包括路径，请确保路径正确，然后再试一次。
所在位置 行:1 字符: 1
+ node app
+ ~~~~
    + CategoryInfo          : ObjectNotFound: (node:String) [], CommandNotFoundExceptio 
   n
    + FullyQualifiedErrorId : CommandNotFoundException
```

可以使用一下指令解决：

```shell
set-executionpolicy remotesigned
```

## 全局对象和全局变量

Node提供以下几个全局对象，它们是所有模块都可以调用的。

- **global**：表示Node所在的全局环境，类似于浏览器的window对象。需要注意的是，如果在浏览器中声明一个全局变量，实际上是声明了一个全局对象的属性，比如`var x = 1`等同于设置`window.x = 1`，但是Node不是这样，至少在模块中不是这样。在模块文件中，声明`var x = 1`，该变量不是`global`对象的属性，`global.x`等于undefined。这是因为模块的全局变量都是该模块私有的，其他模块无法取到。
- **process**：该对象表示Node所处的当前进程，允许开发者与该进程互动。
- **console**：指向Node内置的console模块，提供命令行环境中的标准输入、标准输出功能。

Node还提供一些全局函数。

- **setTimeout()**：用于在指定毫秒之后，运行回调函数。实际的调用间隔，还取决于系统因素。间隔的毫秒数在1毫秒到2,147,483,647毫秒（约24.8天）之间。如果超过这个范围，会被自动改为1毫秒。该方法返回一个整数，代表这个新建定时器的编号。
- **clearTimeout()**：用于终止一个setTimeout方法新建的定时器。
- **setInterval()**：用于每隔一定毫秒调用回调函数。由于系统因素，可能无法保证每次调用之间正好间隔指定的毫秒数，但只会多于这个间隔，而不会少于它。指定的毫秒数必须是1到2,147,483,647（大约24.8天）之间的整数，如果超过这个范围，会被自动改为1毫秒。该方法返回一个整数，代表这个新建定时器的编号。
- **clearInterval()**：终止一个用setInterval方法新建的定时器。
- **require()**：用于加载模块。

Node提供两个全局变量，都以两个下划线开头。

- `__filename`：指向当前运行的脚本文件名。
- `__dirname`：指向当前运行的脚本所在的目录。

# CommonJS模块化规范

Node.js采用模块化结构，按照[CommonJS规范](http://javascript.ruanyifeng.com/nodejs/module.html)定义和使用模块。模块与文件是一一对应关系，即加载一个模块，实际上就是加载对应的一个模块文件。

浏览器使用script标签引入js文件就可以访问其内容了，当一个html文件导入多个js文件时，其实是把多个js文件拼接在一起，最终所有的代码都在同一个公共作用域中执行，但这样带了的弊端很多：

- 导入的js文件必须注意先后顺序

- 最大的就是所有的js文件都在同一个作用域，时刻要注意变量名和函数名产生命名冲突问题

以至于前端大师们想出了立即执行函数等方式，利用闭包解决。

浏览器加载js文件都不是模块化操作，但是在ES6中，提出了JS模块化的方式。

## 什么是模块化

所谓模块化，就是把一个庞大的功能，拆分成若干个子功能，每一个子功能都是一个独立的模块，可以独立完成某种任务，将这些独立的模块再整合为一个大功能，就构成了一个模块包。

编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块。

使用模块化编程的好处：

- 可以提高代码的复用性
- 提高了代码的可维护性
- 实现了代码的按需加载

## 模块化规范

模块化规范就是对代码进行模块化的拆分与组合时，需要遵守的那些规则。

比如使用什么样的语法格式来引用模块在模块中使用什么样的语法格式向外暴露成员

模块化规范的好处:大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的相互调用,利人利己。

## Node.js中的模块化

node.js采用CommonJS的模块化规范，ES6有自己的模块化规范。

每个文件就是一个模块，有自己的作用域，叫做模块作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

nodejs中一个js文件想要访问另一个js文件的内容，必须使用CommonJS模块化规范，通过模块导入和导出的方式使用。

在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做**模块作用域**。

## Node.js中模块的分类

Node.js 中根据模块来源的不同，将模块分为了3大类，分别是:

- **内置模块**：内置模块是由Node.js官方提供的，例如fs、path、http等
- **自定义模块**：用户创建的每个.js 文件，都是自定义模块
- **第三方模块**：由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载，比如express、mongoose等

## 加载模块

Node使用CommonJS模块规范，内置的`require`命令用于加载模块文件。

`require`命令的基本功能是，读入并执行一个JavaScript文件，然后返回该模块的module.exports对象。如果没有发现指定模块，会报错。

require()命令用于指定加载模块，加载时可以省略文件的后缀名。可以加载内置模块，自定义模块，第三方模块等。

```js
// 加载内置fs模块
const fs = require('fs');

// 加载自定义模块
const fs = require('./add');

// 加载第三方模块
const fs = require('express');
```

require方法的参数是模块文件的名字。它分成两种情况:

- 第一种情况是参数中含有文件路径（比如上例），这时路径是相对于当前脚本所在的目录，这种情况是用户自定义的模块，文件路径 ./ 或者 ../ 不能省略
- 第二种情况是参数中不含有文件路径，这时Node到模块的安装目录node_modules中去寻找已安装的模块 或者是加载的内置模块。

模块一旦被加载以后，模块中的代码会执行，并会被系统缓存。如果第二次还加载该模块，则会返回缓存中的版本，这意味着模块实际上只会执行一次。如果希望模块执行多次，则可以让模块返回一个函数，然后多次调用该函数。

## 自定义模块

Node模块采用CommonJS规范。只要符合这个规范，就可以自定义模块。

下面是一个最简单的模块，假定新建一个foo.js文件，写入以下内容。

```js
// foo.js

module.exports = function(x) {
  console.log(x);
};
```

上面代码就是一个模块，它通过module.exports变量，对外输出一个方法。

这个模块的使用方法如下。

```js
// app.js

var m = require('./foo');

m("这是自定义模块");
```

上面代码通过require命令加载模块文件foo.js（后缀名省略），将模块的对外接口输出到变量m，然后调用m。这时，在命令行下运行index.js，屏幕上就会输出“这是自定义模块”。

```js
node app
这是自定义模块
```

如果直接输出一个函数（就像上面的foo.js），那么调用模块就是调用一个函数，上面这种写法一次执行只能导出一个数据，不推荐使用。

CommonJS规范规定，每个模块内部，`module`变量代表当前模块。这个变量是一个对象，它的`exports`属性（即`module.exports`）就是模块向外导出数据的接口。加载某个模块，其实是加载该模块的`module.exports`属性。

- 在模块中，可以使用module.exports对象，将模块内的数据导出，供其他模块使用
- 在其他模块中用require方法导入模块时，得到的就是module.exports所指向的对象

**使用 require() 方法导入模块时，导入的结果，永远以 module.exports 指向的对象为准。**

默认情况下module.exports指向一个空对象{}，我们往这个对象中添加属性，或者让module.exports指向一个新的对象就可以导出数据了。下面对foo.js进行改写：

```js
// foo.js

let num = 2
let add = (a, b) => a + b;

// module.exports 设置模块需要导出的数据
// 把模块中希望被其他模块访问的内容定义到 exports 对象中
module.exports.num = num;
module.exports.add = add;

// 或者
module.exports = {
	num,
	add,
}
```

上面的代码表示模块输出对象，该对象有num和add属性，num指向数字2，add指向一个函数。下面是这个模块的使用方法。

```js
// app.js

var foo = require('./foo');

foo.add(2,3);
// 5
```

上面代码表示，由于具体的方法定义在模块的add属性上，所以必须显式调用add属性。

由于module.exports 单词写起来比较复杂，为了简化导出模块数据的代码，Node 提供了exports对象。默认情况下，exports指向module.exports ，在模块中导出数据时可以向exports对象中添加属性和方法。但是**最终导出的结果，还是以module.exports 指向的对象为准。**所以，不能使用 `exports = {}`这种写法，但是可以使用`exports.num = 10;`的写法

```js
console.log(module.exports);// {}
console.log(exports);//{}
console.log(exports === module.exports);//true
```

foo.js可以改写为：

```js
// foo.js

let num = 2
let add = (a, b) => a + b;

exports.num = num;
module.exports.add = add;

// 但是不能使用下面的写法，如果使用exports = {}，exports就不再指向module.exports，等于切断了exports与module.exports的联系，加载foo模块时，得到的还是module.exports对象，加载的模块数据就是一个{}了
exports = {
	num,
	add,
}
```

**如果你觉得，`exports`与`module.exports`之间的区别很难分清，一个简单的处理方法，就是放弃使用`exports`，只使用`module.exports`。**

CommonJS模块的特点如下。

- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
- 模块加载的顺序，按照其在代码中出现的顺序。

## 模块加载是值的拷贝

CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。请看下面这个例子。

下面是一个模块文件`lib.js`。

```js
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
```

上面代码输出内部变量`counter`和改写这个变量的内部方法`incCounter`。

然后，加载上面的模块。

```js
// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3
```

上面代码说明，`counter`输出以后，`lib.js`模块内部的变化就影响不到`counter`了。

## CommonJS模块化总结

CommonJS模块化规范使用require加载模块，使用module.exports导出模块

加载模块使用 require()

```js
// app.js

const app = require('./index');
```

导出模块使用 module.exports

```js
// index.js

let num = 2
let add = (a, b) => {
	return a + b
}

module.exports.num = num
module.exports.add = add

// 或者

module.exports = {
	num: num,
	add: add,
}
```

# Node.js内置模块

如果只是在服务器运行JavaScript代码，用处并不大，因为服务器脚本语言已经有很多种了。Node.js的用处在于，它本身还提供了一系列功能模块，与操作系统互动。这些核心的功能模块，不用安装就，直接导入就可以使用。

- **http**：提供HTTP服务器功能。
- **url**：解析URL。
- **fs**：与文件系统交互。
- **querystring**：解析URL的查询字符串。
- **child_process**：新建子进程。
- **util**：提供一系列实用小工具。
- **path**：处理文件路径。
- **crypto**：提供加密和解密功能，基本上是对OpenSSL的包装。

## fs模块

`fs`是`filesystem`的缩写，该模块提供本地文件的读写能力，这个模块几乎对所有操作提供异步和同步两种操作方式，供开发者选择。

- 读取文件数据：readFile()，readFileSync()
- 写入文件数据：writeFile()，writeFileSync()
- 创建文件夹：mkdir()，mkdirSync() 
- 判断文件或者文件夹是否存在：existsSync()
- 追加文件数据：fs.appendFile()，fs.appendFileSync()
- 复制文件：fs.copyFile()，fs.copyFileSync()
- 删除文件：fs.unlink()，fs.unlinkSync()
- 删除文件夹：fs.rmdir()，fs.rmdirSync()
- 重命名文件：fs.renameSyn()，fs.renameSync()
- 读取文件目录：readdir()，readdirSync()
- 查看文件信息，用来判断是是文件夹还是文件：stat()
- 监听文件：watchfile()，unwatchfile()
- 创建读取流：createReadStream()
- 创建写入流：createWriteStream()

## path模块

文件路径：表示某个文件在磁盘中的位置。通过文件路径可以找到磁盘中的某个文件或文件夹。

文件路径是一个字符串。文件路径按照完整度可以分为绝对路径和相对路径。

### 绝对路径

绝对路径：是完整的路径，以盘符开头，完整的表示出本文件所有的上层目录。

```txt
C:/programe file/nodejs/node.exe
```

nodejs中，__dirname表示当前文件所在目录的绝对路径。

```js
console.log(__dirname);
```

/ 开头的路径表示绝对路径，这个路径从当前磁盘的根目录算起。

```js
console.log(fs.readFileSync('/1.txt','utf-8'));
```

### 相对路径

相对路径：不完整的路径，只记录了结尾部分的路径，忽略了开的的盘符和顶层若干层目录。

```
nodejs/node.exe
```

在nodejs中： ./表示当前目录    ../表示当前目录的上层目录。

如果路径直接以文件名开头或者在文件前加 ./ 表示相对路径，从当前文件所在的目录算起

```js
console.log(fs.readFileSync("1.txt",'utf-8'));

console.log(fs.readFileSync("./1.txt",'utf-8'));
```

路径中每一层目录之间要以/分隔

```js
console.log(fs.readFileSync("./files/2.txt",'utf-8'));
```

路径中  ../  表示回到当前目录的上层目录

```js
console.log(fs.readFileSync("..1.txt",'utf-8'));
```

### path模块

path模块，用于处理文件路径，可以方便的从一个路径中截取出文件夹名字、文件名、文件扩展名等，也可以判断一个路径是绝对路径还是相对路径。

- 连接多个路径：path.join()
- 获取路径的文件名：path.basename()
- 获取路径的目录名：path.dirname()
- 获取路径的扩展名：path.extname()
- 将相对路径转为绝对路径：path.resolve()
- 判断路径是否是绝对路径：path.isAbsolute()
- 把路径解析为对象：path.parse()
- 把路径对象格式化为路径字符串：path.format()

## http模块

`http`模块主要用于搭建HTTP服务。使用Node搭建HTTP服务器非常简单。

```js
var http = require('http');

// http.createServer方法，用于创建一个http服务器对象，参数是监听函数。返回值是创建的服务器对象。

// 服务器监听函数就是服务器收到请求时的请求处理函数，在请求处理函数中需要返回给客户端数据。
// 请求处理函数有两个参数，分别是请求对象(requst)和响应对象(response)，分别表示请求报文对象和响应报文对象。
var server = http.createServer(function(req,res){

    // setHeader方法，用于向响应头中添加一条内容。
    // Content-Type，内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件
    // res.setHeader("Content-Type","text/html;charset=utf-8");
   
    // res.writeHead:用于设置响应状态码和响应头
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8",
    });
    
    var data = `<h1>智游教育欢迎您！</h1>`;

    // write()方法向响应体中写入数据，并发送给客户端，
    res.write(data);
    // end()方法结束本次请求。
    res.end();
});

// 启动服务器监听指定端口
server.listen(3000, function(){
    console.log('server running');
})
```

下面的修改则是根据不同网址的请求，显示不同的内容，已经相当于做出一个网站的雏形了。

```js
var http = require('http');

http.createServer(function(req, res) {

  // 主页
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the homepage!");
  }

  // About页面
  else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the about page!");
  }

  // 404错误
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 error! File not found.");
  }

}).listen(8080, "localhost");
```

## url模块

### url介绍

URL：统一资源定位符 (Uniform Resource Locator, URL) 是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。

URL 的一般语法格式为：协议名://用户名:密码@主机名或IP:端口号/路径?参数#哈希值

```js
 protocol://username:password@hostname[:port]/path/[:parameters][?query]#fragment

 http://tom:test@www.test.cn/index.html?name=tom&age=18#link
```

| 名称     | 组成       | 说明                                                         |
| -------- | ---------- | ------------------------------------------------------------ |
| 协议     | protocol   | 通信协议，常用的有http、https、fit、file等                   |
| 主机名   | hostname   | 存放资源的服务器的域名系统(DNS) 主机名或 IP 地址，比如：www.baidu.com<br />在主机名前也可以包含连接到服务器所需的用户名和密码（格式：username:password@hostname）。 |
| 端口号   | port       | 整数，可选，省略时使用方案的默认端口，各种传输协议都有默认的端口号。如http的默认端口为80。 |
| 路径     | path       | 由零或多个“/”符号隔开的字符串，一般用来表示主机上的一个目录或文件地址。 |
| 参数     | parameters | 这是用于指定特殊参数的可选项，有服务器端程序自行解释。       |
| 查询     | query      | 可选，用于给动态网页传递参数，可有多个参数，用“&”符号隔开，每个参数的名和值用“=”符号隔开。比如：name=tom&age=18 |
| 信息片段 | fragment   | 字符串，用于指定网络资源中的片段                             |

### url地址分类


url地址也分为相对地址和绝对地址。

- 绝对url：以协议名开头:  http://www.baidu.com
- 相对url，不以协议名开头的url都是相对url，可以是域名或IP开头，路径开头

如果以域名开头，则相对于当前页面的协议：www.baidu.com/user/login
如果以路径开头，则相对于当前页面的协议、域名以及端口号: user/login

以路径开头的url分为两种：

- /开头的url，相对于当前页面url的根路径: /user/login
- 非/开头的url，相对于当前页面url的路径: user/login

    例如当前页面地址： http:127.0.0.1:3000/user/img
    使用/user.png实际访问地址是：http:127.0.0.1:3000/user.png
    使用user.png实际访问地址是：http:127.0.0.1:3000/user/img/user.png

### url模块

`url`模块用于生成和解析URL。在新的接口中把url模块替换成了URL类，使用URL类实例化url对象。

这个用于实例化 URL 对象，即将传入的 URL 字符串解析成 URL 对象。

```js
new URL(input[, base])
```

- input：表示要解析的绝对或相对的 URL。如果 input 是相对路径，则需要 base。 如果 input 是绝对路径，则忽略 base。

- base：如果 input 不是绝对路径，则为要解析的基本 URL

URL类中的属性

- hash属性：获取及设置 URL 的片段部分。即 # 符号之后的内容
- host属性：获取及设置 URL 的主机部分。
- hostname属性：获取及设置 URL 的主机名部分。 url.host 和 url.hostname 之间的区别是 url.hostname 不包含端口。
- href属性：获取及设置序列化的 URL。即整个URL 字符串
- origin属性：获取只读的序列化的 URL 的 origin。
- username属性：获取及设置 URL 的用户名部分。
- password属性：获取及设置 URL 的密码部分。
- pathname属性：获取及设置 URL 的路径部分。
- port属性：获取及设置 URL 的端口部分。
- protocol属性：获取及设置 URL 的协议部分。
- search属性：获取及设置 URL 的序列化查询部分
- url.searchParams属性：获取表示 URL 查询参数的 URLSearchParams 对象。该属性属于只读属性，但是可以通过 search属性去修改

URL类中的方法

- url.toString()返回序列化的 URL，返回值与 url.href 和 url.toJSON() 的相同。
- url.toJSON()返回序列化的 URL。返回值与 url.href 和 url.toString() 的相同。使用JSON.stringify() 序列化时将自动调用该方法。

```js
var http = require('http');
var fs = require('fs');
var path = require('path');

// url模块，用于解析一个url
var url = require('url');


var server = http.createServer(function(req,res){
  // 请求处理函数中的req对象，表示请求报文，其中包含了本次请求的所有信息，包括url地址

  // req.url表示本次请求的url，类型是字符串。
  // 其中协议名、域名或IP、以及端口号已经被去掉，只保留的路径
  // console.log(req.url);// /1.html

  // 创建 URL 对象。
  var urlObj = new URL(req.url, 'http://127.0.0.1:3000')
  // console.log(urlObj.pathname);
  // 在路径前拼接上静态文件夹名字
  var filePath = path.join("./public",urlObj.pathname);
  // console.log(filePath);
  // 获取文件后缀名
  var ext = path.extname(filePath);
  // console.log(ext);

  fs.readFile(filePath,function(err,data){
    var status;
    var type;
    var resdata;
    if (err) {
      status = 404;
      resdata = '找不到您要访问的页面';
      type = 'text/plain;charset=utf-8';
    } else {
      status = 200;
      resdata = data.toString();

      //根据不同的文件后缀，设置不同的响应头类型Content-Type。
      if (ext=='.html' || ext=='.htm') {
        type = 'text/html;charset=utf-8';
      }else if (ext=='.jpg' || ext=='.jpeg') {
        type = 'image/jpeg';
      }else if(ext=='.png'){
        type = 'image/png';
      }else if(ext=='.css'){
        type = 'text/css';
      }else if(ext=='.js'){
        type = 'application/x-javascript';
      }else if(ext=='.txt'){
        type = 'text/plain;charset=utf-8';
      }
    }

    // 设置响应头
    res.writeHead(status,{
      'Content-type':type
    });

    res.write(resdata);
    res.end();
  });

});

server.listen(3000,function(){
  console.log('node running');
});
```

# 第三方模块

由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需要先下载，比如express、mongoose等，第三方模块都可以通过npm下载安装使用。

- express：Express是目前最流行的基于Node.js的Web开发框架，可以快速地搭建一个完整功能的网站。
- mongoose：mongoDB数据库的操作模块
- art-template：模板引擎
- nodemon：自动刷新node.js项目的模块
- npm-check-updates：更新npm依赖项
- moment：时间处理
- anywhere：开启静态服务器
- …

# 模块的加载机制

## 优先从缓存中加载

模块在第一次加载后会被缓存。这也意味着多次调用require()不会导致模块的代码被执行多次。

注意:不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。

## 内置模块的加载机制

内置模块是由Node.js 官方提供的模块，内置模块的加载优先级最高。

例如 require('fs')始终返回内置的fs模块，即使在node_modules目录下有名字相同的包也叫做fs。

## 自定义模块的加载机制

使用require()加载自定义模块时，必须指定以./或../开头的路径标识符。在加载自定义模块时，如果没有指定./或../这样的路径标识符，则node 会把它当作内置模块或第三方模块进行加载。

同时，在使用require()导入自定义模块时，如果省略了文件的扩展名，则Node.,js 会按顺序分别尝试加载以下的文件：

1. 按照确切的文件名进行加载
2. 补全.js扩展名进行加载补全
3. .json扩展名进行加载
4. 补全.node扩展名进行加载
5. 加载失败终端报错

## 第三方模块的加载机制

如果传递给require()的模块标识符不是一个内置模块，也没有以./或../开头，则Nodejs 会从当前模块的父目录开始，尝试从/node_modules 文件夹中加载第三方模块。

如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。
例如，假设在'C\Users\Jinxizhen\project\foo.js'文件里调用了require('tools')，则 Node.js 会按以下顺序查找:

1. C:\Users\Jinxizhen\project\node_modules\tools
2. C:\Users\Jinxizhen\node_modules\tools
3. C:\Users\node_modules\tools
4. C:\node_modules\tools

## 目录作为模块

当把目录作为模块标识符，传递给require()进行加载的时候，有三种加载方式:

1. 在被加载的目录下查找一个叫做package.json的文件，并寻找main属性，作为require()加载的入口
2. 如果目录里没有package.,json文件，或者main 入口不存在或无法解析，则 Node.js将会试图加载目录下的 indexjs文件。
3. 如果以上两步都失败了，则Node.js 会在终端打印错误消息，报告模块的缺失:Error: Cannot find module 'xxx'

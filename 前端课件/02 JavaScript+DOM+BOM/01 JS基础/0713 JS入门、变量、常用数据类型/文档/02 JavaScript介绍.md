

# JavaScript

[JavaScript](https://baike.baidu.com/item/JavaScript)目前是互联网上最流行的**脚本语言**，这门语言可用于 HTML 和 web，更可广泛用于服务器、PC、笔记本电脑、平板电脑和智能手机等设备。

JavaScript 是一种弱类型的脚本语言，支持多范式开发(面向过程，但是也可以实现面向对象)。

JavaScript作为一门脚本语言，没有自己独立的运行环境，只能依附于其他程序运行（例如浏览器），简单地说，JavaScript是一种运行在浏览器中的解释型的编程语言。直到Node.js发布，JavaScript才有了独立的运行环境，才能够调用操作系统功能。

在这里要分清 JavaScript 和 Java 的关系：

Java（由 Sun 发明）是更复杂的编程语言。JavaScript 由 Brendan Eich 发明。

- JavaScript 和 Java 是两种不同的语言。
- JavaScript 和 Java 的关系就好比 雷锋 和 雷峰塔的关系。

**HTML,CSS和JS之间的关系**：

- HTML决定了页面上的内容(用户看到的内容，标签)
- CSS决定了页面的样式(对页面的美化)
- JS决定了页面的业务逻辑(添加交互，比如：点击事件等)

JS能够修改HTML和CSS。

## JavaScript历史

要了解JavaScript，我们首先要回顾一下JavaScript的诞生。

在上个世纪的1995年，当时的网景公司正凭借其Navigator浏览器成为Web时代开启时最著名的第一代互联网公司。

由于网景公司希望能在静态HTML页面上添加一些动态效果，当时就职于 Netscape 公司的[布兰登·艾奇](https://baike.baidu.com/item/%E5%B8%83%E5%85%B0%E7%99%BB%C2%B7%E8%89%BE%E5%A5%87/58101949)（Brendan Eich）这哥们在两周之内设计出了JavaScript语言。你没看错，这哥们只用了10天时间。当时该脚本语言名字还叫 LiveScript，Netscape 与 Sun 公司合作后，把 LiveScript 改名为 JavaScript。

为什么起名叫JavaScript？原因是当时Java语言非常红火，所以网景公司希望借Java的名气来推广，但事实上JavaScript除了名字上有点像Java，其他部分基本上没啥关系。

后来网景公司又发布了 JavaScript 1.1。

## ECMAScript

因为网景开发了JavaScript，一年后微软又模仿JavaScript开发了JScript，微软的JavaScript 实现意味着有了两个不同的 JavaScript 版本：Netscape Navigator 中的JavaScript、Internet Explorer 中的 JScript。当时还没有标准规定 JavaScript 的语法和特性，两个不同版本并存的局面已经完全暴露了这个问题。随着业界担心的日益加剧，JavaScript的标准化问题被提上了议事日程。

为了让JavaScript成为全球标准，1997 年，JavaScript 1.1 作为提案被提交给欧洲计算机制造商协会（Ecma）。该协会指定第 39 技术委员会（TC39）承担了“标准化一门通用、跨平台、厂商中立的脚本语言的语法和语义”的任务（参见 TC39-ECMAScript）。TC39 委员会由来自网景、Sun、微软、Borland、Nombas 和其他对这门脚本语言有兴趣的公司的工程师组成。他们花了数月时间打造出 ECMA-262，也就是 ECMAScript（发音为“ek-ma-script”）这个新的脚本语言标准。

1998 年，国际标准化组织（ISO）和国际电工委员会（IEC）也将 ECMAScript 采纳为标准（ISO/ IEC-16262）。自此以后，各家浏览器均以 ECMAScript 作为自己 JavaScript 实现的依据，虽然具体实现各有不同。

所以简单说来就是，ECMAScript是一种语言标准，而JavaScript是网景公司对ECMAScript标准的一种实现。

那为什么不直接把JavaScript定为标准呢？因为JavaScript是网景的注册商标。

不过大多数时候，我们还是用JavaScript这个词。如果你遇到ECMAScript这个词，简单把它替换为JavaScript就行了。

## JavaScript版本

JavaScript语言是在10天时间内设计出来的，虽然语言的设计者水平非常NB，但谁也架不住“时间紧，任务重”，所以，JavaScript有很多设计缺陷，我们后面会慢慢讲到。

JavaScript 于 1997 年成为 ECMA 标准。ECMAScript 是该语言的官方名称。从 2015 年起，ECMAScript 按年命名（ECMAScript 2015）。

此外，由于JavaScript的标准——ECMAScript在不断发展，ECMAScript 6标准（简称ES6）已经在2015年6月正式发布了，所以，讲到JavaScript的版本，实际上就是说它实现了ECMAScript标准的哪个版本。

**ECMAScript 版本**:

| 版本 | 官方名称              | 描述                                                         |
| :--- | :-------------------- | :----------------------------------------------------------- |
| 1    | ECMAScript 1 (1997)   | 第一版。                                                     |
| 2    | ECMAScript 2 (1998)   | 只改变编辑方式。                                             |
| 3    | ECMAScript 3 (1999)   | 添加了正则表达式。添加了 try/catch。                         |
| 4    | ECMAScript 4          | 从未发布过。                                                 |
| 5    | ECMAScript 5 (2009)   | 添加了“严格模式”。<br />添加了 JSON 支持。<br />添加了 String.trim()。<br />添加了 Array.isArray()。<br />添加了数组迭代方法。 |
| 5.1  | ECMAScript 5.1 (2011) | 编辑改变。                                                   |
| 6    | ECMAScript 2015       | 添加了 let 和 const<br />添加了默认参数值<br />添加了 Array.find()<br />添加了 Array.findIndex() |
| 7    | ECMAScript 2016       | 添加了指数运算符（**）。<br />添加了 Array.prototype.includes。 |
| 8    | ECMAScript 2017       | 添加了字符串填充。<br />添加了新的 Object 属性。<br />添加了异步功能。<br />添加了共享内存。 |
| 9    | ECMAScript 2018       | 添加了 rest / spread 属性。<br />添加了异步迭代。<br />添加了 Promise.finally()。<br />增加 RegExp。 |

# 浏览器执行 JS 

浏览器分成两部分：渲染引擎和 JS 引擎

- 渲染引擎：用来解析HTML与CSS，俗称内核，比如 chrome 浏览器的 blink 
- JS 引擎：也称为 JS 解释器。 用来读取网页中的JavaScript代码，对其处理后运行，比如 chrome  浏览器的 V8引擎

浏览器本身并不会执行JS代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码 。JS 引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以 JavaScript 语言归为脚本语言，会逐行解释执行。

#  JS 的三大核心组成部分

虽然 JavaScript 和 ECMAScript 通常都被人们用来表达相同的含义，但 JavaScript 的含义却比 ECMA-262 中规定的要多得多。没错，一个完整的 JavaScript 实现应该由下列三个不同的部分组成，如图：

![image-20211127170730155](https://i.loli.net/2021/11/27/Cp2HkoR6MP4SDsO.png)

- ECMAScript ：JavaScript的核心（JS的标准）

- DOM：document object model 文档对象模型

- BOM：browser object document  浏览器对象模型 

## ECMAScript 

ECMAScript 是由ECMA 国际（ 原欧洲计算机制造商协会）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为 JavaScript。

ECMAScript 规定了JS的语法标准，是所有浏览器厂商共同遵守的一套JS语法工业标准。

ECMAScript 规定了些什么内容呢？大致说来，它规定了这门语言的下列组成部分：

- 语法
- 类型
- 语句
- 关键字
- 保留字
- 操作符
- 对象

ECMAScript 只是对实现这个规范描述的所有方面的一门语言的称呼。JavaScript 实现了 ECMAScript。

## DOM

文档对象模型（DOM，Document Object Model）是用于HTML的应用程序编程接口（API）。DOM本质上是一种接口（API)，是专门操作HTML文档的API。

DOM把整个HTML页面映射为一个有层次结构的DOM节点树，把层次中的每一个组成部分都称之为节点，所以在HTML文档中，所有的事物都被称作为DOM节点，元素节点、文本节点、注释节点等，标签元素在HTML文档中就被称之为元素节点，而我们要想通过JS代码对页面（其实就是对标签元素）进行动态操作，就先要去了解DOM节点，这样借助DOM提供的API，就可以对DOM节点进行增、删、改、查。

## BOM

BOM 即浏览器对象模型。浏览器页面初始化时，会在内存创建一个全局对象，用来描述当前窗口的属性和状态，这个全局对象被称为浏览器对象模型。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。

## 总结

JavaScript 是一门用来与网页交互的脚本语言，包含以下三个组成部分。

- ECMAScript：由 ECMA-262 定义并提供核心功能。
- 文档对象模型（DOM）：提供与网页内容交互的方法和接口。
- 浏览器对象模型（BOM）：提供与浏览器交互的方法和接口。

JavaScript 的这三个部分得到了五大 Web 浏览器（IE、Firefox、Chrome、Safari 和 Opera）不同程度的支持。所有浏览器基本上对 ES5（ECMAScript 5）提供了完善的支持，而对 ES6（ECMAScript 6）和ES7（ECMAScript 7）的支持度也在不断提升。这些浏览器对 DOM 的支持各不相同，但对 Level 3 的支持日益趋于规范。HTML5 中收录的 BOM 会因浏览器而异，不过开发者仍然可以假定存在很大一部分公共特性。

# HTML 中的 JavaScript 

将 JavaScript 插入 HTML 的主要方法是使用`<script>`元素。这个元素是由网景公司创造出来，并最早在Netscape Navigator 2 中实现的。后来，这个元素被正式加入到 HTML 规范。

不过，在HTML中JS书写位置可以分为三种：行内、内嵌和外部。

## 行内JS

内嵌脚本一般用在JS事件中。

```html
<button onclick="执行一段JS代码">按钮</button>
比如：
<button onclick="alert('Hello World!');">按钮</button>
<button onclick="add(6);">按钮</button>
```

可以将单行或少量 JS 代码写在HTML标签的事件属性中（以 on 开头的属性），如：onclick等，一般用来调用函数，大量JS代码不要写在使用行内。

## 内嵌JS

HTML 中的内嵌脚本必须位于 `<script> 与 </script>` 标签之间。`<script>` 可被放置在 HTML 页面的 `<body>`标签 或者 `<head>` 标签内部。

```html
<script>
  alert("hello world");
</script>
```

内嵌脚本通常用于少量多行JS代码，和`<style>`标签功能类似，如果是大量JS代码，建议使用外部JS的方式。

## 外部JS

给script标签添加一个 src 属性，可以引入一个外部的js文件，属性值就是要引入的文件的路径，就像img标签的src属性一样，也可以给script标签的src属性添加网络路径。

> 注意：引用外部 JS文件的 script 标签中间不可以写JS代码。

```html
<script src="index.js"></script>
```

外部脚本适合于JS 代码量比较大的情况， 利于HTML页面代码结构化，把大段 JS代码独立到 HTML 页面之外，既美观，也方便文件级别的复用。

# `<noscript>`元素

针对早期浏览器不支持 JavaScript 的问题，需要一个页面优雅降级的处理方案。最终，`<noscript>`元素出现，被用于给不支持 JavaScript 的浏览器提供替代内容。虽然如今的浏览器已经 100%支持

JavaScript，但对于禁用 JavaScript 的浏览器来说，这个元素仍然有它的用处。

`<noscript>`元素可以包含任何可以出现在`<body>`中的 HTML 元素，`<script>`除外。在下列两种情况下，浏览器将显示包含在 `<noscript>` 中的内容：

- 浏览器不支持脚本；

- 浏览器对脚本的支持被关闭。

任何一个条件被满足，包含在`<noscript>`中的内容就会被渲染。否则，浏览器不会渲染`<noscript>`中的内容。

```html
 <noscript> 
 <p>This page requires a JavaScript-enabled browser.</p> 
 </noscript>
```

这个例子是在脚本不可用时让浏览器显示一段话。如果浏览器支持脚本，则用户永远不会看到它。

# HTML程序的执行

程序在页面中的执行顺序是从上而下执行的，但是浏览器会优先执行html标签和文字信息，将图片、视频和外部引用的资源放在后面执行。

- JS执行过程中，浏览器会停止HTML和CSS的渲染工作，直到JS代码执行完毕，再继续执行HTML和CSS的解析。
- 一个页面中可以引入多个JS文件，这些JS文件在执行时，会按照顺序拼接在一起，运行在同一个环境内。






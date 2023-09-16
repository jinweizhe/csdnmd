# BOM

BOM （Browser Object Model）即浏览器对象模型。浏览器页面初始化时，会在内存创建一个全局对象，用来描述当前窗口的属性和状态，这个全局对象被称为浏览器对象模型。

BOM 提供了独立于内容而与浏览器窗口进行交互的对象，核心对象是window对象。window对象既为JS访问浏览器提供API，同时在JS中充当Global对象。BOM和浏览器关系密切，浏览器很多东西可以通过javascript控制，例如打开窗口、打开选项卡、关闭页面、收藏夹等，这些功能与网页内容无关。

DOM的标准化组织是W3C，JavaScript的语法标准化组织是ECMA，BOM没有官方标准，它最初是Netscape浏览器标准的一部分。

由于没有标准，不同的浏览器实现统一功能都有自己的BOM实现方法，所以直接使用BOM会有兼容性问题。例如：加入收藏夹这个功能：

```js
// IE浏览器: 
window.external.AddFavorite(url, title);

// FireFox浏览器: 
window.sidebar.addPanel(title, url, "");
```

但是为了利用JavaScript完成交互，现代浏览器几乎都实现了相同的方法和属性，这些方法和属性被称作BOM的方法和属性。

# BOM包含的内容

BOM有一个核心对象window，window对象包含了6大核心模块，分别是：

- document  文档对象
- frames    HTML自框架
- history   页面的历史记录
- location  当前页面的地址
- navigator 包含浏览器相关信息
- screen	   用户显示屏幕相关属性

# BOM和DOM之间的关系

DOM（Document Object Model文档对象模型）是为了操作文档而定义的一组接口，而BOM（Browser Object Model浏览器对象模型）则是为了操作浏览器而定义的一组接口。这很好理解，通过命名就能知道。真正有意思的地方在于，基于JavaScript的“对象系统”（[《浅析JavaScript的对象系统》](https://www.jianshu.com/p/d0930dc0f95d)），我们似乎只通过一个对象就能拿到我们需要的几乎所有东西，原生函数、自定义函数、全局变量、DOM、浏览器属性等等，这个“包罗万象”的对象就是——window。

document是DOM的核心对象，window则是BOM的核心对象，而又有：

```js
console.log(window.document === document);    //true
```
因为document是DOM的根节点，而以上代码又表明：document在window对象中是作为其一个属性而存在的，因此从这个角度来说，BOM包含了DOM。与此类似，你还可以验证如下代码：
```js
console.log(window.location === location);      //true
console.log(window.navigator === navigator);    //true
console.log(window.screen === screen);    	  	//true
console.log(window.history === history);        //true
console.log(window.window === window);          //true
```
location、navigator、screen、history和window一样，都是BOM提供的对象，只不过它们和document对象一样，都同时以属性的形式存在于window中。上面的测试似乎有些多此一举，但为了验证window作为“根”的角色，这些测试都是有意义的。
当你在浏览器中console.log(window)，你应该能大体归纳出其构成如下图：

![image-20211230180126490](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211230180126490.png)

可以看到，window可不仅仅是BOM中的那个浏览器窗口对象而已，它实际上包含了某个页面所在的窗口中与JavaScript相关的方方面面。但是，我们明明说“window是BOM的核心对象”啊，BOM本身只提供对浏览器的操作接口，从这个角度来说，window跟与浏览器窗口无关的那些什么原生构造函数、全局变量/函数有半毛钱关系？为什么它们会存在于window当中？实际上：

**ECMAScript 虽然没有指出如何直接访问 Global 对象，但 Web 浏览器都是将这个全局对象作为 window 对象的一部分加以实现的。**

也就是说，Global对象被整个整合进了window，这才使得后者同时拥有了BOM和Global。

| DOM                                              | BOM                                              |
| :----------------------------------------------- | :----------------------------------------------- |
| 文档对象模型                                     | 浏览器对象模型                                   |
| DOM 就是把「**文档**」当做一个「**对象**」来看待 | 把「**浏览器**」当做一个「**对象**」来看待       |
| DOM 的顶级对象是 **document**                    | BOM 的顶级对象是 **window**                      |
| DOM 主要学习的是操作页面元素                     | BOM 学习的是浏览器窗口交互的一些对象             |
| DOM 是 W3C 标准规范                              | BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差 |

window是BOM的核心对象，但同时，window又是ECMAScript中的Global对象的超集。也就是说，在浏览器中window有着双重角色，我们可以分别从BOM(浏览器)和Global(ECMAScript)两个角度去理解。

- window是 JS 访问浏览器窗口的一个接口。
- window是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法。

下面我们先抛开这个大大的window，把范围缩小，来梳理一下BOM。

# window 浏览器窗口

从BOM的角度来看window，它瞬间就Low了不少。此时window表示的就是一个浏览器窗口对象，强调的是“浏览器窗口”。下图是对其的整理归纳，列出了大部分常用的属性和方法。其中亮黄色部分是我们实际开发中经常会用到的。

![image-20211230211518801](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211230211518801.png)

# navigator 浏览器信息

不同浏览器提供的navigator对象支持的属性差别不小，而且有些属性的结果并不尽如人意，比如几乎所有浏览器的navigator.appCodeName的结果都为Mozilla，这似乎难以理解。因为这些原因，navigator对象并不是很常用，尽管各浏览器为该对象提供的属性并不少。检测浏览器类型和版本就需要通过navigator对象。

![image-20211230212132684](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211230212132684.png)

# screen 显示器屏幕

不同浏览器中的screen对象也都包含着不同的属性，screen对象极少用到，了解即可。

# history 浏览历史记录

![image-20211230212250633](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211230212250633.png)

# 总结

![image-20211230212328486](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211230212328486.png)






# jQuery介绍

jQuery是一个功能强大的JavaScript的代码库，它对JavaScript代码进行了封装，使得js的代码变得异常简单，极大地简化了js代码，提高了开发效率。

在开始学习 jQuery 之前，应该对以下知识有基本的了解：

- HTML
- CSS
- JavaScript

## 为什么要学习jQuery

jQuery，是JavaScript世界中使用最广泛的一个库，没有之一。江湖传言，全世界曾有大约有80~90%的网站直接或间接地使用了jQuery，极个别不用的公司也在参考它。

jQuery 库包含以下特性：

- HTML 元素选取
- HTML 元素操作
- CSS 操作
- HTML 事件函数
- JavaScript 特效和动画
- HTML DOM 遍历和修改
- AJAX
- Utilities

## jQuery能够帮我们做什么

- jQuery消除浏览器之间的差异：集成提供大量的功能并提供浏览器兼容能力
- jQuery提供简单的操作DOM方法:减少代码量，提高程序员工作效率
- 轻松地实现动画，修改CSS等各种操作

jQuery的理念就是“Write Less,Do More”，让你写更少的代码，完成更多的工作。

## jQuery下载及使用

jQuery是一个jquery_xxx.js文件，jQuery根据使用场景不同，分为压缩版(compressed)和未压缩版(uncompressed)。

- 压缩版主要在发布产品的时候使用，能够减少发布包的体积；
- 未压缩版主要在开发的时候使用，便于查看源代码。

在jQuery官网： http://jquery.com/ 下载使用。也可以使用BootCDN：https://www.bootcdn.cn/jquery/

jQuery 库位于一个 JavaScript 文件中，其中包含了所有的 jQuery 函数。

使用jQuery的时候，只需要在页面的head标签中引入jQuery.js即可

```html
<head>
<script src="jquery.js"></script>
</head>
```

请注意，`<script>` 标签应该位于页面的 `<head>` 部分。

## 参考

参考网站：

- https://www.jquery123.com/
- https://jquery.cuishifeng.cn/index.html
- https://www.w3school.com.cn/jquery/jquery_reference.asp

## $符号

通过 jQuery，您可以选取（查询，query） HTML 元素，并对它们执行“操作”（actions）。查询元素，需要使用jQuery对象，我们在使用jQuery的时候直接使用 `$` 符号来代替jQuery对象。

`$` 是著名的jQuery符号，jQuery将所有的功能都封装在一个全局变量jQuery对象中，`$` 是一个合法的变量名，
在jQuery库中，作为jQuery这个变量的别名来使用。

`$`本质上是一个函数，但是同时也是一个对象，我们可以直接使用 `$`符号代替jQuery。
jQuery 和 `$` 的关系:jQuery才是本尊，`$`仅仅是jQuery的替身。

```js
console.dir(window.jQuery);
console.dir(window.$);
console.dir(jQuery);
console.dir($);

console.log($ === jQuery);//true
console.log(typeof(jQuery));//function
console.log(typeof($));//function
```

## jQuery 名称冲突

jQuery 使用 $ 符号作为 jQuery 的简介方式。

某些其他 JavaScript 库中的函数（比如 Prototype）同样使用 $ 符号。

jQuery 使用名为 noConflict() 的方法来解决该问题。

`var jq = jQuery.noConflict()`，帮助您使用自己的名称（比如 jq）来代替 $ 符号。

## jQuery 语法

jQuery 语法是为 HTML 元素的选取编制的，可以对元素执行某些操作。

基础语法是：`$(selector).action()`

- 美元符 `$` 号定义 jQuery
- 选择器（selector）“查询”和“查找” HTML 元素
- jQuery 的 action() 执行对元素的操作

# 元素查找

jQuery提供了强大的选择DOM元素的语法，在这套语法中，选择器是核心，以往在JS原生代码中操作DOM元素，都是使用 `document.getElementById('id')` 等语法，但是，在jQuery中，我们使用类似 `$('#id')` 这样的语法，更便捷的快速定位元素。	

查找元素的语法：`$(selector)`；

- 选择器（selector）用于“查询”和“查找” HTML 元素，类似CSS中的选择器

## 基本选择器

| 选择器                          | 实例                 | 选取                                      |
| :------------------------------ | :------------------- | :---------------------------------------- |
| *                               | $("*")               | 所有元素                                  |
| #id                             | $("#lastname")       | id="lastname" 的元素                      |
| .class                          | $(".intro")          | 所有 class="intro" 的元素                 |
| element                         | $("p")               | 所有 `<p>` 元素                           |
| selector1, selector2, selectorN | $("div,span,p.text") | 选择所有div、span、类名为text的p标签      |
| .class.class                    | $(".intro.demo")     | 所有 class="intro" 且 class="demo" 的元素 |

## 属性选择器

| 选择器              | 实例                   | 选取                                          |
| ------------------- | ---------------------- | --------------------------------------------- |
| [attribute]         | $("a[href]")           | 所有带有 href 属性的a元素                     |
| [attribute=value]   | $("a[href='#']")       | 所有 href 属性的值等于 "#" 的a元素            |
| [attribute!=value]  | $("[href!='#']")       | 所有 href 属性的值不等于 "#" 的元素           |
| [attribute$=value]  | `$("[href$='.jpg']")`  | 所有 href 属性的值包含以 ".jpg" 结尾的元素    |
| [attribute^=value]  | $("[href^='http']")    | 所有 href 属性的值包含以 ".http" 开头的元素   |
| [attribute*=value]  | $("[href*='com']")     | 所有 href 属性的值包含 "com" 的元素           |
| [attribute\|=value] | $("[hreflang\|='en']") | 所有lang属性的值等于en或以en开头后面跟-的元素 |
| [attribute~=value]  | $('[name~="man"]')     | 所有name属性的值用空格分隔，其中包含man的元素 |

## 层级选择器

| 选择器              | 实例       | 选取                                   |
| ------------------- | ---------- | -------------------------------------- |
| ancestor descendant | $('ul li') | 选择给定的祖先元素ul的所有后代元素li   |
| parent > child      | $('ul>li') | 选择所有指定ul元素中指定的直接子元素li |
| prev + next         | $('div+p') | 所有紧接在 div 元素后的 p 元素         |
| prev ~ siblings     | $('div~p') | 选择 div元素之后的所有 p 元素          |

## 基本过滤

| 选择器          | 实例                   | 选取                                         |
| --------------- | ---------------------- | -------------------------------------------- |
| :first          | $("p:first")           | 第一个 `<p>` 元素，相当于:eq(0)              |
| :last           | $("p:last")            | 最后一个 `<p>` 元素                          |
| :even           | $("tr:even")           | 所有偶数 `<tr>` 元素                         |
| :odd            | $("tr:odd")            | 所有奇数 `<tr>` 元素                         |
| :eq(index)      | $("ul li:eq(3)")       | 列表中的第四个元素（index 从 0 开始）        |
| :gt(index)      | $("ul li:gt(3)")       | 列出 index 大于 3 的元素                     |
| :lt(index)      | $("ul li:lt(3)")       | 列出 index 小于 3 的元素                     |
| :not(selector)  | $("input:not(:empty)") | 所有不为空的 input 元素                      |
| :focus          | $("input:focus")       | 所有获取焦点的 input 元素                    |
| :lang(language) | $( "div:lang(en-us)" ) | 所有语言为en-us的div元素                     |
| :root           | $( ":root" )           | 获取文档的根标签，HTML文档中根标签是html标签 |
| :header         | $(":header")           | 所有标题元素 `<h1> - <h6>`                   |
| :animated       | $("div:animated")      | 所有动画的div元素                            |

## 子元素过滤

| 选择器                        | 实例                      | 选取                                       |
| :---------------------------- | :------------------------ | :----------------------------------------- |
| :first-child                  | $("ul li:first-child")    | 选择所有父级元素ul下的第一个子元素li       |
| :last-child                   | $("ul li:last-child")     | 选择所有父级元素ul下的最后一个子元素li     |
| :nth-child(n/even/odd)        | $("ul li:nth-child(2)")   | 选择所有父元素ul的第2个子元素li            |
| :nth-last-child(n/even/odd)   | $("ul li:nth-child(2)")   | 选择所有父元素ul的倒数第2个子元素li        |
| :first-of-type                | $("ul li:first-of-type")  | 选择所有父级元素ul下的同名li元素的第一个   |
| :last-of-type                 | $("ul li:last-of-type")   | 选择所有父级元素ul下的同名li元素的最后一个 |
| :nth-of-type(n/even/odd)      | $("ul li:nth-of-type(2)") | 选择所有父元素ul下的同名li元素的第2个      |
| :nth-last-of-type(n/even/odd) | $("ul li:nth-of-type(2)") | 选择所有父元素ul下的同名li元素的倒数第2个  |
| :only-child                   | $("ul li:only-child")     | 选择所有父级元素ul下的唯一的个子元素li     |
| :only-of-type                 | $("ul li:only-of-type")   | 选择所有父级元素ul下没有其他兄弟元素的li   |

## 内容过滤

| 选择器          | 实例                          | 选取                                                         |
| --------------- | ----------------------------- | ------------------------------------------------------------ |
| :contains(text) | $("div:contains('W3School')") | 包含指定字符串的所有元素                                     |
| :has()          | $('div:has(p)')               | 选择至少包含一个p标签的所有div标签                           |
| :empty          | $(":empty")                   | 无子节点的所有元素（包括文本节点）                           |
| :parent         | $(":parent")                  | 选择所有含有子节点的父级元素（包括文本节点），和 `:empty`相反 |

## 可见性过滤

| 选择器   | 实例          | 选取                                                         |
| -------- | ------------- | ------------------------------------------------------------ |
| :visible | $(":visible") | 选择所有可见的元素<br />如果元素中占据文档中一定的空间,元素被认为是可见的。可见元素的宽度或高度，是大于零。<br />元素的`visibility: hidden` 或 `opacity: 0`被认为是可见的，因为他们仍然占用空间布局。 |
| :hidden  | $(":hidden")  | 选择所有隐藏的元素：<br />CSS `display`值是`none`<br />`type="hidden"`的表单元素<br />宽度和高度都显式设置为0<br />一个祖先元素是隐藏的，因此该元素是不会在页面上显示 |

## 表单选择器

| 选择器    | 实例                | 选取                                                       |
| --------- | ------------------- | ---------------------------------------------------------- |
| :input    | $(":input")         | 选择所有 input, textarea, select 和 button 元素            |
| :text     | $("input:text")     | 选择所有文本输入框，等同于[type=text]                      |
| :password | $("input:password") | 选择所有密码输入框，等同于[type=password]                  |
| :button   | $(":button")        | 选择所有按钮，等同于[type=button]                          |
| :submit   | $(":submit")        | 选择所有提交按钮，等同于[type=submit]                      |
| :reset    | $(":reset")         | 选择所有重置按钮，等同于[type=reset]                       |
| :file     | $(":file")          | 选择所有“选择文件”的按钮，等同于[type=file]                |
| :image    | $(":image")         | 选择所有图像形式的按钮，等同于[type=image]                 |
| :checkbox | $(":checkbox")      | 选择所有复选框，等同于[type=checkbox]                      |
| :radio    | $(":radio")         | 选择所有单选框，等同于[type=radio]                         |
| :focus    | $(":focus")         | 选择所有获得输入焦点的元素                                 |
| :enabled  | $(":enabled")       | 选择所有正常输入的表单元素，没有禁用的元素                 |
| :disabled | $(":disabled")      | 和:eabled相反，选择那些被禁用的所有元素                    |
| :selected | $(":selected")      | 选择所有select元素中所有被选中的元素，只适用于<option>元素 |
| :checked  | $(":checked")       | 选择所有当前勾上的单选框和复选框                           |

## JQ对象与原生DOM对象的关系

通过$(selector)返回的对象是jQuery对象， jQuery对象是一个伪数组对象，本身是对象，能表现出来数组的特点: 有length属性，能够用下标取值，jQuery对象内部每一个元素都是一个DOM节点的对象。

比如：$(".item") 将所有匹配到DOM元素对象放在jQuery维护的数组中；在数组的特征外，jQuery对象还可以直接调用 .click()等方法（返回结果也还是jQuery对象，支持jQuery链式功能）；所以：jQuery得到的是个HTMLElement的集合基础上的封装后的对象。

JQ对象和DOM对象之间可以互相转化

```JS
// 根据索值从JQ对象中获取一个DOM对象
var d_dom = $('div').get(0);
var d_dom = $('div')[0];
console.dir(d_dom);

// 重新把DOM对象包装为JQ对象
var d_jq = $(d_dom);
console.dir(d_jq);
```

但是DOM对象不能调用JQ的方法，JQ对象同样也不能调用DOM对象的方法

```JS
console.log(d_dom.innerHTML);
console.log(d_jq.innerHTML);// 报错

console.log(d_dom.html());// 报错
console.log(d_jq.html());
```

# 元素遍历

## 过滤

| 函数                              | 实例                      | 选取                                                         |
| --------------------------------- | ------------------------- | ------------------------------------------------------------ |
| .eq(index)                        | $("li").eq(index)         | 获取元素的集合中指定索引的元素li                             |
| .first()                          | $("li").first()           | 获取匹配元素集合中第一个元素li                               |
| .last()                           | $("li").last()            | 获取匹配元素集合中最后一个元素li                             |
| .not()                            | $('li').not('.active')    | 从匹配的元素集合中移除指定的元素                             |
| .has()                            | $('li').has('a')          | 获取元素集合中包含特定元素后代a元素的li元素集合              |
| .is()                             | $('li').is('.item')       | 根据选择器检查当前匹配元素集合，如果存在至少一个匹配元素，则返回 true |
| .filter()                         | $('li').filter('.active') | 筛选元素集合中匹配表达式 或 通过传递函数测试的 那些元素集合  |
| .slice(start [,end ])             | $('li').slice(1)          | 根据指定的下标范围，过滤匹配的元素集合，并生成一个新的 jQuery 对象。<br />slice(1) 一个参数，从指定索引出开始，一直到集合结束<br />slice(1,3) 两个参数：1.开始位置(包含)； 2.结束位置(不包含) |
| .map(callback(index, domElement)) |                           | 通过一个函数匹配当前集合中的每个元素，产生一个包含新的jQuery对象 |

## 树遍历

### 向上遍历

| 函数                   | 描述                                                         |
| ---------------------- | ------------------------------------------------------------ |
| .parent(selector)      | 获得当前匹配元素集合中每个元素的父元素，由选择器筛选（可选） |
| .parents(selector)     | 获得当前匹配元素集合中每个元素的祖先元素，由选择器筛选（可选） |
| parentsUntil(selector) | 获得当前匹配元素集合中每个元素的祖先元素，直到遇到匹配选择器（可选）的元素为止 |
| .offsetParent()        | 取得离指定元素最近的含有定位信息的祖先元素。含有定位信息的元素指的是，CSS 的 position 属性是 relative, absolute, 或 fixed 的元素。 |
| .closest()             | 从元素本身开始，在DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素。 |

### 向下遍历

| 函数                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| .children(selector) | 获得匹配元素集合中每个元素的所有子元素，由选择器筛选（可选） |
| .find(selector)     | 获得当前匹配元素集合中每个元素的后代，由选择器进行筛选       |

### 同胞遍历

| 函数                 | 描述                                                         |
| -------------------- | ------------------------------------------------------------ |
| .prev(selector)      | 获得匹配元素集合中每个元素紧邻的前一个同辈元素，由选择器筛选（可选） |
| .prevAll(selector)   | 获得匹配元素集合中每个元素之前的所有同辈元素，由选择器进行筛选（可选） |
| .prevUntil(selector) | 获得每个元素之前所有的同辈元素，直到遇到匹配选择器的元素为止 |
| .next(selector)      | 获得匹配元素集合中每个元素紧邻的同辈元素                     |
| .nextAll(selector)   | 获得匹配元素集合中每个元素之后的所有同辈元素，由选择器进行筛选（可选） |
| .nextUtil(selector)  | 获得每个元素之后所有的同辈元素，直到遇到匹配选择器的元素为止 |
| .siblings(selector)  | 获得匹配元素集合中所有元素的同辈元素，由选择器筛选（可选）   |

## 其它遍历

| 函数        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| .add()      | 将元素添加到匹配元素的集合中。                               |
| .andSelf()  | 把堆栈中之前的元素集添加到当前集合中。                       |
| .addBack()  | 添加堆栈中元素集合到当前集合，一个选择性的过滤选择器。       |
| .end()      | 结束当前链中最近的一次筛选操作，并将匹配元素集合返回到前一次的状态。 |
| .not()      | 从匹配元素集合中删除元素。                                   |
| .contents() | 获得匹配元素集合中每个元素的子元素，包括文本和注释节点。     |

## 链式调用

jq对象中的大部分操作方法，都是可以链式调用的

```js
$('#outer').find('.html')
  .css('color','red').text('你好')
  .siblings().css('color','blue')
  .end();
```

# 元素增删改

## 增加元素

### 元素包裹增加

| 方法         | 示例                             | 描述                                                   |
| :----------- | -------------------------------- | :----------------------------------------------------- |
| .unwrap()    | ` $("p").unwrap();`              | 移除并替换指定元素的父元素                             |
| .wrap()      | `$("p").wrap("<div></div>");`    | 把匹配的每个元素用指定的内容或元素包裹起来。           |
| .wrapAll()   | `$("p").wrapAll("<div></div>");` | 把所有匹配的元素用指定的内容或元素包裹起来。           |
| .wrapinner() | `$("p").wrapInner("<b></b>");`   | 将每一个匹配的元素的子内容用指定的内容或元素包裹起来。 |

### 元素内部增加

| 方法         | 示例                                        | 描述                                                         |
| :----------- | ------------------------------------------- | ------------------------------------------------------------ |
| .append()    | `  $("p").append("<b>Hello world!</b>");`   | 向匹配元素集合中的每个元素结尾插入由参数指定的内容。         |
| .appendTo()  | `$("<b>Hello World!</b>").appendTo("p");`   | 向目标结尾插入匹配元素集合中的每个元素。<br />append() 和 appendTo() 方法作用相同。不同之处在于：内容和选择器的位置，以及 append() 能够使用函数来附加内容。 |
| .prepend()   | `$("p").prepend("<b>Hello world!</b>");`    | 向匹配元素集合中的每个元素开头插入由参数指定的内容。         |
| .prependTo() | ` $("<b>Hello World!</b>").prependTo("p");` | 向目标开头插入匹配元素集合中的每个元素。<br />prepend() 和 prependTo() 方法作用相同。差异在于语法：内容和选择器的位置，以及 prepend() 能够使用函数来插入内容。 |

### 元素外部增加

| 方法            | 示例                                                | 描述                                                         |
| :-------------- | --------------------------------------------------- | :----------------------------------------------------------- |
| .after()        | `$("p").after("<p>Hello world!</p>");`              | 在匹配的元素之后插入内容。                                   |
| .insertAfter()  | `$("<span>Hello world!</span>").insertAfter("p");`  | 把匹配的元素插入到另一个指定的元素集合的后面。<br />after() 和 insertAfter() 方法作用相同。不同之处在于：内容和选择器的位置，以及 after() 能够使用函数来内容。 |
| .before()       | `$("p").before("<p>Hello world!</p>");`             | 在每个匹配的元素之前插入内容。                               |
| .insertBefore() | `$("<span>Hello world!</span>").insertBefore("p");` | 把匹配的元素插入到另一个指定的元素集合的前面。<br />before() 和 insertBefore() 方法作用相同。不同之处在于：内容和选择器的位置，以及 before() 能够使用函数来内容。 |

## 移除元素

| 方法      |                  | 描述                                                         |
| :-------- | ---------------- | :----------------------------------------------------------- |
| .detach() | $("p").detach(); | 从 DOM 中移除匹配元素集合。<br />detach() 方法移除被选元素，包括所有文本和子节点。<br />这个方法会保留 jQuery 对象中的匹配的元素，因而可以在将来再使用这些匹配的元素。<br />detach() 会保留所有绑定的事件、附加的数据，这一点与 remove() 不同。 |
| .remove() | $("p").remove(); | 移除所有匹配的元素。<br />remove() 方法移除被选元素，包括所有文本和子节点。<br/>该方法不会把匹配的元素从 jQuery 对象中删除，因而可以在将来再使用这些匹配的元素。<br/>但除了这个元素本身得以保留之外，remove() 不会保留元素的 jQuery 数据。其他的比如绑定的事件、附加的数据等都会被移除。这一点与 detach() 不同。 |
| .empty()  | $("p").empty();  | 删除匹配的元素集合中所有的子节点。                           |
| .unwrap() | $("p").unwrap(); | 移除并替换指定元素的父元素。                                 |

## 替换元素

| 方法           | 示例                                          | 描述                                                         |
| -------------- | --------------------------------------------- | ------------------------------------------------------------ |
| .replaceAll()  | `$("<b>Hello world!</b>").replaceAll("p");`   | 用匹配的元素替换所有匹配到的元素。                           |
| .replaceWith() | ` $("p").replaceWith("<b>Hello world!</b>");` | 用新内容替换匹配的元素。<br />replaceAll() 与 replaceWith() 作用相同。差异在于语法：内容和选择器的位置，以及 replaceWith() 能够使用函数进行替换。 |

## 元素内容的操作

| 方法    | 描述                                   |
| :------ | :------------------------------------- |
| .text() | 设置或返回匹配元素的文本内容           |
| .html() | 设置或返回匹配的元素集合中的 HTML 内容 |
| .val()  | 设置或返回匹配元素表单字段的值         |

text() - 设置或返回所选元素的文本内容

- 当该方法用于返回值时，它会返回所有匹配元素的组合的文本内容（会删除 HTML 标记）
- 当该方法用于设置值时，它会覆盖被选元素的所有内容

html() - 设置或返回所选元素的内容（包括 HTML 标记）

- 当使用该方法返回一个值时，它会返回第一个匹配元素的内容
- 当使用该方法设置一个值时，它会覆盖所有匹配元素的内容。

val() - 设置或返回表单字段的值

- 元素的值是通过 value 属性设置的。该方法大多用于 input 元素。
- 当该方法用于返回值时，返回第一个匹配元素的 value 属性的值。
- 当该方法用于设置值时，它会设置被选元素的所有内容

# 属性操作

## 通用属性操作

| 方法          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| .attr()       | 获取匹配的元素集合中的第一个元素的属性的值。`$(':text').attr('name')`<br />设置每一个匹配元素的一个或多个属性：`$(':text').attr('name','username')` |
| .removeAttr() | 为匹配的元素集合中的每个元素中移除一个属性（attribute）：$(':text').removeAttr('title'); |
| .prop()       | 获取匹配的元素集中第一个元素的属性（property）值：$(':checkbox').prop('checked') <br />设置每一个匹配的元素一个或多个属性（properties）：`$(':checkbox').prop('checked','true')` |
| .removeProp() | 为集合中匹配的元素删除一个属性（property）。                 |

为了方便使用，我们用下面方式区别attr()和prop()：

- prop()用于具有true或false两个值的属性，如checked、selected、disabled、hidden，其他的使用 attr()

## class 属性

| 方法           | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| .addClass()    | 向匹配的元素添加指定的类名。<br />添加一个类名：`$('div').addClass('on');`<br />添加多个类名：`$('div').addClass('on1 on1');`或`$('div').addClass('on1').addClass('on2');` |
| .removeClass() | 从所有匹配的元素中删除全部或者指定的类。<br />删除一个或者多个类名： `$('div').removeClass('on');` 或  `$('div').removeClass('on1 on2');`<br />没有参数删除全部类名：` $('div').removeClass();` |
| .hasClass()    | 检查匹配的元素是否拥有指定的类。                             |
| .toggleClass() | 从匹配的元素中添加或删除一个类，如果存在就删除一个类，如果不存在就添加一个类 |

## CSS 属性

| CSS 属性 | 描述                           |
| :------- | :----------------------------- |
| .css()   | 设置或返回匹配元素的样式属性。 |

用法一：$(selector).css(key,value); 只能设置单个属性

用法二：$(selector).css({key:value, key:value, ...}); 可以设置多个属性

```js
$("p").css("color","red");

$("p").css({
  color: "white",
  "background-color": "#98bf21",
  "font-family": "Arial",
  fontSize: 20, // 属性值可以省略单位，属性名可以去掉引号及连字符，从第二个单词起每个单词首字母大写
  padding: 5,
});
```

## 元素显示隐藏

| CSS 属性 | 描述                                 |
| :------- | :----------------------------------- |
| .hide()  | 隐藏显示的元素，代替了display的none  |
| .show()  | 显示隐藏的元素，代替了display的block |

# 尺寸

| CSS 属性       | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| .width()       | **获取**匹配的元素集合中的第一个元素的当前计算宽度值。<br />**设置**每一个匹配元素的宽度<br />不包括padding、border |
| .height()      | **获取**匹配的元素集合中的第一个元素的当前计算高度值。<br />**设置**每一个匹配元素的高度<br />不包括padding、border |
| .innerWidth()  | 获取匹配的元素集合中第一个元素的当前计算宽度值，包括padding，但是不包括border。 |
| .innerHeight() | 获取匹配的元素集合中第一个元素的当前计算高度值，包括padding，但是不包括border。 |
| .outerWidth()  | 获取元素集合中第一个元素的当前计算高度值，包括padding，border和选择性的margin。返回一个整数（不包含“px”）表示的值，或如果在一个空集合上调用该方法，则会返回 null。 |
| .outerHeight() | 获取元素集合中第一个元素的当前计算高度值，包括padding，border和选择性的margin。返回一个整数（不包含“px”）表示的值，或如果在一个空集合上调用该方法，则会返回 null。 |
| .scrollLeft()  | **获取**匹配的元素集合中第一个元素的当前水平滚动条的位置。<br />**设置**每个匹配元素的水平滚动条位置。 |
| .scrollTop()   | **获取**匹配的元素集合中第一个元素的当前垂直滚动条的位置。<br />**设置**每个匹配元素的垂直滚动条位置。 |
| .offset()      | 在匹配的元素集合中，获取的第一个元素的当前坐标，坐标相对于文档。<br />设置匹配的元素集合中每一个元素的坐标， 坐标相对于文档。<br />**获取值**：该方法返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效。<br />**设置值**：$("p:last").offset({ top: 10, left: 30 }); |
| .position()    | 获取匹配元素中第一个元素的当前坐标，相对于offsetParent的坐标。(offsetParent 指离该元素最近的而且被定位过的祖先元素 )<br />该方法返回的对象包含两个整型属性：top 和 left，以像素计。 |

文档的尺寸和位置：

```js
// 取浏览器视口的大小：可视页面的大小
console.log($(window).width(), $(window).height());

// 获取整个页面的大小
console.log($(document).width(), $(document).height());

// 获取滚动条滚动位置
console.log($(document).scrollTop(), $(document).scrollLeft());
```

元素的尺寸和位置：

```JS
// 获取元素的尺寸

// 不包含padding、border
console.log($('div').width(), $('div').height());

// 包含padding
console.log($('div').innerWidth(), $('div').innerHeight());

// 包含padding、border
console.log($('div').outerWidth(), $('div').outerHeight());


//元素的位置

// 相对于文档的偏移位置
console.log($('div').offset().top, $('div').offset().left);

// 相对于有定位属性的父级元素的偏移位置
console.log($('div').position().top, $('div').position().left);
```

# 事件绑定

## 绑定事件

**（1）on绑定事件**

on() 方法在被选元素上添加一个或多个事件处理程序。

自 jQuery 版本 1.7 起，on() 方法是 bind()、live() 和 delegate() 方法的新的替代品。该方法给 API 带来很多便利，我们推荐使用该方法，它简化了 jQuery 代码库。

```js
$(selector).on(event, data, callback);
```

该方法有三个参数

- event：必须，事件类型，大小写敏感，比如鼠标点击事件 click。可以是一个或者多个事件，由空格分隔多个事件值，也可以是数组。必须是有效的事件。
- data：可选，规定传递到函数的额外数据。
- callback：可选，规定当事件发生时运行的函数。

```js
// 绑定点击事件
$('#d1').on('click',function (ev) {});

// 同时绑定点击事件和鼠标移入事件
$('#d1').on('click mouseenter',function (ev) {});
```

**（2）$(selector).event(callback) 绑定事件**

```js
$(selector).event(callback);
```

- event：事件类型，大小写敏感，比如鼠标点击事件 click
- callback：可选，代表回调函数，即事件被触发后执行的函数

```js
$('div').click(function (ev) {
  
});
```

## 移除事件

off() 方法通常用于移除通过 on() 方法添加的事件处理程序。

自 jQuery 版本 1.7 起，off() 方法是 unbind()、die() 和 undelegate() 方法的新的替代品。该方法给 API 带来很多便利，我们推荐使用该方法，它简化了 jQuery 代码库。

```js
$(selector).off(event);
```

```js
$('#d1').off('click');

$('#d1').off('click mouseenter');
```

## one绑定事件

.one() 为元素的事件添加处理函数。处理函数在每个元素上每种事件类型最多执行一次。

```js
$(selector).one(event, data, callback);
```

该方法有三个参数

- event：必须，事件类型，大小写敏感，比如鼠标点击事件 click。可以是一个或者多个事件，由空格分隔多个事件值，也可以是数组。必须是有效的事件。
- data：可选，规定传递到函数的额外数据。
- callback：可选，规定当事件发生时运行的函数。

## 触发事件

**（1）trigger() 触发**

.trigger() 方法主动触发被选元素上指定的事件以及事件的默认行为（比如表单提交）。

.trigger() 方法与 triggerHandler() 方法类似，不同的是 triggerHandler() 不触发事件的默认行为。

与 triggerHandler() 方法相比的不同之处:

- trigger() 方法不会引起事件（比如表单提交）的默认行为
- trigger() 会操作 jQuery 对象匹配的所有元素，而 triggerHandler() 只影响第一个匹配元素。
- 由 triggerHandler() 创建的事件不会在 DOM 树中冒泡，如果目标元素不直接处理它们，则不会发生任何事情。

```js
$(selector).trigger(event, param1, param2,...)
```

 参数：

- event：必须，触发的事件类型
- param1, param2,...：可选，传递到事件处理程序的额外参数

```js
$('#d1').trigger('click'); // 触发click事件
```

**（2）$(selector).event(); 触发事件**

```js
$(selector).event(); 
```

- event：事件类型，大小写敏感，比如鼠标点击事件 click

```js
$('#d1').click(); // 触发click事件
```

## 事件代理

on() 方法在被选元素的子元素上添加一个或多个事件处理程序，成为事件代理。

```js
$(selector).on(event, childSelector, data, callback)
```

该方法有四个参数

- event：必须，事件类型，一个或者多个事件，由空格分隔多个事件值，也可以是数组。必须是有效的事件
- childSelector：可选。规定只能添加到指定的子元素上的事件处理程序
- data：可选，规定传递到函数的额外数据。
- callback：可选，规定当事件发生时运行的函数。

# 事件类型

## 鼠标事件

| 事件           | 描述                                                         |
| :------------- | :----------------------------------------------------------- |
| .click()       | 为 JavaScript 的"click" 事件绑定一个处理器，或者触发元素上的 "click" 事件。 |
| .dblclick()    | 为JavaScript 的 "dblclick" 事件绑定一个处理函数，或者触发元素上的 "dblclick" 事件。 |
| .mousedown()   | 为 JavaScript 的 "mousedown" 事件绑定一个处理函数，或者触发元素上的该事件。 |
| .mouseup()     | 为 JavaScript 的 "mouseup" 事件绑定一个处理函数，或者触发元素上的该事件。 |
| .hover()       | **两个参数**：将两个事件函数绑定到匹配元素上，分别当鼠标指针进入和离开元素时被执行。<br />**一个参数**：将一个单独事件函数绑定到匹配元素上，分别当鼠标指针进入和离开元素时被执行。 |
| .mouseenter()  | 为 mouse enters（鼠标进入） 事件绑定一个处理函数，或者触发元素上的 mouse enters（鼠标进入） 事件。**（不支持冒泡）** |
| .mouseleave()  | 为 mouse leaves（鼠标离开） 事件绑定一个处理函数，或者触发元素上的 mouse leaves（鼠标离开） 事件。**（不支持冒泡）** |
| .mouseover()   | 为 JavaScript 的 "mouseover" 事件绑定一个处理函数，或者触发元素上的该事件。**（支持事件冒泡）** |
| .mouseout()    | 为 JavaScript 的 "mouseout" 事件绑定一个处理函数，或者触发元素上的该事件。**（支持事件冒泡）** |
| .mousemove()   | 为 JavaScript 的 "mousemove" 事件绑定一个处理函数，或者触发元素上的该事件。 |
| .contextmenu() | 将事件处理程序绑定到“contextmenu”JavaScript 事件，或在元素上触发该事件。 |

## 键盘事件

| 事件        | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| .keydown()  | 为 "keydown" 事件绑定一个处理函数，或者触发元素上的 "keydown" 事件。 |
| .keypress() | 为 "keypress" 事件绑定一个处理函数，或者触发元素上的 "keypress" 事件。 |
| .keyup()    | 为 "keyup" 事件绑定一个处理函数，或者触发元素上的 "keyup" 事件。 |

## 表单事件

| 事件        | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| .change()   | 为JavaScript 的 "change" 事件绑定一个处理函数，或者触发元素上的 "change" 事件。 |
| .select()   | 为 JavaScript 的 "select" 事件绑定一个处理函数，或者触发元素上的该事件。 |
| .submit()   | 为 JavaScript 的 "submit" 事件绑定一个处理函数，或者触发元素上的该事件。 |
| .focus()    | 为 JavaScript 的 "focus" 事件绑定一个处理函数，或者触发元素上的 "focus" 事件**（不支持冒泡）**。 |
| .blur()     | 为 "blur" 事件绑定一个处理函数，或者触发元素上的 "blur" 事件**（不支持冒泡）**。 |
| .focusin()  | 将一个事件函数绑定到"focusin" 事件。**（支持事件冒泡）**     |
| .focusout() | 将一个事件函数绑定到"focusout" 事件。**（支持事件冒泡）**    |

jquery里面没有input事件，不能直接使用$().input()，可以使用.on绑定input事件

```js
$('#username').on('input',function () {
  console.log('表单内容发生变化')
});
```

## 浏览器事件

| 事件      | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| .resize() | 为 JavaScript 的 "resize" 事件绑定一个处理函数，或者触发元素上的该事件。 |
| .scroll() | 为 JavaScript 的 "scroll" 事件绑定一个处理函数，或者触发元素上的该事件。 |
| .error()  | 为 JavaScript 的 "error" 事件绑定一个处理函数。              |

## 文档加载

| 事件     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| .ready() | 当DOM准备就绪时，指定一个函数来执行。<br />注：ready仅作用于document对象。由于ready事件在DOM完成初始化后触发，所以非常适合用来写其他的初始化代码。 |

```js
// $(document).ready()执行时机：网页中所有DOM结构绘制完毕后就执行，可能DOM元素关联的东西并没有加载完
$(document).ready(function() {
  console.log("页面加载完成了");
});

// $(document).ready(function(){}简化写法
$(function(){
  console.log('页面加载完成了');
});
```

## 事件对象

| 方法                                  | 描述                                                         |
| :------------------------------------ | :----------------------------------------------------------- |
| event.currentTarget                   | 在事件冒泡阶段内的当前 DOM 元素                              |
| event.data                            | 包含当前执行的处理程序被绑定时传递到事件方法的可选数据       |
| event.delegateTarget                  | 返回当前调用的 jQuery 事件处理程序所添加的元素               |
| event.isDefaultPrevented()            | 返回指定的 event 对象上是否调用了 event.preventDefault()，返回一个布尔值 |
| event.isImmediatePropagationStopped() | 返回指定的 event 对象上是否调用了 event.stopImmediatePropagation()，返回一个布尔值 |
| event.isPropagationStopped()          | 返回指定的 event 对象上是否调用了 event.stopPropagation()，返回一个布尔值 |
| event.namespace                       | 返回当事件被触发时指定的命名空间                             |
| event.metaKey                         | 事件触发时 META 键是否被按下                                 |
| event.pageX                           | 返回相对于文档左边缘的鼠标位置                               |
| event.pageY                           | 返回相对于文档上边缘的鼠标位置                               |
| event.preventDefault()                | 阻止事件的默认行为                                           |
| event.relatedTarget                   | 返回当鼠标移动时哪个元素进入或退出                           |
| event.result                          | 包含由被指定事件触发的事件处理程序返回的最后一个值           |
| event.stopImmediatePropagation()      | 阻止其他事件处理程序被调用                                   |
| event.stopPropagation()               | 阻止事件向上冒泡到 DOM 树，阻止任何父处理程序被事件通知      |
| event.target                          | 触发事件的DOM元素                                            |
| event.timeStamp                       | 返回从 1970 年 1 月 1 日到事件被触发时的毫秒数               |
| event.type                            | 返回哪种事件类型被触发                                       |
| event.which                           | 返回指定事件上哪个键盘键或鼠标按钮被按下                     |

# 动画

## 显示/隐藏

| 方法      | 描述                           |
| :-------- | :----------------------------- |
| .show()   | 显示匹配的元素                 |
| .hide()   | 隐藏匹配的元素。               |
| .toggle() | 开关效果，显示或隐藏匹配元素。 |

show()/hide()，显示和隐藏DOM元素，相当于css('display','none/block'),不会有任何动画。如果传递一个时间参数进去，就变成了动画，让元素从左上角逐渐展开或收缩。时间以毫秒为单位，但也可以是'slow'， ‘normal’， 'fast'这些字符串（对应时间长度分别是600毫秒、400毫秒、200毫秒）。

```js
.show();

.show(duration, complete);

.show(duration, easing, complete);
```

- duration：可选，一个字符串或者数字决定动画将运行多久，单位毫秒。三种预定速度的字符串("slow", "normal", 或 "fast")或表示动画时长的毫秒数值(如：1000) 
- easing：可选，一个字符串，表示过渡使用哪种缓动函数。（jQuery自身提供"linear" 和 "swing"，其他可以使用相关的插件）
- complete：可选，在动画完成时执行的函数。

## 滑动效果

| 方法           | 描述                                         |
| :------------- | :------------------------------------------- |
| .slideDown()   | 用滑动动画显示一个匹配元素。                 |
| .slideUp()     | 用滑动动画隐藏一个匹配元素。                 |
| .slideToggle() | 开关效果，用滑动动画显示或隐藏一个匹配元素。 |

```js
.slideDown(duration, complete);

.slideDown(duration, easing, complete);
```

## 渐变效果

| 方法          | 描述                                                       |
| :------------ | :--------------------------------------------------------- |
| .fadeIn()     | 通过淡入的方式显示匹配元素。                               |
| .fadeOut()    | 通过淡出的方式隐藏匹配元素。                               |
| .fadeToggle() | 开关效果，通过匹配的元素的不透明度动画，来显示或隐藏它们。 |
| .fadeTo()     | 自定义渐变效果。                                           |

```js
.fadeIn(duration, complete);

.fadeIn(duration, easing, complete);
```

```js
.fadeTo(duration, opacity, complete);

.fadeTo(duration, opacity, easing, complete);
```

- duration：可选，一个字符串或者数字决定动画将运行多久，单位毫秒。三种预定速度的字符串("slow", "normal", 或 "fast")或表示动画时长的毫秒数值(如：1000) 
- opacity：0和1之间的数字表示目标元素的不透明度。
- easing：可选，一个字符串，表示过渡使用哪种缓动函数。（jQuery自身提供"linear" 和 "swing"，其他可以使用相关的插件）
- complete：可选，在动画完成时执行的函数。

## 自定义动画

| 方法          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| .animate()    | 根据一组 CSS 属性，执行自定义动画。                          |
| .clearQueue() | 从列队中移除所有未执行的项。                                 |
| .delay()      | 设置一个延时来推迟执行队列中后续的项。                       |
| .dequeue()    | 执行匹配元素队列的下一个函数。                               |
| .finish()     | 停止当前正在运行的动画，删除所有排队的动画，并完成匹配元素所有的动画。 |
| .queue()      | 显示在匹配的元素上的已经执行的函数列队。在匹配元素上操作已经附加函数的列表。 |
| .stop()       | 停止匹配元素当前正在运行的动画。                             |

### 创建动画

如果jQuery内置常用动画不能满足需求，可以使用animate()方法，可以实现任意动画效果。只需要设置DOM元素最终的CSS状态和时间，jQuery会自动调整CSS知道达到设定的目标值。

```js
.animate( properties, duration, easing, complete)
```

- properties：一个CSS属性和值的对象，动画将根据这组对象移动。
- duration：可选，一个字符串或者数字决定动画将运行多久，单位毫秒。三种预定速度的字符串("slow", "normal", 或 "fast")或表示动画时长的毫秒数值(如：1000) 
- easing：可选，一个字符串，表示过渡使用哪种缓动函数。（jQuery自身提供"linear" 和 "swing"，其他可以使用相关的插件）
- complete：可选，在动画完成时执行的函数。

```js
// 在3秒钟内CSS过渡到设定值
$('div').animate({
  width: '300px',
  height: '300px',
  opacity: 0.5,
  top: '200px',
  left: '200px',
}, 3000);
```

动画结束的回调函数

```js
$('div').animate({
  width: '300px',
  height: '300px',
  opacity: 0.5,
  top: '200px',
  left: '200px',
  backgroundColor: 'green'
}, 3000, function () {
  console.log('动画已经结束');
  $(this).css({
    width: '100px',
    height: '100px',
    opacity: 1,
    top: '50px',
    left: '50px',
    backgroundColor: 'red'
  });
});
```

 注意：jQuery没有实现对background-color的动画效果，用animate()设置background-color也没有效果。这种情况下可以使用CSS3的transition实现动画效果或者插件。

### 串行动画

串行动画，为了实现更复杂的一连串的动画，可以通过delay()暂停

```js
$('div')
  .animate({ left: 400 }, 2000)
  .delay(1000)
  .animate({ top: 400 }, 2000)
  .delay(1000)
  .animate({ left: 50 }, 2000)
  .delay(1000)
  .animate({ top: 50 }, 2000)
```

### 停止动画

```js
// 停止当前动画
$('div').stop();

// 立即停止当前正在运行的动画和所有排队的动画
$('div').finish();

//stop() 有两个可选的Boolean参数
//参数1：用来设置是否立即停止动画,true:停止动画
//参数2：是否立即执行完成当前动画，再停止其他所有动画
$('div').stop(true,true)

// .finish()方法和.stop(true, true)很相似，.stop(true, true)将清除队列，并且目前的动画跳转到其最终值。但是，不同的是 .finish() 会导致所有排队的动画的CSS属性跳转到他们的最终值。
```

### 检测是否正在动画

检测元素是否处于动画状态，当用户快速在某个元素上执行animate()动画时，会出现动画积累。解决方法就是判断元素是否处于动画状态，假如元素不处于动画状态，才为元素添加新的动画，否则不添加。代码如下：

```js
if ($('div').is(':animated')) {
  //如果当前没有执行动画，则添加新动画
  console.log('正在动画');
}
```

# 其他

## 集合操作

| 方法    | 描述                                             |
| :------ | :----------------------------------------------- |
| .each() | 遍历一个jQuery对象，为每个匹配元素执行一个函数。 |

```js
.each( function(index, Element){} )
```

`.each()` 方法用来让DOM循环结构更简单更不易出错。它会迭代jQuery对象中的每一个DOM元素。每次回调函数执行时，会传递当前循环次数作为参数(从0开始计数)。更重要的是，回调函数是在当前DOM元素为上下文的语境中触发的。因此关键字 `this` 总是指向这个元素。

```js
//<ul>
//    <li>foo</li>
//    <li>bar</li>
//</ul>

$("li").each(function( index ) {
  console.log( index + ": "" + $(this).text() );
});
```

## DOM元素方法

| 方法       | 描述                                              |
| :--------- | :------------------------------------------------ |
| .get()     | 通过jQuery对象获取一个对应的DOM元素。             |
| .index()   | 从匹配的元素中搜索给定元素的索引值，从0开始计数。 |
| .toArray() | 返回一个包含jQuery对象集合中的所有DOM元素的数组。 |

```js
.index()

.index(selector); // Selector 一个选择器，代表一个jQuery对象，将会从这个对象中查找元素。

.index(element);// element是DOM元素或者JQ对象，用于查找的DOM元素，或者jQuery对象中的第一个元素。
```

- 如果不传递任何参数给 `.index()` 方法，则返回值就是jQuery对象中第一个元素相对于它同辈元素的位置。

- 如果参数是一个选择器， `.index()` 返回值就是原先元素相对于选择器匹配元素的位置。如果找不到匹配的元素，则 `.index()` 返回 -1.

- 如果在一组元素上调用 `.index()` ，并且参数是一个DOM元素或jQuery对象， `.index()` 返回值就是传入的元素相对于原先集合的位置。

```js
//<ul class="nav-list">
//  <li>首页</li>
//  <li>HTML5</li>
//  <li>CSS3</li>
//  <li>JavaScript</li>
//  <li>NodeJS</li>
//  <li>PHP</li>
//</ul>


$('li').mouseover(function () {
  // 获取元素的索引值
  console.log($(this).index());
  console.log($(this).index('li'));
  console.log($('li').index(this));
  console.log($('li').index($(this)));
});
```




# document

DOM最根本对象是 document，`document`节点对象代表整个文档对象，每张网页都有自己的`document`对象。只要浏览器开始载入 HTML 文档，document 对象就存在了，可以直接使用。document 对象使我们可以从脚本中对 HTML 页面中的所有元素(对象)进行访问和操作。比如，在文档中获取标签元素、创建一个新的元素等。

`document`对象有不同的办法可以获取。

- 正常的网页，直接使用`document`或`window.document`。
- `iframe`框架里面的网页，使用`iframe`节点的`contentDocument`属性。
- Ajax 操作返回的文档，使用`XMLHttpRequest`对象的`responseXML`属性。
- 内部节点的`ownerDocument`属性。

`document`对象继承了`EventTarget`接口和`Node`接口，并且混入（mixin）了`ParentNode`接口。这意味着，这些接口的方法都可以在`document`对象上调用。除此之外，`document`对象还有很多自己的属性和方法。

# 属性

## 快捷方式属性

以下属性是指向文档内部的某个节点的快捷方式。

**（1）document.defaultView**

`document.defaultView`属性返回`document`对象所属的`window`对象。如果当前文档不属于`window`对象，该属性返回`null`。

```js
document.defaultView === window // true
```

**（2）document.doctype**

对于 HTML 文档来说，`document`对象一般有两个子节点。第一个子节点是`document.doctype`，指向`<DOCTYPE>`节点，即文档类型（Document Type Declaration，简写DTD）节点。HTML 的文档类型节点，一般写成`<!DOCTYPE html>`。如果网页没有声明 DTD，该属性返回`null`。

```js
var doctype = document.doctype;
doctype // "<!DOCTYPE html>"
doctype.name // "html"
```

`document.firstChild`通常就返回这个节点。

**（3）document.documentElement**

`document.documentElement`属性返回当前文档的根元素节点（root）。它通常是`document`节点的第二个子节点，紧跟在`document.doctype`节点后面。HTML网页的该属性，一般是`<html>`节点。

**（4）document.body，document.head**

`document.body`属性指向`<body>`节点，`document.head`属性指向`<head>`节点。

这两个属性总是存在的，如果网页源码里面省略了`<head>`或`<body>`，浏览器会自动创建。另外，这两个属性是可写的，如果改写它们的值，相当于移除所有子节点。

**（5）document.scrollingElement**

`document.scrollingElement`属性返回文档的滚动元素。也就是说，当文档整体滚动时，到底是哪个元素在滚动。

标准模式下，这个属性返回的文档的根元素`document.documentElement`（即`<html>`）。兼容（quirk）模式下，返回的是`<body>`元素，如果该元素不存在，返回`null`。

```js
// 页面滚动到浏览器顶部
document.scrollingElement.scrollTop = 0;
```

**（6）document.activeElement**

`document.activeElement`属性返回获得当前焦点（focus）的 DOM 元素。通常，这个属性返回的是`<input>`、`<textarea>`、`<select>`等表单元素，如果当前没有焦点元素，返回`<body>`元素或`null`。

**（7）document.fullscreenElement**

`document.fullscreenElement`属性返回当前以全屏状态展示的 DOM 元素。如果不是全屏状态，该属性返回`null`。

```js
if (document.fullscreenElement.nodeName == 'VIDEO') {
  console.log('全屏播放视频');
}
```

上面代码中，通过`document.fullscreenElement`可以知道`<video>`元素有没有处在全屏状态，从而判断用户行为。

## 节点集合属性

以下属性返回一个`HTMLCollection`实例，表示文档内部特定元素的集合。这些集合都是动态的，原节点有任何变化，立刻会反映在集合中。

**（1）document.links**

`document.links`属性返回当前文档所有设定了`href`属性的`<a>`及`<area>`节点。

```js
// 打印文档所有的链接
var links = document.links;
for(var i = 0; i < links.length; i++) {
  console.log(links[i]);
}
```

**（2）document.forms**

`document.forms`属性返回所有`<form>`表单节点。

```js
var selectForm = document.forms[0];
```

上面代码获取文档第一个表单。

除了使用位置序号，`id`属性和`name`属性也可以用来引用表单。

```js
/* HTML 代码如下
  <form name="foo" id="bar"></form>
*/
document.forms[0] === document.forms.foo // true
document.forms.bar === document.forms.foo // true
```

**（3）document.images**

`document.images`属性返回页面所有`<img>`图片节点。

```js
var imglist = document.images;

for(var i = 0; i < imglist.length; i++) {
  if (imglist[i].src === 'banner.gif') {
    // ...
  }
}
```

上面代码在所有`img`标签中，寻找某张图片。

**（4）document.embeds，document.plugins**

`document.embeds`属性和`document.plugins`属性，都返回所有`<embed>`节点。

**（5）document.scripts**

`document.scripts`属性返回所有`<script>`节点。

```js
var scripts = document.scripts;
if (scripts.length !== 0 ) {
  console.log('当前网页有脚本');
}
```

**（6）document.styleSheets**

`document.styleSheets`属性返回网页内嵌或引入的 CSS 样式表集合。

**（7）小结**

除了`document.styleSheets`属性，以上的其他集合属性返回的都是`HTMLCollection`实例。`document.styleSheets`属性返回的是`StyleSheetList`实例。

```js
document.links instanceof HTMLCollection // true
document.images instanceof HTMLCollection // true
document.forms instanceof HTMLCollection // true
document.embeds instanceof HTMLCollection // true
document.scripts instanceof HTMLCollection // true
```

`HTMLCollection`实例是类似数组的对象，所以上面这些属性都有`length`属性，都可以使用方括号运算符引用成员。如果成员有`id`或`name`属性，还可以用这两个属性的值，在`HTMLCollection`实例上引用到这个成员。

```js
// HTML 代码如下
// <form name="myForm">
document.myForm === document.forms.myForm // true
```

## 文档静态信息属性

以下属性返回文档信息。

**（1）document.documentURI，document.URL**

`document.documentURI`属性和`document.URL`属性都返回一个字符串，表示当前文档的网址。不同之处是它们继承自不同的接口，`documentURI`继承自`Document`接口，可用于所有文档；`URL`继承自`HTMLDocument`接口，只能用于 HTML 文档。

```js
document.URL
// http://www.example.com/about

document.documentURI === document.URL
// true
```

如果文档的锚点（`#anchor`）变化，这两个属性都会跟着变化。

**（2）document.domain**

`document.domain`属性返回当前文档的域名，不包含协议和端口。比如，网页的网址是`http://www.example.com:80/hello.html`，那么`document.domain`属性就等于`www.example.com`。如果无法获取域名，该属性返回`null`。

`document.domain`基本上是一个只读属性，只有一种情况除外。次级域名的网页，可以把`document.domain`设为对应的上级域名。比如，当前域名是`a.sub.example.com`，则`document.domain`属性可以设置为`sub.example.com`，也可以设为`example.com`。修改后，`document.domain`相同的两个网页，可以读取对方的资源，比如设置的 Cookie。

另外，设置`document.domain`会导致端口被改成`null`。因此，如果通过设置`document.domain`来进行通信，双方网页都必须设置这个值，才能保证端口相同。

**（3）document.location**

`Location`对象是浏览器提供的原生对象，提供 URL 相关的信息和操作方法。通过`window.location`和`document.location`属性，可以拿到这个对象。

**（4）document.lastModified**

`document.lastModified`属性返回一个字符串，表示当前文档最后修改的时间。不同浏览器的返回值，日期格式是不一样的。

```js
document.lastModified
// "03/07/2018 11:18:27"
```

注意，`document.lastModified`属性的值是字符串，所以不能直接用来比较。`Date.parse`方法将其转为`Date`实例，才能比较两个网页。

```js
var lastVisitedDate = Date.parse('01/01/2018');
if (Date.parse(document.lastModified) > lastVisitedDate) {
  console.log('网页已经变更');
}
```

如果页面上有 JavaScript 生成的内容，`document.lastModified`属性返回的总是当前时间。

**（5）document.title**

`document.title`属性返回当前文档的标题。默认情况下，返回`<title>`节点的值。但是该属性是可写的，一旦被修改，就返回修改后的值。

```js
document.title = '新标题';
document.title // "新标题"
```

**（6）document.characterSet**

`document.characterSet`属性返回当前文档的编码，比如`UTF-8`、`ISO-8859-1`等等。

## 文档状态属性

**（1）document.hidden**

`document.hidden`属性返回一个布尔值，表示当前页面是否可见。如果窗口最小化、浏览器切换了 Tab，都会导致导致页面不可见，使得`document.hidden`返回`true`。

这个属性是 Page Visibility API 引入的，一般都是配合这个 API 使用。

**（2）document.visibilityState**

`document.visibilityState`返回文档的可见状态。

它的值有四种可能。

> - `visible`：页面可见。注意，页面可能是部分可见，即不是焦点窗口，前面被其他窗口部分挡住了。
> - `hidden`：页面不可见，有可能窗口最小化，或者浏览器切换到了另一个 Tab。
> - `prerender`：页面处于正在渲染状态，对于用户来说，该页面不可见。
> - `unloaded`：页面从内存里面卸载了。

这个属性可以用在页面加载时，防止加载某些资源；或者页面不可见时，停掉一些页面功能。

**（3）document.readyState**

`document.readyState`属性返回当前文档的状态，共有三种可能的值。

- `loading`：加载 HTML 代码阶段（尚未完成解析）
- `interactive`：加载外部资源阶段
- `complete`：加载完成

这个属性变化的过程如下。

1. 浏览器开始解析 HTML 文档，`document.readyState`属性等于`loading`。
2. 浏览器遇到 HTML 文档中的`<script>`元素，并且没有`async`或`defer`属性，就暂停解析，开始执行脚本，这时`document.readyState`属性还是等于`loading`。
3. HTML 文档解析完成，`document.readyState`属性变成`interactive`。
4. 浏览器等待图片、样式表、字体文件等外部资源加载完成，一旦全部加载完成，`document.readyState`属性变成`complete`。

下面的代码用来检查网页是否加载成功。

```js
// 基本检查
if (document.readyState === 'complete') {
  // ...
}

// 轮询检查
var interval = setInterval(function() {
  if (document.readyState === 'complete') {
    clearInterval(interval);
    // ...
  }
}, 100);
```

另外，每次状态变化都会触发一个`readystatechange`事件。

# 方法

## 打开和关闭文档

`document.open`方法打开一个要写入的文档，使得文档处于可写状态，供`document.write`方法写入内容。

`document.close`方法用来关闭`document.open()`打开的文档。

```js
document.open();
document.write('hello world');
document.close();
```

## 向文档写入内容

`document.write`方法用于向当前文档写入内容。

在网页的首次渲染阶段，只要页面没有关闭写入（即没有执行`document.close()`），`document.write`写入的内容就会追加在已有内容的后面。

```js
// 页面显示“helloworld”
document.open();
document.write('hello');
document.write('world');
document.close();
```

注意，`document.write`会当作 HTML 代码解析，不会转义。

```js
document.write('<p>hello world</p>');
```

上面代码中，`document.write`会将`<p>`当作 HTML 标签解释。

如果页面已经解析完成（`DOMContentLoaded`事件发生之后），再调用`write`方法，它会先调用`open`方法，擦除当前文档所有内容，然后再写入。

```js
document.addEventListener('DOMContentLoaded', function (event) {
  document.write('<p>Hello World!</p>');
});

// 等同于
document.addEventListener('DOMContentLoaded', function (event) {
  document.open();
  document.write('<p>Hello World!</p>');
  document.close();
});
```

如果在页面渲染过程中调用`write`方法，并不会自动调用`open`方法。（可以理解成，`open`方法已调用，但`close`方法还未调用。）

```html
<html>
<body>
hello
<script>
  document.write("world")
</script>
</body>
</html>
```

在浏览器打开上面网页，将会显示`hello world`。

`document.write`是 JavaScript 语言标准化之前就存在的方法，现在完全有更符合标准的方法向文档写入内容（比如对`innerHTML`属性赋值）。所以，除了某些特殊情况，应该尽量避免使用`document.write`这个方法。

`document.writeln`方法与`write`方法完全一致，除了会在输出内容的尾部添加换行符。

```js
document.write(1);
document.write(2);
// 12

document.writeln(1);
document.writeln(2);
// 1
// 2
//
```

注意，`writeln`方法添加的是 ASCII 码的换行符，渲染成 HTML 网页时不起作用，即在网页上显示不出换行。网页上的换行，必须显式写入`<br>`。

## 查找元素节点

### 据CSS选择器查找

document.querySelector(selectors)和document.querySelectorAll(selectors) 都是根据CSS选择器查找元素。

**（1）document.querySelector(selectors)**

`document.querySelector`方法接受一个 **CSS 选择器**作为参数，返回匹配该选择器的元素节点。如果有多个元素节点满足匹配条件，则返回第一个匹配的元素节点。如果没有发现匹配的元素节点，则返回`null`。

```js
// 这个例子中，会返回当前文档中第一个类名为 "myclass" 的元素：
var el = document.querySelector(".myclass");

// 一个更复杂的选择器
var el = document.querySelector("div.user-panel.main input[name='login']");
var el2 = document.querySelector('#myParent > [ng-click]');1

// 在id 为'main'的元素的子节点中，获取第一个class为'test'的元素
var main = document.getElementById('main');
var test = main.querySelector('.test');
```

**（2）document.querySelectorAll(selectors)**

`document.querySelectorAll`方法与`querySelector`用法类似，区别是返回一个`NodeList`对象，包含所有匹配给定选择器的节点。

```js
var elementList = document.querySelectorAll('.myclass');
```

这两个方法的参数，可以是逗号分隔的多个 CSS 选择器，返回匹配其中一个选择器的元素节点，这与 CSS 选择器的规则是一致的。

```js
var matches = document.querySelectorAll('div.note, div.alert');
```

上面代码返回`class`属性是`note`或`alert`的`div`元素。

这两个方法都支持复杂的 CSS 选择器。

```js
//要获取文档中所有<p>元素的NodeList。
var matches = document.querySelectorAll("p");

//此示例返回文档中所有<div>元素的列表，其中class包含"note"或"alert"：
var matches = document.querySelectorAll("div.note, div.alert");

//得到一个<p>元素的列表，其直接父元素是一个class为"highlighted"的div，并且位于ID为"test"的容器内。
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");

// 属性选择器用于返回ID为"userlist"的列表中包含值为"1"的"data-active"属性的元素
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");
```

**注意**：querySelector和querySelectorAll不支持 CSS 伪元素的选择器（比如`:first-line`和`:first-letter`）和伪类的选择器（比如`:link`和`:visited`），即无法选中伪元素和伪类。

如果`querySelectorAll`方法的参数是字符串`*`，则会返回文档中的所有元素节点。`querySelectorAll`的返回结果不是动态集合，不会实时反映元素节点的变化。

querySelector和querySelectorAll()方法不仅可以在 document 对象上调用，也可以在任何元素节点上调用。

- 在document对象上调用时，会搜索整个DOM文档，包含根节点。

- 在任意元素上调用时，它将返回的是以当前元素为父节点，与指定CSS选择器匹配的第一个子元素或者所有子元素。

### 根据id查找

`document.getElementById(id)`方法返回匹配指定`id`属性的元素节点。如果没有发现匹配的节点，则返回`null`。

```js
var elem = document.getElementById('para1');
```

注意，该方法的参数是大小写敏感的。比如，如果某个节点的`id`属性是`main`，那么`document.getElementById('Main')`将返回`null`。

`document.getElementById()`方法与`document.querySelector()`方法都能获取元素节点，不同之处是`document.querySelector()`方法的参数使用 CSS 选择器语法，`document.getElementById()`方法的参数是元素的`id`属性。

```js
document.getElementById('myElement')
document.querySelector('#myElement')
```

上面代码中，两个方法都能选中`id`为`myElement`的元素，但是 由于元素的 id 在大部分情况下要求是独一无二的`document.getElementById()`比`document.querySelector()`效率高得多。

另外，这个方法只能在`document`对象上使用，不能在其他元素节点上使用。

### 根据类名查找

`document.getElementsByClassName(name)`方法返回一个类似数组的对象（`HTMLCollection`实例），包括了所有`class`名字符合指定条件的元素，元素的变化实时反映在返回结果中。

```js
var elements = document.getElementsByClassName(names);
```

由于`class`是保留字，所以 JavaScript 一律使用`className`表示 CSS 的`class`。

参数可以是多个`class`，它们之间使用空格分隔。

```js
var elements = document.getElementsByClassName('foo bar');
```

上面代码返回同时具有`foo`和`bar`两个`class`的元素，`foo`和`bar`的顺序不重要。

注意，正常模式下，CSS 的`class`是大小写敏感的。（`quirks mode`下，大小写不敏感。）

与`getElementsByTagName()`方法一样，`getElementsByClassName()`方法不仅可以在`document`对象上调用，也可以在任何元素节点上调用。

- 在document对象上调用时，会搜索整个DOM文档，包含根节点。

- 在任意元素上调用时，它将返回的是以当前元素为父节点，所有指定类名的子元素。

```js
// 非document对象上调用
var elements = rootElement.getElementsByClassName(names);

// 在id 为'main'的元素的子节点中，获取所有class为'test'的元素
var main = document.getElementById('main');
var test = main.getElementsByClassName('test');
```

### 根据标签名查找

`document.getElementsByTagName(tagName)`方法搜索 HTML 标签名，参数是类名，返回符合条件的元素。它的返回值是一个类似数组对象（`HTMLCollection`实例），可以实时反映 HTML 文档的变化。如果没有任何匹配的元素，就返回一个空集。

```js
var paras = document.getElementsByTagName('p');
paras instanceof HTMLCollection // true
```

上面代码返回当前文档的所有`p`元素节点。

HTML 标签名是大小写不敏感的，因此`getElementsByTagName()`方法的参数也是大小写不敏感的。另外，返回结果中，各个成员的顺序就是它们在文档中出现的顺序。

如果传入`*`，就可以返回文档中所有 HTML 元素。

```js
var allElements = document.getElementsByTagName('*');
```

注意，元素节点本身也定义了`getElementsByTagName`方法，返回该元素的后代元素中符合条件的元素。也就是说，这个方法不仅可以在`document`对象上调用，也可以在任何元素节点上调用。

- 在document对象上调用时，会搜索整个DOM文档，包含根节点。

- 在任意元素上调用时，它将返回的是以当前元素为父节点，所有指定标签名的子元素。

```js
var firstPara = document.getElementsByTagName('p')[0];
var spans = firstPara.getElementsByTagName('span');
```

上面代码选中第一个`p`元素内部的所有`span`元素。

### 根据name属性值

`document.getElementsByName()`方法用于选择拥有`name`属性的 HTML 元素（比如`<form>`、`<input>`、`<radio>`、`<img>`、`<frame>`、`<embed>`和`<object>`等），参数是name属性值，返回一个类似数组的的对象（`NodeList`实例），因为`name`属性相同的元素可能不止一个。

```js
// 表单为 <form name="login"></form>
var forms = document.getElementsByName('login');
forms[0].tagName // "FORM"
```

## 创建节点

### 创建元素节点

`document.createElement(tagName)`方法用来生成元素节点，并返回该节点。

```js
var newDiv = document.createElement('div');
```

`createElement`方法的参数为元素的标签名，即元素节点的`tagName`属性，对于 HTML 网页大小写不敏感，即参数为`div`或`DIV`返回的是同一种节点。如果参数里面包含尖括号（即`<`和`>`）会报错。

```js
document.createElement('<div>');
// DOMException: The tag name provided ('<div>') is not a valid name
```

### 创建文本节点

`document.createTextNode`方法用来生成文本节点（`Text`实例），并返回该节点。它的参数是文本节点的内容。

```js
var newDiv = document.createElement('div');
var newContent = document.createTextNode('Hello');
newDiv.appendChild(newContent);
```

上面代码新建一个`div`节点和一个文本节点，然后将文本节点插入`div`节点。

这个方法可以确保返回的节点，被浏览器当作文本渲染，而不是当作 HTML 代码渲染。因此，可以用来展示用户的输入，避免 XSS 攻击。

```js
var div = document.createElement('div');
div.appendChild(document.createTextNode('<span>Foo & bar</span>'));
console.log(div.innerHTML)
// &lt;span&gt;Foo &amp; bar&lt;/span&gt;
```

上面代码中，`createTextNode`方法对大于号和小于号进行转义，从而保证即使用户输入的内容包含恶意代码，也能正确显示。

需要注意的是，该方法不对单引号和双引号转义，所以不能用来对 HTML 属性赋值。

```js
function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var userWebsite = '" onmouseover="alert(\'derp\')" "';
var profileLink = '<a href="' + escapeHtml(userWebsite) + '">Bob</a>';
var div = document.getElementById('target');
div.innerHTML = profileLink;
// <a href="" onmouseover="alert('derp')" "">Bob</a>
```

上面代码中，由于`createTextNode`方法不转义双引号，导致`onmouseover`方法被注入了代码。

### 创建属性节点

`document.createAttribute`方法生成一个新的属性节点（`Attr`实例），并返回它。

```js
var attribute = document.createAttribute(name);
```

`document.createAttribute`方法的参数`name`，是属性的名称。

```js
var node = document.getElementById('div1');

var a = document.createAttribute('my_attrib');
a.value = 'newVal';

node.setAttributeNode(a);
// 或者
node.setAttribute('my_attrib', 'newVal');
```

上面代码为`div1`节点，插入一个值为`newVal`的`my_attrib`属性。

该方法的返回值是一个类型为 Attr 的节点。你可以通过为该节点的 nodeValue 属性赋值来设置该属性节点的属性值，也可以使用常用的 setAttribute() 方法来替代该方法。

### 创建注释节点

`document.createComment`方法生成一个新的注释节点，并返回该节点。

```js
var CommentNode = document.createComment(data);
```

`document.createComment`方法的参数是一个字符串，会成为注释节点的内容。

### 创建文档片段

`document.createDocumentFragment`方法生成一个空的文档片段对象（`DocumentFragment`实例）。

```js
var docFragment = document.createDocumentFragment();
```

`DocumentFragment`是一个存在于内存的 DOM 片段，不属于当前文档，常常用来生成一段较复杂的 DOM 结构，然后再插入当前文档。这样做的好处在于，因为`DocumentFragment`不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的 DOM 有更好的性能表现。

```js
var docfrag = document.createDocumentFragment();

[1, 2, 3, 4].forEach(function (e) {
  var li = document.createElement('li');
  li.textContent = e;
  docfrag.appendChild(li);
});

var element  = document.getElementById('ul');
element.appendChild(docfrag);
```

上面代码中，文档片断`docfrag`包含四个`<li>`节点，这些子节点被一次性插入了当前文档。

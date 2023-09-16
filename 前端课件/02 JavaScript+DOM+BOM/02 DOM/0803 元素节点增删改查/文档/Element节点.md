# 元素节点

元素节点：`Element`节点对象对应网页的 HTML 元素。每一个 HTML 元素，在 DOM 树上都会转化成一个`Element`节点对象。

元素节点的`nodeType`属性都是`1`。

```js
var p = document.querySelector('p');
p.nodeName // "P"
p.nodeType // 1
```

`Element`对象继承了`Node`接口，因此`Node`的属性和方法在`Element`对象都存在。

此外，不同的 HTML 元素对应的元素节点是不一样的，浏览器使用不同的构造函数，生成不同的元素节点，比如`<a>`元素的构造函数是`HTMLAnchorElement()`，`<button>`是`HTMLButtonElement()`。因此，元素节点不是一种对象，而是许多种对象，这些对象除了继承`Element`对象的属性和方法，还有各自独有的属性和方法。

# 实例属性

## 元素特性的相关属性

**（1）Element.id**

`Element.id`属性返回指定元素的`id`属性，该属性可读写。

```js
// HTML 代码为 <p id="foo">
var p = document.querySelector('p');
p.id // "foo"
```

注意，`id`属性的值是大小写敏感，即浏览器能正确识别`<p id="foo">`和`<p id="FOO">`这两个元素的`id`属性，但是最好不要这样命名。

**（2）Element.tagName**

`Element.tagName`属性返回指定元素的大写标签名，与`nodeName`属性的值相等。

```js
// HTML代码为
// <span id="myspan">Hello</span>
var span = document.getElementById('myspan');
span.id // "myspan"
span.tagName // "SPAN"
```

**（4）Element.accessKey**

`Element.accessKey`属性用于读写分配给当前元素的快捷键。

```js
// HTML 代码如下
// <button accesskey="h" id="btn">点击</button>
var btn = document.getElementById('btn');
btn.accessKey // "h"
```

上面代码中，`btn`元素的快捷键是`h`，按下`Alt + h`就能将焦点转移到它上面。

**（5）Element.draggable**

`Element.draggable`属性返回一个布尔值，表示当前元素是否可拖动。该属性可读写。

**（6）Element.lang**

`Element.lang`属性返回当前元素的语言设置。该属性可读写。

```js
// HTML 代码如下
// <html lang="en">
document.documentElement.lang // "en"
```

**（8）Element.title**

`Element.title`属性用来读写当前元素的 HTML 属性`title`。该属性通常用来指定，鼠标悬浮时弹出的文字提示框。

## 元素状态的相关属性

**Element.hidden**

`Element.hidden`属性返回一个布尔值，表示当前 HTML 元素的`hidden`属性的值。该属性可读写，用来控制当前元素是否可见。

```js
var btn = document.getElementById('btn');
var mydiv = document.getElementById('mydiv');

btn.addEventListener('click', function () {
  mydiv.hidden = !mydiv.hidden;
}, false);
```

注意，该属性与 CSS 设置是互相独立的。CSS 对当前元素可见性的设置，`Element.hidden`并不能反映出来。也就是说，这个属性并不能用来判断当前元素的实际可见性。

CSS 设置的优先级高于`Element.hidden`。如果 CSS 指定了该元素不可见（`display: none`）或可见（`visibility: visible`），那么`Element.hidden`并不能改变该元素实际的可见性。换言之，这个属性只在 CSS 没有明确设定当前元素的可见性时才有效。

## class属性操作

Element.className，Element.classList

`className`属性用来读写当前元素节点的`class`属性。它的值是一个字符串，每个`class`之间用空格分割。

`classList`属性返回一个类似数组的对象，当前元素节点的每个`class`就是这个对象的一个成员。

```js
// HTML 代码 <div class="one two three" id="myDiv"></div>
var div = document.getElementById('myDiv');

div.className
// "one two three"

div.classList
// {
//   0: "one"
//   1: "two"
//   2: "three"
//   length: 3
// }
```

上面代码中，`className`属性返回一个空格分隔的字符串，而`classList`属性指向一个类似数组的对象，该对象的`length`属性（只读）返回当前元素的`class`数量。

`classList`对象有下列方法。

- `add()`：增加一个 class。
- `remove()`：移除一个 class。
- `contains()`：检查当前元素是否包含某个 class。
- `toggle()`：将某个 class 移入或移出当前元素。
- `item()`：返回指定索引位置的 class。
- `toString()`：将 class 的列表转为字符串。

```js
var div = document.getElementById('myDiv');

div.classList.add('myCssClass');
div.classList.add('foo', 'bar');
div.classList.remove('myCssClass');
div.classList.toggle('myCssClass'); // 如果 myCssClass 不存在就加入，否则移除
div.classList.contains('myCssClass'); // 返回 true 或者 false
div.classList.item(0); // 返回第一个 Class
div.classList.toString();
```

下面比较一下，`className`和`classList`在添加和删除某个 class 时的写法。

```js
var foo = document.getElementById('foo');

// 添加class
foo.className += 'bold';
foo.classList.add('bold');

// 删除class
foo.classList.remove('bold');
foo.className = foo.className.replace(/^bold$/, '');
```

`toggle`方法可以接受一个布尔值，作为第二个参数。如果为`true`，则添加该属性；如果为`false`，则去除该属性。

```js
el.classList.toggle('abc', boolValue);

// 等同于
if (boolValue) {
  el.classList.add('abc');
} else {
  el.classList.remove('abc');
}
```

## 元素节点内容属性

**（1）Element.innerHTML**

`Element.innerHTML`属性返回一个字符串，等同于该元素包含的所有 HTML 代码。该属性可读写，常用来设置某个节点的内容。它能改写所有元素节点的内容，包括`<HTML>`和`<body>`元素。

如果将`innerHTML`属性设为空，等于删除所有它包含的所有节点。

```js
el.innerHTML = '';
```

上面代码等于将`el`节点变成了一个空节点，`el`原来包含的节点被全部删除。

注意，读取属性值的时候，如果文本节点包含`&`、小于号（`<`）和大于号（`>`），`innerHTML`属性会将它们转为实体形式`&`、`<`、`>`。如果想得到原文，建议使用`element.textContent`属性。

```js
// HTML代码如下 <p id="para"> 5 > 3 </p>
document.getElementById('para').innerHTML
// 5 &gt; 3
```

写入的时候，如果插入的文本包含 HTML 标签，会被解析成为节点对象插入 DOM。注意，如果文本之中含有`<script>`标签，虽然可以生成`script`节点，但是插入的代码不会执行。

```js
var name = "<script>alert('haha')</script>";
el.innerHTML = name;
```

上面代码将脚本插入内容，脚本并不会执行。但是，`innerHTML`还是有安全风险的。

```js
var name = "<img src=x onerror=alert(1)>";
el.innerHTML = name;
```

上面代码中，`alert`方法是会执行的。因此为了安全考虑，如果插入的是文本，最好用`textContent`属性代替`innerHTML`。

**（2）Element.outerHTML**

`Element.outerHTML`属性返回一个字符串，表示当前元素节点的所有 HTML 代码，包括该元素本身和所有子元素。

```js
// HTML 代码如下
// <div id="d"><p>Hello</p></div>
var d = document.getElementById('d');
d.outerHTML
// '<div id="d"><p>Hello</p></div>'
```

`outerHTML`属性是可读写的，对它进行赋值，等于替换掉当前元素。

```js
// HTML 代码如下
// <div id="container"><div id="d">Hello</div></div>
var container = document.getElementById('container');
var d = document.getElementById('d');
container.firstChild.nodeName // "DIV"
d.nodeName // "DIV"

d.outerHTML = '<p>Hello</p>';
container.firstChild.nodeName // "P"
d.nodeName // "DIV"
```

上面代码中，变量`d`代表子节点，它的`outerHTML`属性重新赋值以后，内层的`div`元素就不存在了，被`p`元素替换了。但是，变量`d`依然指向原来的`div`元素，这表示被替换的`DIV`元素还存在于内存中。

注意，如果一个节点没有父节点，设置`outerHTML`属性会报错。

```js
var div = document.createElement('div');
div.outerHTML = '<p>test</p>';
// DOMException: This element has no parent node.
```

上面代码中，`div`元素没有父节点，设置`outerHTML`属性会报错。

**（3）HTMLElement.innerText**

`HTMLElement.innerText` 属性表示一个节点及其后代的“渲染”文本内容。

注意： innerText 很容易与`Node.textContent`混淆, 但这两个属性间实际上有很重要的区别. 大体来说, innerText 可操作已被渲染的内容， 而 textContent 则不会。

 如果元素自身没有 被渲染 (比如：被从文档中删除或没有在视图中显示), 这时返回值与 Node.textContent 属性相同。

```html
<p id="source">
  <style>
    #source {
      color: red;
    }
  </style>
  Take a look at<br>how this text<br>is interpreted
  below.
  <span style="display:none">HIDDEN TEXT</span>
</p>

<script>

console.log(source.textContent);		
  /*
  #source { color: red; }
  Take a look athow this textis interpreted
  below.
  HIDDEN TEXT
  */
console.log(source.innerText);
  /*
  Take a look at
  how this text
  is interpreted below.
  */
</script>
```

## 元素节点遍历属性

### 向上遍历

**Element.parentElement**

`Element.parentElement`属性返回当前元素的父元素节点，如果没有返回null

### 向下遍历

**（1）Element.firstElementChild，Element.lastElementChild**

`Element.firstElementChild`属性返回当前元素的第一个元素子节点，`Element.lastElementChild`返回最后一个元素子节点。

如果没有元素子节点，这两个属性返回`null`。

**（2）Element.children，Element.childElementCount**

`Element.children`属性返回一个类似数组的对象（`HTMLCollection`实例），包括当前元素节点的所有子元素。如果当前元素没有子元素，则返回的对象包含零个成员。

```js
if (para.children.length) {
  var children = para.children;
    for (var i = 0; i < children.length; i++) {
      // ...
    }
}
```

上面代码遍历了`para`元素的所有子元素。

这个属性与`Node.childNodes`属性的区别是，它只包括元素类型的子节点，不包括其他类型的子节点。

`Element.childElementCount`属性返回当前元素节点包含的子元素节点的个数，与`Element.children.length`的值相同。

### 同级遍历

**Element.nextElementSibling，Element.previousElementSibling**

`Element.nextElementSibling`属性返回当前元素节点的后一个同级元素节点，如果没有则返回`null`。

```js
// HTML 代码如下
// <div id="div-01">Here is div-01</div>
// <div id="div-02">Here is div-02</div>
var el = document.getElementById('div-01');
el.nextElementSibling
// <div id="div-02">Here is div-02</div>
```

`Element.previousElementSibling`属性返回当前元素节点的前一个同级元素节点，如果没有则返回`null`。

# 实例方法

## 查找元素

### 根据CSS选择器

**（1）Element.querySelector()**

`Element.querySelector`方法接受 CSS 选择器作为参数，返回父元素的第一个匹配的子元素。如果没有找到匹配的子元素，就返回`null`。

```js
var content = document.getElementById('content');
var el = content.querySelector('p');
```

上面代码返回`content`节点的第一个`p`元素。

`Element.querySelector`方法可以接受任何复杂的 CSS 选择器。

```js
document.body.querySelector("style[type='text/css'], style:not([type])");
```

注意，这个方法无法选中伪元素。

它可以接受多个选择器，它们之间使用逗号分隔。

```js
element.querySelector('div, p')
```

上面代码返回`element`的第一个`div`或`p`子元素。

需要注意的是，浏览器执行`querySelector`方法时，是先在全局范围内搜索给定的 CSS 选择器，然后过滤出哪些属于当前元素的子元素。因此，会有一些违反直觉的结果，下面是一段 HTML 代码。

```js
<div>
<blockquote id="outer">
  <p>Hello</p>
  <div id="inner">
    <p>World</p>
  </div>
</blockquote>
</div>
```

那么，像下面这样查询的话，实际上返回的是第一个`p`元素，而不是第二个。

```js
var outer = document.getElementById('outer');
outer.querySelector('div p')
// <p>Hello</p>
```

**（2）Element.querySelectorAll()**

`Element.querySelectorAll`方法接受 CSS 选择器作为参数，返回一个`NodeList`实例，包含所有匹配的子元素。

```js
var el = document.querySelector('#test');
var matches = el.querySelectorAll('div.highlighted > p');
```

该方法的执行机制与`querySelector`方法相同，也是先在全局范围内查找，再过滤出当前元素的子元素。因此，选择器实际上针对整个文档的。

它也可以接受多个 CSS 选择器，它们之间使用逗号分隔。如果选择器里面有伪元素的选择器，则总是返回一个空的`NodeList`实例。

### 根据类名查找

`Element.getElementsByClassName`方法返回一个`HTMLCollection`实例，成员是当前元素节点的所有具有指定 class 的子元素节点。该方法与`document.getElementsByClassName`方法的用法类似，只是搜索范围不是整个文档，而是当前元素节点。

```js
element.getElementsByClassName('red test');
```

注意，该方法的参数大小写敏感。

由于`HTMLCollection`实例是一个活的集合，`document`对象的任何变化会立刻反应到实例，下面的代码不会生效。

```js
// HTML 代码如下
// <div id="example">
//   <p class="foo"></p>
//   <p class="foo"></p>
// </div>
var element = document.getElementById('example');
var matches = element.getElementsByClassName('foo');

for (var i = 0; i< matches.length; i++) {
  matches[i].classList.remove('foo');
  matches.item(i).classList.add('bar');
}
// 执行后，HTML 代码如下
// <div id="example">
//   <p></p>
//   <p class="foo bar"></p>
// </div>
```

上面代码中，`matches`集合的第一个成员，一旦被拿掉 class 里面的`foo`，就会立刻从`matches`里面消失，导致出现上面的结果。

### 通过标签名查找

`Element.getElementsByTagName()`方法返回一个`HTMLCollection`实例，成员是当前节点的所有匹配指定标签名的子元素节点。该方法与`document.getElementsByClassName()`方法的用法类似，只是搜索范围不是整个文档，而是当前元素节点。

```js
var table = document.getElementById('forecast-table');
var cells = table.getElementsByTagName('td');
```

注意，该方法的参数是大小写不敏感的，因为 HTML 标签名也是大小写不敏感。

## 匹配CSS选择器

`Element.matches`方法返回一个布尔值，表示当前元素是否匹配给定的 CSS 选择器。

```js
if (el.matches('.someClass')) {
  console.log('Match!');
}
```

## 移除元素

`Element.remove`方法继承自 ChildNode 接口，用于将当前元素节点从它的父节点移除。

```js
var el = document.getElementById('mydiv');
el.remove();
```

上面代码将`el`节点从 DOM 树里面移除。

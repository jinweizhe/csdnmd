# Web API简介

## 什么是API

应用程序编程接口（API，Application Programming Interface）是基于编程语言构建的结构，使开发人员更容易地创建复杂的功能。它们抽象了复杂的代码，并提供一些简单的接口规则直接使用。

## Web API

在 Web 开发中，API 通常是开发者能用在应用（app）中的一系列代码特性（如方法、属性 、事件 和 URL），这些特性被用于与用户的 web 浏览器中的组件、用户电脑上的其他软硬件或者第三方软件与服务交互。

API就是一些预先定义好的一些功能。在HTML里边的API就是HTML定义好的一些**方法**或是**属性**来供我们调用，从而实现对HTML节点的增删改查及事件的操作。

## JS 与 Web API 的关系

<img src="https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211218232618629.png" alt="image-20211218232618629" style="zoom:50%;" />

ECMAScript 的标准是由ECMA 组织制定的，是学习JS 的基础，不包含对网页操作的API，常用于浏览器环境中，也可以运行在Node.js环境中。

Web API 的标准是由 W3C 组织制定的，是浏览器提供的一套操作浏览器功能和页面元素的 API ，主要包含DOM 和 BOM（不过BOM目前还没有统一的官方标准），是实现网页交互的基础，和浏览器相关的操作都是DOM和BOM实现的。比如修改body背景颜色使用 `document.body.style.backgroundColor = 'red';`。

Web API 接口参考 : https://developer.mozilla.org/zh-CN/docs/Web/API

# DOM

DOM 全称为“文档对象模型”（Document Object Model）是 JavaScript 操作HTML网页的编程接口。DOM的作用是将网页转为一个 JavaScript 对象，提供专门操作HTML文档的API，从而可以用JS脚本对HTML文档进行各种操作，比如改变文档的结构，样式和内容等。简言之，它会将web页面和脚本或程序语言连接起来。

DOM 在 1998 年成为 W3C 推荐标准，提供了基本文档结构和查询的接口。

DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。

浏览器会根据 DOM 模型，把整个HTML 页面解析为一个有层次结构的DOM节点树，把层次中的每一个组成部分都称之为节点。所以在HTML文档中，所有的事物都被称作为DOM节点：元素节点、文本节点、注释节点等，标签元素在HTML文档中就被称之为元素节点，而我们要想通过js代码对页面（其实就是对标签元素）进行动态操作，就先要去了解DOM节点，这样借助DOM提供的API，就可以对DOM节点进行增删改查。

![DOM HTML tree](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/ct_htmltree.gif)

# 节点类型

DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子。

根据 W3C 的 HTML DOM 标准，HTML 文档中的所有事物都是DOM节点，常见的节点类型有：

- `document`：整个文档树的顶层节点(根节点)
- `DocumentType`：`doctype`标签（比如`<!DOCTYPE html>`）
- 元素节点：网页的各种HTML标签（比如`<body>`、`<a>`等）
- 属性节点：网页元素的属性（比如`class="right"`）
- 文本节点：标签之间或标签包含的文本（空格和换行也是一个节点，一般被划分为文本节点）
- 注释节点：注释的内容
- `DocumentFragment`：文档的片段

浏览器提供一个原生的节点对象`Node`，上面节点都继承了`Node`，因此具有一些共同的属性和方法。

# 节点树

一个HTML文档中所有节点，这些节点按照层级关系和结构，大致可以分为：父节点，子节点，同胞节点，这些节点的层级关系和结构就构成了一个节点树的树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，又像一棵树。

浏览器原生提供`document`节点，代表整个文档。

```js
document	// 整个文档树
```

文档的第一层有两个节点，第一个是文档类型节点（`<!doctype html>`），第二个是 HTML 网页的顶层容器标签`<html>`。后者构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。

节点树中的节点彼此拥有层级关系。在节点树中，除了根节点，其他节点都有三种层级关系，我们常用**父（parent）**、**子（child）**和**同胞（sibling）**等术语来描述这些关系。父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）

- 根节点（root）：在节点树中，顶端节点被称为根
- 父节点关系（parentNode）：直接的那个上级节点，每个节点都有父节点、除了根（它没有父节点）。
- 子节点关系（childNodes）：直接的下级节点，一个节点可拥有任意数量的子节点。
- 同级节点关系（sibling）：拥有同一个父节点的节点

![Node tree](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/dom_navigate.gif)

DOM 提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括`firstChild`（第一个子节点）和`lastChild`（最后一个子节点）等属性，同级节点接口包括`nextSibling`（紧邻在后的那个同级节点）和`previousSibling`（紧邻在前的那个同级节点）属性。

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>DOM 教程</title>
  </head>
  <body>
    <h1>DOM 课程1</h1>
    <p>Hello world!</p>
  </body>
</html>
```

从上面的 HTML 中：

- `<html>` 节点没有父节点；它是根节点
- `<head>` 和 `<body>` 的父节点是 `<html>` 节点
- 文本节点 "Hello world!" 的父节点是 `<p>` 节点

并且：

- `<html>` 节点拥有两个子节点：`<head>` 和 `<body>`
- `<head>` 节点拥有两个子节点：`<meta>` 与 `<title>` 节点
- `<title>` 节点也拥有一个子节点：文本节点 "DOM 教程"
- `<h1>` 和 `<p>` 节点是同胞节点，同时也是 `<body>` 的子节点

并且：

- `<head>` 元素是 `<html>` 元素的首个子节点
- `<body>` 元素是 `<html>` 元素的最后一个子节点
- `<h1>` 元素是 `<body>` 元素的首个子节点
- `<p>` 元素是 `<body>` 元素的最后一个子节点

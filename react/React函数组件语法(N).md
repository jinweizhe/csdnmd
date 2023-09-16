# react学习的说明

## 新的官网

2023年3月16日React推出了最新的官网 [react.dev](https://react.dev/)，

- 新的 React 站点 （[react.dev](https://react.dev/)） 使用函数组件和 Hook 教授现代 React。
- 我们包括图表、插图、挑战和 600 多个新的交互式示例。
- 以前的 React 文档站点现已移至 [legacy.reactjs.org](https://legacy.reactjs.org/)。

React 很快就会成立十年。在 JavaScript 年代，这就像整整一个世纪！我们[更新了 React 主页](https://react.dev/)，以反映为什么我们认为 React 是当今创建用户界面的好方法，并更新了入门指南，以更突出地提及基于 React 的现代框架。

## 全力投入现代React与Hooks

当我们在 2018 年发布 React Hooks（React16.8） 时，Hooks 文档假设读者熟悉类组件。这帮助社区非常迅速地采用了 Hooks，但一段时间后，旧文档无法为新读者服务。新读者必须学习两次 React：一次是使用类组件，然后再次使用 Hooks。

**新文档从一开始就教授 React with Hooks。**文档分为两个主要部分：

- **[学习 React](https://zh-hans.react.dev/learn)** 是一门自定进度的课程，从头开始教授 React。
- API 参考提供了每个 React **[API](https://zh-hans.react.dev/reference)** 的详细信息和使用示例。

让我们仔细看看您可以在每个部分中找到的内容。

> 注意 仍然有一些罕见的类组件用例还没有基于 Hook 的等效项。类组件仍受支持，并记录在新站点的[旧版 API](https://zh-hans.react.dev/reference/react/legacy) 部分中。

所以，全面拥抱函数组件吧。

# React简介

## 概述

React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。

react在发展过程中，一直跟随原生JS的脚步，使用react就像使用原生JS一样自由。

2015年推出了使用react来编写移动端的app ---- react-native

## 官网

中文网（新）：https://zh-hans.react.dev/

中文网：https://react.docschina.org/

中文网（旧）：https://zh-hans.legacy.reactjs.org/

英文网：https://react.dev/

## 特点

- React 是 Facebook 推出的一个用来构建用户界面的 JavaScript 库。 
- React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。
- React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。

- React可以作为MVVM中第二个V，也就是View，但是并不是MVVM框架。
- MVVM一个最显著的特征：双向绑定。React没有这个，它是单向数据绑定的。
- React是一个单向数据流的库，状态驱动视图。
- React 整体是函数式的思想，把组件设计成纯函数，状态和逻辑通过参数传入，所以在react中，是单向数据流。

## 生态

React 有非常成熟的生态系统，包括但不限于脚手架create-react-app、路由react-router-dom、请求库axios、状态管理react-redux、UI组件库：Ant Design等，使得React 已经成为目前主流的前端开发框架。

# React脚手架

## create-react-app

React脚手架：用来帮助程序员快速创建一个基于React库的模板项目

- 包含了所有需要的配置（语法检查、jsx编译、devServer…）
- 下载好了所有相关的依赖，可以直接运行一个简单效果
- react提供了一个用于创建react项目的脚手架库：create-react-app
- 项目的整体技术架构为:  react + webpack + es6 + eslint
- 使用脚手架开发的项目的特点: 模块化, 组件化, 工程化

### 官网

https://create-react-app.dev/

### 创建和启动项目

1. 创建项目

```bash
npx create-react-app react-app

# 或者

npm i -g create-react-app
create-react-app react-app
```

2. 启动项目

```bash
cd react-app

npm start
```

### 项目结构

```
├── node_modules 
├── public: 静态资源文件夹
│   ├── favicon.icon: 网站页签图标
│   ├── index.html: 主页面
│   ├── logo192.png: logo图
│   ├── logo512.png: logo图
│   ├── manifest.json: 应用加壳的配置文件
│   └── robots.txt: 爬虫协议文件
├── src 
│   ├── App.css: App组件的CSS样式
│   ├── App.js: App组件
│   ├── App.test.js: 用于给App做测试
│   ├── index.css: 全局CSS样式
│   ├── index.js: 入口文件
│   ├── logo.svg: logo图
│   ├── reportWebVitals.js: 页面性能分析文件(需要web-vitals库的支持)
│   ├── setupTests.js: 组件单元测试的文件(需要jest-dom库的支持)
├── .gitignore: git版本管制忽略的配置
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```

### sass支持

在react中支持sass，直接安装node-sass模块即可

```shell
npm i node-sass -D
```

## Vite

目前推荐使用vite创建react项目

### 创建和启动项目

1. 创建项目

```shell
npm create vite@latest
```

2. 启动项目

```bash
cd  项目目录 #进入项目目录

npm i 		  #安装模块包

npm run dev #启动项目  
```

### 项目结构

```txt
├── node_modules 
├── public
│   └── vite.svg: 页签图标
├── src
│   ├── assets: 存放静态资源
│   │   └── react.svg
│   │── App.css App组件样式文件
│   │── App.vue: App所有组件
│   │── index.css 公共样式文件
│   │── main.jsx: 入口文件
├── .gitignore: git版本管制忽略的配置
├── index.html: 主页面
├── package.json: 应用包配置文件 
├── package-lock.json：包版本控制文件
├── vite.config.js：项目配置文件
```

### 常见配置

```js
// vite.config.js

import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
		// 导入模块的时候可以省略模块的后缀名
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.css', '.scss'],
	},
   server: {
    host: '127.0.0.1',//指定服务器应该监听哪个 IP 地址。
    port: 8080,//指定开发服务器端口。
    // open: true,//在开发服务器启动时自动在浏览器中打开应用程序
    proxy:{}, //设置代理
  }
});

```

# 虚拟DOM

## 什么是虚拟DOM

- **起源**
  虚拟dom最先是由**facebook团队**提出的，最先运用在react中，之后在vue2.0版本中引入了虚拟DOM的概念

- **是什么**
  **虚拟 dom 是相对于浏览器所渲染出来的真实 dom 的，**

  以往，我们改变更新页面，只能通过首先查找dom对象，再进行修改dom的方式来达到目的。 但**这种方式相当消耗计算资源，** `因为每次查询 dom ，都需要遍历整颗 dom 树。`

  现在，我们用对象的方式来描述真实的 dom，并且通过对象与真实dom建立了一一对应的关系，那么每次 dom 的更改，我通过找到相应对象，也就找到了相应的dom节点，再对其进行更新。这样的话，就能节省性能，因为**js 对象的查询，比对整个dom 树的查询，所消耗的性能要少。**

- **本质**
  Vnode的本质就是用**树型结构的JS对象**来描述真实的DOM结构的信息，这个树结构的JS对象包含了整个DOM结构的信息。

  ![](https://img-blog.csdnimg.cn/20200914200940772.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lpeXVlcWluZ2h1aQ==,size_16,color_FFFFFF,t_70#pic_center)

​	可见左边的DOM结构，不论是标签名称还是标签的属性或标签的子集，都会对应在右边的树结构里。

## 虚拟DOM优缺点

### 优点：

- `降低浏览器性能消耗`
  因为**Javascript的运算速度远大于DOM操作的执行速度**，因此，运用patching算法来计算出真正需要更新的节点，最大限度地减少DOM操作，从而提高性能。

  > **在vnode技术出现之前**，我们要改变页面展示的内容**只能通过遍历查询 dom 树**的方式找到需要修改的 dom，然后修改样式行为或者结构，来达到**更新 ui** 的目的。这种方式**相当消耗计算资源**，因为每次查询 dom 几乎都需要遍历整颗 dom树。

  > **在vnode技术出现之后**，我们建立一个**虚拟 dom 对象来对应真实的 dom 树**，那么**每次 dom 的更改就变成了 js 对象的属性的更改** ，这样一来就能查找 js 对象的属性变化要比查询 dom 树的 性能开销小。

- `diff算法,减少回流和重绘`
  通过diff算法，优化遍历，对真实dom进行打补丁式的新增、修改、删除，实现局部更新，减少回流和重绘。

  > vnode优化性能核心思想，就是每次**更新 dom 都尽量避免刷新整个页面**，而是有针对性的 去**刷新那被更改的一部分** ，来释放掉被无效渲染占用的 gpu，cup性能。同时，也减少了大量的dom操作，减少了浏览器的回流和重绘。

- `跨平台`
  **虚拟 DOM 本质上是 JavaScript 对象**，而 DOM 与平台强相关，相比之下虚拟 DOM ，可以进行更方便地跨平台操作，例如：`服务器渲染、weex 开发`等等

### 缺点：

- `首次显示要慢些`:
  首次渲染大量DOM时，由于多了一层虚拟DOM的计算, 会比innerHTML插入慢
- `无法进行极致优化`：
  虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中 无法进行针对性的极致优化。

## 虚拟DOM实现原理

虚拟 dom 相当于**在 js 和真实 dom 中间加了一个缓存**，利用 dom diff 算法避免了没有必要 的 dom 操作，从而提高性能。

具体实现步骤如下：

1. 用 JavaScript 对象结构表示 DOM 树的结构，比如说：一个元素对象，包含TagName、props 和 Children这些属性。然后根据这个对象构建一个真正的 DOM 节点， 插到文档当中；
2. 当数据状态变更的时候，重新构造一棵新的对象树。通过diff 算法，比较新旧虚拟 DOM 树的差异。
3. 根据差异，对真正的 DOM 树进行增、删、改。

## 虚拟DOM的逻辑

React虚拟dom到真实dom发生了什么?

![](https://img-blog.csdnimg.cn/20200412130335404.png#pic_center)

![](https://img-blog.csdnimg.cn/20200914200852524.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3lpeXVlcWluZ2h1aQ==,size_16,color_FFFFFF,t_70#pic_center)

Virtual DOM 真的比操作原生 DOM 快吗？采用尤大大的回答：

- **这是一个性能 vs. 可维护性的取舍**。框架的意义在于为你掩盖底层的 DOM 操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护。

- **没有任何框架可以比纯手动的优化 DOM 操作更快**，`因为框架的 DOM 操作层需要应对任何上层 API 可能产生的操作，它的实现必须是普适的`。

在构建一个实际应用的时候，你难道为每一个地方都去做手动优化吗？出于可维护性的考虑，这显然不可能。**框架给你的保证是，你在不需要手动优化的情况下，我依然可以给你提供过得去的性能。**

## react中的虚拟DOM

在index.html有以下代码

```html
<div id="root"></div>
```

在React中创建虚拟DOM有两种方式：

- 使用`JSX`语法直接创建
- 使用[React.createElement(component, props, ...children)](https://zh-hans.reactjs.org/docs/react-api.html#createelement)创建

```jsx
// 创建虚拟DOM，创建虚拟DOM使用的是JSX语法一定不要写引号，因为不是字符串
const VDOM = <h1>Hello React!</h1>;

// 如果是多行标签，使用圆括号括起来表示是一个整体
const VDOM = (  
  <h1 id="title">
    <span>Hello React!</span>
  </h1>
)
```

```jsx
const VDOM = React.createElement('h1',{id:'title'},React.createElement('span',{},'Hello,React!'));
```

使用 JSX 编写的代码将会被转换成使用 `React.createElement()` 的形式。如果使用了 JSX 方式，那么一般来说就不需要直接调用 `React.createElement()`。

在main.js使用 `ReactDOM.createRoot()`绑定根标签，用`root.render()`方法渲染组件，将组件渲染到根元素`#root`中。

```jsx
// 渲染虚拟DOM到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(VDOM);
```

## 渲染虚拟DOM

渲染虚拟DOM语法:  `ReactDOM.createRoot(containerDOM).render(virtualDOM)；`该方法用来将虚拟DOM元素渲染到页面中的真实容器DOM中显示

- containerDOM：真实的DOM容器对象，用来包含虚拟DOM，一般使用`id="root"`的div标签：`document.getElementById('root')`
- virtualDOM：虚拟DOM，在React的项目中，第一个虚拟DOM组件是App组件，也可以是其他虚拟DOM对象

# JSX 语法

**JSX** 是 JavaScript 语法扩展，可以让你在 JavaScript 文件中书写类似 HTML 的标签。虽然还有其它方式可以编写组件，但大部分 React 开发者更喜欢 JSX 的简洁性，并且在大部分代码库中使用它。

React使用JSX语法，JSX全称 JavaScript XML，是在React定义的一种类似于XML的JS扩展语法: JS + XML本质是`React.createElement(component, props, ...children)`方法的语法糖

JSX的作用: 用来简化创建虚拟DOM：

- 写法：`const vdom = <h1>Hello React!</h1>`
- 注意1：它不是字符串, 也不是HTML/XML标签
- 注意2：它最终产生的就是一个JS对象

JSX支持JS与html混写，React中的JSX语法是通过babel进行转码，

## JSX: 将标签引入 JavaScript 

网页是构建在 HTML、CSS 和 JavaScript 之上的。多年以来，web 开发者都是将网页内容存放在 HTML 中，样式放在 CSS 中，而逻辑则放在 JavaScript 中 —— 通常是在不同的文件中！页面的内容通过标签语言描述并存放在 HTML 文件中，而逻辑则单独存放在 JavaScript 文件中。

| ![](https://zh-hans.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fwriting_jsx_html.png&w=384&q=75) | ![](https://zh-hans.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fwriting_jsx_js.png&w=384&q=75) |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                             HTML                             |                          JavaScript                          |

但随着 Web 的交互性越来越强，逻辑越来越决定页面中的内容。JavaScript 负责 HTML 的内容！这也是为什么 **在 React 中，渲染逻辑和标签共同存在于同一个地方——组件。**

| ![](https://zh-hans.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fwriting_jsx_sidebar.png&w=384&q=75) | ![](https://zh-hans.react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fwriting_jsx_form.png&w=384&q=75) |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                 `Sidebar.js` React component                 |                  `Form.js` React component                   |

将一个按钮的渲染逻辑和标签放在一起可以确保它们在每次编辑时都能保持互相同步。反之，彼此无关的细节是互相隔离的，例如按钮的标签和侧边栏的标签。这样我们在修改其中任意一个组件时会更安全。

每个 React 组件都是一个 JavaScript 函数，它会返回一些标签，React 会将这些标签渲染到浏览器上。React 组件使用一种被称为 JSX 的语法扩展来描述这些标签。JSX 看起来和 HTML 很像，但它的语法更加严格并且可以动态展示信息。了解这些区别最好的方式就是将一些 HTML 标签转化为 JSX 标签。

> **注意**
>
> [JSX and React 是相互独立的](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform) 东西。但它们经常一起使用，但你 *可以* 单独使用它们中的任意一个，JSX 是一种语法扩展，而 React 则是一个 JavaScript 的库。

## 将 HTML 转化为 JSX 

假设你现在有一些（完全有效的）HTML 标签：

```html
<h1>海蒂·拉玛的代办事项</h1>
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  class="photo"
>
<ul>
  <li>发明一种新式交通信号灯
  <li>排练一个电影场景
  <li>改进频谱技术
</ul>
```

而现在想要把这些标签迁移到组件中，如果直接复制到组件中，并不能正常工作：

```jsx
export default function TodoList() {
  return (
    // 这不起作用！
    <h1>海蒂·拉玛的代办事项</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    >
    <ul>
      <li>发明一种新式交通信号灯
      <li>排练一个电影场景
      <li>改进频谱技术
    </ul>
  );
}

```

> **Error**
>
> ```jsx
> /App.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (5:4)
> 
>   3 |     // 这不起作用！
>   4 |     <h1>海蒂·拉玛的代办事项</h1>
> > 5 |     <img 
>     |     ^
>   6 |       src="https://i.imgur.com/yXOvdOSs.jpg" 
>   7 |       alt="Hedy Lamarr" 
>   8 |       class="photo"
> ```

这是因为 JSX 语法更加严格并且相比 HTML 有更多的规则！上面的错误提示可以帮助你修复标签中的错误，当然也可以参考下面的指引。

> **注意**
>
> 大部分情况下，React 在屏幕上显示的错误提示就能帮你找到问题所在，如果在编写过程中遇到问题就参考一下提示吧。

## JSX规则

### 只能返回一个根元素 

如果想要在一个组件中包含多个元素，**需要用一个父标签把它们包裹起来**。

```jsx
function App(){
  return (
  	<div>
      <h1>海蒂·拉玛的代办事项</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        class="photo"
      >
      <ul>
        ...
      </ul>
    </div>
  )
}
```

如果你不想在标签中增加一个额外的 `<div>`，可以用 `<>` 和 `</>` 元素来代替：

```jsx
function App(){
  return (
    <>
      <h1>海蒂·拉玛的代办事项</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        class="photo"
      >
      <ul>
        ...
      </ul>
    </>
  )
}
```

这个空标签被称作 *[Fragment](https://zh-hans.react.dev/reference/react/Fragment)*. React Fragment 允许你将子元素分组，而不会在 HTML 结构中添加额外节点。

### 标签必须闭合 

JSX 要求标签必须正确闭合。像 `<img>` 这样的自闭合标签必须书写成 `<img />`，而像 `<li>oranges` 这样只有开始标签的元素必须带有闭合标签，需要改为 `<li>oranges</li>`。

海蒂·拉玛的照片和代办事项的标签经修改后变为：

```jsx
<>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
   />
  <ul>
  <li>发明一种新式交通信号灯</li>
  <li>排练一个电影场景</li>
  <li>改进频谱技术</li>
  </ul>
</>
```

### 使用驼峰式命名法给 所有 大部分属性命名！ 

JSX 最终会被转化为 JavaScript，而 JSX 中的属性也会变成 JavaScript 对象中的键值对。在你自己的组件中，经常会遇到需要用变量的方式读取这些属性的时候。但 JavaScript 对变量的命名有限制。例如，变量名称不能包含 `-` 符号或者像 `class` 这样的保留字。

这就是为什么在 React 中，大部分 HTML 和 SVG 属性都用驼峰式命名法表示。例如，需要用 `strokeWidth` 代替 `stroke-width`。由于 `class` 是一个保留字，所以在 React 中需要用 `className` 来代替。这也是 [DOM 属性中的命名](https://developer.mozilla.org/en-US/docs/Web/API/Element/className):

```jsx
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
```

你可以 [在 React DOM 元素中找到所有对应的属性](https://zh-hans.react.dev/reference/react-dom/components/common)。如果你在编写属性时发生了错误，不用担心 —— React 会在 [浏览器控制台](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) 中打印一条可能的更正信息。

### 高级提示：使用 JSX 转化器 

将现有的 HMTL 中的所有属性转化 JSX 的格式是很繁琐的。我们建议使用 [转化器](https://transform.tools/html-to-jsx) 将 HTML 和 SVG 标签转化为 JSX。这种转化器在实践中非常有用。但我们依然有必要去了解这种转化过程中发生了什么，这样你就可以编写自己的 JSX 了。

这是最终的结果：

```jsx
export default function TodoList() {
  return (
    <>
      <h1>海蒂·拉玛的代办事项</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
      <ul>
        <li>发明一种新式交通信号灯</li>
        <li>排练一个电影场景</li>
        <li>改进频谱技术</li>
      </ul>
    </>
  );
}
```

## 在 JSX 中通过大括号使用 JavaScript

JSX 允许你在 JavaScript 中编写类似 HTML 的标签，从而使渲染的逻辑和内容可以写在一起。有时候，你可能想要在标签中添加一些 JavaScript 逻辑或者引用动态的属性。这种情况下，你可以在 JSX 的大括号内来编写 JavaScript

### 使用引号传递字符串 

当你想把一个字符串属性传递给 JSX 时，把它放到单引号或双引号中：

```jsx
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

```

这里的 `"https://i.imgur.com/7vQD0fPs.jpg"` 和 `"Gregorio Y. Zara"` 就是被作为字符串传递的。

但是如果你想要动态地指定 `src` 或 `alt` 的值呢？你可以 **用 `{` 和 `}` 替代 `"` 和 `"` 以使用 JavaScript 变量** ：

```jsx
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

请注意 `className="avatar"` 和 `src={avatar}` 之间的区别，`className="avatar"` 指定了一个就叫 `"avatar"` 的使图片在样式上变圆的 CSS 类名，而 `src={avatar}` 这种写法会去读取 JavaScript 中 `avatar` 这个变量的值。这是因为大括号可以使你直接在标签中使用 JavaScript！

### 使用大括号：一扇进入 JavaScript 世界的窗户 

JSX 是一种编写 JavaScript 的特殊方式。这为在大括号 `{ }` 中使用 JavaScript 带来了可能。下面的示例中声明了科学家的名字，`name`，然后在 `<h1>` 后的大括号内嵌入它：

```jsx
export default function TodoList() {
  const name = 'Gregorio Y. Zara';
  return (
    <h1>{name}'s To Do List</h1>
  );
}
```

试着将 `name` 的值从 `'Gregorio Y. Zara'` 更改成 `'Hedy Lamarr'`。看看这个 To Do List 的标题将如何变化？

大括号内的任何 JavaScript 表达式都能正常运行，包括像 `formatDate()` 这样的函数调用：

```jsx
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}

```

#### 可以在哪使用大括号 

在 JSX 中，只能在以下两种场景中使用大括号：

1. 用作 JSX 标签内的**文本**：`<h1>{name}'s To Do List</h1>` 是有效的，但是 `<{tag}>Gregorio Y. Zara's To Do List</{tag}>` 无效。
2. 用作紧跟在 `=` 符号后的 **属性**：`src={avatar}` 会读取 `avatar` 变量，但是 `src="{avatar}"` 只会传一个字符串 `{avatar}`。

### 使用 “双大括号”：JSX 中的 CSS 和 对象 

除了字符串、数字和其它 JavaScript 表达式，你甚至可以在 JSX 中传递对象。对象也用大括号表示，例如 `{ name: "Hedy Lamarr", inventions: 5 }`。因此，为了能在 JSX 中传递，你必须用另一对额外的大括号包裹对象：`person={{ name: "Hedy Lamarr", inventions: 5 }}`。

你可能在 JSX 的内联 CSS 样式中就已经见过这种写法了。React 不要求你使用内联样式（使用 CSS 类就能满足大部分情况）。但是当你需要内联样式的时候，你可以给 `style` 属性传递一个对象：

```jsx
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

### JavaScript 对象和大括号的更多可能 

你可以将多个表达式合并到一个对象中，在 JSX 的大括号内分别使用它们：

```jsx
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

```

## JSX语法规则总结

### JS规则总结

- 所有JS表达式都是写在`{}`内部，遇到代码块（以 `{` 开头），就用 JavaScript 语法规则解析
- `{}`内只能写JS表达式（arr.map、count等），不能写JS语句（for、if、switch等）
- JSX 引号内的值会作为字符串传递给属性。
- `{}` 让你可以将 JavaScript 的逻辑和变量带入到标签中。
- 它们会在 JSX 标签中的内容区域或紧随属性的 `=` 后起作用。
- `{{` 和 `}}` 并不是什么特殊的语法：它只是包在 JSX 大括号内的 JavaScript 对象。

### 标签规则

- 所有标签都是写在`<>`内部，遇到 HTML 标签（以 `<` 开头），就用 HTML 语法规则解析
- 如果标签名首字母`小写`，转换为HTML中同名的DOM元素，如果HTML中没有同名的元素，直接报错
- 如果标签名首字母`大写`，则认为该标签是自定义组件，react会去渲染同名的组件，如果组件未定义，直接报错。
- 不管是自定义组件，还是HTML的DOM标签必须闭合，比如输入框 input使用 `<input type="text" />`
- 使用JSX定义组件，组件名必须以大写字母开头

### 属性规则

- 在标签上声明类名不用class，使用`className`：配合属性可实现动态类名

- 标签的内联样式，使用 `style={{key: value}}`形式：配合属性可实现动态样式
- 标签的其他属性使用字符串（`<a href="https://"></a>`）或者`{}`插入变量（`<img src={user.avatarUrl}></img>`）

# React组件化编程

## 一些概念

- 模块：向外提供特定功能的js程序，一般就是一个js文件。随着业务逻辑增加，代码越来越多且复杂，使用模块可以复用js，简化js的编写，提高js运行效率
- 组件：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)。一个真实界面的功能更复杂，使用组件可以复用编码，简化项目编码，提高运行效率
- 模块化：当应用的js都以模块来编写的，这个应用就是一个模块化的应用
- 组件化：当应用是以多组件的方式实现，这个应用就是一个组件化的应用

## 组件的概念

**组件**是 React 的核心概念之一。它们是构建用户界面（UI）的基础，是你开始 React 之旅的最佳起点！

React 允许你将标签、CSS 和 JavaScript 组合成自定义“组件”，即**应用程序中可复用的 UI 元素。**

- React 允许你创建组件，**应用程序的可复用 UI 元素。**
- 在 React 应用程序中，每一个 UI 模块都是一个组件。
- React 是常规的 JavaScript 函数，除了：
  1. 它们的名字总是以大写字母开头。
  2. 它们返回 JSX 标签。

## 组件声明方式

react声明一个组件有两种方式

- 函数组件
- 类组件

组件使用的注意事项：

- 组件名称**必须**以大写字母开头。

- React 会将以小写字母开头的组件视为原生 DOM 标签。例如，`<div />` 代表 HTML 的 div 标签，而 `<Welcome />` 则代表一个组件，并且在作用域内使用 Welcome。
  
- 组件的模板只能包含**一个根标签**，否则也会报错。

- 组件模板中的DOM元素以及使用组件的时候**必须有结束标签**。

通常来说，每个新的 React 应用程序的顶层组件都是 App 组件。

## 第一个组件

### 定义（声明）组件

React 应用程序是由 **组件** 组成的。一个组件是 UI（用户界面）的一部分，它拥有自己的逻辑和外观。组件可以小到一个按钮，也可以大到整个页面。

**React 组件是一段可以 使用标签进行扩展 的 JavaScript 函数**（React 组件是返回标签的 JavaScript 函数）。

```jsX
// App.js

export default function Profile() {
   // 此处的this是undefined，因为babel编译后开启了严格模式，其实在函数组件中也不需要使用this
   console.log('函数组件中 this：',this); 
  
  // 函数中需要返回这个组件的模板，组件的模板就是一个虚拟DOM
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}

```

函数组件的渲染：

- render函数解析组件标签，找到Profile组件
- Profile组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中

构建组件三步走：

#### 第一步：导出组件 ：

`export default` 前缀是一种 [JavaScript 标准语法](https://developer.mozilla.org/docs/web/javascript/reference/statements/export)（非 React 的特性）。它允许你标签一个文件中的主要函数以便你以后可以从其他文件引入它。

> 陷阱：React 组件是常规的 JavaScript 函数，但**组件的名称必须以大写字母开头**，否则它们将无法运行！

#### 第二步：定义函数 ：

使用 `function Profile() { }` 定义名为 `Profile` 的 JavaScript 函数。

#### 第三步：添加标签 ：

这个组件返回一个带有 `src` 和 `alt` 属性的 `<img />` 标签。`<img />` 写得像 HTML，但实际上是 JavaScript！这种语法被称为 [JSX](https://zh-hans.react.dev/learn/writing-markup-with-jsx)，它允许你在 JavaScript 中嵌入使用标签。

返回语句可以全写在一行上，如下面组件中所示：

```jsx
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```

但是，如果你的标签和 `return` 关键字不在同一行，则必须把它包裹在一对括号中，如下所示：

```jsx
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```

> 陷阱：没有括号包裹的话，任何在 `return` 下一行的代码都 [将被忽略](https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi)！

### 使用组件 

现在你已经定义了 `Profile` 组件，你可以在其他组件中使用它。也可以在 `Gallery` 组件中多次使用 `Profile` 组件，进行组件的复用：

```jsx
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家</h1>
      {/*组件的复用*/}
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

注意下面两者的区别：

- `<section>`是小写的，所以 React 知道我们指的是 HTML 标签。
- `<Profile />` 以大写 `P` 开头，所以 React 知道我们想要使用名为 `Profile` 的组件。

### 嵌套和组织组件 

组件是常规的 JavaScript 函数，所以你可以将多个组件保存在同一份文件中。当组件相对较小或彼此紧密相关时，这是一种省事的处理方式。如果这个文件变得臃肿，你也可以随时将 `Profile` 移动到单独的文件中。

因为 `Profile` 组件在 `Gallery` 组件中渲染——甚至好几次！——我们可以认为 `Gallery` 是一个 **父组件，** 将每个 `Profile` 渲染为一个“孩子”。这是 React 的神奇之处：你可以只定义组件一次，然后按需多处和多次使用。

> **陷阱**
>
> 组件可以渲染其他组件，但是 **请不要嵌套他们的定义**：
>
> ```jsx
> export default function Gallery() {
> 
>   // 🔴 永远不要在组件中定义组件
> 
>     function Profile() {
> 
>       // ...
>     }
>   // ...
> 
> }
> ```
>
> 上面这段代码 [非常慢，并且会导致 bug 产生](https://zh-hans.react.dev/learn/preserving-and-resetting-state#different-components-at-the-same-position-reset-state)。 因此，你应该在顶层定义每个组件：
>
> ```jsx
> export default function Gallery() {
> 
>   // ...
> 
> }
> 
> // ✅ 在顶层声明组件
> function Profile() {
>   // ...
> 
> }
> ```
>
> 当子组件需要使用父组件的数据时，你需要 [通过 props 的形式进行传递](https://zh-hans.react.dev/learn/passing-props-to-a-component)，而不是嵌套定义。

## 组件的导入与导出

组件的神奇之处在于它们的可重用性：你可以创建一个由其他组件构成的组件。但当你嵌套了越来越多的组件时，则需要将它们拆分成不同的文件。这样可以使得查找文件更加容易，并且能在更多地方复用这些组件。

在【第一个组件】中，你创建了一个 `Profile` 组件，并且渲染在 `Gallery` 组件里。

```jsx
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家们</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

在此示例中，所有组件目前都定义在**根组件** `App.js` 文件中，在 `Create React App` 或者 `vite` 中，你的应用应在 `src/App.js` 文件中定义。

### 导出和导入一个组件 

如果将来需要在首页添加关于科学书籍的列表，亦或者需要将所有的资料信息移动到其他文件。这时将 `Gallery` 组件和 `Profile` 组件移出根组件文件会更加合理。这会使组件更加模块化，并且可在其他文件中复用。你可以根据以下三个步骤对组件进行拆分：

1. **创建** 一个新的 JS 文件来存放该组件。
2. **导出** 该文件中的函数组件（可以使用 [默认导出](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_the_default_export) 或 [具名导出](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_named_exports)）
3. 在需要使用该组件的文件中 **导入**（可以根据相应的导出方式使用 [默认导入](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#importing_defaults) 或 [具名导入](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#import_a_single_export_from_a_module)）。

这里将 `Profile` 组件和 `Gallery` 组件，从 `App.js` 文件中移动到了 `Gallery.js` 文件中。修改后，即可在 `App.js` 中导入 `Gallery.js` 中的 `Gallery` 组件:

```jsx
// Gallery.js
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家们</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

```jsx
// App.js
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}
```

该示例中需要注意的是，如何将组件拆分成两个文件：

1. Gallery.js：
   - 定义了 `Profile` 组件，该组件仅在该文件内使用，没有被导出。
   - 使用 **默认导出** 的方式，将 `Gallery` 组件导出
2.  App.js：
   - 使用 **默认导入** 的方式，从 `Gallery.js` 中导入 `Gallery` 组件。
   - 使用 **默认导出** 的方式，将根组件 `App` 导出。

### 从同一文件中导出和导入多个组件 

如果你只想展示一个 `Profile` 组，而不展示整个图集。你也可以导出 `Profile` 组件。但 `Gallery.js` 中已包含 *默认* 导出，此时，你不能定义 *两个* 默认导出。但你可以将其在新文件中进行默认导出，或者将 `Profile` 进行 *具名* 导出。**同一文件中，有且仅有一个默认导出，但可以有多个具名导出！**

> 注意
>
> 为了减少在默认导出和具名导出之间的混淆，一些团队会选择只使用一种风格（默认或者具名），或者禁止在单个文件内混合使用。这因人而异，选择最适合你的即可！

首先，用具名导出的方式，将 `Profile` 组件从 `Gallery.js` **导出**（不使用 `default` 关键字）：

```jsx
export function Profile() {

  // ...

}
```

接着，用具名导入的方式，从 `Gallery.js` 文件中 **导入** `Profile` 组件（用大括号）:

```jsx
import { Profile } from './Gallery.js';
```

最后，在 `App` 组件里 **渲染** `<Profile />`：

```jsx
export default function App() {
  return <Profile />;
}
```

现在，`Gallery.js` 包含两个导出：一个是默认导出的 `Gallery`，另一个是具名导出的 `Profile`。`App.js` 中均导入了这两个组件。尝试将 `<Profile />` 改成 `<Gallery />`，回到示例中：

```jsx
// Gallery.js
export function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>了不起的科学家们</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

```

```jsx
// App.js
import Gallery from './Gallery.js';
import { Profile } from './Gallery.js';

export default function App() {
  return (
    <Profile />
  );
}

```

示例中混合使用了默认导出和具名导出：

- Gallery.js:
  - 使用 **具名导出** 的方式，将 `Profile` 组件导出，并取名为 `Profile`。
  - 使用 **默认导出** 的方式，将 `Gallery` 组件导出。
- App.js:
  - 使用 **具名导入** 的方式，从 `Gallery.js` 中导入 `Profile` 组件，并取名为 `Profile`。
  - 使用 **默认导入** 的方式，从 `Gallery.js` 中导入 `Gallery` 组件。
  - 使用 **默认导出** 的方式，将根组件 `App` 导出。

### 默认导出和具名导出

你也许会使用默认导出或者具名导出的方式，来导出 `Profile` 组件，但请保证在 `App.js` 和 `Gallery.js` 里使用相应的导入语句！具体可以参考下面的表格：

| 语法 | 导出语句                              | 导入语句                                |
| ---- | ------------------------------------- | --------------------------------------- |
| 默认 | `export default function Button() {}` | `import Button from './Button.js';`     |
| 具名 | `export function Button() {}`         | `import { Button } from './Button.js';` |

## 组件Props

### 将 Props 传递给组件

React 组件使用 *props* 来互相通信。每个父组件都可以提供 props 给它的子组件，从而将一些信息传递给它。Props 可能会让你想起 HTML 属性，但你可以通过它们传递任何 JavaScript 值，包括对象、数组和函数。

### 熟悉的 props 

Props 是你传递给 JSX 标签的信息。例如，`className`、`src`、`alt`、`width` 和 `height` 便是一些可以传递给 `<img>` 的 props：

```jsx
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}

```

你可以传递给 `<img>` 标签的 props 是预定义的（ReactDOM 符合 [HTML 标准](https://www.w3.org/TR/html52/semantics-embedded-content.html#the-img-element)）。但是你可以将任何 props 传递给 *你自己的* 组件，例如 `<Avatar>` ，以便自定义它们。 就像这样！

### 向组件传递 props 

在这段代码中， `Profile` 组件没有向它的子组件 `Avatar` 传递任何 props ：

```jsx
export default function Profile() {

  return (
    <Avatar />
  );

}
```

你可以分两步给 `Avatar` 一些 props。

#### 步骤 1: 将 props 传递给子组件 

首先，将一些 props 传递给 `Avatar`。例如，让我们传递两个 props：`person`（一个对象）和 `size`（一个数字）：

```jsx
export default function Profile() {

  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

现在，你可以在 `Avatar` 组件中读取这些 props 了。

#### 步骤 2: 在子组件中读取 props 

你可以通过在 `function Avatar` 之后直接列出它们的名字 `person, size` 来读取这些 props。这些 props 在 `({` 和 `})` 之间，并由逗号分隔。这样，你可以在 `Avatar` 的代码中使用它们，就像使用变量一样。

```jsx
function Avatar({ person, size }) {

  // 在这里 person 和 size 是可访问的

}
```

向使用 `person` 和 `size` props 渲染的 `Avatar` 添加一些逻辑，你就完成了。

现在你可以配置 `Avatar` ，通过不同的 props，使它能以多种不同的方式进行渲染。尝试变换值吧！

```jsx
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}

```

Props 使你独立思考父组件和子组件。 例如，你可以改变 `Profile` 中的 `person` 或 `size` props，而无需考虑 `Avatar` 如何使用它们。 同样，你可以改变 `Avatar` 使用这些 props 的方式，不必考虑 `Profile`。

你可以将 props 想象成可以调整的“旋钮”。它们的作用与函数的参数相同 —— 事实上，props *正是* 组件的唯一参数！ React 组件函数接受一个参数，一个 `props` 对象：

```jsx
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
```

通常你不需要整个 `props` 对象，所以可以将它解构为单独的 props。

### 给 prop 指定一个默认值 

如果你想在没有指定值的情况下给 prop 一个默认值，你可以通过在参数后面写 `=` 和默认值来进行解构：

```jsx
function Avatar({ person, size = 100 }) {

  // ...

}
```

现在， 如果 `<Avatar person={...} />` 渲染时没有 `size` prop，  `size` 将被赋值为 `100`。

默认值仅在缺少 `size` prop 或 `size={undefined}` 时生效。 但是如果你传递了 `size={null}` 或 `size={0}`，默认值将 **不** 被使用。

### 使用 JSX 展开语法传递 props 

有时候，传递 props 会变得非常重复：

```jsx
function Profile({ person, size, isSepia, thickBorder }) {

  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```

重复代码没有错（它可以更清晰）。但有时你可能会重视简洁。一些组件将它们所有的 props 转发给子组件，正如 `Profile` 转给 `Avatar` 那样。因为它们不直接使用它们任何 props，所以使用更简洁的“展开”语法是有意义的：

```jsx
function Profile(props) {

  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

这会将 `Profile` 的所有 props 转发到 `Avatar`，而不列出每个名字。

**请克制地使用展开语法。** 如果你在所有其他组件中都使用它，那就有问题了。 通常，它表示你应该拆分组件，并将子组件作为 JSX 传递。 接下来会详细介绍！

###  将 JSX 作为子组件传递（插槽）

嵌套浏览器内置标签是很常见的：

```jsx
<div>
  <img />
</div>
```

有时你会希望以相同的方式嵌套自己的组件：

```jsx
<Card>
  <Avatar />
</Card>
```

当您将内容嵌套在 JSX 标签中时，父组件将在名为 `children` 的 prop 中接收到该内容。例如，下面的 `Card` 组件将接收一个被设为 `<Avatar />` 的 `children` prop 并将其包裹在 div 中渲染：

```jsx
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

```jsx
// Avatar.js
import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

```

```jsx
// utils.js
export function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

```

尝试用一些文本替换 `<Card>` 中的 `<Avatar>`，看看 `Card` 组件如何包裹任意嵌套内容。它不必“知道”其中渲染的内容。你会在很多地方看到这种灵活的模式。

可以将带有 `children` prop 的组件看作有一个“洞”，可以由其父组件使用任意 JSX 来“填充”。你会经常使用 `children` prop 来进行视觉包装：面板、网格等等。

![](https://zh-hans.react.dev/images/docs/illustrations/i_children-prop.png)

### Props 如何随时间变化 

- props 的只读性：props 来自于父组件外部，这个属性的值不能在子组件内部修改，只能在子组件中使用，当父组件中响应式属性的值发生变化时，子组件中props的值也会响应式的变化
- props用于父组件向子组件传递数据，这种叫做单向的数据流
- Props 是只读的时间快照：每次渲染都会收到新版本的 props。
- 你不能改变 props。当你需要交互性时，你可以设置 state。

**一个组件可能会随着时间的推移收到不同的 props。** Props 并不总是静态的！

然而，props 是 [不可变的](https://en.wikipedia.org/wiki/Immutable_object)（一个计算机科学术语，意思是“不可改变”）。当一个组件需要改变它的 props（例如，响应用户交互或新数据）时，它不得不“请求”它的父组件传递 *不同的 props* —— 一个新对象！它的旧 props 将被丢弃，最终 JavaScript 引擎将回收它们占用的内存。

**不要尝试“更改 props”。** 当你需要响应用户输入（例如更改所选颜色）时，你可以“设置 state”，你可以在 [State: 一个组件的内存](https://zh-hans.react.dev/learn/state-a-components-memory) 中继续了解。

## 保持组件纯粹

部分 JavaScript 函数是 **纯粹** 的，这类函数通常被称为纯函数。纯函数仅执行计算操作，不做其他操作。你可以通过将组件按纯函数严格编写，以避免一些随着代码库的增长而出现的、令人困扰的 bug 以及不可预测的行为。但为了获得这些好处，你需要遵循一些规则。

### 纯函数：组件作为公式 

在计算机科学中（尤其是函数式编程的世界中），[纯函数](https://wikipedia.org/wiki/Pure_function) 通常具有如下特征：

- **只负责自己的任务**。它不会更改在该函数调用前，就已存在的对象或变量。
- **输入相同，则输出相同**。给定相同的输入，纯函数应总是返回相同的结果。

举个你非常熟悉的纯函数示例：数学中的公式。

考虑如下数学公式：y = 2x。

若 x = 2 则 y = 4。永远如此。

若 x = 3 则 y = 6。永远如此。

若 x = 3，那么 y 并不会因为时间或股市的影响，而有时等于 9 、 –1 或 2.5。

若 y = 2x 且 x = 3, 那么 y *永远* 等于 6.

我们使用 JavaScript 的函数实现，看起来将会是这样：

```jsx
function double(number) {
  return 2 * number;
}
```

上述例子中，`double()` 就是一个 **纯函数**。如果你传入 `3` ，它将总是返回 `6` 。

React 便围绕着这个概念进行设计。**React 假设你编写的所有组件都是纯函数**。也就是说，对于相同的输入，你所编写的 React 组件必须总是返回相同的 JSX。

```jsx
function Recipe({ drinkers }) {
  return (
    <ol>    
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}
```

当你给函数 `Recipe` 传入 `drinkers={2}` 参数时，它将返回包含 `2 cups of water` 的 JSX。永远如此。

而当你传入 `drinkers={4}` 时，它将返回包含 `4 cups of water` 的 JSX。永远如此。

就像数学公式一样。

你可以把你的组件当作食谱：如果你遵循它们，并且在烹饪过程中不引入新食材，你每次都会得到相同的菜肴。那这道 “菜肴” 就是组件用于 React [渲染](https://zh-hans.react.dev/learn/render-and-commit) 的 JSX。

![](https://zh-hans.react.dev/images/docs/illustrations/i_puritea-recipe.png)

### 副作用：（不符合）预期的后果 

React 的渲染过程必须自始至终是纯粹的。组件应该只 **返回** 它们的 JSX，而不 **改变** 在渲染前，就已存在的任何对象或变量 — 这将会使它们变得不纯粹！

以下是违反这一规则的组件示例：

```jsx
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
```

渲染的结果：

```tex
Tea cup for guest #2
Tea cup for guest #4
Tea cup for guest #6
```

该组件正在读写其外部声明的 `guest` 变量。这意味着 **多次调用这个组件会产生不同的 JSX**！并且，如果 **其他** 组件读取 `guest` ，它们也会产生不同的 JSX，其结果取决于它们何时被渲染！这是无法预测的。

回到我们的公式 y = 2x ，现在即使 x = 2 ，我们也不能相信 y = 4 。我们的测试可能会失败，我们的用户可能会感到困扰，飞机可能会从天空坠毁——你将看到这会引发多么扑朔迷离的 bugs！

你可以 [将 `guest` 作为 prop 传入](https://zh-hans.react.dev/learn/passing-props-to-a-component) 来修复此组件：

```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
```

渲染结果：

```tex
Tea cup for guest #1
Tea cup for guest #2
Tea cup for guest #3
```

现在你的组件就是纯粹的，因为它返回的 JSX 只依赖于 `guest` prop。

一般来说，你不应该期望你的组件以任何特定的顺序被渲染。调用 y = 5x 和 y = 2x 的先后顺序并不重要：这两个公式相互独立。同样地，每个组件也应该“独立思考”，而不是在渲染过程中试图与其他组件协调，或者依赖于其他组件。渲染过程就像是一场学校考试：每个组件都应该自己计算 JSX！

#### 局部 mutation：组件的小秘密 

上述示例的问题出在渲染过程中，组件改变了 **预先存在的** 变量的值。为了让它听起来更可怕一点，我们将这种现象称为 **突变（mutation）** 。纯函数不会改变函数作用域外的变量、或在函数调用前创建的对象 — 这会使函数变得不纯粹！

但是，**你完全可以在渲染时更改你 \*刚刚\* 创建的变量和对象**。在本示例中，你创建一个 `[]` 数组，将其分配给一个 `cups` 变量，然后 `push` 一打 cup 进去：

```jsx
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}

```

如果 `cups` 变量或 `[]` 数组是在 `TeaGathering` 函数之外创建的，这将是一个很大的问题！因为如果那样的话，当你调用数组的 push 方法时，就会更改 **预先存在的** 对象。

但是，这里不会有影响，因为每次渲染时，你都是在 `TeaGathering` 函数内部创建的它们。`TeaGathering` 之外的代码并不会知道发生了什么。这就被称为 **“局部 mutation”** — 如同藏在组件里的小秘密。

### 哪些地方 **可能** 引发副作用 

函数式编程在很大程度上依赖于纯函数，但 **某些事物** 在特定情况下不得不发生改变。这是编程的要义！这些变动包括更新屏幕、启动动画、更改数据等，它们被称为 **副作用**。它们是 **“额外”** 发生的事情，与渲染过程无关。

在 React 中，**副作用通常属于 [事件处理程序](https://zh-hans.react.dev/learn/responding-to-events)**。事件处理程序是 React 在你执行某些操作（如单击按钮）时运行的函数。即使事件处理程序是在你的组件 **内部** 定义的，它们也不会在渲染期间运行！ **因此事件处理程序无需是纯函数**。

如果你用尽一切办法，仍无法为副作用找到合适的事件处理程序，你还可以调用组件中的 [`useEffect`](https://zh-hans.react.dev/reference/react/useEffect) 方法将其附加到返回的 JSX 中。这会告诉 React 在渲染结束后执行它。**然而，这种方法应该是你最后的手段**。

如果可能，请尝试仅通过渲染过程来表达你的逻辑。你会惊讶于这能带给你多少好处！

# React语法

## 显示数据（模板语法）

JSX 会让你把标签放到 JavaScript 中。而大括号会让你 “回到” JavaScript 中，这样你就可以从你的代码中嵌入一些变量并展示给用户。例如，这将显示 `user.name`：

```jsx
return (
  <h1>
    {user.name}
  </h1>
);
```

你还可以将 JSX 属性 “转义到 JavaScript”，但你必须使用大括号 **而非** 引号。例如，`className="avatar"` 是将 `"avatar"` 字符串传递给 `className`，作为 CSS 的 class。但 `src={user.imageUrl}` 会读取 JavaScript 的 `user.imageUrl` 变量，然后将该值作为 `src` 属性传递：

```jsx
return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

你也可以把更为复杂的表达式放入 JSX 的大括号内，例如 字符串拼接：

```jsx
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

在上面示例中，`style={{}}` 并不是一个特殊的语法，而是 `style={ }` JSX 大括号内的一个普通 `{}` 对象。当你的样式依赖于 JavaScript 变量时，你可以使用 `style` 属性。

## 添加样式 

### 类名

在 React 中，你可以使用 `className` 来指定一个 CSS 的 class。它与 HTML 的 [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class) 属性的工作方式相同：

```jsx
<img className="avatar" />
```

然后，你可以在一个单独的 CSS 文件中为它编写 CSS 规则：

```jsx
/* In your CSS */

.avatar {
  border-radius: 50%;
}
```

React 并没有规定你如何添加 CSS 文件。最简单的方式，你可以在你的 HTML 中添加一个 [`link`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) 标签。

### 动态class和style绑定

- 类名的绑定：① 直接绑定变量 `className={name}`；② 使用三目运算符 `className={open ? 'active' : ''}`
- style的绑定：① 直接绑定变量 `style={styleObj}`；② 把变量当做属性值使用 `style={{ color: color, backgroundColor: 'blue' }}`

```jsx
function App () {

  // 实际使用过程中，需要把name和styleObj换成响应式属性
  let name = 'active'
  let styleObj = {
    color: '#00f',
    fontSize: '20px'
  }
  let logo = 'http://...'
  let open = false;
  let color = 'red';
	let name = 'active';

  return (
    <div className="App">
      {/* 动态绑定类名 */}
      <h1 className={name}>App</h1>
      <p className={open ? 'active' : ''} style={{ color: '#00f', fontSize: '20px' }}>  段落 </p>
      {/* 动态绑定属性 */}
      <p style={styleObj}>ppppp</p>
      <p style={{ color: color, backgroundColor: 'blue' }}>{[1, 2, 3].indexOf(2)}</p>
      <input type="text"></input>
      <img src={logo} alt="" />
    </div>
  );
}

export default App;
```

## 条件渲染

通常你的组件会需要根据不同的情况显示不同的内容。在 React 中，没有特殊的语法来编写条件。因此，，你可以通过使用 JavaScript 的 `if` 语句、`&&` 和 `? :` 运算符来选择性地渲染 JSX。

- 使用`if/else语句`：就像普通的JS语句一样，直接写在函数组件中，或者一个自定义的函数中。

- 使用逻辑与 &&：用法：condition && expression；如果条件是true，&&后面的表达式会在输出中显示。如果是false，忽略并跳过它。
- 使用三目运算符 

假设有一个 `PackingList` 组件，里面渲染多个 `Item` 组件，每个物品可标记为打包与否：

```jsx
function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="宇航服" 
        />
        <Item 
          isPacked={true} 
          name="带金箔的头盔" 
        />
        <Item 
          isPacked={false} 
          name="Tam 的照片" 
        />
      </ul>
    </section>
  );
}
```

### 使用if语句

#### 基本用法

`if语句`需要写在jsx的外面。

需要注意的是，有些 `Item` 组件的 `isPacked` 属性是被设为 `true` 而不是 `false`。你可以在那些满足 `isPacked={true}` 条件的物品旁加上一个勾选符号（✔）。

可以使用`if语句`选择性的返回模板：

```jsx
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}

// 或者
function Item({ name, isPacked }) {
  let res;
  if (isLoggedIn) {
    res = <li className="item">{name} ✔</li>;
  } else {
    res = <li className="item">{name}</li>;
  }
 
  return res;
}
```

留意这里你是怎么使用 JavaScript 的 `if` 和 `return` 语句来写分支逻辑。在 React 中，是由 JavaScript 来处理控制流的（比如条件）。

#### 选择性地返回 `null` 

在一些情况下，你不想有任何东西进行渲染。比如，你不想显示已经打包好的物品。但一个组件必须返回一些东西。这种情况下，你可以直接返回 `null`。

```jsx
if (isPacked) {
  return null;
}
return <li className="item">{name}</li>;
```

如果组件的 `isPacked` 属性为 `true`，那么它将只返回 `null`。否则，它将返回相应的 JSX 用来渲染。

实际上，在组件里返回 `null` 并不常见，因为这样会让想使用它的开发者感觉奇怪。通常情况下，你可以在父组件里选择是否要渲染该组件。让我们接着往下看吧！

#### 选择性地包含 JSX 

在之前的例子里，你在组件内部控制哪些 JSX 树（如果有的话！）会返回。你可能已经发现了在渲染输出里会有一些重复的内容：

```jsx
<li className="item">{name} ✔</li>
```

和下面的写法很像：

```jsx
<li className="item">{name}</li>
```

两个条件分支都会返回 `<li className="item">...</li>`：

```jsx
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}

return <li className="item">{name}</li>;
```

虽然这些重复的内容没什么害处，但这样可能会导致你的代码更难维护。比如你想更改 `className`？你就需要修改两个地方！

### 使用三目运算符（`? :`） 

三目运算符用在jsx内部。

JavaScript 有一种紧凑型语法来实现条件判断表达式——[条件运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) 又称“三目运算符”。与 `if` 不同的是，它工作于 JSX 内部。

修改代码如下：

```jsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? name + ' ✔' : name}
    </li>
  );
}
```

你可以认为，“如果 `isPacked` 为 `true` 时，则（`?`）渲染 `name + ' ✔'`，否则（`:`）渲染 `name`。”

现在，假如你想将对应物品的文本放到另一个 HTML 标签里，比如用 `<del>` 来显示删除线。你可以添加更多的换行和括号，以便在各种情况下更好地去嵌套 JSX：

```jsx
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' ✔'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}
```

对于简单的条件判断，这样的风格可以很好地实现，但需要适量使用。如果你的组件里有很多的嵌套式条件表达式，则需要考虑通过提取为子组件来简化这些嵌套表达式。在 React 里，标签也是你代码中的一部分，所以你可以使用变量和函数来整理一些复杂的表达式。

### 使用逻辑与&&

逻辑与也是使用在jsx的内部。

你会遇到的另一个常见的快捷表达式是 [JavaScript 与（`&&`）运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_AND#:~:text=The logical AND ( %26%26 ) operator,it returns a Boolean value.)。在 React 组件里，通常用在当条件成立时，你想渲染一些 JSX，**或者不做任何渲染**。使用 `&&`，你也可以实现仅当 `isPacked` 为 `true` 时，渲染勾选符号。

```jsx
return (
  <li className="item">
    {name} {isPacked && '✔'}
  </li>
);
```

你可以认为，*“当 `isPacked` 为真值时，则（`&&`）渲染勾选符号，否则，不渲染。”*

当 [JavaScript && 表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) 的左侧（我们的条件）为 `true` 时，它则返回其右侧的值（在我们的例子里是勾选符号）。但条件的结果是 `false`，则整个表达式会变成 `false`。在 JSX 里，React 会将 `false` 视为一个“空值”，就像 `null` 或者 `undefined`，这样 React 就不会在这里进行任何渲染。

> **陷阱**
>
> **切勿将数字放在 `&&` 左侧.**
>
> JavaScript 会自动将左侧的值转换成布尔类型以判断条件成立与否。然而，如果左侧是 `0`，整个表达式将变成左侧的值（`0`），React 此时则会渲染 `0` 而不是不进行渲染。
>
> 例如，一个常见的错误是 `messageCount && <p>New messages</p>`。其原本是想当 `messageCount` 为 0 的时候不进行渲染，但实际上却渲染了 `0`。
>
> 为了更正，可以将左侧的值改成布尔类型：`messageCount > 0 && <p>New messages</p>`。

### 选择性地将 JSX 赋值给变量 

当这些快捷方式妨碍写普通代码时，可以考虑使用 `if` 语句和变量。因为你可以使用 [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) 进行重复赋值，所以一开始你可以将你想展示的（这里指的是物品的名字）作为默认值赋予给该变量。

```jsx
let itemContent = name;
```

结合 `if` 语句，当 `isPacked` 为 `true` 时，将 JSX 表达式的值重新赋值给 `itemContent`：

```jsx
if (isPacked) {
  itemContent = name + " ✔";
}
```

[大括号 - JavaScript 的“新世界”](https://zh-hans.react.dev/learn/javascript-in-jsx-with-curly-braces#using-curly-braces-a-window-into-the-javascript-world)。将变量用大括号嵌入在返回的 JSX 树中，来嵌套计算好的表达式与 JSX：

```jsx
<li className="item">
  {itemContent}
</li>
```

这种方式是最冗长的，但也是最灵活的。

## 列表渲染

你可能经常需要通过 [JavaScript 的数组方法](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array#) 来操作数组中的数据，从而将一个数据集渲染成多个相似的组件。在这篇文章中，你将学会如何在 React 中使用 [`filter()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 筛选需要渲染的组件和使用 [`map()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 把数组转换成组件数组。

例如，假设你有一个产品数组：

```jsx
const products = [
  { title: '卷心菜', isFruit: false, id: 1 },
  { title: '大蒜', isFruit: false, id: 2 },
  { title: '苹果', isFruit: true, id: 3 },
  { title: '香蕉', isFruit: true, id: 4 },
  { title: '西蓝花', isFruit: false, id: 5 },
];
```

### 从数组中渲染数据

在你的组件中，使用 `map()` 函数将一个产品数组，转换为 `<li>` 标签的元素列表:

#### 在jsx外部遍历

把map函数写在JSX模板的外边，得到一个包含组件视图的数组，然后把数组引入到JSX模板中

```jsx
function Product(){
  // 首先，遍历 products 这个数组中的每一项，并获得一个新的 JSX 节点数组 listItems：
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
	
  // 然后，把 listItems 用 <ul> 包裹起来，然后 返回 它
  return <ul>{listItems}</ul>;
}
```

#### 在jsx中遍历

也可以直接把map函数写在JSX模板中遍历数组得到组件视图

```jsx
function Product(){
	return (
  	 <ul>
      {
        products.map(product =>
          <li key={product.id} style={{color: product.isFruit ? 'magenta' : 'darkgreen'}}>
            {product.title}
          </li>
        )
      }
    </ul>
  );
}
```

### 对数组项进行过滤 

现在，假设你只想在屏幕上显示分类是 `水果` 的产品。那么你可以使用 JavaScript 的 `filter()` 方法来返回满足条件的项。这个方法会让数组的子项经过 “过滤器”（一个返回值为 `true` 或 `false` 的函数）的筛选，最终返回一个只包含满足条件的项的新数组。

```jsx
function Product(){
  // 首先，创建一个新数组 fruits：
  const fruits = products.filter(person => product.isFruit );
  
  // 接下来 用 map 方法遍历 fruits 数组:
  const listItems = fruits.map(product => <li key={product.id}>{product.title}</li>);
	
  // 最后，返回 listItems：
  return <ul>{listItems}</ul>;
}
```

### 用 `key` 保持列表项的顺序 

注意， `<li>` 有一个 `key` 属性。对于列表中的每一个元素，你应该传递一个字符串或者数字给 `key`，用于在其兄弟节点中唯一标识该元素。如果把上面任何一个示例中的`key`属去掉，你就会发现控制台有这样一个报错：

 <div style="color: red">Warning: Each child in a list should have a unique “key” prop.</div>

这是因为你必须给数组中的每一项都指定一个 `key`————它可以是字符串或数字的形式，只要能唯一标识出各个数组项就行：

```jsx
<li key={product.id}>...</li>
```

> **注意**
>
> 直接放在 `map()` 方法里的 JSX 元素一般都需要指定 `key` 值！

这些 key 会告诉 React，每个组件对应着数组里的哪一项，所以 React 可以把它们匹配起来。这在数组项进行移动（例如排序）、插入或删除等操作时非常重要。一个合适的 `key` 可以帮助 React 推断发生了什么，从而得以正确地更新 DOM 树。

通常，key 应该来自你的数据，比如，数据库中的 ID。如果你在后续插入、删除或重新排序这些项目，React 将依靠你提供的 key 来思考发生了什么。

#### 如何设定 `key` 值 

不同来源的数据往往对应不同的 key 值获取方式：

- **来自数据库的数据：** 如果你的数据是从数据库中获取的，那你可以直接使用数据表中的主键，因为它们天然具有唯一性。
- **本地产生数据：** 如果你数据的产生和保存都在本地（例如笔记软件里的笔记），那么你可以使用一个自增计数器或者一个类似 [`uuid`](https://www.npmjs.com/package/uuid) 的库来生成 key。

#### key 需要满足的条件 

- **key 值在兄弟节点之间必须是唯一的。** 不过不要求全局唯一，在不同的数组中可以使用相同的 key。
- **key 值不能改变**，否则就失去了使用 key 的意义！所以千万不要在渲染时动态地生成 key。

#### React 中为什么需要 key？ 

设想一下，假如你桌面上的文件都没有文件名，取而代之的是，你需要通过文件的位置顺序来区分它们———第一个文件，第二个文件，以此类推。也许你也不是不能接受这种方式，可是一旦你删除了其中的一个文件，这种组织方式就会变得混乱无比。原来的第二个文件可能会变成第一个文件，第三个文件会成为第二个文件……

React 里需要 key 和文件夹里的文件需要有文件名的道理是类似的。它们（key 和文件名）都让我们可以从众多的兄弟元素中唯一标识出某一项（JSX 节点或文件）。而一个精心选择的 key 值所能提供的信息远远不止于这个元素在数组中的位置。即使元素的位置在渲染的过程中发生了改变，它提供的 `key` 值也能让 React 在整个生命周期中一直认得它。

> **陷阱**
>
> 你可能会想直接把数组项的索引当作 key 值来用，实际上，如果你没有显式地指定 `key` 值，React 确实默认会这么做。但是数组项的顺序在插入、删除或者重新排序等操作中会发生改变，此时把索引顺序用作 key 值会产生一些微妙且令人困惑的 bug。
>
> 与之类似，请不要在运行过程中动态地产生 key，像是 `key={Math.random()}` 这种方式。这会导致每次重新渲染后的 key 值都不一样，从而使得所有的组件和 DOM 元素每次都要重新创建。这不仅会造成运行变慢的问题，更有可能导致用户输入的丢失。所以，使用能从给定数据中稳定取得的值才是明智的选择。
>
> 有一点需要注意，组件不会把 `key` 当作 props 的一部分。Key 的存在只对 React 本身起到提示作用。如果你的组件需要一个 ID，那么请把它作为一个单独的 prop 传给组件： `<Profile key={id} userId={id} />`。

#### key的作用总结

- key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。
- 一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key
- 当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key
- key 只是在兄弟节点之间必须唯一：数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值 

## 响应事件 

使用 React 可以在 JSX 中添加 **事件处理函数**。其中事件处理函数为自定义函数，它将在响应交互（如点击、悬停、表单输入框获得焦点等）时触发。

React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：

- 给标签添加事件：React 事件的命名采用小驼峰式（camelCase），而不是纯小写，比如鼠标单击事件使用`onClick`。这是React自定义的事件，而不是的原生DOM事件，React自定义的事件有更好的兼容性。
- 给事件绑定函数：使用 JSX 语法绑定事件函数需要传入一个函数作为事件处理函数，而不是一个字符串。
- React 事件是通过事件委托方式处理的(委托给组件最外层的元素)，这样做为了处理事件更加的高效。

### 绑定事件的方式

我们可以使用 `onClick` 属性（`Click`也可以是 `MouseDown`、`KeyDown`等事件) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：`onClick={handler}` 。

事件处理函数 (handler) 的值可以是：

- **事件处理函数**：一个指向组件上定义的方法名，事件触发时执行的函数。
- **内联事件处理函数**：事件被触发时执行的内联 JavaScript 语句 。
- **箭头函数**：事件触发时，执行的内联函数。

以上所有方式都是等效的。当函数体较短时，内联事件处理函数会很方便。

#### 添加事件处理函数 

如需添加一个事件处理函数，你需要先定义一个函数，然后 [将其作为 prop 传入](https://zh-hans.react.dev/learn/passing-props-to-a-component) 合适的 JSX 标签。

按照如下三个步骤，即可让它在用户点击时显示消息：

1. 在 `Button` 组件 *内部* 声明一个名为 `handleClick` 的函数。
2. 实现函数内部的逻辑（使用 `alert` 来显示消息）。
3. 添加 `onClick={handleClick}` 到 `<button>` JSX 中。

事件处理函数接收一个 **事件对象** 作为默认的参数。按照惯例，它通常被称为 `ev` ，代表 “event”（事件）。你可以使用此对象来读取有关事件的信息。

```jsx
export default function App() {
  
  // 在函数组件的事件函数中，由于开启了严格模式，在函数中this指向undefined
  // 其实，函数组件中也不需要使用this。
  
  function handleClick(ev) {
    alert('The button was clicked.');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```

其中 `handleClick` 是一个 **事件处理函数** 。事件处理函数有如下特点:

- 通常在你的组件 *内部* 定义。
- 名称以 `handle` 开头，后跟事件名称。

> 按照惯例，通常将事件处理程序命名为 `handle`，后接事件名。你会经常看到 `onClick={handleClick}`，`onMouseEnter={handleMouseEnter}` 等。

> 注意，`onClick={handleClick}` 的结尾没有小括号！不要 **调用** 事件处理函数：你只需 **传递给事件** 即可。当用户点击按钮时，React 会调用你的事件处理函数。

#### 添加内联事件处理函数

你也可以在 JSX 中定义一个内联的事件处理函数：

```jsx
export default function App() {
	return (
		<div>
			<button
				onClick={function handleClick(ev) {
					console.log('The button was clicked.');
				}}>
				按钮
			</button>
		</div>
	);
}
```

#### 添加箭头函数

直接使用更为简洁箭头函数，把相关的逻辑代码写在箭头函数中，箭头函数也是内联事件处理函数，只是使用了箭头函数的形式：

```jsx
export default function App() {
	return (
		<div>
			<button
				onClick={(ev) => {
					console.log('The button was clicked.');
				}}>
				按钮
			</button>
		</div>
	);
}
```

或者在箭头函数中调用一个函数

```jsx
export default function App() {
  function handleClick(ev) {
  	console.log('The button was clicked.');
  }

	return (
		<div>
			<button onClick={ (ev) => handleClick(ev) }>
				按钮
			</button>
		</div>
	);
}
```

> **陷阱**
>
> 传递给事件处理函数的函数应直接传递，而非调用。例如：
>
> | 传递一个函数（正确）             | 调用一个函数（错误）               |
> | -------------------------------- | ---------------------------------- |
> | `<button onClick={handleClick}>` | `<button onClick={handleClick()}>` |
>
> 区别很微妙。在第一个示例中，`handleClick` 函数作为 `onClick` 事件处理函数传递。这会让 React 记住它，并且只在用户点击按钮时调用你的函数。
>
> 在第二个示例中，`handleClick()` 中最后的 `()` 会在 [渲染](https://zh-hans.react.dev/learn/render-and-commit) 过程中 *立即* 触发函数，即使没有任何点击。这是因为在 [JSX `{` 和 `}`](https://zh-hans.react.dev/learn/javascript-in-jsx-with-curly-braces) 之间的 JavaScript 会立即执行。
>
> 当你编写内联代码时，同样的陷阱可能会以不同的方式出现：
>
> | 传递一个函数（正确）                    | 调用一个函数（错误）              |
> | --------------------------------------- | --------------------------------- |
> | `<button onClick={() => alert('...')}>` | `<button onClick={alert('...')}>` |
>
> 如果按如下方式传递内联代码，并不会在点击时触发，而是会在每次组件渲染时触发：
>
> ```
> // 这个 alert 在组件渲染时触发，而不是点击时触发！
> 
> <button onClick={alert('你点击了我！')}>
> ```
>
> 如果你想要定义内联事件处理函数，请将其包装在匿名函数中，如下所示：
>
> ```
> <button onClick={() => alert('你点击了我！')}>
> ```
>
> 这里创建了一个稍后调用的函数，而不会在每次渲染时执行其内部代码。
>
> 在这两种情况下，你都应该传递一个函数：
>
> - `<button onClick={handleClick}>` 传递了 `handleClick` 函数。
> - `<button onClick={() => alert('...')}>` 传递了 `() => alert('...')` 函数。

### 给事件函数传参

#### 使用内联函数传参

使用箭头函数配合事件函数，可以给事件函数传参，如果传参时，不需要使用ev，可以把ev省略：

```jsx
export default function App() {
    
  function handleClick(ev, data) {
    console.log('data: ', data);
  }

  return (
    <button onClick={(ev) => handleClick(ev, 6)}>
      Click me
    </button>
  );
}
```

#### 使用函数柯里化

```jsx
export default function App() {

  function handleClick (data) {
    return function (ev) {
      console.log('ev: ', ev, data);
    }
  }

  return (
    <button onClick={handleClick(6)}>
      Click me
    </button>
  );
}
```

[函数柯里](https://blog.csdn.net/Boale_H/article/details/126058783)化属于高阶函数的范畴：

高阶函数：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。

- 若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数。
- 若A函数，调用的返回值依然是一个函数，那么A就可以称之为高阶函数。

常见的高阶函数有：Promise、setTimeout、arr.map()等等

[函数柯里化经典面试题](https://juejin.cn/post/6844903665308794888)，请实现一个add函数实现以下功能 ：

```js
add(1) // 1
add(1)(2) // 3
add(1)(2)(3) // 6
add(1)(2)(3)(4) // 10
add(1)(2,3) // 6
add(1,2)(3) // 6
add(1,2,3) // 6
```

### 组件上的自定义事件

#### 在事件处理函数中读取 props

由于事件处理函数声明于组件内部，因此它们可以直接访问组件的 props。比如在按钮事件中直接使用count：

```jsx
export default function App() {

	return (
		<div>
			<h1>App</h1>
			<Demo count={6}></Demo>
		</div>
	);
}

function Demo({ count }) {
	
	return (
		<div>
      <button onClick={()=> alert('传递的数据是：'+count)}>按钮1</button>
		</div>
	);
}
```

#### 将事件处理函数作为 props 传递 

通常，我们会在父组件中定义子组件的事件处理函数。为此，将组件从父组件接收的 prop 作为事件处理函数传递，如下所示：

```jsx
export default function App() {
	function handleClick(val) {
		console.log('val: ', val);
	}

	return (
		<div>
			<h1>App</h1>
			<Demo count={6} onDataClick={handleClick}></Demo>
		</div>
	);
}

function Demo({ count, onDataClick }) {
	let num = 
	return (
		<div>
			<button onClick={onDataClick}>按钮1</button>
			<button onClick={() => onDataClick(num)}>按钮2</button>
		</div>
	);
}
```

示例中，`App` 组件渲染了一个 `Demo`组件：

- `App` 将 `handleClick` 作为 `onDataClick` prop 传入 `Demo` 组件内部。

最后，你的 `Demo` 组件接收一个名为 `onDataClick` 的 prop。它直接将这个 prop 以 `onClick={onDataClick}` 方式传递给浏览器内置的 `<button>`。当点击按钮时，React 会调用传入的函数。

#### 命名事件处理函数 prop 

内置组件（`<button>` 和 `<div>`）仅支持 [浏览器事件名称](https://zh-hans.react.dev/reference/react-dom/components/common#common-props)，例如 `onClick`。但是，当你构建自己的组件时，你可以按你个人喜好命名事件处理函数的 prop。

> 按照惯例，事件处理函数 props 应该以 `on` 开头，后跟一个大写字母。例如 `Demo`组件的`onDataClick` prop 

### 事件传播与默认行为

#### 事件传播 

事件处理函数还将捕获任何来自子组件的事件。通常，我们会说事件会沿着树向上“冒泡”或“传播”：它从事件发生的地方开始，然后沿着树向上传播。

下面这个 `<div>` 包含两个按钮。`<div>` **和** 每个按钮都有自己的 `onClick` 处理函数。你认为点击按钮时会触发哪些处理函数？

```jsx
export default function App () {

	return (
		<div onClick={()=>alert('点击App')}>
			<h1>App</h1>
      <button onClick={() => alert('点击按钮1')}>按钮1</button>
      <button onClick={() => alert('点击按钮2')}>按钮2</button>
		</div>
	);
}
```

如果你点击任一按钮，它自身的 `onClick` 将首先执行，然后父级 `<div>` 的 `onClick` 会接着执行。因此会出现两条消息。如果你点击 `App` 组件本身，将只有父级 `<div>` 的 `onClick` 会执行。

> **陷阱**
>
> 在 React 中所有事件都会传播，除了 `onScroll`，它仅适用于你附加到的 JSX 标签。

#### 阻止传播 

如果你想阻止一个事件到达父组件，你需要像下面 组件那样调用 `e.stopPropagation()` ：

```jsx
export default function App() {
	return (
		<div onClick={() => alert('点击App')}>
			<h1>App</h1>
			<button
				onClick={ev => {
					ev.stopPropagation();
					alert('点击按钮1');
				}}>
				按钮1
			</button>
			<button onClick={() => alert('点击按钮2')}>按钮2</button>
		</div>
	);
}
```

当你点击按钮1时：

1. React 调用了传递给 `<button>` 的 `onClick` 处理函数。
2. 定义在 `App` 中的处理函数执行了如下操作：
   - 调用 `e.stopPropagation()`，阻止事件进一步冒泡。
   - 调用 `onClick` 函数。执行 `ev.stopPropagation();`，显示按钮对应的 alert。
3. 由于传播被阻止，父级 `<div>` 的 `onClick` 处理函数不会执行。

由于调用了 `e.stopPropagation()`，点击按钮现在将只显示一个 alert（来自 `<button>`），而并非两个（分别来自 `<button>` 和父级 `<div>`）。点击按钮与点击周围的 App 不同，因此阻止传播对这个 UI 是有意义的。

#### 阻止默认行为 

某些浏览器事件具有与事件相关联的默认行为。例如，点击 `<form>` 表单内部的按钮会触发表单提交事件，默认情况下将重新加载整个页面、点击 `<a>`标签会跳转页面。你可以调用事件对象中的 `e.preventDefault()` 来阻止这种情况发生：

```jsx
export default function App() {
	return (
		<div>
			<h1>App</h1>
			<a
				href='http://www.baidu.com'
				onClick={ev => {
					ev.preventDefault();
					alert('百度一下');
				}}>
				百度一下
			</a>
		</div>
	);
}
```

> 注意：在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。
> 在这里，ev 是一个合成事件。React 根据 W3C 规范来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。

### 事件处理函数可以包含副作用吗？ 

当然可以！事件处理函数是执行副作用的最佳位置。

与渲染函数不同，事件处理函数不需要是 [纯函数](https://zh-hans.react.dev/learn/keeping-components-pure)，因此它是用来 *更改* 某些值的绝佳位置。例如，更改输入框的值以响应键入，或者更改列表以响应按钮的触发。但是，为了更改某些信息，你首先需要某种方式存储它。在 React 中，这是通过 [state（组件的记忆）](https://zh-hans.react.dev/learn/state-a-components-memory) 来完成的。



# React动画

## 内置CSS动画

React 动画方式：可以使用css帧动画、css过渡动画，也可以使用动画库实现

- 参考文档 https://juejin.cn/post/6844903926827843592

## 动画插件

react-transition-group 动画插件

- 官网：http://reactcommunity.org/react-transition-group

```bash
#第一步安装
npm install react-transition-group --save

#第二步导入 动画组件
import {CSSTransition} from 'react-transition-group';
```

```jsx
class App extends Component {
	state = {
		isShow: true,
	};

	changeShow = () => {
		this.setState({
			isShow: !this.state.isShow,
		});
	};
	entered = () => {
		console.log('动画进入完成');
	};
	exited = () => {
		console.log('动画离开完成');
	};

	// in显示组件; 触发进入或退出状态
	// timeout 转换的持续时间，以毫秒为单位。
	// classNames动画classNames在出现，进入，退出或完成转换时应用于组件。
	render() {
		const { isShow } = this.state;
		const { changeShow } = this;
		return (
			<div className='app'>
				<button onClick={changeShow}>显隐</button>
				<CSSTransition in={isShow} classNames='fade' timeout={500} onEntered={this.entered} onExited={this.exited}>
					<p>显示隐藏动画</p>
				</CSSTransition>
			</div>
		);
	}
}
```

```css
/*出场动画*/
/*出场动画执行的第一个时刻*/
.fade-exit {
	opacity: 1;
}
/*出场动画执行的第二个瞬间一直到执行完成的时刻*/
.fade-exit-active {
	opacity: 0;
	transition: opacity 1s;
}
/*出场动画执行完成之后*/
.fade-exit-done {
	opacity: 0;
}

/*入场动画*/
/*入场动画执行的第一个时刻*/
.fade-enter,
.fade-appear {
	opacity: 0;
}
/*入场动画执行的第二个瞬间一直到执行完成的时刻*/
.fade-enter-active,
.fade-appear-active {
	opacity: 1;
	transition: opacity 1s;
}
/*入场动画执行完成之后*/
.fade-enter-done {
	opacity: 1;
}
```

# UI组件库及http请求

## UI组件库

- PC端 Ant Design：https://ant.design/index-cn    
- 移动端 Ant Design Mobile：https://mobile.ant.design/index-cn

## http请求

请求库推荐使用axios，中文文档：http://www.axios-js.com/

## 设置代理

### create-react-app用法

#### 单个代理设置

在package.json中添加

```json
{
  // ...
  "proxy": "http://localhost:5000",
}
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：只能设置单个代理，不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

#### 多个代理设置

1、安装http-proxy-middleware管理包

```bash
npm i http-proxy-middleware -D
```

2、在项目目录src下新建`setupProxy.js`文件，然后写入如下代码:

- v2版本及之后的写法

```jsx
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // 代理1
  // /douyu 代理地址，所有/douyu前缀的请求都会转发给http://open.douyucdn.cn
  app.use(proxy.createProxyMiddleware('/douyu', { 
    target: 'http://open.douyucdn.cn',// 目标服务器地址
       /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：open.douyucdn.cn
      	changeOrigin设置为false时，服务器收到的请求头中的host为：127.0.0.1:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
    changeOrigin: true,// 控制服务器接收到的请求头中host字段的值，可以省略
    
    // 去除请求前缀，保证发给服务器的是正常的请求地址，不可省略
    pathRewrite: {
      "^/douyu": "/"
    },
    // cookieDomainRewrite: "http://localhost:3000"
  }));
  // 代理2
  app.use(proxy.createProxyMiddleware('/xxx', { 
    target: 'http://...' 
  }));
};
```

- v2版本之前的写法

```js
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // 代理1
  app.use(proxy('/douyu', { 
    target: 'http://open.douyucdn.cn',
    changeOrigin: true,
    pathRewrite: {
      "^/douyu": "/"
    },
  }));
  // 代理2
  app.use(proxy('/xxx', { 
    target: 'http://...' 
  }));
};
```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

### vite用法

#### 设置单个代理

```js
// vite.config.js

import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
  server:{
    proxy:{
      '/douyu': 'http://open.douyucdn.cn',
    }
  }
});

```

#### 设置多个代理

```jsx
// vite.config.js

import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
  server:{
    proxy:{
      // 代理1
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, '')      
      },
      // 代理2
      '/douyu':{
        target: 'http://open.douyucdn.cn',
        rewrite: (path) => path.replace(/^\/douyu/, '')      
      }
    }
});

```


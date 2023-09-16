# 基本使用
## 1 React 的安装
安装命令：npm i react react-dom
- react 包是核心，提供创建元素、组件等功能
- react-dom 包提供 DOM 相关功能等

**1. 引入 react 和 react-dom 两个 js 文件**
```js
<script src="./node_modules/react/umd/react.development.js"></script>
<script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
```
**2. 创建 React 元素**
**3. 渲染 React 元素到页面中**
```js
<div id="root"></div>
<script>
const title = React.createElement('h1', null, 'Hello React')
ReactDOM.render(title, document.getElementById('root'))
</script>
```
## 2 方法说明
- React.createElement() 说明（知道）
```js
// 返回值：React元素
// 第一个参数：要创建的React元素名称
// 第二个参数：该React元素的属性
// 第三个及其以后的参数：该React元素的子节点
const el = React.createElement('h1', { title: '标题' }, 'Hello React')
```
- ReactDOM.render() 说明
```js
// 第一个参数：要渲染的React元素
// 第二个参数：DOM对象，用于指定渲染到页面中的位置
ReactDOM.render(el, document.getElementById('root'))
```
# 脚手架使用
## 1 React 脚手架意义
1. 脚手架是开发 现代Web 应用的必备。
2. 充分利用 Webpack、Babel、ESLint 等工具辅助项目开发。
3. 零配置，无需手动配置繁琐的工具即可使用。
4. 关注业务，而不是工具配置。

## 2 使用 React 脚手架初始化项目
1. 初始化项目，命令：npx create-react-app my-app

![在这里插入图片描述](https://img-blog.csdnimg.cn/cdf6b8f0490f42d8a1b2b4bd2599a52f.png)

2.  启动项目，在项目根目录执行命令：npm start
![在这里插入图片描述](https://img-blog.csdnimg.cn/b31da2fe8d4a4d109a072e0ef61d250d.png)

**npx 命令介绍**
- npm v5.2.0 引入的一条命令
- 目的：提升包内提供的命令行工具的使用体验
- 原来：先安装脚手架包，再使用这个包中提供的命令
- 现在：无需安装脚手架包，就可以直接使用这个包提供的命令

**补充说明**
1. 推荐使用：npx create-react-app my-app
2. npm init react-app my-app
3. yarn create react-app my-app
	- yarn 是 Facebook 发布的包管理器，可以看做是 npm 的替代品，功能与 npm 相同

 	- yarn 具有快速、可靠和安全的特点
 	- 初始化新项目：yarn init
 	- 安装包： yarn add 包名称
 	- 安装项目依赖项： yarn
 	- 其他命令，请参考yarn文档

## 3 在脚手架中使用 React
1. 导入 react 和 react-dom 两个包。
```js
import React from 'react'
import ReactDOM from 'react-dom'
```
2. 调用 React.createElement() 方法创建 react 元素。
3. 调用 ReactDOM.render() 方法渲染 react 元素到页面中。
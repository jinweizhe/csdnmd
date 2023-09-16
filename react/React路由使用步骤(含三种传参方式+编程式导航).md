@[toc]
# React Router 6 

## 概述

React Router 以三个不同的包发布到 npm 上，它们分别为：

1. react-router: 路由的核心库，提供了很多的：组件、钩子。
2. **react-router-dom:** 包含react-router所有内容，并添加一些专门用于 DOM 的组件，例如 `<BrowserRouter>`等 。
3. react-router-native: 包括react-router所有内容，并添加一些专门用于ReactNative的API，例如:`<NativeRouter>`等。

## 变化

与React Router 5.x 版本相比，改变了什么？

1. 内置组件的变化：移除`<Switch/>` ，新增 `<Routes/>`等。

2. 语法的变化：`component={About}` 变为 `element={<About/>}`等。

3. 新增多个hook：`useParams`、`useNavigate`、`useMatch`等。

4. 官方推荐使用函数式组件


## 文档

官网地址：https://reactrouter.com/

# 路由使用步骤

## 第一步：安装

react-router-dom是浏览器端的基于react-router库的库，所以装了这个以后就不用再手动装react-router了

```bash
npm install react-router-dom

npm install react-router-dom@^6.10.0
```

## 第二步：连接路由

连接你的App到浏览器的URL。用BrowserRouter包裹在你的App的外面

```jsx
// index.js
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
```

## 第二步：路由表配置

```jsx
//路由表配置：src/routes/index.jsx
import { Navigate } from 'react-router-dom';

import Home from '../views/Home';
import Friend from '../views/Friend';
import Setting from '../views/Setting';
import NotFound from '../views/NotFound';
import Chat from '../views/Chat';

const routes = [
  // Navigate 重定向
	{ path: '/', element: <Navigate to='/home' /> },
	{ path: '/home', element: <Home /> },
	{
		path: '/friend',
		element: <Friend />,
		children: [{ path: 'chat/:name', element: <Chat /> }],
	},
	{ path: '/setting', element: <Setting /> },
	{ path: '*', element: <NotFound /> },
];

export default routes;
```

## 第四步：注册路由及配置路由链接

在`src/App.jsx`里注册路由，添加链接和全局导航。

```jsx
// App.jsx
import { useState } from 'react';
import './App.css';

import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  // 根据路由表生成对应的路由规则
  const ElementRouter = useRoutes(routes);
  
	const [items] = useState([
		{ path: '/home', title: '首页' },
		{ path: '/friend', title: '好友' },
		{ path: '/setting', title: '设置' },
	]);

	return (
		<div className='app'>
			<nav className='nav'>
				<div className='w'>
          	{/* 路由链接 */}
					{items.map(item => (
						<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.path} key={item.path}>
							{item.title}
						</NavLink>
					))}
				</div>
			</nav>
			{/* 注册路由 */}
			{ElementRouter}
		</div>
	);
};

export default App;

```

## 第五步：创建路由组件

路由组件都放在src目录下的views或者pages文件中

# 路由监听

```jsx
// 监听路由的变化
const location = useLocation();
useEffect(() => {
  console.log('进入：', location.pathname);
  return () => {
    console.log('离开：', location.pathname);
  };
});
```
# 使用编程式导航(这里讲解的是react-route-dom的6版本,不同版本会有不同,自行百度)
```js
npm install react-router-dom@^6.10.0
```
```js
import { useNavigate } from "react-router-dom";

//跳转页面
let history = useNavigate();
history("/friend", { state: { id: 1 } }); //跳转页面并携带一个id参数,格式必须如上state不能省略,参数都放在state下面
```
**完整代码示例**
**跳转路由**
```js
import { useNavigate } from "react-router-dom";
export default function Home() {
  let history = useNavigate();
  const xj = () => {
  //在这个代码里,跳转friend页面并携带了id:1的参数
    history("/friend", { state: { id: 1 } });
  };
  return (
    <div>
      <p onClick={xj}>跳转friend页面</p>
    </div>
  );
}
```
**接收参数**
```js
import { useLocation } from "react-router-dom";
export default function Friend() {
  let a = useLocation();
  console.log('a',a)
  let id = a.state.id;
  return <p>---{id}</p>;
}
```
其中a的打印结果如下,红框里面就是需要的参数
![在这里插入图片描述](https://img-blog.csdnimg.cn/5c26c22bb2d54368a36ee773d425dc44.png)
# react三种传参方式
**1 路由固定 ----navlink 传值 params传参 useParams**
```js
//路由
import { Outlet,NavLink } from 'react-router-dom'
{
	path:'detail/:id/:title/:content',
	element:<Detail />
 }
 
//组件内点击
<li>
	<NavLink to={`detail/${item.id}/${item.title}/${item.content}`} >{item.title}</NavLink>
</li>

//组件内接受参数
import { useParams } from 'react-router-dom'
export default function Detail() {

    let {id,title,content} = useParams()
    
  return (
    <div>
        <ul>
            <li>新闻id:{id}</li>
            <li>新闻标题:{title}</li>
            <li>新闻内容:{content}</li>
        </ul>
    </div>
  )
}
```
**2路由传值 query传参 useSearchParams**
```js
//路由
import { Outlet,NavLink } from 'react-router-dom'
{
	path:'detail',
	element:<Detail />
 }
 
 //组件内点击
<li>
	<NavLink to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</NavLink>
</li>

//组件内接受参数     第一个参数传递过来的数据对象，用get方法来取值  第二个参数是设置新的数据
import { useSearchParams } from 'react-router-dom'
export default function Detail() {

    let  [searchParams,setobj] = useSearchParams()
    let id = searchParams.get('id')
    let title = searchParams.get('title')
    let content = searchParams.get('content')
    
  return (
    <div>
        <ul>
            <li>新闻id:{id}</li>
            <li>新闻标题:{title}</li>
            <li>新闻内容:{content}</li>
             <li onClick={()=>{
                setobj( { id: 4, title: "你是谁啊4", content: "有什么事情啊4" })
            }}>点击切换</li>
        </ul>
    </div>
  )
}
```
**3.state传参 useLocation**
```js
//路由
import { Outlet,NavLink } from 'react-router-dom'
{
	path:'detail',
	element:<Detail />
 }
 
//组件内点击
<li>
	<NavLink to='detail' state={item}>{item.title}</NavLink>
</li>


// state传参
import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail() {
    let  {state:{id,title,content}} = useLocation()
  return (
    <div>
        <ul>
            <li>新闻id:{id}</li>
            <li>新闻标题:{title}</li>
            <li>新闻内容:{content}</li>
        </ul>
    </div>
  )
}
```
# 编程式导航传参和跳转
## searchParams传参
**Login.js #跳转到detail页面并进行传参**
```js
// 1.导入useNavigate
import { useNavigate } from 'react-router-dom'
 
function Login () {
  // 2.执行useNavigate得到一个跳转函数
  const navigate = useNavigate()
  function goDetail () {
    // 3.调用跳转函数传入目标路径
    navigate('/detail?id=10&name=cp', { replace: true })
  }
  return (
    <div>
      <p>login</p>
      <button onClick={goDetail}>跳转Detail</button>
    </div>
  )
}
```
**Detail.js  #取参**
```js
//取参
import { useSearchParams } from 'react-router-dom'

function Detail () {
  const [params] = useSearchParams()
  const id = params.get('id')
  const name = params.get('name')
  return (
    <div>
      Detail路径传的参数id:{id},name:{name}
    </div>
  )
}
```
## Params传参
**Login.js #跳转到detail页面并进行传参**
```js
// 1.导入useNavigate
import { useNavigate } from 'react-router-dom'

function Login () {
  // 2.执行useNavigate得到一个跳转函数
  const navigate = useNavigate()
  function goDetail () {
    // 3.调用跳转函数传入目标路径
    navigate('/detail/1001', { replace: true })
  }
  return (
    <div>
      <p>login</p>
      <button onClick={goDetail}>跳转Detail</button>
    </div>
  )
}
```
**Detail.js  #取参**
```js
import { useParams } from 'react-router-dom'

function Detail () {
  const params = useParams()
  const id = params.id
  return (
    <div>
      Detail路径传的参数id:{id}
    </div>
  )
}
```

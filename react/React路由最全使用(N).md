# 路由简介

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

# 路由组件

## BrowserRouter

`<BrowserRouter> `用于包裹整个应用。

```jsx
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* 整体结构（通常为App组件） */}
  </BrowserRouter>
);
```

## HashRouter

作用与`<BrowserRouter>`一样，但`<HashRouter>`修改的是地址栏的hash值。

备注：6.x版本中`<HashRouter>`、`<BrowserRouter> ` 的用法与 5.x 相同。

## Routes 与 Route

Routes是创建路由管理器， Route是创建路由对象

- v6版本中移出了先前的`<Switch>`，引入了新的替代者：`<Routes>`。

- `<Routes>` 和 `<Route>`要配合使用，且必须要用`<Routes>`包裹`<Route>`。

- `<Route>` 相当于一个 if 语句，如果其路径与当前 URL 匹配，则呈现其对应的组件。

- `<Route caseSensitive>` 属性用于指定：匹配时是否区分大小写（默认为 false）。

- 当URL发生变化时，`<Routes> `都会查看其所有子` <Route>` 元素以找到最佳匹配并呈现组件 。

- `<Route>` 也可以嵌套使用，且可配合`useRoutes()`配置 “路由表” ，但需要通过 `<Outlet>` 组件来渲染其子路由。

```jsx
<Routes>
  {/* path定义路径，可以省略path前的/；element定义当前路径对应的组件 */}
  <Route path='/' element={<Home />} />
   
  {/* 
  路由嵌套：路由嵌套要写在路由配置页，渲染嵌套的路由组件的位置使用Outlet 
  friend 是一级路由，路径为 /friend 
  chat是二级路由，对应路径为 /friend/chat/张三
  */}
  <Route path='friend' element={<Friends />} />
 
    <Route path='chat/:name' element={<Chat />} />
  </Route>

  <Route path='setting' element={<Settings />} />
	
  {/* Route也可以不写element属性, 这时就是用于展示嵌套的路由，所对应的路径是/users/login */}
  <Route path="user">
    <Route path="login" element={<Login />} />
  </Route>

  {/* 当没有其他路由匹配该URL时，你可以使用path="*"渲染一个"未找到"的路由。这条路由将匹配任何URL，但优先级最低，因此路由器只有在没有其他路由匹配的情况下才会选择它 */}
  <Route path='*' element={<NotFound />} />
</Routes>
```

## Link

`<Link>`修改URL，且不发送网络请求（路由链接）。

注意：`<Link>`外侧需要用`<BrowserRouter>`或`<HashRouter>`包裹。

```jsx
import { Link } from "react-router-dom";

const App = () => {
	const [items, setItems] = useState([
		{ path: '/', title: '首页', conponent: Home },
		{ path: '/friend', title: '好友', conponent: Friends },
		{ path: '/setting', title: '设置', conponent: Settings },
	]);
  
	return (
		<div className='app'>
			<nav className='nav'>
				<div className='w'>
				{items.map(item => (
						<Link to={item.path} key={item.path}>
							{item.title}
						</Link>
					))}
				</div>
			</nav>
    </div>
	);
};
```

## NavLink

`<NavLink>`与`<Link>`组件类似，且可实现导航的“高亮”效果。

- `NavLink组件`和`Link组件`的功能是一致的，区别在于可以判断其`to属性`是否是当前匹配到的路由
- `NavLink组件`的`style`或`className`可以接收一个函数，函数接收一个`isActive`参数，可根据该参数调整样式，处理高亮状态，NavLink默认类名是active，可以通过自定义类名或者样式实现高亮：

- 自定义类名

```jsx
<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.path} key={item.path}>
  {item.title}
</NavLink>
```

- 自定义样式

```jsx
<NavLink style={({ isActive }) => ({backgroundColor: isActive ? 'lightblue': ''})} to={item.path} key={item.path}>
  {item.title}
</NavLink>
```

默认情况下，当Home的子组件匹配成功，Home的导航也会高亮，

当NavLink上添加了end属性后，若Home的子组件匹配成功，则Home的导航没有高亮效果。

```jsx
<NavLink to="home" end >home</NavLink>
```

## Navigate

只要`<Navigate>`组件被渲染，就会修改路径，切换视图（重定向）。

`<Navigate>`的`replace`属性用于控制跳转模式（push 或 replace，默认是push）。

```jsx
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Home = props => {
	const [show, setShow] = useState(false);
	return (
		<div id='home' className='w'>
			<h1>首页</h1>
			{/* 根据show的值决定是否切换视图 */}
			{show && <Navigate to='/setting' replace={true} />}
			<button onClick={() => setShow(true)}>按钮</button>
		</div>
	);
};
```

## Outlet

当`<Route>`产生嵌套时，渲染其对应的后续子路由。

```jsx
import {  useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Friends = props => {
	const [items, setItems] = useState([
		{ name: 'Tom', id: 10 },
		{ name: 'Lily', id: 11 },
		{ name: 'Lucy', id: 12 },
	]);
	return (
		<div id='home' className='w'>
			<nav className='nav-home'>
				{items.map(item => {
					return (
						<NavLink className={({ isActive }) => (isActive ? 'active link' : 'link')} to={'/friend/chat/' + item.name} key={item.id}>
							{item.name}
						</NavLink>
					);
				})}
			</nav>
			{/* Outlet 渲染子路由组件 */}
			<Outlet className='child'></Outlet>
		</div>
	);
};
```

# 路由hooks

## useRoutes()

作用：根据路由表，动态创建`<Routes>`和`<Route>`。它的作用是动态地配置路由，它接收一个路由数组，并使用匹配到的路由来渲染相应的组件。

`useRoutes()` 在功能上等同于 `<Routes>`，但它使用 JavaScript 对象而不是元素来定义路由。这些对象具有与 `<Route>` 组件相同的属性。

`useRoutes()`的返回值是可用于呈现路由树的有效 React 元素。

```jsx
//路由表配置：src/routes/index.jsx
import { Navigate } from 'react-router-dom';

import Home from '../views/Home';
import Friend from '../views/Friend';
import Setting from '../views/Setting';
import NotFound from '../views/NotFound';
import Chat from '../views/Chat';

const routes = [
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

```jsx
// App.jsx

import { useState } from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

const App = () => {
  // 根据路由表生成对应的路由规则
  const ElementRouter = useRoutes(routes)
	const [items] = useState([
		{ path: '/home', title: '首页' },
		{ path: '/friend', title: '好友' },
		{ path: '/setting', title: '设置' },
	]);

	return (
		<div className='app'>
			<nav className='nav'>
				<div className='w'>
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
```

## useNavigate()

作用：返回一个函数用来实现编程式导航。

```jsx
import { useNavigate } from 'react-router-dom';

function Chat(props) {
  const navigate = useNavigate();
	const goBack = () => {
    // 第一种使用方式：传入数值进行前进或后退，类似 history.go()方法
		// navigate(-1);
    
		// 第二种使用方式：指定具体的路径
		navigate('/friend', {
			replace: false,
			state: { a: 1, b: 2 },
		});
	};
	return (
		<div id="chat" className="w">
			<h2>chat页面 </h2>
      <button onClick={goBack}>返回</button>
		</div>
	);
}
```

##  useParams()

作用：回当前匹配路由的`params`参数。

```jsx
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function Chat(props) {
	// 获取路径参数
	const params = useParams();
	return (
		<div id='chat' className='w'>
      <h2>chat页面</h2>
      <p>params.name： {params.name}</p>
		</div>
	);
}
```

```jsx
const App = () => {
	return (
		<div className='app'>
			<Routes>
				<Route path='chat/:name' element={<Chat />} />
			</Routes>
		</div>
	);
};
```

## useLocation()

作用：获取当前 location 信息，对标5.x中的路由组件的`location`属性。

```jsx
import { useLocation } from 'react-router-dom';

function Friend(props) {
	// 路由位置信息
	const location = useLocation();
	console.log(location);
  // {
  //   hash: "",
  //   key: "1nw4p3qf",
  //   pathname: "/friend",
  //   search: "?name=张三&age=18",
  //   state: {a: 1, b: 2},
  // }

	return (
		<div id='friend' className='w'>
			<h2>friend页面</h2>
		</div>
	);
}
```

##  useSearchParams()

作用：用于读取和修改当前位置的 URL 中的查询字符串。

返回一个包含两个值的数组，内容分别为：当前的seaech参数、更新search的函数。

```jsx
function Chat(props) {
	const [search, setSearch] = useSearchParams();
	const name = search.get('name');
	const age = search.get('age');

	return (
		<div id='chat' className='w'>
			<h2>chat页面</h2>
			<button onClick={() => setSearch('name=张三&age=18')}>点击更新一下收到的search参数</button>
			<p> name={name} </p>
			<p> age={age} </p>
		</div>
	);
}
```

## useMatch()

作用：返回当前匹配信息，对标5.x中的路由组件的`match`属性。

```jsx
<Route path="/friend/chat/:name" element={<Chat />}/>
<NavLink to="/friend/chat/Tom">好友</NavLink>
```

```jsx
function Chat(props) {
	const match = useMatch('/friend/chat/:name');
	console.log(match);
  // {
  //   params: { name: 'Tom' },
  //   pathname: "/friend/chat/Tom",
  //   pathnameBase: "/friend/chat/Tom",
  //   pattern: {path: '/friend/chat/:name', caseSensitive: false, end: true},
  // }

	return (
		<div id='chat' className='w'>
			<h2>chat页面</h2>
		</div>
	);
}
```

## useInRouterContext()

作用：如果组件在 `<Router>` 的上下文中呈现，则 `useInRouterContext` 钩子返回 true，否则返回 false。

## useNavigationType()

作用：返回当前的导航类型（用户是如何来到当前页面的）。

返回值：`POP`、`PUSH`、`REPLACE`。

备注：`POP`是指在浏览器中直接打开了这个路由组件（刷新页面）。

## useOutlet()

作用：用来呈现当前组件中渲染的嵌套路由。

```jsx
const result = useOutlet()
console.log(result)
// 如果嵌套路由没有挂载,则result为null
// 如果嵌套路由已经挂载,则展示嵌套的路由对象
```

## useResolvedPath()

作用：给定一个 URL值，解析其中的：path、search、hash值。

# 路由使用步骤

## 第一步：安装

react-router-dom是浏览器端的基于react-router库的库，所以装了这个以后就不用再手动装react-router了

```bash
npm install react-router-dom
```

## 第二步：连接路由

连接你的App到浏览器的URL。用BrowserRouter包裹在你的App的外面

```jsx
// main.jsx
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

## 使用组件配置路由

```JSX
import { NavLink, Route, Routes } from 'react-router-dom';

import Chat from './views/Chat';
import Friend from './views/Friend';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Setting from './views/Setting';

const App = () => {
	const items = [
		{ path: '/', title: '首页' },
		{ path: '/friend', title: '好友' },
		{ path: '/setting', title: '设置' },
	];

	return (
		<div className='app'>
			<nav className='nav'>
				<div className='w'>
					{items.map(item => (
						<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={item.path} key={item.path}>
							{item.title}
						</NavLink>
					))}
				</div>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='friend' element={<Friend />}>
					<Route path='chat/:name' element={<Chat />} />
				</Route>
				<Route path='setting' element={<Setting />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
```

# 默认路由

默认路由使用index属性实现。

index路由和其他路由不同的地方是它没有path属性，他和父路由共享同一个路径。

- index路由渲染在父路由的outlet，而且路由地址和父路由相同
- index路由在父路由匹配并且其他子路由不匹配的时候 匹配
- index路由是一个父节点默认的子节点
- index路由在用户还没有点击导航中的链接时渲染

```jsx
const routes = [
	{
		path: '/setting',
		element: <Setting />,
		children: [
			{ index: true, element: <Other1 /> },
			{ path: 'other1', element: <Other1 /> },
			{ path: 'other2', element: <Other2 /> },
		],
	},
];
```

```jsx
import { Link,Outlet } from "react-router-dom";
const Settings = props => {
	return (
		<div id='settings' className='w'>
			<h1>设置</h1>
			<Link to='/setting/other1'>选项1</Link>
			<Link to='/setting/other2'>选项2</Link>
			<Outlet className='child'></Outlet>
		</div>
	);
};
export default Settings;
```

- 当路径是 `/setting` 的时候，Setting组件中的Outlet会显示 `Other1` 组件
- 当路径是 `/setting/other1` 的时候，Setting组件中的Outlet会显示 `Other1` 组件
- 当路径是 `/setting/other2` 的时候，Setting组件中的Outlet会显示 `Other2` 组件

# 路由监听

```jsx
import { useLocation } from 'react-router-dom';

// 监听路由的变化
const location = useLocation();
useEffect(() => {
  console.log('进入：', location.pathname);
  return () => {
    console.log('离开：', location.pathname);
  };
});
```

# 路由传参

## params参数

react路由支持动态路由

```jsx
// 路由表
const routes = [
	{
    path: 'chat/:name',
    element:<Chat/>,
	},
];

<Link to='/chat/张三'>张三</Link>
```

获取参数使用 useParams

```jsx
import { useParams } from 'react-router-dom';

// 获取路径参数
const params = useParams();  
params // {name: '张三'}
```

## search参数

```jsx
// 路由表
const routes = [
	{
    path: 'chat',
    element: <Chat/>,
	},
];

<Link to='/chat/?name=张三'>张三</Link>
```

获取参数使用 useSearchParams

```jsx
import { useSearchParams } from 'react-router-dom';

const [search, setSearch] = useSearchParams();
const name = search.get('name'); // 张三
```

或者使用useLocation

```jsx
import { useLocation } from 'react-router-dom';
import qs from "query-string";

const { search } = useLocation();
console.log(qs.parse(location.search)); // {name: '张三'}
```

> 备注：useLocation获取到的search是urlencoded编码字符串(例如: ?age=20&name=zhangsan)，需要借助query-string解析参数成对象

## state属性

通过Link的state属性传递参数

```jsx
// 路由表
const routes = [
	{
    path: 'chat',
    element: <Chat/>,
	},
];

<Link to='/chat' state={ {name:'张三'} }>张三</Link>
```

获取参数使用useLocation

```jsx
import { useLocation } from 'react-router-dom';

let { state } = useLocation();

state // {name: '张三'}
```

# 编程式的导航

编程导航使用 useNavigate

```jsx
import {  useNavigate } from "react-router-dom";
export default function Demo() {
  const navigate = useNavigate();
  //...
}
```

## push导航

1. push跳转+携带params参数

```jsx
navigate(`/child/${id}/${title}`);
```

2. push跳转+携带search参数

```jsx
navigate(`/child?id=${id}&title=${title}`);
```

3. push跳转+携带state参数

```jsx
navigate("/child", { state: { id, title }});
```

## replace导航

1. replace跳转+携带params参数

```jsx
navigate(`/child/${id}/${title}`,{replace: true});
```

2. replace跳转+携带search参数

```jsx
navigate(`/b/child?id=${id}&title=${title}`,{replace: true});
```

3. replace跳转+携带state参数

```jsx
navigate("/child", { state: { id, title },replace: true});
```

# 路由懒加载

- React利用 React.lazy与import()实现了渲染时的动态加载
- 利用Suspense来处理**异步加载**资源时页面应该如何显示的问题
- 通过lazy() api来动态import需要懒加载的组件
- import的组件目前**只支持**export default的形式导出
- Suspense来包裹懒加载的组件进行加载，可以设置fallback现实加载中效果
- React.lazy可以结合Router来对模块进行懒加载。

`React.Suspense`与`React.lazy`来实现

`React.suspense`用来实现懒加载路由时的loading兜底

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

- `fallback`参数中可以传入react组件或dom元素，例如：`<div>Loading...</div>`
- 注意：`React.suspense`不只是针对于懒加载的路由，而针对所有懒加载的组件，只要是存在懒加载的，都可以通过在外成包裹 `React.suspense`来实现`loading`或其他`占位dom`

`React.lazy`用来包装组件路径，实现路由懒加载

```jsx
const LazyDemoPage = lazy(() => import("@views/DemoPage"));
```

- 注意：`React.lazy`目前只支持默认导出(default exports)

案例：

```jsx
//路由表配置：src/routes/index.jsx
import { lazy, Suspense } from 'react';

const Chat = lazy(() => import('@/views/Chat'));
const Friend = lazy(() => import('@/views/Friend'));
const Home = lazy(() => import('@/views/Home'));
const Setting = lazy(() => import('@/views/Setting'));
const NotFound = lazy(() => import('@/views/NotFound'));

const LoadingTip = Element => (
	<Suspense fallback={<div>loading...</div>}>
		<Element />
	</Suspense>
);

const routes = [
	{ path: '/', element: LoadingTip(Home) },
	{
		path: '/friend',
		element: LoadingTip(Friend),
		children: [
			{
				path: 'chat/:name',
				element: LoadingTip(Chat),
			},
		],
	},
	{ path: '/setting', element: LoadingTip(Setting) },
	{ path: '*', element: LoadingTip(NotFound) },
];

export default routes;
```

# 路由拦截

## 路由表

```jsx
//路由表配置：src/routes/index.jsx
import { lazy, Suspense } from 'react';

const Chat = lazy(() => import('@/views/Chat'));
const Friend = lazy(() => import('@/views/Friend'));
const Home = lazy(() => import('@/views/Home'));
const Login = lazy(() => import('@/views/Login'));
const NotFound = lazy(() => import('@/views/NotFound'));

const LoadingTip = Element => (
	<Suspense fallback={<div>loading...</div>}>
		<Element />
	</Suspense>
);

const routes = [
	{
		path: '/',
		element: LoadingTip(Home),
		meta: {
			title: '首页',
			auth: false,
			menu: true,
		},
	},
	{
		path: '/friend',
		element: LoadingTip(Friend),
		meta: {
			title: '好友',
			auth: true,
			menu: true,
		},
		children: [
			{
				path: 'chat/:name?',
        element: LoadingTip(Chat),
        meta: {
          title: '聊天',
          auth: true,
          menu: true,
        },
			},
		],
	},
	{
		path: '/login',
		element: LoadingTip(Login),
		meta: {
			title: '登录',
			auth: false,
			menu: true,
		},
	},
	{
		path: '*',
		element: LoadingTip(NotFound),
		meta: {
			title: '404',
			auth: false,
			menu: false,
		},
	},
];

export default routes;
```

## 拦截函数

```jsx
//路由表配置：src/routes/routerBefore.jsx

import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import routes from './index';

// 拦截组件
const RouterBeforeEach = props => {
	if (props?.route?.meta?.title) {
		document.title = props.route.meta.title;
	}
	const isLogin = !!localStorage.getItem('token');
	if (props?.route?.meta?.auth) {
		if (!isLogin) {
			return <Navigate to={'/login'} replace />;
		}
	}
	const location = useLocation();
	const routerKey = location.pathname;
	if (isLogin && ['/login'].includes(routerKey)) {
		return <Navigate to={'/'} replace />;
	}
	return <div>{props.children}</div>;
};

// 渲染路由
const renderRoutes = routes => {
	return routes.map(item => {
		const route = { meta: item.meta, path: item.path };

		route.element = <RouterBeforeEach route={item}>{item.element}</RouterBeforeEach>;

		if (item.children) {
			route.children = renderRoutes(item.children);
		}
		return route;
	});
};

export default function Router() {
	return useRoutes(renderRoutes(routes));
}
```

## 注册路由

```jsx
// App.jsx

import NavBar from './components/NavBar';
import Router from './routes/routerBefore';

const App = () => {

	return (
		<div className='app'>
			<NavBar></NavBar>
			{/* 注册路由 */}
			{/* {Router()} */}
			<Router></Router>
		</div>
	);
};

export default App;
```

# 其他

[4k字介绍 React Router 6.4 超大变化：引入 Data API。你不纯粹了！ - 掘金 (juejin.cn)](https://juejin.cn/post/7170603388579610632)

[react-router v6 路由守卫最佳实践! - 掘金 (juejin.cn)](https://juejin.cn/post/7195572628958167095)

[react-router v6 如何实现动态路由？ - 掘金 (juejin.cn)](https://juejin.cn/post/7132393527501127687)

[react routerV6基础使用及路由拦截 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/555189442)

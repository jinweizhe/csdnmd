### 安装
```js
 npm install react-router-dom
```
### 在main,js注册(只看画线的几行就好)
```js
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
------------------------------------------------

import '@/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 使用 BrowserRouter  组件包裹整个react应用
// BrowserRouter 历史模式
// HashRouter hash模式
root.render(
	<BrowserRouter>
	--------------
		<StrictMode>
			<App />
		</StrictMode>
	</BrowserRouter>
	----------------
);
```
### 如下是路由结构
```js
import Chat from '@/views/Chat';
import { lazy, Suspense } from 'react';
// import Friend from '@/views/Friend';
// import Home from '@/views/Home';
import Other1 from '@/views/Other1';
import Other2 from '@/views/Other2';
// import Setting from '@/views/Setting';

//懒加载页面
const Home = lazy(() => import('@/views/Home'));
const Friend = lazy(() => import('@/views/Friend'));
const Setting = lazy(() => import('@/views/Setting'));

//展示路由的lodding效果
const LoadingTip = (Element)=> (
	<Suspense fallback={<div>loading...</div>}>
		<Element />
	</Suspense>
);

const routes = [
	{
		path: '/',
    // element: <Suspense fallback={ <div>loading</div> }><Home></Home></Suspense>,
    element: LoadingTip(Home),
		meta: {
      title: '首页',
      
		},
	},
	{
		path: '/friend',
		element: LoadingTip(Friend),
		meta: {
      title: '好友',
      auth: true
		},
		children: [
			// 嵌套路由的路径不能以 / 开头
			{ path: 'chat/:name?', element: <Chat></Chat> },
		],
	},
	{
		path: '/setting',
		element: LoadingTip(Setting),
		meta: {
      title: '设置',
      auth: true
		},
		children: [
			//  index属性设置默认路由
			// 进入设置默认显示Other1，点击 /setting/other1 也会显示Other1，防止进入设置页面显示空白页面
			{ index: true, element: <Other1></Other1> },
			{ path: 'other1', element: <Other1></Other1> },
			{ path: 'other2', element: <Other2></Other2> },
		],
	},
	// 通配符放在最后，匹配404页面
	// {path:'*', element: <NotFound></NotFound>}
];

export default routes;
```
### 1.通过navigate去跳转页面并携带参数
```html
import { useNavigate } from "react-router-dom";
export default () => {
  const navigate = useNavigate();
	return (
		<div>
      <h2>首页</h2>
      <!-- 点击按钮跳转到对应路由 -->
      <button onClick={()=> navigate('/setting') }>去设置</button>
      <button onClick={()=> navigate('/friend/chat/张三') }>去聊天1</button>
      <button onClick={()=> navigate('/friend/chat?name=张三') }>去聊天2</button>
		</div>
	);
};
```
### 2.'去聊天'页面通过isActive判断路由添加样式
```js
// import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default () => {
  const users = [
    { name: "张三", age: 18 },
    { name: "李四", age: 16 },
    { name: "王五", age: 19 },
  ];
  return (
    <div>
      <h2>好友</h2>
      <div>
        {/* 下面代码中的isActive用于判断当前的路由是否与NavLink的to属性匹配。如果匹配，则返回true，否则返回false。可以将isActive函数传递给NavLink组件的isActive属性，使得NavLink在当前路由与to属性匹配时，可以添加自定义的样式或class名。 */}
        {users.map((item) => (
          <NavLink
            to={"/friend/chat/" + item.name}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#0383fe" : "white",
            })}
            key={item.name}
          >
            {item.name}
          </NavLink>
        ))}
        <hr />
        {/*但在下面这段代码中却不可行,因为isActive用于判断当前的路由是否与NavLink的to属性匹配。如果匹配，则返回true，否则返回false。但是下面代码的只有固定的url,后面只是字符串的改变,因此通过isActive不能判断它的值,所有NavLink组件都会应用相同的样式，因为它们都没有被激活。解决这个问题的方法是，使用一个状态变量来判断当前NavLink是否被激活，并根据状态变量来设置样式。*/}
        {users.map((item) => (
          <NavLink
            to={"/friend/chat/?name=" + item.name}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#0383fe" : "white",
            })}
            key={item.name}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <hr />
      {/* 渲染嵌套子路由的出口 */}
      <Outlet></Outlet>
    </div>
  );
};
```
### 点击按钮进行动态子路由切换
```js
import { Link , Outlet} from "react-router-dom";
export default () => {
	return (
		<div>
      <h2>设置</h2>
      <Link to="/setting/other1">Other1</Link>
      <Link to="/setting/other2">Other2</Link>
      <hr />
      <Outlet></Outlet>
		</div>
	);
};
```
### app.jsx的内容
```js
import { useEffect } from 'react';
import { NavLink, useLocation, useRoutes } from 'react-router-dom';
import routes from './routes';

export default function App() {
	// 它的作用是动态地配置路由，它接收一个路由数组，并使用匹配到的路由来渲染相应的组件。
	const ElementRouter = useRoutes(routes);

	// 监听路由的变化
	const location = useLocation();
  // console.log('location: ', location);
	useEffect(() => {
		console.log('进入：', location.pathname);
		return () => {
			console.log('离开：', location.pathname);
		};
	});

	// NavLink 和Link 都是添加路由链接，NavLink可以使用isActive属性动态控制类名或者样式
	// 类名的控制：className={({ isActive }) => (isActive ? 'a' : 'b')}
	// 样式的控制：style={({ isActive }) => ({ backgroundColor: isActive ? 'red' : 'white' })}
	return (
		<div className='App'>
			{/* 路由导航链接 */}
			<nav className='nav'>
				<div className='w'>
					{routes.map(item => (
						// <Link to={item.path} key={item.path}>{item.meta.title}</Link>
						// <NavLink className={({ isActive }) => (isActive ? 'a' : 'b')} to={item.path} key={item.path}>{item.meta.title}</NavLink>
						<NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'red' : 'white' })} to={item.path} key={item.path}>
							{item.meta.title}
						</NavLink>
					))}
				</div>
			</nav>

			{/* 注册路由表: 使用useRoutes动态生成 <Routes/> */}
			{ElementRouter}
		</div>
	);
}
```
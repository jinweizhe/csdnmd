

[可以参考b站这个老师视频,贼详细]: https://www.bilibili.com/video/BV1MU4y1U7Lw/?spm_id_from=333.337.search-card.all.click&amp;vd_source=54b92ea953eb0a7281545e66410fc2f5

## 以下为模板代码

### 安装(添加 Redux Toolkit 和 React-Redux 依赖包到你的项目中)
```js
npm install @reduxjs/toolkit react-redux
```
### 以下为项目目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/7c733a729e474ad9a684d9cc5e81cffe.png)
### 在store/index.js里面的模板
```js
import { configureStore } from '@reduxjs/toolkit';
import setUserinfo from '@/store/features/userSlice';
// 创建仓库实例
const store = configureStore({
	// 合并多个slice中的reducer
	reducer: {
		user:setUserinfo 
	},
});
export default store;
```
### 创建模块(模块化思想),这里就是模板,所有模块通用(src/features/userSlice.js)
```js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		userinfo: {
		},
	},

	reducers: {
		setUserinfo(state, a) {
		   state.count += a.payload;
		},
	},
});

//异步情况
// 定义导出异步action
export const subAsync = (payload) => {
  console.log("payload", payload);
  return (dispatch, getState) => {
    console.log("getState", getState);
    setTimeout(() => {
      dispatch(setUserinfo(1));
    }, 3000);
  };
};

//导出方法
export const { setUserinfo } = userSlice.actions;

export default userSlice.reducer;
```
### 在main.jsx引入模板(只需要看下面画横线的四行)
```js
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store from '@/store';
---------------------------
import { Provider } from 'react-redux';
--------------------------------------
// 用 react-redux 提供的 Provider 组件，并且在渲染之前将根组件App包装进 <Provider>。
// 使用Provider组件将store作为prop注入整个react程序，注入之后程序中所有的组件中都可以使用store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<Provider store={store}>
		-----------------------
			<App />
		</Provider>
		-----------
	</StrictMode>
);
```
### 在组件内使用
```js
//useDispatch用来调用action里面的方法,useSelector 用来获取state里面的数据
import { useDispatch, useSelector } from 'react-redux';
// 导入action函数
import { setUserinfo } from '@/store/features/userSlice';

export default function App() {
	// 1、组件中访问redux的state
	// 通过useSelector直接拿到store中定义的user属性
	//useSelector的store参数为默认的store/index.js里面的模板reducer,通过.user找到里面属性对应的模块
	const { userinfo } = useSelector(store => store.user);
	//userinfo 为当前选中模块的state值
	
	// 2、组件中分发redux的action
	// 使用 useDispatch 钩子获取 dispatch 函数，并根据需要 dispatch actions
	const dispatch = useDispatch();

	return (
		<div className='App'>
		    <!--这里点击按钮就可以修改store的值了,通过dispatch调用action里面的setUserinfo方法进行传值-->
			<button onClick={() => dispatch(setUserinfo({ name: '李四', age: 22 }))}>按钮3</button>
		</div>
	);
}
```
## 以下是针对上面模板的示例代码
![在这里插入图片描述](https://img-blog.csdnimg.cn/7c733a729e474ad9a684d9cc5e81cffe.png)
### 在store/index.js里面的
```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import userReducer from './features/userSlice';

// 创建仓库实例
const store = configureStore({
	// 合并多个slice中的reducer
	reducer: {
		counter: counterReducer,
		user: userReducer,
	},
});

export default store;
```
### 创建模块一(模块化思想),src/features/userSlice.js
```js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		userinfo: {
			name: '张三',
			age: 18,
		},
	},

	reducers: {
		setUserinfo(state, { payload }) {
			console.log('setUserinfo: ', payload);
			state.userinfo = payload;
		},
	},
});

export const { setUserinfo } = userSlice.actions;

export default userSlice.reducer;
```
### 创建模块二(模块化思想),src/features/counterSlice.js
```js
import { createSlice } from '@reduxjs/toolkit';

// 创建slice
export const counterSlice = createSlice({
	// 添加唯一的标识
	name: 'counter',
	// 状态
	initialState: {
		count: 1,
	},

	// 1、定义reducer更新状态的函数
	// 2、是组件中dispatch使用的actions函数
	reducers: {
		// action函数，参数 state 就是状态
		increment(state) {
			console.log('increment state: ', state.count);
			state.count++;
    },

    // dispatch(incrementByData(2))
    // 参数 action 分发action时传递的数据，action中有两个属性  payload, type
    // payload 就是载荷，就是分发incrementByData 传递的数字2
    // type 是action的类型： counter/incrementByData

    // incrementByData (state, action) {
    //   console.log('incrementByData: ', action);
    // }
    incrementByData (state, {payload, type}) {
      console.log('payload: ', payload);
      state.count += payload
    }

	},
});

// console.log('counterSlice: ', counterSlice);

// 导出 action 函数
export const {
  increment,
  incrementByData
} = counterSlice.actions;

// 导出reducer
export default counterSlice.reducer;
```
### 在main.jsx引入模板
```js
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store from '@/store';
import { Provider } from 'react-redux';

import '@/setting';

// 用 react-redux 提供的 Provider 组件，并且在渲染之前将根组件App包装进 <Provider>。
// 使用Provider组件将store作为prop注入整个react程序，注入之后程序中所有的组件中都可以使用store
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
```
### 在组件内使用
```js
import { useDispatch, useSelector } from 'react-redux';
// 导入action函数
import { increment, incrementByData } from '@/store/features/counterSlice';
import { setUserinfo } from '@/store/features/userSlice';

export default function App() {
	// 1、组件中访问redux的state
	// 通过useSelector直接拿到counter store中定义的count属性
	const { count } = useSelector(store => store.counter);
	const { userinfo } = useSelector(store => store.user);

	// 2、组件中分发redux的action
	// 使用 useDispatch 钩子获取 dispatch 函数，并根据需要 dispatch actions
	const dispatch = useDispatch();

	return (
		<div className='App'>
			<h1 className='h1'>hello react </h1>
			<p> count = {count} </p>
			<p> userinfo.name = {userinfo.name} </p>
			<p> userinfo.age = {userinfo.age} </p>
			<button onClick={() => dispatch(increment())}>按钮1</button>
			<button onClick={() => dispatch(incrementByData(2))}>按钮2</button>
			<button onClick={() => dispatch(setUserinfo({ name: '李四', age: 22 }))}>按钮3</button>
		</div>
	);
}
```
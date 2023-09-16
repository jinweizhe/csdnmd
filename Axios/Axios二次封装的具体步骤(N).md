# axios是什么

1. 前端最流行的 ajax请求库
2. react/vue官方推荐使用axios发ajax请求

# axios特点

1. **基于promise的异步ajax请求库**
2. **浏览器端/node端都可以使用**
3. **支持请求/响应拦截器**
4. 支持请求取消
5. 请求/响应数据转换
6. 批量发送多个请求 

# axios常用语法

```js
axios(config) 	通用/最本质的发任意类型请求的方式
axios(url[,config]) 	可以只指定url发get请求
axios.request(config) 	等同于axios(config)
axios.get(url[,config]) 	发get请求
axios.delete(url[,config]) 	发delete请求
axios.post(url[,data,config]) 	发post请求
axios.put(url[,data,config]) 	发put请求
	
	
axios.defaults.xxx 	请求默认全局配置
axios.interceptors.request.use() 	添加请求拦截器
axios.interceptors.response.use() 	添加响应拦截器
	
	
axios.create([config]) 	创建一个新的axios(他没有下面的功能)
	
	
axios.Cancel() 	用于创建取消请求的错误对象
axios.CancelToken() 	用于创建取消请求的token对象
axios.isCancel() 	是否是一个取消请求的错误
axios.all(promise) 	用于批量执行多个异步请求
```

# axios难点语法—create

axios.create(config) ：创建新的axios对象对axios请求进行二次封装

根据指定配置创建一个新的 axios 对象，也就是每个axios 都有自己的配置。新的 axios 独享只是没有 取消请求 和 批量请求 的方法，其它所有语法都是一致的。

为什么要这种语法？

- 需求，项目中有部分接口需要的配置与另一部分接口的配置不太一样
- 解决：创建2个新的 axios ，每个都有自己的配置，分别对应不同要求的接口请求中

简单使用

```js
const instance1 = axios.create({
    baseURL:"http://localhost:3000" 
})

const instance2 = axios.create({
    baseURL:"http://localhost:4000"
})

// 同时请求 端口号 3000 4000

// 使用instance1发请求
instance1({
  url:"/posts"
}) 
// 或
instance1.get("/posts")


// 使用instance2发请求
instance2({
  url:"/posts"
})
// 或
instance2.get("/posts")
```

# axios拦截器interceptors

拦截每一次你的请求和响应，然后进行相应的处理。

## 请求拦截器

会在你发送请求之前运行，对请求进行处理

例如：这个请求拦截器的功能是为我每一次请求去判断是否有token，如果token存在则在请求头加上这个token。后台会判断我这个token是否过期。

```tsx
// http request 拦截器
instance.interceptors.request.use(
  config => {
    console.log('数据加载中……')//出现加载中动画
    const token = sessionStorage.getItem('token')
    if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = 'Bearer ' + token  //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
);
```

## 响应拦截器

会在接到响应之后运行，对响应进行处理

```javascript
instance.interceptors.response.use(
  response => { 
    //成功请求到数据
    console.log('加载中动画结束,hide')//数据请求成功,自然加载中动画隐藏
    //这里根据后端提供的数据进行对应的处理
    return response.data;
  },
  error => {  //响应错误处理
    console.log('error',error);
    let text = error ? '404' : '网络异常，请重试';
    console.log(text)
    return Promise.reject(error)
  }
);
```

# axios配置baseURL

## 全局的 axios 默认值

```js
// 直接使用axios添加默认值
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

## 全局的 axios 默认值

```js
// 先创建一个实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // 当跨域的时候发送cookie
  timeout: 5000 // 超时时间
})

// 使用创建的实例添加默认值
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
```

# 完整配置

```js
// config/http.js

import axios from 'axios';
import { Toast } from 'vant';

// 创建axios实例
const service = axios.create({
	baseURL: process.env.VUE_APP_URL,
	timeout: 60 * 1000,
  withCredentials: false, //表示跨域请求时是否需要使用凭证
	// headers: { 'Content-Type': 'application/json' },
});

// 添加请求拦截器
service.interceptors.request.use(
	config => {
		// 在发送请求之前做些什么
		//比如某些页面需要登录，在这里可以判断是否登录，也可以设置请求头等内容
		// if (store.getters.token) {
		//     // 让每个请求携带token 
		//     config.headers['Authorization'] = 'Bearer ' +  store.getters.token
		// }
		return config;
	},
	error => {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
service.interceptors.response.use(
	response => {
		// 对响应数据做点什么
		let res = response.data;
		console.log(res);

		if (res.error !== 0 && res.data) {
			Toast(res.data);
		}
		return res;
	},
	error => {
		// 对响应错误做点什么：统一进行响应错误的处理
		Toast(error.message);
		// console.dir(error);
		return Promise.reject(error);
	}
);

/**
 * 发送ajax请求
 * @param {String} url      请求地址
 * @param {String} method   请求方法 get post
 * @param {Object} data     请求参数
 * @param {Object} ctx      请求头等相关参数
 */
const callApi = (url, method = 'get', data = {}, ctx = {}) => {
	return service(
		Object.assign(
			{},
			{
				url,
				method,
				params: method === 'get' ? data : {},
				data: method == 'post' ? data : {},
			},
			ctx
		)
	);
};

/**
 * GET请求接口
 * @param {String} url 请求接口地址
 * @param {Object} data 请求接口参数
 * @param {Object} ctx 请求头等相关参数
 */
export const getApi = (url, data, ctx) => callApi(url, 'get', data, ctx);
/**
 * POST请求接口
 * @param {String} url 请求接口地址
 * @param {Object} data 请求接口参数
 * @param {Object} ctx 请求头等相关参数
 */
export const postApi = (url, data, ctx) => callApi(url, 'post', data, ctx);
```

```js
// api/api.js

import { getApi } from '@/utils/http';

/**
 * 获取所有房间列表
 * @param {Object} data 请求参数
 */
export const geAllRoomApi = data => getApi('/api/RoomApi/live', data);
/**
 * 获取某个分类的房间列表
 * @param {string | Number} data 房间分类或者房间id
 */
export const getCategaryOneApi = data => getApi('/api/RoomApi/live/' + data);
/**
 * 获取所有房间分类
 */
export const getCategaryAllApi = () => getApi('/api/RoomApi/game');
/**
 * 获取直播房间详情信息
 * @param {string | Number} data 房间名或者房间id
 */
export const getRoomDetailApi = data => getApi('/api/RoomApi/room/' + data);
```


**先安装uview插件,具体方法可百度,这里不细说**

### 在根目录下创建uitls，在uitls下创建http.js,写入以下内容
```js
// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
	// 初始化请求配置
	uni.$u.http.setConfig((config) => {
		/* config 为默认全局配置*/
		config.baseURL = 'http://127.0.0.1:3000'; /* 根域名 */
		return config
	})

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
		config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		if (config?.custom?.auth) {
			// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			config.header.token = vm.$store.state.userInfo.token
		}
		return config
	}, config => { // 可使用async await 做异步操作
		return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => {
		/* 对响应成功做点什么 可使用async await 做异步操作*/
		const data = response
		
		// console.log(data);
		// 自定义参数
		const custom = response.config?.custom
		
		if (data.statusCode !== 200) {
			// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
			if (custom.toast !== false) {
				uni.$u.toast('data.message')
			}

			// 如果需要catch返回，则进行reject
			if (custom?.catch) {
				return Promise.reject(data)
			} else {
				// 否则返回一个pending中的promise，请求不会进入catch中
				return new Promise(() => {})
			}
		}
		return data.data === undefined ? {} : data.data
	}, (response) => {
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}
```
在main.js中引入进来
```js
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)


//在app.mount(),前一行加入下面代码
require('./uitls/http')(app)
```
main.js的完整代码
```js
import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

try {
	function isPromise(obj) {
		return (
			!!obj &&
			(typeof obj === "object" || typeof obj === "function") &&
			typeof obj.then === "function"
		);
	}

	// 统一 vue2 API Promise 化返回格式与 vue3 保持一致
	uni.addInterceptor({
		returnValue(res) {
			if (!isPromise(res)) {
				return res;
			}
			return new Promise((resolve, reject) => {
				res.then((res) => {
					if (res[0]) {
						reject(res[0]);
					} else {
						resolve(res[1]);
					}
				});
			});
		},
	});
} catch (error) {}

const app = new Vue({
	...App
})

require('./uitls/http')(app)

// #ifdef H5
// #endif
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
```
再在根目录下创建api文件夹,存入index.js,放入以下发送请求的模板
```js
const http = uni.$u.http
//有参数加params
export const nav = (data) => http.get("/getTypeOne",{params:{data}});//
//无参数
export const nav = () => http.get("/getTypeOne");
```
案例代码:
```js
const http = uni.$u.http

//封装一下params
function xj(a){
	return {params:a}
}

export const nav = () => http.get("/getTypeOne");
// 轮播图
export const lbt = () => http.get("/banner");
// 获取商品列表
export const splb = (data) => http.get("/goodList",  xj({page: data}));
export const splb2 = (data, data2) => http.get("/goodList", xj({ type_one: data2 }));
// 获取二级分类列表
export const ejfl = (data) => http.get("/getTypeTwo", xj({ type_one: data }));
// 商品详情
// {params: {userName: 'name', password: '123456'}}
export const deail = (data) => http.get("/detail", xj({goodId: data}));
// 获取地址接口
export const address = (data, data2) => http.get("/location", xj({ lat: data, lng: data2 }));
// 同店商品列表商品
export const tuijian = (data) => http.get("/supplierList", xj({ supplier: data }));
//推荐商品
export const tuijian2 = (data) => http.get("/sameList", xj({ supplier: data }));
//搜索
export const sousuo = (data) => http.get("/search", xj({ word: data }));
// 登录
export const login = (data, data2) =>
  http.get("/login", xj({ userName: data, password: data2 }));
// 注册
export const register = (data, data2) =>
  http.get("/register", xj({ userName: data, password: data2 }));
// 添加购物车
export const shoppingcar = (data, data2) =>
  http.get("/add", xj({ goodId: data, count: data2 }));
// 更新购物车
export const update = (data, data2) =>
  http.get("/update", xj({ goodId: data, count: data2 }));
// 获取购物车列表
export const shoppinglist = () => http.get("/shopList");
// 删除购物车
export const del = (data) => http.get("/del", xj({ goodId: data }));
```
使用方式
```js
<script>
	import {nav} from '../../api/index.js'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.xj()
		},
		methods: {
			async xj(){
				let c=await nav()
				console.log(c);
			}
		}
	}
</script>
```
@[toc]
#### VUE在main.js里设置全局axios请求的配置
```js
//下载包
npm i axios -S
```
**在main.js配置如下**
```js
import axios from 'axios'
//配置共同的端口号和域名,后期代码中直接写接口就行,例如/user,/books
axios.default.baseURL='请求根路径'
//在vue实例对象的原型上添加这个属性
//今后，在每个.vue组件中要发起请求，直接调用this.axios.x××
Vue.prototype.axios=axios
```
**在组件中使用**
```js
<template>
	<div>
		<button @click="qingqiu">点击按钮发请求</button>
	</div>
</template>

//不在原型中添加axios属性的写法(不推荐,建议看下面这个)
/*
<script>
	import axios from 'axios'
	export dafault {
		methods:{
			async qingqiu(){
				const {data:res}=await axios.get('请求完整地址')
				console.log(res)
			}
		}
	}
</script>
*/

//第二种写法,在原型上添加axios属性,相当于全局配置了axios,全局都能直接使用
<script>
	export dafault {
		methods:{
			async qingqiu(){
			//this指向原型,通过打点调用里面的axios即可
				const {data:res}=await this.axios.get('请求接口')
				console.log(res)
			}
		}
	}
</script>
```
**把axios挂载到 vue原型上 有个缺点------无法实现API接口的复用**
**当想要在多个组件发送同样的请求时,每个组件都要写同样的按钮和方法(都要重新调用一下API接口)	,不利于复用**
# 实现axios方法的复用
### 第一步:封装公共接口
**在scr目录下创建一个utils文件夹,里面创建一个request.js模块,添加如下代码**
```js
//导入axios
import axios from 'axios'

const request = axios.create({
	//指定请求的根路径
	baseURL:'http://127.0.0.1'
})
export default request

//使用方法,在需要使用的模块导入当前的公共接口模块
//通过request.get()/request.post(),发请求,url路径直接写各个接口名即可,无需写全名了
```

> 拓展(后面下面的第二步才是封装接口的步骤):
> axios.create()是添加了自定义配置的新的axios
> ```js
> 例如：
> 用axios发送请求：
> axios({
> method:'POST',
> url:'http://localhost:8000/login',
> data
> })
> 用axios.create()创建一个新的axios发请求：
> cosnt requset = axios.create({
> //基础路径
> baseURL:'http://localhost:8000/'
> })
> requset({
> method:'POST',
> url:'/login',
> data
> })
> ```
> 好处：、
> 1.可以简化路径写法
> 2.当基础路径发生变化时方便修改，有利于维护

### 第二步,封装公共的模块步骤
**在src目录下创建API文件夹,然后存放不同的api模块,例如文章模块的api的请求,这里封装acticleAPI.js模块**
内容如下
```js
//在实际开发有各种各样的,例如评论相关的增删改查,用户信息的,文章相关的等等模块
//这里演示文章相关api的封装,其他根据需求也可以如此封装
//文章相关api都在此模块

//1.导出方法(方法名要见名知意)(向外按需导出)
//下面的request为公共接口的模块向外导出的,因此需要导入request.js公共模块,不然用不了
import request from '@/公共模块路径'
export const getArticleListAPI = function(参数值一,参数值二){
	return request.get('/articles',{
		//请求参数
		params:{
			参数名一:参数值一,
			参数名二:参数值二
		}
	})
}
```
### 第三步调用封装好的方法发请求
```js
在需要使用的模块,导入上面的公共接口和需要用的模块,代码如下
<script>
//按需导入封装好的方法
//{需要用的方法}
import { getArticleListAPI } from '@/方法路径'
export default {
	name:'当前模块名'
	data(){
		return{
			page:1,
			limit:5
		}
	},
	methods:{
		async 方法名(){
			const {data:res} = await getArticleListAPI(this.page,this.limit)
			console.log(res)//数据名
		}
	}
}
</script>
```
**封装完后,以后多个组件需要调用相同的请求,就重复第三步操作,按需引入即可**
### 配置请求拦截器
![在这里插入图片描述](https://img-blog.csdnimg.cn/8d29ae0f14254b2796d89556d0324897.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/a553592e32d54c7d836ffbbc142d5e8c.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/38e7b1ff856a41e69ba70550a65a03ee.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019acd91b684ad6b5d8fe84e9921e20.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/f977f9ebbe594491b08f5cd5afb98a0c.png)
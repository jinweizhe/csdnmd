@[toc]
# 路由基本使用
>**什么是路由??**
>就是对应关系(例如拨打10086会有不同的按键对应不同的服务,这种按键与服务对应的关系就是路由)
>通俗易懂的概念: Hash地址与组件之间的对应关系。
>**前端路由工作方式**
>1.用户点击了页面上的路由链接
>2.导致了URL地址栏中的Hash值发生了变化
>3.前端路由监听了到Hash地址的变化
>4.前端路由把当前Hash地址对应的组件渲染都浏览器中
>![在这里插入图片描述](https://img-blog.csdnimg.cn/91f5aeaadf414418a799d2cdacd85b3a.png)
## 实现简易的前端路由
**根组件创建对应路由的a标签,再使用component进行组件占位,通过is指定要显示的组件**
![在这里插入图片描述](https://img-blog.csdnimg.cn/dcbfefd84aaf46f3bf3d161fcb7b4f1f.png)
**可以发现此时组件绑定死了,因此应该动态绑定components的is属性值指向的组件,动态绑定**
![在这里插入图片描述](https://img-blog.csdnimg.cn/85c2b37e19e44b04bf965e959926f608.png)

**onhashchange事件监听组件的hash值的改变,当hash值被改变就会触发这个事件,通过location.hash可以获取当前的hash值,data里面定义的是默认的指向的组件**
![在这里插入图片描述](https://img-blog.csdnimg.cn/21d8c66e54ea4bee99a94dd76f750e06.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/a8bd4a23163a4aecb33c959edb3be661.png)
**上面写完,然后点击不同的链接,component就显示不同的组件内容,这就是一个简单的前端路由**
在实际开发中,路由不会这么简易,但也不需要自己写,下面就开始学习第三方库vue-router的使用了
## 安装和配置vue-router路由

> 什么是vue-router???
> vue-router是vue.js官方给出的路由解决方案。它只能结合vue项目进行使用，能够轻松的管理SPA项目中组件的切换。
> vue-router的官方文档地址: https://router.vuejs.org/zh/

#### 安装vue-router包
**在vue2项目中,安装vue-router的命令如下**
```js
npm i vue-router@3.5.2 -S
```
#### 创建路由模块
**在src源代码目录下，新建router/index.js路由模块，并初始化如下的代码**
![在这里插入图片描述](https://img-blog.csdnimg.cn/0cd89d4dd315483fa28340bfa989b32c.png)
**在index.js里面添加如下代码进行配置**
```js
//1.导入vue和vuerouter的包
import Vue from 'vue'
import VueRouter from 'vue-router'

//2.调用Vue.use()函数,把VueRouter安装为Vue的插件
//vue.use()函数的作用，就是来安装插件的
Vue.use(VueRouter)

//3.创建路由的实例对象
const router = new VueRouter()

//4.向外共享路由的实例对象
export default router
```
#### 导入并挂载路由模块
**上面配置完后,需要让路由的js模块与main.js模块关联,因此需要到main.js里面配置如下代码:**
```js
//1.导入路由模块
//import routerjs from '@/router/index.js'
//import routerjs from '@/router/'
import routerjs from '@/router'
//以上三种方式均可以引入/router/index.js
//在模块化导入时,如果给定的不是具体的文件,而是文件夹,则默认导入这个文件夹下名为index.js的文件,文件名不是index.js是需要指定完整路径

//vue的实例对象
new Vue({
  render: h => h(App),
  //在Vue项目中，要想把路由用起来，必须把路由实例对象，通过下面的方式进行挂载
  router:routerjs//路由的实例对象
}).$mount('#app')
```

#### 声明路由链接和占位符
先在父组件声明路由的连接和占位符
```html
<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
    <hr />
    <!-- 只要在项目中安装和配置了vue-router，就可以使用router-view这个组件了 -->
    <!-- 它的作用很单纯:占位符,和之前的component组件一样的作用 -->
    <router-view></router-view>
  </div>
</template>
```
**点击上面每个链接,显示对应的组件**
![在这里插入图片描述](https://img-blog.csdnimg.cn/9ea1d72f14464514a27d0eaaf3cb0112.png)
**上面指明了路由链接和router-view后,需要在router/index.js,里面去配置对应的路由**
```js
//1.导入vue和vuerouter的包
import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要的路由组件模块
import home from '@/components/Home.vue'
import movie from '@/components/Movie.vue'
import about from '@/components/About.vue'

//2.调用Vue.use()函数,把VueRouter安装为Vue的插件
Vue.use(VueRouter)

//3.创建路由的实例对象
//在路由实例上配置对应的路由模块
const router = new VueRouter({
    //routes是一个数组,作用:定义'hash地址'与'组件'之间的对应关系
    routes:[
        //在前面我们配置的路由带'#',但是在这里指定路由时不需要,带上'#'反而报错了
        {path:'/home',component:home},
        {path:'/movie',component:movie},
        {path:'/about',component:about}
    ]
})

//4.向外共享路由的实例对象
export default router
```
最后,效果实现了:
![在这里插入图片描述](https://img-blog.csdnimg.cn/0f43df096b4443d7bee8beb2dfba1047.png)
**此时已经可以点击每个链接进行组件的切换了**
## 使用router-link替代a连接
```html
 <!-- 只要在项目中安装和配置了vue-router，就可以使用router-link来替代普通的a链接了 -->
    <!-- 里面有个to属性和a标签的herf属性一致,有个优点就是不需要再写'#'了,直接写hash值就可以,例如下面 -->
    <router-link to="/home">首页</router-link>
    <a href="#/home">首页</a>
   上面两种都是可以绑定指定路由的,但更推荐使用router-link
   router-link本质就是a链接,可以查看控制台源代码
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>
```
## redirect重定向

> 作用,路由是点击某个链接跳转的地址,当直接访问页面时候,由于没有点击操作,则页面无元素,使用重定向使页面访问时直接跳转到我们想要的页面

> 路由重定向指的是:用户在访问地址A的时候，强制用户跳转到地址C，从而展示特定的组件页面。通过路由规则的redirect属性，指定一个新的路由地址，可以很方便地设置路由的重定向:


只需要在路由的配置文件index.js里面的routes里面加一行代码,代码如下:
```js
    //routes是一个数组,作用:定义'hash地址'与'组件'之间的对应关系
    routes:[
        //path代表'/'路由地址,当访问这个地址时会重定向到'/home'路由地址
        {path:'/',redirect:"/home"},
    ]
})
```
# 嵌套路由
#### 声明子级路由链接和占位符

> **通过路由实现组件的嵌套展示，叫做嵌套路由。**
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/c2ae08905aa14a61b7b6ec0a0f0700b5.png)
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/2396a9f3ffc641e3a060c90b84aa4105.png)
> **在About.vue文件中设置好路由关系,这个文件相对于App.vue来说是父子关系,因此这个路由也是App.vue的子级路由,template代码如下,父级的模板代码参考上面的()即可**
```html
<template>
  <div class="about-container">
    <h3>About 组件</h3>
    <!-- 子级路由链接,前面都要有共同的路由,后面各写各的 -->
    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>
    <hr>
    <!-- 子级路由占位符 -->
    <router-view></router-view>
  </div>
</template>
```
#### 声明嵌套路由的规则
**通过children属性声明子路由规则**
**在 src/router/index.js路由模块中，导入需要的组件，并使用children属性声明子路由规则:**
在index.js里面的代码配置如下
```js
//导入子路由组件模块
import tab1 from '@/components/tabs/Tab1.vue'
import tab2 from '@/components/tabs/Tab2.vue'
//在路由实例上配置对应的路由模块
const router = new VueRouter({
    //routes是一个数组,作用:定义'hash地址'与'组件'之间的对应关系
    routes:[
    //相当于给了第三个参数children,里面存放子级路由,最前面的path为共同的路由名,后面为自己的路由,子路由的path里面不用写'/'
		{
			path:'/about',
			component:about,
			children:[
				{path:'tab1',component:tab1},
				{path:'tab2',component:tab2}
		]}
  	]
})
```
配置完以后子级路由就能正常去切换了
![在这里插入图片描述](https://img-blog.csdnimg.cn/8dd86ca64d1a42d3ab638748e6702205.png)
**设置默认显示的子路由方法(还是重定向,加个单词即可)**
在index.js里面的代码配置如下
```js
//导入子路由组件模块
import tab1 from '@/components/tabs/Tab1.vue'
import tab2 from '@/components/tabs/Tab2.vue'
//在路由实例上配置对应的路由模块
const router = new VueRouter({
    //routes是一个数组,作用:定义'hash地址'与'组件'之间的对应关系
    routes:[
    //相当于给了第三个参数children,里面存放子级路由,最前面的path为共同的路由名,后面为自己的路由,子路由的path里面不用写'/'
		{
			path:'/about',
			component:about,
			//redirect:'/about/tab1'//默认显示的子路由的第一种方法
			children:[
			//默认子路由:如果children数组中，某个路由规则的 path值为空字符串，则这条路由规则，叫做“默认子路由”
			
				//默认显示的子路由的第二种方法
				{path:'',component:tab1},
				{path:'tab1',component:tab1},
				{path:'tab2',component:tab2}
		]}
  	]
})
```
# 动态路由
#### 动态路由匹配(基本用法)
![在这里插入图片描述](https://img-blog.csdnimg.cn/31db958bdfb043b08fbb4e53fc2fb5ca.png)
**缺点:路由规则的复用性差。**
**动态路由指的是:把 Hash地址中可变的部分定义为参数项，从而提高路由规则的复用性。**
**在vue-router中使用英文的冒号(:）来定义路由的参数项。示例代码如下:**
```js
//路由中的动态参数以︰进行声明，冒号后面的是动态参数的名称
{path:'/movie/:id',component:Movie}

//将以下3个路由规则，合并成了一个，提高了路由规则的复用性
{path:'/movie/1',component:Movie}
{path:'/movie/2',component:Movie}
{path:'/movie/3',component:Movie}
```
**路由链接代码为**
```js
    <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
```
效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/0baa2172a7434f0fa25024d480ca057f.png)
**点击谁显示谁的路由地址**
#### 需求:在Movie 组件中，希望根据id的值，展示对应电影的详情信息
###### 第一种方式
在Movie.vue组件中打印一下this
![在这里插入图片描述](https://img-blog.csdnimg.cn/46726723d0d44d519f8b7d2d4ae9ce7e.png)
点击展开route(不带r的,最短的这个)
**展开结果如图:**
![在这里插入图片描述](https://img-blog.csdnimg.cn/018bd54d95c542718fc39b2676885886.png)
**this $route是路由的“参数对象”
this. $router 是路由的“导航对象”**


**这个params里面的对象就是我们的路由携带的动态参数,获取的话通过 ----this.$route.params.动态参数----来获取(其中最前面的this.可加可不加,不加的话也没影响)**

###### 第二种方式
**为路由规则开启props传参**
在router/index.js里面配置如下(完整的往上翻,这里就简单写最重要的一行)
```js
//props:true代表为当前路由规则开启props传参,从而很方便地拿到动态参数的值
//没有动态参数的不建议加props,因为无意义,没什么用
{path:'/movie/:id',component:Movie,props:true}//id为动态参数
```
在movie.vue的导出里面定义props自定义属性,代码如下:
```js
<script>
	export default {
		props:['id']//这个id值为路由的动态参数,需要和路由的动态参数保持一致
	}
</script>
```
此时已经拿到数据了,可以使用了,查看方式如下:
```js
<template>
	<div>
		{{ id }}//此时就可以展示我们动态绑定的参数值
	</div>
</template>
```
# 拓展query和fullPath

**注意:在 hash地址中,/后面的参数项，叫做“路径参数"
在路由“参数对象”中，需要使用this. $route. params来访问路径参数
注意2:在 hash地址中,'?'后面的参数项,叫做“查询参数”**

**在路由“参数对象”中,需要使用this.$route. query来访问查询参数**

**注意3:在 this.$route中,path只是路径部分;fullPath是完整的地址**

```js
    <router-link to="/movie/1">洛基</router-link>
    <router-link to="/movie/2?username=zs&age=20">雷神</router-link>
    <router-link to="/movie/3">复联</router-link>
```
**打印this结果如下**
![在这里插入图片描述](https://img-blog.csdnimg.cn/ed1565cee2fb467cb82b3437825819a1.png)
# 声明式导航和编程式导航
**在浏览器中，点击链接实现导航的方式，叫做声明式导航。例如:
普通网页中点击< a >链接、vue项目中点击< router-link >都属于声明式导航**

**在浏览器中，调用API方法实现导航的方式，叫做编程式导航。例如:普通网页中调用location.href 跳转到新页面的方式，属于编程式导航**
## vue-router 中的编程式导航API

vue-router提供了许多编程式导航的API，其中最常用的导航API分别是:

**this.$router.push('hash地址')**
	跳转到指定hash地址，并增加一条历史记录
```js
	methods:{
		dianjitiaozhuan(){
			this.$router.push('/movie/1')//按钮绑定这个方法,当点击按钮就跳转到/movie/1这个(名为洛基的)路由组件了
			//这种跳转方式会存在历史记录,可以通过浏览器左上角的前进后退按钮回到任意页面
		}
	}
```
**this.$router.replace('hash 地址')**
跳转到指定hash地址，并替换当前的历史记录(简单来说就是没有历史记录)
```js
	methods:{
		dianjitiaozhuan(){
			this.$router.replace('/movie/1')//按钮绑定这个方法,当点击按钮就跳转到/movie/1这个(名为洛基的)路由组件了
			//这种跳转方式不会存在历史记录
		}
	}
```
**this.$router.go(数值n)**
在浏览历史中可以前进和后退
```js
	methods:{
		dianjitiaozhuan(){
			//this.$router.go(-1)//历史记录后退一位
			//this.$router.go(-2)//历史记录后退两位
			//如果后退的层数超过上限，则原地不动
			//this.$router.go(1)//历史记录前进一位
			//this.$router.go(2)//历史记录前进两位
		}
	}
```
**在实际开发中，一般只会前进和后退一层页面。因此vue-router提供了如下两个便捷方法:**
```js
$router.back()
	在历史记录中，后退到上一个页面
$router.forward()
	在历史记录中，前进到下一个页面

//下面方法切记不要加this.,不然报错
<button @click="$router.back()">back后退</button>
<button eclick="$router.forward()">forward 前进</button>
```
# 导航守卫
导航守卫可以控制路由的访问权限。示意图如下:

![在这里插入图片描述](https://img-blog.csdnimg.cn/b9dfe35913014a528a77a1157a8fc218.png)
## 全局前置守卫
每次发生路由的导航跳转时，都会触发全局前置守卫。因此，在全局前置守卫中，程序员可以对每个路由进行访问权限的控制:

**在rooter/index.js下进行配置,如下:**
```js
//下面代码必须在router的new的实例对象下面配置,否则不生效

const router = new VueRouter({//router的实例对象
})
//在router实例对象下面进行如下配置
//调用路由实例对象的beforeEach方法，即可声明“全局前置守卫”
//每次发生路由导航跳转的时候，都会自动触发fn这个“回调函数”
router.beforeEach((to,from,next)=>{
	//全局前置守卫的回调函数中接收3个形参
	//to:是将要访问路由的信息对象
	//from 是将要离开路由的信息对象
	//next 是一个函数,调用 next()表示放行,允许这次路由导航
})
```
###### next函数的3种调用方式
**当前用户拥有后台主页的访问权限，直接放行: next()**
**当前用户没有后台主页的访问权限，强制其跳转到登录页面: next('/login')**
**当前用户没有后台主页的访问权限，不允许跳转到后台主页:next(false)**

**控制后台主页的访问权限**
![在这里插入图片描述](https://img-blog.csdnimg.cn/7025223de4544de4ae1a712728b9a361.png)
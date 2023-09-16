@[toc]
## Vuex 概述
### 1.1 组件之间共享数据的方式
父向子传值：v-bind 属性绑定
子向父传值：v-on 事件绑定
兄弟组件之间共享数据： EventBus
- $on 接收数据的那个组件
- $emit 发送数据的那个组件

### 1.2 Vuex 是什么
Vuex 是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享.

![ 	](https://img-blog.csdnimg.cn/32a31bee2d4f43a59535284ac19db295.png)
### 1.3 使用 Vuex 统一管理状态的好处
① 能够在 vuex 中集中管理共享的数据，易于开发和后期维护
② 能够高效地实现组件之间的数据共享，提高开发效率
③ 存储在 vuex 中的数据都是响应式的，能够实时保持数据与页面的同步

#### 什么样的数据适合存储到 Vuex 中
一般情况下，只有组件之间共享的数据，才有必要存储到 vuex 中；对于组件中的私有数据，依旧存储在组件自身的 data 中即可。

## 2. Vuex 的基本使用
**1. 安装 vuex 依赖包**
```bash
 npm install vuex --save
```
**2. 导入 vuex 包**
```bash
import Vuex from 'vuex'
Vue.use(Vuex)
```
**3. 创建 store 对象**
```bash
const store = new Vuex.Store({
 // state 中存放的就是全局共享的数据
 state: { count: 0 }
})
```
**4. 将 store 对象挂载到 vue 实例中**
```bash
new Vue({
 el: '#app',
 render: h => h(app),
 router,
 // 将创建的共享数据对象，挂载到 Vue 实例中
 // 所有的组件，就可以直接从 store 中获取全局的数据了
 store
})
```
## 3. Vuex 的核心概念
### 3.1 核心概念概述
**Vuex 中的主要核心概念如下：**
- State 
- Mutation 
- Action 
- Getter

### 3.2 State
**State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中进行存储。**
```bash
// 创建store数据源，提供唯一公共数据
 const store = new Vuex.Store({
 state: { count: 0 }
 })
```
**组件访问 State 中数据的第一种方式：**
```bash
this.$store.state.全局数据名称
```
**组件访问 State 中数据的第二种方式：**
```bash
// 1. 从 vuex 中按需导入 mapState 函数
import { mapState } from 'vuex'
```
通过刚才导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的 computed 计算属性:
```bash
// 2. 将全局数据，映射为当前组件的计算属性
computed: {
 ...mapState(['count'])
}


在代码中使用{{count}} //需要展示什么数据就写什么数据
```
### 3.3 Mutation
Mutation 用于变更 Store中 的数据。
① 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据。
② 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。

```bash
 // 定义 Mutation
 const store = new Vuex.Store({
	 state: {
		 count: 0
	 },
 mutations: {
 //mutations里面所有的方法的第一个参数都代表stata这个对象,第二个参数开始才是真正要传的数据
	 add(state) {
		 // 变更状态
		 state.count++
	 }
   }
 })
```
```bash
 // 触发mutation
 methods: {
	 handle1() {
		 // 触发 mutations 的第一种方式
		 this.$store.commit('add')
	 }
 }
```

**可以在触发 mutations 时传递参数：**
```bash
 // 定义Mutation
 const store = new Vuex.Store({
	 state: {
		 count: 0
	 },
 mutations: {
 //mutations里面所有的方法的第一个参数都代表stata这个对象,第二个参数开始才是真正要传的数据
		 addN(state, step) {
			 // 变更状态
			 state.count += step
		 }
	 }
 })
```
```bash
 // 触发mutation
 methods: {
	 handle2() {
	 // 在调用 commit 函数，
	 // 触发 mutations 时携带参数
	 this.$store.commit('addN', 3)
	 }
 }
```
**this.$store.commit() 是触发 mutations 的第一种方式，触发 mutations 的第二种方式：**
```bash
// 1. 从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from 'vuex'

//通过刚才导入的 mapMutations 函数，将需要的 mutations 函数，映射为当前组件的 methods 方法：

// 2. 将指定的 mutations 函数，映射为当前组件的 methods 函数
methods: {
 ...mapMutations(['add', 'addN']),
 //调用函数
 xj1(){
	this.add()
	}
//传参方式
xj(val){
//这里的参数就是mutations函数的第二个参数,也就是不包括state的
	this.addN(3)
 }
}
```
### 3.4 Action
Action 用于处理异步任务。
如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发Mutation 的方式间接变更数据。
```bash
 // 定义 Action
 const store = new Vuex.Store({
 // ...省略其他代码
 mutations: {
 add(state) {
 state.count++
 }
 },
 actions: {
 //actions里面所有的方法的第一个参数都代表mutations这个对象,第二个参数开始才是真正要传的数据
 addAsync(context) {
 setTimeout(() => {
 context.commit('add')
 }, 1000)
 } 
 }
 })
```
```bash
 // 触发 Action
 methods: {
 handle() {
 // 触发 actions 的第一种方式
 this.$store.dispatch('addAsync')
 }
 }
```
**触发 actions 异步任务时携带参数:**
```bash
 // 定义 Action
 const store = new Vuex.Store({
 // ...省略其他代码
 mutations: {
 addN(state, step) {
 state.count += step
 }
 },
 actions: {
 //actions里面所有的方法的第一个参数都代表mutations这个对象,第二个参数开始才是真正要传的数据
 addNAsync(context, step) {
 setTimeout(() => {
 context.commit('addN', step)
 }, 1000)
 } 
 }
 })
```

```bash
 // 触发 Action
 methods: {
 handle() {
 // 在调用 dispatch 函数，
 // 触发 actions 时携带参数
 this.$store.dispatch('addNAsync', 5)
 }
 }
```
**this.$store.dispatch() 是触发 actions 的第一种方式，触发 actions 的第二种方式：**
```bash
// 1. 从 vuex 中按需导入 mapActions 函数
import { mapActions } from 'vuex'

通过刚才导入的 mapActions 函数，将需要的 actions 函数，映射为当前组件的 methods 方法：

// 2. 将指定的 actions 函数，映射为当前组件的 methods 函数
methods: {
 ...mapActions(['addASync', 'addNASync'])
}
```

### 3.5 Getter
Getter 用于对 Store 中的数据进行加工处理形成新的数据。
① Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。
② Store 中数据发生变化，Getter 的数据也会跟着变化。
```bash
 // 定义 Getter
 const store = new Vuex.Store({
 state: {
 count: 0
 },
 getters: {
 showNum: state => {
 return '当前最新的数量是【'+ state.count +'】'
 }
 }
 })
```
**使用 getters 的第一种方式：**
```bash
this.$store.getters.名称
```
**使用 getters 的第二种方式：**
```bash
import { mapGetters } from 'vuex'
computed: {
 ...mapGetters(['showNum'])
}
```
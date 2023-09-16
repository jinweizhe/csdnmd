### 先来说说vuex模块化的配置和访问
**vuex模块化模板配置可以参考本人这个博客**
[vuex模板配置](https://blog.csdn.net/weixin_68658847/article/details/129506443)
主模块如下格式
```js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//导入模块
import nav from "@/store/nav.js";
import shopping from "@/store/shopping.js";
// 用户信息
import user from "@/store/user.js";

const store = new Vuex.Store({
  modules: {
    nav,
    shopping,
    user,
  },
});

export default store;
```
子模块(shopping)如下格式
```js
import api from "@/api/index.js";
export default {
  namespaced: true,
  state: {
    num: 0, //购物车总个数
  },
  mutations: {
    //购物车数量
    nums(a, b) {
      a.num = b;
    },
    //点击加入购物车存入数量
    nums2(a, b) {
      a.num += b;
    },
    //删除购物车,减少总数量
    nums3(a, b) {
      a.num -= b;
    },
  },
  actions: {
	nums4({commit},b){
		commit('num2',b)
		}
	},
};

```
在模板里（index为主模板，子模版为（nav，bar ））
**以上模块名用于本文章讲解（上面随便起的名字）**
主模板导入子模块并在model引入即可（逻辑都在子模块里）（具体配置看上面链接）
**1.访问子模版的num数据的方式**
1.在当前模块内使用mutations,  actions,getters内部
```js
 mutations: {
    //购物车数量
    nums(a, b) {
      a.num = b;
    },
  }
```
在mutations里面定义方法,参数一即是state数据,通过a.num获取到num值
2.在其他模块内访问数据
```js
//引入主模块
import store from '/index.js'
//通过主模块打点直接使用
console.log(store.state.shopping.num)  //前两个直接访问的主模块数据,第四个访问的是主模块的model数据,再后面访问的为model内子模块的state内的数据
```
3.在vue组件内部,通过如下方式访问
```js
this.$store.state.shopping.num   //前三个直接访问的主模块数据,第四个访问的是主模块的model数据,再后面访问的为model内子模块的state内的数据

//在html标签内使用不加this
```
**2.访问子模块的mutations的方法的方式以及传参方式**
1.在当前模块内使用mutations
```js
在action内的方法,参数一都是store对象,可以直接调用,如下:
actions:{
	xj(a,b){
		a.commit('nums',12)  //通过store对象的commit方法去提交,参数一为当前模块的mutations里面的方法名,参数二为这个方法传入的参数
	},
	//也可以直接解构使用,方法如下:
	xj2({commit},b){
		commit('nums',12)  //通过store对象的commit方法去提交,参数一为当前模块的mutations里面的方法名,参数二为这个方法传入的参数
	},
}
```
在mutations里面定义方法,参数一即是state数据,通过a.num获取到num值
2.在其他模块内访问数据
```js
//引入主模块
import store from '/index.js'
//通过主模块打点直接使用
store.commit('shopping/nums',12)  //commit提交mutations,括号内的参数一'/'的前面为子模块名,后面为mutations内的方法,参数二为传入的数据
```
3.在vue组件内使用
```js
this.$store.commit('shopping/nums',12) //commit提交mutations,括号内的参数一'/'的前面为子模块名,后面为mutations内的方法,参数二为传入的数据
```
**3.访问子模块的actions的方法的方式以及传参方式**
在mutations里面定义方法,参数一即是state数据,通过a.num获取到num值
1.在其他模块内访问数据
```js
//引入主模块
import store from '/index.js'
//通过主模块打点直接使用
store.dispatch('shopping/nums4',12)  //括号内的参数一'/'的前面为子模块名,后面为mutations内的方法,参数二为传入的数据
```
2.在vue组件内使用
```js
this.$store.dispatch('shopping/nums4',12) //括号内的参数一'/'的前面为子模块名,后面为mutations内的方法,参数二为传入的数据

在html标签上不加this
<div @click="this.$store.dispatch('shopping/nums4',12)"></div>
```
**这个action没有在当前模块使用过,就不写了**
**[当然,除了以上三种,还有一种,但个人不常用,就不写了,具体你们可以百度mapState(访问state),mapMutations(访问mutations),mapActions(访问actions),也可以点击链接去看我这个博客,这是个模板配置,但注释写的还可以](https://blog.csdn.net/weixin_68658847/article/details/129506443?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167914029216800217226906%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=167914029216800217226906&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-2-129506443-null-null.blog_rank_default&utm_term=mapstate&spm=1018.2226.3001.4450)**
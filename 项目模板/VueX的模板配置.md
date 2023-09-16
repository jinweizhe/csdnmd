## 安装
```
 npm install vuex@3
```
#### 在src下创建store文件夹,创建index.js,放入如下内容
```js
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  // 开启严格模式，任何对状态的更改如果不是通过mutation操作引起的，将会报警告
  strict: true,
  state: {
    count: 1,
  },

  getters: {
    doubleCount: (state) => state.count * 2,
  },

  mutations: {
    INCREASE_COUNT(state, val) {
      state.count += val;
    }
  },
  actions: {
    setCount({ commit }, data) {
      if (data.type === "+") {
        commit("INCREASE_COUNT", data.value);
      } else {
        commit("DECREASE_COUNT", data.value);
      }
    },
  },
});

export default store;
```
##### 在main.js里加入如下元素
```js
import store from '@/store/index.js';
new Vue({
	// 在根组件中挂载store实例：之后在任意的子组件中可以使用 this.$store访问store实例
	store,
	router,
	render: h => h(App),
}).$mount('#app');
```
##### 在组件中引入
1.state
```js
import {mapState} from 'vuex

computed: {
  // 使用对象展开运算符将此对象混入到外部对象中
  // 映射 this.count 为 store.state.count
  
  // 借助mapState生成计算属性：count、message（对象写法）--- 对象写法可以对属性进行重命名
  ...mapState({count:'count', message:'message'}),
    
  // 借助mapState生成计算属性：count、message（数组写法）--- 需要和state中的属性名保持一致
  ...mapState(['count', 'message']),
}
```
2.getters
```js
import {mapGetters} from 'vuex

computed: {
    // 借助mapGetters生成计算属性：bigCount（对象写法）
  ...mapGetters({bigCount:'bigCount'})
                 
  // 借助mapGetters生成计算属性：bigCount（数组写法）
  ...mapGetters(['bigCount']),
}
```
3.mutations
```js
import { mapMutations } from 'vuex';

methods:{
  increase1() {
      // this.$store.commit('INCREASE_COUNT', 1);
      this.INCREASE_COUNT(1);
		},
  
  // 借助mapMutation生成函数：setCount（对象写法）
  ...mapMutations({INCREASE_COUNT:'INCREASE_COUNT'}),
  
  // 借助mapMutation生成函数：SET_COUNT（数组写法）
  ...mapMutations(['INCREASE_COUNT']),//把SET_COUNT映射为组件自己的函数
}

```
4.actions
```js
import { mapActions } from 'vuex';

methods:{
  increase() {
    // this.$store.dispatch('setCount', { type: 0, value: 2 });
    this.setCount({ type: 0, value: 2 });
  },
      
  // 借助mapActions生成函数：setCount（对象写法）
  ...mapActions({setCount:'setCount'}),
  
  // 借助mapActions生成函数：setCount（数组写法）
  ...mapActions(['setCount']),
}

```
### 示例图
![在这里插入图片描述](https://img-blog.csdnimg.cn/d74633e414264ae9bd413a492e3db165.png)
#### vuex模块化模板
index.js下
```js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//import createLogger from 'vuex/dist/logger'

import setting from '@/store/modules/setting';
import user from '@/store/modules/user';

export default new Vuex.Store({
	state: {
	},
	getters: {
	},
	mutations: {
	},
	actions: {
	},
  modules: {
		user,
		setting,
  },
  //plugins: [createLogger()]

});

```
模块模板
```js
export default {
  namespaced: true,
  state: {
    user:{},
    isLogin: false,
  },
  getters: {
    user: state=> state.user,
    isLogin: state=> state.isLogin,
  },
  mutations: {},
  actions:{}
}
```
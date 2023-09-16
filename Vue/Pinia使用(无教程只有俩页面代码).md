### 安装Pinia包
```js
npm install pinia
```
### main.js注册Pinia
```js
import { createPinia } from "pinia";
const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
```
### 在src下创建store/store.js文件,放入以下内容
```js
import { defineStore } from "pinia";
// 导出方法(每个方法对应一个模块,相当于vuex的模块化,引入组件时按需引入)
export const xj = defineStore("main", {
  state: () => {
    return {
      name: "萧寂",
      age: 22,
      sex: "男",
    };
  },
  getters: {
    getAddAge: (state) => {
        // 传参在返回的函数写传入的参数
      return (num) => state.age + num;
    },
    // 在getter里面调用其他的getter使用this
    getNameAndAge() {
      return this.name + this.getAddAge(10); // 调用其它getter
    },
  },
  actions: {
    saveName(name) {
      //访问state里面的数据使用this.
      setTimeout(() => {
        this.name = name;
      }, 1000);
    },
  },
});
```
### 在app.vue中的使用(在其他组件也一样的)
```html
<script setup>
//解构出store.js内的需要的方法(每个方法对应一个模块,相当于vuex的模块化)
import { xj } from "./store/store";

//将数据变成响应式的方法
import { storeToRefs } from "pinia";

// 调用解构出来的方法
const store = xj();

//将store内的属性变成响应式的
storeToRefs(store);
//也可以(二者使用方式等价)
// const {name,age} = storeToRefs(store); //此时的name和age也是响应式的,但和ref不同,修改name或者age需要用store调用,如store.name=''

//修改数据
const changeName = () => {
  store.name = "张三";
};

//还原/重置所有数据
const reasetName = () => {
  store.$reset();
};

//批量修改数据
const pathStore = () => {
  store.$patch({
    name: "小红",
    age: 50,
  });
};

//
const channame = () => {
  store.saveName("二哈");
};
</script>

<template>
  <div class="">{{ store.name }}</div>
  <div>年龄: {{ store.age }}</div>
  <!-- 访问store里面的getters方法 -->
  <p>getters返回的新年龄---{{ store.getAddAge(50) }}</p>
  <p>调用其它getter:{{ store.getNameAndAge }}</p>
  <button @click="changeName">更改姓名</button>
  <button @click="reasetName">重置/还原姓名</button>
  <button @click="pathStore">批量修改数据</button>
  <button @click="channame">调用actions的方法一秒后改变姓名</button>
</template>

<style scoped lang="scss"></style>
```
**接下来直接运行就好**
### 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/9020d9f903174744bebe870dbb29af9f.png)
## 下面是两种写法
### 选项式写法
```js
import { defineStore } from 'pinia';
// import { useUserStore } from "@/stores/user";


// 定义store实例，使用 defineStore 函数
// 参数1：是store的标识，一个项目中保持唯一
// 参数2：定义store的数据（sate、getters、actions），有两种写法：1、选项式；2、组合式

// 选项式的写法：
export const userCounterStore = defineStore('counter', {
	state: () => ({
		count: 12,
		num: 22,
		val: 2,
	}),

	getters: {
		doubleCount: state => state.count * 2,
	},

	// actions 可以包含同步操作，也能包含异步操作
	actions: {
		// 在action中定义的函数，可以使用this访问state/getters，其他actions
    increase () {
      // 访问其他的store
      // const userStore = useUserStore();

			// console.log('increase this: ', this);
			// this.count++;
			// this.setCount({ type: 0, value: userStore.userinfo.age });
			this.setCount({ type: 0, value: 1 });
		},
		setCount({ type, value }) {
			if (type === 0) {
				this.count += value;
			} else {
				this.count -= value;
			}
		},
	},
});

```
### 组合式写法
```js
import { defineStore, storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { userCounterStore } from '@/stores/counter';

// 组合式写法：
export const useUserStore = defineStore('user', () => {
  // 在函数中，获取其他的store
  const counterStore = userCounterStore();
  const {count} = storeToRefs(counterStore)

  // console.log('counterStore.count: ', counterStore.count);
	// 1、声明state，使用ref
	const userinfo = ref({
		name: '张三',
		age: count,
	});

	// 2、声明getters，使用computed
	const desc = computed(() => '这是' + userinfo.value.name + '，年龄是' + userinfo.value.age);

	// 3、声明actions，和setup中一样直接写函数
  const setAge = val => {
		// userinfo.value.age = counterStore.count; // 可以使用
		userinfo.value.age = count; // 使用 storeToRefs 解构的属性也能用
	};

  return {
    userinfo,
    desc,
    setAge,
  }
});
```

### 使用时
```js
import {useUserStore} from '@/store/home.js'
const store = useUserStore()
store.(return的数据)  //这样就可以访问里面的数据和方法了
```
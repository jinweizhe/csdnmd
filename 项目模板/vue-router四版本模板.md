## 安装
```js
npm i vue-router@4
```
## 配置(在src下新建router/index.js,放入以下内容)
```js
import { createRouter, createWebHashHistory } from "vue-router";
//引入组件
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";

const router = createRouter({
  //哈希模式
  history: createWebHashHistory(),
  routes: [
    // 通过数组对象的形式，配置路径对应展示的组件。
    {
      path: "/",
      name: "shou",
      component: () => import("/src/views/home.vue"),
    },
    {
      path: "/fen",
      name: "fen",
      component: () => import("/src/views/fenlei.vue"),
    },
    {
      path: "/fenleiroom",
      name: "fenleiroom",
      component: () => import("/src/views/fenleiroom.vue"),
    },
    {
      path: "/room",
      name: "room",
      component: () => import("/src/views/room.vue"),
    },
  ],
});
// 将 router 暴露出去  （export default 抛出方式）
export default router;
```
## 然后去main.js注册一下
```js
import { createApp } from "vue";
import "./style.css";
import router from "/src/router/index.js";
import App from "./App.vue";
const app = createApp(App);
app.use(router);
app.mount("#app");
```

## 跳转

```js
//演示一种,其他跳转一样
import { useRouter } from "vue-router";
const router = useRouter();
const xj = (a) => {
  router.push({
    name: "room",
    query: {
      id: a,
    },
  });
```
## 接收参数
```js
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.query.id)
```
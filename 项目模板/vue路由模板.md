### router的index配置
```js
import Vue from "vue";
import VueRouter from "vue-router";
//使用use挂载路由,之后就可以使用new vuerouter创建路由器对象
Vue.use(VueRouter);

//导入路由组件
import home from "@/components/home.vue";
import friend from "@/components/friend.vue";
import setting from "@/components/setting.vue";

//创建路由器对象
const router = new VueRouter({
  routes: [
    { path: "/", component: home },
    { path: "/setting", component: setting },
    { path: "/friend", component: friend },
  ],
});

export default router;

```
### src下的index配置
```js
import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
Vue.config.productionTip = false;

//在vue的根组件中注入router之后，在根组件及其任意子组件中可以得到两个对象
//$router 路由器对象和new vuerouter创建的router对象是同一个对象
//$routes 路由对象(当前激活的路由对象)
//在一个vuer应用中路由器对象只有一个,
//路由对象有很多个
new Vue({
  //注册路由
  router,
  render: (h) => h(App),
}).$mount("#app");

```
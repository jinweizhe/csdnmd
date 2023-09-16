## 创建好vite项目
## 安装axios模块
```js
npm install axios
```
## 在src同级目录创建uitls/http.js,加入以下内容
```js
import axios from "axios";
import { Toast } from "vant";
// console.log("import.meta.env", import.meta.env.VITE_API_URL);

//创建一个新的请求实例instance,instance.的用法和axios.的用法一致，可以使用instance({})、instance.get（）、instance.post()
const instace = axios.create({
  baseURL: import.meta.env.VITE_API_URL, //默认配置(这里不要用process.env,个人百度这个在vite中被废弃掉了,属性名必须以VITE_API_开头,否则 import.meta.env检测不到)
  timeout: 5000, //超时时间
});

//配置请求拦截器,在请求之前的数据处理,比如在请求头添加token,所有的请求都会经过拦截器
instace.interceptors.request.use(
  //config:该参数表示当前请求的配置对象
  (config) => {
    //例如:
    //在请求头统一添加token
    //或者请求之前显示lodding图标(这里只演示这个)
    //这里是vant组件库的loadding,安装和配置请查看此文档的vant组件库的配置https://blog.csdn.net/weixin_68658847/article/details/129331162
    Toast.loading({
      duration: 0,
      message: "正在努力加载",
    });
    return config;
  },
  (err) => {
    Toast.clear(); //请求失败关闭loadding
    return Promise.reject(err); //将错误消息挂到promise的失败函数上
  }
);

//配置响应拦截器
// 响应拦截器:在请求响应之后对数据处理，比如:登录失败、请求数据失败的处理
// instance.interceptors.response.use(response=>{l}, err=>{});
// 响应成功:执行回调函数1;响应失败，执行回调函数2
instace.interceptors.response.use(
  (response) => {
    Toast.clear(); //响应成功关闭loadding
    return response; //这里的response就是请求成功后的res , response.data即是请求成功后回调函数内的参数res.data
  },
  (err) => {
    Toast.clear(); //响应失败关闭loadding
    return Promise.reject(err); //将错误消息挂到promise的失败函数上
  }
);

//封装请求的api
const callapi = (method = "GET", url, data = {}) => {
  return instace({
    method,
    url,
    params: method === "GET" ? data : {},
    data: method === "POST" ? data : {},
  });
};
//封装GET请求函数
export const getapi = (url, data) => callapi("GET", url, data);
export const postapi = (url, data) => callapi("POST", url, data);
```
## 配置开发环境(在src同级下创建.env.development),加入以下基础路径
```js
//有个注意点:vite项目的前缀必须以VITE_API_开头,否则 import.meta.env检测不到
VITE_API_URL = /douyu
```
## 配置proxy代理(在vite.config.js里面配置)
```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({

//直接看下半部分,下半部分才是配置代理的
  plugins: [vue()],
  // 路径别名
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  transpileDependencies: true,
  lintOnSave: false,


//下面是配置代理的所有内容
//这里用server,和vue之前配置的有所不同
  server: {
    //方式二:设置多个代理
    proxy: {
      //这个路径为http://192.168.1.182:3000/douyu/wgapi/vod/front/vodrank/getTagVideos
      "/douyu": {
        //target是代理的目标路径
        target: "http://open.douyucdn.cn",
        changeOrigin: true, //必须要开启跨域
        //pathRewrite重写请求的路径,实际请求的路径没有代理标识douyu,需要把斗鱼重置为空字符串
        rewrite: (path) => path.replace(/\/douyu/, ""), // 路径重写
      },
    },
  },
});
```
## 配置请求(根目录下创建api/index.js),放入以下内容
```js
import { getapi,postapi } from "@/uitl/http";

export const getroomapi = (data) => getapi("/api/RoomApi/live", data);
export const getdetailapi = (room_id) => getapi("/api/RoomApi/room/" + room_id);
export const getgame = () => getapi("/api/RoomApi/game");
export const getroom = (room_id) => getapi("/api/RoomApi/live/" + room_id);
```
## 使用方式(在单文件中)
```js
<script setup>
import { getroomapi } from "@/api/index.js";
import { onMounted } from "vue";
onMounted(() => {
  getroomapi().then((res) => {
    console.log("c", res);
  });
});
</script>

<template></template>

<style scoped lang="scss"></style>
```
## 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/0978b0277ab04b7ca9b3a40eecfd1f2a.png)
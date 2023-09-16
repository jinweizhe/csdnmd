### 1.安装mockjs和axios
```js
 cnpm install mockjs -S
 cnpm install axios -S
```
###### 目录结构(这里的演示只用到这四个文件)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0960f9865a904bad904918fb4eea2d35.png)

### 2.创建模拟返回的数据(src/mockjs/http.js),放入以下内容
```js
//模拟的请求数据
export default {
  getData: () => {
    return {
      code: 200,
      tableData: [
        {
          id: "01",
          name: "get测试001",
        },
        {
          id: "02",
          name: "get测试002",
        },
        {
          id: "03",
          name: "get测试003",
        },
        {
          id: "04",
          name: "get测试004",
        },
      ],
    };
  },
  postData: () => {
    return {
      code: 200,
      tableData2: [
        {
          id: "01",
          name: "post测试001",
        },
        {
          id: "02",
          name: "post测试002",
        },
        {
          id: "03",
          name: "post测试003",
        },
        {
          id: "04",
          name: "post测试004",
        },
      ],
    };
  },
};

```
### 3.引入mock,拦截请求,返回模拟的数据(src/mockjs/index.js)放入以下内容
```js
//引入mock进行请求/拦截请求接口
import Mock from "mockjs";
//导入模拟的数据
import httpdata from "./http.js";
//拦截请求返回模拟的数据（当访问这个接口时，返回响应的数据）
//第一个参数是请求的接口api,第二个参数是请求方式get/post,第三个参数是一个函数(数据),
Mock.mock("/home/getdata", "get", httpdata.getData);
Mock.mock("/home/postdata", "post", httpdata.postData);
```
### 4.在全局注册mock(scr/main.js)放入以下内容
```js
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//全局引入mock(这里只需要这一行引入)
import "./mockjs/index.js";

createApp(App).mount("#app");

```
### 5.发送请求测试结果，在(src/App.vue)放入以下内容
```html
<script setup>
//发送请求
import axios from "axios";
import { onMounted } from "vue";
onMounted(() => {
  //get请求
  axios.get("/home/getdata").then((res) => {
    console.log("get请求返回的数据", res);
  });
  //post请求
  axios.post("/home/postdata").then((res) => {
    console.log("post请求返回的数据", res);
  });
});
</script>

<template></template>

<style scoped lang="scss"></style>

```
### 6.效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/901f73ec68ad4375b4ee39f56d9a48b9.png)
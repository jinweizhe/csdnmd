## 项目效果
**共两个页面**
![在这里插入图片描述](https://img-blog.csdnimg.cn/a8284ec5940445ce81a24cc0aa559bb1.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b71961c0ad894915aebdcb9b8e3173d9.png)

## 服务端代码
```js
npm install ws  //这里使用ws库来演示
```
```js
const ws = require("ws"); //引入ws

const sever = new ws.Server({
  port: 8000, //定义端口号
});

//事件字面意思
sever.on("open", handleOpen);
sever.on("close", handleClose);
sever.on("error", handleError);
sever.on("connection", handleConnection);

function handleOpen() {
  console.log("sever open");
}
function handleClose() {
  console.log("sever close");
}
function handleError() {
  console.log("sever error");
}

//与客户端连接成功触发的事件
function handleConnection(ws) {
  console.log("sever connection");
  ws.on("message", handMessage);
}

//前端向后端发送消息时触发,参数就是传来的数据
function handMessage(msg) {
  console.log("sever message");
  console.log("msg", JSON.parse(msg)); //获取前端传来的消息

  //clients记录了所有连接到这个sever上的所有客户端
  sever.clients.forEach((item) => {
    console.log("item", item);
    //遍历找到每个客户
    //后端向前端发请求(会在前端的message事件接收)
    //切记参数要是json类型的,并且需要转一下字符串再转json,不要直接用前端传来的JSON,具体原因本人不晓得,直接前端传来的再传出去这里显示返回到前端的是一个blob类型的了,找不到传的数据
    item.send(JSON.stringify(JSON.parse(msg)));
  });
}
```
# 原生js版本
### 输入用户名进入聊天室页面代码
```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <input
      type="text"
      id="username"
      placeholder="请输入用户名"
      name=""
      id=""
    />
    <button id="enter">进入聊天室</button>
    <script>
      const oUsername = document.querySelector("#username");
      const oEnterBtn = document.querySelector("#enter");
      oEnterBtn.addEventListener("click", handleEnterBtnClick, false);
      function handleEnterBtnClick() {
        const username = oUsername.value;
        if (username.length < 6) {
          alert("用户名不小于6位");
          return;
        }

        //进入聊天室将用户名存到本地
        localStorage.setItem("username", username);
        location.href = "./index.html";
        // oUsername.value = "";
      }
    </script>
  </body>
</html>
```
### 聊天页面
```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="X-UA-Compatible"
      content="IE=edge"
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <h2>聊天室界面</h2>
    <ul id="list"></ul>
    <input
      type="text"
      name=""
      id="message"
      placeholder="请输入消息"
    />
    <button id="send">发送</button>

    <script>
      const olist = document.querySelector("#list");
      const oMsg = document.querySelector("#message");
      const oSendBtn = document.querySelector("#send");
      let username = "";
      //连接服务器端口
      const ws = new WebSocket("ws:192.168.205.219:8000");

      //点击发送
      oSendBtn.addEventListener("click", handleSendBtnClick, false);

      //发送的方法
      function handleSendBtnClick() {
        //得到输入框内容
        const msg = oMsg.value;
        if (!msg.trim().length) return; //取消空格长度为0就返回

        //到这步说明有输入内容
        //向服务器发送消息(json字符串格式)
        //会在后端的message事件接收,默认有个参数就是数据,需要通过json.parse()转一下
        ws.send(
          JSON.stringify({
            user: username,
            message: msg,
          })
        );
      }

      //websocket的事件
      ws.addEventListener("open", handleOpen);
      ws.addEventListener("close", handleClose);
      ws.addEventListener("error", handleError);
      ws.addEventListener("message", handleMessage);

      //相关函数
      //打开websocket(即连接成功触发)
      function handleOpen(e) {
        console.log("Send open");
        console.log("e open", e);

        //获取localstorage的name并赋值
        username = localStorage.getItem("username");

        if (!username) {
          //如果本地没存,跳到进入页面
          location.href = "./entry.html";
          return;
        }
      }
      //关闭连接后触发
      function handleClose(e) {
        console.log("Close");
        console.log("e Close", e);
      }
      //发生错误时触发
      function handleError(e) {
        console.log("Error");
        console.log("e Error", e);
      }
      //后端向前端发送消息时触发
      function handleMessage(e) {
        console.log("Message");

        //数据在e.data里面,但是e.data为后端传来的json数据
        //这里需要转一下
        const msgdata = JSON.parse(e.data);
        console.log("msgdata", msgdata.message); //这就是发送的消息

        //将消息追加到ul里面
        olist.appendChild(createMsg(msgdata));
      }

      //创建的li
      function createMsg(data) {
        const { user, dataTime, message } = data;
        const oitem = document.createElement("li"); //创建的li标签
        oitem.innerHTML = `
        <p>
          <span style='color:blue'>用户:${user}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style='display:inline-block;margin-left=200px;'>消息: ${message}</span></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i>${new Date().toLocaleString()}</i>
          </p>`;
        return oitem;
      }
    </script>
  </body>
</html>
```
# vue2版本(vue3也类似)
## **这里用了路由跳转**
```js
npm i npm install vue-router@3   //vue2版本路由
```
## 路由配置
```js
import Vue from "vue";
import VueRouter from "vue-router";
//使用use挂载路由,之后就可以使用new vuerouter创建路由器对象
Vue.use(VueRouter);

//导入路由组件
import home from "@/views/Home.vue";   //聊天页面
import Login from "@/views/Login.vue";  //输入用户名进入聊天室的页面

//创建路由器对象
const router = new VueRouter({
  routes: [
    { path: "/", component: home },
    { path: "/home", component: home },
    { path: "/login", component: Login },
  ],
});

export default router;

```
## main.js
```js
import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

```
## **app.vue页面代码**
```js
<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>
<script></script>
<style scoped lang="scss"></style>
```
### 输入用户名进入聊天室页面代码
```js
<template>
  <div class="">
    <input
      type="text"
      v-model.trim="username"
      placeholder="请输入用户名"
    />
    <button @click="handEnterBtnClick">进入聊天室</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    this.username = localStorage.getItem("username");
    if (this.username) {
      //有用户名代表登录,跳到首页
      this.$router.push("/home");
      return;
    }
  },
  methods: {
    //点击进入聊天室
    handEnterBtnClick() {
      console.log("123", 123);
      const username = this.username;
      if (username.length < 6) {
        alert("用户名不小于6位");
        return;
      }

      //将用户名存储到本地
      localStorage.setItem("username", username);
      //跳转首页
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped lang="scss"></style>
```
### 聊天页面
```js
<template>
  <div class="">
    <h2>聊天室界面</h2>
    <ul>
      <li
        v-for="item in msglist"
        :key="item.id"
      >
        <p>
          <span style="color: blue">用户:{{ item.user }}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style="display:inline-block;margin-left=200px;"
            >消息: {{ item.message }}</span
          >
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i>{{ new Date().toLocaleString() }}</i>
        </p>
      </li>
    </ul>
    <input
      type="text"
      v-model.trim="msg"
      placeholder="请输入消息"
    />
    <button @click="handSendBtnClick">发送</button>
  </div>
</template>

<script>
// 创建websocket实例
const ws = new WebSocket("ws://localhost:8000");

export default {
  name: "",
  data() {
    return {
      msg: "", //发送的消息
      username: "", //用户名
      msglist: [], //li列表
    };
  },
  mounted() {
    this.username = localStorage.getItem("username");
    if (!this.username) {
      //没有用户名代表未登录,退到登录页
      this.$router.push("/login");
      return;
    }

    // ws的所有事件都在mounted周期绑定
    ws.addEventListener("open", this.handleWsOpen);
    ws.addEventListener("close", this.handleWsClose);
    ws.addEventListener("error", this.handleWsError);
    ws.addEventListener("message", this.handleWsMessage);
  },
  methods: {
    handSendBtnClick() {
      const msg = this.msg;

      if (!msg.length) {
        //无输入时直接return
        return;
      }
      //到这步说明有输入内容
      //向服务器发送消息(json字符串格式)
      //会在后端的message事件接收,默认有个参数就是数据,需要通过json.parse()转一下
      ws.send(
        JSON.stringify({
          id: new Date().toLocaleString(),
          user: this.username,
          message: msg,
        })
      );

      this.msg = "";
    },
    // 打开websocket
    handleWsOpen() {
      console.log("html open");
    },
    //关闭websocket
    handleWsClose() {
      console.log("html close");
    },
    //websocket发生错误
    handleWsError() {
      console.log("html error");
    },
    //接收后端传来的消息
    handleWsMessage(e) {
      console.log("html message");
      console.log("e.data", e.data);
      const msg = JSON.parse(e.data);
      this.msglist.push(msg);
    },
  },
};
</script>

<style scoped lang="scss"></style>
```
[相关视频地址](https://www.bilibili.com/video/BV1jy4y1U7UE?p=2&vd_source=54b92ea953eb0a7281545e66410fc2f5)
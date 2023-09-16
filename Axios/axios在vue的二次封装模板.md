#### 解决跨域配置proxy模板
```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //是否使用link检查代码
  devServer: {
    //方式二:设置多个代理
    proxy:{
      //这个路径为http://192.168.1.182:3000/douyu/wgapi/vod/front/vodrank/getTagVideos
      '/douyu':{
        //target是代理的目标路径
        target:"http://192.168.1.182:3000",
        //pathRewrite重写请求的路径,实际请求的路径没有代理标识douyu,需要把斗鱼重置为空字符串
        pathRewrite:{'^/douyu':''}
      },
	});
```
#### 在scr平级处新建.env.development文件,加入以下内容
```js
VUE_APP_URL = /yigou
```
#### axios二次封装模板(在scr下创建uitl文件夹下再创建http.js,放入以下内容即可,只需要修改baseURL路径即可)
```js
import axios from "axios";
//创建一个新的请求实例instance,instance.的用法和axios.的用法一致，可以使用instance({})、instance.get（）、instance.post()
const instace = axios.create({
  baseURL: process.env.VUE_APP_URL, //api接口基础配置,这个手动添加
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
    return config
}, err => {
  return Promise.reject(err)
})

//配置响应拦截器
// 响应拦截器:在请求响应之后对数据处理，比如:登录失败、请求数据失败的处理
// instance.interceptors.response.use(response=>{l}, err=>{});
// 响应成功:执行回调函数1;响应失败，执行回调函数2
instace.interceptors.response.use(
  (response) => {
    return response; //这里的response就是请求成功后的res , response.data即是请求成功后回调函数内的参数res.data
  },
  (err) => {
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
##### 在全局导入(不推荐)
在main.js里面加入以下代码引入这个模块即可
```js
import '@/uitl/http.js'
```
使用方法
```js
getapi("/api/RoomApi/live").then((res) => {
  console.log(res);
});
```
##### 再封装一下直接使用(推荐)
1. 在src目录下新建api文件夹 , 然后创建index.js文件,加入以下代码
```js
//在当前组件中导入封装的http.js
import { getapi } from "@/uitl/http";
//对每个请求封装单个方法,使用时可以直接给函数传参直接使用 , 这里我放了四个请求

//这种是传对象情况
// 接口:/api/RoomApi/live
// 参数1：limit 请求条数的限制，默认是30
export const getroomapi = (data) => getapi("/api/RoomApi/live",data);

//这种是不传参数的情况
// /api/RoomApi/game
export const getgame = () => getapi("/api/RoomApi/game");

//这两种是直接拼接的情况
// /api/RoomApi/room/房间id
export const getdetailapi = (room_id) => getapi("/api/RoomApi/room/" + room_id);
// /api/RoomApi/live/房间分类的id
export const getroom = (room_id) => getapi("/api/RoomApi/live/" + room_id);
```
2. 使用这个js文件(这里我演示三个组件使用,一种是参数传对象,一种是不传参数,一种是直接拼接)
 - 案例一 : 参数传对象
```js 
//使用解构赋值导入需要的接口函数
import {getroomapi} from '@/api/douyu.js'
//方法在需要的时候按照如下方法使用
getroomapi({
            limit: this.a * 30,
          })
        .then((data) => {
        	console.log(data)
          });
```
- 案例二: 不传参数
```js
//导入
import {getgame} from "@/api/douyu.js";
//使用
getgame().then((data) => {
        console.log(data)
      });
```
- 案例三: 直接拼接
```js
//导入
import {getdetailapi} from "@/api/douyu.js";
//使用
getdetailapi(this.id).then((data) => {
        this.flag = false;
        this.list = data.data.data;
      });
```
**这样就可以获取想要的数据了,将日常需要发请求的api封装成函数,使用会更方便,更易于管理,否则当项目更改api时,又需要一个个找,不易于管理**
### 将封装的api注册全局
在api下的index.js做如下导出配置
```js
import { getapi, postapi } from "@/uilts/http.js";
//首页
const gethome = (data) =>
  postapi("/recommend_api/v1/article/recommend_all_feed", data);
//一级分类
const getlist = () => getapi("/tag_api/v1/query_category_briefs");
//一级分类文章列表
const postlist = (data) =>
  postapi("/recommend_api/v1/article/recommend_cate_feed", data);
//二级分类名
const posterlist = (data) =>
  postapi("/recommend_api/v1/tag/recommend_tag_list", data);
export default {
  gethome,
  getlist,
  postlist,
  posterlist,
};
```

```js
//将封装的api导入全局
import api from "@/api/index.js";
Vue.prototype.$axios = api;
```
做完如上配置即可通过this.$axios.方法名 即可发请求
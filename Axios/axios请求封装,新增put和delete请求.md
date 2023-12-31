```js
import axios from "axios";
import { useUserStore } from "@/store/user.js";
//创建一个新的请求实例instance,instance.的用法和axios.的用法一致，可以使用instance({})、instance.get（）、instance.post()
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, //默认配置(这里不要用process.env,个人百度这个在vite中被废弃掉了,属性名必须以VITE_API_开头,否则 import.meta.env检测不到)
  timeout: 5000, //超时时间
});

//配置请求拦截器,在请求之前的数据处理,比如在请求头添加token,所有的请求都会经过拦截器
instance.interceptors.request.use(
  //config:该参数表示当前请求的配置对象
  (config) => {
    //例如:
    //在请求头统一添加token
    //或者请求之前显示lodding图标(这里只演示这个)
    const store = useUserStore();
    if (store.userinfo.token != "") {
      config.headers.Authorization = store.userinfo.token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err); //将错误消息挂到promise的失败函数上
  }
);

//配置响应拦截器
// 响应拦截器:在请求响应之后对数据处理，比如:登录失败、请求数据失败的处理
// instance.interceptors.response.use(response=>{l}, err=>{});
// 响应成功:执行回调函数1;响应失败，执行回调函数2
instance.interceptors.response.use(
  (response) => {
    return response; //这里的response就是请求成功后的res , response.data即是请求成功后回调函数内的参数res.data
  },
  (err) => {
    return Promise.reject(err); //将错误消息挂到promise的失败函数上
  }
);

//封装请求的api
const callapi = (method = "GET", url, data = {}) => {
  const params = method === "GET" ? data : {};
  const body = ["POST", "PUT"].includes(method) ? data : {};
  const options = { method, url, params, data: body };

  return instance(options);
};

//封装GET请求函数
export const getapi = (url, data) => callapi("GET", url, data);
export const postapi = (url, data) => callapi("POST", url, data);
export const putapi = (url, data) => callapi("PUT", url, data);
export const deleteapi = (url, data) => callapi("DELETE", url, data);

```
```js
// 导入axios
import axios from 'axios';
// import store from '@/store/index'

import { useUserStore } from '@/store/user'

const instance = axios.create({
    baseURL: '/shop',
    timeout: 3000,//超时时间
});
// 请求成功：执行回调函数1，请求失败：执行回调函数2
instance.interceptors.request.use(config => {
    const userStore = useUserStore();
    const { setToken } = userStore

    // console.log('setToken: ', setToken);
    // console.log("userStore", userStore)
    // 正在请求数据
    console.log("config", config)
    // if (resizeBy.code === 0) {
    //     store.dispatch('setLoading', true);
    // }
    // // 在请求头统一添加的token
    if (userStore.state.token) {
        config.headers.Authorization = 'Bearer ' + userStore.state.token;
    }
    return config;
}, err => {
    // 请求失败
    // store.dispatch('setLoading', false);
    return Promise.reject(err);
});
instance.interceptors.response.use(response => {
    // Toast.clear();
    // store.dispatch('setLoading', true);
    return response.data;
}, err => {
    // 响应数据失败
    // store.dispatch('setLoading', false);
    // Toast.clear();
    return Promise.reject(err);
});


// 封装一个请求函数,可以处理get和post请求
const callAPi = (method = 'GET', url, data = {}) => {
    return instance({
        method,
        url,
        params: method === 'GET' ? data : {},
        data: method === 'POST' ? data : {},
    });
}

// 封装一个GET请求函数
export const getApi = (url, data) => callAPi('GET', url, data);
// 封装一个POST请求函数
export const postApi = (url, data) => callAPi('POST', url, data);
```
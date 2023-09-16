##### 在pages同级目录中新建uitls文件夹,在里面新建http.js文件,粘贴以下内容
```js
const baseURL = 'https://open.douyucdn.cn'; //基础路径自己可以改
/**
 * 对于网络请求，设置参数默认值
 */
const DEFAULT_REQUEST_OPTIONS = {
  baseURL,
  timeout:1000*5,
	header: { 
    "Content-Type": "application/json",
    // 'x-token': 'x-token'  // token 看自己是否需要
  },
}

/**
 * 请求的封装
 * @param {String} url 请求的接口地址
 * @param {String} method 请求的方法
 * @param {Object} data 请求的参数
 * @param {Object} option 请求头的配置
 */
const request = (url, method='GET', data={}, option={}) => {

  wx.showLoading({
    title: '加载中...',
  });

  // 合并配置，在配置信息中提取需要的部分
  let { baseURL, header} = Object.assign({}, DEFAULT_REQUEST_OPTIONS, option)
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + url,
      data,
      header,
      method,
      success: res => {
        // console.log('响应：',res);
        wx.hideLoading()
        if (res.statusCode === 200) {
          //200: 服务端业务处理正常结束
          resolve(res.data)
        } else {
          //其它错误，提示用户错误信息
          console.error(res);
          resolve(res)
          if(res.statusCode == 404){
            wx.showToast({
              title: '数据不存在',
              icon:'none'
            })
          }
        }
      },
      fail: res => {
        console.error(res);
        wx.hideLoading()
        reject(res)
      }
    })
  })
}



/**
 * GET请求
 * @param {String} url 请求接口地址
 * @param {Object} data 请求参数
 * @param {Object} option 请求头的配置
 */
export const getApi = (url, data, option) => request(url, 'GET', data, option);

/**
 * POST请求
 * @param {String} url 请求接口地址
 * @param {Object} data 请求参数
 * @param {Object} option 请求头的配置
 */
export const postApi = (url, data, option) => request(url, 'POST', data, option);
```
###### 在pages同级目录中,新建api文件夹,在里面新建index.js文件
在文件内封装请求,请求模板如下
```js
import {getApi,postApi } from '../utils/http';

/**
 * 获取所有的房间列表
 * @param {Object} data 请求参数
 */
 //基础路径在上面配过了,这里只需要写接口和参数即可,postApi请求的是post类型接口,getapi请求的是get类型接口,使用模板如下(只演示一个get请求,post也如下)
export const getAllRoomApi = data => getApi('/api/RoomApi/live', data);  
```
###### 在模块内使用
```js
//先引入api/index模块里面暴露的与请求相关的函数,使用解构赋值导出
import {getAllRoomApi} from '../../api/index'

//定义方法
async getData(){
    let res = await getAllRoomApi(); //直接调用函数,如果有参数就在括号内传入对象形式将数据发送(因为上面封装了一个data,只接收一个参数)
    console.log('res:', res);
    this.setData({list: res.data});
  },
```
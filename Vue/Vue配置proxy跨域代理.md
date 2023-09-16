![在这里插入图片描述](https://img-blog.csdnimg.cn/78b467cd9cd54761bb21b654190d0236.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/d843ce7940b34df6a12f9e160f4c3924.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/a6095f4f8832436289368ed95c9675d8.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/eabea3e58b89454baae8ec889721f7db.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/ae869d2c0cd64390b23d110e8f0cc013.png)

**以上配置结束**
方式一：设置单个代理

1. 优点：配置简单，请求资源时直接发给前端（8080）即可。
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

```js
//原路径http://192.168.1.182:3000/wgapi/vod/front/vodrank/getTagVideos

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //是否使用link检查代码
  devServer: {
    // 设置代理服务器
    // 方法一：设置单个代理
    proxy: 'http://192.168.1.182:3000',
  }
});
```

方式二：设置多个代理

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
2. 缺点：配置略微繁琐，请求资源时必须加前缀。

```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    proxy:{
      // 代理1
      //  当你请求是以/api开头的时候，则我帮你代理访问到http://127.0.0.1:3000
      '/api': {
        target: 'http://127.0.0.1:3000',
        // secure: false,// 如果是https接口，需要配置这个参数
        // ws: true, //是否代理websockets， 默认值为true
        
        /*
           changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:3000
           changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
           changeOrigin默认值为true
        */

        changeOrigin: true, // 设置请求头中的host地址，默认值为true
        //地址中的 /api 仅仅是一个请求转发标志，真正的接口中没有/api，所以在转发时重写请求路径，把/api删掉。
        pathRewrite: {'^/api' : ''}
      },
      // 代理2
      '/douyu':{
        target: 'http://open.douyucdn.cn',
         pathRewrite: {'^/douyu' : ''}
      }
    }

}
```

### 设置多个代理
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
      //这个路径为http://192.168.1.182:3000/huya/wgapi/vod/front/vodrank/getTagVideos
      '/huya':{
        //target是代理的目标路径
        target:"http://192.168.1.182:3000",
        //pathRewrite重写请求的路径,实际请求的路径没有代理标识douyu,需要把斗鱼重置为空字符串
        pathRewrite:{'^/huya':''}
      }
    }
  }
});
```
### 发送ajax请求的方法使用
```js
    getData() {
    //douyu代理
      axios.post('http://localhost:8080/douyu/wgapi/vod/front/vodrank/getTagVideos', { tagId: 0 }).then(res => {
        console.log('res.data:', res.data);
      });
		//huya代理
       axios.post('http://localhost:8080/huya/wgapi/vod/front/vodrank/getTagVideos', { tagId: 0 }).then(res => {
        console.log('res.data:', res.data);
      });
    },
```
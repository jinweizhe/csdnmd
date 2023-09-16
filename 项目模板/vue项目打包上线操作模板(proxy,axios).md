###### 1.在vue.config.js里新建proxy代理(设置开发的端口号)
```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //是否使用link检查代码
  devServer: {
    proxy:{
      //这个路径为http://192.168.1.182:3000/douyu/wgapi/vod/front/vodrank/getTagVideos
      '/douyu':{
        //target是代理的目标路径
        target:"http://192.168.1.182:3000",
        //pathRewrite重写请求的路径,实际请求的路径没有代理标识douyu,需要把斗鱼重置为空字符串
        pathRewrite:{'^/douyu':''}
      }
    }
  }
});
```
###### 新建.env文件,放入以下内容
```env
# 全局默认文件,不论什么环境都会加载
# 变量名必须以VUE_APP_开头,比如VUE_APP_XXX

VUE_APP_NAME = 张三
VUE_APP_AGE = 18
```
###### 新建.env.development文件,放入如下内容(开发模式下)
```env.development
VUE_APP_AGE = 20
# 开发模式下,使用开发地址
# VUE_APP_URL = /   //未弄多个代理的话,只有基础路径这样配
VUE_APP_URL = /douyu   //多个代理的话,这样配
```
###### 新建.env.production文件,放入如下内容(生产模式下)
```js
VUE_APP_AGE = 22
VUE_APP_URL = http://open.douyucdn.cn   //生产上线后,用真实地址
```
###### 然后在axios配置基础路径baseUrl如下
```js
baseURL: process.env.VUE_APP_URL,
```
也可以按照如下我的博客配置这个基础路径
[axios二次封装模板](https://blog.csdn.net/weixin_68658847/article/details/129403539?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167894749816800197078056%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=167894749816800197078056&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-4-129403539-null-null.blog_rank_default&utm_term=axios&spm=1018.2226.3001.4450)
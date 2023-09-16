@[toc]
## 第三方包
#### express创建服务器
```js
npm i express
```
#### mongoose连接MongDb数据库的包
```js
npm i mongoose
```
#### cors 解决跨域问题
```js
npm i cors
```
#### mysql 连接mysql的包
```js
npm i mysql
```
#### axios 发送请求的包
```js
npm i axios
```
#### express-art-template 模板引擎
```js
npm i express-art-template
```
#### multer 实现图片/文件上传
```js
npm i multer
```
#### moment 格式化时间
```js
npm i moment
```
#### express-session 使用session认证的包
```js
npm i erpress-session
```
#### jsonwebtoken express-jwt JWT加密和解密的包(这是两个包)
```js
npm install jsonwebtoken express-jwt
```
#### bcryptjs 对数据进行加密处理
```js
npm i bcryptjs 
```
#### @hapi/joi 包，为表单中携带的每个数据项，定义验证规则
```js
npm install @hapi/joi@17.1.0
```
#### @escook/express-joi 中间件，来实现自动对表单数据进行验证的功能
```js
npm i @escook/express-joi
```
#### express-generator 创建express应用骨架(脚手架)
```js
npm install express-generator -g (全局安装,避免下次使用再安装)
```
## 需要注册的中间件
#### express.static() 静态资源托管
#### express.router() 创建路由模块 导入到主模块也需要注册
#### express.urlencoded({extended:false}) 读取post请求的urlencoded格式

## 内置模块
#### http 创建服务器
#### fs 文件读写模块
#### path 文件路径模块
#### crypto 数据加密
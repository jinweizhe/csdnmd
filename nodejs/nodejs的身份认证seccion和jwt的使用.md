@[toc](目录)

> 对于服务端渲染和前后端分离这两种开发模式来说，分别有着不同的身份认证方案:
> 服务端渲染推荐使用Session 认证机制
> 前后端分离推荐使用JWT认证机制


# Cookie和Seccion的介绍和Seccion的使用
### Cookie和Seccion的介绍
![在这里插入图片描述](https://img-blog.csdnimg.cn/5a11facdf1fa4360a0be8bc61f6b6b0a.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f397254669b6426cae685af7f12f27cb.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6fd969d0ab5448688b379ef6cdbd9743.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/b01bcf36778747a4aac98ff4fafdb0d3.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/68ffb1c4c34e441398bf37074e5f4f27.png)
### express的使用
**1.在Express项目中，只需要安装express-session中间件，即可在项目中使用Session认证:**
```js
npm install express-session
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/3e4c0e46195542418c1238b30cc2e370.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/6dc69ee72b014feb941d1524d9fdb087.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e608e0569a6e43fe88114f4e3c140d3b.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/199a9f7555384fa0ae8a37e985162f9b.png)
# JWT介绍和使用
### JWT的介绍
![在这里插入图片描述](https://img-blog.csdnimg.cn/b7e43a40b0bc4a76993d0694c90fac04.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e57b999d60cd4eb0b92a30b428a6f1b1.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/c51569c318764ecc9bdc6a088165cf9b.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2b93e702181e4a5488c3f04a78d67425.png)
![](https://img-blog.csdnimg.cn/41e4938c2b884e7f84894e4e8db02dec.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/aa41444fd8b64a48a6d3221b2e7e0a72.png)
### JWT的使用
安装包命令
```cmd
npm install jsonwebtoken express-jwt
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/4d08903cdcf64ddaaf8172257a11da2e.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/8b6fdac41d564649b24ead04edc2a909.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/0122b8bc385e4b0cbfabb8030292bb5c.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/be62307890ef46ed9a20ff45ebd12d56.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/cc581db605cd47f994cfcf2249a39105.png)
**有效期可以为s(秒)  h(小时)**
![在这里插入图片描述](https://img-blog.csdnimg.cn/aba38df04a244ea18d9f22b54c13ce7d.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3cb081bd3bc44ee699afda68be7fbb49.png)
**注意:只要配置成功了express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到req.user属性上**
![在这里插入图片描述](https://img-blog.csdnimg.cn/1c5cb3a51b684dc983db478268ba651d.png)
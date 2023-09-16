## 导航路线

> 关于微信小程序知识点一共做了六个博客,涵盖大部分内容,有想学习的可以按照以下顺序查看
> [1.微信小程序的启动和渲染过程(加组件分类和组件的基本使用以及API分类)](https://blog.csdn.net/weixin_68658847/article/details/128674876)
> [2.微信小程序wxml的数据和事件的绑定,以及条件和列表的渲染](https://blog.csdn.net/weixin_68658847/article/details/128677326)
> [3.微信小程序wxss相关介绍、全局配置和tabbar知识以及发送网络数据请求(post,get)](https://blog.csdn.net/weixin_68658847/article/details/128679203)
> [4.微信小程序页面导航、编程式导航、页面事件、生命周期和WXS脚本](https://blog.csdn.net/weixin_68658847/article/details/128685487)
> [5.微信小程序自定义组件、组件的生命周期和组件通信(插槽)](https://blog.csdn.net/weixin_68658847/article/details/128693391)
> [6.微信小程序使用npm包、全局数据共享和分包](https://blog.csdn.net/weixin_68658847/article/details/128693730)
## 使用 npm 包
### 小程序对 npm 的支持与限制
目前，小程序中已经支持使用 npm 安装第三方包，从而来提高小程序的开发效率。但是，在小程序中使用 npm 包有如下 3 个限制：
1. 不支持依赖于 Node.js 内置库的包
2. 不支持依赖于浏览器内置对象的包
3. 不支持依赖于 C++ 插件的包

总结：虽然 npm 上的包有千千万，但是能供小程序使用的包却“为数不多”。

### Vant Weapp
#### 1. 什么是 Vant Weapp
Vant Weapp 是有赞前端团队开源的一套小程序 UI 组件库，助力开发者快速搭建小程序应用。它所使用的是 MIT 开源许可协议，对商业使用比较友好。
官方文档地址 [https://youzan.github.io/vant-weapp](https://youzan.github.io/vant-weapp)

扫描下方的小程序二维码，体验组件库示例：
![在这里插入图片描述](https://img-blog.csdnimg.cn/4d4367f46a9c42e497eea00b8d3c5aae.png)
#### 2. 安装 Vant 组件库
在小程序项目中，安装 Vant 组件库主要分为如下 3 步：
1. 通过 npm 安装（建议指定版本为@1.3.3）
2. 构建 npm 包
3. 修改 app.json

详细的操作步骤，大家可以参考 Vant 官方提供的快速上手教程：
[https://youzan.github.io/vant-weapp/#/quickstart#an-zhuang](https://youzan.github.io/vant-weapp/#/quickstart#an-zhuang)

#### 3. 使用 Vant 组件
安装完 Vant 组件库之后，可以在 app.json 的 usingComponents 节点中引入需要的组件，即可在 wxml 中直接使用组件。示例代码如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/a87e76441d8f495e8e004d2c15121dd8.png)

#### 4. 定制全局主题样式
Vant Weapp 使用 CSS 变量来实现定制主题。 关于 CSS 变量的基本用法，请参考 MDN 文档：[https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

#### 5. 定制全局主题样式
在 app.wxss 中，写入 CSS 变量，即可对全局生效：
![在这里插入图片描述](https://img-blog.csdnimg.cn/019a6c3286444095acda1b6085d246bf.png)
所有可用的颜色变量，请参考 Vant 官方提供的配置文件：[https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less](https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less)

### API Promise化
#### 1. 基于回调函数的异步 API 的缺点
默认情况下，小程序官方提供的异步 API 都是基于回调函数实现的，例如，网络请求的 API 需要按照如下的方式调用：
![ ](https://img-blog.csdnimg.cn/2a33e9a0e2a148d58b18747a11f4f67f.png)
**缺点：容易造成回调地狱的问题，代码的可读性、维护性差！**

#### 2. 什么是 API Promise 化
**API Promise化，指的是通过额外的配置，将官方提供的、基于回调函数的异步 API，升级改造为基于 Promise 的异步 API，从而提高代码的可读性、维护性，避免回调地狱的问题。**

#### 3. 实现 API Promise 化
在小程序中，实现 API Promise 化主要依赖于 miniprogram-api-promise 这个第三方的 npm 包。它的安装和使用步骤如下：
```js
npm install --save miniprogram-api-promise@1.0.4
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/5f83e5fe5ff0472fbb1d463ba3ee198a.png)
#### 4. 调用 Promise 化之后的异步 API
![在这里插入图片描述](https://img-blog.csdnimg.cn/276635466bcf42b4bc78810e4d4f19a0.png)
## 全局数据共享
#### 1. 什么是全局数据共享
**全局数据共享（又叫做：状态管理）是为了解决组件之间数据共享的问题。
开发中常用的全局数据共享方案有：Vuex、Redux、MobX 等。**
![在这里插入图片描述](https://img-blog.csdnimg.cn/debf3074d1a84cb6a2799c55210b4047.png)
#### 2. 小程序中的全局数据共享方案
在小程序中，可使用 mobx-miniprogram 配合 mobx-miniprogram-bindings 实现全局数据共享。其中：
- mobx-miniprogram 用来创建 Store 实例对象
- mobx-miniprogram-bindings 用来把 Store 中的共享数据或方法，绑定到组件或页面中使用

![在这里插入图片描述](https://img-blog.csdnimg.cn/82494e253234448386906d8b69161b9e.png)
### MobX
#### 安装 MobX 相关的包
在项目中运行如下的命令，安装 MobX 相关的包：
```js
npm install --save mobx-miniprogram@4.13.2 mobx-miniprogram-bindings@1.2.1
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/d08281a02b124f158f8b031e92ce86cf.png)

注意：MobX 相关的包安装完毕之后，记得删除 miniprogram_npm 目录后，重新构建 npm。

#### 2. 创建 MobX 的 Store 实例
![在这里插入图片描述](https://img-blog.csdnimg.cn/d4862e69424844aa8f653e2e248a39dc.png)
#### 3. 将 Store 中的成员绑定到页面中
![在这里插入图片描述](https://img-blog.csdnimg.cn/bea74a35d9104a89bf273a5cd2f74dd6.png)

#### 4. 在页面上使用 Store 中的成员
![在这里插入图片描述](https://img-blog.csdnimg.cn/68bd90941d4e48f78831bc7f882e7659.png)
#### 5. 将 Store 中的成员绑定到组件中
![在这里插入图片描述](https://img-blog.csdnimg.cn/de204f37add84262a1c743526aaae3a7.png)
#### 6. 在组件中使用 Store 中的成员
![在这里插入图片描述](https://img-blog.csdnimg.cn/5c85de7bade9490582daaa0239847c06.png)
## 分包
### 基础概念
#### 1. 什么是分包
分包指的是把一个完整的小程序项目，按照需求划分为不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。
#### 2. 分包的好处
对小程序进行分包的好处主要有以下两点：
- 可以优化小程序首次启动的下载时间
- 在多团队共同开发时可以更好的解耦协作
#### 3. 分包前项目的构成
分包前，小程序项目中所有的页面和资源都被打包到了一起，导致整个项目体积过大，影响小程序首次启动的下载时间。

![在这里插入图片描述](https://img-blog.csdnimg.cn/046c5a14420c445aa1f1d6022cf9c70d.png)
#### 4. 分包后项目的构成
分包后，小程序项目由 1 个主包 + 多个分包组成：
- 主包：一般只包含项目的启动页面或 TabBar 页面、以及所有分包都需要用到的一些公共资源
- 分包：只包含和当前分包有关的页面和私有资源
![在这里插入图片描述](https://img-blog.csdnimg.cn/fe147b82f0294a5580fb7db060964a6d.png)
#### 5. 分包的加载规则
1. 在小程序启动时，默认会下载主包并启动主包内页面
	- tabBar 页面需要放到主包中
2. 当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示
	- 非 tabBar 页面可以按照功能的不同，划分为不同的分包之后，进行按需下载
#### 6. 分包的体积限制
目前，小程序分包的大小有以下两个限制：
- 整个小程序所有分包大小不超过 16M（主包 + 所有分包）
- 单个分包/主包大小不能超过 2M

### 使用分包
#### 1. 配置方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/f2a6298f632147e7bb706b8bf435bf74.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/9d2c8ada449040c8b90f336cd2779efc.png)


#### 2. 打包原则
1. 小程序会按 subpackages 的配置进行分包，subpackages 之外的目录将被打包到主包中
2. 主包也可以有自己的 pages（即最外层的 pages 字段）
3. tabBar 页面必须在主包内
4. 分包之间不能互相嵌套

#### 3. 引用原则
1. 主包无法引用分包内的私有资源
2. 分包之间不能相互引用私有资源
3. 分包可以引用主包内的公共资源


![在这里插入图片描述](https://img-blog.csdnimg.cn/8210da92970d4d7aa96d7becd3cad126.png)
### 独立分包
#### 1. 什么是独立分包
独立分包本质上也是分包，只不过它比较特殊，可以独立于主包和其他分包而单独运行。

![在这里插入图片描述](https://img-blog.csdnimg.cn/1867a424ec4b467786b5ad0a2d5efa86.png)
#### 2. 独立分包和普通分包的区别
最主要的区别：是否依赖于主包才能运行
- 普通分包必须依赖于主包才能运行
- 独立分包可以在不下载主包的情况下，独立运行

#### 3. 独立分包的应用场景
开发者可以按需，将某些具有一定功能独立性的页面配置到独立分包中。原因如下：
- 当小程序从普通的分包页面启动时，需要首先下载主包
- 而独立分包不依赖主包即可运行，可以很大程度上提升分包页面的启动速度

**注意：一个小程序中可以有多个独立分包。**

#### 4. 独立分包的配置方法
![在这里插入图片描述](https://img-blog.csdnimg.cn/e6463ed40e284a8c931048c5ed690f2d.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/a06d5f8e4b05410ea36263b049c809db.png)

#### 5. 引用原则
独立分包和普通分包以及主包之间，是相互隔绝的，不能相互引用彼此的资源！例如：
1. 主包无法引用独立分包内的私有资源
2. 独立分包之间，不能相互引用私有资源
3. 独立分包和普通分包之间，不能相互引用私有资源
4. 特别注意：独立分包中不能引用主包内的公共资源

### 分包预下载
#### 1. 什么是分包预下载
分包预下载指的是：在进入小程序的某个页面时，由框架自动预下载可能需要的分包，从而提升进入后续分包页面时的启动速度。
#### 2. 配置分包的预下载
预下载分包的行为，会在进入指定的页面时触发。在 app.json 中，使用 preloadRule 节点定义分包的预下载规则，示例代码如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/bc09a358010a4ab9bf808361496d1fa2.png)
#### 3. 分包预下载的限制
同一个分包中的页面享有共同的预下载大小限额 2M，例如：

![在这里插入图片描述](https://img-blog.csdnimg.cn/c198e56059a341579a0ff7336d78d4d6.png)
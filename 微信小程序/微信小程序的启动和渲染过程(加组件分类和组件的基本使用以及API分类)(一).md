## 导航路线

> 关于微信小程序知识点一共做了六个博客,涵盖大部分内容,有想学习的可以按照以下顺序查看
> [1.微信小程序的启动和渲染过程(加组件分类和组件的基本使用以及API分类)](https://blog.csdn.net/weixin_68658847/article/details/128674876)
> [2.微信小程序wxml的数据和事件的绑定,以及条件和列表的渲染](https://blog.csdn.net/weixin_68658847/article/details/128677326)
> [3.微信小程序wxss相关介绍、全局配置和tabbar知识以及发送网络数据请求(post,get)](https://blog.csdn.net/weixin_68658847/article/details/128679203)
> [4.微信小程序页面导航、编程式导航、页面事件、生命周期和WXS脚本](https://blog.csdn.net/weixin_68658847/article/details/128685487)
> [5.微信小程序自定义组件、组件的生命周期和组件通信(插槽)](https://blog.csdn.net/weixin_68658847/article/details/128693391)
> [6.微信小程序使用npm包、全局数据共享和分包](https://blog.csdn.net/weixin_68658847/article/details/128693730)
### 小程序的启动过程
1. 把小程序的代码包下载到本地
2. 解析app.json全局配置文件
3. 执行app.js小程序入口文件,调用App()创建小程序实例
4. 渲染小程序首页
5. 小程序启动完成
### 小程序页面渲染的过程
1. 加载解析页面的.json配置文件
2. 加载页面的.wxml模板和.wxss样式
3. 执行页面的.js文件,调用page(创建页面实例
4. 页面渲染完成
### 小程序中组件的分类有九大类
- **视图容器**
- **基础内容**
- **表单组件**
- **导航组件**
- 媒体组件
- map地图组件
- canvas画布组件
- 开放能力
- 无障碍访问
上面加粗的为常用的
### 常用的视图容器类组件
1. **view**
	- 普通视图区域
	- 类似于html中的div,是一个块级元素
	- 常用来实现页面的布局效果
2. **scroll-view**
	 - 可滚动的视图区域
	 - 常用来实现滚动列表效果

 **下列分别为wxml和wxss的代码,可用于查看效果**
```html
<scroll-view class="container1" scroll-y>
  <view>a</view>
  <view>b</view>
  <view>c</view>
</scroll-view>
```
```css
.container1 view{
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: pink;
}
.container1 view:nth-child(1){
  background-color:green;
}
.container1 view:nth-child(2){
  background-color: lightskyblue;
}
.container1 view:nth-child(3){
  background-color: lightpink;
}
.container1{
  border: 1px solid red;
  width: 100px;
  height: 120px;
}
```
3. **swiper和swiper-item**
	- 轮播图容器组件和轮播图item组件

**下列分别为wxml和wxss的代码,可用于查看效果**
```html
<swiper>
  <swiper-item class="swiper-container">  
    <view class="item">A</view>
  </swiper-item>
  <swiper-item>
    <view class="item">B</view>
  </swiper-item>
  <swiper-item>
    <view class="item">C</view>
  </swiper-item>
</swiper>
```
```css
.swiper-container{
  height: 150px;
}
.item{
  height: 100%;
  line-height: 150px;
  text-align: center;
}
swiper-item:nth-child(1) .item{
  background-color: pink;
}
swiper-item:nth-child(2) .item{
  background-color: green;
}
swiper-item:nth-child(3) .item{
  background-color: orange;
}
```
**swiper组件常用属性**
| 属性                   | 类型    | 默认值         | 说明                 |
| ---------------------- | ------- | -------------- | -------------------- |
| indicator-dots         | boolean | false          | 是否显示面板指示点   |
| indicator-color        | color   | rgba(0,0,0,.3) | 指示点颜色           |
| indicator-active-color | color   | #000000        | 当前选中的指示点颜色 |
| autoplay               | boolean | false          | 是否自动切换         |
| interval               | number  | 5000           | 自动切换时间间隔     |
| indicator-dots         | boolean | false          | 是否采用衔接滑动     |

**使用如下,这里就演示了两个属性,各位没事干的可以挨个测试一下,wxss代码和上面一样**
```html
<swiper indicator-dots indicator-color="white">
  <swiper-item class="swiper-container">  
    <view class="item">A</view>
  </swiper-item>
  <swiper-item>
    <view class="item">B</view>
  </swiper-item>
  <swiper-item>
    <view class="item">C</view>
  </swiper-item>
</swiper>
```
4. text
	- 文本组件
	- 类似于HTML中的span标签
	**text组件可以通过selectable属性,实现长按选中文本内容的效果**
```html
<view>
	手机号支持长按选中效果
	<text selectable>13800005056</text>
</view>
```
效果图:(这个效果在开发者工具模拟器实现不了,可以通过手机真机实现)
![在这里插入图片描述](https://img-blog.csdnimg.cn/19302b88ba3b4c82aeb8bc2a36cfc519.png)

5. rich-text
	 - 富文本组件
	 - 支持把HTML字符串渲染为WXML结构
	 **通过rich-text组件的nodes属性节点,把HTML字符串渲染为对应的UI结构:**

> 应用场景:商品详情页的结构渲染
```html
<rich-text nodes="<h2 style='color:red;'>这是标题</h2>"/>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/249694030215402a8d80539e0c186408.png)

6.  button
	 -  按钮组件
	 -  功能比HTML中的button按钮丰富
	 -  通过open-type属性可以调用微信提供的各种功能(客服,转发,获取用户授权,获取用户信息等)
	**以下是小程序按钮的种类**
```html
<button>普通按钮</button>
<!-- 通过type属性指定按钮的颜色和类型 -->
<button type="primary">主色调按钮</button>
<button type="warn">警告按钮</button>
<!-- size="mini" 小尺寸按钮-->
<button size="mini">普通小尺寸按钮</button>
<button type="primary" size="mini">主色调小尺寸按钮</button>
<button type="warn" size="mini">警告小尺寸按钮</button>
<!-- plain 镂空按钮 -->
<button size="mini" plain>普通小尺寸镂空按钮</button>
<button type="primary" size="mini" plain>主色调小尺寸镂空按钮</button>
<button type="warn" size="mini" plain>警告小尺寸镂空按钮</button>
```
效果图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/5551ccf6c5c944b7a7533b8b6e55c73e.png)

7.  image
	 -  图片组件
	 -  image组件默认宽度约300px,高度约为240px(给了标签不引入图片也会占位)
```html
<image src="" mode=""/>
<image src="/img/1.jpg" mode=""/>
```
效果图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/631bf2ba6f424acbb9a4b6f7a9c6fb2e.png)
**image组件的mode属性用来指定图片的裁剪和缩放模式,常用的mode属性如下**
| mode值      | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| scaleToFill | (默认值)缩放模式,不保持纵横比缩放图片,使图片的宽高完全拉伸至填满image元素 |
| aspectFit   | 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。 |
| aspectFill  | 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。(简单来说就是图片填充满整个image为止) |
| widthFix    | 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变         |
| heightFix   | 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变         |



8. navigator
	 - 页面导航组件
	 - 类似于HTML中的a链接
### 小程序宿主环境-API
**小程序官方把API分为了如下三大类**
1. 事件监听API
	 - 特点: 以on开头,用来监听某些事件的触发
	 - 举例:  wx.onWindowResize(function callback) 监听窗口尺寸变化的事件
2. 同步API
	- 特点一: 以Sync结尾的API都是同步API
	- 特点二: 同步API的执行结果,可以通过函数返回值直接获取,如果执行出错会抛出异常
	- 举例: wx.setStorageSync('key','value') 向本地存储中写入内容
3. 异步API
	- 特点: 类似于jQuery中的$.ajax(options)函数,需要通过success、fail、complete接收调用的结果
	- 举例: wx.request() 发起网络请求,通过success回调函数接收数据
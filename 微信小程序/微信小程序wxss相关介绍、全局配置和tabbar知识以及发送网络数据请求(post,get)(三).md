## 导航路线

> 关于微信小程序知识点一共做了六个博客,涵盖大部分内容,有想学习的可以按照以下顺序查看
> [1.微信小程序的启动和渲染过程(加组件分类和组件的基本使用以及API分类)](https://blog.csdn.net/weixin_68658847/article/details/128674876)
> [2.微信小程序wxml的数据和事件的绑定,以及条件和列表的渲染](https://blog.csdn.net/weixin_68658847/article/details/128677326)
> [3.微信小程序wxss相关介绍、全局配置和tabbar知识以及发送网络数据请求(post,get)](https://blog.csdn.net/weixin_68658847/article/details/128679203)
> [4.微信小程序页面导航、编程式导航、页面事件、生命周期和WXS脚本](https://blog.csdn.net/weixin_68658847/article/details/128685487)
> [5.微信小程序自定义组件、组件的生命周期和组件通信(插槽)](https://blog.csdn.net/weixin_68658847/article/details/128693391)
> [6.微信小程序使用npm包、全局数据共享和分包](https://blog.csdn.net/weixin_68658847/article/details/128693730)
## wxss相关介绍

> 什么是wxss???
> wxss (WeiXin Style Sheets)是一套样式语言，用于美化WXML的组件样式，类似于网页开发中的CSS。
> WXSS 具有CSS大部分特性，同时，WXSS还对CSS进行了扩充以及修改，以适应微信小程序的开发。
> 与CSS相比，wxSS扩展的特性有:
>  - rpx尺寸单位
>  - @import样式导入
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/118366fb69dd413db82ed28502b5851d.png)
### rpx尺寸单位
> 什么是rpx尺寸单位??
> rpx(responsive pixel) 是微信小程序独有的,用来解决屏适配的尺寸单位.
### rpx的实现原理
**rpx的实现原理非常简单:鉴于不同设备屏幕的大小不同，为了实现屏幕的自动适配，rpX把所有设备的屏幕,在宽度上等分为750份（即:当前屏幕的总宽度为750rpx) 。**
- 在较小的设备上,1rpx所代表的宽度较小
- 在较大的设备上,1rpx所代表的宽度较大

**小程序在不同设备上运行的时候，会自动把 rpx的样式单位换算成对应的像素单位来渲染，从而实现屏幕适配。** 
![ ](https://img-blog.csdnimg.cn/d3a2ef5b2bef4e048a1effa9e57a5f84.png)
### wxss样式导入
**使用WXSS提供的@import语法，可以导入外联的样式表。**

**语法格式:**
@import后跟需要导入的外联样式表的相对路径，用;表示语句结束。示例如下:
```css
//公共样式表 common.wxss
.small-p{
	padding:5px;
}

//当前样式表
@import "../common/common.wxss";
.middle-p{
	padding:15px
}
```
## 全局样式和局部样式
**定义在app.wxss 中的样式为全局样式，作用于每一个页面。**
**在页面的.wxss 文件中定义的样式为局部样式，只作用于当前页面。**
注意:
- 当局部样式和全局样式冲突时，根据就近原则，局部样式会覆盖全局样式
- 当局部样式的权重大于或等于全局样式的权重时，才会覆盖全局的样式
## 全局配置
1. 全局配置文件及常用的配置项
	小程序根目录下的app.json文件是小程序的全局配置文件.常用的配置如下:
	- pages
		-	记录当前小程序所有页面的存放路径
	- window
		- 全局设置小程序窗口的外观
	- tabBar
		- 设置小程序底部的tabBar效果
	- style
		 - 是否启用新版的组件样式
### 了解window节点常用的配置项
| 属性名                       | 类型     | 默认值  | 说明                                           |
| ---------------------------- | -------- | ------- | ---------------------------------------------- |
| navigationBarTitleText       | string   | 字符串  | 导航栏标题文字内容                             |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色(只支持十六进制)，如#000000      |
| navigationBarTextStyle       | string   | white   | 导航栏标题颜色，仅支持black / white            |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色(只支持十六进制)                   |
| backgroundTextStyle          | string   | dark    | 下拉loading的样式, 仅支持dark / light          |
| enablePullDownRefresh c      | Boolean  | false   | 是否全局开启下拉刷新                           |
| onReachBottomDistance        | Number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为px |
### 全局配置tabBar
**tabBar是移动端应用常见的页面效果，用于实现多页面的快速切换。小程序中通常将其分为:**
- 底部tabBar
- 顶部tabBar

**注意:**
-  tabBar中只能配置最少2个、最多5个tab页签
- 当渲染顶部 tabBar时，不显示icon，只显示文本

**tabBar的6个组成部分**
1. backgroundColor: tabBar的背景色
2. selectedlconPath:选中时的图片路径
3. borderStyle: tabBar 上边框的颜色
4. iconPath:未选中时的图片路径
5. selectedColor: tab 上的文字选中时的颜色
6. color: tab 上文字的默认（未选中）颜色

**tabBar节点的配置项**
| 属性            | 类型     | 必填 | 默认值 | 描述                                  |
| --------------- | -------- | ---- | ------ | ------------------------------------- |
| position        | String   | 否   | bottom | tabBar的位置,仅支持bottom/top         |
| borderStyle     | String   | 否   | black  | tabBar上边框的颜色，仅支持black/white |
| color           | HexColor | 否   |        | tab 上文字的默认（未选中）颜色        |
| selectedColor   | HexColor | 否   |        | tab 上的文字选中时的颜色              |
| backgroundColor | HexColor | 否   |        | tabBar的背景色                        |
| list            | Array    | 是   |        | tab页签的列表，最少2个、最多5个tab    |

**上面的list属性定义时为"list":[{},{},{}] 其中每个对象都是一个tab,下面是每个tab对象的配置选项**
| 属性             | 类型   | 必填 | 描述                                             |
| ---------------- | ------ | ---- | ------------------------------------------------ |
| pagePath         | String | 是   | 页面路径，页面必须在pages中预先定义              |
| text             | String | 是   | tab 上显示的文字                                 |
| iconPath         | String | 否   | 未选中时的图标路径;当postion为 top时，不显示icon |
| selectedIconPath | String | 否   | 选中时的图标路径;当posttion为 top时，不显示icon  |

**以上配置在app.json里面的tabBar节点下设置,如果没有这个节点可以自己创建与pages、window、style等平级地方创建tabBar节点,代码如下:**
```json
"pages":{},
"window":{},
"tabBar":{
	"list":[
		{
			"pagePath":"pages/logs/logs",//这个路径指向的就是打开的页面,使用上面的pages定义的路径即可
			"text":"tab 上显示的文字",
			"iconPath":"",
			"selectedIconPath":""
		},
		{},
		{}
	]
},
"style":"v2"
```
### 小程序的页面配置
**小程序中,每个页面都有自己的.json配置文件,用来对当前页面的窗口外观、页面效果等进行配置**
**页面配置和全局配置的关系:**
- 小程序中,app.json中的window节点,可以全局配置小程序中每个页面的窗口外观
- 如果某些小程序页面想要拥有特殊的窗口表现，此时,“页面级别的.json配置文件”就可以实现这种需求。

**注意:当页面配置与全局配置冲突时，根据就近原则，最终的效果以页面配置为准。**

**页面配置中常用的配置项和window节点配置项一追,可以参考上面的windows节点配置项**
## 数据网络请求
### 小程序中网络请求的限制
**1.出于安全性的原因,小程序官方对数据接口的请求做出了如下两个限制:**
1. 只能请求HTTPS类型的接口
2. 必须将接口的域名添加到信任列表中
![在这里插入图片描述](https://img-blog.csdnimg.cn/c6c34660ee9a411296f13c11265dd5e2.png)
**2.配置request合法域名**
需求描述:假设在自己的微信小程序中，希望请求https://www.escook.cn/域名下的接口
配置步骤:登录微信小程序管理后台->开发管理->开发设置->服务器域名->修改request 合法域名'

**注意事项:**
- 域名只支持 https协议
- 域名不能使用IP地址或localhost
- 域名必须经过ICP备案
- 服务器域名一个月内最多可申请5次修改

**3.发起GET请求**
调用微信小程序提供的wx.request()方法,可以发起GET数据请求,示例代码如下:
```js
wx.request({
	url:"",//请求的接口地址,必须基于https协议,必须配置到request合法域名里
	method:"GET", //请求的方式
	data:{
		name:"zhangsan",
		age:22
	}, //请求的参数
	success:(res)=>{
		//请求成功的回调函数
		console.log(res)
	}
})
```
**4.下面代码为发送post请求案例**
![在这里插入图片描述](https://img-blog.csdnimg.cn/c14f826126d54dc5809edc56aab12949.png)
**5. 在页面刚加载时请求数据**
在很多情况下，我们需要在页面刚加载的时候，自动请求一些初始化的数据。此时需要在页面的 onLoad 事件中调用获取数据的函数，示例代码如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/292dd75fc4f5434a9142c282154d864b.png)

**6. 跳过 request 合法域名校验**
如果后端程序员仅仅提供了 http 协议的接口、暂时没有提供 https 协议的接口。
此时为了不耽误开发的进度，我们可以在微信开发者工具中，临时开启「开发环境不校验请求域名、TLS 版本及 HTTPS 证书」选项，跳过 request 合法域名的校验。
![在这里插入图片描述](https://img-blog.csdnimg.cn/4986429780e644fca171dd6f4b62a25b.png)


**注意：
跳过 request 合法域名校验的选项，仅限在开发与调试阶段使用！**

**7.关于跨域和 Ajax 的说明**

> 跨域问题只存在于基于浏览器的 Web 开发中。由于小程序的宿主环境不是浏览器，而是微信客户端，所以小程序中不存在跨域的问题。
> Ajax 技术的核心是依赖于浏览器中的 XMLHttpRequest 这个对象，由于小程序的宿主环境是微信客户端，所以小程序中不能叫做“发起 Ajax 请求”，而是叫做“发起网络数据请求”。
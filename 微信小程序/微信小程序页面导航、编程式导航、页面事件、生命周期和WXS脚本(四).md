## 导航路线

> 关于微信小程序知识点一共做了六个博客,涵盖大部分内容,有想学习的可以按照以下顺序查看
> [1.微信小程序的启动和渲染过程(加组件分类和组件的基本使用以及API分类)](https://blog.csdn.net/weixin_68658847/article/details/128674876)
> [2.微信小程序wxml的数据和事件的绑定,以及条件和列表的渲染](https://blog.csdn.net/weixin_68658847/article/details/128677326)
> [3.微信小程序wxss相关介绍、全局配置和tabbar知识以及发送网络数据请求(post,get)](https://blog.csdn.net/weixin_68658847/article/details/128679203)
> [4.微信小程序页面导航、编程式导航、页面事件、生命周期和WXS脚本](https://blog.csdn.net/weixin_68658847/article/details/128685487)
> [5.微信小程序自定义组件、组件的生命周期和组件通信(插槽)](https://blog.csdn.net/weixin_68658847/article/details/128693391)
> [6.微信小程序使用npm包、全局数据共享和分包](https://blog.csdn.net/weixin_68658847/article/details/128693730)
## 页面导航
**页面导航指的是页面之间的相互跳转。例如，浏览器中实现页面导航的方式有如下两种：**
- < a> 链接
- location.href

**小程序中实现页面导航的两种方式**
1.  声明式导航
	- 在页面上声明一个 < navigator> 导航组件
	- 通过点击 < navigator> 组件实现页面跳转
 2. 编程式导航
	- 调用小程序的导航 API，实现页面的跳转
#### 1.导航到tarBar页面
**tabBar页面指的是被配置为tabBar的页面。**
在使用< navigator>组件跳转到指定的 tabBar页面时，需要指定url属性和open-type属性，其中:
- url表示要跳转的页面的地址，必须以/开头
- open-type表示跳转的方式，必须为switchTab
![在这里插入图片描述](https://img-blog.csdnimg.cn/bc03b7c6433c45fd8893f5acb6f81cb0.png)
#### 2.导航到非 tabBar 页面
**非 tabBar 页面指的是没有被配置为 tabBar 的页面。**
在使用 < navigator> 组件跳转到普通的非 tabBar 页面时，则需要指定 url 属性和 open-type 属性，其中：
- url 表示要跳转的页面的地址，必须以 / 开头
- open-type 表示跳转的方式，必须为 navigate
![在这里插入图片描述](https://img-blog.csdnimg.cn/6ad1debea1e94586951a567eb9d3f132.png)**注意：为了简便，在导航到非 tabBar 页面时，open-type="navigate" 属性可以省略。**
#### 3.后退导航
如果要后退到上一页面或多级页面，则需要指定 open-type 属性和 delta 属性，其中：
- open-type 的值必须是 navigateBack，表示要进行后退导航
- delta 的值必须是数字，表示要后退的层级
示例代码如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/caffe858098549a0b0b0f0296ef17387.png)
**注意：为了简便，如果只是后退到上一页面，则可以省略 delta 属性，因为其默认值就是 1。**
## 编程式导航
#### 1.导航到tabBar页面
**调用 wx.switchTab(Object object) 方法，可以跳转到 tabBar 页面。其中 Object 参数对象的属性列表如下：**
| 属性     | 类型     | 是否必选 | 说明                                             |
| -------- | -------- | -------- | ------------------------------------------------ |
| url      | string   | 是       | 需要跳转的 tabBar 页面的路径，路径后不能带参数   |
| success  | function | 否       | 接口调用成功的回调函数                           |
| fail     | function | 否       | 接口调用失败的回调函数                           |
| complete | function | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

示例代码如下:
![在这里插入图片描述](https://img-blog.csdnimg.cn/9730b568cc81463c8aef29e715e5509a.png)
#### 2.导航到非 tabBar 页面
**调用 wx.navigateTo(Object object) 方法，可以跳转到非 tabBar 的页面。其中 Object 参数对象的属性列表如下：**
| 属性     | 类型     | 是否必选 | 说明                                             |
| -------- | -------- | -------- | ------------------------------------------------ |
| url      | string   | 是       | 需要跳转的 非tabBar 页面的路径，路径后不能带参数 |
| success  | function | 否       | 接口调用成功的回调函数                           |
| fail     | function | 否       | 接口调用失败的回调函数                           |
| complete | function | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

代码如下:
![在这里插入图片描述](https://img-blog.csdnimg.cn/5c11a1a557a84eabad328d3098e6adb7.png)
#### 3.后退导航
**调用 wx.navigateBack(Object object) 方法，可以返回上一页面或多级页面。其中 Object 参数对象可选的属性列表如下：**
| 属性     | 类型     | 默认值 | 是否必选 | 说明                                                  |
| -------- | -------- | ------ | -------- | ----------------------------------------------------- |
| delta    | number   | 1      | 否       | 返回的页面数，如果 delta 大于现有页面数，则返回到首页 |
| success  | function |        | 否       | 接口调用成功的回调函数                                |
| fail     | function |        | 否       | 接口调用失败的回调函数                                |
| complete | function |        | 否       | 接口调用结束的回调函数（调用成功、失败都会执行）      |

示例代码如下:
![在这里插入图片描述](https://img-blog.csdnimg.cn/42e73bfb52994ba299b909335444af08.png)
## 导航传参
#### 1. 声明式导航传参
navigator 组件的 url 属性用来指定将要跳转到的页面的路径。同时，路径的后面还可以携带参数：
- 参数与路径之间使用 ? 分隔
- 参数键与参数值用 = 相连
- 不同参数用 & 分隔

代码示例如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/8ae96d7469854162b8ab9b4094ba556f.png)
#### 2. 编程式导航传参
调用 wx.navigateTo(Object object) 方法跳转页面时，也可以携带参数，代码示例如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/6c8edbc40d344aa786c13bdf54e306f6.png)
#### 3. 在 onLoad 中接收导航参数
通过声明式导航传参或编程式导航传参所携带的参数，可以直接在 onLoad 事件中直接获取到，示例代码如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/faa7c29550cc463eb28b0b43027bb3a7.png)
## 页面事件
#### 下拉刷新
**1.什么是下拉刷新?**
下拉刷新是移动端的专有名词，指的是通过手指在屏幕上的下拉滑动操作，从而重新加载页面数据的行为。
**2.启用下拉刷新**
启用下拉刷新有两种方式：
1. 全局开启下拉刷新

	- 在 app.json 的 window 节点中，将 **enablePullDownRefresh** 设置为 true
2. 局部开启下拉刷新

	- 在页面的 .json 配置文件中，将 **enablePullDownRefresh** 设置为 true

**在实际开发中，推荐使用第 2 种方式，为需要的页面单独开启下拉刷新的效果。**

**3. 配置下拉刷新窗口的样式**
在全局或页面的 .json 配置文件中，通过 **backgroundColor** 和 **backgroundTextStyle** 来配置下拉刷新窗口的样式，其中：
-  backgroundColor 用来配置下拉刷新窗口的背景颜色，仅支持16 进制的颜色值
 - backgroundTextStyle 用来配置下拉刷新 loading 的样式，仅支持 dark 和 light

 **4. 监听页面的下拉刷新事件**
 在页面的 .js 文件中，通过 **onPullDownRefresh()** 函数即可监听当前页面的下拉刷新事件。
例如，在页面的 wxml 中有如下的 UI 结构，点击按钮可以让 count 值自增 +1：
![在这里插入图片描述](https://img-blog.csdnimg.cn/e25a17ef249b415792788dc4df5086a0.png)

**在触发页面的下拉刷新事件的时候，如果要把 count 的值重置为 0，示例代码如下：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/c0d8e7d072b94d9cadceea9b1624bd6d.png)

**5. 停止下拉刷新的效果**
当处理完下拉刷新后，下拉刷新的 loading 效果会一直显示，不会主动消失，所以需要手动隐藏下拉刷新的 loading 效果。此时，调用 **wx.stopPullDownRefresh()** 可以停止当前页面的下拉刷新。示例代码如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/012a1c092cdf46528e1416cc5b7c2e4b.png)
#### 上拉触底
**1.什么是上拉触底**
上拉触底是移动端的专有名词，通过手指在屏幕上的上拉滑动操作，从而加载更多数据的行为。

**2. 监听页面的上拉触底事件**
在页面的 .js 文件中，通过 **onReachBottom()** 函数即可监听当前页面的上拉触底事件。示例代码如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/d99446a134b5430ea21e5831bb7f2b8a.png)

**3. 配置上拉触底距离**
上拉触底距离指的是触发上拉触底事件时，滚动条距离页面底部的距离。
可以在全局或页面的 .json 配置文件中，通过 onReachBottomDistance 属性来配置上拉触底的距离。
小程序默认的触底距离是 50px，在实际开发中，可以根据自己的需求修改这个默认值。如下
```js
"onReachBottomDistance ":150  //可以不带单位,小程序默认px单位
```
#### 数据请求获取中添加loading效果,请求完毕关闭loading效果

可以通过 **wx.showloading(Object Object)** 添加loading效果

Object Object
相关参数:[官方文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html)
| 属性     | 类型     | 默认值 | 必填 | 说明                                             |
| -------- | -------- | ------ | ---- | ------------------------------------------------ |
| title    | string   |        | 是   | 提示的内容                                       |
| mask     | boolean  | false  | 否   | 是否显示透明蒙层，防止触摸穿透                   |
| success  | function |        | 否   | 接口调用成功的回调函数                           |
| fail     | function |        | 否   | 接口调用失败的回调函数                           |
| complete | function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行） |

```js
getfunction(){
	wx.showLoading({  //1.展示loading效果
	title:"数据加载中"
	})
}
```
可以通过**wx.hideLoading(Object object)** 添加关闭loading效果

Object object相关属性:[官方文档地址](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html)
| 属性       | 类型     | 默认值 | 必填 | 说明                                                         |
| ---------- | -------- | ------ | ---- | ------------------------------------------------------------ |
| noConflict | boolean  | false  | 否   | 目前 toast 和 loading 相关接口可以相互混用，此参数可用于取消混用特性 |
| success    | function |        | 否   | 接口调用成功的回调函数                                       |
| fail       | function |        | 否   | 接口调用失败的回调函数                                       |
| complete   | function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

**以上的综合代码案例**
```js
//避免用户多次请求,这里顺便演示一下节流阀使用

//在data定义isloading代表节流阀
data:{
	isloading:false  //节流阀初始值为false
}
getfunction(){
	//发送请求前将节流阀数据改为true
	this.setData({
		isloading:true
	})
	wx.showLoading({  //1.展示loading效果
	title:"数据加载中"
	})

	//发起请求
	wx.request({
		//省略其他代码
		complete:() => {
			wx.hideLoading()  //2.隐藏loading效果
				//发送请求结束将节流阀数据改为false
			this.setData({
				isloading:false
			})
		}
	})
}


//假设页面上拉触底时发送请求,那么需要判断isloading的值为false才能发请求,为true相当于上一次请求未完成,则不能发请求,避免用户同一时间多次发送请求
onReachBottom:function(){
	//当isloading的值为true,则返回,为false则通过可以发送请求
	if(this.data.isloading) return;
	//通过后调用上面函数发送请求
	this.getfunction()
}
```
效果图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/06a20a7b6b5e4184b9295e3efe5bb8ff.png)
## 自定义编译模式
![在这里插入图片描述](https://img-blog.csdnimg.cn/1bb9ca274e1a4903900cac7e291f9ed8.png)
**在以上的图片案例中,例如我们在app.json定义了首页为最先一级的(最先展示的页面),那么此时如果我们切换到联系我们页面,想要改变此页面的样式,但每次保存后都会重定向到首页,因为每次保存相当于刷新小程序,而首页也是优先展示的,那如果我们想要每次改完样式保存后,都停留在当前页面,那怎么做呢????这就要用到这个**自定义编译**模式了**

步骤:
**1.在编辑器点开如下图的列表,选择添加编译模式**
![在这里插入图片描述](https://img-blog.csdnimg.cn/8aa72e000e644d0fa31ba18a5f6df640.png)
**2.会有如下的弹出层**
![在这里插入图片描述](https://img-blog.csdnimg.cn/d796eb532bf54b1d92f96acde9b86fe6.png)
**如果需要传参数的话,也可以自定义在上面传递参数,每次打开次页面都会携带参数**
**模式名称也可以自定义,如"联系我们页面的开发与调试"**
**完成后直接保存即可,以后每次开发都会直接定位到我们期望的页面**

**删除保存的编译模式**
**1.还是找到那个下拉列表,找到我们保存的编译模式,  -----点击右边的小铅笔(编辑模式)**
![在这里插入图片描述](https://img-blog.csdnimg.cn/5753ebfc9d564cc181feee5e2ea7712a.png)
**2.点小铅笔进去后,弹出层左下角有个删除该模式**
![在这里插入图片描述](https://img-blog.csdnimg.cn/a1d0324fdff24b53a4af0c24baf295c8.png)
**点击删除该模式就删除了,非常简单,到此为止,自定义编译模式就全部结束了**
## 生命周期
### 生命周期的分类

> 在小程序中，生命周期分为两类，分别是：
>  应用生命周期
> 特指小程序从启动 -> 运行 -> 销毁的过程
>  页面生命周期
> 特指小程序中，每个页面的加载 -> 渲染 -> 销毁的过程
> 其中，页面的生命周期范围较小，应用程序的生命周期范围较大，如图所示：
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/99418cec43a24822a036963366efb517.png)

### 什么是生命周期函数?

> 生命周期函数：是由小程序框架提供的内置函数，会伴随着生命周期，自动按次序执行。
> 生命周期函数的作用：允许程序员在特定的时间点，执行某些特定的操作。例如，页面刚加载的时候，可以在 onLoad 生命周期函数中初始化页面的数据。

**注意：生命周期强调的是时间段，生命周期函数强调的是时间点。**
#### 生命周期函数的分类
小程序中的生命周期函数分为两类，分别是： 
 1. 应用的生命周期函数
	- 特指小程序从启动 -> 运行 -> 销毁期间依次调用的那些函数
2. 页面的生命周期函数

	- 特指小程序中，每个页面从加载 -> 渲染 -> 销毁期间依次调用的那些函数
	-

#### 应用的生命周期函数
**小程序的应用生命周期函数需要在 app.js 中进行声明，示例代码如下：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/efa4b5ec5af94109932e3ad7a24ab759.png)

**小程序的页面生命周期函数需要在页面的 .js 文件中进行声明，示例代码如下：**

![在这里插入图片描述](https://img-blog.csdnimg.cn/ae2ed57b5dc8469193e721a591e1e457.png)

## WXS
**1. 什么是WXS**
WXS（WeiXin Script）是小程序独有的一套脚本语言，结合 WXML，可以构建出页面的结构。
**2. wxs 的应用场景**
wxml 中无法调用在页面的 .js 中定义的函数，但是，wxml 中可以调用 wxs 中定义的函数。因此，小程序中 wxs 的典型应用场景就是“过滤器”。
**3. wxs 和 JavaScript 的关系***
虽然 wxs 的语法类似于 JavaScript，但是 wxs 和 JavaScript 是完全不同的两种语言：
1. wxs 有自己的数据类型

	 - number 数值类型、string 字符串类型、boolean 布尔类型、object 对象类型、
	 - function 函数类型、array 数组类型、    date 日期类型、      regexp 正则
2. wxs 不支持类似于 ES6 及以上的语法形式

	 - 不支持：let、const、解构赋值、展开运算符、箭头函数、对象属性简写、etc...
	 - 支持：var 定义变量、普通 function 函数等类似于 ES5 的语法
3. wxs 遵循 CommonJS 规范

	 - module 对象
	 - require() 函数
	 - module.exports 对象

**1.内嵌WPS脚本**
wxs 代码可以编写在 wxml 文件中的 < wxs> 标签内，就像 Javascript 代码可以编写在 html 文件中的 < script> 标签内一样。
wxml 文件中的每个 < wxs>< /wxs> 标签，必须提供 module 属性，用来指定当前 wxs 的模块名称，方便在 wxml 中访问模块中的成员：
![在这里插入图片描述](https://img-blog.csdnimg.cn/c6e0c4428bd142c4aadb60d5f376b09f.png)
**2. 定义外联的 wxs 脚本**
wxs 代码还可以编写在以 .wxs 为后缀名的文件内，就像 javascript 代码可以编写在以 .js 为后缀名的文件中一样。示例代码如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/723dbf85a4954d098d66adae9c3b5455.png)
**3. 使用外联的 wxs 脚本**
在 wxml 中引入外联的 wxs 脚本时，必须为 <wxs> 标签添加 module 和 src 属性，其中：
 - module 用来指定模块的名称
 - src 用来指定要引入的脚本的路径，且必须是相对路径

示例代码如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/9c32b6b298ac44909a3ce0b506a74969.png)
##### wxs特点
**1. 与 JavaScript 不同**
为了降低 wxs（WeiXin Script）的学习成本， wxs 语言在设计时借大量鉴了 JavaScript 的语法。但是本质上，wxs 和 JavaScript 是完全不同的两种语言！

**2. 不能作为组件的事件回调**
wxs 典型的应用场景就是“过滤器”，经常配合 Mustache 语法进行使用，例如：
![在这里插入图片描述](https://img-blog.csdnimg.cn/bb0261ae4d2a4e59adedcd44e714d271.png)
但是，在 wxs 中定义的函数不能作为组件的事件回调函数。例如，下面的用法是错误的：
![在这里插入图片描述](https://img-blog.csdnimg.cn/b4b769bd250a46fe89b2a9718753d26a.png)

**3.隔离性**
隔离性指的是 wxs 的运行环境和其他 JavaScript 代码是隔离的。体现在如下两方面：
1. wxs 不能调用 js 中定义的函数
2. wxs 不能调用小程序提供的 API

**4. 性能好**
- 在 iOS 设备上，小程序内的 WXS 会比 JavaScript 代码快 2 ~ 20 倍
- 在 android 设备上，二者的运行效率无差异
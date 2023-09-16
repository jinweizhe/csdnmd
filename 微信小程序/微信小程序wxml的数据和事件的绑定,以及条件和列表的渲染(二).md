## 导航路线

> 关于微信小程序知识点一共做了六个博客,涵盖大部分内容,有想学习的可以按照以下顺序查看
> [1.微信小程序的启动和渲染过程(加组件分类和组件的基本使用以及API分类)](https://blog.csdn.net/weixin_68658847/article/details/128674876)
> [2.微信小程序wxml的数据和事件的绑定,以及条件和列表的渲染](https://blog.csdn.net/weixin_68658847/article/details/128677326)
> [3.微信小程序wxss相关介绍、全局配置和tabbar知识以及发送网络数据请求(post,get)](https://blog.csdn.net/weixin_68658847/article/details/128679203)
> [4.微信小程序页面导航、编程式导航、页面事件、生命周期和WXS脚本](https://blog.csdn.net/weixin_68658847/article/details/128685487)
> [5.微信小程序自定义组件、组件的生命周期和组件通信(插槽)](https://blog.csdn.net/weixin_68658847/article/details/128693391)
> [6.微信小程序使用npm包、全局数据共享和分包](https://blog.csdn.net/weixin_68658847/article/details/128693730)
## 1.数据绑定的基本原则
1. 在data中定义数据
2. 在wxml中使用数据
#### 在data中定义页面的数据
**在页面对应的.js文件中,把数据定义到data对象中即可**
```js
Page({
	data:{
		//字符串类型的数据
		info:'init data',
		//数组类型的数据
		msgList:[{msg:'hello'},{msg:'world'}]
	}
})
```
**Mustache语法的格式**
把data中的数据绑定到页面中渲染，使用Mustache语法（双大括号）将变量包起来即可。语法格式为:
```html
<view> {{要绑定的数据名称}} </view>
```
**Mustache语法的应用场景**
- 绑定内容
- 绑定属性(如图片的src属性)
- 运算(三元运算,算术运算等)

**绑定属性案例**
```js
Page({
	data:{
		info:'https://xiaoji.img',
	}
})
```
```html
<image src="{{info}}"></image>
```
**三元运算案例**
```js
Page({
	data:{
		randomNum:Math.random() * 10, //生成10以内的随机数
	}
})
```
```html
<view>{{ randomNumber >=5 ? '随机数大于五' : '随机数小于五'}}</view>
```
## 2.事件绑定
**事件的概念:**
事件是渲染层到逻辑层的通讯方式。通过事件可以将用户在渲染层产生的行为，反馈到逻辑层进行业务的处理。
**小程序中常用的事件**
| 类型   | 绑定方式                 | 事件描述                                    |
| ------ | ------------------------ | ------------------------------------------- |
| tap    | bindtap或 bind:tap       | 手指触摸后马上离开，类似于HTML中的click事件 |
| input  | bindinput 或 bind:input  | 文本框输入事件                              |
| change | bindchange或 bind:change | 状态改变时触发                              |

**事件对象的属性列表**
当事件回调触发的时候,会收到一个事件对象event,它的详细属性如下表所示:
| 属性           | 类型       | 说明                                        |
| -------------- | ---------- | ------------------------------------------- |
| type           | String     | 事件类型                                    |
| timeStamp      | Integer    | 页面打开到触发事件所经过的毫秒数            |
| **target**     | **Object** | **触发事件的组件的一些属性值集合**          |
| currentTarget  | Object     | 当前组件的一些属性值集合                    |
| **detail**     | **Object** | **额外的信息**                              |
| touches        | Array      | 触摸事件,当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | Array      | 触摸事件,当前变化的触摸点信息的数组         |

上面加粗的可以重点关注一下
**target和currentTarget的区别:**
target是触发该事件的源头组件，而currentTarget则是当前事件所绑定的组件(类似html的事件委托,currentTarget为父组件,target就是子组件,子组件向外冒泡到父组件身上,父组件身上绑定了事件,此时这个事件的e.target就是内部子组件,e.currentTarget就是当前的绑事件的父组件)
![在这里插入图片描述](https://img-blog.csdnimg.cn/1d68b57c6cd04b5aa02671423337e67e.png)
### bingtap的语法格式:
在小程序中,不存在html中的onclick鼠标点击事件,而是通过tap事件来响应用户的触摸行为.
1. 通过bingtap,可以为组件绑定tap触摸事件,语法如下:
```html
<button type='primary' bindtap='btnTapHandler'>打印事件对象</button>
```
2. 在页面的.js文件中定义对应的事件处理函数,事件参数通过形参event(一般简写成e),来接收:
```js
Page({
	btnTapHandler(e){
		//上面按钮的tap事件处理函数
		console.log(e) //事件参数对象 e
	}
})
```
### 在事件处理函数中为data中的数据赋值
**通过调用this.setData(dataObject)方法,可以给页面data中的数据重新赋值,示例如下:**
```js
//页面中的.js文件
Page({
	data:{
		count:0
	},
	//修改count的值
	changeCount(){
		this.setData({
			count:this.data.count+1
		})
	}
})
```
```html
<button type='primary' bindtap='changeCount'>+1</button>
```
### 事件传参
小程序中的事件比较特殊,不能在绑定事件的同时为事件处理函数传递参数,例如,下面代码将不能正常工作:
```html
<button type=""primary bindtap='btnHandler(123)'>事件传参</button>
```
**因为小程序会把 bindtap的属性值，统一当作事件名称来处理，相当于要调用一个名称为 btnHandler(123)的事件处理函数。**

**可以为组件提供data-*自定义属性传参，其中*代表的是参数的名字，示例代码如下(里面的{{}}不能省略,不然得到的参数就是一个普通的字符串了):**
```html
<button type=""primary bindtap='btnHandler' data-info="{{234}}">事件传参</button>
```
最终:
- info会被解析为参数的名字
- 数值⒉会被解析为参数的值

**获取参数值**
**在事件处理函数中，通过event.target.dataset.参数名即可获取到具体参数的值,
示例代码如下:**
```js
btnHandler(event){
	//dataset 是一个对象,包含了所有通过data-* 传递过来的参数项
	console.log(event.target.dataset)
	//通过dataset 可以访问到具体的值
	console.log(event.target.dataset.info)
}
```
### bindinput的语法格式
**在小程序中,通过input事件来响应文本框的输入事件,语法格式如下:**
1. 通过binginput,可以为文本框绑定输入事件
```html
<input bindinput="inputHandler"></input>
```
2. 在页面的.js文件中,定义事件处理函数
```js
inputHandler(e){
	//e.detail.value 是变化过后,文本框最新的值
	console.log(e.detail.value)
}
```
#### 实现文本框和data之间的数据同步
实现步骤:
1. 定义数据
2. 渲染结构
3. 美化样式
4. 绑定input事件处理函数
##### 1.定义数据
```js
Page({
	data:{
		msg:'你好'
	}
})
```
##### 2.渲染结构
```html
<input value="{{msg}}" bindinput="inputHandler"></input>
```
##### 3.美化样式
```css
input{
	border:1px solid #eee;
	padding:5px;
	margin:5px;
	border-radius:3px;
}
```
##### 4.绑定input事件处理函数
```js
inputHandler(e){
	//e.detail.value 是变化过后,文本框最新的值
	//console.log(e.detail.value)
	this.setData({
		msg:e.detail.value
	})
}
```
## 3.条件渲染
**在小程序中，使用wx:if="{{condition}}”来判断是否需要渲染该代码块:**
```html
<view wx:if="condition">True</input>
```
**也可以用wx:elif 和 wx:else来添加else 判断:**
```html
<view wx:if="{{type===1}}">男</input>
<input wx:elif="{{type===2}}">女</input>
<view wx:else>保密</view>
```
**结合block使用wx:if**

> 如果要一次性控制多个组件的展示与隐藏,可以使用一个< block> < /block>标签将多个组件包装起来,并在< block>标签上使用wx:if控制属性,示例如下:
```html
<block wx:if="{{true}}">
	<view>view1</view>
	<view>view2</view>
</block>
```
**注意:< block>并不是一个组件,它只是一个包裹性质的容器,不会在页面中做任何渲染(也可以使用其他的块包裹,但是其他的块会被渲染到页面上)**
##### hidden
**在小程序中,直接使用hidden="{{condition}}"也能控制元素的显示与隐藏**
```html
<view hidden="{{condition}}"> 条件为true隐藏,false显示 </view>
```
##### wx:if与hidden的对比
1. 运行方式不同
	- wx:if以动态创建和移除元素的方式,控制元素的显示和隐藏
	- hidden以切换样式的方式(display:none/block),控制元素的显示与隐藏
2. 使用建议
	- 频繁切换时,建议使用hidden
	- 控制条件复杂时,建议使用wx:if搭配wx:elif、wx:else进行展示与隐藏的切换
## 4.列表渲染
**通过wx:for可以根据指定的数组,循环渲染重复的组件结构,语法示例如下:**
```html
<view wx:for="{{array}}">
	索引是:{{index}} 当前项是:{{item}}
</view>
```
**默认情况下,当前循环项的索引用index表示;当前循环项用item表示**
### 手动指定索引和当前项的变量名*(了解即可)
- 使用wx:for-index可以指定当前循环项的索引的变量名
- 使用wx:for-item可以指定当前项的变量名
```html
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
	索引是:{{idx}} 当前项是:{{itemName}}
</view>
```
### wx:key的使用
**类似于Vue列表渲染中的:key，小程序在实现列表渲染时，也建议为渲染出来的列表项指定唯一的 key值,从而提高渲染的效率，示例代码如下:**
```html
//data 数据
data:{
	userlist:[
		{id:1,name:"小红"},
		{id:2,name:"小黄"},
		{id:3,name:"小白"}
	]
}


//wxml结构,wx:key里面不需要Mustache语法,不然报错
<view wx:for="{{userlist}}" wx:key="id">{{item.name}}</view>
```
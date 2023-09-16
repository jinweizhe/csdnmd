

# lib-flexible是什么？

[`lib-flexible`](https://github.com/amfe/lib-flexible)是一个制作H5适配的开源库，可以[点击这里](https://github.com/amfe/lib-flexible/archive/master.zip)下载相关文件，获取需要的JavaScript和CSS文件

github地址：https://github.com/amfe/lib-flexible

官方文档地址：https://github.com/amfe/article/issues/17

参考：https://www.jianshu.com/p/04efb4a1d2f8



由于在2014年之前，视口单位(vw、vh)还没得到个浏览器厂商的支持，淘宝的前端团队借助js 控制viewport 的能力，使用rem 单位，去模拟出vw的特性来实现整个页面内容的等比例缩放，在项目中引入flexible后，我们在页面上统一使用rem单位来布局页面。

## 使用rem模拟vw特性适配多种屏幕尺寸

rem是以根元素的字体大小为基准。例: html的font-size: 16px，则1rem = 16px

Flexible将整个页面的宽度切成了10份，然后将计算出来的页面宽度的1/10设置为html节点的fontSize，也就意味着，之后我们在当前页面的html节点的子节点上应用rem为单位时都是按照页面比例来计算的。

```js
var docEl = document.documentElement;
function setRemUnit() {
	var rem = docEl.clientwidth / 10;
  docEl.style.fontSize = rem + 'px ' ;
}
setRemUnit();
```

## 控制viewport的width和scale 值适配高倍屏显示

设置viewport的width为device-width，改变浏览器viewport的默认宽度为理想的视口宽度，从而使得用户可以看到完整的布局的内容。

等比设置viewport的initial-scale、maximum-scale、minimum-scale的值，从而实现1物理像素=1css像素，以适配高倍屏的显示效果（就是在这个地方规避了的“1px问题”)

```js
var metaEL = doc.querySelector('meta[name="viewport"]');
var dpr = window.devicePixelRatio;
var scale = 1 / dpr;
metaEl.setAttribute(
' content',
'width=device-width，initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale='+ scale + ', user-scalable=no'
)
```

# 使用方法

[`lib-flexible`](https://github.com/amfe/lib-flexible)库的使用方法非常的简单，只需要在Web页面的`<head></head>`中添加对应的`flexible_css.js,flexible.js`文件：

第一种方法是将文件下载到你的项目中，然后通过相对路径添加:

```html
<script src="build/flexible_css.debug.js"></script>
<script src="build/flexible.debug.js"></script>
```

或者直接加载阿里CDN的文件：

```html
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
```

另外强烈建议对JS做**内联处理**，在所有资源加载之前执行这个JS。执行这个JS后，会在`<html>`元素上增加一个`data-dpr`属性，以及一个`font-size`样式。JS会根据不同的设备添加不同的`data-dpr`值，比如说`2`或者`3`，同时会给`html`加上对应的`font-size`的值，比如说`75px`。

如此一来，页面中的元素，都可以通过`rem`单位来设置。他们会根据`html`元素的`font-size`值做相应的计算，从而实现屏幕的适配效果。

事实上 flexible.js做了这几样事情：

- 动态改写`<meta>`标签
- 给`<html>`元素添加`data-dpr`属性，并且动态改写`data-dpr`的值
- 给`<html>`元素添加`font-size`属性，并且动态改写`font-size`的值

# 把视觉稿中的`px`转换成`rem`

一般UI给我们的稿子大小是750的。就以这个为例子：在flexible.js中，把750px分为10份，1rem 为 75px。所以font-size的基准值为75px；

css换算成rem公式为：

- px值 / 75 = rem	例如：100px=100/75=1.33rem

# 如何快速计算

在实际生产当中，如果每一次计算`px`转换`rem`，或许会觉得非常麻烦，或许直接影响大家平时的开发效率。为了快进行转换，可以使用CSSREM插件，用它就可以在我们输入px值后自动转换rem。

## CSSREM

[CSSREM](https://github.com/flashlizi/cssrem)是一个CSS的`px`值转`rem`值的自动完成插件。先来看看插件的效果：

![Flexible实现手淘H5页面的终端适配](https://camo.githubusercontent.com/141679719a558d0dc5320bef6a6ce830f72f32dfb8f46b63e7d1b96195ecd090/687474703a2f2f7777772e773363706c75732e636f6d2f73697465732f64656661756c742f66696c65732f626c6f67732f323031352f313531312f63737372656d2e676966)

## 安装方法如下

安装插件：

![在这里插入图片描述](https://segmentfault.com/img/remote/1460000022509492)

**修改配置参数**：

![在这里插入图片描述](https://segmentfault.com/img/remote/1460000022509494)



**当设计图为750时在下图中这里填写75**：

```css
root font-size (unit: px), default: 16
这代表根字体大小，默认是16px，即1rem = 16px,我们这里把他改为75。
cssrem.fixedDigits px转rem小数点最大长度，默认：6。
```

![img](https://segmentfault.com/img/remote/1460000022509495)



**修改完参数后我们只要输入px值插件就会自动算出rem值，效果如下图：**

![在这里插入图片描述](https://segmentfault.com/img/remote/1460000022509493)



# viewport的meta标签

该标签主要用来告诉浏览器如何规范的渲染Web页面，而你则需要告诉它视窗有多大。在开发移动端页面，我们需要设置meta标签如下：

```xml
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

代码以显示网页的屏幕宽度定义了视窗宽度。网页的比例和最大比例被设置为100%。

而我们在使用flexible.js时候就只需要像下面这样写`<meta>`标签，或者干脆省略下面的标签：

```xml
<meta name="viewport" content="width=device-width, user-scalable=no">
```

或者我们也可以像flexible的github例子中那样写：

```xml
<meta content="maximum-dpr=2" name="flexible" />
```

原理：flexible.js会先去获取页面上[name="viewport"]或[name="flexible"]的meta标签，如果有就直接根据获取到的值来判断，如果没有，会自己创建一个meta标签，我们看一下源码就知道了。

# flexible源码解析

```javascript
// 首先是一个立即执行函数，执行时传入的参数是window和document
(function flexible (window, document) {
  var docEl = document.documentElement // 返回文档的root元素
  var dpr = window.devicePixelRatio || 1 
  // 获取设备的dpr，即当前设置下物理像素与虚拟像素的比值

  // 调整body标签的fontSize，fontSize = (12 * dpr) + 'px'
  // 设置默认字体大小，默认的字体大小继承自body
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  // 设置root元素的fontSize = 其clientWidth / 10 + ‘px’
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()


    // 当我们页面尺寸大小发生变化的时候，要重新设置下rem 的大小
    window.addEventListener('resize', setRemUnit)
        // pageshow 是我们重新加载页面触发的事件
    window.addEventListener('pageshow', function(e) {
        // e.persisted 返回的是true 就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem 的大小
        if (e.persisted) {
            setRemUnit()
        }
    })

  // 检测0.5px的支持，支持则root元素的class中有hairlines
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
```

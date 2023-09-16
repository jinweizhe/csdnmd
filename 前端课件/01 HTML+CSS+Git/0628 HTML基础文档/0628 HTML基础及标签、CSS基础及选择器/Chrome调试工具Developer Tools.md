# 调试工具的打开

- **点击右键，然后选择检查。**
- **Chrome的工具中找到更多工具--开发者工具。**
- **快捷方式: Ctrl+Shift+I。**
- **直接按F12。**

打开后我们看到如下界面（目前最新版的调试工具面版已经支持中文，给谷歌工程师点赞）：

![image-20220628152802386](C:/Users/Jinxizhen/AppData/Roaming/Typora/typora-user-images/image-20220628152802386.png)

![image-20211028230252764](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028230252764.png)



Develop Tools功能比较多，本文主要掌握比较常用的几个面板：Elements、Console、Sources和Network。 

# Element 元素面板

## 查看HTML元素

元素面板就是用来查看、编辑网页的HTML元素的。包括HTML和CSS。左侧就是对页面HTML结构的查看与编辑，你可以直接在某个元素上双击修改元素的属性， 或者你点右键选"Edit as Html"直接对元素的HTML进行编辑，或者删除某个元素，所有的修改都会即时在页面上得到呈现。
你还可以对某个元素进行监听，在JS对元素的属性或者HTML进行修改的时候，直接触发断点，跳转到对改元素进行修改的JS代码处。

![image-20211028231021676](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028231021676.png)



首先点击下左上角的按钮，然后我们只要把鼠标悬停在网页元素上，即可查看到对应的元素。

其中包括它的HTML标签与对应的属性，还有对应的样式与原型（包括盒子模型）。

 然而，它能做的不仅仅如此，我甚至们可以任意的进行编辑，对HTML元素可以进行改动，对它的样式也是可以自由调整！

这就意味着，调整一个网页的样式可以实时的在chrome上进行微调，而不用每次修改后都要刷新资源后才能看效果。

这简直是太棒了，有木有？

## 修改HTML标签

在元素面板左侧先用鼠标选中标签

![image-20211102200057873](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211102200057873.png)

然后按下F2可以直接修改标签

![image-20211102200152575](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211102200152575.png)

## 修改CSS样式

元素面板右侧可以对元素的CSS进行查看与编辑修改:

![image-20211028231307384](C:/Users/Jinxizhen/AppData/Roaming/Typora/typora-user-images/image-20211028231307384.png)

元素面板的右侧可以对元素的CSS进行查看与编辑修改，你还可以通过这里看到各CSS选择器设置的CSS 的覆盖情况：下面可以看到元素占的空间情况(宽、高、Padding、Margin神马的):
![image-20211028231500548](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028231500548.png)



![image-20211028231726194](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028231726194.png)

注意到上面的属性没有？这个很有用哦，可以让你看到元素具有的方法与属性，比查API手册要方便得多哦(要注意某些方法和属性在IE、FireFox等其他浏览器下面的支持情况哦)。

## 其他操作

1. Ctrl+滚轮 可以放大开发者工具代码大小。 
2. 右边 CSS 样式可以改动数值（左右箭头或者直接输入）和查看颜色。 
3. Ctrl + 0 复原浏览器大小。 
4. 如果点击元素，发现右侧没有样式引入，极有可能是类名或者样式引入错误。
5. 如果有样式，但是样式前面有黄色叹号提示，则是样式属性书写错误



# Console 控制台面板

## 查看信息输出 

控制台面板与各种开发工具的控制台类似，主要是用于控制台信息输出。

遇到资源文件加载失败、网络请求失败等，或者一些提示信息，会打印到此处，像这样：

![image-20211028231920111](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028231920111.png)

## 查看JavaScript API

这个除了查看错误信息、打印调试信息(console.log())、写一些测试脚本以外，还可以当作JavaScript API查看用。例如我想查看console都有哪些方法和属性，我可以直接在Console中输入"console"并执行:

 ![image-20211028232110940](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028232110940.png)

## 查看变量

直接在控制台中输入变量名（当然需要这个变量在作用域内），即可查看。

## 编写js代码

这就意味着我们可以在控制台自己定义变量、写函数，做个简单的网页脚本完全不成问题。

![image-20211028232253687](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028232253687.png)

# Sources 来源（资源）面板

## 查看资源

资源面板就是将浏览器加载当前页面时，所用到的资源文件的列表，包括CSS、JS、图片等的内容，同时还可以查看到存储相关的如Cookies、HTML5的Database和LocalStore等，你可以对存储的内容编辑和删除。它会按资源的URL来进行分类，如图所示：

这里的CSS文件有一个好玩的特性，你可以直接修改CSS文件，并且修改即时生效哦

![image-20211028232439107](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028232439107.png)



## 断点调试

该面板最关键用处的就是可以调试js。我们可以找到对应的js文件，然后设置断点，进行调试。

在这里调试非常的方便，我们可以添加要观察的变量，它可以是在作用域内已定义的变量，也可以是通过DOM获取到的元素，或者通过各种方式得出的变量。

它可以清晰的展示出变量的所有属性、事件、以及原型链。

![image-20211028232552042](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028232552042.png)

## 查看变量

例如，我们要观察input元素，我们可以在这里看到它的所有属性，以及它的事件与原型：

![image-20211028232836376](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028232836376.png)



 

# Network 网络面板

## 网络请求

网络面板主要是将加载页面过程中，发送的网络请求（包括加载资源）按照时间线的形式呈现，能够看到请求状态，以及加载的时间等。对于分析网站请求的网络情况、查看某一请求的请求头和响应头还有响应内容很有用，特别是在查看Ajax类请求的时候，非常有帮助。注意是在你打开Chrome开发者工具后发起的请求，才会在这里显示的哦。

点击左侧某一个具体去请求URL，可以看到该请求的详细HTTP请求情况:

![image-20211028233004043](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028233004043.png)

## 请求详细信息

我们可以查看每个请求的详细信息，包括请求的头部、返回值等（这个对于前后端联调DEBUG时非常有用）: 

![image-20211028233101774](https://gitee.com/Jinxizhen/pic_resource/raw/master/images/image-20211028233101774.png)

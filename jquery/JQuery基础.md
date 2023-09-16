# JQuery

## 概述

```
a仓库：可以把很多东西放到这个仓库里面。找东西只需要到仓库里面查找到就可以了

js库:是封装的特定的集合(方法和函数)

query查询，意思就是查询js

jq封装了js常用的代码，优化了dom操作、事件处理 动画设计和ajax交互
```

## 常用js库

```
jquery prototype yui dojo ext js 移动端的zepto
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/074af332c53f48fcae901fb0df0eaa76.png#pic_center)
## 隐藏元素

```
 $("div").hide();
```

## 顺序

```
先有dom元素，才能执行js代码，js代码不能写在dom元素上
```

### 解决方法

```
等着页面dom加载完毕再去执行js代码
	加载dom代码
	     $(document).ready(function(){
       		 $("div").hide();
       	 })
      等价于
       ||
       ||
      等价于
      	入口函数
       	 $(function(){
            $("div").hide();
        	})
```

## 顶级对象$

```
$符号可以用jquery代替，是jquery的顶级对象
$(function(){
            $("div").hide();
        	})

jquery(function(){
            $("div").hide();
        	})
```

## jq对象和dom对象

```
1.dom对象：用原生js获取过来的就是dom对象
	var my = document.querySelector("div");//my是dom对象
        console.dir(my);//控制台打印
2.jq对象，用jq方式获取过来的对象就是jq对象，本质通过$把dom元素进行了报装
 	$("div")//$("div")是jq对象
        console.dir($("div"));
3.jq对象只能使用jq方法，dom对象使用原生的js属性和方法
	 my.style.display = "none";//将方式1的dom对象隐藏
	 $("div").style.display = "none";//这个$("div")是jq对象，不能使用原生的js属性和方法
	 my.hide();//my是一个dom对象不能使用jq的hide方法
```

## jq对象和dom对象相互转换

```
1.dom对象转换为jq对象：$(DOM对象)
2.jq对象转换为dom对象
	// 第一种方法
$('div')[index]   index是索引号
	// 第二种方法
$('div').get(index) index是索引号		
```

## jq选择器

```
原生 JS 获取元素方式很多，很杂，而且兼容性情况不一致，因此 jQuery 给我们做了封装，使获取元素统一标准。

语法：$("选择器") 里面选择器直接写CSS选择器即可，但是要加引号


名称	用法	描述
ID选择器	$("#id")	获取指定ID的元素
全选选择器	$('*')	匹配所有元素
类选择器	$(".class")	获取同一类class的元素
标签选择器	$(".div")	获取同一类标签的所有元素
并集选择器	$("div,p,li")	选取多个元素
交集选择器	$("li.current")	交集元素

jQuery层级选择器
名称	用法	描述
子代选择器	$("ul>li")	使用>号，获取亲儿子层级的选择器；注意，并不会获取孙子层级的元素
后代选择器	$("ul li")	使用空格，代表后代选择器，获取 ul 下的所有 li 元素，包括孙子等

jQuery筛选选择器
选取 ul 里面的 第一个 li
$("ul li:first").css("color","red");
语法	用法	描述
: first	$('li:first')	获取第一个li元素
: last	$('li:last')	获取最后一个li元素
: eq(index)	$("li:eq(2)")	获取到的li元素中，选择索引号为2的元素，索引号index从0开始
: odd	$("li:odd")	获取到的li元素中，选择索引号为奇数的元素
: even	$("li:even")	获取到的li元素中，选择索引号为偶数的元素

内容相关的
:contains(text) 内容包含指定文本的text
:empty  内容为空
:parent 内容不为空
:has(selector) 内容包含某个选择器的某个标签
console.log($("ul li:contains(003)"));
console.log($("ul li:empty"));
console.log($("ul li:parent"));
console.log($("ul:has(.red)"));
```

###  jQuery筛选方法

```
语法	用法	说明
parent()	$("li").parent();	查找父级，最近一级的父元素
parents()  parents($("div")) 查找所有的父级元素,可以指定
children(selector)	$("ul").children("li")	相当于$("ul>li"),最近一级(亲儿子)
find(selector)	$("ul").find("li")	相当于$("ul li") 后代选择器
siblings(selector)	$(".first").siblings("li")	查找兄弟节点，不包括自己本身
nextAll([expr])	$(".first").nextAll()	查找当前元素之后所有的同辈元素
prevtAll([expr])	$(".last").prevAll()	查找当前元素之前所有的同辈元素
hasClass(class)	$('div').hasClass("protected")	检查当前的元素是否含有某个特定的类，如果有，则返回true	
eq(index)	$("li").eq(2);	相当于$("li:eq(2)"),index从0开始

重点记住：parent() children() find() siblings() eq()
```

## jQuery隐式迭代(jQuery设置样式)

```
$('div').css('属性','值')

遍历内部DOM元素(伪数组形式存储)的过程就叫做 隐式迭代

简单理解: 给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们调用

 隐式迭代就是把匹配的所有元素内部进行遍历循环，给每一个元素添加css这个方法
```

###  jQuery排他思想

```
想要多选一的效果，排他思想：当前元素设置样式，其余的兄弟元素清除样式。
```

###  jQuerty链式编程

```
链式编程是为了节省代码量，看起来更优雅。使用链式编程一定注意是哪个对象执行样式.

当前元素变色，其余兄弟元素不变色
$(this).css("color","red").siblings().css("color","");
```

## jQuery样式操作

### jQuery修改样式css方法

```
jQuery 可以使用 css 方法来修改简单元素样式； 也可以操作类，修改多个样式

参数只写属性名,则返回属性值
$(this).css("color");

参数是属性名,属性值,逗号分隔,是设定一组样式。属性需要加引号,值是数字可不加单位和引号
$(this).css("color",300);
单独设置的话需要有-线
$("li").css("font-size","14px")

对象形式的话,属性名需要是驼峰命名法
参数可以是对象形式,方便设置多组样式。属性名和属性值用冒号隔开,属性可以不用加引号
$(this).css({
    "color":"red",
    "width": 400,
    "height": 400,
    // 如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号
    backgroundColor: "red"
    
})

//参数一:css属性名
//参数二:回调函数,回调函数第一个参数为索引号,第二个参数为当前索引号的css属性对应的值
 $("li").css("font-size",function(index,oldValue){
            return 5*index+"px"
        })
```
### 获取css样式的方法
```
//取值
//返回所有li的第一个li的属性
let res2=$("li").css("font-size")
console.log(res2);
```
### jQuery设置类样式方法
```
作用等同于以前的 classList，可以操作类样式， 注意操作类里面的参数不要加点。
// 1.添加类
$("div").addClass("current");

//找到所有的ul,索引号为奇数添加small偶数添加big
参数:回调函数,函数内两个参数,分别为index索引,当前标签已经存在的class;
$("ul").addClass(function (index, oldClass) {
    console.log(index, oldClass);
    return index % 2 ? "big" : "small"
   })

// 2.移除类
$("div").removeClass("current");

// 3.切换类
$("div").toggleClass("current");
```

### jQuery类操作和className区别

```
原生 JS 中的 className 会覆盖元素原先里面的类名
jQuery里面类操作只是对指定类进行操作，不影响原先的类名

one.className = "two";  //one的类名直接改为two
$(".one").addClass("two");  这个addClass相当于追加类名 不影响以前的类名

$(".one").removeClass("two");//two的类名直接移除
```

## jQuery动画效果

```
显示隐藏：
	show();
	hide();
	toggle();
滑动效果：
	slideDown();
	slideUp();
	slideToggle();
淡入淡出：
	fadeIn();
	fadeOut();
	fadeToggle();
	fadeTo();
自定义动画：
	animate();
```



### 显示效果

```
// 显示语法规范
show([speed,[easing],[fn]])       //中括号表示参数都可以省略
$("div").show();

参数：
参数都可以省略， 无动画直接显示。
speed：三种预定速度之一的字符串(“slow”(慢一点),“normal”(正常), or “fast”(快一点))或表示动画时长的毫秒数值(如：1000)。

easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。

fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。
```

### 隐藏效果

```
// 隐藏语法规范
hide([speed,[easing],[fn]])
$("div").hide();

参数：

参数都可以省略， 无动画直接显示。
speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。
```

### 切换效果

```
// 切换语法规范
toggle([speed,[easing],[fn]])
$("div").toggle();

参数：

参数都可以省略， 无动画直接显示。
speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”。
fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

建议：平时一般不带参数，直接显示隐藏即可
```

## 滑动效果

### div下滑动

```
// 下滑动
slideDown([speed,[easing],[fn]]) 
$("div").slideDown();
```

### div上滑动

```
// 上滑动
slideUp([speed,[easing],[fn]]) 
$("div").slideUp();
```

### 滑动切换

```
// 滑动切换效果
slideToggle([speed,[easing],[fn]]) 
$("div").slideToggle();
```

### 事件切换

```
语法:hover([over,]out)

over: 鼠标移到元素上要触发的函数(相当于mouseenter)
out: 鼠标移出元素要触发的函数(相当于mouseleave)
如果只写一个函数，则鼠标经过和离开都会触发它

 $("nav>ul").hover(function () {
                $(this).children("li").show();
            }, function () {
                $(this).children("li").hide();
            })
第一个function是悬浮触发，第二个是离开触发。
事件切换hover就是鼠标经过和离开的复合写法
如果只写一个函数，那么鼠标经过和离开都会触发这个函数
```

### jQuery动画队列及其停止排队方法

```
动画或者效果一旦触发就会执行，如果多次触发，就造成多个动画或者效果排队执行
```

#### 停止排队

```
stop()

stop()方法用于停止动画或者效果
注意: stop() 写到动画或者效果的前面，相当于停止结束上一次的动画

stop:表示让运动的元素立即停止动画
            接收两个参数,都是boolean,默认都是false
            参数一:是否清空当前动画队列(true:清空;false:不清空),如果为true会清空所有,false清空当前动画,执行下一个动画队列
            参数二:是否跳转到动画结束状态。(true:是，停止时，直接跳到当前动画的结束)
$("div").stop(false, false);//停止的是当前这一帧动画,开始进入下一帧动画

$(".nav>li").hover(function(){
    // stop 方法必须写到动画的前面
    $(this).children("ul").stop().slideToggle();
})
```
#### 结束动画
```
结束到最终状态.相当于加速完成了
$("div").finish()
```
### jQuery淡入淡出以及突出效果

### 淡入淡出切换

```
语法：// 淡入
fadeIn([speed,[easing],[fn]])
$("div").fadeIn();

// 淡出
fadeOut([speed,[easing],[fn]])
$("div").fadeOut;

// 淡入淡出切换
fadeToggle([speed,[easing],[fn]])
```

### 渐进方式调整到指定的不透明度

```
语法：
	// 修改透明度   这个速度和透明度必须写
fadeTo([sp	eed],opacity,[easing],[fn])

参数：

opacity ：透明度必须写，取值 0~1 之间
speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。必须写

$("div").fadeTo(1000,0.5)
```

### jQuery自定义动画animate方法

```
语法：
	animate(params,[speed],[easing],[fn])
	
参数：

  $("button").click(function () {
                $("div").animate({
                    left: 500,
                    top: 300,
                    opacity: .4,
                    width: 500
                }, 500);
            }) 
更改left/top时切记元素要有定位;           
params: 想要更改的样式属性，以对象形式传递，必须写。 属性名可以不用带引号， 如果是复合属性则需要采取驼峰命名法 borderLeft。其余参数都可以省略。

delay(1000)
可以调用delay()方法，设置动画的延迟时间
		 $("div").animate({
                height: 300,
                width: "500px",
                opacity: 0.3,
                borderRadius: "50%",
            }, 1000, function () {
                console.log("第一帧结束了");
            }).delay(1000).animate({
                width: 100,
                height: 100,
                opacity: 1,
            }, 1000, function () {
                console.log("第二帧结束了");
            })
```

## jQuery属性操作

### 获取元素固有属性值prop()

```
所谓元素固有属性就是元素本身自带的属性，比如 <a> 元素里面的 href ，比如 <input> 元素里面的 type。

语法：prop("属性")
$("a").prop("href");
```

### 设置元素固有属性值

```
    prop("属性","属性值")

$("a").prop("title","我们都挺好~");
```

### 获取元素自定义属性值

```
用户自己给元素添加的属性，我们称为自定义属性。 比如给 div 添加 index =“1”。

找到的第一个标签的属性取值
attr("属性")   // 类似原生getAttribute()
$("div").attr("index");

取值
参数1:属性名称
返回值:找到的第一个标签的属性取值
let res=$("li").attr("class");
console.log(res);
```

### 设置元素自定义属性值

```
attr("属性","属性值")  //类似原生setAttribute()

$("div").attr("index",4);

//设置多个属性
$("li").attr({
      title:"12222",
      class:"red"
  })

//参数一:属性名称
//参数二:回调函数,函数内两个参数,分别为index索引,attr(之前的属性值),返回值是需要设置的属性值
$("li").attr("class", function (index, attr) {
    console.log(index, attr);
    return index % 2 ? "red" : "blue"
})
console.log($("li"));
```
### 删除属性
```
删除属性
删除找到的所有标签的指定属性
$("li").removeAttr("title")
```
## 数据缓存data()

```
data() 方法可以在指定的元素上存取数据,并不会修改DOM元素结构，一旦页面刷新，之前存放的数据都将被移除。
$("div").data("name","萧寂");
$("div").data("name");

//获取h5自定义属性data-index的，不用写data-，可以写后面单词直接获取，而且返回的是数字型
$("div").data("index");
```

### 附加数据语法

```
语法：data("name","value") 向被选元素附加数据

$("span").data("uname","andy");
```

#### 判断几个被选中

```
:checked
```



#### 获取数据语法

```
语法：date("name") 向被选元素获取数据

$("span").data("uname");
// 这个方法获取data-index h5自定义属性，不用写 data- 返回的是数字型(2)
$("div").data("index");

同时，还可以读取H5自定义属性 data-index,得到的是数字型
```

## jQuery内容文本值

```
主要针对元素的内容还有表单的值操作
```

### 普通元素内容html()

```
相当于原生innerHTML

语法：

获取元素的内容：html()
设置元素的内容：html("内容")

$("div").html();

$("div").html("123");

// 获取过来的带的标签 <span>123</span>
```

### 普通元素文本内容text()

```
相当于原生innerText

语法：

获取元素的文本内容：text()
设置元素的文本内容：text("文本内容")

$("div").text();

$("div").text("123");
// 123  
// 获取过来的不带标签 123
```

### 获取设置表单值 val()

```
语法：

获取表单的的值：val()
设置表单的值：val("内容")

$("input").val();

$("input").val("请输入内容~~~");
```

## 保留几位小数

```
.toFixed(number)  number是几就是保留几位小数
```

## jQuery元素操作

```
主要是遍历，创建，添加，删除元素操作
```

### 遍历元素

```
jQuery隐式迭代是对同一类元素做了同样的操作，如果想要给同一类元素做不同操作，就需要用到遍历

// 语法一
$("div").each(function(index,domEle){xxx;})

// 语法二
$.each(Object,function(index,element){xxx;})

$.each() 方法可用于遍历任何对象，主要用于数据处理,比如数组,对象
里面的函数有2个参数: index 是每个元素的索引号,element遍历内容
```

### 创建元素

```
$("<li></li>");
// 动态创建一个li标签

var li = $("<li>我是后来创建的li</li>");
var div =$("<div>我是后来的div</div>")
```

### 添加元素

#### 内部添加

```
// 1.内部添加
element.append("内容")
$("ul").append(li);
// 把内容放入匹配元素内部最后面，类似原生appendChild

element.prepend("内容")
$("ul").prepend(li);
// 把内容放入匹配元素内部最前面
```

#### 外部添加

```
// 2.外部添加
element.after("内容");
$(".test").after(div);
// 把内容放入目标元素后面

element.before("内容");
// 把内容放入目标元素前面

内部添加元素，生成之后，它们是父子关系

外部添加元素，生成之后，它们是兄弟关系
```

### 删除元素

```
删除匹配的元素(本身)：element.remove()
删除匹配的元素集合中所有的子节点：element.empty()
清空匹配的元素内容：element.html("")

1.element.remove()      //删除匹配的元素(本身)
$("ul").remove();

2.element.empty()       //删除匹配元素里面的子结点(孩子)
$("ul").empty();

3.element.html("")      //删除匹配元素里面的子结点(孩子)

remove 删除元素本身
empt() 和 html("") 作用等价，都可以删除元素黎曼的内容，只不过 html 还可以设置内容。
```

## 事件注册

```
语法：
	element.事件(function(){})
	$("div").click(function(){事件处理程序})
	
其他事件和原生基本一致。
	比如mouseover、mouseout、blur、focus、change、keydown、keyup、resize、scroll等。
```

### 事件处理on()绑定事件

```
on()方法在匹配元素上绑定一个或多个事件的处理函数

语法:
	element.on(events,[selector],fn)
	
1.events:一个或多个用空格分隔的事件类型，如"click"或"keydown"。
2.selector:元素的子元素选择器
3.fn：回调函数 即绑定在元素身上的侦听函数。


$("div").on({
                mouseenter: function () {
                    $(this).css("background", "purple");//鼠标经过的样式
                },
                click: function () {
                    $(this).css("background", "blue");//鼠标点击的样式
                },
                mouseleave: function () {
                    $(this).css("background", "red");//鼠标离开的样式
                }
                
多个处理程序相同，可以
	      $("div").on("mouseenter mouseleave", function () {
                // alert(11);//鼠标经过和离开的样式
                $(this).toggleClass("current");//鼠标经过和离开切换类样式
            })
```

### on()可以实现事件委派

```
事件委派就是原来加给子元素身上的事件绑定绑定在父元素身上，就是把事件委派给父元素。

//click是绑定在ul身上的，但是 触发的对象是ul里面的小li
            $("ul").on("click", "li", function () {
                alert(22);
            })
            
     
//在此之前有bind(),live(),delegate()等方法来处理事件绑定或者事件委派，最新版本的请用on代替它
```

### on可以给未来动态创建的元素绑定事件

```
动态创建的元素，click()没有办法绑定事件，on()可以给动态生成的元素绑定事件
```

### 事件解绑0ff

```
$(function () {
            //事件绑定
            $("div").on({
                click: function () {
                    console.log("我点击了")
                },
                mouseover: function () {
                    console.log("我经过了")
                }
            })
            
            $("ul").on("click", "li", function () {
                alert(11);
            })
            //事件解绑off
            $("div").off();//这个是解除了div身上的所有事件
            $("div").off("click");//解除了div的click事件
            $("ul").off("click", "li");//解除了事件委托
        })
```

### 事件触发一次的one()方法

```
 //one()绑定事件，只能触发一次
            $("p").one("click", function () {
                alert("我是p")
            })
```

### 自动触发事件

```
自动触发事件trigger()
有些事件希望自动触发，比如轮播图自动播放功能跟点击右侧按钮一样，可以利用定时器自动触发右侧点击按钮事件，不必鼠标点击触发。

 $("div").click();//第一种简写方式,刷新自动调用
 $("div").trigger("type")//第二种自动触发模式
 $("div").triggerHandler(type)//第三种自动触发模式，不会触发元素的默认行为
```

### jQuery事件对象

```
事件被触发,就会有事件对象产生
$("div").on(events,[selector],function(event){})

阻止默认行为:event.preventDefault() 或者return false
阻止冒泡:event.stopPropagation()
```

### jQuery对象拷贝

```
如果想要把某个对象拷贝(合并)给另一个对象使用,此时可以使用$.exetend()方法

语法:
	$.extend([deep],target,objectl,[objectN])
	
1.deep:如果设为true为深拷贝,默认为false浅拷贝
2.target:要拷贝的目标对象
3.object1待拷贝到第一个对象的对象
4.objectN待拷贝到第N个对象的对象
5.浅拷贝就是把被拷贝的对象复杂数据类型中的地址拷贝给目标对象,修改目标对象会影响被拷贝对象
6.深拷贝,前面加true,完全克隆(拷贝的对象,而不是地址),修改目标对象不会影响被拷贝对象.
```

## jQuery多库共存

```
问题概述：
	jQuery使用$作为标识符，随着jQuery的流行，其他js库也会用这$作为标识符，这样一使用会引起冲突
客观需求：
	需要一个解决方案，让jQuery和其他的js库不存在冲突，可以同时存在，这就叫多库共存。
jQuery解决方案：
	1.把里面的$符号统一改为jQuery。比如jQuery("div")
	2.jQuery变量规定新的名称：$.noConflict()  var suibian=$.noConfilct();
	var suibian = $.noConflict();
	suibian("div")

```

## jquery插件

```
jquery功能比较有限，想要实现更复杂的特效效果，可以借助jQuery初见完成
注意：这些插件也是依赖于jQuery来完成的，所以必须先引进jQuery文件，因此也被称为jQuery插件。

jquery插件库  http://www.jq22.com/
jquery之家  http://www.htmleaf.com/
jquery全屏插件  https://www.dowebok.com/demo/77/

1.瀑布流插件
2.图片懒加载(图片使用延迟加载可提高网页下载速度。他也能帮助减轻服务器负载)，用插件库去下载
	当我们页面滑动到可视区域，再显示图片。
```

## Bootstrap的使用

```
首要要求，必须设置div，起个class为container，将Bootstrap的内容存放在div中
<div  class="container"> 存放Bootstrap内容 </div>
```



## jQuery 尺寸

```
语法	用法
width() / height()	取得匹配元素宽度和高度值，只算 width / height
innerWidth() / innerHeight()	取得匹配元素宽度和高度值，包含padding
outerWidth() / outerHeight()	取得匹配元素宽度和高度值，包含padding、border
outerWidth(true) / outerHeight(true)	取得匹配元素宽度和高度值，包含padding、border、margin

//获取标签尺寸
//width()\height():内容宽高
console.log($("div").width(), $("div").height());
//innerWidth()\innerHeight():内容+内边距  宽高
console.log($("div").innerWidth(), $("div").innerHeight());
//outerWidth()\outerHeight():内容+内边距+边框  宽高
console.log($("div").outerWidth(), $("div").outerHeight());


//赋值
//给标签中添加style设置width
//300  直接赋值给width
$("div").width("300px")
//width=400px-内边距
$("div").innerWidth("400px")
//width=500px-内边距-边框
$("div").outerWidth("500px")
以上参数为空，则是获取相应值，返回的是数字型

如果参数为数字，则是修改相应值

参数可以不必写单位
```

## jQuery位置

```
位置主要有三个： offset()、position()、scrollTop()/scrollLeft()

//获取位置
//获取标签距离视口左边界、上边界的值构成的对象
console.log($("div").offset());
//获取距离父元素的边界的值
console.log($("div").position());
//获取竖直方向\水平方向的滚动位置
console.log($("div").scrollTop(),$("div").scrollLeft());
//设置竖直方向\水平方向的滚动位置
$("div").scrollTop(50)
```

### offset() 设置或获取元素偏移

```
offset() 方法设置或返回被选元素相对于文档的偏移坐标，跟父级没有关系

$(".son").offset();
$(".son").offset().top;

$(".son").offset({
    top: 200,
    left: 200
});

该方法有两个属性 left、top.
		offset().top用于获取距离文档顶部的距离，
		offset().left 用于获取距离文档左侧的距离
可以设置元素的偏移：offset({ top: 10, left: 30 });
```

### position()获取元素偏移

```
position() 方法用于返回被选元素相对于带有定位的父级偏移坐标，如果父级都没有定位，则以文档为准
该方法有2个属性 left、top。
		position().top 用于获取距离定位父级顶部的距离，
		position().left 用于获取距离定位父级左侧的距离。
这个方法只能获取偏移，不能设置偏移

$(".son").position();
// 这个方法只能获取偏移，不能设置偏移
```

### scrollTop() / scrollLeft() 设置或获取元素被卷去的头部和左侧

```
scrollTop()方法设置或返回被选元素被卷去的头部。
不跟参数是获取，参数为不带单位的数字则是设置被卷去的头部。

// 页面滚动事件
$(window).scroll(function(){
    $(document).scrollTop();
})
```
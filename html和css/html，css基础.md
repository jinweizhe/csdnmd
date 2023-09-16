# html，css基础

## 文档基础结构

##### DOCTYPE：

```
document type 声明文档类型 告诉浏览器以何种规范解析当前文档
html：以H5的标准解析文档
```

##### 结构标签

```
<html></html>作为页面中一个最大的标签，包裹住其他小标签，称其为根标签

<head></head>文档的头部，在这其中必须包含tilte标签

<title></title>文档的标题，给页面设置标题

<body></body>文档发主体，页面中的内容基本都放在改标签里。
```

##### html：

```
根标签，网页中最大的标签，有且仅有一个。所有的标签必须写在HTML内
    lang="en" 
        language：定义当前文档语言类型
        en：english 英语
```

##### head：

```
head：头标签，设置字符集，说明性的标签，页面标题，外部文件，内部样式表等...
            charset:一般写在head标签内的第一行，保证页面标题不会出现乱码。
                UTF-8:一种通用的编码方式，解决中文乱码。
```

##### body：

```
body:设置网页的主体内容。
```

##### 基础标签

```
标题标签：h1最大，h6最小。默认样式：上下外边距，字体大小，字体样式。
emeat语法：h${标题$}*6 
        $:从1开始生成 *n 生成到n.
        {}:定义标签中的文本。
        
p：段落文本标签，块元素，所有的文本标签都是行内/行元素，p除外。默认的外边距，上下16px -->
    <p>段落标签</p>
    
div:标准的块标签，默认宽度100%，高度由内容撑开。(没有内容高度为“0”)

 行内元素：宽高均由内容决定。
        span:普通文本标签。
```

##### 属性

```
contenteditable="true"//定义可编辑文本
<bdo dir="rtl">大卫佛海v哦i文化</bdo>//显示位置，rtl即right to left从右往左
draggable="true" //定义可拖拽文本
target="_blank"  //打开新窗口
title="首先是教学设计"   //悬浮提示
```



##### 文本标签：

```
<span>普通文本</span>
    <strong>语义化加粗文本，强调文本的重要性。</strong>
    <b>加粗文本，不具有强调意义。</b>
    <em>具有强调意义，表示文本的重要性。</em>
    <i>斜体文本，不具有强调意义。</i>
    <del>具有强调删除意义，表示被弃用的内容</del>
    <s>删除线文本</s>
    <ins>具有强调意义，表示新增的内容</ins>
    <u>插入文本</u>
    <small>小号字体</small>
    <big>大号字体</big>
    <!-- 计算机输出文本 -->
    <code>电脑自动输出</code>
    <kbd>键盘码</kbd>
    <samp>计算机代码样式</samp>
    <var>变量</var>
    <pre>
        预格式文本。
        尊敬的XXX:

            pre标签可以定义有格式的文本，文本中的所有空格以及换行都可以显示。
            其他标签之内的文本与换行只能编译为一个英文空格符，标签之间的换行也会被编译为一个英文空格符。
                真厉害。

                                                亚亚子❤️
    </pre>
    <sup>上标</sup>
    <sub>下标</sub>
```

##### 语义化结构标签

```
语义化结构标签：
            根据内容的结构"内容语义化"，选择合适的标签"标签的语义化"。
            作用:便于开发者阅读，让浏览器爬虫和机器更好的解析。
            优点：
                1. 在没有css样式的情况下，页面也能呈现出很好的内容结构"代码结构".
                2. 代码结构清晰，方便阅读和团队合作开发。
                3. 方便搜索引擎识别页面结构，有利于SEO(搜索引擎优化)。
                4. 方便其他设备解析(屏幕阅读器，盲人阅读器，移动设备)，以语义化的方式渲染页面。
 
    <nav>标记导航，仅对页面中重要的链接群使用</nav>
    <header>页眉，通常包含LOGO，主导航，全站链接以及搜索框...</header>
    <main>页面主要内容，一个页面只能使用一次。</main>
    <aside>侧边栏，定义所有内容之外的部分或之外的一组链接等。</aside>
    <section>区域，一段，定义页面中的章节或块，代替div</section>
    <footer>页脚，只有当父元素是body时才是整个页面的页脚</footer>
```

##### 超链接和路径

```
 a:超链接 
         href：url,网页链接。
         target:设置新超链接的打开方式。
            _self:默认值，默认在当前标签页打开超链接。
            _blank:新建标签页打开超链接。
         title:光标悬停时的提示文本。
      相对路径:
            ./:查找同级文件
            ../:查找上级文件
            ../../:查找上两级文件
      绝对路径:C:/Users/mac/Desktop/开课第一天/02-标签.html
```

##### 图片

```
img:图像、图片
            src:图片资源路径，支持网络图片或本地图片。
            alt:图片加载失败时的提示文本
```

##### 列表标签

```
列表标签
            ul:unorder list 无序列表
                li：list 列表选项。
            ol:order list 有序列表
     		 dl：define list 自定义列表
                dt：define title 自定义标题
                dd：define details 自定义详情  
```

##### 表单标签

```
表单标签 
            form 创建表单。
                action：定义表单数据发往何处。
                method：定义发送数据的方式。
                    get/post。
                    
 单行文本输入框 
                    type:定义表单的类型
                        text：文本输入框
                        password:密码输入框
                        number:数字输入框
                        tel:手机号码输入框
                        email:邮箱输入框
                        color:颜色选择器
                        file:文件选择器
```

##### type属性

```
<input type="text">
        <input type="password" name="" id="">
        <input type="number" name="" id="">
        <input type="tel" name="" id="">
        <input type="email">
        <input type="color">
        <input type="file">
        <!-- 年月日选择器 -->
        <input type="date">
        <!-- 本地年月日时选择器 -->
        <input type="datetime-local">
        <!-- 周选择器 -->
        <input type="week">
        <!-- 月选择器 -->
        <input type="month">
        <p>
            <!-- 单选，必须定义相同的name，才可以实现单选。 -->
            男 <input type="radio" name="sex">
            女 <input type="radio" name="sex">
        </p>
        <p>
            <!-- 多选 -->
            <input type="checkbox">
        </p>
        <!-- 进度条 -->
        <input type="range">
        <!-- 图片按钮 -->
        <input type="image" src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png">
        <button>普通按钮</button>
        <!-- 提交按钮，value:定义按钮的值。 -->
        <input type="submit" value="登录">
        <!-- 按钮 -->
        <input type="button">
        <!-- 重置按钮 -->
        <input type="reset" value="清空">
        <!-- 隐藏的输入框 -->
        <input type="hidden">
```

##### 列表选择器：

```
select：列表选择器
                  size:属性用于定义多选时，所显示选项的个数，默认值：4.
                  multiple：允许多选。
                    optgroup：选项组
                      label:定义选项组标题。
                        option：选项
                          value：选项的值.
                    disabled:属性用于设置禁用的标签。
                    selected:属性用于定义默认选中项。
                    HTML中定义，属性与值相同时，可以省略属性值。
                    name:属性用于定义表单控件的名称。
```

##### 多行文本输入框：

```
多行文本输入框 
                name:定义表单控件的名称。
                cols:一行所显示英文字符的个数，显示的列数。
                rows:显示的行数(取值为英文字符的行数)
                
                
   fieldset:对表单内的元素分组。
                legend:对不同的分组进行文字说明。
          
         <fieldset>
            <legend>标题</legend>


 datalist:此标签与文本输入框结合，相当于一个下拉框，input既可以手动输入，又可以下拉选择。
                将datalist的id属性值赋值给input的list属性，即可实现。
         
         <datalist id="record">
            <option value="HTML5.0"></option>
            <option value="CSS3.0"></option>
            <option value="Javascript"></option>
         </datalist>
```

## CSS样式

```
1. 行内样式表。
        2. 内嵌样式表。
        3. 外联样式表。
        引用方式的优先级。
            正常情况下：行内样式 > 内嵌样式 > 外联样式
            非正常情况下：内嵌样式和外联样式会有浏览器的执行顺序问题(最后引用的会覆盖之前的样式。)
```

## CSS选择器

```
>父子选择器  父元素>子元素  
空格代表后代选择器
~ 代表兄弟选择器
+ 相邻兄弟选择器
```

```
浏览器是怎么解析css选择器的：
		-css选择器的解析是从右往左解析的。如果从左至右匹配，发现不符合规则需要回溯，会损失很多性能。
		-若从左至右匹配，先要找到所有的左边第一个节点，对应的每个节点上寻找其父元素节点直到找到根元素或满足条件的匹配元素，则结束这个分支遍历。
```

### 伪类选择器

```
  -根据序号查找元素，称之为 序号选择器。
  -根据类型查找元素
```

#### 序号选择器

```
:nth-child(n)根据：前指定的标签选择第n个为此标签的元素。如果是even(2n+1)就是偶数,odd(2n+1)就是奇数(正数)
:nth-last-child(n)倒数第n个子元素
:last-child(n)选择最后一个：前指定的子元素。
:first-child(n)选择第一个：前指定的子元素。
:only-child 选择唯一的子元素。

--------以下根据标签类型选择
:first-of-type根据标签类型选择第一个元素。
:last-of-type根据标签类型选择最后一个元素。
:nth-of-type(n)根据指定标签类型选择第n个标签(正数)
:nth-last-of-type(n)根据指定标签类型选择倒数第n个标签(倒数)
```

#### 扩展

```
1、:first-child：表示选择第一个子元素，如 .box1 p:first-child 表示选择box盒子中的第一个p

 2、：nth-child():表示选择任意序号的子元素，如 .box2 p:nth-child(3)表示选择box2盒子中的第三个p。另外nth-child还可以写成an+b的形式，如 .box2 p:nth-child(3n+2)表示从第二个p开始，每三个p选择一个 ps：2n+1等价于odd及奇数，2n等价于even及偶数

 3、:nth-of-type：表示选择同种标签指定序号的子元素，

 

如 .box3  p:nth-of-type(3)表示box中p类型的第三个p

4、:nth-last-child()：表示倒数选择

5、:nth-last-of-type()：表示倒数选择
```

### 交集选择器

```
每个选择器都有自己的权重值，简称权值，权值越大，优先执行。
id选择器>class选择器/伪类/属性>元素选择器
100      10          1

选择器优先原则：!important(10000) > 行间样式(1000) > ID 选择器(100) >class 选择器｜伪类选择器｜属性选择器(10) >元素选择器｜伪元素选择器(1) > 通配符选择器｜子选择器选择器｜相邻兄弟选择器(0)

权重高的那条样式对元素起作用，权重相同的，后写的样式会覆盖前面写的样式。

选择器权值可以相加
!important(无条件优先执行，权重10000)

交集选择器：选择器连接使用，多个选择器选择一个标签。
```

### 并集选择器

```
, 用逗号分隔多个选择器，同时选择多个标签

*:not(body,html)意思指选择除了html，body标签之外的其他标签
```

### 伪元素选择器

```
::selection   定义光标选中时的样式
::first-letter  为某个元素中的第一个字符设置样式，有符号会连带符号，可以加个空格解决
::first-line    定义首行文本的样式
::placeholder   定义input的placeholder属性的样式
::before {content:""  //content必须设置，如果不需要插入文本可以为""} 在某个元素之前插入一些内容
::after	在某个元素之后插入一些内容
//如果同时使用了before和first-letter两个为元素，第一个字要从before里面的内容开始算起
//first-letter和first-line两个伪元素不适用于行内元素，在行内元素内两个选择器均失效
//first-letter的优先级高于first-line
```

### target目标伪类选择器

```
实现点击a标签，改变div(目标元素可点击)的样式 
        如何实现？
            绑定a与div，将div的id属性值赋值给a标签的href属性。
target目标伪类选择器查找目标元素时触发：target
```

## 焦点取消默认样式

```
:focus{
　　outline: none;
}
```

## 颜色明暗亮度调节

```
opacity:取值0-1，越靠近1越亮
```



## 背景图片

```
定义背景图片如何重复显示。
		repeat:重复显示
		no-repeat:不重复显示
		repeat-y:重复y列
		repeat-x:重复x行
```

```
background-position: x轴 y轴;
	取值：number(px/%)、关键字。
			关键字：left right top bottom center
background-position: center center;
vh:view height 视口高度(可视区域的高度) 100vh=可视区域总高
vw:view width 视口宽度(可视区域的宽度)  100vw=可视区域总宽
background-position-x:-100px(50%)
background-position-y:300px(50%)
```

```
background-size:宽 高；
取值： number(px/%)、关键字 
	关键字：cover contain
	一个值，值为宽度，高度默认等比例缩放（默认值为auto）
	contain：背景图片等比例缩放，直至高度或宽度填充满整个容器为止，容器可能留白
	cover：背景图片等比例缩放直至高度和宽度填充满整个容器为止，图片可能显示不完全
```

```
background-attachment: fixed;
	固定背景图片，不随页面的滚动二滚动，此属性只对body有效
```

```
两个背景图片的设置
	css3之前，一个元素只能设置一个背景图片。
使用方式：
1.定义多重背景时，需要给background-image设置多个url(),多个值以","隔开。
2.每个图片都具有背景图的任何属性，每个属性都需要定义多组值，一组值对应一张背景图，多组值之间使用","隔开。
background-image: url(图片1),url(图片2);
            background-position: left bottom,0 0;
            background-size: 500px auto;
            background-repeat: no-repeat,repeat;
```

## 背景渐变

```
background-image: linear-gradient(red, black)
linear-gradient（渐变方向，颜色，颜色......）线性渐变
渐变方向:
	to bottom从上往下(默认值)
	to top从下往上
	to left从右往左
	to right从左往右
	to top left从左上角，后面可以依次推
deg 角度取值 0deg -360deg
六点方向开始顺时针方向，0deg即六点方向正下方，从下往上看
					90deg即九点方向正左方，从左往右看
					180deg即十二点方向正上方，从上往下看
					270deg即三点方向正右方，从右往左看
```

### 径向渐变

```
radial-gradient(中心形状单词，颜色，颜色....)
如:  background-image: radial-gradient(circle,red,blue)

可以定义每种颜色的分布空间，如下例子：
background-image: radial-gradient(circle,red 20%,blue 10%,blue 30%)
```



## 文本样式

```
@font-face 自定义字体
自定义字体名称 font-family
src:url()引入字体
字体默认大小为16px。
字体粗细font-weight：bold（400-700，400和noemal是正常字体，700粗体）
text-align：justify  文本两端对齐
文本水平对齐方式：
		laft左对齐
		right右对齐
		center居中
		justify多行文本两端对齐
line-height:   行高，文本垂直居中，值与边框高度相等，行高没有单位时，取值为font-size的倍数。单位%，相对font-size
letter-spacing：  字间距
空格在css中叫做“后代选择器”
	在html中叫做“空格分隔符”
text-indent   文本缩进  rem相对根元素  em相对父元素


text-decoration-line: ;文本装饰线的位置，必须值
 underline：下划线；
 linr-through：中划线/文本贯穿线
 overline：上划线
 
text-decoration-color: ;文本装饰线的颜色，可选值，不定义时默认取值coler的颜色

text-decoration-style: ;文本装饰线的样式，可选值。不定义时默认值为solid(实线)。
dotted(点线) dashed(虚线)double(双线)wavy(波浪线)none(无样式，去掉下划线)

以上三个属性的简写方式，叫做“复合属性”

text-decoration：bule wavy underline 3px；颜色，样式，位置，边框大小。最后一个值可能不被浏览器支持，删除即可，但一部分可以支持
```

#### 大小写转换

```
text-transform：capitalize:首字母大写
				uppercase：转换为大写
				lowercase：转换为小写
```

#### 方向逆转

```
direction: rtl;从右往左right to left 
			ltr：从左往右left to right 
direction:定义文本的阅读方向，与html中的dir属性一致

unicode-bidi:; 可以改变direction不能逆序的情况，对direction的一个增强
		normal:默认值
		bidi-override:文本的一个重写
```

#### 排列方式

```
writing-mode:;  定义文本在水平或垂直方向的排布方式
	值：
		vertical-lr:文本垂直方向排列，从左往右读(IE浏览器不能用此值，可以用tb-lr)
		vertical-rl文本垂直方向排列，从右往左读(IE浏览器不能用此值，可以用tb-rl)
		horizontal-tb:默认值，文本水平方向排列，从上往下阅读
white-space:; 属性定义空白符如何显示
	值：
		pre:多个空格不会合并;换行符有用,且文字不会受到盒子宽度的影响.文本怎么写就怎么显示，保留文本所有的空格和换行（文本一行排列不下不会自动换行）
		pre-line：只保留换行不保留空格
		pre-wrap：保留空格与换行，文本一行排列不下时会自动换行
		nowrap; 强制内容在一行显示，文本不换行
		text-overflow:  文本溢出如何显示。
			ellipsis：溢出的文本显示为省略号
					溢出文本显示省略号的条件：
						1. 固定的宽度
						2.文本不换行
						3. 溢出隐藏
						4.溢出文本为省略号
```

#### 文本阴影

```
text-shadow:;  
	文本阴影：
		值一：X轴阴影，正值左侧，负值右侧阴影。必须值
        值二：Y轴阴影，正值底部阴影，负值顶部阴影。必须值 
        值三：阴影的模糊程度，值越大阴影越模糊。可选值
        值四：阴影的颜色，可选值
```

## 盒子模型

### 外边距

```
包括 margin-border-padding-content

margin：外边距，盒子之间的距离。取值1-4个值
	一值：上下左右外边距
	二值：上下 左右外边距
	三值：上 左右 下外边距
	四值：上 右 下 左外边距
	
	margin定宽居中只对块元素有效，行和行内块元素无效


	bottom：下外边距
	top：上外边距
	left：左外边距
	right：右外边距
```

### 边框

```
border-color:;颜色，可选值
		width:;宽度，可选值
		style:;样式，必须值(double：双线   dotted：点线   dashed：虚线  soild：实线)
		
复合写法：border：bule  dashed  10px;

左边框颜色：border-left-color:;  
下边框：border-bottom:none;  去边框
text-align：justify 文本两端对齐

注意：设置border / padding会改变盒子的总宽高度
默认情况下盒子总宽高的计算方式。
	width=内容宽
	height=内容高
	总宽=左右边框+左右内边距+内容宽
	总高=上下边框+上下内边距+内容高
	
box-sizing：属性用于修改盒子的计算方式
	content-box：盒子默认计算方式
	border-box：修改盒子的计算方式（固定盒子总宽高，不会被填充撑大）
	修改后盒子总宽高的计算方式
```

### 边框圆角

```
border-1:;
		值为半径，取值100%为圆
		一组值可以用/分开，比如50px/100px。/前后为两个半径值画的圆焦点连接即为样式
		
		10px 20px/10px 20px
		相当于10px/10px 20px/20px即两组半径画的圆相交而得
		10px 20px 30px 40px/10px 20px 30px 40px
		相当于10px/10px 20px/20px 30px/30px 40px/40px即四组值半径画的圆相交而得
		
		
		取值50px;即x轴50px，y轴50px为半径画圆，取值50px/100px即第一个圆50px，第二个100px为半径画圆
		取四个值：
			一个值：四个角
			两个值：左上右下  右上左下
			三个值：左上  右上左下 右下
			四个值：左上 右上 右下 左下


border-top-left-radius：定义左上圆角（其余角也可以这样定义）
```

### 盒子阴影

```
box-shadow
	值一：x轴阴影，正值右侧阴影，负值左侧阴影
	值二：y轴阴影，正值底部阴影，负值顶部阴影
	值三：阴影的模糊程度 值越大阴影越模糊
	值四：阴影的宽度。
	值五：阴影的颜色
	值六：inset 内层阴影
```

### 外边距合并/塌陷

```
外边距的合并发生在块级元素之间。(浮动，绝对/固定定位元素除外)只会在垂直方向发生，水平方向不影响
	1. 相邻的兄弟之间的外边距合并
	2. 父元素的第一个子元素的上外边距/最后一个子元素的下外边距会穿透父元素，表现为父元素的外边距
	两个外边距的值设置/margin合并规则：
                            同为正值取最大
                            一正一负值相加
                            同为负值取最小
```

```
margin合并解决方案：
	块状格式化上下文：BFC
		如果一个元素符合BFC的条件会成为一个独立的容器，容器内部的元素会垂直的沿着其父元素的边框排列，和外部元素会不影响
	触发BFC的条件：
		1. 浮动元素：float 除了none之外的值。
		2. 绝对/固定定位元素：position：absolute/fixed
		3. display值为inline/inline-block，只要不是块级元素
		4. overflow：除了visiable之外的值(hidden/auto/scroll)都可以

解决方案一：给父元素设置为块状格式化的元素BFC(触发BFC条件)
解决方案二：给父元素添加边框(border)
解决方案三：给父元素添加padding(值不小于零)
```

## 元素的特性

```
根据元素不同的特性可以将元素划分为三类：
	1.行元素(文本类标签（不含p标签）)
	多个行元素相邻时会在同一行排列，一行排列不下会自动换行。
	默认宽高皆由内容决定
	设置宽高无效
	可以转换块或者行内块元素
	margin上下无效，左右有效
	2.块元素(结构标签，标题标签，p标签，列表标签，td....)
	默认情况下，块元素独占一行，垂直排列
	默认宽高100%，高度由内容决定
	可以设置宽高
	可以转换行或者行内块元素
	margin上下左右均有效
	3.行内块元素(input button img taxtarea select)
	多个行内块元素相邻时会在同一行排列，一行排列不下自动换
	默认宽高皆由内容决定(一部分标签例外)
	可以设置宽高
	只能转换块元素不能转换行元素
	margin上下左右均有效
```

```
元素之间可以相互转换(行内块不能转换为行内)
	display：
		inline：(转换为行元素)
		block：(转换为块元素，或者显示元素和none互用)
		none：(隐藏元素)
		inline-block：(转换为行内块元素)
```

### 定宽居中

定宽居中只对块元素有效

```
margin左右left/right取值为auto
	左侧auto表示水平剩余空间在元素左侧使元素居右
	右侧auto表示水平剩余空间在元素左侧使元素居左
auto取值只对块元素有效
	左右同时取值auto元素水平居中，或margin:0 auto;
	
行，行内块元素水平居中需要给父元素设置样式，单独给行，行内块元素设置无效
```

## 浮动布局

```
float：浮动东布局，可以使浮动的元素向左或向右移动，直到遇到父元素的边界或浮动的兄弟元素。
	left：向左移动
	right：向右移动
浮动的元素会脱离文档流，如果父元素没有定义高度，这时父元素的高度为零，父元素之后的元素布局会发生改变。
	文本会避开浮动的元素，形成图文环绕的效果。

float-left元素从左往右排列
float-right元素从右往左排列
```

### 清除浮动

```
浮动的元素脱离文档流会影响布局，所以要清除浮动
清除浮动的方法:
	1.给父元素添加高度（适合父元素有固定高度的情况）
	2.给父元素添加overflow-hidden;（注意：溢出的内容会隐藏，适用于不隐藏的情况）
	3.给使用浮动的元素之后添加一个空块，为其设置clear:both;（弊端：页面使用较多会出现较多的空的块元素)
```

### 基线对齐

```
 什么是基线？
             元素水平排列时，垂直对齐的位置叫做“基线”。
             空块/img的基线在底部。
             文本的基线在四线三格的第三条线。（baseline（此值只针对有文本的属性）基线在四线三格的第三条线)
             多行文本元素的基线在最后一行文本四线三格的第三条线。
```

## 定位

```
position:
	static 静态定位
	默认的定位方式，静态定位的元素在文档流内从上往下(块)、从左往右(行/行内块)排列。
	元素默认的定位方式叫做“流式布局”
	
	relative 相对定位
	
	absolute 绝对定位
	
	fixed 固定定位
	固定定位，将元素固定到指定的位置，不随页面的滚动而滚动。
	参照物：浏览器可视区域。
	使用left，right， top，bottom属性偏移元素的位置
	top/left优先级高于 right/bottom
	
	sticky 粘性定位
```

### calc(计算函数)

```
支持计算不同单位的值，运算符与值之间必须使用空格隔开。先乘除后加减，小括号修改运算优先级
left：calc(50% - 100px);效果等同于
left：50%
margin-left:-100px

top：calc(50% - 100px);效果等同于
left：50%
margin-left:-100px
```

### 相对定位

```
relative：
	相对定位，定位的元素不会脱离文档流
	使用left、right、top、bottom属性偏移元素
	参照物：相对定位元素初始位置
```

### 绝对定位

```
absolute：
  绝对定位，定位的元素会脱离文档流
	使用left、right、top、bottom属性偏移元素
	参照物：自定义。
	如何让自定义：
        1.必须是绝对定位的上级元素
        2.上级元素必须要有定位方式（static除外）

	绝对定位欸的元素会逐级向上查找有定位方式的上级元素，以有定位方式的上级元素作为参照。
	如果上级元素都没有定位方式，则最终查找至body为止。以body作为参照。

	非定位元素，百分比相对于父元素
	绝对定位元素，百分比相对参照物
                                 	
如果父元素本身没有定位方式则为其添加相对定位，因为相对定位不会脱离文档流，不会影响布局

如果上级元素本身有定位方式，则无需为其修改/添加
```

### 粘性定位

```
sticky:
  可以被认为是一个固定定位和相对定位的结合。
  在视口滚动到小于top值时，元素是一个相对定位，大于top值时，元素为固定定位
  
 注意：
  1.需要在嵌套中使用粘性定位（非body嵌套）父元素的高度不能低于粘性定位的高度
  2.必须指定top属性（0也可以）
  3.粘性定位元素只在其父元素之内生效。
  4.父元素不能使用overflow：hidden
```

## flex布局(弹性布局)

```
flex布局，又称弹性布局，用来为盒模型提供最大的灵活性，任何一个容器都可以指定为flex布局

采用flex布局的元素，成为flex容器，简称“容器”，它的所有子元素自动成为容器成员，称为flex项目，简称“项目”。

容器内存在两条轴线，水平的主轴和垂直的交叉轴。
display:flex;
		定义水平方向，水平方向就是主轴。垂直方向就是交叉轴
		定义垂直方向，垂直方向就是主轴。水平方向就是交叉轴
		主轴和交叉轴是根据自己定义的，可变的。
		默认水平的主轴和垂直的交叉轴
		

	注意：
		设为flex布局后，子元素的float，clear和vertical-align，属性将失效

```

### 容器属性（父级）

```
flex-direction:;属性用于定义项目的排列方向，
		默认值：row 主轴为水平方向，起点在左端
			   row-reverse：主轴为水平方向，起点在右端
			   column：主轴为垂直方向，起点在上端
			   column-reverse：主轴为垂直方向，起点在下端
	justify-content:属性用于定义项目在主轴的对齐方式。
			   flex-start:项目主轴起点对齐，默认值。
			   flex-end：项目主轴终点对齐。
			   center:项目主轴居中。
			   space-between:项目在容器中两端对齐，项目之间间距相等
			   space-around：项目之间间距相等，是项目到容器两端的两倍。
			   space-evenly:项目之间间距和项目到容器两端间距相等
	align-items：属性定义项目在交叉轴的对齐方式
			   normal:默认值，项目不设置高度，高度=容器高度。
			   baseline:对齐文本的四线三格的第三条基线对齐。
			   flex-start:容器交叉轴起点对齐
			   flex-end:交叉轴终点对齐
			   center:交叉轴居中对齐。
			   
多行
	弹性布局，弹性布局的项目默认不换行
	flex-wrap:;属性用于定义项目的换行方式
		nowrap:默认值，单行，项目不换行
		wrap：多行，项目换行，首行在上方
		wrap-reverse：多行，项目换行，首行在下方
		
	align-content:;属性用于定义多条轴线在交叉轴的对齐方式
			stretch：默认值，当项目没有高度时，多行的高度占满整个容器。有高度时，无效.
			flex-start:多条轴线交叉轴起点对齐。
			flex-end:多条轴线交叉轴终点对齐。
			center:多条轴线居中对齐
			space-between:	轴线两端对齐，轴线之间的距离相等				
			space-around:	轴线之间间距相等，是轴线到两端的两倍
			space-evenly:间距均相等
			
	注意：此属性只对多行有效
------------------------------------------------------
justify-content: space-evenly可以使每个元素之间和元素距离边距的距离都相等，但是兼容性比较差（iphone的SE上不支持，会失效，相当于没有设置）， space-evenly将剩余空间平均分割，例如有5个元素，这样就有6个相同宽度的间隔空间，间隔空间的数量等于元素的数量加一。

有5个元素，justify-content: space-between最左边和和最右边的元素分别占据最左边和最右边的空间，然后剩余空间平均分割，这样就有4个相同宽度的间隔空间，间隔空间的数量等于元素数量减一。
```

### 项目属性（后代）

```
order:属性用于定义项目的排列顺序，值越小项目越靠前(支持负值)，默认为0
align-self：属性允许单个项目有与其他项目不同的对齐方式。
	align-self属性的优先级>align-items属性
flex-grow:属性用于定义项目的放大比例，主轴存在剩余空间时项目才会放大，
如果每个项目的值都为1时，将均分主轴剩余空间
flex-shink:定义项目的缩小比例，
		默认值为1，表示当空间不足时。所有项目等比例缩小，
		值为0时，表示当空间不足时。项目不缩小，
		取值越大，表示当空间不足时，项目缩小的越快越厉害
flex-basis:属性定义项目所占据的空间，优先级高于width。
```

## 显示与隐藏

```
display:none   隐藏/不占据原来空间
display: block;  显示

visibility:hidden   隐藏/占据原来空间
visibility: visible; 显示

opacity:0; 透明/取值0-1，0为完全透明，1为不透明，0.5半透明，后代元素都会继承，rgba只改变背景颜色的透明度
opacity: 1; 显示
```

## 精灵图

```
一张小图片填满容器。小图片的高度=100%*100%
大图的宽度100%*n个小图宽度
大图的高度100%*n个小图高度

设置精灵图的好处:
	将多张较小的图片放在一张大图上，减少浏览器对服务器的请求
```

## z-index堆叠层级

```
z-index：堆叠层级，对非定位元素和静态定位无效
取值正值，在没有设置层级的元素之上
取值负值，在没有设置层级的元素之下
只能取整值，不能取小数
值越大，元素越靠上
```

## 2D转换&过渡

```
2D转换
	平移 缩放 旋转

transform：2d转换，使...转换/变化
		translate:(X轴，Y轴)平移  
			 translateX:水平X轴平移 正值向右 负值向左
       		 translateY垂直Y轴平移  正值向下 负值向上
       		 translateZ往前平移  正值向前 负值向后(只在三维空间有效)
       	origin:属性定义转化的基准点
       		取值：center top/bottom left/right/number类型的值
       		
       	rotate(360deg);旋转，单位deg
       		 正值，顺时针旋转
       		 负值，逆时针旋转  
       		 可以和origin结合取点
       		 
        scale();缩放，值>1——>放大	 值<1——>缩小
        	一个值的话，影响宽高
        	两个值的话，值一宽度，值二高度     
            
        transform: skew(30deg, 120deg);设置倾斜效果
```

```
过渡
	transition-property: 规定应用过渡的css属性。
						 可以指定某个css属性应用过渡效果，如width，height；
						 可以指定所有css属性应用过度效果，all
	transition-duration:设置过渡的时间  单位s/ms 
	opacity:.1;设置透明度
	transition-timing-function: ease;缓动函数"时间曲线”
								ease：默认值，逐渐减速
								ease-in：加速
								ease-in-out：先加速后减速
								ease-out：减速
								linear：匀速
	transition-delay: 2s;设置过渡效果延迟的时间
	
	
以上四个属性的简写复合属性
		transition：
			值顺序：过渡所花费的时间 过渡延迟时间 过渡的css属性。 缓动函数"时间曲线”  应用过度的时间和应用过度的属性必须值 后俩值无顺序，
```

## filter滤镜

```
filter：滤镜，给图片添加滤镜效果
	值：
		grayscale():给图片添加特效，变成灰色  范围0-100%，值越大，图片越灰
		sepia():褐色，图片为复古风，范围0-100%，
		opacity():图片透视，取值0-1，0完全透明，0.5半透明，1不透明
		hue-rotate()：色相转换，用来改变图片的色相，单位deg
		contrast()：明暗的对比度，明暗程度，值越小图片越暗，值越大图片越亮
		brightness():曝光率，值越大颜色越亮
		invert():反色，类似照片底片效果
		blur():图片的模糊程度，值越大越模糊，px
		drop-shadow(x轴10px，y轴10px，模糊度10px，颜色red)：可以根据图片轮廓添加阴影，值和盒子阴影一样
```

## 3D转换

```
	transfrom-style:preserve-3d;设置元素是在2d平面内，还是三维空间中
		值：
        flat：默认值，指定元素在2d平面内
        preserve-3d;指定元素是在三维空间内
        translateZ():Z轴平移  正值向前 负值向后（需要定义观察者距离和三维空间）
     backface-visiblity:的属性定义元素的背面/反面 面向观察者时是否可见
        值：visible，默认值，背面可见
        	hidden，背面不可见
        		
            
     perspective:100px;设置透视距离，观察者到平面的距离,值越大距离越远，值越小距离越近
     perspective-origin:定义观察者的位置，类似transform-origin属性；
	transfrom：rotate3d(1,1,1,90deg)：前三个值代表xyz轴，0表示不旋转，1表示旋转，后面是旋转的角度
```

## 响应式布局-媒体查询

### 什么是响应式布局？

响应式布局指的是同一个页面在不同的屏幕尺寸下有不同的布局方式。传统的开发方式是pc端开发一套移动端开发一套。而使用响应式布局只要开发一套就够“缺点是css样式较重”。

### 响应式布局实现方案 —— 媒体查询

CSS3 Media Query(媒体查询) @media可以根据不同的屏幕尺寸设置不同的样式，页面适用于PC端，移动端“在调整浏览器试图可以查看”。媒体查询可以用于检测设备“viewpoint(视图窗口)的宽度和高度，旋转方向(横屏或竖屏)，分辨率大小”。

### width与device-width

**width**通常指的是视口宽度。**device-width**指的是屏幕的物理宽度。
例如：一部手机的屏幕分辨率是1136 * 640，竖屏的device-width是640，横屏时是1136，移动端的屏幕基本上都是全屏的所以一般width=device-width。但是**height**与**device-height**的情况不一样(浏览器上方的地址栏和下方的工具栏不算近视图窗口高度之内)，所以一般的媒体查询不采用height。

### 语法规则

#### 直接在css样式中添加

@media mediatype 操作符 (media featrue) { CSS-code}
以@media开头，然后指定设备类型“mediatype”，接着添加操作符，然后在()中规定媒体/设备特征，最后是{代码块“书写格式与css相同(属性名：值)”}

#### 逻辑运算符

- and：一般在拥有多个媒体特征的时候使用，必须条件都满足的情况下会执行样式。
- not：用于排除设备类型，或条件取反。
- only：指定某个媒体设备。
- all：适用于所有设备。

#### 设备类型 mediatype

- screen：适用于电脑，平板，智能手机。
- all：适用于所有类型。
- print：适用于打印机和打印预览。
- speech：适用于屏幕阅读器。

#### 媒体特性 Media Feature

|                        值                        |                             描述                             |
| :----------------------------------------------: | :----------------------------------------------------------: |
|                   aspect-ratio                   |         定义输出设备中的页面可见区域宽度与高度的比率         |
|                      color                       | 定义输出设备每一组彩色原件的个数。如果不是彩色设备，则值等于0 |
|                   color-index                    | 定义在输出设备的彩色查询表中的条目数。如果没有使用彩色查询表，则值等于0 |
|               device-aspect-ratio                |           定义输出设备的屏幕可见宽度与高度的比率。           |
|                  device-height                   |                 定义输出设备的屏幕可见高度。                 |
|                   device-width                   |                 定义输出设备的屏幕可见宽度。                 |
|                       grid                       |             用来查询输出设备是否使用栅格或点阵。             |
|                      height                      |              定义输出设备中的页面可见区域高度。              |
|                 max-aspect-ratio                 |         定义输出设备的屏幕可见宽度与高度的最大比率。         |
|                    max-color                     |            定义输出设备每一组彩色原件的最大个数。            |
|                 max-color-index                  |          定义在输出设备的彩色查询表中的最大条目数。          |
|             max-device-aspect-ratio              |         定义输出设备的屏幕可见宽度与高度的最大比率。         |
|                max-device-height                 |              定义输出设备的屏幕可见的最大高度。              |
|                 max-device-width                 |               定义输出设备的屏幕最大可见宽度。               |
|                    max-height                    |            定义输出设备中的页面最大可见区域高度。            |
|                  max-monochrome                  |   定义在一个单色框架缓冲区中每像素包含的最大单色原件个数。   |
|                  max-resolution                  |                    定义设备的最大分辨率。                    |
| max-width 定义输出设备中的页面最大可见区域宽度。 |                                                              |
|                 min-aspect-ratio                 |      定义输出设备中的页面可见区域宽度与高度的最小比率。      |
|                    min-color                     |            定义输出设备每一组彩色原件的最小个数。            |
|                 min-color-index                  |          定义在输出设备的彩色查询表中的最小条目数。          |
|             min-device-aspect-ratio              |         定义输出设备的屏幕可见宽度与高度的最小比率。         |
|                 min-device-width                 |               定义输出设备的屏幕最小可见宽度。               |
|                min-device-height                 |              定义输出设备的屏幕的最小可见高度。              |
|                    min-height                    |            定义输出设备中的页面最小可见区域高度。            |
|                  min-monochrome                  |    定义在一个单色框架缓冲区中每像素包含的最小单色原件个数    |
|                  min-resolution                  |                    定义设备的最小分辨率。                    |
|                    min-width                     |            定义输出设备中的页面最小可见区域宽度。            |
|                    monochrome                    | 定义在一个单色框架缓冲区中每像素包含的单色原件个数。如果不是单色设备，则值等于0 |
|                   orientation                    |     定义输出设备中的页面可见区域高度是否大于或等于宽度。     |
|                    resolution                    |         定义设备的分辨率。如：96dpi, 300dpi, 118dpcm         |
|                       scan                       |                  定义电视类设备的扫描工序。                  |
|                      width                       |              定义输出设备中的页面可见区域宽度。              |
|              min-device-pixel-ratio              |                       最小设备像素比。                       |
|                 width/height ：                  | 定义输出设备中的 页面可见区域宽度/高度，输出的是你的网页可见区域的宽高。 |
|              device-width/height ：              | 定义输出设备的屏幕可见宽/高度。不管你的网页是在safari打开还是 |

### CSS实现媒体查询

```
实现响应式布局需要使用媒体查询。
媒体查询语法：
			@media mediatype 连接符/逻辑运算符 查询条件{
				满足查询条件，执行的样式
			}
		@media 媒体查询
		mediatype：设备类型  screen：适用于电脑、平板、智能手机。
		逻辑运算符：and，所有条件都要成立，才能执行{}中的样式。
				  not，不查询指定设备，条件取反(反条件)
				  only，指定某个设备类型
				  orientation：判断设备类型是横屏还是竖屏
				  	landscape：查询横屏
				  	portrait：查询竖屏
		min-width 最小宽度，相当于>=
			如min-width:600px  屏幕>=600时，才执行样式
		max-width，最大宽度，相当于<=
			如max-width:1200px  屏幕<=1200时，才执行样式
		min-height:最小高度
		max-height:最大高度
		
		媒体查询代码写在最下面
		注意：@media查询多个不同屏幕时，依照屏幕尺寸从大到小排列
			 @media查询的样式要放置在样式表底部
```

## webapp

### Native App开发

Native App开发即我们所称的传统APP开发模式（原生APP开发模式），
该开发针对iOS、Android等不同的手机操作系统要采用不同的语言和框架进行开发，
该模式通常是由“云服务器数据+APP应用客户端”两部份构成，APP应用所有的UI元素、
数据内容、逻辑框架均安装在手机终端上。

### Web App开发

Web App开发即是一种框架型APP开发模式（HTML5 APP 框架开发模式），
该开发具有跨平台的优势，该模式通常由“HTML5云网站+APP应用客户端”两部份构成，
APP应用客户端只需安装应用的框架部份，而应用的数据则是每次打开APP的时候，
去云端取数据呈现给手机用户。

### 移动端的解决方案：

1，专用型：PC端页面和移动端页面分别开发。当用户请求页面时，服务器先判断用户的设备类型，
然后根据用户设备类型返回响应类型的页面，PC端一套代码，移动端一套代码。(代表有百度，饿了么)
2，通用型：只设计一个页面，页面本身能够根据不同的浏览器尺寸，显示为不同的样式。
一套代码适应PC端和移动端，这种页面叫做响应式布局页面（苹果官网，bootstrap）

### meta标签

meta标签提供关于HTML文档的元数据。元数据不会显示在页面上，
但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），
搜索关键词等，或其他 web 服务。
meta 标签用于网页的<head>与</head>中

### **属性**

- name：常用的选项有Keywords(关键字) ，description(网站内容描述)，author(作者)，robots(机器人向导)等。
- http-equiv：可用于代替name项，常用的选项有Expires(期限)，Pragma(cache模式)，Refresh(刷新)，Set-Cookie(cookie设定)，Window-target(显示窗口的设定)，content-Type(显示字符集的设定)等。
- content：根据name项或http-equiv项的定义来决定此项填写什么样的字符串。

1. <meta name="generator" contect=""> 用以说明生成工具（如Microsoft FrontPage 4.0）等； 

2. <meta name="keywords" contect="网页关键字"> 页面关键词(告诉搜索引擎页面是与什么相关的)。content规定一个逗号分隔的关键词列表 - 相关的网页。将最重要的关键词放在最前面，让相关的关键词相邻。

3. <meta name="copyright" Content="本页版权归郭盼亚所有">  版权

4. <meta name="description" contect="网页描述文字"> description	规定页面的描述。搜索引擎会把这个描述显示在搜索结果中。定义关键词的meta标记项放在定义描述的meta项之前。

5. <meta name="author" contect="你的姓名"> 定义网页作者

6. <meta name="robots" content="index,follow"> Robots(机器人向导)用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引。

-    robots是一组使用逗号(,)分割的值，
-    通常有如下几种取值：none，noindex，nofollow，all，index和follow。
-    all：文件将被检索，且页面上的链接可以被查询；
-    none：文件将不被检索，且页面上的链接不可以被查询；
-    index：文件将被检索；
-    follow：页面上的链接可以被查询；
-    noindex：文件将不被检索；
-    nofollow：页面上的链接不可以被查询。

7. <meta charset="utf-8"> 申明编码方式

8. <meta http-equiv="refresh" content="6; url=http://fym888.nease.net" > 一个页面过上一定的时间，自动转到另一个页面或者站点去。content中的6表示时间，单位为秒，url=后面是你要转向的网址。

9. <meta http-equiv="refresh" content="10"> 让网页每隔一段时间刷新一次，10秒刷新一次。

10. <meta http-equiv="Content-Type" content="text/html; charset=utf-8" > 告诉浏览器网页所识别的文件类型及语言类型，比如说，我们要让浏览器识别HTM/HTML类型的简体中文网面。

### Web App开发需要增加的标签或设置：

- H5文档类型：

<!DOCTYPE html>  
- viewport 视口设置：
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
viewport视窗，窗口。viewport的宽度决定了html这个标签的宽度
width   宽度，可设为px或 device-width
height    高度，可设为px或 device-height，通常不用设置
    比如：width=device-width表示我们将viewport的宽度设为跟设备一样宽，
    以iPhone6为例，iPhone6的横向分辨率为750，转换之后所代表的css宽度为375px，
    这个时候viewport的宽度就为375px，也即是html的宽度为375px。
    一般设计稿也是以375或者750来出图，这样就可以很方便的在设备上实现页面了。
initial-scale 初始的缩放比例（默认设置为1.0）
minimum-scale 允许用户缩放到的最小比例（默认设置为1.0）
maximum-scale 允许用户缩放到的最大比例（默认设置为1.0）  
user-scalable 是否允许用户通过双指缩放（默认设置为 no 或者 0，因为我们不希望用户放大缩小页面)



- 指定页面为 Web App,全屏模式

~~~
<meta name="apple-mobile-web-app-capable" content="yes" />
~~~

- 指定 Web App 系统状态栏样式：
  隐藏状态栏/设置状态栏颜色：只有在开启WebApp全屏模式时才生效。
  content的值为default | black | black-translucent 。

~~~
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
~~~

- 指定 Web App 的标题：添加到主屏后的标题

~~~
<meta name="apple-mobile-web-app-title" content="天气预报">
~~~

- 禁止自动识别手机号/邮箱地址

~~~：
<meta name="format-detection" content="telephone=no" />
<meta name="format-detection" content="email=no" />
~~~

- 指定 Web App 图标：

~~~
<link rel="apple-touch-icon" sizes="57x57" href="icon57.png" />  
<link rel="apple-touch-icon" sizes="72x72" href="icon72.png" />  
<link rel="apple-touch-icon" sizes="114x114" href="icon114.png" />    
<link rel="apple-touch-icon" sizes="144x144" href="icon144.png" /> 
<link rel="apple-touch-icon" sizes="196x196" href="icon196.png" />
~~~

- 指定 Web App 启动图片：

~~~
<link href="startup-image-320x460.png" media="(device-width: 320px)" rel="apple-touch-startup-image">
<link href="startup-image-640x960.png" media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
~~~

### 视口 viewport 单位

移动互联网发展起来之后，引入了 vw、vh 两个单位，以方便 Web App 和手机页面的开发。
使用 vw、vh 能很好地解决宽度、高度适配问题，比使用 % 单位更高级！
vw、vh可以理解为：
相对于视口的宽度。视口被均分为100单位的vw
相对于视口的高度。视口被均分为100单位的vh
即：
x vw = x% * (viewport width)
x vh = x% * (viewport height)
即可以指定 height: x vh;
也可以指定 height: x vw;
比单纯指定 height: x %; 要有用得多！

```
 @media screen and (max-width:1500px) and (min-width:1200) {
            .nav2 {
                background-image: linear-gradient(to top, rgba(252, 247, 249, 0.986), rgba(252, 247, 249, 0.5));
            }

            .nav1 {
                background-image: linear-gradient(to top, rgba(252, 247, 249, 0.5), rgba(252, 247, 249, 0.1));
            }
        }
```

## 动画

```
animation-name: ;定义动画名称
animation-duration: ;定义动画持续时间
animation-delay:n ;  负值：动画n秒后开始，执行n秒后的样式，之前的不执行(跳过几秒)  正值：延迟n秒之后开始
animation-timing-function: ;规定动画的速度曲线默认是“ease”
	取值：
		ease：默认值，逐渐减速
		ease-in：加速
		ease-in-out：先加速后减速
		ease-out：减速
		linear：匀速				
        
animation-iteration-count: ;定义动画执行的次数，可以是number值(数字)/infinite(无限播放)		
animation-fill-mode: forwards;//规定动画结束的状态
		backwards：动画播放结束，回到初始状态
		forwards：动画播放结束，停留至最终状态。
animation:4s infinite ease-in 2s bgcolor
	动画属性的简写方式。
		animation 前一个时间值，动画所持续的时间。第二个时间值，动画延迟的时间
				  必须值：动画名称，动画所持续的时间
				  
animation-direction: alternate;//规定动画是否在下一周期逆向播放。
	值：
		normal:默认值，始终从起点到终点播放
		alternate:交替播放。
		alternate-reverse:元素反转方向，再交替播放。如:元素默认在左侧，则反转至右侧，再进行交替播放。

animation-play-state: paused;规定动画是否正在运行或停止，默认running运行，paused停止

@keyframes 动画名称{}
@keyframes定义关键帧动画。
form{}初始样式  //可以百分比代替  等同于0%
to{}结束样式 //等同于100%
```

### 动画库

```
 		1. 引用动画库
    <link rel="stylesheet" href="./animate.css">
    
        2. 给需要动画的元素添加class关键字 animate__animated 
        3. 将所需要的动画名称 添加给 class属性。
    <div class="animate__animated  animate__backInDown">哈哈哈</div>
    <p class="animate__animated animate__jackInTheBox">animate.css</p>
    <p class="animate__animated animate__fadeInLeftBig">animate.css</p>
```

## 鼠标样式

```
cursor:;
	设置鼠标的变化
		default:默认正常鼠标指针
		pointer:鼠标变为小手形状
		wait:加载效果
		help:帮助选择效果
		crosshair:十字准星，精准选择效果
		se-resize:拉伸效果，对角调整
		s-resize:垂直调整
		ne-resize:右上角调整
		col-resize:表格样式列调整
		row-resize:表格样式行调整
		zoom-out:缩小镜
		zoom-in:放大镜
		move:上下左右调整，移动选择效果
		text:文本输入标    文本选择/输入效果
		url("图片地址"),auto;  设置指针为自定义图片效果,
					  需要设置下两个属性值:auto/default，不然不显示，
					  推荐32*32的小图片
					  图片要是png/gif格式
					  IE浏览器不支持gif/png等图片

```

## 背景渲染

```
background-clip:;Z属性用于控制背景颜色的渲染区域
	border-box:默认值，渲染border之内的区域(包含border)
	padding-box:渲染padding之内的区域(包含padding)
    content-box:渲染content之内的区域(包含content)
```

## 重复性线性渐变

```
background-linear-gradient()重复线性渐变
```

## 边框裁剪

```
border-image:;边框图片

border-image-slice:;设置四个方向的裁剪距离，
	值为
		number
		fill:边框图片填充内容部分。
		默认边框图片填充border部分，中间的图像部分会被丢弃
border-image-width:;定义边框图片填充的宽度。如果不定宽度，那么默认是元素border的宽。值：number

border-image-outset:length|number;
		作用：规定边框图像超过边框盒的量。
		length：表示设置边框图像（border-image）与边框的距离，默认为0。
		number：代表相应的border-width的倍数。
		
说明：
	1、border-image-outset属性规定边框图像超出边框盒的量，包括上下部和左右部分。如果忽略第四个值，则与第二个值相同。如果省略第三个值，则与第一个值相同。如果省略第二个值，则与第一个值相同。
	2、border-image-outset属性不允许使用任何负值。
```

## 音频视频

```
video:视频
audio:音频
	音视频必须要添加controls属性。
	controls:播放控件。
autoplay:自动播放，必须定义muted才有效。
   muted:静音播放
   loop:循环播放
   preload:是否自动加载(如果使用该属性，则表示视频在页面加载是进行加载，并预备播放)
   
视频格式:
	ogg、MP4、MPEG4、WebM格式

source:定义多个媒体资源
	加载规则：
		浏览器支持第一个视频类型则执行第一个，不支持第一个则匹配第二个视频类型，依次类推...
	注意:当使用source标签定义多个媒体资源时，video/audio标签不能使用src属性，否则source将不会被加载。
	src:媒体资源路径
	type:定义媒体类型
	
mark:标记标签，定义带有记号/标记的文本，需要突出某段文本时使用。
```

## 继承性

```
inherit:;继承，指定某个属性继承父元素的样式
	如width:inherit;继承父元素的宽
		background-color:inherit;继承父元素的背景颜色
子元素定义了或者自带默认样式优先级最高，默认不继承，只能自己加样式，不会去继承父元素的样式

```

## 表格

```
table定义表格
	caption定义表格标题
	tr定义表格中的一行行
	th 定义表格的标题行
	td 表格块
	
	
thead表头
tfoot页脚
tbody主体

rowspan：行合并，用于设置一个单元格占几行。
colspan：列合并，用于设置一个单元格占几列。

border=1 定义表格的边框
cellspacing 是边框与边框之间的间隙大小；
cellpadding 是边框与其内容的间隙大小；
	值：
		number数字

border-collapse: collapse;设置单元格合并
	值：
		separate：默认值，不合并
		collapse：合并
label标签

表格table可以自定义宽高；

writing-mode: vertical-lr;垂直排列


去边框通用：
	 table table tr>td:first-child {
            border-left: none;
        }

        table table tr:first-child>td {
            border-top: none;
        }

        table table tr>td:last-child {
            border-right: none;
        }

        table table tr:last-child>td {
            border-bottom: none;
        }

```

## 边框补充凹凸效果

```
border-style:groove;3D凹槽效果
border-style:ridge; 3D垄起效果
```

## 溢出隐藏

```
                当元素固定宽高，不被内容撑开时，如果内容的宽高超出元素本身的宽高，超出元素边界的内容任然会显示。
            
            
                overflow: 设置元素溢出部分内容的显示方式，默认为显示。
                    值：
                        visible：默认值：内容不会被隐藏，溢出的内容出现在元素大小之外。
                        hidden：溢出的部分不显示。
                        scroll：溢出的内容可以滚动查看，出现xy轴。
                        auto：隐藏溢出内容，根据内容多少显示出现滚动条。
            
             overflow: hidden; 
             overflow: scroll; 
             overflow: auto; 
             overflow: visible; 

            
                overflow-x: 设置水平方向溢出内容的显示方式。
            
             overflow-x: scroll; 
            overflow-y: 设置垂直方向溢出内容的显示方式。 
            overflow-y: scroll; 
           
             文本不换行 
            white-space: nowrap; 
            
            text-overflow: ellipsis;  文本溢出以省略号...为后缀。 

             
                resize: 允许用户调整元素的大小。
                    值：
                        none：默认值，不能调整元素的大小。
                        horizontal：允许用户调整元素的宽度。
                        vertical：允许用户调整元素的高度。
                        both：允许用户调整元素的宽高。
```

## **HTML特殊转义字符列表**(放在  实体名称  实体编号的上面点击一下就有显示)

**最常用的字符实体
Character Entities**

| 显示 | 说明                        | 实体名称 | 实体编号 |
| ---- | --------------------------- | -------- | -------- |
|      | 半方大的空白（半个中文宽度) | &ensp;   | &#8194;  |
|      | 全方大的空白(中文空格)      | &emsp;   | &#8195;  |
|      | 不断行的空白格(英文空格)    | &nbsp;   | &#160;   |
| <    | 小于                        | &lt;     | &#60;    |
| >    | 大于                        | &gt;     | &#62;    |
| &    | &符号                       | &amp;    | &#38;    |
| "    | 双引号                      | &quot;   | &#34;    |
| ©    | 版权                        | &copy;   | &#169;   |
| ®    | 已注册商标                  | &reg;    | &#174;   |
| ™    | 商标（美国）                | ™        | &#8482;  |
| ×    | 乘号                        | &times;  | &#215;   |
| ÷    | 除号                        | &pide;   | &#247;   |

**ISO 8859-1 (Latin-1)字符集**

## 多选框改变样式

```
用label绑定多选框
	label::after{
	、background-color:red;可以改变多选框
	}
```

## 内嵌网页

```
iframe内嵌式网页，内嵌网页内容多的时候会显示滚动条。
	(行内块元素，不是块元素，margin:0 auto无效，可以设置display变成块元素)
	src:内嵌网页路径	
	frameboeder:定义内嵌网页是否显示边框，0显示1不显示
	scrolling：是否显示滚动条，auto(默认值，内容超出时显示，反之不显示)，no不显示滚动条
	
src属性所加载的页面链接，可作为初始页面显示
	
a超链接:
	target属性定义超链接的打开方式。
		_self:在浏览器当前标签页打开
		_blank:浏览器的新建标签页打开。
		取值为iframe的name值，则表示在指定的内嵌网页中打开链接。
a标签的target属性绑定iframe的name的值，可以设置a标签的页面在iframe中打开
```
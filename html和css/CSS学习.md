#  CSS学习

## 加粗，装饰线

font-weight的使用

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-ubZn0Uyy-1662168010822)(D:\Roaming\Typora\typora-user-images\image-20220713094523644.png)]

**text-decoration**文本的装饰

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-HJGQYgxv-1662168010823)(D:\Roaming\Typora\typora-user-images\image-20220713094810155.png)]

## 缩进

text-indent属性用于设置首行文本的缩进

- 其属性值可为不同单位的数值、em字符宽度的倍数、或相对于浏览器窗口宽度的百分比%，允许使用负值。
- 建议使用em作为设置单位。
- 1em 就是一个字的宽度。如果是汉字的段落，1em 就是一个汉字的宽度

## 宽高属性

width: 100px;

height: 100px;

PX像素 

当没有宽度时，块元素宽度为父元素的100%，行内元素宽度靠文本内容撑出

当没有高度时，靠文本内容撑出高度，内容是浮动元素绝对定位，固定定位除外 

## CSS背景

### 背景颜色

background-color: 颜色值;  默认的值是 transparent 透明的

### 背景图片

语法：
background-image : none | url (url) ;
例如:
background-image: url(images/1.png);

### 背景平铺

background-repeat : repeat | no-repeat | repeat-x | repeat-y 

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-rkqrWcW4-1662168010824)(D:\Roaming\Typora\typora-user-images\image-20220713101657621.png)]

### 背景位置

background-position : length || length
background-position : position || position [外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-BKO1k9ls-1662168010824)(D:\Roaming\Typora\typora-user-images\image-20220713101746167.png)]

### 注意

- 必须先指定background-image属性
- position 后面是x坐标和y坐标。可以使用方位名词或者 精确单位。
- 如果指定两个值，两个值都是方位名字，则两个值前后顺序无关，比如left  top和top  left效果一致
- 如果只指定了一个方位名词，另一个值默认居中对齐。
- 如果position 后面是精确坐标， 那么第一个，肯定是 x 第二个一定是y
- 如果只指定一个数值,那该数值一定是x坐标，另一个默认垂直居中
- 如果指定的两个值是 精确单位和方位名字混合使用，则第一个值是x坐标，第二个值是y坐标

## 字体

 **font-family**属性用于设置哪一种字体。

p { font-family:"微软雅黑";}

- 指定多个字体，如果浏览器不支持第一个字体就会尝试下一个直到找到合适的字体，如果都没有，以电脑默认字体为准。

p {font-family: Arial,"Microsoft Yahei", "微软雅黑";}

font-style属性用于定义字体风格，如设置斜体、倾斜或正常字体，其可用属性值如下：[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-JuI866Jw-1662168010825)(D:\Roaming\Typora\typora-user-images\image-20220713102154675.png)]

inherit：当前元素继承父元素的字体样式

oblique：文本为倾斜的状态

## 字间距

设置字符与字符之间的间距 

 letter-spacing: 10px;

## 大小写文本转换

text-transform 文本转换 

    uppercase：大写英文
    
    lowercase：小写英文
    
    capitalize：单词首字母大写*/

如：    text-transform: capitalize;

## 设置行高，行间距 

 line-height设置行高，行间距 

 作用：

    让文本在行间距内垂直居中，不允许用负值

   值：

    normal:设置合理的行间距
    
    number：设置数字，数字会与字体大小相乘设置行间距 
    
    百分比：相当于当前文字大小的百分比进行行间距

## 盒子模型

盒子模型是由内容content、内边距padding、边框border、外边距margin四部分组成 每个盒子除了有自己的大小外

padding撑大盒子，调整元素内容的位置，从元素的边框border开始到内部的内容content之间的距离(多个值的话分：1个值.上下左右 ，2个值.上下 左右 ，3个值.上 左右 下 ，4个值.上 右 下 左)

属性为padding，通过值控制不同边的内边距。

    向内边距：
    
    一个值：表示上下左右内边距
    
    两个值：分别表示上下，左右内边距
    
    三个值：分别表示上，左右，下内边距
    
    四个值：分别表示上右下左内边距

### margin合并：

	外边距：
	
		作用：元素添加外边距后会移动的位置，调整元素与元素之间的距离
	
	margin的合并：
	
			块级元素的上外边距和下外边距有时候会进行合并。
	
			margin的合并只发生在块级元素之间(浮动元素/绝对定位/固定定位除外)。
	
	margin合并的几种情况：

|      | 1.相邻兄弟之间margin的合并；                                 |
| ---- | ------------------------------------------------------------ |
|      | 2.父级元素中的第一个子元素和最后一个子元素外边距会穿透父元素，表现为父元素的外边距，称为父盒子塌陷(子元素设置margin-top父元素跟着一起移动)。详细解释：父级的第一个子级是块标签，在css中使用margin-top时，发现并没有实现上边距，而是父级跟着一起向下移动了，这时候就出现了塌陷问题。 |
|      | **解决方法：**                                               |
|      | 1.给父元素添加边框；                                         |
|      | 2.给父元素设置padding(值不能小于等于0)；                     |
|      | 3.给父元素添加overflow: hidden;。溢出元素部分的内容隐藏。    |
|      | **3.空div的合并。**                                          |
|      | margin合并的计算规则：正正取最大，负负最小值，正负值相加。   |

|      | margin-top合并的解决方法：                                   |
| ---- | ------------------------------------------------------------ |
|      | 1.父元素设置为块状格式化上下文；                             |
|      | 2.父元素设置border-top；                                     |
|      | 3.父元素设置padding-top；                                    |
|      | 4.父元素和第一个子元素之间添加内联元素进行分割。             |
|      | **margin-bottom合并解决方法：**                              |
|      | 1.父元素设置为块状格式化上下文；                             |
|      | 2.父元素设置border-bottom；                                  |
|      | 3.父元素设置padding-bottom；                                 |
|      | 4.父元素和最后一个子元素之间添加内联元素进行分割。           |
|      | 5.父元素设置height。                                         |
|      |                                                              |
|      | **不让空div合并的方法**：                                    |
|      | 1.设置垂直方向的border；                                     |
|      | 2.设置垂直方向的padding；                                    |
|      | 3.在元素内部添加内联元素；                                   |
|      | 4.设置height。                                               |
|      |                                                              |
|      | **块状格式化上下文：BFC**                                    |
|      | 如果一个元素符合BFC的条件，该元素会成为独立的容器，元素内部的元素会垂直的沿着父元素的边框排列，和外部的元素互不干扰。 |
|      | **触发BFC的条件：**                                          |
|      | 1.浮动元素，float除none以外的值；                            |
|      | 2.绝对定位为固定定位，position: absolute/fixed;              |
|      | 3.display为以下任何一个值inline-block等，除块元素之外；      |
|      | 4.overflow除visible以外的值(hidden,auto,scroll)。            |

### 盒子模型特性

- 每个盒子都有内容content、内边距padding、边框border、外边距margin四部分组成
- 每个属性都包括四部分：上右下左（top，right，bottom，left）

### 标准盒子与IE(怪异)盒子模型的表现效果的区别

1. 标准盒子中的width指的是内容区域content的宽度，高也是指的内容区域content的高度

   标准盒子模型的大小=content+padding+border+margin

2. IE(怪异)盒子模型中的width指的是内容content+内边距padding+边框border

   IE(怪异)盒子模型的大小=width(content+padding+border)+margin

## 行元素块元素

html标签按照布局方式可分为：

      块元素，行元素，行内块元素。

####   块元素特点：

      1.独占一行；
    
      2.可以设置宽高，
    
        如果不设置宽高，则显示默认宽高，如果也没有默认宽高，这显示为内容的宽高。
    
    布局方式默认为块元素：
    
      p，h1-h6等。

####    行元素特点：

      1.不独占一行；
    
      2.不能设置宽高；宽高取决于自身的内容；
    
        多个行元素之间会左右排列；
    
        一行到最后显示不下时会自动换行。
    
    布局方式默认为行元素：
    
      b，a等。

#### 行内块元素特点：

      1.不独占一行；
    
      2.可以设置宽高；
    
      多个行内块元素之间会左右排列；
    
      一行到最后显示不下时会自动换行。

####     布局方式默认为行内块：

      img，input等。

display: 改变元素的布局方式。

          值：
    
            block：将元素转换为块元素。
    
            inline：将元素转换为行元素。
    
            inline-block：将元素转换为行内块元素。
    
            none：隐藏一个元素，隐藏后不会显示。

## 导航栏标签

nav标签是导航栏标签

## 基线对齐

#### 基线

      图片和空块的基线在元素的底部，文本基线在文本的中下部(四线三格的第三条线)。
    
    注意：
    
      元素中带有文本，默认其元素的基线对齐以文本为准。

#### 基线对齐（垂直居中）：

      为了让文本和图片进行对齐，两个或多个元素在一行显示，会按照默认的对齐规则对齐(基线对齐)。

vertical-align: 基线对齐的方式。

	值：
	
	        auto：默认值，按照浏览器的默认状态执行。
	
	        middle：中线对齐。
	
	        top：顶部对齐。
	
	        bottom：底部对齐。
	
	        baseline：文本基线对齐(四线三格的第三条线)。

## 元素间隔

 为什么行元素和行内块之间会有间距？

      HTML代码在书写的时候为了保持美观，每个元素会单独写一行，所以元素之间会有空格和回车，这些空格和回车在页面解析的时候会解析为一个空格，间隙就是这个空格造成的。
    
    解决方法：
    
      1.清除元素之间的空格和回车；例如：把所有元素写在同一行；将下一行的开始标签写在上一行的尾部。
    
      2.在文本后面添加空格(针对文本标签)；
    
      3.给元素添加外间距抵消整个间隙；
    
      4.将字符大小改为0。

## 流式布局

元素依次从左到右(行元素、行内块元素)从上到下(块元素)的方式进行排列

### 文档流

- 一个元素内部的子元素采用流式布局是，这个元素内部就会形成一个为文档流，每个子元素在文档流中都有自己的位置。

- 一个元素如果脱离了文档流，就不在参与流式布局，父元素里面不再有它的位置。

- 块元素脱离文档流之后，宽度不在默认为父元素的100%，需要主动设置宽度。
- HTML中所有的标签默认都是static定位，static采用的是流式布局

## 绝对定位，相对定位，固定定位

####     绝对定位

   1.元素添加绝对定位之后，会脱离文档流，位置会被正常文档流中的内容所替代

2. 元素使用的绝对定位之后，位置从左上角出发。

3. 在嵌套中，后代元素会先对外层有定位(非static的定位)的元素的左上角出发，如果都没有定位，则相对页面左上角出发。

4. 给元素添加绝对定位之后，会转换为行内块元素

   #### position: 设置元素的定位方式。

             position：值：
       
               static：默认值，静态定位。
       
               absolute：绝对定位。

   #### 出发位置：

    以有定位方式的父级元素为参考，如果父级元素没有定位方式在往上找，直至找到有定位方式的父级元素位置；如果父级元素都没有定位，位置从浏览器的左上角出发。

   ## 相对定位

   相对定位：position：relative

   | 1.元素使用相对定位之后不会脱离文档流，还占据文档流中的位置。 |
   | :----------------------------------------------------------: |
   |   2.元素使用相对定位之后，位置从自身在文档流中的位置出发。   |
   |      3.子绝父相：子元素使用绝对定位。父元素使用相对定位      |
   |                  位置从父元素的左上角出发。                  |
   |         4.行内元素使用相对定位之后不会转换为行内块。         |

   ## 固定定位

   |                  固定定位：position: fixed;                  |
   | :----------------------------------------------------------: |
   | 1.元素添加固定定位之后，会脱离文档流，不占据文档流中的位置，位置会从被文档流中正常的内容所替代。 |
   |      2.元素使用固定定位之后，位置从浏览器的左上角出发。      |
   | 3.在嵌套中不管外层元素是否有定位，元素只要使用固定定位，位置永远从立刻领取的左上角出发。 |
   |      4.给行内元素添加固定定位之后，会转换为行内块元素。      |

## 	块内居中对齐

		top: 0px;
	
		left: 0px;

 right: 0px;

  bottom: 0px;

 margin: auto;

## 伪类和伪元素

  在选择器后可以通过：添加伪类

  伪类是在一定条件下才能触发的样式

  hover：当鼠标指针在元素悬停时触发

  visited:a标签的专用属性表示访问过的

  focus:当元素成为焦点时触发。

#####   焦点：用户可以交互的元素才能成为焦点。 一个页面中同一时刻只有一个焦点

 first-letter选择文本第一个字

 first-line选择元素文本第一行

 before:前缀伪元素，为元素添加一个前缀

 after:后缀伪元素，为元素添加一个后缀

## 序号选择器

##### 一、不区分类型（根据元素的位置序号找到元素）

  first-child选中同级别中的第一个元素

  last-child选中同级别中的最后一个元素

  nth-child(number):选中同级别中的第几个（从一开始）元素

##### 二：区分类型（根据元素的种类选择元素）

  first-of-type：选中同级别的第一个元素

  last-of-type：选中同级别的最后一个元素

  nth-of-type(number):选中同级别中的第几个（从一开始）元素 

##### 三、奇偶数选择（分类型）

nth-child(odd) 

odd   选择同级别中的所有奇数

even   选择同级别中的所有偶数。

## 无序列表(ul)

list-style: none;清空删除列表项的前缀 

ist-style: circle;改变无序列表样式

1.无序列表：常用导航栏。

        ul：定义无序列表。
    
          默认样式：
    
            上下有16px外边距，值会根据内容文本大小改变；
    
            左内边距40px。
    
        li：列表中的项。
    
      注意：
    
        默认无序列表有"圆点"，可通过css属性改变。

## 有序列表

2.有序列表：

        ol：定义有序列表。
    
          默认样式：
    
            上下有16px外边距，值会根据内容文本大小改变；
    
            左内边距40px。
    
        li：列表中的项。
    
      注意：
    
        默认无序列表有"阿拉伯数字"，可通过html属性改变。
    
        type：列表的类型：
    
          值：
    
            1：默认值，阿拉伯数字。
    
            A：大写英文。
    
            a：小写英文。
    
            I：大写罗马数字。
    
            i：小写罗马数字。

## 自定义列表

3.自定义列表：常用在底部导航群。

        dl：定义自定义列表。
    
          默认样式：
    
            上下有16px外边距，值会根据内容文本大小改变。
    
        dt：定义列表的项。
    
        dd：定义列表项的描述。
    
          默认样式：
    
            左外边距40px。

## 表格

table：定义表格。

        不设置宽度时，宽度被内容撑开；
    
        设置了宽度并且内部内容不设置宽度时，td会按照内容长度比例拉伸。
    
      caption：定义表格的标题。
    
        默认样式：
    
          文本默认在表格的水平居中的位置。
    
      thead：定义表格的表头。
    
        可以省略，浏览器在解析的时候会自动添加。
    
      tr：定义表格的行。
    
      th：定义表头表格的单元格。
    
      tbody：定义表格的主体部分。
    
        可以省略，浏览器在解析的时候会自动添加。
    
      td：定义标准的单元格。

rowspan：行合并，用于设置一个单元格占几行。

colspan：列合并，用于设置一个单元格占几列。

边框合并:  border-collapse: collapse;

cellpadding 是边框与其内容的间隙大小；
cellspacing 是边框与边框之间的间隙大小；

## 字间距行间距

 letter-spacing: 20px; 调整字与字之间的距离

line-height，调整行与行之间的距离

## 阴影

 box-shadow: 5px 5px 5px #ccc, -5px -5px 5px #ccc;

## 页内跳转

把a标签的href属性设置为#XXX时，点击这个a标签里面立刻就会跳转到id值为XXX的元素位置。

## 表单

|             input：定义输入框，按钮等，单标签。              |
| :----------------------------------------------------------: |
| type：定义input的类型(值不同对应的input的功能或样式都会发生改变。) |
|                             值：                             |
|                    text：定义文本输入框。                    |
|                  password：定义密码输入框。                  |
|                  button：定义可点击的按钮。                  |
|       submit：提交按钮，会把表单内的数据提交给服务器。       |
|           reset：重置按钮，清除表单内所有的数据。            |
|               file：文件选择按钮，供文件上传。               |
|             accept：规定了文件上传的类型，text/*             |
| image：定义图片形式的提交按钮，必须把src属性和image结合使用。 |
|                    checkbox：定义复选框。                    |
|                     radio：定义单选框。                      |
|                  value：定义input的初始值。                  |
|            required：输入内容是必须的，不能为空。            |
|               readonly：定义input为只读模式。                |
|                  disabled：禁用input元素。                   |
|            placeholder：定义文本输入框的提示音。             |
|              name：定义文本输入框的名字，唯一。              |
|              maxlength：最多可以输入多少字符。               |
|                   size：定义文本框的宽度。                   |

|              label：给input添加的标注。与id相同              |
| :----------------------------------------------------------: |
|              for：为了让input和label进行绑定。               |
| for的值要跟input的值相同，当点击label时，可以让input自动获得输入焦点。 |

### 多行文本输入框

|     textarea：定义多行文本输入框。     |
| :------------------------------------: |
|        name：规定文本区的名称。        |
| cols：number，规定文本区内的可见宽度。 |
| rows：number，规定文本区内的可见行度。 |
| required：输入内容是必须的，不能为空。 |
|    readonly：定义input为只读模式。     |
|       disabled：禁用input元素。        |
|   maxlength：最多可以输入多少字符。    |

| button：定义可点击的按钮。 |
| :------------------------: |
|    value：按钮的标题。     |

## 分组

fieldset：将表单内容进行分组，会产生一个边框(默认为2px边框，内边距(10px,12px)，左右外边距2px)；

legend：legend是fieldset元素定义的标题(默认在分组边框的上边框内，可以左右移动位置)；

### 分组下拉菜单

```
		    select：定义下拉菜单。
            optgroup：定义选项组。
            option：定义列表中的一个选项内容。
```

## 背景图片

```
 background-image: 设置元素的背景图片。
                    url("图片路径")
                注意：
                    当图片比较小时，默认会以平铺的方式铺满整个背景区域。
                平铺：
                    图片会在水平和垂直两个方向上重复自己，直至背景区域填充完整。
                    
background-repeat: 设置背景图片是否重复显示。
                当背景图片的尺寸小于元素尺寸时，背景图片会重复显示知道铺满整个元素。
                    值：
                        repeat：默认值，平铺/重复出现。
                        no-repeat：不重复。
                        repeat-x：水平平铺。
                        repeat-y：垂直平铺。
                        space：保持图片的大小平铺满整个背景区域，剩余空间作为图片之间的间隙平分。
                        round：保持图片的完整性，根据背景区域图片相对应拉伸填充。
background-attachment: 设置背景图片是否固定。
                    背景图片是否随着页面的其他部分滚动。
                        值：
                            scroll：默认值，背景图片会随着滚动条而滚动。
                            fixed：背景图片不会随着滚动而滚动。                        
```

### 在盒子中的背景图片

```
背景图片默认显示的是图片的原始尺寸，如果背景图片大于元素尺寸，则只能显示图片的一部分(左上角)。
 background-position: 设置背景图片横向和纵向的位置，默认为0 0。
    background-position: -100px -100px; 
            /* 设置为50%可以实现居中。 
            
            
background-size: 设置背景图片的尺寸，分别表示宽和高。
                图片的大小仅设置一个方向，另一个方向根据图片大小自动缩放。
                值：
                  contain：根据容器的最小值设置图片，将图片进行比例缩放，图片会始终包含在容器之内，容器范围可能不被完全占用。
                  cover：根据容器的最大值设置图片的大小，将图片比例缩放至完全覆盖整个容器，图片可能会超出容器。
                        -数值：第一个值为X轴(宽度)，第二个值为Y轴(高度)。
                            单位：
                                px：像素，固定的大小。
                                %：百分比，以容器的大小作为标准进行计算。
                      -值为一个：该值将作用于X轴(宽度)位置，高度为auto，此时的背景图片高度以X轴(宽度)作为参考进行比例缩放。
背景图片尺寸可以通过100%，设置为和元素等宽等高。 
```

## 精灵图

```
section:nth-of-type(2) {
            width: 300px;
            height: 300px;
            /* size是宽高的7倍加% */
            background-size: 700% 700%;
            /*加负号 从x负半轴到0的距离，从0格开始算，每个距离为宽高的一倍  从y正半轴到0的距离，从0格开始算，每个距离为宽高的一倍  */
            /* background-position: -300px -600px; */
            /*不加负号 从x正半轴到0的距离，从0格开始算，每个距离为宽高的一倍  从y负半轴到0的距离，从0格开始算，每个距离为宽高的一倍 */
            /* background-position: 1800px 1500px; */
            /* 不加负号情况   百分比，每格固定为100%，顺序为x正半轴  y负半轴    */
            /* background-position: 600% 500%; */
            /* 加负号情况   百分比，每格固定为100%，顺序为x正半轴  y负半轴    */
            background-position: -100% -200%;
        }
```

## 元素溢出

```
 
                当元素固定宽高，不被内容撑开时，如果内容的宽高超出元素本身的宽高，超出元素边界的内容任然会显示。
            
            
                overflow: 设置元素溢出部分内容的显示方式，默认为显示。
                    值：
                        visible：默认值：内容不会被隐藏，溢出的内容出现在元素大小之外。
                        hidden：溢出的部分不显示。
                        scroll：溢出的内容可以滚动查看。
                        auto：隐藏溢出内容，出现滚动条。
            
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

## 长度单位

- px  表示像素，1px相当于屏幕上最小的一个显示单位

- em 表示当前元素父元素的字体大小

- rem，表示根元素字体大小

- 1vw 表示浏览器窗口宽度的1%

- 1vh   表示浏览器窗口高度的1%

- cm   厘米

- mm   毫米

- pt  磅

## 边框圆角和阴影

```
 border边框：
            border-style: 边框样式；
                值：
                    none：定义无边框；
                    solid：定义实线；
                    double：定义双实线；
                    dashed：定义虚线；
                    dotted：定义点状线；
                    groove：定义3D凹槽效果；
                    ridge：定义3D隆起效果；
            border-width: 边框粗细默认是3px；
            border-color: 边框的颜色默认是黑色(2D)/灰色(3D)。
```

```
圆角：border-radius: 
            可控制四个角的圆角；
                一个值：四个角的圆角；
                两个值：分别代表左上角和右下角、右上角和左下角；
                三个值：分别代表左上角、右上角和左下角、右下角；
                四个值：分别代表左上角、右上角、右下角、左下角；
            单脚设置：
                border-top-left-radius: 20px;
                border-top-right-radius: 30px;
                border-bottom-left-radius: 40px;
                border-bottom-right-radius: 50px;
            圆角半径可以设置为百分比，正方形的元素设置为50%，可以显示为圆形；
            圆角仅仅设置边框和背景为圆形，元素内容还是原来的矩形。
```

```
盒子阴影：box-shadow: inset 5px 5px 5px #cfc,5px 5px 5px #cfc;
            值：
                inset：内阴影，可选。取值相反。
                第一个值：阴影距离盒子的左右距离，正值往右，负值往左，0盒子正下方。
                第二个值：阴影距离盒子的上下距离，正值往下，负值往上，0盒子正下方。
                第三个值：阴影的清晰度(值不能为负)，阴影值越大会以渐变的形式呈椭圆形往外扩散。
                第四个值：阴影的颜色；
            注意：可以一个元素同时添加多个阴影，值之间以逗号隔开。
文本阴影：text-shadow: 5px 5px 5px #cfc;
            值：
                第一个值：阴影距离文本的左右距离，正值往右，负值往左，0文本正下方。
                第二个值：阴影距离文本的上下距离，正值往下，负值往上，0文本正下方。
                第三个值：阴影的清晰度(值不能为负)，阴影值越大会以渐变的形式呈椭圆形往外扩散。
                第四个值：阴影的颜色；
            注意：文本阴影没有inset    可以一个元素同时添加多个阴影，值之间以逗号隔开。
```

## 浮动元素

```
float：设置元素使用浮动布局，浮动有左浮动和右浮动。
                    值：
                        none：默认值，定义无。
                        left：左浮动。
                        right：右浮动。
                预算设置浮动布局之后，会脱离原有的文档流，参与浮动文档流；
                在浮动文档流中，块元素也是横向排列，而且宽度不在继承父元素的100%。
```

```
  鼠标指针设置为超衔接 
            cursor: pointer;
```

```
 使用浮动布局，必须在最后一个浮动元素结束的地方清除浮动，否则会影响后续页面，也会导致父元素不能根据内容显示高度。
```

```
最基本的清除浮动的方法：
                    是在在最后一个浮动元素的后面添加一个元素，设置这个元素clear: both;
```

```
 在不添加新元素的情况下清除浮动
            浮动元素都会有一个共同的父元素，可以为这个父元素添加一个后缀伪元素，在后缀中清除浮动。
        .clear-fix::after{
            content: "";
            display: block;
            clear: both;
        }
```

```
什么是浮动：
            浮动最开始出现是为了让文本环绕图片，但是发现浮动元素可以设置宽高或内联排列，是结于inline和block之间的一个特别存在。
            地方元素直到遇到父级元素或者同级浮动元素的边沿是停下，多个浮动元素相遇会按照内联的排列方式进行排列。

        使用方法：
            给元素直接添加：float: left/none/right;
                值：
                    none：默认值，元素不浮动，并会显示在其文档流中出现的位置。
                    left：向左浮动，会在页面或者父级元素的左侧。
                    right：向右浮动，会在页面或者父级元素的右侧。
            特点：
                1.元素使用浮动后会在页面/父元素的左边或者右边停留；
                2.元素使用浮动元素之后会脱离文档流，参与浮动文档流；
                3.文本和浮动元素相遇，会在其周围停下来；
                4.多个浮动元素相遇会按照内联的排列方式进行排列。

        为什么需要浮动：
            可以用来创建网页布局，比如左右两端布局栏。
        
        为什么需要清除浮动：
            当子元素设置了float属性之后，且父元素没有设置高度，而是由资源近视撑出，则导致父元素高度塌陷；
            多个浮动元素内联排列，会覆盖页面中正常的文档流中的内容。
        
        清除浮动方法：
            1.加高法：给父元素添加高度，值等于大于浮动子元素的高度，把浮动元素关在有高度的盒子之内；
            2.clear: both;给浮动元素添加，添加后可以控制当前元素不以内联排列的方式去找其他浮动元素；
            3.隔墙法：给浮动元素之间添加clear: both;让两个浮动元素之间添加一堵墙隔开。
```

## flex布局（弹性布局）

```
弹性布局演示小网站https://ghbjayce.github.io/FlexTool/
弹性布局，又称为flex布局布局，是css3.0新增的布局方式。
        弹性布局，用来给盒模型提供最大的灵活性。
        任何一个容器，都可以被设置弹性布局。
        采用弹性布局的标签，父元素被称为flex容器，简称为“容器”；它的所有子元素自动成为容器成员，子元素称为flex项目，简称为“项目”；
        flex布局的属性：
            容器属性和项目属性。
        容器默认存在两根轴线：
            水平方向的主轴和垂直方向的交叉轴。
```

### 父级属性

```
用于定义弹性布局     display：flex；
flex布局，会影响子元素的布局方式。
                flex布局中的元素，子元素不在参与原有的流式布局，而是参与弹性布局。
                flex中，无论是行元素还是块元素，都会按照flex的方向进行排列。
                

 flex-direction: 设置弹性布局中项目的排列方向。
                    值：
                        row：默认值，项目从左到右主轴排列，起点在左端。
                        row-reverse：项目从右往左排列，起点在右端。
                        column：项目从上往下交叉轴排列，起点在顶端。
                        column-reverse：项目从下往上交叉轴排列，起点在下端。
                        
                        
注意：项目从左往右排列的时候，起始线在左端，反之则在右端。
justify-content: 项目在主轴的对齐方向。
                    值：
                        flex-start：所有的项目在起始线对齐；
                        flex-end：所有的项目在终止线对齐；
                        center：所有项目在中间线对齐；居中；
                        space-around：项目两端间距相等，项目之间的间距相等，是项目到两端的2倍。
                        space-between：项目两端对齐，项目之间的间距相等。
                        space-evenly：项目之间的间距与项目到两端的间距相等。   
                        
                        
                        
align-items: 定义当行项目在交叉轴如何对齐。
                    值：
                        center：项目在交叉轴中点对齐。
                        flex-start：项目在交叉轴的起点对齐。
                        flex-end：项目在交叉轴的终点对齐。
                        
flex-wrap: 定义项目在主轴一行排列不下时，如何换行。
                    值：
                        nowrap：默认值，不换行。
                        wrap：换行显示，第一行在上方。
                        wrap-reverse：换行显示，第一行在下方。
                        
align-content: 定义多跟轴线在交叉轴如何对齐。如果项目只有一根轴线，则该属性不起作用。
                    值：
                        center：多跟轴线在交叉轴的中点对齐。
                        flex-start：多条轴线在交叉轴的起点对齐。
                        flex-end：多条轴线在交叉轴的终点对齐。
                        space-around：轴线两端的间距相等，轴线之间的间距相等，是轴线两端的2倍。
                        space-between：多条轴线两端对齐，轴线之间间距相等。
                        space-evenly：轴线两端的间距与轴线之间的间距相等。
                        
 flex布局默认不换行
 
 
```

### 项目属性（子元素属性）

```
order：定义项目的排列顺序。
                    值：
                        number，默认为0，值越小越靠前。
                        

flex-grow: 定义项目的放大比例。
                    值：
                        number，默认值为0，存在剩余空间，也不放大。
                            放大空间为主轴的剩余空间。
                            
                            
align-self: 允许当个项目有与其他的项目在交叉轴有不同的对齐方式。
             align-self: end; 
            flex-basis: 定义项目占据的主轴空间。
             flex-basis: 20%;                         
                     
flex-shrink: 定义项目的缩小比例。
                    值：
                        number，默认值为1，当空间不足时，该项目将缩小。
                        如果所有项目flex-shrink: 都为1，表示当空间不足时，项目将等比例缩小。
                        如果flex-shrink取值为0时，表示当空间不足时，项目不缩小。
                        flex-shrink: 属性取值越大，表示当空间不足时，项目缩小的越快，空间缩小的越厉害。                 
```

## 清除浮动的方法

##### 1.  给父级div定义height

```
原理：
    父级元素手动定义height，就解决了父级div无法获取到高度的问题。
优点：
    简单、代码少、容易掌握。
缺点：
    只适合高度固定的布局，要给出精确的高度；如果高度和父级div不一样时，回产生问题。
建议：
    只建议高度固定的布局使用。
```

##### 2.结尾处添加空div标签  clear: both;

```
原理：
    添加一个空div，利用css提供的clear: both;清除浮动，让父级div能自动获取到高度。
优点：
    简单，代码少，容易掌握，浏览器支持，不容易出现怪问题。
缺点：
    如果页面的浮动布局多，就要增加很多空div，让人感觉很不好。
```

##### 3.父级div定义 伪类:after 和 zoom

```
原理：
    IE8以上和非IE浏览器才支持:after，原理与方法2类似，zoom(IE专有属性)可解决IE6，IE7的浮动问题。
优点：
    浏览器支持，不容易出现怪问题，目前国内大型网站都有使用。
缺点：
    代码多，原理不易理解，要两句结合才能使浏览器都支持。
建议：
    建议定义公共类，以减少代码。
    
    清除浮动的代码：
    .clear-fix::after{
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            height: ;
        }
        .clear-fix{
            zoom: 1;
        }
```

##### 4.父级div定义 overflow: hidden;

```
原理：
    必须定义width或zoom: 1; 同时不能定义height，使用overflow: hidden;时，浏览器会自动检测浮动区域的高度。
优点：
    简单，代码少，浏览器都支持。
缺点：
    不能和position结合使用，因为超出的部分会被隐藏。
```

##### 5.父级div定义 overflow: auto;

```
原理：
    必须定义width或zoom: 1; 同时不能定义height，使用overflow: auto;时，浏览器会自动检测浮动区域的高度。
优点：
    简单，代码少，浏览器都支持。
缺点：
    内部宽高超过父级div时，会出现滚动条。
```

##### 6.父级div也一起浮动

```
原理：
    所有代码一起浮动，就变成了一个整体。
优点：
    无。
缺点：
    会产生未知问题。
```

##### 7.父级div定义 display: table;

```
原理：
    将div属性变成表格。
优点：
    无。
缺点：
    会产生新的未知问题。
```

##### 8.结尾处添加br标签 clear: both;

```
原理：
    父级div定义zoom: 1;来解决浮动问题，结尾处添加br标签 clear: both;
```
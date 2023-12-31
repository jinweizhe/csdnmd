# 字体属性

字体属性：CSS Fonts (字体)属性用于定义字体系列、字体大小、字体粗细、和文字样式（如斜体）等

## 字体系列 font-family 

font-family 属性定义文本的字体系列

### 语法

`选择器 { font-family: 'Microsoft YaHei', tahoma, arial, 'Hiragino Sans GB'; }`

### 属性值

| 值          | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| family-name | 字体名称。按优先顺序排列。以逗号隔开。如果字体名称包含空格或中文，则应使用引号括起。默认值：取决于浏览器。 |

- 多个字体之间使用英文逗号隔开

- 应包含多个字体名称作为“后备”系统，以确保浏览器/操作系统之间的最大兼容性

- 字体名可以不加引号，如果字体名称不止一个单词，则必须用引号引起来，例如："Times New Roman"

- 尽量使用系统默认自带字体，保证在任何用户的浏览器中都能正确显示

- 浏览器默认字体是微软雅黑，设置多个字体默认使用第一个，如果没有依次使用后面的，都没有，使用默认字体

## 字体大小 font-size

font-size 属性定义字体大小

### 语法

`选择器 { font-size: 20px; }`

### 属性值

| 值                                                   | 描述                                                         |
| :--------------------------------------------------- | :----------------------------------------------------------- |
| xx-small/x-small/small/medium/large/x-large/xx-large | 把字体的尺寸设置为不同的尺寸，从 xx-small 到 xx-large。默认值：medium。 |
| smaller                                              | 把 font-size 设置为比父元素更小的尺寸。                      |
| larger                                               | 把 font-size 设置为比父元素更大的尺寸。                      |
| **length**                                           | 把 font-size 设置为一个固定的值。                            |
| %                                                    | 把 font-size 设置为基于父元素的一个百分比值。                |

- 常用length设置字体大小，单位有px、em、rem
- px是像素的意思，是网页中最常用的单位
- 一般浏览器默认字体大小为16px，不同浏览器默认字体大小不一致，一般要明确字体大小
- 设置整个页面的字体大小放在body或者html选择器中

## 字体粗细 font-weight

font-weight 属性设置文本字体的粗细

### 语法

`选择器 { font-weight: 700; }`

### 属性值

| 值                                                       | 描述                                                        |
| :------------------------------------------------------- | :---------------------------------------------------------- |
| normal                                                   | 默认值。定义标准的字符。相当于数字值400                     |
| bold                                                     | 定义粗体字符。相当于数字值700                               |
| bolder                                                   | 定义更粗的字符。                                            |
| lighter                                                  | 定义更细的字符。                                            |
| 数字取值：`100 |200 |300 |400 |500 |600 |700 |800 |900 ` | 定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。 |

- 实际开发中数字表示字体粗细更加常用

## 文字样式 font-style

font-style 属性设置文本的是否为斜体

### 语法

`选择器 { font-style: normal; }`

### 属性值

| 值     | 描述                                             |
| :----- | :----------------------------------------------- |
| normal | 默认值。正常字体；浏览器显示一个标准的字体样式。 |
| italic | 斜体；浏览器会显示一个斜体的字体样式。           |

实际开发中很少给字体设置斜体，一般都是把具有斜体样式的标签 i em设置为normal

## 字体属性综合 font

font 简写属性在一个声明中设置所有字体属性。

### 语法

可设置的属性是（按顺序）：

`选择器 { font: font-style font-weight font-size/line-height font-family; }`

### 属性值

参照各个字体属性。

- 使用 font 属性时，必须按上面语法格式中的顺序书写，不能更换顺序，并且各个属性间以空格隔开
- 必须保留 font-size 和 font-family 属性，不能省略，否则 font 属性将不起作用
- 省略不写的属性使用该属性的默认值

## 总结

列举了常用的字体属性，完整的字体属性：https://www.runoob.com/cssref/css-reference.html#font

| 属性        | 释义     | 用法                                                         |
| ----------- | -------- | ------------------------------------------------------------ |
| font-family | 字体     | 实际工作中按照团队约定来写字体                               |
| font-size   | 字体大小 | 我们通常用的单位是px像素，一定要跟上单位                     |
| font-weight | 字体粗细 | 记住加粗是700或者bold，不加粗是normal或者400记住数字不要跟单位 |
| font-style  | 字体样式 | 记住倾斜是italic，不倾斜是normal，工作中我们最常用normal     |
| font        | 字体连写 | 1. 字体连写是有顺序的不能随意换位置；2. 其中字号font-size和字体font-family必须同时出现 |

# 文本属性

CSS Text（文本）属性可定义文本的外观，比如文本的颜色、对齐文本、文本缩进、行间距、装饰文本等。

## 文本颜色 color 

color 属性用于定义文本的颜色

### 语法

`选择器 { color: 颜色值; }`

### 属性值

| 值           | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| 预定义颜色名 | 规定颜色值为颜色名称的颜色，比如 red、blue等。一般用于开发中测试颜色 |
| 十六进制值   | 规定颜色值为十六进制值的颜色，比如 #ff0000）。开发中最常用的颜色表示方式 |
| RGB 值       | 规定颜色值为 rgb 代码的颜色，比如 rgb(255,0,0)）。           |
| ==RGBA== 值  | 与RGB相同，只是在RGB模式上新增了Alpha透明度，比如 rgba(0, 0, 0, 0.2) |

### 十六进制取值

十六进制用法：`选择器 { color: #RRGGBB; }` 或者  `选择器 { color: #RGB; }`

- RR：红色值。十六进制正整数

  GG：绿色值。十六进制正整数

  BB：蓝色值。十六进制正整数

- 以上三个参数，取值范围为：00 - FF，参数必须是两位数。对于只有一位的，应在前面补零
- 如果每个参数各自在两位上的数字都相同，那么本单位也可缩写为 #RGB 的方式。例如：#FF8800 可以缩写为 #F80。
- 取值不区分大小写，使用#加任意六位十六进制数字可以表示一种颜色，十六进制表示颜色更加灵活，开发最常用

### RGB取值

RGB用法：`选择器 { color: RGB(R,G,B); }`

- R：红色值。正整数 | 百分数

  G：绿色值。正整数 | 百分数

  B：蓝色值。正整数 | 百分数

- 以上三个参数，正整数值的取值范围为：0 - 255。百分数值的取值范围为：0.0% - 100.0%。

- 超出范围的数值将被截至其最接近的取值极限。如：rgb(300,0,0)会被解析为rgb(255,0,0)

- 正整数值255对应百分比数值100%，如：rgb(255,255,255) = rgb(100%,100%,100%) = #FFFFFF = #FFF

- RGB色彩是通过对红(R)、绿(G)、蓝(B)三个颜色通道的变化和它们相互之间的叠加来得到各式各样的颜色的

### ==RGBA==取值

RGBA用法：`选择器 { color: RGB(R,G,B, A); }`

- R：红色值。正整数 | 百分数

  G：绿色值。正整数 | 百分数

  B：蓝色值。正整数 | 百分数

  A：Alpha透明度。取值0 - 1之间。

- 其余用法与RGB相同，只是在RGB模式上新增了Alpha透明度

## 对齐文本 text-align

text-align 属性用于设置元素内文本内容的水平对齐方式

### 语法

`选择器 { text-align: center; }`

### 属性值

| 值          | 描述                                     |
| :---------- | :--------------------------------------- |
| left        | 把文本排列到左边。默认值：由浏览器决定。 |
| right       | 把文本排列到右边。                       |
| center      | 把文本排列到中间。                       |
| ==justify== | 实现两端对齐文本效果。                   |

## 文本缩进 text-indent

text-indent 属性用来指定文本的第一行的缩进，通常是将段落的首行缩进

### 语法

`选择器 { text-indent: 2em; }`

### 属性值

| 值     | 描述                               |
| :----- | :--------------------------------- |
| length | 定义固定的缩进。默认值：0。        |
| %      | 定义基于父元素宽度的百分比的缩进。 |

- 通过设置该属性，所有元素的第一行都可以缩进一个给定的长度，该长度可以是负值
- em 是一个相对单位，就是当前元素文字的字体大小， 如果当前元素没有设置字体大小，则会按照父级元素的字体大小，如果父级都没有设置字体大小，则相对于浏览器的默认字体大小​     

### 例子

```css
/* 情况1：1em=16px */
body>div{
    font-size: 16px;
    text-indent: 2em;
}

/* 情况2：1em=20px */
body>div{
    font-size: 20px;
    text-indent: 2em;
}

/* 情况3：1em=16px，谷歌浏览器默认字体大小 */
body>div{
    text-indent: 2em;
}
```

## 行高 line-height

line-height 属性用于设置行间的距离（行高）。

### 语法

`选择器 { line-height: 20px; }`

### 属性值

| normal | 默认。设置合理的行间距。                             |
| ------ | ---------------------------------------------------- |
| number | 设置数字，此数字会与当前的字体尺寸相乘来设置行间距。 |
| length | 设置固定的行间距。                                   |
| %      | 基于当前字体尺寸的百分比行间距。                     |

- 行高的属性值不能为负值

### 行高属性值的使用

#### 直接设置固定值：length

length是直接设置固定的行高，如下直接设置行高为100px

```css
p{  
    line-height: 100px;
}
```

#### 相对值：number

number相对值是相对于font-size而言

number是一种倍数关系，相对于当前元素字体大小的多少倍，如下：line-height的值为 100px * 1.5

```css
p{
    font-size: 100px;
    line-height: 1.5;
}
```

#### 相对值：%

%相对值也是相对于font-size而言

%是一种百分比关系，相对于当前元素字体大小的百分比，如下：line-height的值为 100px * 150%

```css
p{
    font-size: 100px;
    line-height: 150%;
}
```

### 行高的理解

行高是包括内容区与以内容区为基础对称拓展的空白区域。

line-height属性会影响行框的布局。在应用到一个块级元素时，它定义了该元素中基线之间的最小距离而不是最大距离。

line-height 与 font-size 的计算值之差（在 CSS 中成为“行间距”）分为两半，分别加到一个文本行内容的顶部和底部。可以包含这些内容的最小框就是行框。

简单理解：文本中的每一个字符都有一个不可见的框，这些框又被放在两条不可见的横线中（垂直居中），两条横线的距离就是行高

![img](https://s2.loli.net/2022/06/24/MNlIrwyo2BD6XqE.png)

详细理解：一般情况下，行高也可以认为是相邻文本行基线间的垂直距离。

而基线（base line）并不是汉字文字的下端沿，而是英文字母“x”的下端沿。下图中两条红线之间的距离就是行高，上行的底线和下一行顶线之间的距离就是行距，而同一行顶线和底线之间的距离是font-size的大小，行距（行间距）的一半是半行距（半行间距）。

![img](https://s2.loli.net/2022/06/24/BlbfyWg8qFukNhX.jpg)

### 通过设置行高间接设置行间距

在css中并没有直接可以设置行间距的属性，所以我们就需要借助行高属性line-height来控制行间距，line-height（行高）的值越大，那么行间距就越高。我们可以使用line-height属性来设置行高，进而调整行间距。

通过上面的学习可以知道，上下两行文本之间的间距（行间距）等于 line-height - font-size

通过这个公式，就可以算得到：行间距 =  line-height - font-size。

假如font-size: 20px，现在要设置10px的行间距，则可以得到行高为30px

### 通过设置行高可以使单行文本垂直居中

CSS 没有给我们提供文字垂直居中的代码， 这里我们可以使用一个小技巧来实现

解决方案: 让文字的行高设置成盒子的高度，这样就可以让文字在当前盒子内垂直居中

简单理解: 行高的上空隙和下空隙把文字挤到中间了

- 如果行高小于盒子高度，文字会偏上
- 如果行高大于盒子高度，则文字偏下

## 装饰文本 text-decoration

text-decoration 属性规定添加到文本的修饰。可以给文本添加下划线、删除线、上划线等。

### 语法

`选择器 { text-decoration: underline; }`

### 属性值

| 值            | 描述                     |
| :------------ | :----------------------- |
| **none**      | 默认。去除文本的装饰线。 |
| **underline** | 定义文本的下划线。       |
| overline      | 定义文本的上划线。       |
| line-through  | 定义文本的删除线。       |

- a标签自带下划线，开发中经常把a标签的下划线去掉，配合:hover选择器再添加下划线

## 总结

列举了常用的文本属性，完整的文本属性：https://www.runoob.com/cssref/css-reference.html#text

| 属性            | 释义     | 用法                                             |
| --------------- | -------- | ------------------------------------------------ |
| color           | 文本颜色 | 常用十六进制，而且可以使用简写形式，#fff         |
| text-align      | 文本对齐 | 可以设定文字水平的对齐方式：居左、居中、居右     |
| text-indent     | 文本缩进 | 通常用于段落首行缩进2个字的距离text-indent: 2em; |
| line-height     | 行高     | 控制行与行之间的距离                             |
| text-decoration | 文本装饰 | 记住添加下划线underline，取消下划线none          |

# 给新闻页面添加样式

https://mid.hao123.com/mid?from=&key=9604673052811714604&type=rec

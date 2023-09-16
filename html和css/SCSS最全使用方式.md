

> 安装编译不讲了,这里只讲语法
> [此笔记参照此视频第八集往后制作](https://www.bilibili.com/video/BV17W411w7nL?p=1&vd_source=54b92ea953eb0a7281545e66410fc2f5)
## 注释
```js
//多行注释
/* 内容 */

//单行注释
// 内容

//快捷键
ctrl+/   //windows
command+/ //apple
```
## 编译输出的css格式
```js
nested  嵌套
compact  紧凑
expanded  扩展
compressed  压缩
```
## 变量
```js
//定义变量
$ 变量名 : 属性值

//例如
//定义变量border,值为1px solid #ccc
$border:1px solid #ccc
$width:200px
//使用
div{
	width:$width;
	hight:$width;
	border:$border
}
//上面的意思就是给div定义宽高200px,边框1px实线灰色
```
## 嵌套
```js
//如下格式
ul{
width:200px
  li{
   width:100px
     p{
      border:1px solid red
    }
  }
}
//等同于
ul{
 width:200px
}
ul li{
 width:100px
}
ul li p{
 border:1px solid red
}
```
### 嵌套时调用父选择器
```js
ul{
width:200px
  li{
   width:100px
     p{
      border:1px solid red
      :hover{
			color:red
		}
    }
  }
}
//等同于
ul{
 width:200px
}
ul li{
 width:100px
}
ul li p{
 border:1px solid red
}
ul li p :hover{  //这样的话中间有个空格
 border:1px solid red
}
//修改如下:
---------------------------------------------------------------------
ul{
width:200px
  li{
   width:100px
     p{
      border:1px solid red
      &:hover{  //&代表子而不是后代
			color:red
		}
    }
  }
}
//等同于
ul{
 width:200px
}
ul li{
 width:100px
}
ul li p{
 border:1px solid red
}
ul li p:hover{  //这样的话中间没有空格了
 border:1px solid red
}
```
### 属性嵌套
```js
body{
    font-size: 20;
    font-weight: 700;
    border: 1px solid;
    border-left: 0;
    border-right: 0; //这里面的font和border都拥有多个属性,这时可以用属性嵌套
}
//修改如下
body {
    font: {
        size: 20;
        weight: 700;
    };
    border: 1px solid {
        left: 0;
        right: 0;
    };
}
//效果同上
```
## 混合MiMins
**可以认为是有名字的定义好的样式,可以在任意地方使用,也可以添加参数**
```js
//格式
@mimin 名字 (参数1,参数2...){}

//不加参数写法
@mixin alert {
    color:#ccc;
    background-color: red;
    //也可以在下面添加嵌套元素
    a{
      color:write
    }
}

// 使用
.alert-warning {
     @include alert()
}

//等同于
.alert-warning{
    color: #ccc;
    background-color: red;
}
.alert-warning a{
	color:write
}
-----------------------------------------------------------------------------------------------------------

//加参数写法
@mixin alert($text-color,$background-color) { //参数必须加$开头(跟变量命名方式一样,多个参数需要加逗号)
    color:$text-color;
    background-color: $background-color;
    //也可以在下面添加嵌套元素
    a{
      color:darken($background-color,10%)  //darken这个方法可以加深颜色,参数二就是加深的程度
    }
}

// 使用
.alert-warning {
     @include alert(#ccc,red)  //这个按照顺序写的,也可以单独指定
     //@include alert($background-color:red,$text-color:#ccc)  //这样就可以根据参数指定值(不受顺序影响)
}

//等同于
.alert-warning{
    color: #ccc;
    background-color: red;
}
.alert-warning a{
	color:加深后的值
}
```
## 继承/扩展(@extend)-inheritance
```js
.alert {
    padding: 15px;
}
.alert-info {
    @extend .alert;  //继承了.alert的样式
    background-color: #ccc;
}

//等同于
.alert,.alert-info{
    padding: 15px;
}
.alert-info{
    background-color: #ccc;
}

--------------------------------------
//下面这个给继承的样式加了个后代a标签的样式,那么继承于这个alert的class也自动继承了这个a标签样式
.alert {
    padding: 15px;
}
.alert a{
    font-weight: 700;
}
.alert-info {
    @extend .alert;
    background-color: #ccc;
}

//等同于
.alert,.alert-info{
    padding: 15px;
}
.alert a,.alert-info a{
   font-weight: 700;
}
.alert-info{
    background-color: #ccc;
}
```
## Partials与import

> 由于每次使用@import,浏览器都会发出一次请求,都会消耗服务器资源,会让页面显示慢一些,scss扩展了@import功能,可以在一个scss文件里面将其他scss文件包含起来,将它们编译成一个css文件,这样可以把项目需要的样式分割成不同的小部分,用导入的方式把这些小部分包含到一个css文件里面,这些小部分在scss里面就是`Partials`
```js
//创建两个scss文件
//文件一:
body{
    margin: 0;
    padding: 0;
}

//文件二:
@import './app.scss'; //可以简写为 @import 'app'
.alert {
    color: red;
}


//等同于:
body{
    margin: 0;
    padding: 0;
}
.alert {
    color: red;
}
```
## 数据类型 -data type
```js
type-of(5)  //number
type-of(5px)  //number
type-of(hello)  //string
type-of("hello")  //string
type-of(1px solid #000)  //list
type-of(5px 10px)  //list
type-of(#ff0000)  //color
```
## 数字类型
```js
2 + 8  // 10
2 * 8  // 16

8 / 2  // 打印 8/2
// 例如下面表达式,'/'在scss有别的含义
font:16px/1.8 serif   // '/'前面是字号,后面是行间距

// 如下方式可以解决
(8 / 2)  // 4

5px + 5px // 10px
5px - 2 // 3px
5px * 2 // 10px
5px * 2px // 10px*px 注意 px * px 在scss并不是一个可用的单位
(10px / 2px) // 5 两个单位抵消掉
(10px / 2) // 5px 保留单位
3 + 2 * 5px // 13px 先算乘除后算加减
(3 + 2) * 5px // 25px 先算小括号的
```
### 数字类型函数(都有默认返回值)
```js
// abs() 绝对值
abs(10)  // 10
abs(10px) // 10px
abs(-10px) //10px

// round() 四舍五入
round(3.5) // 4
round(3.2) // 3

// ceil() 向上取整
ceil(3.2) // 4
ceil(3.1) // 4

// floor() 向下取整
floor(3.6) // 3

// percentage() //将数字转化百分号形式
percentage(650px / 1000px) // 65%

// min() 得到数字列表最小的
min(1,2,3,4) // 1

// max() 得到数字列表最大的
max(1,2,3,4) // 4
```
## 字符串类型
```js
"ning" + hao // "ninghao"
ning + "hao" // "ninghao"
"ninghao" + 8080 // "ninghao8080"
ning - hao // ning-hao
ning / hao // "ning/hao"
ning * hao //SyntaxError: Undefined operation: "ning times hao". 这里报错了,两个字符串相乘没有意义
```
### 字符串类型函数
```js
//定义一个变量
$greeting: "Hello ninghao"
//输出变量
$greeting // "Hello ninghao"

//以下为字符串类型函数
// to-upper-case() 将所有字母转大写
to-upper-case($greeting) // "HELLO NINGHAO"

// to-lower-case() 将所有字母转小写
to-lower-case($greeting) // "hello ninghao"

// str-length() 返回字符串的长度
str_length($greeting) // 13 包含空格

// str-index() 确定字符串开始位置 (两个参数:参数一:检查的字符串,参数二:判断位置的字符串)
str-index($greeting,"Hello") // 1
str-index($greeting,"ninghao") // 7

// str-insert() 在指定位置插入字符 (三个参数:参数一:插入的目标字符串,参数二:插入的内容,参数三:插入的位置)
str-insert($greeting,".net",14) // "Hello ninghao.net"
```
## 颜色的表示
```js
Hex 
#ff0000 十六进制表示

RGB  
RGB(255,0,0)

String 
red,green,blue

hsl
hsl(0 , 100% , 50%)
```
### 颜色函数一: rgb和rgba
```js
// rgb(红,绿,蓝) 范围(0~255)
background-color: rgb(255, 0, 0);  //等同于css的 background-color: red;
background-color: rgb(100%, 0, 0);  //等同于css的 background-color: red;
background-color: rgb(255, 100, 0);  //等同于css的 background-color: #ff6400;
background-color: rgb(255, 255, 0);  //等同于css的 background-color: yellow;

// reba(红,绿,蓝,透明度) 红绿蓝范围(0~255) 透明度范围(0-1)
background-color: rgba(255, 255, 0 ,0.1); //等同于css的 background-color: rgba(255, 255, 0 ,0.1);
```
### 颜色函数二: hsl和hsla
```js
HSl 
// hsl(色相 , 饱和度 , 明度)
background-color: hsl(0, 100%, 50%); //等同于css的 background-color: red;
background-color: hsl(60, 100%, 50%); //等同于css的 background-color: yellow;

HSLA
// hsla(色相 , 饱和度 , 明度 , 不透明度)
background-color: hsl(60, 100%, 50% , 0.5); //等同于css的 background-color: rgba(255 , 255 , 0 , 0.5);
```
### 颜色函数三: adjust-hue
```js
//定义两个变量
$base-color: #ff0000;
$base-color-hsl: hsl(0,100,50%);

//使用 (两个参数: 参数一:要调整的颜色,参数二:要调整的度数(deg加不加都可以,加上更清楚))
background-color: adjust-hue($base-color-hsl, 137deg);  //等同于 css的 background-color:#00ff48;
background-color: adjust-hue($base-color, 137deg);  //等同于 css的 background-color:#00ff48;  与上面结果一致
```
### 颜色函数四: lighten和darken
```js
// 这两个可以改变颜色的明度(lighten让颜色更亮,darken让颜色更暗)
// 都有两个参数:参数一:要处理的颜色,参数二:增加或减少的明度(在当前颜色的基础上增加或减少)

//这里定义三个变量(颜色和更改明度后的颜色)
$base-color: hsl(222,100%,50%)
$light-color: lighten($base-color,30%)
$darken-color: darken($base-color,20%)

border:1px solid $base-color  //等同于 css的 border:1px solid #004cff;
background-color: $light-color  //等同于 css的 background-color: #99b8ff;
color:$darken-color  //等同于 css的 color: #002e99;
```
### 颜色函数五: saturate和desaturate
```js
// saturate()增加颜色的饱和度(纯度) 
// desaturate()减少颜色的饱和度(纯度)
// 都有两个参数:参数一:要处理的颜色, 参数二:要增加或者减少的饱和度(在原来基础上增加或者减少)

//这里定义三个变量(颜色和更改纯度后的颜色)
$base-color: hsl(221,50%,50%)
$saturate-color: saturate($base-color,50%)
$desaturate-color: desaturate($base-color,30%)

background-color: $saturate-color;  //等同于 css的 background-color: #0051ff;
color:$desaturate-color;  //等同于 css的 color: #667699;
```
### 颜色函数六: opacify和transparentize
```js
// transparentize() 增加透明度(相当于减少不透明度)
// opacify() 增加不透明度
// 都有两个参数:参数一:要处理的颜色, 参数二:要增加/减少的透明度(取值0~1)

//这里定义三个变量(颜色和更改透明度后的颜色)
$base-color: hsla(222,100%,50%,0.5)
$fade-in-color:opacify($base-color,0.3); //增加后不透明度为0.8
$fade-out-color:opacify($base-color,0.2); //减少后不透明度为0.3

background-color: $fade-in-color;  //等同于 css的 background-color: rgba(0 , 76 , 255 , 0.8);
color:$fade-out-color;  //等同于 css的 color: rgba(0 , 76 , 255 , 0.3);
```
## List列表
```js
border:1px solid red; //这就是一个列表 , 里面的数据是空格分割开的
font-family:Courier,"Lucida Console",monospace  //这也是一个列表,使用逗号分割开的
padding: 5px 10px,5px 0  //这个包含两个列表,使用逗号分割开的 , 等同于  padding: (5px 10px)(5px 0) 编译时会去掉括号
```
### 列表函数
```js
// length()  返回列表长度   参数:列表 
length(5px 10px) // 2 
length(5px 10px 5px 0) // 4

// nth()  返回序号号对应的元素(从1开始)   参数:参数一:列表,参数二:序号  
nth(5px 10px,1) // 5px
nth(5px 10px,2) // 10px

// index()  返回对应元素的序号   参数:参数一:列表,参数二:要得到序号的元素  
index(1px solid red , solid) // 2

// append()  在列表里面添加新的元素   参数:参数一:列表,参数二:要添加的元素  
append(5px 10px, 5px) //(5px 10px 5px)

// join()  将两个列表合并为一个列表   
//参数:
//参数一:列表  
//参数二:列表二,  
//参数三(可选,有默认值):分隔符(comma：使用逗号 , 分隔每个列表项；space（默认值）：使用空格   分隔每个列表项；auto：在使用变量时自动处理分隔) 
join(5px 10px, 5px 0)  // (5px 10px 5px 0) 
join(5px 10px , 5px  0 , comma)  // (5px , 10px , 5px , 0) 
```
## Map类型
```js
// 格式
$map: (key1: value1, key2: value2, key3 : value3)

//使用
$colors:(light:#ffffff, dark: #000000)  // (light: #ffffff, dark: #000000)
length($colors) // 2
```
### Map类型函数
```js
//定义变量
$colors:(light:#ffffff, dark: #000000)

// map-get() 根据项目名字得到map的值 参数一:当前map项目 , 参数二: 项目的key
map-get($colors, light) // #ffffff
map-get($colors, dark) // #000000

// map-keys() 得到项目的所有key 参数:当前map项目
map-keys($colors) // ("light" , "dark")

// map-values() 得到项目的所有value  参数:当前map项目
map-values($colors) // (#ffffff , #000000)

// map-has-key() 检测项目是否包含某个key  参数一:当前map项目, 参数二:检测要包含的key 返回boolean类型
map-has-key($colors, light)  // true
map-has-key($colors, gray)  // false

// map-merge() 将两个map类型合并一起 参数:参数一:map项目一,参数二:map项目二
map-merge($colors , (light-gray: #e5e5e5))  // (light: #ffffff, dark: #000000 , light-gray: #e5e5e5)
//可以把结果返回给$colors
$colors: map-merge($colors , (light-gray: #e5e5e5))
//再查看一下$colors
$colors  // (light: #ffffff, dark: #000000 , light-gray: #e5e5e5)

// map-remove() 移除项目key 参数:参数一:当前map项目 参数二:要移除的key1,参数三:要移除的key2, 参数四:......
map-remove($colors,light,dark)  // (light-gray: #e5e5e5)
```
## true/false 布尔值
```js
5px > 3px  //true
5px > 10px  //false
5px < 10px //true
(5px >3px) and (5px > 10px) // false
(5px >3px) and (5px < 10px) // true
(5px >3px) or(5px > 10px) //true
(5px >3px) or (5px < 10px) //true
not(5px > 3px) //false  not代表取反
not(5px < 3px) //true
```
## interpolation
```js
//使用interpolation语法可以在样式选择器或者属性上面使用变量或者表达式

//以下的#{}就是interpolation语法,类似于js的模板字符串,在注释里面放变量,原本写法为: /* 项目当前版本为: $version */
$verson:"0.0.1"; //项目版本号
/* 项目当前版本为: #{$version} */
// 在变量中使用
$name: "info"
$attr: "border"
.alert-#{$name}{
  #{$attr}-color: #ccc
}



//编译后如下
@charset "UTF-8"
/* 项目当前版本为: 0.0.1 */
.alert-info{
  border-color: #ccc
}
```
## Control Directives

> 在定义复杂的mimin或者函数时,可能会用到一些控制的指令,比如做条件的判断(`@if`),当满足了特定的条件后才去做一些事情,或者可能需要去使用`@for`循环一定次数的;来输出一些样式,使用`@each`可以循环的处理在一个列表数据里面的每一个项目,比如要根据列表中的项目循环的输出一些样式,使用`@while`也可以循环的去做一些事情

### @if
```js
//格式:  @if 条件 {...}

//案例
$use-prefixes: false;
.rounded{
    @if $use-prefixes {
        colors:#ccc;
    }
    border-radius: 50%;
}

//等同于
.rounded {
    border-radius: 50%;
}

//案例二
$use-prefixes: true;
.rounded{
    @if $use-prefixes {
        colors:#ccc;
    }
    border-radius: 50%;
}

//等同于
.rounded {
	colors:#ccc;
    border-radius: 50%;
}

//案例三
$theme:"dark";
body{
    @if $theme == dark {
        background-color: black;
    }@else if $theme == light {
        background-color: white;
    }@else {
        background-color: grey;
    }
}

//等同于
body{
    background-color: black;
}
```
### @for
```js
//语法    @for 变量 from <开始值> through <结束值> {...}

//示例
$colums: 4;
// through包含结束的值  to不包含结束的值
@for $i from 1 through $colums { //意思为从1~4之间的循环,循环的每一项用$i表示
    .col- #{$i} {
        width: 100% / $colums * $i;
    }
}

//等同于
.col-1 {
    width: 25%;
}
.col-2 {
    width: 50%;
}
.col-3 {
    width: 75%;
}
.col-4 {
    width: 100%;
}

// 换成to再演示一下
// through包含结束的值  to不包含结束的值
@for $i from 1 to $colums { //意思为从1~4之间的循环,循环的每一项用$i表示
    .col- #{$i} {
        width: 100% / $colums * $i;
    }
}

//等同于
.col-1 {
    width: 25%;
}
.col-2 {
    width: 50%;
}
.col-3 {
    width: 75%;
}
```
### @each
```js
//语法 @each 变量 in 列表 {...}

//示例
$icons: success error warning;
@each $icon in $icons {
    .icon-#{$icon} {
        background-image: url(../images/icon/#{$icon}.png);
    }
}

//等同于
.icon-success{
    background-image: url(../images/icon/success.png);
}
.icon-error {
    background-image: url(../images/icon/error.png);
}
.icon-warning {
    background-image: url(../images/icon/warning.png);
}
```
### @while
```js
// 语法: @while 条件 {...}

//示例
$i: 6;
@while $i > 0 {
    .item-#{$i} {
        width: 5px * $i;
    }
    $i: $i - 2; //每次循环完将$i值减2,不然$i一直大于零就无限循环了
}


//等同于
.item-6 {
    width: 30px;
}
.item-4 {
    width: 20px;
}
.item-2 {
    width: 10px;
}
```
## 用户自定义函数 function
```js
// 语法: @function 名称 (参数1 , 参数2){...}

//定义函数,传入一个key值,可以得到列表的某个key对应的值
$colors: (light:#ffffff, dark: #000000);

@function color($key){
    //@return 可以返回数据
    //map-get($colors , $key )  前面讲过这个方法
    @return map-get($colors , $key )
}

body{
    background-color: color(light);
}

//等同于
body{
    background-color: #ffffff;
}
```
## 警告与错误
```js
//在自己设计的函数或者mimin里面,可以包含一些警告或者错误的提示信息,让用户在错误使用了函数或者mimin时,可以看到这些提示信息
// @warn()方法显示警告  @

$colors: (light:#ffffff, dark: #000000);

@function color($key){
	//当用户传的参数没有在列表$colors里面找到时 给出一个警告提示
    @if not map-has-key($colors,$key){
    	@warn "在$color里没找到 #{$key} 这个key"
    }
    
    @return map-get($colors , $key )
}

body{
    background-color: color(gray);
}

//等同于(这里看控制台的警告信息) (把上面的@warn改成@error就是错误信息了,控制台的WARNING会变成Error)
WARNING: 在$color里没找到 gray 这个key
		 on line 5 of sass/style.scss
```
# 恭喜各位 , 完美撒花
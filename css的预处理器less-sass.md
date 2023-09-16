@[toc]
# CSS预处理器

CSS(Cascading Style Sheet)被译为级联样式表，前端行业中通常称之为“风格样式表（Style Sheet）”，它主要是用来进行网页风格设计的。通过设立样式表，可以统一地控制HTML（XHTML）中各标签的显示属性。可以使人更能有效的控制Web页面（或Web应用程序）外观，可以精确指定Web元素位置，外观以及创建特殊效果的能力。CSS拥有对**网页对象和模型样式编辑能力**，并能够进行初步交互设计，是目前基于文本展示最优秀的表现设计语言。CSS能够根据 不同使用者的理解能力，简化或者优化写法，针对各类人群有较强的易读性。

就CSS本身而言，对于大多数Web前端从业人员来说就不是问题。学过CSS的人都知道，它不是一种编程语言。你可以用它开发网页样式，但是没法用它编程。换句话说，**CSS基本上是设计师的工具，不是程序员的工具**。在程序员的眼里，CSS是很头痛的事情，它并不像其它程序语言，比如说PHP、JavaScript等等，有自己的变量、常量、条件语句以及一些编程语法，**只是一行行单纯的属性描述，写起来相当的费事，而且代码难易组织和维护**。

很自然的，有人就开始在想，能不能给CSS像其他程序语言一样，加入一些编程元素，可以使用变量 、循环 、继承 、自定义方法等多种特性的标记语言，逻辑性得以大大增强，让CSS能像其他程序语言一样可以做一些预定的处理。这样一来，就有了“CSS预处理器（CSS Preprocessor）”。

## 什么是CSS预处理器

CSS预处理器定义了一种新的语言，其基本思想是，**用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作**。通俗的说，CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。CSS预处理器为CSS增加一些编程的特性，无需考虑浏览器的兼容性问题，例如你可以在CSS中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性，**可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处**。

CSS预处理器技术已经非常的成熟，而且也涌现出了很多种不同的CSS预处理器语言，比如说：

- Sass（SCSS）
- LESS
- Stylus
- Turbine
- Swithch CSS
- CSS Cacheer
- DT CSS等。

如此之多的CSS预处理器，那么“我应该选择哪种CSS预处理器？也相应成了最近网上的一大热门话题，在Linkedin、Twitter、CSS-Trick、知呼以及各大技术论坛上，很多人为此争论不休。相比过去我们对是否应该使用CSS预处理器的话题而言，这已经是很大的进步了。到目前为止，在众多优秀的CSS预处理器语言中就属Sass、LESS和Stylus最优秀，讨论的也多，对比的也多。我们推荐使用Sass或者LESS。

## Sass和LESS背景介绍

### Sass背景介绍

Sass是对CSS（层叠样式表）的语法的一种扩充，诞生于2007年，最早也是最成熟的一款CSS预处理器语言，它可以使用变量、常量、嵌套、混入、函数等功能，可以更有效有弹性的写出CSS。Sass最后还是会编译出合法的CSS让浏览器使用，也就是说它本身的语法并不太容易让浏览器识别，因为它不是标准的CSS格式，在它的语法内部可以使用动态变量等，所以它更像一种极简单的动态语言。

其实现在的Sass已经有了两套语法规则：一个依旧是用缩进作为分隔符来区分代码块的；另一套规则和CSS一样采用了大括号（｛｝）作为分隔符。后一种语法规则又名SCSS，在Sass3之后的版本都支持这种语法规则。

Sass 官网：http://sass-lang.com/

Sass 中文网：https://www.sass.hk/

### LESS的背景介绍

2009年开源的一个项目，受Sass的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手。LESS提供了多种方式能平滑的将写好的代码转化成标准的CSS代码，在很多流行的框架和工具中已经能经常看到LESS的身影了（例如Twitter的Bootstrap框架就使用了LESS）。

根据维基百科上的介绍，其实LESS是Alexis Sellier受Sass的影响创建的一个开源项目。当时SASS采用了缩进作为分隔符来区分代码块，而不是CSS中广为使用的大括号（｛｝）。为了让CSS现有的用户使用起来更佳方便，Alexis开发了LESS并提供了类似CSS的书写功能。

LESS 官网：http://lesscss.org

LESS 中文网：http://less.bootcss.com

# Sass

Sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承等等特性。Sass 生成良好格式化的 CSS 代码，易于组织和维护。

SASS是对CSS3(层叠样式表)的语法的一种扩充，它可以使用巢状、混入、选择子继承等功能，可以更有效有弹性的写出Stylesheet。Sass最后还是会编译出合法的CSS让浏览可以使用，也就是说它本身的语法并不太容易让浏览器识别(虽然它和CSS的语法非常的像，几乎一样)，因为它不是标准的CSS格式，在它的语法内部可以使用动态变量等，所以它更像一种极简单的动态语言。

工程越大，css文件越大，重复代码越来越多，会变得难以维护，借助Sass可以提高写css的效率。

浏览器只识别CSS，不会直接识别任何CSS预处理语言(LESS,Sass)，所以，Sass和LESS代码不能直接在浏览器中生效。要想让Sass在浏览器中生效，需要将Sass再转为CSS，安装Sass编译工具可以把Sass转为CSS。

## 安装Sass

Sass基于Ruby语言开发而成，但是两者的语法没有关系，因此安装`sass`前需要安装Ruby。不懂Ruby，照样可以正常使用Sass。只是必须先安装Ruby，然后再安装Sass。

**注：mac下自带Ruby无需在安装Ruby！windows系统需要自己手动安装。**

### 下载Ruby安装文件

window下安装SASS首先需要安装`Ruby`，先从官网[下载Ruby](http://rubyinstaller.org/downloads)并安装。

![image-20220115163731562](https://img-blog.csdnimg.cn/img_convert/2168b58adb26a0574b9b4e25925b386d.png)

### 安装Ruby

Ruby安装文件下载好后，可以按应用软件安装步骤进行安装Ruby。在安装过程中，请注意勾选`Add Ruby executables to your PATH`添加到系统环境变量。如下图：

![image-20220115164310136](https://img-blog.csdnimg.cn/img_convert/dc75ae11221e84b6ed13e605fc9fd61e.png)

安装完成后需测试安装有没有成功,运行`CMD`输入以下命令：

```js
ruby -v
//如安装成功会打印
ruby 3.1.0p0 (2021-12-25 revision fb4df44d16) [x64-mingw-ucrt]
```

### 安装Sass

`Ruby`自带一个叫做`RubyGems`的系统，用来安装基于`Ruby`的软件。我们可以使用这个系统来 轻松地安装`Sass`。要安装最新版本的`Sass`，你需要输入下面的命令：

```js
gem install sass
```

安装完成之后，你应该通过运行下面的命令来确认应用已经正确地安装到了电脑中：

```js
sass -v
// 安装成功后会输出：
Ruby Sass 3.7.4
```

## 编译Sass

`sass`编译有很多种方式，如命令行编译模式、sublime插件`SASS-Build`、编译软件`koala`、前端自动化软件`codekit`、Grunt打造前端自动化工作流`grunt-sass`、Gulp打造前端自动化工作流`gulp-ruby-sass`等。

### 命令行编译

```js
//单文件转换命令
sass input.scss output.css

//单文件监听命令
sass --watch input.scss:output.css

//如果你有很多的sass文件的目录，你也可以告诉sass监听整个目录：
sass --watch app/sass:public/stylesheets
```

#### 命令行编译配置选项

命令行编译`sass`有配置选项，如编译过后css排版、生成调试map、开启debug信息等，可通过使用命令`sass -v`查看详细。我们一般常用两种`--style --sourcemap`。

```js
//编译格式
sass --watch input.scss:output.css --style compact

//编译添加调试map
sass --watch input.scss:output.css --sourcemap

//选择编译格式并添加调试map
sass --watch input.scss:output.css --style expanded --sourcemap

//开启debug信息
sass --watch input.scss:output.css --debug-info
```

- `--style`表示解析后的`css`是什么排版格式;
  sass内置有四种编译格式:`nested` `expanded` `compact` `compressed`。
  - nested：嵌套缩进的css代码，它是默认值。
  - expanded：没有缩进的、扩展的css代码。
  - compact：简洁格式的css代码。
  - compressed：压缩后的css代码。
- `--sourcemap`表示开启`sourcemap`调试。开启`sourcemap`调试后，会生成一个后缀名为`.css.map`文件。

#### 四种编译排版演示

```scss
//未编译样式
.box {
  width: 300px;
  height: 400px;
  &-title {
    height: 30px;
    line-height: 30px;
  }
}
```

##### nested 编译排版格式

```css
/*命令行内容*/
sass style.scss:style.css --style nested

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px; }
  .box-title {
    height: 30px;
    line-height: 30px; }
```

##### expanded 编译排版格式

```css
/*命令行内容*/
sass style.scss:style.css --style expanded

/*编译过后样式*/
.box {
  width: 300px;
  height: 400px;
}
.box-title {
  height: 30px;
  line-height: 30px;
}
```

##### compact 编译排版格式

```css
/*命令行内容*/
sass style.scss:style.css --style compact

/*编译过后样式*/
.box { width: 300px; height: 400px; }
.box-title { height: 30px; line-height: 30px; }
```

##### compressed 编译排版格式

```css
/*命令行内容*/
sass style.scss:style.css --style compressed

/*编译过后样式*/
.box{width:300px;height:400px}.box-title{height:30px;line-height:30px}
```

### 软件方式编译

Vscode中自动编译sass和配置，只需要在vscode编辑器中安装扩展插件就可以很轻松实现。

推荐的插件有两个：Sass和Easy Sass：

- Sass：系统默认的提示只会对.scss文件进行代码高亮显示，同时也能唤起系统的css代码提示，所以如果使用sass的后缀是.scss这种的，系统自带的会进行提示，不需要安装，如果是用.sass这种的话，就需要安装了，否则没有任何提示和高亮哦。

- Easy Sass：当ctrl+s保存的时候，自动编译SASS / SCSS的扩展插件。默认情况下，ctrl+s保存的时候，会在sass文件相同的目录下会生成两个css文件，一个是压缩过的（XXX.min.css），一个是没有压缩的（xxx.css）。

Easy Sass，Easy Sass提供四个设置选项，需要修改的话，在设置面板中进行对应的修改即可：

```js
easysass.compileAfterSave：保存后启用或禁用自动编译
easysass.formats：指定导出文件的扩展名和格式。
easysass.targetDir：为生成的文件定义目标目录。
easysass.excludeRegex：使用正则表达式从编译中排除文件
```

很多时候，如果sass文件和css文件都放在一起，不方便我们管理，往往很多人都会把sass和css文件分开不同的文件夹，如图：

![image-20220116144450406](https://img-blog.csdnimg.cn/img_convert/9a4d1f2291e123bb8ab72305bf1e512a.png)

例如：修改为把编译之后的.css文件单独放在一个css文件夹中。打开设置面板，左侧找到扩展，点击安装好的EasySass configuration，找到targetDir，在下方输入 ./css/ 即可：

![image-20220116145713093](https://img-blog.csdnimg.cn/img_convert/e26308c40daa2999742c79dce137de06.png)

或者也直接在settings.json（这个文件在设置中任意一插件里面都可以找到）中手动添加一个参数：

```js
"easysass.targetDir": "./css/"
```

注意：这里需要注意下，我们修改完配置之后，实际是用的时候，sass文件夹和css文件夹还是需要手动创建，不然不会生效的哦！

所有配置扩展详细说明：

- `easysass.compileAfterSave` 保存 scss 或 sass 文件后自动进行编译。默认为 true。一般设为 true，可提高工作效率，如果项目中有不直接编译的文件，例如 variable.scss、theme.scss、mixin.scss 等，建议设为 false，避免这类文件编辑保存后被编译为无效 css 需要手动删除的尴尬。

  ```js
  "easysass.compileAfterSave": true
  ```

- `easysass.excludeRegex` 提供一个文件名的正则表达式，匹配的文件会被排除，不会被编译成 css。默认为空，即该功能关闭。个人建议将一些不直接编译的文件以下划线开头命名，例如： _mixin.scss，然后设置：`"easysass.excludeRegex": "^+"`，即可排除所有以下划线开头的 scss/sass 文件。

  ```js
  "easysass.excludeRegex": "^+"
  ```

- `easysass.formats` 定义输出 css 文件的排版风格和文件名，是一个数组，可以同时编译输出多个不同风格、文件名的 css 文件。每个数组对象中有两个参数 format  和 extension：

  ```js
  "easysass.formats": [
      {
          "format": "expanded",  // 没有缩进的、扩展的css代码
          "extension": ".wxss"  //转化的后缀名
      },
  ]
  ```

  - format 支持四个选项用以编译生成对应风格的 CSS：

    - nested：嵌套缩进的 css 代码。

    - expanded：没有缩进的、扩展的css代码。

    - compact：简洁格式的 css 代码。
    - compressed：压缩后的 css 代码。

  - extension 顾名思义就是设置编译输出的文件拓展名了，此处可以自定义文件名，输出的 css 文件名会按照“当前 Sass 文件名（不含拓展名）+此处自定义文件名”的格式来生成。
    - 例如：设置 “extension”: “.min.css”，假设当前的 Sass 文件名为style.scss，则编译输出的 css 文件名为 style.min.css。

- `easysass.targetDir` 我们在生产环境中很多情况下 scss/sass 文件和 css 文件是不在同一个目录下的，而 Easy Sass 默认输出的 css 是和当前 Sass 文件处于相同目录的，为此我们需要通过该参数来配置输出路径。参数值可以是绝对路径或相对路径。如果是相对路径，则以 VSCode 当前打开的项目的根目录为基准。

  ```js
  "easysass.targetDir": "./css/"
  ```

## Sass语法

Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。

特色功能 (Features)：

- 完全兼容 CSS3
- 在 CSS 基础上增加变量、嵌套 (nesting)、混合 (mixins) 等功能
- 通过函数进行颜色值与属性值的运算
- 提供控制指令 (control directives)等高级功能
- 自定义输出格式

Sass 有两种语法格式。首先是 SCSS (Sassy CSS) —— 也是本文示例所使用的格式 —— 这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能。此外，SCSS 也支持大多数 CSS hacks 写法以及浏览器前缀写法 (vendor-specific syntax)，以及早期的 IE 滤镜写法。这种格式以 `.scss` 作为拓展名。

另一种也是最早的 Sass 语法格式，被称为缩进格式 (Indented Sass) 通常简称 "Sass"，是一种简化格式。它使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 [the indented syntax reference](http://sass-lang.com/docs/yardoc/file.INDENTED_SYNTAX.html)。这种格式以 `.sass` 作为拓展名。

Sass常用语法：

- 变量： `$width:5px;` 在字符串中使用#{}引用变量，类似ES6模板字符串的 `${}`，支持运算：`+ - * / ()`
- 嵌套：（1）选择器嵌套 `.box { .list{ } }`  （2）属性嵌套  `font: { family: 'fangsong'; size: 20px; weight: 700;}`
- 父选择器： &引用父元素
- 混合：@mixin 定义混合； @include 导入混合
- 继承：.p2 { @extend .p1; }
- 导入：@import();用来导入外部文件。
- 媒体查询：@media
- 颜色函数：hsl等
- 控制指令：if语句、for语句、each语句、while语句
- 自定义函数：@function double($n) { @return $n * 2; }

### SassScript

在 CSS 属性的基础上 Sass 提供了一些名为 SassScript 的新功能。 SassScript 可作用于任何属性，允许属性使用变量、算数运算等额外功能。

#### 变量 $

变量以美元符号$开头，多个单词的变量名使用连字符-连接，比如：`$color-red`，变量的赋值方法与 CSS 属性的写法一样：

```scss
$width: 500px;

$color-red: red;
// 在另一变量中引入$color-red 
$border: 1px solid $color-red;
```

直接使用即调用变量：

```scss
#main {
  width: $width;
  border: $border;
}
```

变量支持块级作用域，嵌套规则内定义的变量只能在嵌套规则内使用（局部变量），不在嵌套规则内定义的变量则可在任何地方使用（全局变量）。将局部变量转换为全局变量可以添加 `!global` 声明：

```scss
#main {
  $width: 5em !global;
  width: $width;
}

#sidebar {
  width: $width;
}
```

编译为：

```scss
#main {
  width: 5em;
}

#sidebar {
  width: 5em;
}
```

#### 数据类型

SassScript 支持 6 种主要的数据类型：

- 数字，`1, 2, 13, 10px`
- 字符串，有引号字符串与无引号字符串，`"foo", 'bar', baz`
- 颜色，`blue, #04a3f9, rgba(255,0,0,0.5)`
- 布尔型，`true, false`
- 空值，`null`
- 数组 (list)，用空格或逗号作分隔符，`1.5em 1em 0 2em, Helvetica, Arial, sans-serif`
- maps, 相当于 JavaScript 的 object，`(key1: value1, key2: value2)`

SassScript 也支持其他 CSS 属性值，比如 Unicode 字符集，或 `!important` 声明。然而Sass 不会特殊对待这些属性值，一律视为无引号字符串。

####  运算

所有数据类型均支持相等运算 `==` 或 `!=`，此外，每种数据类型也有其各自支持的运算方式。

#####  数字运算 

SassScript 支持数字的加减乘除、取整等运算 (`+, -, *, /, %`)，如果必要会在不同单位间转换值。

```scss
$width: 500px;

div {
  width: $width;
  height: $width + 100px;
}
```

编译为

```scss
div {
   width: 500px;
  height: 600px;
}
```

#####  除法运算

以下三种情况 `/` 将被视为除法运算符号：

- 如果值，或值的一部分，是变量或者函数的返回值
- 如果值被圆括号包裹
- 如果值是算数表达式的一部分

```scss
p {
  font: 10px/8px;             // css样式，没有除法运算
  $width: 1000px;
  width: $width/2;            // 使用变量做除法运算
  width: round(1.5)/2;        // 使用函数做触发运算
  height: (500px/2);          // 使用圆括号做除法运算
  margin-left: 5px + 8px/2px; // 使用加法和除法运算
}
```

编译为

```css
p {
  font: 10px/8px;
  width: 500px;
  height: 250px;
  margin-left: 9px; 
}
```

如果需要使用变量，同时又要确保 `/` 不做除法运算而是完整地编译到 CSS 文件中，只需要用 `#{}` 插值语句将变量包裹。

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

编译为

```css
p {
  font: 12px/30px; }
```

#####  颜色值运算

颜色值的运算是分段计算进行的，也就是分别计算红色，绿色，以及蓝色的值：

```scss
p {
  color: #010203 + #040506;
}
```

计算 `01 + 04 = 05` `02 + 05 = 07` `03 + 06 = 09`，然后编译为

```css
p {
  color: #050709; 
}
```

需要注意的是，如果颜色值包含 alpha channel（rgba 或 hsla 两种颜色值），必须拥有相等的 alpha 值才能进行运算，因为算术运算不会作用于 alpha 值。

```scss
p {
  color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);
}
```

编译为

```css
p {
  color: rgba(255, 255, 0, 0.75); 
}
```

##### 圆括号

圆括号可以用来影响运算的顺序：

```scss
p {
  width: 1em + (2em * 3);
}
```

编译为

```css
p {
  width: 7em; 
}
```

#### 插值语句 `#{}`

通过 `#{}` 插值语句可以在选择器或属性名中使用变量：

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

编译为

```css
p.foo {
  border-color: blue; 
}
```

`#{}` 插值语句也可以在属性值中插入 SassScript，大多数情况下，这样可能还不如使用变量方便，但是使用 `#{}` 可以避免 Sass 运行运算表达式，直接编译 CSS。

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

编译为

```css
p {
  font: 12px/30px; 
}
```

### 嵌套

#### 选择器嵌套

Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器，例如：

```scss
div{
  height: 100px;
  ul{
    height: 80px;
    li{
      height: 50px;
    }
  }
}
```

编译为

```scss
div {
  height: 100px;
}

div ul {
  height: 80px;
}

div ul li {
  height: 50px;
}
```

#### 属性嵌套

不止选择器，属性里也可以嵌套，如这样写：

```scss
div{
  height: 100px;

  font: {
    family: 'fangsong';
    size: 20px;
    weight: 700;
  }
  
  border: 1px solid red {
    left: 0;
    top: 0;
  }
}

```

编译为：

```scss
div {
  height: 100px;
  font-family: "fangsong";
  font-size: 20px;
  font-weight: 700;
  border: 1px solid red;
  border-left: 0;
  border-top: 0;
}
```

### 父选择器 &

在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器，例如，当给某个元素设定 `hover` 样式时，或者当 `body` 元素有某个 classname 时，可以用 `&` 代表嵌套规则外层的父选择器。

```scss
a {
  font-weight: bold;
  text-decoration: none;
  &:hover { 
    text-decoration: underline; 
  }
  body.firefox & { 
    font-weight: normal; 
  }
}
```

编译为

```css
a {
  font-weight: bold;
  text-decoration: none; 
}
a:hover {
  text-decoration: underline; 
}
body.firefox a {
  font-weight: normal; 
}
```

编译后的 CSS 文件中 `&` 将被替换成嵌套外层的父选择器，如果含有多层嵌套，最外层的父选择器会一层一层向下传递：

```scss
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { 
      color: red; 
    }
  }
}
```

编译为

```css
#main {
  color: black; 
}
#main a {
  font-weight: bold; 
}
#main a:hover {
  color: red; 
}
```

`&` 必须作为选择器的第一个字符，其后可以跟随后缀生成复合的选择器，例如

```scss
#main {
  color: black;
  &-sidebar { border: 1px solid; }
}
```

编译为

```css
#main {
  color: black; 
} 

#main-sidebar {
  border: 1px solid; 
}
```

当父选择器含有不合适的后缀时，Sass 将会报错。

**实战技巧**

可以借助Sass 在元素中，去定义自己的私有样式。

```scss
/* sass */
#main{
  // something..
  &.show{
    display:block;
  }
}
.show{
  display:none;
}

const main = document.getElementById("main");
main.classList.add("show");
```

结果：

```scss
#main.show{
  display:block;
}
.show{
  display:none; //会被覆盖。
}
```

### 混合

混合指令（Mixin）用于定义可重复使用的样式，避免了使用无语意的 class，比如 `.float-left`。混合指令可以包含所有的 CSS 规则，绝大部分 Sass 规则，甚至通过参数功能引入变量，输出多样化的样式。

混合是使用 `@mixin`定义混合指令，然后使用`@include`引用混合样式 。

混合指令的用法是在 `@mixin` 后添加名称与样式，使用 `@include` 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）：

```css
@mixin 名字（参数1，参数2，...）
{
	样式1;
  样式2;
  ...
}

div{
 	@include 名字;
  @include 名字(参数1， 参数2, ...);
}
```

```scss
// 无参数的混入
@mixin border {
	border: 2px solid red;
}

// 带有参数的混入
@mixin border-radius($r: 10px) {
	border-radius: $r;
}

div{
  width: 300px;
	height: 60px;
	@include border;
	@include border-radius(20px);
}
```

编译为：

```scss
div{
  width: 300px;
  height: 60px;
  border: 2px solid red;
  border-radius: 20px;
}
```

关键词参数

```scss
@mixin border ($width, $color){
	border: $width solid $color;
}

div{
  @include border(2px, red);
}

div{
  @include border($width: 2px, $color: red);
}

// 使用关键词参数，可以打乱参数的顺序
div{
  @include border($color: red, $width: 2px);
}
```

### 继承

`@extend` 的作用是将重复使用的样式 (`.font`) 延伸 (extend) 给需要包含这个样式的特殊样式（`.box`），刚刚的例子：

```scss
.font {
	font-weight: 700;
  font-size: 14px;
  color: #666;
}

.box {
	@extend .font;
	color: red;
}
```

### 导入

Sass 拓展了 `@import` 的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS 文件中，另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。

```scss
@import "base.scss";
```

### 媒体查询

Sass 中 `@media` 指令与 CSS 中用法一样，只是增加了一点额外的功能：允许其在 CSS 规则中嵌套。如果 `@media` 嵌套在 CSS 规则内，编译时，`@media` 将被编译到文件的最外层，包含嵌套的父选择器。这个功能让 `@media` 用起来更方便，不需要重复使用选择器，也不会打乱 CSS 的书写流程。

```scss
.sidebar {
  width: 300px;
  @media screen and (orientation: landscape) {
    width: 500px;
  }
}
```

编译为

```css
.sidebar {
  width: 300px; 
}
@media screen and (orientation: landscape) {
  .sidebar {
     width: 500px; 
  } 
}

```

@media 的 queries 允许互相嵌套使用，编译时，Sass 自动添加 and

```scss
@media screen {
  .sidebar {
    @media (orientation: landscape) {
      width: 500px;
    }
  }
}
```

编译为

```css
@media screen and (orientation: landscape) {
  .sidebar {
    width: 500px; 
  } 
}
```

### 颜色函数

**hsl(色相，饱和度，明度);**

```css
body{   
   background-color: hsl(5, 20%, 20%);
} 
```

编译为

```css
body {
  background-color: #3d2b29;
}
```

**hsl(色相，饱和度，明度，不透明度);**

```css
body{   
   background-color: hsl(5, 20%, 20%,0.5);
} 
```

编译为

```css
body {
  background-color: rgba(61, 43, 41, 0.5);
}
```

**用来调整色相： adjust-hue(颜色，调整的度数)；**

```css
body{   
   background-color: adjust-hue(hsl(0,100,50%), 100deg);
} 
```

编译为

```css
body {
  background-color: #55ff00;
}
```

用来调整颜色明度：lighten让颜色更亮，darken让颜色更暗 如：**lighten(颜色，增加亮度的百分比)；**

```css
body{   
   background-color: lighten(rgb(228, 145, 145),50%);
   color: darken(rgb(228, 145, 145),50%);
} 
```

编译为

```css
body {
  background-color: white;
  color: #5f1717;
}
```

**用来调整颜色纯度 saturate让颜色更纯 ，desaturate让颜色不纯** saturate（颜色，百分比）；

```scss
body{
  background-color: desaturate(#ff0000, 20%);
}
```

编译为

```scss
body {
  background-color: #e61a1a;
}
```

### 控制指令

SassScript 提供了一些基础的控制指令，比如在满足一定条件时引用样式，或者设定范围重复输出格式。控制指令是一种高级功能，日常编写过程中并不常用到，主要与混合指令 (mixin) 配合使用，尤其是用在 [Compass](http://compass-style.org/) 等样式库中。

#### if语句

当 `@if` 的表达式返回值不是 `false` 或者 `null` 时，条件成立，输出 `{}` 内的代码：

```scss
@if 判断条件 {
	执行语句
} @else {
  执行语句
}

```

`@if` 声明后面可以跟多个 `@else if` 声明，或者一个 `@else` 声明。如果 `@if` 声明失败，Sass 将逐条执行 `@else if` 声明，如果全部失败，最后执行 `@else` 声明，例如：

```scss
@if 判断条件 {

} @else @if{
  
} @else {
  
}
```

```scss
$flag: true;
body{   
  @if $flag {
    color: red;
  }
  @if $flag {
    background-color: white;
  }@else{
    background-color: black;
  }
}  
```

#### for语句

`@for` 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。这个指令包含两种格式：`@for $var from <start> through <end>`，或者 `@for $var from <start> to <end>`，区别在于 `through` 与 `to` 的含义：当使用 `through` 时，条件范围包含 `<start>` 与 `<end>` 的值，而使用 `to` 时条件范围只包含 `<start>` 的值不包含 `<end>` 的值。另外，`$var` 可以是任何变量，比如 `$i`；`<start>` 和 `<end>` 必须是整数值。

```scss
包含结束值：
@for 变量 from 开始值 through 结束值 {
     ......
}

不包含结束值：
@for 变量 from 开始值 to 结束值 {
     ......
}
```

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

编译为

```scss
.item-1 {
  width: 2em; 
}
.item-2 {
  width: 4em; 
}
.item-3 {
  width: 6em; 
}
```

#### each语句

`@each` 指令的格式是 `$var in <list>`, `$var` 可以是任何变量名，比如 `$length` 或者 `$name`，而 `<list>` 是一连串的值，也就是值列表。

```scss
@each 变量 in 列表 {
	...
}
```

`@each` 将变量 `$var` 作用于值列表中的每一个项目，然后输出结果，例如：

```scss
$yanse: red blue black;
@each $value in $yanse {
  .item-#{$value}{
    color: $value;
  }
}
```

编译为

```scss
.item-red {
  color: red;
}

.item-blue {
  color: blue;
}

.item-black {
  color: black;
}

```

#### while语句

`@while` 指令重复输出格式直到表达式返回结果为 `false`。这样可以实现比 `@for` 更复杂的循环，只是很少会用到。

```js
@while 条件 {
   ...
}
```

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

```scss
.div1 {
  height: 10px;
}

.div2 {
  height: 20px;
}

.div3 {
  height: 30px;
}
```

### 自定义函数 function

Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用：

```scss
@function 名字(参数1，参数2，..){
  ...
}
```

```scss
@function double($n) {
	@return $n * 2;
}

div{
  border-width: double(2px);
}
```

编译为

```scss
div{
  border-width: 4px;
}
```

### 注释

Sass 支持标准的 CSS 多行注释 `/* */`，以及单行注释 `//`

- /* */ CSS原生注释，被完整输出到编译后的 CSS 文件中
- // Sass提供的一种注释，不会被编译在 CSS 文件中

```scss
/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */
body { color: black; }

// These comments are only one line long each.
// They won't appear in the CSS output,
// since they use the single-line comment syntax.
a { color: green; }
```

编译为

```css
/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */
body {
  color: black; }

a {
  color: green; }
```

将 `!` 作为多行注释的第一个字符表示在压缩输出模式下保留这条注释并输出到 CSS 文件中，通常用于添加版权信息。

插值语句 (interpolation) 也可写进多行注释中输出变量值：

```scss
$version: "1.2.3";
/* This CSS is generated by My Snazzy Framework version #{$version}. */
```

编译为

```css
/* This CSS is generated by My Snazzy Framework version 1.2.3. */
```

# Less

Less是一种动态样式语言，属于CSS预处理语言的一种，它使用类似CSS的语法，为CSS的赋予了动态语言的特性，如变量、继承、运算、函数等，更方便CSS的编写和维护。简化了 CSS 的编写，并且降低了CSS 的维护成本，就像它的名称所说的那样，Less 可以让我们用更少的代码，做更多的事情。

## 编译Less

使用 Less 有有两种转换方式：浏览器端转换 和 服务端转换。

如果你也是 Webpack 的使用者，还需要配合 less-loader 进行处理。

当然，还可以配合vscode插件进行编译。

### 浏览器编译

浏览器编译，将.less文件导入html，同时将less的转换代码(less.js)也导入html文件，浏览器在页面加载完毕后，使用less.js将.less文件转换为.css文件。(这种转换一般在开发环境中使用，如果在生产环境中使用会降低页面效率)。

首先下载[less.js](https://cdn.jsdelivr.net/npm/less@4.1.1)，然后在页面导入less

```html
<link rel="stylesheet/less" href="index.less">
<script src="less.js"></script>
```

需要注意的是：在引入 .less 文件时，link标签的 rel 属性要设置为“stylesheet/less”。还有更重要的一点需要注意的是：link标签引入的.less文件一定要在 less.js 引入之前引入，这样才能保证 .less文件正确编译解析。

### 命令行编译

命令行编译，程序员在开发页面时使用less，开发完毕之后，一次性将所有 .less文件转为.css文件，将.css文件和html文件部署在服务器上。(一般在生产环境中使用)

（1）下载 [node.js](http://nodejs.cn/download/)，然后安装。  安装完成后需测试安装有没有成功，运行`CMD`输入以下命令：

```js
node -v
// 输出
v14.17.6
```

（2） 在CMD中使用npm（npm是node.js 的包管理器）安装less

```js
npm install -g less

// 测试时是否安装成功，输入
lessc -v  // 注意是lessc

//输出
lessc 4.1.2 (Less Compiler) [JavaScript]
```

（3）在less文件目录下使用如下指令，把app.less转换为app.css

```js
lessc app.less app.css
```

### 软件方式编译

Vscode中自动编译sass和配置，只需要在vscode编辑器中安装扩展插件EasyLess就可以很轻松实现。

 EasyLess 安装好后需要在 setting.json 中对它进行配置。如果使用默认配置，在编写 less 后，会自动在根目录编译生成多个以 less 命名的 css 文件。很多时候，如果sass文件和css文件都放在一起，不方便我们管理，往往很多人都会把sass和css文件分开不同的文件夹，less文件存放在less文件夹中，然后在setting.json中做如下设置：

```js
"less.compile": {
		"out": "../css/", //定义好输出的文件路径，文件路径是相对于当前文件的
		"outExt": ".css", //设置扩展名，默认是 .css
		"sourceMap": true,//是否创建文件目录树，true的话会自动生成一个 .css.map 文件
		"compress": false, // 是否删除多余的空格，压缩css
}
```

注意：这里需要注意下，我们修改完配置之后，实际是用的时候，sass文件夹和css文件夹还是需要手动创建，不然不会生效的哦！

## Less语法

Less常用语法：

- 变量： @width:5px; 支持运算： 支持 + - * /
- 嵌套：（1）选择器嵌套；（2）父选择器&；（3）媒体查询
- 混合：自定义方法 .p3{ .p2; .borderRadius(10px);}
- 继承： .p2:extend(.p1){} 
- 导入：@import()
- 函数：自带函数

### 变量

#### 值变量

以 `@` 开头 定义变量，并且使用时 直接 键入 `@`名称。

```less
/* Less */
@color: #999;
@bgColor: skyblue;//不要添加引号
@width: 50%;

#wrap {
  color: @color;
  background: @bgColor;
  width: @width;
}

/* 生成后的 CSS */
#wrap {
  color: #999;
  background: skyblue;
  width: 50%;
}
```

#### 选择器变量

让 选择器 变成 动态

```less
/* Less */
@mySelector: #wrap;
@Wrap: wrap;

@{mySelector}{ //变量名 必须使用大括号包裹
  color: #999;
  width: 50%;
}
.@{Wrap}{
  color:#ccc;
}
#@{Wrap}{
  color:#666;
}

/* 生成的 CSS */
#wrap{
  color: #999;
  width: 50%;
}
.wrap{
  color:#ccc;
}
#wrap{
  color:#666;
}
```

#### 属性变量

可减少代码书写量

```less
/* Less */
@borderStyle: border-style;
@Soild: solid;
#wrap{
  @{borderStyle}: @Soild;//变量名 必须使用大括号包裹
}

/* 生成的 CSS */
#wrap{
  border-style:solid;
}
```

#### url 变量

项目结构改变时，修改其变量即可。

```less
/* Less */
@images: "../img";//需要加引号
body {
  background: url("@{images}/dog.png");//变量名 必须使用大括号包裹
}

/* 生成的 CSS */
body {
  background: url("../img/dog.png");
}
```

#### 声明变量

有点类似于 下面的 混合方法

- 结构: @name: { 属性: 值 ;};
- 使用：@name();

```less
/* Less */
@background: {background:red;};
#main{
    @background();
}
@Rules:{
    width: 200px;
    height: 200px;
    border: solid 1px red;
};
#con{
  @Rules();
}

/* 生成的 CSS */
#main{
  background:red;
}
#con{
  width: 200px;
  height: 200px;
  border: solid 1px red;
}
```

#### 变量运算

不得不提的是，Less 的变量运算完全超出我的期望，十分强大。

- 加减法时 以第一个数据的单位为基准
- 乘除法时 注意单位一定要统一

```less
/* Less */
@width:300px;
@color:#222;
#wrap{
  width:@width-20;
  height:@width-20*5;
  margin:(@width-20)*5;
  color:@color*2;
  background-color:@color + #111;
}

/* 生成的 CSS */
#wrap{
  width:280px;
  height:200px;
  margin:1400px;
  color:#444;
  background-color:#333;
}
```

#### 变量作用域

一句话理解就是：**就近原则**，不要跟我提闭包。

```less
/* Less */
@var: @a;
@a: 100%;
#wrap {
  width: @var;
  @a: 9%;
}

/* 生成的 CSS */
#wrap {
  width: 9%;
}
```

#### 用变量去定义变量

```less
/* Less */
@fnord:  "I am fnord.";
@var:    "fnord";
#wrap::after{
  content: @@var; //将@var替换为其值 content:@fnord;
}

/* 生成的 CSS */
#wrap::after{
  content: "I am fnord.";
}
```

### 嵌套

#### 选择器嵌套

Less 提供了使用嵌套代替层叠或与层叠结合使用的能力。

```css
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

用 Less 语言我们可以这样书写代码：

```less
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

#### 父选择器&

& 表示父选择器，代表的上一层选择器的名字。

```less
/* Less */
#header{
  &:after{
    content:"Less is more!";
  }
  .title{
    font-weight:bold;
  }
  &_content{//理解方式：直接把 & 替换成 #header
    margin:20px;
  }
}

/* 生成的 CSS */
#header::after{
  content:"Less is more!";
}
#header .title{ //嵌套了
  font-weight:bold;
}
#header_content{//没有嵌套！
    margin:20px;
}
```

#### 媒体查询

```less
/* Less */
#main{
  //something...
  @media screen{
    @media (max-width:768px){
      width:100px;
    }
  }
  
  @media screen {
    width:2000px;
  }
}

/* 生成的 CSS */
@media screen and (maxwidth:768px){
  #main{
      width:100px; 
  }
}
@media screen{
  #main{
    width:2000px;
  }
}
```

### 混合方法

#### 无参数方法

方法犹如声明的集合，使用时 直接键入名称即可。

```less
/* Less */
.card { // 等价于 .card()
    background: #f6f6f6;
    -webkit-box-shadow: 0 1px 2px rgba(151, 151, 151, .58);
    box-shadow: 0 1px 2px rgba(151, 151, 151, .58);
}
#wrap{
  .card;//等价于.card();
}

/* 生成的 CSS */
#wrap{
  background: #f6f6f6;
  -webkit-box-shadow: 0 1px 2px rgba(151, 151, 151, .58);
  box-shadow: 0 1px 2px rgba(151, 151, 151, .58);
}
```

其中 `.card` 与 `.card()` 是等价的。 个人建议，为了避免 代码混淆，应写成 :

```less
.card(){
  //something...
}
#wrap{
  .card();
}
```

要点：

- `.` 与 `#` 皆可作为 方法前缀。
- 方法后写不写 `()` 看个人习惯。

#### 默认参数方法

- Less 可以使用默认参数，如果 没有传参数，那么将使用默认参数。
- `@arguments` 犹如 JS 中的 `arguments` 指代的是 全部参数。
- 传的参数中 必须带着单位。

```less
/* Less */
.border(@a:10px, @b:50px, @c:30px, @color:#000){
    border:solid 1px @color;
    box-shadow: @arguments;//指代的是 全部参数
}
#main{
    .border(0px,5px,30px,red);//必须带着单位
}
#wrap{
    .border(0px);
}
#content{
  .border;//等价于 .border()
}

/* 生成的 CSS */
#main{
    border:solid 1px red;
    box-shadow:0px,5px,30px,red;
}
#wrap{
    border:solid 1px #000;
    box-shadow: 0px 50px 30px #000;
}
#content{
    border:solid 1px #000;
    box-shadow: 10px 50px 30px #000;
}
```

#### 方法的匹配模式

与 面向对象中的多态 很相似

```less
/* Less */
.triangle(top,@width:20px,@color:#000){
    border-color:transparent  transparent @color transparent ;
}
.triangle(right,@width:20px,@color:#000){
    border-color:transparent @color transparent  transparent ;
}

.triangle(bottom,@width:20px,@color:#000){
    border-color:@color transparent  transparent  transparent ;
}
.triangle(left,@width:20px,@color:#000){
    border-color:transparent  transparent  transparent @color;
}
.triangle(@_,@width:20px,@color:#000){
    border-style: solid;
    border-width: @width;
}
#main{
    .triangle(left, 50px, #999)
}

/* 生成的 CSS */
#main{
  border-color:transparent  transparent  transparent #999;
  border-style: solid;
  border-width: 50px;
}
```

要点

- 第一个参数 `left` 要会找到方法中匹配程度最高的，如果匹配程度相同，将全部选择，并存在着样式覆盖替换。
- 如果匹配的参数 是变量，则将会匹配，如 `@_` 。

#### 方法的命名空间

让方法更加规范

```less
/* Less */
#card(){
    background: #723232;
    .d(@w:300px){
        width: @w;
        
        #a(@h:300px){
            height: @h;//可以使用上一层传进来的方法
        }
    }
}
#wrap{
    #card > .d > #a(100px); // 父元素不能加 括号
}
#main{
    #card .d();
}
#con{
    //不得单独使用命名空间的方法
    //.d() 如果前面没有引入命名空间 #card ，将会报错
    
    #card; // 等价于 #card();
    .d(20px); //必须先引入 #card
}

/* 生成的 CSS */
#wrap{
  height:100px;
}
#main{
  width:300px;
}
#con{
  width:20px;
}
```

要点

- 在 CSS 中`>` 选择器，选择的是 儿子元素，就是 必须与父元素 有直接血源的元素。
- 在引入命令空间时，如使用 `>` 选择器，父元素不能加 括号。
- 不得单独使用命名空间的方法 必须先引入命名空间，才能使用 其中方法。
- 子方法 可以使用上一层传进来的方法

#### 方法的条件筛选

Less 没有 if else，可是它有 `when`

```less
/* Less */
#card{
    
    // and 运算符 ，相当于 与运算 &&，必须条件全部符合才会执行
    .border(@width,@color,@style) when (@width>100px) and(@color=#999){
        border:@style @color @width;
    }

    // not 运算符，相当于 非运算 !，条件为 不符合才会执行
    .background(@color) when not (@color>=#222){
        background:@color;
    }

    // , 逗号分隔符：相当于 或运算 ||，只要有一个符合条件就会执行
    .font(@size:20px) when (@size>50px) , (@size<100px){
        font-size: @size;
    }
}
#main{
    #card>.border(200px,#999,solid);
    #card .background(#111);
    #card > .font(40px);
}

/* 生成后的 CSS */
#main{
  border:solid #999 200px;
  background:#111;
  font-size:40px;
}
```

要点

- 比较运算有： >  >=  =  =<  <
- = 代表的是等于
- 除去关键字 true 以外的值都被视为 false

#### 数量不定的参数

如果你希望你的方法接受数量不定的参数，你可以使用... ，犹如 ES6 的扩展运算符。

```less
/* Less */
.boxShadow(...){
    box-shadow: @arguments;
}
.textShadow(@a,...){
    text-shadow: @arguments;
}
#main{
    .boxShadow(1px,4px,30px,red);
    .textShadow(1px,4px,30px,red);
}

/* 生成后的 CSS */
#main{
  box-shadow: 1px 4px 30px red;
  text-shadow: 1px 4px 30px red;
}
```

#### 方法使用important！

使用方法 非常简单，在方法名后 加上关键字即可。

```less
/* Less */
.border{
    border: solid 1px red;
    margin: 50px;
}
#main{
    .border() !important;
}

/* 生成后的 CSS */
#main {
    border: solid 1px red !important;
    margin: 50px !important;
}
```

#### 循环方法

Less 并没有提供 for 循环功能，但这也难不倒 聪明的程序员，使用递归去实现。 下面是官网中的一个 Demo，模拟了生成栅格系统。

```less
/* Less */
.generate-columns(4);

.generate-columns(@n, @i: 1) when (@i =< @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}

/* 生成后的 CSS */
.column-1 {
  width: 25%;
}
.column-2 {
  width: 50%;
}
.column-3 {
  width: 75%;
}
.column-4 {
  width: 100%;
}
```

#### 属性拼接方法

`+_` 代表的是 空格；`+` 代表的是 逗号。

- 逗号

```less
/* Less */
.boxShadow() {
    box-shadow+: inset 0 0 10px #555;
}
.main {
  .boxShadow();
  box-shadow+: 0 0 20px black;
}

/* 生成后的 CSS */
.main {
  box-shadow: inset 0 0 10px #555, 0 0 20px black;
}
```

- 空格

```less
/* Less */
.Animation() {
  transform+_: scale(2);
}
.main {
  .Animation();
  transform+_: rotate(15deg);
}

/* 生成的 CSS */
.main {
  transform: scale(2) rotate(15deg);
}
```

#### 实战技巧

下面是官网中的一个非常赞的 Demo

```less
/* Less */
.average(@x, @y) {
  @average: ((@x + @y) / 2);
}

div {
  .average(16px, 50px); // 调用 方法
  padding: @average;    // 使用返回值
}

/* 生成的 CSS */
div {
  padding: 33px;
}
```

### 继承

extend 是 Less 的一个伪类。它可继承 所匹配声明中的全部样式。

#### extend 关键字的使用

```less
/* Less */
.animation{
    transition: all .3s ease-out;
    .hide{
      transform:scale(0);
    }
}
#main{
    &:extend(.animation);
}
#con{
    &:extend(.animation .hide);
}

/* 生成后的 CSS */
.animation,#main{
  transition: all .3s ease-out;
}
.animation .hide , #con{
    transform:scale(0);
}
```

#### all 全局搜索替换

使用选择器匹配到的 全部声明。

```less
/* Less */
#main{
  width: 200px;
}
#main {
  &:after {
    content:"Less is good!";
  }
}
#wrap:extend(#main all) {}

/* 生成的 CSS */
#main,#wrap{
  width: 200px;
}
#main:after, #wrap:after {
    content: "Less is good!";
}
```

#### 减少代码的重复性

从表面 看来，extend 与 方法 最大的差别，就是 extend 是同个选择器共用同一个声明，而 方法 是使用自己的声明，这无疑 增加了代码的重复性。

方法示例 与上面的 extend 进行对比：

```less
/* Less */
.Method{
  width: 200px;
  &:after {
      content:"Less is good!";
  }
}
#main{
  .Method;
}
#wrap{
  .Method;
}

/* 生成的 CSS */
#main{
  width: 200px;
  &:after{
    content:"Less is good!";
  }  
}
#wrap{
  width: 200px;
  &:after{
    content:"Less is good!";
  }  
}
```

#### 要点

- 选择器和扩展之间 是允许有空格的：pre:hover :extend(div pre).
- 可以有多个扩展: pre:hover:extend(div pre):extend(.bucket tr) - 注意这与 pre:hover:extend(div pre, .bucket tr)一样。
- 这是不可以的，扩展必须在最后 : pre:hover:extend(div pre).nth-child(odd)。
- 如果一个规则集包含多个选择器，所有选择器都可以使用extend关键字。

### 导入

#### @import

导入 less 文件 可省略后缀

```less
import "main"; 

//等价于
import "main.less";
```

`@import` 的位置可随意放置

```less
#main{
  font-size:15px;
}
@import "style";
```

#### @import (reference)

Less 中 最强大的特性 使用 @import (reference) 引入的 Less 文件，但不会 编译它。

```less
/* Less */
@import (reference) "bootstrap.less"; 

#wrap:extend(.navbar all){}
```

使用@import(reference)导入外部文件，但不会添加 把导入的文件 编译到最终输出中，只引用。

#### @import(once)

@import(once)是@import语句的默认行为。这表明相同的文件只会被导入一次，而随后的导入文件的重复代码都不会解析。

```less
@import (once) "foo.less";
@import (once) "foo.less"; // 这条语句将会被忽略
```

#### @import (multiple)

使用@import (multiple)允许导入多个同名文件。

```less
/* Less */

// file: foo.less
.a {
  color: green;
}
// file: main.less
@import (multiple) "foo.less";
@import (multiple) "foo.less";

/* 生成后的 CSS */
.a {
  color: green;
}
.a {
  color: green;
}
```

### 函数

**判断类型**

- isnumber：判断给定的值 是否 是一个数字。
- iscolor：判断给定的值 是否 是一个颜色。

```
isnumber(#ff0);     // false
isnumber(blue);     // false
isnumber("string"); // false
isnumber(1234);     // true
isnumber(56px);     // true
isnumber(7.8%);     // true
isnumber(keyword);  // false
isnumber(url(...)); // false

```

**颜色操作**

- saturate：增加一定数值的颜色饱和度。

- lighten：增加一定数值的颜色亮度。

- darken：降低一定数值的颜色亮度。

- fade：给颜色设定一定数值的透明度。

- mix：根据比例混合两种颜色。

**数学函数**

- ceil：向上取整。

- floor：向下取整。

- percentage：将浮点数转换为百分比字符串。

- round：四舍五入。

- sqrt：计算一个数的平方根。

- abs：计算数字的绝对值，原样保持单位。

- pow：计算一个数的乘方。

上述一些 使用效率高的函数。如果你想了解更多，可以去官网的[函数链接](https://lesscss.org/functions/)

### 其他

**注释**

- /* */ CSS原生注释，会被编译在 CSS 文件中。
- // Less提供的一种注释，不会被编译在 CSS 文件中。

**避免编译**

```less
/* Less */
#main{
  width:~'calc(300px-30px)';
}

/* 生成后的 CSS */
#main{
  width:calc(300px-30px);
}
```

结构： `~' 值 '`

**变量拼串**

在平时工作中，这种需求 太常见了。 在下面例子中， 实现了不同的 transtion-delay、animation、@keyframes

```less
.judge(@i) when(@i=1){
  @size:15px;
}
.judge(@i) when(@i>1){
  @size:16px;
}
.loopAnimation(@i) when (@i<16) {
  
  .circle:nth-child(@{i}){
      .judeg(@i);
      border-radius:@size @size 0 0;
      animation: ~"circle-@{i}" @duration infinite @ease;
      transition-delay:~"@{i}ms";
  }
  @keyframes ~"circle-@{i}" {
      // do something...
  }
  .loopAnimation(@i + 1);
}
```

结构： `~"字符@{变量}字符"`;

**使用 JS**

因为 Less 是由 JS 编写，所以 Less 有一得天独厚的特性：代码中使用 JavaScript 。

```less
/* Less */
@content:`"aaa".toUpperCase()`;
#randomColor{
  @randomColor: ~"rgb(`Math.round(Math.random() * 256)`,`Math.round(Math.random() * 256)`,`Math.round(Math.random() * 256)`)";
}
#wrap{
  width: ~"`Math.round(Math.random() * 100)`px";
  &:after{
      content:@content;
  }
  height: ~"`window.innerHeight`px";
  alert:~"`alert(1)`";
  #randomColor();
  background-color: @randomColor;
}

/* 生成后的 CSS */
#wrap{
  width: 随机值（0~100）px;
  height: 743px;//由电脑而异
  background: 随机颜色;
}
#wrap::after{
  content:"AAA";
}
```
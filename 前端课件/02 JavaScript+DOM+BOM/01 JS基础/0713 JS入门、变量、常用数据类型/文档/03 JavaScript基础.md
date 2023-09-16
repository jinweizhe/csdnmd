# 语法基础

## 标识符

所谓标识符，就是变量、函数、属性或函数参数的名称。标识符可以由一或多个下列字符组成：

- 第一个字符必须是一个字母、下划线（_）或美元符号（$）；

- 剩下的其他字符可以是字母、下划线、美元符号或数字。

按照惯例，ECMAScript 标识符使用驼峰大小写形式，即第一个单词的首字母小写，后面每个单词的首字母大写。

虽然这种写法并不是强制性的，但因为这种形式跟 ECMAScript 内置函数和对象的命名方式一致，所以算是最佳实践。

> 注意 关键字、保留字、true、false 和 null 不能作为标识符。

## 区分大小写

首先要知道的是，ECMAScript 中一切都区分大小写。无论是变量、函数名还是操作符，都区分大小写。换句话说，变量 test 和变量 Test 是两个不同的变量。类似地，typeof 不能作为函数名，因为它是一个关键字。但 Typeof 是一个完全有效的函数名。

## 注释

ECMAScript 采用 C 语言风格的注释，包括单行注释和块注释。单行注释以两个斜杠字符开头，如：

```js
// 单行注释
```

块注释以一个斜杠和一个星号（`/*`）开头，以它们的反向组合（`*/`）结尾，如：

```js
/* 这是多行
注释 */ 
```

## 严格模式

ECMAScript 5 增加了严格模式（strict mode）的概念。严格模式是一种不同的 JavaScript 解析和执行模型，ECMAScript 3 的一些不规范写法在这种模式下会被处理，对于不安全的活动将抛出错误。要对整个脚本启用严格模式，在脚本开头加上这一行：

```js
"use strict"; 
```

虽然看起来像个没有赋值给任何变量的字符串，但它其实是一个预处理指令。任何支持的 JavaScript引擎看到它都会切换到严格模式。选择这种语法形式的目的是不破坏 ECMAScript 3 语法。也可以单独指定一个函数在严格模式下执行，只要把这个预处理指令放到函数体开头即可：

```js
function doSomething() { 
 "use strict"; 
 // 函数体 

} 
```

严格模式会影响 JavaScript 执行的很多方面，因此本书在用到它时会明确指出来。所有现代浏览器都支持严格模式。

## 语句

ECMAScript 中的语句以分号结尾。省略分号意味着由解析器确定语句在哪里结尾，如下面的例子所示：

```js
var a = 2  // 没有分号也有效，但不推荐
var b = 3; // 加分号有效，推荐
```

即使语句末尾的分号不是必需的，也应该加上。记着加分号有助于防止省略造成的问题，比如可以避免输入内容不完整。此外，加分号也便于开发者通过删除空行来压缩代码（如果没有结尾的分号，只删除空行，则会导致语法错误）。加分号也有助于在某些情况下提升性能，因为解析器会尝试在合适的位置补上分号以纠正语法错误。

代码块由一个左花括号（{）标识开始，一个右花括号（}）标识结束：

```js
if (test) { 
 test = false; 
 console.log(test); 
}
```

if 之类的控制语句只在执行多条语句时要求必须有代码块。不过，最佳实践是始终在控制语句中使用代码块，即使要执行的只有一条语句，如下例所示：

```js
// 有效，但容易导致错误，应该避免
if (test) 
 console.log(test); 

// 推荐
if (test) { 
 console.log(test); 
} 
```

在控制语句中使用代码块可以让内容更清晰，在需要修改代码时也可以减少出错的可能性。

## 关键字与保留字

ECMA-262 描述了一组保留的关键字，这些关键字有特殊用途，比如表示控制语句的开始和结束，或者执行特定的操作。按照规定，保留的关键字不能用作标识符或属性名。ECMA-262 第 6 版规定的所

有关键字如下：

```js
break do in typeof 

case else instanceof var 

catch export new void 

class extends return while 

const finally super with 

continue for switch yield 

debugger function this 

default if throw 

delete import try 
```

规范中也描述了一组未来的保留字，同样不能用作标识符或属性名。虽然保留字在语言中没有特定用途，但它们是保留给将来做关键字用的。

以下是 ES6 为将来保留的所有词汇。始终保留: 

```js
enum 
```

严格模式下保留: 

```js
implements package public 

interface protected static 

let private 
```

模块代码中保留: 

```js
await
```

这些词汇不能用作标识符，但现在还可以用作对象的属性名。一般来说，最好还是不要使用关键字和保留字作为标识符和属性名，以确保兼容过去和未来的 ECMAScript 版本。

# JS输出语句

JavaScript 可以通过不同的方式来输出数据：

## console

console.log();用于在控制台输出一行内容，()可以直接写具体值，也可以写一个变量（如果写变量输出的是变量的值），也可以写表达式（输出的是表达式的结果）。

```js
console.log('hello world');
console.log(2+5);

// 多个内容的打印，可以使用逗号,分隔
console.log(2, 3, 2+3, 'hello world');
```

## alert

alert(); 用于弹出一个对话框。

alert的执行是阻塞的，一个alert在被用于点掉之前，下面的代码不会执行。

```js
alert("这是一个弹出框");
alert("这是第二个对话框");
```

- alert() 主要用来显示消息提示用户
- console.log() 用来给程序员自己看运行时的消息，常用于调试代码

## prompt

prompt用于弹出一个带输入框的对话框，一般用于接收用户输入的信息，返回用户输入的"字符串"。

prompt也是阻塞运行的，用户输入完毕点下确定后，其输入的值就会作为prompt的值。

```js
var content = prompt("请输入您的姓名");
console.log(content);
```

## confirm

confirm，用于输入获取一个布尔值。

```js
var isSingleDog = confirm("你单身么?");
console.log(isSingleDog);
```

## write

document.write，向页面中输入内容。
document.writeln，向页面中输入内容，然后再输入一个回车

```js
//html文档中多余的空格、回车、缩进，都会被替换为一个小空格。但是<pre>标签中的内容除外。
document.write("<pre>");
document.writeln("你好");
document.write("这二个输出的内容");
document.write("</pre>");
```

# JS变量

## 什么是变量

变量：在程序运行中其值可以变化的量，用来保存值、传值、修改值。

变量的本质：变量是程序在内存中申请的一块用来存放数据的空间。

## 变量的使用

变量在使用时分为两步： 1. 声明变量   2. 赋值 

### 声明变量

ECMAScript 变量是松散类型的，意思是变量可以用于保存任何类型的数据。每个变量只不过是一个用于保存任意值的命名占位符。

声明变量使用var关键字。

var是variable的缩写，是一个 JS关键字，在js中，使用var声明一个变量。使用var字声明变量后，计算机会自动为变量分配内存空间，不需要程序员管。

格式：var 变量名;

变量名的命名规范：以字母或者下划线_ 开头，由字母、数字、下划线_、美元符号$组成，遵守小驼峰命名法，命名要有意义。

- 变量的开头可以是 **字母** 或者 **下划线_** 或者  **美元符号$**，但是不能以数字开头
- 变量从第二个字符开始，可以是 **字母**、**数字**、**下划线**_、**美元符号$**
- 变量区分大小写，Age 和 age 是两个变量
- 变量名不能是JS语言的关键字、保留字（var、if、for等），不能是运算符（+、-、*、/等）。
- 遵守小驼峰命名法：首字母小写，后面单词的首字母需要大写。 比如：myFirstName
- 变量命名要有意义：根据使用场景来起名字，比如宽度用 width 表示，尽量用英文，不会的查词典，少用拼音，更不要用 a1 a2 a3等。

```js
// 声明一个名称为 age 的变量    
// age 是程序员定义的变量名，我们要通过变量名来访问内存中分配的空间
var age;
```

### 给变量赋值

给一个变量设置具体值，需要使用赋值语句。

格式为：变量名 = 具体值或表达式; 

其中 = 是赋值运算符。

```js
// 给age变量赋值10
// = 用来把右边的值赋给左边的变量空间中，表示赋值的意思
// 变量值是程序员保存到变量空间里的值
age = 18;

// 表达式：通过各种运算符组成的一个式子，能够计算出具体值。
age = 4 + 6;
```

### 变量的初始化

声明变量的同时可以直接赋值。

声明一个变量并赋值， 我们称之为变量的初始化。

```js
// 声明height变量，并同时赋值175
var height = 175;
```

## 变量语法扩展

### 同时声明多个变量

同时声明多个变量时，只需要写一个 var， 多个变量名之间使用英文逗号隔开。

```JS
var age, height, name;

var age = 18, name = '张三';
```

### 重新赋值的变量

一个变量被重新复赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。

```JS
var height = 175;

height = 180;

// height 最后的值为180
```

### 未赋值的变量

使用未赋值的变量，打印结果为：undefined 未定义的

```JS
var wieght;
console.log(wieght); // undefined 
```

### 未声明的变量

使用未声明的变量，程序会报错，浏览器会抛出错误，导致程序终止，但是由于JS是解释型的脚本语言，报错之前的代码正常运行，报错时候的代码不再执行。

```js
console.log(wieght);
```

报错如下：

![image-20211126231728628](https://i.loli.net/2021/11/27/WxoIayMzb7imNAu.png)

注意分析错误：

- ReferenceError 是引用错误的意思
- wieght  是变量名
- index.html:40 表示该报错出现在index.html的第40行

### 未使用var的变量

未使用var声明的变量是全局变量，不建议使用。

```js
wieght = 100;
console.log(wieght); // 100
```

思考：如何交换两个变量的值？



# JS数据类型

## 数据类型介绍

为什么需要定义数据类型？

变量是内存中的一个存储区域。而数据类型的定义决定了这块存储区域的大小。【变量与数据类型的关系】

为什么需要定义变量存储区域的大小？

在计算机中，不同的数据所需占用的存储空间是不同的，为了便于把数据分成所需内存大小不同的数据，充分利用存储空间，于是定义了不同的数据类型。

比如：定义姓名使用字符串类型：“张三”，定义年龄使用数字类型：18。

总结：数据类型的区分是一种系统资源分配优化的方案。

## JS变量的数据类型

变量是用来存储值的，有变量名和数据类型。变量的数据类型决定了如何将变量的值的存储到计算机的内存中。JavaScript 是一种**弱类型语言**，声明变量都是使用var，不需要提前声明变量类型，在程序运行过程中，变量被赋值的时候类型会被自动确定。

```js
var age = 18; // 数字类型
var name = '张三'; // 字符串类型
```

在代码运行时，变量的数据类型是由 JS引擎 根据 = 右边变量值的数据类型来判断 的，运行完毕之后， 变量就确定了数据类型。

JavaScript 变量的数据类型可以动态变化，相同的变量可以使用赋值不同类型的数据：

```js
var age = 18; // 数字类型
age = '20';  // 字符串类型
```

## JS数据类型的分类

JS中数据类型分为两大类：**基本数据类型**和**引用数据类型**

基本数据类型也叫简单数据类型、值类型，引用数据类型也叫复杂数据类型

**值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）。

**引用数据类型**：对象数据类型（Object）。

我们所说的JS数据类型有6种：

- 基本类型5种：Boolean、Number、String、Null、Undefined
- 引用类型1种：Object

这6中数据类型不包含ES6的数据类型，其中Object又包含对象(Object)、数组(Array)、函数(Function)等。

![image-20211127115129225](https://i.loli.net/2021/11/27/VczsHdnR1F2ESYB.png)



## 数字类型Number

Number （数字）类型可以表示整数和小数（浮点值）。

### 整数

我们在程序中常用是是使用十进制数字，十进制取值范围是0-9：

```js
var age = 18; //整数
```

除了常见的十进制数据，还有二进制、八进制、十六进制。（了解）

八进制数字：第一个数字必须是零（0），然后是相应的八进制数字（数字 0~7）。如果字面量中包含的数字超出了应有的范围，就会忽略前缀的零，后面的数字序列会被当成十进制数：

```js
var num  = 071; //表示十进制的57
var num2 = 079; //无效的八进制，当成79处理
```

十六进制数字：必须让真正的数字前缀 0x（区分大小写），然后是十六进制数字（0~9 以 及 A~F）。十六进制数字中的字母大小写均可：

```js
var num1 = 0xA; // 十六进制 10 
var num2 = 0x1f; // 十六进制 31
```

> 注意：由于 JavaScript 保存数字的方式，实际中可能存在正零（+0）和负零（0）。正零和负零在所有情况下都被认为是等同的。

### 小数（浮点数）

要定义浮点值，数字中必须包含小数点，而且小数点后面必须至少有一个数字。虽然小数点前面不是必须有整数，但推荐加上。

```js
var weight = 62.5; // 小数
```

浮点值的精确度最高可达 17 位小数，但在算术计算中远不如整数精确。例如，0.1 加 0.2 得到的不是 0.3，而是 0.300 000 000 000 000 04。由于这种微小的舍入错误，导致很难测试特定的浮点值。

```JS
var a = 0.1, b = 0.2;
var c = a + b;
console.log('c=',c); // c= 0.30000000000000004
```

> 注意：之所以存在这种舍入错误，是因为使用了 IEEE 754 数字，这种错误并非 ECMAScript所独有。其他使用相同格式的语言也有这个问题。

### 值的范围

由于内存的限制，ECMAScript 并不支持表示这个世界上的所有数字。ECMAScript 可以表示的最小数字保存在 Number.MIN_VALUE 中，这个值在多数浏览器中是 5e-324；可以表示的最大数字保存在Number.MAX_VALUE 中，这个值在多数浏览器中是 1.797 693 134 862 315 7e+308。

如果某个计算得到的数字结果超出了 JavaScript 可以表示的范围，那么这个数字会被自动转换为一个特殊的 Infinity（无穷）值。任何无法表示的负数以-Infinity（负无穷大）表示，任何无法表示的正数以 Infinity（正无穷大）表示。

如果计算返回正 Infinity 或负 Infinity，则该值将不能再进一步用于任何计算。这是因为Infinity 没有可用于计算的数字表示形式。要确定一个值是不是有限大（即介于 JavaScript 能表示的最小值和最大值之间），可以使用 isFinite()函数，如下所示：

```js
var result = Number.MAX_VALUE + Number.MAX_VALUE; 
console.log(isFinite(result)); // false 
```

虽然超出有限数字范围的计算并不多见，但总归还是有可能的。因此在计算非常大或非常小的数字时，有必要监测一下计算结果是否超出范围。

> 注意：使用 Number.NEGATIVE_INFINITY 和 Number.POSITIVE_INFINITY 也可以获取正、负 Infinity。没错，这两个属性包含的值分别就是-Infinity 和 Infinity。

### NaN

有一个特殊的数字叫 NaN，意思是“不是数字”（Not a Number），用于表示本来要返回数字的操作失败了（而不是抛出错误）。比如，用 0 除任意数字在其他语言中通常都会导致错误，从而中止代码执行。但在 ECMAScript 中，0、+0 或0 相除会返回 NaN：

```js
console.log(0/0); // NaN 
console.log(-0/+0); // NaN
```

如果分子是非 0 值，分母是有符号 0 或无符号 0，则会返回 Infinity 或-Infinity：

```js
console.log(5/0); // Infinity 
console.log(5/-0); // -Infinity 
```

NaN 有几个独特的属性：

- 任何涉及 NaN 的操作始终返回 NaN（如 NaN/10），在连续多步计算时这可能是个问题。
- NaN 不等于包括 NaN 在内的任何值。例如，下面的比较操作会返回 false：

```js
// NaN也是JS中唯一一个不等于自身的值，判断某个值不能直接与NaN比较
console.log(NaN == NaN); // false 
console.log(NaN == 2);   // false 
```

为此，ECMAScript 提供了 isNaN()函数。该函数接收一个参数，可以是任意数据类型，然后判断这个参数是否“不是数字”。

把一个值传给 isNaN()后，该函数会尝试把它转换为数字。某些非数字的值可以直接转换成数字，如字符串"10"或布尔值。任何不能转换为数字的值都会导致这个函数返回true。举例如下：

```js
console.log(isNaN(NaN)); // true 
console.log(isNaN(10)); // false，10 是数字
console.log(isNaN("10")); // false，可以转换为数字 10 
console.log(isNaN("blue")); // true，不可以转换为数字
console.log(isNaN(true)); // false，可以转换为数字 1 
```

## 字符串类型String

String（字符串）数据类型表示零或多个 16 位 Unicode 字符序列。字符串可以使用双引号（"）、单引号（'）或反引号（`）标示，因此下面的代码都是合法的：

ECMAScript 语法中表示字符串的引号没有区别。

```js
var name = '张三';
var hobby = "睡觉";
```

- 在JS中书写中文必须添加引号，否则报错
- 开头和结尾的引号不能混用，前后引号类型保持一致，比如：`var str = "你好';` 是错误的写法

### 字符串引号嵌套

JS 可以用单引号嵌套双引号 ，或者用双引号嵌套单引号 (外双内单，外单内双)

```js
var str = '我是"好人"';
var str = "我是'好人'";
```

### 转义字符

字符串中可以使用转义字符用于打印：

```js
var str = '我是\'好人\'';
var str = "我是\"好人\"";
```

| **转义字符** | **解释说明**                |
| ------------ | --------------------------- |
| `\n`         | 换行符，n 是 newline 的意思 |
| `\\`         | 斜杠 \                      |
| `\'`         | '  单引号                   |
| `\"`         | ” 双引号                    |
| `\t`         | tab 缩进                    |
| `\b`         | 空格 ，b 是 blank 的意思    |

## 布尔类型Boolean

Boolean（布尔）类型只有两种取值：true 和 false。true 表示真（对），而 false 表示假（错）。

布尔值适用于记录只存在两种可能的值(常用记录是否怎么样)，布尔值变量的命名，一般以is开头，或has开头。

```js
var isOpen = true;
var isHot = false;
```

## 未定义类型Undefined

Undefined 类型只有一个值，就是特殊值 undefined。当使用 var 声明了变量但没有初始化时，就相当于给变量赋予了 undefined 值：

```js
var wieght;
console.log(wieght); // undefined 
console.log(wieght == undefined); // true 
```

undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。

典型用法是：
（1）变量被声明了，但没有赋值时，就等于undefined。
（2)  调用函数时，应该提供的参数没有提供，该参数等于undefined。
（3）对象没有赋值的属性，该属性的值为undefined。
（4）函数没有返回值时，默认返回undefined。

## 空的Null

Null 类型同样只有一个值，即特殊值 null。逻辑上讲，null 值表示一个空对象指针，这也是给typeof 传一个 null 会返回"object"的原因：

```js
var obj = null;
```

null表示"没有对象"，即该处不应该有值。典型用法是：
（1） 作为函数的参数，表示该函数的参数不是对象。
（2） 作为对象原型链的终点。
（3）查找标签的时候，没找到，也会返回null。

## 对象类型Object

ECMAScript 中的对象其实就是一组数据和功能的集合。对象通过 new 操作符后跟对象类型的名称来创建。开发者可以通过创建 Object 类型的实例来创建自己的对象，然后再给对象添加属性和方法。

常用的对象的类型：Object、Array、String、Date、Math、RegExp。

# 数据类型的获取typeof

因为 ECMAScript 的类型系统是松散的，所以需要一种手段来确定任意变量的数据类型。typeof操作符就是为此而生的。对一个值使用 typeof 操作符会返回下列字符串之一：

- "undefined"表示值未定义；
- "boolean"表示值为布尔值；
- "string"表示值为字符串；
- "number"表示值为数字；
- "object"表示值为对象（而不是函数）或 null；  "function"表示值为函数；

```js
var message = "some string"; 
var num = 22;
console.log(typeof message); // "string" 
console.log(typeof(message)); // "string" 
console.log(typeof true); // "boolean" 
console.log(typeof num); // "number" 
console.log(typeof undefined); // "undefined" 
console.log(typeof null); // "null" 
console.log(typeof NaN);// "number"  注意 NaN 是数字类型

// 对象：object， 数组:array，函数function 都属于对象类型
var p = {};
console.log(typeof p);//object
var arr = [1, 2, 3];
console.log(typeof arr);//object
function add() { }
console.log(typeof add);//function
```

注意：typeof在某些情况下返回的结果可能会让人费解，但技术上讲还是正确的。比如，调用typeof null 返回的是"object"。这是因为特殊值 null 被认为是一个对空对象的引用。

# 字面量

字面量是在源代码中一个固定值的表示法，通俗来说，就是字面量表示如何表达这个值。

```js
数字字面量：var a = 2;
字符串字面量：var str = '你好！';
布尔字面量：var isOpen = true;
对象字面量：var zhangsan = { name: '张三' }
数组字面量：var arr = [2,3,6,5];
```

# 数据类型转换

JavaScript 中一种数据类型的变量能够被转换另一种数据类型的变量，常见的转换有三种：

- 转换为数字类型
- 转换为字符串类型
- 转换为布尔类型

## 转为数字类型

有 3 个函数可以将非数字转换为数字：Number()、parseInt()和 parseFloat()。Number()是转型函数，可用于任何数据类型。后两个函数主要用于将字符串转换为数字。

### Number()转换

Number()函数基于如

下规则执行转换。

- 布尔值，true 转换为 1，false 转换为 0。 
- 数字，直接返回。
- null，返回 0。 
- undefined，返回 NaN。
- 字符串，应用以下规则。
  - 如果字符串包含数字字符，包括数字字符前面带加、减号的情况，则转换为一个十进制数字。因此，Number("1")返回 1，Number("123")返回 123，Number("011")返回 11（忽略前面的零）。
  - 如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值（同样，忽略前面的零）。
  - 如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数字。
  - 如果是空字符串（不包含字符），则返回 0。 
  - 如果字符串包含除上述情况之外的其他字符，则返回 NaN。 

```js
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(12));//12
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number('22'));//22
console.log(Number('22.3'));22.3
console.log(Number(''));//0 注意这个是空字符串
console.log(Number(' '));//0  注意这个是空格字符串
console.log(Number('1a'));//NaN
console.log(Number('hello world'));//NaN
```

### parseInt()转换

parseInt()函数更专注于字符串是否包含数字模式。

字符串最前面的空格会被忽略，从第一个非空格字符开始转换。如果第一个字符不是数字字符、加号或减号，parseInt()立即返回 NaN。这意味着空字符串也会返回 NaN（这一点跟 Number()不一样，它返回 0）。

如果第一个字符是数字字符、加号或减号，则继续依次检测每个字符，直到字符串末尾，或碰到非数字字符。比如，"1234blue"会被转换为 1234，因为"blue"会被完全忽略。类似地，"22.5"会被转换为 22，因为小数点不是有效的整数字符。

```js
console.log(parseInt("1234blue"));//1234
console.log(parseInt(""));//NaN
console.log(parseInt("22.5"));//22
console.log(parseInt("a1234blue"));//NaN
```

### parseFloat()转换

parseFloat()函数的工作方式跟 parseInt()函数类似，都是从位置 0 开始检测每个字符。同样，它也是解析到字符串末尾或者解析到一个无效的浮点数字字符为止。这意味着第一次出现的小数点是有效的，但第二次出现的小数点就无效了，此时字符串的剩余字符都会被忽略。因此，"22.34.5"将转换成 22.34。

```js
console.log(parseInt("1234blue"));//1234
console.log(parseInt(""));//NaN
console.log(parseInt("22.5"));//22
console.log(parseInt("a1234blue"));//NaN
console.log(parseFloat("22.34.5"));//22.34
```

### JS隐式转换

隐式转换是我们在进行算术运算的时候，JS 自动转换了数据类型，使用运算符 `-` `*` `/`  可以把数字字符串（只包含数字的字符串）转为数字类型：

- 运算符 `-` `*` `/` 可以把数字字符串转为数字类型
- 数字使用运算符 `+` `-` `*` `/`与布尔类型进行运算时，true转为1，false转为0

```js
var res = '12';
console.log(res - 1);//11
console.log(res * 1);//12
console.log(res / 1);//12

var res = '12.5';
console.log(res - 1);//11.5
console.log(res * 1);//12.5
console.log(res / 1);//12.5

console.log(6 + true);//7
console.log(6 - true);//5
console.log(6 * true);//6
console.log(6 / true);//6
console.log('6' - true);//5
console.log('6' * true);//6
console.log('6' / true);//6

//如果是包含非数字的字符串会计算结果为NaN
var res = '12.5a';
console.log(res - 1);//NaN
console.log(res * 1);//NaN
console.log(res / 1);//NaN
```

## 转换为字符串类型

转换为字符串使用 toString() 或者 String()。

### toString()转换

toString()方法可见于数字、布尔值、对象和字符串值。（没错，字符串值也有 toString()方法，该方法只是简单地返回自身的一个副本。）

null 和 undefined 值没有 toString()方法。

```js
var num = 12;
var isOpen = true;
console.log(num.toString());// '12'
console.log(isOpen.toString());// 'true'
```

### String()转换

如果你不确定一个值是不是 null 或 undefined，可以使用 String()转型函数，它始终会返回表示相应类型值的字符串。String()函数遵循如下规则。

- 如果值有 toString()方法，则调用该方法（不传参数）并返回结果。
- 如果值是 null，返回"null"。
- 如果值是 undefined，返回"undefined"。

```js
var num = 12;
var isOpen = true;
console.log(String(num));// '12'
console.log(String(isOpen));// 'true'
console.log(String(null));// 'null'
console.log(String(undefined));// 'undefined'
```

### toString() 和 String() 的区别

- 大多值都有toString()方法，null和undefined是没有的

- 任何值都可以使用String()方法，如果是 null 返回值是 "null",如果是undefined 返回值是"undefined"；

```js
var res1 = null;
var res2 = undefined;
console.log(String(res1)); // 'null'
console.log(String(res2));// 'undefined'
console.log(res1.toString());// 直接报错，无法使用 TypeError: Cannot read properties of null (reading 'toString')
console.log(res2.toString());// 直接报错，无法使用 TypeError: Cannot read properties of undefined (reading 'toString')
```

## 转换为布尔类型

Boolean()转型函数可以在任意类型的数据上调用，而且始终返回一个布尔值。什么值能转换为 true或 false 的规则取决于数据类型和实际的值。

- 空的字符串、数字0、NaN、null(空)、undefined都是false，其他都为true

```js
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean('hello')); // true
console.log(Boolean(0)); // false
console.log(Boolean(6)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
```

理解布尔类型的转换非常重要，因为像 if 等流控制语句会自动执行其他类型值到布尔值的转换。

# 字符串拼接

字符串拼接：多个数据之间使用 `+` 可以进行字符串拼接， `+` 就像胶水一样，把两个字符串粘起来，字符串拼接运算的结果为字符串类型。

字符串拼接分两种类型：

- 表达式开头为字符串
- 表达式开头不为字符串

表达式：是由数字、运算符、数字分组符号（括号）、自由变量等以能求得数字的有意义排列方法所得的组合。

## 表达式开头为字符串

字符串在 `+` 运算表达式的最前面，直接进行拼接，就像是把多个变量的值粘起来一样。

 ```js
 var a = 'hello' + '你好'; // 'hello你好'
 
 // 字符串可以和数字直接拼接，最终转化为字符串
 // 隐式转换: 2 转换为 '2'
 var a = '你好' + 2 + '3' + '她好';// '你好23她好'
 
 // 数字与字符串相加，会自动转化为字符串，变成字符串类型
 // 相当于 '1' + '0.5';
 var b = '1' + 1 / 2; // '10.5'
 
 // 布尔类型与字符串相加，转化为字符串
 var d = '1' + true; // '1true'
 var d = '1' + false;// '1false'
 ```

## 表达式开头不为字符串

 `+` 运算表达的最前面不为字符串，并且表达式中有多个 `+ ` 运算，可能会产生加法运算。

```js
var a1 = 10, a2 = 20, a3 = true, str = 'hello';
var res = a1 + a2 + str; //'30hello'
var res = a1 + str + a2; //'10hello20'
var res = str + a1 + a2; //'hello1020'


var res = a1 + a2 + + a3 + str; //'31hello'
var res = a1 + a2 + str + a3; //'30hellotrue'
var res = a1 + str + a2 + a3; //'10hello20true'
var res = str + a1 + a2 + a3; //'hello1020true'

var res = a3 + str;//truehello


var a1 = 10;
var a2 = "20";
var a3 = a1 + a2;

console.log(a1 + a3 - a1);
console.log(a1 - true + a2 + false);
console.log(a1 - a2 + "a3");
console.log(a3 == a3 - a1 + true * "10");
```

字符串拼接时，我们只需要掌握表达式的运算顺序：在加号运算表达式中是从左往右运算，在运算的过程中从左到右的顺序，比如 `a1 + a2 + str + a3` 先计算`a1+a2` 得到的结果30，然后计算`30+str`，得到的结果30hello，再计算`'30hello'+a3`，最终得到 `'30hellotrue'`。

## 字符串拼接只有 `+` 运算

字符串拼接支持 `+`运算，但是不支持 `-` `*` `/`，数字与字符串相减、相乘、相除时最终会转化为数字

```js
console.log( '2' - 1 / 2); //1.5
console.log( '2' * 2);//4
console.log( '2' / 2);//1
```

## 总结

- JS会尽最大努力计算出一个结果，在计算的过程会【自动】根据运算符进行类型转换（隐式转换）
- 字符串支持 `+` 运算符，但是字符串不支持  `-` `*` `/` 运算符

# 基础练习

- 从键盘输入小明的语数外成绩，输出  小明的总分是 
- 定义三个变量，从键盘输入值给他们，然后使用alert()顺序输出他们，保留三位小数
- 定义常量PI=3.1415926，从键盘输入 半径 r；输出圆的面积（保留2位小数）
- 从键盘获取 圆的半径r， 圆柱高h，定义一个圆周率常量 PI = 3.1415926 ，求出圆柱的体积（保留三位小数）
- 从键盘获取 圆的半径r， 圆柱高h，定义一个圆周率常量 PI = 3.1415926 ，求出圆周长，园面积，圆柱体积 取小数点后两位 有文字说明，例如：圆周长 = xxx.xx 
- 从键盘输入一个四位数的正整数，输出他的个，十，百，千位上的数字


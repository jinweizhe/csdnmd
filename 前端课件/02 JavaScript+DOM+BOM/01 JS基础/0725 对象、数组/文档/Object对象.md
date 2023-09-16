# 对象的使用场景

当处理大量的数据，这些数据又属于同一个整体时，使用多个变量记录这些数据就很繁琐和麻烦。

```js
var name = "张三";
var age = 18;
var sex = true;
var height = 180.0;
```

对于属于同一个整体的多个数据，使用对象进行记录会方便访问，对象起到了整合数据的功能。对象是数据的容器，这些数据叫做对象的属性。

```JS
var zhangsan = {};
zhangsan.name = "张三";
zhangsan.age = 18;
zhangsan.sex = '男';
zhangsan.height = 180.0;
```

获取张三的姓名和年龄只需要拿到 `zhangsan` 对象即可

```JS
console.log("我叫"+zhangsan.name+"，今年"+zhangsan.age+"岁");
```

对于对象的某种功能(例如自我介绍)，我们也可以整合到对象中，当对象需要使用这个功能时，就可以自己调函数，而不依赖外部的代码，对象也是功能的容器，这些功能叫做对象的方法。

```JS
zhangsan.say = function(){
  console.log("我叫"+this.name+"，今年"+this.age+"岁");
}

zhangsan.say();
```

对象可以总结为：一堆数据和对数据进行操作的相关方法的一个集合

对象的好处:

- 数据和方法封装在了一起，便于操作

- 数据和方法之间的联系更加的紧密

在什么情况下用对象:

- 又有数据又有操作数据的方法的时候

- 顺序不重要的情况下

# 对象的创建

显式地创建 Object 的实例有两种方式。

- 第一种是使用 new 操作符和 Object 构造函数。

- 另一种方式是使用对象字面量表示法。

## new Object()

```JS
// new 系统关键字，用来创建新的对象
// Object() 是系统的一个创建对象的函数
var zhangsan = new Object();
zhangsan.name = "张三";
zhangsan.age = 18;
zhangsan.say = function () { }

// 创建对象的时候可以直接添加属性和方法
var zhangsan = new Object({
  name: '张三',
  age: 18,
  say: function () {}
});
```

## 对象字面量

对象字面量是对象定义的简写形式，目的是为了简化包含大量属性的对象的创建。

对象字面量就是花括号 { } 里面包含了表达这个对象的属性和方法。使用对象字面量表示法可以让让属性和方法一目了然。

{ } 里面采取键值对（key: value）的形式表示 

- 键：属性名，属性名可以是key值、字符串、数字等类型
- 值：属性值，属性值可以是**任意类型**的值：数字、字符串、布尔，对象、函数等

```JS
// 创建对象时，直接添加属性和方法
var zhangsan = {
  // 添加了name属性，后面跟冒号，然后是属性值 '张三'。逗号用于在对象字面量中分隔属性
  name: '张三', 
  age: 18,
  // 把函数作为值，作为属性值添加到对象的属性上，这种属性叫做对象的方法
  say: function () {}
};

// 创建对象时，可以不添加任何属性和方法，直接使用一对花括号 {}
var zhangsan = {};
// 给对象添加属性和方法
zhangsan.name = "张三";
zhangsan.age = 18;
zhangsan.say = function () { }

//输出一个对象，一般使用console.dir，输出的内容更详细
console.dir(zhangsan);
```

属性名是字符串、数字类型

```JS
// 这个例子会得到一个带有属性 name、age 和 65 的对象。注意，数值属性会自动转换为字符串。
var zhangsan = {
  "name": '张三', 
  age: 18,
  65: 'A'
};
```

# 访问对象的属性

访问对象，可以获取对象的属性值或者调用对象的方法，不管是new Object();创建的对象，还是对象字面量创建的对象，访问形式都是一样的，只不过我们更加常用字面量创建对象。

以`zhangsan`对象为例：

```JS
var zhangsan = {
  name: '张三', 
  age: 18,
  say: function () {
    console.log('我叫'+this.name);
  }
};
```

## 访问属性

访问对象的属性主要是为了获取属性的值，有两种方式：

- 访问对象的属性，使用打点调用法 : **`对象.属性名`** ，这个点 . 就理解为“ 的 ”  
- 访问对象的属性另一种方式 : **`对象['属性名']`**，注意方括号里面的属性名必须加引号    

```JS
var name = zhangsan.name;
var name = zhangsan['name'];
```

## 访问方法

访问对象的方法主要是为了调用对象的方法，执行方法中的代码，也有两种方式：

- 调用对象的方法，使用打点调用法：**`对象.方法名()`** ，注意这个方法名字后面一定加圆括号 
- 调用对象的方法另一种方式 : **`对象['方法名']()`**，注意方括号里面的方法名必须加引号    

```JS
zhangsan.say();
zhangsan['say']();
```

## 两种方式的区别

对于已经存在的属性和方法，用 `. `和用 `[]` 得到的结果一致

对于不存在(未定义)的属性和方法，用 `.` 会创建这个新的属性或方法，而用 `[]` 的方式访问不会创建新的属性或方法

```JS
// 访问name属性，在张三对象中存在name属性，得到的结果一致
console.log(zhangsan.name); 
console.log(zhangsan['name']);
// 调用say函数，在张三对象中存在say函数，得到的结果一致
zhangsan.say();
zhangsan['say']();

// zhangsan['name'] 的写法可以转化成下面的写法
var username = 'name'; // 定义一个变量username，username的值是 'name'

// 正确写法，因为username变量相当于是'name'，这种写法等价于 zhangsan['name']
console.log(zhangsan[username]);

// 错误写法，因为张三对象中没有username属性，打印的时候得到结果是 undefined
console.log(zhangsan.username);

// 在于JS中 打点调用法 . 可以用来声明，声明对象属性和方法的方式就是：对象.属性
// 这里实际先声明了zhangsan的username属性，并且未初始化该属性，username属性值默认为undefined，然后输出该属性值，所以为undefined

// 不过需要注意的是，如果对象中不存在某个方法，直接调用时，程序会报错
zhangsan.run(); // 报错：TypeError: zhangsan.run is not a function
zhangsan['run'](); // 报错：TypeError: zhangsan.run is not a function
```

# 声明对象的属性

声明对象的属性和访问对象的属性写法一样，可以使用打点调用法 或者 [] 的形式：

- **访问对象的属性**是为了获取属性值，写在等号的右边
- **声明对象的属性**是为了给对象的**添加属性**或者**修改属性值**，写在等号的左边。

以`zhangsan`对象为例：

```JS
var zhangsan = {
  name: '张三', 
  age: 18,
  say: function () {
    console.log('我叫'+this.name);
  }
};
```

如果是对象中已经存在属性，直接修改属性值

如果是不存在的属性，声明该属性，同时可以给属性赋值

## 声明属性

```JS
// 修改age属性的值
zhangsan.age = 22;
zhangsan['age'] = 22;

// 添加height属性，并赋值
zhangsan.height = 180;
zhangsan['weight'] = 75;
```

## 声明方法

```JS
// 修改say方法
zhangsan.say = function () {
   console.log('我叫'+this.name+'，今年'+this.age+'岁。');
}
zhangsan['say'] = function () {
   console.log('我叫'+this.name+'，今年'+this.age+'岁。');
}

// 添加run方法，并赋值
zhangsan.run  = function () {}
zhangsan['run']  = function () {}
```

# for…in

`for...in` 以任意顺序遍历一个对象的[可枚举](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)属性，对象的属性是无序的，因此 for-in 语句不能保证返回对象属性的顺序，所有可枚举的属性都会返回一次，但返回的顺序可能会因浏览器而异。

```JS
for (变量 in 对象) {
    // 语句
}
```

`for...in`是为遍历对象属性而构建的，不建议与数组一起使用，数组可以用`Array.prototype.forEach()`和`for...of`，那么`for...in`的到底有什么用呢？

它最常用的地方应该是用于调试，可以更方便的去检查对象属性（通过输出到控制台或其他方式）。尽管对于处理存储数据，数组更实用些，但是你在处理有`key-value`数据（比如属性用作“键”），需要检查其中的任何键是否为某值的情况时，还是推荐用`for...in`。

```JS
var zhangsan = {
  name: '张三', 
  age: 18,
  say: function () {
    console.log('我叫'+this.name);
  }
};

// key 对应对象中的每一个属性
for (var key in zhangsan) {
  console.log(key);// 'name' 'age' 'say'
  console.log(zhangsan[key]);// '张三' 18 f(){}
}
```

# in 运算符

如果指定的属性在指定的对象或其原型链中，则**`in` 运算符**返回`true`。

理解为：检查某个键名是否存在，适用于对象，也适用于数组。

```js
var car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car); //  true
```

# 练习

有个帅哥名叫“张三”，今年22岁，身高180cm，体重75kg。有一个漂亮的女朋叫“花花”，花花今年20岁，身高172cm，体重56kg。张三喜欢打游戏、跑步、唱歌，是一名前端工程师，花花喜欢打游戏、逛街、是一名UI设计师。

- 用对象表示张三
- 用对象表示花花
- 用一个对象表示张三和花花

找到obj对象中出现次数最多的字母，并把该字母及其次数打印输出

- obj的属性名是字母，属性值是出现的次数

```js
var obj = {
  a: 6,
  d: 5,
  f: 9,
  s: 1,
};
```


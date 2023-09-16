# 概述

JavaScript 原生提供`Object`对象（注意起首的`O`是大写）。

JavaScript 的所有其他对象都继承自`Object`对象，即那些对象都是`Object`的实例。

`Object`对象的原生方法分成两类：`Object`本身的方法与`Object`的实例方法。

**（1）`Object`对象本身的方法**

所谓“本身的方法”就是直接定义在`Object`对象的方法。

```js
Object.print = function (o) { console.log(o) };
```

上面代码中，`print`方法就是直接定义在`Object`对象上。

**（2）`Object`的实例方法**

所谓实例方法就是定义在`Object`原型对象`Object.prototype`上的方法。它可以被`Object`实例直接使用。

```js
Object.prototype.print = function () {
  console.log(this);
};

var obj = new Object();
obj.print() // Object
```

上面代码中，`Object.prototype`定义了一个`print`方法，然后生成一个`Object`的实例`obj`。`obj`直接继承了`Object.prototype`的属性和方法，可以直接使用`obj.print`调用`print`方法。也就是说，`obj`对象的`print`方法实质上就是调用`Object.prototype.print`方法。

凡是定义在`Object.prototype`对象上面的属性和方法，将被所有Object的实例对象共享了。

`Object`既可以作为函数，又可以作为`Object`对象，Object作为对象就有自己的属性和方法，属性分为对象自身的属性（也叫**静态属性**）和**实例属性**，方法也分为对象自身的方法（又称为“**静态方法**”）和**实例方法**两部分。

# Object作为函数

## Object()

`Object`本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。

如果参数为空（或者为`undefined`和`null`），`Object()`返回一个空对象。

```js
var obj = Object();
// 等同于
var obj = Object(undefined);
var obj = Object(null);

obj instanceof Object // true
```

上面代码的含义，是将`undefined`和`null`转为对象，结果得到了一个空对象`obj`。

`instanceof`运算符用来验证，一个对象是否为指定的构造函数的实例。`obj instanceof Object`返回`true`，就表示`obj`对象是`Object`的实例。

如果参数是原始类型的值，`Object`方法将其转为对应的包装对象的实例。

```js
var obj = Object(1);
obj instanceof Object // true
obj instanceof Number // true

var obj = Object('foo');
obj instanceof Object // true
obj instanceof String // true

var obj = Object(true);
obj instanceof Object // true
obj instanceof Boolean // true
```

上面代码中，`Object`函数的参数是各种原始类型的值，转换成对象就是原始类型值对应的包装对象。

如果`Object`方法的参数是一个对象，它总是返回该对象，即不用转换。

```js
var arr = [];
var obj = Object(arr); // 返回原数组
obj === arr // true

var value = {};
var obj = Object(value) // 返回原对象
obj === value // true

var fn = function () {};
var obj = Object(fn); // 返回原函数
obj === fn // true
```

利用这一点，可以写一个判断变量是否为对象的函数。

```js
function isObject(value) {
  return value === Object(value);
}

isObject([]) // true
isObject(true) // false
```

## Object 构造函数

`Object`不仅可以当作工具函数使用，还可以当作构造函数使用，即前面可以使用`new`命令。

`Object`构造函数的首要用途，是直接通过它来生成新对象。

```js
var obj = new Object();
```

> 注意，通过`var obj = new Object()`的写法生成新对象，与字面量的写法`var obj = {}`是等价的。或者说，后者只是前者的一种简便写法。

`Object`构造函数的用法与工具方法很相似，几乎一模一样。使用时，可以接受一个参数，如果该参数是一个对象，则直接返回这个对象；如果是一个原始类型的值，则返回该值对应的包装对象。

```js
var o1 = {a: 1};
var o2 = new Object(o1);
o1 === o2 // true

var obj = new Object(123);
obj instanceof Number // true
```

虽然用法相似，但是`Object(value)`与`new Object(value)`两者的语义是不同的，`Object(value)`表示将`value`转成一个对象，`new Object(value)`则表示新生成一个对象，它的值是`value`。

# 静态属性

## 原型对象

Object.prototype是一个对象，用于表示Object的原型对象。几乎所有的JavaScript对象都是Object的实例，其原型链上最后一个就是指向Object.prototype。一个对象继承了Object.prototype的属性和方法。

也可以创建没有原型对象的对象，比如通过`Object.create(null)`创建，或通过`Object.setPrototypeOf(obj, null)`方法来改变指定对象的原型对象。

改变Object.prototype的属性和方法，或给Object.prototype添加属性和方法，都会影响到原型链上的所有对象，除非这些对象本身有定义相同的属性和方法进一步覆盖。

```JS
var obj1 = {};
Object.getPrototypeOf(obj1) === Object.prototype; // 普通对象的原型就是Object.prototype

var n = new Number(1);
// n是一个通过Number构造函数创建的对象，其原型是Number.prototype
Object.getPrototypeOf(n) === Number.prototype; 
// 而Number.prototype的原型最终指向Object.prototype
Object.getPrototypeOf(Number.ptototype) === Object.prototype; 

var obj2 = Object.create(null);
Object.getPrototypeOf(obj2) === null; // 通过Object.create(null)创建的对象其原型为null。

var obj3 = {};
Object.setPrototypeOf(obj3, null); 
Object.getPrototypeOf(obj3) === null; // 通过Object.getPrototypeOf()方法修改对象的原型。
```

# 实例属性

## 构造函数

Object.prototype.constructor 返回创建实例对象的 Object 构造函数的引用。注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。对原始类型来说，如1，true和"test"，该值只可读。

任何JavaScript函数都可以用作构造函数，并且调用构造函数是需要用到一个prototype属性的，因此，每个JavaScript函数（ECMAScript5中的Function.bind()方法返回的对象除外）都自动拥有一个prototype属性，这个属性的值是一个对象，这个对象包含唯一一个不可枚举的属性constructor。

所有对象都会从它的原型上继承一个 constructor 属性：

```js
var o = {};
o.constructor === Object; // true

var o = new Object;
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var a = new Array;
a.constructor === Array // true

var n = new Number(3);
n.constructor === Number; // true
```

构造函数的原型中预先定义了constructor属性，对象通常继承的constructor均指代他们的构造函数。由于构造函数是类的“公共标识”，因此这个constructor属性为对象提供了类。

打印一个对象的构造函数：

```js
function Tree(name) {
   this.name = name;//初始化属性
}

var theTree = new Tree("Redwood");//使用new关键字调用构造函数创建对象
console.log( "theTree.constructor is " + theTree.constructor );//运行结果如下

/*

theTree.constructor is function Tree(name) {
    this.name = name;
}

*/
```

改变对象的 constructor：

```js
function Type() { };//构造函数

var types = [
    new Array,
    [],
    new Boolean,
    true,       
    new Date,
    new Error,
    new Function,
    function(){},
    Math,   
    new Number,
    1,         
    new Object,
    {},
    new RegExp,
    /(?:)/,
    new String,
    "test"     
];

for(var i = 0; i < types.length; i++) {
    types[i].constructor = Type;
    types[i] = [ types[i].constructor, types[i] instanceof Type, types[i].toString() ];
}; //循环遍历数组，修改数组元素中对象的constructor属性

console.log( types.join("\n") );
//输出结果如下
```

```js
function Type() {},false,
function Type() {},false,
function Type() {},false,false
function Boolean() {[native code]},false,true
function Type() {},false,Mon Sep 01 2014 16:03:49 GMT+0600
function Type() {},false,Error
function Type() {},false,function anonymous() {}
function Type() {},false,function () {}
function Type() {},false,[object Math]
function Type() {},false,0
function Number() {[native code]},false,1
function Type() {},false,[object Object]
function Type() {},false,[object Object]
function Type() {},false,/(?:)/
function Type() {},false,/(?:)/
function Type() {},false,
function String() {[native code]},false,test

```

Boolean、Number、String这三个函数的constructor属性是只读属性，没有办法修改。

## 实例对象的原型

`Object.prototype.__proto__`指向一个对象，当一个 object 实例化时，使用该对象作为实例化对象的原型。

实例对象的`__proto__`属性（前后各两个下划线），返回该对象的原型。该属性可读写。

```js
var obj = {};
var p = {};

obj.__proto__ = p;
Object.getPrototypeOf(obj) === p // true
```

上面代码通过`__proto__`属性，将`p`对象设为`obj`对象的原型。

根据语言标准，`__proto__`属性只有浏览器才需要部署，其他环境可以没有这个属性。它前后的两根下划线，表明它本质是一个内部属性，不应该对使用者暴露。使用`__proto__`是有争议的，也不鼓励使用它。因为它从来没有被包括在EcmaScript语言规范中，但是现代浏览器都实现了它。`__proto__`属性已在ECMAScript 6语言规范中标准化，用于确保Web浏览器的兼容性，因此它未来将被支持。它已被不推荐使用，现在更推荐使用Object.getPrototypeOf/Reflect.getPrototypeOf 和Object.setPrototypeOf/Reflect.setPrototypeOf，进行原型对象的读写操作。

原型链可以用`__proto__`很直观地表示。

```js
var A = {
  name: '张三'
};
var B = {
  name: '李四'
};

var proto = {
  print: function () {
    console.log(this.name);
  }
};

A.__proto__ = proto;
B.__proto__ = proto;

A.print() // 张三
B.print() // 李四

A.print === B.print // true
A.print === proto.print // true
B.print === proto.print // true
```

上面代码中，`A`对象和`B`对象的原型都是`proto`对象，它们都共享`proto`对象的`print`方法。也就是说，`A`和`B`的`print`方法，都是在调用`proto`对象的`print`方法。

## 获取原型对象方法的比较

如前所述，`__proto__`属性指向当前对象的原型对象，即构造函数的`prototype`属性。

```js
var obj = new Object();

obj.__proto__ === Object.prototype	// true
obj.__proto__ === obj.constructor.prototype	// true
```

上面代码首先新建了一个对象`obj`，它的`__proto__`属性，指向构造函数（`Object`或`obj.constructor`）的`prototype`属性。

因此，获取实例对象`obj`的原型对象，有三种方法。

- `obj.__proto__`
- `obj.constructor.prototype`
- `Object.getPrototypeOf(obj)`

上面三种方法之中，前两种都不是很可靠。`__proto__`属性只有浏览器才需要部署，其他环境可以不部署。而`obj.constructor.prototype`在手动改变原型对象时，可能会失效。

```js
var P = function () {};
var p = new P();

var C = function () {};
C.prototype = p;
var c = new C();

c.constructor.prototype === p // false
```

上面代码中，构造函数`C`的原型对象被改成了`p`，但是实例对象的`c.constructor.prototype`却没有指向`p`。所以，在改变原型对象时，一般要同时设置`constructor`属性。

```js
C.prototype = p;
C.prototype.constructor = C;

var c = new C();
c.constructor.prototype === p // true
```

因此，推荐使用第三种`Object.getPrototypeOf`方法，获取原型对象。

# 静态方法

## 遍历对象的属性

`Object.keys`方法和`Object.getOwnPropertyNames`方法都用来遍历对象的属性。

**（1）Object.keys()**

`Object.keys`方法的参数是一个对象，返回一个包含该对象自身（而不是继承的）可枚举的所有属性名称的数组。

```js
var obj = {
  p1: 123,
  p2: 456
};

Object.keys(obj) // ["p1", "p2"]
```

**（2）Object.getOwnPropertyNames()**

`Object.getOwnPropertyNames`方法与`Object.keys`类似，也是接受一个对象作为参数，返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组，也不包含继承的属性名。

```js
var obj = {
  p1: 123,
  p2: 456
};

Object.getOwnPropertyNames(obj) // ["p1", "p2"]
```

对于一般的对象来说，`Object.keys()`和`Object.getOwnPropertyNames()`返回的结果是一样的。只有涉及不可枚举属性时，才会有不一样的结果。`Object.keys`方法只返回可枚举的属性，`Object.getOwnPropertyNames`方法还返回不可枚举的属性名。

```js
var a = ['Hello', 'World'];

Object.keys(a) // ["0", "1"]
Object.getOwnPropertyNames(a) // ["0", "1", "length"]


```

上面代码中，数组的`length`属性是不可枚举的属性，所以只出现在`Object.getOwnPropertyNames`方法的返回结果中。

```js
var obj = Object.defineProperties({}, {
  p1: { value: 1, enumerable: true },
  p2: { value: 2, enumerable: false }
});

Object.getOwnPropertyNames(obj)// ["p1", "p2"]
```

上面代码中，`obj.p1`是可遍历的，`obj.p2`是不可遍历的。`Object.getOwnPropertyNames`会将它们都返回。

这跟`Object.keys`的行为不同，`Object.keys`只返回对象自身的可遍历属性的全部属性名。

由于 JavaScript 没有提供计算对象属性个数的方法，所以可以用这两个方法代替。

```js
var obj = {
  p1: 123,
  p2: 456
};

Object.keys(obj).length // 2
Object.getOwnPropertyNames(obj).length // 2
```

一般情况下，几乎总是使用`Object.keys`方法，遍历对象的属性。

**（3）Object.getOwnPropertySymbols()**

`Object.getOwnPropertySymbols()` 方法返回一个给定对象自身的所有 Symbol 属性的数组。

与`Object.getOwnPropertyNames()`类似，您可以将给定对象的所有符号属性作为 Symbol 数组获取。 请注意，`Object.getOwnPropertyNames()`本身不包含对象的 Symbol 属性，只包含字符串属性。

因为所有的对象在初始化的时候不会包含任何的 Symbol，除非你在对象上赋值了 Symbol 否则`Object.getOwnPropertySymbols()`只会返回一个空的数组。

```js
var obj = {};
var a = Symbol("a");
var b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

var objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0])      // Symbol(a)
```

## 遍历对象的值

`Object.values()`方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用`for...in`循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。

```js
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']
```

## 属性描述对象

### 概述

JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。

对象里目前存在的属性描述对象有两种主要形式：**数据描述对象**和**存取描述对象**。

- 数据描述对象是一个具有值的属性，该值可以是可写的，也可以是不可写的。
- 存取描述对象是由 getter 函数和 setter 函数所描述的属性。

一个描述对象只能是这两者其中之一；不能同时是两者。

下面是属性描述对象的一个例子。

```js
{
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: undefined,
  set: undefined
}
```

### 属性描述对象提供6个元属性

这两种描述对象都是对象。它们共享以下可选键值（默认值是指在使用 `Object.defineProperty()` 定义属性时的默认值）：

（1）`value`

`value`是该属性的属性值，可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为`undefined`。

（2）`writable`

`writable`是一个布尔值，表示属性值（value）是否可改变（即是否可写），默认为`true`。当且仅当该属性的 `writable` 键值为 `true` 时，属性的值，也就是上面的 `value`，才能被改变。

（3）`enumerable`

`enumerable`是一个布尔值，表示该属性是否可枚举，默认为`true`。如果设为`false`，会使得某些操作（比如`for...in`循环、`Object.keys()`）跳过该属性。

当且仅当该属性的 `enumerable` 键值为 `true` 时，该属性才会出现在对象的枚举属性中。

（4）`configurable`

`configurable`是一个布尔值，表示属性的可配置性，默认为`true`。如果设为`false`，将阻止某些操作改写属性描述对象，比如无法删除该属性，也不得改变各种元属性（`value`属性除外）。也就是说，`configurable`属性控制了属性描述对象的可写性。

当且仅当该属性的 `configurable` 键值为 `true` 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。

数据描述符还具有以下可选键值  `get` 和 `set`：

（5）`get`

`get`是一个函数，表示该属性的取值函数（getter），默认为`undefined`。

属性的 getter 函数，如果没有 getter，则为 `undefined`。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 `this` 对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。

（6）`set`

`set`是一个函数，表示该属性的存值函数（setter），默认为`undefined`。

属性的 setter 函数，如果没有 setter，则为 `undefined`。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 `this` 对象。

### 描述符默认值汇总

- 拥有布尔值的键 `configurable`、`enumerable` 和 `writable` 的默认值都是 `false`。
- 属性值和函数的键 `value`、`get` 和 `set` 字段的默认值为 `undefined`。

### 描述符可拥有的键值

|            | configurable | enumerable | value      | writable   | get        | set        |
| ---------- | ------------ | ---------- | ---------- | ---------- | ---------- | ---------- |
| 数据描述符 | 可以         | 可以       | 可以       | 可以       | **不可以** | **不可以** |
| 存取描述符 | 可以         | 可以       | **不可以** | **不可以** | 可以       | 可以       |

如果一个描述符不具有 `value`、`writable`、`get` 和 `set` 中的任意一个键，那么它将被认为是一个数据描述符。如果一个描述符同时拥有 `value` 或 `writable` 和 `get` 或 `set` 键，则会产生一个异常。

### 获取属性的描述对象

`Object.getOwnPropertyDescriptor()`方法返回指定对象上一个自有属性对应的属性描述对象。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

它的第一个参数是目标对象，第二个参数是一个字符串，对应目标对象的某个属性名。

```js
var obj = { p: 'a' };

Object.getOwnPropertyDescriptor(obj, 'p')
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

上面代码中，`Object.getOwnPropertyDescriptor()`方法获取`obj.p`的属性描述对象。

注意，`Object.getOwnPropertyDescriptor()`方法只能用于对象自身的属性，不能用于继承的属性。

```js
var obj = { p: 'a' };

Object.getOwnPropertyDescriptor(obj, 'toString')
// undefined
```

上面代码中，`toString`是`obj`对象继承的属性，`Object.getOwnPropertyDescriptor()`无法获取。

## 定义/修改属性

`Object.defineProperty()`方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象。

该方法允许精确地添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，在枚举对象属性时会被枚举到（`for...in` 或 `Object.keys` 方法），可以改变这些属性的值，也可以删除这些属性。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 `Object.defineProperty()` 添加的属性值是不可修改（immutable）的。

它的用法如下：

```js
Object.defineProperty(object, propertyName, attributesObject)
```

`Object.defineProperty`方法接受三个参数，依次如下。

- object：属性所在的对象
- propertyName：字符串，表示属性名
- attributesObject：属性描述对象

### 创建属性

如果对象中不存在指定的属性，Object.defineProperty() 会创建这个属性。当描述符中省略某些字段时，这些字段将使用它们的默认值。

举例来说，定义`obj.p`可以写成下面这样。

```js
var obj = {}; // 创建一个新对象

// 在对象中添加一个属性与数据描述符的示例
Object.defineProperty(obj, 'p', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

obj.p // 123

obj.p = 246;
obj.p // 123
```

上面代码中，`Object.defineProperty()`方法定义了`obj.p`属性。由于属性描述对象的`writable`属性为`false`，所以`obj.p`属性不可写。注意，这里的`Object.defineProperty`方法的第一个参数是`{}`（一个新建的空对象），`p`属性直接定义在这个空对象上面，然后返回这个对象，这是`Object.defineProperty()`的常见用法。

**注意，一旦定义了取值函数`get`（或存值函数`set`），就不能将`writable`属性设为`true`，或者同时定义`value`属性，否则会报错。**

```js
var obj = {};

Object.defineProperty(obj, 'p', {
  value: 123,
  get: function() { return 456; }
});
// TypeError: Invalid property.
// A property cannot both have accessors and be writable or have a value

Object.defineProperty(obj, 'p', {
  writable: true,
  get: function() { return 456; }
});
// TypeError: Invalid property descriptor.
// Cannot both specify accessors and a value or writable attribute
```

上面代码中，同时定义了`get`属性和`value`属性，以及将`writable`属性设为`true`，就会报错。

### 修改属性

如果属性已经存在，`Object.defineProperty()`将尝试根据描述对象中的值以及对象当前的配置来修改这个属性。

### 添加多个属性和默认值

如果一次性定义或修改多个属性，可以使用`Object.defineProperties()`方法。

**`Object.defineProperties()`** 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

```JS
var obj = Object.defineProperties({}, {
  p1: { 
    value: 123, 
    enumerable: true 
  },
  p2: { 
    value: 'abc', 
    enumerable: true
  },
  p3: { 
    get: function () { return this.p1 + this.p2 },
    enumerable:true,
    configurable:true
  }
});

obj.p1 // 123
obj.p2 // "abc"
obj.p3 // "123abc"
```

上面代码中，`Object.defineProperties()`同时定义了`obj`对象的三个属性。其中，`p3`属性定义了取值函数`get`，即每次读取该属性，都会调用这个取值函数。

`Object.defineProperty()`和`Object.defineProperties()`参数里面的属性描述对象，`writable`、`configurable`、`enumerable`这三个属性的默认值都为`false`。

```js
var obj = {};
Object.defineProperty(obj, 'foo', {});
Object.getOwnPropertyDescriptor(obj, 'foo')
// {
//   value: undefined,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

上面代码中，定义`obj.foo`时用了一个空的属性描述对象，就可以看到各个元属性的默认值。

## 原型相关的方法

### 获取对象的原型

`Object.getPrototypeOf`方法返回参数对象的原型。这是获取原型对象的标准方法。

```js
var F = function () {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype // true
```

上面代码中，实例对象`f`的原型是`F.prototype`。

下面是几种特殊对象的原型。

```js
// 空对象的原型是 Object.prototype
Object.getPrototypeOf({}) === Object.prototype // true

// Object.prototype 的原型是 null
Object.getPrototypeOf(Object.prototype) === null // true

// 函数的原型是 Function.prototype
function f() {}
Object.getPrototypeOf(f) === Function.prototype // true
```

### 设置对象的原型

`Object.setPrototypeOf`方法为参数对象设置原型，返回该参数对象。

```js
Object.setPrototypeOf(obj, prototype)
```

它接受两个参数，第一个是现有对象，第二个是原型对象。

```js
var a = {};
var b = {x: 1};
Object.setPrototypeOf(a, b);

Object.getPrototypeOf(a) === b // true
a.x // 1
```

上面代码中，`Object.setPrototypeOf`方法将对象`a`的原型，设置为对象`b`，因此`a`可以共享`b`的属性。

`new`命令可以使用`Object.setPrototypeOf`方法模拟。

```js
var F = function () {
  this.foo = 'bar';
};

var f = new F();
// 等同于
var f = Object.setPrototypeOf({}, F.prototype);
F.call(f);
```

上面代码中，`new`命令新建实例对象，其实可以分成两步。第一步，将一个空对象的原型设为构造函数的`prototype`属性（上例是`F.prototype`）；第二步，将构造函数内部的`this`绑定这个空对象，然后执行构造函数，使得定义在`this`上面的方法和属性（上例是`this.foo`），都转移到这个空对象上。

### 创建对象

**`Object.create()`**方法创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`。

生成实例对象的常用方法是，使用`new`命令让构造函数返回一个实例。但是很多时候，只能拿到一个实例对象，它可能根本不是由构建函数生成的，那么能不能从一个实例对象，生成另一个实例对象呢？

JavaScript 提供了`Object.create()`方法，用来满足这种需求。该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。

```js
// 原型对象
var A = {
  print: function () {
    console.log('hello');
  }
};

// 实例对象
var B = Object.create(A);

Object.getPrototypeOf(B) === A // true
B.print() // hello
B.print === A.print // true
```

上面代码中，`Object.create()`方法以`A`对象为原型，生成了`B`对象。`B`继承了`A`的所有属性和方法。

实际上，`Object.create()`方法可以用下面的代码代替。

```js
if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
```

上面代码表明，`Object.create()`方法的实质是新建一个空的构造函数`F`，然后让`F.prototype`属性指向参数对象`obj`，最后返回一个`F`的实例，从而实现让该实例继承`obj`的属性。

下面三种方式生成的新对象是等价的。

```js
var obj1 = Object.create({});
var obj2 = Object.create(Object.prototype);
var obj3 = new Object();
```

如果想要生成一个不继承任何属性（比如没有`toString()`和`valueOf()`方法）的对象，可以将`Object.create()`的参数设为`null`。

```js
var obj = Object.create(null);

obj.valueOf()
// TypeError: Object [object Object] has no method 'valueOf'
```

上面代码中，对象`obj`的原型是`null`，它就不具备一些定义在`Object.prototype`对象上面的属性，比如`valueOf()`方法。

使用`Object.create()`方法的时候，必须提供对象原型，即参数不能为空，或者不是对象，否则会报错。

```js
Object.create()
// TypeError: Object prototype may only be an Object or null
Object.create(123)
// TypeError: Object prototype may only be an Object or null
```

`Object.create()`方法生成的新对象，动态继承了原型。在原型上添加或修改任何方法，会立刻反映在新对象之上。

```js
var obj1 = { p: 1 };
var obj2 = Object.create(obj1);

obj1.p = 2;
obj2.p // 2
```

上面代码中，修改对象原型`obj1`会影响到实例对象`obj2`。

除了对象的原型，`Object.create()`方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。

```js
var obj = Object.create({}, {
  p1: {
    value: 123,
    enumerable: true,
    configurable: true,
    writable: true,
  },
  p2: {
    value: 'abc',
    enumerable: true,
    configurable: true,
    writable: true,
  }
});

// 等同于
var obj = Object.create({});
obj.p1 = 123;
obj.p2 = 'abc';
```

`Object.create()`方法生成的对象，继承了它的原型对象的构造函数。

```js
function A() {}
var a = new A();
var b = Object.create(a);

b.constructor === A // true
b instanceof A // true
```

上面代码中，`b`对象的原型是`a`对象，因此继承了`a`对象的构造函数`A`。

## 控制对象状态

有时需要冻结对象的读写状态，防止对象被改变。JavaScript 提供了三种冻结方法，最弱的一种是`Object.preventExtensions`，其次是`Object.seal`，最强的是`Object.freeze`。

### 防止对象扩展

`Object.preventExtensions`方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

```js
var obj = new Object();
Object.preventExtensions(obj);

Object.defineProperty(obj, 'p', {
  value: 'hello'
});
// TypeError: Cannot define property:p, object is not extensible.

obj.p = 1;
obj.p // undefined
```

上面代码中，`obj`对象经过`Object.preventExtensions`以后，就无法添加新属性了。

### 判断对象是否可扩展

`Object.isExtensible`方法用于检查一个对象是否可扩展的，就是说是否使用了`Object.preventExtensions`方法。也就是说，检查是否可以为一个对象添加属性。

```js
var obj = new Object();

Object.isExtensible(obj) // true
Object.preventExtensions(obj);
Object.isExtensible(obj) // false
```

上面代码中，对`obj`对象使用`Object.preventExtensions`方法以后，再使用`Object.isExtensible`方法，返回`false`，表示已经不能添加新属性了。

### 密封对象

`Object.seal()`方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置（既无法添加新属性，也无法删除属性）。当前属性的值如果原来是可写的，还可以改变属性的值。

```js
var obj = { p: 'hello' };
Object.seal(obj);

delete obj.p;
obj.p // "hello"

obj.x = 'world';
obj.x // undefined
```

上面代码中，`obj`对象执行`Object.seal`方法以后，就无法添加新属性和删除旧属性了。

`Object.seal`实质是把属性描述对象的`configurable`属性设为`false`，因此属性描述对象不再能改变了。

```js
var obj = {
  p: 'a'
};

// seal方法之前
Object.getOwnPropertyDescriptor(obj, 'p')
// Object {
//   value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.seal(obj);

// seal方法之后
Object.getOwnPropertyDescriptor(obj, 'p')
// Object {
//   value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: false
// }

Object.defineProperty(obj, 'p', {
  enumerable: false
})
// TypeError: Cannot redefine property: p
```

上面代码中，使用`Object.seal`方法之后，属性描述对象的`configurable`属性就变成了`false`，然后改变`enumerable`属性就会报错。

`Object.seal`只是禁止新增或删除属性，并不影响修改某个属性的值。

```js
var obj = { p: 'a' };
Object.seal(obj);
obj.p = 'b';
obj.p // 'b'
```

上面代码中，`Object.seal`方法对`p`属性的`value`无效，是因为此时`p`属性的可写性由`writable`决定。

### 判断对象是否已经密封

`Object.isSealed`方法用于检查一个对象是否使用了`Object.seal`方法。

```js
var obj = { p: 'a' };

Object.seal(obj);
Object.isSealed(obj) // true
```

这时，`Object.isExtensible`方法也返回`false`。

```js
var obj = { p: 'a' };

Object.seal(obj);
Object.isExtensible(obj) // false
```

### 冻结对象

`Object.freeze`方法可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量。

```js
var obj = {
  p: 'hello'
};

Object.freeze(obj);

obj.p = 'world';
obj.p // "hello"

obj.t = 'hello';
obj.t // undefined

delete obj.p // false
obj.p // "hello"
```

上面代码中，对`obj`对象进行`Object.freeze()`以后，修改属性、新增属性、删除属性都无效了。这些操作并不报错，只是默默地失败。如果在严格模式下，则会报错。

### 判断对象是否已经冻结

`Object.isFrozen`方法用于检查一个对象是否使用了`Object.freeze`方法。

```js
var obj = {
  p: 'hello'
};

Object.freeze(obj);
Object.isFrozen(obj) // true
```

使用`Object.freeze`方法以后，`Object.isSealed`将会返回`true`，`Object.isExtensible`返回`false`。

```js
var obj = {
  p: 'hello'
};

Object.freeze(obj);

Object.isSealed(obj) // true
Object.isExtensible(obj) // false
```

`Object.isFrozen`的一个用途是，确认某个对象没有被冻结后，再对它的属性赋值。

```js
var obj = {
  p: 'hello'
};

Object.freeze(obj);

if (!Object.isFrozen(obj)) {
  obj.p = 'world';
}
```

上面代码中，确认`obj`没有被冻结后，再对它的属性赋值，就不会报错了。

### 局限性

上面的三个方法锁定对象的可写性有一个漏洞：可以通过改变原型对象，来为对象增加属性。

```js
var obj = new Object();
Object.preventExtensions(obj);

var proto = Object.getPrototypeOf(obj);
proto.t = 'hello';
obj.t
// hello
```

上面代码中，对象`obj`本身不能新增属性，但是可以在它的原型对象上新增属性，就依然能够在`obj`上读到。

一种解决方案是，把`obj`的原型也冻结住。

```js
var obj = new Object();
Object.preventExtensions(obj);

var proto = Object.getPrototypeOf(obj);
Object.preventExtensions(proto);

proto.t = 'hello';
obj.t // undefined
```

另外一个局限是，如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容。

```js
var obj = {
  foo: 1,
  bar: ['a', 'b']
};
Object.freeze(obj);

obj.bar.push('c');
obj.bar // ["a", "b", "c"]
```

上面代码中，`obj.bar`属性指向一个数组，`obj`对象被冻结以后，这个指向无法改变，即无法指向其他值，但是所指向的数组是可以改变的。

## 创建对象assign

`Object.assign()` 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

```js
Object.assign(target, ...sources)
```

- target：目标对象。

- sources：源对象。

如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。后面的源对象的属性将类似地覆盖前面的源对象的属性。

`Object.assign` 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。该方法使用源对象的`[[Get]]`和目标对象的`[[Set]]`，所以它会调用相关 getter 和 setter。因此，它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含getter，这可能使其不适合将新属性合并到原型中。为了将属性定义（包括其可枚举性）复制到原型，应使用`Object.getOwnPropertyDescriptor()`和`Object.defineProperty()` 。

复制一个对象：

```js
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

合并对象：

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
```

合并具有相同属性的对象：

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

## 比较两个值是否相同

Object.is() 方法判断两个值是否为同一个值，返回一个布尔值。

```js
Object.is(value1, value2);
```

- value1：被比较的第一个值。

- value2：被比较的第二个值。

`Object.is()` 方法判断两个值是否为同一个值。如果满足以下条件则两个值相等:

- 都是 `undefined`
- 都是 `null`
- 都是 `true` 或 `false`
- 都是相同长度的字符串且相同字符按相同顺序排列
- 都是相同对象（意味着每个对象有同一个引用）
- 都是数字且
  - 都是 `+0`
  - 都是 `-0`
  - 都是 `NaN`
  - 或都是非零而且非 `NaN`且为同一个值

与`==` 运算不同。 `==` 运算符在判断相等前对两边的变量(如果它们不是同一类型) 进行强制转换 (这种行为的结果会将 `"" == false` 判断为 `true`), 而 `Object.is`不会强制转换两边的值。

与`===`运算也不相同。 `===` 运算符 (也包括 `==` 运算符) 将数字 `-0` 和 `+0` 视为相等 ，而将`Number.NaN` 与`NaN`视为不相等.

# 实例方法

除了静态方法，还有不少方法定义在`Object.prototype`对象。它们称为实例方法，所有`Object`的实例对象都继承了这些方法。

`Object`实例对象的方法，主要有以下六个。

- `Object.prototype.valueOf()`：返回当前对象对应的值。
- `Object.prototype.toString()`：返回当前对象对应的字符串形式。
- `Object.prototype.toLocaleString()`：返回当前对象对应的本地字符串形式。
- `Object.prototype.hasOwnProperty()`：返回一个布尔值，用于表示一个对象自身是否包含指定的属性，该方法并不会查找原型链上继承来的属性。
- `Object.prototype.isPrototypeOf()`：返回一个布尔值，用于表示该方法所调用的对象是否在指定对象的原型链中。
- `Object.prototype.propertyIsEnumerable()`：返回一个布尔值，判断某个属性是否可枚举。

## 对象的原始值

`Object.prototype.valueOf()`方法的作用是返回一个对象的“原始值”，默认情况下返回对象本身。

```js
var obj = new Object();
obj.valueOf() === obj // true
```

上面代码比较`obj.valueOf()`与`obj`本身，两者是一样的。

`valueOf`方法的主要用途是，JavaScript 自动类型转换时会默认调用这个方法。

```js
var obj = new Object();
1 + obj // "1[object Object]"
```

上面代码将对象`obj`与数字`1`相加，这时 JavaScript 就会默认调用`valueOf()`方法，求出`obj`的值再与`1`相加。所以，如果自定义`valueOf`方法，就可以得到想要的结果。

```js
var obj = new Object();
obj.valueOf = function () {
  return 2;
};

1 + obj // 3
```

上面代码自定义了`obj`对象的`valueOf`方法，于是`1 + obj`就得到了`3`。这种方法就相当于用自定义的`obj.valueOf`，覆盖`Object.prototype.valueOf`。

## 对象的字符串toString

Object.prototype.toString()方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串。

```js
var o1 = new Object();
o1.toString() // "[object Object]"

var o2 = {a:1};
o2.toString() // "[object Object]"
```

上面代码表示，对于一个对象调用`toString`方法，会返回字符串`[object Object]`，该字符串说明对象的类型。

字符串`[object Object]`本身没有太大的用处，但是通过自定义`toString`方法，可以让对象在自动类型转换时，得到想要的字符串形式。

```js
var obj = new Object();

obj.toString = function () {
  return 'hello';
};

obj + ' ' + 'world' // "hello world"
```

上面代码表示，当对象用于字符串加法时，会自动调用`toString`方法。由于自定义了`toString`方法，所以返回字符串`hello world`。

数组、字符串、函数、Date 对象都分别部署了自定义的`toString`方法，覆盖了`Object.prototype.toString`方法。

```js
[1, 2, 3].toString() // "1,2,3"

'123'.toString() // "123"

(function () {
  return 123;
}).toString()
// "function () {
//   return 123;
// }"

(new Date()).toString()
// "Tue May 10 2016 09:11:31 GMT+0800 (CST)"
```

上面代码中，数组、字符串、函数、Date 对象调用`toString`方法，并不会返回`[object Object]`，因为它们都自定义了`toString`方法，覆盖原始方法。

**toString() 的应用：判断数据类型**：

`Object.prototype.toString`方法返回对象的类型字符串，因此可以用来判断一个值的类型。

```js
var obj = {};
obj.toString() // "[object Object]"
```

上面代码调用空对象的`toString`方法，结果返回一个字符串`object Object`，其中第二个`Object`表示该值的构造函数。这是一个十分有用的判断数据类型的方法。

由于实例对象可能会自定义`toString`方法，覆盖掉`Object.prototype.toString`方法，所以为了得到类型字符串，最好直接使用`Object.prototype.toString`方法。通过函数的`call`方法，可以在任意值上调用这个方法，帮助我们判断这个值的类型。

```js
Object.prototype.toString.call(value)
```

上面代码表示对`value`这个值调用`Object.prototype.toString`方法。

不同数据类型的`Object.prototype.toString`方法返回值如下。

- 数值：返回`[object Number]`。
- 字符串：返回`[object String]`。
- 布尔值：返回`[object Boolean]`。
- undefined：返回`[object Undefined]`。
- null：返回`[object Null]`。
- 数组：返回`[object Array]`。
- arguments 对象：返回`[object Arguments]`。
- 函数：返回`[object Function]`。
- Error 对象：返回`[object Error]`。
- Date 对象：返回`[object Date]`。
- RegExp 对象：返回`[object RegExp]`。
- 其他对象：返回`[object Object]`。

这就是说，`Object.prototype.toString`可以看出一个值到底是什么类型。

```js
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
```

利用这个特性，可以写出一个比`typeof`运算符更准确的类型判断函数。

```js
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"
```

在上面这个`type`函数的基础上，还可以加上专门判断某种类型数据的方法。

```js
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true
```

## 对象的字符串toLocaleString

`Object.prototype.toLocaleString`方法与`toString`的返回结果相同，也是返回一个值的字符串形式。

```js
var obj = {};
obj.toString(obj) // "[object Object]"
obj.toLocaleString(obj) // "[object Object]"
```

这个方法的主要作用是留出一个接口，让各种不同的对象实现自己版本的`toLocaleString`，用来返回针对某些地域的特定的值。

```js
var person = {
  toString: function () {
    return 'Henry Norman Bethune';
  },
  toLocaleString: function () {
    return '白求恩';
  }
};

person.toString() // Henry Norman Bethune
person.toLocaleString() // 白求恩
```

上面代码中，`toString()`方法返回对象的一般字符串形式，`toLocaleString()`方法返回本地的字符串形式。

目前，主要有三个对象自定义了`toLocaleString`方法。

- Array.prototype.toLocaleString()
- Number.prototype.toLocaleString()
- Date.prototype.toLocaleString()

举例来说，日期的实例对象的`toString`和`toLocaleString`返回值就不一样，而且`toLocaleString`的返回值跟用户设定的所在地域相关。

```js
var date = new Date();
date.toString() // "Tue Jan 01 2018 12:01:33 GMT+0800 (CST)"
date.toLocaleString() // "1/01/2018, 12:01:33 PM"
```

## 判断是否是对象的属性

`Object.prototype.hasOwnProperty`方法接受一个字符串作为参数，返回一个布尔值，用于表示一个对象自身是否包含指定的属性，该方法并不会查找原型链上继承来的属性。

hasOwnProperty`方法是 JavaScript 之中唯一一个处理对象属性时，不会遍历原型链的方法。

```js
var obj = {
  p: 123
};

obj.hasOwnProperty('p') // true
obj.hasOwnProperty('toString') // false
```

上面代码中，对象`obj`自身具有`p`属性，所以返回`true`。`toString`属性是继承的，所以返回`false`。

所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。

即使属性的值是 null 或 undefined，只要属性存在，hasOwnProperty 依旧会返回 true。

```js
var o = new Object();
o.propOne = null;
o.hasOwnProperty('propOne'); // 返回 true
o.propTwo = undefined;
o.hasOwnProperty('propTwo'); // 返回 true
```

## 判断对象是否在原型链上

`Object.prototype.isPrototypeOf()` 方法用于判断一个对象是否存在于另一个对象的原型链上。

```js
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);

o2.isPrototypeOf(o3) // true
o1.isPrototypeOf(o3) // true
```

上面代码中，`o1`和`o2`都是`o3`的原型。这表明只要实例对象处在参数对象的原型链上，`isPrototypeOf`方法都返回`true`。

```js
Object.prototype.isPrototypeOf({}) // true
Object.prototype.isPrototypeOf([]) // true
Object.prototype.isPrototypeOf(/xyz/) // true
Object.prototype.isPrototypeOf(Object.create(null)) // false
```

上面代码中，由于`Object.prototype`处于原型链的最顶端，所以对各种实例都返回`true`，只有直接继承自`null`的对象除外。

## 判断属性是否可枚举

`Object.prototype.propertyIsEnumerable()` 方法返回一个布尔值，表示指定的属性是否可枚举。

注意，这个方法只能用于判断对象自身的属性，对于继承的属性一律返回`false`。

每个对象都有一个 `propertyIsEnumerable` 方法。此方法可以确定对象中指定的属性是否可以被 for...in 循环枚举，但是通过原型链继承的属性除外。如果对象没有指定的属性，则此方法返回 false。

```js
var obj = {};
obj.p = 123;

obj.propertyIsEnumerable('p') // true
obj.propertyIsEnumerable('toString') // false
```

上面代码中，`obj.p`是可遍历的，而`obj.toString`是继承的属性。

# in 运算符和 for...in 循环

## in

`in`运算符返回一个布尔值，如果指定的属性在指定的对象或其原型链中，则**`in` 运算符**返回`true`。

它不区分该属性是对象自身的属性，还是继承的属性。

```js
prop in object
```

- prop：一个字符串类型或者 symbol 类型的属性名或者数组索引（非symbol类型将会强制转为字符串）。
- objectName：检查它（或其原型链）是否包含具有指定名称的属性的对象。

```js
// 数组
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees        // 返回true
3 in trees        // 返回true
6 in trees        // 返回false
"bay" in trees    // 返回false (必须使用索引号,而不是数组元素的值)

"length" in trees // 返回true (length是一个数组属性)

// 自定义对象
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // 返回true
"model" in mycar // 返回true

"PI" in Math   // 返回true
'length' in Date // true
```

**`in`运算符常用于检查一个属性是否存在。**

`in`右操作数必须是一个对象值。例如，你可以指定使用`String`构造函数创建的字符串，但不能指定字符串文字。

```js
var color1 = new String("green");
"length" in color1 // 返回true
var color2 = "coral";
"length" in color2 // 报错(color2不是对象)
```

**对被删除或值为 undefined 的属性使用in**

如果你使用 delete 运算符删除了一个属性，则 in 运算符对所删除属性返回 false。

```js
var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // 返回false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // 返回false
```

如果你只是将一个属性的值赋值为undefined，而没有删除它，则 in 运算仍然会返回true。

```js
var mycar = {make: "Honda", model: "Accord", year: 1998};
mycar.make = undefined;
"make" in mycar;  // 返回true


var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // 返回true
```

**继承属性**

如果一个属性是从原型链上继承来的，in 运算符也会返回 true。

```js
"toString" in {}; // 返回true
'toString' in Date // true 
```

## for…in

`for...in`语句以任意顺序遍历一个对象的除Symbol以外的**可枚举**属性，包括继承的可枚举属性。

```js
for (variable in object){
  statement
}
```

- variable：在每次迭代时，variable会被赋值为不同的属性名。
- object：非Symbol类型的可枚举属性被迭代的对象。

```js
var o1 = { p1: 123 };

var o2 = Object.create(o1, {
  p2: { value: "abc", enumerable: true }
});

for (p in o2) {
  console.info(p);
}
// p2
// p1
```

上面代码中，对象`o2`的`p2`属性是自身的，`p1`属性是继承的。这两个属性都会被`for...in`循环遍历。

**仅迭代自身的属性**

如果你只要考虑对象本身的属性，而不是它的原型，那么使用 `getOwnPropertyNames()` 或执行 `hasOwnProperty()` 来确定某属性是否是对象本身的属性（也能使用`propertyIsEnumerable`）。或者，如果你知道不会有任何外部代码干扰，您可以使用检查方法扩展内置原型。

```js
for ( var name in object ) {
  if ( object.hasOwnProperty(name) ) {
    /* loop code */
  }
}
```

下面的函数说明了`hasOwnProperty()`的用法：继承的属性不显示。

```js
var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (var prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"
```

获得对象的所有属性（不管是自身的还是继承的，也不管是否可枚举），可以使用下面的函数。

```js
function inheritedPropertyNames(obj) {
  var props = {};
  while(obj) {
    Object.getOwnPropertyNames(obj).forEach(function(p) {
      props[p] = true;
    });
    obj = Object.getPrototypeOf(obj);
  }
  return Object.getOwnPropertyNames(props);
}
```

上面代码依次获取`obj`对象的每一级原型对象“自身”的属性，从而获取`obj`对象的“所有”属性，不管是否可遍历。

下面是一个例子，列出`Date`对象的所有属性。

```js
inheritedPropertyNames(Date)
// [
//  "caller",
//  "constructor",
//  "toString",
//  "UTC",
//  ...
// ]
```

**为什么用for ... in?**

`for ... in`是为遍历对象属性而构建的，不建议与数组一起使用，数组可以用`Array.prototype.forEach()`和`for ... of`，那么`for ... in`的到底有什么用呢？

它最常用的地方应该是用于调试，可以更方便的去检查对象属性（通过输出到控制台或其他方式）。尽管对于处理存储数据，数组更实用些，但是你在处理有`key-value`数据（比如属性用作“键”），需要检查其中的任何键是否为某值的情况时，还是推荐用`for ... in`。

下面的函数接受一个对象作为参数。被调用时迭代传入对象的所有可枚举属性然后返回一个所有属性名和其对应值的字符串。

```js
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// 输出:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

# delete 操作符

 **`delete` 操作符**用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。

```js
delete expression
```

 expression 的计算结果应该是某个属性的引用，例如：

```js
delete object.property
delete object['property']
```

- object：对象的名称，或计算结果为对象的表达式。
- property：要删除的属性。

```js
const obj = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(obj.firstname); //  "John"

delete obj.firstname;

console.log(obj.firstname); //  undefined
```

**`delete `**操作符会从某个对象上移除指定属性。成功删除的时候会返回 `true`，否则返回 `false`。

但是，以下情况需要重点考虑：

- 如果你试图删除的属性不存在，那么delete将不会起任何作用，但仍会返回true
- 如果对象的原型链上有一个与待删除属性同名的属性，那么删除属性之后，对象会使用原型链上的那个属性（也就是说，delete操作只会在自身的属性上起作用）
- 任何使用 `var`声明的属性不能从全局作用域或函数的作用域中删除。
  - 这样的话，delete操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）
  - 除了在全局作用域中的函数不能被删除，在对象(object)中的函数是能够用delete操作删除的。
- 任何用`let`声明的属性不能够从它被声明的作用域中删除。
- 不可设置的(Non-configurable)属性不能被移除。这意味着像`Math`, `Array`, `Object`内置对象的属性以及使用`Object.defineProperty()`方法设置为不可设置的属性不能被删除。

```js
var zhangsan = {
  age: 28,
  name: 'abc',
  designation: 'developer'
}

console.log(delete zhangsan.name);   // returns true
console.log(delete zhangsan.age);    // returns true

// 当试着删除一个不存在的属性时
// 同样会返回true
console.log(delete zhangsan.salary); // returns true
```

**不可配置属性**

当一个属性被设置为不可设置，delete操作将不会有任何效果，并且会返回false。在严格模式下会抛出语法错误（SyntaxError）。

```js
var zhangsan = {};
Object.defineProperty(zhangsan, 'name', {configurable: false});

console.log(delete zhangsan.name);  // returns false
```

**var, let以及const创建的不可设置的属性不能被delete操作删除。**

```js
var nameOther = 'XYZ';

// 通过以下方法获取全局属性:
Object.getOwnPropertyDescriptor(window, 'nameOther');

// 输出: 
// Object {
//   value: "XYZ",
//   writable: true,
//   enumerable: true,
//   configurable: false
//}

// 因为“nameOther”使用var关键词添加，
// 它被设置为不可设置（non-configurable）
delete nameOther;   // return false
```

**delete 和原型链**

在下面的示例中，我们删除一个对象的自己的属性，而原型链上具有相同名称的属性可用：

```js
function Foo() {
  this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

// 返回 true，因为删除的是 foo 对象的自身属性
delete foo.bar;

// foo.bar 仍然可用，因为它在原型链上可用。
console.log(foo.bar);   //42

// 从原型上删除属性
delete Foo.prototype.bar; //true

// 由于已删除“ bar”属性，因此不能再从Foo继承它。
console.log(foo.bar);    //undefined
```

**删除数组元素**

当你删除一个数组元素时，数组的长度不受影响。即便你删除了数组的最后一个元素也是如此。

当用 `delete` 操作符删除一个数组元素时，被删除的元素已经不再属于该数组。下面的例子中用 `delete `删除了` trees[3]`。

```js
var trees = ["redwood","bay","cedar","oak","maple"];

delete trees[3];

if (3 in trees) {
   // 这里不会执行
}
```

如果你想让一个数组元素继续存在但是其值是 `undefined`，那么可以使用将 `undefined` 赋值给这个元素而不是使用 `delete`。下面的例子中，trees[3] 被赋值为 `undefined`，但该元素仍然存在。

```js
var trees = ["redwood","bay","cedar","oak","maple"];

trees[3] = undefined;

if (3 in trees) {
   // 这里会被执行
}
```

如果你想通过改变数组的内容来移除一个数组元素，请使用splice() 方法。在下面的例子中，通过使用splice()，将trees[3]从数组中移除。

```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];

trees.splice(3,1);

console.log(trees); // ["redwood", "bay", "cedar", "maple"]
```

# 对象的拷贝

如果要拷贝一个对象，需要做到下面两件事情。

- 确保拷贝后的对象，与原对象具有同样的原型。
- 确保拷贝后的对象，与原对象具有同样的实例属性。

下面就是根据上面两点，实现的对象拷贝函数。

```js
function copyObject(orig) {
  var copy = Object.create(Object.getPrototypeOf(orig));
  copyOwnPropertiesFrom(copy, orig);
  return copy;
}

function copyOwnPropertiesFrom(target, source) {
  Object
    .getOwnPropertyNames(source)
    .forEach(function (propKey) {
      var desc = Object.getOwnPropertyDescriptor(source, propKey);
      Object.defineProperty(target, propKey, desc);
    });
  return target;
}
```

另一种更简单的写法，是利用 ES2017 才引入标准的`Object.getOwnPropertyDescriptors`方法。

```js
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
```
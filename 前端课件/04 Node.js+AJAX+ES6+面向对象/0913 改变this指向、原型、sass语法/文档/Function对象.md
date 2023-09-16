# Function

每个 JavaScript 函数实际上都是一个 `Function` 对象。运行 `(function(){}).constructor === Function // true` 便可以得到这个结论。

## 构造函数

**`Function` 构造函数**创建一个新的 `Function` **对象**。直接调用此构造函数可用动态创建函数，但会遇到和 [`eval`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 类似的的安全问题和(相对较小的)性能问题。然而，与 `eval` 不同的是，`Function` 创建的函数只能在全局作用域中运行。

## 语法

```js
new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

- arg1, arg2, ... argN：被函数使用的参数的名称必须是合法命名的。参数名称是一个有效的JavaScript标识符的字符串，或者一个用逗号分隔的有效字符串的列表;例如“×”，“theValue”，或“a,b”。
- functionBody：一个含有包括函数定义的 JavaScript 语句的字符串。

使用 Function 构造器生成的 Function 对象是在函数创建时解析的。这比你使用**函数声明**或者**函数表达式**并在你的代码中调用更为低效，因为使用后者创建的函数是跟其他代码一起解析的。

所有被传递到构造函数中的参数，都将被视为将被创建的函数的参数，并且是相同的标示符名称和传递顺序。

以调用函数的方式调用 Function 的构造函数（而不是使用 new 关键字) 跟以构造函数来调用是一样的。

下面的代码会创建一个需要两个参数的 `Function` 对象。

```js
const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));	// 8
```

## Function 构造器与函数声明之间的不同

由 `Function` 构造器创建的函数不会创建当前环境的闭包，它们总是被创建于全局环境，因此在运行时它们只能访问全局变量和自己的局部变量，不能访问它们被 `Function` 构造器创建时所在的作用域的变量。这一点与使用 [`eval`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 执行创建函数的代码不同。

# 属性和方法

全局的 Function 对象没有自己的属性和方法，但是，因为它本身也是一个函数，所以它也会通过原型链从自己的原型链 `Function.prototype`上继承一些属性和方法。

```js
var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // 这里的 x 指向最上面全局作用域内的 x
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // 这里的 x 指向上方本地作用域内的 x
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10

var f2 = createFunction2();
console.log(f2());          // 20
```

虽然这段代码可以在浏览器中正常运行，但在 Node.js 中 `f1()` 会产生一个“找不到变量 `x` ”的 `ReferenceError`。这是因为在 Node 中顶级作用域不是全局作用域，而 `x` 其实是在当前模块的作用域之中。

# 属性

## length

`Function.length` 属性指明函数的形参个数。

```js
function fun1() {}

function fun2(a, b) {}

console.log(fun1.length);//  0

console.log(fun2.length);//  2
```

length 是函数对象的一个属性值，指该函数期望传入的参数数量，即形参的个数。形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。

与之对比的是，  arguments.length 是函数被调用时实际传参的个数。

**Function 构造器的属性**

Function 构造器本身也是个Function。他的 length 属性值为 1 。该属性 Writable: false, Enumerable: false, Configurable: true.

**Function.prototype 对象的属性**

`Function.prototype`   对象的 length 属性值为 0 。

```js
console.log(Function.length); // 1

console.log((function(){}).length); // 1
console.log((function(a){}).length); // 1
console.log((function(a, b){}).length); // 2

console.log((function(...args) {}).length);// 0, rest 参数不统计

console.log((function(a, b = 1, c) {}).length); // 1, 只统计具有默认值的第一个参数之前的参数
```

## name

`function.name` 属性返回函数实例的名称。

```js
function doSomething() { }
doSomething.name;  // "doSomething"
```

使用`new Function(...)`语法创建的函数或只是 `Function(...)` 创建Function对象及其名称为“anonymous”。

```js
(new Function).name; // "anonymous"
```

变量和方法可以从句法位置推断匿名函数的名称（ECMAScript 2015中新增）。

```js
var f = function() {};
var object = {
  someMethod: function() {}
};

console.log(f.name); // "f"
console.log(object.someMethod.name); // "someMethod"
```

你可以在 **函数表达式**中定义函数的名称:

```js
var object = {
  someMethod: function object_someMethod() {}
};

console.log(object.someMethod.name); // "object_someMethod"

try { object_someMethod } catch(e) { alert(e); }
// ReferenceError: object_someMethod is not defined
```

你不能更改函数的名称，此属性是只读的：

```js
var object = {
  // anonymous
  someMethod: function() {}
};

object.someMethod.name = 'otherMethod';
console.log(object.someMethod.name); // someMethod
```

# 方法

## Function.prototype.call()

`call()` 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。

```js
function.call(thisArg, arg1, arg2, ...)
```

参数

- thisArg：可选的。在 function 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
- arg1, arg2, ...：指定的参数列表。

返回值

- 使用调用者提供的 `this` 值和参数调用该函数的返回值。若该方法没有返回值，则返回 `undefined`。

函数实例的`call`方法，可以指定函数内部`this`的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。

```js
var obj = {};

var f = function () {
  return this;
};

f() === window // true
f.call(obj) === obj // true
```

上面代码中，全局环境运行函数`f`时，`this`指向全局环境（浏览器为`window`对象）；`call`方法可以改变`this`的指向，指定`this`指向对象`obj`，然后在对象`obj`的作用域中运行函数`f`。

`call`方法的参数，应该是一个对象。如果参数为空、`null`和`undefined`，则默认传入全局对象。

```js
var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456
```

上面代码中，`a`函数中的`this`关键字，如果指向全局对象，返回结果为`123`。如果使用`call`方法将`this`关键字指向`obj`对象，返回结果为`456`。可以看到，如果`call`方法没有参数，或者参数为`null`或`undefined`，则等同于指向全局对象。

如果`call`方法的参数是一个原始值，那么这个原始值会自动转成对应的包装对象，然后传入`call`方法。

```js
var f = function () {
  return this;
};

f.call(5)
// Number {[[PrimitiveValue]]: 5}
```

上面代码中，`call`的参数为`5`，不是对象，会被自动转成包装对象（`Number`的实例），绑定`f`内部的`this`。

`call`方法还可以接受多个参数。

`call`的第一个参数就是`this`所要指向的那个对象，后面的参数则是函数调用时所需的参数。

```js
function add(a, b) {
  return a + b;
}

add.call(this, 1, 2) // 3
```

上面代码中，`call`方法指定函数`add`内部的`this`绑定当前环境（对象），并且参数为`1`和`2`，因此函数`add`运行后得到`3`。

`call`方法的一个应用是调用对象的原生方法。

```js
var obj = {};
obj.hasOwnProperty('toString') // false

// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
  return true;
};
obj.hasOwnProperty('toString') // true

Object.prototype.hasOwnProperty.call(obj, 'toString') // false
```

上面代码中，`hasOwnProperty`是`obj`对象继承的方法，如果这个方法一旦被覆盖，就不会得到正确结果。`call`方法可以解决这个问题，它将`hasOwnProperty`方法的原始定义放到`obj`对象上执行，这样无论`obj`上有没有同名方法，都不会影响结果。

**使用 call 方法调用父构造函数**

在一个子构造函数中，你可以通过调用父构造函数的 `call` 方法来实现继承，类似于 `Java` 中的写法。下例中，使用 `Food` 和 `Toy `构造函数创建的对象实例都会拥有在 `Product` 构造函数中添加的 `name` 属性和 `price` 属性,但 `category` 属性是在各自的构造函数中定义的。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

```

使用 call 方法调用函数并且不指定第一个参数（argument）

在下面的例子中，我们调用了 display 方法，但并没有传递它的第一个参数。如果没有传递第一个参数，this 的值将会被绑定为全局对象。

```js
var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen
```

**注意：**在严格模式下，`this` 的值将会是 `undefined`。见下文。

```js
'use strict';

var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call(); // Cannot read the property of 'sData' of undefined
```

## Function.prototype.apply()

`apply`方法的作用与`call`方法类似，也是改变`this`指向，然后再调用该函数。

**注意：**call()方法的作用和 apply() 方法类似，唯一的区别就是`call()`方法接受的是**参数列表**，而`apply()`方法接受的是**一个参数数组**。

```js
func.apply(thisValue, [arg1, arg2, ...])
```

参数

- thisArg：必选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
- argsArray：可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。

返回值

- 调用有指定this值和参数的函数的结果。

`apply`方法的第一个参数也是`this`所要指向的那个对象，如果设为`null`或`undefined`，则等同于指定全局对象。第二个参数则是一个数组，该数组的所有成员依次作为参数，传入原函数。原函数的参数，在`call`方法中必须一个个添加，但是在`apply`方法中，必须以数组形式添加。

```js
function f(x, y){
  console.log(x + y);
}

f.call(null, 1, 1) // 2
f.apply(null, [1, 1]) // 2
```

上面代码中，`f`函数本来接受两个参数，使用`apply`方法以后，就变成可以接受一个数组作为参数。

利用这一点，可以做一些有趣的应用。

**（1）找出数组最大元素**

JavaScript 不提供找出数组最大元素的函数。结合使用`apply`方法和`Math.max`方法，就可以返回数组的最大元素。

```js
var a = [10, 2, 4, 15, 9];

Math.max.apply(null, a) // 15

Math.min.apply(null, a) // 2
```

**（2）将数组的空元素变为`undefined`**

通过`apply`方法，利用`Array`构造函数将数组的空元素变成`undefined`。

```js
Array.apply(null, ['a', ,'b'])
// [ 'a', undefined, 'b' ]
```

空元素与`undefined`的差别在于，数组的`forEach`方法会跳过空元素，但是不会跳过`undefined`。因此，遍历内部元素的时候，会得到不同的结果。

```js
var a = ['a', , 'b'];

function print(i) {
  console.log(i);
}

a.forEach(print)
// a
// b

Array.apply(null, a).forEach(print)
// a
// undefined
// b
```

**（3）转换类似数组的对象**

另外，利用数组对象的`slice`方法，可以将一个类似数组的对象（比如`arguments`对象）转为真正的数组。

```js
Array.prototype.slice.apply({0: 1, length: 1}) // [1]
Array.prototype.slice.apply({0: 1}) // []
Array.prototype.slice.apply({0: 1, length: 2}) // [1, undefined]
Array.prototype.slice.apply({length: 1}) // [undefined]
```

上面代码的`apply`方法的参数都是对象，但是返回结果都是数组，这就起到了将对象转成数组的目的。从上面代码可以看到，这个方法起作用的前提是，被处理的对象必须有`length`属性，以及相对应的数字键。

**（4）绑定回调函数的对象**

前面的按钮点击事件的例子，可以改写如下。

```js
var o = new Object();

o.f = function () {
  console.log(this === o);
}

var f = function (){
  o.f.apply(o);
  // 或者 o.f.call(o);
};

// jQuery 的写法
$('#button').on('click', f);
```

上面代码中，点击按钮以后，控制台将会显示`true`。由于`apply()`方法（或者`call()`方法）不仅绑定函数执行时所在的对象，还会立即执行函数，因此不得不把绑定语句写在一个函数体内。更简洁的写法是采用下面介绍的`bind()`方法。

**（5）用 apply 将数组各项添加到另一个数组**

我们可以使用`push`将元素追加到数组中。由于push接受可变数量的参数，所以也可以一次追加多个元素。

但是，如果`push`的参数是数组，它会将该数组作为单个元素添加，而不是将这个数组内的每个元素添加进去，因此我们最终会得到一个数组内的数组。如果不想这样呢？`concat`符合我们的需求，但它并不是将元素添加到现有数组，而是创建并返回一个新数组。 然而我们需要将元素追加到现有数组......那么怎么做好？难道要写一个循环吗？别当然不是！

`apply`正派上用场！

```js
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

## Function.prototype.bind()

`bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```js
func.bind(thisArg[, arg1[, arg2[, ...]]])
```

**参数**

- thisArg：调用绑定函数时作为 `this` 参数传递给目标函数的值。 如果使用[`new`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)运算符构造绑定函数，则忽略该值。当使用 `bind` 在 `setTimeout` 中创建一个函数（作为回调提供）时，作为 `thisArg` 传递的任何原始值都将转换为 `object`。如果 `bind` 函数的参数列表为空，或者`thisArg`是`null`或`undefined`，执行作用域的 `this` 将被视为新函数的 `thisArg`。
- arg1, arg2, ...：当目标函数被调用时，被预置入绑定函数的参数列表中的参数。

**返回值**

- 返回一个原函数的拷贝，并拥有指定的 **`this`** 值和初始参数。

**创建绑定函数**:

`bind()` 最简单的用法是创建一个函数，不论怎么调用，这个函数都有同样的 **`this`** 值。JavaScript新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，期望方法中的 `this` 是原来的对象（比如在回调中传入这个方法）。如果不做特殊处理的话，一般会丢失原来的对象。基于这个函数，用原始的对象创建一个绑定函数，巧妙地解决了这个问题：

`bind`方法的参数就是所要绑定`this`的对象。

```js
var x = 66;
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // 66

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());// 42
```

**配合 setTimeout**:

在默认情况下，使用 `window.setTimeout()` 时，this 关键字会指向 `window` （或 global）对象。当类的方法中需要 this 指向类的实例时，你可能需要显式地把 this 绑定到回调函数，就不会丢失该实例的引用。

```js
// 在事件中使用定时器
div.onclick = function () {
  setTimeout(function () {
    console.log(this);
  }.bind(this), 1000);
  
  setTimeout( () => {
    console.log(this);
  }, 1000);
}
```

`this`绑定到其他对象也是可以的。

```js
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var obj = {
  count: 100
};
var func = counter.inc.bind(obj);
func();
obj.count // 101
```

上面代码中，`bind()`方法将`inc()`方法内部的`this`，绑定到`obj`对象。结果调用`func`函数以后，递增的就是`obj`内部的`count`属性。

`bind()`还可以接受更多的参数，将这些参数绑定原函数的参数。

```js
var add = function (x, y) {
  return x * this.m + y * this.n;
}

var obj = {
  m: 2,
  n: 2
};

var newAdd = add.bind(obj, 5);
newAdd(5) // 20
```

上面代码中，`bind()`方法除了绑定`this`对象，还将`add()`函数的第一个参数`x`绑定成`5`，然后返回一个新函数`newAdd()`，这个函数只要再接受一个参数`y`就能运行了。

如果`bind()`方法的第一个参数是`null`或`undefined`，等于将`this`绑定到全局对象，函数运行时`this`指向顶层对象（浏览器为`window`）。

```js
function add(x, y) {
  return x + y;
}

var plus5 = add.bind(null, 5);
plus5(10) // 15
```

上面代码中，函数`add()`内部并没有`this`，使用`bind()`方法的主要目的是绑定参数`x`，以后每次运行新函数`plus5()`，就只需要提供另一个参数`y`就够了。而且因为`add()`内部没有`this`，所以`bind()`的第一个参数是`null`，不过这里如果是其他对象，也没有影响。

`bind()`方法有一些使用注意点。

**（1）每一次返回一个新函数**

`bind()`方法每运行一次，就返回一个新函数，这会产生一些问题。比如，监听事件的时候，不能写成下面这样。

```js
element.addEventListener('click', o.m.bind(o));
```

上面代码中，`click`事件绑定`bind()`方法生成的一个匿名函数。这样会导致无法取消绑定，所以下面的代码是无效的。

```js
element.removeEventListener('click', o.m.bind(o));
```

正确的方法是写成下面这样：

```js
var listener = o.m.bind(o);
element.addEventListener('click', listener);
//  ...
element.removeEventListener('click', listener);
```

**（2）结合回调函数使用**

回调函数是 JavaScript 最常用的模式之一，但是一个常见的错误是，将包含`this`的方法直接当作回调函数。解决方法就是使用`bind()`方法，将`counter.inc()`绑定`counter`。

```js
var counter = {
  count: 0,
  inc: function () {
    'use strict';
    this.count++;
  }
};

function callIt(callback) {
  callback();
}

callIt(counter.inc.bind(counter));
counter.count // 1
```

上面代码中，`callIt()`方法会调用回调函数。这时如果直接把`counter.inc`传入，调用时`counter.inc()`内部的`this`就会指向全局对象。使用`bind()`方法将`counter.inc`绑定`counter`以后，就不会有这个问题，`this`总是指向`counter`。

还有一种情况比较隐蔽，就是某些数组方法可以接受一个函数当作参数。这些函数内部的`this`指向，很可能也会出错。

```js
var obj = {
  name: '张三',
  times: [1, 2, 3],
  print: function () {
    this.times.forEach(function (n) {
      console.log(this.name);
    });
  }
};

obj.print()
// 没有任何输出
```

上面代码中，`obj.print`内部`this.times`的`this`是指向`obj`的，这个没有问题。但是，`forEach()`方法的回调函数内部的`this.name`却是指向全局对象，导致没有办法取到值。稍微改动一下，就可以看得更清楚。

```js
obj.print = function () {
  this.times.forEach(function (n) {
    console.log(this === window);
  });
};

obj.print()
// true
// true
// true
```

解决这个问题，也是通过`bind()`方法绑定`this`。

```js
obj.print = function () {
  this.times.forEach(function (n) {
    console.log(this.name);
  }.bind(this));
};

obj.print()
// 张三
// 张三
// 张三
```

**（3）结合`call()`方法使用**

利用`bind()`方法，可以改写一些 JavaScript 原生方法的使用形式，以数组的`slice()`方法为例。

```js
[1, 2, 3].slice(0, 1) // [1]
// 等同于
Array.prototype.slice.call([1, 2, 3], 0, 1) // [1]
```

上面的代码中，数组的`slice`方法从`[1, 2, 3]`里面，按照指定的开始位置和结束位置，切分出另一个数组。这样做的本质是在`[1, 2, 3]`上面调用`Array.prototype.slice()`方法，因此可以用`call`方法表达这个过程，得到同样的结果。

`call()`方法实质上是调用`Function.prototype.call()`方法，因此上面的表达式可以用`bind()`方法改写。

```js
var slice = Function.prototype.call.bind(Array.prototype.slice);
slice([1, 2, 3], 0, 1) // [1]
```

上面代码的含义就是，将`Array.prototype.slice`变成`Function.prototype.call`方法所在的对象，调用时就变成了`Array.prototype.slice.call`。类似的写法还可以用于其他数组方法。

```js
var push = Function.prototype.call.bind(Array.prototype.push);
var pop = Function.prototype.call.bind(Array.prototype.pop);

var a = [1 ,2 ,3];
push(a, 4)
a // [1, 2, 3, 4]

pop(a)
a // [1, 2, 3]
```

如果再进一步，将`Function.prototype.call`方法绑定到`Function.prototype.bind`对象，就意味着`bind`的调用形式也可以被改写。

```js
function f() {
  console.log(this.v);
}

var o = { v: 123 };
var bind = Function.prototype.call.bind(Function.prototype.bind);
bind(f, o)() // 123
```

上面代码的含义就是，将`Function.prototype.bind`方法绑定在`Function.prototype.call`上面，所以`bind`方法就可以直接使用，不需要在函数实例上使用。

## Function.prototype.toString()

**`toString()`** 方法返回一个表示当前函数源代码的字符串。

```js
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// "function sum(a, b) {
//      return a + b;
// }"

console.log(Math.abs.toString());
// "function abs() { [native code] }"
```

Function对象覆盖了从Object继承来的`toString` 方法。对于用户定义的 Function 对象，`toString`方法返回一个字符串，其中包含用于定义函数的源文本段。

在Function需要转换为字符串时，通常会自动调用函数的 `toString` 方法。


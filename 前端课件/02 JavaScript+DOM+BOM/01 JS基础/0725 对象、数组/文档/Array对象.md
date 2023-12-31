

# 数组

数组是值的**有序**集合。每个值叫做一个**元素**，而每个元素在数组中有一个位置（下标），以数字表示，称为**索引**。

数组的好处:

- 减少了内存的开销，代码顺序存放在一起

- 查找速度更快

在什么情况下使用数组:

- 数据较多的情况下

- 顺序比较重要的情况下

# 数组的创建

显式地创建 Array 的实例有两种方式。

- 第一种是使用 new 操作符和 Array 构造函数。

- 另一种方式是使数组字面量表示法。

## new Array()

```JS
var colors = new Array();
```

如果知道数组中元素的数量，那么可以给构造函数传入一个数值，然后 length 属性就会被自动创建并设置为这个值。比如，下面的代码会创建一个初始 length 为 20 的数组：

```JS
var colors = new Array(20);
```

也可以给 Array 构造函数传入要保存的元素。比如，下面的代码会创建一个包含 3 个字符串值的数组：

```JS
var colors = new Array("red", "blue", "green");
```

创建数组时可以给构造函数传一个值。这时候就有点问题了，因为如果这个值是数值，则会创建一个长度为指定数值的数组；而如果这个值是其他类型的，则会创建一个只包含该特定值的数组。下面看一个例子：

```JS
var colors = new Array(3); // 创建一个包含 3 个元素的数组

var names = new Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组
```

## 数组字面量

数组字面量是在方括号中包含以逗号分隔的元素列表，如下面的例子所示：

```JS
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个元素的数组
var names = []; // 创建一个空数组
var values = [1,2,]; // 创建一个包含 2 个元素的数组
```

# 数组的元素

JavaScript数组的元素是无类型的：数组元素可以是**任意类型**的数据，并且同一个数组中的不同元素也可能有不同的类型。数组的元素甚至也可能是对象或其他数组，这允许创建复杂的数据结构，如对象的数组和数组的数组。

```JS
var nums = [2, 4, 6, 8, 10];

var arr = ['张三', true, 2, 9, null, undefind];

var data = [
  {name:'张三', age: 18, hobby:['游戏', '音乐', '运动']},
  {name:'李四', age: 22, hobby:['游戏', '运动']},
  {name:'王五', age: 20, hobby:['游戏', '跑步']},
];

```

# 数组的索引

JavaScript数组的索引是基于零的32位数值：第一个元素的索引为0，最大可能的索引为4 294 967 294 (2^32-2)，数组最大能容纳4 294 967 295个元素。

数组的索引从0开始依次为：0 1 2 3 … 4294967295

要取得或设置数组的值，需要使用中括号并提供相应值的数字索引，如下所示：

```JS
var colors = ["red", "blue", "green"]; // 定义一个字符串数组

console.log(colors[0]); // 显示第一项

colors[2] = "black"; // 修改第三项
colors[3] = "brown"; // 添加第四项
```

在中括号中提供的索引表示要访问的值。如果索引小于数组包含的元素数，则返回存储在相应位置的元素，就像示例中 colors[0]显示"red"一样。设置数组的值方法也是一样的，就是替换指定位置的值。如果把一个值设置给超过数组最大索引的索引，就像示例中的 colors[3]，则数组长度会自动扩展到该索引值加 1（示例中设置的索引 3，所以数组长度变成了 4）。

使用索引值获取数组元素的值，不要访问数组中不存在的索引，否则会造成数组越界，找不到元素，得到undefined。数组的最大索引值可以使用数组的长度length属性获取。

```JS
var colors = ["red", "blue", "green"]; // 定义一个字符串数组
console.log(colors[10]); // undefined

console.log(colors[colors.length - 1]);//通过colors.length-1作为索引访问数组中最后一个元素
```

# 数组的长度

JavaScript数组长度是动态的：根据需要它们会增长或缩减，并且在创建数组时无须声明一个固定的大小或者在数组大小变化时无须重新分配空间。

每个JavaScript数组都有一个length属性，表示数组的长度，length属性值与数组元素个数相等，其值比数组的最大索引值大1，即：**`数组最大索引值 = length-1`**，数组最大索引值也是最后一个元素的索引值。

length属性始终返回 0 或大于 0 的值，如下例所示：

```JS
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
var names = []; // 创建一个空数组

console.log(colors.length); // 3 
console.log(names.length); // 0
```

数组 length 属性的独特之处在于，它不是只读的。通过修改 length 属性，可以从数组末尾删除或添加元素。来看下面的例子：

```JS
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组

colors.length = 2;
alert(colors[2]); // undefined
```

这里，数组 colors 一开始有 3 个值。将 length 设置为 2，就删除了最后一个（位置 2 的）值，因此 colors[2]就没有值了。如果将 length 设置为大于数组元素数的值，则新添加的元素都将以undefined 填充，如下例所示：

```JS
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组

colors.length = 4;
alert(colors[3]); // undefined
```

这里将数组 colors 的 length 设置为 4，虽然数组只包含 3 个元素。位置 3 在数组中不存在，因此访问其值会返回特殊值 undefined。

使用 length 属性可以方便地向数组末尾添加元素，如下例所示：

```JS
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组

colors[colors.length] = "black"; // 添加一种颜色（位置 3）

colors[colors.length] = "brown"; // 再添加一种颜色（位置 4）
```

数组中最后一个元素的索引始终是 length - 1，因此下一个新增槽位的索引就是 length。每次在数组最后一个元素后面新增一项，数组的 length 属性都会自动更新，以反映变化。这意味着第二行的 `colors[colors.length]` 会在位置 3 添加一个新元素，下一行则会在位置 4 添加一个新元素。新的长度会在新增元素被添加到当前数组外部的位置上时自动更新。换句话说，就是 length 属性会更新为位置加上 1，如下例所示：

```JS
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组

colors[99] = "black"; // 添加一种颜色（位置 99）

alert(colors.length); // 100
```

这里，colors 数组有一个值被插入到位置 99，结果新 length 就变成了 100（99 + 1）。这中间的所有元素，即位置 3~98，实际上并不存在，因此在访问时会返回 undefined。

# 遍历数组

遍历数组：通过控制循环，访问数组中的每一个元素，通常可以可以使用 for 循环遍历数组。

```JS
var nums = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < nums.length; i++) {
  console.log(nums[i]);
  var num = nums[i];
  console.log(num);
}

// 优化for循环
// 简要说明: 使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显。
// 这种方法基本上是所有循环遍历方法中性能最高的一种
var length = nums.length;
for (var i = 0; i < length; i++) {
  console.log(nums[i]);
}
```

# 稀疏数组

稀疏数组就是包含从0开始的不连续索引的数组。通常，数组的length属性值代表数组中元素的个数。如果数组是稀疏的，length属性值大于元素的个数。

可以用Array()构造函数或简单地指定数组的索引值大于当前的数组长度来创建稀疏数组。

```JS
// 数组没有元素，但是arr.length是5
var arr = new Array(10); 

// 数组元素实际只有2个，但是长度确实20
var arr = []; 
arr[0] = 10;
arr[20] = 100;
```

# in 运算符

检查某个键名是否存在的运算符`in`，适用于对象，也适用于数组。

```js
var arr = [ 'a', 'b', 'c' ];
2 in arr  // true
'2' in arr // true
4 in arr // false
```

上面代码表明，数组存在键名为`2`的键。由于键名都是字符串，所以数值`2`会自动转成字符串。

注意，如果数组的某个位置是空位，`in`运算符返回`false`。

```js
var arr = [];
arr[100] = 'a';

100 in arr // true
1 in arr // false
```

上面代码中，数组`arr`只有一个成员`arr[100]`，其他位置的键名都会返回`false`

# 练习

- 1、使用循环创建一个包含1-100整数的数组arr = [1, 2, 3, … 100]，然后遍历数组计算数组中数字的和，及平均值
- 2、在第一题的基础上，求数组中所有偶数的和，及偶数的平均值
- 3、创建一个数组，数组中每个元素从1-100整数中随机出现，数组长度为100，计算数组中数字的和，及平均值
- 4、在第3题题的基础上，求数组中偶数的和，及偶数的平均值
- 5、在第3题的基础上，取出数组中所有的奇数存入新的数组（使用索引值，不要使用push）至少两种方法
- 6、找出数组所有的质数：把所有质数放入新的数组，并算出所有质数的和
- 7、找出数组中最大的数字
- 8、反转数组
- 9、数组排序：从大到小 或者 从小到大






















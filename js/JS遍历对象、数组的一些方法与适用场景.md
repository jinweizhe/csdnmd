## 从一到十

### [JS遍历对象、数组的一些方法与适用场景](https://www.cnblogs.com/cyds/p/15719683.html)

## for

```
for (let i = 0; i < arr1.length; ++i) {
    console.log(arr1[i]); // 5, 10, 20
}
```

几乎是任何编程语言都有的基本语法，用于遍历数组，中途可通过`break`中断遍历。

### for...in...

```
const arr1 = [5, 10, 20];
for (const item in arr1) {
    console.log(item); // 0, 1, 2
}
```

输出的是索引，而不是元素值。它可以用来遍历对象

```
const arr1 = { a: 5, b: 10, c: 20 };
for (const item in arr1) {
    console.log(item);  // 5, 10, 20
}
```

显然，for...in...适用于遍历对象。

### for...of...

```
const arr1 = [5, 10, 20];
for (const item of arr1) {
    console.log(item);  // 5, 10, 20
}
```

可以说是`for`循环的改进版本，不能用于遍历对象，中途可通过`break`中断遍历。
与下面的写法等效

```
const arr1 = [5, 10, 20];
for (const index of arr1.values()) {
    console.log(index);  // 5, 10, 20
}
```

如果只想获取索引，可以遍历`keys`

```
const arr1 = [5, 10, 20];
for (const index of arr1.keys()) {
    console.log(index);  // 0, 1, 2
}
```

如果想同时得到索引和值，可以遍历`entries`

```
const arr1 = [5, 10, 20];
for (const [index, value] of arr1.entries()) {
    console.log(index);  // 0, 1, 2
    console.log(value);  // 5, 10, 20
}
```

### forEach

数组的成员方法

```
const arr1 = [5, 10, 20];
arr1.forEach(function (value, index, arr) {
    console.log(`index = ${index}, value = ${value}`);
    console.log(this);
}, 100);
```

特点：

1. 可以拿到元素、索引、数组自身三个值。
2. 支持向回调函数传递参数`this`，前提是不要使用箭头函数作为回调。
3. 不支持中断。

### map

数组的成员方法

```
const arr1 = [10, 20, 30];
const tmp = arr1.map((value, index, arr) => {
    return value * 2;
});
console.log(arr1); // [10, 20, 30]
console.log(tmp); // [20, 40, 60]
```

特点：

1. 可以拿到元素、索引、数组自身三个值。
2. 得到一个新数组，不影响原数组。
3. 不支持中断。
4. 新数组与原数组长度一致。
5. 回调函数返回新元素。

`map`强调的是**处理每一个元素数据并得到一个新数组**。

### filter

```

```

特点：

1. 可以拿到元素、索引、数组自身三个值。
2. 得到一个新数组，不影响原数组。
3. 不支持中断。
4. 新数组与原数组长度可能不一致。
5. 回调函数返回`bool`类型决定是否将当前元素压入新数组。

`filter`强调的是**筛选出所有符合条件的数据并得到一个新数组**。

### some

```

```

### every

```

```

与`some`类似，不需要得到新数组，只是想知道**数组中的每个元素是否都满足条件**。

### find

```

```

### findIndex

```

```

与`find`类似，但是返回的是索引，没有任何元素符合条件则返回`-1`。

### reduce

```

```

从数组第一个元素开始，每次循环将数据的处理结果传递到下一次循环，直到处理完每个元素，最终得到一个值。

### reduceRight

```

```

和`reduce`一样，不过是从数组末尾开始处理。

### 总结

1. 遍历对象用`for...in...`。
2. 遍历数组用`for`、`for...of...`、`forEach`。
3. 期望对原数组加工处理并得到一个新数组用`map`。
4. 期望对原数组进行筛选并得到一个筛选后的新数组，用`filter`。
5. 找出数组中满足条件的第一个元素用`find`、`findIndex`。对标的是`filter`，不过仅仅返回一条数据。
6. 仅需要知道数组中是否有满足条件的元素，而不需要得到元素数据，用`some`、`every`。
7. 需要对数组中每条数据进行处理，并且每次的处理依赖上次的处理结果，用`reduce`、`reduceRight`。
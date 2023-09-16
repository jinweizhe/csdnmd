## 数组的api

```js
//其中:
//会改变原数组的api有:
push/pop/shift/unshift/splice/reverse/sort
//不会改变原始数组的api有
concat/filter/map/slice
```

数组，一组数据，不限类型，不限个数，可以重复。

    数组的长度：.length；
    
    数组的元素：[索引]；索引范围[0,length-1];



    API：application programming interface，应用程序编程接口
    
    接口：硬件上，通过接口可以将不同的部件连接在一起，例如usb接口，网卡接口，电源线接口...
    
    编程接口：编程语言自带的一系列的函数
    
    UI：user interface，用户界面；
    
    interface：接口，数据类型；
    
    接口文档：说明书。前后端通信的规则说明。



### 原数组

```
var num = [10, 12, 23, 45, 140, 12, 12];
```

 队列：两个口，一个称为队头，一个称为队尾。在队尾新增，在队头删除。先进先出。

栈：一个口，这个口称为栈顶，新增元素，从栈顶入栈一个元素，删除元素。从栈顶出栈一个元素。先进后出。

#### push向数组结尾新增元素

```
方法一：
var num = [10, 12, 23, 45, 140, 12, 12];
num[num.length] = 50;
console.log('num',num); //[10, 12, 23, 45, 140, 12, 12 , 50]
方法二：
	 第二种方法，push：入栈
        参数：新元素；
        返回值是新增元素后数组的长度
	var num = [10, 12, 23, 45, 140, 12, 12];
      var result = num.push(55, 60);
      console.log(result); //9
      console.log(num); // [10, 12, 23, 45, 140, 12, 12, 55, 60]
```
#### at()取数组总长度-1
```
      var num = [10, 12, 23, 45, 140, 12, 13];
      console.log("num.at(-1)", num.at(2)); //23
      console.log("num.at(-1)", num.at(1)); //12
      console.log("num.at(-1)", num.at(-1)); //13
      console.log("num.at(-1)", num.at(-2)); //12
```
#### pop()方法用于从数组末尾删除元素
```
pop()方法用于从数组末尾删除元素，它会更改数组的长度
 			num.pop();

      var num = [10, 12, 23, 45, 140, 12, 12];
      num.pop();
      console.log('num',num); //[10, 12, 23, 45, 140, 12]
```
#### unshift数组开头补元素
返回新数组的长度
```
var num = [10, 12, 23, 45, 140, 12, 12];
var result2 = num.unshift(-1, -2);
        console.log(result2); //9
```

#### shift删除数组开头的元素

######     shift：移除

######     无参数

######     返回值:被删除的元素，数组为空，调用shift方法，返回值为undefined，数组不会被修改。

```
var num = [10, 12, 23, 45, 140, 12, 12];
      var result3 = num.shift();
      console.log(result3); //10
```
#### fill填充数组
```
   let arr = [1, 2, 3, 4];
      // fill(value, start, end)填充数组
      // value: 填充的值。
      // start: 开始填充的位置。
      // end: 停止填充的位置(不包含结束的位置)

      //只有value,会把数组的每个元素填充成指定的参数
      // arr.fill(6)

      //填充的参数为7，从下标为2的位置开始填充到数组末尾。
      arr.fill(7, 2);

      //三个参数
      arr.fill(8, 2, 3);
      console.log(arr); //[1,2,8,7]
```
#### 数组去重
```
      let arr = [1, 2, 3, 4, 4, 6, 2, 1, 1, 4, 2];
      let set = new Set(arr);
      let arr1 = Array.from(set);
      console.log(arr1); //[1,2,3,4,6]
```
#### splice更新数组

	参数1：start，删除起始位置；
	
	参数2：deletecount，删除元素的数目，缺省时，从起始位置开始全部删除
	
	参数3：在起始位置插入新元素，可以有多个
	
	返回值：被删除元素构成的数组

```
 var num = [10, 12, 23, 45, 140, 12, 12];
      var result5 = num.splice(2, 3, 131314, 1221313);
      console.log(num); //[10, 12, 131314, 1221313, 12, 12]
      console.log(result5);//[23, 45, 140]
```

#### indexOf获取数据在数组中第一次出现时的索引

	index:索引
	
	参数1：待判断的数据；
	
	参数2：查找的起始位置，缺省时，从头开始找。
	
	返回值：数据在数组中第一次出现时的索引，找不到返回-1
	
	如果一个元素第一次出现的索引和最后一次出现的索引相同，说明元素在数组中只有一个。

```
 var num = [10, 12, 23, 45, 140, 12, 12];
      var index = num.indexOf(12, 5);
      console.log(index); //5

      var index1 = num.lastIndexOf(12, 6);
      console.log(index1);//6
```

#### includes判断数组中是否包含某个元素

 include：包含；

    参数1：待查找的元素
    
    参数2：查找的起始位置：缺省时，从头开始找。
    
    返回值：boolean类型，true包含，反之，false

```
  var num = [10, 12, 23, 45, 140, 12, 12];
      var result6 = num.includes(12);
      console.log(result6); //true
```

#### concat数组拼接

  参数：待拼接的数组

    返回值：拼接后形成的新数组，原数组num，没有变化。

```
      var num = [10, 12, 23, 45, 140, 12, 12];
      var result7 = num.concat([100, 200, 300]);
      console.log(result7); // [10, 12, 23, 45, 140, 12, 12, 100, 200, 300]
      console.log(num); // [10, 12, 23, 45, 140, 12, 12]
```

#### reverse数组倒序

 reverse:倒序；

    无参数；
    
    返回值：倒序后的数组，直接改变了原数组。

```
    var num = [10, 12, 23, 45, 140, 12, 12];
      var result7 = num.reverse();
      console.log(result7); // [12, 12, 140, 45, 23, 12, 10]
      console.log(num);  // [12, 12, 140, 45, 23, 12, 10]
      console.log(result7 === num); // true
```

#### join数组元素连接

 join：加入，连接。

    参数：separator，分隔符；缺省时，采用逗号分隔；
    
    返回值：连接后，形成的字符串。

```
      var num = [10, 12, 23, 45, 140, 12, 12];
      var result8 = num.join("-");
      console.log(result8); // "10-12-23-45-140-12-12"
```

#### flat数组平铺(数组嵌套)

    flat：平的；
    
    参数，平铺的深度，缺省时，为1；
    
    返回值：平铺后形成的新数组，原数组不变
    
    原理：将嵌套的数组平铺到上一层数组中。

```
     var arr = [1,2,3,4,[10, 20, 30, 40, [100, 200, 300, 400, [1000, 2000, 3000, 4000]]]];
      var result9 = arr.flat(2);
      console.log(result9); // [1, 2, 3, 4, 10, 20, 30, 40, 100, 200, 300, 400, [1000, 2000, 3000, 4000]]
      console.log(arr); //  [1, 2, 3, 4,  [10, 20, 30, 40, [100, 200, 300, 400, [1000, 2000, 3000, 4000]]]]
```
## slice切片
 获取子数组
        slice:切割，切片；
        参数1：起始位置
        参数2：结束位置；缺省时一直到数组的结尾。包含起始位置，不包含结束位置[起始位置，结束位置）
        返回值：子数组。
```
     var nums = [1, 2, 56456, 78, 33, 2, 656, 8];
      var subNums = nums.slice(1, 4);
      console.log(subNums); // [2, 56456, 78]
```
> 要操作的数组  let arr = [1, 2, 3, 4];

### each 

> 类似数组的forEach
```js
    $.each(arr, function (index, value) {
            console.log(index, value);
        })
```
### extend

> 对象扩展(对象的浅拷贝,类似object.extend)
> 返回的是两个对象的引用
```js
let res1 = $.extend({ name: "zhangsan" }, { age: 23, height: 180 });
console.log(res1);
```
### grep
> 数组过滤:类似于数组的filter方法

```js
let res2 = $.grep(arr, function (value, index) {
            console.log(value, index);
            return index % 2;
        })
        console.log(res2);//返回下标为偶数
```
### makeArray

> 将类数组对象转化为数组对象,类似array.from

```js
    let res3=$.makeArray($("*"));
        console.log($("*"));
        console.log(res3);
```
### toArray

> 将jQuery对象转化为数组对象

```js
 let res4=$("*").toArray();
        console.log(res4);
```
### map

> 数组映射;类似数组的map方法

```js
 let res5=$.map(arr,function(element,index){
            console.log(element,index);
            return element*100;
        })
        console.log(res5);
```
### inArray

> 类似于数组的indexof
>    返回第一个元素的下标,没找到返回-1
>    参数一:指定查找的元素
>    参数二:查找的目标数组
```js
let res6=$.inArray(3,arr);
        console.log(res6);
```
### merge
> 数组合并,类似数组的concat
>    多个数组继续在后面拼

```js
let res7=$.merge(arr,[100,200,300])
       console.log(res7);
```
### unique

> 去除数组中连续重复的元素

```js
 let res8=$.unique([1,1,1,2,2,55,55,8,3,2,1])
       console.log(res8);
```
### trim

>  去除字符转开头和结尾的空白符

```js
 let res9=$.trim("   hello     ")
       console.log(res9);
```
### param

> 将对象转换成key=value&key=value形式

```js
let obj={
        name:"张三",
        age:20
       }
       let res10=$.param(obj);
       console.log(res10);
```
> 解构赋值：可以快速的从对象中获取指定属性，赋值给变量
### 对象的解构赋值
> 定义个对象

```js
		let obj = {
           name: "萧寂",
            age: 21,
            weight: 65,
            height: 177,
            phone: "19544562924"
        } 

   	    let age = obj.age;
        let height = obj.weight;
        console.log(age, height);
```
```js
        //解构赋值，在{}里的定义的变量会去后面对象找同名属性，赋值给这些变量，找不到同名属性时，变量的值就是初始值undefined
        let { age, weight, phone1 } = obj
        console.log(age, weight, phone1);
```
```js
        //name===>>nickname
        //定义变量nickname , aweight;
        // name:nickname 从obj中获取name属性赋值给nickname
        // weight:aweight 从obj中获取weight属性赋值给aweight
        let { name: nickname, weight: aweight } = obj;
        console.log(nickname, aweight);

```
```js
     	//定义变量aName,sex,phone
        // name : aName 从obj中获取name属性赋值给aName;
        // sex="男" , phone="1111111111"从obj对象中获取sex的赋值给sex,直给phone，如果找不到对应的属性值, sex, phone的值，就是设置的默认值
        let { name: aName, sex = "男", phone2 = "1111111111" } = obj; console.log(aName, sex, phone2);
```
### 数组的解构赋值

> 先定义数组
```js
        let arr=[10,11,12,13,14,15,16]
```

```js
 	    //定义变量x,y,z;将数组的0号元素赋值给x，1号元素赋值给y,2号元素赋值给z，按照索引对应关系赋值
        let [x,y,z]=arr
        console.log(x,y,z);
```
```js
		 //定义变量abc,将数组的0号元素赋值给a，3号元素赋值给b，5号元素赋值给c
        let {0:a,3:b,5:c}=arr
        console.log(a,b,c);
```
```js
 		//...表示剩余的，只能在最后面
        //0号元素赋值e，1号元素赋值f，剩余所有的赋值s，s是一个数组。
        let [e,f,...s]=arr
        console.log(e,f,s);
```
### 函数的解构赋值

>    函数的参数，可设置默认值。调用函数时，传递了实参，就采用实参，没传递，就采用默认值
>      通常，会将设置默认值的参数放在参数列表的结尾。

```js
 function add(x,y=100){
            console.log(x,y);
        }
        add(50)//打印50，100   未传递俩参数，则y使用默认值100，有默认值的参数一般放到最后。
        add(40,200)//打印40，200  两个参数都有传递，则使用传进来的参数值
```

>   剩余参数(...):调用函数时，将第一个实参赋值给x，第二个实现赋值给y，剩下的所有实参形成一个数组，赋值
>        rest。 rest:剩余。
>        剩余的参数必须是参数列表的最后一个参数。


```js
     function fn(x,y,...rest){//...代表剩余所有实参形成的数组，如果没有，则打印空数组
            console.log(x,y);
            console.log(rest);
        }
        fn(1,2) //x,y打印1，2，rest打印空数组
        fn(1,2,3,4)//x,y打印1，2，rest打印3，4
```

> 函数的参数解构赋值
> 从obj对象中找到name属性，赋值给name变量，找到phone属性的值，赋值给phone变量，如果没找到，就采用默认值。

 ```js
      //函数的参数，支持解构赋值
        //传统调用写法
        function fn2(obj){
            console.log(obj.name,obj.age);
        }
        fn2({name:"萧寂",age:40,sex:"男"})

        //解构赋值写法，
        //从实参对象中，找到同名的属性name，赋值给变量name，找到同名age属性，赋值给变量age。
        // 相当于 var {name,sex}=obj
		//可以在里面设置默认值，当找不到对应参数时，就会去打印默认值，例如下面的phone
        function fn3({name,sex,phone="12345678900"}){
            console.log(name,sex,phone);
        }
        fn3({name:"萧寂",age:40,sex:"男"})
 ```
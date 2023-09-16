## Math类方法
### math类没有实例方法，只有类方法
#### floor向下取整
```
//floor:地板砖
        //向下取整：<=数字的最大整数
        var result = Math.floor(4.7);
        console.log(result);
```
#### ceil向上取整
```
 //向上取整>=数字的最小整数
        var result = Math.ceil(4.7);
        console.log(result);
```
#### round：四舍五入的取整
```
       var result = Math.round(4.6);
        console.log(result);
```
#### abs:absolute,绝对值
```
        var result = Math.abs(-4.5);
        console.log(result);
```
#### pow：次方运算(幂运算)
```
//参数一：底数，参数二：几次方
        var result = Math.pow(2, 3)
        console.log(result);
```
#### sqrt：平方根
```
square:平方root:根
        var result = Math.sqrt(4);
        console.log(result);
```
#### cbrt:立方根
```
var result = Math.cbrt(27);
        console.log(result);
```
#### log2:对数运算
```
以2为底，8的对数。
        var result = Math.log2(8);
        console.log(result);
```
#### log10:对数运算
```
以10为底，1000的对数。
        var result = Math.log10(1000);
        console.log(result)；
```
#### 欧拉常数;2.718....
```
 var E = Math.E;
        console.log(E);
```
#### 对数运算;以E为底，10的对数。
```
    var result = Math.log(10);
        console.log(result);
```
#### PI:圆周率 Π：3.1415926
```
 var PI = Math.PI;
        console.log(PI);
```
### 三角函数
#### sin:正弦,三角形的一个角的对边除以斜边，就是正弦值
#### 参数 是 弧度制。360度转化为弧度为2Π。
```
 var result = Math.sin(Math.PI / 6);
        console.log(result);
```
#### cos:余弦：三角形的一个角的临边除以斜边，就是余弦值
#### 参数 是 弧度制。360度转化为弧度为2Π。
```
var result = Math.cos(Math.PI / 6);
        console.log(result);
```
#### tan:正切
```
var result = Math.tan(Math.PI / 4);
        console.log(result);
```
#### Max找最大值
```
var result = Math.max(1, 2, 4, 213, 34, 45);
        console.log(result);

//第二种情况
  var arr = [1, 2, 4, 13, 24, 45, 68];
        var result = Math.max(...arr);
        console.log(result);
```
#### Min找最小值
```
var result = Math.min(1, 2, 4, 213, 34, 45);
        console.log(result);
```
#### random: 随机数
```
	    //产生一个0~1范围的随机数
        var result = Math.random();
        console.log(result);
        //0-100
        var result = Math.random() * 100;
        console.log(result);

        // -20~50    (0~70)-20
        var result = Math.random() * 70 - 20;
        console.log(result)
```
### 验证码
```
 function createVerificationCode() {
            var code = "";
            var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', "b", "c", "d", "e", "f", 'g', 'h', 'i', 'j',
                'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                'u', 'v', 'w', 'x', 'y', 'z',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                'U', 'V', 'W', 'X', 'Y', 'Z'];
            for (var i = 0; i < 4; i++) {
                var result = parseInt(Math.random() * arr.length);
                code += arr[result];
            }
            return code;
        }
        console.log(createVerificationCode());
```
## number类的实例方法
#### toFixed保留几位小数
> 保留几位小数;返回值是数字字符串。
>    装箱：将基本类型转化为对应的对象类型；这里将基本类型的number的变量num转化为number类的对象。

```
 var num = 10.34534567;
        var result = num.toFixed(3);
        console.log(result);
```
### isArray:Array类的类方法
```
	    //1)判断参数是否是数组类型：返回值是boolean类型
        var result = Array.isArray(num);
        console.log(result);//false
        //2)判断参数是否是数组类型：返回值是boolean类型
        console.log(num instanceof Array); //false
        //3)判断原型上的constructor取值是否是Array
        console.log(num.__proto__.constructor == Array);//false
```
#### from:将类数组对象转化为数组对象。

>参数：类数组对象
>  返回值：生成的数组对象。
```
 function fn() {
            console.log(arguments);
            console.log(arguments instanceof Array);
            var result = Array.from(arguments);
            console.log(result);
        }
        fn(10, 20, 30);
```
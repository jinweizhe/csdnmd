# js代码输出题（全）
[点击进入打印输出各种三角形集合](https://blog.csdn.net/m0_61843874/article/details/121564102)
---------
```
var a = (10 * 3 - 4 / 2 + 1) % 2,
    b = 3;
b %= a + 3;
console.log(a++);
console.log(--b);

请问分别输出什么？
1  2
```
## var a = 123; var b = 234;编写代码，实现交换a和b的值。
```
var a = 123;
var b = 234;
var temp = a;
a = b;
b = temp;
console.log(a, b)
```
```
var num = 10;
console.log(num++ + ++num);

请问输出什么？
22
```
```
var g =  1 && 2 || 3;

var h = 1 || 2 && 3;

var i = 0 || 2 && 3;

console.log(g);
console.log(h);
console.log(i);

请问输出什么？
213
```
1、用户输入数字num；

1)弹出该数字能否被7整除

2)弹出该数字是否判断能否被5和6整除
```
var num = prompt("请输入数字");
        num = parseInt(num)
        if (num % 7 == 0) {
            alert("可以被7整除");
        } else {
            alert("不能被7整除")
        }
        if (num % 5 == 0 && num % 6 == 0) {
            alert("能被56整除")
        } else if (num % 5 == 0) {
            alert("可以被5整除,不能被6整除");
        } else if (num % 6 == 0) {
            alert("可以被6整除");
        } else {
            alert("不能被56整除")
        }
```
 用户输入三个数字a,b,c; 控制台输出最大的那个。
 ```
   var a = prompt("输入a");
        var b = prompt("输入b");
        var c = prompt("输入c");
        if (a > b && a > c) {
            alert("最大的是a")
        } else if (b > a && b > c) {
            alert("最大的是b")
        } else {
            alert("最大的是c")
        }
 ```
用户输入星期几，弹出 对应的英文。例如，输入 星期一，弹出 Monday。
```
 var de = prompt("请输入周几");
        switch (de) {
            case "1":
                alert("Monday");
                break;
            case "2":
                alert("Tuesday");
                break;
            case "3":
                alert("Wednesday");
                break;
            case "4":
                alert("Thursday");
                break;
            case "5":
                alert("Friday");
                break;
            case "6":
                alert("Saturday");
                break;
            case "7":
                alert("Sunday");
                break;
        }
```
用户输入年龄，判断输入的年龄是否合法。非数字或者小于0或者大于130不合法。弹出结果。
```
  var nl = prompt("请输入年龄") * 1;
        if (nl > 0 && nl < 130) {
            alert("你的年龄为" + nl);
        } else if (nl == NaN || nl < 0 || nl > 130) {
            alert("您的年龄不合法");
        } else {
            alert("您输入的类型有误");
        }
```
我家的狗5岁了，5岁的狗相当于多大年龄的人呢？其实非常简单，狗的前两年每一年相当于人类的10.5岁，然后每增加一年就增加四岁。那么5岁的狗相等于人类的年龄就应该是10.5+10.5+4+4+4 = 33岁

编写一个程序，获取用户输入的狗的年龄，然后通过程序显示其相当于人类的年龄。如果用户输入负数，请显示一个提示信息。
```
 var dog = prompt("请输入狗的年龄") * 1;
        if (dog <= 2 && dog > 0) {
            alert("人类的年龄为" + dog * 10.5)
        } else if (dog > 2 && dog > 0) {
            alert("人类的年龄为" + (2 * 10.5 + (dog - 2) * 4))
        } else if (dog < 0) {
            alert("您输入的年龄为负值")
        } else {
            alert("您输入的类型有误")
        }
```
从键盘输入小明的期末成绩:当成绩为100时，‘奖励一辆BMW’；当成绩为[80-99]时，‘奖励一台iphone’；当成绩为[60-79]时，‘奖励一本参考书’；其他时，什么奖励也没有。
```
avar cj = prompt("请输入小明的成绩") * 1;
        if (cj == 100) {
            alert("奖励一辆BMW")
        } else if (cj >= 80 && cj <= 99) {
            alert("奖励一台iphone")
        } else if (cj >= 60 && cj <= 79) {
            alert("奖励一本参考书")
        } else {
            alert("奖励皮带炒肉丝")
        }
```
 用户输入月份，弹出该月份所属的季节。
 3,4,5 春季 6,7,8 夏季 9,10,11 秋季 12, 1, 2 冬季。
 ```
   var yf = prompt("请输入月份") * 1;
        switch (yf) {
            case 3:
            case 4:
            case 5:
                alert("春天");
                break;
            case 6:
            case 7:
            case 8:
                alert("夏天");
                break;
            case 9:
            case 10:
            case 11:
                alert("秋天");
                break;
            case 12:
            case 1:
            case 2:
                alert("冬天");
                break;
        }
 ```
用户输入24小时制时间， 输出 上午（下午）12小时制时间。 例如 输入 23,输出 下午11点。；输入7，输出 上午7点。
```
    var sj = prompt("请输入时间") * 1;
        switch (sj) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                alert("上午" + sj + "点");
                break;
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                alert("下午" + (sj - 12) + "点");
                break;
            case 24:
                alert("凌晨0点");
                break;

        }
```
 标准体重=身高-110，超过标准体重5kg为过胖，低于5kg为过瘦，输入某人的身高和体重，判断标准，过胖，过瘦。
 ```
      var sg = prompt("输入你的身高") * 1;
        var tz = sg - 110;
        if (tz > 5) {
            alert("过胖");
        } else if (tz < 5) {
            alert("过瘦");
        } else {
            alert("标准")
        }
 ```
用户输入年份，输出这一年的总天数。
```
        var year = prompt("请输入年份");
        if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
            alert("闰年。366天");
        } else {
            alert("平年。365天");
        }
```
用户输入年份，月份，日子；输出这一天是这一年的第几天。
```
 var year = prompt("请输入年份") * 1;
        var yf = prompt("请输入月份") * 1;
        var ri = prompt("请输入日子") * 1;
        switch (yf) {
            case 1:
                alert(year + "年" + yf + "月" + ri + "日," + "本年的" + ri + "天")
                break;
            case 2:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0 && ri <= 29) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + ri) + "天")
                }
                break;
            case 3:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + ri) + "天")
                } else {

                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 28 + ri) + "天")
                }
                break;
            case 4:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 28 + 31 + ri) + "天")
                }
                break;
            case 5:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + ri) + "天")
                }
                break;
            case 6:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + ri) + "天")
                }
                break;
            case 7:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + ri) + "天")
                }
                break;
            case 8:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + ri) + "天")
                }
                break;
            case 9:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + ri) + "天")
                }
                break;
            case 10:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + ri) + "天")
                }
                break;
            case 11:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + ri) + "天")
                }
                break;
            case 12:
                if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + ri) + "天")
                } else {
                    alert(year + "年" + yf + "月" + ri + "日," + "本年的" + (31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + ri) + "天")
                }
                break;
        }
```
1、题目:
当成绩在90~100之间的时候,在控制台输出一个A当成绩在80 ~89之间的时候,在控制台输出一个 B当成绩在70~79之间的时候,在控制台输出一个C当成绩在60~69之间的时候,在控制台输出一个D当成绩<60的时候,在控制台输出一个E
让用户输入一个整数成绩，然后在控制台输出对用的字符。5分

```
        var a = prompt("请输入成绩");
        if (a >= 90 && a <= 100) {
            console.log("A")
        } else if (a >= 80 && a <= 89) {
            console.log("B")

        } else if (a >= 70 && a <= 79) {
            console.log("C")

        } else if (a >= 60 && a <= 69) {
            console.log("D")

        } else {
            console.log("E")

        }

```
2.提示用户输入年龄，如果大于等于18，则告知用户可以查看，如果小于10岁，则告知用户不允许查看，如果大于等于10岁并且小于18，则提示用户是否继续查看（yes，no）如果输入的是yes则提示用户请查看，否则提示“退出，你放弃查看”。
```
       var b = prompt("请输入年龄") * 1;
        if (b >= 18) {
            alert("可以查看");
        } else if (b >= 10 && b < 18) {
            var c = prompt("是否继续查看");
            if (c == "yes") {
                alert("请查看")
            }
            if (c == "no") {
                alert("退出，你放弃查看");
            }
        } else {
            alert("不允许查看");
        }
```
3.定义函数，实现任意字符串的倒序，例如hello，返回olleh。
```
  function daoxu(a) {
            var str = '';
            for (var i = a.length-1; i >= 0; i--) {
                str += a[i];
            }
            return str;
        }
        var c = prompt("请输入字符串");
        console.log(daoxu(c));

        --第二种倒序输出
        function reverse(str) {
            //累加
            var sum = "";
            for (var i = 0, len = str.length; i < len; i++) {
                console.log(str[i]);
                sum = str[i] + sum;//注意,正序遍历字符串时
            }
            console.log(sum); I
        }
        reverse(" hello");
```
4、一球从一百米的高度自由落下，每次落地后反跳回原高度的一半；再落下，求它第十次落地后，共经过多少米。
```
  var sum = 100;
        var height = 100;
        for (var i = 1; i <= 9; i++) {
            sum += height;
            height = height / 2;

            //第二种算法
            // height = height / 2;
            // sum += height * 2;
        }
        console.log(sum);
```
  5、有一个分数列2/1，3/2，5/3，8/5，13/8，21/13......,求前二十项的和。
  ```
   function add() {
            var sum = 0, fz = 2, fm = 1;
            var num = 0;
            for (var i = 0; i < 20; i++) {
                sum += fz / fm;
                num = fz;
                fz = fz + fm;
                fm = num;
            }
            console.log(sum);
        }
        add();
  ```
 打印如下等腰三角形
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/91515aa66015413aa3b51bccba62ad2b.png)
 ```
   var str = '';
        for (var i = 0; i < 5; i++) {
            for (var z = 0; z < 5 - i; z++) {
                str += ' ';
            }
            for (var j = 0; j < 2 * i + 1; j++) {
                str += '*';
            }
            str += '\n';
        }
        console.log(str);
 ```
定义函数，实现对任意整数的千分位。
例如，输入1234567890返回1，234，567，890
```
function qfw(num) {
            //将数字转换为字符串
            var numsrt = num + "";
            //定义变量记录拼接结果。
            var sum = "";
            //定义变量记录拼接数字的数目
            var count = 0;
            //遍历字符串，倒着遍历。
            for (var i = numsrt.length - 1; i >= 0; i--) {
                console.log(numsrt[i]);
                //拼接数字
                sum = numsrt[i] + sum;
                //数字的数目加一
                count++;
                //三位添加一个逗号
                if (count % 3 == 0 && i > 0) {
                    //三位数字添加一个逗号
                    sum = "," + sum;
                }
            } console.log(sum);
        }
        qfw(1234567890)
```
   定义函数，统计任意字符串子串的数目。
   例如，输入world返回16.因为world的子串有
   ![在这里插入图片描述](https://img-blog.csdnimg.cn/9134db61c37a42c7a271c8b601c215a7.png)
   ```
       function sub(str) {
            //定义变量，记录子串的数目：初值为0；
            var count = 0;
            //i表示行号
            for (var i = 1; i <= str.length; i++) {
                count += i;
            }
            //把空串加上
            count++;
            return count;
        }
        console.log(sub("world"));
   ```
 打印一个乘法口诀表
 ```
   for (var j = 1; j <= 9; j++) {
            //i表示乘法口诀表的列,也就是这一行的第几个算式.
            var sum = " ";
            for (i = 1; i <= j; i++) {
                sum += i + "X" + j + "=" + i * j + "\t";
            }
            console.log(sum);
        }
 ```
1、定义函数，判断任意数字是否是完数，并返回结果。一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如 6 = 1+ 2+3 ，6是完数。

```
 function wanshu(n) {
            var sum = 0;
            for (var i = 1; i < n; i++) {
                if (n % i == 0) {
                    sum += i;
                }
            }
            if (sum == n) {
                alert("该数字为完数");
            } else {
                alert("该数字不是完数");
            }

        }
        var m = prompt("输入完数") * 1;
        wanshu(m);
```



2、定义函数，判断任意字符串是否是回文。

```
 function huiwen(n) {
            if (typeof n != "string") {
                return false;
            }
            var changdu = parseInt((n.length + 1) / 2);
            for (var i = 0; i < changdu; i++) {
                if (n[i] !== n[n.length - 1 - i]) {
                    return false;
                }
            }
            return true;
        }
        var m = prompt("请输入一个字符串");
        var i = huiwen(m);
        console.log(i);

```



3、定义函数，传入一个字符串，一个字符，判断该字符串中是否包含该字符，返回boolean值。

```
 function zifu(a, b) {
            if (a.includes(b)) {
                return true;
            } else {
                return false;
            }
        }
        var az = prompt("请输入一个字符串");
        var ax = prompt("请输入字符");
        var x = zifu(az, ax);
        console.log(x);

```



4、定义函数，传入一个字符串，一个+字符，返回该字符在字符串中出现的次数。

```
  function cishu(xj, jwz) {
            return xj.split(jwz).length - 1;
        }
        var a=prompt("请输入一个字符串");
        var b=prompt("请输入包含的字符")
        var c=cishu(a,b)
        console.log(c);
```



5、定义函数，传入一个数组，一个数据，返回该数据在数组中第一次出现的索引。

```
function cishu(xj, jwz) {
            return xj.indexOf(jwz);
        }
        var a = prompt("请输入一个字符串");
        var b = prompt("请输入包含的字符");
        var c = cishu(a, b)
        console.log(c);
```



6、定义函数，传入一个数字数组，返回该数组中的最大值。

```
function max(arr) {
            var max = arr[0];
            for (var i = 0; i < arr.length; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
            }
            return max;
        }
        var arr = [3, 5, 20, 34, 21, 90];
        alert(max(arr));
```



7、定义函数，传入一个数字数组，返回该数组中的最大值的索引。

```
function max(arr) {
            var max = arr[0];
            var maxindex = 0;
            for (var i = 0; i < arr.length; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                    maxindex = i;
                }
            }
            alert("最大值的索引为" + maxindex);
            return max;

        }
        var arr = [3, 5, 20, 34, 21, 20];
        alert(max(arr));
```



8、定义函数，求任意两个数的最小公倍数，并返回结果。

```
 function gys(a, b) {
            var c = a * b;
            for (var i = 1; i <= c; i++) {
                if (i % a == 0 && i % b == 0) {
                    return i;
                }
            }
        }
        var a = prompt("请输入第一个数字");
        var b = prompt("请输入第二个数字")
        var c = gys(a, b)
        console.log(c);
```
输出0 - 100内所有的偶数，倒序输出
```
   for (var i = 0; i < 50; i++) {
            document.write(100 - (2 * i))
           document.write("<br>")
        }


   for (var i = 100; i >= 0; i -= 2) {
            console.log(i)
        }


     for (var i = 50; i >= 0; i--) {
            console.log(2 * i);
        }
```
输出[0,100]内能被三整除的数字
```
   for (i = 0; i < 100; i++) {
            if (i % 3 == 0) {
                console.log(i);
            }
        }


    for (i = 0; i < 100; i += 3) {
            console.log(i)
        }
```
计算[1,100]内所有整数的和，累加。
```
  sum：summary，总结、和
        初始值，sum=0；

        var sum = 0;
        for (var i = 1; i <= 100; i++) {
            sum += i;
        }
        console.log(sum);

```
计算10！
```
    10！=1*2*3*4*5*6*7*8*9*10

        var ride = 1;
        for (i = 1; i <= 10; i++) {
            ride *= i;
        }
        console.log(ride);
```
计算[0，100]内能被3整除的所有数字的平均值
```
 var sum = 0;
        var num = 0;
        for (i = 0; i < 100; i++) {
            if (i % 3 == 0) {
                sum += i;
                num++;
            }
        }
        console.log(sum);
        console.log(num);
        console.log(sum / num);
```
让用户输入一个整数num，判断是否为偶数；
        如果是偶数，弹窗显示num为偶数
        否则，弹框显示num为奇数
 ```
   var num = prompt("请输入一个整数");
        console.log(num);
        if (num % 2 == 0) {
            alert(num + "是偶数");
        } else {
            alert(num + "是奇数");
        }
 ````
输入账号密码并判断是否正确或者错误
```
 var zh = prompt("请输入账号")
        var mm = prompt("请输入密码")
        if (zh == "root" && mm == "111111") {
            alert("登陆成功")
        } else {
            if (zh != "root") {
                alert("查无此账号")
            } else if (mm != "111111") {
                alert("密码错误")
            }
            alert("登录失败")
        }
```
  输出乘法口诀表的第五行
```
        for (i = 1; i <= 5; i++) {
            console.log(i + "*5=" + i * 5);
        }
```
定义变量,记录拼接的算式;初始值是""
```
       var sum = " ";
        for (i = 1; i <= 5; i++) {
            sum += i + "*5=" + i * 5 + " ";
        }
        console.log(sum);

        var sum = " ";
        for (i = 1; i <= 6; i++) {
            sum += i + "*6=" + i * 6 + " ";
        }
        console.log(sum);
```
对于数组 var ages=[20,21,19,22,24,23,20,21,22,24,19];
 编写代码，实现如下功能：
 ```
 1）计算年龄的平均值；
var ages = [26, 21, 19, 22, 24, 23, 20, 21, 22, 24, 19];
		var sum = 0;
for (var i = 0; i < ages.length; i++) {
		sum += ages[i];
 }
		console.log(sum / ages.length);
2）判断是否有学生年龄为22岁？有，输出 true，否则，输出false。
 for (var i = 0; i < ages.length; i++) {
     if (ages[i] == 22) {
         console.log('true')
         break
     }
 } if (ages[i] != 22) {
     console.log('false')
 }
 3）找到18岁这个年龄在数组中第一次出现索引。有，输出 索引，否则，输出 -1 ；
  var age1 = 18;
 for (var i = 0; i < ages.length; i++) {
     if (ages[i] == age1) {
         console.log(i)
         break
     }
 }
 if (ages[i] != age1) {
     console.log(-1)
 }
 4）判断是否每个学生都大于20岁？是，输出true，否则，输出false。
  var ages = [26, 21, 19, 22, 24, 23, 20, 21, 22, 24, 19];
 var sum = 0;
 for (var i = 0; i < ages.length; i++) {
     if (ages[i] > 20) {
         sum++
     } else {
 break
     }
 }
 if (sum == ages.length * 1) {
     console.log(true);
 } else {
     console.log(false);
 }
 5）找到最大的年龄，输出；
 var ages = [26, 21, 19, 22, 24, 23, 20, 21, 22, 24, 19];
 var max = ages[0];
 for (var i = 0; i < ages.length; i++) {
     if (ages[i] > max) {
         max = ages[i]
     }
 }
 console.log(max);

6）找到最大的年龄的索引，输出；
   var max=0;
   for (var i = 0; i < ages.length; i++) {
            if (ages[i] > ages[max]) {
                max = i;
            }
        }
        console.log(max);
 ```
 2、 对于字符串， var str="hello,my name is zhangSan";
 ```
 1)统计字符串中n这个字符出现的次数；输出次数。

        var str = "hello,my name is zhangSan";
var a = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] == 'n') {
        a++
    }
}
console.log(a)

 2)判断这个字符串是否是回文？回文：正序和倒序相同。例如： "ohho"。
   var str = "ohho";
        var str1 = '';
        for (var i = 0; i < str.length; i++) {
            str1 = str[i] + str1
        }
        if (str1 == str) {
            console.log('正序和倒序相同，是回文');
        } else {
            '正序和倒序不相同，不是回文'
        }



//第二种方法
        var str = 'asvfsa';
        for (var i = 0, len = str.length; i < len / 2; i++) {
            if (str[i] != str[len - 1 - i]) {
                console.log("不是回文");
                break;
            }
        }
        if (i == (len % 2 == 0 ? len / 2 : parseInt(len / 2) + 1)) {
            console.log("是回文");
        }
 ```
 3、 输出[0,1000]范围内所有的质数。
 ```

for (var i = 0; i <= 1000; i++) {
    for (var j = 2; j < i; j++) {
        //            如果j能被i整出在跳出循环
        if (i % j == 0)
            break;
    }
    //        判断循环是否提前跳出，如果j<i说明在2~j之间,i有可整出的数
    if (j == i) {
        console.log(i);
    }

}
 ```
 4、用户输入两个数字，输出这两个数字的最大公约数。
 ```
        var num1 = parseInt(prompt('请输入第一个数'));
        var num2 = parseInt(prompt('请输入第二个数'));
        //能被这两个数字整除约数必然在[1,min(num1,num2)]内；
       //用三元运算符从最小整数往下找
        for (var i = num1 > num2 ? num2 : num1; i >= 1; i--) {
            if (num1 % i == 0 && num2 % i == 0) {
                console.log(i);
                break;
            }
        }
 ```
 5、用户输入两个数字，输出这两个数字的最小公倍数。
 ```
      var num1 = parseInt(prompt('请输入第一个数'));
        var num2 = parseInt(prompt('请输入第二个数'));
        //找到两个数字最大的这个
        var max = num1 > num2 ? num1 : num2;
        for (var i = max; ; i+=max) {
            if(i%num1==0&&i%num2==0){
                console.log(i);
                break;
            }
        }

 ```
 6、有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？
 ```
 //a代表百位数，[1,4];
 //b代表十位数，[1,4];
 //c代表个位数，[1,4];
 //三层for循环，可以穷举出所有的组合数字，然后根据条件，互不相同且无重复数字筛选，满足条件的，累加求和
   var count=0;
        for (var a = 1; a <=4; a++) {
            for (var b = 1; b <=4; b++) {
                for (var c = 1; c <=4; c++) {
                    if (a != b && b != c && a != c) {
                        console.log(a * 100 + b * 10 + c);
                        count++;
                    }
                }
            }
        }
        console.log(count);
 ```
##  1、定义一个对象view，包含如下属性：
list:数组，包含4个商品对象；每个商品有如下属性，
id，name,price；
getAverage:方法，计算所有商品的平均价格，将平均值
返回；
getIndex:方法，获取价格最高的商品的索引，返回索引。
show:方法，将list数组中的商品展示在页面上。
（ul>li）
```
var view = {
    list: [
        {
            name: "棉袄",
            id: 1,
            price: 50
        },
        {
            name: "棉裤",
            id: 1,
            price: 20
        },
        {
            name: "毛衣",
            id: 1,
            price: 30
        },
        {
            name: "大衣",
            id: 1,
            price: 90
        }
    ],
    getAverage() {
        var num = 0;
        for (var i = 0; i < this.list.length; i++) {
            num += this.list[i].price;
        }
        return num / this.list.length;
    },
    getindex() {
        //最大值的索引
        var index = 0;
        for (var i = 0; i < this.list.length; i++) {

            if (this.list[i].price > this.list[index].price) {
                //修改最大值索引
                index = i;
            }
        }
        return index;
    },
    show() {
        var html = "<ul>";
        for (var i = 0; i < this.list.length; i++) {
            html += `
        <li>${this.list[i].name}</li>
        <li>${this.list[i].id}</li>
        <li>${this.list[i].price}</li>`
        }
        html += '</ul>';
        return html;
    }
}
console.log(view.getAverage());
console.log(view.getindex());
document.write(view.show());
```
## 3、定义一个函数，实现数字数组去重。参数：数组；返
## 回值：去重后的数组。怎么找到重复的？怎么删掉？
```
//第一种方法
var arr = [2, 8, 5, 0, 5, 2, 6, 7, 2];
function unique1() {
    var hash = [];
    for (var i = 0; i < arr.length; i++) {
    //第一种判断方法
        if (hash.indexOf(arr[i]) == -1) {
            hash.push(arr[i]);
        }

	 //第二种判断方法
        // if(!hash.includes(arr[i])){
        //     hash.push(arr[i]);
        // }
    }
    return hash;
}
console.log(unique1());



//第二种
function noRepeatArr(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
            //重复﹔删除
            arr.splice(i, 1);
            // 删除一个元素，后续元素索引都会减1 ;避免跳过接下来的一个元素；i--;
            i--;
            //len是数组初始的长度，删除一个元素，len需要减一,主要目的为了减少循环次数。
            len--;
        }
        console.log("----------------------------");
    }
    return arr;
}
console.log(noRepeatArr([1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7]));



//第三种写法，不用数组api
function no(arr) {
    for (var i = 0; i < arr.length; i++) {
        //比较arr[i]与其后的每一个元素
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                //重复；
                arr.splice(j, 1);
                //索引-1
                j--;
            }
        }
    }
    return arr;
}
console.log(no([1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7]));
```
定义一个函数，实现数字数组排序。参数：数组；返
回值：排序后的数组。(冒泡排序)
```
//冒泡排序
//升序
//冒泡排序：遍历数组，比较相邻的两个元素，如果左侧比右侧大，就交换位置，循环结束，最大的就在右侧
var arrs = [14, 40, 3, 41, 5, 16, 7, 38, 9, 10];
function paixu() {
    for (var i = 0; i < arrs.length - 1; i++) {
        for (var j = 0; j < arrs.length - i - 1; j++) {
            if (arrs[j] > arrs[j + 1]) {
                var num = arrs[j + 1];
                arrs[j + 1] = arrs[j];
                arrs[j] = num;
            }
        }
    }
    return arrs;
}
console.log(paixu());

```
##  字符串api的题
现在有一个数组，数组中存放的是班级中所有学生的信息，每个学生包含如下信息：学号、姓名、性别、年龄、身高、体重。 id\name\ses\age\height\weight

现对该数组进行如下操作： 

1）统计该班级姓 李 的学生有多少位。

2）统计该班级 名字中包含 文 的学生有多少位。
```
  var arr = [
            {
                id: 1,
                name: "张李",
                sex: true,
                age: 18,
                height: 176,
                weight: 140
            },
            {
                id: 1,
                name: "李四",
                sex: true,
                age: 18,
                height: 176,
                weight: 140
            },
            {
                id: 1,
                name: "李文",
                sex: true,
                age: 18,
                height: 176,
                weight: 140
            },
            {
                id: 1,
                name: "王文",
                sex: true,
                age: 18,
                height: 176,
                weight: 140
            },
            {
                id: 1,
                name: "文伟",
                sex: true,
                age: 18,
                height: 176,
                weight: 140
            }
        ]
        第一个
        var num = 0;
        arr.forEach(function (value, index, array) {
            if (value.name.charAt(0).includes("李")) {
                num++;
            }
        })
        console.log(num);

        第二个
        var num = 0;
        arr.forEach(function (value, index, array) {
            if (value.name.includes("文")) {
                num++;
            }
        })
        console.log(num);
```
定义一个函数，输入一个字符串，返回倒序后的字符串。例如：hello  ,返回 olleh。不准写for。用string、array的api实现。
```
 (function () {
            var str = prompt("输入字符串");
            var xj = str.split("").reverse().join("");
            console.log(xj);
        })();
```
定义一个函数，输入一个字符串，返回首字母大写后的字符串。例如，hello,返回 Hello。
```
  (function () {
            var str = prompt("输入字符串");
            var daxie = str[0].toUpperCase() + str.substring(1).toLowerCase();
            console.log(daxie);
        })();
```
定义一个函数，输入一个字符串，返回该字符串可以构成的不重复的子串的数目。例如，hello,子串有 "" , "h" , "he" ,"hel","hell","hello","e","el","ell","ello","l","ll","llo","lo","o"。
```
function sub(str) {
            // //定义变量，记录子串的数目：初值为0；
            // var count = 0;
            // //i表示行号
            // for (var i = 1; i <= str.length; i++) {
            //     count += i;
            // }
            // //把空串加上
            // count++;
            // // return count;

            var hash = [];
            var num = 0;
            for (var i = 1; i <= arr.length; i++) {
                if (hash.indexOf(arr[i]) == -1) {
                    num += i;
                }
            }
            return num;
        }

        var str = "hello";
        var arr = str.split("")
        console.log(sub(arr));
```

var arr = [{name: 'wang', age:'1'}, {name:'zhang', age:'2'}], 要求得到obj = {wang: '1', zhang: '2'}。请编写代码实现。
```
 var arr = [
            {
                name: "wang",
                age: 1
            },
            {
                name: "zhang",
                age: 2
            }
        ]
        var obj = {};
        arr.forEach(function (value, index, array) {
            obj[index] = value.name + ":" + value.age;
        })
        console.log(obj);

```
将字符串"2018-11-03"转换成"11/03/2018"。
```
var str = "2018-11-03";
        var result = str.split("-").reverse().join("/");
        console.log(result);
```
已知有字符串 ”get-element-by-id”,写一个 function 将其转化成驼峰表示法”getElementById”。
```
    var str = "get-element-by-id";
        var result = str.split("-");
        var result1 = result.map(function (value, index, array) {
            if (index != 0) {
               return value.substring(0, 1).toUpperCase()+value.substring(1).toLowerCase();;
            }
            return value;
        })
        var c = result1.join("");
        console.log(c);
```
将下面数据展示到页面上
     var stus = [
            {
                id: 1,
                name: "张三",
                age: 20
            },
            {
                id: 2,
                name: "李四",
                age: 20
            },
            {
                id: 3,
                name: "王五",
                age: 20
            }
        ]
```
 var stus = [
            {
                id: 1,
                name: "张三",
                age: 20
            },
            {
                id: 2,
                name: "李四",
                age: 20
            },
            {
                id: 3,
                name: "王五",
                age: 20
            }
        ]
        function show() {
            var html = "<ul>";
            for (var i = 0; i < stus.length; i++) {
                html += `
        <li>${stus[i].id}</li>
        <li>${stus[i].name}</li>
        <li>${stus[i].age}</li>`
            }
            html += '</ul>';
            return html;
        }
        document.write(show());
```
棋盘有32个格子，第一个格子放一个芝麻，第二个放两个，第三个放四个，第四个放八个。。。每个芝麻的重量为0.00001kg，如果要放满整个棋盘，需要多少重量的芝麻。
```
        var num = 1;
        var sum = 0;
        for (var i = 0; i < 31; i++) {//循环30次，从0~32减去初始值的第一次，为31，for循环累计从第二次开始算。
            num *= 2//或者i<32的情况下做个判断i！=0时，再累乘，相当于还是减去了第一次
            sum += num;
        }
        console.log("需要"+sum * 0.00001+"kg的芝麻才能放满");
```
1.定义函数，将字符串按照单词进行逆序，空格作为划分单词的唯一条件。例如，传入“wecome to beijing"改为“beijing to wecome”。
```
 (function () {
            var str = "Welome to Beijing";
            var xj = str.split(" ").reverse().join(" ");
            console.log(xj);
        })();
```
定义函数实现过滤敏感词，传入字符串以及敏感词，返回敏感词被替换为*后的字符串。例如：“今天有个傻子在旁边大喊大叫，影响了我的操作，真是个傻子”敏感词为“傻子”，过滤后“今天有个**在旁边大喊大叫，影响了我的操作，真是个*”.
```
 var str = "今天有个傻子在旁边大喊大叫，影响了我的操作，真是个傻子";
        for (var i = 0; i < str.length; i++) {
            str = str.replace("傻子", "*");
        }
        console.log(str);
```
3、定义函数，传入一个数组，返回重复出现的元素构成的新数组。
```
 var arr = [1, 1, 1, 2, 3, 3, 4, 4, 5, 7, 7, 8, 8];
        var aaa = [];
        var hash = [];
        arr.forEach(function (value, index, array) {
            if (arr.indexOf(arr[index]) !== arr.lastIndexOf(arr[index])) {
                aaa.push(arr[index]);
            }
        for (var i = 0; i < aaa.length; i++) {
            if (hash.indexOf(aaa[i]) == -1) {
                hash.push(aaa[i]);
            }
        }
        })
        console.log(hash);
```
4、定义函数，实现将查询字符串转为对象。查询字付串是像这种key=value&key2=value2&key3=value3格式的字符串。例如
"name=zhangSan&age=24&sex=true"，转为对象为
{
name:"zhangSan",
age:"24",
sex:"true"
}
```
 function queryStringTo0bject(queryStr) {
            var arr = queryStr.split("&");
            var result = {};
            for (var i = 0, len = arr.length; i < len; i++) {
                console.log(arr[i]);
                var arr2 = arr[i].split("=");
                console.log(arr2);
                //将key-value添加到对象。
                result[arr2[0]] = arr2[1];
            }
            return result;
        }
        console.log(queryStringTo0bject('name=zhangsan&age=24&sex=true'));
```
5、定义函数，传入一个字符串，返回该字符串的所有旋转词构成的新数组。
如果一个字符串str,把字符串str前面任意的部分挪到后面去形成的字符串叫做str的旋转词。比如str=”1234“，str的旋转词有“1234"、“2341”、“3412”、“4123”。
```
 (function () {
            var str = "1234";
            var result = str.split("");
            for (var i = 0; i < str.length; i++) {
                result.shift(i);
                result.push(str[i]);
                console.log(result.join(""));
            }
        })();
```
6、定义函数，给定字符串str,检查其是否包含连续3个数字。如果包含，返回最先出现的3个数字的字符串，如果不包含,返回 false。例如，输入“hello12345”返回“123"。
```
   function lianxu(str) {
            for (var i = 0; i < str.length - 2; i++) {
                //i  i+1  i+2
                //转换为数字，不是NaN，说明转换为数字
                if (!isNaN(Number(str[i])) && !isNaN(Number(str[i + 1])) && !isNaN(Number(str[i + 2]))) {
                    return str.slice(i, i + 3);
                }
            }
            return false;
        }
        console.log(lianxu("he45ll0123"));
```
7、定义函数，实现字符串连续重复字符去重。例如，传入"aaaabbbhccccdede，结果为"abcdede"。
```
     (function () {
            var arr = "aaaabbbbccccdede";
            var result = arr.split("");
            for (var i = 0; i < result.length; i++) {
                if (result[i] == result[i + 1]) {
                    result.splice(i, 1);
                    i--;
                }
            }
            var result1 = result.join("");
            console.log(result1);
        })();
```
1) 定义一个矩形类，包含数据属性 width、height ； 方法属性 判断是否是正方形 isSquare，计算周长calcPerimeter，计算面积getArea;创建对象，调用定义的方法。
```
function juxing(width, height) {
            this.width = width;
            this.height = height;
        }

        juxing.prototype.isSquare = function () {
            if (this.width == this.height) {
                return true;
            }
            return false;
        }
        juxing.prototype.calcPerimeter = function () {
            return this.width * 2 + this.height * 2;
        }
        juxing.prototype.mianji = function () {
            return this.width * this.height
        }
        var jx = new juxing(20, 20);
        console.log("是否为正方形：" + jx.isSquare() + ",周长为：" + jx.calcPerimeter() + ",面积为：" + jx.mianji());
```
2）定义函数，实现日期格式化 ，传入日期对象，返回日期字符串。例如返回  ”2022 - 09 - 13  16: 33: 08“
```
function format(riqi) {
            var year = d.getFullYear() < 10 ? "0" + d.getFullYear() : d.getFullYear();
            //月份从0开始
            var month = d.getMonth() < 10 ? "0" + parseInt(d.getMonth() + 1) : d.getMonth() + 1;
            var date = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
            var hours = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
            var minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
            var seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
            return year + "-" + month + "-" + date + "" + " " + hours + ":" + minutes + ":" + seconds;
        }
        var d = new Date();
        var xj = format(d);
        console.log(xj);
```
 3）定义函数，计算任意两个日期的差值，传入两个日期对象；返回 计算结果 ；例如 返回 ”1天2小时3分钟54秒"。
 ```
  function differenceValue(date1, date2) {
            //距离时间戳的毫秒数
            var time1 = date1.getTime();
            var time2 = date2.getTime();//差值
            var result = time1 > time2 ? time1 - time2 : time2 - time1;
            console.log(result);

            var day = parseInt(result / (24 * 60 * 60 * 1000));
            var hours = parseInt(result % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
            var minutes = parseInt(result % (60 * 60 * 1000) / (60 * 1000));
            var seconds = parseInt(result % (60 * 1000) / 1000);
            return "相差" + day + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
        }
        var date1 = new Date();
        var date2 = new Date(2022, 8, 13, 8, 12, 45);//因为月份从零开始，所以这里实际代表的是9月13日
        console.log(differenceValue(date1, date2));
 ```
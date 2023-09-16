## IIFE介绍

> IIFE(Immediately Invoked Function Expressions)叫做“立即执行函数表达式”   页面加载完成后只执行一次的函数
>  作用：IIFE的目的是为了隔离作用域，防止污染全局命名空间。
>    函数声明：function fn(){}

> (function(){})()
> 为什么要使用小括号();
>      ()用来修复function(){} 缺少函数名的语法错误。
>      (function () {})//解析器先执行"("会认为后面跟着一个")""的表达式。这时的函数就不再是函数声明，而是函数表达式。此写法是不能执行的函数表达式。

> (function(){})()//立即执行函数表达式
>    (function fn(){})()//立即执行函数表达式也可以命名，但没必要
```js
        (
            function () {
                console.log("我是匿名函数1");
            }
        )();
        //标准写法应该在匿名执行函数后加分号结束
        (
            function fn() {
                console.log("我是匿名函数2");
            }
        )();

```
## IIFE写法
### 1.！

>  ！取反，返回值取反
>      没有返回值，相当于为true
```js
        console.log(
            function () {
                console.log("我是IIFE");
            }());
        //40行打印显示为undefined==false，但是42行也打印了，所以可以通过取反让返回值为true就可以进入函数了
        !function () {
            console.log("我是IIFE2");
        }()
```
### 2.+
> 数字返回原来的结果，非数字返回NAN
```js
  let fn1 = +function () {
            // return 123+"4"
            return "你好"
        }();
        // console.log(typeof fn1);
        console.log(fn1);
```
### 3.-
> 数字返回的是正负值相反的值，正值返回负值，负值返回正值，非数字返回NAN
```js
        let fn2 = -function () {
            return -123;
            // return 123;
            // return "你好"
        }()
        console.log(fn2);
```
### 4.-
> 数字返回的是正负号取反后再减1，非数字返回-1
```js
let fn3 = ~function () {
            return 123
            // return -123
            // return "你好"
        }()
        console.log(fn3);
```
### 5.void
> 返回结果数  undefined
```
       let fn4=void function(){
            return 123;
        }()
        console.log(fn4);
```
### 6.前导分号；
>    IIFE 注意事项
>         准确写法应该在最后加上一个分号";"
>         TypeError:bar is not a function
>         这里为什么会报错？
>         let bar;
>         let foo=bar//因为这里没有分号";
>         (function(){
>         })()
>         由于变量声明未结束，那么解析器在解析以上代码是，会认为代码是以下结构:
>         解析器会认为bar是一个函数，参数是一个函数，但实际bar只是一个变量。
>         let foo=bar(function(){})();

> 前导分号的IIFE,为了防止两条语句的连接（防止以上结果）
```js
 		let bar;
        let foo=bar;
        // 前导分号的IIFE,为了防止两条语句的连接（防止以上结果）
        ;(function(){

        })()
```
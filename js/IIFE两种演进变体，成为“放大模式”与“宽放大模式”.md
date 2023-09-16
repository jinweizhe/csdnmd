> "放大模式"：
>       当一个模块内容很大/多，或者想要给模块添加私有属性，再或者是从另一个模块继承，可以采用放大模式。（简单来说就是当一个模块数量多的话，就添加一个模块，让新加的模块继承上个模块的属性）

>    "宽放大模式"
>      与"放大模式"相比，"宽放大模式"就是"立即执行函数表达式"的参数，可以是空对象
>      "宽放大模式"在"放大模式"的基础上，不管js文件引入顺序如何都能够执行函数
### 项目结构

![在这里插入图片描述](https://img-blog.csdnimg.cn/16455d73f47c402486ecdfd0ee5635d2.png)
##### module1和module2演示放大模式
##### moduleA和moduleB演示宽放大模式
#### 放大模式
##### module1代码
```js
let module1 = (function () {
    let num = 0;
    let calc = function () {
        return num += 20
    }
    return {
        count: num,
        calc: calc
    }//module1返回了一个对象{count:num,calc:calc}
})()
console.log(module1);
console.log(module1.calc());
```
##### module2代码
```js
    //模块2，继承module1，并添加新的方法。
    let module2 = (function (m1) {
        m1.newFn = function () {//此时此时给这个对象添加一个属性newFn,这时候m1为{count:num,calc:calc,newFn:function(){}}
            console.log("m2新方法");
        }
        return m1;
    })(module1)
    //继承m1的属性
    //将module1返回的对象{count:num,calc:calc}当参数
	//这时候打印module2就相当于m1的值，里面的count属性
    console.log(module2.count + 20);
    //放大模式引用顺序不能混乱
```
#### 宽放大模式
##### moduleA代码
```js
var moduleA = (function () {
    let num = 0
    let fn = function () {
        return num++
    }
    return {
        count: num,
        calc: fn
    }
})()

```
##### moduleB代码
```js
var moduleB = (function (mA) {
    mA.newFn = function () {
        return "你好世界"
    }
    return mA
})(window.moduleA||(window.moduleA={}))
//当模块引用顺序混乱时，在window上找不到moduleA时，参数可以给一个空对象，找到moduleA时，就可以调用moduleA的返回值
console.log(moduleB);
```
### 最后在html内引用查看效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/1fb0ecfe393547c385e175dfe665191f.png)
###### 这里moduleA和moduleB的引用顺序没要求，可以互换，如果B在前，则参数不会有A的返回值，但是也不报错，A在前的话，程序运行正常
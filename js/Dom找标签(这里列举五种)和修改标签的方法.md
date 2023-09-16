## html代码
```
 <main>
        <div>
            <ul>
                <li class="red">0001</li>
                <li class="blue">0002</li>
                <li>0003</li>
                <li class="red">0004</li>
                <li>0005</li>
            </ul>
        </div>
    </main>
    <ol>
        <li id="first">01</li>
    </ol>
```
## JS代码
```
		// 1）根据标签名字获取标签  tag：标签
        // 返回值是一个类数组对象。
        var lis = document.getElementsByTagName("li");
        console.log(lis);
        console.log(lis[0]);

        //2)根据类名获取标签
        var lis2 = document.getElementsByClassName("red");
        console.log(lis2);

        //3)根据id获取标签；返回值是标签对象(只有一个)
        var lis3 = document.getElementById("first");
        console.log(lis3);

        //4）找到满足该选择器的所有标签。query:查询;selector:选择器;all:所有;
        var lis4 = document.querySelectorAll("ul>li");
        console.log(lis4);

        //5）找到满足该选择器的第一个标签。返回值是标签对象，找不到返回null。
        var li = document.querySelector("ul>li");
        console.log(li);
```
 ## 修改标签的样式
 ```
       //修改ul的第一个li（上面代码的lis5）的样式背景颜色为红色和字体为大小30px，这里样式不加横线
        lis5.style.backgroundColor = "red";
        lis5.style.fontSize = "30px";
        //cssText同时修改多个样式:使用这种写法会覆盖上面单独修改的样式，建议在css写好复制粘贴过来，因为无提示
        lis5.style.cssText = "border:1px solid blue;color:green;"
 ```
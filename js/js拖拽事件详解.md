### 拖放事件

> 拖放是由拖动与释放两部分组成，拖放事件也分为被拖动元素的相关事件，和容器的相关事件。
> 被拖动元素的相关事件如下所示：

| 事件      | 描述                   |
| --------- | ---------------------- |
| dragstart | 用户开始拖动元素时触发 |
| drag      | 元素正在拖动时触发     |
| dragend   | 用户完成元素拖动后触发 |

容器相关事件如下所示：
| 事件      | 描述                                               |
| --------- | -------------------------------------------------- |
| dragenter | 当被鼠标拖动的对象进入其容器范围内时触发此事件     |
| dragover  | 当被拖动的对象在另一对象容器范围内拖动时触发此事件 |
| dragleave | 当被鼠标拖动的对象离开其容器范围内时触发此事件     |
| drop      | 在一个拖动过程中，释放鼠标键时触发此事件           |

### 如何实现元素的拖放
首先创建一个HTML文本，用于测试代码，如下所示：
```html
<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>HTML5学习</title>
            <style type="text/css">
                .div1{
                    width:200px;
                    height:100px;
                    padding:20px;
                    border:1px solid #000;
                }
                p{
                    font-size: 28px;
                }
            </style>
        </head>
        <body>
            <div>
                <div class="div1" id="div1" ></div>
                <p id="drag1">Hello World</p>
            </div>
        </body>
    </html>

```
然后，我们要给被拖动元素（也就是在上述的 < p > 标签上），设置一个 draggable 属性，此属性用于规定元素是否可拖动，当属性值为 true 时表示元素可拖动，为 false 表示元素不可拖动。
```html
<p id="drag1" draggable="true">Hello World</p>
```
只有设置了 draggable 属性值为 true ，指定元素才能被拖动。

然后，我们要做的是点击被拖动元素p标签，点击这个元素时需要触发一个 ondragstart 事件，ondragstart 事件会在用户开始拖动元素或选择的文本时触发。调用了一个 drag(event) 函数，在个[函数中规定被拖动的数据，如下所示：
```js
function drag(e){
    e.dataTransfer.setData("Text", e.target.id);
}
```
代码中的 dataTransfer.setData() 方法用于设置被拖数据的数据类型和值。参数 Text 表示被拖动数据的数据类型，参数 e.target.id 是可拖动元素的 id。

接着，我们将要 “Hello World” 拖动到元素容器范围内（矩形框中）。要实现这个步骤，需要在放置拖动元素的容器上绑定一个 ondragover 事件，这个事件用于规定在何处放置被拖动的数据。

默认情况下，是无法将一格元素放置到另外一个元素里面的，所以如果需要设置允许放置，则要在 ondragover 事件中加上 e.preventDefault() 方法来阻止默认行为。

```js
function allowDrop(e){
    e.preventDefault();
}
```
最后，就是要放置被拖动元素，也就是要在元素容器范围内松开鼠标。需要在元素容器上绑定一个 ondrop 事件，如下所示，这个事件会在拖动过程中释放鼠标键时触发。
```js
<div id="div1" class="div1" ondrop="drop(event)" ondragover="allowDrop(event)" ></div>

<script>
    function drop(e){
        e.preventDefault();
        var data = e.dataTransfer.getData("Text");
        e.target.appendChild(document.getElementById(data));
    }
</script>
```
在 ondrop 事件中同样需要调用 e.preventDefault() 方法来阻止默认行为。然后可以通过 dataTransfer.getData("Text"); 方法获取之前的 drag(event) 函数中保存的信息，也就是被拖动元素的 id。接着通过 target.appendChild() 方法为将拖动元素作为元素容器的子元素追加到元素容器中，这样就能成功实现拖放。

### 完整代码
完整代码如下所示：
```html
<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>HTML5学习</title>
            <style type="text/css">
                .div1{
                    width:200px;
                    height:100px;
                    padding:20px;
                    border:1px solid #000;
                }
                p{
                    font-size: 28px;
                }
            </style>
        </head>
        <body>
            <div>
                <div id="div1" class="div1" ondrop="drop(event)" ondragover="allowDrop(event)" ></div>
                <p id="drag1" draggable="true" ondragstart="drag(event)">Hello World</p>
            </div>
            <script>
                function drag(e){
                    e.dataTransfer.setData("Text", e.target.id);
                }
                function allowDrop(e){
                    e.preventDefault();
                }
                function drop(e){
                    e.preventDefault();
                    var data = e.dataTransfer.getData("Text");
                    e.target.appendChild(document.getElementById(data));
                }
            </script>
        </body>
    </html>
```
### 附加一份案例代码，图片自备，已经在css设置好图片样式，不需要考虑图片大小，图片引进来即可
### 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/a79c021cfe0e4942aa7efae0fc3c0701.jpeg)
### 这里没有完全按照这个样式写，只是实现了功能，各位觉得不好看的话，完全可以自己改样式
#### 实现功能：将右侧图片拖到左侧框内，相同图片能追加进去，图片不同则追加不上，这里的追加不是新创建，而是把ul>li的元素移动到新容器，简单来说就是左边添加一个，右边减少一个
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            list-style: none;
            text-decoration: none;
        }

        body {
            display: flex;
        }

        ul {
            display: flex;
            flex-wrap: wrap;
            width: 300px;
            height: 500px;
        }

        li {
            width: 60px;
            height: 60px;
            border: 1px solid;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            width: 50px;
            height: 50px;
        }

        div {
            margin: 100px auto;
            width: 500px;
            height: 700px;
            border: 1px solid;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        main {
            width: 100px;
            height: 100px;
            border: 1px solid;
        }

        main>img {
            margin-left: calc(50% - 25px);
        }

        nav {
            width: 100%;
            height: 40px;
            border: 1px solid;
        }
    </style>
</head>

<body>

    <div>
        <main id="0">
            <img src="./imgages怪兽/1.jpg" alt="">
            <nav></nav>
        </main>
        <main id="1">
            <img src="./imgages怪兽/2.jpg" alt="">
            <nav></nav>
        </main>
        <main id="2">
            <img src="./imgages怪兽/3.jpg" alt="">
            <nav></nav>
        </main>
        <main id="3">
            <img src="./imgages怪兽/4.jpg" alt="">
            <nav></nav>
        </main>
        <main id="4">
            <img src="./imgages怪兽/5.jpg" alt="">
            <nav></nav>
        </main>
        <main id="5">
            <img src="./imgages怪兽/6.jpg" alt="">
            <nav></nav>
        </main>
        <main id="6">
            <img src="./imgages怪兽/7.jpg" alt="">
            <nav></nav>
        </main>
        <main id="7">
            <img src="./imgages怪兽/8.jpg" alt="">
            <nav></nav>
        </main>
        <main id="8">
            <img src="./imgages怪兽/9.jpg" alt="">
            <nav></nav>
        </main>
        <main id="9">
            <img src="./imgages怪兽/10.jpg" alt="">
            <nav></nav>
        </main>
    </div>

    <ul>
        <!-- 只有设置了 draggable 属性值为 true ，指定元素才能被拖动。 -->
        <li draggable="true" id="0"><img src="./imgages怪兽/1.jpg" alt=""></li>
        <li draggable="true" id="1"><img src="./imgages怪兽/2.jpg" alt=""></li>
        <li draggable="true" id="2"><img src="./imgages怪兽/3.jpg" alt=""></li>
        <li draggable="true" id="3"><img src="./imgages怪兽/4.jpg" alt=""></li>
        <li draggable="true" id="4"><img src="./imgages怪兽/5.jpg" alt=""></li>
        <li draggable="true" id="5"><img src="./imgages怪兽/6.jpg" alt=""></li>
        <li draggable="true" id="6"><img src="./imgages怪兽/7.jpg" alt=""></li>
        <li draggable="true" id="7"><img src="./imgages怪兽/8.jpg" alt=""></li>
        <li draggable="true" id="8"><img src="./imgages怪兽/9.jpg" alt=""></li>
        <li draggable="true" id="9"><img src="./imgages怪兽/10.jpg" alt=""></li>
    </ul>
    <script>
        let lis = document.querySelectorAll("li")
        let main = document.querySelectorAll("div>main")
        let nav = document.querySelectorAll("div>main>nav")
        for (let i = 0; i < lis.length; i++) {
            //循环给所有li绑定事件

            //用户开始拖动元素时触发的事件
            lis[i].addEventListener("dragstart", function (e) {
                //dataTransfer.setData() 方法用于设置被拖数据的数据类型和值。参数 Text 表示被拖动数据的数据类型，参数 e.target.id 是可拖动元素的 id。(亲测e.target也可以)
                //这个text随便设置,目的是让放置容器获取到我们被拖动的li的元素的信息
                e.dataTransfer.setData = ("Text", e.target.id)
            })

            //当被拖动的对象在另一对象容器(放置容器)范围内拖动时触发此事件
            main[i].addEventListener("dragover", function (e) {
                //默认情况下，是无法将一格元素放置到另外一个元素里面的，所以如果需要设置允许放置，则要在 dragover 事件中加上 e.preventDefault() 方法来阻止默认行为。
                e.preventDefault()
            })

            //在一个拖动过程中，释放鼠标键时触发此事件
            main[i].addEventListener("drop", function (e) {
                // 在 drop 事件中同样需要调用 e.preventDefault() 方法来阻止默认行为。然后可以通过 dataTransfer.getData("Text"); 方法获取之前的 drag(event) 函数中保存的信息，也就是被拖动元素的 id。接着通过 target.appendChild() 方法为将拖动元素作为元素容器的子元素追加到元素容器中，这样就能成功实现拖放。
                e.preventDefault()
                //通过 dataTransfer.getData("Text"); 方法获取之前的 drag(event) 函数中保存的信息
                var data = e.dataTransfer.getData("Text")
                console.log(data);
                console.log(e.target);
                //可以发现打印出来的是图片的地址,因为我这里有中文所以需要通过解码来获得解码后的data信息
                let xj = decodeURI(data)
                console.log(xj);

                //将获得的地址提取里面的序号,从1到10(因为是提取图片地址的序号,图片是从1开始的)
                let arr = xj.replaceAll("/", "=").split("=")[5].split(".")[0]
                console.log(arr);//1/2/3/4/5/6/7/8//9/10
                //打印当前点击的main标签的id值,是字符串需要转换字符类型,又是从0开始,arr是从一开始的,所以这里要加1
                console.log(arr, parseInt(main[i].getAttribute("id")) + 1);
                //判断当前拖拽的图片序号是否与当前的main的id值一致,如果一致的话就进入if判断,否则没效果
                if (arr == parseInt(main[i].getAttribute("id")) + 1) {
                    //将拖拽的元素追加到main的nav下面,这样就实现了对应的图片放到对应的位置
                    nav[i].appendChild(lis[i]);
                    console.log(1);
                }
            })
        }

    </script>
</body>

</html>
```
## 总结

> 当我们要对某个元素实行拖放操作时，首先就需将这个元素的 draggable 属性设置为 true，表示允许元素拖动。其中图片和链接默认是可拖动的，不需设置要 draggable 属性。
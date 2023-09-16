## 查找父节点
#### 使用parentNode查找父节点
```
<body>
    <div class="father">
        <div class="son">儿子</div>
    </div>

    <script>
        var son=document.querySelector(".son");
        //打印父节点
        console.log(son.parentNode);
        //设置父节点关闭
        son.parentNode.style.display="none"
    </script>
</body>
```
## 查找子节点
#### 第一种 children(重点) ，仅获得所有元素节点，返回的还是一个伪数组
```
<body>
    <button>点击</button>
    <ul>
        <li>我是孩子</li>
        <li>我是孩子</li>
        <li>我是孩子</li>
        <li>我是孩子</li>
        <li>我是孩子</li>
        <li>我是孩子</li>
    </ul>

    <script>
        var btn = document.querySelector("button")
        var ul = document.querySelector("ul")
        btn.addEventListener("click", function () {
            // console.log(ul.children);打印ul子节点li
            //把所有的子元素变成红色
            for (var i = 0; i < ul.children.length; i++) {
                ul.children[i].style.color = "red"
            }
            ul.children[0].style.color = "green"

            console.log(ul.childNodes);//打印   13个元素，六个li和七个换行文本
        })
    </script>
</body>
```
#### 第二种childNodes， 获得所有子节点、包括文本节点（空格、换行)、注释节点等
```
console.log(ul.childNodes);//打印第一种方式点击事件里   打印出13个元素，六个li和七个换行文本
```

> 推荐第一种写法，因为第二种把换行文本等不必要的都查找出来了，第一种只查找属性节点
## 查找兄弟节点
#### 查找下一个兄弟nextElementSibling
#### 查找上一个兄弟previousElementSibling
```
<body>
    <button>点击</button>
    <ul>
        <li>第一个</li>
        <li class="test">第二个</li>
        <li>第三个</li>
        <li>第四个</li>
    </ul>

    <script>
        var btn = document.querySelector("button")
        var test = document.querySelector(".test")
        btn.addEventListener("click", function () {
            //第二个变红色
            test.style.color="red"
            //他的下一个兄弟兄弟变绿色
            test.nextElementSibling.style.color = "green"
            //他的上一个兄弟兄弟变绿色
            test.previousElementSibling.style.color = "yellow"

        })
```
## 创建节点createElement
```
 var div=document.createElement("div")
```
## 创建完 向后追加节点appendChild
```
<body>
    <ul>
    	<li>我是萧寂</li>
    	<li>我是小明</li>
    </ul>
    <script>
    	 //获取父节点
        var ul=document.querySelector("ul")
          //创建新的节点
        var li=document.createElement("li")
        //新节点添加内容
         li.innerHTML="我是新创建的小li"
//---------------------------------------------------------------
       // //将新节点追加到父节点中（只能往后追加）
       // ul.appendChild(li)       
//--------------------------------------------------------------------------
		//向前追加，把新创建的放到小明前
        //ul.children[1]获取小明元素
        ul.insertBefore(li,ul.children[1])
    </script>  
</body>


父元素.appendChild(子元素)
```
## 克隆节点cloneNode

> cloneNode会克隆出一个跟原标签一样的元素，括号内传入布尔值
> 若为true，则代表克隆时会包含后代节点一起克隆
> 若为false，则代表克隆时不包含后代节点
> 默认为false


```
元素.cloneNode(布尔值)

<body>
    <ul>
        <li>我是内容</li>
    </ul>
    <script>
        var ul = document.querySelector("ul")
        //括号为空，则默认为false不克隆后代节点
        // var new1 = ul.cloneNode();
        // var new1 = ul.cloneNode(false);
        //括号为true，克隆后代节点
        var new1 = ul.cloneNode(true);
        //在body追加克隆元素
        document.body.appendChild(new1)
    </script>
</body>
```
## 删除节点removechild

> 要删除元素必须通过父元素删除
> 如不存在父子关系则删除不成功
> 删除节点和隐藏节点（display:none）有区别的:隐藏节点还是存在的，但是删除，则从html中删除节点

```
父元素.removechild(要删除的元素)

<body>
    <button>点击</button>
    <ul>
        <li>我是内容111111</li>
    </ul>
    <script>
        //需求，点击按钮删除小li
        var btn = document.querySelector("button")
        var ul = document.querySelector("ul")
        btn.addEventListener("click", function () {
            //删除的语法父元素.removechiLd(子元素)
            ul.removeChild(ul.children[0])
        })
    </script>
</body>
```
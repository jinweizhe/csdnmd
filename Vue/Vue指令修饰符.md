![在这里插入图片描述](https://img-blog.csdnimg.cn/6e38242a6ca449128ccdf89e147c1185.png)
使用方式:
```html
<body> 
    <div id="app">
        <!-- 
            prevent代表了e.preventDefault();
            @click.prevent="show"代表既为a标签绑定了show点击事件,又阻止了元素的默认行为
         -->
        <a href="http://www.baidu.com" @click.prevent="show">跳转到百度首页</a>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {

            },
            methods: {
                show(e) {
                    console.log("点击了a链接");
                }
            }
        })
    </script>
</body>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/b7b91657776b4d1b837a4a7aaa272565.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/8f6d019441f145c491be96879259f77b.png)
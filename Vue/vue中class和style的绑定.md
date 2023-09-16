### class的绑定方法
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <style>
      .cs {
        background-color: yellow;
      }
      .active {
        color: red;
        font-weight: 700;
      }
      .text {
        background-color: blue;
      }
      .color {
        font-size: 50px;
        background-color: brown;
      }
      .color2 {
        color: white;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <!-- 单个的写法 -->
      <!-- 给class直接绑定类名即可,如果要实现切换效果,可以仿照这个写个三目运算符 -->
      <div :class="cs ? 'cs':''">class单个写法</div>
      <button @click="cs = !cs">选中</button>
      <!-- 对象的写法 -->
      <!-- :class对象的键为类名,值为布尔值,值为true会保留前面的类名,为false不会保留类名 -->
      <div :class="{active:isactive,text:!isactive}">class对象写法</div>
      <button @click="isactive = !isactive">选中</button>
      <!-- 数组的写法 -->
      <!-- 方式一:直接在class后面传入数组 -->
      <div :class="[colors,colors2]">class数组写法一</div>
      <!-- 方式二:在data直接用一个数组存储所有类名,直接把这个数组绑定class上 -->
      <div :class="colorarr">class数组写法二</div>
    </div>
    <script>
      Vue.config.productionTip = false;
      var app = new Vue({
        el: "#app",
        data: {
          isactive: false,
          cs: false,
          colors: "color",
          colors2: "color2",
          colorarr:["color","color2"]
        }
      });
    </script>
  </body>
</html>

```
### style的绑定方法
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
     <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <style>
</head>
<body>
    <div id="app">
        <!-- 直接在内联style上绑定 -->
        <div :style="{color:activeColor,fontSize:fontSize+'px'}">style单个绑定</div>
        <!-- style数组形式绑定 -->
        <!-- 方式一,直接在style传入数组 -->
        <div :style="[style1,style2]">style数组绑定一</div> 
        <!-- 方式二,将所有的样式的存入一个数组,直接在style存放数组即可 -->
        <div :style="styleArr">style数组绑定二</div> 
    </div>
    <script>
        Vue.config.productionTip = false
        var app = new Vue({
            el: "#app",
            data: {
                activeColor:"red",
                fontSize:30,
                style1:{
                    color:'blue',
                    fontWight:'700',
                    backgroundColor:'yellow'
                },
                style2:{
                    width:'300px',
                    height:'300px'
                },
                styleArr:[{
                    color:'red',
                    fontWight:'700',
                    backgroundColor:'blue'
                },{
                    width:'200px',
                    height:'200px'
                }]
            }
        })
    </script>
</body>
</html>
```
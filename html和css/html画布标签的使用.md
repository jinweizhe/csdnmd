# html的画布

> 在网页中，我们把用于绘制图形的特殊区域也称为“画布”，网页设计师可以在该区域义绘制自定的图形样式。
## 画布的使用方法
### 1.创建画布
```
<canvas id="画布名称" width="数值" height="数值">
	您的浏览器不支持canvas(当浏览器不支持画布标签会弹出此内容)
</canvas>
```
### 2.获取画布
使用getElementById()方法可以获取网页中的画布对象。
语法格式：
```
var canvas = document.getElementById('cavs');
```
### 3.准备画笔
有了画布之后，要开始绘图，还需要准备一只画笔，这支画笔就是context对象。context对象也被称为绘制环境，通过该对象，可以在画布中绘制图形。
基本语法格式：
```
canvas.getContext('2d');
```
### 4.确定初始位置
在绘制图形时，我们首先需要确定从哪里下“笔”，这个下“笔”的位置就是初始位置。在平面中（2d），初始位置可以通过“x，y”的坐标轴来表示。在画布中从最左上角“0，0”开始，x轴向右增大， y轴向下增大。
基本语法格式：
```
context.moveTo(100,100);
```
### 5.确定末端位置
连线末点用于定义一个端点，并绘制一条从该端点到初始位置的连线。在画布中使用lineTo(x,y)方法来定义连线端点。
基本语法格式：
```
context.lineTo(100,100);
```
### 6.描边
通过初始位置和连线端点可以绘制一条线，但这条线并不能被看到。这时我们需要为线添加描边，让线变得可见。使用画布中的stroke()方法，可以实现线的可视效果。
基本语法格式：
```
context.stroke();
```
## 画布的一些方法
### 颜色、样式和阴影
| 属性          | 描述                                       |
| ------------- | ------------------------------------------ |
| fillStyle     | 设置或返回用于填充绘画的颜色、渐变或模式。 |
| strokeStyle   | 设置或返回用于笔触的颜色、渐变或模式。     |
| shadowColor   | 设置或返回用于阴影的颜色。                 |
| shadowBlur    | 设置或返回用于阴影的模糊级别。             |
| shadowOffsetX | 设置或返回阴影与形状的水平距离。           |
| shadowOffsetY | 设置或返回阴影与形状的垂直距离。           |

| 方法                   | 描述                                      |
| ---------------------- | ----------------------------------------- |
| createLinearGradient() | 创建线性渐变（用在画布内容上）。          |
| createPattern()        | 在指定的方向上重复指定的元素。            |
| createRadialGradient() | 创建放射状/环形的渐变（用在画布内容上）。 |
| addColorStop()         | 规定渐变对象中的颜色和停止位置。          |
### 线条样式
| 属性       | 描述                                       |
| ---------- | ------------------------------------------ |
| lineCap    | 设置或返回线条的结束端点样式。             |
| lineJoin   | 设置或返回两条线相交时，所创建的拐角类型。 |
| lineWidth  | 设置或返回当前的线条宽度。                 |
| miterLimit | 设置或返回最大斜接长度。                   |
### 矩形
| 方法         | 描述                           |
| ------------ | ------------------------------ |
| rect()       | 创建矩形。                     |
| fillRect()   | 绘制"被填充"的矩形。           |
| strokeRect() | 绘制矩形（无填充）。           |
| clearRect()  | 在给定的矩形内清除指定的像素。 |
### 路径
| 方法               | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| fill()             | 填充当前绘图（路径）。                                       |
| stroke()           | 绘制已定义的路径。                                           |
| beginPath()        | 起始一条路径，或重置当前路径。                               |
| moveTo()           | 把路径移动到画布中的指定点，不创建线条。                     |
| closePath()        | 创建从当前点回到起始点的路径。                               |
| lineTo()           | 添加一个新点，然后在画布中创建从该点到最后指定点的线条。     |
| clip()             | 从原始画布剪切任意形状和尺寸的区域。                         |
| quadraticCurveTo() | 创建二次贝塞尔曲线。                                         |
| bezierCurveTo()    | 创建三次贝塞尔曲线。                                         |
| arc()              | 创建弧/曲线（用于创建圆形或部分圆）。arc(x,y,r,开始角,结束角,方向(默认为false,是顺时针，true为逆时针)) |
| arcTo()            | 创建两切线之间的弧/曲线。                                    |
| isPointInPath()    | 如果指定的点位于当前路径中，则返回 true，否则返回 false。    |
### 转换
| 方法           | 描述                                             |
| -------------- | ------------------------------------------------ |
| scale()        | 缩放当前绘图至更大或更小。                       |
| rotate()       | 旋转当前绘图。                                   |
| translate()    | 重新映射画布上的 (0,0) 位置。                    |
| transform()    | 替换绘图的当前转换矩阵。                         |
| setTransform() | 将当前转换重置为单位矩阵。然后运行 transform()。 |
### 文本
| 属性         | 描述                                       |
| ------------ | ------------------------------------------ |
| font         | 设置或返回文本内容的当前字体属性。         |
| textAlign    | 设置或返回文本内容的当前对齐方式。         |
| textBaseline | 设置或返回在绘制文本时使用的当前文本基线。 |

| 方法          | 描述                         |
| ------------- | ---------------------------- |
| fillText()    | 在画布上绘制"被填充的"文本。 |
| strokeText()  | 在画布上绘制文本（无填充）。 |
| measureText() | 返回包含指定文本宽度的对象。 |
### 图像绘制
| 方法        | 描述                           |
| ----------- | ------------------------------ |
| drawImage() | 向画布上绘制图像、画布或视频。 |
### 像素操作
| 属性   | 描述                                                  |
| ------ | ----------------------------------------------------- |
| width  | 返回 ImageData 对象的宽度。                           |
| height | 返回 ImageData 对象的高度。                           |
| data   | 返回一个对象，其包含指定的 ImageData 对象的图像数据。 |

| 方法              | 描述                                                        |
| ----------------- | ----------------------------------------------------------- |
| createImageData() | 创建新的、空白的 ImageData 对象。                           |
| getImageData()    | 返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据。 |
| putImageData()    | 把图像数据（从指定的 ImageData 对象）放回画布上。           |
### 合成
| 属性                     | 描述                                     |
| ------------------------ | ---------------------------------------- |
| globalAlpha              | 设置或返回绘图的当前 alpha 或透明值。    |
| globalCompositeOperation | 设置或返回新图像如何绘制到已有的图像上。 |
### 其他
| 方法          | 描述                             |
| ------------- | -------------------------------- |
| save()        | 保存当前环境的状态。             |
| restore()     | 返回之前保存过的路径状态和属性。 |
| createEvent() |                                  |
| getContext()  |                                  |
| toDataURL()   |                                  |
## 常用的属性方法详解
### 线的样式
#### 1、宽度
使用画布中的lineWidth属性可以定义线的宽度，该属性的取值为数值（不带单位），以像素为计量。
基本语法格式：
```
context.lineWidth='10';
```
#### 2、描边颜色
使用画布中的strokeStyle属性可以定义线的描边颜色，该属性的取值为十六进制颜色值或颜色英文。
基本语法格式：
```
context.strokeStyle='red';
```
#### 3、端点形状
默认情况下，线的端点是方形的，通过画布中的lineCap属性可以改变端点的形状。
基本语法格式：
```
lineCap=’属性值’
```
| 属性值         | 显示效果                             |
| -------------- | ------------------------------------ |
| butt（默认值） | 默认效果，无端点，显示直线方形边缘。 |
| round          | 显示圆形端点。                       |
| square         | 显示方形端点。                       |
#### 线的路径
闭合路径就是将我们绘制的开放路径，进行封闭处理，多点的路径闭合后会形成特定的形状。在画布中，使用closePath()方法闭合路径。
基本语法格式：
```
ctx.closePath();
```
#### 3、填充路径
通过填充路径的内容区域生成实心的图形。
基本语法格式：
```
ctx.fillStyle = '#ff0'
ctx.fill();
```
### 圆的绘制方法
在画布中，使用arc()方法可以绘制圆或弧线。
基本语法格式：
```
arc(x,y,r,开始角,结束角,方向)
```
x和y： x和y表示圆心在x轴和y轴的坐标位置。
r： 表示圆形或弧形的半径，用于确定图形的大小。
开始角：表示初始弧点位置。其中弧点使用数值和“Math.PI”（圆周率，可以理解为180度）表示。
结束角：结束的弧点位置，初始角的设置方式一致。
方向：分为顺时针和逆时针绘。(false和true，默认为true逆时针)
### 保存画布

> 使用画布的toblob()方法
> .toBlob() 方法创造Blob对象，用以展示canvas上的图片；这个图片文件可以被缓存或保存到本地，由用户代理端自行决定。如不特别指明，图片的类型默认为 image/png，分辨率为96dpi。

> URL.createObjectURL() 静态方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。 
```
//URL.createObjectURL() 使用

// html代码
<input type="file" id="file">

// js代码
document.querySelector('#file').onchange = function (e) {
  console.log(e.target.files[0])
  console.log(URL.createObjectURL(e.target.files[0]))
}
```

```
语法
canvas.toBlob(callback, type, encoderOptions);
参数
callback
回调函数------可获得一个单独的Blob对象参数。
type 可选------DOMString类型，指定图片格式，默认格式为image/png。
encoderOptions 可选-------Number类型，值在0与1之间，当请求图片格式为image/jpeg或者image/webp时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。
返回值
无。
异常
SecurityError
canvas“被污染”的情况下不能使用此方法


使用时，可以在点击按钮时创建个a标签，添加a标签download下载，并添加保存的格式png,a.download = name + ".png"，然后创建a.href="",给a标签添加下载的路径，并且执行a.click()，主动执行a标签的点击事件，最后执行a.remove(),移除a的点击事件即可实现点击按钮下载画布内容，下面为案例代码


        //获取input的值
        let name = ""
        let input = document.getElementById("srk")
        input.addEventListener("change", function (e) {
            name = this.value
        })


        //保存为图片
        let baocun = document.getElementById("baocun")
        baocun.addEventListener("click", function () {
            canvas.toBlob(function (blob) {
                let a = document.createElement("a")
                document.querySelector("body").appendChild(a)
                a.download = name + ".png"
                a.href = URL.createObjectURL(blob)
                a.click()
                a.remove()
            })
        })
```
### 以下是三个小案例，仅供参考
#### 画布签名板（可下载保存）
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* #huabu {
            width: 400px;
            height: 200px;
            border: 1px solid black;
        } */
    </style>
</head>

<body>
    <canvas id="huabu" width="400px" height="200px" style="border:1px solid #000000;"></canvas>
    <div>
        <input type="text" id="srk" placeholder="请输入图片名称">
        <button id="baocun">保存为图片</button>
        <button id="qingchu" onclick="clearCanvas()">清除画布</button>
    </div>

    <script>
        //获取画布
        let canvas = document.getElementById("huabu")
        console.log(canvas.getBoundingClientRect());
        let canvasStyle = canvas.getBoundingClientRect()
        let ctx = canvas.getContext("2d")
        let isDrawing = false
        let l = canvas.offsetLeft
        let h = canvas.offsetTop
        canvas.addEventListener('mousedown', function (e) {
            isDrawing = true
            // ctx.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
            ctx.moveTo(e.pageX - canvasStyle.x, e.pageY - canvasStyle.y);
        })
        canvas.addEventListener('mousemove', function (e) {
            if (isDrawing) {
                //ctx.lineTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
                ctx.lineTo(e.pageX - canvasStyle.x, e.pageY - canvasStyle.y);
                ctx.strokeStyle = 'red';
                ctx.stroke();
            }
        })
        document.addEventListener('mouseup', function (e) {
            isDrawing = false
        })

        //获取input的值
        let name = ""
        let input = document.getElementById("srk")
        input.addEventListener("change", function (e) {
            name = this.value
        })


        //保存为图片
        let baocun = document.getElementById("baocun")
        baocun.addEventListener("click", function () {
            canvas.toBlob(function (blob) {
                let a = document.createElement("a")
                document.querySelector("body").appendChild(a)
                a.download = name + ".png"
                a.href = URL.createObjectURL(blob)
                a.click()
                a.remove()
            })
        })

        //清除画布
        let qingchu = document.getElementById("qingchu")
        qingchu.addEventListener("click", function () {
            canvas.width = canvas.width
            canvas.height = canvas.height
        })

    </script>
</body>

</html>
```
#### 火柴人（带鼠标坐标显示，方便参考不同点坐标）
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        span {
            position: absolute;
        }
    </style>
</head>

<body>
    <canvas id="cas" width="1000" height="600"></canvas>
    <span></span>
    <script type="text/javascript">
        var canvas = document.getElementById('cas')
        var ctx = canvas.getContext('2d');

        //头部

        ctx.beginPath();
        ctx.arc(400, 110, 30, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.strokeStyle = '#ff9900';
        ctx.lineWidth = '3';
        ctx.stroke();
        //脖子
        ctx.beginPath();
        ctx.moveTo(400, 140);
        ctx.lineTo(400, 160);
        ctx.lineWidth = 3;
        ctx.stroke();
        //身体
        ctx.beginPath();
        ctx.moveTo(400, 160);
        ctx.lineTo(400, 250);
        ctx.lineWidth = 35;
        ctx.stroke();
        //文件夹
        ctx.beginPath();
        ctx.moveTo(350, 200);
        ctx.lineTo(350, 240);
        ctx.lineTo(450, 240);
        ctx.lineTo(450, 200);
        ctx.closePath();
        ctx.fillStyle = '#cc3333';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.stroke();

        //胳膊
        ctx.beginPath();
        ctx.moveTo(400, 165);
        ctx.lineTo(450, 200);
        ctx.lineTo(400, 240);
        ctx.lineWidth = 8;
        ctx.stroke();
        //手掌
        ctx.beginPath();
        ctx.arc(400, 240, 8, 0, 2 * Math.PI, true);
        ctx.fillStyle = '#ff0';
        ctx.fill();
        //腿部
        ctx.beginPath();
        ctx.moveTo(400, 250);
        ctx.lineTo(380, 320);
        ctx.lineTo(370, 380);
        ctx.lineWidth = 9;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(400, 250);
        ctx.lineTo(420, 380);
        ctx.lineWidth = 9;
        ctx.stroke();
        //脚
        ctx.beginPath();
        ctx.arc(360, 380, 10, 0, 1 * Math.PI, true);
        ctx.closePath();
        ctx.fillStyle = '#ff0'
        ctx.fill();
        ctx.lineWidth = '2';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(410, 380, 10, 0, 1 * Math.PI, true);
        ctx.closePath();
        ctx.fillStyle = '#ff0'
        ctx.fill();
        ctx.lineWidth = '2';
        ctx.stroke();


        let span = document.querySelector("span")
        document.addEventListener("mousemove", function (e) {
            span.style.top = e.pageY - canvas.offsetTop + 5 + "px"
            span.style.left = e.pageX - canvas.offsetLeft + 15 + "px"
            span.innerHTML = `${e.pageX - canvas.offsetLeft},${e.pageY - canvas.offsetTop}`
        })
    </script>
</body>

</html>
```
#### 笑脸练习（带鼠标坐标，方便参考）
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        span {
            position: absolute;
        }
    </style>
</head>

<body>
    <canvas id="cas" width="400" style="border: 1px solid;" height="400"></canvas>
    <span></span>
    <script type="text/javascript">
        var canvas = document.getElementById("cas")
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(100, 100, 60, 0, 2 * Math.PI, true);
        ctx.fillStyle = '#ff0';
        ctx.fill();


        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 5;
        ctx.arc(100, 110, 25, Math.PI / 6, 5 * Math.PI / 6, false);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.arc(70, 80, 15, Math.PI / 400, Math.PI, true);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 5;
        ctx.arc(130, 80, 15, Math.PI / 400, Math.PI, true);
        ctx.stroke();

        let span = document.querySelector("span")
        document.addEventListener("mousemove", function (e) {
            span.style.top = e.pageY - canvas.offsetTop + 5 + "px"
            span.style.left = e.pageX - canvas.offsetLeft + 15 + "px"
            span.innerHTML = `${e.pageX - canvas.offsetLeft},${e.pageY - canvas.offsetTop}`
        })  
    </script>
</body>

</html>
```
### 满屏爱心
```html
<html>

<head>
    <meta charset="utf-8" name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        body {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            background-color: black;
        }
        span {
            display: block;
            position: absolute;
            font-size: 100px;
            animation: xin 1s alternate infinite;
        }
        @keyframes xin {
            0% {
                transform: scale(1)
            }
            100% {
                transform: scale(1.2)
            }
        }
        h1 {
            color: white;
            text-align: center;
            margin-top: 50%;
            text-shadow: 2px 2px 20px rgba(0, 255, 255);
        }
    </style>
</head>

<body>
    <h1>这里写字</h1>
</body>

<script>
    //创建50个心
    for (let i = 0; i < 50; i++) {
        let xin = document.createElement("span")
        xin.innerHTML = "❤️"
        xin.style.left = Math.round(Math.random() * 110) + "%"
        xin.style.fontSize = Math.round(Math.random() * 50) + "px"
        document.body.insertAdjacentElement("afterbegin", xin)
        //定时
        let top = Math.round(Math.random() * 100) - 100
        let i = top
        setInterval(function () {
            i += 0.5
            xin.style.top = i + "%"
            if (i >= 100) {
                i = top
            }
        }, 20)
    }
</script>
</html>
```
### 文字接连拼接出，后拼爱心(建议做个好看的链接，点击链接进入此页面)
```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 540px;
            height: 960px;
            position: relative;
            overflow: hidden;
        }

        p {
            width: 270px;
            height: 580px;
            background-image: url(这里插入背景图的图片路径);
            background-size: 270px 580px;
            background-repeat: no-repeat;
            margin: 0 auto;
        }
        nav {
            width: 100%;
            margin-top: 50px;
            font-size: 30px;
            height: 300px;
            overflow: hidden;
        }

        nav::after {
            content: "❤";
            color: red;
        }
    </style>
</head>

<body>
    <div>
        <p></p>
        <nav></nav>
    </div>

    <script>
        let nav = document.querySelector("nav")
        let str = '小傻瓜，我可以错过黄昏的末班车，可以错过四月的樱花季，可以错过凛冽的太阳雨，可以错过很多很多，但唯独不能错过你。'
        // p.innerText = str[0]
        let i = 0
        setInterval(function () {
            if (i >= str.length) {
                return
            }
            nav.innerText += str[i]
            i += 1
        }, 200)
    </script>
</body>
</html>
```
### 3D代码相册
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>3D代码相册</title>
    <embed src="这里放上MP3格式的背景音乐路径" hidden="true" autostart="true" loop="true">
    <link rel="stylesheet" href="css/spin.css" />
    <style>
        html {
            background: transparent;
            /*背景颜色*/
            height: 100%;
        }
        /*外层容器样式*/
        .wrap {
            position: relative;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 200px;
            height: 200px;
            margin: auto;
        }
        /*包裹所有容器样式*/
        .cube {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            transform-style: preserve-3d;
            transform: rotateX(-30deg) rotateY(-80deg);
            animation: rotate 20s infinite;
            /*匀速*/
            animation-timing-function: linear;
        }
        @keyframes rotate {
            from {
                transform: rotateX(0deg) rotateY(0deg);
            }
            to {
                transform: rotateX(360deg) rotateY(360deg);
            }
        }
        .cube div {
            position: absolute;
            width: 200px;
            height: 200px;
            opacity: 0.8;
            transition: all .4s;
        }
        /*定义所有图片样式*/
        .pic {
            width: 200px;
            height: 200px;
        }
        .cube .out_front {
            transform: rotateY(0deg) translateZ(100px);
        }
        .cube .out_back {
            transform: translateZ(-100px) rotateY(180deg);
        }
        .cube .out_left {
            transform: rotateY(90deg) translateZ(100px);
        }
        .cube .out_right {
            transform: rotateY(-90deg) translateZ(100px);
        }
        .cube .out_top {
            transform: rotateX(90deg) translateZ(100px);
        }
        .cube .out_bottom {
            transform: rotateX(-90deg) translateZ(100px);
        }
        /*内层小正方体样式*/
        .cube span {
            display: bloack;
            width: 100px;
            height: 100px;
            position: absolute;
            top: 50px;
            left: 50px;
        }
        .cube .in_pic {
            width: 100px;
            height: 100px;
        }
        .cube .in_front {
            transform: rotateY(0deg) translateZ(50px);
        }
        .cube .in_back {
            transform: translateZ(-50px) rotateY(180deg);
        }
        .cube .in_left {
            transform: rotateY(90deg) translateZ(50px);
        }
        .cube .in_right {
            transform: rotateY(-90deg) translateZ(50px);
        }
        .cube .in_top {
            transform: rotateX(90deg) translateZ(50px);
        }
        .cube .in_bottom {
            transform: rotateX(-90deg) translateZ(50px);
        }
        /*鼠标移入后样式*/
        .cube:hover .out_front {
            transform: rotateY(0deg) translateZ(200px);
        }
        .cube:hover .out_back {
            transform: translateZ(-200px) rotateY(180deg);
        }
        .cube:hover .out_left {
            transform: rotateY(90deg) translateZ(200px);
        }
        .cube:hover .out_right {
            transform: rotateY(-90deg) translateZ(200px);
        }
        .cube:hover .out_top {
            transform: rotateX(90deg) translateZ(200px);
        }
        .cube:hover .out_bottom {
            transform: rotateX(-90deg) translateZ(200px);
        }
    </style>
</head>

<body>
    <!--/*外层容器*/-->
    <div class="wrap">
        <!--/*包裹所有元素的容器*/-->
        <div class="cube">
            <!--前图 -->
            <div class="out_front">
                <img src="这里插入图片" class="pic" />
            </div>
            <!--后图 -->
            <div class="out_back">
                <img src="这里插入图片" class="pic" />
            </div>
            <!--左图 -->
            <div class="out_left">
                <img src="这里插入图片" class="pic" />
            </div>
            <div class="out_right">
                <img src="这里插入图片" class="pic" />
            </div>
            <div class="out_top">
                <img src="这里插入图片" class="pic" />
            </div>
            <div class="out_bottom">
                <img src="这里插入图片" class="pic" />
            </div>
            <!--小正方体 -->
            <span class="in_front">
                <img src="这里插入图片" class="in_pic" />
            </span>
            <span class="in_back">
                <img src="这里插入图片" class="in_pic" />
            </span>
            <span class="in_left">
                <img src="这里插入图片" class="in_pic" />
            </span>
            <span class="in_right">
                <img src="这里插入图片" class="in_pic" />
            </span>
            <span class="in_top">
                <img src="这里插入图片" class="in_pic" />
            </span>
            <span class="in_bottom">
                <img src="这里插入图片" class="in_pic" />
            </span>
        </div>
    </div>
</body>

</html>
```
### 跳动的爱心
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>💗</title>
 
    <style>
      html,
      body {
        height: 100%;
        padding: 0;
        margin: 0;
        background: #000;
      }
      canvas {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: anim 1.5s ease-in-out infinite;
        -webkit-animation: anim 1.5s ease-in-out infinite;
        -o-animation: anim 1.5s ease-in-out infinite;
        -moz-animation: anim 1.5s ease-in-out infinite;
      }
      #name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: -20px;
        font-size: 46px;
        color: #ea80b0;
      }
      @keyframes anim {
        0% {
          transform: scale(0.8);
        }
        25% {
          transform: scale(0.7);
        }
        50% {
          transform: scale(1);
        }
        75% {
          transform: scale(0.7);
        }
        100% {
          transform: scale(0.8);
        }
      }
      @-webkit-keyframes anim {
        0% {
          -webkit-transform: scale(0.8);
        }
        25% {
          -webkit-transform: scale(0.7);
        }
        50% {
          -webkit-transform: scale(1);
        }
        75% {
          -webkit-transform: scale(0.7);
        }
        100% {
          -webkit-transform: scale(0.8);
        }
      }
      @-o-keyframes anim {
        0% {
          -o-transform: scale(0.8);
        }
        25% {
          -o-transform: scale(0.7);
        }
        50% {
          -o-transform: scale(1);
        }
        75% {
          -o-transform: scale(0.7);
        }
        100% {
          -o-transform: scale(0.8);
        }
      }
      @-moz-keyframes anim {
        0% {
          -moz-transform: scale(0.8);
        }
        25% {
          -moz-transform: scale(0.7);
        }
        50% {
          -moz-transform: scale(1);
        }
        75% {
          -moz-transform: scale(0.7);
        }
        100% {
          -moz-transform: scale(0.8);
        }
      }
    </style>
  </head>
  <body>
    <canvas id="pinkboard"></canvas>
    <!-- 在下面加名字 -->
     <div id="name" style="color: blue;">CSDN</div> 
 
    <script>
      var settings = {
        particles: {
          length: 500, 
          duration: 2, 
          velocity: 100, 
          effect: -0.75,
          size: 30, 
        },
      };
      (function () {
        var b = 0;
        var c = ["ms", "moz", "webkit", "o"];
        for (var a = 0; a < c.length && !window.requestAnimationFrame; ++a) {
          window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
          window.cancelAnimationFrame =
            window[c[a] + "CancelAnimationFrame"] ||
            window[c[a] + "CancelRequestAnimationFrame"];
        }
        if (!window.requestAnimationFrame) {
          window.requestAnimationFrame = function (h, e) {
            var d = new Date().getTime();
            var f = Math.max(0, 16 - (d - b));
            var g = window.setTimeout(function () {
              h(d + f);
            }, f);
            b = d + f;
            return g;
          };
        }
        if (!window.cancelAnimationFrame) {
          window.cancelAnimationFrame = function (d) {
            clearTimeout(d);
          };
        }
      })();
      var Point = (function () {
        function Point(x, y) {
          this.x = typeof x !== "undefined" ? x : 0;
          this.y = typeof y !== "undefined" ? y : 0;
        }
        Point.prototype.clone = function () {
          return new Point(this.x, this.y);
        };
        Point.prototype.length = function (length) {
          if (typeof length == "undefined")
            return Math.sqrt(this.x * this.x + this.y * this.y);
          this.normalize();
          this.x *= length;
          this.y *= length;
          return this;
        };
        Point.prototype.normalize = function () {
          var length = this.length();
          this.x /= length;
          this.y /= length;
          return this;
        };
        return Point;
      })();
      var Particle = (function () {
        function Particle() {
          this.position = new Point();
          this.velocity = new Point();
          this.acceleration = new Point();
          this.age = 0;
        }
        Particle.prototype.initialize = function (x, y, dx, dy) {
          this.position.x = x;
          this.position.y = y;
          this.velocity.x = dx;
          this.velocity.y = dy;
          this.acceleration.x = dx * settings.particles.effect;
          this.acceleration.y = dy * settings.particles.effect;
          this.age = 0;
        };
        Particle.prototype.update = function (deltaTime) {
          this.position.x += this.velocity.x * deltaTime;
          this.position.y += this.velocity.y * deltaTime;
          this.velocity.x += this.acceleration.x * deltaTime;
          this.velocity.y += this.acceleration.y * deltaTime;
          this.age += deltaTime;
        };
        Particle.prototype.draw = function (context, image) {
          function ease(t) {
            return --t * t * t + 1;
          }
          var size = image.width * ease(this.age / settings.particles.duration);
          context.globalAlpha = 1 - this.age / settings.particles.duration;
          context.drawImage(
            image,
            this.position.x - size / 2,
            this.position.y - size / 2,
            size,
            size
          );
        };
        return Particle;
      })();
      var ParticlePool = (function () {
        var particles,
          firstActive = 0,
          firstFree = 0,
          duration = settings.particles.duration;
 
        function ParticlePool(length) {
          particles = new Array(length);
          for (var i = 0; i < particles.length; i++)
            particles[i] = new Particle();
        }
        ParticlePool.prototype.add = function (x, y, dx, dy) {
          particles[firstFree].initialize(x, y, dx, dy);
          firstFree++;
          if (firstFree == particles.length) firstFree = 0;
          if (firstActive == firstFree) firstActive++;
          if (firstActive == particles.length) firstActive = 0;
        };
        ParticlePool.prototype.update = function (deltaTime) {
          var i;
          if (firstActive < firstFree) {
            for (i = firstActive; i < firstFree; i++)
              particles[i].update(deltaTime);
          }
          if (firstFree < firstActive) {
            for (i = firstActive; i < particles.length; i++)
              particles[i].update(deltaTime);
            for (i = 0; i < firstFree; i++) particles[i].update(deltaTime);
          }
          while (
            particles[firstActive].age >= duration &&
            firstActive != firstFree
          ) {
            firstActive++;
            if (firstActive == particles.length) firstActive = 0;
          }
        };
        ParticlePool.prototype.draw = function (context, image) {
          if (firstActive < firstFree) {
            for (i = firstActive; i < firstFree; i++)
              particles[i].draw(context, image);
          }
          if (firstFree < firstActive) {
            for (i = firstActive; i < particles.length; i++)
              particles[i].draw(context, image);
            for (i = 0; i < firstFree; i++) particles[i].draw(context, image);
          }
        };
        return ParticlePool;
      })();
      (function (canvas) {
        var context = canvas.getContext("2d"),
          particles = new ParticlePool(settings.particles.length),
          particleRate =
            settings.particles.length / settings.particles.duration, 
          time;
        function pointOnHeart(t) {
          return new Point(
            160 * Math.pow(Math.sin(t), 3),
            130 * Math.cos(t) -
              50 * Math.cos(2 * t) -
              20 * Math.cos(3 * t) -
              10 * Math.cos(4 * t) +
              25
          );
        }
        var image = (function () {
          var canvas = document.createElement("canvas"),
            context = canvas.getContext("2d");
          canvas.width = settings.particles.size;
          canvas.height = settings.particles.size;
          function to(t) {
            var point = pointOnHeart(t);
            point.x =
              settings.particles.size / 2 +
              (point.x * settings.particles.size) / 350;
            point.y =
              settings.particles.size / 2 -
              (point.y * settings.particles.size) / 350;
            return point;
          }
          context.beginPath();
          var t = -Math.PI;
          var point = to(t);
          context.moveTo(point.x, point.y);
          while (t < Math.PI) {
            t += 0.01;
            point = to(t);
            context.lineTo(point.x, point.y);
          }
          context.closePath();
          context.fillStyle = "#ea80b0";
          context.fill();
          var image = new Image();
          image.src = canvas.toDataURL();
          return image;
        })();
        function render() {
          requestAnimationFrame(render);
          var newTime = new Date().getTime() / 1000,
            deltaTime = newTime - (time || newTime);
          time = newTime;
          context.clearRect(0, 0, canvas.width, canvas.height);
          var amount = particleRate * deltaTime;
          for (var i = 0; i < amount; i++) {
            var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
            var dir = pos.clone().length(settings.particles.velocity);
            particles.add(
              canvas.width / 2 + pos.x,
              canvas.height / 2 - pos.y,
              dir.x,
              -dir.y
            );
          }
          particles.update(deltaTime);
          particles.draw(context, image);
        }
        function onResize() {
          canvas.width = canvas.clientWidth;
          canvas.height = canvas.clientHeight;
        }
        window.onresize = onResize;
        setTimeout(function () {
          onResize();
          render();
        }, 10);
      })(document.getElementById("pinkboard"));
 
    </script>
  </body>
</html>
```
### 指针时钟
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <style id="style">
        ul{
            list-style: none;
        }
        #circle{
            width: 200px;
            height: 200px;
            border-radius: 100px;
            border: 1px solid black;
        }
        #kedu li{
            width: 1px;
            height: 6px;
            border-radius: 10px;
            background-color: black;
            transform-origin: center 101px;/*设置li标签的旋转中心和旋转半径。*/
            position: absolute;
            left: 109px;
            top: 9px;
        }
        #kedu li:nth-of-type(5n+1){
            height: 12px;
            width: 2px;
        }

        /* 秒针的绘制，用transform把div绘制成线条，后面的指针都是在这样。 */
        #second{
            width: 2px;
            height: 80px;
            background-color: red;
            transform: scaleY(1);
            position: absolute;
            left: 108px;
            top: 30px;
            transform-origin: bottom; /*设置它们的旋转中心，transform-origin: bottom；意思是以它们的底部为中心旋转。*/
        }
        #min{
            width: 2px;
            height: 65px;
            background-color: gray;
            transform: scaleY(1);
            position: absolute;
            left: 108px;
            top: 45px;
            transform-origin: bottom;
        }
        #hour{
            width: 2px;
            height: 50px;
            background-color: black;
            transform: scaleY(1);
            position: absolute;
            left: 108px;
            top: 60px;
            transform-origin: bottom;
        }
        #p12{
            position: absolute;
            left: 100px;
            top: 0px;
        }
        #p3{
            position: absolute;
            left: 190px;
            top: 84px;
        }
        #p6{
            position: absolute;
            left: 105px;
            top: 165px;
        }
        #p9{
            position: absolute;
            left: 20px;
            top: 82px;
        }
    </style>
    <div id="circle">
        <ul id="kedu"></ul>
    </div>
    <div id="second"></div><!--绘制秒针-->
    <div id="min"></div><!--绘制分针-->
    <div id="hour"></div><!--绘制时针-->
    <p id="p12">12</p>
    <p id="p3">3</p>
    <p id="p6">6</p>
    <p id="p9">9</p>
    <script>
        function time(){
            let s=document.getElementById("second");//获取到时分秒的三个指针，后面用来动态让它们旋转起来。
            let m=document.getElementById("min");
            let h=document.getElementById("hour");

            //获取时间。
            let date=new Date();
            let snum=date.getSeconds();//获取现在是多少秒。
            let mnum=date.getMinutes()+snum/60;//获取现在是多少分，不能忘记加上 秒数/60。
            let hnum=date.getHours()+mnum/60; //获取现在是多少时，不能忘记加上 分钟数/60。
            
            s.style.transform=`rotate(${snum*6}deg)`;//设置的trasnform就可以让它们旋转起来，秒针时一秒旋转6度。
            m.style.transform=`rotate(${mnum*6}deg)`//分针也是一分钟旋转6度。
            h.style.transform=`rotate(${hnum*30}deg)`//这里时小时，一小时旋转30度，所以*30.
        }
        setInterval(time,100)//用计时器每100ms运行这个time函数。
    </script>
</body>
</html>
```
### 小球碰撞
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>case01</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .wrap {
            width: 800px;
            height: 300px;
            position: relative;
            margin: 0 auto;
            border: 1px solid black;
        }

        .ball {
            width: 40px;
            height: 40px;
            background-color: pink;
            border-radius: 50%;
            position: absolute;
            top: 130px;
            left: 0;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <div class="ball"></div>
    </div>
</body>
<script>

    function rand(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }


    var dBall = document.querySelector(".ball");
    var timer = null;
    var vx = 0;
    var vy = 0;
    (function () {
        vx = rand(3, 10);
        vy = rand(3, 10);

        dBall.style.left = rand(0, 760) + 'px';
        dBall.style.top = rand(0, 260) + 'px';
    })()
    timer = setInterval(function () {

        var l = dBall.offsetLeft + vx;
        var t = dBall.offsetTop + vy;

        if (t > 260) {
            t = 260;
            vy = -vy;
        }
        else if (t < 0) {
            t = 0;
            vy = -vy;
        }
        if (l > 760) {
            l = 760
            vx = -vx;
        }
        else if (l < 0) {
            l = 0;
            vx = -vx;
        }
        dBall.style.left = l + 'px';
        dBall.style.top = t + 'px';
    }, 30)


</script>

</html>
```
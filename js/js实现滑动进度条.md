## 效果图

![image.png](https://img-blog.csdnimg.cn/img_convert/a58dbad5d8fe7bb510c6655fa4bb47d6.png)
## 完整代码
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      section {
        width: 500px;
        height: 30px;
        background-color: red;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      div {
        position: relative;
        width: 90%;
        height: 50%;
        background-color: #ccc;
      }
      .jd {
        position: absolute;
        top: -104%;
        height: 100%;
        background-color: green;
      }
      .ball {
        position: absolute;
        top: -120%;
        left: -10px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-image: radial-gradient(circle, #ccc, white, #ccc);
      }
    </style>
  </head>
  <body>
    <h2>滑动滚动条</h2>
    <section>
      <div>
        <p class="jd"></p>
        <p class="ball"></p>
      </div>
    </section>

    <script>
      let section = document.querySelector("section");
      let div = document.querySelector("div");
      let jd = document.querySelector(".jd");
      let ball = document.querySelector(".ball");
      function xj(e) {
        ///获取鼠标坐标
        let x = e.pageX;
        let y = e.pageY;
        //获取父盒子左和上面距离
        let sx = div.offsetLeft;
        let sy = div.offsetTop;
        //获取小球在盒子内的坐标
        let bx = x - sx;
        let by = y - sy;
        // console.log(bx, by);
        //因为是进度条,top值不用改变,只需要bx就可以了
        //获取小球中心点
        let ce = bx - ball.offsetWidth / 2;

        //做边界判断
        if (ce < -10) {
          return;
        }
        console.log(ce);
        //获取div的长度,超出长度小球不再前进
        let divw = div.offsetWidth;
        console.log(divw);

        if (ce + 10 <= divw) {
          //更改小球left值
          ball.style.left = ce + "px";
          //更改盒子宽
          jd.style.width = ce + 15 + "px";
        }
      }
      //鼠标按下触发鼠标的move事件
      section.addEventListener("mousedown", function () {
        document.addEventListener("mousemove", xj);
      });
      //松开鼠标移除事件
      document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", xj);
      });
    </script>
  </body>
</html>

```
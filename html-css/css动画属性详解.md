> 1、animation-name ：xx   （设置关键帧的名称为xx）
> 2、animation-duration：5s  （动画持续时间为5s）
> 3、animation-timing-function： linear （动画时间曲线 也叫做运行速度为匀速）
> 取值：
> linear 匀速、  ease （默认）低速开始—>加速—>结束前减速   、
> ease-in 以低速开始、ease-out 以低速结束、ease-in-out 以低速开始和结束。
> cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
> 4、animation-delay:5s  (动画等待5后开始)
> 5、animatiom-iteration-count：1   （动画播放次数为1次）
> 取值：xx数字，定义应该播放xx次动画、 infinite-无限次执行
> 6、animation-direction： alternate（设置动画为反向播放 ）
> 取值：
> nomal（默认）-执行完一次之后回到起点继续执行下一次
> alternate-往返动画，执行完一次之后往回执行下一次
> reverse-反向执行
> 7、animation-fill-mode： （动画结束的最后一帧）
> 取值：
> none-不做任何改变
> forwards-让元素结束状态保持动画最后一帧的样式
> backwards-让元素等待状态的时候显示动画第一帧的样式
> both-等待状态显示第一帧，结束状态保持最后一帧
> 8、animation-play-state：  （设置动画是否暂停）
> 取值：running-执行动画 、paused-暂停动画
> 4、animation 简写

> ## 复合属性简写形式
> animation：动画名称 动画时长 动画运动速度 延迟时间 执行次数 往返动画
> animation：动画名称 动画时长  （有这两个即可以完成动画，其它未设置，有默认值） 

> ## 关键帧的书写
> 第一种from to
> ```html
> @keyframes swipe {
>   /* 开始 */
>  from {
>   css样式
>   }
>  to {
>   css样式
>   }
> }
> ```
> 第二种：百分比
> ```html
>  @keyframes LeftToRight {
>   0% {
>     css样式
>  }
>  50% {
>    css样式
> }
> 100% {
>  css样式
> }
> }
> 可以分多段
> ```
## 简单的滑动案例
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
      width: 100px;
      height: 100px;
      background-color: red;
      /*动画配置 */
      /* 1、设置动画名称 */
      animation-name: LeftToRight;
      /* 2、动画持续时间 */
      animation-duration: 2s;
      /* 3、动画执行速度 */
      animation-timing-function: linear;
      /* 4、等待时长 */
      /* animation-delay: 2s; */
      /* 5、设置动画播放次数 */
      animation-iteration-count: infinite;
      /* 6、设置动画是否反向播放 */
      animation-direction: alternate;
      /* 7、动画结束时应用最后一帧 */
      animation-fill-mode: forwards;
      /* animation: name duration timing-function delay iteration-count direction fill-mode; */
    }
 
    /* 动画关键帧 */
    div:hover {
      /* 设置动画是否暂停*/
      animation-play-state: paused;
    }
 
    @keyframes LeftToRight {
      0% {
        margin-left: 0px;
      }
 
      25% {
        margin-left: 200px;
      }
 
      50% {
        margin-left: 300px;
      }
 
      75% {
        margin-left: 500px;
      }
 
      100% {
        margin-left: 1000px;
      }
    }
  </style>
 
</head>
 
<body>
  <div>
 
  </div>
 
</body>
 
</html>
```
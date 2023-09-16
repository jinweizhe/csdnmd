```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        ul,
        ol {
            list-style: none;
        }

        .box {
            width: 800px;
            height: 500px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
            box-shadow: 2px 2px 15px #333;
        }

        ul {
            height: 100%;
            position: absolute;
            display: flex;
        }

        li,
        li>img {
            width: 800px;
            height: 100%;
        }

        button {
            width: 70px;
            height: 50px;
            position: absolute;
            z-index: 10;
            top: calc(50% - 25px);
            font-size: 16px;
            opacity: 0;
            transition: all .5s;
        }

        .right {
            right: 0;
        }

        .box:hover button {
            opacity: 1;
        }

        ol {
            width: 120px;
            margin: 0 auto;
            position: absolute;
            bottom: 20px;
            left: calc(50% - 60px);
            display: flex;
            justify-content: space-between;
        }

        ol li {
            width: 10px;
            height: 10px;
            background-color: gray;
            border-radius: 5px;
        }

        .ac {
            width: 25px;
            background-color: blue;
            transition: all 1s;
        }
    </style>
</head>

<body>
    <div class="box">
        <ul>
            <!-- <li><img src="../../../01-JQuary练习/jq学习/images/棉服.jpg" alt=""></li> -->
            <li><img class="activeImg" src="../../../01-JQuary练习/jq学习/images/冬裙.jpg" alt=""></li>
            <li><img src="../../../01-JQuary练习/jq学习/images/呢大衣.jpg" alt=""></li>
            <li><img src="../../../01-JQuary练习/jq学习/images/围巾.jpg" alt=""></li>
            <li><img src="../../../01-JQuary练习/jq学习/images/女包.jpg" alt=""></li>
            <li><img src="../../../01-JQuary练习/jq学习/images/棉服.jpg" alt=""></li>
            <li><img class="activeImg" src="../../../01-JQuary练习/jq学习/images/冬裙.jpg" alt=""></li>
        </ul>
        <button class="left">left</button>
        <button class="right">right</button>
        <ol class="dots">
            <li class="ac"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>

    <script>
        let width = $("img").width();
        console.log(width);//800,img标签的宽
        let index = 0;//记录当前图片的下标
        let imglen = $("img").length - 1;//图片个数
        console.log(imglen);
        let timer;//记录定时器
        let flag = false;//自动轮播的记录节流阀

        //小圆点排他方法
        function dotCHange(index) {
            $("ol li").removeClass("ac");
            $("ol li").eq(index).addClass("ac")
        }

        //自动播放
        function play() {
            if (flag) {
                return;//如果动画尚未结束,不给点击
            }
            flag = true;//能往下执行,表示接下来有动画开始了
            index++;//-1*800/-2*800
            //边界判断
            if (index == imglen) {
                $("ul").animate({
                    left: -index * width
                }, 1000, function () {
                    //最后一张图片动画执行完成时,立即闪现\瞬移到第一张图片
                    $("ul").css("left", 0)
                    flag = false;
                })
                index = 0//初始化
            } else {
                $("ul").animate({
                    left: -index * width
                }, 1000, function () {
                    flag = false;
                })
            }

            //小圆圈判断
            dotCHange(index)
        }
        timer = setInterval(play, 1000)


        $(".box").hover(function () {
            clearInterval(timer);
            timer = null;
        }, function () {
            timer = setInterval(play, 1000)
        })


        //点击圆点切换图片
        $("ol li").click(function () {
            let dotidx = $(this).index();//获取当前下标
            index = dotidx;//将点击的位置作为当前下标
            console.log(dotidx);
            $("ul").stop().animate({//根据下标显示对应图片
                left: -dotidx * width
            }, 1000)
            dotCHange(dotidx)//排他
        })


        //右键点击
        $(".right").on("click", function () {
            play();
        })

        //左键点击
        $(".left").on("click", function () {
            if (flag) {
                return;//如果动画尚未结束,不给点击
            }
            flag = true;//能往下执行,表示接下来有动画开始了

            index--;//假设下标为0,要显示最后一张
            if (index < 0) {
                index = imglen - 1;
                //如果当前是第一张图片，需要瞬移到倒数第―张图片(因为第一张和倒数第一图片相同)
                $("ul").css("left", -imglen * width);
                $("ul").animate({//根据下标显示对应图片
                    left: -index * width
                }, 1000, function () {
                    flag = false
                })
            } else {
                $("ul").animate({//根据下标显示对应图片
                    left: -index * width
                }, 1000, function () {
                    flag = false
                })
            }
            dotCHange(index)//切换选中圆点
        })
    </script>
</body>

</html>
```


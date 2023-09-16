![
](https://img-blog.csdnimg.cn/a91b39aba3364c58858fa4c2e27e4308.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/8847eee173b24d60870fd57cf9273738.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 先隐藏多选框 */
        .xiaoji-offscreen{
            display: none;
        }
        /* 将label做成一个椭圆形 */
        .xiaoji-switch{
            position: relative;
            display: inline-block;
            width: 40px;
            height: 20px;
            background-color: #ccc;
            border-radius: 20px;
            transition: all 0.3s;
        }
        /* 做开关的圆形 */
        .xiaoji-switch::after{
            content: "";
            position: absolute;
            width: 18px;
            height: 18px;
            border-radius: 18px;
            background-color: #fff;
            top: 1px;
            left: 1px;
            transition: all 0.3s;
        }
        /* 当复选框选中时,改变圆圈位置并改变背景 */
        input[type="checkbox"]:checked+.xiaoji-switch::after{
            transform: translateX(20px);
        }
        input[type="checkbox"]:checked+.xiaoji-switch{
            background-color: #7983ff;
        }
    </style>
</head>
<body>
    <form>
        <input type="checkbox" name="" id="toggle" class="xiaoji-offscreen">
        <!-- 因为上面要用到相邻兄弟选择器,只能找下个兄弟,所以label放到多选框后面,顺序不可变 -->
        <label for="toggle" class="xiaoji-switch"></label>
    </form>
</body>
</html>
```
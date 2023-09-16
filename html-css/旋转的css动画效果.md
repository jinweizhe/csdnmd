[需要补习动画属性的可以查看这个文章](https://blog.csdn.net/weixin_68658847/article/details/128875495?csdn_share_tail=%7B%22type%22:%22blog%22,%22rType%22:%22article%22,%22rId%22:%22128875495%22,%22source%22:%22weixin_68658847%22%7D)

## 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/76b0890267e74e6bbc5ab0bcd669a0e0.png)
## css旋转代码
```html
	.image {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            //定义动画名,持续时间,动画状态,以及持续运行
            animation: rotate 15s infinite linear;
            //控制暂停和播放
            animation-play-state: play;
        }

        @keyframes rotate {
            form {
                transform: rotate(0);
            }

            to {
                transform: rotate(360deg);
            }
```
@[toc](目录)
# VUE实例的组件的生命周期和数据共享
**生命周期和生命周期函数**
[这个是我学校vue书籍阿里云盘地址,有需要可以点击看看](https://www.aliyundrive.com/drive/folder/6385bcc0e8d7e715effc4a75af50781adc31c50a)

> 生命周期（Life Cycle）是指一个组件从创建 -> 运行 -> 销毁的整个阶段，强调的是一个时间段。
> 生命周期函数：是由 vue 框架提供的内置函数，会伴随着组件的生命周期，自动按次序执行。
> 注意：生命周期强调的是时间段，生命周期函数强调的是时间点。
> ![在这里插入图片描述](https://img-blog.csdnimg.cn/36adf0e1129148788a8926e161544271.png)

可以参考vue官方文档给出的“生命周期图示”，进一步理解组件生命周期执行的过程:https://cn.vuejs.org/v2/guide/instance.html生命周期图示
**下面是官网粘贴过来的图示,在这里做了一些笔记,可以更直观了解创建过程**
![在这里插入图片描述](https://img-blog.csdnimg.cn/13d34ec3abab482881ccca4d1c21c191.png)
# 组件间的数据共享
![在这里插入图片描述](https://img-blog.csdnimg.cn/7f2820ef111a44fe861891421dceeea5.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/5d3dfe495d6147448e7b9451c10a1e46.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/122133c88db7406e92e791ba841cf19c.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/7c59b35136384348aa997b59b8154df9.png)
**当有多个数据要传递给父组件时,需要通过对象去包装数据,格式如下:**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20e3c5d0418c41d9a7447302a970c9ec.png)
父组件接收方式同上
![在这里插入图片描述](https://img-blog.csdnimg.cn/033c8c1276b142d2a77f69a905bbfc10.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/3498ca9308e149b98a8f6b57d7d61159.png)
以下是打印结果
![在这里插入图片描述](https://img-blog.csdnimg.cn/895b676f7dde413baa77a48ce70e9b46.png)



![在这里插入图片描述](https://img-blog.csdnimg.cn/c742f54d512b400b80f2ad0a11bf1506.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9c17b5e2b19845318722a6cf37bf0cf8.png)

# ref的使用方法
## 使用ref操作dom
![在这里插入图片描述](https://img-blog.csdnimg.cn/f2d7e9583b9244a1883ada219bb38ffd.png)
## 使用ref引用组件

> 看到这的时候,前面共享数据就可以放弃了,因为这个引用组件就可以包含所有的组件数据,直接可以拿来共享使用

![在这里插入图片描述](https://img-blog.csdnimg.cn/8783dbfa34094cf48e14a608f97b1c30.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/93bc96b9ca0a480cb0f79764b3d7562d.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/a2a5b6662d7c4604b3df9bce9e687bd9.png)
**但是上面这一步会报错undefined,原因是页面更新为输入框显示时,为beforeupdate生命周期阶段,此时页面元素还未渲染,在这里是拿不到标签元素的,具体解决方法参考下一页**

### this.$nextTick(cb)方法的使用

> 使用场景:当某些代码需要延迟到dom重新渲染以后再去执行时可以使用

![在这里插入图片描述](https://img-blog.csdnimg.cn/229250bab4b2471f8ee9d696f6af656e.png)
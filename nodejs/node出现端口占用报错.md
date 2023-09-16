 出现：Error: listen EADDRINUSE: address already in use :::80报错
或者以下错误，都是端口占用报错
![在这里插入图片描述](https://img-blog.csdnimg.cn/0caf117b28644200a6673f90c2425e9a.png)

解决方法：

1.win+R调出命令终端，输入cmd

2.输入
```
netstat -ano | findstr 80
```

3.找到80端口占的pid
![在这里插入图片描述](https://img-blog.csdnimg.cn/e9e40f82036a4191b475e8c1c76bb281.png)


4.执行关闭命令
```
taskkill  /f -pid 40972          //后面这个数字是上面对应的pid
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/6cf9fa49bda24aea936da2994cd8be80.png)
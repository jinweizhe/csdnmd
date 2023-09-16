# 初识 Nodejs
[本人参考此链接笔记内容，后面笔记不再同步，直接参考这个](https://brucecai55520.gitee.io/bruceblog/notes/nodejs/node.html#%E5%88%9D%E8%AF%86-nodejs)

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
> Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时环境

 - 基于 Express 框架 (opens new window)，可以快速构建 Web 应用
- 基于 Electron 框架 (opens new window)，可以构建跨平台的桌面应用
- 基于 restify 框架 (opens new window)，可以快速构建 API 接口项目
- 读写和操作数据库、创建实用的命令行工具辅助前端开发、etc…
# Buffer 缓冲区
[Buffer 缓冲区文档](http://nodejs.cn/api/buffer.html)
- Buffer 的结构与数组类似，操作方法也与数组类似
- 数组不能存储二进制文件，Buffer 是专门存储二进制数据的
- Buffer 存储的是二进制数据，显示时以 16 进制的形式显示
- Buffer 每一个元素范围是  00 ~ ff，即  0 ~ 255、00000000~11111111
- 每一个元素占用一个字节内存
- Buffer 是对底层内存的直接操作，因此大小一旦确定就不能修改
Buffer 常用方法：
- Buffer.from(str[, encoding])：将一个字符串转换为 Buffer
- Buffer.alloc(size)：创建指定大小的 Buffer
- Buffer.alloUnsafe(size)：创建指定大小的 Buffer，可能包含敏感数据（分配内存时不会清除内存残留的数据）
- buf.toString()：将 Buffer 数据转为字符串
```cmd
var str = 'Hello前端'

var buf = Buffer.from(str)

// 占用内存的大小，一个汉字3字节 13
console.log(buf.length)
// 字符串的长度 7
console.log(str.length)
// 8进制输出第一个元素 145
console.log(buf[1].toString(8))

//创建一个10个字节的buffer
var buf2 = Buffer.alloc(10)
//通过索引，来操作buf中的元素
buf2[0] = 88
buf2[1] = 255
buf2[2] = 0xaa
buf2[3] = 255

var buf3 = Buffer.allocUnsafe(10)
console.log(buf3)
```
# fs 文件系统模块
> fs 模块是Node.,js官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。例如:
> fs.readFile(方法，用来读取指定文件中的内容
> fs.writeFile(方法，用来向指定的文件中写入内容

> 如果要在JavaScript代码中，使用fs模块来操作文件，则需要使用如下的方式先导入它:
> const fs = require('fs')


- fs 模块中所有的操作都有两种形式可供选择:同步和异步
- 同步文件系统会阻塞程序的执行，也就是除非操作完毕，否则不会向下执行代码
- 异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回
- 实际开发很少用同步方式，因此只介绍异步方式
打开模式：
![在这里插入图片描述](https://img-blog.csdnimg.cn/f93b8a454a0f411abb5c9da081f62b17.png)
## 读取指定文件内容
语法格式：
```cmd
fs.readFile(path[, options], callback)
```
被中括号包裹的是可选参数，否则为必选，这里有两个必选项
path：文件路径
options：配置选项，若是字符串则指定编码格式
encoding：编码格式
flag：打开方式
callback：回调函数
err：错误信息
data：读取的数据，如果未指定编码格式则返回一个 Buffer
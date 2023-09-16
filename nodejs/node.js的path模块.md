```js
//node中有两个和路径相关的全局变量:__filename,__diename
//__获取当前运行脚本(模块)的名字,返回值是当前模块的完整路径
console.log("__filename",__filename);

//__dirname获取当前运行脚本(模块)的所在目录,返回值是当前模块所在目录的完整路径
console.log("__dirname",__dirname);

//路径分相对路径和绝对路径
//相对路径:不完整的路径，只记录了结尾部分的路径，忽略了开始的盘符和顶层若干层目录
//绝对路径:是完整的路径，以盘符开头，完整的表示出本文件所有的上层目录
//__filename是获取当前运行模块文件的绝对路径
//__dirname谁获取当前运行模块目录的绝对路径

//导入node的path路径模块,__dirname表示当前文件所处的目录
const path = require("path")

//路径拼接
console.log(path.join(__dirname,"text","index.html"));

//获取文件名
console.log(path.basename("./text/1.txt"));

//获取文件扩展名
console.log(path.extname("./web/index.html"));

//获取文件所在的目录相对路径
console.log(path.dirname("./web/index.html"));

//获取文件所在的目录的绝对路径
console.log(path.dirname(path.join(__dirname,"./web/index.html")));

//判断路径是否绝对路径,返回布尔值
console.log(path.isAbsolute("./text/1.txt"));//false
console.log(path.isAbsolute("E:/前端所有笔记/node.js学习/05-聚才课程/path模块/text/index.html"));//true
console.log(path.isAbsolute(path.join(__dirname,"text","index.html")));//true
```
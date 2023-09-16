// file 文件
// directory 目录，文件夹
// path 路径

// node中有两个和路径相关的全局变量：__filename  __dirname
// __filename 获取当前运行脚本（模块）的名字，返回值是当前模块的完整路径
console.log('__filename=', __filename);
// C:\Users\Jinxizhen\Desktop\path模块\app.js

// __dirname 获取当前脚本（模块）所在目录，返回值是当前模块的目录的完整路径
console.log('__dirname=', __dirname);
// C:\Users\Jinxizhen\Desktop\path模块

// path 是node中内置的模块，专门用来处理文件或者文件夹路径的
var path = require('path');
var fs = require('fs');

// 路径分相对路径 和 绝对路径
// 相对路径：不完整的路径，只记录了结尾部分的路径，忽略了开的的盘符和顶层若干层目录。
// 绝对路径：是完整的路径，以盘符开头，完整的表示出本文件所有的上层目录。

// __filename 是获取当前运行模块文件的绝对路径
// __dirname 是获取当前运行模块目录的绝对路径

// C:\Users\Jinxizhen\Desktop\path模块\text\1.txt
// text\1.txt

// path.join(路径1，路径2，路径3，...) 把多个路径拼接在一起：拼接的路径可以是目录，也可以是文件
console.log(path.join('text', 'a'));
console.log(path.join(__dirname, 'text', 'a'));
// C:\Users\Jinxizhen\Desktop\path模块\text\a
console.log(path.join(__dirname, 'views'));//C:\Users\Jinxizhen\Desktop\path模块\views

// 获取文件名，包含扩展名
console.log(path.basename('./views/index.html'));// index.html
// 获取扩展名
console.log(path.extname('./views/index.html'));// .html
// 获取文件所在的目录路径
console.log(path.dirname('./views/index.html'));// ./views
console.log(path.dirname(path.join(__dirname, 'views/index.html')));// C:\Users\Jinxizhen\Desktop\path模块\views

// 把路径转为绝对路径
console.log(path.resolve('./views/index.html'));//C:\Users\Jinxizhen\Desktop\path模块\views\index.html
// 判断一个路径是否是绝对路径
console.log(path.isAbsolute('./views/index.html'));// false
console.log(path.isAbsolute('C:/Users/Jinxizhen/Desktop/path模块/views/index.html'));// true
console.log(path.isAbsolute(path.join(__dirname, 'views/index.html')));// true




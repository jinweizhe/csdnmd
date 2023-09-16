// 一个指令安装多个模块：在安装指令中直接写多个模块的名字，名字之间使用空格分隔
// npm i -S express art-template express-art-template

// 模块：
// 1、内置模块；
// 内置模块是由Node.js 官方提供的模块，内置模块的加载优先级最高。
// 例如 require('fs')始终返回内置的fs模块，即使在node_modules目录下有名字相同的包也叫做fs。

// 2、自定义模块；
// 使用require()加载自定义模块时，必须指定以./或../开头的路径标识符。在加载自定义模块时，如果没有指定./或../这样的路径标识符，则node 会把它当作内置模块或第三方模块进行加载。

// 3、第三方模块(需要安装才能使用)
// 如果传递给require()的模块标识符不是一个内置模块，也没有以./或../开头，则Nodejs 会从当前模块的父目录开始，尝试从node_modules 文件夹中加载第三方模块。
// 如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。
// 比如加载express会按照以下顺序查找express模块
// 1、C:\Users\Jinxizhen\Desktop\模板引擎\node_modules\express
// 2、C:\Users\Jinxizhen\Desktop\node_modules\express
// 3、C:\Users\Jinxizhen\node_modules\express
// 4、C:\Users\node_modules\express
// 5、C:\node_modules\express

var express = require('express');
// var path = require('path');

// console.log(__dirname);// C:\Users\Jinxizhen\Desktop\模板引擎

// 使用require导入一个目录
// 1、如果该tools目录下没有package.json文件，默认会加载tools目录下的index.js模块
// 2、如果该tools目录下有package.json文件，会加载package.json文件中main选项指定的文件
var tools = require('./tools');
// var tools = require('./tools/index');
// var tools = require('./tools/num');

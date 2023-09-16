// node的内置模块，无需安装，可以直接使用
// 在node中有很多内置模块，fs模块就是一个内置模块
// fs 文件系统，提供了对文件及文件夹的操作能力：创建、复制、写入数据、重命名、删除等操作

var fs = require('fs');

// 同步函数
// var res = fs.readFileSync('./a.txt', 'utf-8');
// console.log('res = ', res);

// 异步函数
// fs.readFile('./a.txt', 'utf-8', function (err, data) {
//   var res = data;
//   console.log('data = ', data);
//   console.log('res=', res);

//   console.log(res.split(' '));
// });

// 1、创建文件并并入数据
// 参数1：文件路径，文本类型的文件都可以用：.txt .html .css .js .json；参数2：写入文件的数据
// 如果文件不存在，会先创建文件并写入数据；如果文件存在，覆盖文件
fs.writeFileSync('1.txt', 'hello 你好 888888');
// fs.writeFile('aa/2.txt', 'hello 2222', function (err) {
//   // err 写入文件报错的原因，未报错时，err的值为null
//   console.log(err);
// });

// 2、读取文件
// 参数1：文件路径；参数2：编码格式 utf-8
// var res = fs.readFileSync('1.txt', 'utf-8');
// console.log(res);
// err 报错的原因，未报错时，err的值为null
// data 读取的数据
fs.readFile('1.txt', 'utf-8', function (err, data) {
	// console.log('data=', data);
	// console.log('err=', err);
});

// 判断文件或者文件夹是否存在
// console.log(fs.existsSync('1.txt'));
// console.log(fs.existsSync('src'));

// 3、创建文件夹，文件夹不能重复创建
// 当文件不存在的时候再去创建文件夹
if (!fs.existsSync('src')) {
	fs.mkdirSync('src');
}

fs.writeFileSync('src/1.txt', 'hello 你好 888888');

// 复制文件
// 参数1：原文件；参数2：复制出的文件
// fs.copyFileSync('1.txt', '101.txt');
// fs.copyFileSync('src/1.txt', '102.txt');

// 删除文件
// fs.unlinkSync('1.txt');// 文件可以直接删除
// fs.unlinkSync('src');// 非空文件夹不能直接删除

// -----------------------------------------------------------------
var data = fs.readFileSync('data.json', 'utf-8');
console.log('data=', data);

console.log(JSON.parse(data));

var data = JSON.parse(data);

var imgurl = 'http://api.map.baidu.com/images/weather/day/duoyun.png';

var str = '';
str += `
<!DOCTYPE html>
<html lang="zh-CN">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<meta name="author" content="金西振" />
		<title></title>
    <style>
      li{
        color: red;
      }
  </style>
	</head>
	<body>  
`;

str += `<h1>名单</h1>`;
str += `<ul>`;  
for (var i = 0; i < data.length; i++){
  var user = data[i];
  str += `<li>姓名：${user.name}  年龄：${user.age}</li>`;
}
str += `</ul>`

str += `<img src="${imgurl}">`

str += `
  </body>
</html>`;
fs.writeFileSync('a.html', str);

console.log('入口文件');

// 模块化：
// 模块：一个文件就是一个模块
// 模块化规范commonJS
// 导入：require('路径+模块名 或者 模块名')：会执行该模块的代码，并可以用一个变量接收模块导出的数据
// 导出：module.exports = {}

// var ma = require('./a');
// console.log('ma=', ma);

// console.log(module.exports);

var fs = require('fs');
// console.log(fs);

// fs.writeFileSync()
// 同步
// var res = fs.readFileSync('a.js');
// console.log(res.toString());

// var res = '';
// fs.readFile('a.js', 'utf-8', function (err, data) {
//   // console.log(data);
//   res = data;
//   // 对数据的处理
// })

// console.log('res=',res);

// var a1 = fs.readFileSync('1.txt', 'utf-8');
// var a2 = fs.readFileSync('2.txt', 'utf-8');
// var a3 = fs.readFileSync('3.txt', 'utf-8');
// console.log(a1+a2+a3);

// fs.readFile('1.txt', 'utf-8', function (err, data1) {
// 	console.log('1=', data1);
// 	fs.readFile('2.txt', 'utf-8', function (err, data2) {
// 		console.log('2=', data2);
// 		fs.readFile('3.txt', 'utf-8', function (err, data3) {
//       console.log('3=', data3);
      
//       console.log(data1,data2,data3);
// 		});
// 	});
// });



var data = [
  { name: '张三', age: 22, single: true },
  { name: '李四', age: 20, single: false },
  { name: '王五', age: 21, single: true },
];
// 如果是对象和数组类型的值，写入文件的时候，需要把值转为字符串类型
fs.writeFileSync('data1.json', JSON.stringify(data));
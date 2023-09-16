var fs = require('fs');

// 同步执行：结果使用函数返回值获取
// let r1 = fs.readFileSync('1.txt', 'utf-8');
// let r2 = fs.readFileSync('2.txt', 'utf-8');
// let r3 = fs.readFileSync('3.txt', 'utf-8');
// console.log(r1, r2, r3);

// 异步执行：使用回调函数获取
// 多层的函数嵌套容易形成回调地狱
// 回调地狱的弊端：
// 1、嵌套层数太多，容易混乱
// 2、只能在最内层处理数据，不能把数据拿出来使用

let res = '';
fs.readFile('1.txt', 'utf-8', function (err, data1) {
	res += data1;
	fs.readFile('2.txt', 'utf-8', function (err, data2) {
		res += data2;
		fs.readFile('3.txt', 'utf-8', function (err, data3) {
			res += data3;
			// console.log(data1, data2, data3);
			// console.log('res=', res);
		});
	});
});

console.log('其他操作');
console.log('res===', res);

// 在ES6中增加了 Promise，用来处理异步操作
// 用Promise封装一个读文件的函数

// 封装函数一定要返回Promise对象
// 在函数中当异步操作成功：调用resolve函数
// 当异步操作失败，调用reject函数
function readFile(filepath) {
	const promise = new Promise(function (resolve, reject) {
		fs.readFile(filepath, 'utf-8', function (err, data) {
			if (err) {
        // 读文件失败
        reject(err);
      } else {
        // 读文件成功
        resolve(data);
      }
		});
  });
  
	return promise;

	// return new Promise();
}

// const p = readFile('11.txt');
// p.then(function (data) {
// 	console.log('data=', data);
// }).catch(function (err) {
// 	console.log('err=', err);
// });


// readFile('1.txt').then(function (data1) {
//   readFile('2.txt').then(function (data2) {
//     readFile('3.txt').then(function (data3) {
//       console.log(data1, data2, data3);
//     });
//   });
// });

// 回调函数

let nums = [2, -3, -4, 5, 6, 7];
// let res = nums.find(function (item) {
// 	return item < 0;
// });
// console.log(res);

// function find (fn) {
//   for(let i = 0; i < nums.length; i++){
//     fn(nums[i]);
//   }
// }

// find(function (item) {
// 	console.log('item=', item);
// });

// function find(fn) {
// 	fn(100);
// }

var fs = require('fs');

// fs.readFile('1.txt', 'utf-8', function (err, data1) {
// 	fs.readFile(data1, 'utf-8', function (err, data2) {
// 		fs.readFile(data2, 'utf-8', function (err, data3) {
// 			console.log(data3);
// 		});
// 	});
// });
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
}

let p1 = readFile('1.txt1');
// 在前一个then函数中返回一个promise对象p2，后一个then函数要等待前面的promise对象p2变为成功状态之后执行
// 如果有哪一层promise对象的状态变为失败，立即结束链式调用执行最后的catch
// 这种方式可以避免深层次的嵌套
p1
  .then(data1 => {
    console.log('data1=', data1);
    let p2 = readFile(data1);
    return p2;
  })
	.then(data2 => {
		console.log('data2=', data2);
		let p3 = readFile(data2);
		return p3;
	})
	.then(data3 => {
		console.log('data3=', data3);
	})
	.catch(err => {
		console.log(err);
	});

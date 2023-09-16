console.log('a 文件 执行');

var a = 2;
var b = 3;
var c = a + b;
console.log('c=', c);

var add = function (x, y) {
	return x + y;
};

// module.exports 的等号右边的值 是什么，ma的值就是什么
module.exports = {
	a: a,
	b: b,
	add: add,
};

// module.exports = {}
// module.exports = 123;
// module.exports = function () {
//   console.log('-----');
// }
// var data = {
//   a: a,
//   b: b,
//   add: add,
// };
// module.exports = data;

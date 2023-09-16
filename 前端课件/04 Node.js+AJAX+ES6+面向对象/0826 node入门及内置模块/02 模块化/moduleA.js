console.log('模块A');

// var a = 10;
// console.log('a=',a);

// 导出模块数据使用module.exports，默认情况下module.exports指向一个空对象{}
// 在一个模块内不使用module.exports，默认就是导出这个空对象{ }
// module.exports = {} // 这句话写和不写作用一样的，表示当前模块导出的是一个空对象，需要给这个对象添加一些数据
// 给module.exports的对象添加属性和方法，添加的这些属性和方法就是当前模块导出的数据
// data就是模块导出的数据，使用require导入该模块的时候，可以使用一个变量ma来接收该模块导出的数据data
// var data = {
// 	v1: 10,
//   v2: 20,
//   v3: [1, 2, 3, 4],
//   fn: function (n) {
//     console.log('fn函数',n);
//     return '99'
//   }
// }
// // var data = 100;
// // var data = [1, 2, 3, 4];
// // var data = function (){}
// module.exports = data;

var fn = function () {
  //
}
module.exports = {
  fn: fn
}

// module.exports = function (){}


// module.exports的值默认是{}，给这个花括号加属性并赋值
// module.exports.num = 100;
// module.exports.fn = function () { }

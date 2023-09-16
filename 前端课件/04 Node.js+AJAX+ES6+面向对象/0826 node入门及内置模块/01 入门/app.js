// 在node环境中，可以使用JS基础的API：变量、运算符、流程控制语句、函数、内置对象（Object、Array、String、Boolean、Date、Math、RegExp等）

var a = 2;
// console.log('a=', a);

for (var i = 0; i < 10; i++) {
	// console.log('i=', i);
}

var arr = [1, 2, 3];
arr.forEach(function (item) {
	// console.log(item);
});

// 和浏览器相关的DOM和BOM都不能在node环境中使用

// alert(123);
// console.log(window);
// var div = document.createElement('div');


// node环境的this
// 在函数中this指向global对象
// global是node环境的全局对象，类似浏览器环境的window，但是，在js文件中声明的变量不会成为global对象的属性
fn();
function fn () {
  console.log(this == global);
}
global.num = 100;

var zs = {
  name: '张三',
  say: function () {
    console.log(this);
  }
};
zs.say();


// process当前进程的信息：node的版本、路径、运行时参数等
// console.log(process);
// argv 获取运行js文件时传递的参数，得到的是一个数组
// 第一个元素的值是node的安装路径
// 第二个元素的值是当前运行的JS文件的路径
// 从第三个参数开始，是执行JS文件时传递的参数，参数可以传递多个，比如：node app 100 200
console.log(process.argv);

for(var i = 0; i < process.argv[2]; i++){
  console.log(i);
}

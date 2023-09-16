// 第一步：导入mongoose模块，使用mongoose连接mongoDB数据库，并创建模型对象操作数据库
const mongoose = require('mongoose');

// 第二步：连接数据库
// mongoose.connect()连接数据库的函数
// 参数1：数据库的url地址: mongodb://127.0.0.1:27017/是数据库地址，h21是数据库名，如果不存在会自动创建
// 参数2：配置对象
// 参数2：连接完毕的回调函数，如果err存在说明连接失败
mongoose.connect('mongodb://127.0.0.1:27017/h21', {}, err => {
	if (err) {
		console.log('数据库连接失败：', err);
	} else {
		console.log('数据库连接成功');
	}
});

module.exports = mongoose;
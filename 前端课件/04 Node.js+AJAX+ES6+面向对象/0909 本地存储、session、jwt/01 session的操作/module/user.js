
const mongoose = require('./db');

// 第三步：创建数据库模型对象
// Schema 是数据的描述对象，描述了数据库集合中每个字段的数据类型，mongoDB支持的数据类型有：String Number Boolean Array Buffer Date ObjectId Mixed
// 约定数据库集合中可以存储：username，age，sex这三个字段，并且还规定字段的类型
const stuSchema = new mongoose.Schema({
	username: String,
  password: String,
  age: Number,
  sex: String,
  major: String,
  hobby: Array
});
// 根据数据描述对象创建数据库模型对象
// 参数1：是数据库集合名
// 参数2：是数据的描述对象
// 使用数据库模型对象 Student 就可以对数据库进行增删改查
const User = mongoose.model('user', stuSchema);

module.exports = User;
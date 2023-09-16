const express = require('express');
const app = express();
app.use(express.static('public'));

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

// 第三步：创建数据库模型对象
// Schema 是数据的描述对象，描述了数据库集合中每个字段的数据类型，mongoDB支持的数据类型有：String Number Boolean Array Buffer Date ObjectId Mixed
// 约定数据库集合中可以存储：username，age，sex这三个字段，并且还规定字段的类型
const stuSchema = new mongoose.Schema({
	username: String,
	age: Number,
	sex: String,
});
// 根据数据描述对象创建数据库模型对象
// 参数1：是数据库集合名
// 参数2：是数据的描述对象
// 使用数据库模型对象 Student 就可以对数据库进行增删改查
const Student = mongoose.model('stus', stuSchema);

// 第四步：数据库的CURD: 增删改查

// 1、增加数据
app.get('/save', (req, res) => {
	// 存储数据的时候，要根据描述对象中添加了哪些字段名：username，age，sex，根据字段名存储数据，字段名可以少写，不能多写
	const stu = new Student({
		username: req.query.username,
		age: req.query.age,
		sex: req.query.sex,
	});
	// save()是保存数据的方法
	stu.save(err => {
		if (err) {
			res.json({ error: 1, data: '保存数据失败' });
		} else {
			res.json({ error: 0, data: '保存数据成功' });
		}
	});
});

// 2、删除数据
app.get('/delete', (req, res) => {
	// Student.deleteMany 删除多条数据
	// Student.deleteOne 删除一条数据
	Student.deleteOne({ username: req.query.username })
		.exec()
		.then(() => {
			res.json({ error: 0, data: '删除数据成功' });
		})
		.catch(err => {
			res.json({ error: 1, data: '删除数据失败' });
		});
});

// 3、数据查找
app.get('/find', (req, res) => {
	// 参数1：查找的条件，比如：{ username:'张三' } 根据username查找值为张三的数据，如果没有条件，直接写空对象{}
	// 参数2：查找完毕的回调函数，查找成功err为null数据放在data中：find的data是一个数组、findOne的data是一个对象；查找失败err就是错误原因
	// Student.find({}, function(err, data){}) 找到数据库集合中多条数据，返回的结果是一个数组（即使是一条数据，也是一个数组）
	// Student.findOne({}, function(err, data){}) 找到数据库集合中的某一条数据，返回结果是一个对象 或者 null

	// 添加查找条件
	const condition = {};
	if (req.query.username) {
		condition.username = req.query.username;
	}
	console.log('查找条件：', condition);

	// Student.find(condition, (err, data) => {
	// 	console.log(err, JSON.parse(JSON.stringify(data)));
	// 	if (err) {
	// 		res.json({ error: 1, data: '查找数据失败' });
	// 	} else {
	// 		res.json({ error: 0, data: JSON.parse(JSON.stringify(data)) });
	// 	}
	// })
	// .limit(2).skip(1)
	// .sort({ age: -1 });
	// 链式调用的查询方式
	// Student.find().limit().skip().sort() 会返回一个查询对象，并有执行查询的操作，只是记录的查询的条件，调用exec函数执行具体的查询操作
	// Student
	//   .find(condition)
	// .limit(2)  // 限制每次查询的数据有多少条
	// .skip(1)  // 跳过几条数据
	// .sort({age:1}) // 按照age排序，1正序从小到大，-1 倒序
	// .exec((err, data) => {
	//   res.json({ error: 0, data: JSON.parse(JSON.stringify(data)) });
	// });

	// 查询对象支持promise的操作，then获取成功的结果，catch获取失败的结果
	Student.find(condition)
		.exec()
		.then(data => {
			// 查询成功
			res.json({ error: 0, data: JSON.parse(JSON.stringify(data)) });
		})
		.catch(err => {
			// 查询失败
		});
});

// 4、修改数据
app.get('/update', (req, res) => {
	// Student.updateMany 修改多条数据
	// Student.updateOne 修改一条数据
  // Student.updateOne({查找的条件}, {新的数据})
	Student.updateOne({ username: req.query.username }, {age: req.query.age})
		.exec()
		.then(() => {
			res.json({ error: 0, data: '修改数据成功' });
		})
		.catch(err => {
			res.json({ error: 1, data: '修改数据失败' });
		});
});

// 5、查询数据的条数
app.get('/count', (req, res) => {
  const condition = {};
	if (req.query.username) {
		condition.username = req.query.username;
	}
	console.log('查找条件：', condition);
  Student.countDocuments(condition).exec().then(count => {
    res.json({error:0, data: count})
  });
})

app.listen(3000, () => console.log('running 3000'));

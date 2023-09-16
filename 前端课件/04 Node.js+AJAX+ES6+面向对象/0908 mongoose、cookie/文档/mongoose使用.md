# 介绍

Mongoose 在nodejs环境中对MongoDB数据库操作的封装，一种对象模型工具，可以将数据库中的数据转换为JavaScript对象供我们使用。

Mongoose 中文文档：http://www.mongoosejs.net/

# 安装与使用

在nodejs中使用 mongoose 

## **第一步**：安装mongoose

```
npm install mongoose --save
```

## **第二步**：导入mongoose模块

```js
var mongoose = require('mongoose');
```

## **第三步**：连接mongodb数据库

第一个参数是连接地址，第二个参数是连接配置对象，第三个参数是连接的回调函数。
mongodb://127.0.0.1:27017是数据库地址，hzy表示要连接的数据库名字，如果不存在则会自动创建这个数据库

```js
mongoose.connect("mongodb://127.0.0.1:27017/zy",{useNewUrlParser:true,useUnifiedTopology:true},function(err){
  if(err){
    console.log("数据库连接失败");
  }else{
    console.log("数据库连接成功");
  }
});
```

## 第四步：创建数据库模型

Schema 是mongoose 中的表的描述对象，可以理解为集合结构的定义。Schema描述对象中声明了集合中有几个字段，每个字段是什么类型的，它不具备操作数据库的能力。

使用mongoose操作数据库中的某个集合，需要先使用Schema创建这个集合的描述对象，定义一个Schema需要指定字段名 和 字段的数据类型。

Schema Types内置数据类型如下：String Number Boolean Array Buffer Date ObjectId Mixed

```js
var studentSchema = new mongoose.Schema({
  name:String,
  age:Number,
  tel:Number
});
```

根据集合的描述对象生成模型（类或构造函数），这个模型是集合的操作对象，可以数据库表进行增删改查

第一个参数数据库集合的名称；第二个参数是数据库表的描述对象

```js
var Student = mongoose.model('stus',studentSchema);
```

## 第五步：数据库的增删改查 

mongoose的API支持两种写法：回调函数 和 promise

1. 增加

```js
var stu = new Student({name:'张三', age: 18});
stu.save(err=>{});

// 或者

stu.save().then(()=>{}).catch(err=>{});
```

2. 删除

```js
Student.deleteOne({name:'张三'}, err=>{})

// 或者

Student.deleteOne({name:'张三'}).then(()=>{}).catch(err=>{});
```

3. 更新

```js
Student.updateOne({name:'张三'}, {age:20}, err=>{})

// 或者

Student.updateOne({name:'张三'}, {age:20}).then(()=>{}).catch(err=>{});
```

4. 查询

```js
Student.find({}, (err, data)=>{})
Student.find({name:'张三'}, (err, data)=>{})

// 或者

Student.findOne({name:'张三'}).then((data)=>{}).catch(err=>{});
```

5. 链式调用法

链式查询，这种方式相对直接查询，分的比较明细，如果不带callback，则返回query，query没有执行的预编译查询语句，该query对象执行的方法都将返回自己，只有在执行exec方法时才执行查询，而且必须有回调函数

```js
Student.find().exec((err, data)=>{})
Student.find({name:'张三'}).skip().limit().sort().exec((err, data)=>{}) 

// 或者 

Student.find({}).skip().limit().sort().exec().then((data)=>{}).catch(err=>{});
```

6. 查询个数

```js
Student.countDocuments({},(err,count)=>{})
Student.countDocuments({name:'张三'},(err,count)=>{})

// 或者

Student.countDocuments({name:'张三'}).then((count)=>{}).catch(err=>{});
```

# mongoose模块化

第一步：创建 db.js 模块，连接mongodb数据库：

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/zy', { useNewUrlParser: true, useUnifiedTopology: true }, err => {
	if (err) {
		console.log('数据库连接失败');
	} else {
		console.log('数据库连接成功');
	}
});

module.exports = mongoose;
```

第二步：创建user.js数据库模型模块，在模块中创建数据库模型User，有多个数据库集合，就创建多少个数据库模型的模块。

```js
const mongoose = require('./db');

const Schema = mongoose.Schema({
  username:String,
  password: String,
  age:String,
  sex: String,
  major: String,
  hobby: Array
});

const User = mongoose.model('login', Schema);

module.exports = User;
```

第三步：在需要用到数据库模型的模块中导入数据库模型，比如app.js中

```js
// 使用User操作数据库
const User = require('../modules/user');

User
  .findOne({username:req.body.username})
  .exec()
  .then(data=>{

  });
```


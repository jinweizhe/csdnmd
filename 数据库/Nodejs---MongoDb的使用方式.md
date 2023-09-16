@[toc]
## MongoDB

> 是一种数据库,用于数据的管理
> 是非关系型数据库
> 下载官网:
> https://www.mongodb.com/try/download/community
## 使用
- 在命令行中操作MongoDB
- 可视化图形工具中操作MongoDB
- 通过后端代码去操作MongoDB
### 1.在命令行中去操作MOngeDB
找到MongoDB安装包bin目录下的mongo.exe文件,双击打开
**常用命令**
1.查看当前MOngoDB服务器中所有的数据库
```cmd
show dbs
```
2.查看当前指向的数据库
```cmd
db
```
3.新建/切换数据库
```cmd
use 数据库名称
```
4.查看数据库中所有集合

```bash
show collections
```

5.往集合中添加数据（若该集合不存在，则自动创建）

```bash
# db.集合名称.insert({添加的数据})

db.students.insert({name: '张三', age: '20', gender: '男'})
```

6.查看集合中所有的数据

```bash
#　db.集合名称.find()
db.students.find().pretty()
```
7.删除当前数据库
```js
db.dropDatabase()
```
8.创建集合
```bash
db.createCollection("集合名")
```
9.查看当前数据库中所有的表
```bash
show collections
```
10.删除当前数据库中指定的表
```bash
db.表名.drop()
```
#### 可视化图形工具去操作 MongoDB(使用Navicat)

## Nodejs 中去操作 MongoDB

### mongoose

mongoose 是 Nodejs 中提供的一个用于便捷操作 MongoDB 的工具。

**下载**

```bash
npm i mongoose
```

 **mongoose 连接 MongoDB并设置数据库**

```js
// 通过 mongoose 去连接 MongoDB
// 数据库集合的相关配置
const mongoose = require('mongoose');
// 设置要连接的 MongoDB 服务器地址(studentsManage:要连接的数据库名称)
const dbURI = 'mongodb://localhost:27017/xiaoji';
// 连接数据库
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
//当数据库连接成功时触发此事件
mongoose.connection.on('connected', () => console.log(dbURI + ' 数据库连接成功'));

// Schema这个方法是一个构造函数,通过new创建这个构造方法的实例对象
// 这个方法用于定义数据库列名和值的类型
// 1.定义数据集合的结构:定义出集合中数据有哪些属性，属性的值是什么类型。
const usersSchema = new mongoose.Schema({
    username:String,
    password:Number,
    //下面这个为关联集合另一个集合的id值,当前集合列名为classid,值为另一个集合的id
    classid:{
    	//type:固定语法格式
		type: Schema.Types.ObjectId, 
		//ref用于设置另一集合的模型名称
		ref: 'schoolClass'
	}
})

//有的参数过时了,会有警告,下面这个代码可以无视警告
mongoose.set('strictQuery',false)

//2.定义数据集合的模型,将Schema和数据库中的集合关联起来
//model参数一:模型名称
//参数二:为上面的usersSchema
//参数三:数据库中的集合名称
const usersModel=mongoose.model('usersmodel',usersSchema,'users')
//接下来就是在各种请求里对数据进行增删改查操作了
```
**注意以下所有的方法都是异步方法,且这些方法的返回值都是promise对象,因此需要通过await去等待操作结果,如下**
## mongodb所有的查询条件
```js
//下面是mongodb所有的查询条件
$or 或关系
$nor 或关系取反
$gt 大于
$gte 大于等于
$lt 小于
$lte 小于等于
$ne 不等于
$in 在多个值范围内
$nin 不在多个值范围内
$all 匹配数组中多个值
$regex 正则，用于模糊查询
$size 匹配数组大小
$maxDistance 范围查询，距离（基于LBS）
$mod 取模运算
$near 邻域查询，查询附近的位置（基于LBS）
$exists 字段是否存在
$elemMatch 匹配内数组内的元素
$within 范围查询（基于LBS）
$box 范围查询，矩形范围（基于LBS）
$center 范围醒询，圆形范围（基于LBS）
$centerSphere 范围查询，球形范围（基于LBS）
$slice 查询字段集合中的元素（比如从第几个之后，第N到第M个元素）
$options:'$i' 不区分大小写(涉及到英文单词可以加下)
```
##### 根据条件查询
```js
app.get('/login',async function(req,res){
	const result = await userModel.find({username:'123'})
})
```
##### 模糊查询
```js
app.get('/login',async function(req,res){
	const result = await userModel.find({
		 	username:{$regex :'萧',$options:'$i'}   //正则匹配查询所有带萧的username,英文字母不区分大小写
		})
})
```
##### 查询所有

```bash
模型.find()

app.get("/select",async function(req,res){
    const user=req.query;//{username:'zs',password:'456'}
    console.log(user);
    // 查询集合中的数据
    // usersModel.find({username:'zs'})
    //在这里req.query为前端传来的数据,因此要查询的集合应该为req.query
    //find为异步方法,返回值为promise对象,解决方法使用aysnc\await
    const result=await usersModel.find()
    if(result.length>0){
        res.send({
            message:'查询所有成功',
            status:1
        })
    }else{
        res.send({
            message:'查询所有失败',
            status:1
        })
    }
    console.log('result',result);
})
```
##### 根据id查询
```js
findByid(id)//括号内传入id值即可
```

##### 按条件查询

```bash
模型.find({查询条件})

app.get("/login",async function(req,res){
    const user=req.query;//{username:'zs',password:'456'}
    console.log(user);
    // 查询集合中的数据
    // usersModel.find({username:'zs'})
    //在这里req.query为前端传来的数据,因此要查询的集合应该为req.query
    //find为异步方法,返回值为promise对象,解决方法使用aysnc\await
    const result=await usersModel.find(user)
    //如果返回有数据则登陆成功,反之则失败
    if(result.length>0){
        res.send({
            message:'登陆成功',
            status:1
        })
    }else{
        res.send({
            message:'登陆失败',
            status:1
        })
    }
    console.log('result',result);
})
```
##### 获取数据总条数
```js
模型.countDocuments(可以为空,也可以给带条件的总条数)
```
##### 分页查询
```js
//limit() 参数为请求的条数
//skip() 跳过数据的条数
模型.limit().skip()

例如每页5条数据,当前在第3页
模型.limit(5).skip(10)

每页10条数据,当前在第2页
模型.limit(10).skip(10)

总结:每页n条数据,当前在第m页
模型.limit(n).skip( n * (m-1) )

//注意:有时候前端传入数字类型数据到后端可能会被转换为字符串,而下面的参数都要求是number类型,因此需要进行一个转换
//可以通过多种方式转换number类型,这里不一一演示,推荐一个简单的转化,如下:(通过 -0 转化为number类型 )
模型.limit( 数据个数 - 0 ).skip( 跳过条数按照上面的公式有个乘运算,直接就number了,无需转换 )
```
**拓展:计算总页数的方法**

> //先获取数据总条数
> count total= await 模型.countDocuments()
> //接下来计算总页数(需要考虑多出来的情况,例如除不尽有余数,因此这里需要采用向上取整)
> const page = Math.ceil( total / 每页的数据条数 )

##### 新增
```bash
模型.create({条件})
模型.create({username:'123',password:'123'})
```
##### 升序降序
```bash
模型.find().sort(排序条件)

如下:
	将表的查询结果按照年龄排序。(1表示升序，-1表示降序)
模型.find().sort({age:1})
```
##### 插入多条
```js
模型.insertMany([
	{数据},
	{数据}
])
```

##### 删除一个

```bash
模型.deleteOne({删除条件})

UserModel.deleteOne({id:1})
```
##### 删除满足条件的所有

```bash
模型.deleteMony({删除条件})

UserModel.deleteOne({username:'zhangsan'})
```
##### 根据id删除
```bash
findOneAndDelete({id值}) 删除单个文档,条件若是为空，默认删除第一条，删除成功返回被删除的数据，删除失败返回null
```
##### 修改

```bash
模型.updateOne({查询条件}, {修改数据})

模型.updateOne({id:1}, {username:'lisi',password:'zhangs  an'})
```
##### 保存
```js
模型.save() //无参数
```
##### 关联查询
```js
定义集合属性字段时,需加入以下代码
   //下面这个为关联集合另一个集合的id值,当前集合列名为classid,值为另一个集合的id
    classid:{
    	//type:固定语法格式
		type: Schema.Types.ObjectId, 
		//ref用于设置另一集合的模型名称
		ref: 'schoolClass'
	}
```
##### 根据关联的id查找另一个集合的数据
```js
//populate用于关联查询
当前绑定的模型.find().populate('当前模型作关联的列名')
//此时返回的数据会是[Object Object]格式
//通过获得的对象打点访问第二个模型的属性列名
//例如被关联的模型有个uaername列名,如果想访问就在获取到数据时通过.username获取到具体数据
```
##### populate嵌套关联查询
```js
例如学生管理系统---学生关联班级,班级又关联教师,那么如何从学生找到对应的教师呢??
那就需要使用嵌套关联查询了,格式如下:

当前学生的模型.find().populate({
	path:'当前学生绑定的班级的id的外键列名',
	populate:{
		path:'班级绑定的教师id的外键列名'
	}
})

//通过获得的对象打点访问第三个模型教师的属性列名,如下格式获取:
格式为:
	data:{
		id:1
		name:"学生"
		classid:{
			id:1,
			name:"班级"
			teacherid:{
				name:"老师",
				age:25
			}
		}
	}
//返回的学生数据.学生关联的班级外键名.班级关联的教师外键名.需要得到的教师具体属性
```
##### populate并列关联查询
```js
例如学生管理系统---学生关联班级,学生又关联教师,那么如何从学生找到班级和对应的教师呢??
那就需要使用并列关联查询了,格式如下:

当前学生的模型.find().populate('当前学生绑定的班级的id的外键列名').populate('当前学生绑定的教师的id的外键列名')

直接连续调用即可
```
# 详细教程
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
mongodb://127.0.0.1:27017是数据库地址，zy表示要连接的数据库名字，如果不存在则会自动创建这个数据库

```js
mongoose.connect("mongodb://127.0.0.1:27017/zy", {}, function(err){
  if(err){
    console.log("数据库连接失败");
  }else{
    console.log("数据库连接成功");
  }
});
```

## 第四步：创建数据库模型

Schema 是mongoose 中的集合的描述对象，可以理解为集合结构的定义。Schema描述对象中声明了集合中有几个字段，每个字段是什么类型的，它不具备操作数据库的能力。

使用mongoose操作数据库中的某个集合，需要先使用Schema创建这个集合的描述对象，定义一个Schema需要指定字段名 和 字段的数据类型。

Schema Types内置数据类型如下：String Number Boolean Array Buffer Date ObjectId Mixed

```js
var studentSchema = new mongoose.Schema({
  name:String,
  age:Number,
  tel:Number
});
```

根据集合的描述对象生成模型（类或构造函数），这个模型是集合的操作对象，可以对数据库集合进行增删改查

第一个参数数据库集合的名称；第二个参数是数据库表的描述对象

```js
var Student = mongoose.model('stus',studentSchema);
```

> 拓展:无视过时警告
> mongoose.set('strictQuery',false)

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
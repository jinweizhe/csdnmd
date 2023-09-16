# 概述

数据库是一种专门用于数据存储、查询的程序，它主要用于向其他应用程序提供数据存储和查询服务。

数据库按照查询方式可分为sql数据库和nosql数据库：

SQL (Structured Query Language) 传统的数据库（关系型数据库），使用sql语言进行数据库操作例如mysql,sqlserver,oracle

NoSQL(NoSQL = Not Only SQL) 泛指非关系型的数据库，现在nosql数据库也越来越流行，例如mongoDB

mongoDB:是一个基于分布式文件存储的数据库，支持直接存储对象，使用javascript进行数据库操作

# MongoDB安装

MongoDB参考资料
中文网：https://www.mongodb.org.cn/

菜鸟教程：http://www.runoob.com/mongodb/mongodb-tutorial.html 

官方网站：https://www.mongodb.com/

官方文档：https://docs.mongodb.com/

## 安装MongoDB

安装MongoDB，先下载，然后按照以下步骤安装：

MongoDB下载地址：https://www.mongodb.com/try/download/community

安装的时候选择Custom自定义安装，将安装位置改为

```
D:\Mongo  【今后使用命令行比较方便】
```

### 自动安装：

自动将MongoDB安装成Windows服务，安装过程中勾选 Install MongoD as a Service ，Mongodb会主动在安装目录下创建log和data文件。

### 手动安装：

手动将MongoDB安装成Windows服务，在 D:\Mongo 文件夹下创建data文件夹和log文件夹
	D:\Mongo\data		存放数据库
	D:\Mongo\log		  存放日志

**方式一**：在 D:\Mongo 文件夹下创建配置文件 mongodb.config 配置文件内容如下：

```
systemLog:
    destination: file
    path: d:\mongo\log\mongod.log
storage:
    dbPath: d:\mongo\data
```

保存好配置文件之后，以管理员身份运行cmd，进入 D:\Mongo\bin 执行以下指令：

```
mongod --config d:\mongo\mongodb.config --install –-serviceName "MongoDB"
```

**方式二**：不添加配置文件直接运行以下指令

	mongod --dbpath "d:\mongo\data" --logpath "d:\mongo\log\mongod.log" --install --serviceName "MongoDB"
	
	说明：
		mongod.exe	是mongoDB的服务端程序
		--config	指明配置文件
		--install	安装成windows服务
		--dbpath 	是mongoDB数据库文件路径
		--logpath	是mongoDB操作日志路径

## 启动 MongoDB 服务

手动启动：任务管理器 --> 服务 --> mongoDB    点右键启动服务/停止服务

开机启动：计算机管理 --> 服务和应用程序 --> 服务 --> mongoDB --> 右键点击属性设置为自动

然后在浏览器里查看 http://localhost:27017/ 内容为

```
It looks like you are trying to access MongoDB over HTTP on the native driver port.
```

## 删除mongoDB服务

以管理员身份运行cmd，进入 D:\Mongo\bin 执行以下指令：

```
mongod.exe --remove --serviceName "MongoDB"
```

# mongoDB启动

打开并操作MongoDB有两种方式：

1. CMD运行以下指令
   D:\Mongo\bin\mongo.exe 即可打开一个命令行窗口；

2. 配置环境变量
   我的电脑 --> 右键 --> 属性 --> 高级系统设置  --> 高级（选项卡中的高级选项） --> 环境变量 --> 在【用户变量】PATH 中新增环境变量
     D:\Mongo\bin

**注意**：
Win7下需要先将整个path复制到记事本，然后在最后加上分号，加上边的两个路径

 ```
 比如初始：
 C:\Users\Jxz\AppData\Roaming\npm;C:\Program Files (x86)\Microsoft VS Code\bin;
 
 那么修改后：
 C:\Users\Jxz\AppData\Roaming\npm;C:\Program Files (x86)\Microsoft VS Code\bin;D:\Mongo\bin
 ```

Win10下不用加分号，直接修改-->新增-->确定即可

配置环境变量之后，打开cmd输入： mongo 能够自动连接到本机的MongoDB服务器

# mongoDB常用命令

- show dbs 查询MongoDB中的所有数据据库（数据库中必须有内容）

- use <数据库名>   切换数据库（如果数据库不存在，会自动创建数据库）

- db.dropDatabase()	删除当前数据库

- db  显示当前正在使用的数据库

- db.createCollection("集合名")	在当前数据库下创建一个数据集合（集合可以看成是一张表，在这表中存放了我们需要向数据库中保存的信息，将来我们对数据库的增删改查，就是对这张表中的数据进行增删改查）

- show collections	        查询当前数据库中所有的表

- db.表名.drop()	            删除当前数据库中指定的表

数据库的CRUD：

CRUD是指数据库的增删改查

- C：就是创建（Create）

- R：就是查找（Retrieve）

- U：就是更改（Update）

- D：就是删除（Delete）

假设数据库名为student，在数据库创建了一个集合 stu，数据库的增删改查都是对集合的操作，以下操作都是针对数据库中 stus集合的操作

## 增

```js
db.stus.insert({name:"jinxizhen",age:28})	向表中插入一条数据。
```

## 查

```
db.stus.find()	                    查询表中所有的数据。

db.stus.find({age:28})	            查询表中所有age属性为28的数据。

条件查找
db.stus.find({age:{$lt:32}})		查询表中所有age属性小于32的数据。
运算符：
$lt		less than		小于
$lte	less than equal	小于等于
$gt		greater than	大于
$gte	greater than equal	大于等于
$ne		not equal		不等于

db.stus.find({age:{$lte:30,$gte:20}})	查询表中20岁到30岁之间的数据。

db.stus.find({name:/^王.+$/})	    查询表所有名字姓王的数据。(关于字符串类型的数据查询可以使用正则达式)

db.stus.find().sort({age:1})	    将表的查询结果按照年龄排序。(1表示升序，-1表示降序)

db.collection.find().limit(n)		显示前n条数据
db.collection.find().skip(n)		跳过前n条数据
db.stus.find().skip(2).limit(3)	    从查询结果中跳过2条，往后取3条。

db.stus.find({},{name:1,age:1,_id:0})	.find()第一个参数是查询条件，第二个参数是查询那几列。
```

## 改

```
db.stus.update({name:"Tom"},{$set:{age:30}})	
用于修改表中的数据，第一个参数是修改条件，第二个是修改内容。(把名字叫 Tom 的年龄改为30)
```

## 删

```
db.stus.remove({}) 	                删除表中所有的数据
db.stus.remove({name:"王五"})		删除表中name为 王五 的数据，参数是删除条件，
```

# MongoDB的数据类型

MongoDB 支持如下数据类型：

- String：字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。
- Integer：整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。
- Boolean：布尔值。用于存储布尔值（真/假）。
- Double：双精度浮点值。用于存储浮点值。
- Min/Max keys：将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。
- Arrays：用于将数组或列表或多个值存储为一个键。
- Timestamp：时间戳。记录文档修改或添加的具体时间。
- Object：用于内嵌文档。
- Null：用于创建空值。
- Symbol：符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。
- Date：日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。
- Object ID：对象 ID。用于创建文档的 ID。
- Binary Data：二进制数据。用于存储二进制数据。
- Code：代码类型。用于在文档中存储 JavaScript 代码。
- Regular expression：正则表达式类型。用于存储正则表达式。

# ROBO3T

地址：https://robomongo.org/
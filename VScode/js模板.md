```
{
	"fs": {
		"prefix": "fs",
		"body": [
			"//导入node的fs文件系统的模块",
			"const fs = require(\"fs\")",
		],
		"description": "快速导入node模块"
	},
	"path": {
		"prefix": "path",
		"body": [
			"//导入node的path路径模块,__dirname表示当前文件所处的目录",
			"const path = require(\"path\")"
		],
		"description": "快速导入node模块"
	},
	"moment": {
		"prefix": "moment",
		"body": [
			"//导入时间格式化的包",
			"const moment = require(\"moment\")"
		],
		"description": "快速导入node模块"
	},
	"express": {
		"prefix": "express",
		"body": [
			"//导入express服务器第三方的包",
			"const express = require(\"express\")",
			"//解决跨域,导入中间件cors",
			"const cors = require(\"cors\")",
			"//创建服务器实例",
			"const app=express()",
			"//注册跨域中间件",
			"app.use(cors())",
			"//用来解析post请求体中的参数,把post请求的参数解析res.body",
			"app.use(express.urlencoded({extended:false}))",
			"",
			"app.get(\"/\",function(req,res){",
			"\tconsole.log(req.url,\"----查询字符串\");",
			"\tconsole.log(req.method,\"----请求方式\");",
			"\tconsole.log(req.query,\"----获取get请求参数\");",
			"\tconsole.log(req.body,\"----获取post请求参数\");",
			"\tconsole.log(req.headers,\"----请求头数据\");",
			"\tconsole.log(res.send({code:1,msg:'信息'}),\"----响应数据\");",
			"\tconsole.log(res.json({code:1,msg:'信息'}),\"----响应json数据,自动转换json\");",
			"})",
			"",
			"app.post(\"/\",function(req,res){})",
			"",
			"//调用listen启动服务器",
			"app.listen(80, function () {",
			"\tconsole.log(\"开启了127.0.0.1服务器\");",
			"})"
		],
		"description": "快速导入node模块"
	},
	"http": {
		"prefix": "http",
		"body": [
			"//导入web服务器http模块",
			"const http = require(\"http\")",
			"//创建web 服务器实例",
			"const sever = http.createServer((req,res) => {",
			"\tconsole.log(req.url);//前端网址",
			"\tconsole.log(req.method);//请求方式",
			"\tconsole.log(req.query);//获取到查询的字符串的数据",
			"\tconsole.log(req.headers);//请求头对象",
			"",
			"\tres.write(\"hello world\");//只是写的,但是没响应",
			"\tres.end();//代表响应结束",
			"})",
			"//为服务器实例绑定request事件，监听客户端的请求",
			"sever.on(\"request\", function (req, res) {",
			"\t//为了防止中文显示乱码的问题，需要设置响应头Content-Type的值为 text/html; charset=utf-8",
			"\tres.setHeader('Content-Type', 'text/html; charset=utf-8')",
			"\tconsole.log(\"正在请求地址http://127.0.0.1\");",
			"})",
			"//启动服务器,第一个参数代表端口号，第二个回调函数",
			"sever.listen(80, function () {",
			"\tconsole.log(\"开启 http://127.0.0.1 这个端口号\");",
			"})",
		],
		"description": "快速导入node模块"
	},
	"parser": {
		"prefix": "parser",
		"body": [
			"//导入解析表单数据的中间件",
			"const parser=require(\"body-parser\")"
		],
		"description": "快速导入node模块"
	},
	"querystring": {
		"prefix": "querystring",
		"body": [
			"//导入解析请求体数据的模块",
			"const qs = require(\"querystring\")"
		],
		"description": "快速导入node模块"
	},
	"j": {
		"prefix": "j",
		"body": [
			"$(\"\")"
		],
		"description": "jq快速选择用$(' ')"
	},
	"mysql": {
		"prefix": "mysql",
		"body": [
			"//导入MySQL模块",
			"const mysql=require(\"mysql\")",
			"//建立与MySQL数据库的连接",
			"const db=mysql.createPool({",
			"\thost:\"127.0.0.1\", //数据库的IP地址",
			"\tuser:\"root\",  //登录数据库的账号",
			"\tpassword:\"admin\",  //登录数据库的密码",
			"\tdatabase:\"数据库名\"  //指定要操作哪个数据库",
			"})",
			"",
			"//调用db.query()函数，指定要执行的SQL语句，通过回调函数拿到执行的结果",
			"//result.affectedRows为影响的行数",
			"db.query(\"sql语句\", function (err,results) {})",
		],
		"description": "快速导入node模块"
	},
	"express-session": {
		"prefix": "express-session",
		"body": [
			"//导入express-session中间件(先配置express包)",
			"const session=require(\"express-session\")",
			"//全局注册中间件",
			"app.use(session({",
			"\tsecret:\"xiaoji\",",
			"\tresave:false,",
			"\tsaveUninitialized:true,",
			"}))"
		],
		"description": "快速导入node模块"
	},
	"cookiesession": {
		"prefix": "cookiesession",
		"body": [
			"//cookie-session中间件(先配置express包)",
			"const cookiesession=require(\"cookie-session\")",
			"app.use(cookiesession(",
			"\t{",
			"\t\t//在cookie中用户记录sessionid的名字",
			"\t\tname: \"sessionid\",",
			"\t\t//给sessionid一个加密的key，随便填写即可，但是必须要写，檫下键盘即可",
			"\t\t//secret密钥，对明文进行加密处理",
			"\t\tsecret: \"asdfbrtbonebmxmdk\",",
			"\t\t//设置不活动session清除的时间",
			"\t\tmaxAge: 20 * 60 * 1000, //20分钟",
			"\t\t//让时间滚动刷新（每次浏览器刷新，时间重新计算，否则每次刷新时间都会延续）",
			"\t\trolling: true,",
			"\t}",
			"))",
		],
		"description": "快速导入node模块"
	},
	"cookie": {
		"prefix": "cookie",
		"body": [
			"//导入cookie中间件(先配置express包)",
			"const cookie = require(\"cookie-parser\")",
			"//全局注册中间件",
			"app.use(cookie())"
		],
		"description": "快速导入node模块"
	},
	"jwt": {
		"prefix": "jwt",
		"body": [
			"//导入用于生成JwT字符串的包(先配置express包)",
			"const jwt = require(\"jsonwebtoken\")",
			"//导入用于将客户端发送过来的JWT字符串，解析还原成JSON对象的包",
			"const expressJWT =require(\"express-jwt\")",
			"//定义密钥：secret密钥的本质:就是一个字符串,字符串的内容可以任意填写",
			"const secretKey=\"wjcnwncownco\"",
			"//将JWT字符串还原为JSON对象,先通过app.use()先注册",
			"app.use(expressJWT({secret:secretKey}).unless({path:[/^\\/api\\//]}))",
		],
		"description": "快速导入node模块"
	},
	"urlencoded": {
		"prefix": "urlencoded",
		"body": [
			"//全局配置请求中urlencoded的解析中间件",
			"app.use(express.urlencoded({ extended: false }))",
		],
		"description": "快速导入node模块"
	},
	"app_": {
		"prefix": "app_",
		"body": [
			"app_id=pevirmtrnrnhxdfo&app_secret=MGRFTVJ4YjdqSnhYRWtPWEVCV3JlUT09"
		],
		"description": "个人ajax的api码"
	},
	"fori": {
		"prefix": "fori",
		"body": [
			"for(let i=0;i<10;i++){",
			"",
			"}"
		],
		"description": "for循环快捷代码1"
	},
	"forz": {
		"prefix": "forz",
		"body": [
			"for(let z=0;z<10;z++){",
			"",
			"}"
		],
		"description": "for循环快捷代码2"
	},
	"fora": {
		"prefix": "fora",
		"body": [
			"for(let a=0;a<10;a++){",
			"",
			"}"
		],
		"description": "for循环快捷代码3"
	},
	"require": {
		"prefix": "require",
		"body": [
			"//导入模块",
			"const mdA = require(\"./moduleA\")",
		],
		"description": "导入模块"
	},
	"exoports": {
		"prefix": "exoports",
		"body": [
			"//导出模块",
			"module.exports",
		],
		"description": "导出模块"
	},
	"axios": {
		"prefix": "axios",
		"body": [
			"//axios的get请求",
			"axios.get(\"\").then(function(data){},function(error){})",
			"//axios的post请求",
			"axios.post(\"\",{}).then(function(data){},function(error){})",
		],
		"description": "导出模块"
	},
	"mongoDB":{
		"prefix": "mongoDb",
		"body": [
			"const mongoose = require('mongoose');",
			"// 设置要连接的 MongoDB 服务器地址(studentsManage:要连接的数据库名称)",
			"const dbURI = 'mongodb://localhost:27017/这里换自己数据库名';",
			"// 连接数据库",
			"mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });",
			"//当数据库连接成功时触发此事件",
			"mongoose.connection.on('connected', () => console.log(dbURI + ' 数据库连接成功'));",
			"",
			"//Schema这个方法是一个构造函数,通过new创建这个构造方法的实例对象",
			"// 这个方法用于定义数据库列名和值的类型",
			"// 1.定义数据集合的结构:定义出集合中数据有哪些属性，属性的值是什么类型。",
			"const usersSchema = new mongoose.Schema({",
			"\tusername:String,",
			"\tpassword:Number",
			"//后面以此类推定义列名和列的值类型",
			"})",
			"",
			"//2.定义数据集合的模型,将Schema和数据库中的集合关联起来",
			"//model参数一:模型名称",
			"//参数二:为上面的usersSchema",
			"//参数三:数据库中的集合名称",
			"const usersModel=mongoose.model('usersmodel',usersSchema,'users')"
		]
	}
}
```


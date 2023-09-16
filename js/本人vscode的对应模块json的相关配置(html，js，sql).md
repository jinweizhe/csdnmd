## html模板设置
```
{
	"jQuery": {
		"prefix": "jq",
		"body": [
			"<!DOCTYPE html>",
			"<html lang=\"en\">",
			"",
			"<head>",
			"\t<meta charset=\"UTF-8\">",
			"\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
			"\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
			"\t<title>Document</title>",
			"\t<link rel=\"stylesheet\" href=\"\">",
			"\t<script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script>",
			"\t<style>",
			"\t\t* {",
			"\t\t\tmargin: 0;",
			"\t\t\tpadding: 0;",
			"\t\t\tlist-style: none;",
			"\t\t\ttext-decoration: none;",
			"\t\t}",
			// "\t\t#__bs_notify__ {",
			// "\t\t\tdisplay: none !important;",
			// "\t\t}",
			// "\t\t/*上面的选择器不要删,否则内置预览会有个黑色的块,在下方写页面其他选择器*/",
			"\t</style>",
			"</head>",
			"",
			"<body>",
			"",
			"</body>",
			"",
			"</html>"
		],
		"description": "html基本结构"
	},
	"echarts": {
		"prefix": "echarts",
		"body": [
			"<!DOCTYPE html>",
			"<html lang=\"en\">",
			"",
			"<head>",
			"\t<meta charset=\"UTF-8\">",
			"\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
			"\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
			"\t<title>Document</title>",
			"\t<link rel=\"stylesheet\" href=\"\">",
			"\t<style>",
			"\t\t* {",
			"\t\t\tmargin: 0;",
			"\t\t\tpadding: 0;",
			"\t\t\tlist-style: none;",
			"\t\t\ttext-decoration: none;",
			"\t\t}",
			// "\t\t#__bs_notify__ {",
			// "\t\t\tdisplay: none !important;",
			// "\t\t}",
			// "\t\t/*上面的选择器不要删,否则内置预览会有个黑色的块,在下方写页面其他选择器*/",
			"\t\t.box {",
			"\t\t\twidth: 600px;",
			"\t\t\theight: 600px;",
			"\t\t\tborder: 1px solid;",
			"\t\t}",
			"\t</style>",
			"\t<!-- 引入echars.js文件 -->",
			"\t<script src=\"./js/echarts/dist/echarts.min.js\"></script>",
			"</head>",
			"",
			"<body>",
			"\t<div class=\"box\"></div>",
			"",
			"\t<script>",
			"\t\tvar myChart = echarts.init(document.querySelector(\".box\"))",
			"",
			"\t\tmyChart.setOption(option)",
			"\t</script>",
			"</body>",
			"",
			"</html>"
		],
		"description": "html基本结构"
	},
	"vue": {
		"prefix": "vue",
		"body": [
			"<!DOCTYPE html>",
			"<html lang=\"en\">",
			"",
			"<head>",
			"\t<meta charset=\"UTF-8\">",
			"\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
			"\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
			"\t<title>Document</title>",
			"\t<link rel=\"stylesheet\" href=\"\">",
			"\t<script src=\"https://code.jquery.com/jquery-3.6.0.min.js\"></script>",
			"\t <!-- 开发环境版本，包含了有帮助的命令行警告 -->",
			"\t<script src=\"https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js\"></script>",
			"\t <!-- 官网提供的 axios 在线地址 -->",
			"\t<script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script>",
			"\t<style>",
			"\t\t* {",
			"\t\t\tmargin: 0;",
			"\t\t\tpadding: 0;",
			"\t\t\tlist-style: none;",
			"\t\t\ttext-decoration: none;",
			"\t\t}",
			// "\t\t#__bs_notify__ {",
			// "\t\t\tdisplay: none !important;",
			// "\t\t}",
			// "\t\t/*上面的选择器不要删,否则内置预览会有个黑色的块,在下方写页面其他选择器*/",
			"\t</style>",
			"</head>",
			"",
			"<body>",
			"\t<div id=\"app\">",
			"",
			"\t</div>",
			"\t<script>",
			"\t\tvar app = new Vue({",
			"\t\t\tel: \"#app\",",
			"\t\t\tdata: {",
			"",
			"\t\t\t},",
			"\t\t\tmethods: {}",
			"\t\t})",
			"\t</script>",
			"</body>",
			"",
			"</html>"
		],
		"description": "html基本结构"
	},
}
```
## js模板设置
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
			"//创建服务器实例",
			"const app=express()",
			"",
			"app.get(\"/\",function(req,res){})",
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
			"const sever = http.createServer()",
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
}
```
## sql模板设置
```
{
	"zsgc": {
		"prefix": "zsgc",
		"body": [
			"-- 有个users表  四个字段id username password status，四个字段代表四列,其中id为自增列，status默认值为0,可选值0，1",
			"-- id自增，username分别为zs,ls,wu  password分别为：123456 abcdef 123abc  status为0，1，1",
			"-- 查询整张表的所有数据",
			"-- select * from users",
			"-- 查询指定列的所有数据",
			"-- select username,password from users",
			"-- 指定某列添加数据",
			"-- insert into users(username,password) values('萧寂','1234')",
			"-- 指定某列修改数据",
			"-- update users set username=\"你好a\",password=\"1234567\",status=1 where id=2",
			"-- 根据id删除行",
			"-- delete from users where id=4",
			"-- 查询status为1的所有用户",
			"-- SELECT *FROM users WHERE status=1",
			"-- 查询id大于2的所有用户",
			"-- SELECT *FROM users WHERE id>2",
			"-- 查询username不等于admin的所有用户",
			"-- SELECT *FROM users WHERE username<>'admin'",
			"-- 使用AND来显示所有status为0，并且id 小于3的用户:",
			"-- SELECT * FROM users WHERE status=0 AND id<3",
			"-- 使用OR来显示所有status为1，或者username为zs的用户",
			"-- SELECT* FROM users WHERE status=1 OR username='zs'",
			"-- 对users表中的数据，按照status字段进行升序排序",
			"-- SELECT * FROM users ORDER BY status;（升序排序在status后加上ASC效果等同）",
			"-- select * from users order by status asc",
			"-- 根据id降序排序,降序排序使用desc关键字",
			"-- select * from users order by id desc",
			"-- 多重排序 对users 表中的数据，先按照status字段进行降序排序，再按照username的字母顺序，进行升序排序",
			"-- SELECT * FROM users ORDER BY status DESC,username asc",
			"-- 查询id为1的数据返回的总条数",
			"-- select count(*) from users where id=1",
			"-- 将列名称从COUNT(*)修改为total",
			"-- SELECT COUNT(*) AS total FROM users WHERE id=1",
			"-- 给username列添加uname别名，给password列添加upwd别名",
			"-- select username as uname,password as upwd from users",
		],
		"description": "Log output to console"
	}
}
```
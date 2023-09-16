const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

// 1、CORS 跨域：
// 看响应头是否有Access - Control - Allow - Origin字段，并且这个字段的是是 * 或者一个具体的域名
// cors支持get或者post请求
app.use((req, res, next) => {
  // 在服务端的响应头设置  Access-Control-Allow-Origin
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
	next();
});

// app.get('/info', (req, res) => {
// 	res.json({ error: 0, data: '获取数据成功' });
// });

// 2、JSONP：支持get请求
app.get('/info', (req, res) => {

  // let fn = req.query.callback;
  // console.log('fn=', fn);
  // let data = JSON.stringify({ error: 0, data: '获取数据成功' });
  // let result = `${fn}(${data})`;// getinfo({"error":0,"data":"获取数据成功"})
  // res.setHeader('Content-type', 'application/javascript;charset=utf-8');// 说明传递的是一段js代码
	// res.send(result);

  res.jsonp({ error: 0, data: '获取数据成功' })
});

// 3、服务器代理：支持get和post请求
// 客户端访问自己的服务器A，用A服务器向目标服务器B发送请求，B服务器响应结果之后，A服务器把结果响应给客户端
// 跨域只存在于浏览器，服务器与服务器之间不存在跨域的问题
// 一级分类名：后端、前端、Android、iOS、人工智能、开发工具、代码人生、阅读
app.get('/tag_api/v1/query_category_briefs', (req, res) => {
  axios
		.get('https://api.juejin.cn/tag_api/v1/query_category_briefs?aid=2608&uuid=7102369215999034921&spider=0')
		.then(response => {
			res.json(response.data);
		})
		.catch(error => {
			console.log(error.message);
		});
});


app.listen(3000, () => console.log('running 3000'));

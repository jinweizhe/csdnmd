var express = require('express');
var app = express();

var expressArtTemplate = require('express-art-template');
app.engine('html', expressArtTemplate);
app.set('view engine', 'html');

var data = {
	error: 0,
	msg: 'success',
	title: '好友列表',
	data: [
		{
			name: '张三',
			age: 18,
			height: 175,
		},
		{
			name: '李四',
			age: 22,
			height: 180,
		},
		{
			name: '王五',
			age: 20,
			height: 170,
		},
	],
};

app.get('/user', function (req, res) {
	// res.render('home.html', {});
});

app.listen(3001, function () {
	console.log('running');
});

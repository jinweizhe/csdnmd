var fs = require('fs');
var http = require('http');


var res = fs.readFileSync('./weather.json', 'utf-8');
var cssData = fs.readFileSync('./weather.css', 'utf-8');
console.log(cssData);
var data = JSON.parse(res);

var currentCity = data.results[0].currentCity;
var pm25 = data.results[0].pm25;
var weather_data = data.results[0].weather_data;
// weather_now当天的天气数据，是一个对象
var weather_now = weather_data[0];
// console.log(weather_now);
var currentTemp = weather_now.date;
currentTemp = currentTemp.slice(currentTemp.indexOf('：')).replace(')', '');
// console.log(currentTemp.slice(currentTemp.indexOf('：')).replace(')',''));

function getPM25(pm25) {
	var result = '';
	if (pm25 <= 50) {
		result = '优';
	} else if (pm25 <= 100) {
		result = '良';
	} else if (pm25 <= 150) {
		result = '轻度污染';
	} else if (pm25 <= 200) {
		result = '中度污染';
	} else if (pm25 <= 300) {
		result = '严重污染';
	} else {
		result = '重度污染';
	}
	return result;
}

// -----------------------------------------------------------
var htmlstr = `
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <meta name="author" content="金西振">
    <title></title>
    <style>
    
    </style>
  </head>
  <body>
`;

htmlstr += '<style>';
htmlstr += cssData;
htmlstr += '</style>';
// htmlstr += `<header> ${currentCity} </header>`;
htmlstr += '<header>' + currentCity + '</header>';

htmlstr += `
  <main>
    <div><img src="${weather_now.dayPictureUrl}" alt=""></div>
    <div>${weather_now.wind}</div>
    <div>${weather_now.weather}</div>
    <div>${weather_now.temperature}</div>
    <div>
      实时温度${currentTemp}，空气指数：${pm25} ${getPM25(pm25)}
    </div>
  </main>
  `;

htmlstr += '<footer>';

for (var i = 0; i < weather_data.length; i++) {
	if (i == 0) {
		continue;
	}
	var weather = weather_data[i];
	// console.log(weather);

	htmlstr += `
    <section>
      <div>${weather.date}</div>
      <div><img src="${weather.dayPictureUrl}" alt=""></div>
      <div>${weather.wind}</div>
      <div>${weather.weather}</div>
      <div>${weather.temperature}</div>
    </section>
  `;
}

htmlstr += `
</footer>
</body>
</html>
`;

// console.log(htmlstr);
var app = http.createServer(function (req, res) {
  console.log('收到客户端的请求', req.url);

  // 给客户端响应数据
  // res.write('123');

  res.write(htmlstr);

  // 结束响应
  res.end();

});

app.listen(3000, function () {
  console.log('开启服务器成功：http:127.0.0.1:3000');
});

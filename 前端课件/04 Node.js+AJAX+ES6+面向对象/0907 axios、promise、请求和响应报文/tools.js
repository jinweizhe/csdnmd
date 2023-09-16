// 具体封装的步骤：
// 1、创建函数
// 2、确定是否需要传递参数
// 3、在函数内实现功能：实现具体功能的时候，可能需要参数，也可能不需要参数

function get(url, param) {
	const promise = new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject(xhr.responseText);
				}
			}
		};
		if (param) {
			url += '?' + param;
		}
		xhr.open('GET', url);
		xhr.send();
	});

	return promise;
}

function post(url, data = {}) {
	const promise = new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject(xhr.responseText);
				}
			}
		};

		xhr.open('POST', url);
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(JSON.stringify(data));
	});

	return promise;
}



function getMethod (url, params, fn) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var res = JSON.parse(xhr.responseText);
			fn(res);
		}
	};

	if (params) {
		url += '?' + params;
	}

	xhr.open('GET', url);
	xhr.send();
}

function postMethod(url, params, fn) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var res = JSON.parse(xhr.responseText);
			fn(res);
		}
	};

	var data = {};
	if (params) {
		data = params;
	}

	xhr.open('POST', url);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(data));
}

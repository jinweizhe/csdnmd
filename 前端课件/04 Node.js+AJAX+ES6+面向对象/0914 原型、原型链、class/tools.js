function axios(options) {
	if (options.method.toUpperCase() === 'GET') {
	}
	if (options.method.toUpperCase() == 'POST') {
	}
}

axios.prototype.get = function (url, params) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(xhr.responseText);
			}
		};
		xhr.open('GET', url);
		xhr.send();
	});
};

Array.prototype.myEvery = function (fn) {
	for (let i = 0; i < this.length; i++) {
		if (fn(this[i], i) == false) {
      return false;
    }
  }
  return true;
};

let res = [(1, 2, 3, 4, 5)].myEvery(function (item) {
	return item % 2 == 0;
});

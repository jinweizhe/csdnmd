var fn = function (n) {
  var str = '';
  for (var i = 1; i <= n; i++) {
		for (var j = 1; j <= i; j++) {
			str += j + '*' + i + '=' + i * j + ' ';
		}
    str  += '\n';
  }
  return str;
};

module.exports = {
	fn: fn,
};

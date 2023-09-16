## 第一种
```
var url = 'http://www.ccc.com/a/b?name=zzy&count=12&dec=aaa'
        function xiaoji(url) {
        url= decodeURI(url);
            var str = {};
            var str2 = [];
            var str1 = url.split('?')[1].split('&');
            console.log(str1);
            for (var i = 0; i < str1.length; i++) {
                str2 = str1[i].split('=');
                console.log(str2);
                str[str2[0]] = str2[1];

            }
            return str
        }
        console.log(xiaoji(url));
```
## 第二种
```
function formatqueryString(str) {
    str = decodeURI(str);
    console.log(str);
    let result = {}
    let arr = str.slice(1).replaceAll("&", "=").split("=");

    for (let i = 0; i < arr.length; i += 2) {
        result[arr[i]] = arr[i + 1]
    }
    return result
}
```
# Location 对象

location 是最有用的 BOM 对象之一，提供了当前窗口中加载文档的信息，以及通常的导航功能。这个对象独特的地方在于，它既是 window 的属性，也是 document 的属性。也就是说，window.location 和 document.location 指向同一个对象。location 对象不仅保存着当前加载文档的信息，也保存着把 URL 解析为离散片段后能够通过属性访问的信息。

# Location的属性

`Location`对象提供以下属性。

- `Location.href`：整个 URL。
- `Location.protocol`：当前 URL 的协议，包括冒号（`:`）。
- `Location.host`：主机。如果端口不是协议默认的`80`和`433`，则还会包括冒号（`:`）和端口。
- `Location.hostname`：主机名，不包括端口。
- `Location.port`：端口号。
- `Location.pathname`：URL 的路径部分，从根路径`/`开始。
- `Location.search`：查询字符串部分，从问号`?`开始。
- `Location.hash`：片段字符串部分，从`#`开始。
- `Location.username`：域名前面的用户名。
- `Location.password`：域名前面的密码。
- `Location.origin`：URL 的协议、主机名和端口。
- `Location: search`：返回一个URL标识中的 '?' 以及跟随其后的一串URL查询参数。

```js
// 当前网址为
// http://user:passwd@www.example.com:4097/path/a.html?x=111#part1
document.location.href
// "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"
document.location.protocol
// "http:"
document.location.host
// "www.example.com:4097"
document.location.hostname
// "www.example.com"
document.location.port
// "4097"
document.location.pathname
// "/path/a.html"
document.location.search
// "?x=111"
document.location.hash
// "#part1"
document.location.username
// "user"
document.location.password
// "passwd"
document.location.origin
// "http://user:passwd@www.example.com:4097"
```

这些属性里面，只有`origin`属性是只读的，其他属性都可写。

注意，如果对`Location.href`写入新的 URL 地址，浏览器会立刻跳转到这个新地址。

```js
// 跳转到新网址
document.location.href = 'http://www.example.com';
```

这个特性常常用于让网页自动滚动到新的锚点。

```js
document.location.href = '#top';
// 等同于
document.location.hash = '#top';
```

直接改写`location`，相当于写入`href`属性。

```js
document.location = 'http://www.example.com';
// 等同于
document.location.href = 'http://www.example.com';
```

另外，`Location.href`属性是浏览器唯一允许跨域写入的属性，即非同源的窗口可以改写另一个窗口（比如子窗口与父窗口）的`Location.href`属性，导致后者的网址跳转。`Location`的其他属性都不允许跨域写入。

# Location的方法

**（1）Location.assign()**

`assign`方法接受一个 URL 字符串作为参数，使得浏览器立刻跳转到新的 URL。如果参数不是有效的 URL 字符串，则会报错。

```js
// 跳转到新的网址
document.location.assign('http://www.example.com')
```

**（2）Location.replace()**

`replace`方法接受一个 URL 字符串作为参数，使得浏览器立刻跳转到新的 URL。如果参数不是有效的 URL 字符串，则会报错。

它与`assign`方法的差异在于，`replace`会在浏览器的浏览历史`History`里面删除当前网址，也就是说，一旦使用了该方法，后退按钮就无法回到当前网页了，相当于在浏览历史里面，使用新的 URL 替换了老的 URL。它的一个应用是，当脚本发现当前是移动设备时，就立刻跳转到移动版网页。

```js
// 跳转到新的网址
document.location.replace('http://www.example.com')
```

**（3）Location.reload()**

`reload`方法使得浏览器重新加载当前网址，相当于按下浏览器的刷新按钮。

它接受一个布尔值作为参数。如果参数为`true`，浏览器将向服务器重新请求这个网页，并且重新加载后，网页将滚动到头部（即`scrollTop === 0`）。如果参数是`false`或为空，浏览器将从本地缓存重新加载该网页，并且重新加载后，网页的视口位置是重新加载前的位置。

```js
// 向服务器重新请求当前网址
window.location.reload(true);
```

**（4）Location.toString()**

`toString`方法返回整个 URL 字符串，相当于读取`Location.href`属性。
# WebStorage

使用HTML5可以在本地存储用户的浏览数据。早些时候，本地存储使用的是 cookie。但是Web 存储需要更加的安全与快速，这些数据不会被保存在服务器上，但是这些数据只用于用户请求网站数据上。它也可以存储大量的数据，而不影响网站的性能。数据以 键/值 对存在, web网页的数据只允许该网页访问使用。

Web Storage的目的是为了克服由cookie带来的一些限制，当数据需要被严格控制在客户端上时，无须持续地将数据发回服务器。Web Storage的两个主要目标是：

- 提供一种在cookie之外存储会话数据的途径。
- 提供一种存储大量可以跨会话存在的数据的机制。

Web Storage又分为两种： sessionStorage 和localStorage ，即这两个是Storage的一个实例。

sessionStorage保存的数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空；

localStorage保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致。

localStorage的生命周期是永久性的。假若使用localStorage存储数据，即使关闭浏览器，也不会让数据消失，除非主动的去删除数据

sessionStorage 的生命周期是在浏览器关闭前。也就是说，在整个浏览器未关闭前，其数据一直都是存在的。

保存的数据都以“键值对”的形式存在。也就是说，每一项数据都有一个键名和对应的值。所有的数据都是以文本格式保存。

这个接口很像 Cookie 的强化版，能够使用大得多的存储空间。目前，每个域名的存储上限视浏览器而定，Chrome 是 2.5MB，Firefox 和 Opera 是 5MB，IE 是 10MB。其中，Firefox 的存储空间由一级域名决定，而其他浏览器没有这个限制。也就是说，Firefox 中，`a.example.com`和`b.example.com`共享 5MB 的存储空间。另外，与 Cookie 一样，它们也受同域限制。某个网页存入的数据，只有同域下的网页才能读取，如果跨域操作会报错。

# storage 方法

## 数据存储

`Storage.setItem()`方法用于存入数据。它接受两个参数，第一个是键名，第二个是保存的数据。如果键名已经存在，该方法会更新已有的键值。该方法没有返回值

```js
 window.sessionStorage.setItem('key', 'value');
 window.localStorage.setItem('key', 'value');
```

​     注意，Storage.setItem()两个参数都是字符串。如果不是字符串，会自动转成字符串，再存入浏览器。

```
window.sessionStorage.setItem(3, { foo: 1 });
window.sessionStorage.getItem('3') // "[object Object]"
```

如果储存空间已满，该方法会抛错。

写入不一定要用这个方法，直接赋值也是可以的。

```js
// 下面三种写法等价
window.localStorage.foo = '123';
window.localStorage['foo'] = '123';
window.localStorage.setItem('foo', '123');
```

## 获取数据

`Storage.getItem()`方法用于读取数据。它只有一个参数，就是键名。如果键名不存在，该方法返回`null`。

键名应该是一个字符串，否则会被自动转为字符串。

```js
window.sessionStorage.getItem('key')
window.localStorage.getItem('key')
```

## 删除数据

`Storage.removeItem()` 方法用于删除一条数据。它只有一个参数，就是键名。

```js
window.sessionStorage.removeItem('key')
window.localStorage.removeItem('key')
```

## 清空数据

`Storage.clear()`方法用于清除所有保存的数据。该方法的返回值是`undefined`。

```
window.sessionStorage.clear()
window.localStorage.clear()
```

## 获取键的值

`Storage.key()`接受一个整数作为参数（从零开始），返回该位置对应的键值

```
window.sessionStorage.setItem('key', 'value');
window.sessionStorage.key(0) // "key"
```

# storage 属性

1、Storage.length:返回保存的数据项个数。

```
window.localStorage.setItem('foo', 'a');
window.localStorage.setItem('bar', 'b');
window.localStorage.setItem('baz', 'c');

window.localStorage.length // 3
```

2、结合使用`Storage.length`属性和`Storage.key()`方法，可以遍历所有的键。

```
for (var i = 0; i < window.localStorage.length; i++) {
  console.log(localStorage.key(i));
}
```

sessionStorage需要注意的有以下几点：

- 页面刷新不会消除数据;
- 只有在当前页面打开的链接，才可以访sessionStorage的数据；
- 使用window.open打开页面和改变localtion.href方式都可以获取到sessionStorage内部的数据;

# storage 事件

Storage 接口储存的数据发生变化时，会触发 storage 事件，可以指定这个事件的监听函数。

```
window.addEventListener('storage', onStorageChange);
function onStorageChange(e) {
  console.log(e.key);
}
```

监听函数接受一个`event`实例对象作为参数。这个实例对象继承了 StorageEvent 接口，有几个特有的属性，都是只读属性。

```
StorageEvent.key：字符串，表示发生变动的键名。如果 storage 事件是由clear()方法引起，该属性返回null。
StorageEvent.newValue：字符串，表示新的键值。如果 storage 事件是由clear()方法或删除该键值对引发的，该属性返回null。
Storage.oldValue：字符串，表示旧的键值。如果该键值对是新增的，该属性返回null。
Storage.storageArea：对象，返回键值对所在的整个对象。也说是说，可以从这个属性上面拿到当前域名储存的所有键值对。
Storage.url：字符串，表示原始触发 storage 事件的那个网页的网址。
```

注意，该事件有一个很特别的地方，就是它不在导致数据变化的当前页面触发，而是在同一个域名的其他窗口触发。也就是说，如果浏览器只打开一个窗口，可能观察不到这个事件。比如同时打开多个窗口，当其中的一个窗口导致储存的数据发生改变时，只有在其他窗口才能观察到监听函数的执行。可以通过这种机制，实现多个窗口之间的通信。

# 在浏览器端保存数据对比

| 全局变量                                                     | Cookie                                                       | sessionStorage                                               | localStorage                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 只能短时间保存数据，页面跳转或刷新后数据会消失               | 按保存时间长短分成2种：会话Cookie：窗口关闭即消失持久化Cookie：可以由程序员指定存活时间，关闭窗口也不会消失 | 在会话中保存数据，称为会话存储，关闭浏览器即消失 原生API只能保存字符串 | 长期保存数据，称为本地存储，除非手动清除，否则一直都在 原生API只能保存字符串 |
| 可以认为是window对象（不是浏览器窗口）的属性，全局变量存在于页面上某一个window对象的内部，有嵌入关系或弹出关系的页面可以通过window.parent或window.top相互访问全局变量 | Cookie可以跨越多个页面，多个窗口，通常只要是本网站(域名)的页面都能操作属于本网站的Cookie在浏览端保存的Cookie会放入请求头（Cookie头）中被发送到服务器 | 域内                                                         | 域内                                                         |
| 可多可少，与用户设备的内存有关                               | 只能保存几十个数据，总量不能超过4KB（整个网站）              | 5M                                                           | 5M                                                           |
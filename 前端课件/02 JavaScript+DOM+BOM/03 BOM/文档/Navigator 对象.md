# navigator

`window.navigator`属性指向一个包含浏览器和系统信息的 Navigator 对象。脚本通过这个属性了解用户的环境信息。

# Navigator 对象的属性

## 浏览器名称

**（1）navigator.appCodeName**

`navigator.appCodeName` 返回当前浏览器的内部“开发代号”名称。 **不能保证此属性返回的值是正确的。**

在任何浏览器中 ，该`navigator.appCodeName`属性的值始终为“ `Mozilla`”。保留此属性仅用于兼容性目的。

**注意：**不要依赖此属性返回真实的产品名称。所有浏览器都返回“ `Mozilla`”作为该属性的值。

**（2）navigator.appName**

`navigator.appName` 返回浏览器官方名称。 **不能保证此属性返回的值是正确的。**

在任何浏览器中 ，该**`Navigator.appName`**属性的值始终为“ `Netscape`”。保留此属性仅用于兼容性目的。

**注意：**不要依赖此属性来返回真实的浏览器名称。所有浏览器都返回“ `Netscape`”作为该属性的值。

## 浏览器版本

`navigator.appVersion` 返回浏览器版本。**不能保证此属性返回的值是正确的**。

**注意：**不要依赖此属性来返回正确的浏览器版本。

## 用户代理

`navigator.userAgent`属性返回浏览器的 User Agent 字符串，表示用户设备信息，包含了浏览器的厂商、版本、操作系统等信息。

下面是 Chrome 浏览器的`userAgent`。

```js
navigator.userAgent
// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"
```

通过`userAgent`属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且用户可以改变这个字符串。这个字符串的格式并无统一规定，也无法保证未来的适用性，各种上网设备层出不穷，难以穷尽。所以，现在一般不再通过它识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的 JavaScript 功能。

不过，通过`userAgent`可以大致准确地识别手机浏览器，方法就是测试是否包含`mobi`字符串。

```js
var ua = navigator.userAgent.toLowerCase();

if (/mobi/.test(ua)) {
  // 手机浏览器
} else {
  // 非手机浏览器
}
```

如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。

```js
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent);

// 或者
navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
```

## 插件

`Navigator.plugins`属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件，比如 Flash、ActiveX 等。

```js
var pluginsLength = navigator.plugins.length;

for (var i = 0; i < pluginsLength; i++) {
  console.log(navigator.plugins[i].name);
  console.log(navigator.plugins[i].filename);
  console.log(navigator.plugins[i].description);
  console.log(navigator.plugins[i].version);
}
```

## 操作系统

`Navigator.platform`属性返回用户的操作系统信息，比如`MacIntel`、`Win32`、`Linux x86_64`等 。

```js
navigator.platform
// "Linux x86_64"
```

注意：推荐的替代此属性的是`navigator.userAgentData`。

## 联网状态

`navigator.onLine`属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。

```js
navigator.onLine // true
```

有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的`onLine`属性会返回`true`，所以不能假定只要是`true`，用户就一定能访问互联网。不过，如果是`false`，可以断定用户一定离线。

用户变成在线会触发`online`事件，变成离线会触发`offline`事件，可以通过`window.ononline`和`window.onoffline`指定这两个事件的回调函数。

```js
window.addEventListener('offline', function(e) { console.log('offline'); });
window.addEventListener('online', function(e) { console.log('online'); });
```

## 语言

`Navigator.language`属性返回一个字符串，表示浏览器的首选语言。该属性只读。

```js
navigator.language // "en"
```

`Navigator.languages`属性返回一个数组，表示用户可以接受的语言。`Navigator.language`总是这个数组的第一个成员。HTTP 请求头信息的`Accept-Language`字段，就来自这个数组。

```js
navigator.languages  // ["en-US", "en", "zh-CN", "zh", "zh-TW"]
```

如果这个属性发生变化，就会在`window`对象上触发`languagechange`事件。

## 位置信息

`Navigator.geolocation`属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。

Geolocation 对象提供下面三个方法。

- Geolocation.getCurrentPosition()：得到用户的当前位置
- Geolocation.watchPosition()：监听用户位置变化
- Geolocation.clearWatch()：取消`watchPosition()`方法指定的监听函数

注意，调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权。

## 否启用了 cookie

`navigator.cookieEnabled`属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开。

```js
navigator.cookieEnabled // true
```

注意，这个属性反映的是浏览器总的特性，与是否储存某个具体的网站的 Cookie 无关。用户可以设置某个网站不得储存 Cookie，这时`cookieEnabled`返回的还是`true`。

# Navigator 对象的方法

## 电量信息

浏览器可以访问设备电池及充电状态的信息。navigator.getBattery()方法返回一个battery的promise对象，然后resolve后得到BatteryManager对象，它提供了一些新的事件，以及方法供您监控电池的状态。

```js
navigator.getBattery().then((battery) => console.log(battery)); 
```

BatteryManager 包含 4 个只读属性，提供了设备电池的相关信息。

- charging：布尔值，表示设备当前是否正接入电源充电。如果设备没有电池，则返回 true。 
- chargingTime：整数，表示预计离电池充满还有多少秒。如果电池已充满或设备没有电池，则返回 0。
- dischargingTime：整数，表示预计离电量耗尽还有多少秒。如果设备没有电池，则返回 Infinity。 
-  level：浮点数，表示电量百分比。电量完全耗尽返回 0.0，电池充满返回 1.0。如果设备没有电池，则返回 1.0。

这个 API 还提供了 4 个事件属性，可用于设置在相应的电池事件发生时调用的回调函数。可以通过给 BatteryManager 添加事件监听器，也可以通过给事件属性赋值来使用这些属性。

- chargingchange 电池充电状态更新时被调用。
- chargingtimechange 电池充电时间更新时被调用。
- dischargingtimechange 电池断开充电时间更新时被调用。
- levelchange 电池电量更新时被调用。

# Navigator 的实验性属性

Navigator 对象有一些实验性属性，在部分浏览器可用。

## Navigator.deviceMemory

`navigator.deviceMemory`属性返回当前计算机的内存数量（单位为 GB）。该属性只读，只在 HTTPS 环境下可用。

它的返回值是一个近似值，四舍五入到最接近的2的幂，通常是 0.25、0.5、1、2、4、8。实际内存超过 8GB，也返回`8`。

```js
if (navigator.deviceMemory > 1) {
  await import('./costly-module.js');
}
```

上面示例中，只有当前内存大于 1GB，才加载大型的脚本。

## Navigator.hardwareConcurrency

`navigator.hardwareConcurrency`属性返回用户计算机上可用的逻辑处理器的数量。该属性只读。

现代计算机的 CPU 有多个物理核心，每个物理核心有时支持一次运行多个线程。因此，四核 CPU 可以提供八个逻辑处理器核心。

```js
if (navigator.hardwareConcurrency > 4) {
  await import('./costly-module.js');
}
```

上面示例中，可用的逻辑处理器大于4，才会加载大型脚本。

该属性通过用于创建 Web Worker，每个可用的逻辑处理器都创建一个 Worker。

```js
let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker('cpuworker.js'),
    inUse: false
  };
  workerList.push(newWorker);
}
```

上面示例中，有多少个可用的逻辑处理器，就创建多少个 Web Worker。

## Navigator.connection

`navigator.connection`属性返回一个对象，包含当前网络连接的相关信息。

- downlink：有效带宽估计值（单位：兆比特/秒，Mbps），四舍五入到每秒 25KB 的最接近倍数。
- downlinkMax：当前连接的最大下行链路速度（单位：兆比特每秒，Mbps）。
- effectiveType：返回连接的等效类型，可能的值为`slow-2g`、`2g`、`3g`、`4g`。
- rtt：当前连接的估计有效往返时间，四舍五入到最接近的25毫秒的倍数。
- saveData：用户是否设置了浏览器的减少数据使用量选项（比如不加载图片），返回`true`或者`false`。
- type：当前连接的介质类型，可能的值为`bluetooth`、`cellular`、`ethernet`、`none`、`wifi`、`wimax`、`other`、`unknown`。

```js
if (navigator.connection.effectiveType === '4g') {
  await import('./costly-module.js');
}
```

上面示例中，如果网络连接是 4G，则加载大型脚本。

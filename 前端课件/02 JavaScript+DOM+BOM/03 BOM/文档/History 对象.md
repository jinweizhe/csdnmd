# 概述

history 对象表示当前窗口用户的导航（浏览）历史记录。因为 history 是 window 的属性，所以每个 window 都有自己的 history 对象。

出于安全考虑，这个对象不会暴露用户访问过的 URL，但可以通过它在不知道实际 URL 的情况下前进和后退。

```js
// 后退到前一个网址
history.back()

// 等同于
history.go(-1)
```

浏览器工具栏的“前进”和“后退”按钮，其实就是对 History 对象进行操作。

# 属性

History 对象主要有两个属性。

- `History.length`：只读属性，当前窗口访问过的网址数量（包括当前网页）。
- `History.state`：History 堆栈最上层的状态值（详见下文）

```js
// 当前窗口访问过多少个网页
window.history.length // 1

// History 对象的当前状态
// 通常是 undefined，即未设置
window.history.state // undefined
```

# 导航方法

**（1）History.go(delta)**

`History.go(delta)`方法可以在用户历史记录中沿任何方向导航，可以前进也可以后退。这个方法只接收一个参数，这个参数是一个整数，表示前进或后退多少步。

- 负值表示在历史记录中后退（类似点击浏览器的“后退”按钮）
- 正值表示在历史记录中前进（类似点击浏览器的“前进”按钮）
- 如果参数超过实际存在的网址范围，该方法无效果
- 如果不指定参数，默认参数为`0`，相当于刷新当前页面，与调用`location.reload()`具有相同的效果。

```js
// 后退一页
history.go(-1); 

// 前进一页
history.go(1); 

// 前进两页
history.go(2);

history.go(0); // 刷新当前页面
```

**（2）history.back() 和 history.forward()**

go()有两个简写方法：back()和 forward()。顾名思义，这两个方法模拟了浏览器的后退按钮和前进按钮。

- `history.back()`：在浏览器历史记录里前往上一页，等同于点击浏览器的后退键。该方法等价于 `history.go(-1)`。如果没有上一页，则此方法调用不执行任何操作也不报错。

- `history.forward()`：在浏览器历史记录里前往下一页，等同于点击浏览器的前进键。该方法等价于 `history.go(1)`。 当浏览器历史栈处于最顶端时( 当前页面处于最后一页时 )调用此方法没有效果也不报错。

```js
// 后退一页
history.back(); 

// 前进一页
history.forward();
```

history 对象通常被用于创建“后退”和“前进”按钮，以及确定页面是不是用户历史记录中的第一条记录。

注意，移动到以前访问过的页面时，页面通常是从浏览器缓存之中加载，而不是重新要求服务器发送新的网页。

# 历史状态管理

## 添加历史状态

`History.pushState()`方法用于在历史中添加一条记录。

```js
window.history.pushState(state, title, url)
```

该方法接受三个参数，依次为：

- `state`：一个与添加的记录相关联的状态对象，主要用于`popstate`事件。该事件触发时，该对象会传入回调函数。也就是说，浏览器会将这个对象序列化以后保留在本地，重新载入这个页面的时候，可以拿到这个对象。如果不需要这个对象，此处可以填`null`。
- `title`：新页面的标题。但是，现在所有浏览器都忽视这个参数，所以这里可以填空字符串。
- `url`：新的网址，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。

假定当前网址是`example.com/1.html`，使用`pushState()`方法在浏览记录（History 对象）中添加一个新记录。

```js
var stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');
```

添加新记录后，浏览器地址栏立刻显示`example.com/2.html`，但并不会跳转到`2.html`，甚至也不会检查`2.html`是否存在，它只是成为浏览历史中的最新记录。这时，在地址栏输入一个新的地址(比如访问`google.com`)，然后点击了倒退按钮，页面的 URL 将显示`2.html`；你再点击一次倒退按钮，URL 将显示`1.html`。

总之，`pushState()`方法不会触发页面刷新，只是导致 History 对象发生变化，地址栏会有反应。

使用该方法之后，就可以用`History.state`属性读出状态对象。

```js
var stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');
history.state // {foo: "bar"}
```

如果`pushState`的 URL 参数设置了一个新的锚点值（即`hash`），并不会触发`hashchange`事件。反过来，如果 URL 的锚点值变了，则会在 History 对象创建一条浏览记录。

如果`pushState()`方法设置了一个跨域网址，则会报错。

```js
// 报错
// 当前网址为 http://example.com
history.pushState(null, '', 'https://twitter.com/hello');
```

上面代码中，`pushState`想要插入一个跨域的网址，导致报错。这样设计的目的是，防止恶意代码让用户以为他们是在另一个网站上，因为这个方法不会导致页面跳转。

## 更新历史状态

`History.replaceState()`方法用来更新 History 对象的当前记录，更新状态不会创建新历史记录，只会覆盖当前状态，其他都与`pushState()`方法一模一样。

假定当前网页是`example.com/example.html`。

```js
history.pushState({page: 1}, 'title 1', '?page=1')
// URL 显示为 http://example.com/example.html?page=1

history.pushState({page: 2}, 'title 2', '?page=2');
// URL 显示为 http://example.com/example.html?page=2

history.replaceState({page: 3}, 'title 3', '?page=3');
// URL 显示为 http://example.com/example.html?page=3

history.back()
// URL 显示为 http://example.com/example.html?page=1

history.back()
// URL 显示为 http://example.com/example.html

history.go(2)
// URL 显示为 http://example.com/example.html?page=3
```

传给 pushState()和 replaceState()的 state 对象应该只包含可以被序列化的信息。因此，DOM 元素之类并不适合放到状态对象里保存。

**注意**：使用 HTML5 状态管理时，要确保通过 pushState()创建的每个“假”URL 背后都对应着服务器上一个真实的物理 URL。否则，单击“刷新”按钮会导致 404 错误。所有单页应用程序（SPA，Single Page Application）框架都必须通过服务器或客户端的某些配置解决这个问题。

# popstate 事件

每当同一个文档的浏览历史（即`history`对象）出现变化时，就会触发`popstate`事件。

注意，仅仅调用`pushState()`方法或`replaceState()`方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用`History.back()`、`History.forward()`、`History.go()`方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。

使用的时候，可以为`popstate`事件指定回调函数。

```js
window.onpopstate = function (event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
};

// 或者
window.addEventListener('popstate', function(event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
});
```

回调函数的参数是一个`event`事件对象，的事件对象有一个`state`属性指向`pushState`和`replaceState`方法为当前 URL 所提供的状态对象（即这两个方法的第一个参数）。上面代码中的`event.state`，就是通过`pushState`和`replaceState`方法，为当前 URL 绑定的`state`对象。

基于这个状态，应该把页面重置为状态对象所表示的状态（因为浏览器不会自动为你做这些）。记住，页面初次加载时没有状态。因此点击“后退”按钮直到返回最初页面时，event.state 会为 null。

这个`state`对象也可以直接通过`history`对象读取。

```js
var currentState = history.state;
```

注意，页面第一次加载的时候，浏览器不会触发`popstate`事件。
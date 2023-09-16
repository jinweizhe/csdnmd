## 请求路径
```
// const:常量，constant；一经赋值，无法修改。常量的名称通常以纯大写表示。

//HOST为端口号，所有请求的共同地方
const HOST = "http://123.57.142.211:8080";
// para1:对象，调用函数时，传递请求路径、参数...
// {path:"/api/goodList",query:"page=1",method:"GET"}
// para2:回调函数。
function request(options, cb) {
    var xhr = new XMLHttpRequest();
    var url = HOST + options.path;
    if (options.query) {
        url += "?" + options.query;
    }
    xhr.open(options.method, url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // console.log(xhr.responseText);
            var data = JSON.parse(xhr.responseText);
            cb(data);//回调函数传入data数据
        }
    }

}
// http://123.57.142.211:8080/api/goodList?page=1
```
## 懒加载函数
```
// 节流函数：限制操作频率
// para1:cb，回调函数；真正想做的操作。
// para2:wait,等待时间；多长时间操作一次。
function throttle(cb,wait){
    var timer;
    return function(){
        if(timer) return;
        timer = setTimeout(function(){
            cb();
            timer = null;
        },wait)
    }
}

案例
// 监听窗口的滚动事件，每次滚到最底部会打印1
window.onscroll = throttle(function () {
    // 可视区域高度
    var windowHeight = document.documentElement.clientHeight;
    // 页面滚动高度
    var scrollHeight = document.documentElement.scrollTop;
    // 获取html总高度
    var htmlHeight = document.documentElement.scrollHeight;
    if (windowHeight + scrollHeight >= htmlHeight - 5) {//-5是浏览器有误差稍微减以下就行，如过不减去的话，效果能实现也行，如过实现不了就稍微减去一点
        console.log("1")  //可以发现每次滚到底部时都会延迟两秒才打印1，懒加载图片是延迟后创建并拼接新对象实现的
    }
}, 2000);
```
## 点击元素让其跳转并携带数据
```
	比如div我想点击让他跳转，并且带走我这个请求获得的数据，那么可以给div加个onclick=“xj(this)”,及时for循环有很多个也不用遍历，此时this就是我们点击的元素，例如：
for(let i=0;i<data.length;i++){
//这里要使用自定义属性data
	<div data-id=`${data[i].id}` data-name=`${data[i].name}`  onclick="xj(this)"></div>
	}
function xj(a){
console.log("1")//这时会发现不管点哪个元素都能获取到1
console.log(a.data.id,a.data.name)//这时候会发现会打印我们点击元素的数据，然后可以利用这个特点将参数携带过去
//比如我想点击某个div就跳转到新页面,当前页面的同级下的index.html，同时就当前div数据也传送过去，那么
location.href=`./index.html?id=${a.data.id}&name=${a.data.name}`,即可
```
##  url编码和解码操作
```
// 将查询字符串转换为对象。
function formatqueryString(str) {
    str = decodeURI(str);
    var result = {};
    var arr = str.slice(1).replaceAll("&", "=").split("=");
    for (var i = 0; i < arr.length; i += 2) { // 只会循环0 2
        result[arr[i]] = arr[i + 1];
    }
    return result;
}



//博客第三步的传过来的数据，就可以使用location.search查看，并且使用formatqueryString()转化为对象后可以让此页面获得上个页面的数据
console.log(location.search);
let b = formatqueryString(location.search)
console.log(b);
//此时b就是传过来的解码过的对象
```




```
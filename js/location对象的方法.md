location.assign()
```
跟href 一样，可以跳转页面(（有前进后退功能   也称为重定向页面)
```
location.replace()
```
替换当前页面。因为不记录历史，所以不能后退页面
```
location.reload()
```
重新加载页面。相当于刷新按钮或者f5 如果参数为true 强制刷新ctrl+f5
```
location.search     
```
 获取  (?传来的参数  例如    ?uname=andy)
```
location.hash     
```
hash属性获取地址中的哈希值，符号#后面部分<a href="#one">第一个</a>
```
location.href
```
跳转页面
 location.href = 'http://www.itcast.cn'
```
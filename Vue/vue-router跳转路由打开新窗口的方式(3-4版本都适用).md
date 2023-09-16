**第一种**
```js
      const routeUrl = this.$router.resolve({
        path: "/targetUrl",
        query: { id: 96 },
      });
      window.open(routeUrl.href, "_blank");
    },
```
**或者**
```js
const xj = () => {
  const c = router.resolve({
    path: "/login",
  });
  window.open(c.href, "_blank");
};
```
**第二种**
```js
<router-link target="_blank" :to="{ path: '/catalog', query: { id: '1' } }">打开新的标签页</router-link>
```
如果通过iframe嵌入到其他系统中，这样打开新窗口，会丢掉iframe的壳子，出现有问题
需改为window.parent.open(routeUrl.href, “_blank”);
注意同源问题，需要解决

[看这个作者的](https://blog.csdn.net/weixin_50576800/article/details/125024849)
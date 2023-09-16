### 安装sass
```js
npm i sass
```
### 新建 任意名.module.scss (没打错字,就是安装sass,文件名scss)
**例如我新建app.module.scss文件,在App.jsx使用**

![在这里插入图片描述](https://img-blog.csdnimg.cn/e2ced49cd62142c28010c647ea884691.png)
在建好的文件放入以下内容
```css
.u1{
    display: flex;
}
```
### 在文件中使用
```js
//先引入进来
import styles from './app.module.scss'
export default App(){
	const arr = [
	    { id: 1, path: "/home", name: "首页" },
	    { id: 2, path: "/shoppingcar", name: "购物车" },
	    { id: 3, path: "/login", name: "登录" },
	    { id: 4, path: "/reg", name: "注册" },
	  ];

	return (
	    <>
	      <header>
	      /**在这里通过className属性,值为{导入起的名字.scss文件的类名}来得到当前css样式,通过scss文件可以起到样式隔离的效果,防止子组件样式被穿透*/
	        <ul className={styles.u1}>
	          {arr.map((item) => {
	            return <li key={item.id}>{item.name}</li>;
	          })}
	        </ul>
	      </header>
	    </>
	  );
	}
```
### 页面的效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/70eb796a9ac540ad8c27311b572b086b.png)
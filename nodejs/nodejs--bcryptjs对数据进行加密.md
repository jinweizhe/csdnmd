@[toc]
### bcrypts对密码进行加密处理
**优点**
- 加密之后的密码，无法被逆向破解
- 同一明文密码多次加密，得到的加密结果各不相同，保证了安全性

1. 运行如下命令,安装指定版本的bcryptjs
```js
npm i bcryptjs@2.4.3
```
2. 在代码中导入bcryptjs
```js
const bcrypt = require('bcryptjs')
```
3. 例如:在注册用户的处理函数中，确认用户名可用之后，调用 bcrypt.hashSync(明文密码, 随机盐的长度) 方法，对用户的密码进行加密处理：
```js
// 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
//将返回值重新赋值给password变量,最后打印
let password = bcrypt.hashSync(明文密码, 10)
console.log("password")
```
**打印结果如下:**
![在这里插入图片描述](https://img-blog.csdnimg.cn/b806634ff8bb46ff8252259eec315bf1.png)
#### 登录时,需要比较用户输入的密码和数据库是否一致
**由于我们这里是加密过的所以可以通过bcrypt提供的compareSync(用户提交的密码,数据库中的密码) , 的方法比较二者是否一致,返回布尔值,true为一致,false为不一致**
```js
const compareResult = bcrypt.compareSync(用户提交的密码,数据库中的密码)
```
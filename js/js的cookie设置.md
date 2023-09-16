### cookie介绍

> cookie不支持以运行本地文件的方式增删改查。存储在cookie中的数据， vscode中安装live server插件查看cookie。
>     一、Cookie是什么 ?
>        cookie是一种客户端把用户信息以文件形式存储到本地硬盘的技术。
>     二、Cookie的作用
>         cookie的作用很单一，就是存储客户数据。(存储数据的文件叫Cookie文件)
>     三、cookie的注意事项
>         1、不同浏览器存放cookie的位置不同，不能通用。
>         2、cookie文件的存储以域名形式进行区分的。
>         3、一个域名下存放cookie的数量是有限的。
>         4、每个cookie存放的内容大小也是有限的。

### cookie增删改查

>  cookie的增删改查
>      增加/设置 cookie
>  会话cookie(seccion cookie)，不设置数据的过期时间，默认cookie在浏览器关闭时删除，
>      格式 “key=value”
>      cookie存储
>      不用live server运行的话，单纯打开文件绝对路径去运行是没有cookie的

#### 增        
```
   document.cookie = "username=靳伟哲"
   document.cookie = "age=20"
```
#### 删

> 不设置时间默认浏览器关闭删除
> 设置时长到达过期的代码如下
```
  	    //直接将cookie的有效时间设置为过去即可。
        let date = new Date()//获取当前时间
        //获取当前时间的毫秒数gettime()
        //setTime()根据毫秒数设置时间
        // date.getTime()获取当前时间
        console.log(date.toUTCString());//查看世界时间
        date.setTime(date.getTime() + 1000 * 10)//单位为毫秒，设置几秒后删除cookie，这里为10秒
        //使用方法打开浏览器页面，查看cookie值，最后把下面设置cookie和时间的(下面这行)注释掉，静等两分钟看浏览器即可。
        document.cookie = `age=50;expires=${date.toUTCString()}`//给添加的cookie值加上日期
```
#### 改
```
修改cookie只需要重新赋值即可
        document.cookie = "age=50"
```
#### 查
```
		console.log(document.cookie);//这种方式会查找所有cookie的数据，以字符串形式返回

		//使用分隔替换等方法将字符串转换为对象,/\s/g,全局匹配空格
        let cookiestr = document.cookie.replace(/\s/g, '').split(";")
        console.log(cookiestr);
```
### cookie使用场景

>  名字cookie:
>              用户在网页输入名字时，名字可以记录在cookie中;再次访问网站时，会收到类似""welcome靳伟哲!“的欢迎词。
>              保存用户登录信息:
>              访问登录界面时，一般会有类似"下次自动登录"的选项，勾选过后下次就不需要重复验证，就可以通过cookie保存用户的id。
>              日期cookie:
>               用户访问网页时,可将当前的日期存储于cookie中。再次访问网页时，会收到类似这样的消息: "Your last visit was on Tuesday August 11,2022!"。日期也是从cookie中获取。
>             	购物车，跟踪用户行为等.....

### cookie的存储方式

>  cookie的存储方式：
>          seccion cookie(会话cookie)
>              是一种临时的cookie，存在内存中，浏览器关闭，会话cookie就被删除。
>          持久化cookie:
>              存储在硬盘上，不同的操作系统，浏览器存储位置不同。不管浏览器退出还是电脑重启，持久化cookie都存在，持久cookie有过期时间，过了过期时间就会自动删除

#### 会话cookie
```
   document.cookie="sex=男"
   document.cookie="age=20"
```
#### 持久化cookie,需要设置过期时间
```
   let data=new Date()
   let gettime= data.getTime()//获取当前时间的毫秒数
   data.setTime(gettime+1000*20)//设置的为毫秒单位，将过期时间设置为打开浏览器的20秒之后
   console.log(data.toUTCString());//打印世界时间，北京时间为当前时间加8小时
   //使用时先设置下面的数据打开浏览器看cookie，然后把下面数据注释掉再返回浏览器等待20秒看cookie
   document.cookie=`name=萧寂;expires=${data.toUTCString()}`//两个参数，第一个为设置的cookie数据，用分号分隔，第二个为过期结束时的世界时间，北京时间加8小时
```
### 封装设置和获取cookie的函数
#### 设置cookie的函数

> 参数1：设置的cookie的key值，也就是cookie的名字
> 参数2：设置的cookie的value值，就是cookie的数据
> 参数3：设置cookie的过期时间(有效期)（正值:设置有效期，负值:删除cookie，因为负值在当前打开浏览器前删除，所以负值就是删除cookie）
```
        function setcookie(cname, value, cexpires) {
				let data=new Date()
	            let datatime=data.getTime()//获取当前时间
	            data.setTime(datatime+cexpires*1000*60*60*24)//设置过期时间，单位为天
	            let expires="expires="+data.toUTCString()//拼接世界时间的过期时间（有效期数据），北京时间为当前时间加八小时即可
           	    document.cookie=`${cname}=${value};${expires}`//设置cookie数据和过期时间，中间用分号分隔
        }
        setcookie("xiaoji",520,2)//设置了xiaoji=520的cookie，2天后失效
        setcookie("nihao",100,-2)//设置了nihao=100的cookie，打开浏览器2天前就失效了，相当于打开浏览器就删除了
```
#### 获取cookie的函数

> 参数为cookie的key值，cookie的名字

```
        function getcookie(cname) {
            //拼接=是为了查找更准确，比如输入name也回去查找nameuser,或者namexiaoji，在后面拼接=为了精确查找我们需要的值
            let name=cname+"="
            let ck=document.cookie.replace(/\s/g,"").split(";")//:/\s/g 全局匹配空格，将空格替换空字符串，最后用分号分隔，将返回的数据替换成数组
            console.log(ck);
            for(let i=0;i<ck.length;i++){
                //查找name这个key第一次出现的索引值，如果为0，则符合条件
                //如果为其他则不满足，如name,uaername,都包含name，但是只需要name的key和value，所以name第一次出现的索引值必须为0
                if(ck[i].indexOf(name)==0){
                    console.log(ck[i]);
                    console.log(name.length);

                    //因为name的长度cname+"="，刚好截取的长度为name.value
                    //截取key的长度加=之后的value的值，截取的长度为name.length
                    return ck[i].substring(name.length)
                }
            }
        }
        console.log(getcookie("xiaoji"));
```
#### 根据两个封装的函数做个小案例
```js
		//先检测cookie中有没有username
        //创建一个检测cookie的函数
        //如果设置了cookie，将显示一个问候信息
        //没有设置cookie，弹出prompt，用于询问用户姓名，将用户姓名存入cookie

        function checkCookie() {
            //先获取用户信息username
            var user = getcookie("username")

            if (user) {
                alert("欢迎" + user + "再次访问")
            } else {
                user = prompt("请输入你的名字：")
                console.log(user);
                // console.log(Boolean(user));
                if (user) {
                    //key value 有效期
                    setcookie("username", user, 30)
                }
            }
        }
        checkCookie()
```
### cookie参数

>  cookie 有一个很重要的概念，就是cookie的作用域
>      cookie的作用域为当前域及其子域
>      设置cookie的参数
>      Cookie未设置secure属性，攻击者可以通过嗅探HTTP形式的数据包获取到该cookie。
>      document.cookie="name=value;expires=有效期;domain=域名;path=有效路径;secure=true/false"
>  	name，必需值, cookie名称
>      value，必需值, cookie的值
>      expires，可选，cookie有效期
>      domain，可选。规定cookie的域名。
>          不设置此参数时，默认为当前主机域名
>          127.0.0.1 当前主机域名
>      path，可选，规定cookie的有效服务路径。参数domain基础上设置有效路径。
>          不设置默认，在当前目录及子目录都有效
>          "/"就是在整个domain都有效
>          如果path设置为"/test",namecookie只在 domain下的/test目录及子目录里有效。
>           cookie是存于用户硬盘的一个文件,这个文件通常对应于一个域名,也就是说, cookie可以跨越一个域说cookie可以跨越一个域名下的多个网页,但不能跨越多个域名使用。
### cookie的domain的path介绍
#### 项目结构
![在这里插入图片描述](https://img-blog.csdnimg.cn/32b41a083e0b44cca7f6cea7adeecad1.png)
> domain参数可以设置父域名以及自身，但不能设置其它域名过，包括子域名，否则cookie不起作用。
>            那么cookie的作用域;
>                cookie的作用域是domain本身以及domain下的所有子域名。
 #### 在index里写下下面代码
```
         document.cookie = "name=/index目录有效"
        //默认不定义path,cookie只对当前目录(/index)及其子目录有效

        //path=/表示cookie在整个域名下都有效
        document.cookie = "golobal=整个域名都有效;path=/"

		// encodeURI()中文加密
        // decodeURI()中文解密
		//如果是设置当前域下别的文件的cookie，需要指定文件路径从根目录开始拼接，如果有中文，需要用encodeURI进行编码，英文的话直接拼接路径即可
		//指定文件路径，表示cookie只在指定文件内有效
        let path = encodeURI("/作业/11.8/cookie作用域/test")
        document.cookie = `pathtest=/test有效数据;path=${path}`
```
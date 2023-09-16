> 先导入内置的fs模块
> 导入node的fs文件系统的模块,该文件模块主要负责文件的各种操作,例如创建,写数据,读数据,文件复制,删除,移动...
> fs:file system,文件系统
> database数据库
> **切记:运行文件一定要切换到文件所在的文件夹路径,node所有的路径都是相对于运行文件的文件夹路径的**

```bash
const fs = require("fs")
```
#### 创建一个文件夹
```js
//参数一:文件路径
//参数二:回调函数;操作完成时,会执行该回调函数;回调函数默认携带一个error参数;
//error为null,说明操作成功,不为null说明操作失败,errpr为失败原因
//切记不要多次运行,存在同名文件夹就报错,第一次创建完第二次再运行就报错了
fs.mkdir("./root",(error)=>{
    console.log(error);
})
```
#### 写入文件(创建文件并写入)
```js
//写文件
//参数一:文件路径(文件若不存在会自动创建,文件存在会覆盖文件原始内容)
//参数二:写入的内容(数据)
//参数三:错误信息,error为null,说明操作成功,不为null说明操作失败,errpr为失败原因
fs.writeFile("./root/data.txt",JSON.stringify({username:"xiaoji",psw:"123456"}),(error)=>{
    console.log(error,"------写文件");
})
```
#### 判断文件是否存在
```js
//判断文件是否存在
let result=fs.existsSync("./root");
console.log(result);
```
#### 文件追加内容操作
```js
fs.appendFile("./root/data.txt", "hello world", (error) => {
    console.log(error, "-----追加数据");
})
```
#### 文件读取操作
###### 第一种写法
```js
//调用fs.readFile()方法读取文件 参数一：文件路径，
//参数二：读取文件采用的编码格式，默认utf-8  
//参数三：回调函数，可以拿到读取失败和成功的结果  err dataStr
fs.readFile("../111.txt", "utf-8", function (err, dataStr) {
    //打印失败的结果
    //如果读取成功，则err的值为 null
    //如果读取失败，则err的值为错误对象，dataStr值为undefined
    console.log(err);
    console.log("---------------");
    //打印成功的结果
    console.log(dataStr);
})
```
###### 第二种写法
```js
//参数一:路径
//参数二:回调函数(参数一:错误信息,参数二:读取到的数据)
fs.readFile("./root/data.txt",(error,data)=>{
    console.log(error,data+"");//这里data会转换成一种编码格式,加个""会隐式转换为原来文件内容,第一种方式参数二直接转换了,两种方式均可读文件,推荐使用第一种
})
```
#### 删除文件
```js
//删除文件 link:链接
//参数一:文件路径
//参数二:回调函数(错误信息,成功为null,不成功为返回的错误信息)
fs.unlink("./root/data.txt",(error)=>{
    console.log(error,"---------文件删除");
})
```
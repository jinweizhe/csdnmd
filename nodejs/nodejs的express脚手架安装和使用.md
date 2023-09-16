### 脚手架安装
```bash
npm install express-generator -g (全局安装,避免下次使用再安装)
//创建一个脚手架项目
express -e 项目名
//安装完上上面的插件,再执行上面这个命令就可以在当前目录创建一个express脚手架项目了
//创建完成后,记得安装一下项目依赖
npm i
//安装完依赖项后,项目才算真正创建完
```
### 脚手架项目结构

![在这里插入图片描述](https://img-blog.csdnimg.cn/ebd00db4ddbe46e39083a7fe4b1fd62e.png)

### express脚手架项目的启动方式
```
//项目启动方式(在当前项目按照如下三种方式,即可启动项目)
//一.根目录下运行
npm start
//二.node或者nodemon运行bin目录下的www
node /bin/www  也可以进入bin文件运行www    node www
//或者nodemon
nodemon /bin/www   也可以进入bin文件运行www    nodemon www
//三.修改package.json的scripts节点,内容如下
  "scripts": {
    "start": "node ./bin/www",
    "dev" : "nodemon ./bin/www"
  },
 //每个属性可以自定义,后面内容为运行命令,运行的还是/bin/www文件,这里用的相对路径,即start运行的node命令,run运行的是nodemon命令
//进入当前项目,运行命令如下:
npm start  (相当于node /bin/www)   
//或者
npm run dev   (相当于nodemon /bin/www)
```
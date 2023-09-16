## webpack工程化项目

### 1.初始化配置文件

##### 	1.创建一个文件夹(名称为英文名，否则报错)

##### 	2.在文件夹执行命令:npm init -y(会发现多了个package.json文件)

##### 	3.在文件夹新建src文件，并在里面创建index.html和index.js文件(文件名和路径不能错，这是webpack默认打包的文件名，详情解释和改动看下面的“修改打包的默认约定”)

##### 	4.在index.html里面初始化首页结构（布局HTML）,我的结构为

```
<body>
    <ul>
        <li>这是第1个li</li>
        <li>这是第2个li</li>
        <li>这是第3个li</li>
        <li>这是第4个li</li>
        <li>这是第5个li</li>
        <li>这是第6个li</li>
        <li>这是第7个li</li>
        <li>这是第8个li</li>
        <li>这是第9个li</li>
    </ul>
</body
```

##### 	5.安装jquery，运行npm install jquery -S

> -S 是--save的简写，将包装在--save节点下，这个节点(就是package.json里面的dependencies)下的包项目上线或部署，会将需要的包放到这个节点下

##### 发现又多了个json文件,打开package.json,会发现多了![在这里插入图片描述](https://img-blog.csdnimg.cn/ac641a304352476da7615a3b05da53d2.png#pic_center)


##### 	6.使用ES6语法，在js里面导入jQuery（import xxx from "jquery"）,例如（import $ from "jquery"），我的js为

```
// 使用ES6导入jQuery
import $ from "jquery"
//定义jquery的入口函数
$(function(){
    //实现奇偶行变色
    //奇数行为红色
    $("li:odd").css("background-color","red")
    $("li:even").css("background-color","red")
})
```

##### 7.导入后就可以在js里面写jq代码了，最后别忘了导入html

##### 8.运行后发现并没有实现我想要的奇偶行变色效果，并且报了个错
![在这里插入图片描述](https://img-blog.csdnimg.cn/e0a20537a0024f11aec8c74789368c85.png#pic_center)

##### 9.可以发现我们写的代码并没有被浏览器所兼容，这个时候就需要webpack来解决这个问题

### 安装和配置webpack

#### 安装webpack

##### 在终端运行如下的命令，安装webpack相关的两个包:

```
npm install webpack@5.42.1 webpack-cli@4.7.2 -D
```

> -D是--save-dev的简写， 将包装在--save-dev节点下，这个节点(就是package.json里面的devDependencies)下的包只在开发时使用，项目上线或部署，会将不需要的包放到这个节点下

##### 打开package.json,会发现多了
![在这里插入图片描述](https://img-blog.csdnimg.cn/86685e9ff11844aeb2b6a4bdc781b531.png#pic_center)


#### 配置

##### 在项目中配置

##### 1.在项目根目录中，创建名为webpack.config.js的webpack配置文件，并初始化如下的基本配置（加入下面代码）:

```
//使用node.js中的导出语法
module.exports={
    //mode代表开发的模式，可选值有两个开发模式development和生产模式production(比如压缩版本的代码)
    mode:"development"
}
```

##### 2.在package.json的 scripts节点下，新增dev脚本如下:

```
  "scripts": {
    "dev":"webpack" //dev不是固定的，只要后面的值为webpack就可以。另外script节点下的脚本，可以通过npm run执行。例如npm run dev(这个dev为可选值，具体以script节点下脚本名为准)
  },
```

##### 3.在终端中运行npm run dev(这个dev为可选值，具体以script节点下脚本名为准)命令，启动webpack进行项目的打包构建

##### 4.运行完会发现目录多了个dist文件夹，里面有个main.js文件，这个文件就是webpack根据index.js代码进行监听的处理自动生成的，使之前不兼容的代码变得与浏览器有兼容性

##### 5.把index.html引入的index.js注释掉，换上自动生成的main.js，在index.html中就引入main.js就可以了
![在这里插入图片描述](https://img-blog.csdnimg.cn/3d5db1e2268847f6a4f8cf65c1e3d8ee.png#pic_center)


##### 6.在index.html中运行项目，可以发现之前的奇偶行变色效果出来了，控制台也没有任何报错，兼容性问题成功被解决
![在这里插入图片描述](https://img-blog.csdnimg.cn/bb72500525724ade99fde640d827df3c.png#pic_center)


![在这里插入图片描述](https://img-blog.csdnimg.cn/40a78ca40456497baeb6f8e695bbacea.png#pic_center)


##### 7.运行成功后可以发现main.js,是把jQuery源代码文件和index.js写的jQuery代码文件合并成的一个main.js

![在这里插入图片描述](https://img-blog.csdnimg.cn/faebbb938cbb4568b4a1dceeef1c1006.png#pic_center)



### 了解mode可选值的使用场景

#### 可选值有两个开发模式development和生产模式production(比如压缩版本的代码)

#### 开发模式下，运行项目会发现

![在这里插入图片描述](https://img-blog.csdnimg.cn/64373d9e232840a2b5bd2b5bdfaa2ac7.png#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/9df7766ba96f40998abf4a1116655081.png#pic_center)


##### 大小为325kib，耗时300ms运行出来

#### 生产模式下运行项目会发现

![在这里插入图片描述](https://img-blog.csdnimg.cn/f2f168187a9643ca8de0ba4c0467e2c8.png#pic_center)


![在这里插入图片描述](https://img-blog.csdnimg.cn/e63e0859bb5644498e766ee7023aa67d.png#pic_center)


##### 大小为88.5kib，耗时1852ms才运行出来

#### 两者区别

##### 开发模式中的代码都是有格式有规律的，每次换行每个空格都占空间，生产模式则将代码进行压缩减少体积，在打包压缩的过程，耗时长，开发模式下不需要等太长时间，因此两者区别是，开发模式代码体积大耗时短，生产模式代码体积小耗时长，在这个项目里，生产模式和开发模式的打包压缩代码都是指的main.js的体积

### 修改打包的默认约定

#### index.js是webpack默认打包的文件名，默认路径为src=>index.js,运行时默认输出路径为dist=>main.js。正常情况下，不能改动路径和名字,那么怎么可以去修改打包的默认约定呢？

##### 自定义打包的入口与出口

在webpack.config.js配置文件中，通过entry节点指定打包的入口。通过output节点指定打包的出口。示例代码如下:

```
//导入node模块
const path = require("path")

//使用node.js中的导出语法
module.exports = {
    //mode代表开发的模式，可选值有两个开发模式development和生产模式production
    mode: "production",
    // entry:"指定要处理哪个文件"
    //path是node的一个模块，需要导入node模块
    //__dirname："代表项目根目录，后面需要拼接具体路径"
    entry: path.join(__dirname, './src/index1.js'),//被处理文件的路径相当图index.js

    //指定生成的文件要存放到哪里？
    output: {
        path: path.join(__dirname, "./dist1"),//输出文件存放路径
        filename: "bundle.js"//生成文件名称
    }
    //打包输出文件的路径，第一个为存放的文件夹名称，相当于list路径，第二个为生成的文件名，相当于main.js
}
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/fe01564a01b74d4fa8ca56267432033e.png#pic_center)


#### 这样就可以自定义修改文件名和路径了

### 安装和配置webpack-dev-server这个插件

#### 插件的作用：每当修改了源代码，webpack 会自动进行项目的打包和构建

##### 安装运行命令：

```
npm install webpack-dev-server@3.11.2 -D
```

##### 配置webpack-dev-server：

1.修改package.json -> scripts中的dev命令如下:

```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack serve"  //在dev里面加个serve即可
  },
```

2.再次运行npm run dev命令，重新进行项目的打包

运行发现

![在这里插入图片描述](https://img-blog.csdnimg.cn/119e14dfda2d417db0462c73911f5b24.png#pic_center)


无法加载“@webpack cli/service”命令,未下载@webpack cli/service，则下载webpack cli （ i是 install的简写,-D与 --save-dev的简写，安装包写入 devDependencies(开发环境)中） 

下载webpack cli命令

```
npm i --save-dev webpack-cli
```

再次执行npm, run dev
![在这里插入图片描述](https://img-blog.csdnimg.cn/86ef3dca6f714131ac452fb65305e44d.png#pic_center)


运行成功，解决问题

3.在浏览器中访问http://localhost:8080地址，查看自动打包效果

注意:webpack-dev-server会启动一个实时打包的 http服务器
# VUE脚手架搭建流程
1. 安装 Node.js(推荐一个网站：http://nodejs.cn/)
2. 下载安装完成之后进行测试,记住安装位置
>接下来配置环境变量
>	1.添加NODE_PATH的一个环境变量
>	2.在path中添加上这个变量，变量值为安装node.js的路径

![在这里插入图片描述](https://img-blog.csdnimg.cn/dbd9eb47d7d44f8a90c319ec5845ae84.png)

> node_cache和node_global是后面创建的文件夹，后面有讲到，创建的位置，我在这里放到了node.js文件夹下，也可以自定义文件夹路径
> 四个path分别代表：添加了NODE_PATH这个变量名，添加这个名下面的两个文件夹等，最后那个路径也要配一下，不然安装淘宝镜像会有问题

![node_cache和node_global是后面创建的文件夹，后面有讲到](https://img-blog.csdnimg.cn/e3f807835f294e01b0cfb89a95450eb0.png)

```cmd
node -v 测试 node 是否安装成功以及检查 node 版本
npm -v 测试 npm 是否安装成功以及检查 npm 版本
```
效果：![在这里插入图片描述](https://img-blog.csdnimg.cn/48cf92ae3d0842bb84c3fb098b37059f.png)
提示：如果碰到下面情况
![C盘报错](https://img-blog.csdnimg.cn/8fa5907b76d742cc9a1a4057592bbb46.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
可能原因：
可能是C:\Users\Administrator(users)目录下的.npmrc里的配置问题,把里面的文件改成自己需要的路径，比如我想放到node.js文件夹下
prefix=D:\应用程序\node.js\node_global
cache=D:\应用程序\node.js\node_cache



5. 配置 npm 下载插件的默认安装目录和缓存日志目录,
注意：因为有的人电脑权限不足，可以提前先做安装目录中创建 node_global 和 node_cache 文件夹。
注意：路径需要根据自己的在第二步选择的位置进行配置
打开 cmd 窗口，依次输入配置命令
```cmd
npm config set prefix "D:\应用程序\node.js\node_global"
npm config set cache "D:\应用程序\node.js\node_cache"
```
输出效果：![在这里插入图片描述](https://img-blog.csdnimg.cn/e820d499609a4630998aec27c18401e9.png)
 ## 安装国内淘宝镜像
安装命令：
```cmd
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
测试命令：
```cmd
cnpm -v
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/a7a94fc1cd7e46df8c6344131f011581.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
## 安装 Vue 脚手架
脚手架安装命令:
一共下面两种安装方式
因为npm安装插件是从国外服务器下载，受网络的影响比较大，可能会出现异常，如果npm的服务器在中国就好了，所以我们乐于分享的淘宝团队干了这事，第二种方式是cnpm国内淘宝镜像
本次演示选择第二种安装方式(安装淘宝镜像)
```cmd
npm install -g @vue/cli   
cnpm install -g @vue/cli
```
测试命令:
```cmd
vue -V（这里是大写的 V）
```
卸载命令:
```cmd
npm uninstall -g @vue/cli
```
这里我们采用第二种，采用国内镜像的方式进行安装：
效果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/54fc3e6d7f1842cd8110345f277b9af6.png)
测试脚手架：
![在这里插入图片描述](https://img-blog.csdnimg.cn/7f1bdf824c684ab4a792c1213337017e.png)
到这为止，Vue 脚手架已经安装完成了。但是有两个概念需要区分开：
我们学习的 Vue 版本的 2.X，脚手架的版本是 4.5.12
Vue 可以理解为中式建筑风格，经过更新升级，现在是 2.X 版本
Vue 脚手架可以理解为盖房包工队，也在不断改造，现在是 4.5.12
# Vue项目创建
Vue 脚手架创建项目有两种，一种是命令行创建方式，一种是图形化界面方式。
第一种命令行创建方式：
第一步、创建 Vue 项目所在文件夹
第二步、在文件夹中打开 cmd
![在这里插入图片描述](https://img-blog.csdnimg.cn/27a05e31d5d74b7f9ffe9c76ecb230e2.png)
第三步、创建 vue 项目
创建命令：vue create 项目名；
命令行操作：空格是选中或取消、方向键选择、A 是全选、回车是下一步、
![在这里插入图片描述](https://img-blog.csdnimg.cn/f31d59de6c8a4dbcb17bda8efd943fe2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
第四步、按键盘上下键可以选择默认(default)还是手动(Manually)：
这里我们选择 Manually
![在这里插入图片描述](https://img-blog.csdnimg.cn/e2e3ac052ee0429e8fba50a5a5122071.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
第五步、选择项目的配置：![在这里插入图片描述](https://img-blog.csdnimg.cn/b3c61223df194ef890f33816243e104b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
这里我们选择的是 Vue 版本选项和 Babel， 前者可以选择 Vue 的版本， 后者将高阶的 ES 转为低阶的 ES5进行兼容适配，其他选择我们放到了最后解读。
![在这里插入图片描述](https://img-blog.csdnimg.cn/0345db6c872a47fa879b9b72c133acba.png)
第六步、选择将配置存放方式
说明：
In dedicated config files： 单独保存在各自的配置文件中
In package.json： 保存在 package.json 文件中
![在这里插入图片描述](https://img-blog.csdnimg.cn/94d9d6bbc01e4a0b975188e1fd4f18c6.png)
第七步、是否保存为未来项目的预配置
是否记录一下本次配置，以便下次使用这套配置，需要输入 Y 和名字，取消输入 N：![在这里插入图片描述](https://img-blog.csdnimg.cn/808025a4a1bc456e84fb0cfa4873d334.png)
第八步、回车确定，等待安装
回车确定之后，等待 Vue-CLI 创建项目完成：![在这里插入图片描述](https://img-blog.csdnimg.cn/fce26ae50c004637b46227fff71975c8.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
第九步、安装结束，测试运行
回车确定之后，等待 Vue-CLI 创建项目完成：
进入你的项目目录：cd 项目名
启动开发服务：npm run serve
ctrl + c 停止
![在这里插入图片描述](https://img-blog.csdnimg.cn/765593430c3846ab9f3cadf5bed3d769.png)
运行成功，接下来我们可以在浏览器中打开项目：
![在这里插入图片描述](https://img-blog.csdnimg.cn/34789e7f2cfb4f0d9ceafafafd812054.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/95fbcce47d2e4c99a536dfd5e084685c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
第二种图形化界面创建方式：
(1) 第一步、创建 Vue 项目所在文件夹
(2) 第二步、在文件夹中打开 cmd
(3) 第三步、输入命令打开图形化界面
命令：vue ui
![在这里插入图片描述](https://img-blog.csdnimg.cn/a1f0524ad5b6482ebf203e4cd88e19a4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
(4) 第四步、在打开的浏览器中，选择创建，核对项目目录，创建项目![在这里插入图片描述](https://img-blog.csdnimg.cn/0e5dcfbdf904404d9ff30b07b7848945.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
(5) 第五步、输入项目名，选择基本配置![在这里插入图片描述](https://img-blog.csdnimg.cn/be4f385018c14cf0b99f0c8aab9bf038.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
(6) 第六步、选择项目预设是默认(default)还是手动(Manually)
![在这里插入图片描述](https://img-blog.csdnimg.cn/cb35f82c69154a3d9328ea7027296814.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
(7) 第七步、选择项目的配置和配置存放方式：
![在这里插入图片描述](https://img-blog.csdnimg.cn/a4d1c29ebfbc44889314c2ebc1d559e0.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)

(8) 第八步、是否保存为未来项目的预配置：![在这里插入图片描述](https://img-blog.csdnimg.cn/2e771cde00874d61b10cc0f57ca8d548.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
(9) 第九步、等待安装，测试运行：
点击【任务】
点击【serve】
点击【运行】
查看仪表盘状态
绿色通过点击【启动 app】
红色报错点击【输出】![在这里插入图片描述](https://img-blog.csdnimg.cn/65ea8462422544c189c3b350f9170f28.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
到这为止，我们已经掌握了两种方式，虽然我们是在电脑的 CMD 中运行的命令，但是这些命令也可以运行在编译软件的终端控制台中。
# 项目结构解读
接下来，我们开始解析 Vue 脚手架项目的项目结构，熟悉结构才能更快速的开发。![在这里插入图片描述](https://img-blog.csdnimg.cn/20fb87bdd66c465c9fef021392668afe.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
 node_modules：依赖包目录
 node 提供的管家，用于提供第三方依赖，依赖内部的依赖也会进行关联导入。存放 npm 命令下载的开发环境和生产环境的依赖包。
 public：静态资源目录
 index.html: 入口页面
 可以存放公共资源,图片、模板界面等
 src 目录：所用的项目结构，所有开发内容都在 src 中
 以后都在这个目录下写代码、存放项目源码及需要引用的资源文件。
 assets 存放项目中需要用到的资源文件，如 css、js、images 等
 componens 存放通用公共组件
 views 存放路由视图组件
 App.vue 所有 vue 组件入口，根组件
 main.js 主入口 js
 package.json: 包管理配置文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/1d3df3bcb59d409aae81a54d693b79f9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
# 项目修改测试
这里我们先解读一下 App.vue
![在这里插入图片描述](https://img-blog.csdnimg.cn/cef70ea532d44f5ab6ee829678557dc4.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
这里我们将图片替换成自己导入的图片，并注释掉 HelloWorld 组件的使用![在这里插入图片描述](https://img-blog.csdnimg.cn/9046b1a464fa44099ee32c556d3274b3.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
保存代码并刷新页面之后，页面显示的正式我们的更换的图片：
![在这里插入图片描述](https://img-blog.csdnimg.cn/636915aa03bd48a28b9ef80589129daa.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6JCn5a-CMTcz,size_20,color_FFFFFF,t_70,g_se,x_16)
通过上边的操作，大家会有一个感觉，Vue 脚手架项目并不是那么难。当然也需要我们不断的去熟悉项目结构。
# npm

Node.js是一种能够使js直接运行在计算机上的技术，它提供了很多系统底层API（例如文件操作，网络功能），但是这些API过于底层，使用起来很麻烦。所以某个功能相关的API都被第三方程序员封装成了模块包，这些模块包都被上传到了npm上，当我们需要使用某个模块包时，直接使用npm下载即可。

Node.js 中的第三方模块包都是免费且开源的，不需要付费即可免费下载使用。

国外有一家 IT 公司，叫做 **npm, Inc.** 这家公司旗下有一个非常著名的网站： https://www.npmjs.com/ ，它是**全球最大的包共享平台**，你可以从这个网站上搜索到任何你需要的包，只要你有足够的耐心！到目前位置，全球约 1100 多万的开发人员，通过这个包共享平台，开发并共享了超过 120 多万个包 供我们使用。

**npm, Inc. 公司**提供了一个地址为 https://registry.npmjs.org/ 的服务器，来对外共享所有的包，我们可以从这个服务器上下载自己所需要的包。并提供了一个包管理工具npm，我们可以使用这个包管理工具，从 https://registry.npmjs.org/ 服务器把需要的包下载到本地使用。

npm：Node.js package manager：Node.js包管理器。

`npm`有两层含义。一层含义是Node的开放式模块登记和管理系统，是全球最大的开源库生态系统，网址为https://www.npmjs.com/。另一层含义是Node默认的模块管理器，是一个命令行下的软件，用来安装和管理Node模块。

# npm的安装

`npm`不需要单独安装。现在的Node.js已经集成了npm，在安装Node的时候，会连带一起安装`npm`，可以通过输入 "npm -v" 来测试是否成功安装。

```
npm -v      #查看npm版本号，比如：8.3.1
```

但是，Node附带的`npm`可能不是最新版本，可以用下面的命令，更新到最新版本。

```
npm install npm@latest -g
```

上面的命令中，`@latest`表示最新版本，`-g`表示全局安装。所以，命令的主干是`npm install npm`，也就是使用`npm`安装自己。之所以可以这样，是因为`npm`本身与Node的其他模块没有区别。

然后，运行下面的命令，查看各种信息。

```
# 查看 npm 命令列表
npm help

# 查看各个命令的简单用法
npm -l

# 查看 npm 的版本
npm -v

# 查看 npm 的配置
npm config list -l
```

# npm init

`npm init`用来初始化生成一个新的`package.json`文件。它会向用户提问一系列问题，如果你觉得不用修改默认配置，一路回车就可以了。

如果使用了`-f`（代表force）、`-y`（代表yes），则跳过提问阶段，直接生成一个新的`package.json`文件。

```
npm init -y
```

npm init指令的详细步骤，着重看#后面注释内容：

```
Microsoft Windows [版本 10.0.10586]
(c) 2015 Microsoft Corporation。保留所有权利。

【第一步：cd到项目文件夹】
C:\Users\Jinxizhen>cd C:\Users\Jinxizhen\Desktop\nodeapp    #进入项目目录

【第二步：通过 npm init 初始化项目】
C:\Users\Jinxizhen\Desktop\nodeapp>npm init                 #开始初始化  
                 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodeapp) nodeapp           #名字，可以使用默认的nodeapp，不能有大写字母，不能使用中文，多个单词之间可以使用-连接
version: (1.0.0)                          #版本号，可以使用默认的1.0.0
description: nodejs                       #项目的描述信息
entry point: (index.js) app.js            #入口文件，我们定为app.js
test command:                             #测试命令可以不写
git repository:                           #git仓库，不写
keywords: node                            #关键字可以先不写
author: 金西振                             #作者
license: (ISC)                            #证书相关
About to write to C:\Users\Jinxizhen\Desktop\nodeapp\package.json:

{
  "name": "nodeapp",
  "version": "1.0.0",
  "description": "nodejs",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node"
  ],
  "author": "金西振",
  "license": "ISC"
}

Is this ok? (yes) yes     #输入yes，然后回车，初始化项目完成

项目初始化完成后，会在文件夹中生成一个 package.json 文件，就是本项目的项目配置文件，其中记录了本项目的配置信息。
```

# npm list

`npm list`命令以树型结构列出当前项目安装的所有模块，以及它们依赖的模块。

```
npm list
```

加上global参数，会列出全局安装的模块。

```
npm list -global
```

`npm list`命令也可以列出单个模块。

```
npm list underscore
```

# npm install

## 基本用法

Node模块采用`npm install`命令安装。

每个模块可以“全局安装”，也可以“本地安装”。

- “全局安装”指的是将一个模块安装到系统目录`C:\Users\用户名\AppData\Roaming\npm\node_modules`中，在任意目录都可以使用。一般来说，全局安装只适用于**工具模块**，比如`eslint`和`webpack`。
- “本地安装”指的是将一个模块下载到当前项目的`node_modules`子目录，然后只有在项目目录之中，才能调用这个模块。

```
# 本地安装
npm install <package name>
npm install <package name> --save

# 全局安装
npm install --global <package name>


npm install -g <package name>
```

指令的简写

```
npm install 简写为  npm i

--save 简写为 -S 或者不写: 
npm i <package name> -S 
npm i <package name>

比如在 :\Users\Jinxizhen\Desktop\hello-world> 路径下使用 npm i expess 相当于使用 npm i express -S


--global 简写为 -g : 
npm i <package name>  -g
```

`npm install`也支持直接输入Github代码库地址。

```
npm install git://github.com/package/path.git
npm install git://github.com/package/path.git#0.1.0
```

安装之前，`npm install`会先检查，`node_modules`目录之中是否已经存在指定模块。如果存在，就不再重新安装了，即使远程仓库已经有了一个新版本，也是如此。

如果你希望，一个模块不管是否安装过，npm 都要强制重新安装，可以使用`-f`或`--force`参数。

```
npm install <packageName> --force
```

如果你希望，所有模块都要强制重新安装，那就删除`node_modules`目录，重新执行`npm install`。

```
rm -rf node_modules
npm install
```

## 安装不同版本

install命令总是安装模块的最新版本，如果要安装模块的特定版本，可以在模块名后面加上@和版本号。

```
npm install sax@latest
npm install sax@0.1.1
npm install sax@">=0.1.0 <0.2.0"
```

如果使用`--save-exact`参数，会在package.json文件指定安装模块的确切版本。

```
npm install readable-stream --save --save-exact
```

install命令可以使用不同参数，指定所安装的模块属于哪一种性质的依赖关系，即出现在packages.json文件的哪一项中。

- –save：模块名将被添加到dependencies，可以简化为参数`-S`。
- –save-dev: 模块名将被添加到devDependencies，可以简化为参数`-D`。

```
npm install sax --save
npm install node-tap --save-dev
# 或者
npm install sax -S
npm install node-tap -D
```

如果要安装beta版本的模块，需要使用下面的命令。

```
# 安装最新的beta版
npm install <module-name>@beta (latest beta)

# 安装指定的beta版
npm install <module-name>@1.3.1-beta.3
```

`npm install`默认会安装`dependencies`字段和`devDependencies`字段中的所有模块，如果使用`--production`参数，可以只安装`dependencies`字段的模块。

```
npm install --production
# 或者
NODE_ENV=production npm install
```

一旦安装了某个模块，就可以在代码中用`require`命令加载这个模块。

```
var backbone = require('backbone')
console.log(backbone.VERSION)
```

## 避免系统权限

默认情况下，Npm全局模块都安装在系统目录（比如`/usr/local/lib/`），普通用户没有写入权限，需要用到``命令。这不是很方便，我们可以在没有root权限的情况下，安装全局模块。

首先，在主目录下新建配置文件`.npmrc`，然后在该文件中将`prefix`变量定义到主目录下面。

```
prefix = /home/yourUsername/npm
```

然后在主目录下新建`npm`子目录。

```
mkdir ~/npm
```

此后，全局安装的模块都会安装在这个子目录中，npm也会到`~/npm/bin`目录去寻找命令。

最后，将这个路径在`.bash_profile`文件（或`.bashrc`文件）中加入PATH变量。

```
export PATH=~/npm/bin:$PATH
```

## 下载包速度慢的问题

在使用 npm 下包的时候，默认从国外的 https://registry.npmjs.org/ 服务器进行下载，此时，网络数据的传输需要经过漫长的海底光缆，因此下包速度会很慢。

### 淘宝镜像

淘宝在国内搭建了一个服务器，专门把国外官方服务器上的包同步到国内的服务器，然后在国内提供下包的服务。从而极大的提高了下包的速度。

1. **切换** **npm 的下包镜像源**，下包的镜像源，指的就是下包的服务器地址。不推荐使用

```
#设置镜像源
npm config set registry https://registry.npm.taobao.org
npm config set registry https://repo.huaweicloud.com/repository/npm/

#查看镜像源
npm config get registry
```

2. 使用cnpm代替npm

```
#安装cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com
```

### nrm切换镜像源

为了更方便的切换下包的镜像源，我们可以安装 **nrm** 这个小工具，利用 nrm 提供的终端命令，可以快速查看和切换下包的镜像源。

```
#通过npm包管理器，将nrm安装为全局可用的工具
npm i nrm -g

#查看所有可用的镜像源
nrm ls
#打印结果如下
 	npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/

#将下包的镜像源切换为taobao镜像
nrm use taobao
```

# npm uninstall

`npm uninstall`命令，卸载已安装的模块。

```
npm uninstall [package name]

# 卸载全局模块
npm uninstall [package name] --global
```

# npm update

`npm update`命令可以更新本地安装的模块。

```
# 升级当前项目的指定模块
npm update [package name]

# 升级全局安装的模块
npm update -global [package name]
```

它会先到远程仓库查询最新版本，然后查询本地版本。如果本地版本不存在，或者远程版本较新，就会安装。

使用`-S`或`--save`参数，可以在安装的时候更新`package.json`里面模块的版本号。

```
// 更新之前的package.json
dependencies: {
  dep1: "^1.1.1"
}

// 更新之后的package.json
dependencies: {
  dep1: "^1.2.2"
}
```

注意，从npm v2.6.1 开始，`npm update`只更新顶层模块，而不更新依赖的依赖，以前版本是递归更新的。如果想取到老版本的效果，要使用下面的命令。

```
npm --depth 9999 update
```

# npm run

`npm`不仅可以用于模块管理，还可以用于执行脚本。`package.json`文件有一个`scripts`字段，可以用于指定脚本命令，供`npm`直接调用。

```json
{
  "name": "myproject",
  "devDependencies": {
    "jshint": "latest",
    "browserify": "latest",
    "mocha": "latest"
  },
  "scripts": {
    "lint": "jshint **.js",
    "test": "mocha test/"
  }
}
```

上面代码中，`scripts`字段指定了两项命令`lint`和`test`。命令行输入`npm run-script lint`或者`npm run lint`，就会执行`jshint **.js`，输入`npm run-script test`或者`npm run test`，就会执行`mocha test/`。`npm run`是`npm run-script`的缩写，一般都使用前者，但是后者可以更好地反应这个命令的本质。

`npm run`命令会自动在环境变量`$PATH`添加`node_modules/.bin`目录，所以`scripts`字段里面调用命令时不用加上路径，这就避免了全局安装NPM模块。

`npm run`如果不加任何参数，直接运行，会列出`package.json`里面所有可以执行的脚本命令。

npm内置了两个命令简写，`npm test`等同于执行`npm run test`，`npm start`等同于执行`npm run start`。

`npm run`会创建一个Shell，执行指定的命令，并临时将`node_modules/.bin`加入PATH变量，这意味着本地模块可以直接运行。

举例来说，你执行ESLint的安装命令。

```
npm i eslint --save-dev
```

运行上面的命令以后，会产生两个结果。首先，ESLint被安装到当前目录的`node_modules`子目录；其次，`node_modules/.bin`目录会生成一个符号链接`node_modules/.bin/eslint`，指向ESLint模块的可执行脚本。

然后，你就可以在`package.json`的`script`属性里面，不带路径的引用`eslint`这个脚本。

```
{
  "name": "Test Project",
  "devDependencies": {
    "eslint": "^1.10.3"
  },
  "scripts": {
    "lint": "eslint ."
  }
}
```

等到运行`npm run lint`的时候，它会自动执行`./node_modules/.bin/eslint .`。

如果直接运行`npm run`不给出任何参数，就会列出`scripts`属性下所有命令。

```
npm run
Available scripts in the user-service package:
  lint
     jshint **.js
  test
    mocha test/
```

下面是另一个`package.json`文件的例子。

```
"scripts": {
  "watch": "watchify client/main.js -o public/app.js -v",
  "build": "browserify client/main.js -o public/app.js",
  "start": "npm run watch & nodemon server.js",
  "test": "node test/all.js"
},
```

上面代码在`scripts`项，定义了四个别名，每个别名都有对应的脚本命令。

```
npm run watch
npm run build
npm run start
npm run test
```

其中，`start`和`test`属于特殊命令，可以省略`run`。

```
npm start
npm test
```

如果希望一个操作的输出，是另一个操作的输入，可以借用Linux系统的管道命令，将两个操作连在一起。

```
"build-js": "browserify browser/main.js | uglifyjs -mc > static/bundle.js"
```

但是，更方便的写法是引用其他`npm run`命令。

```
"build": "npm run build-js && npm run build-css"
```

上面的写法是先运行`npm run build-js`，然后再运行`npm run build-css`，两个命令中间用`&&`连接。如果希望两个命令同时平行执行，它们中间可以用`&`连接。

下面是一个流操作的例子。

```
"devDependencies": {
  "autoprefixer": "latest",
  "cssmin": "latest"
},

"scripts": {
  "build:css": "autoprefixer -b 'last 2 versions' < assets/styles/main.css | cssmin > dist/main.css"
}
```

写在`scripts`属性中的命令，也可以在`node_modules/.bin`目录中直接写成bash脚本。下面是一个bash脚本。

```
#!/bin/bash

cd site/main
browserify browser/main.js | uglifyjs -mc > static/bundle.js
```

假定上面的脚本文件名为build.sh，并且权限为可执行，就可以在scripts属性中引用该文件。

```
"build-js": "bin/build.sh"
```

## 参数

`npm run`命令还可以添加参数。

```
"scripts": {
  "test": "mocha test/"
}
```

上面代码指定`npm test`，实际运行`mocha test/`。如果要通过`npm test`命令，将参数传到mocha，则参数之前要加上两个连词线。

```
npm run test -- anothertest.js
# 等同于
mocha test/ anothertest.js
```

上面命令表示，mocha要运行所有`test`子目录的测试脚本，以及另外一个测试脚本`anothertest.js`。

`npm run`本身有一个参数`-s`，表示关闭npm本身的输出，只输出脚本产生的结果。

```
// 输出npm命令头
npm run test

// 不输出npm命令头
npm run -s test
```

## scripts脚本命令最佳实践

`scripts`字段的脚本命令，有一些最佳实践，可以方便开发。首先，安装`npm-run-all`模块。

```
npm install npm-run-all --save-dev
```

这个模块用于运行多个`scripts`脚本命令。

```
# 继发执行
npm-run-all build:html build:js
# 等同于
npm run build:html && npm run build:js

# 并行执行
npm-run-all --parallel watch:html watch:js
# 等同于
npm run watch:html & npm run watch:js

# 混合执行
npm-run-all clean lint --parallel watch:html watch:js
# 等同于
npm-run-all clean lint
npm-run-all --parallel watch:html watch:js

# 通配符
npm-run-all --parallel watch:*
```

（1）start脚本命令

`start`脚本命令，用于启动应用程序。

```
"start": "npm-run-all --parallel dev serve"
```

上面命令并行执行`dev`脚本命令和`serve`脚本命令，等同于下面的形式。

```
npm run dev & npm run serve
```

如果start脚本没有配置，`npm start`命令默认执行下面的脚本，前提是模块的根目录存在一个server.js文件。

```
node server.js
```

（2）dev脚本命令

`dev`脚本命令，规定开发阶段所要做的处理，比如构建网页资源。

```
"dev": "npm-run-all dev:*"
```

上面命令用于继发执行所有`dev`的子命令。

```
"predev:sass": "node-sass --source-map src/css/hoodie.css.map --output-style nested src/sass/base.scss src/css/hoodie.css"
```

上面命令将sass文件编译为css文件，并生成source map文件。

```
"dev:sass": "node-sass --source-map src/css/hoodie.css.map --watch --output-style nested src/sass/base.scss src/css/hoodie.css"
```

上面命令会监视sass文件的变动，只要有变动，就自动将其编译为css文件。

```
"dev:autoprefix": "postcss --use autoprefixer --autoprefixer.browsers \"> 5%\" --output src/css/hoodie.css src/css/hoodie.css"
```

上面命令为css文件加上浏览器前缀，限制条件是只考虑市场份额大于5%的浏览器。

（3）serve脚本命令

`serve`脚本命令用于启动服务。

```
"serve": "live-server dist/ --port=9090"
```

上面命令启动服务，用的是[live-server](https://npmjs.com/package/live-server)模块，将服务启动在9090端口，展示`dist`子目录。

`live-server`模块有三个功能。

- 启动一个HTTP服务器，展示指定目录的`index.html`文件，通过该文件加载各种网络资源，这是`file://`协议做不到的。
- 添加自动刷新功能。只要指定目录之中，文件有任何变化，它就会刷新页面。
- `npm run serve`命令执行以后，自动打开浏览器。、

以前，上面三个功能需要三个模块来完成：`http-server`、`live-reload`和`opener`，现在只要`live-server`一个模块就够了。

（4）test脚本命令

`test`脚本命令用于执行测试。

```
"test": "npm-run-all test:*",
"test:lint": "sass-lint --verbose --config .sass-lint.yml src/sass/*"
```

上面命令规定，执行测试时，运行`lint`脚本，检查脚本之中的语法错误。

（5）prod脚本命令

`prod`脚本命令，规定进入生产环境时需要做的处理。

```
"prod": "npm-run-all prod:*",
"prod:sass": "node-sass --output-style compressed src/sass/base.scss src/css/prod/hoodie.min.css",
"prod:autoprefix": "postcss --use autoprefixer --autoprefixer.browsers "> 5%" --output src/css/prod/hoodie.min.css src/css/prod/hoodie.min.css"
```

上面命令将sass文件转为css文件，并加上浏览器前缀。

（6）help脚本命令

`help`脚本命令用于展示帮助信息。

```
"help": "markdown-chalk --input DEVELOPMENT.md"
```

上面命令之中，`markdown-chalk`模块用于将指定的markdown文件，转为彩色文本显示在终端之中。

（7）docs脚本命令

`docs`脚本命令用于生成文档。

```
"docs": "kss-node --source src/sass --homepage ../../styleguide.md"
```

上面命令使用`kss-node`模块，提供源码的注释生成markdown格式的文档。

## pre- 和 post- 脚本

`npm run`为每条命令提供了`pre-`和`post-`两个钩子（hook）。以`npm run lint`为例，执行这条命令之前，npm会先查看有没有定义prelint和postlint两个钩子，如果有的话，就会先执行`npm run prelint`，然后执行`npm run lint`，最后执行`npm run postlint`。

```
{
  "name": "myproject",
  "devDependencies": {
    "eslint": "latest"
    "karma": "latest"
  },
  "scripts": {
    "lint": "eslint --cache --ext .js --ext .jsx src",
    "test": "karma start --log-leve=error karma.config.js --single-run=true",
    "pretest": "npm run lint",
    "posttest": "echo 'Finished running tests'"
  }
}
```

上面代码是一个`package.json`文件的例子。如果执行`npm test`，会按下面的顺序执行相应的命令。

1. `pretest`
2. `test`
3. `posttest`

如果执行过程出错，就不会执行排在后面的脚本，即如果prelint脚本执行出错，就不会接着执行lint和postlint脚本。

下面是一个例子。

```
{
  "test": "karma start",
  "test:lint": "eslint . --ext .js --ext .jsx",
  "pretest": "npm run test:lint"
}
```

上面代码中，在运行`npm run test`之前，会自动检查代码，即运行`npm run test:lint`命令。

下面是一些常见的`pre-`和`post-`脚本。

- `prepublish`：发布一个模块前执行。
- `postpublish`：发布一个模块后执行。
- `preinstall`：用户执行`npm install`命令时，先执行该脚本。
- `postinstall`：用户执行`npm install`命令时，安装结束后执行该脚本，通常用于将下载的源码编译成用户需要的格式，比如有些模块需要在用户机器上跟本地的C++模块一起编译。
- `preuninstall`：卸载一个模块前执行。
- `postuninstall`：卸载一个模块后执行。
- `preversion`：更改模块版本前执行。
- `postversion`：更改模块版本后执行。
- `pretest`：运行`npm test`命令前执行。
- `posttest`：运行`npm test`命令后执行。
- `prestop`：运行`npm stop`命令前执行。
- `poststop`：运行`npm stop`命令后执行。
- `prestart`：运行`npm start`命令前执行。
- `poststart`：运行`npm start`命令后执行。
- `prerestart`：运行`npm restart`命令前执行。
- `postrestart`：运行`npm restart`命令后执行。

对于最后一个`npm restart`命令，如果没有设置`restart`脚本，`prerestart`和`postrestart`会依次执行stop和start脚本。

另外，不能在`pre`脚本之前再加`pre`，即`prepretest`脚本不起作用。

注意，即使Npm可以自动运行`pre`和`post`脚本，也可以手动执行它们。

```
npm run prepublish
```

下面是`post install`的例子。

```
{
  "postinstall": "node lib/post_install.js"
}
```

上面的这个命令，主要用于处理从Git仓库拉下来的源码。比如，有些源码是用TypeScript写的，可能需要转换一下。

下面是`publish`钩子的一个例子。

```
{
  "dist:modules": "babel ./src --out-dir ./dist-modules",
  "gh-pages": "webpack",
  "gh-pages:deploy": "gh-pages -d gh-pages",
  "prepublish": "npm run dist:modules",
  "postpublish": "npm run gh-pages && npm run gh-pages:deploy"
}
```

上面命令在运行`npm run publish`时，会先执行Babel编译，然后调用Webpack构建，最后发到Github Pages上面。

以上都是npm相关操作的钩子，如果安装某些模块，还能支持Git相关的钩子。下面以[husky](https://github.com/typicode/husky)模块为例。

```
npm install husky --save-dev
```

安装以后，就能在`package.json`添加`precommit`、`prepush`等钩子。

```
{
    "scripts": {
        "lint": "eslint yourJsFiles.js",
        "precommit": "npm run test && npm run lint",
        "prepush": "npm run test && npm run lint",
        "...": "..."
    }
}
```

类似作用的模块还有`pre-commit`、`precommit-hook`等。

## 内部变量

scripts字段可以使用一些内部变量，主要是package.json的各种字段。

比如，package.json的内容是`{"name":"foo", "version":"1.2.5"}`，那么变量`npm_package_name`的值是foo，变量`npm_package_version`的值是1.2.5。

```
{
  "scripts":{
    "bundle": "mkdir -p build/$npm_package_version/"
  }
}
```

运行`npm run bundle`以后，将会生成`build/1.2.5/`子目录。

`config`字段也可以用于设置内部字段。

```
  "name": "fooproject",
  "config": {
    "reporter": "xunit"
  },
  "scripts": {
    "test": "mocha test/ --reporter $npm_package_config_reporter"
  }
```

上面代码中，变量`npm_package_config_reporter`对应的就是reporter。

## 通配符

npm的通配符的规则如下。

- `*` 匹配0个或多个字符
- `?` 匹配1个字符
- `[...]` 匹配某个范围的字符。如果该范围的第一个字符是`!`或`^`，则匹配不在该范围的字符。
- `!(pattern|pattern|pattern)` 匹配任何不符合给定的模式
- `?(pattern|pattern|pattern)` 匹配0个或1个给定的模式
- `+(pattern|pattern|pattern)` 匹配1个或多个给定的模式
- `*(a|b|c)` 匹配0个或多个给定的模式
- `@(pattern|pat*|pat?erN)` 只匹配给定模式之一
- `**` 如果出现在路径部分，表示0个或多个子目录。

# npm link

开发NPM模块的时候，有时我们会希望，边开发边试用，比如本地调试的时候，`require('myModule')`会自动加载本机开发中的模块。Node规定，使用一个模块时，需要将其安装到全局的或项目的`node_modules`目录之中。对于开发中的模块，解决方法就是在全局的`node_modules`目录之中，生成一个符号链接，指向模块的本地目录。

`npm link`就能起到这个作用，会自动建立这个符号链接。

请设想这样一个场景，你开发了一个模块`myModule`，目录为`src/myModule`，你自己的项目`myProject`要用到这个模块，项目目录为`src/myProject`。首先，在模块目录（`src/myModule`）下运行`npm link`命令。

```
src/myModulenpm link
```

上面的命令会在NPM的全局模块目录内，生成一个符号链接文件，该文件的名字就是`package.json`文件中指定的模块名。

```
/path/to/global/node_modules/myModule -> src/myModule
```

这个时候，已经可以全局调用`myModule`模块了。但是，如果我们要让这个模块安装在项目内，还要进行下面的步骤。

切换到项目目录，再次运行`npm link`命令，并指定模块名。

```
src/myProjectnpm link myModule
```

上面命令等同于生成了本地模块的符号链接。

```
src/myProject/node_modules/myModule -> /path/to/global/node_modules/myModule
```

然后，就可以在你的项目中，加载该模块了。

```
var myModule = require('myModule');
```

这样一来，`myModule`的任何变化，都可以直接反映在`myProject`项目之中。但是，这样也出现了风险，任何在`myProject`目录中对`myModule`的修改，都会反映到模块的源码中。

如果你的项目不再需要该模块，可以在项目目录内使用`npm unlink`命令，删除符号链接。

```
src/myProjectnpm unlink myModule
```

# npm bin

`npm bin`命令显示相对于当前目录的，Node模块的可执行脚本所在的目录（即`.bin`目录）。

```
# 项目根目录下执行
npm bin
./node_modules/.bin
```

# npm adduser

`npm adduser`用于在npmjs.com注册一个用户。

```
npm adduser
Username: YOUR_USER_NAME
Password: YOUR_PASSWORD
Email: YOUR_EMAIL@domain.com
```

# npm publish

`npm publish`用于将当前模块发布到`npmjs.com`。执行之前，需要向`npmjs.com`申请用户名。

```
npm adduser
```

如果已经注册过，就使用下面的命令登录。

```
npm login
```

登录以后，就可以使用`npm publish`命令发布。

```
npm publish
```

如果当前模块是一个beta版，比如`1.3.1-beta.3`，那么发布的时候需要使用`tag`参数，将其发布到指定标签，默认的发布标签是`latest`。

```
npm publish --tag beta
```

如果发布私有模块，模块初始化的时候，需要加上`scope`参数。只有npm的付费用户才能发布私有模块。

```
npm init --scope=<yourscope>
```

如果你的模块是用ES6写的，那么发布的时候，最好转成ES5。首先，需要安装Babel。

```
npm install --save-dev babel-cli@6 babel-preset-es2015@6
```

然后，在`package.json`里面写入`build`脚本。

```
"scripts": {
  "build": "babel source --presets babel-preset-es2015 --out-dir distribution",
  "prepublish": "npm run build"
}
```

运行上面的脚本，会将`source`目录里面的ES6源码文件，转为`distribution`目录里面的ES5源码文件。然后，在项目根目录下面创建两个文件`.npmignore`和`.gitignore`，分别写入以下内容。

```javascrip
// .npmignore
source

// .gitignore
node_modules
distribution
```

# npm deprecate

如果想废弃某个版本的模块，可以使用`npm deprecate`命令。

```
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

运行上面的命令以后，小于`0.2.3`版本的模块的`package.json`都会写入一行警告，用户安装这些版本时，这行警告就会在命令行显示。

# npm owner

模块的维护者可以发布新版本。`npm owner`命令用于管理模块的维护者。

```
# 列出指定模块的维护者
npm owner ls <package name>

# 新增维护者
npm owner add <user> <package name>

# 删除维护者
npm owner rm <user> <package name>
```

# 其他命令

## npm home，npm repo

`npm home`命令可以打开一个模块的主页，`npm repo`命令则是打开一个模块的代码仓库。

```
npm home $package
npm repo $package
```

这两个命令不需要模块先安装。

## npm outdated

`npm outdated`命令检查当前项目所依赖的模块，是否已经有新版本。

```
npm outdated
```

它会输出当前版本（current version）、应当安装的版本（wanted version）和最新发布的版本（latest version）。

## npm prune

`npm prune`检查当前项目的`node_modules`目录中，是否有`package.json`里面没有提到的模块，然后将所有这些模块输出在命令行。

```
npm prune
```

## npm shrinkwrap

`npm shrinkwrap`的作用是锁定当前项目的依赖模块的版本。

```
npm shrinkwrap
```

运行该命令后，会在当前项目的根目录下生成一个`npm-shrinkwrap.json`文件，内容是`node_modules`目录下所有已经安装的模块，以及它们的精确版本。

下次运行`npm install`命令时，`npm`发现当前目录下有`npm-shrinkwrap.json`文件，就会只安装里面提到的模块，且版本也会保持一致。

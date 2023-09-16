[官网地址](https://eslint.bootcss.com/)

> 规范写代码的工具.
> 多人开发不同规则,提交代码一堆冲突
> 培养代码风格使用

vscode更改tab缩进空格数----设置---搜索tabsize---找到tab size---修改2(每次按下tab都缩进俩空格)---Vetur > Format  Options: Tab Size这个也要修改为2

vscode搜索format----勾选Editor: Format On Save(保存代码自动格式化代码)

[创建项目的步骤](https://blog.csdn.net/weixin_68658847/article/details/124416175)
**创建项目时,手动配置选择linter/formatter,这个代表ESLint,这个默认是勾选上的,默认安装ESLint**
![在这里插入图片描述](https://img-blog.csdnimg.cn/a9d34361f9484e078801859c72c5afa1.png)
**然后会有一步让选择ESLint的语法规范**
![在这里插入图片描述](https://img-blog.csdnimg.cn/f3f6a903d01a4782ab0e27e909b1485c.png)
这里本人选的是倒数第二个-----标准的配置
![在这里插入图片描述](https://img-blog.csdnimg.cn/4e54b077143f49fc86f6aee7cd9cbd6f.png)
代码检查设置:
1.保存时进行代码规范的检查
2.提交代码时进行代码规范的检查并修复(不建议选第二个,一般都在保存时就解决掉)


**创建完项目会发现多了个eslintrc.js文件,这个文件就是ESLint的配置文件**
### eslintrc.js配置文件中的rules规则
[官网地址----点击进入官网----用户指南----规则(里面有很多规则的配置)](https://eslint.bootcss.com/)
![在这里插入图片描述](https://img-blog.csdnimg.cn/e7433860ea05488c85994cbae8ff0a68.png)
**每种规范点进去都有对应的错误示范,建议去官网查看**
![在这里插入图片描述](https://img-blog.csdnimg.cn/f8d34abe5bda4c528cc152961f100c06.png)
**自定义规则(每种规范点进去都有对应的错误更改配置的选项,可以自己更改)**
![在这里插入图片描述](https://img-blog.csdnimg.cn/8ed4f9159acc46b1a473ae4270b3b534.png)
### VScode的ESLint插件和配置
插件搜ESLint直接安装
点击设置
右上角这个图标点进去
![在这里插入图片描述](https://img-blog.csdnimg.cn/a6cecbc1c3484aa8861f88fd60f4150d.png)

加入以下代码
```js
//ESLint插件的配置
"editor.codeActionsOnSave":{
	 "source.fixA11": true,
},
```
**再安装一个Prettier - Code formatter插件**
![在这里插入图片描述](https://img-blog.csdnimg.cn/210db86891774e119458fbd699df6493.png)
配置如下
```js
{
    "semi": false,
    "singleQuote": true,
    "bracketSpacing": true
}
settings.json中的配置如下：
"prettier.configPath": "C:\\Users\\HP\\.prettierrc",
    "eslint.alwaysShowStatus": true,//ESLint配置项
    // 安装Prettier配置
    "prettier.trailingComma": "none",
    "prettier.semi": false,

    // 每行文字个数超出此限制将会被迫换行
    "prettier.printWidth": 300,
    // 使用单引号替换双引号
    "prettier.singleQuote": true,
    "prettier.arrowParens": "avoid",
    // 设置 .vue 文件中，HTML代码的格式化插件
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    "vetur.ignoreProjectWarning": true,
    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            "trailingComma": "none",
            "singleQuote": true,
            "semi": false,
            "arrowParens": "avoid",
            "printWidth": 300
        },
        "js-beautify-html": {
            "wrap_attributes": false
        },
    },
```
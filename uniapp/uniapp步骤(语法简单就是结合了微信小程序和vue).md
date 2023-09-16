uni-app 使用vue的语法+小程序的标签和API。

# 一、开发规范

为了实现多端兼容，综合考虑编译速度、运行性能等因素，uni-app 约定了如下开发规范：

	1、页面文件遵循 Vue 单文件组件 (SFC) 规范：https://vue-loader.vuejs.org/zh/spec.html
	
	2、组件标签靠近小程序规范：https://uniapp.dcloud.net.cn/component/README
	
	3、接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni：https://uniapp.dcloud.net.cn/api/README
	
	4、数据绑定及事件处理同 Vue.js 规范，比如 @click="btnClick" :num="num"，同时补充了App及页面的生命周期
	
	5、为兼容多端运行，建议使用flex布局进行开发

# 二、目录结构

https://uniapp.dcloud.net.cn/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84

- components：存放自定义组件

- pages：业务页面文件存放的目录，通过路由导航的页面

- static：存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此

- App.vue：应用配置，用来配置App全局样式以及监听 应用生命周期
  - App.vue是uni-app的主组件，所有页面都是在App.vue下进行切换的，是页面入口文件。但App.vue本身不是页面，这里不能编写视图元素。
  - 这个文件的作用包括：调用应用生命周期函数、配置全局样式、配置全局的存储globalData
  - 应用生命周期仅可在App.vue中监听，在页面监听无效
  - 详见：https://uniapp.dcloud.io/collocation/App

- main.js:Vue初始化入口文件
  - main.js是uni-app的入口文件，主要作用是初始化vue实例、定义全局组件、使用需要的插件如vuex。
  - 详见：https://uniapp.dcloud.io/collocation/main

- pages.json:配置页面路由、导航条、选项卡等页面类信息，详见
  - pages.json 文件用来对 uni-app 进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生tabbar 等。
  - 它类似微信小程序中app.json的页面管理部分。注意定位权限申请等原属于app.json的内容，在uni-app中是在manifest中配置
  - 详见：https://uniapp.dcloud.io/collocation/pages

- manifest.json:配置应用名称、appid、logo、版本等打包信息
  - manifest.json 文件是应用的配置文件，用于指定应用的名称、图标、权限等。HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录。
  - 详见：https://uniapp.dcloud.io/collocation/manifest

- uni.scss
  - uni.scss文件的用途是为了方便整体控制应用的风格。比如按钮颜色、边框风格，uni.scss文件里预置了一批scss变量预置。
  - 详见：https://uniapp.dcloud.io/collocation/uni-scss

# 三、资源路径说明

- 详见：https://uniapp.dcloud.net.cn/tutorial/page-static-assets.html

# 四、生命周期

- 1、==应用生命周期函数==
  - 使用 小程序页面的 生命周期函数 如：onLaunch/onShow/onHide/onError 等
  - 注意：应用生命周期仅可在App.vue中监听，在其它页面监听无效。
  - 详见：https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e5%ba%94%e7%94%a8%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f

- 2、==页面生命周期==
  - 使用 小程序页面的 生命周期函数，如 onLoad/onShow/onHide/onReady/onReachBottom 等
  - 写在pages下的vue文件中
  - 详见：https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e9%a1%b5%e9%9d%a2%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f

- 3、==组件生命周期==
  - uni-app 组件支持的生命周期，与vue标准组件的生命周期相同。这里没有页面级的onLoad等生命周。如：beforeCreate/created/beforeMount/mounted/beforeUpdate/updated/beforeDestroy/destroyed
  - 写在components下的vue文件中 
  - 详见：https://uniapp.dcloud.io/collocation/frame/lifecycle?id=%e7%bb%84%e4%bb%b6%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f

# 五、路由

uni-app页面路由为框架统一管理，开发者需要在pages.json里配置每个路由页面的路径及页面样式。类似小程序在app.json中配置页面路由一样。所以 uni-app 的路由用法与 Vue Router 不同
路由跳转
uni-app 有两种页面路由跳转方式：使用navigator组件跳转、调用API跳转---与微信小程序用法相似

# 六、页面样式与布局

	1、尺寸单位：uni-app 支持的通用 css 单位包括 px、rpx
	2、样式导入：使用@import语句可以导入外联样式表，@import后跟需要导入的外联样式表的相对路径，用;表示语句结束
	详见：https://uniapp.dcloud.net.cn/tutorial/syntax-css.html

# 七、Vue语法

uni-app 在发布到H5时支持所有vue的语法；发布到App和小程序时，由于平台限制，无法实现全部vue语法，但 uni-app 仍是是对vue语法支持度最高的跨端框架。

相比Web平台， Vue.js 在 uni-app 中使用差异主要集中在两个方面：
	1、新增：uni-app 除了支持Vue实例的生命周期，还支持应用生命周期以及页面生命周期。
	2、受限：相比web平台，在小程序和App端部分功能受限：https://uniapp.dcloud.net.cn/vue-api
	3、uni-app 完整支持 Vue 模板语法。
	4、App端可以使用更多的vue特性：https://ask.dcloud.net.cn/article/36599

Vue2语法详见：https://uniapp.dcloud.net.cn/vue-basics

子组件同样使用vue的单文件组件

- 传值: 页面间传值与小程序相同， 父子组件传值与vue相同

状态管理

- 使用vuex实现状态管理  (uniapp已内置vuex，直接导入使用即可)

# 八、其他

## 样式

	1、非H5端默认并未启用 scoped，如需要隔离组件样式可以在 style 标签增加 scoped 属性，H5端为了隔离页面间的样式默认启用了 scoped
	2、创建页面放在pages目录中，创建完毕，会自在pages.json自动导入路径
	3、创建组件放在components目录中，按照vue组件的方式使用

## easycom

	传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。easycom将其精简为一步。 只要组件安装在项目的components目录下，并符合components/组件名称/组件名称.vue目录结构。就可以不用引用、注册，直接在页面中使用
	不管components目录下安装了多少组件，easycom打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。
	easycom是自动开启的，不需要手动开启

## 页面通信

- uni.$emit(eventName,OBJECT)` 触发全局的自定事件。附加参数都会传给监听器回调。
- `uni.$on(eventName,callback)` 监听全局的自定义事件。事件可以由 uni.$emit 触发，回调函数会接收所有传入事件触发函数的额外参数。

uni-app开发中遇到的问题，如何解决？
1、打包发布时的跨域问题 
	跨域问题解决(安卓/ios不考虑跨域， 小程序在后台配合法域名， H5需要在上线服务器搭代理)

2、发布小程序时的适配问题? 
	如果uniapp使用了自定义导航栏，打包小程序和app时， 导致导航栏和手机顶部状态条重叠
	解决: 使用uni.getSystem() 动态获取手机系统信息中的状态高度， 样式中预留状态条高度即可

3、之前写项目时，用到一个背景音频播放API， 在浏览器测试发现报错， 查看官方文档才发现， 背景音乐播放不支持H5端， 只支持app和小程序 
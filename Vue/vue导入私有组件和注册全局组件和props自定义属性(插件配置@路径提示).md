@[toc](目录)
# 先下载并配置插件 
导入的时候需要路径,有个@符号,但不能提示路径,需要手打路径,会发现很麻烦,这时候可以通过vscode插件来解决
**vscode搜索Path Autocomplete**
**配置插件,点击插件设置---扩展设置,点开任意一个setting.json中编辑,打开后拉到最上面,将下面配置复制上去即可**
```js
 //导入文件时是否携带文件的扩展名
    "path-autocomplete.extensionOnImport": true,
    // 配置@路径提示
    "path-autocomplete.pathMappings": {
        "@": "${folder}/src"
    },
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/55fa03f2d99a4c49a8ccb6edd0a0fc79.png)
配置完就可以使用@符号提示路径了

# 导入私有组件
**例如如下目录**
![在这里插入图片描述](https://img-blog.csdnimg.cn/03641c2aa0464af496e323742e8acd44.png)
**我想把left和right组件导入到App组件中,那么**
只需要三个步骤(这里以导入left为例)
- 在App.vue的script模块导入组件(import left from '@/components/Left.vue')
- 在export defult里面method平级地方创建
  components: {
    'left': left,  //这个是注册left组件,可简写成left
    'right': right   //这个是注册right组件,可简写成right
  }
- 在template节点的根组件下引入组件,直接用上面的注册名作为双标签展示组件
**完整代码**
```html
<template>
  <!-- 模板文件一定要包含一个根元素 -->
  <div>
    <h1>App.vue组件{{ xiaoji }}</h1>
    <button @click="xiugai">修改用户名</button>
    <!-- 3.以标签形式使用注册好的组件 -->
    <left></left>
    <right></right>
   
  </div>
</template>

<script>
//1.导入组件,一共三步
import left from '@/components/Left.vue'
import right from '@/components/Right.vue'

// 默认导出,这是固定写法
export default {
  // 组件的data不能像之前一样指向对象,组件中的data必须是一个函数
  data() {
    // 这个return出去的数据对象可以定义数据
    return {
      xiaoji: '你好'
    }
  },
  methods: {
    xiugai() {
      //在组件中,this就表示当前组件的实例对象
      console.log(this);
      this.xiaoji = "萧寂"
    }
  },
  // 2.对导入的组件进行注册
  components: {
    'left': left,
    'right': right
  },
  computed: {},
  // 当前组件中的过滤器
  filters: {}
}
</script>

<!-- less语法必须声明less -->
<style lang="less">
div {
  background-color: pink;

  h1 {
    background-color: red;
  }
}
</style>
```
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/c45ecaaf691742e58506a5f59ea30ce2.png)
成功将两个组件导入到App.vue了,如果某个组件需要另一个平级组件导入,也可以按照此方法导入即可
# 注册全局组件
**当一个组件被多次引用,就需要多次注册,避免这种麻烦可以做一个全局组件来直接使用**
在vue 项目的main.js入口文件中，通过Vue.component()方法，可以注册全局组件。
示例代码如下:
这里导入的是上面的count.vue
```js
//导入需要全局注册的组件
import count from '@/components/Count.vue'
//参数1:字符串格式，表示组件的“注册名称"
//参数2:需要被全局注册的那个组件
Vue.component("mycount",count)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/09db63a707fa49ab8933ae9c0a1ae3bb.png)
接下来就是在需要使用这个组件时,直接用组件名称作为template的一个双标签
![在这里插入图片描述](https://img-blog.csdnimg.cn/6a33305e88c14622822a46318d1ad314.png)
在这里,我在right.vue和App.vue都使用标签展示这个组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/4725a83642a944139ff4330c4fa8b3b5.png)
这样就完成了组件的全局注册和使用(切记:组件自己不能使用自己)
## props自定义属性使用
当一个组件被多个组件复用时,由于每个组件需要显示的默认值不同,就导致所复用的这个组件需要传入什么值才能满足需求,这时候可以使用props属性定义数组了
**还是以上面引入的count.vue为复用的组件为例**
要求:left.vue和right.vue组件复用count组件,要求两个组件展示的初始值不同,必须为数字number,不能为空
代码展示:
```html
<template>
  <div>
    <h5>Count 组件</h5>
    <p>count 的值是：{{ count }}</p>
    <button @click="count += 1">+1</button>

    <button @click="show">打印 this</button>
  </div>
</template>

<script>
export default {
  // props 是"自定义属性"，允许使用者通过自定义属性，为当前组件指定初始值
  // 自定义属性的名字，是封装者自定义的（只要名称合法即可）
  // props 中的数据，可以直接在模板结构中被使用
  // 注意：props 是只读的，不要直接修改 props 的值，否则终端会报错！
  // props: ['init'],
  props: {
    // 自定义属性A : { /* 配置选项 */ },
    // 自定义属性B : { /* 配置选项 */ },
    // 自定义属性C : { /* 配置选项 */ },
    init: {
      // 如果外界使用 Count 组件的时候，没有传递 init 属性，则默认值生效
      default: 0,
      // init 的值类型必须是 Number 数字
      type: Number,
      // 必填项校验
      required: true
    }
  },

  data() {
    return {
      // 把 props 中的 init 值，转存到 count 上
      count: this.init
    }
  },
  methods: {
    show() {
      console.log(this)
    }
  }
}
</script>

<style lang="less"></style>
```
接下来是left.vue和right.vue组件代码
left.vue
```vue
<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr />
    <!-- 在这里给props的init一个初始值9,:为v-bind将属性的字符串类型转换为number类型 -->
    <mycount :init="9"></mycount>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

h3 {
  color: red;
}

// 当使用第三方组件库的时候，如果有修改第三方组件默认样式的需求，需要用到 /deep/
/deep/ h5 {
  color: pink;
}
</style>
```
right.vue
```vue
<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr />
	 <!-- 在这里给props的init一个初始值9,:为v-bind将属性的字符串类型转换为number类型 -->
    <mycount :init="6"></mycount>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
```
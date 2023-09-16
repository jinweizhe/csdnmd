@[toc]
# 动态组件
## 1.component组件的使用
**1.什么是动态组件?动态组件就是指的是动态切换组件的显示和隐藏**

![在这里插入图片描述](https://img-blog.csdnimg.cn/bb0e0d2050e24de6aa418bc04513137b.png)
**可以把component理解为一个占位符,专门为组件占位,需要展示哪个组件,就给component指定组件的名称即可**
如下:
![在这里插入图片描述](https://img-blog.csdnimg.cn/206abf6204b54c09a55a918e8bb8eee2.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/22095bcc352b44c0985ac44f45a3b0de.png)
**但此时会发现上面的值是写死的,下面代码案例就可以实现动态绑定了**

![在这里插入图片描述](https://img-blog.csdnimg.cn/cad9b697bafd44c596e697627f58d549.png)
```js
<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
    <button @click="comName='left'">展示Left</button>
    <button @click="comName='right'">展示Right</button>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- <left></left>
      <right></right> -->
      <keep-alive>
        <component :is='comName'></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import left from '@/components/Left.vue'
import right from '@/components/Right.vue'
export default {
  data(){
    return{
      comName:'right'
    }
  },
  components:{
    left,
    right
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
```
### -keep-alive的使用
当在left组件定义个按钮,让其值自增1,初始值为0,当加到某一值时,切换right组件,再切换回来,就会发现left值又回到了初始值,如下:

**初始值为0,加到了18**
![在这里插入图片描述](https://img-blog.csdnimg.cn/e152617fdae44444b14d03a4590847ff.png)
**点击切换到right组件**
![在这里插入图片描述](https://img-blog.csdnimg.cn/52cd40e93615417eaa38e906d4bc4652.png)
**再点回来left组件**
![在这里插入图片描述](https://img-blog.csdnimg.cn/cdf62ec11ffe4c5c8ea577322c9394fb.png)
**可以发现left组件切换后回到了初始值,保存不了数据(即每次切换组件都是组件重新渲染了,就是组件创建--销毁---创建--销毁的过程)**
**可以通过-keep-alive解决这个问题(就是保持组件的状态)**
```js
<div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- <left></left>
      <right></right> -->
      <keep-alive>
        <component :is='comName'></component>
      </keep-alive>
    </div>
```
**keep-alive可以把内部的组件进行缓存,而不是销毁组件**
**使用-keep-alive包裹要保持状态的组件即可(用vue调试工具可以查看left组件每次切换没有被销毁重新创建,而是变灰了,等重新切换回来就正常了(组件被缓存到内存了),同理right组件也是灰了,然后二者就不会重复销毁---创建---销毁---创建了)**
![在这里插入图片描述](https://img-blog.csdnimg.cn/8230e6cd5a7743028e2b194e62e42d6d.png)
然后刷新网页,问题成功解决

#### keep-alive生命周期
> 当组件被缓存时，会自动触发组件的deactivated生命周期函数。
> 当组件被激活时，会自动触发组件的activated生命周期函数。
```js
<script>
export default {
  activated(){
    console.log("组件被激活了,activated");
  },
  destroyed(){
    console.log("组件被销毁了");
  },
  deactivated(){
    console.log("组件被缓存了");
  },
  data(){
    return {
      count:0
    }
  }
}
</script>
```
**每次切换left组件控制台的打印**
![在这里插入图片描述](https://img-blog.csdnimg.cn/2db0591277bf41999197820f0d3d4362.png)
#### 学习keep-alive组件的include和exclude属性
##### include(指定keep-alive的哪些组件可以被缓存,不指定的话默认所有都会被缓存)
**下面演示left组件会被缓存,right组件不用被缓存的示例**
```js
	  <keep-alive include="left">//指定left组件被缓存
        <component :is='comName'></component>
      </keep-alive>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/8a2b4dcd97fa4789867d2a976efa9617.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b2ea87efe21745c1b55946de1d8c8bb9.png)
**left组件被缓存了,right组件创建---销毁---创建---销毁状态**

**下面演示多个组件需要被缓存,因为我这就left和right,没有更多的,因此就指定这两个**
```js
	  <keep-alive include="left,right">//指定组件名称,多个组件用逗号分割
        <component :is='comName'></component>
      </keep-alive>
```
#### exclude(排除项,与include刚好相反,二者不能同时使用)
**下面演示left组件会被缓存,right组件不用被缓存的示例**
```js
	  <keep-alive exclude="right">//指定right组件不被缓存
        <component :is='comName'></component>
      </keep-alive>
```
当组件向外导出提供了name值如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/8c71f0b2f1954c38b99b2ba8ffb54b3d.png)
那上面的排除和包含项的具体名字不再使用注册提供的名称了,要以组件自己提供的name值为准,注册名还是以标签形式展现到页面使用
# 插槽
**插槽（Slot)是vue为组件的封装者提供的能力。允许开发者在封装组件时，把不确定的、希望由用户指定的部分定义为插槽。可以把插槽认为是组件封装期间，为用户预留的内容的占位符。**

![在这里插入图片描述](https://img-blog.csdnimg.cn/4219d75e4bcf496daa3015654cb468d8.png)
**在left组件定义个插槽**
![在这里插入图片描述](https://img-blog.csdnimg.cn/fd96433a587242e3856846faac5d2882.png)
**在App父组件使用插槽显示内容**
![在这里插入图片描述](https://img-blog.csdnimg.cn/25e274ac314f413db90df4b610d54640.png)
**显示效果**
![在这里插入图片描述](https://img-blog.csdnimg.cn/01b0240b308143de8d9b67fc0d5f827a.png)
**简单来说,插槽就是相当于子组件给父组件定义的注册名标签内的内容占位置**
### v-slot指令
**vue官方规定:每个插槽都有一个name属性,来指定当前插槽的名称,默认不写的话相当于name="default"**
**默认情况下,使用组件的时候,提供的内容都会放到名字为default的插槽之中,例如上面的p标签默认放到default插槽内**
```js
<slot name="default"></slot>
```
**v-slot只能加给组件或者template标签,其他不可用(不能直接用在元素上),因此使用方式如下**
```js
<div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <left>
      //使用template标签接收v-slot指令
      //如果要把内容填充到指定名称的插槽中，需要使用v-slot:这个指令
      //':'后面的为引用的组件的slot标签的name属性值,默认为default
      //这里的template标签只起到包裹的作用,不会被渲染成真实的html元素,可以浏览器控制台查看标签源代码,可以发现并没有template
        <template v-slot:default>
          <p>left组件的内容区域</p>
        </template>
      </left>
    </div>
```
#### v-slot的简写形式

> 简写:  例如插槽name属性为default,那么简写为   #default
#### 当插槽没有被指定具体内容时,指定一个默认内容
![在这里插入图片描述](https://img-blog.csdnimg.cn/5e0a3ca8564244c58028dbd8f01af7b8.png)
直接在插槽内直接写就可以
效果图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/938d8d8273ae4a919db098961d102387.png)
### 具名插槽的定义和使用
**如果在封装组件时需要预留多个插槽节点，则需要为每个<slot>插槽指定具体的name 名称。这种带有具体名称的插槽叫做“具名插槽”。示例代码如下:**
**注意:没有指定name名称的插槽，会有隐含的名称叫做''default"。**
**新建个active.vue文件,内容如下:(在这段代码定义了三个插槽,分别为标题,内容,作者)**
```js
<template>
    <div class="active-container">
        <!-- 文章标题 -->
        <div class="header-box">
            <slot name="title"></slot>
        </div>
        <!-- 文章内容 -->
        <div class="content-box">
            <slot name="body"></slot>
        </div>
        <!-- 文章作者 -->
        <div class="footer-box">
            <slot name="zuozhe"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Active'
}
</script>

<style lang="less" scoped>
    .active-container{
        >div{
            min-height: 150px;
        }
        .header-box{
            background-color: pink;
        }
        .content-box{
            background-color: lightblue;
        }
        .footer-box{
            background-color: lightsalmon;
        }
    }
</style>
```
**下面代码为App.vue使用部分**
```js
<active>
      <template #title>
        <h1>我是标题部分</h1>
      </template>
      <template #body>
        <h1>我是内容部分</h1>
      </template>
      <template #zuozhe>
        <h1>我是作者部分</h1>
      </template>
    </active>
```
最终效果:
![在这里插入图片描述](https://img-blog.csdnimg.cn/64dca231f7b94fa1b3a56ed08f3a666a.png)
### 作用域插槽的基本用法
**在插槽定义时同时可以传递一些数据**
在子组件中,定义插槽,同时携带数据,如下:(在上个代码作者里面改动的)
```js
<!-- 文章作者 -->
        <div class="footer-box">
            <slot name="zuozhe" msg="xiaoji 牛逼"></slot>//msg为携带的数据(这个属性是随便定义的,也可以定义别的或多个)
        </div>
```
在父组件中接收展示
```js
	<template #zuozhe="obj">//obj为形参,随便填写,为了接收子组件插槽的msg的数据
        <h1>我是作者部分</h1>
        {{ obj }}//可以通过打点访问里面的属性
      </template>
```
效果图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/e1860321d19549848f5197ab4c3510d7.png)
在封装组件时，为预留的<slot>提供属性对应的值,简单来说就是带数据的插槽，这种用法就叫做'作用域插槽'
### 作用域插槽的解构赋值
**还是参照上面的代码将obj解构赋值
在父组件中接收展示**
```js
	<template #zuozhe="{msg}">//obj为形参,随便填写,为了接收子组件插槽的msg的数据,接收多个数据的结构赋值用逗号分割
        <h1>我是作者部分</h1>
        {{ msg}}//可以通过打点访问里面的属性
      </template>
```
效果图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/53a97a381c364b63a17b6327f8eb414e.png)
# 自定义指令

> vue中的自定义指令分为两类，分别是:
> 私有自定义指令
> 全局自定义指令
### 私有自定义指令的声明
**在每个vue 组件中，可以在directives节点下声明私有自定义指令。**
需求:定义v-color指令,当元素绑定到此指令时,元素内的颜色会变成红色
代码如下:
```js
export default {
  components: { 
    left,
    active
  },
  // 私有自定义指令的节点
  directives:{
    //定义v-color指令,为绑定到的HTML元素设置红色的文字
    //定义名为color的指令,指向一个配置对象(空对象时,到这里v-color就可以用了(不会报错了),只是没做操作)
    color:{
      //业务逻辑
      //当这个v-color指令第一次被绑定元素身上时就会立即触发bind函数
      bind(el){
        // 形参中的el 是绑定了此指令的、原生的 DOM对象
        console.log(el,1);
        el.style.color='red'
      }
    }
  }
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/b684ee6031f642e3b31ef884d74982e5.png)
#### 效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/e4aa6f1536d147ed97c8314cbbf371d9.png)
#### 使用binding.value获取指令绑定的值
```js
//定义数据节点和自定义指令节点
 data(){
    return {
      color:'blue'
    }
  },
  // 私有自定义指令的节点
  directives:{
    //定义v-color指令,为绑定到的HTML元素设置红色的文字
    //定义名为color的指令,指向一个配置对象(空对象时,到这里v-color就可以用了(不会报错了),只是没做操作)
    color:{
      //业务逻辑
      //当这个v-color指令第一次被绑定元素身上时就会立即触发bind函数
      bind(el,binding){
        // 形参中的el 是绑定了此指令的、原生的 DOM对象
        console.log(el,1);
        console.log(binding)
        el.style.color=binding.value
      }
    }
  },
```
**给v-color绑定数据节点的颜色数据**
```html
<h1 v-color="color">App 根组件</h1>
```
**先定义一个数据节点存放颜色,然后为元素绑定数据触发bind方法,打印bind方法的第二个形参,结果如下,可以发现数据的键为value,通过此参数动态改变颜色数据**
![在这里插入图片描述](https://img-blog.csdnimg.cn/7ba8413b5a4c4d2f8ffdf3b55b85e871.png)
效果图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/9345a9e0d0db4abe8e1af2f17cfe89c0.png)
**也可以不声明data数据节点,可以直接声明数据,通过以下代码可以动态去设置自己想要的值,切记一定要用单引号,不然会当成data数据去data去找了,代码如下:
这种方式是自己赋值,不是通过data数据获取的**
```js
<h1 v-color="'yellow'">App 根组件</h1>
<h1 v-color="'orange'">App 根组件</h1>
<h1 v-color="'pink'">App 根组件</h1>
```
这是再打印bind的第二个参数,会发现里面有个数据expression 之前的值为color,,,通过我们自己传值变成了我们自己传的值,而不是color了
**expression 这个值为我们v-color=" ",为这个双引号的里面的值,我们真正的值在value里面存放,expression 代表我们自己传的值**
#### update函数
bind指令只在第一次绑定时才出发,例如定一个按钮,点击按钮改变颜色数据,此时不会触发bind函数,这时候就需要update函数了

![在这里插入图片描述](https://img-blog.csdnimg.cn/fae414e46c9d44d390de83f2f8717869.png)
#### 自定义指令的简写形式
如果bind和update函数中的逻辑完全相同，则对象格式的自定义指令可以简写成函数格式:
```js
 directives:{
    color(el,binding){
        // 在bind和update时,会触发相同的业务逻辑
        console.log(el,1);
        console.log(binding)
        el.style.color=binding.value
      }
  },
```
### 全局自定义指令的声明
**全局共享的自定义指令需要在main.js通过“Vue.directive()”进行声明，示例代码如下:**
```js
//全写
Vue.directive('color',{
	bind(el,binding){
		el.style.color=binding.value
	},
	update(el,binding){
		el.style.color=binding.value
	}
})

//简写
//参数一:字符串,表示全局自定义指令的名字
//参数二:对象,用来接收指令的参数值
Vue.directive('color',function(el,binding){
	el.style.color=binding.value
})
```
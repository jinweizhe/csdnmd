@[toc]
# 注册组件

## 组件的理解

组件 (Component) 是 Vue.js 最强大的功能之一。组件可以：进行数据传递、扩展 HTML 元素、封装可重用的代码。**在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以表现为用 is 特性进行了扩展的原生 HTML 元素。**所有的 Vue 组件同时也都是 Vue 的实例，所以可接受相同的选项对象 (除了一些根级特有的选项) 并提供相同的生命周期钩子。

- 组件是实现局部功能效果的代码集合，一个组件可以包含html/css/js/image等资源

### 为什么使用组件

- 如果我们将一个页面中所有的处理逻辑全部放在一起，处理起来就会变得非常复杂，而且不利于后续的管理以及扩展。
- 但如果，我们将一个页面拆分成一个个小的功能块，每个功能块完成属于自己这部分独立的功能，那么之后整个页面的管理和维护就变得非常容易了。每一个小的功能块就是一个组件。

### 组件化

组件是Vue.js中的重要思想

- 它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构造我们的应用。
- 任何的应用都会被抽象成一颗组件树。

![Component Tree](https://img-blog.csdnimg.cn/img_convert/272d0f7d6b2004bd4e59717218a733a3.png)

### 组件化思想的应用

- 有了组件化的思想，我们在之后的开发中就要充分的利用它。
- 尽可能的将页面拆分成一个个小的、可复用的组件。
- 这样让我们的代码更加方便组织和管理，并且扩展性也更强

### 复用组件

- 组件是可复用的 Vue 实例
- 组件就像标签一样可以重复使用
- 可以将组件进行任意次数的复用

## 注册组件

注册组件分为三步

- 创建组件构造器
- 注册组件
- 使用组件

```html
<div id="app">
  <h1>App</h1>
  
  <!-- 第三步：使用组件 -->
  <Hello></Hello>

</div>
<script>
	// 第一步：创建组件构造器
  const Hello = Vue.extend({
    template: `<div>Hello组件</div>`,
  });
  
  // 第二步：注册组件
  Vue.component('Hello', Hello);
  
  new Vue({
    el: '#app',
  });
</script>
```

### 创建组件构造器 

使用基础 Vue 构造器 `Vue.extend()` ，创建一个“子类”。参数是一个包含组件选项的对象。

Vue 看做是父类， Vue.extend 创建一个继承Vue的子类，这个子类使用new关键字可以创建组件对象。	

- 调用Vue.extend()创建的是一个组件构造器。
- 通常在创建组件构造器时，传入template代表自定义组件的模板。该模板就是在使用到组件的地方，要显示的HTML代码。
- 事实上，这种写法在Vue2.x的文档中几乎已经看不到了，它会直接使用下面我们会讲到的语法糖，但是在很多资料还是会提到这种方式，而且这种方式是学习后面方式的基础。

Vue.extend(options)创建组件构造器，其中options和new Vue(options)时传入的那个options几乎一样，但也有点区别；

- el不要写：只有const vm = new Vue()创建的Vue实例才有el选项，并且最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
- data必须写成函数： 避免组件被复用时，数据存在引用关系。

### 注册组件

- 调用Vue.component()是将组件构造器注册为一个组件，并且给它起一个名称作为组件的名字。
- 需要传递两个参数：1、注册组件的名称；2、组件构造器。

### 使用组件

- 使用自定义组件时，组件必须放在根组件vm实例模板的内部
- 在自定义组件中也可以使用其他的自定义组件


## 全局组件和局部组件

### 全局组件

注册全局组件：`Vue.component('组件名',组件构造器)`

```js
Vue.component('Hello', Hello);
```

### 局部组件

注册局部组件：在options选项中添加components属性注册局部组件

- `new Vue({components:{ 组件名: 组件构造器 }})`
- `Vue.extend({components:{ 组件名: 组件构造器 }})`

```js
new Vue({
  components:{
    //Hello:Hello,
    // 简化为
    Hello，
  }
});

// 或者

Vue.extend({
  components:{
    //Hello:Hello,
    // 简化为
    Hello，
  }
});
```

不管是全局组件，还是局部组件使用方式都一样，区别是使用范围不一样：

- 局部组件：只能在注册局部组件的vue实例的模板中使用（谁注册，在谁的模板中使用）
- 全局组件：可以在任何一个vue实例的模板中使用，也可以在子组件中使用（在任意组件的模板中使用）

### 组件的嵌套

- 组件和组件之间存在嵌套关系，组件之间的嵌套就形成了父子组件、兄弟组件的关系
- 父子组件不局限于全局组件或者局部组件，类似HTML标签，把组件用在哪个组件的内部，外部组件是父组件，内部组件是子组件。
- 如果两个组件是并列关系组件，则是是兄弟组件

组件嵌套的时候注意组件注册的位置：

- 局部组件谁注册，在谁的模板中使用。
- 全局组件在任意组件的模板中使用。

## 注册组件的语法糖

使用Vue.extend()创建组件构造器，然后再进行注册的方式有些繁琐。Vue为了简化这个过程，提供了注册的语法糖。省去了调用Vue.extend()的步骤，而是可以直接使用一个对象来代替Vue.extend()。

```html
<div id="app">
  <h1>App</h1>
  
  <!-- 第三步：使用组件 -->
  <Hello></Hello>
	<World></World>
</div>
<script>
	// 第一步：创建组件配置对象
  const Hello = {
    name:'Hello',
    template: `<div>Hello组件</div>`,
  };
  const World = {
    name:'World',
    template: `<div>World组件</div>`,
  }
  
  // 第二步：注册组件
  // 注册全局组件
  Vue.component('Hello', Hello);
  
  new Vue({
    el: '#app',
    // 注册局部组件
    components:{
      World,
    }
  });
</script>
```

## 组件命名

### 组件名

一个单词组成：

- 第一种写法(首字母小写)：Vue.component('==hello==', {  });
- 第二种写法(首字母大写)：Vue.component('==Hello==', {  });

多个单词组成：

- 第一种写法(kebab-case命名)：Vue.component('==hello-world==', {  });
- 第二种写法(CamelCase命名)：Vue.component('==HelloWorld==', {  }); (需要在单文件组件中使用)

组件名的推荐命名为多个单词：

**组件名应该始终是多个单词的，根组件 `App` 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。**

这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

- 组件名不能与HTML中已有的元素名称冲突，例如：h2、H2都不行。
- 给组件命名之后，可以在options中使用name配置项指定组件在开发者工具中呈现的名字。

### 关于组件标签

第一种写法（带有闭合的组件）：`<HelloWorld></HelloWorld>`

第二种写法（自闭合组件）：`<HelloWorld/>`

在单文件组件的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。

自闭合组件表示它们不仅没有内容，而且刻意没有内容。其不同之处就好像书上的一页白纸对比贴有“本页有意留白”标签的白纸。而且没有了额外的闭合标签，你的代码也更简洁。

不幸的是，HTML 并不支持自闭合的自定义元素——只有官方的“空”元素（br、hr、img等元素）。所以自闭合写法适合单文件组件中，在DOM模板中不要使用。

总结：

- 不用单文件组件时，`<HelloWorld/>`会导致后续组件不能渲染。

- 不用单文件组件时，由于 HTML 是大小写不敏感的，在 DOM 模板中必须仍使用 kebab-case。
- 在单文件组件中推荐使用自闭合的组件

```html
<!-- 在.vue单文件组件 -->
<HelloWorld/>

<!-- 在 DOM 模板中 -->
<hello-world></hello-world>

<!-- 或者在所有地方 -->
<hello-world></hello-world>
```

## 组件模板的分离写法

组件模板的标签直接写在template属性中比较麻烦。如果我们能将其中的HTML分离出来写，然后挂载到对应的组件上，必然结构会变得非常清晰。

Vue提供了两种方案来定义HTML模板内容:

- 使用`<script>`标签：`<script type="text/html">` 或者 `<script type="text/x-template">`
- 使用`<template>`标签

**一个组件模板内只能只有一个根元素，如果有多个根元素，可以用一个div包裹起来。**

```html
<script id="HelloX" type="text/html">
    <div>Hello组件</div>
</script>


<script id="HelloX" type="text/x-template">
  <div>Hello组件</div>
</script>


<template id="HelloX">
  <div>Hello组件</div>
</template>

<script>
  Vue.component('HelloX', {
    name: 'HelloX',
    // template: `<div>Hello组件</div>`,
    template: '#HelloX',
  });
</script>
```

## 组件的data必须是一个函数

因为组件是可以复用的，且 JS 里对象是引用关系，一个组件被复用多次的话，每复用一次就会创建一个vue实例。本质上，这些实例用的都是同一个构造函数VueComponent。

- 如果组件中 data 选项是一个对象，这样组件之间的作用域没有隔离，组件中的 data 属性值会相互影响

- 如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响

- 而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题，data可以是对象，也可以是函数

##   关于VueComponent

1. Hello组件本质是一个名为VueComponent的构造函数，是Vue内部定义的一个函数，是Vue.extend生成的，调用Vue.extend()的返回值就是VueComponent函数。

```js
const Hello = Vue.extend({
  name: 'Hello',
  template: `<div>Hello组件</div>`,
});
```

2. 当我们使用组件时 `<Hello></Hello>`，Vue解析时会帮我们创建Hello组件的实例对象，
   即Vue会执行：new VueComponent(options)。多以复用组件时，每复用一次，就会创建一个新的组件实例对象。

3. 特别注意：每次调用Vue.extend，返回的都是一个全新的VueComponent！！！！

4. 关于this指向：

   - 组件options配置中：data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【VueComponent实例对象】。

   - new Vue(options)配置中：data函数、methods中的函数、watch中的函数、computed中的函数 它们的this均是【Vue实例对象】。

5. vc和vm

   - VueComponent的实例对象，简称vc（也可称之为：组件实例对象）。

   - Vue的实例对象，简称vm。

**一个重要的内置关系**

- 一个重要的内置关系：`VueComponent.prototype.__proto__ === Vue.prototype`
- 为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue原型上的属性、方法。

![image-20220502195729968](https://img-blog.csdnimg.cn/img_convert/85ce0944043da01a4e38cddb69e196c5.png)

# 组件props

Props 是一种特别的属性，你可以在组件上声明注册，用于父组件向子组件传值。

## props声明

一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute。

声明props属性：

```js
Vue.component('m-v', {
  // 声明props属性
  props: ['title', 'count'],
  // 直接在模板中访问title属性
  template:"<span>{{ title }}</span>",
  created(){
    // 使用this访问title属性
    console.log(this.title);
  }
});
```

- 当一个值被传递给 prop 时，它将成为该组件实例上的一个属性。该属性的值可以像其他组件属性一样，在模板和组件的 `this` 上下文中访问。

- 一个组件可以有任意多的 props，默认情况下，所有 prop 都接受任意类型的值。

给props属性传值，当一个 prop 被注册后，可以像这样以自定义 attribute 的形式传递数据给它：

```html
<m-v title="自定义组件" count="2"></m-v>
```

## props属性命名

如果一个 prop 的名字很长，是由多个单词组成，声明和使用遵循以下命名方式：

- 声明props属性：声明属性使用小驼峰 camelCase 形式
- 使用props属性：在组件模板中、this访问的时候，使用小驼峰 camelCase  形式
- 给props属性传值：作为组件的属性，需要使用 kebab-case 形式

```js
Vue.component('m-v', {
  template:"<span>{{ getTitle }}</span>",
  props: ['getTitle'],
})
```

```html
<m-v get-title="hello"></m-v>
```

## 静态 vs. 动态 Prop

静态props：不使用v-bind，直接传递字符串，属性得到的值都是字符串

```html
<m-v title="如何学习Vue"></m-v>

<m-v count="2"></m-v>
```

动态props：使用v-bind，动态绑定属性，属性得到的值就是变量的值

```html
<!-- 根据一个变量的值动态传入 -->
<m-v :title="post.title"></m-v>

<!-- 根据一个更复杂表达式的值动态传入 -->
<m-v :title="post.title + ' by ' + post.author.name""></m-v>
```

## 传递不同的值类型

在上述的例子中，我们只传入了字符串值，但实际上**任何**类型的值都可以作为 props 的值被传递。

### Number

```html
<!-- 虽然 `42` 是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :likes="42" />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :likes="post.likes" />
```

### Boolean

```html
<!-- 仅写上 prop 但不传值，会隐式转换为 `true` -->
<BlogPost is-published />

<!-- 虽然 `false` 是静态的值，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :is-published="false" />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :is-published="post.isPublished" />
```

### Array

```html
<!-- 虽然这个数组是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost :comment-ids="[234, 266, 273]" />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :comment-ids="post.commentIds" />
```

### Object

```html
<!-- 虽然这个对象字面量是个常量，我们还是需要使用 v-bind -->
<!-- 因为这是一个 JavaScript 表达式而不是一个字符串 -->
<BlogPost
  :author="{
    name: 'Veronica',
    company: 'Veridian Dynamics'
  }"
 />

<!-- 根据一个变量的值动态传入 -->
<BlogPost :author="post.author" />
```

### 使用一个对象绑定多个 prop

如果你想要将一个对象的所有属性都当作 props 传入，你可以使用[没有参数的 `v-bind`，即只使用 `v-bind` 而非 `:prop-name`。例如，这里有一个 `post` 对象：

```js
export default {
  data() {
    return {
      post: {
        id: 1,
        title: 'My Journey with Vue'
      }
    }
  }
}
```

以及下面的模板：

```html
<BlogPost v-bind="post" />
```

而这实际上等价于：

```html
<BlogPost :id="post.id" :title="post.title" />
```

## 单向数据流

所有的 props 都遵循着**单向绑定**原则，props 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。

另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你**不应该**在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告：

```js
export default {
  props: ['foo'],
  created() {
    // ❌ 警告！prop 是只读的！
    this.foo = 'bar'
  }
}
```

导致你想要更改一个 prop 的需求通常来源于以下两种场景：

1. **prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性**。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：

```js
export default {
  props: ['initialCounter'],
  data() {
    return {
      // 计数器只是将 this.initialCounter 作为初始值
      // 像下面这样做就使 prop 和后续更新无关了
      counter: this.initialCounter
    }
  }
}
```

2. **需要对传入的 prop 值做进一步的转换**。在这种情况中，最好是基于该 prop 值定义一个计算属性：

```js
export default {
   props: ['size'],
  computed: {
    // 该 prop 变更时计算属性也会自动更新
    normalizedSize() {
      return this.size.trim().toLowerCase()
    }
  }
}
```

## 更改对象 / 数组类型的 props

当对象或数组作为 props 被传入时，虽然子组件无法更改 props 绑定，但仍然**可以**更改对象或数组内部的值。这是因为 JavaScript 的对象和数组是按引用传递，而对 Vue 来说，禁止这样的改动虽然可能，但有很大的性能损耗，比较得不偿失。

这种更改的主要缺陷是它允许了子组件以某种不明显的方式影响父组件的状态，可能会使数据流在将来变得更难以理解。在最佳实践中，你应该尽可能避免这样的更改，除非父子组件在设计上本来就需要紧密耦合。在大多数场景下，子组件应该[抛出一个事件](https://cn.vuejs.org/guide/components/events.html)来通知父组件做出改变。

## Prop 校验

除了使用字符串数组来声明 prop 外，还可以使用对象的形式，对于以对象形式声明中的每个属性：

- key 是 prop 属性的名称
- 值则是该 prop 预期类型的构造函数，比如，如果要求一个 prop 的值是 `number` 类型，则可使用 `Number` 构造函数作为其声明的值。

```js
export default {
   props: {
    title: String,
    count: Number,
  }
}
```

对象形式的 props 声明不仅可以一定程度上作为组件的文档，而且如果其他开发者在使用你的组件时传递了错误的类型，也会在浏览器控制台中抛出警告。

Vue 组件可以更细致地声明对传入的 props 的校验要求。比如我们上面已经看到过的类型声明，如果传入的值不满足类型要求，Vue 会在浏览器控制台中抛出警告来提醒使用者。这在开发给其他开发者使用的组件时非常有用。

要声明对 props 的校验，你可以向 `props` 选项提供一个带有 props 校验选项的对象，例如：

```js
export default {
  props: {
    // 基础类型检查
    //（给出 `null` 和 `undefined` 值则会跳过任何类型检查）
    propA: Number,
    // 多种可能的类型
    propB: [String, Number],
    // 必传，且为 String 类型
    propC: {
      type: String,
      required: true
    },
    // Number 类型的默认值
    propD: {
      type: Number,
      default: 100
    },
    // 对象类型的默认值
    propE: {
      type: Object,
      // 对象或者数组应当用工厂函数返回。
      // 工厂函数会收到组件所接收的原始 props 作为参数
      default(rawProps) {
        return { message: 'hello' }
      }
    },
    // 自定义类型校验函数
    propF: {
      validator(value) {
        // The value must match one of these strings
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // 函数类型的默认值
    propG: {
      type: Function,
      // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
      default() {
        return 'Default function'
      }
    }
  }
}
```

一些补充细节：

- 所有 prop 默认都是可选的，除非声明了 `required: true`。
- 除 `Boolean` 外的未传递的可选 prop 将会有一个默认值 `undefined`。
- `Boolean` 类型的未传递 prop 将被转换为 `false`。这可以通过为它设置 `default` 来更改——例如：设置为 `default: undefined` 将与非布尔类型的 prop 的行为保持一致。
- 如果声明了 `default` 值，那么在 prop 的值被解析为 `undefined` 时，无论 prop 是未被传递还是显式指明的 `undefined`，都会改为 `default` 值。

当 prop 的校验失败后，Vue 会抛出一个控制台警告 (在开发模式下)。

> **注意** prop 的校验是在组件实例被创建**之前**，所以实例的属性 (比如 `data`、`computed` 等) 将在 `default` 或 `validator` 函数中不可用。

校验选项中的 `type` 可以是下列这些原生构造函数：

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`

## Boolean 类型转换

为了更贴近原生 boolean attributes 的行为，声明为 `Boolean` 类型的 props 有特别的类型转换规则。以带有如下声明的 `<MyComponent>` 组件为例：

```js
export default {
  props: {
    disabled: Boolean
  }
}
```

该组件可以被这样使用：

```html
<!-- 等同于传入 :disabled="true" -->
<MyComponent disabled />

<!-- 等同于传入 :disabled="false" -->
<MyComponent />
```

当一个 prop 被声明为允许多种类型时，例如：

```js
export default {
  props: {
    disabled: [Boolean, Number]
  }
}
```

无论声明类型的顺序如何，`Boolean` 类型的特殊转换规则都会被应用。

# 组件的自定义事件

组件的自定义事件，是在组件中使用`$emit`发射自定义事件，常用于组件的通信：子组件向父组件传值。

## 组件绑定原生DOM事件

在vue2中，组件不能直接绑定原生DOM事件，给组件绑定原生DOM事件需要使用`.native`修饰符。

在vue3中，移除了`.native`修饰符，可以直接在组件上绑定原生DOM事件。

```html
<!-- 组件中的原生事件 -->
<my-component @click.native="onClick"></my-component>
```

其他注意事项见[将原生事件绑定到组件](https://v2.cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)。

## 发射自定义事件 $emit

发射自定义事件使用 `$emit`函数，语法：` vm.$emit(eventName, […args] )`

- `eventName`：自定义事件名，**始终使用 kebab-case 的事件名**
- `[…args]`：发射事件时传递的参数，可以是任意数据类型。

>  关于事件名的解释:
>
>  ### [Vue2 文档的说法：](https://v2.cn.vuejs.org/v2/guide/components-custom-events.html#%E4%BA%8B%E4%BB%B6%E5%90%8D)
>
>  不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。举个例子，如果触发一个 camelCase 名字的事件：
>
>  ```html
>  this.$emit('myEvent')
>  ```
>
>  则监听这个名字的 kebab-case 版本是不会有任何效果的：
>
>  ```html
>  <!-- 没有效果 -->
>  <my-component v-on:my-event="doSomething"></my-component>
>  ```
>
>  不同于组件和 prop，事件名不会被用作一个 JavaScript 变量名或 property 名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成 `v-on:myevent`——导致 `myEvent` 不可能被监听到。
>
>  因此，我们推荐你**始终使用 kebab-case 的事件名**。
>
>  ### [Vue3文档的说法：](https://cn.vuejs.org/guide/components/events.html#emitting-and-listening-to-events)
>
>  像组件与 prop 一样，事件的名字也提供了自动的格式转换：
>
>  - 触发以 camelCase 形式命名的事件，在父组件中使用 kebab-case 形式来监听
>  - 或者触发 kebab-case  形式命名的事件，在父组件中也使用 kebab-case 形式来监听
>
>  ### 总结
>
>  在Vue2和Vue3中不论是发射事件，还是监听事件 **始终使用 kebab-case 的事件名**

 `$emit`函数使用的时候有两种形式：

- 方式一：用在组件的模板中，直接使用 `$emit` 
- 方式二：用在组件实例上，需要使用 `this.$emit` 

> 记住一条规则：只要是能够使用组件实例访问的属性和方法，都可以直接在模板中使用，比如：data中的属性，methods中的函数，computed中的计算属性都可以使用this或者在组件模板中访问。

方式一示例：在组件的模板表达式中，可以直接使用 `$emit` 方法触发自定义事件 (例如：在 `v-on` 的处理函数中)：

```html
<!-- MyComponent -->
<button @click="$emit('some-event')">click me</button>
```

方式二实例：`$emit()` 方法在组件实例上也同样以 `this.$emit()` 的形式可用：

```js
// MyComponent组件实例
export default {
  methods: {
    submit() {
      this.$emit('some-event')
    }
  }
}
```

## 组件监听自定义事件

组件监听自定义事件也有两种方式：

- 直接在父组件的模板中使用 `v-on` 监听（推荐用法）
- 使用ref引用子组件实例，使用 `$on` 在父组件的模板中监听

### v-on监听

方式一：直接在父组件的模板中监听，父组件可以通过 `v-on` (缩写为 `@`) 来监听事件：

```html
<MyComponent @some-event="fn" />
```

同样，组件的事件监听器也支持 `.once` 修饰符：

```html
<MyComponent @some-event.once="fn" />
```

```js
// MyComponent父组件实例方法
methods: {
 fn (val) {
   console.log('监听 some-event');
	},
},
```

> 和原生 DOM 事件不一样，组件触发的自定义事件**没有冒泡机制**。你只能监听直接子组件触发的事件。平级组件或是跨越多层嵌套的组件间通信，应使用一个外部的事件总线，或是使用一个[全局状态管理方案](https://cn.vuejs.org/guide/scaling-up/state-management.html)。

### $on监听

方式二：使用ref引用子组件实例，调用$on在父组件的模板中监听

作用：$on函数用来监听当前实例上的自定义事件。事件可以由 `vm.$emit` 触发。回调函数会接收所有传入事件触发函数的额外参数。

语法：`vm.$on(eventName, callback )`：

- `eventName`： `vm.$emit` 发射的自定义事件名
- `callback`：监听到自定义事件的回调函数，该函数的参数是发射事件时传递的数据

具体使用方式如下：

```html
<MyComponent ref="mc"/>
```

使用 `$on` 监听自定义事件时，注意`this`指向的问题，可以通过以下是那种方式解决this指向问题：

方式一：直接使用箭头函数，解决this指向的问题

```js
mounted () {
  this.$refs.mc.$on('some-event', (val)=>{
    console.log('监听 some-event', val);
   this.count += val;
  });
},
```

方式二：使用bind函数改变this指向

```js
mounted () {
  this.$refs.mv.$on('some-event', function(val){
    console.log('监听 some-event', val);
   this.count += val;
  }.bind(this));
},
```

方式三：在methods中定义函数，监听事件时使用this调用函数

```js
mounted () {
  this.$refs.mv.$on('some-event', this.receive);
},
methods: {
 receive (val) {
   console.log('监听 some-event', val);
   this.num = val;
	},
},
```

## 传递事件参数

事件参数用于子组件向父组件传值，给 `$emit` 提供一个额外的参数：

```html
<!-- MyButton --> 
<button @click="$emit('increase-by', 1)">Increase by 1</button>
```

然后我们在父组件中监听事件，并接收到事件附带的参数：

```HTML
<MyButton @increase-by="(n) => count += n" />
```

或者，也可以用一个组件方法来作为事件处理函数：

```html
<MyButton @increase-by="increaseCount" />

<!-- $event是发射事件时传递的参数 1 -->
<MyButton @increase-by="increaseCount($event)" />
```

该方法也会接收到事件所传递的参数：

```js
// 父组件函数
methods: {
  increaseCount(n) {
    this.count += n
  }
}
```

> 所有传入 `$emit()` 的额外参数都会被直接传向监听器。举例来说，`$emit('foo', 1, 2, 3)` 触发后，监听器函数将会收到这三个参数值。

## 解除自定义事件监听

用法：`$off` 用来移除自定义事件监听器。

语法：`vm.$off( [eventName, callback] )`：

- 如果没有提供参数，则移除所有的事件监听器；
- 如果只提供了事件，则移除该事件所有的监听器；
- 如果同时提供了事件与回调，则只移除这个回调的监听器。

```js
destroyed () {
  console.log('组件销毁');
  this.$on('some-event');
},
```

模拟组件销毁可以使用 `$destroy` ：

作用：完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。触发 `beforeDestroy` 和 `destroyed` 的钩子。

语法：vm.$destroy()

> 在大多数场景中你不应该调用这个方法。最好使用 `v-if` 和 `v-for` 指令以数据驱动的方式控制子组件的生命周期。

## 一次性的自定义事件监听

`$once`用来进行一次性的自定义事件监听

用法：监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。

语法：`vm.$once( event, callback )`

```js
mounted () {
  this.$refs.mc.$once('some-event', (val)=>{
    console.log('监听 some-event', val);
   this.count += val;
  });
},
```

# 组件之间的通信

常用的组件之间的通信有父传子，子传父，和非父子组件之间的通信。

## 父传子 props

 `props` 用于父组件向子组件传送数据，这应该是最常用的方式了

子组件接收到数据之后，**不能直接修改**父组件的数据。会报错，所以当父组件重新渲染时，数据会被覆盖。如果子组件内要修改的话推荐使用 computed。

## $emit / v-on

子组件通过派发事件的方式给父组件数据，或者触发父组件更新等操作。

## EventBus

EventBus 是中央事件总线，不管是父子组件，兄弟组件，跨层级组件等都可以使用它完成通信操作。

定义方式有多种：

```js
// 方法一
// 抽离成一个单独的 js 文件 Bus.js ，然后在需要的地方引入
// Bus.js
import Vue from "vue"
export default new Vue()


// 方法二 直接挂载到全局
// main.js
import Vue from "vue"
Vue.prototype.$bus = new Vue()


// 方法三 注入到 Vue 根对象上
// main.js
import Vue from "vue"
new Vue({
  el:"#app",
  data:{
    $bus: new Vue()
  }
})


// 方法四 使用根组件实例作为中央事件总线
new Vue({
	beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
}) 
```

详细用法如下：

第一步：组件1使用中央事件总线使用 `$emit` 发射事件并传递数据

```js
Vue.prototype.$bus = new Vue();

Vue.component('m-v1', {
  template: '<button @click="add">组件1 num：{{num}}</button>',
  data () {
    return { num: 0 }
  },
  methods: {
    add () {
      // 任何组件都可以在总线上发射事件。
      this.$bus.$emit('changenum', ++this.num);
    }
  }
});
```

第二步：组件2使用中央事件总线配合 `$on` 监听事件，并接收数据

```js
Vue.component('m-v2', {
  template: '<p>组件2 count：{{count}}</p>',
  data () {
    return { count: 0 }
  },
  mounted () {
    // 任何组件都可以监听总线上的事件
    this.$bus.$on('changenum',(value)=>{
      this.count = value;
    });
  },
  // 在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件
  beforeDestroy(){
  	this.$bus.off('changenum');
	}
});
```

## 消息订阅与发布

pubsub.js消息发布订阅

- 这种发布订阅方式，是目前开发中比较常用的兄弟组件通信方法。
- 其实pubsub.js不只适用于兄弟组件通信，其实任意层级、任意关系的组件通信，都可以使用pubsub的发布订阅通信，功能很强大。
- react中也可以使用这个插件，因为这个插件是用原生js写的
- 文档：https://www.npmjs.com/package/pubsub-js

使用步骤：

第一步：下载pubsub.js

```
npm install pubsub-js --save
```

第二步：在组件A组件中发布消息

```js
import PubSub from 'pubsub-js';

mounted() {
  // 发布消息并传递数据
  PubSub.publish('send-data', { data: 1 });
}
```

第三步：在B组件中订阅消息

```js
import PubSub from 'pubsub-js';

methods(){
  fn(data){ }
}

mounted() {
  this.token = PubSub.subscribe('xxx',this.fn) //订阅消息
}
// 在beforeDestroy钩子中，用 PubSub.unsubscribe(pid)取消订阅。
beforeDestroy(){
  PubSub.unsubscribe(this.token);
}
```

## Vuex

[Vuex](https://vuex.vuejs.org/zh/guide/) 是状态管理器，集中式存储管理所有组件的状态。

## 总结

[Vue3的8种和Vue2的12种组件通信](https://juejin.cn/post/6999687348120190983)

# 组件上使用v-model指令

## v-model的原理

 `v-model` 在原生元素上的用法：

```vue
<input v-model="searchText" />
```

上面的代码其实等价于下面这段 (编译器会对 `v-model` 进行展开)：

```vue
<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>
```

在 `v-model` 中 绑定的属性是value，触发的事件是input事件。

`v-model` 指令的本质（原理）就是：`v-bind:value` + `v-on:input`

- `v-bind:value` 的作用：绑定`value`属性是`<input>`标签的`value`属性，绑定的变量`searchText`是v-model绑定的变量`searchText`，用来实现data到表单（页面）的绑定

- `v-on:input` 的作用：监听标签的`input`的事件，在`v-model`中会自动生成`input`事件的监听，在监听函数中获取表单的`value`值赋给`v-model`绑定的变量`searchText`，用来实现表单（野蛮）到data的绑定

## 组件上的v-model

而当使用在一个组件上时，`v-model` 会被展开为如下的形式：

```html
<custom-input
  v-bind:value="msg"
  v-on:input="msg = $event"
></custom-input>
```

要让这个例子实际工作起来，`<CustomInput>` 组件内部需要做两件事：

1. 将内部原生 `input` 元素的 `value` attribute 绑定到 `value` prop
2. 输入新的值时在 `input` 元素上触发 `input` 事件，将新的值通过自定义的 `input` 事件抛出

写成代码之后是这样的：

```JS
Vue.component('custom-input', {
  props: ['value'],
  // v-bind:value="value" 把prop的value属性绑定到input标签的的value属性上
  
  // v-on:input="$emit('input', $event.target.value)"
  // v-on:input 监听表单原生 input事件
  // $emit() 中 input 是发射的自定义input事件；并传递表单的值：$event.target.value
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
```

现在 `v-model` 就应该可以在这个组件上完美地工作起来了：

```html
<!-- 
  :value="searchText" 把msg的值赋给prop的value，在CustomInput组件内再把prop的value赋给input的value：实现msg到自定义表单组件的绑定
	@input="updateMsg" 在CustomInput组件上监听自定义事件input，在事件处理函数updateMsg中 this.msg = val; 把自定义事件传递的参数赋给msg，实现了自定义表单到msg的绑定
-->
<custom-input :value="msg" @input="updateMsg"></custom-input>
<!-- 
	@input 监听自定义的input事件，会传递一个默认参数：这个参数是发射事件时传递输入框的值ev.target.value 
	$event 默认参数：指的是 ev.target.value的值 
-->
<custom-input :value="msg" @input="updateMsg($event)"></custom-input>

<!-- 
  methods: {
    updateMsg (val) {
      // 把自定义组件的值赋给msg：实现自定义组件到msg的绑定
      this.msg = val;
    },
  }
-->
```

```html
<!-- 
  :value="msg" 把msg的赋给prop的value，再把prop的value赋给input的value：实现msg到自定义表单组件的绑定
  msg = $event 把传递的数据赋给msg：实现了自定义表单到msg的绑定 
-->
<custom-input :value="msg" @input="msg = $event"></custom-input>
```

```html
<!-- v-model="msg" 等价于 :value="msg" @input="msg = $event" -->
<custom-input v-model="msg"></custom-input>
```

## 非表单组件的v-model

自定义MV组件：

```js
Vue.component('m-v', {
   // 1、在自定义组件要使用双向数据绑定，就要使用prop定义value属性进行传值，接收父组件传递的数据
  props: ['value'],
  
  // 2、在自定义组件要使用双向数据绑定，在自定义组件中就要发射名字为input的自定义事件，把新的数据通过i发射自定义事件传递
  template: `<<button @click="$emit('input',value+1)">+</button>`,
});
```

使用MV组件：

```html
<!-- 
  :value="num" 把变量num的值赋给value属性，在MV组件内通过prop定义value属性来接收num：实现了num到组件的绑定
  @input="updateNum" 在MV组件上监听自定义事件input，在事件处理函数updateNum中 this.num = val; 把自定义事件传递的参数赋给num：实现了组件到num的绑定
-->
<m-v :value="num" @input="updateNum"></m-v>
<m-v :value="num" @input="updateNum($event)"></m-v>
<!-- 
  methods: {
    updateNum (ev) {
      // 把自定义组件的值赋给num：实现自定义组件到num的绑定
      this.num = ev;
    },
  }
-->
```

```HTML
<!-- 
  :value="num" 把num的赋值给组件的value属性：实现了num到组件的绑定
  num = $event 把组件的数据赋给num：实现了组件到num的绑定
-->
<m-v :value="num" @input="num = $event"></m-v>
```

```HTML
<!-- v-model="num" 等价于 :value="num" @input="num = $event" -->
<m-v v-model="num"></m-v>
```

## v-model使用总结

### 原生DOM表单元素自带v-model

`v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定

`v-model` 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

1. `input[type=text]` 和 `textarea` 元素使用 `value` 属性和 `input` 事件:
   - 在`input[type=text]`和`textare`元素上使用`v-model="msg"`
   - 相当于 `:value="msg"` 和 `@input="msg = $event.target.value"`
2. `input[type=checkbox]` 和 `input[type=radio]`使用 `checked` 属性 和 `change` 事件:
   - 在`input[type=checkbox]`和`input[type=radio]`元素上使用 `v-model="on"`，on是一个布尔值
   - 相当于 `:checked="on"` 和 `@change="on = $event.target.checked"`

3. `select` 元素将 `value` 作为 prop 并将 `change` 作为事件。
   - 在select元素上使用 `v-model="message"`，message是一个字符串类型
   - 相当于 `:value="message"` 和 `@change=" message = $event.target.value"`

### 自定义组件使用v-model，非表单元素 

利用 `v-bind:value="num"` 和 `v-on:input="num = $event"` 实现v-model，三步走：

- 第一步：在自定义组件实例上声明名字为 value的prop 
- 第二步：在自定义组件实例上发射自定义事件 input
- 第三步：在使用自定义组件的位置使用 v-model 指令

注意：在组件内定义value的prop属性和发射自定义input事件是使用v-model的默认操作

在自定义组件上使用v-model的原理：

- `v-bind:value="num"` 的作用：绑定组件的value prop，把num的赋给value，在自定义组件内声明名字为value的prop，用来实现变量num到自定义组件的绑定
- `v-on:input="num=$event"` 的作用：监听自定义的input事件，并把发射自定义事件时传递的数据赋给num，用来实现自定义组件到变量num的绑定

### 自定义表单元素 input 和 textarea

利用 `v-bind:value="msg"` 和 `v-on:input="msg= $event"` 实现v-model

在自定义组件中声明名字为 value的prop 和 发射自定义事件 input，原理同上。

## model属性

一个组件上的 `v-model` 默认会利用名为 `value` 的 prop 和名为 `input` 的事件，但是像单选框、复选框等类型的输入控件可能会将 `value` attribute 用于[不同的目的](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Value)。`model` 选项可以用来避免这样的冲突：

使用`model`属性可以改变 `v-model` 的 prop属性名和事件名，不再局限于 `value` 属性和 `input`事件：

如果我想使用其他prop属性名，和自定义事件名，可以组件内添加 model 属性，  model 允许一个自定义组件在使用 v-model 时定制 prop 和 event：

```js
model:{
  prop: 'x1',//定义属性名来替代vlaue属性
  event: 'x2',//定义事件名来替代自定义input事件
},
```

比如： 特殊的单选框、复选框、下拉菜单：

- checkbox 和 radio 使用 checked 属性和 change 事件
- select  使用 value 作为 prop 并将 change 作为事件

自定义复选框组件：

```js
Vue.component('my-checkbox', {
  model:{
    prop:'checked', // 自定义prop属性为 checked
    event:'change', // 自定义发射的事件为 change
  },
  props:{
    checked: Boolean,
  },
  template: `
  	<input 
  		type="checkbox" 
  		:checked="checked" 
  		@change="$emit('change', $event.target.checked)">
  `,
});
```

现在在这个组件上使用 `v-model` 的时候：

```
<my-checkbox v-model="on"></my-checkbox>
```

这里的 `on` 的值将会传入这个名为 `checked` 的 prop。同时当 `<my-checkbox>` 触发一个 `change` 事件并附带一个新的值的时候，这个 `on` 的 property 将会被更新。

## .sync 修饰符

在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，且在父组件和子组件两侧都没有明显的变更来源。

这也是为什么我们推荐以 `update:myPropName` 的模式触发事件取而代之。举个例子，在一个包含 `title` prop 的假设的组件中，我们可以用以下方法表达对其赋新值的意图：

```js
// this.$emit('update:title', newTitle)
Vue.component('text-document', {
  props: ['title'],
  template: `<button @click="$emit('update:title', '新标题')">新标题</button>`,
});
```

然后父组件可以监听事件 `update:title` 并根据需要更新一个本地的数据 property。例如：

```js
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
```

为了方便起见，我们为这种模式提供一个缩写，即 `.sync` 修饰符：

```js
<!-- 
  :num.sync="num" 效果等同于 :title="doc.title" 和 @update:title="doc.title = $event" 
-->
<text-document v-bind:title.sync="doc.title"></text-document>
```

> 注意带有 `.sync` 修饰符的 `v-bind` **不能**和表达式一起使用 (例如 `v-bind:title.sync=”doc.title + ‘!’”` 是无效的)。取而代之的是，你只能提供你想要绑定的 property 名，类似 `v-model`。

当我们用一个对象同时设置多个 prop 的时候，也可以将这个 `.sync` 修饰符和 `v-bind` 配合使用：

```html
<text-document v-bind.sync="doc"></text-document>
```

这样会把 `doc` 对象中的每一个 property (如 `title`) 都作为一个独立的 prop 传进去，然后各自添加用于更新的 `v-on` 监听器。

> 将 `v-bind.sync` 用在一个字面量的对象上，例如 `v-bind.sync=”{ title: doc.title }”`，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。

# 组件插槽

## 插槽的理解

但组件要如何接收模板内容呢？在某些场景中，我们可能想要为子组件传递一些模板片段，让子组件在它们的组件中渲染这些片段，就像 HTML 元素一样传递内容。

举例来说，这里有一个 `<FancyButton>` 组件，可以像这样使用：

```html
<FancyButton>
  Click me! <!-- 插槽内容 -->
</FancyButton>
```

而 `<FancyButton>` 的模板是这样的：

```html
<button class="fancy-btn">
  <slot></slot> <!-- 插槽出口 -->
</button>
```

`<slot>` 元素是一个**插槽出口** (slot outlet)，标示了父元素提供的**插槽内容** (slot content) 将在哪里被渲染。

![](https://img-blog.csdnimg.cn/img_convert/11ffc0efd0b66b714ab4038223b30367.png)

最终渲染出的 DOM 是这样：

```vue
<button class="fancy-btn">Click me!</button>
```

通过使用插槽，`<FancyButton>` 仅负责渲染外层的 `<button>` (以及相应的样式)，而其内部的内容由父组件提供。

插槽内容可以是任意合法的模板内容，不局限于文本。例如我们可以传入多个元素，甚至是组件：

```HTML
<FancyButton>
  <span style="color:red">Click me!</span>
  <AwesomeIcon name="plus" />
</FancyButton>
```

通过使用插槽，`<FancyButton>` 组件更加灵活和具有可复用性。现在组件可以用在不同的地方渲染各异的内容，但同时还保证都具有相同的样式。

## 渲染作用域

插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的。举例来说：

```HTML
<span>{{ message }}</span>
<FancyButton>{{ message }}</FancyButton>
```

这里的两个 `{{ message }}` 插值表达式渲染的内容都是一样的。

插槽内容**无法访问**子组件的数据。Vue 模板中的表达式只能访问其定义时所处的作用域，这和 JavaScript 的词法作用域规则是一致的。换言之：

> **父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域。**

## 插槽默认内容

在外部没有提供任何内容的情况下，可以为插槽指定默认内容。比如有这样一个 `<SubmitButton>` 组件：

```html
<button type="submit">
  <slot></slot>
</button>
```

如果我们想在父组件没有提供任何插槽内容时在 `<button>` 内渲染“Submit”，只需要将“Submit”写在 `<slot>` 标签之间来作为默认内容：

```html
<button type="submit">
  <slot>
    Submit <!-- 默认内容 -->
  </slot>
</button>
```

现在，当我们在父组件中使用 `<SubmitButton>` 且没有提供任何插槽内容时：

```html
<SubmitButton />
```

“Submit”将会被作为默认内容渲染：

```html
<button type="submit">Submit</button>
```

但如果我们提供了插槽内容：

```html
<SubmitButton>Save</SubmitButton>
```

那么被显式提供的内容会取代默认内容：

```html
<button type="submit">Save</button>
```

## 具名插槽

有时在一个组件中包含多个插槽出口是很有用的。举例来说，在一个 `<BaseLayout>` 组件中，有如下模板：

```html
<div class="container">
  <header>
    <!-- 标题内容放这里 -->
  </header>
  <main>
    <!-- 主要内容放这里 -->
  </main>
  <footer>
    <!-- 底部内容放这里 -->
  </footer>
</div>
```

对于这种场景，`<slot>` 元素可以有一个特殊的 attribute `name`，用来给各个插槽分配唯一的 ID，以确定每一处要渲染的内容：

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

这类带 `name` 的插槽被称为**具名插槽** (named slots)。没有提供 `name` 的 `<slot>` 出口会隐式地命名为“default”。

在父组件中使用 `<BaseLayout>` 时，我们需要一种方式将多个插槽内容传入到各自目标插槽的出口。此时就需要用到**具名插槽**了：

要为具名插槽传入内容，我们需要使用一个含 `v-slot` 指令的 `<template>` 元素，并将目标插槽的名字传给该指令

```html
<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>
```

`v-slot` 有对应的简写 `#`，因此 `<template v-slot:header>` 可以简写为 `<template #header>`。其意思就是“将这部分模板片段传入子组件的 header 插槽中”。

![](https://img-blog.csdnimg.cn/img_convert/6c78cfa3ed0d4b3dd7518c348fb8b4f0.png)

下面我们给出完整的、向 `<BaseLayout>` 传递插槽内容的代码，指令均使用的是缩写形式：

```HTML
<BaseLayout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <template #default>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
```

当一个组件同时接收默认插槽和具名插槽时，所有位于顶级的非 `<template>` 节点都被隐式地视为默认插槽的内容。所以上面也可以写成：

```HTML
<BaseLayout>
  <template #header>
    <h1>Here might be a page title</h1>
  </template>

  <!-- 隐式的默认插槽 -->
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</BaseLayout>
```

现在 `<template>` 元素中的所有内容都将被传递到相应的插槽。最终渲染出的 HTML 如下：

```HTML
<div class="container">
  <header>
    <h1>Here might be a page title</h1>
  </header>
  <main>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </main>
  <footer>
    <p>Here's some contact info</p>
  </footer>
</div>
```

## 作用域插槽

在上面的**渲染作用域**中我们讨论到，插槽的内容无法访问到子组件的状态。

然而在某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。要做到这一点，我们需要一种方法来让子组件在渲染时将一部分数据提供给插槽。

我们也确实有办法这么做！可以像对组件传递 props 那样，向一个插槽的出口上传递 attributes：

```html
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```

当需要接收插槽 props 时，默认插槽和具名插槽的使用方式有一些小区别。下面我们将先展示默认插槽如何接受 props，通过子组件标签上的 `v-slot` 指令，直接接收到了一个插槽 props 对象：

```html 
<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>


<!-- 如果只有匿名插槽  v-slot:default="slotProps" 可以简写为  v-slot="slotProps" -->
<MyComponent v-slot:default="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>

<!-- v-slot指令简写为# -->
<MyComponent #default="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>
```

子组件传入插槽的 props 作为了 `v-slot` 指令的值，可以在插槽内的表达式中访问。

<img src="https://cn.vuejs.org/assets/scoped-slots.1c6d5876.svg" style="zoom:150%;" />

## 解构作用域插槽

`v-slot="slotProps"` 可以类比这里的函数签名，和函数的参数类似，我们也可以在 `v-slot` 中使用解构：

```html
<MyComponent v-slot="{ text, count }">
  {{ text }} {{ count }}
</MyComponent>
```

## 具名作用域插槽

具名作用域插槽的工作方式也是类似的，插槽 props 可以作为 `v-slot` 指令的值被访问到：`v-slot:name="slotProps"`。当使用缩写时是这样：

```HTML
<MyComponent>
  <template #header="headerProps">
    {{ headerProps }}
  </template>

  <template #default="defaultProps">
    {{ defaultProps }}
  </template>

  <template #footer="footerProps">
    {{ footerProps }}
  </template>
</MyComponent>
```

向具名插槽中传入 props：

```HTML
<slot name="header" message="hello"></slot>
```

注意插槽上的 `name` 是一个 Vue 特别保留的 attribute，不会作为 props 传递给插槽。因此最终 `headerProps` 的结果是 `{ message: 'hello' }`。

如果你混用了具名插槽与默认插槽，则需要为默认插槽使用显式的 `<template>` 标签。尝试直接为组件添加 `v-slot` 指令将导致编译错误。这是为了避免因默认插槽的 props 的作用域而困惑。举例：

```HTML
<!-- 该模板无法编译 -->
<template>
  <MyComponent v-slot="{ message }">
    <p>{{ message }}</p>
    <template #footer>
      <!-- message 属于默认插槽，此处不可用 -->
      <p>{{ message }}</p>
    </template>
  </MyComponent>
</template>
```

为默认插槽使用显式的 `<template>` 标签有助于更清晰地指出 `message` 属性在其它插槽中不可用：

```html
<template>
  <MyComponent>
    <!-- 使用显式的默认插槽 -->
    <template #default="{ message }">
      <p>{{ message }}</p>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </MyComponent>
</template>
```

## 模仿el-table使用插槽

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<!-- 引入样式 -->
<link href="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.10/theme-chalk/index.min.css" rel="stylesheet" />
<!-- 引入组件库 -->
<script src="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.10/index.min.js"></script>

<style>
  .m-table {
    width: 60%;
    border: 1px solid;
    border-spacing: 0;
    border-collapse: collapse;
  }

  .m-table th,
  .m-table td {
    border: 1px solid;
  }
</style>
</head>


<div id="app">

  <el-table :data="list" border style="width: 60%">
    <el-table-column prop="cname2" label="游戏名" width="100"></el-table-column>
    <el-table-column prop="squareIconUrlW" label="游戏图标" width="200">
      <!-- 需要自定义单元格的内容，使用插槽 -->
      <template slot-scope="scope">
        <img :src="scope.row.squareIconUrlW" alt="" />
      </template>
    </el-table-column>
    <el-table-column prop="hn" label="热度" width="100"></el-table-column>
    <el-table-column prop="cateDesc" label="游戏介绍"></el-table-column>
  </el-table>

  <m-table :data="list">
    <template v-slot:header>
      <tr>
        <th>游戏名</th>
        <th>游戏图标</th>
        <th>热度</th>
        <th>游戏介绍</th>
      </tr>
    </template>
    <template v-slot:body="scope">
      <tr>
        <td>{{scope.row.cname2}}</td>
        <td><img :src="scope.row.squareIconUrlW" alt="" /></td>
        <td>{{scope.row.hn}}</td>
        <td>{{scope.row.cateDesc}}</td>
      </tr>
    </template>
  </m-table>
</div>
<script id="m-table" type="text/html">
	<table class="m-table">
		<slot name="header"></slot>
		<slot name="body" v-for="(item, index) in data" :row="item"></slot>
  </table>
</script>
<script>
  Vue.config.productionTip = false;

  Vue.component('m-table', {
    name: 'm-table',
    props: {
      data: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    template: `#m-table`,
  });

  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      list: [
        {
          cid1: 1,
          cid2: 1,
          shortName: 'LOL',
          cname2: '英雄联盟',
          squareIconUrlW: 'https://sta-op.douyucdn.cn/dycatr/7dc8d99b253e7e93b0de06108da5a594.png',
          cateDesc: '《英雄联盟》(简称LOL)是由拳头游戏开发、腾讯游戏代理运营的MOBA竞技网游，拥有数百个英雄，并拥有排位系统、符文天赋系统等特色。',
          hn: 99396637,
        },
        {
          cid1: 1,
          cid2: 270,
          shortName: 'rmyx',
          cname2: '热门游戏',
          squareIconUrlW: 'https://sta-op.douyucdn.cn/dycatr/5c9bed5e5dcfbc511c921643d5e39932.png',
          cateDesc: '“热门游戏”是一个包含所有端游，手游大逃杀类型游戏的战术竞技类游戏的分区。热门类游戏凭借其独特创新的游戏模式、写实风格，给予玩家强烈的代入感，而饱受游戏玩家的喜爱。',
          hn: 115804260,
        },
        {
          cid1: 1,
          cid2: 33,
          shortName: 'CF',
          cname2: '穿越火线',
          squareIconUrlW: 'https://sta-op.douyucdn.cn/dycatr/4fc08de40d425bce06971467f8334f80.png',
          cateDesc: '《穿越火线》作为国民枪战第一网游，是一款第一人称射击游戏类游戏。由Smile Gate开发，腾讯游戏发行。玩家扮演保卫、潜伏阵营进行持枪战斗。',
          hn: 12715518,
        },
      ],
    },
  });
</script>
```

# 依赖注入

## Prop 逐级透传问题

通常情况下，当我们需要从父组件向子组件传递数据时，会使用 props。想象一下这样的结构：有一些多层级嵌套的组件，形成了一颗巨大的组件树，而某个深层的子组件需要一个较远的祖先组件中的部分数据。在这种情况下，如果仅使用 props 则必须将其沿着组件链逐级传递下去，这会非常麻烦：

![](https://img-blog.csdnimg.cn/img_convert/3f787c566302da8c5cb3bca61661a834.png)

注意，虽然这里的 `<Footer>` 组件可能根本不关心这些 props，但为了使 `<DeepChild>` 能访问到它们，仍然需要定义并向下传递。如果组件链路非常长，可能会影响到更多这条路上的组件。这一问题被称为“prop 逐级透传”，显然是我们希望尽量避免的情况。

`provide` 和 `inject` 可以帮助我们解决这一问题。 一个父组件相对于其所有的后代组件，会作为**依赖提供者**。任何后代的组件树，无论层级有多深，都可以**注入**由父组件提供给整条链路的依赖。

![](https://img-blog.csdnimg.cn/img_convert/3e095389b2e70e2e8feba5c712a0dca8.png)

## Provide (提供)

`provide` 选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的 property。在该对象中你可以使用 ES2015 Symbols 作为 key，但是只在原生支持 `Symbol` 和 `Reflect.ownKeys` 的环境下可工作。

要为组件后代提供数据，需要使用到 [`provide`](https://cn.vuejs.org/api/options-composition.html#provide) 选项：

```js
// 父级组件提供 msg
export default {
  provide: {
    msg: 'hello!'
  }
}
```

对于 `provide` 对象上的每一个属性，后代组件会用其 key 为注入名查找期望注入的值，属性的值就是要提供的数据。

如果我们需要提供依赖当前组件实例的状态 (比如那些由 `data()` 定义的数据属性)，那么可以以函数形式使用 `provide`：

```js
export default {
  data() {
    return {
      message: 'hello!'
    }
  },
  // 父级组件提供 msg
  provide() {
    // 使用函数的形式，可以访问到 `this`
    return {
      msg: this.message
    }
  }
}
```

然而，请注意这**不会**使注入保持响应性。在vue3中可以[让注入转变为响应式](https://cn.vuejs.org/guide/components/provide-inject.html#working-with-reactivity)。

> 提示：`provide` 和 `inject` 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的。

## Inject (注入)

`inject` 选项应该是：

- 一个字符串数组，或
- 一个对象，对象的 key 是本地的绑定名，value 是：
  - 在可用的注入内容中搜索用的 key (字符串或 Symbol)，或
  - 一个对象，该对象的：
    - `from` property 是在可用的注入内容中搜索用的 key (字符串或 Symbol)
    - `default` property 是降级情况下使用的 value

### 注入

要注入上层组件提供的数据，需使用 [`inject`](https://cn.vuejs.org/api/options-composition.html#inject) 选项来声明：

```js
// 子组件注入 msg
export default {
  inject: ['msg'],
  created() {
    console.log(this.msg) 
  }
}
```

注入会在组件自身的状态**之前**被解析，因此你可以在 `data()` 中访问到注入的属性：

```js
export default {
  inject: ['msg'],
  data() {
    return {
      // 基于注入值的初始数据
      fullMessage: this.msg
    }
  }
}
```

### 注入别名

当以数组形式使用 `inject`，注入的属性会以同名的 key 暴露到组件实例上。在上面的例子中，提供的属性名为 `"msg"`，注入后以 `this.msg` 的形式暴露。访问的本地属性名和注入名是相同的。

如果我们想要用一个不同的本地属性名注入该属性，我们需要在 `inject` 选项的属性上使用对象的形式：

```js
export default {
  inject: {
    /* 本地属性名 */
    localMessage: {
      // 使用 from 来表示其源 property
      from: 'msg', // msg注入的属性名
    }
  }
}
```

这里，组件本地化了原注入名 `"msg"` 所提供的属性，并将其暴露为 `this.localMessage`。

### 注入默认值

默认情况下，`inject` 假设传入的注入名会被某个祖先链上的组件提供。如果该注入名的确没有任何组件提供，则会抛出一个运行时警告。

如果在注入一个值时不要求必须有提供者，那么我们应该声明一个默认值，和 props 类似：

```js
export default {
  // 当声明注入的默认值时，必须使用对象形式
  inject: {
    msg: {
      from: 'msg', // 当与原注入名同名时，这个属性是可选的
      default: 'default value',// 注入属性msg的默认值
    },
    user: {
      // 对于非基础类型数据，如果创建开销比较大，或是需要确保每个组件实例
      // 需要独立数据的，请使用工厂函数
      default: () => ({ name: 'John' })
    }
  }
}
```

## 使用 Symbol 作注入名

至此，我们已经了解了如何使用字符串作为注入名。但如果你正在构建大型的应用，包含非常多的依赖提供，或者你正在编写提供给其他开发者使用的组件库，建议最好使用 Symbol 来作为注入名以避免潜在的冲突。

我们通常推荐在一个单独的文件中导出这些注入名 Symbol：

```js
// keys.js
export const myInjectionKey = Symbol()
```

```js
// 在供给方组件中
import { myInjectionKey } from './keys.js'

export default {
  provide() {
    return {
      [myInjectionKey]: {
        /* 要提供的数据 */
      }
    }
  }
}
```

```js
// 注入方组件
import { myInjectionKey } from './keys.js'

export default {
  inject: {
    injected: { from: myInjectionKey }
  }
}
```

# 透传 Attributes

透传 Attributes在vue2中叫做”非 Prop 的 Attribute“：一个非 prop 的 attribute 是指传向一个组件，但是该组件并没有相应 prop 定义的 attribute。

在vue3中改名为“透传 Attributes”，文档上更加详细，功能上更加完善。

## Attributes 继承

“透传 attribute”指的是传递给一个组件，却没有被该组件声明为 [props](https://cn.vuejs.org/guide/components/props.html) 或 [emits](https://cn.vuejs.org/guide/components/events.html#defining-custom-events) 的 attribute 或者 `v-on` 事件监听器。最常见的例子就是 `class`、`style` 和 `id`。

当一个组件以单个元素为根作渲染时，透传的 attribute 会自动被添加到根元素上。

- 组件的 `class`、`style` 和 `id`会被自动添加到组件的根元素上

举例来说，假如我们有一个 `<MyButton>` 组件，它的模板长这样：

```html
<!-- <MyButton> 的模板 -->
<button>click me</button>
```

一个父组件使用了这个组件，并且传入了 `class`：

```html
<MyButton class="large" id="btn" x-w="123" style="color: red;" />
```

最后渲染出的 DOM 结果是：

```html
<button class="large" id="btn" x-w="123" style="color: red;">click me</button>
```

这里，`<MyButton>` 并没有将`class`、`style` 和 `id`声明为一个它所接受的 prop，所以`class`、`style` 和 `id`被视作透传 attribute，自动透传到了 `<MyButton>` 的根元素上。

### 对 `class` 和 `style` 的合并

如果组件根元素上已经存在 `class`、`style` 和 `id`属性：

-  `class`和`style`属性会和从父组件上继承的值合并，继承的值会覆盖组件根标签 `class`和`style`属性同名的值
-  `id` 属性则是直接覆盖，继承的值会覆盖组件根标签 `id` 属性的值

如果我们将之前的 `<MyButton>` 组件的模板改成这样：

```html
<!-- <MyButton> 的模板 -->
<button class="btn" id="btn1" style="color: blue;">click me</button>
```

则最后渲染出的 DOM 结果会变成：

```html
<button class="btn large" id="btn" x-w="123" style="color: red;">click me</button>
```

### `v-on` 监听器继承（==vue3语法==）

同样的规则也适用于 `v-on` 事件监听器：

```html
<MyButton @click="onClick" />
```

`click` 监听器会被添加到 `<MyButton>` 的根元素，即那个原生的 `<button>` 元素之上。当原生的 `<button>` 被点击，会触发父组件的 `onClick` 方法。同样的，如果原生 `button` 元素自身也通过 `v-on` 绑定了一个事件监听器，则这个监听器和从父组件继承的监听器都会被触发。

### 深层组件继承

有些情况下一个组件会在根节点上渲染另一个组件。例如，我们重构一下 `<MyButton>`，让它在根节点上渲染 `<BaseButton>`：

```html
<!-- <MyButton/> 的模板，只是渲染另一个组件 -->
<BaseButton />
```

此时 `<MyButton>` 接收的透传 attribute 会直接继续传给 `<BaseButton>`。

请注意：

1. 透传的 attribute 不会包含 `<MyButton>` 上声明过的 props 或是针对 `emits` 声明事件的 `v-on` 侦听函数，换句话说，声明过的 props 和侦听函数被 `<MyButton>`“消费”了。
2. 透传的 attribute 若符合声明，也可以作为 props 传入 `<BaseButton>`。

## 禁用 Attributes 继承

如果你**不想要**一个组件自动地继承 attribute，你可以在组件选项中设置 `inheritAttrs: false`。

最常见的需要禁用 attribute 继承的场景就是 attribute 需要应用在根节点以外的其他元素上。通过设置 `inheritAttrs` 选项为 `false`，你可以完全控制透传进来的 attribute 被如何使用。

这些透传进来的 attribute 可以在模板的表达式中直接用 `$attrs` 访问到。

```html
<span>Fallthrough attribute: {{ $attrs }}</span>
```

这个 `$attrs` 对象包含了除组件所声明的 `props` 和 `emits` 之外的所有其他 attribute，例如 `class`，`style`，`v-on` 监听器等等。

有几点需要注意：

- 和 props 有所不同，透传 attributes 在 JavaScript 中保留了它们原始的大小写，所以像 `foo-bar` 这样的一个 attribute 需要通过 `$attrs['foo-bar']` 来访问。
- 像 `@click` 这样的一个 `v-on` 事件监听器将在此对象下被暴露为一个函数 `$attrs.onClick`。

有时候我们可能为了样式，需要在 `<button>` 元素外包装一层 `<div>`：

```html
<div class="btn-wrapper">
  <button class="btn">click me</button>
</div>
```

我们想要所有像 `class` 和 `v-on` 监听器这样的透传 attribute 都应用在内部的 `<button>` 上而不是外层的 `<div>` 上。我们可以通过设定 `inheritAttrs: false` 和使用 `v-bind="$attrs"` 来实现：

```html
<div class="btn-wrapper">
  <button class="btn" v-bind="$attrs">click me</button>
</div>
```

**禁用 Attributes 继承的注意点：**

- Vue 2 的虚拟 DOM 实现对 `class` 和 `style` attribute 有一些特殊处理。因此，与其它所有 attribute 不一样，它们*没有*被包含在 `$attrs` 中。上述行为在使用 `inheritAttrs: false` 时会产生副作用：

  - `$attrs` 中的 attribute 将不再被自动添加到根元素中，而是由开发者决定在哪添加。

  - 但是 `class` 和 `style` 不属于 `$attrs`，它们仍然会被应用到组件的根元素中。

- Vue3.x 行为`$attrs` 包含了所有的attribute，这使得把它们全部应用到另一个元素上变得更加容易了。

## 多根节点的 Attributes 继承（==vue3语法==）

和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为。如果 `$attrs` 没有被显式绑定，将会抛出一个运行时警告。

```html
<CustomLayout id="custom-layout" @click="changeValue" />
```

如果 `<CustomLayout>` 有下面这样的多根节点模板，由于 Vue 不知道要将 attribute 透传到哪里，所以会抛出一个警告。

```html
<header>...</header>
<main>...</main>
<footer>...</footer>
```

如果 `$attrs` 被显式绑定，则不会有警告：

```html
<header>...</header>
<main v-bind="$attrs">...</main>
<footer>...</footer>
```

## 在 JavaScript 中访问透传 Attributes

如果需要，你可以通过 `$attrs` 这个实例属性来访问组件的所有透传 attribute：

```js
export default {
  created() {
    console.log(this.$attrs)
  }
}
```

# DOM 模板解析注意事项

## DOM模板

dom模版直接写在dom结构中，是直接用在HTML文件或者`<template>`模板中  例如：

```html
<!-- 直接写在HTML文件中 -->
<div id="app">
  <h1>App</h1>
  <Hello></Hello>
  <h2>App</h2>
</div>

<!-- 写在template模板中 -->
<template id="Hello">
  <div>
    Hello组件
    <World/></World>
    <h3>hello</h3>
  </div>
</template>
```

如果你想在 DOM 中直接书写 Vue 模板，Vue 则必须从 DOM 中获取模板字符串。由于浏览器的原生 HTML 解析行为限制，有一些需要注意的事项。

> 请注意下面讨论只适用于直接在 DOM 中编写模板的情况。如果你使用来自以下来源的字符串模板，就不需要顾虑这些限制了：
>
> - 单文件组件
> - 内联模板字符串 (例如 `template: '...'`)
> - `<script type="text/x-template">` 
> - `<script type="text/html">`

## 大小写区分

HTML 标签和属性名称是不分大小写的，所以浏览器会把任何大写的字符解释为小写。这意味着当你使用 DOM 内的模板时，无论是 PascalCase 形式的组件名称、camelCase 形式的 prop 名称还是 v-on 的事件名称，都需要转换为相应等价的 kebab-case (短横线连字符) 形式：

```js
// JavaScript 中的 camelCase
const BlogPost = {
  props: ['postTitle'],
  template: `<h3>{{ postTitle }}</h3>`
}
```

```html
<!-- HTML 中的 kebab-case -->
<blog-post post-title="hello!" ></blog-post>
```

## 闭合标签

我们在上面的例子中已经使用过了闭合标签 (self-closing tag)：

```vue
<MyComponent />
```

这是因为 Vue 的模板解析器支持任意标签使用 `/>` 作为标签关闭的标志。

然而在 DOM 模板中，我们必须显式地写出关闭标签：

```html
<my-component></my-component>
```

这是由于 HTML 只允许[一小部分特殊的元素](https://html.spec.whatwg.org/multipage/syntax.html#void-elements)省略其关闭标签，最常见的就是 `<input>` 和 `<img>`。对于其他的元素来说，如果你省略了关闭标签，原生的 HTML 解析器会认为开启的标签永远没有结束，用下面这个代码片段举例来说：

```html
<my-component /> <!-- 我们想要在这里关闭标签... -->
<span>hello</span>
```

将被解析为：

```html
<my-component>
  <span>hello</span>
</my-component> <!-- 但浏览器会在这里关闭标签 -->
```

## 元素位置限制

某些 HTML 元素对于放在其中的元素类型有限制，例如 `<ul>`，`<ol>`，`<table>` 和 `<select>`，相应的，某些元素仅在放置于特定元素中时才会显示，例如 `<li>`，`<tr>` 和 `<option>`。

这将导致在使用带有此类限制元素的组件时出现问题。例如：

```vue
<table>
  <blog-post-row></blog-post-row>
</table>
```

自定义的组件 `<blog-post-row>` 将作为无效的内容被忽略，因而在最终呈现的输出中造成错误。我们可以使用特殊的 [`is` attribute](https://cn.vuejs.org/api/built-in-special-attributes.html#is) 作为一种解决方案：

```vue 
<table>
  <!-- vue2的写法，不用添加vue:前缀 -->
  <tr is="blog-post-row"></tr>
  
   <!-- vue3的写法，需要添加vue:前缀 -->
  <tr is="vue:blog-post-row"></tr>
</table>
```

> vue3中：当使用在原生 HTML 元素上时，`is` 的值必须加上前缀 `vue:` 才可以被解析为一个 Vue 组件。这一点是必要的，为了避免和原生的[自定义内置元素](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-customized-builtin-example)相混淆。

# 动态组件和KeepAlive

## 动态组件

有些场景会需要在两个组件间来回切换，比如 Tab 选项卡界面。通过 Vue 的 `<component>` 元素和特殊的 `is` attribute 实现动态组件：

```vue
<!-- currentTab 改变时组件也改变 -->
<component :is="currentTab"></component>
```

在上面的例子中，被传给 `:is` 的值可以是以下几种：

- 被注册的组件名
- 导入的组件对象

你也可以使用 `is` attribute 来创建一般的 HTML 元素。

当使用 `<component :is="...">` 来在多个组件间作切换时，被切换掉的组件会被卸载。我们可以通过 [`<KeepAlive>` 组件](https://cn.vuejs.org/guide/built-ins/keep-alive.html)强制被切换掉的组件仍然保持“存活”的状态。

## KeepAlive

默认情况下，动态组件中一个组件实例在被替换掉后会被销毁。这会导致它丢失其中所有已变化的状态 —— 当这个组件再一次被显示时，会创建一个只带有初始状态的新实例。

在切换时创建新的组件实例通常是有意义的，但在这个例子中，我们的确想要组件能在被“切走”的时候保留它们的状态。要解决这个问题，我们可以用 `<KeepAlive>` 内置组件将这些动态组件包装起来：

```HTML
<!-- 非活跃的组件将会被缓存！ -->
<KeepAlive>
  <component :is="currentTab" />
</KeepAlive>
```

### 包含/排除

`<KeepAlive>` 默认会缓存内部的所有组件实例，但我们可以通过 `include` 和 `exclude` prop 来定制该行为。这两个 prop 的值都可以是一个以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组：

- `include` - 字符串、数组或正则表达式。只有名称匹配的组件会被缓存。
- `exclude` - 字符串、数组或正则表达式。任何名称匹配的组件都不会被缓存。  

```html
<!-- 以英文逗号分隔的字符串 -->
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>

<!-- 正则表达式 (需使用 `v-bind`) -->
<KeepAlive :include="/a|b/">
  <component :is="view" />
</KeepAlive>

<!-- 数组 (需使用 `v-bind`) -->
<KeepAlive :include="['a', 'b']">
  <component :is="view" />
</KeepAlive>
```

它会根据组件的 [`name`](https://cn.vuejs.org/api/options-misc.html#name) 选项进行匹配，所以组件如果想要条件性地被 `KeepAlive` 缓存，就必须显式声明一个 `name` 选项。

匹配首先检查组件自身的 `name` 选项，如果 `name` 选项不可用，则匹配它的局部注册名称 (父组件 `components` 选项的键值)。匿名组件不能被匹配。

### 最大缓存实例数

我们可以通过传入 `max` prop 来限制可被缓存的最大组件实例数。`<KeepAlive>` 的行为在指定了 `max` 后，如果缓存的实例数量即将超过指定的那个最大数量，则最久没有被访问的缓存实例将被销毁，以便为新的实例腾出空间。

- `max` - 数字。最多可以缓存多少组件实例

```HTML
<KeepAlive :max="10">
  <component :is="activeComponent" />
</KeepAlive>
```

### 缓存实例的生命周期

当一个组件实例从 DOM 上移除但因为被 `<KeepAlive>` 缓存而仍作为组件树的一部分时，它将变为**不活跃**状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新**被激活**。

当组件在 `<keep-alive>` 内被切换，它的 `activated` 和 `deactivated` 这两个生命周期钩子函数将会被对应执行。

```js
export default {
  activated() {
    // 在首次挂载、以及每次从缓存中被重新插入的时候调用
  },
  deactivated() {
    // 在从 DOM 上移除、进入缓存，以及组件卸载时调用
  }
}
```

请注意：

- `activated` 在组件挂载时也会调用，并且 `deactivated` 在组件卸载时也会调用。
- 这两个钩子不仅适用于 `<KeepAlive>` 缓存的根组件，也适用于缓存树中的后代组件。

# 异步组件

## 使用异步组件

在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了简化，Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。例如：

```js
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
```

如你所见，这个工厂函数会收到一个 `resolve` 回调，这个回调函数会在你从服务器得到组件定义的时候被调用。你也可以调用 `reject(reason)` 来表示加载失败。这里的 `setTimeout` 是为了演示用的，如何获取组件取决于你自己。一个推荐的做法是将异步组件和 [webpack 的 code-splitting 功能](https://webpack.js.org/guides/code-splitting/)一起配合使用：

```js
Vue.component('async-webpack-example', function (resolve) {
  // 这个特殊的 `require` 语法将会告诉 webpack
  // 自动将你的构建代码切割成多个包，这些包
  // 会通过 Ajax 请求加载
  require(['./my-async-component'], resolve)
})
```

你也可以在工厂函数中返回一个 `Promise`，所以把 webpack 2 和 ES2015 语法加在一起，我们可以这样使用动态导入：

```js
Vue.component(
  'async-webpack-example',
  // 这个动态导入会返回一个 `Promise` 对象。
  () => import('./my-async-component')
)
```

当使用局部注册的时候，你也可以直接提供一个返回 `Promise` 的函数：

```js
new Vue({
  // ...
  components: {
    'my-component': () => import('./my-async-component')
  }
})
```

## 处理加载状态

这里的异步组件工厂函数也可以返回一个如下格式的对象：

```js
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
```

# 组件的循环引用

## 递归组件

组件是可以在它们自己的模板中调用自身的。不过它们只能通过 `name` 选项来做这件事：

```js
name: 'unique-name-of-my-component'
```

当你使用 `Vue.component` 全局注册一个组件时，这个全局的 ID 会自动设置为该组件的 `name` 选项。

```js
Vue.component('unique-name-of-my-component', {
  // ...
})
```

稍有不慎，递归组件就可能导致无限循环：

```js
name: 'stack-overflow',
template: '<div><stack-overflow></stack-overflow></div>'
```

类似上述的组件将会导致“max stack size exceeded”错误，所以请确保递归调用是条件性的 (例如使用一个最终会得到 `false` 的 `v-if`)。

## 组件之间的循环引用

假设你需要构建一个文件目录树，像访达或资源管理器那样的。你可能有一个 `<tree-folder>` 组件，模板是这样的：

```vue
<p>
  <span>{{ folder.name }}</span>
  <tree-folder-contents :children="folder.children"/>
</p>
```

还有一个 `<tree-folder-contents>` 组件，模板是这样的：

```vue
<ul>
  <li v-for="child in children">
    <tree-folder v-if="child.children" :folder="child"/>
    <span v-else>{{ child.name }}</span>
  </li>
</ul>
```

当你仔细观察的时候，你会发现这些组件在渲染树中互为对方的后代*和*祖先——一个悖论！当通过 `Vue.component` 全局注册组件的时候，这个悖论会被自动解开。如果你是这样做的，那么你可以跳过这里。

然而，如果你使用一个*模块系统*依赖/导入组件，例如通过 webpack 或 Browserify，你会遇到一个错误：

```
Failed to mount component: template or render function not defined.
```

为了解释这里发生了什么，我们先把两个组件称为 A 和 B。模块系统发现它需要 A，但是首先 A 依赖 B，但是 B 又依赖 A，但是 A 又依赖 B，如此往复。这变成了一个循环，不知道如何不经过其中一个组件而完全解析出另一个组件。为了解决这个问题，我们需要给模块系统一个点，在那里“A *反正*是需要 B 的，但是我们不需要先解析 B。”

在我们的例子中，把 `<tree-folder>` 组件设为了那个点。我们知道那个产生悖论的子组件是 `<tree-folder-contents>` 组件，所以我们会等到生命周期钩子 `beforeCreate` 时去注册它：

```js
beforeCreate: function () {
  this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue').default
}
```

或者，在本地注册组件的时候，你可以使用 webpack 的异步 `import`：

```js
components: {
  TreeFolderContents: () => import('./tree-folder-contents.vue')
}
```

这样问题就解决了！

# 访问组件实例的方法

- `vm.$root`：当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。

在每个 `new Vue` 实例的子组件中，其根实例可以通过 `$root` property 进行访问。得到根组件实例，可以访问根组件实例的方法和属性：

```js
// 获取根组件的数据
this.$root.foo

// 写入根组件的数据
this.$root.foo = 2

// 访问根组件的计算属性
this.$root.bar

// 调用根组件的方法
this.$root.baz()
```

- `vm.$el`：当前组件的根元素。在根组件中就是 `id="app"` 的div标签

- `vm.$data`：Vue 实例观察的数据对象。Vue 实例代理了对其 data 对象 property 的访问。

- `vm.$options`：当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象 property 的访问。

- `vm.$parent`：父实例，如果当前实例有的话。

- `vm.$children`：当前实例的直接子组件。需要注意 `$children` 并不保证顺序，也不是响应式的。如果你发现自己正在尝试使用 `$children` 来进行数据绑定，考虑使用一个数组配合 v-for 来生成子组件，并且使用 Array 作为真正的来源。

- `vm.$slots`：用来访问被[插槽分发](https://v2.cn.vuejs.org/v2/guide/components.html#通过插槽分发内容)的内容。每个[具名插槽](https://v2.cn.vuejs.org/v2/guide/components-slots.html#具名插槽)有其相应的 property (例如：`v-slot:foo` 中的内容将会在 `vm.$slots.foo` 中被找到)。`default` property 包括了所有没有被包含在具名插槽中的节点，或 `v-slot:default` 的内容。
  - 请注意插槽**不是**响应性的。如果你需要一个组件可以在被传入的数据发生变化时重渲染，我们建议改变策略，依赖诸如 `props` 或 `data` 等响应性实例选项。
  - 在使用[渲染函数](https://v2.cn.vuejs.org/v2/guide/render-function.html)书写一个组件时，访问 `vm.$slots` 最有帮助。

- `vm.$scopedSlots`：用来访问[作用域插槽](https://v2.cn.vuejs.org/v2/guide/components-slots.html#作用域插槽)。对于包括 `默认 slot` 在内的每一个插槽，该对象都包含一个返回相应 VNode 的函数。
  - `vm.$scopedSlots` 在使用[渲染函数](https://v2.cn.vuejs.org/v2/guide/render-function.html)开发一个组件时特别有用。
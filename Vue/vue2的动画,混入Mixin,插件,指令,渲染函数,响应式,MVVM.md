@[toc]
![在这里插入图片描述](https://img-blog.csdnimg.cn/0e229652513f4b2294bc7a921a049a3c.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/52fa70d2ed044ef1a2a71200c753a40a.png)

# 过渡 & 动画

Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具：

- 在 CSS 过渡和动画中自动应用 class
- 可以配合使用第三方 CSS 动画库，如 [Animate.css](https://github.com/animate-css/animate.css)
- 在过渡钩子函数中使用 JavaScript 直接操作 DOM
- 可以配合使用第三方 JavaScript 动画库，如 [anime.js](https://github.com/juliangarnier/anime)

Vue 提供了两个内置组件，可以帮助你制作基于状态变化的过渡和动画：

- `<Transition>` 会在一个元素或组件进入和离开 DOM 时应用动画。
- `<TransitionGroup>` 会在一个 `v-for` 列表中的元素或组件被插入，移动，或移除时应用动画。

除了这两个组件，我们也可以通过其他技术手段来应用动画，比如切换 CSS class 或用状态绑定样式来驱动动画。这些其他的方法会在[动画技巧](https://cn.vuejs.org/guide/extras/animation.html)章节中展开。

## Transition 组件

`<Transition>` 是一个内置组件，这意味着它在任意别的组件中都可以被使用，无需注册。它可以将进入和离开动画应用到通过默认插槽传递给它的**单个元素或组件上**。进入或离开可以由以下的条件之一触发：

- 由 `v-if` 所触发的切换
- 由 `v-show` 所触发的切换
- 由特殊元素 `<component>` 切换的动态组件

- 组件根节点

当一个 `<Transition>` 组件中的元素被插入或移除时，会发生下面这些事情：

1. Vue 会自动检测目标元素是否应用了 CSS 过渡或动画。如果是，则一些 CSS 过渡类名 class 会在适当的时机被添加和移除。
2. 如果有作为监听器的 JavaScript 钩子，这些钩子函数会在适当时机被调用。
3. 如果没有探测到 CSS 过渡或动画、也没有提供 JavaScript 钩子，那么 DOM 的插入、删除操作将在浏览器的下一个动画帧后执行。

### 基于 CSS 的过渡效果

#### CSS 过渡类名 class

在进入/离开的过渡中，一共有 6 个应用于进入与离开过渡效果的 CSS class。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
4. `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`：定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

![](https://img-blog.csdnimg.cn/img_convert/e9315d95452bc0110ea88eab6259a1b7.png)

对于进入动画：

| .v-enter           | .v-enter-to                            | .v-enter-active    |
| ------------------ | -------------------------------------- | ------------------ |
| 定义过渡的开始状态 | 定义过渡的结束状态                     | 定义过渡生效时的状 |
| 插入之前生效       | 插入之后下—帧生效（同时v-enter被移除） | 动画整个过程生效   |
| 下—帧被移除        | 动画完成之后移除                       | 动画整个过程生效   |

对于离开动画：

| .v-leave                 | .v-leave-to                                 | .v-leave-active          |
| ------------------------ | ------------------------------------------- | ------------------------ |
| 定义过渡的开始状态       | 定义过渡的结束状态                          | 定义过渡生效时的状态     |
| 离开过渡被触发时立即生效 | 触发之后下一帧生效（与此同时v-leave被删除） | 整个离开过渡的阶段中应用 |
| 下—帧被移除              | 动画完成之后移除                            | 整个离开过渡的阶段中应用 |

#### 为过渡效果命名

我们可以给 `<Transition>` 组件传一个 `name` prop 来声明一个过渡效果名：

```HTML
<Transition name="fade">
  ...
</Transition>
```

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的默认前缀。

如果你使用了一个有名字的过渡效果 `<transition name="fade">`，对它起作用的过渡 class 会以其名字而不是 `v` 作为前缀。比如，上方例子中被应用的 class  `v-enter-active` 会替换为 `fade-enter-active` 。

这个“fade”过渡的 class 应该是这样：

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
```

#### CSS 过渡 transition

`<Transition>` 一般都会搭配[原生 CSS 过渡](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)一起使用，配和 `transition` CSS 属性是，使我们可以一次定义一个过渡的各个方面，包括需要执行动画的属性、持续时间和[速度曲线](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)。

##### 实例1：

使用按钮控制标签的显示隐藏：

```html
<div id="app">
  
  <button @click="show = !show">show:{{show}}</button>
  <transition name="fade">
    <p v-show="show">hello vue!</p>
  </transition>
  
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      show: true,
    },
  });
</script>
```

添加进入和离开的动画：

```css
/* 离开的动画 */
/* 1、离开的开始状态 opacity为1是标签的默认值，只要是默认值可以省略 */
.fade-leave{
  opacity: 1;
}
/* 2、离开的结束状态 opacity为0 */
.fade-leave-to{
  opacity: 0;
}
/* 3、离开的整个过程，添加过渡属性 transition */
.fade-leave-active{
  transition: opacity 10s linear;
}
/* 进入的动画 */
/* 1、进入的开始状态 opacity为0 */
.fade-enter{
  opacity: 0;
}
/* 2、进入的结束状态 opacity为1，也是默认值，也可以省略 */
.fade-enter-to{
  opacity: 1;
}
/* 3、进入的整个过程，添加过渡属性 transition */
.fade-enter-active{
  transition: opacity 10s linear;
}
```

省略默认样式，合并相同样式：

```css
/* 把默认的样式省略，再把相同的样式属性的类名合并 */
.fade-leave-to,
.fade-enter {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 3s linear;
}
```

##### 实例2：

下面是一个更高级的例子，它使用了不同的持续时间和速度曲线来过渡多个属性：

```html
<Transition name="slide-fade">
  <p v-if="show">hello</p>
</Transition>
```

```css
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
```

#### CSS 动画

[原生 CSS 动画](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)和 CSS transition 的应用方式基本上是相同的，只有一点不同，那就是 `*-enter` 不是在元素插入后立即移除，而是在一个 `animationend` 事件触发时被移除。

对于大多数的 CSS 动画，我们可以简单地在 `*-enter-active` 和 `*-leave-active` class 下声明它们。下面是一个示例：

使用按钮控制标签的显示和隐藏：

```html 
<div id="app">
  <button @click="show = !show">show:{{show}}</button>
  <transition name="bounce">
    <p v-show="show" ref="p">动画</p>
  </transition>
</div>
```

设置关键帧动画只需要设置leave-active和enter-active样式，不需要设置leave和leave-to以及enter和enter-to：

```css
/*元素出来时的动画*/
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
/*元素离开时的动画*/
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
```

#### 自定义过渡的类名

你也可以向 `<Transition>` 传递以下的 props 来指定自定义的过渡 class：

- `enter-class`
- `enter-active-class`
- `enter-to-class` 
- `leave-class`
- `leave-active-class`
- `leave-to-class` 

你传入的这些 class （他们的优先级高于普通的类名）会覆盖相应阶段的默认 class 名。这个功能在你想要在 Vue 的动画机制下集成其他的第三方 CSS 动画库时非常有用，比如 [Animate.css](https://daneden.github.io/animate.css/)：

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

<transition 
  name="move"
  leave-active-class="animate__animated animate__bounceOut"
  enter-active-class="animate__animated animate__bounceIn"
>
  <div class="box" v-show="show">自定义动画名</div>
</transition>

```

#### 同时使用 transition 和 animation

Vue 需要附加事件监听器，以便知道过渡何时结束。可以是 `transitionend` 或 `animationend`，这取决于你所应用的 CSS 规则。如果你仅仅使用二者的其中之一，Vue 可以自动探测到正确的类型。

然而在某些场景中，你或许想要在同一个元素上同时使用它们两个。举例来说，Vue 触发了一个 CSS 动画，同时鼠标悬停触发另一个 CSS 过渡。此时你需要显式地传入 `type` prop 来声明，告诉 Vue 需要关心哪种类型，传入的值是 `animation` 或 `transition`：

```html
<Transition type="animation">...</Transition>
```

#### 深层级过渡与显式过渡时长

尽管过渡 class 仅能应用在 `<Transition>` 的直接子元素上，我们还是可以使用深层级的 CSS 选择器，在深层级的元素上触发过渡效果。

```html
<Transition name="nested">
  <div v-if="show" class="outer">
    <div class="inner">
      Hello
    </div>
  </div>
</Transition>
```

```css
/* 应用于嵌套元素的规则 */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

/* ... 省略了其他必要的 CSS */
```

我们甚至可以在深层元素上添加一个过渡延迟，从而创建一个带渐进延迟的动画序列：

```css
/* 延迟嵌套元素的进入以获得交错效果 */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}
```

然而，这会带来一个小问题。默认情况下，`<Transition>` 组件会通过监听过渡根元素上的**第一个** `transitionend` 或者 `animationend` 事件来尝试自动判断过渡何时结束。而在嵌套的过渡中，期望的行为应该是等待所有内部元素的过渡完成。

在这种情况下，你可以通过向 `<Transition>` 组件传入 `duration` prop 来显式指定过渡的持续时间 (以毫秒为单位)。总持续时间应该匹配延迟加上内部元素的过渡持续时间：

```html
<Transition :duration="550">...</Transition>
```

如果有必要的话，你也可以用对象的形式传入，分开指定进入和离开所需的时间：

```html
<Transition :duration="{ enter: 500, leave: 800 }">...</Transition>
```

#### 性能考量

你可能注意到我们上面例子中展示的动画所用到的 CSS 属性大多是 `transform` 和 `opacity` 之类的。用这些属性制作动画非常高效，因为：

1. 他们在动画过程中不会影响到 DOM 结构，因此不会每一帧都触发昂贵的 CSS 布局重新计算。
2. 大多数的现代浏览器都可以在执行 `transform` 动画时利用 GPU 进行硬件加速。

相比之下，像 `height` 或者 `margin` 这样的属性会触发 CSS 布局变动，因此执行它们的动画效果更昂贵，需要谨慎使用。我们可以在 [CSS-Triggers](https://csstriggers.com/) 这类的网站查询哪些属性会在执行动画时触发 CSS 布局变动。

### JavaScript 动画

你可以通过监听 `<Transition>` 组件事件的方式在过渡过程中挂上钩子函数：

```html 
<transition          
  @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
            
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
>
  <!-- ... -->
</transition>
```

```js
// ...
methods: {
 		// 在元素被插入到 DOM 之前被调用
    // 用这个来设置元素的 "enter-from" 状态
    onBeforeEnter(el) {},

     
    // 在元素被插入到 DOM 之后的下一帧被调用
    // 用这个来开始进入动画
    // el：是要做动画的元素对象，
    // done：是一个函数，是动画结束时的回调函数
    onEnter(el, done) {
      // 调用回调函数 done 表示过渡结束
      // 如果与 CSS 结合使用，则这个回调是可选参数
      done()
    },

    // 当进入过渡完成时调用。
    onAfterEnter(el) {},
    onEnterCancelled(el) {},

    // 在 leave 钩子之前调用
    // 大多数时候，你应该只会用到 leave 钩子
    onBeforeLeave(el) {},

    // 在离开过渡开始时调用
    // 用这个来开始离开动画
    onLeave(el, done) {
      // 调用回调函数 done 表示过渡结束
      // 如果与 CSS 结合使用，则这个回调是可选参数
      done()
    },

    // 在离开过渡完成、
    // 且元素已从 DOM 中移除时调用
    onAfterLeave(el) {},

    // 仅在 v-show 过渡中可用
    onLeaveCancelled(el) {}
  
}
```

这些钩子可以与 CSS 过渡或动画结合使用，也可以单独使用。

在使用仅由 JavaScript 执行的动画时，最好是添加一个 `:css="false"` prop。这显式地向 Vue 表明可以跳过对 CSS 过渡的自动探测。除了性能稍好一些之外，还可以防止 CSS 规则意外地干扰过渡效果。

```html
<Transition
  ...
  :css="false"
>
  ...
</Transition>
```

在有了 `:css="false"` 后，我们就自己全权负责控制什么时候过渡结束了。**这种情况下对于 `@enter` 和 `@leave` 钩子来说，必须使用 `done`进行回调。**否则，钩子将被同步调用，过渡将立即完成。

动画实例：

```html
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
<style>
  p {
    width: 100px;
    height: 100px;
    margin-left: 100px;
    margin-top: 100px;
    background-color: red;
    position: relative;
  }
</style>



<div id="app">
  <button @click="show = !show">toggle:{{show}}</button>
  <transition 
    @before-enter="beforeEnter" 
    @enter="enter" 
    @before-leave="beforeLeave" 
    @leave="leave" 
    v-bind:css="false"
  >
    <p v-show="show">hello</p>
  </transition>
</div>

<script>
  var app = new Vue({
    el: '#app',
    data: {
      show: true,
    },
    methods: {
      // 离开的动画
      beforeLeave(el) {
        console.log('离开之前');
        $(el).css({ transform: 'scale(0.8)' });
      },
      leave(el, done) {
        console.log('正在离开');
        $(el).animate({ left: 300}, 200, function () {
          $(this).css({ top: -200, left: 0 });
          done();
        });
      },
      // 进入的动画
      beforeEnter(el) {
        console.log('进入之前');
        $(el).css({ transform: 'scale(1)' });
      },
      enter(el, done) {
        console.log('进入中');
        $(el).animate({ top: 0 }, 200, function () {
          done();
        });
      },
    },
  });
</script>
```

### 可复用过渡效果

得益于 Vue 的组件系统，过渡效果是可以被封装复用的。要创建一个可被复用的过渡，我们需要为 `<Transition>` 组件创建一个包装组件，并向内传入插槽内容：

```html
<!-- MyTransition.vue -->
<script>
// JavaScript 钩子逻辑...
</script>

<template>
  <!-- 包装内置的 Transition 组件 -->
  <Transition
    name="my-transition"
    @enter="onEnter"
    @leave="onLeave">
    <slot></slot> <!-- 向内传递插槽内容 -->
  </Transition>
</template>

<style>
/*
  必要的 CSS...
  注意：避免在这里使用 <style scoped>
  因为那不会应用到插槽内容上
*/
</style>
```

现在 `MyTransition` 可以在导入后像内置组件那样使用了：

```html
<MyTransition>
  <div v-if="show">Hello</div>
</MyTransition>
```

### 出现时过渡

如果你想在某个节点初次渲染时应用一个过渡效果，你可以添加 `appear` prop：

```html
<Transition appear>
  ...
</Transition>
```

这里默认和进入/离开过渡一样，同样也可以自定义 CSS 类名。

```html
<transition
  appear
  appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class"
  appear-active-class="custom-appear-active-class"
>
  <!-- ... -->
</transition>
```

自定义 JavaScript 钩子：

```html
<transition
  appear
  v-on:before-appear="customBeforeAppearHook"
  v-on:appear="customAppearHook"
  v-on:after-appear="customAfterAppearHook"
  v-on:appear-cancelled="customAppearCancelledHook"
>
  <!-- ... -->
</transition>
```

在上面的例子中，无论是 `appear` attribute 还是 `v-on:appear` 钩子都会生成初始渲染过渡。

### 元素间过渡

除了通过 `v-if` / `v-show` 切换一个元素，我们也可以通过 `v-if` / `v-else` / `v-else-if` 在几个组件间进行切换，只要确保任一时刻只会有一个元素被渲染即可：

```html
<div id="app">
  <div class="btn-container">
    <transition name="slide-up">
       <button v-if="show" key="save" @click="show=!show">Save</button>
       <button v-else key="edit" @click="show=!show">Edit</button>
    </transition>
  </div>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      show: true,
    },
  });
</script>
```

可以这样使用，但是有一点需要注意：

当有**相同标签名**的元素切换时，需要通过 `key` attribute 设置唯一的值来标记以让 Vue 区分它们，否则 Vue 为了效率只会替换相同标签内部的内容。即使在技术上没有必要，**给在 `<transition>` 组件中的多个元素设置 key 是一个更好的实践。**

```css
.btn-container {
  margin-top: 30px;
  position: relative;
}

/* 
在“Save”按钮和“Edit”按钮的过渡中，两个按钮都被重绘了，一个离开过渡的时候另一个开始进入过渡。
这是 <transition> 的默认行为 - 进入和离开同时发生。
需要给button添加定位，否则二者同时存在时出现的布局问题。
*/
button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all .25s ease-out;
}

.slide-up-enter {
  opacity: 0;
  transform: translateY(30px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
```

### 过渡模式

在上前的例子中，进入和离开的元素都是在同时开始动画的，因此我们不得不将它们设为 `position: absolute` 以避免二者同时存在时出现的布局问题。

然而，很多情况下同时生效的进入和离开的过渡可能并不符合需求。我们可能想要先执行离开动画，然后在其完成**之后**再执行元素的进入动画。手动编排这样的动画是非常复杂的，好在Vue 提供了**过渡模式**，可以通过向 `<Transition>` 传入一个 `mode` prop 来实现这个行为：

- `in-out`：新元素先进行过渡，完成之后当前元素过渡离开。
- `out-in`：当前元素先进行过渡，完成之后新元素过渡进入。

```html
<Transition mode="out-in">
  ...
</Transition>
```

将之前的例子改为 `mode="out-in"` 后是这样：

```html
<div class="btn-container">
  <transition name="slide-up" mode="out-in">
    <button v-if="show" key="save" @click="show=!show">Save</button>
    <button v-else key="edit" @click="show=!show">Edit</button>
  </transition>
</div>
```

`in-out` 模式不是经常用到，但对于一些稍微不同的过渡效果还是有用的：

```html
<div class="btn-container">
  <transition name="slide-up" mode="out-in">
    <button v-if="show" key="save" @click="show=!show">Save</button>
    <button v-else key="edit" @click="show=!show">Edit</button>
  </transition>
</div>
```

### 组件间过渡

`<Transition>` 也可以作用于动态组件之间的切换，多个组件的过渡简单很多 - 我们不需要使用 `key` ：

```html
<div id="app">
  <button @click="view = view=='v-a' ? 'v-b' : 'v-a' ">view：{{view}}</button>
  <transition name="fade" mode="out-in">
    <component :is="view"></component>
  </transition>
</div>


<script>
  new Vue({
    el: '#app',
    data () {
      return {
        view: 'v-a'
      }
    },
    components: {
      'v-a': {
        template: '<div>Component A</div>'
      },
      'v-b': {
        template: '<div>Component B</div>'
      }
    }
  });
</script>


<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
```

### 动态过渡

`<Transition>` 的 props (比如 `name`) 也可以是动态的！这让我们可以根据状态变化动态地应用不同类型的过渡：

```html
<Transition :name="transitionName">
  <!-- ... -->
</Transition>
```

这个特性的用处是可以提前定义好多组 CSS 过渡或动画的 class，然后在它们之间动态切换。

你也可以根据你的组件的当前状态在 JavaScript 过渡钩子中应用不同的行为。最后，创建动态过渡的终极方式还是创建可复用的过渡组件，并让这些组件根据动态的 props 来改变过渡的效果。掌握了这些技巧后，就真的只有你想不到，没有做不到的了。

## TransitionGroup 组件

`<TransitionGroup>` 是一个内置组件，用于对 `v-for` 列表中的元素或组件的插入、移除和顺序改变添加动画效果。

### 和 `<Transition>` 的区别

`<Transition>`可以实现的过渡效果：

- 单个节点
- 同一时间渲染多个节点中的一个

那么怎么同时渲染整个列表，比如使用 `v-for`？在这种场景中，使用 `<transition-group>` 组件。

`<TransitionGroup>` 支持和 `<Transition>` 基本相同的 props、CSS 过渡 class 和 JavaScript 钩子监听器，但有以下几点区别：

- 不同于 `<transition>`，它会以一个真实元素呈现：默认为一个 `<span>`。但你可以通过传入 `tag` prop 来更换为其他元素作为容器元素来渲染。
- **过渡模式**在这里不可用，因为我们不再是在互斥的元素之间进行切换。
- 列表中的每个元素都**必须**有一个独一无二的 `key` attribute。
- CSS 过渡 class 会被应用在列表内的元素上，**而不是**容器元素上。

### 列表的进入 / 离开动画

这里是 `<TransitionGroup>` 对一个 `v-for` 列表添加进入 / 离开动画的示例：

```html
<script src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>

<div id="app">
  <button @click="insert">添加</button>
  <button @click="remove">移除</button>
  <button @click="reset">重置</button>
  <button @click="shuffle">随机排序</button>

  <transition-group tag="ul" name="list" class="list">
    <li v-for="item in items" class="item" :key="item">{{ item }}</li>
  </transition-group>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      items: [1, 2, 3, 4, 5, 6],
      nextNum: 10,
    },
    methods: {
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length);
      },
      insert() {
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      },
      remove(item) {
        this.items.splice(this.randomIndex(), 1);
      },
      reset() {
        this.items = [1, 2, 3, 4, 5, 6];
      },
      shuffle() {
        this.items = _.shuffle(this.items);
        console.log(this.items);
      },
    },
  });
</script>
```

```css
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
```

这个例子有个问题，当添加和移除元素的时候，周围的元素会瞬间移动到他们的新布局的位置，而不是平滑的过渡，我们下面会解决这个问题。

### 移动动画

上面的示例有一些明显的缺陷：当某一项被插入或移除时，它周围的元素会立即发生“跳跃”而不是平稳地移动。我们可以通过添加一些额外的 CSS 规则来解决这个问题，这需要用到 `v-move` class。

`<transition-group>` 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 **`v-move` class**，它会在元素的改变定位的过程中应用。像之前的类名一样，可以通过 `name` attribute 来自定义前缀，也可以通过 `move-class` prop手动设置。

`v-move` 对于设置过渡的切换时机和过渡曲线非常有用，你会看到如下的例子：

```css
.list-enter-active,
.list-leave-active {
  transition: all .5s ease;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* 对移动中的元素应用的过渡 */
.list-move {
  transition: all 0.5s ease;
}
/* 确保将离开的元素从布局流中删除，以便能够正确地计算移动的动画。 */
.list-leave-active {
  position: absolute;
}
```

现在它看起来好多了，甚至对整个列表执行洗牌的动画也都非常流畅。

这个看起来很神奇，内部的实现，Vue 使用了一个叫 [FLIP](https://aerotwist.com/blog/flip-your-animations/) 简单的动画队列使用 transforms 将元素从之前的位置平滑过渡新的位置。

> 需要注意的是使用 FLIP 过渡的元素不能设置为 `display: inline` 。作为替代方案，可以设置为 `display: inline-block` 或者放置于 flex 中。

## 动画技巧

Vue 提供了 `Transition ` 和 `TransitionGroup ` 组件来处理元素进入、离开和列表顺序变化的过渡效果。但除此之外，还有许多其他制作网页动画的方式在 Vue 应用中也适用。这里我们会探讨一些额外的技巧。

### 基于 CSS class 的动画

对于那些不是正在进入或离开 DOM 的元素，我们可以通过给它们动态添加 CSS class 来触发动画：

```html
<div id="app">
  <div :class="{ shake: disabled }">
    <button @click="warnDisabled">Click me</button>
    <span v-if="disabled">This feature is disabled!</span>
  </div>
</div>
<script>
  new Vue({
    el: '#app',
    data: {
      disabled: false,
    },
    methods: {
      warnDisabled() {
        this.disabled = true;
        setTimeout(() => {
          this.disabled = false;
        }, 1500);
      },
    },
  });
</script>
```

```html
<style>
  .shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
```

### 状态驱动的动画

有些过渡效果可以通过动态插值来实现，比如在交互时动态地给元素绑定样式。看下面这个例子：

```html
<style>
  .movearea {
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s background-color ease;
  }
</style>

<div id="app">
  <div @mousemove="onMousemove" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
    <p>移动你的鼠标穿过这个div...</p>
    <p>x: {{ x }}</p>
  </div>
</div>

<script>
  new Vue({
    el: '#app',
    data: {
      x: 0,
    },
    methods: {
      onMousemove(e) {
        this.x = e.clientX;
      },
    },
  });
</script>
```

除了颜色外，你还可以使用样式绑定 CSS transform、宽度或高度。你甚至可以通过运用弹性物理模拟为 SVG 添加动画，毕竟它们也只是 attribute 的数据绑定：

[SVG动画](https://sfc.vuejs.org/#eNqlVmtv2zYU/SuEGqAOFkl2Hl2hOdkDw9APK9AB+7BhGhBapGS1EkmQlGPH8H/vISnZluMABQoEDnkf5x7ee3nFbfSrUsmq41EWzU2ha2WJ4bZTD7moWyW1JWwjaFsXhpRatuTtsE0+m7e5yEUhhbFkySnj+gOvq6Ul92R2PXW6hltSm981rapaVJCXtDF88DGWAv6ebMk6I9MrssEv2QWvAvILzcuJVx6je7tRuN3lKY9P1C4dQCFb1VnOJpNLcv9AtrkgRON0WpDHj9OrKfnz5tr9c78X22PQ3V8X2yJZ7yAuks0O9E70j7k4jotfy4X9JE1tayleCx6M2QZ6wJJ4dJAjA9oq7kBg+YCk/EyuSUZuj+h7NEKspsKUUrcZefTrhlo+cWThmfY4O7W+BF3ichs4l50oPE1fAlefCb8MmBxReVIsqag4+1t2xZIbxD8V/Tf9H4xQSjIusNWdF3rgZO3BFK34PwehO3wQ/gs+IzpSfC+XkkwOfHoYZNUzGTXND2TSM0MVerbIjbc+FKnnuTfZjCxeVGmW3A11ckEdwknQo7IMFTkpiFQ+Bz33Vw507lI5+f5yUtxe1wpBDDJXw+pbLtSRsd0onh1wjdIIekVYp6kjnJEfp7i6Za09/4xcv/d32Dn7dIYTztMwWzBVsLG8Va5RsSNkzupVn7CGGnOfR8wdjS4ankdB8UsrO8OZfBLQ7lt2r7WuDbz4rNo7t3LFoQ0NNvY8r/JenfKIoSRjLy7YOZ13azj1kGOtPy3Oa1bV/qgL6MhTzewSG0wh7Ja+BtjevcO2d4KbcjMtc0EPMw7mZd00kL25+eNu9tsdHOapsxyCpYg2rJHofeCAAXPHj3zk8xTac4b9YEOkzNhN4451MusA8oE3jTxADKt5elRpbD0AMYVUnEGS7Asd2npBiy+Vlp1gcSEbqTPypizLn7xKrmOzpGgB9424VWsye4cfXS0opp37eLi/ZHZ36c19RjM31tXaC0JS0Z23gwRF12Xj8JY1Y1x4YUs17hQcYUVoZ6WXqv6gGYYvDlOvuBdbvrYxbeoKigL54NqLS2QnNvUzbs0MRA+yp57DzXTqhWgUHbtmKSAUUgTUhdQoTKwpqzuTkfceATcoWVQhSwc2dGFkgy9MYCMVUuOXDS+BGNbPcS0Yd9/XHiYUHhc86ct4ijo64959FjJBGcP1Dwk6FKZ+9sKeOkSjWMOXb1zRoSJ4KRwnKSTumrcv87aQDQvA6GrXSWih6CoKr5S4pQovEinwjvHx8l5h8igbpmYe4aHj9uh/a5XJ0tSUhXv9fDaJ1FWKVaI7YeuWJ9y08ULLJ1QJwHnUz0SMp8MDaIxVMJGYLxuFNk4YX6Ujw707YqTARPvFGkOEa3cNX6d0YvqC1jBjo91Xn51CFA==)

### 基于侦听器的动画

通过发挥一些创意，我们可以基于一些数字状态，配合侦听器给任何东西加上动画。例如，我们可以将数字本身变成动画：

```html
<script src="https://cdn.bootcdn.net/ajax/libs/gsap/3.11.3/gsap.min.js"></script>

<style>
  .big-number {
    font-weight: bold;
    font-size: 2em;
  }
</style>


<div id="app">
  Type a number: <input v-model.number="number" />
  <p>{{ tweened.toFixed(0) }}</p>
</div>


<script>
  new Vue({
    el: '#app',
    data: {
      number: 0,
      tweened: 0,
    },
    watch: {
      number(n) {
        gsap.to(this, { duration: 0.5, tweened: Number(n) || 0 });
      },
    },
  });
</script>
```

# 混入 mixin

## 概念

混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

可以把混入理解为：将组件的公共逻辑或者配置提取出来，哪个组件需要用到时，直接将提取的这部分混入到组件内部即可。这样既可以减少代码冗余度，也可以让后期维护起来更加容易。

这里需要注意的是：提取的是逻辑或配置，而不是HTML代码和CSS代码。mixin就是组件中的组件（组件配置的一部分），Vue组件化让我们的代码复用性更高，那么组件与组件之间还有重复部分，我们使用Mixin在抽离一遍。

## Mixin和Vuex的区别？

上面一点说Mixin就是一个抽离公共部分的作用。在Vue中，Vuex状态管理似乎也是做的这一件事，它也是将组件之间可能共享的数据抽离出来。两者看似一样，实则还是有细微的区别，区别如下：

- Vuex公共状态管理，如果在一个组件中更改了Vuex中的某个数据，那么其它所有引用了Vuex中该数据的组件也会跟着变化。
- Mixin中的数据和方法都是独立的，组件之间使用后是互相不影响的。

## 注册混入

混入分为全局混入和局部混入：

- 注册全局混入：`Vue.directive(混入对象)`

- 注册局部混入：`new Vue{ mixins:[混入对象1, 混入对象2, ...],  }`

混入对象：

- 混入对象和Vue的实例一样包含实例选项：data、methods、computed、声明周期钩子等，这些选项将会被合并到最终的选项中。也就是说，如果你的混入包含一个 created 钩子，而创建组件本身也有一个，那么两个函数都会被调用。

```js
// 定义混入对象
const myMixin1 = {
  created: function () {
    console.log('hello from myMixin1!')
  },
}

const myMixin2 = {
  created: function () {
    console.log('hello from myMixin2!')
  },
}

// 重要：
// 一个组件中改动了mixin对象中的数据，另一个引用了mixin的组件不会受影响
// 因为不同组件中的mixin是相互独立的！


// 使用全局混入
Vue.mixin(myMixin1);
Vue.mixin(myMixin2);

// 使用局部混入
Vue.component('m-v', {
  template: '<p>m-v</p>',
  mixins:[myMixin1, myMixin2],
});
```

全局混入的注意点：

- 请谨慎使用全局混入，一旦使用全局混入，它将影响**每一个**之后创建的 Vue 实例(包括第三方组件)。大多数情况下，只应当应用于自定义选项，就像下面示例一样。推荐将其作为插件发布，以避免重复应用混入。

```js
// 为自定义的选项 'myOption' 注入一个处理器。
Vue.mixin({
  created: function () {
    var myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})

new Vue({
  myOption: 'hello!'
})
```

## 选项合并

当把混入对象添加到组件中，根据混入规则添加混入的数据：当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”：

- data：数据对象在内部会进行递归合并，发生键名冲突时，组件数据覆盖混入对象的数据。

- 生命周期钩子：同名钩子函数将合并为一个数组，因此都将被调用。先执行混入对象的钩子函数，再执行组件自身钩子函数。

- 值为对象的选项：例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，组件的键值覆盖混入对象的键值，最后使用的是组件的方法等。

混入的规则可以总结为两点：

1. 组件的选项是对象类型（data、computed、methods、watch、components），如果混入对象中的属性或者方法名与组件内部的重名，组件的数据覆盖混入对象的数据。

2. 组件实例的选项是函数类型（生命周期函数），同名钩子函数将合并为一个数组，因此都将被调用。另外，先执行混入对象的钩子函数，再执行组件自身钩子函数。

## mixin的优缺点

从上面的例子看来，使用mixin的好处多多，但是凡是都有两面性：

- 优点：

  - 提高代码复用性

  - 无需传递状态

  - 维护方便，只需要修改一个地方即可

- 缺点：

  - 命名冲突

  - 滥用的话后期很难维护

  - 不好追溯源，排查问题稍显麻烦

  - 不能轻易的重复代码

## [组合式API 和 Mixin 的对比](https://cn.vuejs.org/guide/reusability/composables.html#comparisons-with-other-techniques)

在 Vue 2 中，mixins 是创建可重用组件逻辑的主要方式。尽管在 Vue 3 中保留了 mixins 支持，但对于组件间的逻辑复用，[Composition API](https://cn.vuejs.org/guide/reusability/composables.html) 是现在更推荐的方式。

让我们能够把组件逻辑提取到可复用的单元里。然而 mixins 有三个主要的短板：

1. **不清晰的数据来源**：当使用了多个 mixin 时，实例上的数据属性来自哪个 mixin 变得不清晰，这使追溯实现和理解组件行为变得困难。这也是我们推荐在组合式函数中使用 ref + 解构模式的理由：让属性的来源在消费组件时一目了然。
2. **命名空间冲突**：多个来自不同作者的 mixin 可能会注册相同的属性名，造成命名冲突。若使用组合式函数，你可以通过在解构变量时对变量进行重命名来避免相同的键名。
3. **隐式的跨 mixin 交流**：多个 mixin 需要依赖共享的属性名来进行相互作用，这使得它们隐性地耦合在一起。而一个组合式函数的返回值可以作为另一个组合式函数的参数被传入，像普通函数那样。

基于上述理由，我们不再推荐在 Vue 3 中继续使用 mixin。保留该功能只是为了项目迁移的需求和照顾熟悉它的用户。

# 插件

## 插件的功能

插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：

1. 添加全局方法或者 property。如：[vue-custom-element](https://github.com/karol-f/vue-custom-element)
2. 添加全局资源：指令/过滤器/过渡等。如 [vue-touch](https://github.com/vuejs/vue-touch)
3. 通过全局混入来添加一些组件选项。如 [vue-router](https://github.com/vuejs/vue-router)
4. 添加 Vue 实例方法，通过把它们添加到 `Vue.prototype` 上实现。
5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 [vue-router](https://github.com/vuejs/vue-router)

## 使用插件

通过全局方法 `Vue.use()` 使用插件。需要在 `new Vue()` 启动应用之前完成`Vue.use()`的调用：

```js
// 创建插件
const MyPlugin = {
  install (Vue, options) {
    console.log('install');
  }
}

// 使用插件，插件的install函数会自动调用： `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
  // ...组件选项
})
```

也可以传入一个可选的选项对象：

```js
Vue.use(MyPlugin, { someOption: true })
```

`Vue.use` 会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。

比如路由插件在vue脚手架中的使用：

```js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);// 使用路由插件
```

## 开发插件

Vue.js 的插件应该暴露一个 `install` 方法。这个方法的第一个参数是 `Vue` 构造器，第二个参数是一个可选的选项对象：

```js
const MyPlugin = {
  install (Vue, options) {
    
    // 1. 添加全局过滤器
    Vue.filter(...)
    
    // 2. 添加全局指令
    Vue.directive(...)

    // 3. 添加全局混入
    Vue.mixin(...)

    // 4. 添加实例方法或属性
    Vue.prototype.$myMethod = function (methodOptions) {...}
    Vue.prototype.$myProperty = xxxx
                                           
    // 5.添加全局方法或属性                                 
    Vue.myGlobalMethod = function () {}
    
  }
}
  
export default MyPlugin;
```

# 自定义指令

## 指令介绍

除了 Vue 内置的一系列指令 (比如 `v-model` 或 `v-show`) 之外，Vue 还允许你注册自定义的指令 (Custom Directives)。

一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。钩子函数会接收到指令所绑定元素作为其参数。

下面是一个自定义指令的例子，当一个 input 元素被 Vue 插入到 DOM 中后，它会被自动聚焦：

```js
Vue.directive('focus', {
  inserted (el) {
    el.focus();
  }
});
```

```html
<input v-focus>
```

假设你还未点击页面中的其他地方，那么上面这个 input 元素应该会被自动聚焦。该指令比 `autofocus` attribute 更有用，因为它不仅仅可以在页面加载完成后生效，还可以在 Vue 动态插入元素后生效。

和组件类似，自定义指令在模板中使用前必须先注册。

## 注册指令

注册自定义指令分为全局指令和局部指令：

- 注册全局指令：`Vue.directive(指令名, 回调函数或者配置对象)`

  ```js
  Vue.directive('color', {
    inserted (el, binding) {
      el.style.color = binding.value
    }
  });
  ```

- 注册局部指令：`new Vue{directives:{指令名: 回调函数或者配置对象 }}`

  ```js
  new Vue({
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    }
  });
  ```

- 指令名

  - 指令注册时不加v-，但使用时要加v-

  - 指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名。


## 指令钩子函数与参数

### 钩子函数

一个指令的定义对象可以提供几种钩子函数 (都是可选的)：

```js
Vue.directive('directive-name', {
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind(el, binding, vnode, prevVnode) {},
  
  // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  inserted(el, binding, vnode, prevVnode) {},
  
  // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
  // 但是你可以通过比较更新前后的值来忽略不必要的模板更新。
  update(el, binding, vnode, prevVnode) {},
  
  // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  componentUpdated(el, binding, vnode, prevVnode) {},
  
  // 只调用一次，指令与元素解绑时调用。
  unbind(el, binding, vnode, prevVnode) {},
})
```

### 钩子函数参数

指令钩子函数会被传入以下参数：

- `el`：指令所绑定的元素，可以用来直接操作 DOM。
- `binding`：一个对象，包含以下 property：
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点。
- `prevVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 [`dataset`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset) 来进行。

举例来说，像下面这样使用指令：

```js
<div v-example:foo.bar="baz">
```

`binding` 参数会是一个这样的对象：

```js
{
  arg: 'foo',
  modifiers: { bar: true },
  value: /* `baz` 的值 */,
  oldValue: /* 上一次更新时 `baz` 的值 */
}
```

和内置指令类似，自定义指令的参数也可以是动态的。举例来说：

```html
<div v-example:[arg]="value"></div>
```

这里指令的参数会基于组件的 `arg` 数据属性响应式地更新。

## 注册指令的两种方式

### 配置对象

```JS
Vue.directive('directive-name', {
  bind(el, binding, vnode, prevVnode) {},
})
```

### 函数简写

在很多时候，你可能想在 `bind` 和 `update` 时触发相同行为，除此之外并不需要其他钩子。这种情况下我们可以直接用一个函数来定义指令，如下所示：

```js
Vue.directive('color', function (el, binding) {
  el.style.color = binding.value
})
```

注意函数简写调用的时机有两个：

1. 指令与元素成功绑定时。

2. 指令所在的模板被重新解析时。

## 对象字面量

如果你的指令需要多个值，你可以向它传递一个 JavaScript 对象字面量。别忘了，指令也可以接收任何合法的 JavaScript 表达式。

```html
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
```

```js
Vue.directive('demo', function (el, binding) {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text)  // => "hello!"
})
```

## 在组件上使用

当在组件上使用自定义指令时，它会始终应用于组件的根节点，和**透传 attributes**类似。

```html
<MyComponent v-demo="test" />
```

```html
<!-- MyComponent 的模板 -->

<div> <!-- v-demo 指令会被应用在此处 -->
  <span>My component content</span>
</div>
```

需要注意的是vue3的组件可能含有多个根节点。当应用到一个多根组件时，指令将会被忽略且抛出一个警告。和 attribute 不同，指令不能通过 `v-bind="$attrs"` 来传递给一个不同的元素。总的来说，**不**推荐在组件上使用自定义指令。

## 指令函数中的this

不管是使用配置对象，还是使用函数简写的形式注册指令，指令的钩子函数中的this都是指向window的。因为在自定义指令中已经是需要用户操作DOM，Vue的数据都是通过指令传入指令的函数。

## 实例

问题： 尝试使用函数和配置对象的两种方式注册以下指令

- 注册v-color指令，改变文字的颜色，默认为红色

  ```js
  Vue.directive('color', function (el, binding) {
    el.style.color = binding.value || '#f00';
  });
  ```

  ```html
  <p v-color="'red'">你好</p>
  ```

- 注册v-focus-value指令，给输入框value传值，并让输入框获取焦点

  ```js
  // v-focus-value 不适合使用函数简写的形式
  // Vue.directive('focus-value', (el, binding) => {
  //   el.focus();
  //   el.value = binding.value
  // });
  
  Vue.directive('focus-value', {
    bind (el, binding) {
      el.value = binding.value
    },
    inserted (el, binding) {
      el.focus();
    },
    update (el, binding) {
      el.value = binding.value
    }
  });
  ```

  ```html
  <button @click="n++">点击n加1：{{n}} </button>
  <input type="text" v-focus-value="n">
  ```

# 渲染函数 render

Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用**渲染函数**，它比模板更接近编译器。

在学习render函数之前，先来了解一下虚拟 DOM的概念。

## 虚拟 DOM

你可能已经听说过“虚拟 DOM”的概念了，Vue 的渲染系统正是基于这个概念构建的。

虚拟 DOM (Virtual DOM，简称 VDOM) 是一种编程概念，意为将目标所需的 UI 通过数据结构“虚拟”地表示出来，保存在内存中，然后将真实的 DOM 与之保持同步。这个概念是由 [React](https://reactjs.org/) 率先开拓，随后在许多不同的框架中都有不同的实现，当然也包括 Vue。

与其说虚拟 DOM 是一种具体的技术，不如说是一种模式，所以并没有一个标准的实现。我们可以用一个简单的例子来说明：

```js
const vnode = {
  type: 'div',
  props: {
    id: 'hello'
  },
  children: [
    /* 更多 vnode */
  ]
}
```

这里所说的 `vnode` 即一个纯 JavaScript 的对象 (一个“虚拟节点”)，它代表着一个 `<div>` 元素。它包含我们创建实际元素所需的所有信息。它还包含更多的子节点，这使它成为虚拟 DOM 树的根节点。

一个运行时渲染器将会遍历整个虚拟 DOM 树，并据此构建真实的 DOM 树。这个过程被称为**挂载** (mount)。

如果我们有两份虚拟 DOM 树，渲染器将会有比较地遍历它们，找出它们之间的区别，并应用这其中的变化到真实的 DOM 上。这个过程被称为**更新** (patch)，又被称为“比对”(diffing) 或“协调”(reconciliation)。

虚拟 DOM 带来的主要收益是它让开发者能够灵活、声明式地创建、检查和组合所需 UI 的结构，同时只需把具体的 DOM 操作留给渲染器去处理。

## 渲染管线

从高层面的视角看，Vue 组件挂载时会发生如下几件事：

1. **编译**：Vue 模板被编译为**渲染函数**：即用来返回虚拟 DOM 树的函数。这一步骤可以通过构建步骤提前完成，也可以通过使用运行时编译器即时完成。
2. **挂载**：运行时渲染器调用渲染函数，遍历返回的虚拟 DOM 树，并基于它创建实际的 DOM 节点。这一步会作为[响应式副作用](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html)执行，因此它会追踪其中所用到的所有响应式依赖。
3. **更新**：当一个依赖发生变化后，副作用会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较，然后将必要的更新应用到真实 DOM 上去。

![render pipeline](https://img-blog.csdnimg.cn/img_convert/9084fbe84988e745594495424cc0a00e.png)

## 模板 vs. 渲染函数

Vue 模板会被预编译成虚拟 DOM 渲染函数。Vue 也提供了 API 使我们可以不使用模板编译，直接手写渲染函数。在处理高度动态的逻辑时，渲染函数相比于模板更加灵活，因为你可以完全地使用 JavaScript 来构造你想要的 vnode。

那么为什么 Vue 默认推荐使用模板呢？有以下几点原因：

1. 模板更贴近实际的 HTML。这使得我们能够更方便地重用一些已有的 HTML 代码片段，能够带来更好的可访问性体验、能更方便地使用 CSS 应用样式，并且更容易使设计师理解和修改。
2. 由于其确定的语法，更容易对模板做静态分析。这使得 Vue 的模板编译器能够应用许多编译时优化来提升虚拟 DOM 的性能表现 (下面我们将展开讨论)。

在实践中，模板对大多数的应用场景都是够用且高效的。渲染函数一般只会在需要处理高度动态渲染逻辑的可重用组件中使用。

## 创建虚拟DOM

Vue组件实例的选项中提供了render函数来创建虚拟DOM

render函数用法：`render(createVnode){ return createVnode();  }`

-  `createVnode`：是一个方法，用来创建虚拟DOM，通常把`createVnode`简写为`h`
-  `h()` 是 **hyperscript** 的简称——意思是“能生成 HTML (超文本标记语言) 的 JavaScript”。这个名字来源于许多虚拟 DOM 实现默认形成的约定。

>  Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。 

`h()` 函数返回值是虚拟DOM对象：

- `h` 到底会返回什么呢？其实不是一个*实际的* DOM 元素。它更准确的名字可能是 `createNodeDescription`，**因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。**我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为“**VNode**”。“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。

### render函数使用方式

```js
// h函数返回值为虚拟DOM对象 {VNode}
h(
  // {String | Object | Function}
  // 一个 HTML 标签名、组件选项对象，或者resolve 了上述任何一种的一个 async 函数。必填项。
  'div',

  // {Object}
  // 一个与模板中 attribute 对应的数据对象。可选。
  {
    // (详情见下一节) 深入数据对象
  },

  // {String | Array}
  // 子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”。可选。
  [
    '先写一些文字',
    h('h1', '一则头条'),
    h(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
);
```

### 深入数据对象

有一点要注意：正如 `v-bind:class` 和 `v-bind:style` 在模板语法中会被特别对待一样，它们在 VNode 数据对象中也有对应的顶层字段。该对象也允许你绑定普通的 HTML attribute，也允许绑定如 `innerHTML` 这样的 DOM property (这会覆盖 `v-html` 指令)。

```js
{
  // 与 `v-bind:class` 的 API 相同，接受一个字符串、对象或字符串和对象组成的数组
  'class': {
    foo: true,
    bar: false
  },
  // 与 `v-bind:style` 的 API 相同，接受一个字符串、对象，或对象组成的数组
  style: {
    color: 'red',
    fontSize: '14px'
  },
  // 普通的 HTML attribute
  attrs: {
    id: 'foo'
  },
  // 组件 prop
  props: {
    myProp: 'bar'
  },
  // DOM property
  domProps: {
    innerHTML: 'baz'
  },
  // 事件监听器在 `on` 内，
  // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
  // 需要在处理函数中手动检查 keyCode。
  on: {
    click: this.clickHandler
  },
  // 仅用于组件，用于监听原生事件，而不是组件内部使用
  // `vm.$emit` 触发的事件。
  nativeOn: {
    click: this.nativeClickHandler
  },
  // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
  // 赋值，因为 Vue 已经自动为你进行了同步。
  directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
  ],
  // 作用域插槽的格式为
  // { name: props => VNode | Array<VNode> }
  scopedSlots: {
    default: props => h('span', props.text)
  },
  // 如果组件是其它组件的子组件，需为插槽指定名称
  slot: 'name-of-slot',
  // 其它特殊顶层 property
  key: 'myKey',
  ref: 'myRef',
  // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
  // 那么 `$refs.myRef` 会变成一个数组。
  refInFor: true
}
```

## 使用render函数创建组件

### 访问this

- `render()` 函数可以访问同一个 `this` 组件实例。

  ```js
  Vue.component('m-c', {
    render(h) {
      return h('div', this.msg);
    },
    data() {
      return {
        msg: 'hello world!',
      };
    },
  });
  ```

### 单个根标签

- 虚拟DOM依然是只能有一个根标签， 以下写法会报错：

  - > `[Vue warn]: Multiple root nodes returned from render function. Render function should return a single root node.`

  ```js
  Vue.component('m-c', {
    render(h) {
      return [h('div', 'div1'), h('div', 'div2')];
    },
  });
  ```

### VNode 必须唯一

组件树中的所有 VNode 必须是唯一的。这意味着，下面的渲染函数是不合法的：

```js
render: function (h) {
  var p = h('p', 'hi')
  return h('div', [
    // 错误 - 重复的 VNode
    p, p
  ])
}
```

如果你真的非常想在页面上渲染多个重复的元素或者组件，你可以使用一个工厂函数来做这件事。比如下面的这个渲染函数就可以完美渲染出 6 个相同的段落：

```js
render: function (h) {
  return h('div',
    [1,2,3,4,5,6].map(function () {
      return h('p', 'hi')
    })
  )
}
```

## render函数的应用

- 标题组件

```js
// <m-h :level="3">论文</m-h>

Vue.component('m-h', {
  render (h) {
    return h('h' + this.level, this.$slots.default);
  },
  props: {
    level: {
      type: Number,
      require: true,
    }
  },
});
```

- 替代v-for 和 v-if 

```js
// <m-v :items="['选项1', '选项2', '选项3']"></m-v>

Vue.component('m-v', {
  props: ['items'],
  render (h) {
    if (this.items.length) {
      return h('ul', this.items.map(function (item) {
        return h('li', item)
      }))
    } else {
      return h('p', 'No items found.')
    }
  }
});
```

- 自定义v-model

```JS
//  
Vue.component('m-input', {
  props: ['value'],
  render (h) {
    var self = this
    return h('input', {
      domProps: {
        // 绑定input标签的value属性
        value: self.value
      },
      on: {
        // 监听input标签的input事件
        input: function (event) {
          // 发射input事件
          self.$emit('input', event.target.value)
        }
      }
    })
  }
});
```

# MVVM

## MVVM 模型 

MVVM -`Model View ViewModel`

- M：模型(Model) ：对应 data 中的数据 

- V：视图(View) ：模板 

- VM：视图模型(ViewModel) ： Vue 实例对象

![image-20220311180503267](https://img-blog.csdnimg.cn/img_convert/a9b00c540ababfe39fe3ac927060f0d5.png)

最核心的就是 `ViewModel` 。`ViewModel` 包含 `DOM Listeners` 和 `Data Bindings`。

**`Data Bindings` 用于将数据绑定到 `View` 上显示，`DOM Listeners` 用于监听操作。**

- 从 `Model` 到 `View` 的映射，也就是 `Data Bindings` 。这样可以大量省略我们手动 `update View` 的代码和时间。
- 从 `View` 到 `Model` 的事件监听，也就是 `DOM Listeners` 。这样我们的 `Model` 就会随着 `View` 触发事件而改变。

 在Vue中的mvvm:

- data中所有的属性、computed的计算属性、methods中的方法，最后都出现在了vm身上。
- vm身上所有的属性 及 Vue原型上所有属性，在Vue模板{{}}中都可以直接使用。

```html
<div id="app">
  {{num}}
</div>

<script>
let vm = new Vue({
  el:'#app',
  data:{
    num: 10,
  }
});
</script>
```

## MVVM思想有两个方向

一是将模型转换成视图，即将后端传递的数据转换成看到的页面。实现方式是：数据绑定。

二是将视图转换成模型，即将看到的页面转换成后端的数据。实现的方式是：DOM 事件监听。

这两个方向都实现的，就称为数据的双向绑定。

## MVC 和 MVVM 的区别(关系)

MVC - Model View Controller( controller: 控制器 )，M 和 V 和 MVVM 中的 M 和 V 意思一样，C 指页面业务逻辑。使用 MVC 的目的就是将 M 和 V 的代码分离，但 MVC 是单向通信，也就是将 Model 渲染到 View 上，必须通过 Controller 来承上启下。

MVC 和 MVVM 的区别(关系)并不是 ViewModel 完全取代了 Controller 。

ViewModel 目的在于抽离 Controller 中的数据渲染功能，而不是替代。其他操作业务等还是应该放在 Controller 中实现，这样就实现了业务逻辑组件的复用。

## 常见关于Vue的面试题

什么是MVVM思想？

> MVVM -`Model View ViewModel`，它包括 DOM Listenters 和 Data bindings，前者实现了页面与数据的绑定，当页面操作数据的时候 DOM 和 Model 也会发生相应的变化。后者实现了数据与页面的绑定，当数据发生变化的时候会自动渲染页面。

MVVM相对于MVC的优势？

> 1. MVVM 实现了数据与页面的双向绑定，MVC 只实现了 Model 和 View 的单向绑定。
> 2. MVVM 实现了页面业务逻辑和渲染之间的解耦，也实现了数据与视图的解耦，并且可以组件化开发。

VUE是如何体现MVVM思想的？

> 1. 胡子语法（`Mustache` 语法， {{}} 长的比较像胡子，命名为胡子语法），实现了数据与视图的绑定。
> 2. v-on 事件绑定，通过事件操作数据时，v-model 会发生相应的变化。

# 响应式原理

## 数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

```js
let o1 = {x: 100};
let o2 = {y: 200};
Object.defineProperty(o2, 'x', {
  get(){
    return o1.x;
  },
  set(value){
    o1.x = value;
  }
});
```

o2对象代理了o1对象的属性x，当修改o1.x会影响o2.x，修改o2.x也会影响o1.x

##  模拟响应式的实现

响应式原理：在改变数据的时候，视图会跟着更新。

```html
<div id="app">
  <button onclick="addClick('age', 1)">点击改变age</button>
  <button onclick="addClick('weight', 2)">点击增加weight属性</button>
  <p id="name"></p>
  <p id="age"></p>
  <p id="weight"></p>
</div>

<script>

  // 模拟 Vue 中的 data
  let data = {
    name: '张三',
    age: 12
  }
  // 更新视图
  function updateView (key, value) {
    document.getElementById(key).innerHTML = key + '=' + value
  }

  // 模拟Vue的响应式函数reactive
  function reactive (target, key, value) {
    Object.defineProperty(target, key, {
      get () {
        console.log(`访问了${key}属性`)
        return value
      },
      set (newValue) {
        console.log(`将${key}由->${value}->设置成->${newValue}`)
        if (value !== newValue) {
          value = newValue;
          updateView(key, newValue);
        }
      }
    })
  }

  // 模拟 Vue 实例，代理data中的每一个属性，后增加的属性，不具有响应式
  Object.keys(data).forEach(key => reactive(data, key, data[key]));
  updateView('name', data.name);
  updateView('age', data.age);

  // 模拟值的改变
  function addClick (key, value) {
    if (data[key]) {
      data[key] = data[key] + value;
    } else {
      data[key] = value;
    }
  }

</script>
```

Vue给data里所有的属性加上set，get这个过程就叫做响应式。

## Vue中的数据代理

Vue中的数据代理：通过vue实例来代理data对象中属性的操作（读/写）

Vue中数据代理的好处：更加方便的操作data中的数据

<img src="https://s2.loli.net/2022/03/12/JfEL6ruo5eqGjTb.png" alt="image-20220312084403320" style="zoom:150%;" />

## 响应式原理

- vue在实例化时，将data中的所有属性都通过Object.defineProperty添加到vue实例上

- 为每一个添加到vue实例上的属性都指定setter和getter，在getter/setter内部去操作（读/写）data中对应的属性

- 每个vue实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据记录为依赖。之后当依赖属性的 setter 触发时，会通知 watcher，从而使页面中绑定这个属性的部分重新渲染。

## 总结

**第一步：**组件初始化的时候，先给每一个Data属性都注册getter，setter，也就是reactive化。然后再new 一个自己的Watcher对象，此时watcher会立即调用组件的render函数去生成虚拟DOM。在调用render的时候，就会需要用到data的属性值，此时会触发getter函数，将当前的Watcher函数注册进sub里。

![image-20220311222318110](https://img-blog.csdnimg.cn/img_convert/bfd9216f3b202c5ee9922e347b5873e2.png)

**第二步：**当data属性发生改变之后，就会遍历sub里所有的watcher对象，通知它们去重新渲染组件。

![image-20220311222409880](https://img-blog.csdnimg.cn/img_convert/366103d2f201aa36188fa0fafbd34c8d.png)

# 响应式属性

## vue的响应式属性

当一个 Vue 实例被创建时，它将 `data` 对象中的所有的属性加入到 Vue 的**响应式系统**中。当这些 属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

```js
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的 property
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置 property 也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3
```

由于 Vue 会在初始化实例时对data中的属性执行 getter/setter 转化，所以属性必须在 `data` 对象上存在才能让 Vue 将它转换为响应式的。

当这些数据改变时，视图会进行重渲染。值得注意的是只有当实例被创建时就已经存在于 `data` 中的 属性 才是**响应式**的。也就是说如果你添加一个新的 属性，比如：

```js
var vm = new Vue({
  data:{
    a:1,
  }
})

// `vm.a` 是响应式的

vm.b = 2
// `vm.b` 是非响应式的
```

那么对 `b` 的改动将不会触发任何视图的更新。

对于已经创建的实例， Vue 不允许动态添加根级响应式 property。如果你知道你会在晚些时候需要一个 property，一开始你必须在初始化实例前在data中声明所有根级响应式属性，并为这些属性设置初始值。比如：

```js
var vm = new Vue({
  data:{
    // 声明 message 为一个空值字符串
    message: '',
    // 声明 items 为一个空数组
    items:[],
    // 声明 zhagnsan 为一个空对象
    zhagnsan:{}
  }
})
// 之后设置  message、tems、zhangsan 都是是响应式的
vm.message = 'Hello!';
vm.items = [1,2,3,4];
vm.zhangsan = {name:'张三', age:19};
```

## 检测对象的属性的变化

给data中的对象添加属性，Vue检测不到对象属性的变化，比如：

```js
var vm = new Vue({
  data:{
    user: {
      name: '张三'
    },
  }
});

vm.user.age = 12;// age不是是响应式的
```

使用上面的方式添加的age属性不是响应式的。

如果想要Vue检测到age属性，可以使用下面的方法向嵌套对象添加响应式 属性

-  `Vue.set(object, propertyName, value)` 
-  `vm.$set(object, propertyName, value)` 

```js
Vue.set(vm.user, 'age', 12);
// 或者
vm.$set(vm.user,'age',12);
```

如果需要给user对象添加多个属性，可以使用 Object.assign

```js
vm.user = Object.assign({}, vm.user, {weight:100, height:180});
```

## 检测数组元素值的变化

### 检测数组

Vue 不能检测以下数组的变动：

1. 当你利用索引直接设置一个数组项时，例如：`vm.items[indexOfItem] = newValue`
2. 当你修改数组的长度时，例如：`vm.items.length = newLength`

```js
var vm = new Vue({
  data:{
     hobby: ['游戏', '音乐', '运动'],
  }
});

vm.hobby[0] = '学习';// 不是是响应式的
```

检测数组的变化有两种方式：

- 使用被 Vue 包裹的数组变更方法，使用这些方法将会触发视图更新。这些被包裹过的方法包括push()、pop()、shift()、unshift()、splice()、sort()、reverse()

- 使用set函数改变数组元素：Vue.set(array, index, item) 或 vm.$set(array, index, item)

为了解决第一类问题，以上两种方式都可以实现：

```js
Vue.set(vm.hobby, 0, '学习');  

vm.$set(vm.hobby, 0, '学习');

vm.hobby.splice(0, 1, '学习');
```

为了解决第二类问题`vm.items.length = newLength`，你可以使用 `splice`：

```
vm.items = vm.items.splice(newLength);
```

### 替换数组

变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 `filter()`、`concat()` 和 `slice()`。它们不会变更原始数组，而**总是返回一个新数组**。当使用非变更方法时，可以用新数组替换旧数组：

```js
this.hobby = this.hobby.filter( item  => !item.includes('运动'));
```
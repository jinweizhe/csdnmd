**问题:**
当我点击其中的一行时，结果所有的li都绑上了active样式，稍微想一下，相信大家都能找到问题所在，所有li的样式都由一个isActive控制，当我点击一行，全局变量isActive变为ture，当然所有的li都会绑上啦！然后我就停滞下来，思索一番，想过在data数组各项里插入一个标识用来单独控制，但被我否决了，一来对象中插入属性麻烦，二来污染数据源。于是，便有了下面我要说的解决方法：

## 第一种方法
解决方法：使用index索引，当点击一个元素时，将该元素的index索引赋给类样式的启用变量，如果该变量和index相等时，则启用该类样式
#### html
```html
//将v-for循环的index索引号传入事件函数, 再绑定下class的值让isactive变量与索引进行对比,当这个值和index相等时则添加样式,否则不添加
<div v-for = "(item,index) in items" :class = "isactive == index ? 'addclass' : '' " @click='onclick(index)'>
 <span>{{item.name}}</span>
</div>
```
#### css
```css
.addclass{
 color : red;
}
```
#### js
```js
data:{
 isactive : -1;  //这个值为0的话相当于默认给索引为0的元素添加样式
}
onclick(index){
 
 //将点击的元素的索引赋值给isactive变量 , 每次点击都更改变量的值
 this.isactive = index
}
```
## 第二种方法(本质和第一种一样,就是判断时加个方法)
#### html
```html
<template>
<!-- 点击某个绑定样式 -->
 <ul>
  <li v-for="(data, index) in formData" :key="data.id" :class="currentClass(index)" @click="currentInfo(index)">name: {{data.name}}，age: {{data.age}}
  </li>
 </ul>
 
</template>
```
#### css
```css
.addclass{
 color : red;
}
```
#### js
```js
<script>
export default {
  name: 'classActive'
  data() {
    return {
      currentNumber: 0,  // 用来判断active样式类是否显示
    }
  }
  methods: {
    currentInfo(index) {
      this.currentNumber = index;
    },
    currentClass(index) {
      return [this.currentNumber == index ? 'active' : ''];
    }
  }
}
</script>
```
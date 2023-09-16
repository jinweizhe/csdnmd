[官方网址](https://kazupon.github.io/vue-i18n/installation.html#compatibility-note)
### 安装
```js
//版本不能错(必须指定版本,因为最新版本支持vue3不支持vue2)
npm install vue-i18n@8
//这里讲解的用的以下针对vue2的版本(上面那个是官网版本)
npm i vue-i18n@6 -S
```
**在main.js的配置**
```js
import Vue from 'vue'
import App from './App.vue'
//导入
import VueI18n from 'vue-i18n'
Vue.config.productionTip = false
//这里需要注册一下
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', //默认语言
  messages: {
  //en,zh对应的是locale的值,这个值就是当前的语言
    en: {
    //这里面的参数随意,但是每个语言的键要保持一致
      login: 'login',
      change: 'change'
    },
    zh: {
      login: '登录',
      change: '切换'
    }
    //.....以下还可以配置更多国家
  }
})

new Vue({
//上面配置完了,这里要挂载一下
  i18n,
  render: h => h(App),
}).$mount('#app')
```
**app.vue的代码**
```html
<template>
  <div class="app">
  <!--这里按钮内的语言是从配置中取得的login,下同-->
    <button>{{ $t('login') }}</button>
    <!-- 点击切换可以切换语言 -->
    <button @click="change">{{ $t('change') }}</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    change() {
    //这里可以访问到配置的locale,当main.js内通过vue.use注册过后就可以通过this.$i18n去访问到里面的locale,通过改变locale的值实现中英文切换
      console.log('this.$i18n.local', this.$i18n.locale);
      if (this.$i18n.locale == 'en') { //这里进行判断下
        this.$i18n.locale = 'zh'
      } else {
        this.$i18n.locale = 'en'
      }
    }
  }
}
</script>

<style scoped></style>
```
**效果图**
![在这里插入图片描述](https://img-blog.csdnimg.cn/9b18a21295304b95b49d59ae12d418b2.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/283a30a6fcc8425aa1a66a07c08f94f2.png)
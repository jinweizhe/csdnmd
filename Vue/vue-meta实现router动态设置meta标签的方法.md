 # 一. meta标签提供关于HTML文档的元数据(元数据指用来描述数据的数据)。


> 元数据不会显示在页面上，但是对于机器是可读的。它可用于浏览器(如何显示内容或从新加载页面)、搜索引擎(关键词搜索)、或其他web服务。
# 二.meta标签的特点
>meta标签只能位于head元素内部。
>在html中，meta标签没有结束标签。在xhtml中，meta标签必须被正确地关闭。
>meta标签共有两个属性，分别是http-equiv属性和name属性。

# 三.通过引入vue-meta模块
## 安装模块
```js
npm install vue-meta --save
```
## 在main.js中引入
```js
import  Meta from 'vue-meta';
Vue.use(Meta);　
new Vue({
    router,
    data:{
        title:"张培跃",
        keywords:"玉树临风,风流倜傥,英俊潇洒,才高八斗,貌似番安",
        description:"这么神奇吗？都已经很难用言语来描述了"
    }, //这里定义的data用于下面的meta动态渲染
    metaInfo(){
        return {
            title: this.title,
            meta: [
                {
                    name:"keywords",
                    content: this.keywords //指向data的数据
                },{
                    name:"description",
                    content: this.description  //指向data的数据
                }
            ]
        }
    },
    render: function (h) { return h(App) }
}).$mount('#app')　
```
# 四.vue路由中动态设置title与meta
## 在router.js中创建路由：
```js
routes:[
{
    name:"Qq",
    path:"/qq",
    component:Qq，
    meta：{
        metaInfo：{
            title:"腾讯首页",
             keywords: "资讯,新闻,财经,房产,视频,NBA,科技,腾讯网,腾讯,QQ,Tencent",
             description: "腾讯网从2003年创立至今，已经成为集新闻信息……"
        }
    }
},
{
    path: "/jd",
        name: "Jd",
        component: Jd,
        meta: {
            metaInfo: {
                title: "京东(JD.COM)-正品低价、品质保障、配送及时、轻松购物！",
                keywords: "网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,京东",
                description: "京东JD.COM-专业的综合网上购物商城，……"
            }
        }
 
 
}
]
```
## 在store.js中创建状态：
```js
import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);
const state = {
    metaInfo: {
        title: "张培跃",
        keywords: "玉树临风,风流倜傥,英俊潇洒,才高八斗,貌似番安",
        description: "这么神奇吗？都已经很难用言语来描述了"
    }
};
const mutations = {
    CAHNGE_META_INFO(state, metaInfo) {
        state.metaInfo = metaInfo;
    }
};
export default new vuex.Store({
    state,
    mutations,
})
```
## main.js
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
import store from './store'
 
Vue.use(Meta)
 
Vue.config.productionTip = false;
 
router.beforeEach((to, from, next) => {
    if (to.meta.metaInfo)
        store.commit("CAHNGE_META_INFO", to.meta.metaInfo)
    next()
});
 
new Vue({
    router,
    store,
    metaInfo(){
        return {
            title: this.$store.state.metaInfo.title,
            //这里没有data了,取而代之的动态的数据来源于store里面的数据
            meta: [
                {
                    name: "keywords",
                    content: this.$store.state.metaInfo.keywords //动态的数据来源于store里面的数据
                }, {
                    name: "description",
                    content: this.$store.state.metaInfo.description  //动态的数据来源于store里面的数据
                }
            ]
        }
    },
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
```
**到此这篇关于vue-meta实现router动态设置meta标签的文章就介绍到这了**
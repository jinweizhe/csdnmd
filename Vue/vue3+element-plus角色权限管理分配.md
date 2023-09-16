**这里的图片是截图这个老师的项目**
**为了方便大家使用,我会在每个图片下面将代码原封不动打一遍**
#### 在src/uitls/permission.js加入以下内容

> 本段代码讲解:
> 参数一:后台传来的路由
> 参数二:前端所有的路由
> 先遍历前端所有路由,在里面继续遍历后台路由,通过二者某一个关键字的是否相同判断用户是否有权限(这里老师使用的是title关键字),关键字相同理论是可以直接追加了,但是考虑到二级或者三级子内容存在,这里老师做了个递归处理,就是如果当前元素有children属性就给当前元素children属性来个递归处理,最终返回的值就是当前权限所能访问的值


![在这里插入图片描述](https://img-blog.csdnimg.cn/ee2940be80a14999a351251d7db2e4ba.png)
**以下内容和上面图片一致,方便拷贝使用**
```js
/**
* 参数1:后台传来的关键字数组,参数二:全部路由数据
*/
export function comparation(userRouter=[],allRouter=[]){
  let realRouter = []
  allRouter.forEach(item=>{
    userRouter.forEach(v=>{
      if(item.meta,title===v.title){
        //注意children
        if(item.children && item.children.length>0){
          item.children=comparation(v.children,item.children)
        }
        realRouter.push(item)
      }
    })
  })
  return realRouter
}
```
#### 这个代码是在vuex里面写的,基本都有注释

> 代码解释: 这段代码老师定义了路由集合数据,是真正的需要展现到页面的数据(这里老师还用了个导航菜单,本人没用到,直接通过路由生成的菜单,后台传过来的数据或者前台定义的路由表每个人都不一样,这个主要是理解这个权限管理思路),中间的mutation定义了路由表和菜单的设置与消失,在action里面的方法才是真正的核心,里面发送了当前用户的角色的请求,然后引入刚刚上面模块定义的方法给用户设置权限,最后添加到vuex和路由中

![在这里插入图片描述](https://img-blog.csdnimg.cn/fa833a0c657848f5a1734b2a5ce02b1f.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2dbc69b36cd141b3b4d6d815793fef26.png)
**以上两张图片是连在一起的**
**以下内容和上面两张图片一致,方便拷贝使用**
```js
import { comparsion } from "@/uitl/comparsion";
export default {
  namespaced: true,
  state: {
    routerList: null, //真正的路由
    sideBar: [], //导航菜单
  },
  mutations: {
    set_routerList(state, data) {
      state.realRouter = data;
    },
    clear_routerList(state, data) {
      state.realRouter = null;
    },
    set_sideBar(state, data) {
      state.sideBar = data;
    },
    clear_sideBar(state, data) {
      state.sideBar = [];
    },
  },
  actions: {
    async gat_routers({ commit }, data) {
      //获取比对路由
      let routers = await login("/login", { username: "admin" }).then((res) => {
        return res.data.router;
      });
      //导航菜单
      commit("set_sideBar", routers[0].children);
      // 比对路由(参数一是上面后台返回的关键字数组,参数二是所有路由,需要导入)
      let realRouter = comparation(routers, allRouter);
      console.log(realRouter);
      // 存储到vuex
      commit("set_routerList", realRouter);
      // 动态添加路由
      router.addRoutes(realRouter); //这是vue2写法,vue3版本的router4版本没有addRoutes,只有addRoute
      //以下是我本人的写法(vue-router4版本只能通过循环一个一个加)
      // realRouter.forEach((item) => {
      //   router.addRoute(item);
      // });
    },
  },
};
```
#### 这里老师做了前置守卫

> 代码说明:
> 在每次路由跳转都去获取一次角色身份(这点个人不太建议,其一:每次路由更改都要获取请求和添加路由表等,感觉麻烦,本人在路由父级(第一层路由)那里设置onMonend生命周期去调用的)

![在这里插入图片描述](https://img-blog.csdnimg.cn/7b999df879df45a695d79576b46f935b.png)
**以下内容和上面图片一致,方便拷贝使用**
```js
router.beforeEach((to, from, next) => {
 if(!getToken()){ //没有登录
  if(to.meta.token){//需要登录
    next({
      path:"/login"
    })
  }else{
    next()
  }
 }else{ //登录
    //判断权限
    if(!store.state.permission.routerList){//没有路由
      //获取路由
      store.dispatch('permission/gat_routers').then(()=>{
        console.log(1000);
        next()
      })
    }
 }
})
```
[这里附上老师的视频教程,只需要看我链接这个后半部分视频就够了,前面没啥用,后半部分是核心](https://www.bilibili.com/video/BV1Ff4y1b73m/?p=3&spm_id_from=333.1007.top_right_bar_window_history.content.click&vd_source=54b92ea953eb0a7281545e66410fc2f5)

#### 本人遇到的bug
**在路由前置守卫中动态添加路由，刷新路由页面一片空白找不到页面，表示在路由添加之前就已经在访问路由了，同时经查阅官方文档看到有一个提示**
![在这里插入图片描述](https://img-blog.csdnimg.cn/806075589cae4e02b330c8e63c7dc03a.png)
**在代码中，router.addRoute的触发是在路由导航守卫中检测到当前未保存动态菜单信息（vuex）。在这之后用next()放行，而根据官方提示和控制台相关打印信息可以看到，warn提示在addRouter添加路由之前，所以解决方法是将next()改为next(to)，触发新的一个导航，此时可以正确匹配到动态路由的相应地址。这个next(to)放在添加路由的vuex方法后**
```js
   store.dispatch('permission/gat_routers').then(()=>{
        console.log(1000);
        next(to)  //这样可解决白屏问题
      })
```
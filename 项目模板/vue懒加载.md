```vue
data() {
    return {
     homedata: [], //存放请求的数据
     a: 1, //定义每次加载的数量
     flag2: false, //节流操作,防止多次请求
    };
  },
created() {
    this.homelist();
    //在这里监听滚动事件
    document.addEventListener("scroll",this.scroll);
  },
   methods: {
	   // 首页列表显示
	    homelist() {
	      this.$http
     	   .get("/api/RoomApi/live", {
          params: {
            limit: this.a * 30,  //每次懒加载的数量
          },
        })
        .then((data) => {
          let c = data.data.data;
          this.homedata = c;
          this.flag2 = true;  //数据请求成功后将节流阀打开
        });
    },
    //懒加载
    scroll() {
      //可视页面的尺寸
      let clientHeight = document.documentElement.clientHeight;
      //滚动的尺寸
      let scrollTop = document.documentElement.scrollTop;
      //整个页面的尺寸
      let scrollHeight = document.documentElement.scrollHeight;
      console.log(
        clientHeight,
        scrollTop,
        clientHeight + scrollTop,   //当下拉到最底部会发现它们的和刚好等于scrollHeight的值
        scrollHeight
      );
      //这里加50,代表即将触底时提前将lodding展示出来,也就是提前发送下一页数据
      if (clientHeight + scrollTop >= scrollHeight - 10) {
       //节流操作,防止用户多次触发
        if (this.flag2) {
        //进入后将阀门关闭
          this.flag2 = false;
          //将数量控制到下一批
          this.a += 1;
          console.log(this.a);
          console.log(this.flag2);
          //重新调用请求数据的方法
          this.homelist();
          //打印数据会发现每次都加一批了,每次三十个数据
          console.log(this.homedata);
        }
      }
    },
   }
```
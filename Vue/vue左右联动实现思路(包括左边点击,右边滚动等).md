> 包含左边点击右边会自动滑动
> 以及右边滚到相应位置,左边滑动

```html
<template>
  <div class="typeone">
    <ul class="u1">
      <li
        v-for="(item, index) in $store.state.nav.list2"
        :key="index"
        @click="xj(index)"
      >
        <div
          class="ej"
          :class="index == $store.state.nav.discoloration2 ? 'color' : ''"
        >
          {{ item }}
        </div>
      </li>
    </ul>
    <main>
      <div
        v-for="(item, index) in $store.state.nav.list2"
        :key="index"
        ref="indexcatch"
      >
        <div class="sc">{{ item }}</div>
        <div>
          <ul>
            <ul class="u2">
              <router-link
                v-for="(item3, index) in $store.state.nav.splb2.filter(
                  (item1) => {
                    return item1.type_two == item;
                  }
                )"
                :key="index"
                tag="li"
                :to="'/deail/' + item3.Id"
              >
                <img
                  :src="item3.imageUrl"
                  alt=""
                />
                <h4>{{ item3.title }}</h4>
                <p>
                  <span>{{ "¥" + item3.priceStr }}</span>
                  <span v-html="item3.mack"></span>
                </p>
              </router-link>
            </ul>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "typeone",
  created() {
    window.addEventListener("scroll", this.xj2);
  },
  data() {
    return {
      divs: [], //这里存储右侧所有的大块,为了计算距离使用
    };
  },
  methods: {
    xj(a) {
      //参数a是点击侧边栏时传入的索引号
      //下面这个vuex将点击的索引号保存(因为侧边栏点击要变色,这个索引号对比用vuex保存)
      // this.$store.commit("nav/discoloration2", a);
      //侧边栏点击后将右侧给同步滚动
      scrollTo({
        left: 0,
        top: this.$refs.indexcatch[a].offsetTop - 90, //点击侧边栏的哪个索引就让右侧哪个索引对应的块滚动
        behavior: "smooth",
      });
    },

    xj2() {
      //右侧大块滑动同步滚动左侧侧边栏
      this.divs = this.$refs.indexcatch; //获取所有的元素
      let scollTop = document.documentElement.scrollTop; //获取向上滚动的距离
      let a = 0; //定义变量,每次都会更新
      for (let i = 0; i < this.divs.length; i++) {
        //判断滚到哪个块就让哪个块对应的索引左侧的同步滑动
        if (this.divs[i].offsetTop - scollTop <= 100) {
          //当某个块的top值减去滚动的值大于等于某个值即可进入判断
          a = i;
        }
      }
      //最后将得到的数据同步到vuex
      this.$store.commit("nav/discoloration2", String(a));
    },
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.u1 {
  width: 150px;
  position: fixed;
  top: 270px;
  border: 1px solid;
  border-radius: 10px;
  right: calc(50% + 700px);
  li {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    list-style: none !important;
    cursor: pointer;
  }
}

.u2 {
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-between;
  li {
    width: 20%;
    margin: 10px;
    border: 1px solid;
    position: relative;
    img {
      width: 100%;
    }
    p {
      padding: 10px 10px;
    }
    p > span:nth-child(2) {
      margin-left: 110px;
    }
  }
}
.sc {
  width: 100%;
  height: 50px;
  background-color: #ccc;
  text-align: center;
  line-height: 50px;
}
.ej {
  width: 130px;
  margin: 0 auto;
}
.color {
  color: purple;
  border-left: 10px solid purple;
}
</style>

```
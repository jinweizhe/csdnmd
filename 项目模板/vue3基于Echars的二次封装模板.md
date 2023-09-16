## 在src下创建MyEchars/Myechars.vue,放入以下内容
```js
<script setup>
import {
  ref,
  reactive,
  defineProps,
  watchEffect,
  onMounted,
  nextTick,
} from "vue";
import * as echarts from "echarts";
const props = defineProps({
  className: { type: String, default: "chart" },
  id: { type: String, default: "chart" },
  width: { type: String, default: '100%' },
  height: { type: String, default: '200px' },
  options: { type: Object, default: () => {} },
});

const chart = ref(null);
watchEffect(() => {
  // console.log("props.options");
  let arr = props.options;
  nextTick(() => {
    if (props.options.series[0].data) {
      chart.value.setOption(props.options, true);
    }
  });
});

const initChart = () => {
  chart.value = echarts.init(document.getElementById(props.id));
  chart.value.setOption(props.options, true);
  window.addEventListener("resize", chart.value.resize);
};

onMounted(() => {
  initChart();
});
</script>

<template>
  <div
    class=""
    :id="id"
    :class="className"
    :style="{ height: height, width: width }"
  ></div>
</template>

<style scoped lang="scss"></style>
```
## 使用方式
```js
<script setup>
import mycharts from "../myvue/MyCharts.vue";
import { ref, reactive, onMounted, watch } from "vue";
const ids = "pageone";
const count = ref({});
let arr;
//获取随机数
const data = () => {
  arr = [];
  for (let a = 0; a < 7; a++) {
    arr.push(Math.round(Math.random() * 1400));
  }

  count.value = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [...arr],
        type: "line",
        smooth: true,
      },
    ],
  };
};

const updatadata = () => {
  data();
};

onMounted(() => {
  data();
});
</script>

<template>
  <div>
    <button @click="updatadata">点击更换数据</button>
    <mycharts
      :options="count"
      :id="ids"
      :width="'400px'"
      :height="'400px'"
    ></mycharts>
  </div>
</template>

<style scoped lang="scss"></style>
```
#### 效果图(点击一次更换一次随机数据)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f601d5b2be4546f593b31af635fbc5a1.png)
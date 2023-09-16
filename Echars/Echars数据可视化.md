@[toc]
# 数据可视化是什么？

有句话说得好——“一图胜千言”，放到数据领域就是说，对于复杂难懂且体量庞大的数据而言，图表的信息量要大得多，这也是我们为什么要谈数据可视化。

顾名思义，数据可视化就是将数据转换成图或表等，以一种更直观的方式展现和呈现数据。通过“可视化”的方式，我们看不懂的数据通过图形化的手段进行有效地表达，准确高效、简洁全面地传递某种信息，甚至我们帮助发现某种规律和特征，挖掘数据背后的价值。

简单一句话就是把冷冰冰的数据转化为直观的图形，揭示蕴含在数据中的规律额道理。

## 数据可视化常用技术：

- D3.js   目前 Web 端评价最高的 Javascript 可视化工具库(入手难)  
- ECharts.js   百度出品的一个开源 Javascript 数据可视化库   
- Highcharts.js  国外的前端数据可视化库，非商用免费，被许多国外大公司所使用  
- AntV  蚂蚁金服全新一代数据可视化解决方案
- mapV  百度的数据可视化解决方案
- Highcharts 和 Echarts 就像是 Office 和 WPS 的关系

# Echarts-介绍

## 介绍

ECharts是一款基于[JavaScript](https://baike.baidu.com/item/JavaScript/321142)的[数据可视化](https://baike.baidu.com/item/数据可视化/1252367)图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。ECharts最初由[百度](https://baike.baidu.com/item/百度/6699)团队开源，并于2018年初捐赠给[Apache](https://baike.baidu.com/item/Apache/6265)基金会

## 功能

ECharts 提供了常规的折线图、柱状图、散点图、饼图、K线图，用于统计的盒形图，用于地理数据可视化的地图、热力图、线图，用于关系数据可视化的关系图、treemap、旭日图，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭

## 运行环境

ECharts可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 [ZRender](https://github.com/ecomfe/zrender)，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

ECharts官网地址：https://echarts.apache.org/zh/index.html

## echarts常用组件

- series 系列表
- xAxis x轴
- yAxis y轴
- grid 网格配置
- tooltip 坐标轴指示器
- toolbox  工具箱组件
- legend 图列组件
- title  图标标题
- color 系列颜色
- ...

# Echarts-体验

## 五分钟上手教程

官方教程：[五分钟上手ECharts](https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts)

- 下载echarts:  https://github.com/apache/echarts/blob/5.1.2/dist/echarts.min.js
- 从CDN下载：https://cdn.bootcdn.net/ajax/libs/echarts/5.1.2/echarts.min.js

使用步骤：

1. 引入echarts 插件文件到html页面中

```html
<script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.0.1/echarts.min.js"></script>
```

  2.准备一个具备大小的DOM容器**一定要有宽高**

```html
<div id="main" style="width: 600px;height:400px;"></div>
```

3.  初始化echarts实例对象

```js
var myChart = echarts.init(document.getElementById('main'));
```

4. 指定配置项和数据(option)

```js
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
```

5. 将配置项设置给echarts实例对象

```js
myChart.setOption(option);
```

## Echarts-基础配置

这是要求同学们知道以下配置每个模块的主要作用干什么的就可以了

> 需要了解的主要配置：`series` `xAxis` `yAxis` `grid` `tooltip` `title` `legend` `color` 

- series
  - 系列列表。每个系列通过 `type` 决定自己的图表类型
  - 大白话：图标数据，指定什么类型的图标，可以多个图表重叠。
- xAxis：直角坐标系 grid 中的 x 轴
  - boundaryGap: 坐标轴两边留白策略 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
- yAxis：直角坐标系 grid 中的 y 轴
- grid：直角坐标系内绘图网格。 
- title：标题组件
- tooltip：提示框组件
- legend：图例组件
- color：调色盘颜色列表
  数据堆叠，同个类目轴上系列配置相同的`stack`值后 后一个系列的值会在前一个系列的值上相加。

~~~javascript
option = {
  // 标题组件
  title: {
    text: '折线图堆叠'
  },
  // 提示框组件
  tooltip: {
    show:true,
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
  },
  // 图例组件，展现了不同系列的标记、颜色和名字
  legend: {
    // series里面有了 name值则 legend里面的data可以删掉
    // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  // 工具箱组件
  toolbox: {
    feature: {// 各工具配置项
      saveAsImage: {// 保存为图片
        type: 'png',//保存的图片格式
      }
    }
  },
  // 网格配置：
  grid: {
    top: '20%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    containLabel: true,//网格区域是否显示坐标轴的刻度标签
  },
  // x轴相关配置
  xAxis: {
    type: 'category' ,//坐标轴的类目
    boundaryGap: false,//是否让我们的线条和坐标轴有缝隙
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  // y轴相关配置
  yAxis: {
    type: 'value',//坐标轴的数值
  },
  // 系列列表。每个系列通过 type 决定显示哪种类型的的图表
  series: [
    {
      name: '邮件营销',
      type: 'line',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'line',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '直接访问',
      type: 'line',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '搜索引擎',
      type: 'line',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ],
  // 设置系列中每一个图标的颜色，默认为['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
  // color:['red','blue'],
};

~~~


## 让图表跟随屏幕自适应

使用flexible.js，设置div#main宽高单位为rem 或者使用vw和vh设置宽高的百分比

```css
#main {
    width: 12.5rem;
    height: 7.5rem;
    background-color: lightblue;
}
```

~~~javascript
window.addEventListener("resize", function() {
  myChart.resize();
});
~~~

# Echarts基础实例

- 第一步：
  官网找到类似实例， 适当分析，并且引入到HTML页面中
- 第二步：
  根据需求定制图表

## 柱状图-竖向

<img src="https://s2.loli.net/2022/03/13/oV9aKk7ycDfIQzS.png" style="zoom:80%;" />

### 第一步：引入到html页面中

~~~javascript
// 实例化对象
let myChart = echarts.init(document.getElementById("main"));
// 指定配置和数据
let option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};

// 把配置给实例对象
myChart.setOption(option);
~~~

### 第二步：根据需求定制

- 修改图表柱形颜色  #2f89cf

  ```javascript
  color: ["#2f89cf"],
  ```

- 修改图表大小 网格    grid决定我们的柱状图的大小

  ```JavaScript
  grid: {
      left: "10%",
      top: "10px",
      right: "10%",
      bottom: "4%",
      containLabel: true
  },
  ```

- X轴相关设置 xAxis

  - axisLine 坐标轴轴线相关设置

  ```javascript
  axisLine: {
      show: false,//是否显示坐标轴轴线。
      // 如果想要设置单独的线条样式 
      // show: true,
      // lineStyle: {
      //    color: "rgba(0,0,255,.1)",
      //    width: 1,
      //    type: "solid"
      //  }
  }
  ```

  -  axisTick标轴刻度相关设置。

  ```javascript
  axisTick: {
      alignWithLabel: true,//刻度线是否居中显示
  },
  ```

  - axisLabel 坐标轴刻度标签的相关设置

  ```javascript
  axisLabel: {
      color: "rgba(0,0,0,.6)",//文本颜色
      fontSize: "12",//文本大小
  },
  ```

- Y 轴相关定制 yAxis

  -  axisTick标轴刻度相关设置。

  ```javascript
  axisTick: {
      alignWithLabel: true,//刻度线是否居中显示
  },
  ```

  - axisLabel 坐标轴刻度标签的相关设置

  ```javascript
  axisLabel: {
      color: "rgba(0,0,0,.6)",//文本颜色
      fontSize: "12",//文本大小
  },
  ```

  - axisLine 坐标轴轴线相关设置

  ```javascript
  axisLine: {
    lineStyle: {
        color: "rgba(0,0,0,.1)",
        width: 2,
        type: "solid"
    }
  }
  ```

  - splitLine 坐标轴在网格区域中的分隔线。 

  ```javascript
  splitLine: {
    lineStyle: {
      color: "rgba(255,255,255,.5)"
    }
  }
  ```

  - 修改柱形为圆角以及柱子宽度  series 里面设置

  ~~~JavaScript
  series: [
    {
      name: "直接访问",
      type: "bar",
      // 修改柱子宽度
      barWidth: "35%",
      data: [10, 52, 200, 334, 390, 330, 220],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }
  ]
  ~~~

   - 更换对应数据

   ~~~JavaScript
  // x轴中更换data数据
   data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
  // series 更换数据
   data: [200, 300, 300, 900, 1500, 1200, 600],
   ~~~



## 柱状图-横向

<img src="https://s2.loli.net/2022/03/13/uSIt5o9jD4E8Mi7.png" style="zoom:60%;" />

~~~javascript
var myChart = echarts.init(document.getElementById("main"));
var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
var option = {
  yAxis: [
    {
      type: "category",
      inverse: true,//反向坐标轴
      data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
    },
    {
      type: "category",
      data: [702, 350, 610, 793, 664],
    },
  ],
  series: [
    {
      name: "2011年",
    },
    {
      name: "2012年",
    },
  ],
};
myChart.setOption(option);
window.addEventListener("resize", myChart.resize);
~~~

## 折线图1 

<img src="https://s2.loli.net/2022/03/13/LcgPvGreRl1MyJ5.png" style="zoom:50%;" />

~~~javascript
var myData = [
  {
    year: "2020", // 年份
    data: [
      // 两个数组是因为有两条线
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
  },
  {
    year: "2021",
    data: [
      [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
      [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
    ],
  },
];
var myChart = echarts.init(document.getElementById("main"));
var option = {
  color: ["#00f2f1", "#ed3f35"],
  grid: {
  },
  toolbox: {
  },
  xAxis: {
    type: "category",
    data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月",],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: '新增粉丝',
      type: "line",
      data: myData[0].data[0],
      smooth: true,//平滑曲线
    },
    {
      name: '新增游客',
      type: "line",
      data: myData[0].data[1],
      smooth: true,//平滑曲线
    },
  ],
};
myChart.setOption(option);
window.addEventListener("resize", myChart.resize);

$(".btn").click(function () {
  var obj = myData[$(this).index()];
  option.series[0].data = obj.data[0];
  option.series[1].data = obj.data[1];
  // 需要重新渲染
  myChart.setOption(option);
});

~~~

## 折线图2

<img src="https://s2.loli.net/2022/03/13/iBCfhOLw7Jsg1l8.png" style="zoom:60%;" />

```javascript
var myChart = echarts.init(document.getElementById("main"));
var option = {
  title: {
    text: "堆叠区域图",
  },
  tooltip: {
  },
  toolbox: {
  },
  legend: {
  },
  grid: {
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "邮件营销",
      type: "line",
      smooth: true,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(128, 255, 165)'
        }, {
            offset: 1,
            color: 'rgba(1, 191, 236)'
        }])
      },
      emphasis: {
        focus: "series",
      },
      data: [30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,30,60,20,40,30,40,30,40,30,40,20,60,50,40],
    },
    {
      name: "联盟广告",
      type: "line",
      smooth: true,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 221, 255)'
        }, {
            offset: 1,
            color: 'rgba(77, 119, 255)'
        }])
      },
      emphasis: {
        focus: "series",
      },
      data: [130,10,20,40,30,40,80,60,20,40,90,40,20,140,30,40,130,20,20,40,80,70,30,40,30,120,20,99,50,20],
    },
  ],
};
myChart.setOption(option);
window.addEventListener("resize", myChart.resize);
```

## 饼图1

<img src="https://s2.loli.net/2022/03/13/ZeMud6oD5tLCn8A.png" style="zoom:60%;" />

```javascript
var myChart = echarts.init(document.getElementById("main"));
var option = {
  tooltip: {
    trigger: "item",
  },
  toolbox: {
    feature: {
      saveAsImage: {
        type: "png",
      },
    },
  },
  legend: {
  },
  series: [
    {
      name: "年龄分布",
      type: "pie",
      // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
      center: ['50%', '50%'] ,
      // 数组的第一项是内半径，第二项是外半径
      radius: ["30%", "60%"],
      data: [
        { value: 1, name: "0岁以下" },
        { value: 4, name: "20-29岁" },
        { value: 2, name: "30-39岁" },
        { value: 2, name: "40-49岁" },
        { value: 1, name: "50岁以上" }
      ],
    },
  ],
};
myChart.setOption(option);
window.addEventListener("resize", myChart.resize);
```

## 饼图2

<img src="https://s2.loli.net/2022/03/13/xIhwQA4MYeo5f9y.png" style="zoom:80%;" />

```javascript
var myChart = echarts.init(document.getElementById("main"));
var option = {
  legend: {
    bottom: "5%",
    itemWidth: 20,
    itemHeight: 20,
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: "地区分布",
      type: "pie",
      radius: ['20%', '70%'],
      center: ["50%", "50%"],
      data: [
        { value: 20, name: "云南" },
        { value: 26, name: "北京" },
        { value: 24, name: "山东" },
        { value: 25, name: "河北" },
        { value: 20, name: "江苏" },
        { value: 25, name: "浙江" },
        { value: 30, name: "四川" },
        { value: 42, name: "湖北" }
      ],
    },
  ],
};
myChart.setOption(option);
window.addEventListener("resize", myChart.resize);

```

# Echarts实际开发中的应用 

做过基于echarts图表开发的小伙伴可能都有一种感觉，就是看文档或案例感觉啥都能做，但是看到UI妹子给过的图之后，瞬间感觉，这是什么鬼，案例上没有这种样子的啊，这就是理想和现实的差距。。。。在做过很多echarts图表开发之后，我个人感觉，对于基于echarts的开发一般都会经过几步：

- 拿到需求
- 分析需求
- 寻找案例
- 复制粘贴
- 变成自己的

简单来说，其实是一个复制粘贴+不断查API修改代码的过程，这个过程看似无脑复制，其实也是有些技巧的。

## 拿到需求

- 实现一个柱形占比图

<img src="https://s2.loli.net/2022/03/13/HA2CTjlE8x9DFIt.jpg" alt="img" style="zoom: 25%;" />

## 分析需求

- 其实这就是一种柱形图，首先明确我们可能需要柱形图的变换来搞定。我们其实用echarts来实现柱形图的话，其实非常简单的，但是分析一下我们拿到的这个需求，大致分析其主要特殊性有以下三点：

- - 首先他是一个水平方向的柱形图，他不光是要实现柱形图，而且这个柱形图还有个背景条
  - 其次数字都是标注在背景条的最右边的，同时每个柱形的维度名称标注在柱形上面
  - 最后，柱形图前三名的颜色要跟后面的有所区分

## 寻找案例

这步一般根据之前的需求信息和脑中形成解决问题的技术方向去寻找对应的**现成的案例**。当然，如果你对echarts使用非常熟悉，而且拿到需求之后，对解决方案已经了然于胸，那么可以直接跳过这步，开撸就对了。

去找案例，一般从三个方式入手：

1. echarts官方的案例：https://echarts.apache.org/examples/zh/index.html
2. 民间各路好人开源的demo网站 Make A  Pie：https://www.makeapie.com/explore.html
3. 搜索引擎，各种百度和Google搜索，这种技能其实无需多说，大部分人都会了。。。

针对第2种，其实如果你去看了其中的网站之后，你会发现，上面收录了很多很多江湖大侠们实现的一些小demo，而这些小demo，其实大多跟实际项目开发中遇到的各种图表需求相关，而别人解决过的问题，或许就是你现在需要的，而这，才是最重要的。

所以，在找案例这件事上，我的建议就是：优先去 [Make A  Pie](https://echarts.apache.org/examples/zh/index.html) 里面逛逛，说不定有惊喜握。。。

对照上面的这个需求来说，我进入上面的网站之后，随便都能找到类似的demo，可以参照：https://www.makeapie.com/editor.html?c=xNls2uxD-7

所以，到此，还有什么可说的呢？如果要把上面三种找案例的方式效率做一个排名，我觉得应该是这样的：2>1>3

**对此的总结就是：找一个合适的案例，然后直接ctrl+c过来修改，它不香么？**



Make A Pie 是由社区贡献者维护的用于 Apache ECharts 作品分享的第三方非官方社区。平时做Echarts图表经常需要用到，近期官方已经关闭，找到以下几个可替代的网站。（Make A Pie替代网址）
1、http://analysis.datains.cn/finance-admin/#/chartLib/all
2、makeapie 复刻站点1：http://ppchart.com/
3、Make A Pie复刻站点2：http://www.isqqw.com/ 备用地址http://echarts.isqqw.com/
4、Make A Pie复刻站点3： http://pie.antcode.net

## 复制粘贴

其实经过上面的步骤，找到案例之后，我想只要是个正常的人，应该都会想要copy。。。所以，这儿只说一点建议: 最好能基于原来的demo，直接修改代码，因为所见即所得，到基本符合你的需要之后，再把代码copy走，这样会好一点。

## 变成自己的

找到案例之后，修改到自己想要的效果，这一步可以看做是把别人的代码变成自己的了（看起来像是抄袭的感觉，谁说又不是呢？）

## 总结

- 基于echarts的开发找到合适的案例非常关键
- 找到demo之后基于文档的api进行修改，可以达到自己想要的效果
- 想要修炼出深厚的内功，熟悉API文档是非常关键的

## Echarts map使用

参考make a pie的例子：https://www.makeapie.com/editor.html?c=xBkrP1lbqG  (模拟飞机航线)

实现步骤：

- 第一需要下载china.js提供中国地图的js文件: https://www.makeapie.com/dep/echarts/map/js/china.js
- 复制make a pie 提供的配置到自己的项目中
- 修改相关数据

# 最后的大招

  图说：https://tushuo.baidu.com/
  实现零编程玩转图表，让数据可视化编程更容易！
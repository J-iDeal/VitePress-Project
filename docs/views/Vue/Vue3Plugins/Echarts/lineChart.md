# 简易折线图

[echarts官网](https://echarts.apache.org/examples/zh/index.html)

![效果图](/public/images/vue/折线图示意图.png)

1. 安装`echarts`

```
pnpm install echarts;
```

2. 页面中使用

```
<template>
  <div id="myEcharts" class="myEcharts"></div>
</template>

<script setup>
import {
  onMounted,
  onUnmounted
} from 'vue';

import * as echarts from "echarts";

let echart = echarts;

// 基础配置一下Echarts
function initChart() {
  let chart = echart.init(document.getElementById("myEcharts"), "dark");
  // 把配置和数据放这里
  chart.setOption({
    xAxis: {
      type: "category",
      data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ]
    },
    tooltip: {
      trigger: "axis"
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320,
          801,
          102,
          230,
          4321,
          4129
        ],
        type: "line",
        smooth: true, // 线条平滑
      }
    ]
  });
  window.onresize = function () {
    //自适应大小
    chart.resize();
  };
}

onMounted(() => {
  initChart();
});

</script>

<style>
.myEcharts {
  width: 500px;
  height: 500px;
}
</style>
```

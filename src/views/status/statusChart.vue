<style lang="scss">
</style>
<template lang="pug">
div( style='{width: 500px;}')#app
  div(ref="main" style="width: 500px; height:500px;")
  HR(style="FILTER: alpha(opacity=10,finishopacity=0,style=3);" width="100%" size="2")
</template>
<script>
import "@/js/walden";
export default {
  props: ["status_msg"],
  data: function() {
    return {
      success: 0,
      fail: 0,
      timeout: 0,
      memoryout: 0,
      others: 0
    };
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例

      let statusChart = this.$echarts.init(
        // document.getElementById("main"),
        this.$refs.main,
        "walden"
      );
      window.onresize = function() {
        statusChart.resize();
      };
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["AC", "fail", "time out", "memory out", "others"]
        },
        series: [
          {
            name: "data",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: this.success, name: "AC" },
              { value: this.fail, name: "fail" },
              { value: this.timeout, name: "time out" },
              { value: this.memoryout, name: "memory out" },
              { value: this.others, name: "others" }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      statusChart.setOption(option);
    }
  },
  created() {
    this.success = this.status_msg.success;
    this.fail = this.status_msg.fail;
    this.timeout = this.status_msg.timeout;
    this.memoryout = this.status_msg.memoryout;
    this.others = this.status_msg.others;
  },
  mounted() {
    this.drawChart();
  }
};
</script>

<style lang="scss">
#statistics {
  text-align: center;
}

#font_solved {
  font-size: 10px;
  color: #20c8ff;
  div {
    font-size: 16px;
    font-weight: bolder;
  }
  p {
    padding: 0;
  }
}

#font_attempted {
  font-size: 10px;
  color: #ff831d;
}

#font_attempted div {
  font-size: 16px;
  font-weight: bolder;
}
</style>
<template lang="pug">
  div#app
    div(style="width: 100%;height:200px;")#main
    HR(style="FILTER: alpha(opacity=10,finishopacity=0,style=3);" width="100%" size="2")
    Row#statistics
      Col(span="12")#font_solved 
        div {{solved}}/{{todo}}
        p Solved
      Col(span="12")#font_attempted 
        div {{attempted}}/{{todo}}
        p Attempted
</template>
<script>
import "@/js/walden";
export default {
  data: function() {
    return {
      solved: 100,
      attempted: 500
    };
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(
        document.getElementById("main"),
        "walden"
      );
      window.onresize = function() {
        myChart.resize();
      };
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          left: "center",
          data: ["Solved", "Attempted"]
        },
        series: [
          {
            name: "oj",
            type: "pie",
            radius: "60%",
            center: ["50%", "60%"],
            label: {
              show: false
            },
            data: [
              { value: this.solved, name: "Solved" },
              { value: this.attempted, name: "Attempted" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
        // color: []
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  },
  computed: {
    // 计算属性的 getter
    todo: function() {
      // `this` 指向 vm 实例
      return this.attempted + this.solved;
      console.log(this.todo);
    }
  }
};
</script>

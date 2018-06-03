<template>
    <div id="container" style="height: 100%"></div>
</template>
<script>
import echarts from 'echarts'
export default {
    name:'graph3',
    data(){
        return{
            option : {
      color: ['#bfc2cc'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
      {
        type : 'category',
        data : ['20180301', '20180302', '20180303', '20180304', '20180305', '20180306', '20180307','20180308','20180309','20180310'],
        axisTick: {
          alignWithLabel: true
        }
      }
      ],
      yAxis : [
      {
        type : 'value'
      }
      ],
      series : [
      {
        name:'访问人数',
        type:'bar',
        barWidth: '60%',
        data:[1205, 3232, 2500, 1424, 3256, 2485, 1476,2340,2876,1477]
      }
      ]
  }
        }
    },
    methods:{
        init:function(){
            var dom = document.getElementById("container");
            var myCharts = echarts.init(dom);
            if (this.option && typeof this.option === "object") {
            myCharts.setOption(this.option, true);
            }
        }
    },
    mounted(){
        this.init();
    }
}
</script>

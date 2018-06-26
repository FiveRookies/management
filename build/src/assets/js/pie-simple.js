function initpie(){
    var dom1 = document.getElementById("container1");
    var myChart = echarts.init(dom1,'macarons');
    var app = {};
    var option = null;
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['大数据','纳斯达克','区块链','数字货币','机器学习']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'大数据'},
                    {value:310, name:'纳斯达克'},
                    {value:234, name:'区块链'},
                    {value:135, name:'数字货币'},
                    {value:1548, name:'机器学习'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
};

export default {
    initpie
}
function initgra() {
    var dom3 = document.getElementById("container3");
    var myChart = echarts.init(dom3, 'macarons');
    var app = {};
    var option = null;
    myChart.showLoading();
    $.getJSON('/static/json/npmdepgraph.min10.json', function (json) {
        myChart.hideLoading();
        myChart.setOption(option = {
            title: {
                text: '',
                textStyle: {
                    color: '#000',
                    fontWeight: 'bolder',
                    fontSize: '20'
                }
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    // progressiveThreshold: 700,
                    data: json.nodes.map(function (node) {
                        return {
                            x: node.x,
                            y: node.y,
                            id: node.id,
                            name: node.label,
                            symbolSize: node.size,
                            itemStyle: {
                                normal: {
                                    color: node.color
                                }
                            }
                        };
                    }),
                    edges: json.edges.map(function (edge) {
                        return {
                            source: edge.sourceID,
                            target: edge.targetID
                        };
                    }),
                    label: {
                        emphasis: {
                            position: 'right',
                            show: true
                        }
                    },
                    roam: true,
                    focusNodeAdjacency: true,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.3,
                            opacity: 0.7
                        }
                    }
                }
            ]
        }, true);
    });;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }


    myChart.on('click', function (params) {
        var div = window.parent.document.getElementById('insideIframe');
        console.log(div);
        div.src = "readContent.html"
        // div.children[0].src = "outlink/radar_third.html";
    });
};

export default {initgra}
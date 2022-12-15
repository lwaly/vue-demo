<template>
    <div class="bar-chart">
        <div id="main" ref="main"></div>
    </div>
</template>

<script>
/* 引入echarts组件 */

import * as echarts from "echarts";

export default {
    name: "BarChart",

    mounted() {
        // 基于准备好的dom，初始化echarts实例

        /* var myChart = echarts.init(document.getElementById('main')); */

        var myChart = echarts.init(this.$refs.main);

        // 绘制图表

        myChart.setOption({
            title: {
                text: "柱状图",
            },

            tooltip: {},

            xAxis: {
                axisLabel: {
                    /* 显示所有的x轴的数据 */

                    interval: 0,

                    /* 放不下的倾斜角度 */

                    rotate: 80,

                    /* 数据距离刻度线的距离 */

                    margin: 15,
                },

                /* data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] */
            },

            yAxis: {},

            series: [
                {
                    name: "销量",

                    type: "bar",

                    /* data: [5, 20, 36, 10, 10, 20] */

                    data: [
                        {
                            value: 5,

                            name: "衬衫",

                            /* 给某一柱子单独设置颜色 */

                            itemStyle: {
                                color: {
                                    type: "linear",

                                    x: 0,

                                    y: 0,

                                    x2: 0,

                                    y2: 1,

                                    colorStops: [
                                        {
                                            offset: 0,

                                            color: "red", //柱子最上面是红色
                                        },
                                        {
                                            offset: 1,

                                            color: "blue", //柱子最下面颜色蓝色
                                        },
                                    ],

                                    global: false,
                                },
                            },
                        },

                        {
                            value: 36,

                            name: "雪纺衫",

                            itemStyle: {
                                color: {
                                    type: "linear",

                                    x: 0,

                                    y: 0,

                                    x2: 0,

                                    y2: 1,

                                    colorStops: [
                                        {
                                            offset: 0,

                                            color: "pink", //柱子最上面是粉色
                                        },
                                        {
                                            offset: 1,

                                            color: "yellow", //柱子最下面颜色黄色
                                        },
                                    ],

                                    global: false,
                                },
                            },
                        },
                        {
                            value: 10,

                            name: "裤子",
                        },
                        {
                            value: 10,

                            name: "高跟鞋",
                        },
                        {
                            value: 20,

                            name: "袜子",
                        },
                    ],
                },
            ],
        });

        window.BarChart = myChart;
    },
};
</script>

<style scoped lang="scss">
#main {
    height: 300px;
}
</style>
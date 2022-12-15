<template>
    <div class="test">
        <div class="content">
            <!-- v-for 遍历父级div-->
            <div class="main" v-for="(item, index) in title" :key="index">
                <!--自定义宽高的dom，用于放置图表-->
                <div class="bar"></div>
            </div>
        </div>
    </div>
</template>
 
<script>
import * as echarts from "echarts";
export default {
    name: "test",
    data() {
        return {
            title: [
                "测试柱图1",
                "测试柱图2",
                "测试柱图3",
                "测试柱图4",
                "测试柱图5",
            ], //标题列表
            color: ["#5B8FF9", "#ca2df5", "#42CE92", "#f96950", "#047ff5"], //颜色列表
            value: [66, 90, 45, 12, 70], //数据（x轴的大小）
        };
    },
    methods: {
        // 方法：绘制柱状图
        draw_Bar() {
            var myEchart = document.getElementsByClassName("bar"); //获取类名
            //此处for循环多次初始化 echarts 实例
            for (var i = 0; i < myEchart.length; i++) {
                var myChart = echarts.init(myEchart[i]); //初始化echarts实例要在for循环内
                const builderJson = {
                    all: 100,
                    charts: {
                        map: this.value[i],
                    },
                };
                let option = {
                    title: {
                        text: this.title[i],
                        subtext: "总计 " + builderJson.all,
                        left: "170",
                        top: "50",
                        textAlign: "center",
                    },
                    grid: {
                        // 水平垂直居中
                        top: 140,
                        left: "center",
                        width: 310,
                        height: 20,
                        // grid 区域不包含坐标轴的刻度标签
                        containLabel: false,
                    },
                    // x轴y轴不显示
                    xAxis: [
                        {
                            type: "value",
                            max: builderJson.all,
                            show: false,
                        },
                    ],
                    yAxis: [
                        {
                            type: "category",
                            show: false,
                        },
                    ],
                    series: [
                        // 蓝色条
                        {
                            type: "bar",
                            // 数据堆叠，设置相同的chart值便可堆叠放置
                            stack: "chart",
                            color: this.color[i],
                            z: 3,
                            // 数据标签
                            label: {
                                position: "right",
                                show: true,
                            },
                            data: Object.keys(builderJson.charts).map(function (
                                key
                            ) {
                                return builderJson.charts[key];
                            }),
                        },
                        // 灰色条
                        {
                            type: "bar",
                            // 数据堆叠，设置相同的chart值便可堆叠放置
                            stack: "chart",
                            silent: true,
                            itemStyle: {
                                color: "#eee",
                            },
                            data: Object.keys(builderJson.charts).map(function (
                                key
                            ) {
                                return (
                                    builderJson.all - builderJson.charts[key]
                                );
                            }),
                        },
                    ],
                };
                //使用刚指定的配置项和数据显示图表
                myChart.setOption(option);
            }
        },
    },
    mounted() {
        //调用绘制柱状图的方法
        this.draw_Bar();
    },
};
</script>
 
<style scoped>
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.main {
    width: 350px;
    margin: 30px 0;
    height: 200px;
    margin-left: 70px;
    background-color: #ffffff;
}

.main .bar {
    width: 100%;
    height: 100%;
}
</style>
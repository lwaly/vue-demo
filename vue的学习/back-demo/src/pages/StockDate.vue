<template>
    <div>
        <h2>vue中插入Echarts示例</h2>
        <el-row
            ><el-col :lg="6" :xs="24" class="lightgreen-box">
                <el-button @click="changeChart">默认按钮</el-button>
                <el-select v-model="value_type" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
                <el-date-picker
                    v-model="value_date"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    value-format="timestamp"
                >
                </el-date-picker>
            </el-col>
        </el-row>
        <div style="width: 100%" id="chart_example"></div>
    </div>
</template>


<script>
import * as echarts from "echarts";
import api from "@/api/api";

export default {
    data() {
        return {
            value_date: "",
            options: [
                {
                    value: 1,
                    label: "按月统计",
                },
                {
                    value: 2,
                    label: "按年统计",
                },
                {
                    value: 3,
                    label: "翻倍倍数",
                },
                {
                    value: 4,
                    label: "横盘天数",
                },
                {
                    value: 5,
                    label: "持股天数",
                },
                {
                    value: 6,
                    label: "X轴翻倍倍数",
                },
                {
                    value: 7,
                    label: "X轴横盘天数",
                },
                {
                    value: 8,
                    label: "X轴持股天数",
                },
            ],
            value_type: 1,
        };
    },
    mounted() {},
    methods: {
        changeChart() {
            let this_ = this;
            let myChart = echarts.init(
                document.getElementById("chart_example")
            );
            let option = {
                color: ["#f44"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                    },
                },
                xAxis: [
                    {
                        type: "category",
                        data: [],
                        axisTick: {
                            alignWithLabel: true,
                        },
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                    },
                ],
                series: [
                    {
                        name: "涨幅度",
                        type: "line",
                        barWidth: "100%",
                        data: [],
                    },
                ],
            };
            console.log(this.value_type, this.value_date[0]);
            api.postJSON("/VolDate", {
                dtype: this.value_type,
                timebegin: this.value_date[0] / 1000,
                timeend: this.value_date[1] / 1000,
            }).then((res) => {
                console.log(res.data.data.date.length, res);
                var i;
                if (1 == this.value_type || 2 == this.value_type) {
                    for (i = 0; i < res.data.data.date.length; i++) {
                        option.xAxis[0].data[option.xAxis[0].data.length] =
                            res.data.data.date[i].parm1;
                        option.series[0].data[option.series[0].data.length] =
                            res.data.data.date[i].parm2;
                    }
                } else if (
                    3 == this.value_type ||
                    4 == this.value_type ||
                    5 == this.value_type
                ) {
                    for (i = 0; i < res.data.data.date.length; i++) {
                        option.xAxis[0].data[option.xAxis[0].data.length] =
                            res.data.data.date[i].key1;
                        option.series[0].data[option.series[0].data.length] =
                            res.data.data.date[i].parm1;
                    }
                } else if (
                    6 == this.value_type ||
                    7 == this.value_type ||
                    8 == this.value_type
                ) {
                    for (i = 0; i < res.data.data.date.length; i++) {
                        option.xAxis[0].data[option.xAxis[0].data.length] =
                            res.data.data.date[i].key1;
                        option.series[0].data[option.series[0].data.length] =
                            res.data.data.date[i].parm1;
                    }
                }

                console.log("option 1");
                console.log(option);
                console.log("option 2");
                myChart.setOption(option);
                //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            });
        },
    },
    watch: {},
    created() {},
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    text-align: center;
    padding: 30px;
    font-size: 18px;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
}
#chart_example {
    width: 50%;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
}
</style>
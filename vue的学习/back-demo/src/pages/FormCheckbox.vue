<template>
    <div class="hidden_hello">
        <div v-for="index of 20" :key="index">
            <el-switch
                style="
                        margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="按月付费"
                inactive-text="按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div>
            <el-switch
                style="
                        margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="1按月付费"
                inactive-text="1按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div>
            <el-switch
                style="
                        margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="2按月付费"
                inactive-text="2按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div>
            <el-switch
                style="
                        margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="3按月付费"
                inactive-text="3按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div>
            <el-switch
                style="
                        margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="4按月付费"
                inactive-text="4按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
        <div>
            <el-switch
                style="
                        margin-top: 10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        margin-bottom: 10px;"
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="5按月付费"
                inactive-text="5按年付费"
                @change="handleChange1"
            >
            </el-switch>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value2: true,
        };
    },
    methods: {
        handleChange1(value) {
            console.log(value);
        },
    },
};
</script>

<style scoped>
.sf-button {
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
}

.sidebar-wrapper .el-scrollbar__wrap {
    overflow-x: hidden;
}

.is-horizontal {
    display: none;
}

.hidden_hello {
    height: 100%;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    margin: 10px;
}
</style>
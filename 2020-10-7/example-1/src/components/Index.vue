<template>
    <div id="index" style="height: 100%">
        <el-container style="height: 100%">
            <el-header class="header">
                <Header />
            </el-header>
            <el-container style="height: 100%">
                <el-aside width="200px" style="height: 100%">
                    <Home></Home>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Home from "@/components/Home";
import Header from "@/components/Header";

export default {
    name: "index",
    components: {
        Home: Home,
        Header: Header,
    },
};
</script>

<style>
#index {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.header {
    background-color: #409eff;
    color: #fff;
    line-height: 60px;
}
</style>

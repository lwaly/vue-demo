<template>
    <div id="app">
        <el-container>
            <el-header class="header">
                <Header />
            </el-header>
            <el-container>
                <el-aside width="200px">
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
    name: "App",
    components: {
        Home: Home,
        Header: Header,
    },
};
</script>

<style>
#app {
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

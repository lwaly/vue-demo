<template>
    <div id="app" style="height: 100%">
        <el-header class="header"><vheader /></el-header>
        <el-container style="height: calc( 100% - 60px)">
            <el-aside width="200px" style="height: 100%">
                <navmenu></navmenu>
            </el-aside>
            <el-main>
                <div
                    style="z-index: -1;
                        margin-top: 1px;
                        margin-left: 1px;
                        margin-right: 1px;
                        margin-bottom: 1px;
                        height: calc( 100% - 1px);
                        overflow: hidden;"
                >
                    <router-view></router-view>
                </div>
                <!-- <div style="padding: 20px;z-index:100;"></div> -->
                <div class="el-footer1" style="z-index: 99999">
                    <el-footer style="z-index: 99999"><vBottom /></el-footer>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";

export default {
    name: "app",
    components: {
        navmenu: NavMenu,
        vheader: Header,
        vBottom: Bottom,
    },
};
</script>

<style>
.header {
    background-color: #67c23a;
    color: #fff;
    line-height: 60px;
    text-align: left;
}
.hidden_hello {
    height: calc( 100% - 60px) !important;
    width: 100%;
    background-color: #fff;
    overflow: auto !important;
    margin: 10px;
}
.body_clear {
    clear: both;
}
.el-footer1 {
    background-color: #fff;
    color: rgb(27, 25, 25);
    bottom: 30px;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    height: 60px !important;
    line-height: 60px;
    z-index: 100;
}
.el-main{
    height: 100%;
    position: relative;
}
</style>

<template>
    <div id="app" style="height: 100%">
        <el-header class="header"><vheader /></el-header>
        <el-container style="height: calc(100% - 60px)">
            <el-aside width="200px" style="height: 100%">
                <navmenu></navmenu>
            </el-aside>
            <el-main style="overflow: auto; padding: 0px">
                <div
                    style="
                        z-index: -1;
                        margin-top: 1px;
                        margin-left: 1px;
                        margin-right: 1px;
                        margin-bottom: 1px;
                        overflow: hidden;
                    "
                >
                    <router-view></router-view>
                </div>
                <!-- <div style="padding: 20px;z-index:100;"></div> -->
                <!-- <div class="el-footer1" style="z-index: 99999"> -->
                <!-- <div class="body_clear"></div>  -->
                <el-footer class="el-footer2"><vBottom /></el-footer>
                <!-- </div> -->
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
    height: calc(100% - 60px);
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    margin: 10px;
}
.body_clear {
    clear: both;
}
.el-footer1 {
    background-color: #fff;
    color: rgb(27, 25, 25);
    bottom: 0px;
    position: sticky;
    width: 100%;
    text-align: center;
    height: 60px;
    line-height: 60px;
    z-index: 100;
}

.el-footer2 {
    background-color: #fff;
    color: rgb(27, 25, 25);
    bottom: 0px;
    position: sticky;
    width: 100%;
    text-align: center;
    height: 60px;
    line-height: 60px;
    z-index: 9900;
}

.el-main {
    height: 100%;
    position: relative;
}
</style>

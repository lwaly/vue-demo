<template>
    <div id="app">
        <div>
            <vheader />
        </div>
        <div style="clear: both"></div>
        <div>
            <vheaderNav />
        </div>
        <div style="clear: both"></div>
        <div>
            <vverticalNavFirst />
        </div>
        <div style="clear: both"></div>
        <router-view />
    </div>
</template>

<script>
import Header from "@/components/Header";
import HeaderNav from "@/components/HeaderNav";
import VerticalNavFirst from "@/components/VerticalNavFirst";

export default {
    name: "App",
    components: {
        vheader: Header,
        vheaderNav: HeaderNav,
        vverticalNavFirst: VerticalNavFirst,
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
    margin-top: 0px;
}
</style>

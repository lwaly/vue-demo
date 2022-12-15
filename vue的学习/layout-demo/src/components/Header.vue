<template>
    <div class="header">
        <div class="header_a">
            <a
                class="header_a"
                href="http://www.w3school.com.cn/"
                title="Link text"
            >
                <img style="display: block; width: 100%; height: 100%" border="0" src="../assets/bg.png"
            /></a>
        </div>
        <div class="header2_div">
            <a
                class="header2"
                href="http://www.w3school.com.cn/"
                title="Link text"
            >
                <img class="header2" border="0" src="../assets/bg.png"
            /></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {};
    },
};
</script>

<style>
.header {
    width: 1000px;
    height: 100px;
}

.header_a {
    width: 400px;
    height: 100px;
    float: left;
}

.header2_div {
    width: calc(100% - 400px);
    height: 100px;
    float: left;
}

.header2 {
    width: 100%;
    height: 100px;
    float: left;
}
</style>

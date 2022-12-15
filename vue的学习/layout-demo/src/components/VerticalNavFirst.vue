<template>
    <div id="head-div" class="vertical-nav-first-div-first">
        <div class="vertical-nav-first-div-second">
            <h2>css参考手册</h2>
            <ul class="vertical-nav-first-ul">
                <li
                    id="li-h"
                    @mouseenter="mouseEnter($event.toElement.id)"
                    @mouseleave="mouseLever($event.srcElement.id)"
                    @click="mouseEnter($event)"
                >
                    <a class="vertical-nav-first-a" href="/" title="css 参考手册">css 参考手册</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            background_url: require("../assets/bg.png"),
            isActiveH: false,
            isActiveB: false,
            isActiveS: false,
            activeLi: "li-h",
        };
    },
    computed: {},
    methods: {
        mouseEnter(item) {
            console.log("mousemove");
            console.log(item);
            if ("li-h" == item) {
                console.log("mousemove");
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) 0 -48px no-repeat";
            } else if ("li-b" == item) {
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) -166px -48px no-repeat";
            } else if ("li-s" == item) {
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) -357px -48px no-repeat";
            }
        },
        mouseLever(item) {
            console.log("mouseLever");
            console.log(item, " ", this.activeLi);
            if ("li-h" == item && this.activeLi != item) {
                console.log("mouseLever");
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) 0 0 no-repeat";
            } else if ("li-b" == item && this.activeLi != item) {
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) -166px 0 no-repeat";
            } else if ("li-s" == item && this.activeLi != item) {
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) -357px 0 no-repeat";
            }
        },
        mouseClick(item) {
            console.log("mouseLever");
            console.log(item);
            if ("li-h" == item) {
                console.log("mouseLever");
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) 0 0 no-repeat";
            } else if ("li-b" == item) {
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) -166px 0 no-repeat";
            } else if ("li-s" == item) {
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) -357px 0 no-repeat";
            }
        },
    },
};
</script>

<style>
.vertical-nav-first-div-first {
    float: left;
    margin: 0 0 0 12px;
    padding: 0;
    border: 0;
    width: 180px;
    background: transparent;
}

.vertical-nav-first-div-second {
    float: left;
    margin: 0 0 0 6px;
    padding: 0;
    border: 0;
    width: 180px;
    background: transparent url(/static/1.png) no-repeat;
    padding: 66px 0 10px 0;
}

.vertical-nav-first-ul {
    width: 100px;
    height: 48px;
    float: left;
    list-style: none;
    padding-inline-start: 0px;
    margin: 0px;
}

.vertical-nav-first-a {
    text-decoration: none;
    text-align: center;
}

</style>

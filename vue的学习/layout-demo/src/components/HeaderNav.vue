<template>
    <div id="head-div" class="header-nav">
        <div class="header-nav-a" style="width: 166px">
            <ul class="header-nav-ul" style="width: 166px">
                <li
                    id="li-h"
                    class="header-nav-a"
                    style="
                        width: 166px;
                        left: 0px;
                        position: absolute;
                        background: transparent url(/static/bg.png) 0 0
                            no-repeat;
                    "
                    @mouseenter="mouseEnter($event.toElement.id)"
                    @mouseleave="mouseLever($event.srcElement.id)"
                    @click="mouseEnter($event)"
                >
                    <a
                        class="header-nav-a"
                        href="/"
                        title="Link text1"
                        style="width: 166px"
                    >
                    </a>
                </li>
                <li
                    id="li-b"
                    @mouseenter="mouseEnter($event.toElement.id)"
                    @mouseleave="mouseLever($event.srcElement.id)"
                    @click="mouseEnter($event)"
                    class="header-nav-a"
                    style="width: 191px; left: 166px; position: absolute"
                >
                    <a
                        class="header-nav-a"
                        href="/"
                        title="Link text2"
                        style="width: 191px; left: 166px"
                    >
                    </a>
                </li>
                <li
                    id="li-s"
                    @mouseenter="mouseEnter($event.toElement.id)"
                    @mouseleave="mouseLever($event.srcElement.id)"
                    @click="mouseEnter($event)"
                    class="header-nav-a"
                    style="width: 175px; left: 357px; position: absolute"
                >
                    <a
                        class="header-nav-a"
                        href="/"
                        title="Link text3"
                        style="width: 100%"
                    >
                    </a>
                </li>
                <!-- <li
                    class="header-nav2"
                    style="width: 532px; left: 198px; position: absolute"
                >
                    <a
                        class="header-nav2"
                        href="http://www.w3school.com.cn/"
                        title="Link text4"
                        style="width: 100%"
                    >
                    </a>
                </li>
                <li
                    class="header-nav2"
                    style="width: 1040px; left: 170px; position: absolute"
                >
                    <a
                        class="header-nav2"
                        href="http://www.w3school.com.cn/"
                        title="Link text5"
                        style="width: 100%"
                    >
                    </a>
                </li>
                <li
                    class="header-nav2"
                    style="width: 532px; left: 198px; position: absolute"
                >
                    <a
                        class="header-nav2"
                        href="http://www.w3school.com.cn/"
                        title="Link text6"
                        style="width: 100%"
                    >
                    </a>
                </li> -->
                <!-- <li
                    class="header-nav2"
                    style="width: 532px; left: 198px; position: absolute"
                >
                    <a
                        class="header-nav2"
                        href="http://www.w3school.com.cn/"
                        title="Link text7"
                        style="width: 100%"
                    >
                    </a>
                </li> -->
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
            activeLi:"li-h",
        };
    },
    computed: {
    },
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
            console.log(item," ", this.activeLi);
            if (("li-h" == item) && (this.activeLi != item)) {
                console.log("mouseLever");
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) 0 0 no-repeat";
            } else if (("li-b" == item) && (this.activeLi != item)) {
                document.getElementById(item).style.background =
                    "transparent url(/static/bg.png) -166px 0 no-repeat";
            } else if (("li-s" == item) && (this.activeLi != item)) {
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
.header-nav {
    width: 1210px;
    height: 48px;
    margin: 0 0 0 12px;
    /* background: transparent url(../assets/bg.png) 0 0 no-repeat; */
    /* background-color: rgb(232, 231, 227); */
}

.header-nav-ul {
    width: 100px;
    height: 48px;
    float: left;
    list-style: none;
    padding-inline-start: 0px;
    margin: 0px;
}

.header-nav-a {
    width: 100px;
    height: 48px;
    float: left;
}

.header-nav2-div {
    width: calc(100% - 400px);
    height: 48px;
    float: left;
}

.header-nav2 {
    width: 100%;
    height: 48px;
    float: left;
}
</style>

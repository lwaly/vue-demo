<template>
    <el-row class="tac" style="height: 100%">
        <el-col :span="24" style="height: 100%">
            <el-menu
                default-active="Form"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                unique-opened
                router
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                style="height: 100%"
            >
                <el-submenu
                    v-for="item in menu"
                    :index="item.id"
                    :key="item.id"
                >
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span v-text="item.name"></span>
                    </template>
                    <el-menu-item-group
                        class="over-hide"
                        v-for="sub in item.sub"
                        :key="sub.componentName"
                    >
                        <el-menu-item
                            :index="sub.componentName"
                            v-text="sub.name"
                        ></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import menu from "@/config/menu-config";

export default {
    data() {
        return {
            menu: menu,
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key);
            console.log(keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>
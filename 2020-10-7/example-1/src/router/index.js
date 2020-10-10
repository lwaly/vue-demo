import Vue from "vue";
import Router from "vue-router";

import Login from "@/components/Login";
import Index from "@/components/Index";
import Patch from "@/components/Patch";
import UserList from "@/components/UserList";
import BasicContainer from "@/components/BasicContainer";

Vue.use(Router);
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            showMenu: true,
            redirect: '/index',
            component: Index,
            meta: {
                icon: 'el-icon-location',
            },
            children: [
                {
                    path: '/index',
                    name: '用户管理',
                    component: Patch,
                    showMenu: true,
                    meta: {
                        icon: 'el-icon-remove',
                    },
                    children: [
                        {
                            path: '/userList',
                            name: '用户列表',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-marketing',
                            },
                            component: UserList,
                        }, 
                        {
                          path: '/BasicContainer',
                          name: '用户列表',
                          showMenu: true,
                          meta: {
                              icon: 'el-icon-s-marketing',
                          },
                          component: BasicContainer,
                      },
                    ],
                },
            ],
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            showMenu: false,
        }
    ],
});

export default router;

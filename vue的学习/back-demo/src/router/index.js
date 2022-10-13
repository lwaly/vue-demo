import Vue from "vue";
import Router from "vue-router";
import menus from "@/config/menu-config";

Vue.use(Router);

var routes = [];

menus.forEach(item => {
  item.sub.forEach(sub => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.componentName,
      meta: sub.meta,
      component: () => import(`@/pages/${sub.componentName}`)
    });
  });
});

export default new Router({ routes });

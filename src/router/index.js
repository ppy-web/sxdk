import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import View from "@/components/View.vue";

import Home from "@/views/Home.vue"
import ClockIn from "@/views/ClockIn.vue"
import History from "@/views/History.vue"
import Detail from "@/views/Detail.vue"

const routes = [
  {
    path: '/',
    component: ClockIn,
    meta: {
      title: '校外实习打卡'
    },
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '校外实习打卡'
    },
  },
  {
    path: '/history',
    component: View,
    redirect: "/history/list",
    children: [
      {
        path: "list",
        name: "History",
        component: History,
        meta: {
          keepAlive: true,
          deep: 1,
          title: "打卡记录"
        },
      },
      {
        path: "detail/:id",
        name: "Detail",
        component: Detail,
        meta: {
          keepAlive: false,
          deep: 2,
          title: "查看详情"
        },
      },
    ],
  },

];

const router = new VueRouter({
  mode: "hash",
  routes: routes
});
// 标题
router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});
export default router;

import Vue from "vue";
import Router from "vue-router";

import maps from "@/components/map";

import vr from "@/components/vrdemo";

Vue.use(Router);

let router =  new Router({
  routes: [
    {
      path: "/",
      name: "maps",
      component: maps,     
      meta: {
        keepAlive: true // 需要被缓存
      } 
    },
    {
      path: "/maps",
      name: "maps",
      component: maps,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/vr",
      name: "vr",
      component: vr,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: "/home",
      name: "home",
      component: ()=> import("@/components/home") ,
//    meta: {
//      keepAlive: true // 需要被缓存
//    }
    },
    {
      path: "/min",
      name: "min",
      component: ()=> import("@/components/mixins") ,
    },
    {
      path: "/father",
      name: "father",
      component: ()=> import("@/components/father/index") ,
    },
  ]
});
export default router;

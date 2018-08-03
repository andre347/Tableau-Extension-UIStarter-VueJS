import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Configure from "@/components/Configure";
import About from "@/components/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/index",
      name: "Main",
      component: Main
    },
    {
      path: "/configure",
      name: "Configure",
      component: Configure
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});

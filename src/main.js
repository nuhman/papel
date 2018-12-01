// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import { routes } from "./routes";
import Vuex from "vuex";
import { appstore } from "./appstore";
import "./firebase";
import VueFire from "vuefire";

Vue.config.productionTip = false;

Vue.use(VueFire);

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

Vue.use(Vuex);

const store = new Vuex.Store(appstore);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});

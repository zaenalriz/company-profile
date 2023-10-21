import "./assets/style.css";
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
const routes = [{ path: "/", component: Home }];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(router).mount("#app");

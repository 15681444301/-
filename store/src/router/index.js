import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Register from "../views/register";
import Home from "../views/Home";
import Shopping from "../views/Shopping";
import News from "../views/News";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/Home", component: Home },
  { path: "/shopping", component: Shopping },
  { path: "/News", component: News },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

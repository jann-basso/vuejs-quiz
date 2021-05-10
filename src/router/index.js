import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import EasyQuiz from "../views/EasyQuiz.vue";
import MediumQuiz from "../views/MediumQuiz.vue";
import HardQuiz from "../views/HardQuiz.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/easy-quiz",
    name: "easy-quiz",
    component: EasyQuiz
  },
  {
    path: "/medium-quiz",
    name: "medium-quiz",
    component: MediumQuiz
  },
  {
    path: "/hard-quiz",
    name: "hard-quiz",
    component: HardQuiz
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;

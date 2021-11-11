import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Update from "../pages/Update.vue";

const history = createWebHistory();
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/update/:id/:title/:description",
    name: "Update",
    component: Update,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;

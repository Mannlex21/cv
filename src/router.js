import VueRouter from "vue-router";
import Principal from "./pages/principal/viewComponent.vue";

const routes = [
  { path: "/", redirect: "/principal", component: Principal },
  { path: "/principal", component: Principal }
];

const router = new VueRouter({
  routes
});
export default router;

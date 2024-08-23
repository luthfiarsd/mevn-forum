import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardView from "@/views/DashboardView.vue";
import { useAuthStore } from "@/stores/authStores";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: {
        requiredAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to, from) => {
  const authStore = await useAuthStore();
  if (to.meta.requiredAuth && !authStore.currentUser) {
    alert("Blocked access, login/register first to access this page.");
    return {
      path: "/",
    };
  }
});

export default router;

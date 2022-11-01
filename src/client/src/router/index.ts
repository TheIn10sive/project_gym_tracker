import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/view",
  },
  {
    path: "/view",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/view/profile",
      },
      {
        path: "profile",
        component: () => import("@/views/profile/ProfilePage.vue"),
      },
      {
        path: "workout",
        component: () => import("@/views/workout/WorkoutPage.vue"),
      },
      {
        path: "archive",
        component: () => import("@/views/archive/ArchivePage.vue"),
      },
      {
        path: "auth",
        component: () => import("@/views/auth/AuthPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
